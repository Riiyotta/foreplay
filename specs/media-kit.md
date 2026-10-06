Source: https://www.foreplay.co/media-kit

# /media-kit: "Foreplay - Media Kit"

**Method:** see `specs/_shared-misc.md`. **Raw dumps:** `specs/_measure/media-kit-{1440,991,390}.txt`. Webflow page id `69724832f31dbc4a5a3231ec`. Doc height: 1444 @1440, 1616 @991, 2337 @390. The page is **only a hero**; the footer follows. There is no CTA block.

## 1. Hero (`div.section.overflow-hidden > .container.section-container > .demo-hero`)
- `.demo-hero`: flex column, centred, padding 120/0 (@390 40/0). 1264×440 @1440.
- `.media-kit-header`: flex **row**, align centre, gap 25. 737×200 @1440, centred at x352. It stays a row at every width.
  - `img.image-169`: 200×200 (source 432×432) `/assets/pages/media-kit/6972490d55ff501309a8bec6_foreplay-folder-gray.webp`.
  - `.section-head.is-align-left`: flex column, align start, gap 12, max 720. 512×176 @1440.
    - h1 `.text-display-h2` "Media Kit": 44/53.76 #fff, left-aligned (40/52 @991, 36/48 @390).
    - Paragraph `.section-head_paragraph` (max 512) `p.text-body-l` 18/28 .68 ‹~84ch, 2 lines›.
    - Button "Download all brand assets": `button-dark.button-secondary` 249×42, with a **download icon** on the right (18×18, `/assets/pages/media-kit/svg/svg-w-embed-2cdd8273.svg`, icon block opacity .68). **href `#`** on the live site, so no asset pack is linked.
- @390 the row does not wrap: the image stays 200×200 and the text column is squeezed to ~117px (the h1 breaks onto 2 lines, 126 wide, and the paragraph overflows downward). Header height is 398. Reproduce as measured, or stack it (a recommended fix; note it as a deviation).

## Motion
Button hover only.
