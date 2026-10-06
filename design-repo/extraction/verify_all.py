#!/usr/bin/env python3
"""One-shot integrity check for this design-repo. Exit 1 on any FAIL; WARN never fails.

Checks (each prints PASS/FAIL/WARN with its name):
  json-parse            every *.json parses
  no-absolute-paths     no absolute home-directory, drive-letter or file-URL paths in any text file
  entrypoints           registry.manifest.json entryPoints exist and are inside this folder (no ../, no absolute)
  schema-fresh          schema/pagespec.schema.json == extraction/build_schema.py output (byte compare)
  example-schema        example validates against the Draft-07 schema with 0 errors
  example-semantic      example passes schema/semantic_validate.py with 0 errors
  allowlist-parity      allowlist ids <-> contract files (no phantom entries, no orphans), section props/fields/variants
  allowlist-version     manifest.allowlistVersion == tokens/llm/component-allowlist.json allowlistVersion
  counts                manifest.counts recomputed from the files (--update-counts rewrites them)
  readme-counts         README counts block equals manifest.counts
  citations             every path:line[-line] citation resolves in the source project (bounds + recorded anchor
                        text on the first cited line); degrades to WARN when the sibling source tree is absent
  citation-anchors      every citation in the repo has an anchor record (no unanchored citations)
  graph-validator       graph rule ids == validator GRAPH_RULE_IDS; every enforcedBy.check exists; exception templates exist
  templates             template nodes reference real sections; usedOnTemplates matches templates.json
  routes                every route template exists; concrete URL total matches; (source present) sitemap fully covered
  token-refs            every {cat.name} / tokensUsed reference resolves in tokens/llm/token-catalog.json; policy keys real
  asset-roles           closed role enum; contract roles exist; pinned values hold; schema assetRef defs == roles
  motion-closed         contract motion fields/patterns/fallbacks within the schema's closed vocabulary
  contracts             every section: closed content, maxChars on every text field, reducedMotionFallback present
Repo root is derived from this file's location. Stdlib + jsonschema.
"""
import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.dirname(ROOT)
sys.path.insert(0, os.path.join(ROOT, "schema"))
sys.path.insert(0, os.path.join(ROOT, "extraction"))

FAILS, WARNS = [], []


def report(name, problems, warn_only=False, note=""):
    if problems:
        if warn_only:
            WARNS.append(name)
            print("WARN %-18s %s" % (name, note or "; ".join(problems[:5])))
        else:
            FAILS.append(name)
            print("FAIL %-18s %d problem(s): %s" % (name, len(problems), " | ".join(problems[:6])))
    else:
        print("PASS %-18s %s" % (name, note))


def load(rel):
    with open(os.path.join(ROOT, rel), encoding="utf-8") as fh:
        return json.load(fh)


def all_files():
    out = []
    for dp, dn, fn in os.walk(ROOT):
        dn[:] = [d for d in dn if d not in ("__pycache__",)]
        for f in fn:
            if f.endswith((".json", ".py", ".md", ".txt")) or f == ".gitignore":
                out.append(os.path.join(dp, f))
    return sorted(out)


def contracts(kind):
    out = {}
    for p in sorted(glob.glob(os.path.join(ROOT, kind, "*.json"))):
        with open(p, encoding="utf-8") as fh:
            c = json.load(fh)
        out[c["id"]] = (c, os.path.relpath(p, ROOT))
    return out


def walk(o, cb, path=""):
    if isinstance(o, dict):
        for k, v in o.items():
            cb(k, v, path)
            walk(v, cb, path + "/" + k)
    elif isinstance(o, list):
        for i, v in enumerate(o):
            walk(v, cb, path + "/%d" % i)


def main():
    update = "--update-counts" in sys.argv
    jsons = {}
    probs = []
    for p in all_files():
        if p.endswith(".json"):
            try:
                with open(p, encoding="utf-8") as fh:
                    jsons[os.path.relpath(p, ROOT)] = json.load(fh)
            except Exception as e:  # noqa: BLE001
                probs.append("%s: %s" % (os.path.relpath(p, ROOT), e))
    report("json-parse", probs, note="%d files" % len(jsons))

    pat = re.compile("/" + "Users/" + r"|/home/[a-z]|[A-Z]:\\\\|file:///")
    probs = []
    for p in all_files():
        with open(p, encoding="utf-8") as fh:
            for i, line in enumerate(fh, 1):
                if pat.search(line) and "pat = re.compile" not in line:
                    probs.append("%s:%d" % (os.path.relpath(p, ROOT), i))
    report("no-absolute-paths", probs)

    man = load("registry.manifest.json")
    probs = []

    def ep(v):
        if isinstance(v, str):
            if v.startswith("..") or v.startswith("/") or "/../" in v:
                probs.append("outside package: " + v)
            elif not os.path.exists(os.path.join(ROOT, v)):
                probs.append("missing: " + v)
        elif isinstance(v, list):
            for x in v:
                ep(x)
        elif isinstance(v, dict):
            for x in v.values():
                ep(x)
    ep(man["entryPoints"])
    report("entrypoints", probs)

    import build_schema
    with open(os.path.join(ROOT, "schema", "pagespec.schema.json"), encoding="utf-8") as fh:
        report("schema-fresh", [] if fh.read() == build_schema.render() else ["schema differs from build output"])

    import jsonschema
    schema = load("schema/pagespec.schema.json")
    example = load("schema/example.pagespec.json")
    errs = list(jsonschema.Draft7Validator(schema).iter_errors(example))
    report("example-schema", ["%s: %s" % ("/".join(map(str, e.absolute_path)), e.message[:120]) for e in errs], note="Draft7Validator: %d errors" % len(errs))
    import semantic_validate as sv
    e2, w2 = sv.validate(example, repo_root=ROOT)
    report("example-semantic", e2, note="%d errors, %d warnings" % (len(e2), len(w2)))

    # allowlist parity
    allow = load("tokens/llm/component-allowlist.json")
    prims, comps, secs = contracts("primitives"), contracts("components"), contracts("sections")
    real = {}
    for d in (prims, comps, secs):
        for k, (c, rel) in d.items():
            real[k] = (c, rel)
    probs = []
    seen = set()
    node_props = sorted(schema["definitions"]["node"]["properties"])
    for a in allow["components"]:
        if a["id"] in seen:
            probs.append("duplicate allowlist id " + a["id"])
        seen.add(a["id"])
        if a["id"] not in real:
            probs.append("phantom allowlist entry: " + a["id"])
            continue
        c, rel = real[a["id"]]
        if rel != a["file"]:
            probs.append("%s file %s != %s" % (a["id"], a["file"], rel))
        if a["kind"] == "section":
            if sorted(a["settableProps"]) != node_props:
                probs.append("%s settableProps != schema node properties" % a["id"])
            if a["contentFields"] != sorted(c["content"]["fields"]):
                probs.append("%s contentFields drift" % a["id"])
            if a["variants"] != [v["name"] for v in c["variants"]]:
                probs.append("%s variants drift" % a["id"])
        elif sorted(a["settableProps"]) != sorted(c["props"]):
            probs.append("%s settableProps drift" % a["id"])
    for k in real:
        if k not in seen:
            probs.append("orphan contract (no allowlist entry): " + k)
    roles = load("assets/asset-roles.json")
    if allow["assetRoleEnum"] != sorted(roles["roles"]):
        probs.append("allowlist assetRoleEnum != asset-roles.json")
    report("allowlist-parity", probs, note="%d entries / %d contract files" % (len(allow["components"]), len(real)))
    report("allowlist-version", [] if man["allowlistVersion"] == allow["allowlistVersion"] else ["manifest %s != allowlist %s" % (man["allowlistVersion"], allow["allowlistVersion"])], note=allow["allowlistVersion"])

    # counts
    tpl = load("templates/templates.json")["templates"]
    routes = load("templates/routes.json")
    cat = load("tokens/llm/token-catalog.json")
    tok_counts = {}
    for layer in ("00-foundation", "10-semantic", "20-component", "30-layout"):
        n = 0
        for p in glob.glob(os.path.join(ROOT, "tokens", layer, "*.json")):
            def cnt(o):
                # a token = any cited entry (a dict carrying measuredFrom); containers are recursed
                if isinstance(o, dict):
                    if "measuredFrom" in o:
                        return 1
                    return sum(cnt(v) for k, v in o.items() if not k.startswith("$"))
                if isinstance(o, list):
                    return sum(cnt(v) for v in o)
                return 0
            with open(p, encoding="utf-8") as fh:
                n += cnt(json.load(fh))
        tok_counts[layer] = n
    counts = {
        "tokens": {"foundation": tok_counts["00-foundation"], "semantic": tok_counts["10-semantic"], "component": tok_counts["20-component"], "layout": tok_counts["30-layout"], "total": sum(tok_counts.values()),
                   "themeResolved": {os.path.basename(p)[:-5]: len(json.load(open(p, encoding="utf-8"))["tokens"]) for p in sorted(glob.glob(os.path.join(ROOT, "tokens", "themes", "*.json")))}},
        "primitives": len(prims), "components": len(comps), "sections": len(secs), "templates": len(tpl),
        "routePatterns": len(routes["routes"]), "pageRoutes": sum(1 for r in routes["routes"] if r["kind"] == "page"), "cmsCollections": sum(1 for r in routes["routes"] if r["kind"] == "cms"),
        "concreteUrls": routes["concreteUrlTotal"], "redirects": len(routes["redirects"]), "graphRules": len(load("compatibility/graph.json")["rules"]),
        "assetRoles": len(roles["roles"]), "allowlistEntries": len(allow["components"]),
    }
    if update:
        man["counts"] = counts
        with open(os.path.join(ROOT, "registry.manifest.json"), "w", encoding="utf-8", newline="\n") as fh:
            fh.write(json.dumps(man, indent=2, ensure_ascii=False) + "\n")
        print("UPDATED manifest counts")
    report("counts", [] if man["counts"] == counts else ["manifest counts drift: %s" % json.dumps({k: (man["counts"].get(k), v) for k, v in counts.items() if man["counts"].get(k) != v})], note=json.dumps({k: v for k, v in counts.items() if k != "tokens"}))
    with open(os.path.join(ROOT, "README.md"), encoding="utf-8") as fh:
        readme = fh.read()
    m = re.search(r"<!-- counts:start -->(.*?)<!-- counts:end -->", readme, re.S)
    probs = []
    if not m:
        probs.append("README has no counts block")
    else:
        block = m.group(1)
        flat = {"tokens (total)": counts["tokens"]["total"], "primitives": counts["primitives"], "components": counts["components"], "sections": counts["sections"], "templates": counts["templates"],
                "route patterns": counts["routePatterns"], "concrete URLs": counts["concreteUrls"], "asset roles": counts["assetRoles"], "graph rules": counts["graphRules"]}
        for k, v in flat.items():
            if "| %s | %s |" % (k, v) not in block:
                probs.append("README '%s' is not %s" % (k, v))
    report("readme-counts", probs)

    # citations
    anchors = load("extraction/citation-anchors.json")["anchors"]
    cites = []

    def cb(k, v, path):
        if k == "measuredFrom" or k in ("specCite", "codeCite"):
            for c in (v if isinstance(v, list) else [v]):
                if isinstance(c, str):
                    cites.append(c)
    for rel, doc in jsons.items():
        if rel.endswith("citation-anchors.json") or rel.startswith("schema/"):
            continue
        walk(doc, cb)
    cre = re.compile(r"^([\w./@ -]+):(\d+)(?:-(\d+))?$")
    probs, unanchored = [], []
    src_present = os.path.exists(os.path.join(SRC, "src", "routes.jsx"))
    flines = {}
    for c in sorted(set(cites)):
        m = cre.match(c)
        if not m:
            probs.append("bad citation format: " + c)
            continue
        if c not in anchors:
            unanchored.append(c)
        if not src_present:
            continue
        path, a, b = m.group(1), int(m.group(2)), int(m.group(3) or m.group(2))
        fp = os.path.join(SRC, path)
        if not os.path.isfile(fp):
            probs.append("missing source file: " + c)
            continue
        if fp not in flines:
            with open(fp, encoding="utf-8") as fh:
                flines[fp] = fh.read().split("\n")
        L = flines[fp]
        if a < 1 or b < a or b > len(L):
            probs.append("out of range (%d lines): %s" % (len(L), c))
            continue
        anc = anchors.get(c)
        if anc:
            line = L[a - 1]
            ok = re.search(anc[3:], line) if anc.startswith("re:") else (anc in line)
            if not ok:
                probs.append("anchor mismatch: %s expects %r" % (c, anc[:40]))
    if src_present:
        report("citations", probs, note="%d distinct citations resolved against the source project" % len(set(cites)))
    else:
        report("citations", ["source tree absent"], warn_only=True, note="sibling source tree not present: %d citations checked for format only (bounds/anchors skipped)" % len(set(cites)))
        if probs:
            report("citation-format", probs)
    report("citation-anchors", unanchored)

    # graph <-> validator
    graph = load("compatibility/graph.json")
    probs = []
    gids = [r["id"] for r in graph["rules"]]
    if sorted(gids) != sorted(sv.GRAPH_RULE_IDS):
        probs.append("graph ids %s != validator %s" % (sorted(set(gids) ^ set(sv.GRAPH_RULE_IDS)), ""))
    tids = {t["id"] for t in tpl}
    for r in graph["rules"]:
        if not callable(getattr(sv, r["enforcedBy"]["check"], None)):
            probs.append("%s: enforcedBy.check %s does not exist" % (r["id"], r["enforcedBy"]["check"]))
        if r["severity"] not in ("error", "warn"):
            probs.append("%s severity %s" % (r["id"], r["severity"]))
        for e in r["exceptions"]:
            if e["template"] not in tids:
                probs.append("%s exception template %s unknown" % (r["id"], e["template"]))
    report("graph-validator", probs, note="%d rules" % len(gids))

    # templates
    probs = []
    for t in tpl:
        for nd in t["nodes"]:
            if nd["section"] not in secs:
                probs.append("%s -> unknown section %s" % (t["id"], nd["section"]))
            elif nd.get("variant") and nd["variant"] not in [v["name"] for v in secs[nd["section"]][0]["variants"]]:
                probs.append("%s pins unknown variant %s/%s" % (t["id"], nd["section"], nd["variant"]))
    for sid, (c, _) in secs.items():
        used = sorted({t["id"] for t in tpl for nd in t["nodes"] if nd["section"] == sid})
        if used != c.get("usedOnTemplates"):
            probs.append("%s usedOnTemplates drift" % sid)
        if not used:
            probs.append("%s unused" % sid)
    report("templates", probs, note="%d templates" % len(tpl))

    # routes
    probs = []
    total = 0
    bound = set()
    for r in routes["routes"]:
        total += r["concreteUrlCount"]
        if r.get("template"):
            bound.add(r["template"])
            if r["template"] not in tids:
                probs.append("route %s -> unknown template" % r["path"])
        else:
            for t in r["templateByEntryField"]["map"].values():
                bound.add(t)
                if t not in tids:
                    probs.append("route %s -> unknown template %s" % (r["path"], t))
    for o in routes["concreteOverrides"]:
        bound.add(o["template"])
    bound.add(routes["catchAll"]["template"])
    if total != routes["concreteUrlTotal"]:
        probs.append("concreteUrlTotal %s != %s" % (routes["concreteUrlTotal"], total))
    for t in tids - bound:
        probs.append("template %s has no route" % t)
    note = "%d patterns, %d concrete URLs" % (len(routes["routes"]), total)
    if src_present:
        urls = set()
        for r in routes["routes"]:
            if r["kind"] == "page":
                urls.add(r["path"])
            else:
                with open(os.path.join(SRC, r["dataFile"]), encoding="utf-8") as fh:
                    for e in json.load(fh):
                        urls.add("/%s/%s" % (r["collection"], e["slug"]))
        with open(os.path.join(SRC, "sitemap-routes.txt"), encoding="utf-8") as fh:
            sm = {l.strip() for l in fh if l.strip()}
        if len(urls) != total:
            probs.append("source yields %d URLs, routes.json says %d" % (len(urls), total))
        if sm - urls:
            probs.append("sitemap URLs without a route: %s" % sorted(sm - urls)[:5])
        note += "; sitemap %d URLs all covered" % len(sm)
    report("routes", probs, note=note)

    # token refs
    probs = []
    names = {k: set(v["names"]) for k, v in cat.items() if isinstance(v, dict) and "names" in v}

    def resolve(ref):
        k, _, n = ref.partition(".")
        return k in names and n in names[k]
    for p in glob.glob(os.path.join(ROOT, "tokens", "**", "*.json"), recursive=True):
        if "/llm/" in p:
            continue
        with open(p, encoding="utf-8") as fh:
            txt = fh.read()
        for ref in re.findall(r"\{([a-zA-Z]+\.[^{}\s\"]+)\}", txt):
            if not resolve(ref):
                probs.append("%s: {%s}" % (os.path.relpath(p, ROOT), ref))
    for d in (prims, comps, secs):
        for k, (c, rel) in d.items():
            for ref in c.get("tokensUsed", []):
                if not resolve(ref):
                    probs.append("%s tokensUsed %s" % (rel, ref))
    pol = load("tokens/llm/token-policy.json")
    for k in pol["rawValueRestrictions"]:
        if k not in names:
            probs.append("policy category %s is not a catalog key" % k)
    for s in pol["pageSpecTokenFields"]["node.surface"]["allowed"]:
        if s not in names["semanticColor"]:
            probs.append("policy surface %s not in catalog" % s)
    report("token-refs", probs, note="catalog keys: %d" % len(names))

    # asset roles
    probs = []
    if roles.get("rolesEnumClosed") is not True:
        probs.append("rolesEnumClosed must be true")
    for rid, r in roles["roles"].items():
        if r["generationPolicy"] not in roles["generationPolicyEnum"]:
            probs.append("%s policy %s" % (rid, r["generationPolicy"]))
        if r["generatedInstanceRef"] not in roles["generatedInstanceRefEnum"]:
            probs.append("%s ref mode %s" % (rid, r["generatedInstanceRef"]))
    for rid, pin in roles["pinnedRoles"].items():
        if rid.startswith("$"):
            continue
        for k, v in pin.items():
            if roles["roles"].get(rid, {}).get(k) != v:
                probs.append("pinned %s.%s is %r, must be %r" % (rid, k, roles["roles"].get(rid, {}).get(k), v))
    used_roles = set()

    def rcb(k, v, path):
        if k == "assetRole":
            used_roles.add(v)
    for d in (prims, comps, secs):
        for k, (c, rel) in d.items():
            walk(c, rcb)
    for r in used_roles - set(roles["roles"]):
        probs.append("contract uses unknown role %s" % r)
    defs = sorted(k[len("assetRef."):] for k in schema["definitions"] if k.startswith("assetRef."))
    if defs != sorted(roles["roles"]):
        probs.append("schema assetRef defs != roles")
    report("asset-roles", probs, note="%d roles, %d pinned" % (len(roles["roles"]), len([k for k in roles["pinnedRoles"] if not k.startswith("$")])))

    # motion closure
    probs = []
    mfields = set(schema["definitions"]["motion"]["properties"]) | {"reducedMotionImplemented", "measuredFrom", "note"}
    pats = set(build_schema.MOTION_PATTERNS)
    for d in (prims, comps, secs):
        for k, (c, rel) in d.items():
            m = c.get("motion")
            if not m:
                continue
            for f in m:
                if f not in mfields:
                    probs.append("%s motion.%s not in closed set" % (rel, f))
            if m.get("pattern") not in pats:
                probs.append("%s pattern %s" % (rel, m.get("pattern")))
            if m.get("reducedMotionFallback") not in build_schema.FALLBACKS:
                probs.append("%s fallback %s" % (rel, m.get("reducedMotionFallback")))
            if m.get("trigger") and m["trigger"] not in build_schema.TRIGGERS:
                probs.append("%s trigger %s" % (rel, m["trigger"]))
    if schema["definitions"]["motion"].get("additionalProperties") is not False:
        probs.append("schema motion is not closed")
    report("motion-closed", probs)

    # section contract hygiene
    probs = []

    def fcheck(fs, where):
        t = fs["type"]
        if t in ("string", "richtext-inline") and not isinstance(fs.get("maxChars"), int):
            probs.append(where + " missing maxChars")
        if "measuredFrom" not in fs and t != "object":
            probs.append(where + " missing measuredFrom")
        if t == "object":
            for n, f in fs["fields"].items():
                fcheck(f, where + "." + n)
        if t == "array":
            fcheck(fs["items"], where + "[]")
    for sid, (c, rel) in secs.items():
        if c["content"].get("additionalProperties") is not False:
            probs.append(sid + " content not closed")
        if "reducedMotionFallback" not in c["motion"]:
            probs.append(sid + " no reducedMotionFallback")
        for n, f in c["content"]["fields"].items():
            fcheck(f, sid + "." + n)
    report("contracts", probs, note="%d sections" % len(secs))

    print("\n%s: %d fail(s), %d warn(s)" % ("FAILED" if FAILS else "ALL CHECKS PASSED", len(FAILS), len(WARNS)))
    sys.exit(1 if FAILS else 0)


if __name__ == "__main__":
    main()
