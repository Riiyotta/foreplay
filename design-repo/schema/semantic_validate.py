#!/usr/bin/env python3
"""Semantic validator for Foreplay-clone PageSpecs: everything JSON Schema cannot express.

Usage:  python3 schema/semantic_validate.py <pagespec.json> [--json]
Exit:   1 when any error is reported, 0 otherwise (warnings never fail).
API:    validate(spec, repo_root=None, skip_schema=False) -> (errors, warnings)
Every message starts with a stable rule id followed by ": ".

Layers, in order:
  1. SCHEMA          Draft-07 validation against schema/pagespec.schema.json
  2. ROUTE_*         the route is bound to the declared template (templates/routes.json)
  3. TEMPLATE_*      nodes[] cross-referenced against THAT template's own node list (templates/templates.json):
                     missing required, extra section, order, pinned variant
  4. graph rules     every rule in compatibility/graph.json (severity + named exceptions read at runtime)
  5. per node        MAXCHARS, PERSON_PLACEHOLDER, MOTION_*, VARIANT_MISMATCH, ASSET_*, TOKEN_UNKNOWN
  6. repo            PINNED_ROLE_DRIFT (assets/asset-roles.json pinned values)
Stdlib + jsonschema. The repo root is derived from this file's location, never hardcoded.
"""
import glob
import json
import os
import re
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

STRUCTURAL_RULE_IDS = [
    "SCHEMA", "ROUTE_TEMPLATE_MISMATCH", "ROUTE_NEW", "TEMPLATE_UNKNOWN", "TEMPLATE_MISSING_REQUIRED", "TEMPLATE_EXTRA_SECTION",
    "TEMPLATE_ORDER", "TEMPLATE_VARIANT_MISMATCH", "MAXCHARS", "PERSON_PLACEHOLDER", "MOTION_NO_FALLBACK", "MOTION_PATTERN_NOT_ALLOWED",
    "MOTION_FIELD_UNKNOWN", "VARIANT_MISMATCH", "ASSET_ROLE_UNKNOWN", "ASSET_ROLE_MISMATCH", "ASSET_REF_POLICY", "TOKEN_UNKNOWN",
    "PINNED_ROLE_DRIFT", "SECTION_UNKNOWN",
]
GRAPH_RULE_IDS = [
    "SHELL_NAV_FIRST", "SHELL_TAIL_LAST", "FOOTER_ONLY_ABSENT_ON_PAID_LANDING", "ONE_HERO", "HERO_LEADS", "CTA_FINAL_BEFORE_FOOTER",
    "ONE_PER_PAGE", "NO_ADJACENT_SAME_SECTION", "HOME_ROUTE_ONLY", "THEME_SCOPED", "NO_OUTBOUND_SHELL_LINKS", "SHELL_CANONICAL",
    "CONTINUOUS_MOTION_BUDGET",
]
RULE_IDS = STRUCTURAL_RULE_IDS + GRAPH_RULE_IDS
PERSON_RE = re.compile(r"^‹[^›]+›$")
INTERNAL_RE = re.compile(r"^(/|#)")
REF_PATTERNS = {
    "placeholder-only": re.compile(r"^placeholder:[a-z0-9-]+(/[a-z0-9-]+)*$"),
    "file-or-placeholder": re.compile(r"^(placeholder:[a-z0-9-]+(/[a-z0-9-]+)*|file:/[^\s]+)$"),
    "any": re.compile(r"^(placeholder:[a-z0-9-]+(/[a-z0-9-]+)*|file:/[^\s]+|generated:[a-z0-9-]+)$"),
}


class Repo:
    def __init__(self, root):
        self.root = root

        def load(rel):
            with open(os.path.join(root, rel), encoding="utf-8") as fh:
                return json.load(fh)
        self.schema = load("schema/pagespec.schema.json")
        self.templates = {t["id"]: t for t in load("templates/templates.json")["templates"]}
        self.routes = load("templates/routes.json")
        self.graph = load("compatibility/graph.json")
        self.rules = {r["id"]: r for r in self.graph["rules"]}
        self.roles = load("assets/asset-roles.json")
        self.policy = load("tokens/llm/token-policy.json")
        self.catalog = load("tokens/llm/token-catalog.json")
        self.sections = {}
        for p in sorted(glob.glob(os.path.join(root, "sections", "*.json"))):
            with open(p, encoding="utf-8") as fh:
                c = json.load(fh)
            self.sections[c["id"]] = c


_CACHE = {}


def repo(root=None):
    root = root or REPO_ROOT
    if root not in _CACHE:
        _CACHE[root] = Repo(root)
    return _CACHE[root]


class Out:
    def __init__(self, R):
        self.R, self.errors, self.warnings = R, [], []

    def add(self, rule, msg, severity=None):
        sev = severity or (self.R.rules[rule]["severity"] if rule in self.R.rules else "error")
        (self.errors if sev == "error" else self.warnings).append("%s: %s" % (rule, msg))


def exempt(R, rule, template):
    return any(e["template"] == template for e in R.rules[rule]["exceptions"])


def key(n):
    return (n.get("section"), n.get("variant"))


def is_overlay(sid):
    return sid.startswith("overlay.") or sid == "shell.exit-intent-modal"


# ------------------------------------------------------------------ route + template
def check_route(R, spec, o):
    route, tpl = spec["route"], spec["template"]
    for ov in R.routes.get("concreteOverrides", []):
        if ov["url"] == route:
            if ov["template"] != tpl:
                o.add("ROUTE_TEMPLATE_MISMATCH", "%s is bound to %s, spec declares %s" % (route, ov["template"], tpl))
            return
    for r in R.routes["routes"]:
        if r["kind"] == "page" and r["path"] == route:
            if r["template"] != tpl:
                o.add("ROUTE_TEMPLATE_MISMATCH", "%s is bound to %s, spec declares %s" % (route, r["template"], tpl))
            return
        if r["kind"] == "cms" and route.startswith("/%s/" % r["collection"]) and route.count("/") == 2:
            slug = route.split("/")[2]
            if r.get("template"):
                if r["template"] != tpl:
                    o.add("ROUTE_TEMPLATE_MISMATCH", "%s is bound to %s, spec declares %s" % (r["path"], r["template"], tpl))
            else:
                by = r["templateByEntryField"]
                allowed = [by["entries"][slug]] if slug in by["entries"] else sorted(set(by["map"].values()))
                if tpl not in allowed:
                    o.add("ROUTE_TEMPLATE_MISMATCH", "%s allows %s, spec declares %s" % (route, allowed, tpl))
            return
    o.add("ROUTE_NEW", "%s is not an existing route; template %s accepted for a new page" % (route, tpl), "warn")


def check_template_sequence(R, spec, o):
    t = R.templates.get(spec["template"])
    if not t:
        o.add("TEMPLATE_UNKNOWN", spec["template"])
        return
    tnodes = t["nodes"]
    used = [False] * len(tnodes)
    ptr = 0
    for i, n in enumerate(spec["nodes"]):
        sid, var = key(n)
        match = None
        for j in range(ptr, len(tnodes)):
            tn = tnodes[j]
            if tn["section"] == sid and not used[j] and (tn.get("variant") in (None, var)):
                match = j
                break
        if match is None:
            same_sec = [j for j, tn in enumerate(tnodes) if tn["section"] == sid]
            if not same_sec:
                o.add("TEMPLATE_EXTRA_SECTION", "node %d %s is not part of template %s" % (i, sid, t["id"]))
            elif not any(tnodes[j].get("variant") in (None, var) for j in same_sec):
                pinned = [tnodes[j].get("variant") for j in same_sec]
                o.add("TEMPLATE_VARIANT_MISMATCH", "node %d %s variant %r; template %s pins %s" % (i, sid, var, t["id"], pinned))
            else:
                o.add("TEMPLATE_ORDER", "node %d %s appears out of template order (or more often than declared) for %s" % (i, sid, t["id"]))
            continue
        used[match] = True
        ptr = match + 1
    for j, tn in enumerate(tnodes):
        if tn["required"] and not used[j]:
            o.add("TEMPLATE_MISSING_REQUIRED", "template %s requires %s%s" % (t["id"], tn["section"], " (%s)" % tn["variant"] if tn.get("variant") else ""))


# ------------------------------------------------------------------ graph rules (names referenced by compatibility/graph.json enforcedBy.check)
def check_shell_order(R, spec, o):
    nodes, tpl = spec["nodes"], spec["template"]
    ids = [n["section"] for n in nodes]
    if not ids or ids[0] != "shell.navbar":
        o.add("SHELL_NAV_FIRST", "first node is %r" % (ids[0] if ids else None))
    if not ids or ids[-1] != "shell.exit-intent-modal":
        o.add("SHELL_TAIL_LAST", "last node must be shell.exit-intent-modal, got %r" % (ids[-1] if ids else None))
    has_footer = "shell.footer" in ids
    if has_footer:
        if len(ids) < 2 or ids[-2] != "shell.footer":
            o.add("SHELL_TAIL_LAST", "shell.footer must immediately precede shell.exit-intent-modal")
    else:
        if not exempt(R, "SHELL_TAIL_LAST", tpl):
            o.add("FOOTER_ONLY_ABSENT_ON_PAID_LANDING", "page has no shell.footer but template %s is not paid-landing" % tpl)
    if has_footer and exempt(R, "SHELL_TAIL_LAST", tpl):
        o.add("SHELL_TAIL_LAST", "template %s renders no footer (App.jsx hideFooterOn)" % tpl)


def check_one_hero(R, spec, o):
    heroes = [i for i, n in enumerate(spec["nodes"]) if n["section"].startswith("hero.")]
    if exempt(R, "ONE_HERO", spec["template"]):
        if heroes:
            o.add("ONE_HERO", "template %s is hero-less but has %d hero node(s)" % (spec["template"], len(heroes)))
    elif len(heroes) != 1:
        o.add("ONE_HERO", "expected exactly one hero.* node, found %d" % len(heroes))


def check_hero_leads(R, spec, o):
    ids = [n["section"] for n in spec["nodes"]]
    for i, s in enumerate(ids):
        if s.startswith("hero."):
            ok = i == 1 or (i == 2 and ids[1] == "nav.breadcrumb")
            if not ok:
                o.add("HERO_LEADS", "%s at position %d must follow shell.navbar (or nav.breadcrumb)" % (s, i))


def check_cta_final(R, spec, o):
    ids = [n["section"] for n in spec["nodes"]]
    for i, s in enumerate(ids):
        if s == "conversion.cta-final":
            rest = [x for x in ids[i + 1:] if not is_overlay(x)]
            if rest and rest[0] != "shell.footer":
                o.add("CTA_FINAL_BEFORE_FOOTER", "conversion.cta-final is followed by %s" % rest[0])


def check_one_per_page(R, spec, o):
    counts, pairs = {}, {}
    for n in spec["nodes"]:
        counts[n["section"]] = counts.get(n["section"], 0) + 1
        pairs[key(n)] = pairs.get(key(n), 0) + 1
    for sid, c in counts.items():
        con = R.sections.get(sid, {}).get("constraints", {})
        if con.get("onePerPage") and c > 1:
            o.add("ONE_PER_PAGE", "%s appears %d times" % (sid, c))
        if "maxPerPage" in con and c > con["maxPerPage"]:
            o.add("ONE_PER_PAGE", "%s appears %d times (max %d)" % (sid, c, con["maxPerPage"]))
        if con.get("distinctVariants") and any(pairs[k] > 1 for k in pairs if k[0] == sid):
            o.add("ONE_PER_PAGE", "%s repeats the same variant" % sid)


def check_no_adjacent_same(R, spec, o):
    ns = spec["nodes"]
    for a, b in zip(ns, ns[1:]):
        if key(a) == key(b):
            o.add("NO_ADJACENT_SAME_SECTION", "%s (%r) twice in a row" % key(a))


def check_home_route_only(R, spec, o):
    for n in spec["nodes"]:
        if R.sections.get(n["section"], {}).get("constraints", {}).get("homeRouteOnly") and spec["route"] != "/":
            o.add("HOME_ROUTE_ONLY", "%s is home-route only, route is %s" % (n["section"], spec["route"]))


def check_theme_scope(R, spec, o):
    theme = R.templates.get(spec["template"], {}).get("theme", "dark")
    for n in spec["nodes"]:
        want = R.sections.get(n["section"], {}).get("constraints", {}).get("theme")
        if want and want != theme:
            o.add("THEME_SCOPED", "%s belongs to the %s theme, template %s is %s" % (n["section"], want, spec["template"], theme))
        if n.get("surface") == "surface.contest" and theme != "contest":
            o.add("THEME_SCOPED", "surface.contest used outside the contest theme")


def check_shell_links(R, spec, o):
    for n in spec["nodes"]:
        sid = n["section"]
        if sid not in ("shell.navbar", "shell.footer"):
            continue
        c = R.sections[sid]
        removed = {r["label"].lower() for r in c.get("removedItems", [])}
        items = n.get("content", {}).get("items", [])
        for it in items:
            href, label = str(it.get("href", "")), str(it.get("label", ""))
            if not INTERNAL_RE.match(href):
                o.add("NO_OUTBOUND_SHELL_LINKS", "%s item %r links outside the site: %s" % (sid, label, href))
            if label.lower() in removed:
                o.add("NO_OUTBOUND_SHELL_LINKS", "%s recreates removed item %r" % (sid, label))
        canon = [(x["group"], x["label"], x["href"]) for x in c["canonical"]["items"]]
        got = [(x.get("group"), x.get("label"), x.get("href")) for x in items]
        if got != canon:
            o.add("SHELL_CANONICAL", "%s items differ from the canonical set (%d vs %d)" % (sid, len(got), len(canon)))


def check_motion_budget(R, spec, o):
    cont = set(R.graph["continuousMotionPatterns"])
    n = sum(1 for x in spec["nodes"] if x.get("motion", {}).get("pattern") in cont)
    if n > R.graph["motionBudget"]:
        o.add("CONTINUOUS_MOTION_BUDGET", "%d continuous motion patterns (budget %d)" % (n, R.graph["motionBudget"]))


GRAPH_CHECKS = [check_shell_order, check_one_hero, check_hero_leads, check_cta_final, check_one_per_page, check_no_adjacent_same,
                check_home_route_only, check_theme_scope, check_shell_links, check_motion_budget]


# ------------------------------------------------------------------ per node
def walk_fields(fields, value, path, cb):
    if not isinstance(value, dict):
        return
    for name, spec in fields.items():
        if name in value:
            walk_value(spec, value[name], "%s.%s" % (path, name), cb)


def walk_value(spec, v, path, cb):
    cb(spec, v, path)
    t = spec["type"]
    if t == "object":
        walk_fields(spec["fields"], v, path, cb)
    elif t == "array" and isinstance(v, list):
        for i, x in enumerate(v):
            walk_value(spec["items"], x, "%s[%d]" % (path, i), cb)


def check_node(R, spec, i, n, o):
    sid = n.get("section")
    c = R.sections.get(sid)
    if not c:
        o.add("SECTION_UNKNOWN", "node %d %r" % (i, sid))
        return
    m = n.get("motion") or {}
    if "reducedMotionFallback" not in m:
        o.add("MOTION_NO_FALLBACK", "node %d %s" % (i, sid))
    if m.get("pattern") != c["motion"]["pattern"]:
        o.add("MOTION_PATTERN_NOT_ALLOWED", "node %d %s uses %r; contract allows %r" % (i, sid, m.get("pattern"), c["motion"]["pattern"]))
    allowed_fields = set(R.schema["definitions"]["motion"]["properties"])
    for k in m:
        if k not in allowed_fields:
            o.add("MOTION_FIELD_UNKNOWN", "node %d %s motion.%s" % (i, sid, k))
    vnames = [v["name"] for v in c.get("variants", [])]
    if vnames and n.get("variant") not in vnames:
        o.add("VARIANT_MISMATCH", "node %d %s variant %r not in %s" % (i, sid, n.get("variant"), vnames))
    if not vnames and "variant" in n:
        o.add("VARIANT_MISMATCH", "node %d %s has no variants" % (i, sid))
    surf = n.get("surface")
    if surf is not None:
        allowed = R.policy["pageSpecTokenFields"]["node.surface"]["allowed"]
        if surf not in allowed or surf not in R.catalog["semanticColor"]["names"]:
            o.add("TOKEN_UNKNOWN", "node %d %s surface %r is not a catalog surface token" % (i, sid, surf))

    def cb(fs, v, path):
        t = fs["type"]
        where = "node %d %s%s" % (i, sid, path)
        if t in ("string", "richtext-inline") and isinstance(v, str):
            if len(v) > fs["maxChars"]:
                o.add("MAXCHARS", "%s has %d chars (max %d)" % (where, len(v), fs["maxChars"]))
            if fs.get("personIdentity") and not PERSON_RE.match(v):
                o.add("PERSON_PLACEHOLDER", "%s must be a ‹placeholder› (real people's names are never reproduced)" % where)
        if t == "assetRef":
            if not isinstance(v, dict):
                return
            role = v.get("assetRole")
            if role not in R.roles["roles"]:
                o.add("ASSET_ROLE_UNKNOWN", "%s role %r" % (where, role))
                return
            if role != fs["assetRole"]:
                o.add("ASSET_ROLE_MISMATCH", "%s declares %r, contract requires %r" % (where, role, fs["assetRole"]))
            mode = R.roles["roles"][role]["generatedInstanceRef"]
            pin = R.roles["pinnedRoles"].get(fs["assetRole"])
            if pin:
                mode = pin["generatedInstanceRef"]
            if not REF_PATTERNS[mode].match(str(v.get("ref", ""))):
                o.add("ASSET_REF_POLICY", "%s ref %r violates %s (%s)" % (where, v.get("ref"), mode, fs["assetRole"]))
    walk_fields(c["content"]["fields"], n.get("content", {}), "", cb)


def check_pinned_roles(R, o):
    for role, pin in R.roles["pinnedRoles"].items():
        if role.startswith("$"):
            continue
        cur = R.roles["roles"].get(role, {})
        for k, v in pin.items():
            if cur.get(k) != v:
                o.add("PINNED_ROLE_DRIFT", "%s.%s is %r, pinned %r" % (role, k, cur.get(k), v))


def validate(spec, repo_root=None, skip_schema=False):
    R = repo(repo_root)
    o = Out(R)
    if not skip_schema:
        import jsonschema
        for e in sorted(jsonschema.Draft7Validator(R.schema).iter_errors(spec), key=lambda e: list(e.absolute_path)):
            o.add("SCHEMA", "%s: %s" % ("/".join(map(str, e.absolute_path)), e.message[:300]))
    if not isinstance(spec, dict) or not isinstance(spec.get("nodes"), list) or "template" not in spec or "route" not in spec:
        return o.errors, o.warnings
    check_route(R, spec, o)
    check_template_sequence(R, spec, o)
    for chk in GRAPH_CHECKS:
        chk(R, spec, o)
    for i, n in enumerate(spec["nodes"]):
        if isinstance(n, dict):
            check_node(R, spec, i, n, o)
    check_pinned_roles(R, o)
    return o.errors, o.warnings


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(2)
    with open(sys.argv[1], encoding="utf-8") as fh:
        spec = json.load(fh)
    errors, warnings = validate(spec)
    if "--json" in sys.argv:
        print(json.dumps({"errors": errors, "warnings": warnings}, indent=2, ensure_ascii=False))
    else:
        for e in errors:
            print("ERROR", e)
        for w in warnings:
            print("WARN ", w)
        print("%d error(s), %d warning(s)" % (len(errors), len(warnings)))
    sys.exit(1 if errors else 0)


if __name__ == "__main__":
    main()
