Source: https://www.foreplay.co/lens-creative-analytics

# /lens-creative-analytics: Lens - Meta Ad Creative Analytics & Reporting

Measured on 2026-10-06 with headless Chromium (Playwright 1.63) at 1440×900, 991×900 and 390×844, after a full scroll pass. The Navbar and Footer have the same DOM as the homepage, so reuse `Navbar.jsx` and `Footer.jsx` (CLONE_SPEC.md §1 and §8). Tokens, buttons and type classes are in CLONE_SPEC.md §0; anything shared between these pages is in `specs/_shared-pages.md`. **Copy policy:** short UI strings are verbatim, and long copy is given only as ‹copy: ~N chars, L lines @1440›. Assets are local paths under `public/` (`/assets/...`). Files that already existed in `public/assets` were reused rather than re-downloaded, which is why some paths point at other page folders or at the root. Blocks that are identical to the homepage (the final CTA `.home-cta`, the Chrome-extension card `.home-extension`, and the logo strip `.home-hero-bottom`) are collapsed to a single line, "uses <Component> from src/components". Their internals are not re-specced and their assets were not re-downloaded.

## Build notes (summary)

- **Structure:**
  - S1 product hero ("LENS" / "Performance insights through a creative lens."). It adds a centred **"Watch Video" lightbox pill** (`a.lightbox-video-main`, 236×68) over the preview, which opens YouTube `93_VRP1c_a4` via `w-lightbox`.
  - S2 white block containing:
    - 4 `.lens-solution-icons-card` items (304×112);
    - "Axe the ad spend tax." with 2 animated SVG bar/line graph cards (`.svg-animation-container`);
    - a `.home-sharing`-style "CREATIVE REPORTING" block. This is a testimonial-report pane switcher with prev/next `button.arrow-button` (36×36) driven by the `[data-tabs]` script, plus a 720×680 report mockup.
  - S3 dark "INTEGRATIONS" section:
    - a 944×368 illustration with a gradient-spectrum video, inverted path lines, 3+3 logo tiles and a centre lens icon video;
    - a 3-tab (`[data-tabs]`) mockup switcher (1600-wide mockup over a people photo; tab links "Creative Test Analysis", "Group Comparison", "Trend Analysis").
  - S4 white block "CONTEXTUAL AD REPORTS":
    - 2 `.left-right-section` rows (gamification, benchmarks);
    - "OVER 100 BENCHMARKING SEGMENTS" with **two auto-scrolling marquees**: `ul.carousel-ul` of 15 segment tiles (220×200 each) and `ul.carousel-ul.rtl` of 5 badges (220×56).
  - S5 "AI METADATA" enrichment rays illustration, which is the same component as the homepage `.lens-enrichment` (CLONE_SPEC §5.2), with 7 tooltips. After it comes "SECURITY" with 3 `.lens-security-card` items.
  - S6 CTA banner (`cta-lens.mp4`).
  - **No FAQ and no home CTA on this page.**
- **Reuse:** `Collaboration.jsx` rays/tooltip pattern (S5 is the same markup with different labels), `Sharing.jsx` layout (`.home-sharing` grid) for the S2 reporting block, the product hero, `CtaBanner`, `Button` (`light-stroke` in S4).
- **Motion:**
  - IX2 a-71 hero parallax.
  - **SVG graph draw-on-scroll** (`_shared-pages.md` §4 "SVG path-draw"): the progress window runs from 70% to 30% of viewport height. Each `.svg-animate-path` gets stroke-dashoffset `len·(1−p)`, and `.svg-animate-clip` gets `clip-path: inset(0 X% 0 0)` revealing left→right.
  - **Marquees** use AutoScrollCarousel: 1px/frame via rAF, gap from `--gap`/`data-gap` (16 default). It clones the item set ×2 before and after, so the live DOM has 75 `li` = 15 originals × 5; build only 15 and clone in code. `.rtl` scrolls the other way. It pauses on hover and on `visibilitychange`. It only runs when the content is wider than its parent: the 5-badge row is static at 1440 and animates at 390. That is why the 390 DOM has more nodes. Geometry for items after the first 15 at 390 is not comparable.
  - `[data-tabs]` tabs: panes swap instantly. Tab links and arrow buttons transition `.5s cubic-bezier(0.19,1,0.22,1)`.
  - Enrichment tooltips: `.lens-enrichment-tooltip-body` `.3s cubic-bezier(0.33,1,0.68,1)`, ring `.9s cubic-bezier(0.16,1,0.3,1)`. Same as the homepage.
- **Fonts:** this page also loads **Inter 700** (`<strong>` in the reporting overline). The file is downloaded to `/assets/pages/lens-creative-analytics/62a4ee4863aafab209e40961_Inter-Bold.otf`.
- **Embeds:** YouTube lightbox (hero).

## Page meta (measured)

- Webflow page id `67b9e93a73d2b1b6e81726ce`. Title: `Lens - Meta Ad Creative Analytics & Reporting`.
- Meta description: ~149 chars (not transcribed).
- Document height: 1440 → 10291, 991 → 11185, 390 → 11805. Body bg rgb(2, 3, 8).
- Navbar: same DOM as homepage (same node count/height; only the active-link state class differs) → reuse `Navbar.jsx`.
- Footer: same DOM as homepage (same node count/height) → reuse `Footer.jsx` (incl. calendar pop-up + exit-intent modal).
- Fonts loaded: Inter Display 600 normal, Inter 400 normal, Inter 600 normal, Inter 500 normal, Inter 700 normal.

## Section map (DOM order)

Legend: each line is `tag.class — W×H @x,y` at 1440 (y relative to the section top), then `| 991:` and `| 390:` geometry, then non-default computed styles at 1440, then `Δ991{…}` / `Δ390{…}` listing only layout/typography values that differ from 1440. `hidden` = display:none or 0×0 at that width. Text: short UI strings verbatim in quotes; long copy as ‹copy: ~N chars, L lines @1440› (write stand-in copy of matching length). Classes prefixed `w-` (Webflow runtime) are dropped except meaningful widget classes.

### S1. `section#product-hero-section.section.relative`

y/height: 1440 72/1364 · 991 72/1093.4 · 390 72/765.8

- `section#product-hero-section.section.relative` — 1440×1364 @0,0 | 991: 991×1093.4 @0,0 | 390: 390×765.8 @0,0 · pos:relative
  - `div.dot-bg` — 1440×1364 @0,0 | 991: 991×1093.4 @0,0 | 390: 390×765.8 @0,0 · pos:absolute [0px 0px 0px 0px]; bgimg:url(68331d86cf0a6a7db433a56d_dot-grid.webp); bgsize:380px 380px; bgpos:50% 0px; opacity:0.66; pe:none · Δ390{bgsize:256px 256px} · ASSET `/assets/pages/swipe-file/68331d86cf0a6a7db433a56d_dot-grid.webp`
  - `div.container` — 1440×1364 @0,0 | 991: 991×1093.4 @0,0 | 390: 390×765.8 @0,0 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
    - `div.product-hero` — 1360×1364 @40,0 | 991: 927×1093.4 @32,0 | 390: 342×765.8 @24,0 · display:flex; dir:column; align:center; pad:10px 0px 0px 0px · Δ390{pad:24px 0px}
      - `div.product-hero-animation-trigger` — 1440×900 @0,-72 | 991: 991×900 @0,-72 | 390: 390×844 @0,-72 · pos:absolute [-72px 0px 536px 0px]; pe:none · ix2 w-id 78a6fcc6-755c-279f-a8d8-413b6af7ee18
      - `div.product-hero-sticky` — 900×500 @270,28 | 991: 900×500 @46,28 | 390: 342×512 @24,24 · display:flex; dir:column; align:center; pos:sticky [100px auto auto auto]; transform:matrix(1, 0, 0, 1, 0, 0) · Δ390{pos:relative; transform:none}
        - `div.product-hero-icon` — 256×256 @592,-12 | 991: 192×192 @400,28 | 390: 156×156 @117,24 · mar:-40px 0px -24px 0px · Δ991{pad:32px; mar:0px} · Δ390{pad:24px; mar:0px}
          - `div.code-video.w-embed` — 256×256 @592,-12 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; pos:relative
            - `video` — 256×256 @592,-12 | 991: hidden | 390: hidden · overflow:clip; fit:contain · ASSET `/assets/pages/lens-creative-analytics/animated-icon-lens.webm`, `/assets/pages/lens-creative-analytics/animated-icon-lens.mov` · VIDEO {"srcs":["animated-icon-lens.webm","animated-icon-lens.mov"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":2000,"vh":2000,"dur":4,"preload":"metadata"}
          - `img.product-hero-icon-image` — hidden | 991: 128×128 @432,60 | 390: 108×108 @141,48 · display:none; maxw:100%; overflow:clip; fit:fill; aspect:auto 128 / 128 · Δ991{display:block} · Δ390{display:block} · IMG `/assets/pages/lens-creative-analytics/682f9f725170de3b3258d310_pi-lens-hq.webp` natural 256×256 loading=lazy alt "Lens app icon"
        - `div.product-hero-content` — 900×308 @270,220 | 991: 900×308 @46,220 | 390: 342×356 @24,180 · display:flex; dir:column; align:center; gap:28px · Δ390{gap:24px; pad:0px 0px 24px 0px; pos:relative}
          - `div.hero-text` — 900×240 @270,220 | 991: 900×240 @46,220 | 390: 342×268 @24,180 · display:flex; dir:column; align:center; gap:16px; maxw:900px · Δ390{gap:12px}
            - `h1.text-overline` — 38.8×16 @701,220 | 991: 38.8×16 @476,220 | 390: 38.8×16 @176,180 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "LENS"
            - `h2.text-display-h1.hero-title` — 900×136 @270,252 | 991: 900×136 @46,252 | 390: 342×144 @24,208 · bgimg:radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88)); bgsize:auto; bgpos:0% 0%; bgclip:text; font:Inter Display 60px/68px w600 ls-0.45px; color:rgba(255, 255, 255, 0.88); align-text:center; wrap-text:balance; fill:rgba(0, 0, 0, 0) · Δ390{font:38px/48px; ls:-0.285px} "Performance insights through a creative lens." (2 lines)
            - `div.max-w-lg` — 512×56 @464,404 | 991: 512×56 @240,404 | 390: 342×84 @24,364 · maxw:512px
              - `p.text-body-l.text-white-84` — 512×56 @464,404 | 991: 512×56 @240,404 | 390: 342×84 @24,364 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center ‹copy: ~109 chars, 2 lines @1440›
          - `a.button-dark.button-primary` — 152.6×40 @644,488 | 991: 152.6×40 @419,488 | 390: 152.6×40 @119,472 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; flex:1 1 0%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `https://app.foreplay.co/sign-up`
            - `div.button-text-block` — 116.6×24 @652,496 | 991: 116.6×24 @427,496 | 390: 116.6×24 @127,480 · pos:relative; pad:0px 6px; z:2
              - `div.text-heading-m` — 104.6×24 @658,496 | 991: 104.6×24 @433,496 | 390: 104.6×24 @133,480 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14); align-text:center "Start free trial"
            - `div.button-icon-block.icon-right.opacity-100` — 24×24 @764,496 | 991: 24×24 @540,496 | 390: 24×24 @239,480 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; z:2
              - `div.icon-medium` — 24×24 @764,496 | 991: 24×24 @540,496 | 390: 24×24 @239,480 · display:flex; justify:center; align:center
                - `div.svg.w-embed` — 24×24 @764,496 | 991: 24×24 @540,496 | 390: 24×24 @239,480 · display:flex; justify:center; align:center
                  - `svg` — 24×24 @764,496 | 991: 24×24 @540,496 | 390: 24×24 @239,480 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-185ries.svg`
      - `div.product-hero-preview` — 1360×850 @40,562 | 991: 927×579.4 @32,562 | 390: 342×213.8 @24,576 · display:flex; dir:column; align:center; pos:relative; mar:52px 0px -48px 0px; aself:stretch; aspect:16 / 10 · Δ390{mar:40px 0px -48px 0px}
        - `img.product-hero-preview-image` — 1360×850 @40,562 | 991: 927×579.4 @32,562 | 390: 342×213.8 @24,576 · pos:relative; maxw:100%; overflow:clip; z:2; fit:fill; aspect:16 / 10; pe:none · IMG `/assets/pages/swipe-file/6820c07c2e5b8c350c8e1f4c_hero-empty-mockup.webp` natural 1440×900 loading=lazy alt "apple pro xdr monnitor mockup"
        - `div.product-hero-preview-underlay` — 1440×952 @0,460 | 991: 991×648.9 @0,492 | 390: hidden · pos:absolute [-102px -40px 0px -40px]; bgimg:linear-gradient(0deg, rgb(2, 3, 8) 75%, rgba(2, 3, 8, 0)); bgsize:auto; bgpos:0% 0%; pe:none · Δ390{display:none}
        - `div.product-hero-video.w-background-video` — 1094.9×541.9 @171,632 | 991: 740.1×366.5 @123,610 | 390: 268.6×136.3 @60,592 · display:flex; justify:center; align:center; pos:absolute [56.0938px 152.328px 242.203px 149.594px]; bg:rgb(2, 3, 8); transform:matrix3d(1, 0, 0, 0, 0, 0.992546, 0.121869, 0, 0, -0.121869, 0.992546, 0, 0, 0, 0, 1); overflow:hidden; z:1; aspect:1400 / 730 · Δ991{transform:matrix3d(1, 0, 0, 0, 0, 0.987688, 0.156434, 0, 0, -0.156434, 0.987688, 0, 0, 0, 0, 1)} · Δ390{transform:matrix3d(1, 0, 0, 0, 0, 0.987688, 0.156434, 0, 0, -0.156434, 0.987688, 0, 0, 0, 0, 1)} · ASSET `/assets/pages/lens-creative-analytics/68338afa127062351d6e99da_product-video-lens-transcode.mp4`, `/assets/pages/lens-creative-analytics/68338afa127062351d6e99da_product-video-lens-transcode.webm`, `/assets/pages/lens-creative-analytics/68338afa127062351d6e99da_product-video-lens-poster-00001.jpg` · data {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338afa127062351d6e99da_product-video-lens-poster-00001.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
          - `video#ebc2c5a2-86e3-93d7-aee7-439f2cd02d88-video` — 1094.9×541.9 @171,632 | 991: 740.1×366.5 @123,610 | 390: 268.6×136.3 @60,592 · pos:absolute [-551.703px -1058.08px -551.703px -1058.08px]; mar:551.703px 1058.08px; bgimg:url(62a4ed18ddad95dde8b8bfa4/68338afa127062351d6e99da_product-video-lens-poster-00001.jpg); bgsize:cover; bgpos:50% 50%; overflow:clip; z:-100; fit:cover · Δ991{mar:374.594px 718.422px} · Δ390{mar:138.547px 265.719px} · ASSET `/assets/pages/lens-creative-analytics/68338afa127062351d6e99da_product-video-lens-poster-00001.jpg`, `/assets/pages/lens-creative-analytics/68338afa127062351d6e99da_product-video-lens-transcode.mp4`, `/assets/pages/lens-creative-analytics/68338afa127062351d6e99da_product-video-lens-transcode.webm` · VIDEO {"srcs":["62a4ed18ddad95dde8b8bfa4/68338afa127062351d6e99da_product-video-lens-transcode.mp4","62a4ed18ddad95dde8b8bfa4/68338afa127062351d6e99da_product-video-lens-transcode.webm"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":1280,"vh":668,"dur":10.166667,"preload":"metadata"} · data {"data-wf-ignore":"true","data-object-fit":"cover"}
        - `div.video-lightbox-holder` — 1360×850 @40,562 | 991: 927×579.4 @32,562 | 390: 342×213.8 @24,576 · display:flex; justify:center; align:center; pos:absolute [0px 0px 0px 0px]; z:2 · Δ390{pad:48px 0px 0px 0px}
          - `a.lightbox-video-main` — 236.4×68 @602,893 | 991: 236.4×68 @377,770 | 390: 51×51 @170,639 · mar:-120px 0px 0px 0px; maxw:100% · Δ991{mar:-95px 0px 0px 0px} · Δ390{mar:0px 0px 85.5px 0px; transform:matrix(0.75, 0, 0, 0.75, 0, 0)} · href `#` · aria "open lightbox"
            - `div.lightbox-video-trigger` — 236.4×68 @602,893 | 991: 236.4×68 @377,770 | 390: 51×51 @170,639 · display:flex; align:center; gap:10px; pad:8px; bg:rgba(0, 0, 0, 0.84); radius:16px; backdrop:blur(5px); transition:0.2s
              - `div.video-lightbox-button` — 52×52 @610,901 | 991: 52×52 @385,778 | 390: 39×39 @176,645 · display:flex; justify:center; align:center; bg:rgba(255, 255, 255, 0.12); radius:8px
                - `div.icon-medium.w-embed` — 24×24 @624,915 | 991: 24×24 @399,792 | 390: 18×18 @186,655 · display:flex; justify:center; align:center
                  - `svg` — 20×20 @626,917 | 991: 20×20 @401,794 | 390: 15×15 @188,657 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-icon-medium-1aj97ch.svg`
              - `div.video-lightbox-text` — 158.4×40 @672,907 | 991: 158.4×40 @447,784 | 390: hidden · display:flex; dir:column; align:flex-start; pad:0px 4px 0px 0px · Δ390{display:none}
                - `div.text-label-s` — 83.8×20 @672,907 | 991: 83.8×20 @447,784 | 390: hidden · font:Inter 14px/20px w500 ls-0.09px; color:rgb(255, 255, 255); align-text:center "Watch Video"
                - `div.text-alpha-100` — 154.4×20 @672,927 | 991: 154.4×20 @447,804 | 390: hidden · flex:1 1 0%
                  - `div.text-body-s` — 154.4×20 @672,927 | 991: 154.4×20 @447,804 | 390: hidden · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68); align-text:center "Learn more about Lens."

### S2. `section.section`

y/height: 1440 1436/1764.8 · 991 1165/2305.3 · 390 838/2753.9

- `div.section-padding` — 1440×1764.8 @0,0 | 991: 991×2305.3 @0,0 | 390: 390×2753.9 @0,0 · pad:8px
  - `div.section-white-block` — 1424×1748.8 @8,8 | 991: 975×2289.3 @8,8 | 390: 374×2737.9 @8,8 · pos:relative; bg:rgb(255, 255, 255); radius:36px; overflow:hidden; z:2 · Δ390{radius:16px}
    - `div.container.section-container` — 1344×1748.8 @48,8 | 991: 975×2289.3 @8,8 | 390: 374×2737.9 @8,8 · pad:0px 40px; mar:0px 40px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
      - `div.lens-solution-icons` — 1264×272 @88,8 | 991: 911×296 @40,8 | 390: 326×664 @32,8 · display:grid; cols:304px 304px 304px 304px; rows:112px; gap:16px; pad:80px 0px · Δ991{cols:215.75px 215.75px 215.75px 215.75px} · Δ390{cols:326px; gap:40px 16px; pad:48px 0px}
        - `div.lens-solution-icons-card` — 304×112 @88,88 | 991: 215.8×136 @40,88 | 390: 326×112 @32,56 · display:flex; dir:column; align:center; gap:12px; pad:0px 8px
          - `div.icon-medium` — 24×24 @228,88 | 991: 24×24 @136,88 | 390: 24×24 @183,56 · display:flex; justify:center; align:center
            - `div.svg.w-embed` — 24×24 @228,88 | 991: 24×24 @136,88 | 390: 24×24 @183,56 · display:flex; justify:center; align:center
              - `svg` — 24×24 @228,88 | 991: 24×24 @136,88 | 390: 24×24 @183,56 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-1xjghn2.svg`
          - `div.lens-solution-text` — 288×76 @96,124 | 991: 199.8×100 @48,124 | 390: 310×76 @40,92 · display:flex; dir:column; gap:4px
            - `h3.text-label-m` — 288×24 @96,124 | 991: 199.8×24 @48,124 | 390: 310×24 @40,92 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(23, 25, 32); align-text:center "Automated Reporting"
            - `p.text-body-m` — 288×48 @96,152 | 991: 199.8×72 @48,152 | 390: 310×48 @40,120 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(52, 54, 66); align-text:center; wrap-text:pretty ‹copy: ~67 chars, 2 lines @1440›
        - `div.lens-solution-icons-card` — 304×112 @408,88 | 991: 215.8×136 @272,88 | 390: 326×112 @32,208 · display:flex; dir:column; align:center; gap:12px; pad:0px 8px
          - `div.icon-medium` — 24×24 @548,88 | 991: 24×24 @368,88 | 390: 24×24 @183,208 · display:flex; justify:center; align:center
            - `div.svg.w-embed` — 24×24 @548,88 | 991: 24×24 @368,88 | 390: 24×24 @183,208 · display:flex; justify:center; align:center
              - `svg` — 24×24 @548,88 | 991: 24×24 @368,88 | 390: 24×24 @183,208 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-1evn5gy.svg`
          - `div.lens-solution-text` — 288×76 @416,124 | 991: 199.8×100 @280,124 | 390: 310×76 @40,244 · display:flex; dir:column; gap:4px
            - `h3.text-label-m` — 288×24 @416,124 | 991: 199.8×24 @280,124 | 390: 310×24 @40,244 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(23, 25, 32); align-text:center "Goal Tracking"
            - `p.text-body-m` — 288×48 @416,152 | 991: 199.8×72 @280,152 | 390: 310×48 @40,272 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(52, 54, 66); align-text:center; wrap-text:pretty "Gamify and incentivize teams to outperform your goals." (2 lines)
        - …2 more `div.lens-solution-icons-card` siblings with the same structure (4 total):
          - [3] 304×112 @728,88 — svg 141kc2v, "Industry Benchmarking", "Compare results with over 30,000 other advertisers."
          - [4] 304×112 @1048,88 — svg ood670, "Automated Inspiration", "Enable agents to research, ideate and iterate your advertising."
      - `div.lens-solution-graph` — 940×780.8 @250,280 | 991: 911×772.3 @40,304 | 390: 326×1040.9 @32,672 · display:flex; dir:column; gap:36px; pad:80px 0px; mar:0px 162px; maxw:940px · Δ991{mar:0px} · Δ390{gap:32px; pad:40px 0px; mar:0px; maxw:480px}
        - `h2.text-display-h3` — 940×44 @250,360 | 991: 911×44 @40,384 | 390: 326×88 @32,712 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(9, 10, 14); align-text:center; wrap-text:pretty "Axe the ad spend tax."
        - `div.lens-solution-graph-grid` — 940×456.8 @250,440 | 991: 911×448.3 @40,464 | 390: 326×736.9 @32,832 · display:grid; cols:462px 462px; rows:456.812px; gap:16px; aself:stretch · Δ991{cols:447.5px 447.5px} · Δ390{cols:326px}
          - `div.lens-solution-graph-card.svg-animation-container` — 462×456.8 @250,440 | 991: 447.5×448.3 @40,464 | 390: 326×360.5 @32,832 · display:flex; dir:column; gap:8px; pad:32px 12px 12px 12px; radius:20px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px inset · Δ390{pad:24px 12px 12px 12px}
            - `div` — 438×102 @262,472 | 991: 423.5×102 @52,496 | 390: 302×94 @44,856
              - `h3.text-label-l` — 438×30 @262,472 | 991: 423.5×30 @52,496 | 390: 302×30 @44,856 · font:Inter 18px/30px w500 ls-0.259999px; color:rgb(15, 17, 22); align-text:center · Δ390{font:16px/30px; ls:-0.23111px} "Other Analytics Tools"
              - `div.lens-solution-graph-description` — 328×72 @317,502 | 991: 328×72 @100,526 | 390: 302×64 @44,886 · pad:4px 0px 20px 0px; mar:0px 55px; maxw:328px · Δ991{mar:0px 47.75px} · Δ390{pad:4px 0px 12px 0px; mar:0px}
                - `p.text-body-m` — 328×48 @317,506 | 991: 328×48 @100,530 | 390: 302×48 @44,890 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(52, 54, 66); align-text:center; wrap-text:balance "Your performance should not mean you have to pay more." (2 lines)
            - `div.lens-solution-graph-illustration` — 438×258.8 @262,582 | 991: 423.5×250.3 @52,606 | 390: 302×178.5 @44,958 · pos:relative; radius:8px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px inset; overflow:hidden; z:5; aspect:22 / 13
              - `div.vertical-line-container` — 438×258.8 @262,582 | 991: 423.5×250.3 @52,606 | 390: 302×178.5 @44,958 · display:flex; justify:space-between; pos:absolute [0px 0px 0px 0px]; pe:none
                - `div.vertical-line` — 1×258.8 @262,582 | 991: 1×250.3 @52,606 | 390: 1×178.5 @44,958 · pe:none
                - `div.vertical-line.bg-current` — 1×258.8 @324,582 | 991: 1×250.3 @112,606 | 390: 1×178.5 @87,958 · bg:rgb(233, 234, 239); pe:none
                - `div.vertical-line.bg-current` — 1×258.8 @387,582 | 991: 1×250.3 @173,606 | 390: 1×178.5 @130,958 · bg:rgb(233, 234, 239); pe:none
                - …5 more `div.vertical-line.bg-current` siblings with the same structure (7 total):
                  - [3] 1×258.8 @449,582 — 
                  - [4] 1×258.8 @512,582 — 
                  - [5] 1×258.8 @574,582 — 
                  - [6] 1×258.8 @637,582 — 
                  - [7] 1×258.8 @699,582 — 
              - `div.horizontal-line-container` — 438×258.8 @262,582 | 991: 423.5×250.3 @52,606 | 390: 302×178.5 @44,958 · display:flex; dir:column; justify:space-between; pos:absolute [0px 0px 0px 0px]; pe:none
                - `div.horizontal-line.bg-current` — 438×1 @262,582 | 991: 423.5×1 @52,606 | 390: 302×1 @44,958 · bg:rgb(233, 234, 239); pe:none
                - `div.horizontal-line.bg-current` — 438×1 @262,634 | 991: 423.5×1 @52,656 | 390: 302×1 @44,993 · bg:rgb(233, 234, 239); pe:none
                - …4 more `div.horizontal-line.bg-current` siblings with the same structure (6 total):
                  - [3] 438×1 @262,685 — 
                  - [4] 438×1 @262,737 — 
                  - [5] 438×1 @262,788 — 
                  - [6] 438×1 @262,840 — 
              - `div.lens-solution-graph-svg` — 438×258.8 @262,582 | 991: 423.5×250.3 @52,606 | 390: 302×178.5 @44,958 · pos:absolute [0px 0px 0px 0px]; z:2
                - `div.svg.w-embed` — 438×258.8 @262,582 | 991: 423.5×250.3 @52,606 | 390: 302×178.5 @44,958 · display:flex; justify:center; align:center
                  - `svg` — 438×258.8 @262,582 | 991: 423.5×250.3 @52,606 | 390: 302×178.5 @44,958 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-s6cry0.svg`
              - `div.lens-solution-graph-svg` — 438×258.8 @262,582 | 991: 423.5×250.3 @52,606 | 390: 302×178.5 @44,958 · pos:absolute [0px 0px 0px 0px]; z:2
                - `div.svg.w-embed` — 438×258.8 @262,582 | 991: 423.5×250.3 @52,606 | 390: 302×178.5 @44,958 · display:flex; justify:center; align:center
                  - `svg` — 438×258.8 @262,582 | 991: 423.5×250.3 @52,606 | 390: 302×178.5 @44,958 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-s7bqj5.svg`
            - `div.lens-solution-legend` — 438×36 @262,849 | 991: 423.5×36 @52,865 | 390: 302×36 @44,1144 · display:flex; justify:center; align:center; gap:8px
              - `div.lens-solution-legend-badge` — 99.9×36 @362,849 | 991: 99.9×36 @145,865 | 390: 99.9×36 @76,1144 · display:flex; align:center; gap:8px; pad:8px 12px 8px 8px
                - `div.dot.is-teal` — 8×8 @370,863 | 991: 8×8 @153,879 | 390: 8×8 @84,1158 · bg:rgb(124, 221, 181); radius:99px
                - `div.text-body-s` — 63.9×20 @386,857 | 991: 63.9×20 @169,873 | 390: 63.9×20 @100,1152 · font:Inter 14px/20px w400 ls-0.09px; color:rgb(52, 54, 66); align-text:center "Ad Spend"
              - `div.lens-solution-legend-badge` — 129.8×36 @470,849 | 991: 129.8×36 @253,865 | 390: 129.8×36 @184,1144 · display:flex; align:center; gap:8px; pad:8px 12px 8px 8px
                - `div.dot.is-red` — 8×8 @478,863 | 991: 8×8 @261,879 | 390: 8×8 @192,1158 · bg:rgb(231, 127, 110); radius:99px
                - `div.text-body-s` — 93.8×20 @494,857 | 991: 93.8×20 @277,873 | 390: 93.8×20 @208,1152 · font:Inter 14px/20px w400 ls-0.09px; color:rgb(52, 54, 66); align-text:center "Analytics Cost"
          - `div.lens-solution-graph-card.is-lens.svg-animation-container` — 462×456.8 @728,440 | 991: 447.5×448.3 @504,464 | 390: 326×360.5 @32,1208 · display:flex; dir:column; gap:8px; pad:32px 12px 12px 12px; bg:rgb(2, 3, 8); radius:20px · Δ390{pad:24px 12px 12px 12px}
            - `div` — 438×102 @740,472 | 991: 423.5×102 @516,496 | 390: 302×94 @44,1232
              - `h3.text-label-l` — 438×30 @740,472 | 991: 423.5×30 @516,496 | 390: 302×30 @44,1232 · font:Inter 18px/30px w500 ls-0.259999px; color:rgb(255, 255, 255); align-text:center · Δ390{font:16px/30px; ls:-0.23111px} "Lens Analytics"
              - `div.lens-solution-graph-description` — 328×72 @795,502 | 991: 328×72 @563,526 | 390: 302×64 @44,1262 · pad:4px 0px 20px 0px; mar:0px 55px; maxw:328px · Δ991{mar:0px 47.75px} · Δ390{pad:4px 0px 12px 0px; mar:0px}
                - `p.text-body-m` — 328×48 @795,506 | 991: 328×48 @563,530 | 390: 302×48 @44,1266 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:balance ‹copy: ~75 chars, 2 lines @1440›
            - `div.lens-solution-graph-illustration.is-lens` — 438×258.8 @740,582 | 991: 423.5×250.3 @516,606 | 390: 302×178.5 @44,1334 · pos:relative; radius:8px; shadow:rgb(23, 25, 32) 0px 0px 0px 1px inset; overflow:hidden; z:5; aspect:22 / 13
              - `div.horizontal-line-container` — 438×258.8 @740,582 | 991: 423.5×250.3 @516,606 | 390: 302×178.5 @44,1334 · display:flex; dir:column; justify:space-between; pos:absolute [0px 0px 0px 0px]; pe:none
                - `div.horizontal-line.bg-current` — 438×1 @740,582 | 991: 423.5×1 @516,606 | 390: 302×1 @44,1334 · bg:rgb(23, 25, 32); pe:none
                - `div.horizontal-line.bg-current` — 438×1 @740,634 | 991: 423.5×1 @516,656 | 390: 302×1 @44,1370 · bg:rgb(23, 25, 32); pe:none
                - …4 more `div.horizontal-line.bg-current` siblings with the same structure (6 total):
                  - [3] 438×1 @740,685 — 
                  - [4] 438×1 @740,737 — 
                  - [5] 438×1 @740,788 — 
                  - [6] 438×1 @740,840 — 
              - `div.vertical-line-container` — 438×258.8 @740,582 | 991: 423.5×250.3 @516,606 | 390: 302×178.5 @44,1334 · display:flex; justify:space-between; pos:absolute [0px 0px 0px 0px]; pe:none
                - `div.vertical-line.bg-current` — 1×258.8 @740,582 | 991: 1×250.3 @516,606 | 390: 1×178.5 @44,1334 · bg:rgb(23, 25, 32); pe:none
                - `div.vertical-line.bg-current` — 1×258.8 @802,582 | 991: 1×250.3 @576,606 | 390: 1×178.5 @87,1334 · bg:rgb(23, 25, 32); pe:none
                - …6 more `div.vertical-line.bg-current` siblings with the same structure (8 total):
                  - [3] 1×258.8 @865,582 — 
                  - [4] 1×258.8 @927,582 — 
                  - [5] 1×258.8 @990,582 — 
                  - [6] 1×258.8 @1052,582 — 
                  - [7] 1×258.8 @1115,582 — 
                  - [8] 1×258.8 @1177,582 — 
              - `div.lens-solution-graph-svg` — 438×258.8 @740,582 | 991: 423.5×250.3 @516,606 | 390: 302×178.5 @44,1334 · pos:absolute [0px 0px 0px 0px]; z:2
                - `div.svg.w-embed` — 438×258.8 @740,582 | 991: 423.5×250.3 @516,606 | 390: 302×178.5 @44,1334 · display:flex; justify:center; align:center
                  - `svg` — 438×258.8 @740,582 | 991: 423.5×250.3 @516,606 | 390: 302×178.5 @44,1334 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-pjioip.svg`
              - `div.lens-solution-graph-svg` — 438×258.8 @740,582 | 991: 423.5×250.3 @516,606 | 390: 302×178.5 @44,1334 · pos:absolute [0px 0px 0px 0px]; z:2
                - `div.svg.w-embed` — 438×258.8 @740,582 | 991: 423.5×250.3 @516,606 | 390: 302×178.5 @44,1334 · display:flex; justify:center; align:center
                  - `svg` — 438×258.8 @740,582 | 991: 423.5×250.3 @516,606 | 390: 302×178.5 @44,1334 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-i20xti.svg`
              - `div.lens-solution-graph-svg` — 438×258.8 @740,582 | 991: 423.5×250.3 @516,606 | 390: 302×178.5 @44,1334 · pos:absolute [0px 0px 0px 0px]; z:2
                - `div.svg.w-embed` — 438×258.8 @740,582 | 991: 423.5×250.3 @516,606 | 390: 302×178.5 @44,1334 · display:flex; justify:center; align:center
                  - `svg` — 438×258.8 @740,582 | 991: 423.5×250.3 @516,606 | 390: 302×178.5 @44,1334 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-yl6kl9.svg`
              - `div.div-block-323` — 438×51.8 @740,789 | 991: 423.5×50 @516,807 | 390: 302×35.7 @44,1477 · pos:absolute [207.062px 0px 0px 0px]; bgimg:linear-gradient(90deg, rgb(231, 127, 110), rgb(255, 200, 82) 20%, rgb(210, 227, 130) 43%, rgb(124, 221, 181) 64%, rgb(93, 188, 229) 84%, rgb(93, 120, 229)); bgsize:auto; bgpos:0% 0%; opacity:0.25
              - `div.div-block-323-copy` — 438×51.8 @740,789 | 991: 423.5×50 @516,807 | 390: 302×35.7 @44,1477 · display:flex; justify:center; align:center; pos:absolute [207.062px 0px 0px 0px]; bgimg:linear-gradient(rgba(33, 34, 38, 0.5), rgb(33, 34, 38)); bgsize:auto; bgpos:0% 0%
                - `div.div-block-324` — 101.3×22 @908,804 | 991: 101.3×22 @677,821 | 390: 101.3×22 @144,1484 · pad:1px 6px; bg:rgba(255, 255, 255, 0.05); radius:4px
                  - `div.text-body-xs` — 89.3×20 @914,805 | 991: 89.3×20 @683,822 | 390: 89.3×20 @150,1485 · font:Inter 12px/20px w400 ls-0.18px; color:rgba(255, 255, 255, 0.54); align-text:center "Flat Rate Pricing"
            - `div.lens-solution-legend` — 438×36 @740,849 | 991: 423.5×36 @516,865 | 390: 302×36 @44,1521 · display:flex; justify:center; align:center; gap:8px
              - `div.lens-solution-legend-badge` — 99.9×36 @854,849 | 991: 99.9×36 @623,865 | 390: 99.9×36 @90,1521 · display:flex; align:center; gap:8px; pad:8px 12px 8px 8px
                - `div.dot.is-white` — 8×8 @862,863 | 991: 8×8 @631,879 | 390: 8×8 @98,1535 · bg:rgb(255, 255, 255); radius:99px
                - `div.text-body-s` — 63.9×20 @878,857 | 991: 63.9×20 @647,873 | 390: 63.9×20 @114,1529 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68); align-text:center "Ad Spend"
              - `div.lens-solution-legend-badge` — 101.6×36 @962,849 | 991: 101.6×36 @730,865 | 390: 101.6×36 @198,1521 · display:flex; align:center; gap:8px; pad:8px 12px 8px 8px
                - `div.dot.is-rainbow` — 8×8 @970,863 | 991: 8×8 @738,879 | 390: 8×8 @206,1535 · bgimg:linear-gradient(45deg, rgb(231, 127, 110), rgb(255, 200, 82) 17%, rgb(210, 227, 130) 36%, rgb(124, 221, 181) 59%, rgb(93, 188, 229) 87%, rgb(93, 120, 229)); bgsize:auto; bgpos:0% 0%; radius:99px
                - `div.text-body-s` — 65.6×20 @986,857 | 991: 65.6×20 @754,873 | 390: 65.6×20 @222,1529 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68); align-text:center "Lens Cost"
        - `div.max-w-lg.mx-auto.text-pretty` — 512×48 @464,933 | 991: 512×48 @240,949 | 390: 326×72 @32,1601 · mar:0px 214px; maxw:512px · Δ991{mar:0px 199.5px} · Δ390{mar:0px}
          - `div` — 512×48 @464,933 | 991: 512×48 @240,949 | 390: 326×72 @32,1601 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(36, 38, 46); align-text:center; wrap-text:pretty ‹copy: ~117 chars, 2 lines @1440› · inline: a.inline-link "pricing" (color rgb(9, 10, 14), w500, fill rgb(9, 10, 14))
      - `div.home-sharing` — 1264×696 @88,1061 | 991: 911×1221 @40,1077 | 390: 326×1033 @32,1713 · display:grid; cols:592px 592px; rows:284.5px 235.5px; gap:80px; pad:96px 0px 0px 0px · Δ991{display:flex; dir:column; wrap:nowrap; justify:space-between; align:center; gap:40px} · Δ390{display:flex; dir:column; wrap:nowrap; justify:space-between; align:center; gap:8px; pad:80px 0px 0px 0px} · data {"data-tabs-name":"sharing & presenting","data-tabs":""}
        - `div.home-sharing-content` — 592×284.5 @88,1157 | 991: 720×181 @136,1173 | 390: 326×317 @32,1793 · display:flex; dir:column; gap:40px
          - `div.section-head.is-align-left` — 592×212 @88,1157 | 991: 720×140 @136,1173 | 390: 326×276 @32,1793 · display:flex; dir:column; align:flex-start; gap:12px; maxw:720px · Δ390{gap:8px}
            - `div.text-overline` — 166.9×16 @88,1157 | 991: 166.9×16 @136,1173 | 390: 166.9×16 @32,1793 · font:Inter 12px/16px w550 ls2px; color:rgb(52, 54, 66); tt:uppercase; wrap-text:pretty "CREATIVE REPORTING"
            - `h2.text-display-h3` — 592×88 @88,1185 | 991: 677.7×44 @136,1201 | 390: 326×132 @32,1817 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(23, 25, 32); wrap-text:balance "Beautiful, shareable white-labeled reports." (2 lines)
            - `p.text-body-l` — 592×84 @88,1285 | 991: 720×56 @136,1257 | 390: 326×112 @32,1957 · font:Inter 18px/28px w400 ls-0.259999px; color:rgb(36, 38, 46); wrap-text:balance ‹copy: ~140 chars, 3 lines @1440›
          - `div.line` — 592×1 @88,1409 | 991: 720×1 @136,1353 | 390: 326×1 @32,2109 · bg:rgb(233, 234, 239)
        - `div#w-node-e15e30e2-1262-a79c-3e4c-54dbd1025d23-e81726ce.lens-solution-report-main` — 592×235.5 @88,1521 | 991: 911×224 @40,2074 | 390: 326×300 @32,2446 · display:flex; dir:column; gap:40px; gcol:1/2; grow:2/3 · Δ991{pad:0px 0px 40px 0px} · Δ390{gap:24px; pad:24px 0px}
          - `div.lens-solution-report-panes` — 592×128 @88,1521 | 991: 911×108 @40,2074 | 390: 326×192 @32,2470 · data {"data-tab-panes":""}
            - `div.lens-solution-report-quote-inner` — 592×128 @88,1521 | 991: 911×108 @40,2074 | 390: 326×192 @32,2470 · display:grid; cols:84px 496px; rows:100px 16px; jitems:start; align:start; gap:12px · Δ991{cols:84px 815px} · Δ390{cols:40px 274px}
              - `div#w-node-e15e30e2-1262-a79c-3e4c-54dbd1025d27-e81726ce.lens-solution-report-avatar` — 84×84 @88,1521 | 991: 84×84 @40,2074 | 390: 40×40 @32,2622 · grow:span 2/span 2; bg:rgb(249, 249, 250); radius:10px; overflow:hidden; aspect:1 / 1 · Δ390{radius:4px}
                - `img` — 84×84 @88,1521 | 991: 84×84 @40,2074 | 390: 40×40 @32,2622 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/lens-creative-analytics/6835e653eb1107c0c2620fbf_iEUZ_Xb2_400x400.avif` natural 400×400 loading=lazy alt "Daniel Bogulewski headshot"
              - `div#w-node-e15e30e2-1262-a79c-3e4c-54dbd1025d29-e81726ce.lens-solution-report-quote-text` — 496×100 @184,1521 | 991: 815×60 @136,2074 | 390: 326×140 @32,2470 · display:flex; dir:column; gcol:2/3; grow:1/2 · Δ390{gap:12px}
                - `div.flex-1` — 496×100 @184,1521 | 991: 815×60 @136,2074 | 390: 326×140 @32,2470 · flex:1 1 0%
                  - `p.text-body-s` — 496×100 @184,1521 | 991: 815×60 @136,2074 | 390: 326×140 @32,2470 · font:Inter 14px/20px w400 ls-0.09px; color:rgb(23, 25, 32) ‹copy: ~307 chars, 5 lines @1440›
              - `div#w-node-e15e30e2-1262-a79c-3e4c-54dbd1025d2d-e81726ce.lens-solution-report-position` — 411.6×16 @184,1633 | 991: 238×36 @136,2146 | 390: 238×36 @84,2624 · display:flex; align:center; gap:12px; gcol:span 1/span 1; grow:span 1/span 1 · Δ991{dir:column; justify:center; align:flex-start; gap:4px} · Δ390{dir:column; justify:center; align:flex-start; gap:4px}
                - `div.text-overline` — 161.5×16 @184,1633 | 991: 161.5×16 @136,2146 | 390: 161.5×16 @84,2624
                  - `strong` — 161.5×15 @184,1633 | 991: 161.5×15 @136,2146 | 390: 161.5×15 @84,2624 · font:Inter 12px/16px w700 ls2px; color:rgb(23, 25, 32); tt:uppercase "DANIEL BOGULEWSKI"
                - `div.text-overline` — 238×16 @358,1633 | 991: 238×16 @136,2166 | 390: 238×16 @84,2644 · font:Inter 12px/16px w550 ls2px; color:rgb(178, 180, 197); tt:uppercase "CREATIVE DIRECTOR @ VIASOX"
            - `div#sharing & presenting-panel-1.lens-solution-report-pane` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: img 6811334e209446a735395e88_TBGAMNA75-U04K4GJ1PS6-840aeda5bec0-512.avif, ‹~224ch›, "Luis Morales", "Co-Founder @ Growth Collective"
          - `div.lens-solution-report-controls` — 592×36 @88,1689 | 991: 911×36 @40,2222 | 390: 326×36 @32,2686 · display:flex; gap:8px
            - `button.arrow-button` — 36×36 @88,1689 | 991: 36×36 @40,2222 | 390: 159×36 @32,2686 · display:flex; justify:center; align:center; pad:1px 6px; bg:rgb(239, 239, 239); radius:4px; transition:0.5s cubic-bezier(0.19, 1, 0.22, 1) · aria "Previous tab" · FIELD {"type":"button","name":"","ph":"","val":""} · data {"data-tab-prev":""}
              - `div.svg.w-embed` — 18×18 @97,1698 | 991: 18×18 @49,2231 | 390: 18×18 @103,2695 · display:flex; justify:center; align:center
                - `svg` — 18×18 @97,1698 | 991: 18×18 @49,2231 | 390: 18×18 @103,2695 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-1178rfo.svg`
            - `button.arrow-button` — 36×36 @132,1689 | 991: 36×36 @84,2222 | 390: 159×36 @199,2686 · display:flex; justify:center; align:center; pad:1px 6px; bg:rgb(239, 239, 239); radius:4px; transition:0.5s cubic-bezier(0.19, 1, 0.22, 1) · aria "Next tab" · FIELD {"type":"button","name":"","ph":"","val":""} · data {"data-tab-next":""}
              - `div.svg.w-embed` — 18×18 @141,1698 | 991: 18×18 @93,2231 | 390: 18×18 @270,2695 · display:flex; justify:center; align:center
                - `svg` — 18×18 @141,1698 | 991: 18×18 @93,2231 | 390: 18×18 @270,2695 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-gwcwos.svg`
        - `div#w-node-e15e30e2-1262-a79c-3e4c-54dbd1025d48-e81726ce.home-sharing-tab-panes-2` — 720×680 @760,1077 | 991: 677.6×640 @157,1394 | 390: 326×320 @32,2118 · mar:-80px -999px 0px 0px; maxw:720px; gcol:2/3; grow:1/3; aspect:720 / 680 · Δ991{mar:0px; maxw:none} · Δ390{mar:0px; maxw:none} · data {"data-tab-panes":""}
          - `div#sharing & presenting-panel-0.home-sharing-tab-pane-2.is-active` — 720×680 @760,1077 | 991: 677.6×640 @157,1394 | 390: 326×320 @32,2118 · display:flex; justify:center; align:center; pos:relative · Δ390{dir:column; justify:flex-start; radius:20px} · data {"data-tab-pane":""}
            - `img.home-mockup` — 720×680 @760,1077 | 991: 677.6×640 @157,1394 | 390: 342.2×320 @24,2118 · maxw:100%; overflow:clip; fit:fill; aspect:auto 720 / 680 · Δ390{maxw:none} · IMG `/assets/pages/lens-creative-analytics/681132c3a80b172817826701_Viasox - Report - Website.avif` natural 720×673 loading=eager alt "ad creative report mockup"
          - `div#sharing & presenting-panel-1.home-sharing-tab-pane-2` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: img 6811336e458136a0c19570fc_Growth Collective - Report - Website.avif

### S3. `section.section`

y/height: 1440 3201/1730.3 · 991 3471/1638.3 · 390 3592/1129.8

- `div.lens-integrations` — 1440×1730.3 @0,0 | 991: 991×1638.3 @0,0 | 390: 390×1129.8 @0,0 · display:flex; dir:column; pad:108px 0px; overflow:hidden · Δ991{pad:96px 0px} · Δ390{pad:80px 0px}
  - `div.container` — 1440×231.5 @0,108 | 991: 991×228 @0,96 | 390: 390×296 @0,80 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
    - `div.section-head` — 720×231.5 @360,108 | 991: 720×228 @136,96 | 390: 342×296 @24,80 · display:flex; dir:column; align:center; gap:12px; mar:0px 320px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
      - `div.section-head-wrapper` — 720×231.5 @360,108 | 991: 720×228 @136,96 | 390: 342×296 @24,80 · display:flex; dir:column; align:center; gap:12px
        - `div.text-overline.text-white-68` — 113.1×16 @663,108 | 991: 113.1×16 @439,96 | 390: 113.1×16 @138,80 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "INTEGRATIONS"
        - `h2.text-display-h2` — 720×107.5 @360,136 | 991: 720×104 @136,124 | 390: 342×144 @24,108 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Lightning fast insights directly from the source" (2 lines)
        - `div.section-head_paragraph` — 512×84 @464,255 | 991: 512×84 @240,240 | 390: 342×112 @24,264 · maxw:512px
          - `p.text-body-l` — 512×84 @464,255 | 991: 512×84 @240,240 | 390: 342×112 @24,264 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~145 chars, 3 lines @1440›
  - `div.container` — 1440×456 @0,339 | 991: 991×425.4 @0,324 | 390: 390×181.3 @0,376 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
    - `figure.lens-integrations-illustration` — 944×368 @248,427 | 991: 927×361.4 @32,388 | 390: 342×133.3 @24,424 · display:flex; justify:center; align:center; pos:relative; mar:88px 208px 0px 208px; maxw:944px; z:2; aspect:944 / 368 · Δ991{mar:64px 0px 0px 0px} · Δ390{mar:48px 0px 0px 0px}
      - `div.lens-integrations-gradient-spectrum` — 1038.4×462 @201,611 | 991: 927×418.8 @32,568 | 390: 342×154.5 @24,490 · pos:absolute [184px 0px -171.391px 0px]; transform:matrix(1.1, 0, 0, 1.3, 0, 0); z:1 · Δ991{transform:matrix(1, 0, 0, 1.2, 0, 0)} · Δ390{transform:matrix(1, 0, 0, 1.2, 0, 0)}
        - `div.code-video.w-embed` — 1038.4×462 @201,611 | 991: 927×418.8 @32,568 | 390: 342×154.5 @24,490 · display:flex; justify:center; align:center; pos:relative
          - `video` — 1038.4×462 @201,611 | 991: 927×418.8 @32,568 | 390: 342×154.5 @24,490 · overflow:clip; fit:contain · ASSET `/assets/pages/lens-creative-analytics/gradient-spectrum-optimized.mp4` · VIDEO {"srcs":["gradient-spectrum-optimized.mp4"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":1344,"vh":506,"dur":2.496,"preload":"metadata"}
      - `div.lens-integrations-path-container` — 944×368 @248,427 | 991: 927×361.4 @32,388 | 390: 342×133.3 @24,424 · display:flex; justify:center; align:center; pos:relative; z:2
        - `div.lens-integrations-path` — 472×368 @248,427 | 991: 463.5×361.4 @32,388 | 390: 171×133.3 @24,424
          - `div.svg.w-embed` — 472×367.2 @248,427 | 991: 463.5×360.6 @32,388 | 390: 171×133 @24,424 · display:flex; justify:center; align:center
            - `svg` — 472×367.2 @248,427 | 991: 463.5×360.6 @32,388 | 390: 171×133 @24,424 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-1io048a.svg`
        - `div.lens-integrations-path.is-inverted` — 472×368 @720,427 | 991: 463.5×361.4 @496,388 | 390: 171×133.3 @195,424 · transform:matrix(-1, 0, 0, 1, 0, 0)
          - `div.svg.w-embed` — 472×367.2 @720,427 | 991: 463.5×360.6 @496,388 | 390: 171×133 @195,424 · display:flex; justify:center; align:center
            - `svg` — 472×367.2 @720,427 | 991: 463.5×360.6 @496,388 | 390: 171×133 @195,424 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-p2ad2f.svg`
      - `div.lens-integrations-illustration-layout` — 944×368 @248,427 | 991: 927×361.4 @32,388 | 390: 342×133.3 @24,424 · display:flex; justify:space-between; pos:absolute [0px 0px 0px 0px]; maxw:944px; z:5
        - `div.lens-integrations-illustration-left` — 85.6×368 @248,427 | 991: 84×361.4 @32,388 | 390: 114×133.3 @24,424 · display:flex; dir:column; justify:space-between; align:flex-start · Δ390{pos:relative}
          - `div.lens-integrations-logo.is-top` — 85.6×85.6 @248,427 | 991: 84×84 @32,388 | 390: 37.3×37.3 @24,424 · display:flex; justify:center; align:center; bg:rgb(2, 3, 8); radius:20%; shadow:rgba(255, 255, 255, 0.16) 0px 0px 0px 1px inset; aspect:1 / 1
            - `div.svg.w-embed` — 85.6×85.6 @248,427 | 991: 84×84 @32,388 | 390: 37.3×37.3 @24,424 · display:flex; justify:center; align:center
              - `svg` — 85.6×85.6 @248,427 | 991: 84×84 @32,388 | 390: 37.3×37.3 @24,424 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-1vbif87.svg`
          - `div.lens-integrations-logo` — 85.6×85.6 @248,569 | 991: 84×84 @32,526 | 390: 37.3×37.3 @24,472 · display:flex; justify:center; align:center; bg:rgb(2, 3, 8); radius:20%; shadow:rgba(255, 255, 255, 0.16) 0px 0px 0px 1px inset; aspect:1 / 1
            - `div.svg.w-embed` — 85.6×85.6 @248,569 | 991: 84×84 @32,526 | 390: 37.3×37.3 @24,472 · display:flex; justify:center; align:center
              - `svg` — 85.6×85.6 @248,569 | 991: 84×84 @32,526 | 390: 37.3×37.3 @24,472 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-olxbga.svg`
          - `div.lens-integrations-logo.is-bottom` — 85.6×85.6 @248,710 | 991: 84×84 @32,665 | 390: 37.3×37.3 @24,520 · display:flex; justify:center; align:center; bg:rgb(2, 3, 8); radius:20%; shadow:rgba(255, 255, 255, 0.16) 0px 0px 0px 1px inset; aspect:1 / 1
            - `div.svg.w-embed` — 85.6×85.6 @248,710 | 991: 84×84 @32,665 | 390: 37.3×37.3 @24,520 · display:flex; justify:center; align:center
              - `svg` — 85.6×85.6 @248,710 | 991: 84×84 @32,665 | 390: 37.3×37.3 @24,520 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-1hx56xh.svg`
        - `div.lens-integrations-icon-container` — 184×184 @628,519 | 991: 180.7×180.7 @405,478 | 390: 114×133.3 @138,424 · display:flex; justify:center; align:center; aself:center; radius:21%; overflow:hidden; aspect:1 / 1 · Δ390{pos:relative}
          - `div.lens-integrations-icon` — 368×368 @539,426 | 991: 361.3×361.3 @318,387 | 390: 114×133.3 @138,424 · pos:relative [-1px -3px 1px 3px]; flex:0 0 auto · Δ390{display:flex; dir:row; wrap:nowrap; justify:center; align:center; gap:normal; pos:static}
            - `div.code-video.w-embed` — 368×368 @539,426 | 991: 361.3×361.3 @318,387 | 390: hidden · display:flex; justify:center; align:center; pos:relative
              - `video` — 368×368 @539,426 | 991: 361.3×361.3 @318,387 | 390: hidden · overflow:clip; fit:contain · ASSET `/assets/pages/lens-creative-analytics/animated-icon-lens.webm`, `/assets/pages/lens-creative-analytics/animated-icon-lens.mov` · VIDEO {"srcs":["animated-icon-lens.webm","animated-icon-lens.mov"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":2000,"vh":2000,"dur":4,"preload":"metadata"}
            - `div.lens-integrations-image` — hidden | 991: hidden | 390: 108×91.8 @141,444 · display:none · Δ390{display:flex; dir:row; wrap:nowrap; justify:center; align:center; gap:normal; pos:relative}
              - `img.lens-integrations-image-image` — hidden | 991: hidden | 390: 91.8×91.8 @149,444 · maxw:100%; overflow:clip; fit:fill; aspect:auto 128 / 128 · Δ390{mar:0px 8.09375px 0px 8.10938px; maxw:108px} · IMG `/assets/pages/lens-creative-analytics/682f9f725170de3b3258d310_pi-lens-hq.webp` natural 256×256 loading=eager alt "Lens app icon"
        - `div.lens-integrations-illustration-right` — 85.6×368 @1106,427 | 991: 84×361.4 @875,388 | 390: 114×133.3 @252,424 · display:flex; dir:column; justify:space-between; align:flex-end · Δ390{pos:relative}
          - `div.lens-integrations-logo.is-top` — 85.6×85.6 @1106,427 | 991: 84×84 @875,388 | 390: 37.3×37.3 @329,424 · display:flex; justify:center; align:center; bg:rgb(2, 3, 8); radius:20%; shadow:rgba(255, 255, 255, 0.16) 0px 0px 0px 1px inset; aspect:1 / 1
            - `div.svg.w-embed` — 85.6×85.6 @1106,427 | 991: 84×84 @875,388 | 390: 37.3×37.3 @329,424 · display:flex; justify:center; align:center
              - `svg` — 85.6×85.6 @1106,427 | 991: 84×84 @875,388 | 390: 37.3×37.3 @329,424 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-wpumvq.svg`
          - `div.lens-integrations-logo` — 85.6×85.6 @1106,569 | 991: 84×84 @875,526 | 390: 37.3×37.3 @329,472 · display:flex; justify:center; align:center; bg:rgb(2, 3, 8); radius:20%; shadow:rgba(255, 255, 255, 0.16) 0px 0px 0px 1px inset; aspect:1 / 1
            - `div.svg.w-embed` — 85.6×85.6 @1106,569 | 991: 84×84 @875,526 | 390: 37.3×37.3 @329,472 · display:flex; justify:center; align:center
              - `svg` — 85.6×85.6 @1106,569 | 991: 84×84 @875,526 | 390: 37.3×37.3 @329,472 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-rfloe7.svg`
          - `div.lens-integrations-logo.is-bottom` — 85.6×85.6 @1106,710 | 991: 84×84 @875,665 | 390: 37.3×37.3 @329,520 · display:flex; justify:center; align:center; bg:rgb(2, 3, 8); radius:20%; shadow:rgba(255, 255, 255, 0.16) 0px 0px 0px 1px inset; aspect:1 / 1
            - `div.svg.w-embed` — 85.6×85.6 @1106,710 | 991: 84×84 @875,665 | 390: 37.3×37.3 @329,520 · display:flex; justify:center; align:center
              - `svg` — 85.6×85.6 @1106,710 | 991: 84×84 @875,665 | 390: 37.3×37.3 @329,520 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-1k1s7jn.svg`
  - `div.lens-integrations-tab` — 1600×850.7 @-80,771 | 991: 991×793 @0,749 | 390: 390×516.4 @0,533 · pos:relative; mar:-24px -80px 0px -80px; z:2 · Δ991{mar:0px} · Δ390{mar:-24px 0px 0px 0px} · data {"data-tabs-name":"integrations","data-tabs":""}
    - `div.lens-integrations-tab-panes` — 1600×984.7 @-80,771 | 991: 991×853.9 @0,749 | 390: 390×412.8 @0,533 · display:flex; dir:column; align:center; mar:0px 0px -192px 0px · Δ991{mar:0px 0px -118.906px 0px} · Δ390{mar:0px 0px -62.3906px 0px} · data {"data-tab-panes":""}
      - `div#integrations-panel-0.lens-integrations-tab-pane.is-active` — 1600×984.7 @-80,771 | 991: 1387.4×853.9 @-198,749 | 390: 670.8×412.8 @-140,533 · display:flex; aspect:1953 / 1202 · Δ991{mar:0px -198.188px} · Δ390{mar:0px -140.391px} · data {"data-tab-pane":""}
        - `div.lens-integrations-mockup-wrapper` — 1600×984.7 @-80,771 | 991: 1387.4×853.9 @-198,749 | 390: 670.8×412.8 @-140,533 · display:flex; dir:column; align:center
          - `div.lens-integrations-mockup` — 1600×984.7 @-80,771 | 991: 1387.4×853.9 @-198,749 | 390: 670.8×412.8 @-140,533 · display:grid; cols:1599.98px; rows:984.719px; align:flex-start; gap:16px; pos:relative; z:2 · Δ991{cols:1387.36px} · Δ390{cols:670.75px}
            - `img#w-node-b66b1171-cd72-69a6-64fc-e96e573ec946-e81726ce.lens-integrations-mockup-image` — 1600×984.7 @-80,771 | 991: 1387.4×853.9 @-198,749 | 390: 670.8×412.8 @-140,533 · gcol:1/2; grow:1/2; overflow:clip; fit:fill; aspect:1953 / 1202 · IMG `/assets/pages/lens-creative-analytics/68111d8e2cd08ba43e25c8f2_Creative Tests - Mockup - 2.avif` natural 3250×2000 loading=eager alt "ad creative test dashboard"
      - `div#integrations-panel-1.lens-integrations-tab-pane` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: img 68111efbb122dcabfed9eb77_Influencer Comparison - Mockup - 2.avif
      - `div#integrations-panel-2.lens-integrations-tab-pane` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: img 68111efb4aca9a2da3e5b251_Trend Analysis - Mockup - 2.avif
    - `div.lens-integrations-people` — 1600×850.7 @-80,771 | 991: 991×793 @0,749 | 390: 390×516.4 @0,533 · display:flex; dir:column; align:center; pos:absolute [0px 0px 0px 0px]; z:5
      - `img.lens-integrations-people-image` — 1600×984.7 @-80,771 | 991: 1288.4×793 @-149,749 | 390: hidden · maxw:1993px; overflow:clip; z:5; fit:fill; aspect:1953 / 1202 · Δ390{display:none} · IMG `/assets/pages/lens-creative-analytics/67c6cef61d31b32e3dde9251_8e7cb2680b3833f83c61a14e695bfc7e_lens-people.webp` natural 1440×886 loading=eager alt "People viewing desktop device"
    - `div.lens-integrations-tab-links` — 1080×58 @180,1564 | 991: 991×58 @0,1484 | 390: 390×166 @0,883 · display:flex; justify:center; align:center; gap:4px; pos:relative; pad:8px; mar:0px 260px; maxw:1080px; z:10 · Δ991{gap:12px; pad:8px 32px; mar:0px; maxw:991px} · Δ390{dir:column; align:stretch; gap:12px; pad:8px 24px; mar:0px; maxw:390px} · data {"data-tab-links":""}
      - `div#integrations-tab-0.lens-integrations-tab-link.is-active` — 238.3×40 @404,1573 | 991: 238.3×40 @171,1493 | 390: 342×42 @24,891 · display:flex; justify:center; align:center; gap:5px; pad:8px 12px; bg:rgba(255, 255, 255, 0.1); radius:10px; backdrop:blur(4px); transition:0.5s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-tab-link":""}
        - `div.icon-medium` — 24×24 @416,1581 | 991: 24×24 @183,1501 | 390: 24×24 @98,900 · display:flex; justify:center; align:center
          - `svg` — 20×20 @418,1583 | 991: 20×20 @185,1503 | 390: 20×20 @100,902 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-icon-20-yy4sag.svg`
        - `div.text-label-l` — 185.3×24 @445,1581 | 991: 185.3×24 @212,1501 | 390: 164.7×24 @127,900 · font:Inter 18px/24px w500 ls-0.259999px; color:rgb(255, 255, 255); align-text:center · Δ390{font:16px/24px; ls:-0.23111px} "Creative Test Analysis"
      - `div#integrations-tab-1.lens-integrations-tab-link` — 212.3×42 @646,1572 | 991: 212.3×42 @421,1492 | 390: 342×42 @24,945 · display:flex; justify:center; align:center; gap:5px; pad:8px 12px; border:1px solid rgb(23, 25, 32); radius:10px; backdrop:blur(2px); transition:0.5s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-tab-link":""}
        - `div.icon-medium` — 24×24 @659,1581 | 991: 24×24 @434,1501 | 390: 24×24 @111,954 · display:flex; justify:center; align:center
          - `svg` — 20×20 @661,1583 | 991: 20×20 @436,1503 | 390: 20×20 @113,956 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-icon-20-1m46g5i.svg`
        - `div.text-label-l` — 157.3×24 @688,1581 | 991: 157.3×24 @463,1501 | 390: 139.8×24 @140,954 · font:Inter 18px/24px w500 ls-0.259999px; color:rgba(255, 255, 255, 0.56); align-text:center · Δ390{font:16px/24px; ls:-0.23111px} "Group Comparison"
      - `div#integrations-tab-2.lens-integrations-tab-link` — 174×42 @862,1572 | 991: 174×42 @646,1492 | 390: 342×42 @24,999 · display:flex; justify:center; align:center; gap:5px; pad:8px 12px; border:1px solid rgb(23, 25, 32); radius:10px; backdrop:blur(2px); transition:0.5s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-tab-link":""}
        - `div.svg.w-embed` — 20×20 @875,1583 | 991: 20×20 @659,1503 | 390: 20×20 @128,1010 · display:flex; justify:center; align:center
          - `svg` — 20×20 @875,1583 | 991: 20×20 @659,1503 | 390: 20×20 @128,1010 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-1uan6ha.svg`
        - `div.text-label-l` — 123×24 @900,1581 | 991: 123×24 @684,1501 | 390: 109.4×24 @153,1008 · font:Inter 18px/24px w500 ls-0.259999px; color:rgba(255, 255, 255, 0.56); align-text:center · Δ390{font:16px/24px; ls:-0.23111px} "Trend Analysis"

### S4. `section.section`

y/height: 1440 4931/2078.2 · 991 5109/1716 · 390 4721/2288.8

- `div.section-padding` — 1440×2078.2 @0,0 | 991: 991×1716 @0,0 | 390: 390×2288.8 @0,0 · pad:8px
  - `div.section-white-block` — 1424×2062.2 @8,8 | 991: 975×1700 @8,8 | 390: 374×2272.8 @8,8 · pos:relative; bg:rgb(255, 255, 255); radius:36px; overflow:hidden; z:2 · Δ390{radius:16px}
    - `div.lens-gamification` — 1424×1610.2 @8,8 | 991: 975×1300 @8,8 | 390: 374×1920.8 @8,8 · display:flex; dir:column; gap:180px; pad:108px 0px · Δ390{gap:96px; pad:80px 0px 32px 0px}
      - `div.container.section-container` — 1344×203.5 @48,116 | 991: 975×200 @8,116 | 390: 374×268 @8,88 · pad:0px 40px; mar:0px 40px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
        - `div.section-head` — 720×203.5 @360,116 | 991: 720×200 @136,116 | 390: 326×268 @32,88 · display:flex; dir:column; align:center; gap:12px; mar:0px 272px; maxw:720px · Δ991{mar:0px 95.5px} · Δ390{mar:0px}
          - `div.section-head-wrapper` — 720×203.5 @360,116 | 991: 720×200 @136,116 | 390: 326×268 @32,88 · display:flex; dir:column; align:center; gap:12px
            - `div.text-overline.text-solid-400` — 203.8×16 @618,116 | 991: 203.8×16 @394,116 | 390: 203.8×16 @93,88 · font:Inter 12px/16px w550 ls2px; color:rgb(76, 80, 95); align-text:center; tt:uppercase "CONTEXTUAL AD REPORTS"
            - `h2.text-display-h2` — 720×107.5 @360,144 | 991: 720×104 @136,144 | 390: 326×144 @32,116 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(23, 25, 32); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Performance storytelling beyond a pretty picture" (2 lines)
            - `div.section-head_paragraph` — 512×56 @464,264 | 991: 512×56 @240,260 | 390: 326×84 @32,272 · maxw:512px
              - `p.text-body-l` — 512×56 @464,264 | 991: 512×56 @240,260 | 390: 326×84 @32,272 · font:Inter 18px/28px w400 ls-0.259999px; color:rgb(36, 38, 46); align-text:center; wrap-text:pretty ‹copy: ~104 chars, 2 lines @1440›
      - `div.container.section-container` — 1344×443.8 @48,500 | 991: 975×240 @8,496 | 390: 374×666.3 @8,452 · pad:0px 40px; mar:0px 40px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
        - `div.left-right-section` — 1264×443.8 @88,500 | 991: 911×240 @40,496 | 390: 326×666.3 @32,452 · display:flex; align:center; gap:24px · Δ991{gap:40px} · Δ390{dir:column; align:start; gap:40px}
          - `div#w-node-d0caf72c-01c3-653f-dc64-a8155c8f2333-5c8f2324.left-right-section-image-wrapper` — 621×443.8 @88,500 | 991: 252×174.3 @40,529 | 390: 326×258.3 @32,452 · pad:0px 16px; flex:1 1 0% · Δ390{pad:0px}
            - `img.left-right-section-image` — 560×443.8 @104,500 | 991: 220×174.3 @56,529 | 390: 326×258.3 @32,452 · maxw:100%; radius:20px; overflow:clip; fit:fill · Δ390{radius:10px} · IMG `/assets/pages/lens-creative-analytics/67eeea66467dd9874bef129c_game-illo1.webp` natural 560×443 loading=lazy alt "Winning ads illustration, Gamification by Lens"
          - `div#w-node-d0caf72c-01c3-653f-dc64-a8155c8f2325-5c8f2324.left-right-section-content` — 619×240 @733,602 | 991: 619×240 @332,496 | 390: 326×368 @32,751 · display:flex; dir:column; justify:center; align:flex-start; gap:32px · Δ390{gap:24px}
            - `div.section-head.is-align-left` — 619×168 @733,602 | 991: 619×168 @332,496 | 390: 326×304 @32,751 · display:flex; dir:column; align:flex-start; gap:12px; maxw:720px · Δ390{gap:8px}
              - `div.text-overline` — 111.8×16 @733,602 | 991: 111.8×16 @332,496 | 390: 111.8×16 @32,751 · font:Inter 12px/16px w550 ls2px; color:rgb(52, 54, 66); tt:uppercase; wrap-text:pretty "GAMIFICATION"
              - `h3.text-display-h3` — 619×44 @733,630 | 991: 619×44 @332,524 | 390: 326×132 @32,775 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(9, 10, 14); wrap-text:balance "Gamify and incentivize team reporting."
              - `div.section-head_paragraph` — 512×84 @733,686 | 991: 512×84 @332,580 | 390: 326×140 @32,915 · maxw:512px
                - `p.text-body-l` — 512×84 @733,686 | 991: 512×84 @332,580 | 390: 326×140 @32,915 · font:Inter 18px/28px w400 ls-0.259999px; color:rgb(52, 54, 66); wrap-text:pretty ‹copy: ~159 chars, 3 lines @1440›
            - `a.button-light.button-stroke` — 159.3×40 @733,802 | 991: 159.3×40 @332,696 | 390: 159.3×40 @32,1079 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(255, 255, 255); radius:10px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px; z:5; transition:0.15s · href `https://app.foreplay.co/sign-up`
              - `div.button-text-block` — 123.3×24 @741,810 | 991: 123.3×24 @340,704 | 390: 123.3×24 @40,1087 · pos:relative; pad:0px 6px; z:2
                - `div.text-heading-m` — 111.3×24 @747,810 | 991: 111.3×24 @346,704 | 390: 111.3×24 @46,1087 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14) "Start Free Trial"
              - `div.button-icon-block.icon-right` — 24×24 @860,810 | 991: 24×24 @459,704 | 390: 24×24 @159,1087 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                - `div.icon-medium` — 24×24 @860,810 | 991: 24×24 @459,704 | 390: 24×24 @159,1087 · display:flex; justify:center; align:center
                  - `div.svg.w-embed` — 24×24 @860,810 | 991: 24×24 @459,704 | 390: 24×24 @159,1087 · display:flex; justify:center; align:center
                    - `svg` — 24×24 @860,810 | 991: 24×24 @459,704 | 390: 24×24 @159,1087 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-185ries.svg`
      - `div.container.section-container` — 1344×386.9 @48,1123 | 991: 975×284 @8,916 | 390: 374×682.5 @8,1215 · pad:0px 40px; mar:0px 40px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
        - `div.left-right-section` — 1264×386.9 @88,1123 | 991: 911×284 @40,916 | 390: 326×682.5 @32,1215 · display:flex; align:center; gap:24px · Δ991{gap:40px} · Δ390{dir:column; align:start; gap:40px}
          - `div#w-node-_4dbbc3dc-1ede-e22e-748c-94a4a0add573-a0add572.left-right-section-content` — 720×284 @88,1175 | 991: 720×284 @40,916 | 390: 326×384 @32,1513 · display:flex; dir:column; justify:center; align:flex-start; gap:32px · Δ390{gap:24px}
            - `div.section-head.is-align-left` — 720×212 @88,1175 | 991: 720×212 @40,916 | 390: 326×320 @32,1513 · display:flex; dir:column; align:flex-start; gap:12px; maxw:720px · Δ390{gap:8px}
              - `div.text-overline` — 105.2×16 @88,1175 | 991: 105.2×16 @40,916 | 390: 105.2×16 @32,1513 · font:Inter 12px/16px w550 ls2px; color:rgb(52, 54, 66); tt:uppercase; wrap-text:pretty "BENCHMARKS"
              - `h3.text-display-h3` — 720×88 @88,1203 | 991: 720×88 @40,944 | 390: 326×176 @32,1537 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(9, 10, 14); wrap-text:balance "Compare your analytics to over 20,000+ advertisers." (2 lines)
              - `div.section-head_paragraph` — 512×84 @88,1303 | 991: 512×84 @40,1044 | 390: 326×112 @32,1721 · maxw:512px
                - `p.text-body-l` — 512×84 @88,1303 | 991: 512×84 @40,1044 | 390: 326×112 @32,1721 · font:Inter 18px/28px w400 ls-0.259999px; color:rgb(52, 54, 66); wrap-text:pretty ‹copy: ~127 chars, 3 lines @1440›
            - `a.button-light.button-stroke` — 159.3×40 @88,1419 | 991: 159.3×40 @40,1160 | 390: 159.3×40 @32,1857 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(255, 255, 255); radius:10px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px; z:5; transition:0.15s · href `https://app.foreplay.co/sign-up`
              - `div.button-text-block` — 123.3×24 @96,1427 | 991: 123.3×24 @48,1168 | 390: 123.3×24 @40,1865 · pos:relative; pad:0px 6px; z:2
                - `div.text-heading-m` — 111.3×24 @102,1427 | 991: 111.3×24 @54,1168 | 390: 111.3×24 @46,1865 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14) "Start Free Trial"
              - `div.button-icon-block.icon-right` — 24×24 @215,1427 | 991: 24×24 @167,1168 | 390: 24×24 @159,1865 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                - `div.icon-medium` — 24×24 @215,1427 | 991: 24×24 @167,1168 | 390: 24×24 @159,1865 · display:flex; justify:center; align:center
                  - `div.svg.w-embed` — 24×24 @215,1427 | 991: 24×24 @167,1168 | 390: 24×24 @159,1865 · display:flex; justify:center; align:center
                    - `svg` — 24×24 @215,1427 | 991: 24×24 @167,1168 | 390: 24×24 @159,1865 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-185ries.svg`
          - `div#w-node-_4dbbc3dc-1ede-e22e-748c-94a4a0add584-a0add572.left-right-section-image-wrapper` — 520×386.9 @832,1123 | 991: 151×94.3 @800,1011 | 390: 326×258.5 @32,1215 · pad:0px 16px; flex:1 1 0% · Δ390{pad:0px}
            - `img.left-right-section-image` — 488×386.9 @848,1123 | 991: 119×94.3 @816,1011 | 390: 326×258.5 @32,1215 · maxw:100%; radius:20px; overflow:clip; fit:fill · Δ390{radius:10px} · IMG `/assets/pages/lens-creative-analytics/67eeea669886a4ee84fc6c9c_game-illo2.webp` natural 1440×1141 loading=lazy alt "Benchmarks Ad Reports illustration, Gamification by Lens"
    - `div.lens-benchmarking` — 1424×452 @8,1618 | 991: 975×400 @8,1308 | 390: 374×352 @8,1929 · display:flex; dir:column; gap:24px; pad:24px 0px 108px 0px; overflow:hidden · Δ991{pad:24px 0px 96px 0px} · Δ390{gap:20px; pad:48px 0px 64px 0px}
      - `div.self-center` — 288.9×16 @576,1642 | 991: 288.9×16 @351,1332 | 390: 288.9×16 @51,1977 · aself:center
        - `div#carousel-heading.text-overline` — 288.9×16 @576,1642 | 991: 288.9×16 @351,1332 | 390: 288.9×16 @51,1977 · font:Inter 12px/16px w550 ls2px; color:rgb(9, 10, 14); tt:uppercase "OVER 100 BENCHMARKING SEGMENTS"
      - `div.lens-benchmarking-dynamic-grid` — 1424×200 @8,1682 | 991: 975×160 @8,1372 | 390: 374×144 @8,2013
        - `ul.carousel-ul` — 17684×200 @-415,1682 | 991: 14684×160 @-350,1372 | 390: 13184×144 @-351,2013 · display:flex; justify:center; align:center; gap:16px; pos:relative; mar:0px -16260px 0px 0px; transform:matrix(1, 0, 0, 1, -423, 0) · Δ991{mar:0px -13709px 0px 0px; transform:matrix(1, 0, 0, 1, -357.75, 0)} · Δ390{mar:0px -12810px 0px 0px; transform:matrix(1, 0, 0, 1, -359.25, 0)} · data {"data-gap":"16","data-speed":"0.75"}
          - `li.carousel-li` — 220×200 @-415,1682 | 991: 180×160 @-350,1372 | 390: 160×144 @-351,2013 · display:list-item; flex:0 0 auto
            - `div.lens-benchmarking-segment_card` — 220×200 @-415,1682 | 991: 180×160 @-350,1372 | 390: 160×144 @-351,2013 · pos:relative; radius:12px; overflow:hidden
              - `img.img-full` — 220×200 @-415,1682 | 991: 180×160 @-350,1372 | 390: 160×144 @-351,2013 · maxw:100%; overflow:clip; fit:cover · IMG `/assets/pages/lens-creative-analytics/67d601396d4c7e747e89fdf3_segment-health.webp` natural 440×400 loading=lazy
              - `div.lens-benchmarking-segment-layout` — 220×80 @-415,1802 | 991: 180×80 @-350,1452 | 390: 160×80 @-351,2077 · display:flex; align:flex-end; pos:absolute [120px 0px 0px 0px]; pad:16px; bgimg:linear-gradient(rgba(2, 3, 8, 0), rgba(2, 3, 8, 0.8)); bgsize:auto; bgpos:0% 0%
                - `div.text-label-m` — 49×24 @-399,1842 | 991: 49×24 @-334,1492 | 390: 49×24 @-335,2117 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Health"
          - `li.carousel-li` — 220×200 @-179,1682 | 991: 180×160 @-154,1372 | 390: 160×144 @-175,2013 · display:list-item; flex:0 0 auto
            - `div.lens-benchmarking-segment_card` — 220×200 @-179,1682 | 991: 180×160 @-154,1372 | 390: 160×144 @-175,2013 · pos:relative; radius:12px; overflow:hidden
              - `img.img-full` — 220×200 @-179,1682 | 991: 180×160 @-154,1372 | 390: 160×144 @-175,2013 · maxw:100%; overflow:clip; fit:cover · IMG `/assets/pages/lens-creative-analytics/67d60139a79f0c901c5db349_segment-home-&-garden.webp` natural 440×400 loading=lazy
              - `div.lens-benchmarking-segment-layout` — 220×80 @-179,1802 | 991: 180×80 @-154,1452 | 390: 160×80 @-175,2077 · display:flex; align:flex-end; pos:absolute [120px 0px 0px 0px]; pad:16px; bgimg:linear-gradient(rgba(2, 3, 8, 0), rgba(2, 3, 8, 0.8)); bgsize:auto; bgpos:0% 0%
                - `div.text-label-m` — 117.5×24 @-163,1842 | 991: 117.5×24 @-138,1492 | 390: 117.5×24 @-159,2117 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Home & Garden"
          - …73 more `li.carousel-li` siblings with the same structure (75 total):
            - [3] 220×200 @57,1682 — img 67d60138d1a411f5bd2fa9a8_segment-pets.webp, "Pets"
            - [4] 220×200 @293,1682 — img 67d60138748485a56d5812b5_segment-accessories.webp, "Accessories"
            - [5] 220×200 @529,1682 — img 67d60138178881123c43aaac_segment-fashion.webp, "Fashion"
            - [6] 220×200 @765,1682 — img 67d601396d4c7e747e89fe11_segment-sporting-goods.webp, "Sporting Goods"
            - [7] 220×200 @1001,1682 — img 67d601396d4c7e747e89fdec_segment-food-&-beverage.webp, "Food & Beverages"
            - [8] 220×200 @1237,1682 — img 67d60138c432e9224ddd91c3_segment-beauty.webp, "Beauty"
            - [9] 220×200 @1473,1682 — img 67d60139e9d19b9bec6f9da3_segment-toys-&-hobbies.webp, "Toys & Hobbies"
            - [10] 220×200 @1709,1682 — img 67d60138e9944951698b6c9a_segment-baby.webp, "Baby"
            - [11] 220×200 @1945,1682 — img 67d60139c5c4b283a4e32e32_segment-automotive.webp, "Automative"
            - [12] 220×200 @2181,1682 — img 67d6013837ff54b81dc90b9b_segment-electronics.webp, "Electronics"
            - [13] 220×200 @2417,1682 — img 67d6013895de9f5015615e0f_segment-clothing.webp, "Clothing"
            - [14] 220×200 @2653,1682 — img 67d60138e9944951698b6c80_segment-books.webp, "Books"
            - [15] 220×200 @2889,1682 — img 67d60138b8bfe229f1ca038b_segment-art.webp, "Art"
            - [16] 220×200 @3125,1682 — img 67d601396d4c7e747e89fdf3_segment-health.webp, "Health"
            - [17] 220×200 @3361,1682 — img 67d60139a79f0c901c5db349_segment-home-&-garden.webp, "Home & Garden"
            - [18] 220×200 @3597,1682 — img 67d60138d1a411f5bd2fa9a8_segment-pets.webp, "Pets"
            - [19] 220×200 @3833,1682 — img 67d60138748485a56d5812b5_segment-accessories.webp, "Accessories"
            - [20] 220×200 @4069,1682 — img 67d60138178881123c43aaac_segment-fashion.webp, "Fashion"
            - [21] 220×200 @4305,1682 — img 67d601396d4c7e747e89fe11_segment-sporting-goods.webp, "Sporting Goods"
            - [22] 220×200 @4541,1682 — img 67d601396d4c7e747e89fdec_segment-food-&-beverage.webp, "Food & Beverages"
            - [23] 220×200 @4777,1682 — img 67d60138c432e9224ddd91c3_segment-beauty.webp, "Beauty"
            - [24] 220×200 @5013,1682 — img 67d60139e9d19b9bec6f9da3_segment-toys-&-hobbies.webp, "Toys & Hobbies"
            - [25] 220×200 @5249,1682 — img 67d60138e9944951698b6c9a_segment-baby.webp, "Baby"
            - [26] 220×200 @5485,1682 — img 67d60139c5c4b283a4e32e32_segment-automotive.webp, "Automative"
            - [27] 220×200 @5721,1682 — img 67d6013837ff54b81dc90b9b_segment-electronics.webp, "Electronics"
            - [28] 220×200 @5957,1682 — img 67d6013895de9f5015615e0f_segment-clothing.webp, "Clothing"
            - [29] 220×200 @6193,1682 — img 67d60138e9944951698b6c80_segment-books.webp, "Books"
            - [30] 220×200 @6429,1682 — img 67d60138b8bfe229f1ca038b_segment-art.webp, "Art"
            - [31] 220×200 @6665,1682 — img 67d60138b8bfe229f1ca038b_segment-art.webp, "Art"
            - [32] 220×200 @6901,1682 — img 67d60138e9944951698b6c80_segment-books.webp, "Books"
            - [33] 220×200 @7137,1682 — img 67d6013895de9f5015615e0f_segment-clothing.webp, "Clothing"
            - [34] 220×200 @7373,1682 — img 67d6013837ff54b81dc90b9b_segment-electronics.webp, "Electronics"
            - [35] 220×200 @7609,1682 — img 67d60139c5c4b283a4e32e32_segment-automotive.webp, "Automative"
            - [36] 220×200 @7845,1682 — img 67d60138e9944951698b6c9a_segment-baby.webp, "Baby"
            - [37] 220×200 @8081,1682 — img 67d60139e9d19b9bec6f9da3_segment-toys-&-hobbies.webp, "Toys & Hobbies"
            - [38] 220×200 @8317,1682 — img 67d60138c432e9224ddd91c3_segment-beauty.webp, "Beauty"
            - [39] 220×200 @8553,1682 — img 67d601396d4c7e747e89fdec_segment-food-&-beverage.webp, "Food & Beverages"
            - [40] 220×200 @8789,1682 — img 67d601396d4c7e747e89fe11_segment-sporting-goods.webp, "Sporting Goods"
            - [41] 220×200 @9025,1682 — img 67d60138178881123c43aaac_segment-fashion.webp, "Fashion"
            - [42] 220×200 @9261,1682 — img 67d60138748485a56d5812b5_segment-accessories.webp, "Accessories"
            - [43] 220×200 @9497,1682 — img 67d60138d1a411f5bd2fa9a8_segment-pets.webp, "Pets"
            - [44] 220×200 @9733,1682 — img 67d60139a79f0c901c5db349_segment-home-&-garden.webp, "Home & Garden"
            - [45] 220×200 @9969,1682 — img 67d601396d4c7e747e89fdf3_segment-health.webp, "Health"
            - [46] 220×200 @10205,1682 — img 67d60138b8bfe229f1ca038b_segment-art.webp, "Art"
            - [47] 220×200 @10441,1682 — img 67d60138e9944951698b6c80_segment-books.webp, "Books"
            - [48] 220×200 @10677,1682 — img 67d6013895de9f5015615e0f_segment-clothing.webp, "Clothing"
            - [49] 220×200 @10913,1682 — img 67d6013837ff54b81dc90b9b_segment-electronics.webp, "Electronics"
            - [50] 220×200 @11149,1682 — img 67d60139c5c4b283a4e32e32_segment-automotive.webp, "Automative"
            - [51] 220×200 @11385,1682 — img 67d60138e9944951698b6c9a_segment-baby.webp, "Baby"
            - [52] 220×200 @11621,1682 — img 67d60139e9d19b9bec6f9da3_segment-toys-&-hobbies.webp, "Toys & Hobbies"
            - [53] 220×200 @11857,1682 — img 67d60138c432e9224ddd91c3_segment-beauty.webp, "Beauty"
            - [54] 220×200 @12093,1682 — img 67d601396d4c7e747e89fdec_segment-food-&-beverage.webp, "Food & Beverages"
            - [55] 220×200 @12329,1682 — img 67d601396d4c7e747e89fe11_segment-sporting-goods.webp, "Sporting Goods"
            - [56] 220×200 @12565,1682 — img 67d60138178881123c43aaac_segment-fashion.webp, "Fashion"
            - [57] 220×200 @12801,1682 — img 67d60138748485a56d5812b5_segment-accessories.webp, "Accessories"
            - [58] 220×200 @13037,1682 — img 67d60138d1a411f5bd2fa9a8_segment-pets.webp, "Pets"
            - [59] 220×200 @13273,1682 — img 67d60139a79f0c901c5db349_segment-home-&-garden.webp, "Home & Garden"
            - [60] 220×200 @13509,1682 — img 67d601396d4c7e747e89fdf3_segment-health.webp, "Health"
            - [61] 220×200 @13745,1682 — img 67d60138b8bfe229f1ca038b_segment-art.webp, "Art"
            - [62] 220×200 @13981,1682 — img 67d60138e9944951698b6c80_segment-books.webp, "Books"
            - [63] 220×200 @14217,1682 — img 67d6013895de9f5015615e0f_segment-clothing.webp, "Clothing"
            - [64] 220×200 @14453,1682 — img 67d6013837ff54b81dc90b9b_segment-electronics.webp, "Electronics"
            - [65] 220×200 @14689,1682 — img 67d60139c5c4b283a4e32e32_segment-automotive.webp, "Automative"
            - [66] 220×200 @14925,1682 — img 67d60138e9944951698b6c9a_segment-baby.webp, "Baby"
            - [67] 220×200 @15161,1682 — img 67d60139e9d19b9bec6f9da3_segment-toys-&-hobbies.webp, "Toys & Hobbies"
            - [68] 220×200 @15397,1682 — img 67d60138c432e9224ddd91c3_segment-beauty.webp, "Beauty"
            - [69] 220×200 @15633,1682 — img 67d601396d4c7e747e89fdec_segment-food-&-beverage.webp, "Food & Beverages"
            - [70] 220×200 @15869,1682 — img 67d601396d4c7e747e89fe11_segment-sporting-goods.webp, "Sporting Goods"
            - [71] 220×200 @16105,1682 — img 67d60138178881123c43aaac_segment-fashion.webp, "Fashion"
            - [72] 220×200 @16341,1682 — img 67d60138748485a56d5812b5_segment-accessories.webp, "Accessories"
            - [73] 220×200 @16577,1682 — img 67d60138d1a411f5bd2fa9a8_segment-pets.webp, "Pets"
            - [74] 220×200 @16813,1682 — img 67d60139a79f0c901c5db349_segment-home-&-garden.webp, "Home & Garden"
            - [75] 220×200 @17049,1682 — img 67d601396d4c7e747e89fdf3_segment-health.webp, "Health"
      - `ul.carousel-ul.rtl` — 1424×56 @8,1906 | 991: 964×56 @14,1556 | 390: 4384×40 @-1762,2177 · display:flex; justify:center; align:center; gap:16px · Δ991{mar:0px 5.5px} · Δ390{pos:relative; transform:matrix(1, 0, 0, 1, 234.5, 0)} · data {"data-gap":"16","data-speed":".5"}
        - `li.carousel-li` — 220×56 @138,1906 | 991: 180×56 @14,1556 | 390: 160×40 @-1762,2177 · display:list-item; flex:0 0 auto
          - `div.lens-benchmarking-segment_badge` — 220×56 @138,1906 | 991: 180×56 @14,1556 | 390: 160×40 @-1762,2177 · display:flex; align:center; gap:16px; pad:16px; radius:12px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px inset · Δ991{gap:8px} · Δ390{gap:8px; pad:8px 8px 8px 12px}
            - `div.flex-1` — 123×24 @154,1922 | 991: 91×24 @30,1572 | 390: 87.6×24 @-1750,2185 · flex:1 1 0%
              - `div.text-label-m.mobile-landscape-text-label-s` — 123×24 @154,1922 | 991: 91×24 @30,1572 | 390: 87.6×24 @-1750,2185 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(9, 10, 14) · Δ390{font:14px/24px; ls:-0.1575px} "> $1m"
            - `div.lens-benchmarking-segment_label` — 49×24 @293,1922 | 991: 49×24 @128,1572 | 390: 44.4×24 @-1655,2185 · pad:0px 6px; bg:rgb(240, 247, 255); radius:4px
              - `div.text-label-m.mobile-landscape-text-label-s` — 37×24 @299,1922 | 991: 37×24 @134,1572 | 390: 32.4×24 @-1649,2185 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(7, 36, 126) · Δ390{font:14px/24px; ls:-0.1575px} "GMV"
        - `li.carousel-li` — 220×56 @374,1906 | 991: 180×56 @210,1556 | 390: 160×40 @-1586,2177 · display:list-item; flex:0 0 auto
          - `div.lens-benchmarking-segment_badge` — 220×56 @374,1906 | 991: 180×56 @210,1556 | 390: 160×40 @-1586,2177 · display:flex; align:center; gap:16px; pad:16px; radius:12px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px inset · Δ991{gap:8px} · Δ390{gap:8px; pad:8px 8px 8px 12px}
            - `div.flex-1` — 127×24 @390,1922 | 991: 95×24 @226,1572 | 390: 91.1×24 @-1574,2185 · flex:1 1 0%
              - `div.text-label-m.mobile-landscape-text-label-s` — 127×24 @390,1922 | 991: 95×24 @226,1572 | 390: 91.1×24 @-1574,2185 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(9, 10, 14) · Δ390{font:14px/24px; ls:-0.1575px} "<$100"
            - `div.lens-benchmarking-segment_label.is-green` — 45×24 @533,1922 | 991: 45×24 @328,1572 | 390: 40.9×24 @-1475,2185 · pad:0px 6px; bg:rgb(239, 254, 250); radius:4px
              - `div.text-label-m.mobile-landscape-text-label-s` — 33×24 @539,1922 | 991: 33×24 @334,1572 | 390: 28.9×24 @-1469,2185 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(24, 78, 68) · Δ390{font:14px/24px; ls:-0.1575px} "AOV"
        - …3 more `li.carousel-li` siblings with the same structure (5 total):
          - [3] 220×56 @610,1906 — "$1m - $10m", "GMV"
          - [4] 220×56 @846,1906 — ">$100", "AOV"
          - [5] 220×56 @1082,1906 — "> $10m", "GMV"

### S5. `section.section`

y/height: 1440 7009/1786 · 991 6825/2495.6 · 390 7010/2303.8

- `div.lens-enrichment_security` — 1440×1786 @0,0 | 991: 991×2495.6 @0,0 | 390: 390×2303.8 @0,0 · display:flex; dir:column; gap:108px; pad:108px 0px; overflow:hidden · Δ991{gap:40px} · Δ390{gap:40px; pad:80px 0px}
  - `div.lens-enrichment` — 1440×848 @0,108 | 991: 991×783.6 @0,108 | 390: 390×580.8 @0,80 · display:flex; dir:column; gap:128px; overflow:clip visible · Δ991{pad:0px 0px 40px 0px} · Δ390{gap:80px; pad:0px 0px 40px 0px}
    - `div.container` — 1440×200 @0,108 | 991: 991×200 @0,108 | 390: 390×268 @0,80 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
      - `div.section-head` — 720×200 @360,108 | 991: 720×200 @136,108 | 390: 342×268 @24,80 · display:flex; dir:column; align:center; gap:12px; mar:0px 320px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
        - `div.section-head-wrapper` — 720×200 @360,108 | 991: 720×200 @136,108 | 390: 342×268 @24,80 · display:flex; dir:column; align:center; gap:12px
          - `div.text-overline.text-white-68` — 102.1×16 @669,108 | 991: 102.1×16 @444,108 | 390: 102.1×16 @144,80 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "AI METADATA"
          - `h2.text-display-h3` — 720×88 @360,136 | 991: 720×88 @136,136 | 390: 342×132 @24,108 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance "Trade manual work for automated enrichment." (2 lines)
          - `div.section-head_paragraph` — 512×72 @464,236 | 991: 512×72 @240,236 | 390: 342×96 @24,252 · maxw:512px
            - `p.text-body-m` — 512×72 @464,236 | 991: 512×72 @240,236 | 390: 342×96 @24,252 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~143 chars, 3 lines @1440›
    - `figure.lens-enrichment-illustration` — 1440×520 @0,436 | 991: 1151×415.6 @-80,436 | 390: 534×192.8 @-72,428 · display:grid; cols:1440px; rows:520px; gap:16px; pos:relative; maxw:1440px; aspect:1440 / 520 · Δ991{cols:1151px; mar:0px -80px; maxw:none} · Δ390{cols:534px; mar:0px -72px; maxw:none}
      - `div.lens-enrichment-illustration-intersection` — 1440×520 @0,436 | 991: 1151×415.6 @-80,436 | 390: 534×192.8 @-72,428 · display:flex; dir:column; justify:center; align:center; pos:absolute [0px 0px 0px 0px]; z:3; aspect:1 / 1; pe:none
        - `div.lens-enrichment-illustration-oval_shape` — 504.4×516.4 @468,438 | 991: 403.2×412.7 @294,437 | 390: 187×191.5 @101,429 · pos:relative; transform:matrix(0.97, 0, 0, 0.993, 0, 0); filter:saturate(1.24); z:5; aspect:1 / 1; pe:none
          - `div.svg.w-embed` — 504.4×516.4 @468,438 | 991: 403.2×412.7 @294,437 | 390: 187×191.5 @101,429 · display:flex; justify:center; align:center; pe:none
            - `svg` — 504.4×516.4 @468,438 | 991: 403.2×412.7 @294,437 | 390: 187×191.5 @101,429 · overflow:hidden; pe:none · SVG `/assets/pages/lens-creative-analytics/svg-svg-qwky2l.svg`
      - `div#w-node-b73c368c-7661-1661-cfed-8a378f740839-e81726ce.code-style.lens-enrichment-illustration-ray-2` — 848×520 @0,436 | 991: 677.8×415.6 @-80,436 | 390: 314.5×192.8 @-72,428 · display:flex; pos:relative; gcol:1/2; grow:1/2; bgimg:linear-gradient(270deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0)); bgsize:auto; bgpos:0% 0%; border:1px solid rgba(255, 255, 255, 0.06); radius:0px 999px 999px 0px; z:3
        - `div.lens-enrichment-illustration-fader` — 72×522 @-1,435 | 991: 72×417.6 @-81,435 | 390: 72×194.8 @-73,427 · pos:relative; mar:-2px; bgimg:linear-gradient(90deg, rgb(2, 3, 8), rgba(2, 3, 8, 0)); bgsize:auto; bgpos:0% 0%; z:2
        - `div.lens-enrichment-tooltip_layer` — 846×518 @1,437 | 991: 675.8×413.6 @-126,437 | 390: 312.5×194.6 @-90,425 · pos:absolute [0px 0px 0px 0px]
          - `div.lens-integrations-tooltip-container.is-2` — 136.5×44 @356,520 | 991: 136.5×44 @197,503 | 390: 84.2×34 @56,449 · pos:absolute [82.875px 286.469px 391.125px 423px]; transform:matrix(1, 0, 0, 1, -68.2656, 0) · Δ390{transform:matrix(1, 0, 0, 1, -42.0938, 0)}
            - `div.lens-enrichment-tooltip` — 136.5×44 @356,520 | 991: 136.5×44 @197,503 | 390: 84.2×34 @56,449 · display:flex; dir:column; pos:relative; z:4
              - `div.lens-enrichment-tooltip-wrapper` — 276×204 @286,316 | 991: 276×204 @128,299 | 390: hidden · pos:absolute [-204px -207.734px 44px 68.2656px]; transform:matrix(1, 0, 0, 1, -138, 0); vis:hidden · Δ390{display:none; transform:none}
                - `div.lens-enrichment-tooltip-body` — 220.8×144 @314,358 | 991: 220.8×144 @155,341 | 390: hidden · display:flex; dir:column; gap:4px; pad:4px; mar:0px 0px 24px 0px; bg:rgb(36, 38, 46); radius:16px; opacity:0; transform:matrix(0.8, 0, 0, 0.8, 0, 24); transition:0.3s cubic-bezier(0.33, 1, 0.68, 1); vis:hidden · Δ390{transform:none}
                  - `div.div-block-327` — 214.4×83.2 @317,361 | 991: 214.4×83.2 @158,344 | 390: hidden · display:flex; justify:center; align:center; flex:1 1 0%; bg:rgba(0, 0, 0, 0.2); radius:12px; overflow:hidden; vis:hidden
                    - `img.lens-enrichment-tooltip-image` — 214.4×83.2 @317,361 | 991: 214.4×83.2 @158,344 | 390: hidden · maxw:100%; overflow:clip; fit:contain; vis:hidden · IMG `/assets/pages/lens-creative-analytics/67d5f04eed5716afa723bf49_tooltip-2.webp` natural 552×208 loading=lazy
                  - `div.div-block-328` — 214.4×51.2 @317,448 | 991: 214.4×51.2 @158,431 | 390: hidden · display:flex; justify:center; align:center; pad:12px 16px; vis:hidden
                    - `div.text-alpha-50` — 188.8×32 @330,457 | 991: 188.8×32 @171,440 | 390: hidden · vis:hidden
                      - `div.text-body-s` — 188.8×32 @330,457 | 991: 188.8×32 @171,440 | 390: hidden · vis:hidden; font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.84); align-text:center ‹copy: ~65 chars, 2 lines @1440›
              - `div.lens-enrichment-tooltip-trigger` — 136.5×44 @356,520 | 991: 136.5×44 @197,503 | 390: 84.2×34 @56,449 · display:flex; dir:column; align:center; gap:4px; pos:relative · Δ390{gap:0px}
                - `div.lens-enrichment-tooltip-dot_container` — 16×16 @416,520 | 991: 16×16 @258,503 | 390: 16×16 @90,449 · display:grid; cols:16px; rows:16px; jitems:center; align:center; acontent:center; gap:16px
                  - `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e29-50731e1e.lens-enrichment-tooltip-ring` — 12.8×12.8 @418,522 | 991: 12.8×12.8 @259,505 | 390: 9.6×9.6 @93,452 · pos:relative; pad:1px; gcol:1/2; grow:1/2; bgimg:linear-gradient(rgb(231, 127, 110), rgb(255, 200, 82) 20%, rgb(210, 227, 130) 40%, rgb(124, 221, 181) 60%, rgb(93, 188, 229) 80%, rgb(93, 143, 229)); bgsize:auto; bgpos:0% 0%; radius:99px; opacity:0; transform:matrix(0.8, 0, 0, 0.8, 0, 0); z:1; transition:0.9s cubic-bezier(0.16, 1, 0.3, 1)
                    - `div.lens-enrichment-tooltip-ring_inner` — 11.2×11.2 @418,523 | 991: 11.2×11.2 @260,506 | 390: 8×8 @94,453 · bg:rgb(2, 3, 8); radius:999px
                  - `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e2b-50731e1e.lens-enrichment-tooltip-dot` — 8×8 @420,524 | 991: 8×8 @262,507 | 390: 6×6 @95,454 · pos:relative; gcol:1/2; grow:1/2; aself:center; jself:center; bg:rgb(255, 255, 255); radius:999px; z:2
                - `div.text-tooltip` — 136.5×24 @356,540 | 991: 136.5×24 @197,523 | 390: 84.2×18 @56,465 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) · Δ390{font:10px/18px} "Persona Targeting"
          - `div.lens-integrations-tooltip-container.is-1` — 142.1×44 @209,670 | 991: 142.1×44 @107,623 | 390: 87.6×34 @23,511 · pos:absolute [233.094px 424.734px 240.906px 279.172px]; transform:matrix(1, 0, 0, 1, -71.0469, 0) · Δ390{transform:matrix(1, 0, 0, 1, -43.7969, 0)}
            - `div.lens-enrichment-tooltip` — 142.1×44 @209,670 | 991: 142.1×44 @107,623 | 390: 87.6×34 @23,511 · display:flex; dir:column; pos:relative; z:4
              - `div.lens-enrichment-tooltip-wrapper` — 276×204 @142,466 | 991: 276×204 @40,419 | 390: hidden · pos:absolute [-204px -204.953px 44px 71.0469px]; transform:matrix(1, 0, 0, 1, -138, 0); vis:hidden · Δ390{display:none; transform:none}
                - `div.lens-enrichment-tooltip-body` — 220.8×144 @170,508 | 991: 220.8×144 @67,461 | 390: hidden · display:flex; dir:column; gap:4px; pad:4px; mar:0px 0px 24px 0px; bg:rgb(36, 38, 46); radius:16px; opacity:0; transform:matrix(0.8, 0, 0, 0.8, 0, 24); transition:0.3s cubic-bezier(0.33, 1, 0.68, 1); vis:hidden · Δ390{transform:none}
                  - `div.div-block-327` — 214.4×83.2 @173,512 | 991: 214.4×83.2 @71,464 | 390: hidden · display:flex; justify:center; align:center; flex:1 1 0%; bg:rgba(0, 0, 0, 0.2); radius:12px; overflow:hidden; vis:hidden
                    - `img.lens-enrichment-tooltip-image` — 214.4×83.2 @173,512 | 991: 214.4×83.2 @71,464 | 390: hidden · maxw:100%; overflow:clip; fit:contain; vis:hidden · IMG `/assets/pages/lens-creative-analytics/67d5f04e6bfc757685daf9fd_tooltip-1.webp` natural 552×208 loading=lazy
                  - `div.div-block-328` — 214.4×51.2 @173,598 | 991: 214.4×51.2 @71,551 | 390: hidden · display:flex; justify:center; align:center; pad:12px 16px; vis:hidden
                    - `div.text-alpha-50` — 188.8×32 @186,608 | 991: 188.8×32 @83,560 | 390: hidden · vis:hidden
                      - `div.text-body-s` — 188.8×32 @186,608 | 991: 188.8×32 @83,560 | 390: hidden · vis:hidden; font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.84); align-text:center "Automatically transcribe and identify top performing hooks." (2 lines)
              - `div.lens-enrichment-tooltip-trigger` — 142.1×44 @209,670 | 991: 142.1×44 @107,623 | 390: 87.6×34 @23,511 · display:flex; dir:column; align:center; gap:4px; pos:relative · Δ390{gap:0px}
                - `div.lens-enrichment-tooltip-dot_container` — 16×16 @272,670 | 991: 16×16 @170,623 | 390: 16×16 @58,511 · display:grid; cols:16px; rows:16px; jitems:center; align:center; acontent:center; gap:16px
                  - `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e29-50731e1e.lens-enrichment-tooltip-ring` — 12.8×12.8 @274,672 | 991: 12.8×12.8 @171,625 | 390: 9.6×9.6 @62,514 · pos:relative; pad:1px; gcol:1/2; grow:1/2; bgimg:linear-gradient(rgb(231, 127, 110), rgb(255, 200, 82) 20%, rgb(210, 227, 130) 40%, rgb(124, 221, 181) 60%, rgb(93, 188, 229) 80%, rgb(93, 143, 229)); bgsize:auto; bgpos:0% 0%; radius:99px; opacity:0; transform:matrix(0.8, 0, 0, 0.8, 0, 0); z:1; transition:0.9s cubic-bezier(0.16, 1, 0.3, 1)
                    - `div.lens-enrichment-tooltip-ring_inner` — 11.2×11.2 @275,673 | 991: 11.2×11.2 @172,625 | 390: 8×8 @62,515 · bg:rgb(2, 3, 8); radius:999px
                  - `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e2b-50731e1e.lens-enrichment-tooltip-dot` — 8×8 @276,674 | 991: 8×8 @174,627 | 390: 6×6 @63,516 · pos:relative; gcol:1/2; grow:1/2; aself:center; jself:center; bg:rgb(255, 255, 255); radius:999px; z:2
                - `div.text-tooltip` — 142.1×24 @209,690 | 991: 142.1×24 @107,643 | 390: 87.6×18 @23,527 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) · Δ390{font:10px/18px} "Hook Transcription"
          - `div.lens-integrations-tooltip-container.is-3` — 92.7×44 @378,831 | 991: 92.7×44 @219,751 | 390: 57.2×34 @69,573 · pos:absolute [393.672px 330.344px 80.3281px 423px]; transform:matrix(1, 0, 0, 1, -46.3281, 0) · Δ390{transform:matrix(1, 0, 0, 1, -28.6172, 0)}
            - `div.lens-enrichment-tooltip` — 92.7×44 @378,831 | 991: 92.7×44 @219,751 | 390: 57.2×34 @69,573 · display:flex; dir:column; pos:relative; z:4
              - `div.lens-enrichment-tooltip-wrapper` — 276×204 @286,627 | 991: 276×204 @128,547 | 390: hidden · pos:absolute [-204px -229.672px 44px 46.3281px]; transform:matrix(1, 0, 0, 1, -138, 0); vis:hidden · Δ390{display:none; transform:none}
                - `div.lens-enrichment-tooltip-body` — 220.8×144 @314,669 | 991: 220.8×144 @155,589 | 390: hidden · display:flex; dir:column; gap:4px; pad:4px; mar:0px 0px 24px 0px; bg:rgb(36, 38, 46); radius:16px; opacity:0; transform:matrix(0.8, 0, 0, 0.8, 0, 24); transition:0.3s cubic-bezier(0.33, 1, 0.68, 1); vis:hidden · Δ390{transform:none}
                  - `div.div-block-327` — 214.4×83.2 @317,672 | 991: 214.4×83.2 @158,592 | 390: hidden · display:flex; justify:center; align:center; flex:1 1 0%; bg:rgba(0, 0, 0, 0.2); radius:12px; overflow:hidden; vis:hidden
                    - `img.lens-enrichment-tooltip-image` — 214.4×83.2 @317,672 | 991: 214.4×83.2 @158,592 | 390: hidden · maxw:100%; overflow:clip; fit:contain; vis:hidden · IMG `/assets/pages/lens-creative-analytics/67d5f04fa76aa2b2af723a0e_tooltip-3.webp` natural 552×208 loading=lazy
                  - `div.div-block-328` — 214.4×51.2 @317,759 | 991: 214.4×51.2 @158,679 | 390: hidden · display:flex; justify:center; align:center; pad:12px 16px; vis:hidden
                    - `div.text-alpha-50` — 188.8×32 @330,768 | 991: 188.8×32 @171,688 | 390: hidden · vis:hidden
                      - `div.text-body-s` — 188.8×32 @330,768 | 991: 188.8×32 @171,688 | 390: hidden · vis:hidden; font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.84); align-text:center "See what themes and styles you should double down on." (2 lines)
              - `div.lens-enrichment-tooltip-trigger` — 92.7×44 @378,831 | 991: 92.7×44 @219,751 | 390: 57.2×34 @69,573 · display:flex; dir:column; align:center; gap:4px; pos:relative · Δ390{gap:0px}
                - `div.lens-enrichment-tooltip-dot_container` — 16×16 @416,831 | 991: 16×16 @258,751 | 390: 16×16 @90,573 · display:grid; cols:16px; rows:16px; jitems:center; align:center; acontent:center; gap:16px
                  - `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e29-50731e1e.lens-enrichment-tooltip-ring` — 12.8×12.8 @418,833 | 991: 12.8×12.8 @259,753 | 390: 9.6×9.6 @93,577 · pos:relative; pad:1px; gcol:1/2; grow:1/2; bgimg:linear-gradient(rgb(231, 127, 110), rgb(255, 200, 82) 20%, rgb(210, 227, 130) 40%, rgb(124, 221, 181) 60%, rgb(93, 188, 229) 80%, rgb(93, 143, 229)); bgsize:auto; bgpos:0% 0%; radius:99px; opacity:0; transform:matrix(0.8, 0, 0, 0.8, 0, 0); z:1; transition:0.9s cubic-bezier(0.16, 1, 0.3, 1)
                    - `div.lens-enrichment-tooltip-ring_inner` — 11.2×11.2 @418,833 | 991: 11.2×11.2 @260,754 | 390: 8×8 @94,577 · bg:rgb(2, 3, 8); radius:999px
                  - `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e2b-50731e1e.lens-enrichment-tooltip-dot` — 8×8 @420,835 | 991: 8×8 @262,755 | 390: 6×6 @95,578 · pos:relative; gcol:1/2; grow:1/2; aself:center; jself:center; bg:rgb(255, 255, 255); radius:999px; z:2
                - `div.text-tooltip` — 92.7×24 @378,851 | 991: 92.7×24 @219,771 | 390: 57.2×18 @69,589 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) · Δ390{font:10px/18px} "Top Themes"
      - `div#w-node-b73c368c-7661-1661-cfed-8a378f740847-e81726ce.lens-enrichment-illustration-ray-2.is-inverted` — 848×520 @592,436 | 991: 677.8×415.6 @393,436 | 390: 314.5×192.8 @148,428 · display:flex; pos:relative; gcol:1/2; grow:1/2; jself:end; bgimg:linear-gradient(270deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0)); bgsize:auto; bgpos:0% 0%; border:1px solid rgba(255, 255, 255, 0.06); radius:0px 999px 999px 0px; transform:matrix(-1, 0, 0, 1, 0, 0); z:3
        - `div.lens-enrichment-illustration-fader` — 72×522 @1369,435 | 991: 72×417.6 @1000,435 | 390: 72×194.8 @391,427 · pos:relative; mar:-2px; bgimg:linear-gradient(90deg, rgb(2, 3, 8), rgba(2, 3, 8, 0)); bgsize:auto; bgpos:0% 0%; z:2
        - `div.lens-enrichment-tooltip_layer.is-inverted.is-lens` — 846×518 @593,437 | 991: 675.8×413.6 @340,437 | 390: 312.5×190.8 @205,429 · pos:absolute [0px 0px 0px 0px]; transform:matrix(-1, 0, 0, 1, 0, 0)
          - `div.lens-integrations-tooltip-container.is-4` — 106.3×44 @1153,562 | 991: 106.3×44 @755,536 | 390: 65.6×34 @306,504 · pos:absolute [124.312px 126.891px 349.688px 612.781px]; transform:matrix(1, 0, 0, 1, -53.1641, 0) · Δ390{transform:matrix(1, 0, 0, 1, -32.7891, 0)}
            - `div.lens-enrichment-tooltip` — 106.3×44 @1153,562 | 991: 106.3×44 @755,536 | 390: 65.6×34 @306,504 · display:flex; dir:column; pos:relative; z:4
              - `div.lens-enrichment-tooltip-wrapper` — 276×204 @1068,358 | 991: 276×204 @670,332 | 390: hidden · pos:absolute [-204px -222.828px 44px 53.1562px]; transform:matrix(1, 0, 0, 1, -138, 0); vis:hidden · Δ390{display:none; transform:none}
                - `div.lens-enrichment-tooltip-body` — 220.8×144 @1095,400 | 991: 220.8×144 @698,374 | 390: hidden · display:flex; dir:column; gap:4px; pad:4px; mar:0px 0px 24px 0px; bg:rgb(36, 38, 46); radius:16px; opacity:0; transform:matrix(0.8, 0, 0, 0.8, 0, 24); transition:0.3s cubic-bezier(0.33, 1, 0.68, 1); vis:hidden · Δ390{transform:none}
                  - `div.div-block-327` — 214.4×83.2 @1099,403 | 991: 214.4×83.2 @701,377 | 390: hidden · display:flex; justify:center; align:center; flex:1 1 0%; bg:rgba(0, 0, 0, 0.2); radius:12px; overflow:hidden; vis:hidden
                    - `img.lens-enrichment-tooltip-image` — 214.4×83.2 @1099,403 | 991: 214.4×83.2 @701,377 | 390: hidden · maxw:100%; overflow:clip; fit:contain; vis:hidden · IMG `/assets/pages/lens-creative-analytics/67d5f04ea79f0c901c510881_tooltip-4.webp` natural 552×208 loading=lazy
                  - `div.div-block-328` — 214.4×51.2 @1099,489 | 991: 214.4×51.2 @701,464 | 390: hidden · display:flex; justify:center; align:center; pad:12px 16px; vis:hidden
                    - `div.text-alpha-50` — 188.8×32 @1111,499 | 991: 188.8×32 @714,473 | 390: hidden · vis:hidden
                      - `div.text-body-s` — 188.8×32 @1111,499 | 991: 188.8×32 @714,473 | 390: hidden · vis:hidden; font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.84); align-text:center "Level up your creative organization with internal ratings." (2 lines)
              - `div.lens-enrichment-tooltip-trigger` — 106.3×44 @1153,562 | 991: 106.3×44 @755,536 | 390: 65.6×34 @306,504 · display:flex; dir:column; align:center; gap:4px; pos:relative · Δ390{gap:0px}
                - `div.lens-enrichment-tooltip-dot_container` — 16×16 @1198,562 | 991: 16×16 @800,536 | 390: 16×16 @331,504 · display:grid; cols:16px; rows:16px; jitems:center; align:center; acontent:center; gap:16px
                  - `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e29-50731e1e.lens-enrichment-tooltip-ring` — 12.8×12.8 @1199,563 | 991: 12.8×12.8 @802,538 | 390: 9.6×9.6 @334,507 · pos:relative; pad:1px; gcol:1/2; grow:1/2; bgimg:linear-gradient(rgb(231, 127, 110), rgb(255, 200, 82) 20%, rgb(210, 227, 130) 40%, rgb(124, 221, 181) 60%, rgb(93, 188, 229) 80%, rgb(93, 143, 229)); bgsize:auto; bgpos:0% 0%; radius:99px; opacity:0; transform:matrix(0.8, 0, 0, 0.8, 0, 0); z:1; transition:0.9s cubic-bezier(0.16, 1, 0.3, 1)
                    - `div.lens-enrichment-tooltip-ring_inner` — 11.2×11.2 @1200,564 | 991: 11.2×11.2 @803,539 | 390: 8×8 @335,508 · bg:rgb(2, 3, 8); radius:999px
                  - `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e2b-50731e1e.lens-enrichment-tooltip-dot` — 8×8 @1202,566 | 991: 8×8 @804,540 | 390: 6×6 @336,509 · pos:relative; gcol:1/2; grow:1/2; aself:center; jself:center; bg:rgb(255, 255, 255); radius:999px; z:2
                - `div.text-tooltip` — 106.3×24 @1153,582 | 991: 106.3×24 @755,556 | 390: 65.6×18 @306,520 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) · Δ390{font:10px/18px} "Manual Rating"
          - `div.lens-integrations-tooltip-container.is-5` — 122.7×44 @917,489 | 991: 122.7×44 @562,478 | 390: 75.8×34 @247,448 · pos:absolute [51.7969px 338.391px 422.203px 384.891px]; transform:matrix(1, 0, 0, 1, -61.3594, 0) · Δ390{transform:matrix(1, 0, 0, 1, -37.875, 0)}
            - `div.lens-enrichment-tooltip` — 122.7×44 @917,489 | 991: 122.7×44 @562,478 | 390: 75.8×34 @247,448 · display:flex; dir:column; pos:relative; z:4
              - `div.lens-enrichment-tooltip-wrapper` — 276×204 @840,285 | 991: 276×204 @485,274 | 390: hidden · pos:absolute [-204px -214.641px 44px 61.3594px]; transform:matrix(1, 0, 0, 1, -138, 0); vis:hidden · Δ390{display:none; transform:none}
                - `div.lens-enrichment-tooltip-body` — 220.8×144 @867,327 | 991: 220.8×144 @513,316 | 390: hidden · display:flex; dir:column; gap:4px; pad:4px; mar:0px 0px 24px 0px; bg:rgb(36, 38, 46); radius:16px; opacity:0; transform:matrix(0.8, 0, 0, 0.8, 0, 24); transition:0.3s cubic-bezier(0.33, 1, 0.68, 1); vis:hidden · Δ390{transform:none}
                  - `div.div-block-327` — 214.4×83.2 @871,330 | 991: 214.4×83.2 @516,320 | 390: hidden · display:flex; justify:center; align:center; flex:1 1 0%; bg:rgba(0, 0, 0, 0.2); radius:12px; overflow:hidden; vis:hidden
                    - `img.lens-enrichment-tooltip-image` — 214.4×83.2 @871,330 | 991: 214.4×83.2 @516,320 | 390: hidden · maxw:100%; overflow:clip; fit:contain; vis:hidden · IMG `/assets/pages/lens-creative-analytics/67d5f04e5057b3fadc63d8f1_tooltip-5.webp` natural 552×208 loading=lazy
                  - `div.div-block-328` — 214.4×51.2 @871,417 | 991: 214.4×51.2 @516,406 | 390: hidden · display:flex; justify:center; align:center; pad:12px 16px; vis:hidden
                    - `div.text-alpha-50` — 188.8×32 @883,426 | 991: 188.8×32 @529,416 | 390: hidden · vis:hidden
                      - `div.text-body-s` — 188.8×32 @883,426 | 991: 188.8×32 @529,416 | 390: hidden · vis:hidden; font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.84); align-text:center "Quickly add custom tags by creative ID for report creation." (2 lines)
              - `div.lens-enrichment-tooltip-trigger` — 122.7×44 @917,489 | 991: 122.7×44 @562,478 | 390: 75.8×34 @247,448 · display:flex; dir:column; align:center; gap:4px; pos:relative · Δ390{gap:0px}
                - `div.lens-enrichment-tooltip-dot_container` — 16×16 @970,489 | 991: 16×16 @615,478 | 390: 16×16 @277,448 · display:grid; cols:16px; rows:16px; jitems:center; align:center; acontent:center; gap:16px
                  - `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e29-50731e1e.lens-enrichment-tooltip-ring` — 12.8×12.8 @971,491 | 991: 12.8×12.8 @617,480 | 390: 9.6×9.6 @280,451 · pos:relative; pad:1px; gcol:1/2; grow:1/2; bgimg:linear-gradient(rgb(231, 127, 110), rgb(255, 200, 82) 20%, rgb(210, 227, 130) 40%, rgb(124, 221, 181) 60%, rgb(93, 188, 229) 80%, rgb(93, 143, 229)); bgsize:auto; bgpos:0% 0%; radius:99px; opacity:0; transform:matrix(0.8, 0, 0, 0.8, 0, 0); z:1; transition:0.9s cubic-bezier(0.16, 1, 0.3, 1)
                    - `div.lens-enrichment-tooltip-ring_inner` — 11.2×11.2 @972,492 | 991: 11.2×11.2 @617,481 | 390: 8×8 @281,452 · bg:rgb(2, 3, 8); radius:999px
                  - `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e2b-50731e1e.lens-enrichment-tooltip-dot` — 8×8 @974,493 | 991: 8×8 @619,482 | 390: 6×6 @282,453 · pos:relative; gcol:1/2; grow:1/2; aself:center; jself:center; bg:rgb(255, 255, 255); radius:999px; z:2
                - `div.text-tooltip` — 122.7×24 @917,509 | 991: 122.7×24 @562,498 | 390: 75.8×18 @247,464 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) · Δ390{font:10px/18px} "Custom Tagging"
          - `div.lens-integrations-tooltip-container.is-6` — 146.1×44 @1000,696 | 991: 146.1×44 @621,644 | 390: hidden · pos:absolute [259px 219.953px 215px 479.969px]; transform:matrix(1, 0, 0, 1, -73.0391, 0) · Δ390{display:none; transform:none}
            - `div.lens-enrichment-tooltip` — 146.1×44 @1000,696 | 991: 146.1×44 @621,644 | 390: hidden · display:flex; dir:column; pos:relative; z:4
              - `div.lens-enrichment-tooltip-wrapper` — 276×204 @935,492 | 991: 276×204 @556,440 | 390: hidden · pos:absolute [-204px -202.953px 44px 73.0312px]; transform:matrix(1, 0, 0, 1, -138, 0); vis:hidden · Δ390{display:none; transform:none}
                - `div.lens-enrichment-tooltip-body` — 220.8×144 @963,534 | 991: 220.8×144 @584,482 | 390: hidden · display:flex; dir:column; gap:4px; pad:4px; mar:0px 0px 24px 0px; bg:rgb(36, 38, 46); radius:16px; opacity:0; transform:matrix(0.8, 0, 0, 0.8, 0, 24); transition:0.3s cubic-bezier(0.33, 1, 0.68, 1); vis:hidden · Δ390{transform:none}
                  - `div.div-block-327` — 214.4×83.2 @966,538 | 991: 214.4×83.2 @587,485 | 390: hidden · display:flex; justify:center; align:center; flex:1 1 0%; bg:rgba(0, 0, 0, 0.2); radius:12px; overflow:hidden; vis:hidden
                    - `img.lens-enrichment-tooltip-image` — 214.4×83.2 @966,538 | 991: 214.4×83.2 @587,485 | 390: hidden · maxw:100%; overflow:clip; fit:contain; vis:hidden · IMG `/assets/pages/lens-creative-analytics/67d5f04f5057b3fadc63d92b_tooltip-6.webp` natural 552×208 loading=lazy
                  - `div.div-block-328` — 214.4×51.2 @966,624 | 991: 214.4×51.2 @587,571 | 390: hidden · display:flex; justify:center; align:center; pad:12px 16px; vis:hidden
                    - `div.text-alpha-50` — 188.8×32 @979,634 | 991: 188.8×32 @600,581 | 390: hidden · vis:hidden
                      - `div.text-body-s` — 188.8×32 @979,634 | 991: 188.8×32 @600,581 | 390: hidden · vis:hidden; font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.84); align-text:center "All videos are automatically transcribed with AI." (2 lines)
              - `div.lens-enrichment-tooltip-trigger` — 146.1×44 @1000,696 | 991: 146.1×44 @621,644 | 390: hidden · display:flex; dir:column; align:center; gap:4px; pos:relative · Δ390{gap:0px}
                - `div.lens-enrichment-tooltip-dot_container` — 16×16 @1065,696 | 991: 16×16 @686,644 | 390: hidden · display:grid; cols:16px; rows:16px; jitems:center; align:center; acontent:center; gap:16px · Δ390{cols:1fr}
                  - `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e29-50731e1e.lens-enrichment-tooltip-ring` — 12.8×12.8 @1067,698 | 991: 12.8×12.8 @688,645 | 390: hidden · pos:relative; pad:1px; gcol:1/2; grow:1/2; bgimg:linear-gradient(rgb(231, 127, 110), rgb(255, 200, 82) 20%, rgb(210, 227, 130) 40%, rgb(124, 221, 181) 60%, rgb(93, 188, 229) 80%, rgb(93, 143, 229)); bgsize:auto; bgpos:0% 0%; radius:99px; opacity:0; transform:matrix(0.8, 0, 0, 0.8, 0, 0); z:1; transition:0.9s cubic-bezier(0.16, 1, 0.3, 1) · Δ390{transform:none}
                    - `div.lens-enrichment-tooltip-ring_inner` — 11.2×11.2 @1067,699 | 991: 11.2×11.2 @689,646 | 390: hidden · bg:rgb(2, 3, 8); radius:999px
                  - `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e2b-50731e1e.lens-enrichment-tooltip-dot` — 8×8 @1069,700 | 991: 8×8 @690,648 | 390: hidden · pos:relative; gcol:1/2; grow:1/2; aself:center; jself:center; bg:rgb(255, 255, 255); radius:999px; z:2
                - `div.text-tooltip` — 146.1×24 @1000,716 | 991: 146.1×24 @621,664 | 390: hidden · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) · Δ390{font:10px/18px} "Video Transcription"
          - `div.lens-integrations-tooltip-container.is-7` — 136.5×44 @896,836 | 991: 136.5×44 @541,755 | 390: 84.1×34 @235,563 · pos:absolute [398.859px 338.391px 75.1406px 371.125px]; transform:matrix(1, 0, 0, 1, -68.2422, 0) · Δ390{transform:matrix(1, 0, 0, 1, -42.0469, 0)}
            - `div.lens-enrichment-tooltip` — 136.5×44 @896,836 | 991: 136.5×44 @541,755 | 390: 84.1×34 @235,563 · display:flex; dir:column; pos:relative; z:4
              - `div.lens-enrichment-tooltip-wrapper` — 276×204 @826,632 | 991: 276×204 @471,551 | 390: hidden · pos:absolute [-204px -207.75px 44px 68.2344px]; transform:matrix(1, 0, 0, 1, -138, 0); vis:hidden · Δ390{display:none; transform:none}
                - `div.lens-enrichment-tooltip-body` — 220.8×144 @854,674 | 991: 220.8×144 @499,593 | 390: hidden · display:flex; dir:column; gap:4px; pad:4px; mar:0px 0px 24px 0px; bg:rgb(36, 38, 46); radius:16px; opacity:0; transform:matrix(0.8, 0, 0, 0.8, 0, 24); transition:0.3s cubic-bezier(0.33, 1, 0.68, 1); vis:hidden · Δ390{transform:none}
                  - `div.div-block-327` — 214.4×83.2 @857,677 | 991: 214.4×83.2 @502,597 | 390: hidden · display:flex; justify:center; align:center; flex:1 1 0%; bg:rgba(0, 0, 0, 0.2); radius:12px; overflow:hidden; vis:hidden
                    - `img.lens-enrichment-tooltip-image` — 214.4×83.2 @857,677 | 991: 214.4×83.2 @502,597 | 390: hidden · maxw:100%; overflow:clip; fit:contain; vis:hidden · IMG `/assets/pages/lens-creative-analytics/67d5f04edef0ff09efcaf290_tooltip-7.webp` natural 552×208 loading=lazy
                  - `div.div-block-328` — 214.4×51.2 @857,764 | 991: 214.4×51.2 @502,683 | 390: hidden · display:flex; justify:center; align:center; pad:12px 16px; vis:hidden
                    - `div.text-alpha-50` — 188.8×32 @870,773 | 991: 188.8×32 @515,693 | 390: hidden · vis:hidden
                      - `div.text-body-s` — 188.8×32 @870,773 | 991: 188.8×32 @515,693 | 390: hidden · vis:hidden; font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.84); align-text:center "See what creators in influencers perform across your entire account." (2 lines)
              - `div.lens-enrichment-tooltip-trigger` — 136.5×44 @896,836 | 991: 136.5×44 @541,755 | 390: 84.1×34 @235,563 · display:flex; dir:column; align:center; gap:4px; pos:relative · Δ390{gap:0px}
                - `div.lens-enrichment-tooltip-dot_container` — 16×16 @956,836 | 991: 16×16 @601,755 | 390: 16×16 @269,563 · display:grid; cols:16px; rows:16px; jitems:center; align:center; acontent:center; gap:16px
                  - `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e29-50731e1e.lens-enrichment-tooltip-ring` — 12.8×12.8 @958,838 | 991: 12.8×12.8 @603,757 | 390: 9.6×9.6 @272,566 · pos:relative; pad:1px; gcol:1/2; grow:1/2; bgimg:linear-gradient(rgb(231, 127, 110), rgb(255, 200, 82) 20%, rgb(210, 227, 130) 40%, rgb(124, 221, 181) 60%, rgb(93, 188, 229) 80%, rgb(93, 143, 229)); bgsize:auto; bgpos:0% 0%; radius:99px; opacity:0; transform:matrix(0.8, 0, 0, 0.8, 0, 0); z:1; transition:0.9s cubic-bezier(0.16, 1, 0.3, 1)
                    - `div.lens-enrichment-tooltip-ring_inner` — 11.2×11.2 @959,839 | 991: 11.2×11.2 @604,758 | 390: 8×8 @273,567 · bg:rgb(2, 3, 8); radius:999px
                  - `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e2b-50731e1e.lens-enrichment-tooltip-dot` — 8×8 @960,840 | 991: 8×8 @605,759 | 390: 6×6 @274,568 · pos:relative; gcol:1/2; grow:1/2; aself:center; jself:center; bg:rgb(255, 255, 255); radius:999px; z:2
                - `div.text-tooltip` — 136.5×24 @896,856 | 991: 136.5×24 @541,775 | 390: 84.1×18 @235,579 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) · Δ390{font:10px/18px} "Facial Recognition"
      - `div.lens-enrichment-illustration-overlay` — 1440×520 @0,436 | 991: 1151×415.6 @-80,436 | 390: 534×192.8 @-72,428 · display:flex; dir:column; align:center; pos:absolute [0px 0px 0px 0px]; z:5; pe:none
        - `div.lens-enrichment-overlay_line` — 2×584 @719,404 | 991: 2×479.6 @495,404 | 390: 1.5×272.8 @194,388 · mar:-32px 0px; flex:1 1 0%; bgimg:linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.24) 25%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.24) 75%, rgba(255, 255, 255, 0)); bgsize:auto; bgpos:0% 0%; pe:none · Δ390{mar:-40px 0px}
  - `div.container` — 1440×614 @0,1064 | 991: 991×1456 @0,932 | 390: 390×1523 @0,701 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
    - `div.lens-security` — 1152×614 @144,1064 | 991: 927×1456 @32,932 | 390: 342×1523 @24,701 · display:flex; dir:column; gap:48px; mar:0px 104px; maxw:1152px · Δ991{mar:0px} · Δ390{mar:0px}
      - `div.section-head` — 720×132 @360,1064 | 991: 720×132 @136,932 | 390: 342×244 @24,701 · display:flex; dir:column; align:center; gap:12px; mar:0px 216px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
        - `div.section-head-wrapper` — 624.8×132 @408,1064 | 991: 624.8×132 @183,932 | 390: 342×244 @24,701 · display:flex; dir:column; align:center; gap:12px
          - `div.text-overline.text-white-68` — 76.3×16 @682,1064 | 991: 76.3×16 @457,932 | 390: 76.3×16 @157,701 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "SECURITY"
          - `h2.text-display-h3` — 624.8×44 @408,1092 | 991: 624.8×44 @183,960 | 390: 342×132 @24,729 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance "Creative data secured under lock & key"
          - `div.section-head_paragraph` — 512×48 @464,1148 | 991: 512×48 @239,1016 | 390: 342×72 @24,873 · maxw:512px
            - `p.text-body-m` — 512×48 @464,1148 | 991: 512×48 @239,1016 | 390: 342×72 @24,873 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~125 chars, 2 lines @1440›
      - `div.lens-security-grid` — 1152×434 @144,1244 | 991: 480×1276 @256,1112 | 390: 342×1231 @24,993 · display:grid; cols:383.328px 383.328px 383.344px; rows:432px; gap:0px; border:1px solid rgb(23, 25, 32); radius:28px · Δ991{cols:478px; mar:0px 223.5px; maxw:480px} · Δ390{cols:340px; maxw:480px}
        - `div.lens-security-card` — 383.3×432 @145,1245 | 991: 478×432 @257,1113 | 390: 340×401 @25,994 · display:flex; dir:column; pad:24px 24px 16px 24px · Δ390{pad:24px}
          - `div.lens-security-card-head` — 335.3×24 @169,1269 | 991: 430×24 @281,1137 | 390: 292×24 @49,1018 · display:flex; align:center; gap:8px · Δ390{pos:relative}
            - `div.icon-medium` — 24×24 @169,1269 | 991: 24×24 @281,1137 | 390: 24×24 @49,1018 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @169,1269 | 991: 24×24 @281,1137 | 390: 24×24 @49,1018 · display:flex; justify:center; align:center
                - `svg` — 24×24 @169,1269 | 991: 24×24 @281,1137 | 390: 24×24 @49,1018 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-j5qqo8.svg`
            - `h3.text-label-m` — 154.8×24 @201,1269 | 991: 154.8×24 @313,1137 | 390: 154.8×24 @81,1018 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Password Protection"
          - `div.lens-security-card-body` — 383.3×320 @145,1293 | 991: 478×320 @257,1161 | 390: 340×320 @25,1003 · mar:0px -24px · Δ390{mar:-39px -24px 0px -24px}
            - `img.lens-security-card-illustration` — 383.3×315.4 @145,1293 | 991: 478×393.3 @257,1161 | 390: 340×279.8 @25,1003 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/lens-creative-analytics/67d5c49be9d19b9bec42f1dc_password-protection.webp` natural 1439×1184 loading=lazy alt "password graphic image"
          - `div.text-body-m` — 335.3×48 @169,1613 | 991: 430×48 @281,1481 | 390: 292×48 @49,1323 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.84); wrap-text:balance "Avoid your creative data leaking through unsecured report links." (2 lines)
        - `div.lens-security-card.is-middle` — 383.3×432 @528,1245 | 991: 478×410 @257,1545 | 390: 340×403 @25,1395 · display:flex; dir:column; pad:24px 24px 16px 24px; border:T/R/B/L 0 | 1px solid rgb(23, 25, 32) | 0 | 1px solid rgb(23, 25, 32) · Δ390{pad:24px}
          - `div.lens-security-card-head` — 333.3×24 @553,1269 | 991: 430×24 @281,1570 | 390: 292×24 @49,1420 · display:flex; align:center; gap:8px · Δ390{pos:relative}
            - `div.icon-medium` — 24×24 @553,1269 | 991: 24×24 @281,1570 | 390: 24×24 @49,1420 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @553,1269 | 991: 24×24 @281,1570 | 390: 24×24 @49,1420 · display:flex; justify:center; align:center
                - `svg` — 24×24 @553,1269 | 991: 24×24 @281,1570 | 390: 24×24 @49,1420 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-sgy1nb.svg`
            - `h3.text-label-m` — 82.9×24 @585,1269 | 991: 82.9×24 @313,1570 | 390: 82.9×24 @81,1420 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "IP Tracking"
          - `div.lens-security-card-body` — 381.3×320 @529,1293 | 991: 478×320 @257,1594 | 390: 340×320 @25,1405 · mar:0px -24px · Δ390{mar:-39px -24px 0px -24px}
            - `img.lens-security-card-illustration` — 381.3×313.8 @529,1293 | 991: 478×393.3 @257,1594 | 390: 340×279.8 @25,1405 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/lens-creative-analytics/67d5c49b6bfc757685b68eac_ip-tracking.webp` natural 1439×1184 loading=lazy alt "IP tracking graphic"
          - `div.text-body-m` — 333.3×48 @553,1613 | 991: 430×24 @281,1914 | 390: 292×48 @49,1725 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.84); wrap-text:balance "See who’s viewing your reports and from where." (2 lines)
        - `div.lens-security-card` — 383.3×432 @912,1245 | 991: 478×432 @257,1955 | 390: 340×425 @25,1798 · display:flex; dir:column; pad:24px 24px 16px 24px · Δ390{pad:24px}
          - `div.lens-security-card-head` — 335.3×24 @936,1269 | 991: 430×24 @281,1979 | 390: 292×24 @49,1822 · display:flex; align:center; gap:8px · Δ390{pos:relative}
            - `div.icon-medium` — 24×24 @936,1269 | 991: 24×24 @281,1979 | 390: 24×24 @49,1822 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @936,1269 | 991: 24×24 @281,1979 | 390: 24×24 @49,1822 · display:flex; justify:center; align:center
                - `svg` — 24×24 @936,1269 | 991: 24×24 @281,1979 | 390: 24×24 @49,1822 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-167k2wx.svg`
            - `h3.text-label-m` — 137.9×24 @968,1269 | 991: 137.9×24 @313,1979 | 390: 137.9×24 @81,1822 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Internal Protection"
          - `div.lens-security-card-body` — 383.3×320 @912,1293 | 991: 478×320 @257,2003 | 390: 340×320 @25,1807 · mar:0px -24px · Δ390{mar:-39px -24px 0px -24px}
            - `img.lens-security-card-illustration` — 383.3×315.5 @912,1293 | 991: 478×393.3 @257,2003 | 390: 340×279.8 @25,1807 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/lens-creative-analytics/67d5c49c9a3768e0b81621f5_internal-protection.webp` natural 1439×1184 loading=lazy
          - `div.text-body-m` — 335.3×48 @936,1613 | 991: 430×48 @281,2323 | 390: 292×72 @49,2127 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.84); wrap-text:balance ‹copy: ~83 chars, 2 lines @1440›

### S6. `div.section`

y/height: 1440 8795/564 · 991 9321/760 · 390 9314/704

- `div.section` — 1440×564 @0,0 | 991: 991×760 @0,0 | 390: 390×704 @0,0
  - `div.container.section-container` — 1344×564 @48,0 | 991: 991×760 @0,0 | 390: 390×704 @0,0 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
    - `div.cta` — 1264×564 @88,0 | 991: 927×760 @32,0 | 390: 342×704 @24,0 · pad:80px 0px
      - `div.cta-block` — 1264×404 @88,80 | 991: 927×600 @32,80 | 390: 342×544 @24,80 · pos:relative; pad:84px; bg:rgb(2, 3, 8); radius:36px; shadow:rgb(23, 25, 32) 0px 0px 0px 1px; overflow:hidden · Δ991{pad:64px 64px 0px 64px} · Δ390{pad:32px 32px 0px 32px}
        - `div.cta-block-content` — 723.4×236 @172,164 | 991: 799×236 @96,144 | 390: 278×296 @56,112 · display:flex; dir:column; gap:32px; pos:relative; maxw:66%; z:1 · Δ991{maxw:none} · Δ390{maxw:none}
          - `div.flex-col-gap-2.align-start.text-balance` — 723.4×164 @172,164 | 991: 799×164 @96,144 | 390: 278×224 @56,112 · display:flex; dir:column; align:flex-start; gap:8px
            - `h2.text-display-h3.mobile-landscape-text-display-h4` — 429×44 @172,164 | 991: 429×44 @96,144 | 390: 278×72 @56,112 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(255, 255, 255); wrap-text:balance · Δ390{font:28px/36px; ls:-0.202222px} "Get a 7-Day free trial today"
            - `div.text-alpha-100` — 723.4×112 @172,216 | 991: 799×112 @96,196 | 390: 278×144 @56,192 · flex:1 1 0%
              - `p.text-body-l.mobile-landscape-text-body-n` — 723.4×112 @172,216 | 991: 799×112 @96,196 | 390: 278×144 @56,192 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); wrap-text:balance · Δ390{font:16px/24px; ls:-0.23111px} ‹copy: ~148 chars, 4 lines @1440›
          - `div.flex-col-gap-3` — 723.4×40 @172,360 | 991: 799×40 @96,340 | 390: 278×40 @56,368 · display:flex; dir:column; justify:center; align:flex-start; gap:12px
            - `a.button-dark.button-primary` — 159.3×40 @172,360 | 991: 159.3×40 @96,340 | 390: 159.3×40 @56,368 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; flex:1 1 0%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `https://app.foreplay.co/sign-up`
              - `div.button-text-block` — 123.3×24 @180,368 | 991: 123.3×24 @104,348 | 390: 123.3×24 @64,376 · pos:relative; pad:0px 6px; z:2
                - `div.text-heading-m` — 111.3×24 @186,368 | 991: 111.3×24 @110,348 | 390: 111.3×24 @70,376 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14) "Start Free Trial"
              - `div.button-icon-block.icon-right.opacity-100` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; z:2
                - `div.icon-medium` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · display:flex; justify:center; align:center
                  - `div.svg.w-embed` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · display:flex; justify:center; align:center
                    - `svg` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · overflow:hidden · SVG `/assets/pages/lens-creative-analytics/svg-svg-185ries.svg`
            - `div.no-cc-required` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: "No credit card required", svg bjw7ed
        - `div.cta-block-animation` — 880×880 @788,-122 | 991: hidden | 390: hidden · pos:absolute [-202px -316px 0px 700px]; blend:lighten; z:0 · Δ991{display:none; mar:-100px 0px; pos:relative} · Δ390{display:none; mar:-55% -115px -133px -100px; pos:relative}
          - `div.code-video.w-embed` — 880×880 @788,-122 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; pos:relative
            - `video` — 880×880 @788,-122 | 991: hidden | 390: hidden · overflow:clip; fit:contain · ASSET `/assets/pages/lens-creative-analytics/cta-lens.mp4` · VIDEO {"srcs":["cta-lens.mp4"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":2000,"vh":2000,"dur":3.36,"preload":"metadata"}
        - `div.cta-block-icon` — 1096×0 @172,400 | 991: 799×300 @96,380 | 390: 278×192 @56,432 · Δ991{display:flex; dir:column; wrap:nowrap; justify:center; align:center; gap:normal} · Δ390{display:flex; dir:column; wrap:nowrap; justify:center; align:center; gap:normal; mar:24px 0px 0px 0px}
          - `img.cta-block-icon-image` — hidden | 991: 300×300 @346,380 | 390: 256×256 @67,432 · display:none; maxw:100%; overflow:clip; fit:fill · Δ991{display:block; maxw:none} · Δ390{display:block; mar:0px 0px -64px 0px; maxw:none} · IMG `/assets/682f93b43a94db00dbc45367_iso-lens.webp` natural 0×0 loading=lazy alt "isometric glass ball logo"

## Typography roles (computed at 1440; sizes at 991/390 from the same nodes)

| font (family size/lh weight ls) | color | n | @991 | @390 | elements (sample) | example |
|---|---|---|---|---|---|---|
| Inter 16px/24px w500 ls-0.18px | rgb(255, 255, 255) | 85 | 16px/24px | 16px/24px, 10px/18px | `div.text-label-m` `div.text-tooltip` `h3.text-label-m` | Health |
| Inter 14px/20px w400 ls-0.09px | rgba(255, 255, 255, 0.84) | 7 | 14px/20px | 14px/20px | `div.text-body-s` | ~65 chars |
| Inter 16px/24px w400 ls-0.18px | rgb(52, 54, 66) | 5 | 16px/24px | 16px/24px | `p.text-body-m` | ~67 chars |
| Inter 16px/24px w500 ls-0.18px | rgb(9, 10, 14) | 5 | 16px/24px | 14px/24px | `div.text-label-m.mobile-landscape-text-label-s` | > $1m |
| Inter 12px/16px w550 ls2px uppercase | rgba(255, 255, 255, 0.36) | 4 | 12px/16px | 12px/16px | `h1.text-overline` `div.text-overline.text-white-68` | LENS |
| Inter 16px/24px w550 ls-0.18px | rgb(9, 10, 14) | 4 | 16px/24px | 16px/24px | `div.text-heading-m` | Start free trial |
| Inter 16px/24px w500 ls-0.18px | rgb(23, 25, 32) | 4 | 16px/24px | 16px/24px | `h3.text-label-m` | Automated Reporting |
| Inter 18px/28px w400 ls-0.259999px | rgba(255, 255, 255, 0.68) | 3 | 18px/28px | 18px/28px, 16px/24px | `p.text-body-l.text-white-84` `p.text-body-l` `p.text-body-l.mobile-landscape-text-body-n` | ~109 chars |
| Inter 14px/20px w400 ls-0.09px | rgba(255, 255, 255, 0.68) | 3 | 14px/20px | 14px/20px | `div.text-body-s` | Learn more about Lens. |
| Inter Display 36px/44px w600 ls-0.26px | rgb(9, 10, 14) | 3 | 36px/44px | 36px/44px | `h2.text-display-h3` `h3.text-display-h3` | Axe the ad spend tax. |
| Inter 16px/24px w400 ls-0.18px | rgba(255, 255, 255, 0.68) | 3 | 16px/24px | 16px/24px | `p.text-body-m` | ~75 chars |
| Inter 12px/16px w550 ls2px uppercase | rgb(52, 54, 66) | 3 | 12px/16px | 12px/16px | `div.text-overline` | CREATIVE REPORTING |
| Inter 16px/24px w500 ls-0.18px | rgb(7, 36, 126) | 3 | 16px/24px | 14px/24px | `div.text-label-m.mobile-landscape-text-label-s` | GMV |
| Inter Display 36px/44px w600 ls-0.26px | rgb(255, 255, 255) | 3 | 36px/44px | 36px/44px, 28px/36px | `h2.text-display-h3` `h2.text-display-h3.mobile-landscape-text-display-h4` | Trade manual work for automated enrichme |
| Inter 16px/24px w400 ls-0.18px | rgba(255, 255, 255, 0.84) | 3 | 16px/24px | 16px/24px | `div.text-body-m` | Avoid your creative data leaking through |
| Inter 14px/20px w400 ls-0.09px | rgb(52, 54, 66) | 2 | 14px/20px | 14px/20px | `div.text-body-s` | Ad Spend |
| Inter 18px/28px w400 ls-0.259999px | rgb(36, 38, 46) | 2 | 18px/28px | 18px/28px | `p.text-body-l` | ~140 chars |
| Inter 18px/24px w500 ls-0.259999px | rgba(255, 255, 255, 0.56) | 2 | 18px/24px | 16px/24px | `div.text-label-l` | Group Comparison |
| Inter 18px/28px w400 ls-0.259999px | rgb(52, 54, 66) | 2 | 18px/28px | 18px/28px | `p.text-body-l` | ~159 chars |
| Inter 16px/24px w500 ls-0.18px | rgb(24, 78, 68) | 2 | 16px/24px | 14px/24px | `div.text-label-m.mobile-landscape-text-label-s` | AOV |
| Inter Display 60px/68px w600 ls-0.45px | rgba(255, 255, 255, 0.88) | 1 | 60px/68px | 38px/48px | `h2.text-display-h1.hero-title` | Performance insights through a creative  |
| Inter 14px/20px w500 ls-0.09px | rgb(255, 255, 255) | 1 | 14px/20px | 14px/20px | `div.text-label-s` | Watch Video |
| Inter 18px/30px w500 ls-0.259999px | rgb(15, 17, 22) | 1 | 18px/30px | 16px/30px | `h3.text-label-l` | Other Analytics Tools |
| Inter 18px/30px w500 ls-0.259999px | rgb(255, 255, 255) | 1 | 18px/30px | 16px/30px | `h3.text-label-l` | Lens Analytics |
| Inter 12px/20px w400 ls-0.18px | rgba(255, 255, 255, 0.54) | 1 | 12px/20px | 12px/20px | `div.text-body-xs` | Flat Rate Pricing |
| Inter 16px/24px w400 ls-0.18px | rgb(36, 38, 46) | 1 | 16px/24px | 16px/24px | `div` | ~117 chars |
| Inter Display 36px/44px w600 ls-0.26px | rgb(23, 25, 32) | 1 | 36px/44px | 36px/44px | `h2.text-display-h3` | Beautiful, shareable white-labeled repor |
| Inter 14px/20px w400 ls-0.09px | rgb(23, 25, 32) | 1 | 14px/20px | 14px/20px | `p.text-body-s` | ~307 chars |
| Inter 12px/16px w700 ls2px uppercase | rgb(23, 25, 32) | 1 | 12px/16px | 12px/16px | `strong` | DANIEL BOGULEWSKI |
| Inter 12px/16px w550 ls2px uppercase | rgb(178, 180, 197) | 1 | 12px/16px | 12px/16px | `div.text-overline` | CREATIVE DIRECTOR @ VIASOX |
| Inter Display 44px/53.76px w600 ls-0.33px | rgb(255, 255, 255) | 1 | 40px/52px | 36px/48px | `h2.text-display-h2` | Lightning fast insights directly from th |
| Inter 18px/24px w500 ls-0.259999px | rgb(255, 255, 255) | 1 | 18px/24px | 16px/24px | `div.text-label-l` | Creative Test Analysis |
| Inter 12px/16px w550 ls2px uppercase | rgb(76, 80, 95) | 1 | 12px/16px | 12px/16px | `div.text-overline.text-solid-400` | CONTEXTUAL AD REPORTS |
| Inter Display 44px/53.76px w600 ls-0.33px | rgb(23, 25, 32) | 1 | 40px/52px | 36px/48px | `h2.text-display-h2` | Performance storytelling beyond a pretty |
| Inter 12px/16px w550 ls2px uppercase | rgb(9, 10, 14) | 1 | 12px/16px | 12px/16px | `div#carousel-heading.text-overline` | OVER 100 BENCHMARKING SEGMENTS |

## Colors, gradients, radii, shadows in use (non-text, 1440)

**background-color**
- `rgb(255, 255, 255)` — `a.button-dark.button-primary`, `div.section-white-block`, `div.dot.is-white`, `a.button-light.button-stroke`, `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e2b-50731e1e.lens-enrichment-tooltip-dot`
- `rgb(2, 3, 8)` — `div.product-hero-video.w-background-video`, `div.lens-solution-graph-card.is-lens.svg-animation-container`, `div.lens-integrations-logo.is-top`, `div.lens-integrations-logo`, `div.lens-integrations-logo.is-bottom` (+2)
- `rgba(0, 0, 0, 0.84)` — `div.lightbox-video-trigger`
- `rgba(255, 255, 255, 0.12)` — `div.video-lightbox-button`
- `rgb(233, 234, 239)` — `div.vertical-line.bg-current`, `div.horizontal-line.bg-current`, `div.line`
- `rgb(124, 221, 181)` — `div.dot.is-teal`
- `rgb(231, 127, 110)` — `div.dot.is-red`
- `rgb(23, 25, 32)` — `div.horizontal-line.bg-current`, `div.vertical-line.bg-current`
- `rgba(255, 255, 255, 0.05)` — `div.div-block-324`
- `rgb(249, 249, 250)` — `div#w-node-e15e30e2-1262-a79c-3e4c-54dbd1025d27-e81726ce.lens-solution-report-avatar`
- `rgb(239, 239, 239)` — `button.arrow-button`
- `rgba(255, 255, 255, 0.1)` — `div#integrations-tab-0.lens-integrations-tab-link.is-active`
- `rgb(240, 247, 255)` — `div.lens-benchmarking-segment_label`
- `rgb(239, 254, 250)` — `div.lens-benchmarking-segment_label.is-green`
- `rgb(36, 38, 46)` — `div.lens-enrichment-tooltip-body`
- `rgba(0, 0, 0, 0.2)` — `div.div-block-327`

**background-image**
- `url(68331d86cf0a6a7db433a56d_dot-grid.webp)` — `div.dot-bg`
- `radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88))` — `h2.text-display-h1.hero-title`
- `linear-gradient(0deg, rgb(2, 3, 8) 75%, rgba(2, 3, 8, 0))` — `div.product-hero-preview-underlay`
- `url(62a4ed18ddad95dde8b8bfa4/68338afa127062351d6e99da_product-video-lens-poster-00001.jpg)` — `video#ebc2c5a2-86e3-93d7-aee7-439f2cd02d88-video`
- `linear-gradient(90deg, rgb(231, 127, 110), rgb(255, 200, 82) 20%, rgb(210, 227, 130) 43%, rgb(124, 221, 181) 64%, rgb(93, 188, 229) 84%, rgb(93, 120, 229))` — `div.div-block-323`
- `linear-gradient(rgba(33, 34, 38, 0.5), rgb(33, 34, 38))` — `div.div-block-323-copy`
- `linear-gradient(45deg, rgb(231, 127, 110), rgb(255, 200, 82) 17%, rgb(210, 227, 130) 36%, rgb(124, 221, 181) 59%, rgb(93, 188, 229) 87%, rgb(93, 120, 229))` — `div.dot.is-rainbow`
- `linear-gradient(rgba(2, 3, 8, 0), rgba(2, 3, 8, 0.8))` — `div.lens-benchmarking-segment-layout`
- `linear-gradient(270deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0))` — `div#w-node-b73c368c-7661-1661-cfed-8a378f740839-e81726ce.code-style.lens-enrichment-illustration-ray-2`, `div#w-node-b73c368c-7661-1661-cfed-8a378f740847-e81726ce.lens-enrichment-illustration-ray-2.is-inverted`
- `linear-gradient(90deg, rgb(2, 3, 8), rgba(2, 3, 8, 0))` — `div.lens-enrichment-illustration-fader`
- `linear-gradient(rgb(231, 127, 110), rgb(255, 200, 82) 20%, rgb(210, 227, 130) 40%, rgb(124, 221, 181) 60%, rgb(93, 188, 229) 80%, rgb(93, 143, 229))` — `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e29-50731e1e.lens-enrichment-tooltip-ring`
- `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.24) 25%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.24) 75%, rgba(255, 255, 255, 0))` — `div.lens-enrichment-overlay_line`

**border**
- `1px solid rgb(23, 25, 32)` — `div#integrations-tab-1.lens-integrations-tab-link`, `div#integrations-tab-2.lens-integrations-tab-link`, `div.lens-security-grid`
- `1px solid rgba(255, 255, 255, 0.06)` — `div#w-node-b73c368c-7661-1661-cfed-8a378f740839-e81726ce.code-style.lens-enrichment-illustration-ray-2`, `div#w-node-b73c368c-7661-1661-cfed-8a378f740847-e81726ce.lens-enrichment-illustration-ray-2.is-inverted`
- `T/R/B/L 0 | 1px solid rgb(23, 25, 32) | 0 | 1px solid rgb(23, 25, 32)` — `div.lens-security-card.is-middle`

**radius**
- `10px` — `a.button-dark.button-primary`, `div#w-node-e15e30e2-1262-a79c-3e4c-54dbd1025d27-e81726ce.lens-solution-report-avatar`, `div#integrations-tab-0.lens-integrations-tab-link.is-active`, `div#integrations-tab-1.lens-integrations-tab-link`, `div#integrations-tab-2.lens-integrations-tab-link` (+1)
- `16px` — `div.lightbox-video-trigger`, `div.lens-enrichment-tooltip-body`
- `8px` — `div.video-lightbox-button`, `div.lens-solution-graph-illustration`, `div.lens-solution-graph-illustration.is-lens`
- `36px` — `div.section-white-block`, `div.cta-block`
- `20px` — `div.lens-solution-graph-card.svg-animation-container`, `div.lens-solution-graph-card.is-lens.svg-animation-container`, `img.left-right-section-image`
- `99px` — `div.dot.is-teal`, `div.dot.is-red`, `div.dot.is-white`, `div.dot.is-rainbow`, `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e29-50731e1e.lens-enrichment-tooltip-ring`
- `4px` — `div.div-block-324`, `button.arrow-button`, `div.lens-benchmarking-segment_label`, `div.lens-benchmarking-segment_label.is-green`
- `20%` — `div.lens-integrations-logo.is-top`, `div.lens-integrations-logo`, `div.lens-integrations-logo.is-bottom`
- `21%` — `div.lens-integrations-icon-container`
- `12px` — `div.lens-benchmarking-segment_card`, `div.lens-benchmarking-segment_badge`, `div.div-block-327`
- `0px 999px 999px 0px` — `div#w-node-b73c368c-7661-1661-cfed-8a378f740839-e81726ce.code-style.lens-enrichment-illustration-ray-2`, `div#w-node-b73c368c-7661-1661-cfed-8a378f740847-e81726ce.lens-enrichment-illustration-ray-2.is-inverted`
- `999px` — `div.lens-enrichment-tooltip-ring_inner`, `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e2b-50731e1e.lens-enrichment-tooltip-dot`
- `28px` — `div.lens-security-grid`

**box-shadow**
- `rgb(233, 234, 239) 0px 0px 0px 1px inset` — `div.lens-solution-graph-card.svg-animation-container`, `div.lens-solution-graph-illustration`, `div.lens-benchmarking-segment_badge`
- `rgb(23, 25, 32) 0px 0px 0px 1px inset` — `div.lens-solution-graph-illustration.is-lens`
- `rgba(255, 255, 255, 0.16) 0px 0px 0px 1px inset` — `div.lens-integrations-logo.is-top`, `div.lens-integrations-logo`, `div.lens-integrations-logo.is-bottom`
- `rgb(233, 234, 239) 0px 0px 0px 1px` — `a.button-light.button-stroke`
- `rgb(23, 25, 32) 0px 0px 0px 1px` — `div.cta-block`

**filter**
- `saturate(1.24)` — `div.lens-enrichment-illustration-oval_shape`

**backdrop**
- `blur(5px)` — `div.lightbox-video-trigger`
- `blur(4px)` — `div#integrations-tab-0.lens-integrations-tab-link.is-active`
- `blur(2px)` — `div#integrations-tab-1.lens-integrations-tab-link`, `div#integrations-tab-2.lens-integrations-tab-link`

**opacity**
- `0` — `div.lens-enrichment-tooltip-body`, `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e29-50731e1e.lens-enrichment-tooltip-ring`
- `0.66` — `div.dot-bg`
- `0.25` — `div.div-block-323`
- `0.68` — `div.button-icon-block.icon-right`

**transition**
- `0.2s` — `a.button-dark.button-primary`, `div.lightbox-video-trigger`
- `0.5s cubic-bezier(0.19, 1, 0.22, 1)` — `button.arrow-button`, `div#integrations-tab-0.lens-integrations-tab-link.is-active`, `div#integrations-tab-1.lens-integrations-tab-link`, `div#integrations-tab-2.lens-integrations-tab-link`
- `0.15s` — `a.button-light.button-stroke`
- `0.3s cubic-bezier(0.33, 1, 0.68, 1)` — `div.lens-enrichment-tooltip-body`
- `0.9s cubic-bezier(0.16, 1, 0.3, 1)` — `div#w-node-_968dcc6e-3e86-3aec-6903-51cc50731e29-50731e1e.lens-enrichment-tooltip-ring`

## Assets (local path ↔ element)

| local file | kind | element | natural | displayed @1440 | source URL |
|---|---|---|---|---|---|
| `/assets/pages/swipe-file/68331d86cf0a6a7db433a56d_dot-grid.webp` | bg | `dot-bg` (s0.0) |  | 1440×1364 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68331d86cf0a6a7db433a56d_dot-grid.webp |
| `/assets/pages/lens-creative-analytics/animated-icon-lens.webm` | video | `` (s0.1.0.1.0.0.0.0) | 2000×2000 4.00s | 256×256 | https://publicassets.foreplay.co/animated-icon-lens.webm |
| `/assets/pages/lens-creative-analytics/animated-icon-lens.mov` | video | `` (s0.1.0.1.0.0.0.0) | 2000×2000 4.00s | 256×256 | https://publicassets.foreplay.co/animated-icon-lens.mov |
| `/assets/pages/lens-creative-analytics/682f9f725170de3b3258d310_pi-lens-hq.webp` | img | `product-hero-icon-image` (s0.1.0.1.0.1) | 256×256 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f725170de3b3258d310_pi-lens-hq.webp |
| `/assets/pages/swipe-file/6820c07c2e5b8c350c8e1f4c_hero-empty-mockup.webp` | img | `product-hero-preview-image` (s0.1.0.2.0) | 1440×900 | 1360×850 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6820c07c2e5b8c350c8e1f4c_hero-empty-mockup.webp |
| `/assets/pages/lens-creative-analytics/68338afa127062351d6e99da_product-video-lens-transcode.mp4` | bgvideo | `product-hero-video.w-background-video.w-background-video-atom` (s0.1.0.2.2) |  | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338afa127062351d6e99da_product-video-lens-transcode.mp4 |
| `/assets/pages/lens-creative-analytics/68338afa127062351d6e99da_product-video-lens-transcode.webm` | bgvideo | `product-hero-video.w-background-video.w-background-video-atom` (s0.1.0.2.2) |  | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338afa127062351d6e99da_product-video-lens-transcode.webm |
| `/assets/pages/lens-creative-analytics/68338afa127062351d6e99da_product-video-lens-poster-00001.jpg` | poster | `product-hero-video.w-background-video.w-background-video-atom` (s0.1.0.2.2) |  |  | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338afa127062351d6e99da_product-video-lens-poster-00001.jpg |
| `/assets/pages/lens-creative-analytics/68338afa127062351d6e99da_product-video-lens-poster-00001.jpg` | bg | `` (s0.1.0.2.2.0) |  | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338afa127062351d6e99da_product-video-lens-poster-00001.jpg |
| `/assets/pages/lens-creative-analytics/68338afa127062351d6e99da_product-video-lens-transcode.mp4` | video | `` (s0.1.0.2.2.0) | 1280×668 10.17s | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338afa127062351d6e99da_product-video-lens-transcode.mp4 |
| `/assets/pages/lens-creative-analytics/68338afa127062351d6e99da_product-video-lens-transcode.webm` | video | `` (s0.1.0.2.2.0) | 1280×668 10.17s | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338afa127062351d6e99da_product-video-lens-transcode.webm |
| `/assets/pages/lens-creative-analytics/6835e653eb1107c0c2620fbf_iEUZ_Xb2_400x400.avif` | img | `` (s1.0.0.0.2.1.0.0.0.0.0) | 400×400 | 84×84 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6835e653eb1107c0c2620fbf_iEUZ_Xb2_400x400.avif |
| `/assets/pages/lens-creative-analytics/6811334e209446a735395e88_TBGAMNA75-U04K4GJ1PS6-840aeda5bec0-512.avif` | img | `` (s1.0.0.0.2.1.0.1.0.0.0) | 0×0 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6811334e209446a735395e88_TBGAMNA75-U04K4GJ1PS6-840aeda5bec0-512.avif |
| `/assets/pages/lens-creative-analytics/681132c3a80b172817826701_Viasox - Report - Website.avif` | img | `home-mockup` (s1.0.0.0.2.2.0.0) | 720×673 | 720×680 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/681132c3a80b172817826701_Viasox%20-%20Report%20-%20Website.avif |
| `/assets/pages/lens-creative-analytics/6811336e458136a0c19570fc_Growth Collective - Report - Website.avif` | img | `home-mockup` (s1.0.0.0.2.2.1.0) | 720×673 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6811336e458136a0c19570fc_Growth%20Collective%20-%20Report%20-%20Website.avif |
| `/assets/pages/lens-creative-analytics/gradient-spectrum-optimized.mp4` | video | `` (s2.0.1.0.0.0.0) | 1344×506 2.50s | 1038.4×462 | https://publicassets.foreplay.co/gradient-spectrum-optimized.mp4 |
| `/assets/pages/lens-creative-analytics/682f9f725170de3b3258d310_pi-lens-hq.webp` | img | `lens-integrations-image-image` (s2.0.1.0.2.1.0.1.0) | 256×256 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f725170de3b3258d310_pi-lens-hq.webp |
| `/assets/pages/lens-creative-analytics/68111d8e2cd08ba43e25c8f2_Creative Tests - Mockup - 2.avif` | img | `lens-integrations-mockup-image` (s2.0.2.0.0.0.0.0) | 3250×2000 | 1600×984.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68111d8e2cd08ba43e25c8f2_Creative%20Tests%20-%20Mockup%20-%202.avif |
| `/assets/pages/lens-creative-analytics/68111efbb122dcabfed9eb77_Influencer Comparison - Mockup - 2.avif` | img | `lens-integrations-mockup-image` (s2.0.2.0.1.0.0.0) | 3250×2000 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68111efbb122dcabfed9eb77_Influencer%20Comparison%20-%20Mockup%20-%202.avif |
| `/assets/pages/lens-creative-analytics/68111efb4aca9a2da3e5b251_Trend Analysis - Mockup - 2.avif` | img | `lens-integrations-mockup-image` (s2.0.2.0.2.0.0.0) | 3250×2000 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68111efb4aca9a2da3e5b251_Trend%20Analysis%20-%20Mockup%20-%202.avif |
| `/assets/pages/lens-creative-analytics/67c6cef61d31b32e3dde9251_8e7cb2680b3833f83c61a14e695bfc7e_lens-people.webp` | img | `lens-integrations-people-image` (s2.0.2.1.0) | 1440×886 | 1600×984.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67c6cef61d31b32e3dde9251_8e7cb2680b3833f83c61a14e695bfc7e_lens-people.webp |
| `/assets/pages/lens-creative-analytics/67eeea66467dd9874bef129c_game-illo1.webp` | img | `left-right-section-image` (s3.0.0.0.1.0.0.0) | 560×443 | 560×443.8 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67eeea66467dd9874bef129c_game-illo1.webp |
| `/assets/pages/lens-creative-analytics/67eeea669886a4ee84fc6c9c_game-illo2.webp` | img | `left-right-section-image` (s3.0.0.0.2.0.1.0) | 1440×1141 | 488×386.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67eeea669886a4ee84fc6c9c_game-illo2.webp |
| `/assets/pages/lens-creative-analytics/67d601396d4c7e747e89fdf3_segment-health.webp` | img | `img-full` (s3.0.0.1.1.0.0.0.0) | 440×400 | 220×200 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d601396d4c7e747e89fdf3_segment-health.webp |
| `/assets/pages/lens-creative-analytics/67d60139a79f0c901c5db349_segment-home-&-garden.webp` | img | `img-full` (s3.0.0.1.1.0.1.0.0) | 440×400 | 220×200 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d60139a79f0c901c5db349_segment-home-%26-garden.webp |
| `/assets/pages/lens-creative-analytics/67d60138d1a411f5bd2fa9a8_segment-pets.webp` | img | `img-full` (s3.0.0.1.1.0.2.0.0) | 440×400 | 220×200 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d60138d1a411f5bd2fa9a8_segment-pets.webp |
| `/assets/pages/lens-creative-analytics/67d60138748485a56d5812b5_segment-accessories.webp` | img | `img-full` (s3.0.0.1.1.0.3.0.0) | 440×400 | 220×200 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d60138748485a56d5812b5_segment-accessories.webp |
| `/assets/pages/lens-creative-analytics/67d60138178881123c43aaac_segment-fashion.webp` | img | `img-full` (s3.0.0.1.1.0.4.0.0) | 440×400 | 220×200 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d60138178881123c43aaac_segment-fashion.webp |
| `/assets/pages/lens-creative-analytics/67d601396d4c7e747e89fe11_segment-sporting-goods.webp` | img | `img-full` (s3.0.0.1.1.0.5.0.0) | 440×400 | 220×200 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d601396d4c7e747e89fe11_segment-sporting-goods.webp |
| `/assets/pages/lens-creative-analytics/67d601396d4c7e747e89fdec_segment-food-&-beverage.webp` | img | `img-full` (s3.0.0.1.1.0.6.0.0) | 440×400 | 220×200 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d601396d4c7e747e89fdec_segment-food-%26-beverage.webp |
| `/assets/pages/lens-creative-analytics/67d60138c432e9224ddd91c3_segment-beauty.webp` | img | `img-full` (s3.0.0.1.1.0.7.0.0) | 440×400 | 220×200 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d60138c432e9224ddd91c3_segment-beauty.webp |
| `/assets/pages/lens-creative-analytics/67d60139e9d19b9bec6f9da3_segment-toys-&-hobbies.webp` | img | `img-full` (s3.0.0.1.1.0.8.0.0) | 440×400 | 220×200 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d60139e9d19b9bec6f9da3_segment-toys-%26-hobbies.webp |
| `/assets/pages/lens-creative-analytics/67d60138e9944951698b6c9a_segment-baby.webp` | img | `img-full` (s3.0.0.1.1.0.9.0.0) | 440×400 | 220×200 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d60138e9944951698b6c9a_segment-baby.webp |
| `/assets/pages/lens-creative-analytics/67d60139c5c4b283a4e32e32_segment-automotive.webp` | img | `img-full` (s3.0.0.1.1.0.10.0.0) | 440×400 | 220×200 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d60139c5c4b283a4e32e32_segment-automotive.webp |
| `/assets/pages/lens-creative-analytics/67d6013837ff54b81dc90b9b_segment-electronics.webp` | img | `img-full` (s3.0.0.1.1.0.11.0.0) | 440×400 | 220×200 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d6013837ff54b81dc90b9b_segment-electronics.webp |
| `/assets/pages/lens-creative-analytics/67d6013895de9f5015615e0f_segment-clothing.webp` | img | `img-full` (s3.0.0.1.1.0.12.0.0) | 440×400 | 220×200 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d6013895de9f5015615e0f_segment-clothing.webp |
| `/assets/pages/lens-creative-analytics/67d60138e9944951698b6c80_segment-books.webp` | img | `img-full` (s3.0.0.1.1.0.13.0.0) | 440×400 | 220×200 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d60138e9944951698b6c80_segment-books.webp |
| `/assets/pages/lens-creative-analytics/67d60138b8bfe229f1ca038b_segment-art.webp` | img | `img-full` (s3.0.0.1.1.0.14.0.0) | 440×400 | 220×200 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d60138b8bfe229f1ca038b_segment-art.webp |
| `/assets/pages/lens-creative-analytics/67d5f04eed5716afa723bf49_tooltip-2.webp` | img | `lens-enrichment-tooltip-image` (s4.0.0.1.1.1.0.0.0.0.0.0) | 552×208 | 214.4×83.2 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d5f04eed5716afa723bf49_tooltip-2.webp |
| `/assets/pages/lens-creative-analytics/67d5f04e6bfc757685daf9fd_tooltip-1.webp` | img | `lens-enrichment-tooltip-image` (s4.0.0.1.1.1.1.0.0.0.0.0) | 552×208 | 214.4×83.2 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d5f04e6bfc757685daf9fd_tooltip-1.webp |
| `/assets/pages/lens-creative-analytics/67d5f04fa76aa2b2af723a0e_tooltip-3.webp` | img | `lens-enrichment-tooltip-image` (s4.0.0.1.1.1.2.0.0.0.0.0) | 552×208 | 214.4×83.2 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d5f04fa76aa2b2af723a0e_tooltip-3.webp |
| `/assets/pages/lens-creative-analytics/67d5f04ea79f0c901c510881_tooltip-4.webp` | img | `lens-enrichment-tooltip-image` (s4.0.0.1.2.1.0.0.0.0.0.0) | 552×208 | 214.4×83.2 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d5f04ea79f0c901c510881_tooltip-4.webp |
| `/assets/pages/lens-creative-analytics/67d5f04e5057b3fadc63d8f1_tooltip-5.webp` | img | `lens-enrichment-tooltip-image` (s4.0.0.1.2.1.1.0.0.0.0.0) | 552×208 | 214.4×83.2 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d5f04e5057b3fadc63d8f1_tooltip-5.webp |
| `/assets/pages/lens-creative-analytics/67d5f04f5057b3fadc63d92b_tooltip-6.webp` | img | `lens-enrichment-tooltip-image` (s4.0.0.1.2.1.2.0.0.0.0.0) | 552×208 | 214.4×83.2 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d5f04f5057b3fadc63d92b_tooltip-6.webp |
| `/assets/pages/lens-creative-analytics/67d5f04edef0ff09efcaf290_tooltip-7.webp` | img | `lens-enrichment-tooltip-image` (s4.0.0.1.2.1.3.0.0.0.0.0) | 552×208 | 214.4×83.2 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d5f04edef0ff09efcaf290_tooltip-7.webp |
| `/assets/pages/lens-creative-analytics/67d5c49be9d19b9bec42f1dc_password-protection.webp` | img | `lens-security-card-illustration` (s4.0.1.0.1.0.1.0) | 1439×1184 | 383.3×315.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d5c49be9d19b9bec42f1dc_password-protection.webp |
| `/assets/pages/lens-creative-analytics/67d5c49b6bfc757685b68eac_ip-tracking.webp` | img | `lens-security-card-illustration` (s4.0.1.0.1.1.1.0) | 1439×1184 | 381.3×313.8 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d5c49b6bfc757685b68eac_ip-tracking.webp |
| `/assets/pages/lens-creative-analytics/67d5c49c9a3768e0b81621f5_internal-protection.webp` | img | `lens-security-card-illustration` (s4.0.1.0.1.2.1.0) | 1439×1184 | 383.3×315.5 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67d5c49c9a3768e0b81621f5_internal-protection.webp |
| `/assets/pages/lens-creative-analytics/cta-lens.mp4` | video | `` (s5.0.0.0.1.0.0) | 2000×2000 3.36s | 880×880 | https://publicassets.foreplay.co/cta-lens.mp4 |
| `/assets/682f93b43a94db00dbc45367_iso-lens.webp` | img | `cta-block-icon-image` (s5.0.0.0.2.0) | 0×0 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f93b43a94db00dbc45367_iso-lens.webp |

**Inline SVGs saved** (each distinct inline `<svg>` in page content):

- `/assets/pages/lens-creative-analytics/svg-svg-185ries.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-icon-medium-1aj97ch.svg` — 20×20 in `icon-medium.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-1xjghn2.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-1evn5gy.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-141kc2v.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-ood670.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-1ei9p8f.svg` — 302×178.5 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-10zvx5f.svg` — 302×178.5 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-1uy1lie.svg` — 302×178.5 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-1120jqm.svg` — 302×178.5 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-b9vptl.svg` — 302×178.5 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-1178rfo.svg` — 18×18 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-gwcwos.svg` — 18×18 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-1io048a.svg` — 472×367.2 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-p2ad2f.svg` — 472×367.2 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-1vbif87.svg` — 85.6×85.6 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-olxbga.svg` — 85.6×85.6 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-1hx56xh.svg` — 85.6×85.6 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-wpumvq.svg` — 85.6×85.6 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-rfloe7.svg` — 85.6×85.6 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-1k1s7jn.svg` — 85.6×85.6 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-icon-20-yy4sag.svg` — 20×20 in `icon-20.w-embed`
- `/assets/pages/lens-creative-analytics/svg-icon-20-1m46g5i.svg` — 20×20 in `icon-20.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-1uan6ha.svg` — 20×20 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-qwky2l.svg` — 504.4×516.4 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-j5qqo8.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-sgy1nb.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-167k2wx.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-bjw7ed.svg` — 0×0 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-nk7njm.svg` — 423.5×250.3 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-efvv6x.svg` — 423.5×250.3 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-1l13xvk.svg` — 423.5×250.3 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-1wgfbw0.svg` — 423.5×250.3 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-11tz5fb.svg` — 423.5×250.3 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-s6cry0.svg` — 438×258.8 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-s7bqj5.svg` — 438×258.8 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-pjioip.svg` — 438×258.8 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-i20xti.svg` — 438×258.8 in `svg.w-embed`
- `/assets/pages/lens-creative-analytics/svg-svg-yl6kl9.svg` — 438×258.8 in `svg.w-embed`

## Motion

### Webflow IX2 (from `Webflow.require("ix2").store.getState().ixData`, filtered to elements on this page outside nav/footer)

- **e-189** SCROLLING_IN_VIEW → GENERAL_CONTINUOUS_ACTION list `a-71` (Product / Hero Parallax) on `product-hero-animation-trigger` ×1; mq ["main","medium"]; config [{"continuousParameterGroupId":"a-71-p","smoothing":0,"startsEntering":false,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}]

- `a-71` "Product / Hero Parallax"
  - continuous SCROLL_PROGRESS:
    - @0%: TRANSFORM_SCALE .product-hero-sticky {"xValue":1,"yValue":1,"locked":true} ‖ TRANSFORM_MOVE .product-hero-sticky {"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"} ‖ STYLE_OPACITY .product-hero-sticky {"value":1,"unit":""}
    - @100%: TRANSFORM_MOVE .product-hero-sticky {"yValue":-33,"xUnit":"PX","yUnit":"%","zUnit":"PX"} ease inOutCubic ‖ TRANSFORM_SCALE .product-hero-sticky {"xValue":0.75,"yValue":0.75,"locked":true} ‖ STYLE_OPACITY .product-hero-sticky {"value":0,"unit":""}

### Running Web Animations after load (`document.getAnimations()`, page content only)

- none

### Widgets / embeds detected

- s0.1.0.1.0.0.0 `div.code-video.w-embed` 
- s0.1.0.2.2 `div.product-hero-video.w-background-video.w-background-video-atom` {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338afa127062351d6e99da_product-video-lens-poster-00001.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
- s0.1.0.2.3.0 `a.lightbox-video-main.w-inline-block.w-lightbox` 
- s0.1.0.2.3.0.0.0.0 `div.icon-medium.w-embed` 
- s1.0.0.0.1.3 `div.code-style.w-embed` 
- s2.0.1.0.0.0 `div.code-video.w-embed` 
- s2.0.1.0.2.1.0.0.0 `div.code-video.w-embed` 
- s2.0.2.2.0.0.0 `div.icon-20.w-embed` 
- s2.0.2.2.1.0.0 `div.icon-20.w-embed` 
- s3.0.0.1.3 `div.code-style.w-embed` 
- s4.0.0.1.1.2 `div.code-style.w-embed` 
- s5.0.0.0.1.0 `div.code-video.w-embed` 

### Page-level `<style>` embeds (verbatim CSS)

From s1.0.0.0.1.3:
```css
.svg-animate-path {
    transition: stroke-dashoffset 0.2s linear;
  }

  .svg-animate-clip {
    transition: clip-path 0.2s linear;
  }
```
From s3.0.0.1.3:
```css
.lens-benchmarking {
	--gap: 16px;
} 

.carousel-ul {
	gap: var(--gap);
}
```
From s4.0.0.1.1.2:
```css
.lens-enrichment-tooltip-wrapper {
  visibility: hidden;
}

.lens-enrichment-tooltip-ring {
	opacity: 0;
  transform: scale(0.8);
  transition: all 900ms cubic-bezier(0.16, 1, 0.3, 1);
} 

.lens-enrichment-tooltip-body {
	opacity: 0;
  transform: translateY(24px) scale(0.8);
  transition: all 300ms cubic-bezier(0.33, 1, 0.68, 1);
}

.lens-enrichment-tooltip:hover .lens-enrichment-tooltip-wrapper, .lens-enrichment-tooltip:focus-visible .lens-enrichment-tooltip-wrapper {
	visibility: visible;
}

.lens-enrichment-tooltip:hover .lens-enrichment-tooltip-body, .lens-enrichment-tooltip:focus-visible .lens-enrichment-tooltip-body {
 transform: translateY(0px);
	opacity: 1;
}

.lens-enrichment-tooltip:hover .lens-enrichment-tooltip-ring {
	transform: scale(1);
	opacity: 1;
}
```

## CSS rules for classes not used on the homepage (verbatim from `foreplay-3-0.shared.850e08b99.min.css`)

New classes: `product-hero` `product-hero-animation-trigger` `product-hero-sticky` `product-hero-icon` `product-hero-icon-video` `product-hero-icon-image` `product-hero-content` `hero-text` `max-w-lg` `text-white-84` `product-hero-preview` `product-hero-preview-image` `product-hero-preview-underlay` `product-hero-video` `video-lightbox-holder` `lightbox-video-main` `lightbox-video-trigger` `video-lightbox-button` `video-lightbox-text` `lens-solution-icons` `lens-solution-icons-card` `lens-solution-text` `text-solid-700` `lens-solution-graph` `text-pretty` `lens-solution-graph-grid` `lens-solution-graph-card` `svg-animation-container` `text-solid-800` `lens-solution-graph-description` `lens-solution-graph-illustration` `vertical-line-container` `vertical-line` `bg-current` `horizontal-line-container` `horizontal-line` `lens-solution-graph-svg` `lens-solution-legend` `lens-solution-legend-badge` `dot` `is-teal` `is-red` `is-lens` `div-block-323` `div-block-323-copy` `div-block-324` `text-body-xs` `is-white` `is-rainbow` `mx-auto` `lens-solution-report-main` `lens-solution-report-panes` `lens-solution-report-pane` `lens-solution-report-quote-inner` `lens-solution-report-avatar` `lens-solution-report-quote-text` `flex-1` `lens-solution-report-position` `text-solid-300` `lens-solution-report-controls` `arrow-button` `lens-integrations` `lens-integrations-illustration` `lens-integrations-gradient-spectrum` `lens-integrations-path-container` `lens-integrations-path` `lens-integrations-illustration-layout` `lens-integrations-illustration-left` `lens-integrations-logo` `is-top` `is-bottom` `lens-integrations-icon-container` `lens-integrations-icon` `lens-integrations-video` `lens-integrations-image` `lens-integrations-image-image` `lens-integrations-illustration-right` `lens-integrations-tab` `lens-integrations-tab-panes` `lens-integrations-tab-pane` `lens-integrations-mockup-wrapper` `lens-integrations-mockup` `lens-integrations-mockup-image` `lens-integrations-people` `lens-integrations-people-image` `lens-integrations-tab-links` `lens-integrations-tab-link` `icon-20` `lens-gamification` `left-right-section` `left-right-section-image-wrapper` `left-right-section-image` `left-right-section-content` `button-stroke` `lens-benchmarking` `self-center` `lens-benchmarking-dynamic-grid` `carousel-ul` `carousel-li` `lens-benchmarking-segment_card` `img-full` `lens-benchmarking-segment-layout` `lens-benchmarking-static_grid` `rtl` `lens-benchmarking-segment_badge` `mobile-landscape-text-label-s` `lens-benchmarking-segment_label` `is-green` `lens-enrichment-illustration-ray-2` `lens-enrichment-tooltip-image` `div-block-328` `lens-enrichment-tooltip-dot_container` `lens-enrichment-tooltip-ring` `lens-enrichment-tooltip-ring_inner` `lens-enrichment-tooltip-dot` `text-tooltip` `lens-enrichment-overlay_line` `cta` `cta-block` `cta-block-content` `flex-col-gap-2` `mobile-landscape-text-display-h4` `mobile-landscape-text-body-n` `flex-col-gap-3` `no-cc-required` `cta-block-animation` `cta-block-icon` `cta-block-icon-image`

```css
.old__section.black.cta { background-image: radial-gradient(circle farthest-side at 10% 100%,#10b98145,#3f8cf700 48%),radial-gradient(circle farthest-side at 90% 100%,#3f8cf778,#b331b900 66%),linear-gradient(to bottom,var(--black),var(--black)); padding-top: 5em; padding-bottom: 5em; }
.old__section.black.cta.brief { background-image: radial-gradient(circle farthest-side at 90% 100%,#10b98173,#b331b900 66%),linear-gradient(to bottom,var(--black),var(--black)); }
.old__section.black.cta.discovery { background-image: radial-gradient(circle farthest-side at 90% 100%,#7c3aed73,#b331b900 66%),linear-gradient(to bottom,var(--black),var(--black)); }
.icon-20 { width: 20px; height: 20px; }
.icon-20.flip { transform: rotate(180deg); }
.product-hero-content { gap: 28px; flex-flow: column; justify-content: flex-start; align-items: center; display: flex; }
.hero-text { gap: 16px; flex-flow: column; justify-content: flex-start; align-items: center; max-width: 900px; display: flex; }
.max-w-lg { max-width: 512px; }
.lens-integrations { flex-flow: column; padding-top: 108px; padding-bottom: 108px; display: flex; overflow: hidden; }
.lens-integrations-tab { z-index: 2; margin-top: 24px; position: relative; }
.lens-integrations-tab-links { z-index: 10; gap: 12px; grid-template-rows: auto auto; grid-template-columns: 1fr 1fr 1fr; grid-auto-columns: 1fr; justify-content: center; align-items: center; max-width: min(100vw, 1080px); margin-left: auto; margin-right: auto; padding: 8px; display: flex; position: relative; }
.lens-integrations-tab-panes { flex-flow: column; justify-content: flex-start; align-items: center; margin-bottom: -12%; display: flex; }
.lens-integrations-tab-pane { aspect-ratio: 1953 / 1202; display: none; }
.lens-integrations-tab-pane.is-active { display: flex; }
.lens-integrations-tab-link { gap: 5px; border: 1px solid var(--_lens---solid-700); backdrop-filter: blur(2px); color: rgba(255, 255, 255, 0.56); text-align: center; cursor: pointer; background-color: rgba(0, 0, 0, 0); border-radius: 10px; justify-content: center; align-items: center; padding: 8px 12px; transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1); display: flex; }
.lens-integrations-tab-link:hover { background-color: var(--_lens---neutral-800); }
.lens-integrations-tab-link:active { box-shadow: rgba(255, 255, 255, 0.12) 0px 0px 0px 1px; }
.lens-integrations-tab-link:focus-visible, .lens-integrations-tab-link[data-wf-focus-visible] { box-shadow: 0 0 0 2px var(--_lens---background),0 0 0 3px #ffffff52; }
.lens-integrations-tab-link.w--current { color: rgb(255, 255, 255); background-color: rgba(255, 255, 255, 0.2); }
.lens-integrations-tab-link.is-active { background-color: var(--_lens---neutral-700); backdrop-filter: blur(4px); color: rgb(255, 255, 255); border-width: 0px; }
.lens-integrations-icon { flex: 0 0 auto; width: 200%; height: 200%; position: relative; top: -1px; left: 3px; }
.lens-integrations-illustration { z-index: 2; aspect-ratio: 944 / 368; justify-content: center; align-items: center; width: 100%; max-width: 944px; margin: 88px auto 0px; display: flex; position: relative; }
.lens-integrations-logo { background-color: var(--_lens---background); aspect-ratio: 1 / 1; border-radius: 20%; justify-content: center; align-items: center; height: 23.2558%; display: flex; box-shadow: rgba(255, 255, 255, 0.16) 0px 0px 0px 1px inset; }
.lens-integrations-illustration-layout { z-index: 5; justify-content: space-between; align-items: stretch; max-width: 944px; margin-left: auto; margin-right: auto; display: flex; position: absolute; inset: 0%; }
.lens-integrations-illustration-left { flex-flow: column; justify-content: space-between; align-items: flex-start; display: flex; }
.lens-integrations-illustration-right { flex-flow: column; justify-content: space-between; align-items: flex-end; display: flex; }
.lens-integrations-icon-container { object-fit: cover; aspect-ratio: 1 / 1; border-radius: 21%; justify-content: center; align-self: center; align-items: center; height: 50%; display: flex; overflow: hidden; }
.lens-integrations-path-container { z-index: 2; justify-content: center; align-items: center; width: 100%; height: 100%; display: flex; position: relative; }
.lens-integrations-path { width: 50%; height: 100%; }
.lens-integrations-gradient-spectrum { z-index: 1; transform-origin: 50% 0px; transform-style: preserve-3d; position: absolute; top: 50%; transform: scaleY(1.2); }
.lens-integrations-mockup { z-index: 2; gap: 16px; grid-template-rows: auto; grid-template-columns: 1fr; grid-auto-columns: 1fr; justify-content: center; align-items: flex-start; display: grid; position: relative; }
.lens-integrations-mockup-image { aspect-ratio: 1953 / 1202; width: 100%; max-width: none; height: auto; }
.lens-integrations-mockup-wrapper { flex-flow: column; justify-content: flex-start; align-items: center; display: flex; }
.lens-integrations-people-image { z-index: 5; aspect-ratio: 1953 / 1202; width: 100%; max-width: 1993px; height: auto; }
.lens-benchmarking { gap: 24px; color: var(--_lens---solid-900); flex-flow: column; padding-top: 24px; padding-bottom: 108px; display: flex; overflow: hidden; }
.lens-solution-icons { gap: 16px; grid-template-rows: auto; grid-template-columns: 1fr 1fr 1fr 1fr; grid-auto-columns: 1fr; padding-top: 80px; padding-bottom: 80px; display: grid; }
.lens-solution-graph { gap: 36px; text-align: center; flex-flow: column; justify-content: flex-start; align-items: stretch; max-width: 940px; margin-left: auto; margin-right: auto; padding-top: 80px; padding-bottom: 80px; display: flex; }
.lens-solution-icons-card { gap: 12px; flex-flow: column; justify-content: flex-start; align-items: center; padding-left: 8px; padding-right: 8px; display: flex; }
.lens-solution-text { gap: 4px; text-align: center; flex-flow: column; display: flex; }
.text-solid-300 { color: var(--_lens---solid-300); }
.text-solid-700 { color: var(--_lens---solid-700); }
.text-solid-800 { color: var(--_lens---solid-800); }
.lens-solution-graph-grid { gap: 16px; grid-template-rows: auto; grid-template-columns: 1fr 1fr; grid-auto-columns: 1fr; align-self: stretch; display: grid; }
.mx-auto { margin-left: auto; margin-right: auto; }
.lens-solution-graph-card { gap: 8px; box-shadow: inset 0 0 0 1px var(--_lens---solid-50); color: var(--_lens---solid-500); border-radius: 20px; flex-flow: column; padding: 32px 12px 12px; display: flex; }
.lens-solution-graph-card.is-lens { background-color: var(--_lens---background); box-shadow: none; color: var(--_lens---neutral-100); }
.text-pretty { text-wrap: pretty; }
.lens-solution-graph-description { text-wrap: balance; max-width: 328px; margin-left: auto; margin-right: auto; padding-top: 4px; padding-bottom: 20px; }
.lens-solution-graph-illustration { z-index: 5; box-shadow: inset 0 0 0 1px var(--_lens---solid-50); color: var(--_lens---solid-50); aspect-ratio: 22 / 13; border-radius: 8px; position: relative; overflow: hidden; }
.lens-solution-graph-illustration.is-lens { box-shadow: inset 0 0 0 1px var(--_lens---solid-700); color: var(--_lens---solid-700); }
.lens-solution-legend { gap: 8px; justify-content: center; align-items: center; display: flex; }
.lens-solution-legend-badge { gap: 8px; justify-content: flex-start; align-items: center; padding: 8px 12px 8px 8px; display: flex; }
.dot { border-radius: 99px; width: 8px; height: 8px; }
.dot.is-red { background-color: var(--_lens---red); }
.dot.is-rainbow { background-image: linear-gradient(45deg,var(--_lens---red),var(--_lens---yellow)17%,var(--_lens---lime)36%,var(--_lens---teal)59%,var(--_lens---sky)87%,var(--_lens---ocean)); }
.dot.is-white { background-color: var(--_lens---neutral-0); }
.dot.is-teal { background-color: var(--_lens---teal); }
.vertical-line { width: 1px; height: 100%; }
.vertical-line-container { pointer-events: none; justify-content: space-between; width: 100%; height: 100%; display: flex; position: absolute; inset: 0%; }
.horizontal-line-container { pointer-events: none; flex-flow: column; justify-content: space-between; width: 100%; height: 100%; display: flex; position: absolute; inset: 0%; }
.horizontal-line { width: 100%; height: 1px; }
.div-block-323 { background-image: linear-gradient(90deg,var(--_lens---red),var(--_lens---yellow)20%,var(--_lens---lime)43%,var(--_lens---teal)64%,var(--_lens---sky)84%,var(--_lens---ocean)); opacity: 0.25; width: 100%; height: 20%; position: absolute; inset: auto 0% 0%; }
.div-block-323-copy { background-image: linear-gradient(rgba(33, 34, 38, 0.5), rgb(33, 34, 38)); justify-content: center; align-items: center; width: 100%; height: 20%; display: flex; position: absolute; inset: auto 0% 0%; }
.div-block-324 { color: rgba(255, 255, 255, 0.54); background-color: rgba(255, 255, 255, 0.05); border-radius: 4px; padding: 1px 6px; }
.text-body-xs { font-size: 0.75rem; line-height: 1.25rem; }
.lens-solution-graph-svg { z-index: 2; position: absolute; inset: 0%; }
.lens-solution-report-position { gap: 12px; justify-content: flex-start; align-items: center; display: flex; }
.lens-solution-report-quote-inner { gap: 12px; grid-template-rows: auto auto; grid-template-columns: auto 1fr; grid-auto-columns: 1fr; place-items: start; display: grid; }
.lens-solution-report-avatar { background-color: var(--_lens---solid-25); aspect-ratio: 1 / 1; border-radius: 10px; width: 84px; height: 84px; overflow: hidden; }
.flex-1 { flex: 1 1 0%; }
.lens-solution-report-quote-text { flex-flow: column; display: flex; }
.lens-solution-report-controls { gap: 8px; display: flex; }
.arrow-button { width: 36px; height: 36px; color: var(--_lens---solid-600); border-radius: 4px; justify-content: center; align-items: center; transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1); display: flex; }
.arrow-button:hover { background-color: var(--_lens---solid-600); color: var(--_lens---solid-0); }
.self-center { align-self: center; }
.carousel-ul { flex-flow: row; grid-template-rows: auto auto; grid-template-columns: 1fr 1fr; grid-auto-columns: 1fr; justify-content: center; align-items: center; margin: 0px auto; padding: 0px; display: flex; }
.lens-benchmarking-static_grid { grid-template-rows: auto auto; grid-template-columns: 1fr 1fr; grid-auto-columns: 1fr; }
.lens-benchmarking-segment_badge { gap: 16px; width: 220px; box-shadow: inset 0 0 0 1px var(--_lens---solid-50); border-radius: 12px; justify-content: flex-start; align-items: center; padding: 16px; display: flex; }
.lens-benchmarking-segment_card { border-radius: 12px; width: 220px; height: 200px; position: relative; overflow: hidden; }
.lens-benchmarking-segment_label { color: rgb(7, 36, 126); background-color: rgb(240, 247, 255); border-radius: 4px; padding-left: 6px; padding-right: 6px; }
.lens-benchmarking-segment_label.is-green { color: rgb(24, 78, 68); background-color: rgb(239, 254, 250); }
.lens-enrichment-overlay_line { background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.24) 25%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.24) 75%, rgba(255, 255, 255, 0)); flex: 1 1 0%; width: 2px; margin-top: -32px; margin-bottom: -32px; }
.lens-enrichment-tooltip-dot { z-index: 2; background-color: var(--_lens---solid-0); border-radius: 999px; width: 8px; height: 8px; position: relative; }
.lens-enrichment-tooltip-ring { z-index: 1; background-image: linear-gradient(rgb(231, 127, 110), rgb(255, 200, 82) 20%, rgb(210, 227, 130) 40%, rgb(124, 221, 181) 60%, rgb(93, 188, 229) 80%, rgb(93, 143, 229)); border-radius: 99px; width: 16px; height: 16px; padding: 1px; position: relative; }
.lens-enrichment-tooltip-dot_container { gap: 16px; grid-template-rows: auto; grid-template-columns: 1fr; grid-auto-columns: 1fr; place-content: center; place-items: center; width: 16px; height: 16px; display: grid; }
.lens-enrichment-tooltip-ring_inner { background-color: var(--_lens---background); border-radius: 999px; width: 100%; height: 100%; }
.text-tooltip { font-weight: 500; }
.div-block-328 { text-align: center; justify-content: center; align-items: center; padding: 12px 16px; display: flex; }
.lens-enrichment-tooltip-image { object-fit: contain; width: 100%; height: 100%; }
.carousel-li { flex: 0 0 auto; }
.img-full { object-fit: cover; width: 100%; height: 100%; }
.flex-col-gap-2 { gap: 8px; flex-flow: column; justify-content: flex-start; align-items: center; display: flex; }
.flex-col-gap-2.align-start { justify-content: flex-start; align-items: flex-start; }
.lens-benchmarking-dynamic-grid { transform-style: preserve-3d; }
.lens-benchmarking-segment-layout { background-image: linear-gradient(rgba(2, 3, 8, 0), rgba(2, 3, 8, 0.8)); justify-content: flex-start; align-items: flex-end; height: 80px; padding: 16px; display: flex; position: absolute; inset: auto 0% 0%; }
.button-dark.button-stroke { background-color: var(--_lens---background); box-shadow: 0 0 0 1px var(--_lens---neutral-600); color: var(--_lens---solid-0); }
.button-dark.button-stroke:hover { background-color: var(--_lens---neutral-700); box-shadow: 0 0 0 0 var(--_lens---neutral-600); }
.button-dark.button-stroke:active { background-color: var(--_lens---neutral-500); color: var(--_lens---neutral-0); }
.button-dark.button-stroke:focus { box-shadow: 0 0 0 2px var(--_lens---background),0 0 0 3px var(--_lens---neutral-0); }
.button-light.button-stroke { background-color: var(--_lens---solid-0); box-shadow: 0 0 0 1px var(--_lens---solid-50); color: var(--_lens---solid-900); }
.button-light.button-stroke:hover { background-color: var(--_lens---solid-25); box-shadow: 0 0 0 0 var(--_lens---solid-50); }
.button-light.button-stroke:active { background-color: var(--_lens---solid-50); }
.button-light.button-stroke:focus { box-shadow: 0 0 0 2px white,0 0 0 3px var(--_lens---solid-900); }
.cta { padding-top: 80px; padding-bottom: 80px; }
.cta-block { background-color: var(--_lens---background); box-shadow: 0 0 0 1px var(--_lens---solid-700); border-radius: 36px; padding: 84px; position: relative; overflow: hidden; }
.flex-col-gap-3 { gap: 12px; flex-flow: column; justify-content: center; align-items: flex-start; display: flex; }
.cta-block-content { z-index: 1; gap: 32px; flex-flow: column; max-width: 66%; display: flex; position: relative; }
.cta-block-animation { z-index: 0; mix-blend-mode: lighten; width: 880px; height: 880px; position: absolute; inset: -50% -25% 0% auto; }
.product-hero-preview-image { z-index: 2; aspect-ratio: 16 / 10; pointer-events: none; width: 100%; height: auto; position: relative; }
.lens-gamification { gap: 180px; flex-flow: column; padding-top: 108px; padding-bottom: 108px; display: flex; }
.product-hero-preview-underlay { background-image: linear-gradient(0deg,var(--_lens---background)75%,#02030800); pointer-events: none; width: 100vw; position: absolute; inset: -12% auto 0%; }
.lens-enrichment-illustration-ray-2 { z-index: 3; border: 1px solid var(--_lens---neutral-800); background-image: linear-gradient(270deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0)); border-top-right-radius: 999px; border-bottom-right-radius: 999px; width: 58.8889%; height: 100%; display: flex; position: relative; }
.lens-solution-report-pane { display: none; }
.lens-solution-report-pane.is-active { display: block; }
.lens-solution-report-main { gap: 40px; flex-flow: column; display: flex; }
.product-hero-animation-trigger { pointer-events: none; height: 100vh; position: absolute; inset: -72px 0% auto; }
.left-right-section { gap: 24px; grid-template-rows: auto; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-auto-columns: 1fr; place-items: center; display: flex; }
.left-right-section-content { gap: 32px; flex-flow: column; justify-content: center; align-items: flex-start; display: flex; }
.left-right-section-image-wrapper { flex: 1 1 0%; width: 100%; padding-left: 16px; padding-right: 16px; }
.left-right-section-image { border-radius: 20px; }
.product-hero-preview { aspect-ratio: 16 / 10; perspective: 1000px; transform-origin: 50% center; flex-flow: column; justify-content: flex-start; align-self: stretch; align-items: center; margin-top: 52px; margin-bottom: -48px; display: flex; position: relative; }
.product-hero { text-align: center; flex-flow: column; justify-content: flex-start; align-items: center; padding-top: 10px; padding-bottom: 0px; display: flex; }
.product-hero.mobile-app-hero { padding-bottom: 30px; }
.product-hero-sticky { flex-flow: column; justify-content: flex-start; align-items: center; display: flex; position: sticky; top: 100px; }
.product-hero-icon { width: 256px; height: 256px; margin-top: -40px; margin-bottom: -24px; }
.product-hero-video { z-index: 1; background-color: var(--_lens---background); aspect-ratio: 1400 / 730; width: 77.8%; height: auto; transform-style: preserve-3d; justify-content: center; align-items: center; margin: 0px; padding: 0px; display: flex; position: absolute; top: 6.6%; left: 11%; overflow: hidden; transform: rotateX(7deg) rotateY(0deg) rotate(0deg); }
.lens-integrations-people { z-index: 5; flex-flow: column; justify-content: flex-start; align-items: center; width: 100%; display: flex; position: absolute; inset: 0px; }
.product-hero-icon-image, .lens-integrations-image { display: none; }
.cta-block-icon-image { display: none; }
.video-lightbox-holder { z-index: 2; justify-content: center; align-items: center; display: flex; position: absolute; inset: 0%; }
.lightbox-video-trigger { gap: 10px; backdrop-filter: blur(5px); background-color: rgba(0, 0, 0, 0.84); border-radius: 16px; justify-content: flex-start; align-items: center; padding: 8px; transition: 0.2s; display: flex; }
.lightbox-video-trigger:hover { background-color: rgba(0, 0, 0, 0.9); }
.video-lightbox-button { background-color: rgba(255, 255, 255, 0.12); border-radius: 8px; justify-content: center; align-items: center; width: 52px; height: 52px; display: flex; }
.video-lightbox-text { flex-flow: column; align-items: flex-start; padding-right: 4px; display: flex; }
.lightbox-video-main { margin-top: -120px; }
.no-cc-required { display: none; }
.radio_color.is-green { background-color: rgb(67, 162, 71); background-image: linear-gradient(rgba(0, 0, 0, 0.12), rgba(255, 255, 255, 0.12)); }
.radio_color.is-white { background-color: rgb(255, 255, 255); }
.button-jumpstart.button-stroke { background-color: var(--_lens---solid-0); box-shadow: 0 0 0 1px var(--_lens---solid-50); color: var(--_lens---solid-900); }
.button-jumpstart.button-stroke:hover { background-color: var(--_lens---solid-25); box-shadow: 0 0 0 0 var(--_lens---solid-50); }
.button-jumpstart.button-stroke:active { background-color: var(--_lens---solid-50); }
.button-jumpstart.button-stroke:focus { box-shadow: 0 0 0 2px white,0 0 0 3px var(--_lens---solid-900); }
@media screen and (min-width: 1280px) {
  .old__section.black.cta { padding-top: 10em; padding-bottom: 10em; }
  .lens-integrations-tab { margin-top: 20px; margin-left: -80px; margin-right: -80px; }
  .lens-integrations-tab-links { gap: 4px; grid-template-rows: auto; grid-template-columns: 1fr 1fr 1fr; max-width: 1080px; }
}
@media screen and (min-width: 1440px) {
  .lens-integrations-tab { margin-top: -24px; }
  .lens-integrations-gradient-spectrum { transform: scale(1.1, 1.3); }
  .lens-integrations-people-image { margin-left: auto; margin-right: auto; }
}
@media screen and (min-width: 1920px) {
  .lens-integrations-tab { z-index: 2; }
  .lens-integrations-tab-links { z-index: 5; }
  .lens-integrations-tab-panes { margin-bottom: -280px; }
  .lens-integrations-mockup-wrapper { max-width: 1993px; }
  .lens-integrations-people-image { margin-left: auto; margin-right: auto; }
}
@media screen and (max-width: 991px) {
  .lens-integrations { padding-top: 96px; padding-bottom: 96px; }
  .lens-integrations-tab { margin-top: 0px; }
  .lens-integrations-tab-links { z-index: 10; grid-template-columns: 1fr; padding-left: 32px; padding-right: 32px; }
  .lens-integrations-tab-pane { margin-left: -20%; margin-right: -20%; }
  .lens-integrations-illustration { width: auto; margin-top: 64px; margin-left: 0px; margin-right: 0px; }
  .lens-integrations-path { flex: 0 1 auto; }
  .lens-integrations-people-image { width: auto; height: 100%; }
  .lens-benchmarking { padding-bottom: 96px; }
  .lens-solution-report-position { gap: 4px; flex-flow: column; justify-content: center; align-items: flex-start; }
  .carousel-ul { grid-template-columns: 1fr 1fr 1fr; }
  .lens-benchmarking-static_grid { grid-template-columns: 1fr 1fr 1fr; justify-content: center; align-items: center; margin-left: 0px; margin-right: 0px; display: flex; }
  .lens-benchmarking-segment_badge { gap: 8px; width: 180px; }
  .lens-benchmarking-segment_card { width: 180px; height: 160px; }
  .cta-block { padding: 64px 64px 0px; }
  .cta-block-content { flex-flow: column; max-width: none; }
  .cta-block-animation { width: 440px; height: 440px; margin-top: -100px; margin-bottom: -100px; display: none; position: relative; left: -20%; right: 0%; }
  .lens-solution-report-main { order: 1; padding-bottom: 40px; }
  .left-right-section { gap: 40px; display: flex; }
  .product-hero-preview { overflow: clip; }
  .product-hero-icon { width: auto; height: auto; margin-top: 0px; margin-bottom: 0px; padding: 32px; }
  .product-hero-video { width: 77.5%; left: 11%; transform: rotateX(9deg) rotateY(0deg) rotate(0deg); }
  .product-hero-icon-image { width: 128px; height: 128px; display: block; }
  .product-hero-icon-video { display: none; }
  .cta-block-icon { flex-flow: column; justify-content: center; align-items: center; display: flex; }
  .cta-block-icon-image { width: 300px; max-width: none; height: 300px; display: block; }
  .lightbox-video-main { margin-top: -95px; }
}
@media screen and (max-width: 767px) {
  .text-body-l.mobile-landscape-text-body-n { font-size: 1rem; line-height: 1.5rem; }
  .text-label-m.mobile-landscape-text-label-s { font-size: 0.875rem; }
  .text-display-h3.mobile-landscape-text-display-h4 { font-size: 1.75rem; line-height: 2.25rem; }
  .lens-integrations { padding-top: 80px; padding-bottom: 80px; overflow: hidden; }
  .lens-integrations-tab { margin-top: 24px; }
  .lens-integrations-tab-links { padding-left: 24px; padding-right: 24px; top: 100%; bottom: auto; }
  .lens-integrations-tab-pane { margin-left: -32%; margin-right: -32%; }
  .lens-integrations-tab-link.is-active { border-width: 1px; border-color: rgba(0, 0, 0, 0); }
  .lens-integrations-icon { flex: 1 1 0%; justify-content: center; align-items: center; width: 100%; height: 100%; display: flex; position: static; top: 0px; left: 0px; }
  .lens-integrations-illustration { width: auto; margin-left: -96px; margin-right: -96px; }
  .lens-integrations-illustration-left { flex: 1 1 0%; padding-left: 108px; }
  .lens-integrations-illustration-right { flex: 1 1 0%; padding-right: 108px; }
  .lens-integrations-icon-container { flex: 1 1 0%; height: 100%; }
  .lens-integrations-mockup-wrapper { overflow: hidden visible; }
  .lens-benchmarking { gap: 20px; padding-top: 80px; padding-bottom: 80px; }
  .lens-solution-icons { row-gap: 40px; grid-template-rows: auto auto; grid-template-columns: 1fr 1fr; }
  .lens-solution-graph { max-width: 480px; padding-top: 80px; padding-bottom: 64px; }
  .lens-solution-graph-grid { grid-template-columns: 1fr; }
  .lens-solution-report-avatar { width: 64px; height: 64px; }
  .arrow-button { flex: 1 1 0%; }
  .carousel-ul, .lens-benchmarking-static_grid { grid-template-columns: 1fr 1fr; }
  .lens-benchmarking-segment_badge { width: 160px; padding: 12px; }
  .lens-benchmarking-segment_card { width: 160px; height: 144px; }
  .lens-enrichment-overlay_line { width: 1.5px; margin-top: -40px; margin-bottom: -40px; }
  .lens-enrichment-tooltip-dot { width: 6px; height: 6px; }
  .lens-enrichment-tooltip-ring { width: 12px; height: 12px; }
  .text-tooltip { font-size: 0.875rem; line-height: 1.25rem; }
  .lens-enrichment-tooltip_layer.is-inverted.is-lens { right: 23%; }
  .cta-block { padding: 48px 40px 0px; }
  .product-hero-preview-image { width: 100%; margin-left: 0px; margin-right: 0px; }
  .lens-gamification { gap: 108px; }
  .product-hero-preview-underlay { display: none; }
  .left-right-section { gap: 24px; flex-flow: column; grid-template-rows: auto auto; grid-template-columns: 1fr; align-items: start; }
  .left-right-section-image-wrapper { padding-left: 0px; padding-right: 0px; }
  .left-right-section-image { width: 100%; }
  .product-hero-preview { width: 100%; margin-left: 0px; margin-right: 0px; }
  .product-hero { padding-top: 64px; }
  .product-hero-sticky { position: relative; top: 0px; }
  .product-hero-video { width: 77.7%; }
  .lens-integrations-video { width: 100%; height: 100%; display: none; }
  .lens-integrations-image { justify-content: center; align-items: center; display: flex; }
  .lens-integrations-image-image { width: 128px; height: 128px; margin-left: auto; margin-right: auto; }
  .cta-block-icon { margin-top: 24px; }
  .cta-block-icon-image { margin-bottom: -64px; }
  .dow.mobile-landscape-text-label-s, .dom.mobile-landscape-text-label-s { font-size: 0.875rem; }
}
@media screen and (max-width: 479px) {
  .old__section.black.cta { padding-top: 5em; padding-bottom: 5em; }
  .product-hero-content { gap: 24px; padding-bottom: 24px; position: relative; }
  .hero-text { gap: 12px; }
  .lens-integrations-tab { margin-top: -24px; }
  .lens-integrations-tab-links { flex-flow: column; grid-template-columns: 1fr; align-items: stretch; }
  .lens-integrations-tab-panes { margin-bottom: -16%; }
  .lens-integrations-tab-pane { margin-left: -36%; margin-right: -36%; }
  .lens-integrations-icon { width: 100%; height: 100%; }
  .lens-integrations-illustration { margin-top: 48px; margin-left: 0px; margin-right: 0px; }
  .lens-integrations-logo { background-color: var(--_lens---background); height: 28%; }
  .lens-integrations-illustration-left { z-index: 2; padding-left: 0px; position: relative; }
  .lens-integrations-illustration-right { z-index: 2; padding-right: 0px; position: relative; }
  .lens-integrations-icon-container { z-index: 2; position: relative; }
  .lens-integrations-people-image { display: none; left: auto; right: auto; }
  .lens-benchmarking { padding-top: 48px; padding-bottom: 64px; }
  .lens-solution-icons { row-gap: 40px; grid-template-columns: 1fr; padding-top: 48px; padding-bottom: 48px; }
  .lens-solution-graph { gap: 32px; padding-top: 40px; padding-bottom: 40px; }
  .lens-solution-graph-card { padding-top: 24px; }
  .lens-solution-graph-description { padding-bottom: 12px; }
  .lens-solution-report-quote-inner { flex-flow: column; justify-content: flex-start; align-items: center; }
  .lens-solution-report-avatar { border-radius: 4px; width: 40px; height: 40px; }
  .lens-solution-report-quote-text { gap: 12px; }
  .lens-benchmarking-segment_badge { padding-top: 8px; padding-bottom: 8px; padding-right: 8px; }
  .text-tooltip { font-size: 0.625rem; line-height: 1.125rem; }
  .lens-enrichment-tooltip_layer.is-inverted.is-lens { top: 0%; right: 18%; }
  .cta-block { padding-top: 32px; padding-left: 32px; padding-right: 32px; }
  .cta-block-animation { width: auto; margin: -55% -115px -133px -100px; top: -25%; }
  .product-hero-preview-image { width: 100%; }
  .lens-gamification { gap: 96px; padding-top: 80px; padding-bottom: 32px; }
  .lens-solution-report-main { gap: 24px; padding-top: 24px; padding-bottom: 24px; }
  .left-right-section { gap: 40px; }
  .left-right-section-content { gap: 24px; }
  .left-right-section-image-wrapper { padding-left: 0px; padding-right: 0px; }
  .left-right-section-image { border-radius: 10px; }
  .product-hero-preview { transform-origin: 50% 100%; width: 100%; margin-top: 40px; overflow: clip; }
  .product-hero { padding-top: 24px; padding-bottom: 24px; }
  .product-hero-sticky { position: relative; top: 0px; }
  .product-hero-icon { padding: 24px; }
  .product-hero-icon-image { width: 108px; height: 108px; }
  .lens-integrations-image { z-index: 2; position: relative; }
  .lens-integrations-image-image { width: 85%; max-width: 108px; height: auto; }
  .cta-block-icon-image { width: 256px; height: 256px; }
  .video-lightbox-holder { justify-content: center; align-items: center; padding-top: 48px; }
  .video-lightbox-text { display: none; }
  .lightbox-video-main { margin-top: 0px; margin-bottom: 25%; transform: scale(0.75); }
}
```


## Caveats

- Third-party embeds (YouTube lightbox, Cal.com, Senja, Wistia) are noted but their internals were not measured.
- Hover/focus/active values come from the verbatim CSS rules above, plus the homepage spec for shared classes. They were not captured by hovering.
- `y` values are offsets inside each section at that width. Geometry for JS-cloned nodes (marquee clones) is only comparable for the original items.
