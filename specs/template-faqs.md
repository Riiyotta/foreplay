Source: https://www.foreplay.co/faqs/are-there-any-usage-limitations

> Shared patterns (breadcrumb S1, title block S2, rich text S3, cards S4–S7, headshot/socials S8, hero S9, video S10) are defined once in `specs/_shared-templates.md`. Where this file repeats one of them, the details are the measured instance for this template.

# Template: FAQ item (`/faqs/:slug`)

- Data: `src/data/faqs.json` (65 entries). Measured `/faqs/are-there-any-usage-limitations` and `/faqs/can-i-download-ads`. The DOM is identical. On can-i-download-ads the answer rich text is empty (`w-dyn-bind-empty`, display:none), so the page shows only the title.
- Method: Node Playwright at 1440/991/390, computed styles plus live CSS.
- Document height: 2351 / 2287 / 2799 (2303 / 2239 / 2667 with an empty answer).
- Reuse: Navbar and Footer (global). The final CTA uses `CTA` from src/components. Breadcrumb, `.blog-top` and `.blog-line` are the same components as `specs/template-post.md` §2.1–2.2, so build them as shared `BlogBreadcrumb`/`BlogTop` pieces.

## 1. Section map (DOM order)
1. **Breadcrumb**: `section.section > .container.blog-container > .blog-breadcrumb`. Identical to the post template: padding 40/0, gap 4, margin 0 -8px, hidden ≤479. Crumbs: "FAQs" → `/faq`, "/", then the question text (href `#`). Geometry: 336,72,752,120 | 119.5,72,736,120 | none.
2. **Question and answer**: `section.section > .container.blog-container > .blog-top` (flex col, gap 24, padding-bottom 40; ≤479 padding-top 40). Geometry: 344,192,752,188 | 127.5,192,736,188 | 24,72,342,296.
   - `.blog-head > .text-white > .text-balance > h1.text-display-h4`: the question. Inter Display 600 28/36, −0.2px, #fff, `text-wrap:balance`, same at every width (2 lines at 390 = 72px).
   - `.blog-body` (padding-bottom 40, ≤479 24) > `div > .text-alpha-100 > .w-richtext`: the answer.
   - Then, outside the blog container, `div.container > .blog-line`: full container width (1360 at 1440, 927 at 991, 342 at 390), 1px, `rgba(255,255,255,.1)`, at y 380.
3. Three empty CMS wrappers follow (`div.section` and two `aside.section > .container.blog-container`, each 0px tall). Omit them.
4. Final CTA: uses `CTA` from src/components.

## 2. Answer rich text (no `.blog-rtb` wrapper, so the plain Webflow defaults apply)
| Element | Computed |
|---|---|
| root | Inter 16/24, ls −0.18px, color `rgba(255,255,255,.68)` (from `.text-alpha-100`) |
| `p` | 16/24, margin 0 (no gap between paragraphs, so add an empty line if needed) |
| `a` | Webflow default link `#3a6ffb`, no underline (16 answers contain 1–2 links) |
| `ul` / `li` | 3 answers. Webflow default `ul` padding-left 40, disc, li 16/24, no gap |
| `strong` | 700 |

## 3. Typical body structure (stand-in)
Median answer is 1 paragraph of about 183 chars (max 464 chars, max 4 paragraphs). 3 answers have a 4–5 item `ul`. Generate 1 paragraph of about 150–250 chars. Entries with `answer.chars === 0` render no body.

## 4. Colors, motion
- Title #fff. Answer .68 white. Crumbs .68 → #fff on hover. Line `rgba(255,255,255,.1)`.
- No IX2, no animations, no sticky elements.

## 5. JSON shape (`src/data/faqs.json`, filled for all 65)
```json
{
  "slug": "are-there-any-usage-limitations",
  "title": "Are there any usage limitations?",
  "question": "Are there any usage limitations?",
  "order": 55,                       // index on /faq listing
  "answer": {"paragraphs": 1, "chars": 137, "lists": 0, "links": 0},  // shape only; text not collected
  "updated": "2023-05-30"
}
```
Varies per entry: question (title and breadcrumb), answer (stand-in).
