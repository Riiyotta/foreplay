Source: https://www.foreplay.co/bounties

# `/bounties`: Bounties board

Measured 2026-10-06 with headless Chromium at 1440 / 991 / 390. Geometry is `[x, y, w, h]` in document px. Hover/breakpoint rules come from `reference/webflow.css`. Long copy is replaced by `[N chars, L lines]`.

- Title: `Bounties - Work with top Foreplay Marketers & Builders`. wf page `68adc1813a6883f39fc9ae86`.
- Document height: 1440 → 2239, 991 → 2300, 390 → 3369.
- Global Navbar, Footer, CalendarPopup and ExitIntentModal are unchanged. There is **no** final CTA block.


**Shared blocks:** the hero shell is `PageHero` (`specs/_shared-community.md` §C1). Only the hero icon video, the floating characters and the bounty list are page-specific.

## Reuse map
| Piece | Existing |
|---|---|
| Hero shell `section#product-hero-section.section.relative > .container` | homepage Hero wrapper (the inert `canvas#product-hero-canvas` is 0×0 here too; skip it) |
| `.product-hero-content` / `.hero-text` stack, `.text-overline`, `.text-display-h2`, `.text-body-l` | same classes as `/fireside` hero |
| `Button dark-primary` (icon full) | `Button` |
| Section padding `.product-page-padding-y` (108/0; ≤991 96/0; ≤479 80/0) and `.container.section-container` | as on `/fireside` §2 |

New components: `BountyCharacter` (floating avatar + role tag), `BountyCard`, `StatusTag`.

---

## 1. Hero `section#product-hero-section.section.relative > .container > .bounties-hero`
- `.bounties-hero`: flex col, align center, text-center, relative. Padding-top 10 @1440 (≤767 64, ≤479 24/24). Size [40,72,1360,484] @1440, [32,72,927,373] @991, [24,72,342,594] @390.
- `.bounties-hero-icon` (max-w 150, mt 50; **hidden 768–991**; ≤479 max-w 100): `.code-video.w-embed` holds a `<video autoplay loop muted playsinline>` (object-fit contain, 150×150) with sources `…903bcbf3-69a6-4f0d-8277-159c9f4a9ecf_1.webm` (video/webm) and `….mov` (typed video/mp4). It is a looping 3D silver object on a transparent background.
- `.product-hero-content` (flex col, center, gap 28; 390 gap 24, pb 24) [286.5,282,867,226] @1440:
  - `.hero-text` (gap 16 / 12):
    - `h1.text-overline` "BOUNTIES": 12/16 550 ls 2, uppercase, **rgba(255,255,255,.36)**, centered.
    - `.text-white > h2.text-display-h2` "Work with top Foreplay Marketers & Builders": 44/53.76 #fff centered. 1 line @1440 (867 wide) and @991, 3 lines @390.
    - `.max-w-lg` (max-w 512) → `p.text-body-l`: [110 chars, 2 lines; 3 @390], rgba(255,255,255,.68).
  - `Button dark-primary` "Post a Bounty (Coming Soon)" (icon full), `href="#"`, 270×40.
- `.section-content-main` (pt 48 / 40): empty.
- `.background-highlight`: absolute 750×750 circle (radius 100%), top 10, horizontally centered (left/right 305 @1440), `background-image: radial-gradient(circle at 50% 0, #fff, rgba(255,255,255,0) 86%)`, **opacity .05**. This is a soft glow behind the hero.
- `.bounty-character-holder`: 4 decorative avatars scattered around the hero at ≥992. At 768–991 they form a static flex row (gap 20) under the button. Hidden ≤767.

`BountyCharacter` (`.bounty-character`, flex col, center, `transform-style: preserve-3d`):
- `img.bounty-character-image`: 68×68 circle, border 1px rgba(255,255,255,.1).
- `.bounty-character-tag` (mt −5, flex row, center, gap 4, padding 4/8, bg #171920, radius 8): a 20×20 icon (color rgba(255,255,255,.44)) and `.text-label-s` (14/20 500, rgba(255,255,255,.44)).

| Class | Position @≥992 (in `.bounties-hero`) | Measured rect @1440 | Image | Tag text | Icon |
|---|---|---|---|---|---|
| `.bounty-character` | `inset: 10% auto auto 50px` | [90,120,99,91] | `bounty-headshot-2.webp` | "Designer" | `inline-bounty-character-tag-2935dc.svg` |
| `.bc-2` | `inset: 20px 15% auto auto` | [1084,92,112,91] | `bounty-headshot-3.webp` | "n8n Expert" | `inline-bounty-character-tag-ca3231.svg` |
| `.bc-3` | `inset: auto 50px -30px auto` | [1186,495,164,91] | `bounty-headshot-1.webp` | "Creative Strategist" | `inline-bounty-character-tag-263045.svg` |
| `.bc-4` | `inset: auto auto 0% 75px` | [115,465,121,91] | `bounty-headshot-4.webp` | "Video Editor" | `inline-bounty-character-tag-08b3bc.svg` |

The avatars are static: no IX2 and no CSS animation were found, and no inline transforms were applied on load or scroll.

## 2. Bounties list: `div.section.relative > .product-page-padding-y > .container.section-container > .bounties-list`
- `.bounties-list`: flex col, stretch, gap 24. [88,664,1264,535] @1440, [32,541,927,559] @991, [24,746,342,756] @390.
1. Header row `.div-block-346` → `StatusTag` "Open Bounties": `.bounties-item-tag.status` (flex row, center, gap 5, padding 4/8/4/4, bg rgba(124,221,181,.15), radius 8). It holds a 20×20 status icon (`inline-bounties-item-tag-9060be.svg`, color #7cddb5) and `.text-label-s` in #7cddb5. 134×28.
2. CMS list `.w-dyn-list > .w-dyn-items`: **1 item** currently (no pagination or filter).
3. A placeholder card.

### `BountyCard` (`a.bounties-item-linkblock` → `/bounties/<slug>`)
- Flex col, stretch, gap 16, padding 16, bg #020308, border 1px rgba(255,255,255,.1), radius 20, color rgba(255,255,255,.68), `transition: all .2s`. **Hover:** border rgba(255,255,255,.2) (`neutral-500`), bg #090a0e. Height 234 @1440, 258 @991, 455 @390.
- `.bounties-item-header` (flex row, center; ≤479 column, align start, gap 5):
  - `.bounties-item-amount` (flex 1, row, center): coin icon 28×28 (`inline-bounties-item-amount-46b9f0.svg`, #ffd24d), then "$" and "5000" as `.text-label-m` in **#ffd24d**.
  - `.bounties-item-details` (flex row, gap 10; ≤479 column): a date tag `.bounties-item-tag` (padding 4/8, bg rgba(255,255,255,.1), radius 8) with a calendar icon (`inline-bounties-item-tag-a6ada4.svg`) and "October 31, 2025" (14/20 500 rgba(255,255,255,.68)); then a status tag "Open" (green as above, 72.6×28).
- `.bounties-item-seperator`: 1px, bg rgba(255,255,255,.1).
- `.bounties-item-description` (flex col, gap 4):
  - `h3.text-label-l` title "Build and Share an AI Workflow with the Foreplay API": Inter **18/30** 500, ls −0.26, #fff (16/30 @390, 2 lines).
  - `.text-body-m`: [243 chars, 2 lines @1440, 3 @991, 7 @390], rgba(255,255,255,.68).
- Separator.
- `.bounties-item-author` (flex row, center, gap 8): avatar 24×24 circle, name `.text-label-m` #fff ("Zachary Murray"), handle "@foreplayzach" (16/24 400, rgba(255,255,255,.68)).

### Placeholder `.bounties-item-linkblock.placeholder`
Same box (not a link), min-h 225, content centered. It holds `.div-block-347` (flex row, gap 5): an info icon 21×20 (`inline-div-block-347-923fd5.svg`) and `.text-label-s` "Public community bounties coming soon ..." in rgba(255,255,255,.68).

---

## Motion
- Hero video loops (autoplay, muted).
- Card hover (.2s, border and bg). Button hovers.
- No IX2 and no scroll animations.

## Assets: `public/assets/pages/bounties/`
| File | Element |
|---|---|
| `social_ertuken_…903bcbf3-69a6-4f0d-8277-159c9f4a9ecf_1.webm`, `…_1.mov` | hero icon video (source: publicassets.foreplay.co) |
| `68adc94dead0f5ba730266f8_bounty-headshot-2.webp`, `68adc94dc3123ce060f8da49_bounty-headshot-3.webp`, `68adc94ee865abf4eba75c61_bounty-headshot-1.webp`, `68adcf403461f59d0b560588_bounty-headshot-4.webp` | floating avatars (200×200) |
| `inline-bounty-character-tag-{2935dc,ca3231,263045,08b3bc}.svg` | role tag icons |
| `inline-bounties-item-tag-9060be.svg` | green status icon |
| `inline-bounties-item-amount-46b9f0.svg` | coin icon |
| `inline-bounties-item-tag-a6ada4.svg` | calendar icon |
| `inline-div-block-347-923fd5.svg` | placeholder info icon |
| existing `/assets/templates/bounties/68add40d84910965e17bfbc7_T01VC6J4RBM-U01UX70C6FR-54a12b5e6052-512-2.png` | author avatar |
