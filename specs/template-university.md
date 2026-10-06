Source: https://www.foreplay.co/university/classes

> Shared patterns are defined in `specs/_shared-templates.md`. This template uses S9 (hero), S10 (video) and S11 (`LeftRightSection`, the same component as on the api/mcp pages). Navbar, Footer, `Button` and `CTA` come from src/components.

# Template: University (`/university/:slug`)

The "collection" has only 2 entries, and they are **two different layouts** (static Webflow pages under the `/university` folder). Pick the layout by the `template` field:
- `classes` → `template:"landing"` (§A)
- `psychology-in-advertising` → `template:"course"` (§B)

Measured with Node Playwright at 1440/991/390. docH: classes 3775 / 3502 / 4766. Course 4559 / 5042 / 6225.

---

## A. `/university/classes` (landing)

### A.1 Hero: `section#product-hero-section.section.relative > .container > .fireside-hero` (S9 shell, padding 80/80; ≤767 40/40)
- Background `.foreplay-university-hero-brackground`: absolute top/left/right 0, `height:50vh`, z −1, `opacity:.56`, bg cover. The image is `heroBg` (`fu-header-background-tiny.avif`). Measured 1440×450 at y 72.
- `.fireside-hero-logo-wrapper` (padding-bottom 40, ≤767 24) > `img.fu-logo` = `logo` (`fu-logo-full.svg`, 191×51; ≤479 height 40).
- `.university-hero-content` (flex col, centred, gap 28; ≤479 24) > `.hero-text` (max 900, gap 16; ≤479 12) > `h2.text-display-h2` = `heroTitle` (centred, 2 lines @1440: 900×107.5; 4 lines @390).
- **Course card row** `.container.section-container > .university-classes-carousel`:
  - Box: flex, centred, gap 24, padding 50/50 (≤991 40/40). ≤767 it is a column (only the middle card remains).
  - 5 `.cards-wrapper-new` (`perspective:1000px`, inline-block, cursor pointer) in this order:
    - `._3.mobile-hide` (opacity .25), `._2.mobile-hide` (opacity .5), **centre card** (opacity 1), `._2` (.5), `._3` (.25).
    - At 1440 the x positions are 47, 321, 595, 869 and 1143. At 991 the outer ones overflow off-screen (x −177.5), clipped.
    - `._2.mobile-hide` and `._3` are `display:none` ≤767.
  - `a.course-card`:
    - Box: 250×375, radius 10, `box-shadow: 0 0 0 1px rgba(255,255,255,.15)`, overflow hidden, flex col centred.
    - Background image cover/centre: `cardBg` for the live course, or `cardBgComingSoon` on bg `rgba(255,255,255,.12)` for `.coming-soon`.
    - `.course-title-wrapper`: full size, flex, align end, padding 0 25 25 (≤479 24). Bg `linear-gradient(transparent 54%, #000)` (coming-soon: `… rgba(0,0,0,.54)`).
      - Live card: `img.image-154` course wordmark (200 wide, centred), = `courses[2].wordmark`.
      - Coming soon: `.text-block-95` "Coming Soon" at opacity .2.
    - `img.image-155`: 20px FU logo (`670fe1a3b5fc3cea38b7d07b_f-u-logo-transparent-white.svg` in `public/assets/templates/university/`), absolute top 15 / right 15, `mix-blend-mode:overlay`. Opacity .1 on coming-soon.
    - `.fu-card-shine`: 125px white circle, `filter: blur(70px)`, opacity .31, absolute centre. Coming-soon cards hide it.
    - Live card only: `.video-coming-soon-button-copy` "Watch Now" pill:
      - Absolute centre, flex, gap 10, padding 10px 15px, bg `rgba(0,0,0,.8)`, radius 100, `backdrop-filter: blur(5px)`, starts at opacity 0.
      - Holds a 20px play icon (`6716b43bc943259847c9212a_play-icon-blue.svg`) and the text.
      - The card links to `/university/psychology-in-advertising`. Coming-soon cards link to `#`.
  - **IX2 motion**:
    - `e-216/217/218/221/222` MOUSE_MOVE → `a-68` "FU - Card Mouse Move" on every wrapper (IX2 `main` breakpoint only, ≥992). Smoothing 50, rest 50%.
      - Mouse X 0→100%: `.course-card` rotateY −15°→15°, and `.fu-card-shine` translateX 90%→−90%.
      - Mouse Y 0→100%: rotateX 15°→−15°, and shine translateY 150%→−150%.
    - Live card only: `e-219` MOUSE_OVER → `a-69` fades the Watch Now pill opacity 0→1 (200ms easeInOut). `e-220` MOUSE_OUT → `a-70` fades 1→0 (200ms).

### A.2 Left/right sections: `div.section > .container.section-container > .left-right-section-wrapper`
Flex col, gap 80. This is S11 (two rows).
- Row: `.left-right-section` is flex, align center, gap 24 (≤991 40). ≤767 it is a column (image first via `order:-9999`, gap 40).
- Content: `.left-right-section-content` (flex col, gap 32, ≤479 24), 512 wide @1440. It holds `.section-head.is-align-left`:
  - Optional icon (`.left-right-section-icon`, max-height 50, the FU logo 187×50, margin-bottom 10).
  - `h2.text-display-h3` title (36/44).
  - `p.text-body-l` copy (.68, max 512).
- Image: `.left-right-section-image-wrapper` (flex 1, padding-x 16; 0 ≤767) > `img.left-right-section-image` (radius 20, ≤479 10), 560×438 @1440, 343×268 @991, 342×267 @390.
- Row 1 (content left, image right): `sections[0]` "Welcome to Your Campus", with the icon. Copy is about 255 chars in 1 p with `br`s, so use stand-in.
- Row 2 (image left, content right): `sections[1]` "Become a Professor and Access 100,000+ Marketers". Copy is about 130 chars. Then a `Button` secondary "Apply Now" → `https://forms.gle/BjqX45o2nYzsgV9g6`.

### A.3 Final CTA
Uses `CTA` from src/components.

---

## B. `/university/psychology-in-advertising` (course)
Note: there is **no** `div.main` wrapper. All sections are direct children.

### B.1 Hero: `div.section > .container.section-container > .hero-grid.course`
- Grid `1fr 1fr`, column gap 80 (5em), row gap 16, padding 70/100, position relative. Measured 592px columns @1440.
- ≤991: column gap 0, row gap 80, and the top block spans 2 columns.
- `.fu-course-page-top` (relative, z 1, flex col, align start):
  1. `.fu-breadcrump`: flex, gap 4, margin 0 -8px. Two S1-style crumbs:
     - First: `img.image-157` FU mini icon (`breadcrumbIcon`, 25×25 at ≥1280, else 20) plus "University" → `/university`.
     - "/" separator.
     - Second: "Psychology in Advertising Course" (href `#`).
     - This breadcrumb is **visible at all widths**.
  2. `img.image-158` = `wordmark`: height 50, margin-top 50 (≤479 40 / 30), 242.8 wide.
  3. `.course-header-description` (margin-top 20, ≤479 30, max 600):
     - `.text-alpha-100 > p.text-body-m`: course blurb, 3 lines (about 230 chars). Use stand-in.
     - `.fu-course-author`: flex, gap 10, padding 5/0, margin-top 15, #fff. It holds `.text-body-m` "Taught By", `img.image-159` (25px round, margin-right 6; = `teacherAvatar`) and `.text-label-m` `teacher`.
  4. `.course-cta-block` (flex col, align start, margin-top 50; ≤479 centred, full width, margin-top 30):
     - `.free-tag`: flex, gap 5, padding 4px 12px 4px 10px, bg `rgba(255,255,255,.1)`, color .84, radius 100. It holds a 20px hourglass icon and `.text-label-s` `freeTag` ("Free Course Launching Soon"). ≤479 it is full width and centred.
     - `.course-signup-form` (min-width 500, margin-top 10; ≤479 full width) > `form.form-5`:
       - Flex, gap 10 (≤479 column).
       - `input.demo-hero-form-input`: 350×38, bg `rgba(255,255,255,.1)`, radius 8, padding 8px 12px, 14/20 500, placeholder `rgba(255,255,255,.44)`. Hover text .84.
       - `.div-block-337` (min 120) holds `input.button-dark.button-primary` 120×40.
       - Hidden inputs.
       - Success: `.success-message-3` (bg .06, border .12, radius 10, text `#fafafdad`). Fail: `.error-message-3` (`#ed615a` border and text on `#ed615a26`, radius 10).
- `.course-branding`: decorative artwork. Absolute top −30%, right 0, width 60%, height 130%, z 0. Bg is `linear-gradient(transparent, #000)` over `branding` (contain, bottom centre). Measured 758×755 at x 593.6, y −102. `display:none` ≤991.

### B.2 Curriculum: `.fu-section-1` (padding-top 75)
- Header: `.course-curriculum-header` (padding 15/0) > `h2.text-display-h6` "Course Curriculum" (Inter Display 600 20/28, −0.11px).
- `.tabs-holder > .tabs.w-tabs`: grid `1fr 1fr 1fr`, gap 15 (≤991 flex column). The video pane spans columns 1–2 (837.7 wide @1440). The **menu is in column 3** (411.3 wide, x 940.7). ≤991 the menu comes first, then the video.
- Menu `.tabs-menu-2`:
  - Box: flex col, `border:1px solid rgba(255,255,255,.12)` (bottom `#171920`), radius 15, overflow hidden.
  - 7 `a.module-tab` (80 tall): flex, gap 20, padding 15px 20px, `border-bottom:1px solid rgba(255,255,255,.12)` (≥1280; #171920 below), `filter:saturate(0)`, color `rgba(255,255,255,.68)`, `transition: all .2s`.
    - Hover: bg `rgba(255,255,255,.03)`, saturate(1), #fff.
    - Current (`w--current`): bg `rgba(255,255,255,.06)`, saturate(1), #fff.
    - The last tab has no border.
    - Contents: a 20px icon (play-blue for the trailer, hourglass for the rest), then `.div-block-315` (flex col, gap 5) with `.text-body-s` label ("Trailer", "Module 1"…) and `h3.text-label-m` title.
    - Data: `modules[]`.
- Panes (Webflow tabs, fade, no measured duration override, so Webflow defaults):
  - Trailer pane: `.fu-video-holder` (same border, radius 15) > S10 video (`trailerYoutubeId`), 837.7×471.4 @1440.
  - Module panes: `.fu-video-holder.coming-soon` > `img.image-160` poster (`modulePosters[i]`, full width) plus a `.video-coming-soon-overlay` (absolute inset 0, flex centre) holding a `.video-coming-soon-button` pill (bg `rgba(0,0,0,.8)`, blur 5, radius 100, padding 10px 15px, gap 10, white hourglass icon + "Coming Soon").
- `.course-materials-section`:
  - Header `materialsHeading` (Inter Display 20/28, same header style).
  - `.grid-31`: 3 columns, gap 16. ≤991 a flex column (≤479 gap 12).
  - 3 `a.module-tab.download-button` (56 tall): bordered (radius 10). Each holds a 20px icon, `h3.text-label-m` title, and `.text-body-s` type ("PDF File"…). Data: `materials[]`.

### B.3 About sections: `.fu-second-section` (padding-top 100) > `.left-right-section-wrapper` (S11, gap 80)
- `sections[0]` "Meet Sarah Levinger": image left (560×438), copy right (3 p, about 600 chars). Use stand-in.
- `sections[1]`: the same "Become a Professor…" row with an "Apply Now" button, as on classes.

### B.4 Final CTA
Uses `CTA` from src/components.

### B.5 Motion
- No IX2 on the course page.
- Webflow tabs cross-fade.
- Module tab hover/current transitions .2s (bg, colour, saturate).

---

## JSON shape (`src/data/university.json`, both entries filled)
```json
[
 {"slug":"classes","title":"Classes","template":"landing","heroTitle":"…","logo":"…svg",
  "courses":[{"href":"#","comingSoon":true,"wordmark":null},…5],
  "cardBg":"…avif","cardBgComingSoon":"…avif","heroBg":"…avif",
  "sections":[{"title":"Welcome to Your Campus","image":"…","icon":"…","button":null,"paragraphChars":255},{…"button":{"label":"Apply Now","href":"…"}}],"updated":"…"},
 {"slug":"psychology-in-advertising","title":"Psychology in Advertising Course","template":"course",
  "breadcrumb":"Psychology in Advertising Course","wordmark":"…svg","breadcrumbIcon":"…svg",
  "teacher":"Sarah Levinger","teacherAvatar":"…webp","freeTag":"Free Course Launching Soon","branding":"…avif",
  "modules":[{"label":"Trailer","title":"Psychology in Advertising Trailer","icon":"…"},…7],
  "trailerYoutubeId":"…","modulePosters":["…Module_1-p-1080.avif",…6],"comingSoonIcon":"…",
  "materials":[{"title":"Psychology Workbook","type":"PDF File","href":"…","icon":"…"},…3],"materialsHeading":"…",
  "sections":[…2],"updated":"…"}
]
```
All images are in `public/assets/templates/university/`.
