Source: https://www.foreplay.co/fireside

# `/fireside`: Fireside webinars hub

Measured 2026-10-06 with headless Chromium at 1440×900, 991×900 and 390×844, after a full scroll for lazy loads. Hover/breakpoint rules come from the shared CSS (`reference/webflow.css`). Geometry is `[x, y, w, h]` in document px. Long copy is replaced by `[N chars, L lines @1440]`.

- Title: `Foreplay Fireside Webinars - Tactics, Tools & Tips from Top Marketing Voices`. wf page `65a2004dcae2314a8ae8b613`.
- Document height: 1440 → 3620, 991 → 4496, 390 → 4711.
- Navbar, Footer, CalendarPopup and ExitIntentModal are global and unchanged.


**Shared blocks:** the hero is `PageHero` (`specs/_shared-community.md` §C1), the attend grid is `ImageStepCards` (§C3) and the replay tab is `ReplayRow` (§C4).

## Reuse map
| Piece | Existing |
|---|---|
| Hero shell `section#product-hero-section.section.relative > .container` and the h1 gradient treatment `.text-display-h1.hero-title` | homepage `Hero.jsx` styles (CLONE_SPEC §0.6 "Hero h1 special treatment"). Only the content differs. |
| "Why should I attend?" 3-card grid: `.lens-security` / `.lens-security-grid` / `.lens-security-card(.is-middle)` | homepage **Features** grid (CLONE_SPEC §6, `Features.jsx`), same classes and styles. Only 3 cards, each with an image body. |
| Final CTA `.home-cta` | `CTA.jsx`, unchanged |
| Buttons | `Button dark-primary` / `dark-secondary` |
| Tabs behaviour | `useTabs` in `shared.jsx` |

New components: `FiresideTabs` (3 tabs with icons), `ReplayRow` (also used on `/fireside-replays`), `SpeakerCta`, and an empty-state box.

---

## 1. Hero: `section#product-hero-section.section.relative`
| | 1440 | 991 | 390 |
|---|---|---|---|
| section | [0,72,1440,794] | [0,72,991,780] | [0,72,390,760] |
| `.container` (max 1440, px 40/32/24) → `.fireside-hero` (flex col center, text-center, padding 80/0; ≤767 40/0) | [40,72,1360,794] | [32,72,927,780] | [24,72,342,760] |

A `canvas#product-hero-canvas.product-hero-canvas` (absolute, inset 0) is present but has **0×0 size** @1440 and display:none ≤991. Nothing is drawn, so skip it.

Stack:
1. `.fireside-hero-logo-wrapper` (pb 40; ≤479 pb 24) → `img.fireside-hero-logo`: 160×52 @1440, 128×41.6 ≤991 (width 128). Source is `681bb42926f71fca09455943_foreplay-fireside-logo-2.webp` (480×156, the "foreplay fireside" wordmark).
2. `.product-hero-content` (flex col, center, gap 28; ≤479 gap 24, pb 24) [270,244,900,276]:
   - `.hero-text` (flex col, gap 16 / 12 @390, max-w 900):
     - `h2.text-display-h1.hero-title` "Discover tactics, tools & tips from top voices.": Inter Display 60/68, 600, ls −0.45 (390: 38/48, ls −0.285). It uses the homepage gradient-clip treatment: `background-image: radial-gradient(circle at 50% -100%, #fff, rgba(255,255,255,.88))`, `background-clip:text`, fill transparent. 2 lines @1440 and @991, 3 lines @390.
     - `.max-w-lg` (max-w 512) → `p.text-body-l`: [110 chars, 2 lines; 3 @390]. Color rgba(255,255,255,.68), centered.
   - `Button dark-primary` "Subscribe to the Calendar" (icon full), `href="#"`, 245.1×40. It is centered and not stretched at 390.
3. `.section-content-main` (pt 48; 390 pt 40) → `FiresideTabs`.

### 1.1 `FiresideTabs`: `.product-page-tabs.w-tabs` (Webflow tabs, `data-easing="ease"`, `data-duration-in=300`, `data-duration-out=100`, default "Upcoming Events")
- `.fireside-tabs-menu.w-tab-menu`: grid 3 × 211.6 (991: 3 × 195.6), gap 16, padding 3, overflow hidden, no bg or border. It is [384,568,673,50] @1440. ≤767: radius 10, `1fr 1fr 1fr`, full width. ≤479: 1 column, row gap 12 (at 390 it is a 195.6-wide column of 3 tabs, 150 tall, centered).
- Tab `a.product-page-tab.fireside`: flex row, center, gap 8, padding 10/20 (≤991 8/12), radius 8, `transition: all .2s ease`. Bg transparent in every state.
  - Inactive: **opacity .44**. Hover: opacity .75 and `outline: 3px #fff` (outline-offset 0; the outline has no style, so it does not render). `.w--current`: opacity 1, bg transparent.
  - Each tab has a 24×24 icon (white) and a `.text-label-m` label (16/24 500 #fff):
    1. "Upcoming Events": calendar icon `inline-product-page-tab-3ee70f.svg`
    2. "Watch Replays": play-in-window icon `inline-product-page-tab-0f7662.svg`
    3. "Become a Speaker": microphone icon `inline-product-page-tab-icon-eb5e6e.svg` (in `.product-page-tab-icon > .product-page-tab-svg`)
- `.fireside-tabs-content` (relative, overflow hidden). Pane switching fades: Webflow animates opacity in 300ms / out 100ms, easing `ease`.

**Pane 1, Upcoming Events** (`.fireside-tabs-wrapper`, padding 48/0; ≤767 40/0; ≤479 24/0): `.fireside-upcoming-collection.w-dyn-list` currently has **0 items**, so the Webflow empty state shows:
- `.empty-state.w-dyn-empty`: padding 24, bg #0f1116 (solid-800), radius 10, 673×72 @1440. Its text "No items found." is Inter 16/24, color #c3c5d2, centered.

**Pane 2, Watch Replays**: `.fireside-replay-collection.max-w-3xl.mx-auto` (max-w 720, centered) → `.fireside-replay-list` (flex col, gap 24). It holds **27 CMS items**, the same `ReplayRow` as `/fireside-replays` (see `specs/fireside-replays.md` §2 for the full component). The pane is 720×3754 @1440.

**Pane 3, Become a Speaker**: `.tabs-video-wrapper` (flex col, gap 20, padding 20/0) → `.fireside-speaker-cta`: padding 100/50 (≤479 32), bg #020308, border 1px solid #171920, radius 28, 822×422 @1440.
- `.section-head` (centered, gap 12): `h2.text-display-h3` "The stage is yours — if you’ve got something worth saying." (36/44, 2 lines, #fff, width 720), then `p.text-body-m` [124 chars, 2 lines] in rgba(255,255,255,.68), max-w 512.
- `.fireside-speaker-cta-button` (mt 30, centered) → `Button dark-secondary` "Apply Now" → `/fireside-application`, 200×42.

## 2. "Why should I attend?": `div.section.relative > .product-page-padding-y`
- `.product-page-padding-y`: flex col, padding 108/0 (991: 96/0, 390: 80/0), overflow hidden. Section [0,866,1440,784.5] @1440, [0,852,991,1739] @991, [0,832,390,1450] @390.
- `.container.section-container > .lens-security` (max 1152, gap 48). This is identical to homepage §6.
- `.section-head` (centered, max-w 720): `h2.text-display-h3` "Why should I attend?" (#fff, 1 line), then `p.text-body-m` [128 chars, 2 lines @1440, 4 @390] in rgba(255,255,255,.68), max-w 512.
- `.lens-security-grid`: 3 × 383.3, border 1px #171920, radius 28, [144,1126,1152,416.5]. ≤991: 1 column, max-w 480, centered (991: 478 wide; 390: 340). The middle card's borders switch to top/bottom 1px #171920 ≤991.
  - Card: padding 24 24 16 (≤479 24). Head: icon 24 + `h3.text-label-m` (#fff). Body `.home-card-body` (margin 0 −24; @390 margin-top −39) holds a 768×528 webp at 100% width (383×263.5 @1440, 478×328.6 @991, 340×234 @390). Footer `.card-button-holder` (flex col, justify end, pt 15, gap 15) holds `.text-alpha-50 > .text-body-m` (rgba(255,255,255,.84)).

| # | Title | Icon (saved) | Image | Body copy |
|---|---|---|---|---|
| 1 | "Industry Wisdom" | `inline-icon-medium-1df4b2.svg` | `681bbe6f0c7c257b3e711497_industry-wisdom.webp` | [115 chars, 3 lines] |
| 2 | "Tomorrow’s Trends" | `inline-icon-medium-66eeb3.svg` | `681bbe702e90daa3591b4857_tomorrows-trends.webp` | [93 chars, 3 lines] |
| 3 | "Connect with People" | `inline-icon-medium-2c6bf5.svg` | `681bbe6f77919dfb706705d8_connect-with-people.webp` | [92 chars, 3 lines] |

## 3. Final CTA
This is `CTA.jsx` unchanged. It sits at [88,1650.5,1264,1037.5] @1440, [32,2590,927,802] @991 and [24,2281,342,643] @390.

---

## Motion
- No IX2 events are scoped to this page; the ixData filter returned 0.
- Tabs: Webflow tab fade, opacity in 300ms / out 100ms `ease`. Tab link `transition: all .2s ease` (opacity .44 → .75 hover → 1 current).
- Buttons and replay rows: CSS hover only (see the `fireside-replays` spec).

## Assets: `public/assets/pages/fireside/`
| File | Element |
|---|---|
| `681bb42926f71fca09455943_foreplay-fireside-logo-2.webp` | hero logo |
| `681bbe6f0c7c257b3e711497_industry-wisdom.webp`, `681bbe702e90daa3591b4857_tomorrows-trends.webp`, `681bbe6f77919dfb706705d8_connect-with-people.webp` | attend cards |
| `inline-product-page-tab-3ee70f.svg`, `inline-product-page-tab-0f7662.svg`, `inline-product-page-tab-icon-eb5e6e.svg` | tab icons |
| `inline-icon-medium-1df4b2.svg`, `-66eeb3.svg`, `-2c6bf5.svg` | attend card icons |
| `inline-fireside-event-detail-item-f6d4c8.svg` | calendar icon in replay row date |
| `*-Thumbnail*.png` (12 files) + headshots (12) | first 12 replay rows (thumbnail, author headshot) |
| `/assets/680a4b467abdcf40d0d0fa8b_home-cta.webp` (existing) | CTA image |
| Button chevron | existing `ButtonChevron` (sprite) |
