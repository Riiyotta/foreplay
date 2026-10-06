Source: https://www.foreplay.co/contest

# `/contest`: Unverified Ad Awards finalists (themed campaign page)

Measured 2026-10-06 with headless Chromium at 1440 / 991 / 390, after a full scroll. Geometry is `[x, y, w, h]` in document px. Hover/breakpoint rules come from `reference/webflow.css`. Long copy is replaced by `[N chars, L lines]`.

- Title: `Foreplay Ad Awards Finalists!`. wf page `66352eb8cde532ef31185191`.
- Document height: 1440 → 9882, 991 → 16163, 390 → 23436.
- The global Navbar and Footer are unchanged. CalendarPopup ("Click Me!") is also present.
- **This page does NOT use the Lens design system.** It has its own "contest" theme:
  - `body.contest`: `background-color: #000211` (`--contest-background`), `color: #bed8ff`, `font-family: Circular, sans-serif`.
  - Headings use Inter or Circular 500 with a gradient text fill: `background-image: linear-gradient(#fff, #b5d2ff); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent`, color fallback #bed8ff.
  - Fonts: **Circular** (new, not used elsewhere). Weights loaded: 200 → `CircularXX-Light.otf`, 300 → `CircularXX-Regular.otf`, 400/500 → `CircularXX-Book.otf`, 700 → `CircularXX-Bold.otf`. All four are saved in `public/assets/pages/contest/fonts/` and should be declared with `@font-face { font-family: Circular; font-display: swap }`. Inter is also used, at weights 200 (falls back to 400 file), 500 and 600.
- Contest palette: bg #000211. Text #bed8ff. Bright text #fafafd. Accent blue #609ffe (labels). Card fill rgba(96,159,254,.10) with a 1px border of the same rgba. Hover fill #609ffe1a = rgba(96,159,254,.10) (visually the same; the card transition is all .2s). Play blue #3787ff. CTA blue #1f69ff (`--cta`; ≥1280 only), #3a6ffb below 1280. Dark card gradient #0e1227.
- Container: `.container-1200.w-container`: max-w 1200, padding-x **2.4%** (28.8 @1440, 19.8 @991) and 5% ≤767 (19.5 @390). Relative, z 4.

## Reuse map
Only the global Navbar, Footer and CalendarPopup are reused; everything else is new and campaign-specific. Build it as a self-contained `ContestTheme` (wrapper class `contest`) so its colors and fonts do not leak into the Lens tokens. Suggested Tailwind additions: `contest: { bg:'#000211', text:'#bed8ff', bright:'#fafafd', accent:'#609ffe', play:'#3787ff', card:'rgba(96,159,254,0.1)', deep:'#0e1227' }`, `fontFamily.circular: ['Circular','sans-serif']`.

---

## 1. Header `div.contest-header-section`
- Flex col, stretch, padding-top **180** (≤479 100), relative, overflow hidden. Size [0,72,1440,625] @1440, [0,72,991,625] @991, [0,72,390,487] @390.
- Background: `radial-gradient(circle farthest-corner at 50% 100%, rgba(0,2,17,0) 61%, #000211)` (≥1280 only) over `url(contest-header-bg.webp)` with size cover and position 50% 100%. Below 1280 only the image is used. The image is a dark-blue stage with concentric arcs, and its rounded bottom corners are part of the image.
- `.container-1200` → `.contest-header-graphic` (flex col, centered):
  - `.uaa-logo-holder` (margin −60 0 −20; ≤479 margin 0 0 5) → `img.image-134` `uaa-logo.avif` ("UNVERIFIED AD AWARDS" badge, 572×311) shown at **275×149.5** (195×106 @390).
  - `.image-carousel`: display none (unused).
  - `img.image-132` `header-pedistal-fadded-2.webp` (blue pedestal, 940×241), max-w 700 → 700×179.5 @1440. ≤479 max-w 120% and overflow visible (390×100 @390).
- `.contest-header-content` (relative, max-w 800, pb 22, centered) [320,521,800,176]:
  - `h1.contest-h1` "The Ad Award Finalists": **Inter 50/50, 500**, gradient text, centered, margin 20 0 22. 30/30 @390.
  - Two `.arrow-floating` decorations (absolute, 128 wide, top 55; one at left 84, one at right 84). Each holds `img contest-arrow.svg` (239×62 → 132×71). The left one is rotated `rotate(18deg)` and the right one is mirrored (`rotateY(180deg) rotate(-18deg)`, matrix3d(−0.951,0.309,…)). Hidden ≤991. They are static, with no animation.
  - `.live-event-signup` (max-w 360, mb 10) → `a.button-2-0` "Signup for Live Judging Event" → `/events/unverified-ad-awards-live-judging`. Padding 12/16, radius 7, Inter 16/24 500 #fff, centered. It is 259.5×48: one line plus 12 px padding top and bottom. Bg #1f69ff ≥1280, #3a6ffb below. `transition: all .2s ease-in-out`. **Hover:** bg #093bae, `box-shadow: 0 0 0 -20px #1151d3`.
  - `.contest-cta-block` (flex col, center, gap 10) → `p.p-regular.contest-blue` "February 27, 2024": Inter 16/24 **weight 200**, #bed8ff.
- `.contest-curtains` (absolute top −125, z 5, `filter: blur(6px)`; display none ≤479) holds two blue velvet curtain images (543×834 natural, shown at 501×622):
  - `img.contest-curtain-1` `contest-curtain-left.webp`: absolute, left −187 (≤991 −45%, ≤767 −50%), `rotate(18deg)`.
  - `img.contest-curtain-1.curtain2` `contest-curtain-right.webp`: right −187 (≤991 −45%, ≤767 −50%), `rotate(-18deg)`.

## 2. Sponsor logo row `section.contest-section > .container-1200 > .contest-logo-grid`
- Grid of 6 columns × 177, gap 16, padding 50/0 (≤479 25/0), row height 30. ≤991: 3 columns (2 rows). @390 the columns are 106 each.
- 6 `img.image-133` (max-w 135; ≤479 max-w 75), centered in cells:
  1. replo `6661cb2c74a3bcef4607b9bd_replo-full.avif` (102.5×30)
  2. Konstant `646e150348980ed19a8bee5c_konstant-logo.svg` (117.6×30)
  3. arcads `668d5cf4fd5ef2392c4aa5a9_…Logo.webp` (88.8×30)
  4. submagic `6694067365c60d35575daec1_submagic-logo.svg` (135×29)
  5. Fermat `668d71d2eae09ece9288eb18_…footer-logo.webp` (78.5×30)
  6. ugc pro `668d8180f015d2bdebe39944_ugc-pro.avif` (111×30)

## 3. Finalists `div.contest-finalists-primary` (flex col, gap 100, padding 50/0/100; @390 padding 0 0 100)
`section.contest-section > .container-1200`:
- `.contest-section-header.center` (max-w 800, mb 50, centered):
  - `h2.contest-h2` "Watch the Finalist Submissions": **Inter 45/54, 500**, gradient text, centered. 30/36 @390 (2 lines).
  - `p.p-regular.contest-blue`: [153 chars, 2 lines @1440, 4 @390], Inter 16/24 w200, #bed8ff, centered.
- Then 6 prize groups `.finalist-section-wrapper` (relative, mt 30). They are nested in the DOM; render them sequentially. Each group is a `PrizeBlock` header followed by a `.finalist---grid`.

| # | Prize title (h3) | Prize amount / type | Icon (60×60) | Sponsor logo (h 20) | Cards | Group y @1440 |
|---|---|---|---|---|---|---|
| 1 | "All Around Best Ad (6 Finalists)" | "$10,000 Cash" / "*AWARDED BY JUDGES*" | `best-ad-icon-v2.svg` | — | 6 video | 1029 |
| 2 | "Best UGC Video (3 Finalists)" | "$1,000 Cash" / judges | `award-ugc.svg` | ugc-pro.avif (74×20) | 3 video | 2519 |
| 3 | "Best Hook (3 Finalists)" | "$1,000 Cash" / judges | `award-hook.svg` | konstant-logo.svg (78×20) | 3 video | 3336 |
| 4 | "Best Single Image (6 Finalists)" | "$1,000 Cash" / judges | `award-image.svg` | — | 6 **image** | 4153 |
| 5 | "Best AI Ad (3 Finalists)" | "$1,000 Cash" / judges | `award-ugly.svg` | — | 3 video | 5802 |
| 6 | "Best Behind the Scenes (7 Finalists)" | "$2,500 Cash" / "AWARDED BY FOREPLAY" | `award-bts.svg` | — | 7 video | 6692 |

### 3.1 `PrizeBlock` (`.prize-block`)
- Flex row, space-between, stretch, padding 16, bg rgba(96,159,254,.1), border 1px solid rgba(96,159,254,.1), radius 20, overflow hidden, `transition: all .2s`. **Hover:** bg #609ffe1a. 1142×94 @1440.
- ≤767: flex column, gap 9, align start. ≤479: column, align center (351×175–225 @390).
- Left `.prize-name-icon` (flex row, center, gap 15; ≤479 column): icon 60×60 (45×45 @390), `h3.contest-h3.no-padding` (Circular 25/30 500, gradient; 20/24 @390, centered), and an optional `img.sponsored-logo` (h 20; @390 mb 15).
- Right `.prize-details` (flex col, center, align end; ≤479 align center): `h3.contest-h3` amount (25/30, right-aligned) and `.prize-type` (Circular 12.8/24 400, uppercase, #609ffe, right).

### 3.2 `.finalist---grid`
- Grid 3 × 360.8, gap 30, mt 30 @1440. @991: 2 × 465.7, gap 20. ≤767/@390: 1 column, gap 20.
- Card heights: 653 @1440 (663 when a role wraps), 758–768 @991, 638–672 @390.

### 3.3 `FinalistCard` (`._3-steps-block`)
- Flex col, justify end (≤991 start), stretch, min-h 375, bg rgba(96,159,254,.1), border 1px solid rgba(96,159,254,.1), radius 20, overflow hidden, `transition: all .2s`. **Hover:** bg #609ffe1a.
- Inner `.finalists-detail-block`: flex 1, flex col, center, gap 20, padding 16, `background-image: linear-gradient(rgba(14,18,39,0), #0e1227 50%)`, z 1.
  1. `.section-idetifyer` pill "FINALIST 1"… : Circular 16/24 300 uppercase #609ffe, padding 3.2/12.8, bg rgba(96,159,254,.06), border 1px rgba(96,159,254,.1), radius 5, `box-shadow: inset 0 -6.5px 15px rgba(96,159,254,.19)`, `backdrop-filter: blur(5px)`. About 106×32.
  2. Media, square (326.8 @1440, 431.7 @991, 317 @390):
     - **Video cards:** `a.w-lightbox` → `.div-block-285` (border 1px rgba(255,255,255,.1), radius 15, overflow hidden) → `img.image-145` (940×940 thumbnail) plus a centered play button:
       - `.play-button-1-uaa`: 100×100 circle, padding 15, bg rgba(55,135,255,.22), `box-shadow: 0 2px 7px 1px rgba(0,0,0,.17)`, `backdrop-filter: blur(5px)`, `transition: all .2s`. **Hover:** padding 5 (the inner circle grows from 68 to 88). ≤479: `transform: scale(.7)`.
       - `.play-button-2-uaa`: 68×68 circle, bg #3787ff, `backdrop-filter: blur(3px)`, holds `play-small.svg` (20×22.5, ml 3).
       - Lightbox: Webflow lightbox with JSON items. These are **YouTube or Wistia video embeds** (via embedly), e.g. `youtube.com/watch?v=k40dfSJUfhE` and `foreplay.wistia.com/medias/jtmgi3a2r5` (some are vertical 940×1671). There are 22 lightboxes. Rebuild as a modal with an iframe; this is a third-party embed.
     - **Single-image cards (group 4):** `img.finalist-image` (radius 15), square, no play button.
  3. `a.finalists---details` brand link (target _blank): flex row, gap 10, padding 10, bg rgba(255,255,255,.02), border 1px rgba(255,255,255,.04), radius 10, 46 tall. It holds a 20×20 logo (radius 4) and the brand name in Circular 16/24 **200** #fafafd (e.g. "Vitaly", "Brite Drinks").
  4. `.submitter-details` (flex col, gap 10, pt 20, border-top 1px rgba(96,159,254,.1)):
     - `.submitter-bio` (flex row, center, gap 10): avatar `img.image-162` 70×70, radius 10. Then name `p._3-steps-text` (Circular 19.2/28.8 300 #fafafd; 16/24 200 @390) and 2× `.prize-type` lines (role, location with a flag emoji; 12.8/24 uppercase #609ffe).
     - A second `a.finalists---details` with a social icon (LinkedIn `contest-linkedin.svg`, or Instagram) and the label "LinkedIn"/"Instagram".

## Motion
- No scroll/entrance animations. The one page IX2 event is a PAGE_SCROLL "Nav Scroll Stroke 4" targeting an element that is **not on the page** (no-op), so skip it.
- Hover transitions: cards and prize blocks (.2s bg), play button (.2s padding), CTA button (.2s ease-in-out).
- Lightbox open/close: Webflow default fade.

## Assets: `public/assets/pages/contest/` (all 28 cards downloaded, the page is finite)
- Header: `6635324791824bb2d4f4f6aa_contest-header-bg.webp`, `664e20a701afb605005d4609_uaa-logo.avif`, `6661ce04fa12b88886af1906_header-pedistal-fadded-2.webp`, `663533288f7831e2caef1cd4_contest-curtain-left.webp`, `66353327cf0ff9a853ec13ea_contest-curtain-right.webp`, `665dfe80ae0f13adec10f551_contest-arrow.svg`, `642cc5697dc44026a52b024a_Rectangle-4330.webp` (hidden carousel bg, unused).
- Sponsor logos: see §2.
- Prize icons: `664e42c277a8b571e16c1dd6_best-ad-icon-v2.svg`, `664f71d24dfe2b8d3b29f6ee_award-ugc.svg`, `664f71d2d2abc29e5fa80bf2_award-hook.svg`, `664f71d26ba955f8ea6a5d9b_award-image.svg`, `668ec9688836ae05695929dc_award-ugly.svg`, `664f71d216a079ebcb5acb9a_award-bts.svg`.
- Card thumbnails `*-Thumbnail.avif` / `*-Image.avif` (940×940), brand logos `image-(N).avif` (200×200), avatars (various), `647102737a861edf662aa7cd_foreplay-white-icon-logo.webp`, `677d8d64cc9f0a8e805eed54_no-user-image-square.webp`.
- Shared files that already exist elsewhere: play icon `/assets/pages/mobile-app/64502d8b633f4d3ee4584b7a_play-small.svg`, LinkedIn `/assets/pages/chrome-extension/664e52e8d13ae48e8b3788d0_contest-linkedin.svg`, Instagram `/assets/pages/chrome-extension/647662134e4be7ea6b1ba257_instagram-logo.webp`.
- Fonts: `fonts/64220781c31d0f872ead65a9_CircularXX-Light.otf` (200), `fonts/64220781c8751ee2fb742f5e_CircularXX-Regular.otf` (300), `fonts/64220781532814b7bb396241_CircularXX-Book.otf` (400/500), `fonts/642207818d4c8069d3fd2ccd_CircularXX-Bold.otf` (700).

## Caveats
- Lightbox video players (YouTube/Wistia via embedly) are third-party and were not measured.
