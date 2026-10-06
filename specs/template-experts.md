Source: https://www.foreplay.co/experts/aazar-shad

> Shared patterns (breadcrumb S1, title block S2, rich text S3, cards S4–S7, headshot/socials S8, hero S9, video S10) are defined once in `specs/_shared-templates.md`. Where this file repeats one of them, the details are the measured instance for this template.

# Template: Expert profile (`/experts/:slug`)

- Data: `src/data/experts.json` (67 entries). Entries measured: `/experts/aazar-shad` and `/experts/alex-cooper`. They have identical DOM and geometry. The only differences are which social icons are visible and which "more experts" appear.
- Method: Node Playwright at 1440×900, 991×900 and 390×844, using computed styles, rects and the live CSS (`reference/webflow.css`).
- Document height: 3641 / 3949 / 5350.
- Reuse: Navbar, Footer, `Button` (primary), shared final CTA (`.home-cta`), and CLONE_SPEC §0 tokens and type classes. **This template mixes the dark hero with a white rounded block** (same `.section-white-block` as the homepage).

## 1. Section map

### 1.1 Hero: `div.section.overflow-hidden > .container.section-container > .experts-hero`
- `.container.section-container`: max 1344, padding-x 40/32/24. Inner width 1264 at 1440.
- `.experts-hero`: flex column, align center, padding 75px 0 120px. ≤767 padding 64/80. ≤479 padding-top 40 (measured 40/80 at 390). Geometry: 88,72,1264,650.8 | 32,72,927,1073 | 24,72,342,646.
- `.experts-hero-top` (`w-layout-grid`):
  - 1440: `display:grid; grid-template-columns: minmax(min-content,1fr) 1fr; gap:40px; justify-content:space-between; place-items:center stretch`. Because it sits in a centred flex column, it shrinks to content, measuring **712.5 wide (two 336.27 columns)** at x 363.7, y 147. Row height 455.8.
  - ≤991: flex column, centred. The content block and then the board stack, both 336.3 wide. Heights 878 at 991 and 526 at 390. ≤767 adds padding-bottom 80, and ≤479 resets it to 0.
- **Left: `.experts-hero-content`**. Flex col, gap 12, `align-items:flex-start; justify-content:center; text-align:left; text-wrap:balance; max-width:960`. Size 336.3×455.8. Children in order:
  1. `.blog-breadcrumb` (same component as the blog templates: padding 40/0, margin 0 -8px, gap 4, `display:none` ≤479). Items: "Experts" → `/experts`, "/", then `.text-ellipsis` with the name (href `#`). Link colour `rgba(255,255,255,.68)`, hover #fff, 16/24.
  2. `.author-page-headshot`: 96×96 (≤991 80, ≤767 64), `border:1px solid rgba(255,255,255,.1)`, radius 10, overflow hidden. The `img` fills it (94×94.7 visible; the source is 1440×1450 so it renders with a tiny overflow). → entry `avatar`.
  3. `.text-white > h1.text-display-h2`: name. Inter Display 600 44/53.76, ls −0.33px. ≤991 40/52 (−0.30). ≤479 36/48 (−0.27).
  4. `ul.footer-social-links-list.w-list-unstyled`: flex, gap 6, margin-bottom 10. Items are `li.footer-social-links-item` 28×28 at `opacity:.68`, `transition: all .2s`, hover opacity 1. Inside each is `a.footer-social-link > .icon-large` (28×28 SVG, white).
     - Fixed slot order: instagram, linkedin, tiktok, twitter, website, (image slot, always hidden), youtube. Only filled ones render.
     - Live quirk: the website `li` renders as an empty 28px slot because only its `<a>` is conditionally hidden. You may skip it.
     - Icons: `public/assets/templates/icons/expert-social-{instagram,linkedin,tiktok,twitter,website,youtube,facebook}.svg`.
  5. `.text-alpha-50 > .text-body-m`: the role/tagline (16/24, `rgba(255,255,255,.84)`). → entry `role`.
  6. `.experts-ca-buttons` (margin-top 24; ≤479 `align-self:stretch`) > `.main-cta-buttons` (flex, gap 12; ≤479 1-col grid). It holds one **`button-dark button-primary`** "Access Free Swipe File" with a right chevron at opacity 1, measured 221.6×40. → `swipeFileUrl` (external `app.foreplay.co/<handle>`), label from `ctaLabel`.
- **Right: `a.expert-board-wrapper-large`** (→ same `swipeFileUrl`). A fake browser window showing the expert's board:
  - Box: `display:flex; flex-direction:column; width:100%; height:350px` (≤991 400, ≤767 300, ≤479 200). `border:1px solid rgba(0,0,0,.12); border-radius:5px; overflow:hidden; cursor:pointer; transition: all .4s`. Hover `box-shadow: 1px 1px 30px rgba(0,0,0,.25)`. Measured 336.3×350 at x 740, y 199.9 (vertically centred in the row).
  - `.thumbnial-top-bar`: white bg, `border-bottom:1px solid rgba(122,123,127,.25)` (the `--grey-stroke` token), padding 10px 0 10px 10px, height 28. Three dots `.close`: 7×7, radius 100, margin-right 4. Colours `#ec6960`, `#f5bf50` (`.yellow`) and `#61c554` (`.green`).
  - `.div-block-140`: `flex:1; background-image: url(boardImage); background-size:cover; background-position:0 0`, 320 tall at 1440.
  - `.blur`: full size, flex centre, `backdrop-filter: blur(10px)`, bg `linear-gradient(rgba(255,255,255,.49), rgba(255,255,255,.49))`. The hero version is empty, so the board is just frosted.

### 1.2 "More ad creative experts": `section.section > .section-padding > .section-white-block`
- `.section-padding`: padding 8. `.section-white-block`: bg #fff, color `#171920`, radius 36 (≤479 16), overflow hidden, z 2. Geometry: 8,722.8,1424,933 | 8,1153,975,882 | 8,726,374,2186.
- Inside: `.container.section-container#featured-experts` (padding-x 40/32/24, inner 1264 at 1440, which is 1424−2×40 margin… measured x 88→1352).
- `.demo-socialproof`: flex col, gap 72, padding 80/80 (≤991 64/64, ≤479 40/24).
  - `.demo-socailproof-head` (1-col grid, gap 16; ≤479 24) > `.section-head.is-align-left` (left aligned, gap 12 (≤767 8), max 720):
    - `h2.text-display-h3` "More ad creative experts" (Inter Display 600 36/44, −0.26px, `#171920`).
    - `.text-solid-600 > p.text-body-l`: one-line intro (18/28, −0.26px, `#24262e`). The live sentence starts "Gain access into the brains of the worlds best creative strategists…". Use your own stand-in of about 110 chars.
- `.experts-list-wrapper` (≤479 margin-top 2em = 32) > `.collection-list-3`:
  - Grid `1fr 1fr 1fr`, gap 25 (≤991 24). ≤767 1 column, row-gap 48 (≤479 40).
  - Measured columns: 404.66 at 1440, 287.66 at 991, 326 at 390. Six items: 2 rows of 270 (row 1 is 284 at 991 because the role wraps).
  - Item `.expert-thumbnail-wrapper`:
    - `a.expert-board-wrapper` → `/experts/<slug>`. Same window chrome as the large one but `height:200px` (≤767 300, ≤479 200). Hover `box-shadow: 1px 1px 6px rgba(0,0,0,.1)`, transition .4s.
      - Board: `.div-block-140` bg = that expert's `boardImage`, 170 tall. `.blur` overlay (frosted .49 white, blur 10) centres a pill:
      - **Unlocked** (`comingSoon:false`): `.experts-tag.unlock-button`, flex, align center, padding 7px 14px, bg #fff, `border:1px solid #c3c5d2`, radius 8, color #000, line-height 16, `transition: all .2s`. Contents: a 13×18 lock/unlock SVG (`icons/expert-unlock-lock.svg`, margin-right 10) and `.text-label-s` "Unlock Swipe File" (Inter 500 14/20). Size 169.5×36.
      - **Coming soon** (`comingSoon:true`, 17 experts): same pill. Contents: a 20px-wide Lottie loader (`public/assets/templates/shared/lottie-loading-gray.json`, autoplay, loop, svg renderer, default duration 1.317s, margin-right 10) and `.text-block-11` "Coming Soon" (opacity .82). A static spinner is an acceptable fallback.
    - `.div-block-138` (flex, padding-top 20):
      - `.experts-list-headshot`: 50×50, bg-image cover = `avatar`, `border:1px solid rgba(122,123,127,.25)`, radius 8.
      - `.experts-name-bio` (flex col, justify center, padding-left 10): `.text-label-m` name (Inter 500 16/24, `#171920`) and `.text-body-s` role (14/20).
  - **Which 6**: the live CMS list shows 6 other experts, and the set differs per page. aazar-shad shows savannah-sanchez, brandon-blum, alexa-kilroy, jake-abrams, rahul-issar and lauren-mabra. Pick 6 entries ≠ current deterministically, for example the next 6 in `experts.json` order with wrap-around.
- `.v-padding-experts`: spacer after the grid inside the white block. Padding 48/48 (≤991 32/32, ≤767 24/24).

### 1.3 Final CTA
Shared `.home-cta` (1037.5 / 801.6 / 643.3 tall).

## 2. Typography roles
| Role | Class | Font / size / LH / weight / ls | Color |
|---|---|---|---|
| Breadcrumb | — | Inter 16/24 400 −0.18 | .68 white (hover #fff) |
| Name | `text-display-h2` | Inter Display 44/53.76 600 −0.33 (991: 40/52, 390: 36/48) | #fff |
| Role | `text-body-m` | Inter 16/24 400 −0.18 | `rgba(255,255,255,.84)` |
| CTA label | `text-heading-m` | Inter 16/24 550 | #090a0e on #fff |
| White-block title | `text-display-h3` | Inter Display 36/44 600 −0.26 | #171920 |
| White-block intro | `text-body-l` | Inter 18/28 400 −0.26 | #24262e |
| Card name | `text-label-m` | Inter 16/24 500 | #171920 |
| Card role | `text-body-s` | Inter 14/20 400 −0.09 | #171920 |
| Pill label | `text-label-s` | Inter 14/20 500 | #000 |

## 3. Colors, radii, shadows
- Window chrome: border `rgba(0,0,0,.12)`, radius 5. Top bar white with a `rgba(122,123,127,.25)` divider. Dots #ec6960 / #f5bf50 / #61c554. Frost `rgba(255,255,255,.49)` with blur(10).
- Headshot: hero 96 square, radius 10, border `rgba(255,255,255,.1)`. Card headshot 50, radius 8.
- Pill radius 8, border #c3c5d2.
- Hover shadows: large `1px 1px 30px #00000040`, small `1px 1px 6px #0000001a`, both `transition: all .4s`.

## 4. Motion
- No IX2 events on this template. The only animation is the Lottie loader in "Coming soon" pills (autoplay loop, 1.317s).
- Hovers: board window shadow (.4s), social icon opacity .68→1 (.2s), breadcrumb colour, primary button (bg →`rgba(255,255,255,.84)`, .2s).

## 5. Assets
- Per entry: `avatar` (headshot) and `boardImage` (board screenshot used as CSS background), stored in `public/assets/templates/experts/`.
- 3 experts have no board image (`boardImage:null`). Fall back to the Webflow placeholder look: a flat `rgba(0,0,0,.04)` box under the frost.
- Icons are in `public/assets/templates/icons/` (expert-social-*, expert-unlock-lock). The Lottie is `public/assets/templates/shared/lottie-loading-gray.json`.

## 6. JSON shape (`src/data/experts.json`, filled for all 67)
```json
{
  "slug": "aazar-shad",
  "title": "Aazar Shad",
  "name": "Aazar Shad",
  "role": "Paid social marketer for consumer companies",
  "avatar": "/assets/templates/experts/…png",
  "boardImage": "/assets/templates/experts/…png",
  "swipeFileUrl": "http://app.foreplay.co/aazar",
  "ctaLabel": "Access Free Swipe File",
  "comingSoon": false,
  "socials": {"linkedin": "…", "twitter": "…"},
  "updated": "2023-05-30"
}
```
Fields that vary per entry: name, role, avatar, boardImage, swipeFileUrl, socials, comingSoon (affects how this expert's card renders in *other* pages' grids), and the 6-card selection.

## 7. Body-block structure
This template has no rich text. The only free text is the role line and the fixed white-block intro.
