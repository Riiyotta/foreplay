Source: https://www.foreplay.co/work-with-marketers

# `/work-with-marketers`: Work With Marketers (lead form)

Measured 2026-10-06 with headless Chromium at 1440 / 991 / 390.

- Title: `Foreplay.co | Work With Marketers`. wf page `688bb022caf3ea7d0af58693`.
- Document height: 1440 → 7904, 991 → 8150, 390 → 5040 (Senja wall unrendered at 390).
- Global pieces come from src/components: `Navbar`, `Footer`, `CalendarPopup`, `ExitIntentModal`, `Button`, `CTA.jsx`.
- **Template:** `WorkWithTemplate` (`specs/_shared-community.md` §C5). Every style and geometry matches `specs/work-with-brands.md` except the per-page data below. Sections below the hero sit 28 px lower @991 and 84 px lower @390 because the lead text is longer.

| Item | Value |
|---|---|
| Overline | same as brands ("FIND A BEST FIT MARKETING PARTNER FOR YOUR BRAND") |
| h1 | "Work with Marketers" (407 wide @1440) |
| Lead `.text-body-l` | [228 chars, 4 lines @1440 and @991, 7 @390]. `.flex-col-gap-5` block is 213.8 tall @1440 |
| Hero rows | 991: 440 + 532 (h 1308); 390: 476 + 532 (h 1184) |
| Logo grid | identical 9 logos (files in `public/assets/pages/work-with-brands/`) |
| Form | `form#wf-form-Marketers-Form` ("Marketers Form"). Line 3 has **two** selects (246×38 each): "What do you need?" (required): Select / Ads / AI / Creative / CRO / Design / Email / Finance / SEO / UGC / Foreplay Support; and "Budget" + "(Optional)" with the same options as brands. Lines 1, 2 and 4 are identical to brands (textarea name `Additional-requirements`). Cloudflare Turnstile is attached |
| WorkBest | identical (same heading, lead and the same `work-with-brands-illo.webp`) |
| LovedBlock | identical (same tiles and Senja widget `26b5df20-…`). White block at y 1857.5 @1440, 2213.5 @991 |
| CTA | y 5935 @1440 |

## Assets
None unique: everything is in `public/assets/pages/work-with-brands/`. The rating-tile SVGs were also saved in `public/assets/pages/work-with-marketers/` (identical files).
