Source: https://www.foreplay.co/fireside-replays

# `/fireside-replays`: Fireside replay list (CMS)

Measured 2026-10-06 with headless Chromium at 1440 / 991 / 390, after a full scroll. Geometry is `[x, y, w, h]` in document px. Hover/breakpoint rules come from `reference/webflow.css`. Long copy is replaced by `[N chars, L lines]`.

- Title: `Fireside Replays - Advertising & Marketing Webinars`. wf page `65d65801cec63c46d772248e`.
- Document height: 1440 → 5993, 991 → 5929, 390 → 13308.
- Global Navbar, Footer, CalendarPopup and ExitIntentModal are unchanged.


**Shared blocks:** `ReplayRow` is defined here and referenced as §C4 in `specs/_shared-community.md`.

## Reuse map
| Piece | Existing |
|---|---|
| Buttons ("Watch" = `dark-secondary` with 0.68-opacity icon) | `Button` |
| Final CTA `.home-cta` | `CTA.jsx`, unchanged |
| `ReplayRow` | also used in `/fireside` "Watch Replays" tab. Build it once and share it. |

New components: `BlogBreadcrumb`, `BlogTop` (h1 + lead + 1px rule). The same blog-header pattern is used by blog-style pages, so make it reusable.

Layout container on this page: `.container.blog-container` has max-width **832 @≥1440** and **800 below 1440**, padding-x 40/32/24, centered. Content width is 752 @1440, 736 @991 and 342 @390.

---

## 1. Breadcrumb: `section.section > .container.blog-container > .blog-breadcrumb`
- Flex row, items center, gap 4, padding 40/0, margin 0 −8 (cancels the link padding), overflow hidden. 752×120 @1440. **Hidden ≤479** (display none, pb 24).
- `a.blog-breadcrumb-link` (padding 8, gap 5, nowrap, overflow hidden): text Inter 16/24 400, color rgba(255,255,255,.68) (`neutral-100`). **Hover:** color #fff (no transition defined).
  1. "Fireside Events" → `/fireside` (128.3×40)
  2. `.blog-breadcrumb-separator > .text-body-s` "/" (14/20, rgba(255,255,255,.36))
  3. "Replays" → `#` (73.7×40)

## 2. Header: `section.section`
- `.blog-top`: flex col, gap 24, pb 40 (≤479 pt 40 too). [344,192,752,112] @1440; @390 [24,72,342,208].
  - `.blog-head` (flex col, gap 8):
    - `h1.text-display-h4` "Watch Fireside Replays": Inter Display 28/36, 600, ls −0.2, #fff, balance.
    - `.text-alpha-100 > .text-body-l`: [90 chars, 1 line @1440 and @991, 3 @390], rgba(255,255,255,.68).
- Below it, a separate `.container` (max 1440, px 40/32/24) holds `.blog-line`: 1px tall, bg rgba(255,255,255,.1), full container width (1360 @1440, 927 @991, 342 @390).

## 3. Replay list: `section.section.relative#product-hero-section > .container.blog-container > .section-content-main (pt 48; 390 pt 40)`
`.fireside-replay-collection.w-dyn-list > .fireside-replay-list.w-dyn-items` is a flex column with gap 24, and holds **27 CMS items**. There is no pagination, filter or search; all items render. The list is 752×3654 @1440.

### `ReplayRow` (`.fireside-replay-item.w-dyn-item`)
| | ≥768 | 768–479 (≤767) | ≤479 |
|---|---|---|---|
| layout | flex row, align center, gap 24 | grid `auto 1fr`, rows auto auto, gap 16, padding 16, items centered | grid 1 column, rows auto auto auto, gap 16, padding 16 |
| padding | 8 24 8 8 | 16 | 16 |
| size | 752×110 (114 when the title wraps to 2 lines) | | 342×~347–378 |

- Box: bg #020308, border 1px solid rgba(255,255,255,.1) (`neutral-700`), radius 20. No hover state on the row itself.
- `img.fireside-replay-thumbnail`: 162×92, `aspect-ratio:162/92`, object-fit cover, border 1px solid rgba(255,255,255,.06), radius 12. ≤767 height 100%. ≤479 width 100% (320×182 @390). The CMS image is 1440×810 (16:9).
- `.fireside-replay-list-content` (flex 1, flex col, gap 8, padding 8/0; ≤479 pb 0):
  - `.fireside-event-details-wrapper.flex-row` (flex row, gap 12) with two `.fireside-event-detail-item` (flex row, items center, gap 9, overflow hidden):
    - Author: `.fireside-event-author-headshot` 24×24 circle (radius 100, bg-image cover) plus `.text-label-s` name (14/20 500, rgba(255,255,255,.84), nowrap), e.g. "Conor Sunderland".
    - Date: 24×24 calendar icon (`inline-fireside-event-detail-item-f6d4c8.svg`, color rgba(255,255,255,.68)) plus `.text-label-s` date in the format "November 5, 2025".
  - Title `.text-white > .text-label-m.line-clamp-2` (16/24 500 #fff, `display:flow-root`, overflow hidden, clamped to 2 lines). Titles are 31–137 chars (e.g. "Black Friday Landing Page Audit"); most fit 1–2 lines at 409 px.
- `.fireside-replay-list-button` → `Button dark-secondary` "Watch" (98.5×42) → `/events/<slug>`. It is centered vertically. ≤767 it is a flex column at full width (button 320/308 wide @390).

Row heights @1440 are 114, 110, 110, … and all rows are 752 wide. Short titles (≤ ~45 chars) give 110-high rows.

## 4. Spacer
`section.section > .section-padding` (padding 8) is an empty 16-px spacer before the CTA.

## 5. Final CTA
`CTA.jsx` unchanged, at [88,4023,1264,1037.5] @1440.

---

## Motion
None besides CSS hovers: breadcrumb link color, button hovers (CLONE_SPEC §0.7). No IX2 events, no scroll animations.

## Assets: `public/assets/pages/fireside/` (shared with `/fireside`, first 12 rows)
- Thumbnails (img, 1440×810 originals): `6900e5dcfb1b40140db4dee5_Conor--Thumbnail.png`, `68ee6e71741cd6f949cd2556_Matthew--Thumbnail-(1).png`, `68a6052daf20c8147a8740d9_Hal--Thumbnail.png`, `6894d70ee98dee7db50a2b22_AI-Chat--Thumbnail.png`, `6883c363b3cca0bf79dcc0d7_Ben-Webtopia.png`, `6859ca7f4e1ab5c974fda8e8_Luke--Thumbnail.png`, `6835feccc90e88a4d4a8d7bb_Brandon-Thumbnail-(1).png`, `6823c9686a5e01e9a09c3ba0_Max-&-Jeremy-Thumbnail.png`, `6823c542e2c3d11ea9ae5a42_Shahbaz2-Thumbnail.png`, `680a8f1a8a13f1e5fde1f2d1_Jake-Thumbnail-(1).png`, `68010d2aa20c970942242eea_SF.png`, `67f55c77b768efe2aa5e05b2_LJV-Thumbnail.png`
- Headshots (bg, 24×24 circles): `6900e464536b07367c24a9ec_Conor-Sunderland-1.webp`, `68ee636e6a0497e26f739eca_…CleanShot-2023-07-17-at-13.02-1.png`, `68a603b34a01a630ebc27670_…-512.png`, `64766a422ca53ffc07495f5a_zach.webp`, `687fdb760afaa5c56635a2a3_…-512.jpeg`, `6859ca02e2faf6cbb5d38568_…-512.png`, `6835febdce1ecf5dc35266a2_brandon-02.png`, `6823c0f93b6034fd12e34c94_maxwell.jpg`, `68010d87dccd8f7688d27499_1718254984753.jpeg`, `680a86eaf772eb6b46cd15c7_lRe3a1Ki_400x400.jpg`, `67f55d36d896bd436aab3ab6_1685370706023-(2).jpeg`
- Calendar icon: `inline-fireside-event-detail-item-f6d4c8.svg`
- Rows 13–27: reuse these files cyclically as stand-ins.
