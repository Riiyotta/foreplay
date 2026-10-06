Source: https://www.foreplay.co/

# Shared building blocks for the community / partner pages

Applies to `/experts`, `/experts-application`, `/fireside`, `/fireside-application`, `/fireside-replays`, `/contest`, `/contest-submission`, `/bounties`, `/affiliates`, `/reviews`, `/work-with-brands`, `/work-with-marketers` and `/agency-directory`. Everything was measured on 2026-10-06 (headless Chromium, 1440×900 / 991×900 / 390×844, after a full scroll). Page specs reference these blocks by name and list only per-page data.

**Global, never re-spec:** these pages use `Navbar`, `Footer`, `CalendarPopup`, `ExitIntentModal` and `Button` from src/components. The final "Ready to ship more winning ads?" block is `CTA.jsx`. The homepage Features grid is `Features.jsx`. Also see `specs/_shared-pages.md` for `Faq` (the `[data-accordion-item]` script), `SenjaWall` and the section-head pattern.

None of these pages has page-scoped IX2 scroll/entrance animations. The IX2 store was dumped per page: the only events are the contest-submission FAQ (`contest-submission.md`) and two no-op "Nav Scroll Stroke" events whose targets are missing. All other motion is CSS hover transitions, Webflow tabs/dropdowns/lightbox, or small inline scripts noted per page.

---

## C1. `PageHero` (centered dark hero): fireside, bounties, affiliates
DOM: `section#product-hero-section.section.relative > .container (max 1440, px 40/32/24) > .fireside-hero | .bounties-hero`. There is an inert `canvas#product-hero-canvas`, 0×0 at every width; skip it.
- `.fireside-hero`: flex col, center, text-center, relative, padding **80/0** (≤767 40/0). `.bounties-hero` uses padding-top 10 (≤767 64, ≤479 24/24).
- `.product-hero-content`: flex col, center, gap **28** (≤479 gap 24, pb 24).
  - `.hero-text`: flex col, center, gap **16** (≤479 12), max-w 900.
    - Optional overline `h1.text-overline`: 12/16, 550, ls 2px, uppercase, color **rgba(255,255,255,.36)**.
    - Title: either `h2.text-display-h1.hero-title` (60/68, 38/48 ≤479, with the homepage gradient-clip treatment from CLONE_SPEC §0.6) or `h2.text-display-h2` (44/53.76 → 40/52 → 36/48, #fff).
    - `.max-w-lg` (max-w 512) → `p.text-body-l` (18/28, rgba(255,255,255,.68), centered).
  - `Button dark-primary` with the icon at full opacity.
- Spot-check (fireside @1440): the section is 794 tall with tabs, and `.product-hero-content` is [270,244,900,276].

## C2. `ApplicationPage` (form-embed page): experts-application, fireside-application
`div.section.overflow-hidden > .container.section-container > .demo-hero`:
- `.demo-hero`: flex col, center, padding **120/0** (≤767 80/0, ≤479 40/0).
- `.section-head` (max-w 720, flex col, center, gap 12) holds an overline (`.text-overline.text-white-68`, computed rgba(255,255,255,.36)), `h1.text-display-h2` (centered, balance) and `.section-head_paragraph` (max-w 512) → `p.text-body-l` (rgba(255,255,255,.68), `text-wrap: pretty`).
- `.demo-calendar-hubspot-calendar-embed`: margin-top **50**, radius **15**, overflow hidden, width 100%. It holds `<iframe style="border:none;width:100%" height="<N>px" src="https://noteforms.com/forms/<id>">`. This is NoteForms, third-party; do not rebuild it.
- There is no final CTA; the footer follows directly.

## C3. `ImageStepCards`: affiliates (3 steps), fireside ("Why should I attend?")
This is the homepage **Features** grid (`.lens-security-grid` / `.lens-security-card`, CLONE_SPEC §6). Reuse the `Features.jsx` styles with these changes:
- Card body: a 768×528 webp at full card width (`.home-card-body`, margin 0 −24; ≤479 margin-top −39).
- Head: icon is optional (fireside has 24px icons, affiliates has none).
- Footer `.card-button-holder` (flex col, justify end, pt 15, gap 15) → `.text-alpha-50 > .text-body-m` (rgba(255,255,255,.84)).
- ≤991: 1 column, max-w 480, centered. The middle card's side borders become top/bottom borders.

## C4. `ReplayRow` list: fireside "Watch Replays" tab, fireside-replays
Fully specified in `fireside-replays.md` §3. It is a flex column with gap 24 of row cards (bg #020308, border 1px rgba(255,255,255,.1), radius 20, padding 8 24 8 8, 162×92 thumbnail radius 12, author + date meta, 2-line title, "Watch" `dark-secondary` button). It collapses to a grid at ≤767 and to 1 column at ≤479.

## C5. `WorkWithTemplate`: work-with-brands, work-with-marketers
The two pages are identical except for hero copy, the form's field set, and (therefore) heights. Fully specified in `work-with-brands.md`. Its parts:
- **`WorkHero`**: `.work-hero` grid 2 × 568, gap 128 (≥1440; 96 at 1280–1439), padding 128/0 (≤767 80/0, ≤479 48/0). ≤991: 1 column, gap 80.
  - Left `.work-hero-content` (flex col, space-between, gap 40): overline, `h1.text-display-h2`, a lead `.text-body-l` in rgba(255,255,255,.84), and `.work-hero-logo-grid` (3×3 logos).
  - Right `DemoForm`.
- **`DemoForm`** (`.demo-hero-form-content`, Webflow form): rows `.demo-hero-form-line` (flex row, gap 20) of `.demo-hero-form-item` (flex col, gap 8, flex 1).
  - Label `.demo-hero-form-label`: Inter 16/24 **600** #fff. Optional suffix `.form-label-secondary` "(Optional)" in 400 rgba(255,255,255,.44).
  - Input/select `.demo-hero-form-input`: padding 8/12, bg rgba(255,255,255,.1), **no border**, radius 8, Inter 14/20 500 #fff, height 38. Placeholder color rgba(255,255,255,.44), weight 500. Hover color rgba(255,255,255,.84); focus #fff.
  - Selects have `appearance:none` and an inline-SVG chevron background (from the site-wide `select.demo-hero-form-input` style embed).
  - Submit block `.demo-hero-form-submit` (max-w 400, centered, flex col, gap 20): an `<input type=submit class="button-dark button-primary">` "Continue" (400×40) and `.demo-hero-form-terms` (margin 0 40) holding `.text-body-s` [85 chars, 2 lines, centered, rgba(255,255,255,.68)].
  - Success and fail messages are the Webflow defaults (hidden).
- **`WorkBest`**: `.work-best` (flex col, gap 48, pt 128). It holds the centered section head ("The world’s best marketers use Foreplay" h2 + [189 chars, 4 lines] lead) and an illustration `img.image-167` (1136×590, max 100%).
- **`LovedBlock`**: a full-bleed `.section-white-block` (bg #fff, radius 36 / 16 ≤479; here it is **not** wrapped in the 8px `.section-padding`, so it spans 0→1440). Inside, `.work-loved` (flex col, gap 80, padding 80/0; ≤479 48/0):
  - `.work-loved-head` (flex row, space-between, gap 40; ≤991 column, gap 48; ≤479 gap 32): left `.max-w-sm` (384) with `h2.text-display-h3` "Loved by brands and agencies globally." (#090a0e, 2 lines) and `.text-body-m` [79 chars, 2 lines] in #343642. Right: 3 **rating tiles**, the same component as book-demo's `.demo-socialproof-icons`, except here the grid is 3 × **144** (gap 16) and the tiles are square 144×144 (991: 3 × 298 × 112; 390: 1 column × 112, gap 8). Each tile: padding 4, radius 12, `box-shadow: inset 0 0 0 1px #e9eaef`. It holds a 40×40 brand icon, a rating row (20px star + "4.9/5" Inter 19.2/24 600 #24262e) and a name pill (`.demo-socialproof-item-name`: padding 6/8, bg #f9f9fa, radius 8, overline #090a0e). Data: G2 REVIEWS 4.9/5, CHROME 4.8/5, CAPTERRA 4.8/5.
  - `.work-loved-testimonial > .senja-embed` (widget `26b5df20-f5c6-41fa-a198-c3bcb97d0f42`, the same widget as book-demo). It is 1264×3693 @1440 and 927×3487 @991. It measured **0 tall @390** in our run (the widget had not rendered); reserve a placeholder.
- Then `CTA.jsx`.

## C6. Contest theme: contest, contest-submission
A self-contained theme defined in `contest.md` (palette, Circular font files, `.container-1200`, gradient headings, the `.section-idetifyer` pill, the `FinalistCard` video thumbnail + play button + lightbox, and `.prize-type` labels). `contest-submission.md` reuses it.

## C7. `CmsWhiteBlockList`: experts, reviews
`section > .section-padding (p 8) > .section-white-block (bg #fff, radius 36 / 16 ≤479, overflow hidden, z 2)`. This is the same wrapper as homepage §3/§5 (BeforeAfter.jsx). Content sits in `.container.section-container` (experts) or `.container > .comparison` (reviews: flex col, gap 40 (≤479 32), padding 64/0).
