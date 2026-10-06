Source: https://www.foreplay.co/experts

# `/experts`: Experts listing (CMS)

Measured 2026-10-06 with headless Chromium (Playwright) at 1440×900, 991×900 and 390×844, after scrolling the full page to trigger lazy loads. Values come from `getComputedStyle`/`getBoundingClientRect`, and hover/breakpoint rules come from the live shared CSS (`foreplay-3-0.shared.850e08b99.min.css` = `reference/webflow.css`). Geometry is written `[x, y, w, h]` in document px. Copy is not transcribed: long text is given as `[N chars, L lines @1440]`.

- Title: `Experts | Swipe Files from Leading Creative Strategists`. Webflow page id `647668309e49d3c3f7a76547`.
- Document height: 1440 → 8666, 991 → 12570, 390 → 20090.
- Body and shell are the same as the homepage (CLONE_SPEC §0.2). Navbar, Footer, calendar pop-up ("Click Me!" widget bottom-left) and exit-intent modal are all identical, so reuse `Navbar`, `Footer`, `CalendarPopup` and `ExitIntentModal`.


**Shared blocks:** the white list wrapper is `CmsWhiteBlockList` (`specs/_shared-community.md` §C7).

## Reuse map
| Piece | Existing |
|---|---|
| Containers `.container.section-container` (max 1344, px 40/32/24) | CLONE_SPEC §0.3 |
| Overline, `text-display-h2`, `text-display-h3`, `text-body-l`, `text-body-m`, `text-label-m`, `text-label-s`, `text-body-s` | tailwind `fontSize` tokens |
| Buttons `dark-primary` (with icon full opacity), `dark-secondary` | `shared.jsx` `Button` |
| White rounded block `section > .section-padding(p 8) > .section-white-block` (bg #fff, r 36 / 16 ≤479, overflow hidden, z2) | same wrapper as homepage §3/§5 |
| Final CTA `.home-cta` ("Ready to ship more winning ads?" + Start free trial / View Pricing + home-cta.webp) | `CTA.jsx`, identical, same geometry as homepage §7 |
| Background video `.w-background-video` | `shared.jsx` `BgVideo` |

New components: `ExpertsHero`, `ExpertBoardCard` (featured grid), `ExpertRowCard` (more-experts list), and `UnlockTag`.

---

## 1. Hero: `div.section.overflow-hidden > .container.section-container > .experts-hero`
| | 1440 | 991 | 390 |
|---|---|---|---|
| section | [0,72,1440,737] | [0,72,991,1034] | [0,72,390,820] |
| `.experts-hero` (flex column, align center) padding | 75 top / 120 bottom | 75 / 120 | 40 / 80 (≤767: 64/80, ≤479: top 40) |
| `.experts-hero-top` | grid `minmax(min-content,1fr) 1fr` = 612 + 612, gap 40, rows 542, items center/stretch → [88,147,1264,542] | flex column, centered, gap 40 → [90.5,147,810,839] | flex column, [24,112,342,700] |
| `.experts-hero-content` (flex col, gap 12, max-w 960, left aligned, text-wrap balance) | [88,294,612,247.5], vertically centered in the 542 row | [90.5,147,810,192] | [24,112,342,360] |
| `.experts-loop-animation` (video frame) | [740,147,612,542] | [192,379,607,607] (width 75%, height auto) | [24,512,342,300] (width 100%, height 300) |

Content stack, top to bottom:
1. `.overline-heading-wrapper` (mb 10) → `.text-alpha-100` → `h1.text-overline`: "EXPERTS". It is Inter 12/16, weight 550, ls 2px, uppercase, color rgba(255,255,255,.68).
2. `h1.text-display-h2` in `.text-white`: "Swipe Files from Leading Creative Strategists". Inter Display 44/53.76, weight 600, ls −0.33, #fff, left aligned, balance. Lines: 2 @1440, 1 @991, 3 @390 (36/48). The block is 107.5 tall @1440.
3. `.text-alpha-50 > .text-body-m`: subtitle, [78 chars, 1 line @1440, 2 @390]. Inter 16/24, color rgba(255,255,255,.84), width 563.
4. `.experts-ca-buttons` (mt 24; ≤479 align-self stretch) → `.main-cta-buttons` (flex gap 12; ≤479 grid 1 col, gap 12):
   - `Button dark-primary` "Browse Experts" with the icon at full opacity, `href="#featured-experts"` (in-page anchor), 166.9×40.
   - `Button dark-secondary` "Become a Expert" (sic), `href="/experts-application"`, 158.4×42. At 390 both buttons are full width (342).

Video frame `.experts-loop-animation`:
- Box: padding 20 (≤991 12, ≤479 8), bg rgba(255,255,255,0.03), border 1px solid rgba(255,255,255,0.1), radius 20 (≤479 12). Flex column.
- Inside is `.background-video-3.w-background-video` (relative, radius 10 / 4 ≤479, overflow hidden, z1). @1440 it is 570×500; @991 and @390 it has `aspect-ratio:1/1` (581×581, 324×282).
- Video: autoplay, loop, muted, playsinline, object-fit cover. Sources are `Plain Experts-transcode.mp4` and `.webm`, and the poster `Plain Experts-poster-00001.jpg` is used as background-image. The clip is a 3D render of a glass Foreplay logo-grid with spheres, in purple/blue tones.

## 2. Featured Experts: white block
Wrapper: `section.section > .section-padding (p 8) > .section-white-block` [8,817,1424,5871] @1440 (991: [8,1114,975,9542]; 390: [8,900,374,16752], r 16). Inside is `.container.section-container#featured-experts` (the anchor target).

### 2.1 Head `.demo-socialproof` (flex column, gap 72, padding 80/0 @1440, 64/0 @991, 40 top/24 bottom @390)
- `.demo-socailproof-head`: grid 1 col, gap 16 (24 @390) → `.section-head.is-align-left` (flex col, gap 12 / 8 @390, max-w 720).
  - `h2.text-display-h3` "Featured Experts". Inter Display 36/44, 600, ls −0.26, color #171920. Width 276.
  - `p.text-body-l` in `.text-solid-600`: [130 chars, 2 lines @1440, 4 @390]. Inter 18/28, ls −0.26, #24262e, max-w 720.
- Section heights: 272 @1440, 240 @991, 228 @390.

### 2.2 Featured grid `.experts-list-wrapper > .w-dyn-list > .collection-list-3.w-dyn-items`: **18 CMS items**, no pagination, no filter
- Grid: 3 cols (`1fr 1fr 1fr`) = 404.66 each, gap 25 @1440 → [88,1089,1264,1759]. @991: 3 cols × 287.66, gap 24. ≤767: 1 col, row gap 48 (≤479: 40, col gap 24). @390 it is 326 wide, and the list has margin-top 32.
- Row height 270 (item = 200 board + 70 meta); some rows are 284 or 304 when a title wraps to 2 lines.

**`ExpertBoardCard`** (`.expert-thumbnail-wrapper.w-dyn-item`):
- `a.expert-board-wrapper` (href `/experts/<slug>`): flex column centered, height 200 (≤767: 300, ≤479: 200), border 1px solid rgba(0,0,0,0.12), radius 5, overflow hidden, `transition: all .4s ease`. **Hover:** `box-shadow: 1px 1px 6px rgba(0,0,0,0.1)`.
  - `.thumbnial-top-bar`: macOS window chrome. 28 tall, bg #fff, padding 10/0/10/10, bottom border 1px rgba(122,123,127,0.25) (`--grey-stroke`). It holds three 7×7 dots, radius 100, mr 4: `.close` #ec6960, `.close.yellow` #f5bf50, `.close.green` #61c554.
  - `.div-block-140`: flex 1 (170 tall), background-image = expert's CMS "Opengraph" screenshot, cover, position 0 0.
    - `.blur` overlay: full size, flex centered, `background-image: linear-gradient(rgba(255,255,255,.49), rgba(255,255,255,.49))`, `backdrop-filter: blur(10px)`. This means every board thumbnail is shown frosted.
      - `UnlockTag` (`.experts-tag.unlock-button`): flex row, items center, padding 7/14, bg #fff, border 1px solid #c3c5d2, radius 8, `transition: all .2s ease`. **Hover:** bg `rgba(255,255,255,0.23)` (#ffffff3b). There are two variants, picked by the CMS condition (the other variant is `w-condition-invisible`):
        - **Unlock** (15 of 18 featured): lock icon 13×18 (`.html-embed-4`, mr 10, svg `inline-experts-tag-062879.svg`, fill black) plus `.text-label-s` "Unlock Swipe File" (Inter 14/20, 500, #000). Size 169.5×36.
        - **Coming soon** (3 of 18 featured: items 2, 3 and one more): a 20×22 Lottie loader (`.lottie-animation-6`, mr 10, `data-src` 97443-loading-gray-optimized.json, autoplay, loop) plus `.text-block-11` "Coming Soon" (Inter 16/16, 400, opacity .82, #000). Size 159×38.
- `.div-block-138` (meta row): flex row, padding-top 20, height 70.
  - `.experts-list-headshot`: 50×50, bg-image cover (CMS headshot), border 1px solid rgba(122,123,127,.25), radius 8, flex none.
  - `.experts-name-bio`: flex col, centered, padding-left 10.
    - `.text-label-m` name (e.g. "Jack Kavanagh"): Inter 16/24, 500, #171920.
    - `.text-body-s` role (e.g. "Head of Marketing"): Inter 14/20, 400, #171920. A long role wraps to 2 lines, which makes the row 284.
- Featured names in order (short CMS titles): Jack Kavanagh, Alexa Kilroy, then 16 more (the 8th is "Jake Abrams, Founder"). Write stand-ins for the rest.

### 2.3 More Experts head
Second `.demo-socialproof` (same styles) holding only `h2.text-display-h3` "More Experts". It sits at [88,2848,1264,204] @1440.

### 2.4 More Experts list `.collection-list-wrapper-6.w-dyn-list` (mb 50) `> .more-experts-grid.w-dyn-items`: **67 CMS items**, no pagination
- Grid: 2 cols × 622, gap 20 @1440 → [88,3052,1264,3586]. ≤991: 1 col, gap 25 (911 wide @991). ≤767: 1 col, gap 20.
- Item heights: 84 (98 when the role wraps) @1440 and @991. @390 they are 136–170 because the content stacks.

**`ExpertRowCard`** (`a.more-experts`, href `/experts/<slug>`):
- Flex row, space-between, items center, padding 16, bg #fff, border 1px solid #e9eaef, radius 10, `transition: all .2s ease`. **Hover:** border-color #dddee5, bg #f9f9fa. ≤767: flex column, align-start.
- Left `.div-block-152` (flex, max-w 62%; ≤767 max-w 100% and mb 1em = 16px) holds the headshot (50×50, same as above) and `.experts-name-bio` (pl 10) with name `.text-label-m` and role `.text-body-s`. Both are **#000** here, not #171920.
- Right: `UnlockTag` (unlock variant 183.5×36, its label uses `.text-block-11` 16/16 at .82 opacity) or the Coming Soon variant. 17 of the 67 rows show Coming Soon (Lottie).
- The first two names are "Dara Denney" and "Mirella Crespi". Roles are short (≤35 chars).

## 3. Final CTA
This is the homepage `CTA.jsx` unchanged: `.home-cta` at [88,6696,1264,1037.5] @1440, [32,10664,927,802] @991 and [24,17660,342,643] @390. Heading "Ready to ship more winning ads?", subtitle (1 line), buttons "Start free trial" (`https://app.foreplay.co/sign-up`) and "View Pricing" (`/pricing`), image `home-cta.webp` (margin −101/−40 @1440, −74/−40 @991, 0 −64 −68 @390).

---

## Motion
- **No IX2 interactions** target this page: the ixData event list filtered by page id and by on-page classes is empty. Nothing animates on scroll.
- Hover transitions are CSS only: board card shadow (.4s ease), row card bg/border (.2s ease), unlock tag bg (.2s ease), and buttons (homepage §0.7).
- Video: autoplaying looped background video in the hero.
- Lottie: `97443-loading-gray-optimized.json` (gray spinner) in each Coming Soon tag, autoplay, loop (`data-autoplay=1`, `data-duration=0`). Use `lottie-web` or a CSS spinner of the same size (20×20 rendered inside 20×22).
- Homepage global code (`.code-global` embeds): `--expo-out: cubic-bezier(0.16,1,0.3,1)` etc. These are already handled in the homepage build.

## Assets (local ↔ element)
All are in `public/assets/pages/experts/` unless noted. CMS grids: images were downloaded for the first 12 cards of **each** list only; the remaining cards reuse these files as stand-ins.
| Local file | Element |
|---|---|
| `63e27aa0d157dc463ee3e125_Plain-Experts-transcode.mp4`, `…transcode.webm` | hero `.background-video-3` sources |
| `63e27aa0d157dc463ee3e125_Plain-Experts-poster-00001.jpg` | hero video poster / bg |
| `63bc3cc4e525a23812b95955_97443-loading-gray-optimized.json` | Lottie in Coming Soon tags |
| `inline-experts-tag-062879.svg` (13×18, viewBox 0 0 13 18) | lock icon in `UnlockTag` |
| `67feffc1d691b7460b8e0725_Jack-Kavanagh-Opengraph.png` | featured card 1 board bg |
| `6380e2f937ad31984c137bdb_Screen-Shot-2022-11-25-at-9.44.22-AM.png` | default board bg reused by most featured cards (2–9, 11) |
| `6913f51c0508cc809272cc06_Screenshot-2025-11-11-at-9.46.43-PM.png` | featured card 10 board |
| `64dbc286844e1e8a399e128f_Chase-Chappell-Opengraph.png` | featured card 12 board |
| `67fefc6dd7ab3afccd75bd2d_…-512.png`, `6380fd1ebb23d2aeff1894a0_vsIdn6Ac_400x400-1.png`, `63b4ef2dc6c0f9cea84e73a3_sarah-l-headshot.png`, `6380fcd7f0ef34d2902c53fd_fRLy0HaQ_400x400.jpg`, `62b1cdb9bb1ed40405277c8c_suYQfIjN_400x400.jpg`, `63b4ef68ef6aaf56f1ef0e02_Untitled-1.png`, `6380fca5f0ef3482672c52cb_k3DxLX12_400x400.jpg`, `63b88b7475b8e5fcb26e9a18_BHgowEKs.jpg`, `63bb71f5c0213ae9926ef6a7_Lauren-Schwartz.png`, `6913f4862c0dcd3e42bbac55_…-512.jpeg`, `6380fba7490c212e629e1c79_kFLFTJeP_400x400.jpg`, `64dbc2771386946f9c11062f_image.png` | headshots (featured 1–12 and more-experts 1–12 overlap) |
| `6380e23506267a66a196b21f_8Iyliatc_400x400.jpg`, `63b4edef92ba88d89dfa1698_1636234763494.jpg`, `63f6a0131533e7a5f4dc0acf_1666670763887.jpeg`, `63f6a62e1e75bb4d55bcace2_dano.png`, `640670509cf4fd7d86d06cf1_aGW0P3kZ_400x400.jpg` | more-experts headshots |
| `/assets/680a4b467abdcf40d0d0fa8b_home-cta.webp` (existing) | CTA image |

The CMS assets come from the site's second asset bucket `cdn.prod.website-files.com/62a4f1b9ff17080082bbb71e/`.

## Caveats
- Expert detail pages (`/experts/<slug>`) were not reconned.
- The "Unlock" vs "Coming Soon" state comes from a CMS field. Counts were measured: featured 15/3, more 50/17.
