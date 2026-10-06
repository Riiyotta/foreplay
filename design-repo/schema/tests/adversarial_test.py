#!/usr/bin/env python3
"""Adversarial suite: every rule must reject a bad instance, every control must pass.

Controls
  * schema/example.pagespec.json -> 0 errors (schema + semantic)
  * one synthesized minimal PageSpec per template in templates/templates.json (generic: built from the
    template's own node list and each section contract), bound to a real route of that template -> 0 errors
Mutations
  * each mutation lists the rule ids it must trigger; it passes only if ALL of them are reported as errors.
    Several run twice (with and without the JSON Schema layer) to prove the semantic layer independently.

Usage: python3 schema/tests/adversarial_test.py   (exit 1 on any failure)
Repo root derived from this file's location.
"""
import copy
import json
import os
import shutil
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, os.path.join(ROOT, "schema"))
import semantic_validate as sv  # noqa: E402

R = sv.repo(ROOT)
EXAMPLE = json.load(open(os.path.join(ROOT, "schema", "example.pagespec.json"), encoding="utf-8"))


# ------------------------------------------------------------------ synthesis
def synth_value(spec, path=""):
    t = spec["type"]
    if t in ("string", "richtext-inline"):
        return "‹name›" if spec.get("personIdentity") else "x" * min(spec["maxChars"], 8)
    if t == "route":
        return "/"
    if t == "route-or-url":
        return "/"
    if t == "boolean":
        return False
    if t == "integer":
        return spec.get("minimum", 0)
    if t == "enum":
        return spec["values"][0]
    if t == "assetRef":
        return {"assetRole": spec["assetRole"], "ref": "placeholder:%s/x" % spec["assetRole"]}
    if t == "object":
        return synth_fields(spec["fields"])
    if t == "array":
        return [synth_value(spec["items"]) for _ in range(spec["minItems"])]
    raise ValueError(t)


def synth_fields(fields):
    return {k: synth_value(v) for k, v in fields.items() if v.get("required")}


def synth_node(tn):
    c = R.sections[tn["section"]]
    n = {"section": c["id"]}
    vnames = [v["name"] for v in c.get("variants", [])]
    if vnames:
        n["variant"] = tn.get("variant") or vnames[0]
    if c["id"] in ("shell.navbar", "shell.footer"):
        content = synth_fields(c["content"]["fields"])
        content["items"] = [{"group": x["group"], "label": x["label"], "href": x["href"]} for x in c["canonical"]["items"]]
        n["content"] = content
    else:
        n["content"] = synth_fields(c["content"]["fields"])
    n["motion"] = {"pattern": c["motion"]["pattern"], "reducedMotionFallback": c["motion"]["reducedMotionFallback"]}
    return n


def route_for(tid):
    for ov in R.routes["concreteOverrides"]:
        if ov["template"] == tid:
            return ov["url"]
    for r in R.routes["routes"]:
        if r.get("template") == tid:
            if r["kind"] == "page":
                return r["path"]
            data_slug = "x"
            return "/%s/%s" % (r["collection"], data_slug)
        if r.get("templateByEntryField"):
            for slug, t in r["templateByEntryField"]["entries"].items():
                if t == tid:
                    return "/university/" + slug
    return "/new-page"


def synth_spec(tid):
    t = R.templates[tid]
    return {"pageSpecVersion": "1.0.0", "route": route_for(tid), "template": tid, "title": "Control " + tid,
            "nodes": [synth_node(tn) for tn in t["nodes"] if tn["required"]]}


# ------------------------------------------------------------------ helpers
def idx(spec, section, variant=None):
    for i, n in enumerate(spec["nodes"]):
        if n["section"] == section and (variant is None or n.get("variant") == variant):
            return i
    raise KeyError(section)


def node(spec, section, variant=None):
    return spec["nodes"][idx(spec, section, variant)]


RESULTS = []


def control(name, spec, root=None):
    errors, warnings = sv.validate(spec, repo_root=root)
    ok = not errors
    RESULTS.append((ok, "CONTROL  %-52s errors=%d warnings=%d%s" % (name, len(errors), len(warnings), "" if ok else "  " + "; ".join(errors[:3]))))


def mutation(name, mutate, expect, skip_schema=False, base=None, root=None):
    spec = copy.deepcopy(base or EXAMPLE)
    mutate(spec)
    errors, _ = sv.validate(spec, repo_root=root, skip_schema=skip_schema)
    got = {e.split(":")[0] for e in errors}
    missing = [r for r in expect if r not in got]
    ok = not missing
    RESULTS.append((ok, "MUTATION %-52s expect=%s %s" % (name + (" [semantic-only]" if skip_schema else ""), ",".join(expect), "REJECTED" if ok else "NOT CAUGHT (missing %s; got %s)" % (missing, sorted(got)))))


def both(name, mutate, schema_expect, semantic_expect):
    mutation(name, mutate, schema_expect)
    mutation(name, mutate, semantic_expect, skip_schema=True)


# ------------------------------------------------------------------ controls
control("example.pagespec.json (home)", EXAMPLE)
for tid in sorted(R.templates):
    control("synth template %s" % tid, synth_spec(tid))

# ------------------------------------------------------------------ mutations
# schema layer
mutation("wrong template enum", lambda s: s.update(template="landing-page"), ["SCHEMA"])
mutation("invented section id", lambda s: s["nodes"].insert(2, {"section": "hero.video-wall", "content": {}, "motion": {"pattern": "none", "reducedMotionFallback": "none-needed"}}), ["SCHEMA", "SECTION_UNKNOWN"])
mutation("missing required content field", lambda s: node(s, "hero.home")["content"].pop("title"), ["SCHEMA"])
both("missing reducedMotionFallback", lambda s: node(s, "hero.home")["motion"].pop("reducedMotionFallback"), ["SCHEMA", "MOTION_NO_FALLBACK"], ["MOTION_NO_FALLBACK"])
both("unknown motion field (inventedAnimation)", lambda s: node(s, "content.collaboration")["motion"].update(inventedAnimation="spin"), ["SCHEMA", "MOTION_FIELD_UNKNOWN"], ["MOTION_FIELD_UNKNOWN"])
both("motion pattern not allowed for section", lambda s: node(s, "hero.home")["motion"].update(pattern="marquee-autoscroll"), ["SCHEMA", "MOTION_PATTERN_NOT_ALLOWED"], ["MOTION_PATTERN_NOT_ALLOWED"])
both("maxChars overflow (hero title)", lambda s: node(s, "hero.home")["content"].update(title="The Complete Winning Ad Workflow for Every Team"), ["SCHEMA", "MAXCHARS"], ["MAXCHARS"])
both("variant on a section without variants", lambda s: node(s, "hero.home").update(variant="big"), ["SCHEMA", "VARIANT_MISMATCH"], ["VARIANT_MISMATCH"])
# template cross-reference
both("wrong section for template (pricing.plans on home)", lambda s: s["nodes"].insert(2, synth_node({"section": "pricing.plans"})), ["TEMPLATE_EXTRA_SECTION"], ["TEMPLATE_EXTRA_SECTION"])
both("missing required section (collaboration)", lambda s: s["nodes"].pop(idx(s, "content.collaboration")), ["TEMPLATE_MISSING_REQUIRED"], ["TEMPLATE_MISSING_REQUIRED"])
both("reordered fixed sections", lambda s: s["nodes"].insert(idx(s, "content.collaboration") + 1, s["nodes"].pop(idx(s, "content.before-after"))), ["TEMPLATE_ORDER"], ["TEMPLATE_ORDER"])
both("declared template contradicts nodes (product-feature)", lambda s: s.update(template="product-feature"), ["ROUTE_TEMPLATE_MISMATCH", "TEMPLATE_MISSING_REQUIRED", "TEMPLATE_EXTRA_SECTION"], ["ROUTE_TEMPLATE_MISMATCH", "TEMPLATE_MISSING_REQUIRED", "TEMPLATE_EXTRA_SECTION"])
both("duplicated variant (analytics twice)", lambda s: node(s, "content.product-showcase", "research").update(variant="analytics"), ["ONE_PER_PAGE", "NO_ADJACENT_SAME_SECTION", "TEMPLATE_MISSING_REQUIRED"], ["ONE_PER_PAGE", "NO_ADJACENT_SAME_SECTION", "TEMPLATE_MISSING_REQUIRED"])
mutation("template-pinned variant violated (spyder tabs on product-feature)", lambda s: node(s, "interactive.product-tabs").update(variant="spyder"), ["TEMPLATE_VARIANT_MISMATCH"], base=synth_spec("product-feature"))
both("route bound to another template (/pricing as home)", lambda s: s.update(route="/pricing"), ["ROUTE_TEMPLATE_MISMATCH"], ["ROUTE_TEMPLATE_MISMATCH"])
mutation("university course slug declared as landing", lambda s: s.update(route="/university/psychology-in-advertising", template="university-landing"), ["ROUTE_TEMPLATE_MISMATCH"], base=synth_spec("university-landing"))
mutation("404-stub post url declared as post", lambda s: s.update(route=R.routes["concreteOverrides"][0]["url"]), ["ROUTE_TEMPLATE_MISMATCH"], base=synth_spec("post"))
# graph rules
both("navbar removed", lambda s: s["nodes"].pop(0), ["SHELL_NAV_FIRST", "TEMPLATE_MISSING_REQUIRED"], ["SHELL_NAV_FIRST", "TEMPLATE_MISSING_REQUIRED"])
both("footer removed on home", lambda s: s["nodes"].pop(idx(s, "shell.footer")), ["FOOTER_ONLY_ABSENT_ON_PAID_LANDING"], ["FOOTER_ONLY_ABSENT_ON_PAID_LANDING"])
mutation("footer added on paid-landing", lambda s: s["nodes"].insert(len(s["nodes"]) - 1, synth_node({"section": "shell.footer"})), ["SHELL_TAIL_LAST", "TEMPLATE_EXTRA_SECTION"], base=synth_spec("paid-landing"))
both("second hero", lambda s: s["nodes"].insert(2, synth_node({"section": "hero.gradient", "variant": "blog"})), ["ONE_HERO", "HERO_LEADS", "TEMPLATE_EXTRA_SECTION"], ["ONE_HERO", "HERO_LEADS", "TEMPLATE_EXTRA_SECTION"])
mutation("hero on a hero-less template (application-form)", lambda s: s["nodes"].insert(1, synth_node({"section": "hero.section-head"})), ["ONE_HERO", "TEMPLATE_EXTRA_SECTION"], base=synth_spec("application-form"))
both("cta-final not before footer", lambda s: s["nodes"].insert(idx(s, "content.collaboration"), s["nodes"].pop(idx(s, "conversion.cta-final"))), ["CTA_FINAL_BEFORE_FOOTER", "TEMPLATE_ORDER"], ["CTA_FINAL_BEFORE_FOOTER", "TEMPLATE_ORDER"])
mutation("home-only section on another route", lambda s: s.update(route="/new-landing"), ["HOME_ROUTE_ONLY"])
both("contest section on a dark template", lambda s: s["nodes"].insert(2, synth_node({"section": "content.contest-sponsors"})), ["THEME_SCOPED", "TEMPLATE_EXTRA_SECTION"], ["THEME_SCOPED", "TEMPLATE_EXTRA_SECTION"])
both("surface.contest outside contest theme", lambda s: node(s, "content.before-after").update(surface="surface.contest"), ["THEME_SCOPED"], ["THEME_SCOPED"])
# tokens
both("invented token (surface.neon)", lambda s: node(s, "content.before-after").update(surface="surface.neon"), ["SCHEMA", "TOKEN_UNKNOWN"], ["TOKEN_UNKNOWN"])
# no-outbound navbar/footer
both("external link in navbar", lambda s: node(s, "shell.navbar")["content"]["items"][0].update(href="https://app.foreplay.co/sign-up"), ["SCHEMA", "NO_OUTBOUND_SHELL_LINKS"], ["NO_OUTBOUND_SHELL_LINKS"])
both("external link in footer", lambda s: node(s, "shell.footer")["content"]["items"][-2].update(href="https://www.linkedin.com/company/foreplay"), ["SCHEMA", "NO_OUTBOUND_SHELL_LINKS"], ["NO_OUTBOUND_SHELL_LINKS"])
both("recreated removed nav item (Sign in)", lambda s: node(s, "shell.navbar")["content"]["items"].append({"group": "Top", "label": "Sign in", "href": "/login"}), ["SCHEMA", "NO_OUTBOUND_SHELL_LINKS"], ["NO_OUTBOUND_SHELL_LINKS"])
both("removed item swapped in (Knowledge Base)", lambda s: node(s, "shell.navbar")["content"]["items"][15].update(label="Knowledge Base", href="/knowledge-base"), ["NO_OUTBOUND_SHELL_LINKS"], ["NO_OUTBOUND_SHELL_LINKS"])
both("recreated removed footer item (Merch Store)", lambda s: node(s, "shell.footer")["content"]["items"][-4].update(label="Merch Store"), ["NO_OUTBOUND_SHELL_LINKS"], ["NO_OUTBOUND_SHELL_LINKS"])
# assets / people
both("real-logo misuse: customer-logo with a real file", lambda s: node(s, "content.before-after")["content"].update(rainLogos={"assetRole": "customer-logo", "ref": "file:/rain/hba-asset-12.webp"}), ["SCHEMA", "ASSET_REF_POLICY"], ["ASSET_REF_POLICY"])
both("real-logo misuse: logo relabelled decorative-media", lambda s: node(s, "content.before-after")["content"].update(rainLogos={"assetRole": "decorative-media", "ref": "generated:logo-cloud"}), ["SCHEMA", "ASSET_ROLE_MISMATCH"], ["ASSET_ROLE_MISMATCH"])
both("invented asset role", lambda s: node(s, "hero.home")["content"].update(video={"assetRole": "brand-video", "ref": "placeholder:x"}), ["SCHEMA", "ASSET_ROLE_UNKNOWN"], ["ASSET_ROLE_UNKNOWN"])
both("real person photo file", lambda s: node(s, "content.collaboration")["content"]["testimonials"][0].update(portrait={"assetRole": "person-portrait", "ref": "file:/assets/646e13166ca538092d4c53fc_nick-shak.webp"}), ["SCHEMA", "ASSET_REF_POLICY"], ["ASSET_REF_POLICY"])
both("real person name in a testimonial", lambda s: node(s, "content.collaboration")["content"]["testimonials"][0].update(name="Nick Shackelford"), ["PERSON_PLACEHOLDER"], ["PERSON_PLACEHOLDER"])
mutation("third-party embed with live endpoint", lambda s: node(s, "hero.booking")["content"].update(scheduler={"assetRole": "third-party-embed", "ref": "https://cal.com/team/foreplay/foreplay-demo-action-plan"}), ["SCHEMA", "ASSET_REF_POLICY"], base=synth_spec("book-demo"))

# repo-level: pinned role drift to a DIFFERENT BUT VALID policy value (scratch copy)
tmp = tempfile.mkdtemp(prefix="fp-adv-")
try:
    scratch = os.path.join(tmp, "design-repo")
    shutil.copytree(ROOT, scratch, ignore=shutil.ignore_patterns("__pycache__", "*.zip"))
    p = os.path.join(scratch, "assets", "asset-roles.json")
    doc = json.load(open(p, encoding="utf-8"))
    doc["roles"]["person-portrait"]["generationPolicy"] = "may-generate-new"
    json.dump(doc, open(p, "w", encoding="utf-8"), indent=2)
    mutation("pinned role drift (person-portrait -> may-generate-new)", lambda s: None, ["PINNED_ROLE_DRIFT"], root=scratch)
finally:
    shutil.rmtree(tmp, ignore_errors=True)

# ------------------------------------------------------------------ report
fails = [m for ok, m in RESULTS if not ok]
for ok, m in RESULTS:
    print(("PASS " if ok else "FAIL ") + m)
n_ctrl = sum(1 for _, m in RESULTS if m.startswith("CONTROL"))
n_mut = sum(1 for _, m in RESULTS if m.startswith("MUTATION"))
print("\n%d controls, %d mutations, %d failures" % (n_ctrl, n_mut, len(fails)))
sys.exit(1 if fails else 0)
