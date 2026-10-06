Source: https://www.foreplay.co/affiliates

# `/affiliates`: Affiliate program

Measured 2026-10-06 with headless Chromium at 1440 / 991 / 390. Geometry is `[x, y, w, h]` in document px. Long copy is replaced by `[N chars, L lines]`.

- Title: `Affiliate Program - Earn 20% of Referral Accounts`. wf page `647668309e49d3c3f7a7651d`.
- Document height: 1440 → 2756, 991 → 3902, 390 → 4223.
- Global pieces: uses `Navbar`, `Footer`, `CalendarPopup` and `ExitIntentModal` from src/components (global). There is **no** final CTA block.

## Reuse map
| Section | Reuse |
|---|---|
| Hero | **`PageHero`** (`specs/_shared-community.md` §C1). Same markup and styles as the `/fireside` hero (`section#product-hero-section > .container > .fireside-hero` with padding 80/0 (≤767 40/0), `.product-hero-content` gap 28, `.hero-text` gap 16, `h2.text-display-h1.hero-title` gradient-clip) but without the logo and without tabs. Build a shared `PageHero` component. |
| 3-step cards | **`ImageStepCards`** (§C3): the homepage **Features** grid (`.lens-security-grid` / `.lens-security-card`, `Features.jsx`, CLONE_SPEC §6) with image bodies, exactly as on `/fireside` §2. Differences: there are no head icons, and the grid sits in `.container.section-container` at full width (1264). |
| Buttons | `Button dark-primary`. The new variant `ghost-icon-button` is described below. |

---

## 1. Hero
Section [0,72,1440,428] (991: 428; 390: 416). `.product-hero-content` is 788.6 wide @1440.
- `h1.text-overline` "AFFILIATE PROGRAM": 12/16 550 ls 2, uppercase, rgba(255,255,255,.36), centered.
- `h2.text-display-h1.hero-title` "Foreplay is better with friends": 60/68 (38/48 @390), gradient text, 1 line @1440 and @991, 2 lines @390.
- `.max-w-lg > p.text-body-l`: [128 chars, 3 lines @1440 and @991, 4 @390], rgba(255,255,255,.68).
- `Button dark-primary` "Become an Affiliate" (icon full) → `https://foreplay.getrewardful.com/signup` (target _blank), 195×40.

## 2. Steps grid: `div.section > .container.section-container > .section-content-main (pt 48; 390 pt 40) > .lens-security-grid`
- @1440: 3 columns × 420.7, border 1px #171920, radius 28, 1264×442. ≤991: 1 column, max-w 480, centered (991: 478 wide, 1418 tall; 390: 340 wide).
- Card: padding 24 24 16 (≤479 24). Head `h3.text-label-m` (#fff, **no icon**). Body image is 768×528, full card width (420.7×289 @1440; 478×328.6 @991; 340×234 @390; margin 0 −24, @390 margin-top −39). Footer `.text-alpha-50 > .text-body-m` (rgba(255,255,255,.84)). The middle card has 1px #171920 side borders (top/bottom ≤991).

| # | Title | Image | Body |
|---|---|---|---|
| 1 | "1. Signup Instantly" | `6835eba827d5b7821771ad71_affiliate-1.webp` | [123 chars, 3 lines] |
| 2 | "2. Share your love of Foreplay" | `6835eba8cb712c81db2fe4f7_affiliate-2.webp` | [129 chars, 3 lines] |
| 3 | "3. Get Paid" | `6835eba861799402175d285e_affiliate-3.webp` | [104 chars, 3 lines] |

## 3. FAQ: `div.section > .container (max 1440) > .faq`
- `.faq`: flex col, gap 48, padding **140/0** (≤767 80/0, gap 40; ≤479 64/0/80). [40,990,1360,834] @1440.
- `.section-head` (centered, max-w 720, gap 12):
  - `.text-overline.text-white-68` "FAQ" (computed color rgba(255,255,255,.36)).
  - `h3.text-display-h2` "Affiliate program questions" (44/53.76; 40/52 @991; 36/48 @390, 2 lines).
  - `p.text-body-l`: [72 chars, 2 lines], max-w 512, rgba(255,255,255,.68).
- `.faq-block-container` (max-w 752, centered) → CMS `.w-dyn-list` with **4 items**:
  1. "Can I Advertise to Your Domain?" [176 chars]
  2. "How long is your cookie window?" [152 chars]
  3. "As an agency owner, can I use my affiliate link with my clients?" [177 chars]
  4. "How do I get paid my commission?" [215 chars]

### `FaqItem` / accordion
**Uses the shared `Faq` from `specs/_shared-pages.md`** (§1 row 7 and the `[data-accordion-item]` script in §4). Spot-checked here: closed rows are 61 tall. Open goes 61 → 113, the body becomes `height:56px` over 0.9s `cubic-bezier(0.19,1,0.22,1)`, the question turns #fff and the chevron rotates 180°. Items toggle independently. Questions are `h4.text-label-l` 18/24 500 rgba(255,255,255,.68) (16/24 @390). Answers are `.text-body-s` 14/20.

### FAQ buttons `.faq-buttons`
Flex row, centered, gap 12, padding 12/0. ≤479: column, stretch (buttons full width 342).
- New variant **`button-dark.ghost-icon-button`** (icon on the left): flex, gap 5, padding 8, bg #020308, radius 10, `transition: all .2s`. Hover bg rgba(255,255,255,.1). Active bg rgba(255,255,255,.2), text #fff. Focus `box-shadow: 0 0 0 2px #020308, 0 0 0 3px #fff`. The icon block `.icon-left` (24×24, opacity .68, margin-right −4) comes before the `.text-heading-m` label.
  1. `#intercomButton` "Contact support" (`href="#"`, opens the Intercom widget), chat icon `inline-icon-medium-2c9517.svg` (20×20), 177.4×40.
  2. "Knowledge Base" → `https://foreplay.featurebase.app/help` (target _blank), book icon `inline-icon-medium-f64555.svg` (24×24), 179.1×40.

## Motion
- FAQ accordion: height 0.9s `cubic-bezier(0.19,1,0.22,1)`; chevron rotates 180° over 0.9s with the same curve; head color changes to #fff.
- No IX2, no scroll animations.

## Assets: `public/assets/pages/affiliates/`
`6835eba827d5b7821771ad71_affiliate-1.webp`, `6835eba8cb712c81db2fe4f7_affiliate-2.webp`, `6835eba861799402175d285e_affiliate-3.webp` (step images, 768×528); `inline-icon-medium-2c9517.svg` (chat), `inline-icon-medium-f64555.svg` (book). The chevron is the existing sprite.

## Embeds
Intercom (opened via `#intercomButton`) and the external Rewardful signup link.
