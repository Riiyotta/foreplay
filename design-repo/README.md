# Foreplay clone — design-repo

An AI-ready, machine-validated design system extracted from the Foreplay marketing-site clone that sits in
the folder containing this one (Vite 5 + React 18 + Tailwind 3; see `registry.manifest.json → sourceProject`).
A generator composes a **PageSpec** (`schema/pagespec.schema.json`) out of the section contracts here; the
schema plus `schema/semantic_validate.py` decide whether the page is on-brand and structurally real.

**Status:** `design-review-pending`, `productionApproved: false`. Snapshot of the clone **as implemented**
on 2026-10-06 ("record as it is"): the code is canonical; where a spec disagrees, the spec value is kept in
`extraction/divergences.json`, never silently "corrected".

> **Real company — do not publish.** Foreplay (foreplay.co) is a real, live company. Its brand, product
> imagery, customer logos and the people in its testimonials belong to Foreplay or to third parties. This
> repository is for local/internal use. Generated pages must use placeholder media for every protected
> asset role and `‹placeholder›` text for every person-identity field (see "Structurally unusual" below).

## Counts (recomputed from disk; checked by `extraction/verify_all.py`)

<!-- counts:start -->
| what | count |
|---|---|
| tokens (total) | 434 |
| primitives | 18 |
| components | 27 |
| sections | 89 |
| templates | 48 |
| route patterns | 50 |
| concrete URLs | 506 |
| asset roles | 12 |
| graph rules | 13 |
<!-- counts:end -->

Token total = every cited token entry: foundation 307, semantic 70, component 37, layout 20; each of the
three themes resolves all 32 semantic colour roles. Routes = 36 one-off pages + 14 CMS collections
(post 184, experts 67, faqs 65, authors 43, events 27, agencies 26, videos 16, category 15, comparison 10,
industries 6, page 5, careers 3, university 2, bounties 1) = 506 URLs; the source `sitemap-routes.txt`
lists 505 of them (it omits `/`). Plus 2 redirects (`/university → /university/classes`,
`/apac-demo → /book-demo`) and a `*` not-found catch-all.

## Layout

```
registry.manifest.json   status, versions, counts, entry points (all inside this folder)
tokens/00-foundation     colour, typography (+@font-face), radius, elevation, gradient, breakpoint, spacing, icon-size, motion, opacity/z
tokens/10-semantic       colour / type / radius / motion roles (references into foundation)
tokens/20-component      button (8 variants), nav, footer, white-block, blog-list-card, faq-row, product-card, form-input, rich-text
tokens/30-layout         containers, section rhythm, grids
tokens/themes            dark (default), contest and ships-legacy (scoped sub-themes)
tokens/llm               token-catalog, token-policy, component-allowlist (closed, versioned)
primitives/ components/  content-agnostic building blocks with props + citations
sections/                one contract per distinct section type (closed content, maxChars budgets, assetRole media, motion, responsive)
templates/               templates.json (48 page shapes, structured nodes) + routes.json (every URL bound to one template)
compatibility/graph.json rhythm/position rules with severity, named exceptions, enforcedBy
assets/asset-roles.json  closed asset-role registry with generation + licensing policy and pinned roles
schema/                  pagespec.schema.json (generated), example.pagespec.json, semantic_validate.py, tests/adversarial_test.py
extraction/              build_schema.py, verify_all.py, prove_drift.py, measured-values.json, citation-anchors.json, divergences.json
```

## How it was built (bottom-up)

1. **Tokens** parsed from `tailwind.config.js` and `src/index.css` (every value cites `path:line`), with a
   utility-usage histogram computed over `src/**/*.{js,jsx}` to rank semantic roles. Spacing uses Tailwind's
   default scale (not overridden); arbitrary px values are recorded, not promoted.
2. **Primitives → components → sections** from the real components (`src/components/**`), pages
   (`src/pages/**`) and CMS data (`src/data/*.json`). Text budgets are `maxChars` from the real string, the
   real stand-in generator call (`standin(n)` ≤ n, `copy(n)` ≤ n+12, `paragraph(n)` ≤ n+71) or the CMS
   data maximum — never invented.
3. **Templates** — one per distinct page shape (48), node lists read from each page's JSX; **routes** from
   `src/routes.jsx` + `src/data/*` (506 URLs, 1:1, including per-entry university templates and the two
   `/post/*` slugs whose CMS entry is a `404` stub and therefore renders not-found).
4. **Graph → schema → example → validator → adversarial tests → manifest/docs.**

Every citation was resolved at build time from an anchor string, and `extraction/citation-anchors.json`
records that anchor so `verify_all.py` re-checks *content* (not just line bounds) whenever the source tree
is next to this folder.

## Structurally unusual — recorded, not normalized

1. **Real, live company.** Protected asset roles (`person-portrait`, `customer-logo`, `third-party-mark`,
   `product-screenshot`, `product-video`, `editorial-image`, `third-party-embed`) are *placeholder-only* in
   generated pages; `brand-mark`, `product-icon`, `lottie-animation` may only reference the existing file.
   Person-identity text fields (names/roles in testimonials, experts, authors, speakers) must be
   `‹placeholder›` tokens (`PERSON_PLACEHOLDER`).
2. **Copy policy.** Homepage text is the user's own saved copy (used verbatim in `schema/example.pagespec.json`).
   All other long copy in the clone is deliberate stand-in text of matching length; contracts store the
   budgets (`copyBudget.generator/targetChars/upperBoundChars`), never real text.
3. **No outbound links in navbar/footer.** Removed: Sign in, Knowledge Base, Merch / Merch Store, API Docs,
   Feature Requests, (Public) Road Map, the Ask-AI row (ChatGPT/Grok/Claude/Perplexity/Gemini) and the social
   icons. Rerouted: Chrome Extension → `/chrome-extension`, review badges → `/chrome-extension` and `/reviews`,
   Start free trial (nav + calendar popup) → `/pricing`, Book a Call → `/book-demo`. The canonical item lists
   live in `sections/shell.navbar.json` / `shell.footer.json`; `NO_OUTBOUND_SHELL_LINKS` rejects any external
   href or recreated removed item. Recorded exceptions *outside* the item lists: body CTAs still link to
   `app.foreplay.co/sign-up`, FaqButtons still link to the external Knowledge Base, and the navbar's
   "What is Foreplay?" **lightbox** contains one youtube.com anchor (not a nav item; see the navbar contract).
4. **No third-party requests.** YouTube/Wistia/Cal.com/Senja/NoteForms/Turnstile/Elfsight/Unicorn Studio/X/Luma
   are same-size placeholders (`third-party-embed`, placeholder-only); forms never submit.
5. **Intentional deviations from the live site** (code canonical, spec value in `divergences.json`): footer
   ≤479 stacks (no 390px overflow); agency entry and agency directory stack ≤767; event transcript background
   made readable; live no-op effects skipped (pre-black-friday parallax, post progress bar, api/mcp twinkle canvas).
6. **Scoped sub-themes.** `/contest` + `/contest-submission` (`.contest`: #000211, Circular, gradient headings)
   and `/ships` (legacy 2.0: Circular + Ebgaramond). `THEME_SCOPED` keeps their sections/surfaces out of
   dark-theme pages.
7. **Hero-less templates** (h1 lives in another section): chrome-extension, application-form, work-with,
   agency, not-found, pricing (h1 inside `pricing.plans`) — named exceptions of `ONE_HERO`.
8. **Reduced motion is mostly not implemented in the clone** (only the calendar modal and the three CSS
   loops honour it). Every contract still declares a `reducedMotionFallback` (a proposal) and records
   `reducedMotionImplemented` truthfully.

## PageSpec in one paragraph

`{pageSpecVersion, route, template, title, nodes[]}`; each node is `{section, variant?, surface?, content,
motion}`. `content` is closed per section; `motion` is closed to `pattern, reducedMotionFallback (required),
durationMs, easing, trigger, minViewportPx, speedPxPerFrame, cadenceMs`, and `pattern` must equal the
section's contract pattern. `surface` (the only per-instance token field) must be a catalog `surface.*`
token. Media are `{assetRole, ref}` with a role-specific `ref` pattern (`placeholder:…`, `file:/…`, `generated:…`).

## Verify

```bash
python3 extraction/build_schema.py --check     # schema is the generator's output
python3 extraction/verify_all.py               # integrity, citations, parity, counts, closure
python3 schema/semantic_validate.py schema/example.pagespec.json
python3 schema/tests/adversarial_test.py       # every mutation rejected, every control passes
python3 extraction/prove_drift.py              # verify_all's drift checks proven on scratch copies
```

Requires Python 3 + `jsonschema`. Scripts derive the repo root from their own location. Without the sibling
source tree, citation bound/anchor checks degrade to a WARN (format is still checked).

Version fields: only `allowlistVersion` (and `counts`) are machine-checked; `repositoryVersion` and
`pageSpecVersion` are hand-maintained documentation markers (see `registry.manifest.json → versionFieldNote`).
`design-repo.zip` is a sibling build artifact regenerated last; the source project is not a git repository.
