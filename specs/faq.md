Source: https://www.foreplay.co/faq

# /faq: "Frequently Asked Questions (FAQs) - Foreplay"

**Method:** see `specs/_shared-misc.md`. **Raw dumps:** `specs/_measure/faq-{1440,991,390}.txt`. **Data:** `specs/data/faq.page-data.json` has `faqs[]` (65 items in page order: question text verbatim, answer char count, answer block structure, link count). The entries are the same as `src/data/faqs.json`; the `order` field there is the index on this page. Webflow page id `647668309e49d3c3f7a76548`. Doc height: 6347 @1440, 6283 @991, 7563 @390.

## Section map
| # | Section | y/h @1440 | Reuse |
|---|---|---|---|
| 1 | Hero (`section#product-hero-section > .container > .fireside-hero`), 1440-max `.container` (padding-x 40/32/24) | 72 / 340 | M1 hero + `.faq-buttons` (both in `_shared-misc.md`) |
| 2 | FAQ list `.faq-block-container` (752 max, centred, margin 0 auto) inside the **same** `.container` as the hero | 412 / 3965 | `Faq` from `src/components/shared/Faq.jsx`, 65 items |
| 3 | Final CTA | 4377 / 1038 | `CTA` |

## 1. Hero
- M1: overline h1 "FAQ", gradient title h2 "Questions about Foreplay". One line @1440/991 (686 wide), 2 lines @390. There is no paragraph.
- Under the title, inside `.hero-text`, is `.faq-buttons` with "Contact support" (#intercomButton) and "Knowledge Base". Row 369×64 @1440/991. At @390 it is a column, 179×116, with buttons stacked at natural width (177/179), centred.
- `.fireside-hero` padding 80/0 (@390: 40/0). Hero height 340 @1440/991 and 356 @390.

## 2. FAQ list
- 65 `.faq-block` rows, collapsed height 61 (questions are 1 line @1440, some wrap at 390). Total 3965 @1440, 4705 @390.
- The answer rich text (`.faq-rtb > .text-alpha-100 > .text-body-s.w-richtext`) is 14/20, rgba(255,255,255,.68). Inline links are #fff w500, underline on hover.
- Answer structure: 59 single `p`, 2 `ul`, 1 `p p p p`, 1 `p p`, 1 `ul p`. One item ("Can I download ads?") has an **empty** answer (`w-dyn-bind-empty`); keep it, expanding to just its 16px padding. Answer lengths range 0–464 chars, and 16 answers contain links.
- Rich text inside `.faq-rtb` (page `<style>`, used by multi-block answers): base 16/24 −0.18px color .84. h2 28/36, margin 24/0/16, Inter Display. `ul/ol`: flex column, gap 12, margin-block 16, padding-left 24. Inside the 14px `.text-body-s` wrapper, the p/li computed size is 14/20.
- Open-state behaviour and timing: see `Faq` (height 0 → cached px over .9s `cubic-bezier(.19,1,.22,1)`, title → #fff, chevron rotates 180°). Hover on `.faq-block` sets color #fff.

## 3. CTA
`CTA` unchanged.

## Assets
- `/assets/pages/faq/svg/svg-w-embed-6ba1702b.svg`: chat icon (Contact support).
- `/assets/pages/faq/svg/svg-w-embed-bfb75936.svg`: book icon (Knowledge Base).
- `/assets/pages/faq/svg/svg-w-embed-1fc3f789.svg`: accordion chevron 24px (viewBox 0 0 20 20, `currentColor`).
- No raster images other than the CTA image.

## Motion
Accordion only (see `Faq`). No IX2.
