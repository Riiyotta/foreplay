Source: https://www.foreplay.co/comparison/motion

# Template: comparison (`/comparison/:slug`, 10 entries)

**Method:** see `specs/_shared-misc.md`. **Raw dumps:** `specs/_measure/template-comparison.motion-{1440,991,390}.txt`. **Per-entry data (all 10 entries extracted):** `specs/data/comparison.fields.json`. Verified that `/comparison/motion` and `/comparison/atria` share an identical DOM/class structure; only CMS fields differ. Webflow template page id `683f7a18fd08ccdb09db3c90`. Doc height for motion: 8581 @1440, 10853 @991, 11510 @390.

## Fields needed in `src/data/comparison.json` (per entry)
These are all present in `specs/data/comparison.fields.json` and already map to local asset paths:

| Field | Example (motion) | Notes |
|---|---|---|
| `title` (meta) | "An Affordable Motion Analytics Alternative - Foreplay.co" | `desc` is ~158ch, so write stand-in |
| `overline` | "MOTION ANALYTICS ALTERNATIVES" | |
| `h` | "Foreplay is Motion on Steroids" | hero title |
| `introLen` | 219 | hero paragraph char count (stand-in) |
| `reviewsOverline` | "MOTION VS FOREPLAY REVIEWS" | `reviewsTitle` is the same on all entries: "Let’s cut to the chase... Marketers prefer Foreplay" |
| `reviewCards[0]` (Foreplay) | logo, summaryLen 90, stores 4.8/5 · 188 Reviews · CHROME STORE and 4.9/5 · 91 Reviews · G2 REVIEWS, reviewImg | same on all entries |
| `reviewCards[1]` (competitor) | logo (dark), summaryLen, `stores[]` {rating e.g. "3.7/5" or "??/5", reviews e.g. "3 Reviews", bar class `_60 red` / `_70 yellow` / `_90` …, store}, reviewImg, `callout` {text, img} or null | callout is present **only on motion** |
| `lastUpdated` | "Last Updated June 4, 2025" | same on all |
| `tabsDefault` | "Lens" (motion, superads) / "Swipe File" (the other 8) | default tab of M2 |
| `pricing[1]` | logo (light), price e.g. "$350 /mo", 6 short bullets, `note` length or null | `pricing[0]` (Foreplay, $49/mo + 6 bullets) is the same on all |
| `tableOverline` / `tableTitle` | "COMPARE MOTION FEATURES" / "Whats the difference between Foreplay.co and Motion?" | |
| `tableLogos[1]` | competitor dark logo | |
| `tableRows` | Pricing Model row + 2 categories × 7 rows; each cell is a value + check/x icon | see §5 |
| `ctaTitle` / `ctaParaLen` | "Convinced? Let's find, launch and scale your next winning ad" / 111 | final CTA override |

## Section map (DOM order)
| # | Section | y/h @1440 | Reuse |
|---|---|---|---|
| 1 | Hero `section#product-hero-section > .container > .comparison-hero` | 72 / 769 | **new** `ComparisonHero` + `LogoStrip` |
| 2 | White block: reviews (`.section-white-block > .product-page-solution`) | 841 / 947 | **new** `ComparisonReviews` |
| 3 | "ALL-INCLUSIVE" product tabs | 1788 / 1192 | **M2** (`_shared-misc.md`) |
| 4 | Pricing compare (`div.section > .product-page-padding-y`) | 2979 / 1062 | **new** `ComparisonPricing` |
| 5 | White block: feature table (`.comparison`) | 4041 / 1631 | **new** `ComparisonTable` |
| 6 | "MOST LOVED" features (`.lens-enrichment_security`) | 5672 / 858 | `SecurityGrid` (no buttons) |
| 7 | Final CTA (custom title/para; secondary "Book a Demo" → /book-demo) | 6530 / 1119 | `CTA` with props |
| fixed | PSA sticky card `.comparison-psa-sticky` (a sibling after the footer) | fixed | **new** `PsaSticky` |

## 1. Hero
- `.comparison-hero`: Webflow grid, 2 cols × 672, gap 16, rows 352/276, padding 75/0/50. At 991: cols 455.5 but the items span the full width. At 390: padding 24/0.
- Text cell `.comparison-hero-text` (flex column, gap 20; 672×352):
  - `.comparison-hero-headings` (flex column, gap 10): overline h1 (12/16 w550 ls2 .36), then `h2.text-display-h1` 60/68 **#fff, no gradient**, 2 lines.
    - **It stays 60/68 at every width.** It is 1 line @991 (806 wide, centred) and 3 lines @390 (204 tall), because this element has no responsive override.
  - Paragraph `p.text-body-l` .68 ‹introLen, 3 lines›.
  - `.experts-ca-buttons` (margin-top 24) > buttons: primary "Start Free Trial" → app.foreplay.co/sign-up (159×40) and secondary "Book a Demo" → /book-demo (129×42).
  - Text is left-aligned @1440 and centred ≤991.
- Video cell `.comparison-video-wrapper`: height 0, position relative.
  - `.comparison-hero-video` (Webflow bg video, **absolute: top −25, left 25, right −353**): 1000×521, aspect 1400/730, radius 15, overflow hidden. It bleeds past the viewport's right edge, which `body{overflow-x:clip}` handles.
  - Video: `/assets/templates/comparison/6833876c700d2cc61b273644_home-video-transcode.{mp4,webm}`, poster `…_home-video-poster-00001.jpg`.
  - Overlay `.comparison-video-fade`: `linear-gradient(90deg, rgba(2,3,9,0), #020309 63%), linear-gradient(rgba(2,3,9,0), #020309 81%)`.
  - @991: the wrapper is 927×300 below the text, and the video is static-flow 927×483. @390: 342×178, no radius.
- Logo row `.comparison-logo-grid-wrapper` (row 2, spans both columns, margin-top 100): `LogoStrip`.

## 2. Reviews (white block; `SectionHead` on white)
- Head: overline `.text-solid-400` = `reviewsOverline`; h2 `.text-display-h3` 36/44 #171920 = `reviewsTitle` (2 lines); paragraph 16/24 #24262e ‹~103ch, 2 lines›.
- `.comparison-block-grid`: 2 × 462, gap 16 (940×495). ≤991: 1 column (911, then 326 @390).
- **Card** `.comparison-reviews-card`: flex column, gap 20, radius 20, position relative.
  - Foreplay card `.solution-after`: bg #020308.
  - Competitor card: bg #fff with `box-shadow: inset 0 0 0 1px #e9eaef`.
  - `.comparison-reviews-text` (padding 25/25/0) `> .comparison-reviews-card-text` (flex column, gap 10, z 10):
    - Logo row, centred, 30 tall: `img.comparison-logo` 103×30 (Foreplay) / competitor logo (motion 109×25).
    - Summary: 16/24, centred. Foreplay: color .68 on dark. Competitor: #4c505f. ‹~90ch, 2 lines›.
  - `.comparison-reviews-grid`: 2 × 213, gap 12, padding 0 12, row 230 (@390: 2 × 145, row 216). Item `.comparison-reviews-item` (padding 4, radius 16):
    - Item bg: Foreplay card rgba(255,255,255,.1); competitor `.competitor` #f9f9fa.
    - `.comparison-social-proof-content` (flex column centred, gap 20, padding 15/0):
      - 40×40 store icon: Chrome `svg/demo-socialproof-icon-2-w-embed-77f9187b.svg`, G2 `svg/demo-socialproof-icon-2-w-embed-e77ee678.svg`. Color .68 on dark / #343642 on light.
      - Rating row (gap 2): star icon 20 at opacity .5 (`svg/svg-w-embed-d1cf25b2.svg`) + `.font-semibold` **19.2/24 w600** (#fff / #171920), e.g. "4.8/5".
    - `.comparison-social-proof-bar-section` (flex column, gap 12, padding 16, radius 8): bg rgba(2,3,8,.44) on dark, #f9f9fa on light.
      - Track `.comparison-social-proof-bar-bg`: 173×4, r100, bg rgba(255,255,255,.1) (light: #dddee5).
      - Fill `.comparison-social-proof-bar._NN`: width NN% of the track (classes `_20 _30 _50 _60 _70 _80 _90`).
      - Fill colors: green **#40c4aa** (default), `.red` **#df1c41**, `.yellow` **#ffbe4c**.
      - Pill `.demo-social-proof-reviews-ratings` (flex centred, gap 5, padding 4/8, r100), e.g. "188 Reviews". Label `.text-label-m` 16/24 w500 with a thumb icon 20 (`svg/icon-20-w-embed-1338adf8.svg`; flipped 180° via `.flip` on red/yellow).

        | Pill variant | Background | Text and icon color |
        |---|---|---|
        | green | rgba(64,196,170,.16) | #9ee1d4 |
        | `.red` | rgba(223,28,65,.08) | #96132c |
        | `.yellow` | rgba(255,190,76,.12) | #9b6327 |

    - Store name `.comparison-social-proof-name` (padding 6/8): overline #fff (`.dark`: #090a0e), e.g. "CHROME STORE" / "G2 REVIEWS".
  - `.comparison-review-holder` (padding 0 12 12) > review screenshot img 438×100 (source 880×200): `reviewImg`.
  - **Callout** (motion only) `.comparison-review-callout`:
    - Position: absolute, top 288.5, left 362, right −100 (187×219). `transform: rotate(12deg) scale(.75)` (matrix 0.7336, 0.1559, −0.1559, 0.7336).
    - Box: bg #020308, radius 16, padding 4.
    - Text `.text-heading-s` 14/20 w550 #fff, centred (153 wide, padding 10): callout text.
    - Image wrap: padding 10, bg rgba(255,255,255,.1), r12. Image 146×135, r10.
- `.comparison-last-updated` (centred row) > `.updated-tag` (padding 4/10, bg #f9f9fa, r100): `.text-body-s` 14/20 #4c505f = `lastUpdated`.

## 3. Product tabs: **M2**
- Head (dark): overline "ALL-INCLUSIVE", h2 "Get 5 Products in 1 with Foreplay" (637 wide), paragraph ‹~127ch, 3 lines›.
- Default tab = `tabsDefault`. Tab order: Lens, Swipe File, Discovery, Spyder, Briefs.

## 4. Pricing compare
- Head (dark): h2 "This is why 10,000+ marketers made the right choice." (2 lines, 720 wide), paragraph "Enjoy the most feature-rich ad creative workflow platform under one roof." (2 lines). There is no overline.
- Wrapper `div > .product-page-solution` (940, padding 80/0) `> .comparison-block-grid` (2 × 462, gap 16, row 462). ≤991: 1 column (927 @991, 342 @390).
- Card `.comparison-pricing`: flex column, gap 20, radius 28.
  - Foreplay card: bg rgba(255,255,255,.06).
  - `.competitor` card: transparent, border 1px rgba(255,255,255,.1).
  - Top (padding 25/25/0):
    - Logo row: min-h 30, left-aligned. Foreplay `foreplay-logo.svg` 103×30; competitor light logo.
    - `.comparison-pricing-starts` (flex, gap 10, padding 10/0):
      - Pill `.starts-from`: padding 4/12, bg rgba(255,255,255,.06), r100, overline .36 "STARTS FROM".
      - Price `.comparison-pricing-price` (gap 2): `.text-display-h6` **Inter Display 600 20/28, ls −0.11px**, #fff "$49" + "/mo" in rgba(255,255,255,.36).
  - List `ul.comparison-pricing-list` (padding 0 25; flex column, gap 12, margin-bottom 10): 6 × `li` (flex, gap 5).
    - Icon 24×25: Foreplay check `svg/icon-medium-w-embed-5e1c2693.svg` (#40c4aa); competitor ✕ `svg/icon-medium-w-embed-29b99be9.svg` (white, opacity .44).
    - Label `.text-label-m` 16/24 w500 #fff.
  - Bottom (padding 0 25 25):
    - Foreplay: `button-dark.button-primary` full width (412×40) "Start Free Trial".
    - Competitor: `.competitor-pricing-details` (padding 10, bg rgba(255,255,255,.06), r10), centred 16/24 rgba(255,255,255,.36) ‹note ~81ch, 2 lines›. The note is null on some entries; then the box is absent.

## 5. Feature table (white block)
- `.comparison`: flex column, gap 40, padding 64/0. Head `.comparison-head` (padding-bottom 16): overline = `tableOverline`, h2 36/44 #171920 = `tableTitle` (2 lines), paragraph #24262e ‹~92ch, 2 lines›.
- `.comparison-grid-scroll`: padding-left 24 (@390: padding 0 24 0 40, horizontal scroll).
  - `.comparison-competitor-grid`: max 900, centred (margin 0 170 @1440), radius 16, border 1px **#e9eaef**. 900×1255 @1440, 887 @991, **480 @390** (wider than the 374 viewport, so it scrolls sideways).
- **Header row** `.comparison-competitor`: grid 419 / 239.5 / 239.5 (991: 340/272/272; 390: 159.3 ×3).
  - Bg #fff, radius 16 16 0 0, border-bottom 1px #e9eaef. **`position: sticky; top: 72px; z-index: 50`** (it sticks under the navbar while the table scrolls).
  - Cells `.comparison-tr-cell.start-trial-cell`: flex column centred, padding 16 (991: 12; 390: 4), border-left 1px #e9eaef.
  - Logos: `foreplay-logo-dark.svg` 103×30 and competitor `tableLogos[1]` (motion 100×23).
- **Row** `.comparison-competitor-tr`: same grid, border-bottom 1px #e9eaef, 56 tall (Pricing Model row 101).
  - Wrapped in `.comparison-category-rows` (margin 0 −48, padding 0 48, `overflow: clip visible`).
  - Title cell `.comparison-tr-title`: flex wrap, gap 4/12, padding 16 (991: 10; 390: 8, column). Label `.text-label-m` 16/24 w500 #171920.
  - Value cell `.comparison-competitor-cell`: flex row, align centre, gap 5, padding 16, border-left 1px #e9eaef.
    - 24px icon: check `svg/icon-medium-w-embed-06fcf78e.svg` (#40a08d) or ✕ `svg/icon-medium-w-embed-2a68024d.svg` (#df1c41).
    - Value `.text-label-m` 16/24 w500 #171920, e.g. "6 Platforms", "Yes", "No", "Capped", "Coming Soon".
  - **Pricing Model** row (`.pricing-model` cells): flex column, gap 5. Label 16/24 w500 (e.g. "From $49/mo") + `.text-body-s` 14/20 #4c505f ‹~45ch, 2 lines›. No icon.
- **Category header** `.comparison-competitor-section-row`: flex, padding 16, bg **#f9f9fa**, border-bottom 1px #e9eaef, 57 tall. h3 `.text-heading-l` 18/24 w550 #171920: "Competitor Research & Inspiration" / "Creative Analytics & Reporting".
  - Categories carry `data-open="true"` but there is **no collapse trigger** on this template (the pricing-page collapse script finds no `.comparison-category-head`). Render them static and open.
  - The first category repeats "Mobile App" twice (live data quirk; keep it or dedupe).
- **Footer** `.comparison-grid-footer` (≥480; at ≤479 it is replaced by an identical `.comparison-grid-cta-mobile` below the scroller): flex column centred, gap 20, padding 40/0.
  - h3 `.text-display-h4` 28/36 #090a0e "Need something custom?".
  - Button `a.new-button.new-button-secondary` "Book a Demo" → /book-demo:
    - Box: 227×40, padding 8, radius 10, bg #fff, `box-shadow: inset 0 0 0 1px #ebebeb`, label 16/24 w550 **#13151a**. `transition: all .6s cubic-bezier(.19,1,.22,1)`.
    - Hover: bg #f2f2f2, ring transparent.
    - Active: color #5e6063, bg rgba(242,242,242,.5).
    - There is no chevron.

## 6. "MOST LOVED" features
`SecurityGrid` with head overline "MOST LOVED", h2 "Exclusive Foreplay Features", paragraph ‹~158ch, 3 lines›. The cards are the same 3 as on the homepage (Expert Swipe Files / Mobile App / API, same images), but the `.card-button-holder` contains **only the text** (no ghost button).

## 7. CTA
`CTA` with title = `ctaTitle` (2 lines, 960 wide, 108 tall), paragraph ‹ctaParaLen ~111ch, 2 lines› and buttons "Start free trial" + secondary **"Book a Demo" → /book-demo**. Container 1119 tall @1440.

## PSA sticky (`.comparison-psa-sticky`)
- `position: fixed; top: 550px` (= 100vh − 350), right 0, bottom 0, left 0, z 10. Padding 20 (≤991: 20/20/0). Flex, align baseline.
  - **It intercepts no clicks outside the card**; the clone should use `pointer-events:none` on the wrapper and `auto` on the card.
- Card `.comparison-psa`:
  - Box: max-width 250 (≤991: full width, radius 16 16 0 0), padding 4, bg **#0f1116**, radius 16. 250×310 @1440 at x20.
  - Header (padding 12): "🚨 PSA" (`.text-label-s` 14/20 w500 #fff) + close button `.close-button` (24px ✕ `svg/icon-medium-w-embed-71bf6726.svg`, opacity .65). Click sets the sticky wrapper to `display:none` (no animation, no persistence).
  - Body `.comparison-psa-text`: padding 12, bg rgba(255,255,255,.06), r12. `.text-body-s` 14/20 .68 ‹~204ch, 8 lines @250w›.
  - Bio (padding 12, flex, gap 10): 40×40 round headshot `/assets/templates/comparison/6840562ba89ce1d885e92f6f_zach-murray-headshot.webp`, then "Zach Murray" (14/20 w500 #fff) and "Founder @ Foreplay" (14/20 .68).
- It is identical on all entries.

## Responsive summary
| | 1440 | 991 | 390 |
|---|---|---|---|
| hero h | 769 | 957 | 1119 |
| reviews grid | 2×462 | 1×911 | 1×326 |
| tabs menu | 5 cols | 3 cols | 1 col |
| pricing grid | 2×462 | 1×927 | 1×342 |
| table | 900 (419/239/239) | 887 (340/272/272) | 480 (159×3) in a scroller |
| features grid | 3×383 | 1×478 | 1×340 |

## Motion
- PSA close (instant).
- M2 tab fades (out 100ms, in 300ms, ease).
- Product-card inner tabs (homepage behaviour).
- Bg videos autoplay.
- Hover:
  - `.comparison-product-tab` opacity .75.
  - Buttons.
  - `.home-hero-logo-wrapper` color .84 → .68.
- No IX2.

## Assets
- Shared across all entries, in `/assets/templates/comparison/`:
  - Hero video/poster.
  - Logos `683f8e06ec330518c3133d0b_foreplay-logo.svg` and `68403ae8d722073e25efd4e5_foreplay-logo-dark.svg`.
  - `683f8ccf8c4365b4bb600135_foreplay-review.webp`.
  - PSA headshot.
  - `682f8f898e2734095cb3d708_pi-spyder.webp`.
  - `cta-briefs.webm`.
  - Inline SVGs in `svg/`.
- Per entry (all 10 downloaded), as listed in `specs/data/comparison.fields.json`: competitor dark/light logos (svg/avif), review screenshot, and the callout image for motion.
- Homepage product images and features images are reused from `/assets/` root.
