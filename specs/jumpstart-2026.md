Source: https://www.foreplay.co/jumpstart-2026

# /jumpstart-2026: "Jumpstart 2026 - Scale Your Paid Creative in the New Year"

**Method:** see `specs/_shared-misc.md`. **Raw dumps:** `specs/_measure/jumpstart-2026-{1440,991,390}.txt`. Webflow page id `696017a7d25b6d2fa41a3e99`. Doc height: 3539 @1440, 4073 @991, 5074 @390. Fonts include Inter **700** (used by "2026"): add `@font-face{font-family:Inter;font-weight:700;src:url(/assets/pages/jumpstart-2026/fonts/62a4ee4863aafab209e40961_Inter-Bold.otf) format("opentype");font-display:swap}` (the file is downloaded). The blog/career rich-text h2s also use 700 and benefit from it. **No final CTA**: the footer follows the white block.

## Section map
| # | Section | y/h @1440 | Reuse |
|---|---|---|---|
| 1 | `section#product-hero-section > .container (1440, px 40/32/24) > .product-hero` (padding-top 10; @390 24/0) | 72 / 505 | **new** `JumpstartHero` |
| 2 | `section.section > .container > .div-block-355` (padding-top 60, margin-bottom 30) `> .home-hero-bottom` | 577 / 236 | `LogoStrip` (14 logos). Section height is 0 @390: the logo strip is hidden ≤479 |
| 3 | `section.section > .section-padding (8) > .section-white-block` (r36, @390 r16) | 843 / 1764 | **new** `JumpstartOffer` (uses `SectionHead` dark-on-white) |

## 1. Hero
- `.jumpstart-circle`: 800×800, margin-top **−305** (it rises under the navbar), position relative, max-width 100%. @390: 249×352 at y96 (margin 0).
  - `img.jumpstart-circle-image` (`/assets/pages/jumpstart-2026/69601b8767a0b290f4e1c1f9_jumpstart-circicle.webp`, 1440×1440): rendered box **986×986** @1440 (rotation enlarges the bounding box; the element is 800 square), 1123 @991, 329 @390.
  - Rotated by IX2 (see Motion). Overflow is visible.
  - Overlay `.div-block-351`: absolute inset 0, `linear-gradient(#020308 44%, rgba(2,3,8,0))`. Flex column, align centre, **justify flex-end**, gap 5%.
    - `.jumpstart-text-wrapper` (flex column centred; @390 padding-bottom 24):
      - Lottie icon 70×70 (`/assets/pages/jumpstart-2026/6961300bfb81bd5de54f4ce6_jumpstart.json`, 64×64 comp, 100fps, 305 frames = **3.05s**, loop, autoplay, svg renderer). Static first frame: `svg/div-1df13df1.svg`.
      - `h1.jumpstart-text` "JUMPSTART": Inter **600 30/44**, letter-spacing **23px**, uppercase, #fff, centred (390×44). @390: 14/44, ls 17px.
      - `h2._2026-text` "2026": Inter **700 140/140**, ls **10px**, #fff (405×140). @390: 80/80.
    - Countdown card `.jumpstart-countdown-wrapper`: 320×134 @1440, 234×134 @390. Bg #fff, radius 16, padding 24/6/6, flex column, gap 24.
      - Overline "SPECIAL PRICING EXPIRES IN" (12/16 w550 ls 2px, #090a0e, centred).
      - **Elfsight countdown widget** `elfsight-app-f56dee8a-9ff1-494a-a165-20071d344022` (script `https://elfsightcdn.com/platform.js`, lazy). It renders **0px tall in headless measurement** (lazy, third-party), so its look is unknown. Use `EmbedPlaceholder` or a simple DD:HH:MM:SS countdown in 24/32 Inter Display, #090a0e.
      - Button `a.button-dark.jumpstart-button-wide` "Claim Offer" → `#2026-offer`:
        - Box: 308×40 (222 @390), padding 8, radius 10, label #fff with chevron.
        - Bg: rgba(255,255,255,.1) + `url(/assets/pages/jumpstart-2026/6960218baf66b142e4cba775_claim-offer-bg-wide.webp)` cover.
        - Hover bg rgba(255,255,255,.16) and opacity .9; active bg .32; `.2s`.

## 3. White offer block
Inside the white block is `.container.section-container` (px 40/32/24).
- **3a. `.lens-solution-graph`** (940 max, flex column, gap 36, padding 80/0; @390 40/0, gap 32): `.section-head` on white.
  - Overline `.text-solid-400` (#4c505f) "SCALE CREATIVE VELOCITY WITH FOREPLAY".
  - h2 `.text-display-h3` 36/44, color **#171920**: "Lock-in your creative workflow in a post-andromeda world" (2 lines).
  - Paragraph `.text-body-m` 16/24 **#24262e** ‹~105ch, 2 lines›.
- **3b. `.jumpstart-grid`** (padding-bottom 48):
  - @1440 it is a Webflow grid of **12 × 32px columns, gap 80**, rows 135/135 (1264×398).
  - Placement: video card at cols 4–9 (span 6) × rows 1–2 (592×350, x424). The 4 bullets go in the corners: TL "+160M Winning ads dataset" (cols 1–3, row 1), BL "24/7 Competitor Tracking" (cols 1–3, row 2), TR "Analyze & Iterate" (cols 10–12, row 1), BR "Unlimited Ad Spend" (cols 10–12, row 2). Each is 256 wide, `align-self:center`.
  - ≤991: flex column (gap 20 @991, 36 @390). The video comes first (911×350 @991, 326×150 @390), then the bullets in DOM order: Analyze, 24/7, Unlimited, +160M.
  - Bullet `.jumpstart-bullet-wrapper`: flex column, gap 8.
    - Head row (gap 4): 24px icon (`/assets/pages/jumpstart-2026/svg/svg-w-embed-{269dcabc,ac79cd49,7d48321b,8d8c7d34}.svg`, #171920) + h3 `.text-label-m` 16/24 w500 #171920.
    - Body `.text-body-m` 16/24 **#343642** ‹~75–90ch, 3 lines @1440›.
  - Video card `.div-block-354`:
    - Box: min-height 350, radius 15, overflow hidden. It contains a full-cover `a.w-lightbox` (YouTube `k40dfSJUfhE`, the same video as the nav lightbox) over a Webflow bg video (autoplay, loop, muted).
    - Bg video: `/assets/pages/jumpstart-2026/69612b690e2aeb02841afc4f_FOREPLAY_V6_mp4.mp4` + `_webm.webm`, poster `_poster.0000000.jpg`.
    - Centre play bubble `.div-block-356`: 50×50, bg rgba(255,255,255,.5), radius 100, `backdrop-filter: blur(10px)`. 20px white play icon `svg/icon-20-w-embed-1e825de4.svg`.
- **3c. `#2026-offer.lens-solution-graph`**: section head on white.
  - Overline "THE BEST PRICE EVER".
  - h2 36/44 #171920 "Book a Call to to claim the 1 time offer to Jumpstart 2026" (sic, 2 lines).
  - Paragraph 16/24 #24262e ‹~155ch, 3 lines›.
- **3d. `#offer-booking.jumpstart-savings-wrapper`**:
  - Layout: 1024 max, centred (margin 0 120 @1440). Grid of 3 × 326, gap 16, padding 6, radius 15, border 1px **#dddee5**. 1024×92.
  - @991: 3 × 288.3. @390: flex column, gap 16 (326×260).
  - `.savings-block` (×2, left and right): flex column centred, padding 24/6/6, radius 12. Bg `url(/assets/pages/jumpstart-2026/6961428fd7a67af11e1147c1_green-bg.webp)` cover, centred.
    - Overline #fff "FOR BRANDS" / "FOR AGENCIES".
    - Glass chip `.div-block-358`: padding 8/10, radius 6, bg rgba(255,255,255,.1), `backdrop-filter: blur(5px)`, 314×32. Overline "AVG. SAVINGS $1,500" / "AVG. SAVINGS $3,200".
  - Middle `.div-block-357`: flex column, gap 6, padding 24/0/12. Overline #090a0e "SPECIAL PRICING EXPIRES IN" + a second Elfsight countdown (same widget id; 0px tall in measurement).
- **3e. Cal.com inline embed**:
  - Wrapper `.div-block-359`: margin 24/0/48, overflow hidden.
  - Container `#my-cal-inline-foreplay-demo-action-plan` (overflow scroll): 1264×490 @1440, 911×480 @991, 326×1005 @390.
  - Config: `Cal("init","foreplay-demo-action-plan",{origin:"https://app.cal.com"})`, `Cal.ns[...]("inline",{elementOrSelector:"#my-cal-inline-foreplay-demo-action-plan",config:{layout:"month_view",theme:"light"},calLink:"team/foreplay/foreplay-demo-action-plan"})`, plus the `ui` call with `{theme:"light",hideEventTypeDetails:false,layout:"month_view"}`.
  - Iframe min-height 300. The iframe content is not measurable (third-party).

## Motion
- **IX2 e-255 → a-82 "Jumpstart-Circle-Rotate"** (PAGE_START, loop, all breakpoints). Target is the `.jumpstart-circle-image`.
  - Group 0 (initial state): rotateZ 0deg, duration 500.
  - Group 1: rotateZ **360deg** over **60000ms**, easing linear (none specified), then the loop restarts.
  - CSS equivalent: `animation: spin 60s linear infinite`.
- Lottie icon: 3.05s loop.
- Bg video autoplay. Lightbox. Hover on the Claim button and logo strip (`.home-hero-logo-wrapper:hover {color: rgba(255,255,255,.68)}`).
- Inert scripts on the page whose targets are absent, so skip them: SVG path draw, AutoScrollCarousel, `[data-tabs]` (the `.jumpstart-grid` carries `data-tabs` but has no tab links).
