Source: https://www.foreplay.co/industries/agencies

# Template: industries (`/industries/:slug`, 6 entries)

**Method:** see `specs/_shared-misc.md`. **Raw dumps:** `specs/_measure/template-industries.agencies-{1440,991,390}.txt`. **Per-entry data (all 6 extracted):** `specs/data/industries.fields.json`. I verified that `/industries/agencies` and `/industries/ecommerce` share the same DOM; only CMS fields differ. Webflow template page id `690cd83fdff1536d935ce74f`. Doc height for agencies: 7282 @1440 (footer at 6390), 8334 @991, 8997 @390.

## Fields needed in `src/data/industries.json` (per entry)
| Field | Example (agencies) | Notes |
|---|---|---|
| `title` (meta) | "Foreplay for Agencies - Acquire & Retain Clients" | |
| `icon` | `/assets/templates/industries/svg/icon-agencies.svg` | also `IconAgencies` etc. in `svgs.jsx` |
| `overline` | "FOREPLAY FOR AGENCIES" | |
| `h` | "Win more clients and keep them longer with Foreplay" | |
| `paraLen` | 210 | hero paragraph (stand-in) |
| `carousel[]` | 9 logo images (200×200 avif) | marquee |
| `sectionHeads[1]` | "TESTIMONIALS" / title / paraLen | |
| `testimonials[]` | 2–4 items: {link, logo, quoteLen, headshot, name, role, bg} | agencies 3, freelancers 4, mobile-apps 2 |
| `sectionHeads[2]` | "5 APPS IN ONE" / title / paraLen | M2 head |
| `tabsDefault`, `tabOrder` | "Lens"; Lens, Spyder, Swipe File, Discovery, Briefs | info-education starts with Spyder; freelancers with Discovery |
| `sectionHeads[3]` | e.g. "AGENCY ADVERTISING INSPIRATION" / "Browse top performing agency ads" | the paragraph is **empty** (0×0) on all entries |
| `examples[3]` | {avatar, name, days, img} | days are "203D", "7D", "109D" on every entry |
| `examplesCta` | "See thousands of high performing agency ads." | the button is always "Start Browsing" → app.foreplay.co/sign-up |
| `ctaTitle`, `ctaParaLen` | "Creative experience your clients expect, results they can’t ignore." / 145 | CTA buttons are "Start free trial" + "Book a Demo" → /book-demo |

## Section map (DOM order)
| # | Section | y/h @1440 | Reuse |
|---|---|---|---|
| 1 | Hero + logo marquee `div.section > .container.section-container` | 72 / 634 | `SectionHead` variant + **new** `IndustryMarquee` |
| 2 | Testimonials `div.section > .product-page-padding-y` | 706 / 2167 | **new** `IndustryTestimonials` |
| 3 | "5 APPS IN ONE" product tabs | 2872 / 1246 | **M2** (`_shared-misc.md`) |
| 4 | Ad examples `div.section > .product-page-padding-y` | 4118 / 1113 | **new** `IndustryExamples` |
| 5 | Final CTA (custom title/para; secondary "Book a Demo" → /book-demo) | 5231 / 1119 | `CTA` with props |

## 1. Hero
- `.section-head` (720 max, centred; there is no top padding: the section starts right under the nav) `> .section-head-wrapper` (flex column centred, gap 12):
  - `.industries-icon`: 60×60, flex centred, margin 20/0, radius 15, border 1px rgba(255,255,255,.16). Inside, `.icon-36` holds the 32×32 icon, color .36.
  - Overline h1 = `overline`. h2 `.text-display-h2` = `h` (2 lines @1440/991; 3 lines @390, 36/48). Paragraph 18/28 .68 ‹paraLen, 4 lines @1440›.
  - `.industru-buttons-padding` (padding-top 20) `> .main-cta-buttons` (gap 12): primary "Start Free Trial" → app.foreplay.co/sign-up (159×40) and secondary "Book a Demo" → /book-demo (129×42). @390 the buttons stack, at 159 wide, centred (114 tall).
- **Marquee** `.industries-carousel-container`:
  - Box: flex row, justify space-between, padding 64/0/24, position relative, overflow hidden. 1264×188 @1440.
  - Two identical `.industries-carousel-logos` rows (each 100% of the container width; flex, align stretch, `justify-content: space-around`) contain 9 `.industry-carousel-logo` each.
  - Logo `img.industry-carousel-image`: 100×100 (65 @991, **25 @390**), radius 20, border 1px rgba(255,255,255,.16).
  - Fade `.industries-carousel-fade`: absolute inset 0, `linear-gradient(90deg, #020308, rgba(2,3,8,0) 15%, rgba(2,3,8,0) 85%, #020308)`.
  - **Motion:** IX2 e-244 → a-78 "Industries Carousel" (PAGE_START, loop, all breakpoints). Both rows get `translateX(0%)` → `translateX(-100%)` over **20000ms**, linear, then restart. CSS equivalent: `@keyframes marquee{to{transform:translateX(-100%)}}` with `animation: marquee 20s linear infinite` on both rows.

## 2. Testimonials
- Head: overline "TESTIMONIALS", h2 (2 lines), paragraph ‹~114–169ch, 3 lines›.
- `.industries-testimonial-wrapper`: flex column, gap 64, padding-top 48 (@390 40).
- Card `.industries-testimonial` @1440:
  - Box: 1264 wide, height 443–558 depending on quote length. Flex column, align start, padding 48, radius 20, border 1px rgba(255,255,255,.1), position relative, overflow hidden.
  - Content `.industries-testimonial-content` (flex column, **gap 74**, z 1):
    - `a.industries-testimonial-link` → company site (target _blank; hover opacity .8). Holds `img.industries-testimonial-logo` (max-width 125; e.g. 119×75 or 125×33).
    - `.industries-testimonial-copy` (max-width 60% = 700) `> blockquote.text-display-h4`: Inter Display 600 28/36, ls −0.2, #fff, no border/padding. ‹quoteLen 106–271ch, 3–6 lines›. Quotes include the curly quote marks.
    - Bio row (flex, gap 12): headshot 64×64 radius 10, then name `.text-label-m` 16/24 w500 #fff and role `.text-body-s` 14/20 .68.
  - Background photo `.industry-testimonial-image-holder`:
    - Box: absolute, top 0, right 0, bottom 0, left **27.4%** (346/1264). The image covers it; source 1440×828 webp.
    - Fade overlay `linear-gradient(90deg, #020308, rgba(2,3,9,0))` from the left edge.
- ≤991:
  - The card has padding 24 (@390 12).
  - The image holder becomes **static and first**: 877×506 @991 (316×183 @390), radius 15.
  - The fade overlay stays absolute over the whole card (inset 0).
  - The content follows with padding-top 24 and gap 48. The quote is full width (877 @991).
  - Card heights: 923/881/921 @991; 792 @390.

## 3. Product tabs: **M2**
Head: overline "5 APPS IN ONE", h2 (2 lines), paragraph ‹~105–140ch, 3 lines›. The default tab and order come from the fields.

## 4. Ad examples
- Head: overline + h2 (1 line @1440); the paragraph element is empty (0 height) on every entry.
- `.industries-examples-grid` @1440/991:
  - Grid: 3 × 410.7, gap 16, position relative (1264×772). @991: 3 × 302.3, gap 10 (927×567).
  - Card `.industries-examples-card`: bg rgba(255,255,255,.1), radius 16 (@991 12).
    - Header `.industries-examples-header` (flex, align centre, gap 8, padding 12; @991 8/8/8/9, 40 tall):
      - Avatar 28×28 r6 (24 @991).
      - Name `.text-label-m.ad-card-text` 16/24 w500 #fff.
      - Then `.industries-examples-date` (flex, gap 8): green dot 5×5 **#10b981** r100 + `.text-label-s` 14/20 w500 .68 "203D".
    - Content (padding 0 4 4): `img.industries-examples-image` 403×716 (9:16; sources 1080×1920 / 720×1280), radius 12.
  - Fade `.industries-examples-fade`: absolute inset 0, `linear-gradient(rgba(2,3,8,0), #020308)` (the bottoms of the cards fade into the page).
  - CTA bar `.industries-examples-cta` sits over the faded bottom: **margin-top −75**, position relative, z 1, flex row, align centre, padding 8/8/8/16, 1264×58.
    - Text `.text-label-l` 18/24 w500 #fff = `examplesCta`.
    - Then `button-dark.button-secondary` "Start Browsing" (162×42) → app.foreplay.co/sign-up, placed right after the text (not right-aligned).
- @390 the cards form a **stacked deck**:
  - The grid is flex column with padding-top 75.
  - card-1: relative, z 3, 342×638.
  - card-2: margin-top −752, `scale(.95)`, z 2.
  - card-3: margin-top −749, `scale(.9)`, z 1.
  - Result: the two back cards peek out above card-1.
  - The fade and the CTA bar are `display:none` at ≤479.

## 5. CTA
`CTA` with title = `ctaTitle` (2 lines, 960 wide, 108 tall), paragraph ‹ctaParaLen›, buttons "Start free trial" + "Book a Demo" (→ /book-demo). Block height 1119 @1440.

## Motion
- Marquee: IX2 a-78, 20s linear loop.
- M2 tab fades.
- Hover: testimonial link opacity .8; product tab opacity .75; buttons.
- No scroll-triggered animations.

## Assets
`/assets/templates/industries/`, all 6 entries downloaded:
- Carousel logos, testimonial logos, headshots and background photos.
- Example avatars and 9:16 ad images.
- Icons in `svg/icon-<slug>.svg`.
- A few files were already present and are referenced from `/assets/pages/contest-submission/` (e.g. `6478c433c4fc1d3402c883fc_the-ridge.webp`, `66269cefcd8042e78308e9eb_dara-logo.avif`, `66902b7a4e591b4dcb8e8376_1708959987676.webp`).

Every field in `specs/data/industries.fields.json` already points at its final local path.
