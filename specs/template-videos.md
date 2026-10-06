Source: https://www.foreplay.co/videos/all-products-screen-recording

> Shared patterns are defined in `specs/_shared-templates.md`. This template uses S9 (centred `.demo-hero` + `.section-head`) and S10 (responsive video). Navbar, Footer, `Button` and `CTA` come from src/components.

# Template: Product video (`/videos/:slug`)

- Data: `src/data/videos.json` (16 entries). Measured `/videos/all-products-screen-recording` and `/videos/briefs-screen-recording`. The DOM and geometry are identical (docH 3244 / 2989 / 3120 for both).
- Method: Node Playwright at 1440/991/390.

## 1. Section map
`div.section.overflow-hidden > .container.section-container` (max 1344, padding 40/32/24) `> .demo-hero`. The hero is flex col, centred, padding 120/120 (≤767 80/80, ≤479 40/40). Geometry: 88,72,1264,1202.2 | 32,72,927,1011 | 24,72,342,618.2.

1. `.div-block-341`: flex col, centred, gap 30, margin-bottom 30. Size 595.7×221.8 @1440.
   - `.section-head` (S9):
     - Overline `.text-overline` = `overline`. It is "Learn About Lens" on **all 16 entries** (live CMS quirk; keep it data-driven).
     - `h1.text-display-h2` = `title` (44/53.76; 40/52 @991; 36/48 @390, where it wraps to 2 lines).
     - `p.text-body-l` description (max 512, .68, 2 lines, about 110 chars). **Not collected**, so use stand-in text.
   - `.main-cta-buttons` (flex, gap 12; ≤479 1-col grid, full width):
     - `Button` primary "Start free trial" → `https://app.foreplay.co/sign-up` (152.6×40, chevron at opacity 1).
     - `Button` secondary "Learn More" → `/lens-creative-analytics` (115.7×42).
     - Both come from `primaryCta`/`secondaryCta`.
2. `.video-page-video.w-video` (S10, no frame, `overflow:hidden`): the full content width at a 56.206% ratio. 1264×710.4 @1440, 927×521 @991, 342×192.2 @390. Uses `youtubeId`.
3. Final CTA: uses `CTA` from src/components.

## 2. Motion
None. No IX2, no animations, and only the button hovers.

## 3. JSON shape (`src/data/videos.json`, filled for all 16)
```json
{
  "slug": "all-products-screen-recording",
  "title": "All Products Screen Recording",
  "overline": "Learn About Lens",
  "youtubeId": "r5aDvIUH7_Y",
  "primaryCta": {"label": "Start free trial", "href": "https://app.foreplay.co/sign-up"},
  "secondaryCta": {"label": "Learn More", "href": "/lens-creative-analytics"},
  "updated": "2025-05-28"
}
```
Varies per entry: title, youtubeId, description (stand-in). No images are needed.
