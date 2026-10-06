#!/usr/bin/env python3
"""Generate schema/pagespec.schema.json (JSON Schema draft-07) from this repo's contracts.

Inputs (repo root derived from this file's location, never hardcoded):
  sections/*.json, templates/templates.json, assets/asset-roles.json,
  tokens/llm/token-policy.json (allowed node.surface values)
Output:
  schema/pagespec.schema.json  (deterministic bytes; verify_all.py rebuilds and byte-compares)

Usage: python3 extraction/build_schema.py [--check]
Stdlib only.
"""
import glob
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Closed, evidence-grounded motion vocabulary (every value is used by at least one contract;
# verify_all.py fails if a contract uses a pattern/field outside these lists).
MOTION_PATTERNS = [
    "none", "hover-transition", "dropdown-scale-fade", "exit-intent-modal", "scroll-parallax-shrink",
    "physics-logo-rain", "instant-tabs", "fade-tabs", "accordion-height", "tooltip-pop", "carousel-slide",
    "svg-path-draw", "marquee-autoscroll", "css-marquee-loop", "css-rotate-loop", "gradient-glow-loop",
    "background-video-loop", "lottie-hover", "tilt-3d",
]
FALLBACKS = ["static", "instant", "first-frame", "pause", "none-needed"]
TRIGGERS = ["click", "hover", "scroll", "in-view-once", "auto", "page-load", "pointer-leaves-top"]
MOTION_FIELDS = {
    "pattern": {"enum": MOTION_PATTERNS},
    "reducedMotionFallback": {"enum": FALLBACKS},
    "durationMs": {"type": "integer", "minimum": 0, "maximum": 60000},
    "easing": {"type": "string", "minLength": 1},
    "trigger": {"enum": TRIGGERS},
    "minViewportPx": {"type": "integer", "minimum": 0},
    "speedPxPerFrame": {"type": "number", "minimum": 0},
    "cadenceMs": {"type": "integer", "minimum": 0},
}
REF_PATTERNS = {
    "placeholder-only": r"^placeholder:[a-z0-9-]+(/[a-z0-9-]+)*$",
    "file-or-placeholder": r"^(placeholder:[a-z0-9-]+(/[a-z0-9-]+)*|file:/[^\s]+)$",
    "any": r"^(placeholder:[a-z0-9-]+(/[a-z0-9-]+)*|file:/[^\s]+|generated:[a-z0-9-]+)$",
}
ROUTE = r"^(/[^\s]*|#[^\s]*)$"
ROUTE_OR_URL = r"^(/[^\s]*|#[^\s]*|https?://\S+|mailto:\S+)$"


def load(rel):
    with open(os.path.join(ROOT, rel), encoding="utf-8") as fh:
        return json.load(fh)


def field_schema(spec, where):
    t = spec["type"]
    if t in ("string", "richtext-inline"):
        s = {"type": "string", "minLength": 1, "maxLength": spec["maxChars"], "x-maxChars": spec["maxChars"]}
        if spec.get("personIdentity"):
            s["x-personIdentity"] = True
        return s
    if t == "route":
        return {"type": "string", "pattern": ROUTE}
    if t == "route-or-url":
        return {"type": "string", "pattern": ROUTE_OR_URL}
    if t == "boolean":
        return {"type": "boolean"}
    if t == "integer":
        s = {"type": "integer", "minimum": spec.get("minimum", 0)}
        if "maximum" in spec:
            s["maximum"] = spec["maximum"]
        return s
    if t == "enum":
        return {"enum": list(spec["values"])}
    if t == "assetRef":
        return {"$ref": "#/definitions/assetRef.%s" % spec["assetRole"]}
    if t == "object":
        return object_schema(spec["fields"], where)
    if t == "array":
        return {"type": "array", "minItems": spec["minItems"], "maxItems": spec["maxItems"], "items": field_schema(spec["items"], where + "[]")}
    raise SystemExit("unhandled field type %r at %s" % (t, where))


def object_schema(fields, where):
    props, req = {}, []
    for name in sorted(fields):
        props[name] = field_schema(fields[name], where + "." + name)
        if fields[name].get("required"):
            req.append(name)
    out = {"type": "object", "additionalProperties": False, "properties": props}
    if req:
        out["required"] = req
    return out


def build():
    templates = load("templates/templates.json")["templates"]
    roles_doc = load("assets/asset-roles.json")
    policy = load("tokens/llm/token-policy.json")
    surfaces = sorted(policy["pageSpecTokenFields"]["node.surface"]["allowed"])
    sections = {}
    for path in sorted(glob.glob(os.path.join(ROOT, "sections", "*.json"))):
        with open(path, encoding="utf-8") as fh:
            c = json.load(fh)
        sections[c["id"]] = c
    defs = {
        "motion": {"type": "object", "additionalProperties": False, "properties": MOTION_FIELDS, "required": ["pattern", "reducedMotionFallback"],
                   "description": "Closed to the motion fields that real contracts use. reducedMotionFallback is mandatory."},
    }
    for role in sorted(roles_doc["roles"]):
        mode = roles_doc["roles"][role]["generatedInstanceRef"]
        defs["assetRef.%s" % role] = {"type": "object", "additionalProperties": False,
                                      "properties": {"assetRole": {"const": role}, "ref": {"type": "string", "pattern": REF_PATTERNS[mode]}},
                                      "required": ["assetRole", "ref"]}
    branches = []
    for sid in sorted(sections):
        c = sections[sid]
        then = {"properties": {"content": object_schema(c["content"]["fields"], sid),
                               "motion": {"properties": {"pattern": {"enum": [c["motion"]["pattern"]]}}}}}
        vnames = [v["name"] for v in c.get("variants", [])]
        if vnames:
            then["properties"]["variant"] = {"enum": vnames}
            then["required"] = ["variant"]
        else:
            then["not"] = {"required": ["variant"]}
        branches.append({"if": {"properties": {"section": {"const": sid}}, "required": ["section"]}, "then": then})
    defs["node"] = {"type": "object", "additionalProperties": False,
                    "properties": {"section": {"enum": sorted(sections)}, "variant": {"type": "string", "minLength": 1},
                                   "surface": {"enum": surfaces}, "content": {"type": "object"}, "motion": {"$ref": "#/definitions/motion"}},
                    "required": ["section", "content", "motion"], "allOf": branches}
    return {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "pagespec.schema.json",
        "title": "Foreplay clone PageSpec",
        "description": "Generated by extraction/build_schema.py from sections/*.json, templates/templates.json, assets/asset-roles.json and tokens/llm/token-policy.json. Do not edit by hand.",
        "type": "object", "additionalProperties": False,
        "properties": {
            "pageSpecVersion": {"const": "1.0.0"},
            "route": {"type": "string", "pattern": r"^/[^\s]*$"},
            "template": {"enum": sorted(t["id"] for t in templates)},
            "title": {"type": "string", "minLength": 1, "maxLength": 120},
            "nodes": {"type": "array", "minItems": 2, "items": {"$ref": "#/definitions/node"}},
        },
        "required": ["pageSpecVersion", "route", "template", "title", "nodes"],
        "definitions": defs,
    }


def render():
    return json.dumps(build(), indent=2, sort_keys=True, ensure_ascii=False) + "\n"


def main():
    out = os.path.join(ROOT, "schema", "pagespec.schema.json")
    text = render()
    if "--check" in sys.argv:
        with open(out, encoding="utf-8") as fh:
            same = fh.read() == text
        print("schema up to date" if same else "SCHEMA DRIFT: rebuild with extraction/build_schema.py")
        sys.exit(0 if same else 1)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8", newline="\n") as fh:
        fh.write(text)
    print("wrote schema/pagespec.schema.json, section branches:", len(build()["definitions"]["node"]["allOf"]))


if __name__ == "__main__":
    main()
