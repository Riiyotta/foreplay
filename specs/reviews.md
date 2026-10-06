Source: https://www.foreplay.co/reviews

# `/reviews`: Wall of Love (Senja embed)

Measured 2026-10-06 with headless Chromium at 1440 / 991 / 390.

- Title: `Wall of Love - Foreplay.co Reviews`. wf page `67db462b12b95c8ba5dc4608`.
- Document height: 1440 → 8747, 991 → 11184, 390 → 30659 (driven by the embed).
- Global pieces come from src/components: `Navbar`, `Footer`, `CalendarPopup`, `ExitIntentModal`, and `CTA.jsx` as the last section.
- Only two first-party sections exist. Everything inside the wall is a third-party **Senja** widget (shadow DOM), so testimonial text is neither transcribed nor rebuilt.

## 1. Head: `div.section > .container.section-container > .pricing`
- `.pricing`: flex col, padding **72/0/108** (≤479 40/0/80). Box [88,72,1264,330] @1440, h 328 @991, h 340 @390.
- Standard centered `.section-head` (`_shared-pages.md` section-head pattern):
  - overline "WALL OF LOVE" (rgba(255,255,255,.36))
  - `h2.text-display-h2` "What customers have to say" (565 wide; 1 line @1440 and @991, 2 @390)
  - `p.text-body-l` [84 chars, 2 lines; 3 @390], max-w 512, rgba(255,255,255,.68)

## 2. Wall: `CmsWhiteBlockList` wrapper (`_shared-community.md` §C7)
- `div.section-padding (p 8) > .section-white-block` (bg #fff, radius 36 / 16 ≤479) → `.section > .container (max 1440, px 40/32/24) > .comparison` (flex col, gap 40 / 32, padding 64/0).
- White block: [8,410,1424,7398] @1440, [8,408,975,9664] @991, [8,420,374,28444] @390.
- `.w-embed.w-script` → `div.senja-embed` (`data-id="0fd75b98-8d7f-4eac-b286-b4ffd2590796"`, `data-mode="shadow"`, `data-lazyload="false"`), loaded by `<script src="https://widget.senja.io/widget/0fd75b98-8d7f-4eac-b286-b4ffd2590796/platform.js" async>`. Size 1344×7270 @1440, 911×9536 @991, 326×28316 @390.
- Rendered widget (read from its open shadow root; this describes it but does not rebuild it):
  - Centered "All" tab pill (53×42, border 1px #e6e6e6, radius 12, Inter 16/24 #374151).
  - A masonry card wall with **64 cards**: **4 columns** @1440 (318 wide, x = 48/390/732/1074, i.e. 24 gaps), **3 columns** @991 (288 wide), **1 column** @390 (326 wide).
  - Card: bg #fff, radius 12, no border/shadow (separated by spacing), inner padding about 17. It has a 42×42 avatar (image or initials circle), name (Inter 16/20 500 #374151), a small Chrome Web Store icon top-right, a row of five 20px yellow stars (some 4/5; the fill is set inside the widget and was not read), text Inter 16/24 #374151, an optional "Read more" (16/24), and a date in the format "Sep 30, 2026" in a lighter gray (not measured).
- Recommendation: embed the real Senja script, or render a placeholder masonry of 64 stand-in cards with the measured column widths. Write stand-in review text; do not copy the reviews.

## 3. `CTA.jsx`
After the white block (footer at y 7855 @1440).

## Motion
Senja internal hover/expand only. No IX2.

## Assets
None first-party. Avatars are served by Senja (third-party); they were not downloaded.
