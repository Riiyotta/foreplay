# Foreplay clone

A local design-study clone of foreplay.co, built with React 18, Vite 5, Tailwind v3 and react-router-dom 6. Run it with `npm install && npm run dev`, then open http://localhost:5180.

Long copy outside the homepage is stand-in text. Third-party embeds are placeholders, and the navbar and footer carry no outbound links. Keep the clone local: it uses Foreplay's real brand.

## Information architecture

| File | Edit? | What it is |
|---|---|---|
| `ia.json` | **hand-edit this one** | Templates, sections and route counts. Each section is defined once and referenced by id. |
| `IA.md` | generated, don't edit | Readable IA doc |
| `matrix.csv` | generated, don't edit | Section × template matrix |
| `validate.mjs`, `build.mjs` | copied from the ia-builder skill | Checker and generator |

`ia.json` was seeded from `design-repo/templates/` and `design-repo/sections/`, which record `src/` as built. Each section's `implementedBy` names the source file(s) that render it. After changing routes or sections:

```bash
node validate.mjs && node build.mjs
```

### What the data shows

- **Most of the site is a handful of templates.** 466 of the 506 routes (92%) are CMS detail pages from 13 slug-based templates. Blog posts alone are 182 routes, experts 67 and FAQ answers 65. The real build effort is in the other 40 routes (36 one-off pages, 2 university entries, 2 not-found stubs), which use 35 templates. Only three page templates serve more than one page: `product-feature` (3 product pages), `application-form` and `work-with` (2 each).
- **Shared vs. page-local sections.** 28 of the 89 sections are shared across templates and 61 are used by a single template. Beyond the global shell (navbar, exit-intent modal, and the footer on 505 routes), the widest reuse is:
  - `conversion.cta-final`: 25 templates, 475 routes.
  - `hero.blog-top`: 7 templates, 322 routes.
  - `nav.breadcrumb`: 8 templates, 348 routes.
- **Chrome is uniform.** 505 routes carry the full navbar and footer. Only `/2026-paid-lp` hides the footer (`hideFooterOn` in `src/App.jsx`).
- **Routes outside the templates.**
  - Redirects: `/university` → `/university/classes` and `/apac-demo` → `/book-demo`.
  - Two sitemap post URLs are 404 stubs and render the `not-found` template.
