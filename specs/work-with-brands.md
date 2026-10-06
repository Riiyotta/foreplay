Source: https://www.foreplay.co/work-with-brands

# `/work-with-brands`: Work With Brands (lead form)

Measured 2026-10-06 with headless Chromium at 1440 / 991 / 390. Geometry is `[x, y, w, h]` in document px. Long copy is replaced by `[N chars, L lines]`.

- Title: `Foreplay.co | Work With Brands`. wf page `688953ffa4e2bb491934372c`.
- Document height: 1440 → 7904, 991 → 8122, 390 → 4956 (low because the Senja wall had not rendered at 390).
- Global pieces come from src/components: `Navbar`, `Footer`, `CalendarPopup`, `ExitIntentModal`, `Button`, and `CTA.jsx` as the last section.
- **Template:** `WorkWithTemplate` in `specs/_shared-community.md` §C5 (WorkHero → WorkBest → LovedBlock → CTA). This page is the reference instance; its measurements are below.

## 1. `WorkHero`: `div.section > .container.section-container > .work-hero`
| | 1440 | 991 | 390 |
|---|---|---|---|
| `.work-hero` | grid 568 + 568, gap 128, padding 128/0 → [88,72,1264,788] | 1 column (927), rows 412 + 532, gap 80 → h 1280 | 1 column (342), rows 392 + 532, gap 80, padding 48/0 → h 1100 |
| `.work-hero-content` | [88,200,568,532], flex col, space-between, gap 40 | [32,200,927,412] | [24,120,342,392] |
| `.work-hero-form-container` | [784,200,568,532] | [32,692,927,532] | [24,592,342,532] |

Left column:
- `.max-w-lg > .flex-col-gap-5` (flex col, gap 20):
  - `.text-alpha-100 > .text-overline` "FIND A BEST FIT MARKETING PARTNER FOR YOUR BRAND": 12/16 550 ls 2px, uppercase, **rgba(255,255,255,.68)**, 1 line @1440 and 2 lines @390.
  - `.flex-col-gap-3` (gap 12): `h1.text-display-h2` "Work with Brands" (left aligned, #fff, 346 wide), then `.text-alpha-50 > .text-body-l` [137 chars, 3 lines; 4 @390] in rgba(255,255,255,.84).
- `.work-hero-logo-grid`: grid with auto columns **104 / 132 / 152**, rows 60, gap 4 → 396×188, aligned to the bottom of the column. ≤479: 3 × `1fr` (111.3), rows 40, full width. Logos are webp at 2x (208×120, 264×120, 304×120). Order:
  1. hello-fresh
  2. canva
  3. vayner-media
  4. pearmill
  5. paramount
  6. true-classic
  7. common-thread-collective
  8. ag1
  9. growth-collective
  (`688b6298…_work-logo-<name>.webp`)

Right column: `DemoForm` (`form#wf-form-Brand-Form`, name "Brand Form", max-w 512 @1440, full width ≤991, flex col, gap 20):
| Line | y @1440 | Fields (label → control, placeholder) |
|---|---|---|
| 1 | 200 (h 70) | "Name" → text, "John Smith", required · "Phone" + "(Optional)" → tel, "000-000-0000" (each 246×38) |
| 2 | 290 | "Email" → email, "hello@company.com", required · "Company Type" → select, required: Select / Individual / Brand / Agency / Holding Co / Software |
| 3 | 380 | "Budget" + "(Optional)" → select full width 512×38: Select / < $1,000 / $1,000 - $3,000 / $3,000 - $5,000 / $5,000 - $10,000 / >$10,000 |
| 4 | 470 (h 112) | "Additional requirements" + "(Optional)" → textarea 512×80, padding 8/12, `resize: vertical`, placeholder "Enter your message" (the DOM marks it `required` despite the label) |
- Submit block at y 602: "Continue" 400×40 (centered with margin 0 56) plus terms [85 chars, 2 lines].
- A Cloudflare Turnstile widget (`cf-turnstile-response` hidden input) is attached. It is third-party and invisible.
- The form uses Webflow's default handler (method GET, no action). Success/fail states are hidden by default.

## 2. `WorkBest`: `div.section > .container.section-container > .work-best` (pt 128, gap 48)
- Section head: `h2.text-display-h2` "The world’s best marketers use Foreplay" (720 wide, 2 lines @1440, 1 @991, 3 @390), then lead [189 chars, 4 lines; 5 @390].
- `.work-best-body` (flex col, center) → `img.image-167` `688baa48834a09a6fb2242b7_…work-with-brands-illo.webp` (1136×590). It is 1136×590 @1440 (x 152), 927×481.5 @991 and 342×177.8 @390.
- Section box: [88,860,1264,997.5] @1440, h 833.5 @991, h 650 @390.

## 3. `LovedBlock` (white): [0,1857.5,1440,4077] @1440, [0,2185.5,991,4031] @991, [0,1822,390,704 (embed unrendered)] @390
See §C5. Head copy: "Loved by brands and agencies globally." + [79 chars]. Tiles: G2 REVIEWS 4.9/5 (icon `inline-demo-socialproof-content-1d2fc7.svg`), CHROME 4.8/5 (`…-64a56d.svg`), CAPTERRA 4.8/5 (`…-12ffcf.svg`). Star: `inline-dev-socialproof-rating-83a211.svg` (20×20, #24262e). Senja wall 1264×3693 @1440.

## 4. `CTA.jsx`
At [88,5935,1264,1037.5] @1440.

## Motion
None besides CSS hovers (inputs color, buttons). No IX2.

## Assets: `public/assets/pages/work-with-brands/`
- 9 logos: `688b6298b31d165cabb4f613_work-logo-hello-fresh.webp`, `688b6298585107d4c043dc95_work-logo-canva.webp`, `688b62989ae80e4a3b1bfa15_work-logo-vayner-media.webp`, `688b6298e2496c5e3f207e03_work-logo-pearmill.webp`, `688b629848219ed53e3068e9_work-logo-paramount.webp`, `688b6298505fecedaf609070_work-logo-true-classic.webp`, `688b6298b53ef7d16e3538f5_work-logo-common-thread-collective.webp`, `688b62981fd02f73d1c39824_work-logo-ag1.webp`, `688b62986d6c5f9871b82029_work-logo-growth-collective.webp`
- `688baa48834a09a6fb2242b7_5fc566ef4ffe8d9a1f4eb5c58376f9f7_work-with-brands-illo.webp`
- `inline-demo-socialproof-content-1d2fc7.svg`, `inline-demo-socialproof-content-64a56d.svg`, `inline-demo-socialproof-content-12ffcf.svg`, `inline-dev-socialproof-rating-83a211.svg`

## Embeds
Senja wall (widget `26b5df20-…`), Cloudflare Turnstile.
