#!/usr/bin/env python3
"""Prove that verify_all.py's drift checks actually catch drift (scratch-copy mutation test).

For each injection: copy this design-repo AND a symlink to the sibling source tree (when present) into a
fresh temp dir, inject one defect, run extraction/verify_all.py there, and require that it FAILS on the
named check. Finally the untouched real repo must PASS. Exit 1 if any injection goes uncaught.

Usage: python3 extraction/prove_drift.py
Repo root derived from this file's location; the real repo is never modified.
"""
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.dirname(ROOT)
HAS_SRC = os.path.exists(os.path.join(SRC, "src", "routes.jsx"))


def jload(p):
    with open(p, encoding="utf-8") as fh:
        return json.load(fh)


def jsave(p, d):
    with open(p, "w", encoding="utf-8") as fh:
        json.dump(d, fh, indent=2, ensure_ascii=False)


def first_citation(scratch):
    """A real section citation and its file, for citation injections."""
    p = os.path.join(scratch, "sections", "hero.home.json")
    d = jload(p)
    return p, d


def inj_phantom(s):
    p = os.path.join(s, "tokens/llm/component-allowlist.json"); d = jload(p)
    d["components"].append({"id": "hero.video-wall", "kind": "section", "file": "sections/hero.video-wall.json", "settableProps": [], "contentFields": [], "variants": [], "assetRoles": []}); jsave(p, d)


def inj_orphan(s):
    p = os.path.join(s, "tokens/llm/component-allowlist.json"); d = jload(p)
    d["components"] = [c for c in d["components"] if c["id"] != "content.faq"]; jsave(p, d)


def inj_out_of_range(s):
    p, d = first_citation(s)
    d["measuredFrom"][0] = "src/pages/Home.jsx:9000"; jsave(p, d)
    a = os.path.join(s, "extraction/citation-anchors.json"); ad = jload(a); ad["anchors"]["src/pages/Home.jsx:9000"] = "<Hero />"; jsave(a, ad)


def inj_wrong_lines(s):
    """In-range but wrong: shift a real citation by a few lines (still inside the file)."""
    p, d = first_citation(s)
    c = d["measuredFrom"][1]  # src/components/Hero.jsx:<n>
    path, ln = c.rsplit(":", 1)
    shifted = "%s:%d" % (path, int(ln.split("-")[0]) + 3)
    d["measuredFrom"][1] = shifted; jsave(p, d)
    a = os.path.join(s, "extraction/citation-anchors.json"); ad = jload(a); ad["anchors"][shifted] = ad["anchors"][c]; jsave(a, ad)


def inj_unanchored(s):
    p, d = first_citation(s)
    d["measuredFrom"].append("src/App.jsx:2"); jsave(p, d)


def inj_count(s):
    p = os.path.join(s, "registry.manifest.json"); d = jload(p); d["counts"]["sections"] += 1; jsave(p, d)


def inj_allowlist_version(s):
    p = os.path.join(s, "registry.manifest.json"); d = jload(p); d["allowlistVersion"] = "9.9.9"; jsave(p, d)


def inj_pinned(s):
    p = os.path.join(s, "assets/asset-roles.json"); d = jload(p); d["roles"]["customer-logo"]["generationPolicy"] = "may-generate-new"; jsave(p, d)


def inj_abs_path(s):
    with open(os.path.join(s, "README.md"), "a", encoding="utf-8") as fh:
        fh.write("\nsource: " + "/" + "Users/someone/project\n")


def inj_entrypoint(s):
    p = os.path.join(s, "registry.manifest.json"); d = jload(p); d["entryPoints"]["spec"] = "../CLONE_SPEC.md"; jsave(p, d)


def inj_graph_check(s):
    p = os.path.join(s, "compatibility/graph.json"); d = jload(p); d["rules"][0]["enforcedBy"]["check"] = "check_nothing"; jsave(p, d)


def inj_schema(s):
    p = os.path.join(s, "schema/pagespec.schema.json"); d = jload(p); d["definitions"]["motion"]["additionalProperties"] = True
    with open(p, "w", encoding="utf-8") as fh:
        fh.write(json.dumps(d, indent=2, sort_keys=True, ensure_ascii=False) + "\n")


def inj_token(s):
    p = os.path.join(s, "sections/hero.home.json"); d = jload(p); d["tokensUsed"].append("semanticColor.surface.neon"); jsave(p, d)


def inj_readme(s):
    p = os.path.join(s, "README.md")
    with open(p, encoding="utf-8") as fh:
        t = fh.read()
    t = re.sub(r"\| sections \| \d+ \|", "| sections | 12 |", t)
    with open(p, "w", encoding="utf-8") as fh:
        fh.write(t)


def inj_motion_field(s):
    p = os.path.join(s, "sections/hero.home.json"); d = jload(p); d["motion"]["inventedAnimation"] = "spin"; jsave(p, d)


INJECTIONS = [
    ("phantom allowlist entry", inj_phantom, "allowlist-parity"),
    ("orphan contract (allowlist entry removed)", inj_orphan, "allowlist-parity"),
    ("out-of-range citation", inj_out_of_range, "citations"),
    ("in-range citation at the wrong lines", inj_wrong_lines, "citations"),
    ("citation without an anchor record", inj_unanchored, "citation-anchors"),
    ("manifest count hand-bumped", inj_count, "counts"),
    ("allowlistVersion drift", inj_allowlist_version, "allowlist-version"),
    ("pinned role changed to a different valid policy", inj_pinned, "asset-roles"),
    ("absolute local path in README", inj_abs_path, "no-absolute-paths"),
    ("entryPoint outside the package", inj_entrypoint, "entrypoints"),
    ("graph rule names a non-existent check", inj_graph_check, "graph-validator"),
    ("schema hand-edited (motion opened)", inj_schema, "schema-fresh"),
    ("unresolvable token reference", inj_token, "token-refs"),
    ("README count drift", inj_readme, "readme-counts"),
    ("invented motion field in a contract", inj_motion_field, "motion-closed"),
]


def run_verify(repo):
    r = subprocess.run([sys.executable, os.path.join(repo, "extraction", "verify_all.py")], capture_output=True, text=True)
    return r.returncode, r.stdout


def main():
    ok_all = True
    for name, fn, check in INJECTIONS:
        if not HAS_SRC and check == "citations":
            print("SKIP  %-48s (sibling source tree absent: citation bounds/anchors cannot be checked)" % name)
            continue
        tmp = tempfile.mkdtemp(prefix="fp-drift-")
        try:
            scratch = os.path.join(tmp, "design-repo")
            shutil.copytree(ROOT, scratch, ignore=shutil.ignore_patterns("__pycache__"))
            if HAS_SRC:
                for entry in os.listdir(SRC):
                    if entry != "design-repo" and not entry.endswith(".zip"):
                        os.symlink(os.path.join(SRC, entry), os.path.join(tmp, entry))
            fn(scratch)
            code, out = run_verify(scratch)
            caught = code != 0 and re.search(r"^FAIL %s\b" % re.escape(check), out, re.M)
            ok_all &= bool(caught)
            print("%s %-48s -> %s" % ("CAUGHT" if caught else "MISSED", name, ("FAIL " + check) if caught else "verify_all exit %d" % code))
        finally:
            shutil.rmtree(tmp, ignore_errors=True)
    code, out = run_verify(ROOT)
    print("REAL REPO verify_all exit %d (%s)" % (code, out.strip().splitlines()[-1]))
    ok_all &= code == 0
    print("\nDRIFT PROOF %s" % ("PASSED" if ok_all else "FAILED"))
    sys.exit(0 if ok_all else 1)


if __name__ == "__main__":
    main()
