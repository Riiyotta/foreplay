Source: https://www.foreplay.co/ships

# /ships: "Recent Product Updates & Releases | Foreplay Ships"

**Method:** see `specs/_shared-misc.md`. **Raw dumps:** `specs/_measure/ships-{1440,991,390}.txt`. **Data:** `specs/data/ships.page-data.json` has `items[]` (15 entries in page order: date, title, post href, local thumbnail path, excerpt length). Webflow page id `64c12fcf554be23d55a6d3c8`. Doc height: 5603 @1440, 10025 @991, 8242 @390.

This page uses the **legacy "2.0" design system**, which differs from the rest of the site. The fonts are **Circular** (400) and **EB Garamond** (500), with Inter at weight 200 (no 200 face is loaded, so it renders with the Inter-Regular file). The containers are `.container-2-0.w-container` (max 1200, padding 0 50). After the dark header comes a **white** section. The global Navbar and Footer are the same as everywhere else, and there is no CTA block.

New fonts are needed, scoped to this page only:
- `@font-face{font-family:Circular;font-weight:400;src:url(/assets/pages/ships/fonts/64220781532814b7bb396241_CircularXX-Book.otf) format("opentype");font-display:swap}`
- `@font-face{font-family:Ebgaramond;font-weight:500;src:url(/assets/pages/ships/fonts/642207d78dff642e8360756d_EBGaramond-Medium.ttf) format("truetype");font-display:swap}`

## 1. Header `div.section-2-0.ships-header`
- Spacing: padding 150/0/120 @1440 (991: 150/0/100; 390: 75/0/45). Position relative, overflow hidden. Height 511 @1440, 493 @991, 387 @390.
- Background: `url(/assets/pages/ships/64c13144e58ab54051f601ef_ships-header.avif)` (1199×1026), `background-size: 80% auto; background-position: 100% 0; no-repeat`, on body bg #020308.
- `.container-2-0` (1200 max, centred, padding 0 50; @390 ~15.6) `> .product-page-header-conent` (flex row, align centre, gap 16) `> .product-page-header-text` (flex column, align start, 550 wide @1440). At ≤991 the text block is full width and **centre-aligned**.
  - `.div-block-189`: flex row, align centre, margin-bottom 15. At ≤991 it becomes a column.
    - `img.space-helmet` 25×30 (`/assets/pages/ships/64c1303544d31a8830884038_space-helmet.svg`, margin-right 10).
    - `h1.product-name-gradient.white` "Foreplay Ships": Circular 400 22/33, ls −0.18px. Fill: `linear-gradient(#fff, rgba(255,255,255,.55))` clipped to text. @390: 16/24.
  - `h2.product-page-title` "Recent Product Updates & Releases": **EB Garamond 500 54/67.5**, ls −0.18px. Fill: `background: #fff linear-gradient(#fff 48%, rgba(0,0,0,.34))` with `background-clip:text`. Measured 550×135, 2 lines @1440; 759 wide, 1 line @991; 37/46.25, 2 lines @390.
  - `.subtext-wrapper` (max 650, margin-top 5) `> p.p-medium.grey`: Inter **200** 17.6/26.4 (@390 16/24), color rgb(116,118,122). ‹~101ch, 2 lines›.

## 2. Updates grid `div.section-2-0.creative-process`
- Section: bg **#fff**, padding 100/0 (991: 50/0/100; 390: 50/0/75), min-height 650, z 10, overflow hidden.
- `.ships-grid`:
  - Grid: 2 cols × 540 @1440, row gap 40, column gap 20. Row heights follow content (443–481).
  - ≤991: 1 col (891 @991, 359 @390).
- Item `.blog-grid-item`:
  - `a.blog-thumbnail-limage-link` (hover opacity .85, `.2s`) `> img.ships-thumbnail`: 540×300 @1440, 891×400 @991, 359×175 @390. object-fit cover, radius 10. Source thumbnails are 940×529 PNG.
  - `.div-block-187` (padding-top 10):
    - Date `.p-small.grey`: Inter 400 12.8/19.2, rgb(116,118,122). Verbatim, e.g. "June 18, 2026".
    - `a.link-block-11` (hover color **#1f69ff**, `.2s`) `> h2.blog-thumbnail-title`: **EB Garamond 500 20/26**, #000, margin-bottom 5. Short titles are verbatim in the data file.
    - Excerpt `p.p-small.blog-thumbnail`: Inter **200** 12.8/19.2, #000. ‹160–520ch, 3–4 lines›.
- 15 items; thumbnails, dates and hrefs are in the data file. The first thumbnail (`68bf2cc8f0c30675e16891ce_api-thumbnail.png`) lives in `/assets/pages/creative-strategist-jobs/` because it was shared and downloaded once.

## Motion
Hover only: image link opacity → .85, title link color → #1f69ff, both `.2s ease`. No IX2.
