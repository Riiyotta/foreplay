Source: https://www.foreplay.co/swipe-file

# /swipe-file: Swipe File | Save Facebook Ad Library, TikTok & LinkedIn

Measured on 2026-10-06 with headless Chromium (Playwright 1.63) at 1440×900, 991×900 and 390×844, after a full scroll pass. The Navbar and Footer have the same DOM as the homepage, so reuse `Navbar.jsx` and `Footer.jsx` (CLONE_SPEC.md §1 and §8). Tokens, buttons and type classes are in CLONE_SPEC.md §0; anything shared between these pages is in `specs/_shared-pages.md`. **Copy policy:** short UI strings are verbatim, and long copy is given only as ‹copy: ~N chars, L lines @1440›. Assets are local paths under `public/` (`/assets/...`). Files that already existed in `public/assets` were reused rather than re-downloaded, which is why some paths point at other page folders or at the root. Blocks that are identical to the homepage (the final CTA `.home-cta`, the Chrome-extension card `.home-extension`, and the logo strip `.home-hero-bottom`) are collapsed to a single line, "uses <Component> from src/components". Their internals are not re-specced and their assets were not re-downloaded.

## Build notes (summary)

- **Template:** this page uses the product template exactly (`_shared-pages.md` §1, sections 1–8). Sections: S1 hero ("SWIPE FILE" / "Save Ads from Facebook & TikTok Ad Library"), S2 white solution block, S3 use-case carousel (3 slides that all use the same image file on the live site), S4 core-feature tabs ("Save Ad Inspiration", "Organize & Tag", "Share & Collaborate") plus the Chrome-extension card, S5 two 6-card feature grids each followed by a testimonial, S6 CTA banner, S7 FAQ (11 items from a CMS `w-dyn-list`), S8 home CTA.
- **Reuse:** `Navbar`, `Footer`, `Button` (dark-primary), `ChromeExtension.jsx` (S4 card, identical), `CTA.jsx` (S8), `BgVideo` (hero screen video), `TabSwipeFile0..2` icons in `svgs.jsx`, `useHeroParallax` (with the a-71 easing tweak).
- **Hero media:** the screen video uses two layers. The first is a `.product-hero-video.w-embed` `<video>` with `!SwipeFile-2025_high.webm` (2800×1460, 13s, fit contain). The second is a Webflow bg-video fallback (`product-video-swipefile-transcode.mp4/webm` + poster). Both are tilted with the same matrix3d and sit at z1, under the mockup PNG at z2. The hero icon is `animated-icon-swipefile.webm`/`.mov` (2000×2000, 4s loop, 256px @1440). It is hidden ≤991, where the static `pi-swipefile-hq.webp` is shown at 128px (991) / 108px (390).
- **Motion:** IX2 a-71 hero parallax (≥768). Webflow tabs fade (in 300ms, out 100ms, ease). The carousel slides with `transform .8s cubic-bezier(0.19,1,0.22,1)`, and the arrows get `.is-disabled` at the ends. The FAQ accordion uses `.9s cubic-bezier(0.19,1,0.22,1)` and the chevron rotates 180°. Feature cards transition `background-color .2s` on hover. There are no marquees and no CSS keyframe animations.
- **Embeds:** none in page content. The CTA video `cta-swipe-file.mov` is HEVC-with-alpha (Safari/macOS). The static fallback `iso-swipefile.webp` (already in `/assets`) is shown where the video is hidden.

## Page meta (measured)

- Webflow page id `681262f4fde3437ae6bd8fe9`. Title: `Swipe File | Save Facebook Ad Library, TikTok & LinkedIn`.
- Meta description: ~151 chars (not transcribed).
- Document height: 1440 → 11213, 991 → 11626, 390 → 13342. Body bg rgb(2, 3, 8).
- Navbar: same DOM as homepage (same node count/height; only the active-link state class differs) → reuse `Navbar.jsx`.
- Footer: same DOM as homepage (same node count/height) → reuse `Footer.jsx` (incl. calendar pop-up + exit-intent modal).
- Fonts loaded: Inter Display 600 normal, Inter 400 normal, Inter 600 normal, Inter 500 normal.

## Section map (DOM order)

Legend: each line is `tag.class — W×H @x,y` at 1440 (y relative to the section top), then `| 991:` and `| 390:` geometry, then non-default computed styles at 1440, then `Δ991{…}` / `Δ390{…}` listing only layout/typography values that differ from 1440. `hidden` = display:none or 0×0 at that width. Text: short UI strings verbatim in quotes; long copy as ‹copy: ~N chars, L lines @1440› (write stand-in copy of matching length). Classes prefixed `w-` (Webflow runtime) are dropped except meaningful widget classes.

### S1. `section#product-hero-section.section.relative`

y/height: 1440 72/1376 · 991 72/1105.4 · 390 72/777.8

- `section#product-hero-section.section.relative` — 1440×1376 @0,0 | 991: 991×1105.4 @0,0 | 390: 390×777.8 @0,0 · pos:relative
  - `div.dot-bg` — 1440×1376 @0,0 | 991: 991×1105.4 @0,0 | 390: 390×777.8 @0,0 · pos:absolute [0px 0px 0px 0px]; bgimg:url(68331d86cf0a6a7db433a56d_dot-grid.webp); bgsize:380px 380px; bgpos:50% 0px; opacity:0.66; pe:none · Δ390{bgsize:256px 256px} · ASSET `/assets/pages/swipe-file/68331d86cf0a6a7db433a56d_dot-grid.webp`
  - `div.container` — 1440×1376 @0,0 | 991: 991×1105.4 @0,0 | 390: 390×777.8 @0,0 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
    - `div.product-hero` — 1360×1376 @40,0 | 991: 927×1105.4 @32,0 | 390: 342×777.8 @24,0 · display:flex; dir:column; align:center; pad:10px 0px 0px 0px · Δ390{pad:24px 0px}
      - `div.product-hero-animation-trigger` — 1440×900 @0,-72 | 991: 991×900 @0,-72 | 390: 390×844 @0,-72 · pos:absolute [-72px 0px 548px 0px]; pe:none · ix2 w-id 0e1752a5-4820-add2-7536-fa12b7c13963
      - `div.product-hero-sticky` — 900×512 @270,28 | 991: 900×512 @46,28 | 390: 342×524 @24,24 · display:flex; dir:column; align:center; pos:sticky [100px auto auto auto]; transform:matrix(1, 0, 0, 1, 0, 0) · Δ390{pos:relative; transform:none}
        - `div.product-hero-icon` — 256×256 @592,-12 | 991: 192×192 @400,28 | 390: 156×156 @117,24 · mar:-40px 0px -24px 0px · Δ991{pad:32px; mar:0px} · Δ390{pad:24px; mar:0px}
          - `div.code-video.w-embed` — 256×256 @592,-12 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; pos:relative
            - `video` — 256×256 @592,-12 | 991: hidden | 390: hidden · overflow:clip; fit:contain · ASSET `/assets/pages/swipe-file/animated-icon-swipefile.webm`, `/assets/pages/swipe-file/animated-icon-swipefile.mov` · VIDEO {"srcs":["animated-icon-swipefile.webm","animated-icon-swipefile.mov"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":2000,"vh":2000,"dur":4,"preload":"metadata"}
          - `img.product-hero-icon-image` — hidden | 991: 128×128 @432,60 | 390: 108×108 @141,48 · display:none; maxw:100%; overflow:clip; fit:fill; aspect:auto 128 / 128 · Δ991{display:block} · Δ390{display:block} · IMG `/assets/pages/swipe-file/682f9f72df2782e8df1d1114_pi-swipefile-hq.webp` natural 0×0 loading=lazy alt "swipe file icon"
        - `div.product-hero-content` — 900×320 @270,220 | 991: 900×320 @46,220 | 390: 342×368 @24,180 · display:flex; dir:column; align:center; gap:28px · Δ390{gap:24px; pad:0px 0px 24px 0px; pos:relative}
          - `h1.text-overline.text-white-68` — 85.6×16 @677,220 | 991: 85.6×16 @453,220 | 390: 85.6×16 @152,180 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "SWIPE FILE"
          - `div.hero-text` — 900×208 @270,264 | 991: 900×208 @46,264 | 390: 342×240 @24,220 · display:flex; dir:column; align:center; gap:16px; maxw:900px · Δ390{gap:12px}
            - `h2.text-display-h1.hero-title` — 900×136 @270,264 | 991: 900×136 @46,264 | 390: 342×144 @24,220 · bgimg:radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88)); bgsize:auto; bgpos:0% 0%; bgclip:text; font:Inter Display 60px/68px w600 ls-0.45px; color:rgba(255, 255, 255, 0.88); align-text:center; wrap-text:balance; fill:rgba(0, 0, 0, 0) · Δ390{font:38px/48px; ls:-0.285px} "Save Ads from Facebook & TikTok Ad Library" (2 lines)
            - `div.max-w-lg` — 512×56 @464,416 | 991: 512×56 @240,416 | 390: 342×84 @24,376 · maxw:512px
              - `p.text-body-l.text-white-84` — 512×56 @464,416 | 991: 512×56 @240,416 | 390: 342×84 @24,376 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center ‹copy: ~113 chars, 2 lines @1440›
          - `a.button-dark.button-primary` — 152.6×40 @644,500 | 991: 152.6×40 @419,500 | 390: 152.6×40 @119,484 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; flex:1 1 0%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `https://app.foreplay.co/sign-up`
            - `div.button-text-block` — 116.6×24 @652,508 | 991: 116.6×24 @427,508 | 390: 116.6×24 @127,492 · pos:relative; pad:0px 6px; z:2
              - `div.text-heading-m` — 104.6×24 @658,508 | 991: 104.6×24 @433,508 | 390: 104.6×24 @133,492 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14); align-text:center "Start free trial"
            - `div.button-icon-block.icon-right.opacity-100` — 24×24 @764,508 | 991: 24×24 @540,508 | 390: 24×24 @239,492 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; z:2
              - `div.icon-medium` — 24×24 @764,508 | 991: 24×24 @540,508 | 390: 24×24 @239,492 · display:flex; justify:center; align:center
                - `div.svg.w-embed` — 24×24 @764,508 | 991: 24×24 @540,508 | 390: 24×24 @239,492 · display:flex; justify:center; align:center
                  - `svg` — 24×24 @764,508 | 991: 24×24 @540,508 | 390: 24×24 @239,492 · overflow:hidden · SVG `/assets/pages/swipe-file/svg-svg-185ries.svg`
      - `div.product-hero-preview` — 1360×850 @40,574 | 991: 927×579.4 @32,574 | 390: 342×213.8 @24,588 · display:flex; dir:column; align:center; pos:relative; mar:52px 0px -48px 0px; aself:stretch; aspect:16 / 10 · Δ390{mar:40px 0px -48px 0px}
        - `div.product-hero-video.w-embed` — 1094.9×541.9 @171,644 | 991: 740.1×366.5 @123,622 | 390: 268.6×136.3 @60,604 · display:flex; justify:center; align:center; pos:absolute [56.0938px 152.328px 242.203px 149.594px]; bg:rgb(2, 3, 8); transform:matrix3d(1, 0, 0, 0, 0, 0.992546, 0.121869, 0, 0, -0.121869, 0.992546, 0, 0, 0, 0, 1); overflow:hidden; z:1; aspect:1400 / 730 · Δ991{transform:matrix3d(1, 0, 0, 0, 0, 0.987688, 0.156434, 0, 0, -0.156434, 0.987688, 0, 0, 0, 0, 1)} · Δ390{transform:matrix3d(1, 0, 0, 0, 0, 0.987688, 0.156434, 0, 0, -0.156434, 0.987688, 0, 0, 0, 0, 1)}
          - `video` — 1094.9×541.9 @171,644 | 991: 740.1×366.5 @123,622 | 390: 268.6×136.3 @60,604 · overflow:clip; fit:contain · ASSET `/assets/pages/swipe-file/!SwipeFile-2025_high.webm` · VIDEO {"srcs":["!SwipeFile-2025_high.webm"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":2800,"vh":1460,"dur":13,"preload":"metadata"}
        - `img.product-hero-preview-image` — 1360×850 @40,574 | 991: 927×579.4 @32,574 | 390: 342×213.8 @24,588 · pos:relative; maxw:100%; overflow:clip; z:2; fit:fill; aspect:16 / 10; pe:none · IMG `/assets/pages/swipe-file/6820c07c2e5b8c350c8e1f4c_hero-empty-mockup.webp` natural 1440×900 loading=lazy alt "apple pro xdr monnitor mockup"
        - `div.product-hero-preview-underlay` — 1440×952 @0,472 | 991: 991×648.9 @0,504 | 390: hidden · pos:absolute [-102px -40px 0px -40px]; bgimg:linear-gradient(0deg, rgb(2, 3, 8) 75%, rgba(2, 3, 8, 0)); bgsize:auto; bgpos:0% 0%; pe:none · Δ390{display:none}
        - `div.product-hero-video.w-background-video` — 1094.9×541.9 @171,644 | 991: 740.1×366.5 @123,622 | 390: 268.6×136.3 @60,604 · display:flex; justify:center; align:center; pos:absolute [56.0938px 152.328px 242.203px 149.594px]; bg:rgb(2, 3, 8); transform:matrix3d(1, 0, 0, 0, 0, 0.992546, 0.121869, 0, 0, -0.121869, 0.992546, 0, 0, 0, 0, 1); overflow:hidden; z:1; aspect:1400 / 730 · Δ991{transform:matrix3d(1, 0, 0, 0, 0, 0.987688, 0.156434, 0, 0, -0.156434, 0.987688, 0, 0, 0, 0, 1)} · Δ390{transform:matrix3d(1, 0, 0, 0, 0, 0.987688, 0.156434, 0, 0, -0.156434, 0.987688, 0, 0, 0, 0, 1)} · ASSET `/assets/pages/swipe-file/68338a6524e01d2ff9f48747_product-video-swipefile-transcode.mp4`, `/assets/pages/swipe-file/68338a6524e01d2ff9f48747_product-video-swipefile-transcode.webm`, `/assets/pages/swipe-file/68338a6524e01d2ff9f48747_product-video-swipefile-poster-00001.jpg` · data {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338a6524e01d2ff9f48747_product-video-swipefile-poster-00001.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
          - `video#05b46ad7-61f7-6026-58e4-c35fff464be0-video` — 1094.9×541.9 @171,644 | 991: 740.1×366.5 @123,622 | 390: 268.6×136.3 @60,604 · pos:absolute [-551.703px -1058.08px -551.703px -1058.08px]; mar:551.703px 1058.08px; bgimg:url(62a4ed18ddad95dde8b8bfa4/68338a6524e01d2ff9f48747_product-video-swipefile-poster-00001.jpg); bgsize:cover; bgpos:50% 50%; overflow:clip; z:-100; fit:cover · Δ991{mar:374.594px 718.422px} · Δ390{mar:138.547px 265.719px} · ASSET `/assets/pages/swipe-file/68338a6524e01d2ff9f48747_product-video-swipefile-poster-00001.jpg`, `/assets/pages/swipe-file/68338a6524e01d2ff9f48747_product-video-swipefile-transcode.mp4`, `/assets/pages/swipe-file/68338a6524e01d2ff9f48747_product-video-swipefile-transcode.webm` · VIDEO {"srcs":["62a4ed18ddad95dde8b8bfa4/68338a6524e01d2ff9f48747_product-video-swipefile-transcode.mp4","62a4ed18ddad95dde8b8bfa4/68338a6524e01d2ff9f48747_product-video-swipefile-transcode.webm"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":1280,"vh":668,"dur":13,"preload":"metadata"} · data {"data-wf-ignore":"true","data-object-fit":"cover"}

### S2. `section.section`

y/height: 1440 1448/806.7 · 991 1177/794.9 · 390 850/1168.6

- `div.section-padding` — 1440×806.7 @0,0 | 991: 991×794.9 @0,0 | 390: 390×1168.6 @0,0 · pad:8px
  - `div.section-white-block` — 1424×790.7 @8,8 | 991: 975×778.9 @8,8 | 390: 374×1152.6 @8,8 · pos:relative; bg:rgb(255, 255, 255); radius:36px; overflow:hidden; z:2 · Δ390{radius:16px}
    - `div.container.section-container` — 1344×790.7 @48,8 | 991: 975×778.9 @8,8 | 390: 374×1152.6 @8,8 · pad:0px 40px; mar:0px 40px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
      - `div.product-page-solution` — 940×790.7 @250,8 | 991: 911×778.9 @40,8 | 390: 326×1152.6 @32,8 · display:flex; dir:column; gap:36px; pad:80px 0px; mar:0px 162px; maxw:940px · Δ991{mar:0px} · Δ390{gap:32px; pad:48px 0px 32px 0px; mar:0px; maxw:480px}
        - `div.section-head` — 720×128 @360,88 | 991: 720×128 @136,88 | 390: 326×264 @32,56 · display:flex; dir:column; align:center; gap:12px; mar:0px 110px; maxw:720px · Δ991{mar:0px 95.5px} · Δ390{mar:0px}
          - `div.section-head-wrapper` — 623.9×128 @408,88 | 991: 623.9×128 @184,88 | 390: 326×264 @32,56 · display:flex; dir:column; align:center; gap:12px
            - `h2.text-display-h3` — 623.9×44 @408,88 | 991: 623.9×44 @184,88 | 390: 326×132 @32,56 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(23, 25, 32); align-text:center; wrap-text:balance "Why do you need Swipe File Software?"
            - `div.section-head_paragraph` — 512×72 @464,144 | 991: 512×72 @240,144 | 390: 326×120 @32,200 · maxw:512px
              - `p.text-body-m` — 512×72 @464,144 | 991: 512×72 @240,144 | 390: 326×120 @32,200 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(36, 38, 46); align-text:center; wrap-text:pretty ‹copy: ~181 chars, 3 lines @1440›
        - `div.product-page-solution-grid` — 940×466.7 @250,252 | 991: 911×454.9 @40,252 | 390: 326×776.6 @32,352 · display:grid; cols:462px 462px; rows:466.703px; gap:16px; aself:stretch · Δ991{cols:447.5px 447.5px} · Δ390{cols:326px}
          - `div.static-product-page-solution-card` — 462×466.7 @250,252 | 991: 447.5×454.9 @40,252 | 390: 326×380.2 @32,352 · display:flex; dir:column; gap:20px; radius:20px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px inset; overflow:hidden
            - `div.static-product-page-solution-text` — 462×72 @250,252 | 991: 447.5×72 @40,252 | 390: 326×96 @32,352 · pad:20px 20px 0px 20px
              - `div.home-winning-card-text` — 422×52 @270,272 | 991: 407.5×52 @60,272 | 390: 286×76 @52,372 · pos:relative; z:10; pe:none
                - `div.flex-col-gap-1.align-start` — 422×52 @270,272 | 991: 407.5×52 @60,272 | 390: 286×76 @52,372 · display:flex; dir:column; align:flex-start; gap:4px; pe:none
                  - `div.text-solid-900` — 74×24 @270,272 | 991: 74×24 @60,272 | 390: 65.8×24 @52,372 · pe:none
                    - `div.text-label-l` — 74×24 @270,272 | 991: 74×24 @60,272 | 390: 65.8×24 @52,372 · pe:none; font:Inter 18px/24px w500 ls-0.259999px; color:rgb(9, 10, 14) · Δ390{font:16px/24px; ls:-0.23111px} "Before ..."
                  - `div.text-solid-500` — 322.2×24 @270,300 | 991: 322.2×24 @60,300 | 390: 286×48 @52,400 · pe:none
                    - `div` — 322.2×24 @270,300 | 991: 322.2×24 @60,300 | 390: 286×48 @52,400 · pe:none; font:Inter 16px/24px w400 ls-0.18px; color:rgb(52, 54, 66); wrap-text:pretty "Group chats, expired links and screenshots."
            - `div.static-before-wrapper` — 462×374.4 @250,344 | 991: 447.5×362.6 @40,344 | 390: 326×264.2 @32,468 · pos:relative; z:-1
              - `img.static-product-page-image` — 462×374.4 @250,344 | 991: 447.5×362.6 @40,344 | 390: 326×264.2 @32,468 · pos:relative; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/swipe-file/682dfe3a46d48842bb8f17db_before-swipefile.webp` natural 1392×1128 loading=lazy
          - `div.static-product-page-solution-card.solution-after` — 462×466.7 @728,252 | 991: 447.5×454.9 @504,252 | 390: 326×380.4 @32,748 · display:flex; dir:column; gap:20px; bg:rgb(2, 3, 8); radius:20px; overflow:hidden
            - `div.static-product-page-solution-text` — 462×72 @728,252 | 991: 447.5×72 @504,252 | 390: 326×96 @32,748 · pad:20px 20px 0px 20px
              - `div.home-winning-card-text` — 422×52 @748,272 | 991: 407.5×52 @524,272 | 390: 286×76 @52,768 · pos:relative; z:10; pe:none
                - `div.flex-col-gap-1.align-start` — 422×52 @748,272 | 991: 407.5×52 @524,272 | 390: 286×76 @52,768 · display:flex; dir:column; align:flex-start; gap:4px; pe:none
                  - `div.text-white` — 117.9×24 @748,272 | 991: 117.9×24 @524,272 | 390: 104.8×24 @52,768 · pe:none
                    - `div.text-label-l` — 117.9×24 @748,272 | 991: 117.9×24 @524,272 | 390: 104.8×24 @52,768 · pe:none; font:Inter 18px/24px w500 ls-0.259999px; color:rgb(255, 255, 255) · Δ390{font:16px/24px; ls:-0.23111px} "After Foreplay"
                  - `div.text-alpha-100` — 391.6×24 @748,300 | 991: 391.6×24 @524,300 | 390: 286×48 @52,796 · flex:1 1 0%; pe:none
                    - `div` — 391.6×24 @748,300 | 991: 391.6×24 @524,300 | 390: 286×48 @52,796 · pe:none; font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Save, organize and share ads from anywhere forever."
            - `img.static-product-page-image` — 462×374.7 @728,344 | 991: 447.5×362.9 @504,344 | 390: 326×264.4 @32,864 · pos:relative; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/swipe-file/682dfe3a5956e63970743aa1_after-swipefile.webp` natural 1392×1129 loading=lazy

### S3. `div.section`

y/height: 1440 2255/968.3 · 991 1972/905.4 · 390 2018/898.6

- `div.product-page-padding-y` — 1440×968.3 @0,0 | 991: 991×905.4 @0,0 | 390: 390×898.6 @0,0 · display:flex; dir:column; pad:108px 0px; overflow:hidden · Δ991{pad:96px 0px} · Δ390{pad:80px 0px}
  - `div.section-content-main` — 1440×752.3 @0,108 | 991: 991×713.4 @0,96 | 390: 390×738.6 @0,80 · pad:48px 0px 0px 0px · Δ390{pad:40px 0px 0px 0px}
    - `div.container` — 1440×149.8 @0,156 | 991: 991×148 @0,144 | 390: 390×220 @0,120 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
      - `div.section-head` — 720×149.8 @360,156 | 991: 720×148 @136,144 | 390: 342×220 @24,120 · display:flex; dir:column; align:center; gap:12px; mar:0px 320px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
        - `div.section-head-wrapper` — 641×149.8 @399,156 | 991: 582.8×148 @204,144 | 390: 342×220 @24,120 · display:flex; dir:column; align:center; gap:12px
          - `div.text-overline.text-white-68` — 85.1×16 @677,156 | 991: 85.1×16 @453,144 | 390: 85.1×16 @152,120 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "USE CASES"
          - `h2.text-display-h2` — 641×53.8 @399,184 | 991: 582.8×52 @204,172 | 390: 342×96 @24,148 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Upgrade Your Creative Workflow"
          - `div.section-head_paragraph` — 512×56 @464,249 | 991: 512×56 @240,236 | 390: 342×84 @24,256 · maxw:512px
            - `p.text-body-l` — 512×56 @464,249 | 991: 512×56 @240,236 | 390: 342×84 @24,256 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~111 chars, 2 lines @1440›
    - `div.product-carousel` — 1440×554.5 @0,305 | 991: 991×517.4 @0,292 | 390: 390×478.6 @0,340 · pos:relative · data {"data-carousel":""}
      - `div.container.section-container` — 1344×554.5 @48,305 | 991: 991×517.4 @0,292 | 390: 390×478.6 @0,340 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
        - `div.product-carousel-viewport` — 1264×554.5 @88,305 | 991: 927×517.4 @32,292 | 390: 342×478.6 @24,340 · display:flex; dir:column; gap:48px; pad:64px 0px 0px 0px
          - `div.product-carousel-track` — 1264×406.5 @88,369 | 991: 927×369.4 @32,356 | 390: 342×322.6 @24,404 · display:flex; gap:16px; transform:matrix(1, 0, 0, 1, 0, 0); transition:transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-track":""}
            - `div.slide` — 561.6×406.5 @88,369 | 991: 480×369.4 @32,356 | 390: 342×322.6 @24,404 · flex:0 0 auto
              - `div.slide-card` — 561.6×406.5 @88,369 | 991: 480×369.4 @32,356 | 390: 342×322.6 @24,404 · display:flex; dir:column; maxw:576px; minh:320px; radius:28px; shadow:rgb(27, 28, 33) 0px 0px 0px 1px; overflow:hidden
                - `img.product-carousel-image` — 561.6×255.5 @88,369 | 991: 480×218.4 @32,356 | 390: 342×155.6 @24,404 · maxw:100%; flex:1 1 0%; overflow:clip; fit:cover · IMG `/assets/pages/swipe-file/6446c0b1c2f78eaae4163bb9_competitor research.webp` natural 595×270 loading=lazy alt "creating a swipe file for competitor research"
                - `div.product-page-carousel-content` — 561.6×151 @88,625 | 991: 480×151 @32,575 | 390: 342×167 @24,560 · pad:24px; flex:1 1 0% · Δ390{pad:16px 16px 24px 16px}
                  - `div.product-page-carousel-text-content` — 513.6×103 @112,649 | 991: 432×103 @56,599 | 390: 310×127 @40,576 · display:flex; dir:column; gap:7px; pos:relative; z:1
                    - `h3.text-label-m` — 513.6×24 @112,649 | 991: 432×24 @56,599 | 390: 310×24 @40,576 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Competitor Research"
                    - `div.text-alpha-100` — 513.6×72 @112,680 | 991: 432×72 @56,630 | 390: 310×96 @40,607 · flex:1 1 0%
                      - `p.text-body-m` — 513.6×72 @112,680 | 991: 432×72 @56,630 | 390: 310×96 @40,607 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~134 chars, 3 lines @1440›
            - `div.slide` — 561.6×406.5 @666,369 | 991: 480×369.4 @528,356 | 390: 342×322.6 @382,404 · flex:0 0 auto
              - `div.slide-card` — 561.6×406.5 @666,369 | 991: 480×369.4 @528,356 | 390: 342×322.6 @382,404 · display:flex; dir:column; maxw:576px; minh:320px; radius:28px; shadow:rgb(27, 28, 33) 0px 0px 0px 1px; overflow:hidden
                - `img.product-carousel-image` — 561.6×255.5 @666,369 | 991: 480×218.4 @528,356 | 390: 342×155.6 @382,404 · maxw:100%; flex:1 1 0%; overflow:clip; fit:cover · IMG `/assets/pages/swipe-file/6446c0b1c2f78eaae4163bb9_competitor research.webp` natural 595×270 loading=lazy alt "creating a swipe file for competitor research"
                - `div.product-page-carousel-content` — 561.6×151 @666,625 | 991: 480×151 @528,575 | 390: 342×167 @382,560 · pad:24px; flex:1 1 0% · Δ390{pad:16px 16px 24px 16px}
                  - `div.product-page-carousel-text-content` — 513.6×79 @690,649 | 991: 432×79 @552,599 | 390: 310×103 @398,576 · display:flex; dir:column; gap:7px; pos:relative; z:1
                    - `h3.text-label-m` — 513.6×24 @690,649 | 991: 432×24 @552,599 | 390: 310×24 @398,576 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Client Presentations"
                    - `div.text-alpha-100` — 513.6×48 @690,680 | 991: 432×48 @552,630 | 390: 310×72 @398,607 · flex:1 1 0%
                      - `p.text-body-m` — 513.6×48 @690,680 | 991: 432×48 @552,630 | 390: 310×72 @398,607 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~93 chars, 2 lines @1440›
            - `div.slide` — 561.6×406.5 @1243,369 | 991: 480×369.4 @1024,356 | 390: 342×322.6 @740,404 · flex:0 0 auto
              - `div.slide-card` — 561.6×406.5 @1243,369 | 991: 480×369.4 @1024,356 | 390: 342×322.6 @740,404 · display:flex; dir:column; maxw:576px; minh:320px; radius:28px; shadow:rgb(27, 28, 33) 0px 0px 0px 1px; overflow:hidden
                - `img.product-carousel-image` — 561.6×255.5 @1243,369 | 991: 480×218.4 @1024,356 | 390: 342×155.6 @740,404 · maxw:100%; flex:1 1 0%; overflow:clip; fit:cover · IMG `/assets/pages/swipe-file/6446c0b1c2f78eaae4163bb9_competitor research.webp` natural 595×270 loading=lazy alt "creating a swipe file for competitor research"
                - `div.product-page-carousel-content` — 561.6×151 @1243,625 | 991: 480×151 @1024,575 | 390: 342×167 @740,560 · pad:24px; flex:1 1 0% · Δ390{pad:16px 16px 24px 16px}
                  - `div.product-page-carousel-text-content` — 513.6×79 @1267,649 | 991: 432×79 @1048,599 | 390: 310×103 @756,576 · display:flex; dir:column; gap:7px; pos:relative; z:1
                    - `h3.text-label-m` — 513.6×24 @1267,649 | 991: 432×24 @1048,599 | 390: 310×24 @756,576 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Manage Your Portfolio"
                    - `div.text-alpha-100` — 513.6×48 @1267,680 | 991: 432×48 @1048,630 | 390: 310×72 @756,607 · flex:1 1 0%
                      - `p.text-body-m` — 513.6×48 @1267,680 | 991: 432×48 @1048,630 | 390: 310×72 @756,607 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~98 chars, 2 lines @1440›
          - `div.slide-arrows` — 1264×36 @88,824 | 991: 927×36 @32,774 | 390: 342×44 @24,775 · display:flex; justify:center; align:center; gap:24px
            - `a.carousel-arrow.is-disabled` — 36×36 @672,824 | 991: 36×36 @448,774 | 390: 44×44 @139,775 · display:flex; justify:center; align:center; pos:relative; maxw:100%; bg:rgba(255, 255, 255, 0.06); radius:2880px; opacity:0.5; transition:0.2s; pe:none · Δ991{radius:1982px} · Δ390{radius:780px} · href `#` · aria "Previous" · data {"data-dir":"left"}
              - `div.carousel-icon.w-embed` — 18×18 @681,833 | 991: 18×18 @457,783 | 390: 18×18 @152,788 · pe:none
                - `svg` — 18×18 @681,833 | 991: 18×18 @457,783 | 390: 18×18 @152,788 · overflow:hidden; pe:none · SVG `/assets/pages/swipe-file/svg-carousel-icon-b7rq1z.svg`
            - `a.carousel-arrow` — 36×36 @732,824 | 991: 36×36 @508,774 | 390: 44×44 @207,775 · display:flex; justify:center; align:center; pos:relative; maxw:100%; bg:rgba(255, 255, 255, 0.06); radius:2880px; transition:0.2s · Δ991{radius:1982px} · Δ390{radius:780px} · href `#` · aria "Previous" · data {"data-dir":"right"}
              - `svg` — 18×18 @741,833 | 991: 18×18 @517,783 | 390: 18×18 @220,788 · overflow:hidden · SVG `/assets/pages/swipe-file/svg-carousel-icon-3j2fr4.svg`

### S4. `div.section`

y/height: 1440 3223/1470.8 · 991 2878/1251.4 · 390 2917/904.4

- `div.product-page-padding-y` — 1440×1470.8 @0,0 | 991: 991×1251.4 @0,0 | 390: 390×904.4 @0,0 · display:flex; dir:column; pad:108px 0px; overflow:hidden · Δ991{pad:96px 0px} · Δ390{pad:80px 0px}
  - `div.container.section-container` — 1344×1254.8 @48,108 | 991: 991×1059.4 @0,96 | 390: 390×744.4 @0,80 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
    - `div.section-head` — 720×177.8 @360,108 | 991: 720×176 @136,96 | 390: 342×248 @24,80 · display:flex; dir:column; align:center; gap:12px; mar:0px 272px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
      - `div.section-head-wrapper` — 512×177.8 @464,108 | 991: 512×176 @240,96 | 390: 342×248 @24,80 · display:flex; dir:column; align:center; gap:12px
        - `div.text-overline.text-white-68` — 123.9×16 @658,108 | 991: 123.9×16 @434,96 | 390: 123.9×16 @133,80 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "CORE FEATURES"
        - `h2.text-display-h2` — 476.2×53.8 @482,136 | 991: 432.9×52 @279,124 | 390: 342×96 @24,108 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "How to save & share ads"
        - `div.section-head_paragraph` — 512×84 @464,202 | 991: 512×84 @240,188 | 390: 342×112 @24,216 · maxw:512px
          - `p.text-body-l` — 512×84 @464,202 | 991: 512×84 @240,188 | 390: 342×112 @24,216 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~150 chars, 3 lines @1440› · inline: a "" (color rgb(58, 111, 251), fill rgb(58, 111, 251)); br "" (color rgb(58, 111, 251), fill rgb(58, 111, 251))
    - `div.section-content-main` — 1264×1077 @88,286 | 991: 927×883.4 @32,272 | 390: 342×496.4 @24,328 · pad:48px 0px 0px 0px · Δ390{pad:40px 0px 0px 0px}
      - `div.product-page-tabs.w-tabs` — 1264×803 @88,334 | 991: 927×609.4 @32,320 | 390: 342×456.4 @24,368 · display:flex; dir:column; align:center; pos:relative · data {"data-current":"Save Inspiration","data-easing":"ease","data-duration-in":"300","data-duration-out":"100"}
        - `div.product-page-tabs-menu` — 1264×52 @88,334 | 991: 927×48 @32,320 | 390: 342×224 @24,368 · display:grid; cols:408px 408px 408px; rows:44px; gap:16px; pos:relative; pad:4px; overflow:hidden · Δ991{cols:295.656px 295.672px 295.656px} · Δ390{cols:334px; gap:0px 16px; radius:10px}
          - `a#w-tabs-0-data-w-tab-0.product-page-tab.w-tab-link` — 408×44 @92,338 | 991: 295.7×40 @36,324 | 390: 334×72 @28,372 · display:flex; justify:center; align:center; gap:8px; pos:relative; pad:10px 20px; maxw:100%; radius:8px; transition:0.2s · Δ991{pad:8px 12px} · Δ390{dir:column; justify:flex-start; pad:8px 12px} · href `#w-tabs-0-data-w-pane-0` · data {"data-w-tab":"Save Inspiration"}
            - `svg` — 24×24 @208,348 | 991: 24×24 @96,332 | 390: 24×24 @183,380 · overflow:hidden · SVG `/assets/pages/swipe-file/svg-product-page-tab-svg-j5imqi.svg`
            - `div.text-label-m` — 144×24 @240,348 | 991: 144×24 @128,332 | 390: 144×24 @123,412 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255); align-text:center "Save Ad Inspiration"
          - `a#w-tabs-0-data-w-tab-1.product-page-tab.w-tab-link` — 408×44 @516,338 | 991: 295.7×40 @348,324 | 390: 334×72 @28,444 · display:flex; justify:center; align:center; gap:8px; pos:relative; pad:10px 20px; maxw:100%; radius:8px; opacity:0.44; transition:0.2s · Δ991{pad:8px 12px} · Δ390{dir:column; justify:flex-start; pad:8px 12px} · href `#w-tabs-0-data-w-pane-1` · data {"data-w-tab":"Organize & Tag"}
            - `svg` — 24×24 @647,348 | 991: 24×24 @423,332 | 390: 24×24 @183,452 · overflow:hidden · SVG `/assets/pages/swipe-file/svg-product-page-tab-svg-bzt1wt.svg`
            - `div.text-label-m` — 113.2×24 @679,348 | 991: 113.2×24 @455,332 | 390: 113.2×24 @138,484 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255); align-text:center "Organize & Tag"
          - `a#w-tabs-0-data-w-tab-2.product-page-tab.w-tab-link` — 408×44 @940,338 | 991: 295.7×40 @659,324 | 390: 334×72 @28,516 · display:flex; justify:center; align:center; gap:8px; pos:relative; pad:10px 20px; maxw:100%; radius:8px; opacity:0.44; transition:0.2s · Δ991{pad:8px 12px} · Δ390{dir:column; justify:flex-start; pad:8px 12px} · href `#w-tabs-0-data-w-pane-2` · data {"data-w-tab":"Share & Collaborate"}
            - `svg` — 24×24 @1054,348 | 991: 24×24 @717,332 | 390: 24×24 @183,524 · overflow:hidden · SVG `/assets/pages/swipe-file/svg-product-page-tab-svg-nf9d4q.svg`
            - `div.text-label-m` — 148.3×24 @1086,348 | 991: 148.3×24 @749,332 | 390: 148.3×24 @121,556 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255); align-text:center "Share & Collaborate"
        - `div.product-page-tabs-content` — 1264×751 @88,386 | 991: 927×561.4 @32,368 | 390: 342×232.4 @24,592 · pos:relative
          - `div#w-tabs-0-data-w-pane-0.w-tab-pane` — 1264×751 @88,386 | 991: 927×561.4 @32,368 | 390: 342×232.4 @24,592 · pos:relative · data {"data-w-tab":"Save Inspiration"}
            - `div.tabs-video-wrapper` — 1264×751 @88,386 | 991: 927×561.4 @32,368 | 390: 342×232.4 @24,592 · display:flex; dir:column; gap:20px; pad:20px 0px
              - `img.product-page-tabs-image` — 1264×711 @88,406 | 991: 927×521.4 @32,388 | 390: 342×192.4 @24,612 · maxw:100%; radius:32px; overflow:clip; fit:fill · Δ390{radius:16px} · IMG `/assets/pages/swipe-file/646fac024fc1759bfea42a8f_Swipe-File-Tab-1.webp` natural 1440×810 loading=eager alt "How to save ads browser illustration"
          - `div#w-tabs-0-data-w-pane-1.w-tab-pane` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: img 646faff298f84dcd14fd6715_Swipe-File-Tab-2.webp
          - `div#w-tabs-0-data-w-pane-2.w-tab-pane` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: img 646faff31a3bf4f6ae060124_Swipe-File-Tab-3.webp
      - `div.home-extension` — 1264×226 @88,1137 | 991: 927×226 @32,929 | 390: hidden · **identical to the homepage block → uses `ChromeExtension.jsx` from src/components (not re-specced; no assets downloaded)**

### S5. `div.section`

y/height: 1440 4694/2804.5 · 991 4129/3652.5 · 390 3821/5184

- `div.section` — 1440×2804.5 @0,0 | 991: 991×3652.5 @0,0 | 390: 390×5184 @0,0
  - `div.product-page-padding-y` — 1440×2804.5 @0,0 | 991: 991×3652.5 @0,0 | 390: 390×5184 @0,0 · display:flex; dir:column; pad:108px 0px; overflow:hidden · Δ991{pad:96px 0px} · Δ390{pad:80px 0px}
    - `div.container.section-container` — 1344×2588.5 @48,108 | 991: 991×3460.5 @0,96 | 390: 390×5024 @0,80 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
      - `div.section-head` — 720×149.8 @360,108 | 991: 720×148 @136,96 | 390: 342×248 @24,80 · display:flex; dir:column; align:center; gap:12px; mar:0px 272px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
        - `div.section-head-wrapper` — 513×149.8 @464,108 | 991: 512×148 @240,96 | 390: 342×248 @24,80 · display:flex; dir:column; align:center; gap:12px
          - `div.text-overline.text-white-68` — 110.8×16 @665,108 | 991: 110.8×16 @440,96 | 390: 110.8×16 @140,80 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "ALL FEATURES"
          - `h2.text-display-h2` — 513×53.8 @464,136 | 991: 466.4×52 @262,124 | 390: 342×96 @24,108 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Smart Swipe File Features"
          - `div.section-head_paragraph` — 512×56 @464,202 | 991: 512×56 @240,188 | 390: 342×112 @24,216 · maxw:512px
            - `p.text-body-l` — 512×56 @464,202 | 991: 512×56 @240,188 | 390: 342×112 @24,216 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~121 chars, 2 lines @1440›
      - `div.section-content-main` — 1264×735.3 @88,258 | 991: 927×1160.3 @32,244 | 390: 342×1960 @24,328 · pad:48px 0px 0px 0px · Δ390{pad:40px 0px 0px 0px}
        - `div.product-page-feature-grid-new` — 1264×687.3 @88,306 | 991: 927×1112.3 @32,292 | 390: 342×1920 @24,368 · display:grid; cols:405.328px 405.328px 405.344px; rows:331.672px 331.672px; gap:24px; pos:relative; radius:12px; overflow:hidden; z:4 · Δ991{cols:451.5px 451.5px} · Δ390{cols:342px}
          - `div#w-node-bfef3138-4d6d-3abe-ee38-bacf70a3b40f-e6bd8fe9.product-page-feature-block-new` — 405.3×331.7 @88,306 | 991: 451.5×354.8 @32,292 | 390: 342×300 @24,368 · display:flex; dir:column; pos:relative; gcol:span 1/span 1; grow:span 1/span 1; border:1px solid rgb(23, 25, 32); radius:20px; overflow:hidden; z:1; transition:background-color 0.2s
            - `img.product-page-feature-image` — 403.3×201.7 @89,307 | 991: 449.5×224.8 @33,293 | 390: 340×170 @25,369 · maxw:100%; aself:center; overflow:clip; fit:fill · IMG `/assets/pages/swipe-file/64419c26788e98000d82fa26_No Expired Links.webp` natural 599×299 loading=lazy alt "How to fix the facebook ad library expired link issue"
            - `div.product-page-feature-content` — 403.3×128 @89,508 | 991: 449.5×128 @33,518 | 390: 340×128 @25,539 · display:flex; align:flex-end; pad:24px; flex:1 1 0%
              - `div.product-page-feature-text` — 355.3×80 @113,532 | 991: 401.5×80 @57,542 | 390: 292×80 @49,563 · display:flex; dir:column; gap:8px
                - `h3.text-label-m` — 355.3×24 @113,532 | 991: 401.5×24 @57,542 | 390: 292×24 @49,563 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "No Expired Links"
                - `div.text-alpha-100` — 355.3×48 @113,564 | 991: 401.5×48 @57,574 | 390: 292×48 @49,595 · flex:1 1 0%
                  - `p.text-body-m` — 355.3×48 @113,564 | 991: 401.5×48 @57,574 | 390: 292×48 @49,595 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~69 chars, 2 lines @1440›
          - `div#w-node-bfef3138-4d6d-3abe-ee38-bacf70a3b417-e6bd8fe9.product-page-feature-block-new` — 405.3×331.7 @517,306 | 991: 451.5×354.8 @508,292 | 390: 342×300 @24,692 · display:flex; dir:column; pos:relative; gcol:span 1/span 1; grow:span 1/span 1; border:1px solid rgb(23, 25, 32); radius:20px; overflow:hidden; z:1; transition:background-color 0.2s
            - `img.product-page-feature-image` — 403.3×201.7 @518,307 | 991: 449.5×224.8 @509,293 | 390: 340×170 @25,693 · maxw:100%; aself:center; overflow:clip; fit:fill · IMG `/assets/pages/swipe-file/64419c27702cee383050839c_Save All Ad Types.webp` natural 599×299 loading=lazy alt "Facebook, LinkedIn, Instagram and TikTok app icons being sav"
            - `div.product-page-feature-content` — 403.3×128 @518,508 | 991: 449.5×128 @509,518 | 390: 340×128 @25,863 · display:flex; align:flex-end; pad:24px; flex:1 1 0%
              - `div.product-page-feature-text` — 355.3×80 @542,532 | 991: 401.5×80 @533,542 | 390: 292×80 @49,887 · display:flex; dir:column; gap:8px
                - `h3.text-label-m` — 355.3×24 @542,532 | 991: 401.5×24 @533,542 | 390: 292×24 @49,887 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Save All Ad Types"
                - `div.text-alpha-100` — 355.3×48 @542,564 | 991: 401.5×48 @533,574 | 390: 292×48 @49,919 · flex:1 1 0%
                  - `p.text-body-m` — 355.3×48 @542,564 | 991: 401.5×48 @533,574 | 390: 292×48 @49,919 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~69 chars, 2 lines @1440›
          - …4 more `div#w-node-bfef3138-4d6d-3abe-ee38-bacf70a3b40f-e6bd8fe9.product-page-feature-block-new` siblings with the same structure (6 total):
            - [3] 405.3×331.7 @947,306 — img 64419c26ac48d69350ba5968_Ad Metadata.webp, "Crystallize Ad Metadata", "Enrich your creative research with ad metadata and copy."
            - [4] 405.3×331.7 @88,661 — img 6441d838bbed821cfc43c56c_Custom Tags.webp, "Custom Tags", ‹~74ch›
            - [5] 405.3×331.7 @517,661 — img 64419c26aa612008aab9e28e_Filtering.webp, "Filter by Industry & Format", ‹~75ch›
            - [6] 405.3×331.7 @947,661 — img 64418894857cf21aa6e1b607_Share with Anyone.webp, "Easily Share with Anyone", ‹~76ch›
      - `div.container` — 1264×484 @88,993 | 991: 927×496 @32,1404 | 390: 342×416 @24,2288 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
        - `div.home-testimonial-wrapper` — 1184×484 @128,993 | 991: 863×496 @64,1404 | 390: 294×416 @48,2288 · pos:relative; pad:120px 0px · Δ991{pad:108px 0px} · Δ390{pad:80px 0px}
          - `div.testemonial-contents` — 947.2×244 @246,1113 | 991: 640×280 @176,1512 | 390: 294×256 @48,2368 · display:flex; dir:column; justify:center; align:center; gap:24px; mar:0px 118.406px; maxw:80% · Δ991{mar:0px 111.5px; maxw:640px} · Δ390{mar:0px; maxw:640px}
            - `img.testimonial-logo-image` — 120×40 @660,1113 | 991: 120×40 @436,1512 | 390: 96×40 @147,2368 · maxw:100%; maxh:48px; overflow:clip; fit:contain; aspect:auto 70 / 40 · IMG `/assets/pages/swipe-file/6478be2ffe695cac2f9d4a34_290-2904512_awe-logo-gold-affiliate-world-conferences-logo.webp` natural 553×310 loading=lazy
            - `div.text-quote` — 947.2×108 @246,1177 | 991: 640×144 @176,1576 | 390: 294×120 @48,2432 · font:Inter 24px/36px w400 ls-0.18px; color:rgb(250, 250, 253); align-text:center · Δ390{font:16px/24px} ‹copy: ~186 chars, 3 lines @1440›
            - `div.testimonial-bio` — 287.7×48 @576,1309 | 991: 287.7×48 @352,1744 | 390: 279.7×48 @55,2576 · display:flex; align:center; gap:16px
              - `img.testimonial-author-image` — 48×48 @576,1309 | 991: 48×48 @352,1744 | 390: 40×40 @55,2580 · maxw:100%; radius:5px; overflow:clip; fit:fill · IMG `/assets/pages/swipe-file/6478bd8550054135284b7d7f_matt-williams.webp` natural 500×500 loading=lazy
              - `div.testimonial-avatar-text` — 223.7×48 @640,1309 | 991: 223.7×48 @416,1744 | 390: 223.7×48 @111,2576
                - `div.text-label-m` — 223.7×24 @640,1309 | 991: 223.7×24 @416,1744 | 390: 223.7×24 @111,2576 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Matthew Williams"
                - `div.text-body-m` — 223.7×24 @640,1333 | 991: 223.7×24 @416,1768 | 390: 223.7×24 @111,2600 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "CMO @ iStack / Affiliate World"
          - `img.testimonial-decoration.is-right` — 142.1×280.4 @1170,1095 | 991: 172.6×496 @841,1404 | 390: 117.6×416 @254,2288 · pos:absolute [242px 0px 242px 1041.92px]; maxw:100%; opacity:0.7; transform:matrix(1, 0, 0, 1, 0, -140.203); overflow:clip; fit:fill · Δ991{transform:matrix(1, 0, 0, 1, 0, -248)} · Δ390{transform:matrix(1, 0, 0, 1, 0, -208)} · IMG `/assets/pages/swipe-file/642db608b19bd600e001723a_awward-right.svg` natural 114×225 loading=lazy
          - `img.testimonial-decoration` — 142.1×280.4 @128,1095 | 991: 172.6×496 @-22,1404 | 390: 117.6×416 @19,2288 · pos:absolute [242px 1041.92px 242px 0px]; maxw:100%; opacity:0.7; transform:matrix(1, 0, 0, 1, 0, -140.203); overflow:clip; fit:fill · Δ991{transform:matrix(1, 0, 0, 1, 0, -248)} · Δ390{transform:matrix(1, 0, 0, 1, 0, -208)} · IMG `/assets/pages/swipe-file/642db6082db5f7803a7a121e_award-left.svg` natural 114×225 loading=lazy
      - `div.section-content-main` — 1264×735.3 @88,1477 | 991: 927×1160.3 @32,1900 | 390: 342×1960 @24,2704 · pad:48px 0px 0px 0px · Δ390{pad:40px 0px 0px 0px}
        - `div.product-page-feature-grid-new` — 1264×687.3 @88,1525 | 991: 927×1112.3 @32,1948 | 390: 342×1920 @24,2744 · display:grid; cols:405.328px 405.328px 405.344px; rows:331.672px 331.672px; gap:24px; pos:relative; radius:12px; overflow:hidden; z:4 · Δ991{cols:451.5px 451.5px} · Δ390{cols:342px}
          - `div#w-node-_75dc40fa-f1e0-f675-8b83-22a8aaedafb1-e6bd8fe9.product-page-feature-block-new` — 405.3×331.7 @88,1525 | 991: 451.5×354.8 @32,1948 | 390: 342×300 @24,2744 · display:flex; dir:column; pos:relative; gcol:span 1/span 1; grow:span 1/span 1; border:1px solid rgb(23, 25, 32); radius:20px; overflow:hidden; z:1; transition:background-color 0.2s
            - `img.product-page-feature-image` — 403.3×201.7 @89,1526 | 991: 449.5×224.8 @33,1949 | 390: 340×170 @25,2745 · maxw:100%; aself:center; overflow:clip; fit:fill · IMG `/assets/pages/swipe-file/644186758b63b0137bd005d0_Real-Time Activity-5.png` natural 1200×600 loading=lazy alt "How to see if a facebook ad is still running"
            - `div.product-page-feature-content` — 403.3×128 @89,1728 | 991: 449.5×128 @33,2174 | 390: 340×128 @25,2915 · display:flex; align:flex-end; pad:24px; flex:1 1 0%
              - `div.product-page-feature-text` — 355.3×80 @113,1752 | 991: 401.5×80 @57,2198 | 390: 292×80 @49,2939 · display:flex; dir:column; gap:8px
                - `h3.text-label-m` — 355.3×24 @113,1752 | 991: 401.5×24 @57,2198 | 390: 292×24 @49,2939 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Real-Time Status"
                - `p.text-body-m` — 355.3×48 @113,1784 | 991: 401.5×48 @57,2230 | 390: 292×48 @49,2971 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(255, 255, 255) "Analyze which competitor ads are working, and for how long." (2 lines)
          - `div#w-node-_75dc40fa-f1e0-f675-8b83-22a8aaedafb9-e6bd8fe9.product-page-feature-block-new` — 405.3×331.7 @517,1525 | 991: 451.5×354.8 @508,1948 | 390: 342×300 @24,3068 · display:flex; dir:column; pos:relative; gcol:span 1/span 1; grow:span 1/span 1; border:1px solid rgb(23, 25, 32); radius:20px; overflow:hidden; z:1; transition:background-color 0.2s
            - `img.product-page-feature-image` — 403.3×201.7 @518,1526 | 991: 449.5×224.8 @509,1949 | 390: 340×170 @25,3069 · maxw:100%; aself:center; overflow:clip; fit:fill · IMG `/assets/pages/swipe-file/6441d1e93e756110132e66ad_Team Commenting.webp` natural 599×299 loading=lazy alt "comment on your advertising inspiration board"
            - `div.product-page-feature-content` — 403.3×128 @518,1728 | 991: 449.5×128 @509,2174 | 390: 340×128 @25,3239 · display:flex; align:flex-end; pad:24px; flex:1 1 0%
              - `div.product-page-feature-text` — 355.3×80 @542,1752 | 991: 401.5×80 @533,2198 | 390: 292×80 @49,3263 · display:flex; dir:column; gap:8px
                - `h3.text-label-m` — 355.3×24 @542,1752 | 991: 401.5×24 @533,2198 | 390: 292×24 @49,3263 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Team Collaboration"
                - `p.text-body-m` — 355.3×48 @542,1784 | 991: 401.5×48 @533,2230 | 390: 292×48 @49,3295 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(255, 255, 255) "Collect notes from colleagues or feedback from clients." (2 lines)
          - …4 more `div#w-node-_75dc40fa-f1e0-f675-8b83-22a8aaedafb1-e6bd8fe9.product-page-feature-block-new` siblings with the same structure (6 total):
            - [3] 405.3×331.7 @947,1525 — img 6441d1f1d8e29bb7aec06775_Embed in Notion.webp, "Embed in Notion", "Natively embed Facebook or TikTok ads in your Notion page."
            - [4] 405.3×331.7 @88,1881 — img 6441d6459aadc0c4b1ee27eb_Landing Page Screenshot.webp, "Landing Page Screenshot", ‹~70ch›
            - [5] 405.3×331.7 @517,1881 — img 6441d645f6f0ee84bb0f170a_Ai Search.webp, "AI Search & Filter", "Search your entire Swipe File using natural language text search."
            - [6] 405.3×331.7 @947,1881 — img 681b6844dfcf6665c1fd25e8_embed-in-website.webp, "Embed in your Site or Blog", "Embed Facebook, TikTok, and LinkedIn ads on your website."
      - `div.container` — 1264×484 @88,2212 | 991: 927×496 @32,3061 | 390: 342×440 @24,4664 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
        - `div.home-testimonial-wrapper` — 1184×484 @128,2212 | 991: 863×496 @64,3061 | 390: 294×440 @48,4664 · pos:relative; pad:120px 0px · Δ991{pad:108px 0px} · Δ390{pad:80px 0px}
          - `div.testemonial-contents` — 947.2×244 @246,2332 | 991: 640×280 @176,3169 | 390: 294×280 @48,4744 · display:flex; dir:column; justify:center; align:center; gap:24px; mar:0px 118.406px; maxw:80% · Δ991{mar:0px 111.5px; maxw:640px} · Δ390{mar:0px; maxw:640px}
            - `img.testimonial-logo-image` — 120×40 @660,2332 | 991: 120×40 @436,3169 | 390: 96×40 @147,4744 · maxw:100%; maxh:48px; overflow:clip; fit:contain; aspect:auto 70 / 40 · IMG `/assets/pages/swipe-file/62ab5053126567f2d1045a12_61867ad4caa11f2834eb5799_loop club logo-1.avif` natural 200×200 loading=lazy alt "Loop logo"
            - `div.text-quote` — 947.2×108 @246,2396 | 991: 640×144 @176,3233 | 390: 294×144 @48,4808 · font:Inter 24px/36px w400 ls-0.18px; color:rgb(250, 250, 253); align-text:center · Δ390{font:16px/24px} ‹copy: ~217 chars, 3 lines @1440›
            - `div.testimonial-bio` — 267.9×48 @586,2528 | 991: 267.9×48 @362,3401 | 390: 259.9×48 @65,4976 · display:flex; align:center; gap:16px
              - `img.testimonial-author-image` — 48×48 @586,2528 | 991: 48×48 @362,3401 | 390: 40×40 @65,4980 · maxw:100%; radius:5px; overflow:clip; fit:fill · IMG `/assets/pages/swipe-file/62ab50d7b920aacfc304ae19_pqt5NNy9_400x400.webp` natural 400×400 loading=lazy
              - `div.testimonial-avatar-text` — 203.9×48 @650,2528 | 991: 203.9×48 @426,3401 | 390: 203.9×48 @121,4976
                - `div.text-label-m` — 203.9×24 @650,2528 | 991: 203.9×24 @426,3401 | 390: 203.9×24 @121,4976 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Tim Keen"
                - `div.text-body-m` — 203.9×24 @650,2552 | 991: 203.9×24 @426,3425 | 390: 203.9×24 @121,5000 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Founder / CEO @ Loop.club"
          - `img.testimonial-decoration.is-right` — 142.1×280.4 @1170,2314 | 991: 172.6×496 @841,3061 | 390: 117.6×440 @254,4664 · pos:absolute [242px 0px 242px 1041.92px]; maxw:100%; opacity:0.7; transform:matrix(1, 0, 0, 1, 0, -140.203); overflow:clip; fit:fill · Δ991{transform:matrix(1, 0, 0, 1, 0, -248)} · Δ390{transform:matrix(1, 0, 0, 1, 0, -220)} · IMG `/assets/pages/swipe-file/642db608b19bd600e001723a_awward-right.svg` natural 114×225 loading=lazy
          - `img.testimonial-decoration` — 142.1×280.4 @128,2314 | 991: 172.6×496 @-22,3061 | 390: 117.6×440 @19,4664 · pos:absolute [242px 1041.92px 242px 0px]; maxw:100%; opacity:0.7; transform:matrix(1, 0, 0, 1, 0, -140.203); overflow:clip; fit:fill · Δ991{transform:matrix(1, 0, 0, 1, 0, -248)} · Δ390{transform:matrix(1, 0, 0, 1, 0, -220)} · IMG `/assets/pages/swipe-file/642db6082db5f7803a7a121e_award-left.svg` natural 114×225 loading=lazy
  - `div.negative-spacing-bottom` — 1440×0 @0,2804 | 991: 991×0 @0,3653 | 390: 390×0 @0,5184 · mar:0px 0px -80px 0px

### S6. `div.section`

y/height: 1440 7418/564 · 991 7702/760 · 390 8925/704

- `div.section` — 1440×564 @0,0 | 991: 991×760 @0,0 | 390: 390×704 @0,0
  - `div.container.section-container` — 1344×564 @48,0 | 991: 991×760 @0,0 | 390: 390×704 @0,0 · pad:0px 40px; maxw:1344px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
    - `div.cta` — 1264×564 @88,0 | 991: 927×760 @32,0 | 390: 342×704 @24,0 · pad:80px 0px
      - `div.cta-block` — 1264×404 @88,80 | 991: 927×600 @32,80 | 390: 342×544 @24,80 · pos:relative; pad:84px; bg:rgb(2, 3, 8); radius:36px; shadow:rgb(23, 25, 32) 0px 0px 0px 1px; overflow:hidden · Δ991{pad:64px 64px 0px 64px} · Δ390{pad:32px 32px 0px 32px}
        - `div.cta-block-content` — 723.4×236 @172,164 | 991: 799×236 @96,144 | 390: 278×296 @56,112 · display:flex; dir:column; gap:32px; pos:relative; maxw:66%; z:1 · Δ991{maxw:none} · Δ390{maxw:none}
          - `div.flex-col-gap-2.align-start.text-balance` — 723.4×164 @172,164 | 991: 799×164 @96,144 | 390: 278×224 @56,112 · display:flex; dir:column; align:flex-start; gap:8px
            - `h2.text-display-h3.mobile-landscape-text-display-h4` — 429×44 @172,164 | 991: 429×44 @96,144 | 390: 278×72 @56,112 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(255, 255, 255); wrap-text:balance · Δ390{font:28px/36px; ls:-0.202222px} "Get a 7-Day free trial today"
            - `div.text-alpha-100` — 723.4×112 @172,216 | 991: 799×112 @96,196 | 390: 278×144 @56,192 · flex:1 1 0%
              - `p.text-body-l.mobile-landscape-text-body-n` — 723.4×112 @172,216 | 991: 799×112 @96,196 | 390: 278×144 @56,192 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); wrap-text:balance · Δ390{font:16px/24px; ls:-0.23111px} ‹copy: ~154 chars, 4 lines @1440›
          - `div.flex-col-gap-3` — 723.4×40 @172,360 | 991: 799×40 @96,340 | 390: 278×40 @56,368 · display:flex; dir:column; justify:center; align:flex-start; gap:12px
            - `a.button-dark.button-primary` — 159.3×40 @172,360 | 991: 159.3×40 @96,340 | 390: 159.3×40 @56,368 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; flex:1 1 0%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `https://app.foreplay.co/sign-up`
              - `div.button-text-block` — 123.3×24 @180,368 | 991: 123.3×24 @104,348 | 390: 123.3×24 @64,376 · pos:relative; pad:0px 6px; z:2
                - `div.text-heading-m` — 111.3×24 @186,368 | 991: 111.3×24 @110,348 | 390: 111.3×24 @70,376 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14) "Start Free Trial"
              - `div.button-icon-block.icon-right.opacity-100` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; z:2
                - `div.icon-medium` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · display:flex; justify:center; align:center
                  - `div.svg.w-embed` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · display:flex; justify:center; align:center
                    - `svg` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · overflow:hidden · SVG `/assets/pages/swipe-file/svg-svg-185ries.svg`
            - `div.no-cc-required` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: "No credit card required", svg bjw7ed
        - `div.cta-block-animation` — 880×880 @788,-122 | 991: hidden | 390: hidden · pos:absolute [-202px -316px 0px 700px]; blend:lighten; z:0 · Δ991{display:none; mar:-100px 0px; pos:relative} · Δ390{display:none; mar:-55% -115px -133px -100px; pos:relative}
          - `div.code-video.w-embed` — 880×880 @788,-122 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; pos:relative
            - `video` — 880×880 @788,-122 | 991: hidden | 390: hidden · overflow:clip; fit:contain · ASSET `/assets/pages/swipe-file/cta-swipe-file.mov` · VIDEO {"srcs":["cta-swipe-file.mov"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":1200,"vh":1200,"dur":3.366667,"preload":"metadata"}
        - `div.cta-block-icon` — 1096×0 @172,400 | 991: 799×300 @96,380 | 390: 278×192 @56,432 · Δ991{display:flex; dir:column; wrap:nowrap; justify:center; align:center; gap:normal} · Δ390{display:flex; dir:column; wrap:nowrap; justify:center; align:center; gap:normal; mar:24px 0px 0px 0px}
          - `img.cta-block-icon-image` — hidden | 991: 300×300 @346,380 | 390: 256×256 @67,432 · display:none; maxw:100%; overflow:clip; fit:fill · Δ991{display:block; maxw:none} · Δ390{display:block; mar:0px 0px -64px 0px; maxw:none} · IMG `/assets/682f93b40d86b433e8039cc9_iso-swipefile.webp` natural 0×0 loading=lazy alt "isometric swipe file logo"

### S7. `div.section`

y/height: 1440 7982/1260.8 · 991 8462/1259 · 390 9629/1283

- `div.container` — 1440×1260.8 @0,0 | 991: 991×1259 @0,0 | 390: 390×1283 @0,0 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
  - `div.faq` — 1360×1260.8 @40,0 | 991: 927×1259 @32,0 | 390: 342×1283 @24,0 · display:flex; dir:column; gap:48px; pad:140px 0px · Δ390{gap:40px; pad:64px 0px 80px 0px}
    - `div.section-head` — 720×149.8 @360,140 | 991: 720×148 @136,140 | 390: 342×192 @24,64 · display:flex; dir:column; align:center; gap:12px; mar:0px 320px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
      - `div.section-head-wrapper` — 557.3×149.8 @441,140 | 991: 512×148 @240,140 | 390: 342×192 @24,64 · display:flex; dir:column; align:center; gap:12px
        - `div.text-overline.text-white-68` — 29.5×16 @705,140 | 991: 29.5×16 @481,140 | 390: 29.5×16 @180,64 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "FAQ"
        - `h3.text-display-h2` — 557.3×53.8 @441,168 | 991: 506.6×52 @242,168 | 390: 342×96 @24,92 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Questions about Swipe File?"
        - `div.section-head_paragraph` — 512×56 @464,234 | 991: 512×56 @240,232 | 390: 342×56 @24,200 · maxw:512px
          - `p.text-body-l` — 512×56 @464,234 | 991: 512×56 @240,232 | 390: 342×56 @24,200 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~69 chars, 2 lines @1440›
    - `div.faq-block-container` — 752×671 @344,338 | 991: 752×671 @120,336 | 390: 342×751 @24,296 · mar:0px 304px; maxw:752px · Δ991{mar:0px 87.5px} · Δ390{mar:0px} · data {"data-accordion-container":""}
      - `div.` — 752×671 @344,338 | 991: 752×671 @120,336 | 390: 342×751 @24,296
        - `div.faq-block` — 752×61 @344,338 | 991: 752×61 @120,336 | 390: 342×81 @24,296 · display:flex; justify:center; align:flex-start; gap:44px; pad:20px 0px 12px 0px; border:T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-accordion-item":"","data-expanded":"false"}
          - `div.faq-block_content` — 680×24 @344,358 | 991: 680×24 @120,356 | 390: 270×48 @24,316 · display:flex; dir:column; flex:1 1 0%
            - `div.faq-block_head` — 680×24 @344,358 | 991: 680×24 @120,356 | 390: 270×48 @24,316 · display:flex; align:center; gap:44px
              - `h4.text-label-l` — 308.7×24 @344,358 | 991: 308.7×24 @120,356 | 390: 270×48 @24,316 · font:Inter 18px/24px w500 ls-0.259999px; color:rgba(255, 255, 255, 0.68) · Δ390{font:16px/24px; ls:-0.23111px} "Can I share boards with Freelancers?"
            - `div.faq-block_body` — 680×0 @344,382 | 991: 680×0 @120,380 | 390: 270×0 @24,364 · overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
              - `div.faq-block_answer` — 680×56 @344,382 | 991: 680×56 @120,380 | 390: 270×116 @24,364 · pad:8px 0px; overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
                - `p` — 680×40 @344,390 | 991: 680×40 @120,388 | 390: 270×100 @24,372 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) ‹copy: ~182 chars, 2 lines @1440›
          - `div.faq-block_icon` — 28×28 @1068,358 | 991: 28×28 @844,356 | 390: 28×28 @338,316 · display:flex; justify:center; align:center; transition:0.2s
            - `div.icon-medium` — 24×24 @1070,360 | 991: 24×24 @846,358 | 390: 24×24 @340,318 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @1070,360 | 991: 24×24 @846,358 | 390: 24×24 @340,318 · display:flex; justify:center; align:center
                - `svg` — 24×24 @1070,360 | 991: 24×24 @846,358 | 390: 24×24 @340,318 · overflow:hidden · SVG `/assets/pages/swipe-file/svg-svg-wqicrt.svg`
        - `div.faq-block` — 752×61 @344,399 | 991: 752×61 @120,397 | 390: 342×81 @24,377 · display:flex; justify:center; align:flex-start; gap:44px; pad:20px 0px 12px 0px; border:T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-accordion-item":"","data-expanded":"false"}
          - `div.faq-block_content` — 680×24 @344,419 | 991: 680×24 @120,417 | 390: 270×48 @24,397 · display:flex; dir:column; flex:1 1 0%
            - `div.faq-block_head` — 680×24 @344,419 | 991: 680×24 @120,417 | 390: 270×48 @24,397 · display:flex; align:center; gap:44px
              - `h4.text-label-l` — 355.2×24 @344,419 | 991: 355.2×24 @120,417 | 390: 270×48 @24,397 · font:Inter 18px/24px w500 ls-0.259999px; color:rgba(255, 255, 255, 0.68) · Δ390{font:16px/24px; ls:-0.23111px} "Why do Facebook Ad Library Links Expire?"
            - `div.faq-block_body` — 680×0 @344,443 | 991: 680×0 @120,441 | 390: 270×0 @24,445 · overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
              - `div.faq-block_answer` — 680×76 @344,443 | 991: 680×76 @120,441 | 390: 270×176 @24,445 · pad:8px 0px; overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
                - `p` — 680×60 @344,451 | 991: 680×60 @120,449 | 390: 270×160 @24,453 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) ‹copy: ~306 chars, 3 lines @1440›
          - `div.faq-block_icon` — 28×28 @1068,419 | 991: 28×28 @844,417 | 390: 28×28 @338,397 · display:flex; justify:center; align:center; transition:0.2s
            - `div.icon-medium` — 24×24 @1070,421 | 991: 24×24 @846,419 | 390: 24×24 @340,399 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @1070,421 | 991: 24×24 @846,419 | 390: 24×24 @340,399 · display:flex; justify:center; align:center
                - `svg` — 24×24 @1070,421 | 991: 24×24 @846,419 | 390: 24×24 @340,399 · overflow:hidden · SVG `/assets/pages/swipe-file/svg-svg-wqicrt.svg`
        - …9 more `div.` siblings with the same structure (11 total):
          - [3] 752×61 @344,460 — "Can I save ads from Instagram?", svg wqicrt, ‹~126ch›
          - [4] 752×61 @344,521 — "How do I use Facebook Ad Library?", svg wqicrt, ‹~262ch›
          - [5] 752×61 @344,582 — "How to make an ad Swipe File?", svg wqicrt, ‹~295ch›
          - [6] 752×61 @344,643 — "Where do I find good ad inspiration?", svg wqicrt, ‹~215ch›
          - [7] 752×61 @344,704 — "What is a Swipe File?", svg wqicrt, ‹~126ch›
          - [8] 752×61 @344,765 — "What types of content can I save to Foreplay?", svg wqicrt, ‹~203ch›
          - [9] 752×61 @344,826 — "How do I save LinkedIn Ads", svg wqicrt, "‍", "Step 1: Download the Foreplay Chrome Extension", "Step 2: Add it to your browser toolbar", ‹~73ch›, ‹~71ch›
          - [10] 752×61 @344,887 — "How do I save ads from Facebook Ad Library?", svg wqicrt, "Step 1: Download the Foreplay Chrome Extension", "Step 2: Add it to your browser toolbar", ‹~85ch›, ‹~73ch›
          - [11] 752×61 @344,948 — "Will the ads I save stay forever?", svg wqicrt, ‹~193ch›
    - `div.faq-buttons` — 1360×64 @40,1057 | 991: 927×64 @32,1055 | 390: 342×116 @24,1087 · display:flex; justify:center; align:center; gap:12px; pad:12px 0px · Δ390{dir:column; align:stretch}
      - `a#intercomButton.button-dark.ghost-icon-button` — 177.4×40 @536,1069 | 991: 177.4×40 @311,1067 | 390: 342×40 @24,1099 · display:flex; justify:center; align:center; gap:5px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `#`
        - `div.button-icon-block.icon-left` — 24×24 @544,1077 | 991: 24×24 @319,1075 | 390: 24×24 @114,1107 · display:flex; justify:center; align:center; pos:relative; mar:0px -4px 0px 0px; opacity:0.68; z:2
          - `div.icon-medium` — 24×24 @544,1077 | 991: 24×24 @319,1075 | 390: 24×24 @114,1107 · display:flex; justify:center; align:center
            - `div.svg.w-embed` — 20×20 @546,1079 | 991: 20×20 @321,1077 | 390: 20×20 @116,1109 · display:flex; justify:center; align:center
              - `svg` — 20×20 @546,1079 | 991: 20×20 @321,1077 | 390: 20×20 @116,1109 · overflow:hidden · SVG `/assets/pages/swipe-file/svg-svg-1i4rn0n.svg`
        - `div.button-text-block` — 136.4×24 @569,1077 | 991: 136.4×24 @344,1075 | 390: 136.4×24 @139,1107 · pos:relative; pad:0px 6px; z:2
          - `div.text-heading-m` — 124.4×24 @575,1077 | 991: 124.4×24 @350,1075 | 390: 124.4×24 @145,1107 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Contact support"
      - `a.button-dark.ghost-icon-button` — 179.1×40 @725,1069 | 991: 179.1×40 @501,1067 | 390: 342×40 @24,1151 · display:flex; justify:center; align:center; gap:5px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `https://foreplay.featurebase.app/help` target=_blank
        - `div.button-icon-block.icon-left` — 24×24 @733,1077 | 991: 24×24 @509,1075 | 390: 24×24 @113,1159 · display:flex; justify:center; align:center; pos:relative; mar:0px -4px 0px 0px; opacity:0.68; z:2
          - `div.icon-medium` — 24×24 @733,1077 | 991: 24×24 @509,1075 | 390: 24×24 @113,1159 · display:flex; justify:center; align:center
            - `div.svg.w-embed` — 24×24 @733,1077 | 991: 24×24 @509,1075 | 390: 24×24 @113,1159 · display:flex; justify:center; align:center
              - `svg` — 24×24 @733,1077 | 991: 24×24 @509,1075 | 390: 24×24 @113,1159 · overflow:hidden · SVG `/assets/pages/swipe-file/svg-svg-1lrvzzc.svg`
        - `div.button-text-block` — 138.1×24 @758,1077 | 991: 138.1×24 @534,1075 | 390: 138.1×24 @138,1159 · pos:relative; pad:0px 6px; z:2
          - `div.text-heading-m` — 126.1×24 @764,1077 | 991: 126.1×24 @540,1075 | 390: 126.1×24 @144,1159 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Knowledge Base"

### S8. `div.section.overflow-hidden`

y/height: 1440 9243/1037.5 · 991 9721/801.8 · 390 10912/643.3

- `div.section.overflow-hidden` — 1440×1037.5 @0,0 | 991: 991×801.8 @0,0 | 390: 390×643.3 @0,0 · overflow:hidden
  - `div.container.section-container` — 1344×1037.5 @48,0 | 991: 991×801.8 @0,0 | 390: 390×643.3 @0,0 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
    - `div.home-cta` — 1264×1037.5 @88,0 | 991: 927×801.8 @32,0 | 390: 342×643.3 @24,0 · **identical to the homepage block → uses `CTA.jsx` from src/components (not re-specced; no assets downloaded)**

## Typography roles (computed at 1440; sizes at 991/390 from the same nodes)

| font (family size/lh weight ls) | color | n | @991 | @390 | elements (sample) | example |
|---|---|---|---|---|---|---|
| Inter 16px/24px w500 ls-0.18px | rgb(255, 255, 255) | 20 | 16px/24px | 16px/24px | `h3.text-label-m` `div.text-label-m` | Competitor Research |
| Inter 14px/20px w400 ls-0.09px | rgba(255, 255, 255, 0.68) | 18 | 14px/20px | 14px/20px | `p` `li` | ~182 chars |
| Inter 16px/24px w400 ls-0.18px | rgba(255, 255, 255, 0.68) | 12 | 16px/24px | 16px/24px | `div` `p.text-body-m` `div.text-body-m` | Save, organize and share ads from anywhe |
| Inter 18px/24px w500 ls-0.259999px | rgba(255, 255, 255, 0.68) | 11 | 18px/24px | 16px/24px | `h4.text-label-l` | Can I share boards with Freelancers? |
| Inter 18px/28px w400 ls-0.259999px | rgba(255, 255, 255, 0.68) | 6 | 18px/28px | 18px/28px, 16px/24px | `p.text-body-l.text-white-84` `p.text-body-l` `p.text-body-l.mobile-landscape-text-body-n` | ~113 chars |
| Inter 16px/24px w400 ls-0.18px | rgb(255, 255, 255) | 6 | 16px/24px | 16px/24px | `p.text-body-m` | Analyze which competitor ads are working |
| Inter 12px/16px w550 ls2px uppercase | rgba(255, 255, 255, 0.36) | 5 | 12px/16px | 12px/16px | `h1.text-overline.text-white-68` `div.text-overline.text-white-68` | SWIPE FILE |
| Inter Display 44px/53.76px w600 ls-0.33px | rgb(255, 255, 255) | 4 | 40px/52px | 36px/48px | `h2.text-display-h2` `h3.text-display-h2` | Upgrade Your Creative Workflow |
| Inter 16px/24px w550 ls-0.18px | rgb(9, 10, 14) | 2 | 16px/24px | 16px/24px | `div.text-heading-m` | Start free trial |
| Inter 24px/36px w400 ls-0.18px | rgb(250, 250, 253) | 2 | 24px/36px | 16px/24px | `div.text-quote` | ~186 chars |
| Inter 16px/24px w550 ls-0.18px | rgb(255, 255, 255) | 2 | 16px/24px | 16px/24px | `div.text-heading-m` | Contact support |
| Inter Display 60px/68px w600 ls-0.45px | rgba(255, 255, 255, 0.88) | 1 | 60px/68px | 38px/48px | `h2.text-display-h1.hero-title` | Save Ads from Facebook & TikTok Ad Libra |
| Inter Display 36px/44px w600 ls-0.26px | rgb(23, 25, 32) | 1 | 36px/44px | 36px/44px | `h2.text-display-h3` | Why do you need Swipe File Software? |
| Inter 16px/24px w400 ls-0.18px | rgb(36, 38, 46) | 1 | 16px/24px | 16px/24px | `p.text-body-m` | ~181 chars |
| Inter 18px/24px w500 ls-0.259999px | rgb(9, 10, 14) | 1 | 18px/24px | 16px/24px | `div.text-label-l` | Before ... |
| Inter 16px/24px w400 ls-0.18px | rgb(52, 54, 66) | 1 | 16px/24px | 16px/24px | `div` | Group chats, expired links and screensho |
| Inter 18px/24px w500 ls-0.259999px | rgb(255, 255, 255) | 1 | 18px/24px | 16px/24px | `div.text-label-l` | After Foreplay |
| Inter Display 36px/44px w600 ls-0.26px | rgb(255, 255, 255) | 1 | 36px/44px | 28px/36px | `h2.text-display-h3.mobile-landscape-text-display-h4` | Get a 7-Day free trial today |

## Colors, gradients, radii, shadows in use (non-text, 1440)

**background-color**
- `rgb(255, 255, 255)` — `a.button-dark.button-primary`, `div.section-white-block`
- `rgb(2, 3, 8)` — `div.product-hero-video.w-embed`, `div.product-hero-video.w-background-video`, `div.static-product-page-solution-card.solution-after`, `div.cta-block`, `a#intercomButton.button-dark.ghost-icon-button` (+1)
- `rgba(255, 255, 255, 0.06)` — `a.carousel-arrow.is-disabled`, `a.carousel-arrow`

**background-image**
- `url(68331d86cf0a6a7db433a56d_dot-grid.webp)` — `div.dot-bg`
- `radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88))` — `h2.text-display-h1.hero-title`
- `linear-gradient(0deg, rgb(2, 3, 8) 75%, rgba(2, 3, 8, 0))` — `div.product-hero-preview-underlay`
- `url(62a4ed18ddad95dde8b8bfa4/68338a6524e01d2ff9f48747_product-video-swipefile-poster-00001.jpg)` — `video#05b46ad7-61f7-6026-58e4-c35fff464be0-video`

**border**
- `1px solid rgb(23, 25, 32)` — `div#w-node-bfef3138-4d6d-3abe-ee38-bacf70a3b40f-e6bd8fe9.product-page-feature-block-new`, `div#w-node-bfef3138-4d6d-3abe-ee38-bacf70a3b417-e6bd8fe9.product-page-feature-block-new`, `div#w-node-bfef3138-4d6d-3abe-ee38-bacf70a3b41f-e6bd8fe9.product-page-feature-block-new`, `div#w-node-bfef3138-4d6d-3abe-ee38-bacf70a3b427-e6bd8fe9.product-page-feature-block-new`, `div#w-node-bfef3138-4d6d-3abe-ee38-bacf70a3b42f-e6bd8fe9.product-page-feature-block-new` (+7)
- `T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0` — `div.faq-block`

**radius**
- `10px` — `a.button-dark.button-primary`, `a#intercomButton.button-dark.ghost-icon-button`, `a.button-dark.ghost-icon-button`
- `36px` — `div.section-white-block`, `div.cta-block`
- `20px` — `div.static-product-page-solution-card`, `div.static-product-page-solution-card.solution-after`, `div#w-node-bfef3138-4d6d-3abe-ee38-bacf70a3b40f-e6bd8fe9.product-page-feature-block-new`, `div#w-node-bfef3138-4d6d-3abe-ee38-bacf70a3b417-e6bd8fe9.product-page-feature-block-new`, `div#w-node-bfef3138-4d6d-3abe-ee38-bacf70a3b41f-e6bd8fe9.product-page-feature-block-new` (+9)
- `28px` — `div.slide-card`
- `2880px` — `a.carousel-arrow.is-disabled`, `a.carousel-arrow`
- `8px` — `a#w-tabs-0-data-w-tab-0.product-page-tab.w-tab-link`, `a#w-tabs-0-data-w-tab-1.product-page-tab.w-tab-link`, `a#w-tabs-0-data-w-tab-2.product-page-tab.w-tab-link`
- `32px` — `img.product-page-tabs-image`, `div.home-extension`
- `12px` — `div.product-page-feature-grid-new`
- `5px` — `img.testimonial-author-image`

**box-shadow**
- `rgb(233, 234, 239) 0px 0px 0px 1px inset` — `div.static-product-page-solution-card`
- `rgb(27, 28, 33) 0px 0px 0px 1px` — `div.slide-card`
- `rgb(23, 25, 32) 0px 0px 0px 1px` — `div.home-extension`, `div.cta-block`

**opacity**
- `0.66` — `div.dot-bg`
- `0.5` — `a.carousel-arrow.is-disabled`
- `0.44` — `a#w-tabs-0-data-w-tab-1.product-page-tab.w-tab-link`, `a#w-tabs-0-data-w-tab-2.product-page-tab.w-tab-link`
- `0.7` — `img.testimonial-decoration.is-right`, `img.testimonial-decoration`
- `0.68` — `div.button-icon-block.icon-left`

**transition**
- `0.2s` — `a.button-dark.button-primary`, `a.carousel-arrow.is-disabled`, `a.carousel-arrow`, `a#w-tabs-0-data-w-tab-0.product-page-tab.w-tab-link`, `a#w-tabs-0-data-w-tab-1.product-page-tab.w-tab-link` (+4)
- `transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)` — `div.product-carousel-track`
- `background-color 0.2s` — `div#w-node-bfef3138-4d6d-3abe-ee38-bacf70a3b40f-e6bd8fe9.product-page-feature-block-new`, `div#w-node-bfef3138-4d6d-3abe-ee38-bacf70a3b417-e6bd8fe9.product-page-feature-block-new`, `div#w-node-bfef3138-4d6d-3abe-ee38-bacf70a3b41f-e6bd8fe9.product-page-feature-block-new`, `div#w-node-bfef3138-4d6d-3abe-ee38-bacf70a3b427-e6bd8fe9.product-page-feature-block-new`, `div#w-node-bfef3138-4d6d-3abe-ee38-bacf70a3b42f-e6bd8fe9.product-page-feature-block-new` (+7)
- `0.9s cubic-bezier(0.19, 1, 0.22, 1)` — `div.faq-block`, `div.faq-block_body`, `div.faq-block_answer`

## Assets (local path ↔ element)

| local file | kind | element | natural | displayed @1440 | source URL |
|---|---|---|---|---|---|
| `/assets/pages/swipe-file/68331d86cf0a6a7db433a56d_dot-grid.webp` | bg | `dot-bg` (s0.0) |  | 1440×1376 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68331d86cf0a6a7db433a56d_dot-grid.webp |
| `/assets/pages/swipe-file/animated-icon-swipefile.webm` | video | `` (s0.1.0.1.0.0.0.0) | 2000×2000 4.00s | 256×256 | https://publicassets.foreplay.co/animated-icon-swipefile.webm |
| `/assets/pages/swipe-file/animated-icon-swipefile.mov` | video | `` (s0.1.0.1.0.0.0.0) | 2000×2000 4.00s | 256×256 | https://publicassets.foreplay.co/animated-icon-swipefile.mov |
| `/assets/pages/swipe-file/682f9f72df2782e8df1d1114_pi-swipefile-hq.webp` | img | `product-hero-icon-image` (s0.1.0.1.0.1) | 0×0 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f72df2782e8df1d1114_pi-swipefile-hq.webp |
| `/assets/pages/swipe-file/!SwipeFile-2025_high.webm` | video | `` (s0.1.0.2.0.0) | 2800×1460 13.00s | 1094.9×541.9 | https://publicassets.foreplay.co/!SwipeFile-2025_high.webm |
| `/assets/pages/swipe-file/6820c07c2e5b8c350c8e1f4c_hero-empty-mockup.webp` | img | `product-hero-preview-image` (s0.1.0.2.1) | 1440×900 | 1360×850 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6820c07c2e5b8c350c8e1f4c_hero-empty-mockup.webp |
| `/assets/pages/swipe-file/68338a6524e01d2ff9f48747_product-video-swipefile-transcode.mp4` | bgvideo | `product-hero-video.w-background-video.w-background-video-atom` (s0.1.0.2.3) |  | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338a6524e01d2ff9f48747_product-video-swipefile-transcode.mp4 |
| `/assets/pages/swipe-file/68338a6524e01d2ff9f48747_product-video-swipefile-transcode.webm` | bgvideo | `product-hero-video.w-background-video.w-background-video-atom` (s0.1.0.2.3) |  | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338a6524e01d2ff9f48747_product-video-swipefile-transcode.webm |
| `/assets/pages/swipe-file/68338a6524e01d2ff9f48747_product-video-swipefile-poster-00001.jpg` | poster | `product-hero-video.w-background-video.w-background-video-atom` (s0.1.0.2.3) |  |  | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338a6524e01d2ff9f48747_product-video-swipefile-poster-00001.jpg |
| `/assets/pages/swipe-file/68338a6524e01d2ff9f48747_product-video-swipefile-poster-00001.jpg` | bg | `` (s0.1.0.2.3.0) |  | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338a6524e01d2ff9f48747_product-video-swipefile-poster-00001.jpg |
| `/assets/pages/swipe-file/68338a6524e01d2ff9f48747_product-video-swipefile-transcode.mp4` | video | `` (s0.1.0.2.3.0) | 1280×668 13.00s | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338a6524e01d2ff9f48747_product-video-swipefile-transcode.mp4 |
| `/assets/pages/swipe-file/68338a6524e01d2ff9f48747_product-video-swipefile-transcode.webm` | video | `` (s0.1.0.2.3.0) | 1280×668 13.00s | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338a6524e01d2ff9f48747_product-video-swipefile-transcode.webm |
| `/assets/pages/swipe-file/682dfe3a46d48842bb8f17db_before-swipefile.webp` | img | `static-product-page-image` (s1.0.0.0.0.1.0.1.0) | 1392×1128 | 462×374.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682dfe3a46d48842bb8f17db_before-swipefile.webp |
| `/assets/pages/swipe-file/682dfe3a5956e63970743aa1_after-swipefile.webp` | img | `static-product-page-image` (s1.0.0.0.0.1.1.1) | 1392×1129 | 462×374.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682dfe3a5956e63970743aa1_after-swipefile.webp |
| `/assets/pages/swipe-file/6446c0b1c2f78eaae4163bb9_competitor research.webp` | img | `product-carousel-image` (s2.0.0.1.0.0.0.0.0.0) | 595×270 | 561.6×255.5 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6446c0b1c2f78eaae4163bb9_competitor%20research.webp |
| `/assets/pages/swipe-file/646fac024fc1759bfea42a8f_Swipe-File-Tab-1.webp` | img | `product-page-tabs-image` (s3.0.0.1.0.1.0.0.0) | 1440×810 | 1264×711 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/646fac024fc1759bfea42a8f_Swipe-File-Tab-1.webp |
| `/assets/pages/swipe-file/646faff298f84dcd14fd6715_Swipe-File-Tab-2.webp` | img | `product-page-tabs-image` (s3.0.0.1.0.1.1.0.0) | 1440×810 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/646faff298f84dcd14fd6715_Swipe-File-Tab-2.webp |
| `/assets/pages/swipe-file/646faff31a3bf4f6ae060124_Swipe-File-Tab-3.webp` | img | `product-page-tabs-image` (s3.0.0.1.0.1.2.0.0) | 1440×810 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/646faff31a3bf4f6ae060124_Swipe-File-Tab-3.webp |
| `/assets/pages/swipe-file/64419c26788e98000d82fa26_No Expired Links.webp` | img | `product-page-feature-image` (s4.0.0.1.0.0.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64419c26788e98000d82fa26_No%20Expired%20Links.webp |
| `/assets/pages/swipe-file/64419c27702cee383050839c_Save All Ad Types.webp` | img | `product-page-feature-image` (s4.0.0.1.0.1.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64419c27702cee383050839c_Save%20All%20Ad%20Types.webp |
| `/assets/pages/swipe-file/64419c26ac48d69350ba5968_Ad Metadata.webp` | img | `product-page-feature-image` (s4.0.0.1.0.2.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64419c26ac48d69350ba5968_Ad%20Metadata.webp |
| `/assets/pages/swipe-file/6441d838bbed821cfc43c56c_Custom Tags.webp` | img | `product-page-feature-image` (s4.0.0.1.0.3.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6441d838bbed821cfc43c56c_Custom%20Tags.webp |
| `/assets/pages/swipe-file/64419c26aa612008aab9e28e_Filtering.webp` | img | `product-page-feature-image` (s4.0.0.1.0.4.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64419c26aa612008aab9e28e_Filtering.webp |
| `/assets/pages/swipe-file/64418894857cf21aa6e1b607_Share with Anyone.webp` | img | `product-page-feature-image` (s4.0.0.1.0.5.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64418894857cf21aa6e1b607_Share%20with%20Anyone.webp |
| `/assets/pages/swipe-file/6478be2ffe695cac2f9d4a34_290-2904512_awe-logo-gold-affiliate-world-conferences-logo.webp` | img | `testimonial-logo-image` (s4.0.0.2.0.0.0.0) | 553×310 | 120×40 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6478be2ffe695cac2f9d4a34_290-2904512_awe-logo-gold-affiliate-world-conferences-logo.webp |
| `/assets/pages/swipe-file/6478bd8550054135284b7d7f_matt-williams.webp` | img | `testimonial-author-image` (s4.0.0.2.0.0.0.2.0) | 500×500 | 48×48 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6478bd8550054135284b7d7f_matt-williams.webp |
| `/assets/pages/swipe-file/642db608b19bd600e001723a_awward-right.svg` | img | `testimonial-decoration.is-right` (s4.0.0.2.0.0.1) | 114×225 | 142.1×280.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/642db608b19bd600e001723a_awward-right.svg |
| `/assets/pages/swipe-file/642db6082db5f7803a7a121e_award-left.svg` | img | `testimonial-decoration` (s4.0.0.2.0.0.2) | 114×225 | 142.1×280.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/642db6082db5f7803a7a121e_award-left.svg |
| `/assets/pages/swipe-file/644186758b63b0137bd005d0_Real-Time Activity-5.png` | img | `product-page-feature-image` (s4.0.0.3.0.0.0) | 1200×600 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/644186758b63b0137bd005d0_Real-Time%20Activity-5.png |
| `/assets/pages/swipe-file/6441d1e93e756110132e66ad_Team Commenting.webp` | img | `product-page-feature-image` (s4.0.0.3.0.1.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6441d1e93e756110132e66ad_Team%20Commenting.webp |
| `/assets/pages/swipe-file/6441d1f1d8e29bb7aec06775_Embed in Notion.webp` | img | `product-page-feature-image` (s4.0.0.3.0.2.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6441d1f1d8e29bb7aec06775_Embed%20in%20Notion.webp |
| `/assets/pages/swipe-file/6441d6459aadc0c4b1ee27eb_Landing Page Screenshot.webp` | img | `product-page-feature-image` (s4.0.0.3.0.3.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6441d6459aadc0c4b1ee27eb_Landing%20Page%20Screenshot.webp |
| `/assets/pages/swipe-file/6441d645f6f0ee84bb0f170a_Ai Search.webp` | img | `product-page-feature-image` (s4.0.0.3.0.4.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6441d645f6f0ee84bb0f170a_Ai%20Search.webp |
| `/assets/pages/swipe-file/681b6844dfcf6665c1fd25e8_embed-in-website.webp` | img | `product-page-feature-image` (s4.0.0.3.0.5.0) | 600×300 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/681b6844dfcf6665c1fd25e8_embed-in-website.webp |
| `/assets/pages/swipe-file/62ab5053126567f2d1045a12_61867ad4caa11f2834eb5799_loop club logo-1.avif` | img | `testimonial-logo-image` (s4.0.0.4.0.0.0.0) | 200×200 | 120×40 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/62ab5053126567f2d1045a12_61867ad4caa11f2834eb5799_loop%20club%20logo-1.avif |
| `/assets/pages/swipe-file/62ab50d7b920aacfc304ae19_pqt5NNy9_400x400.webp` | img | `testimonial-author-image` (s4.0.0.4.0.0.0.2.0) | 400×400 | 48×48 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/62ab50d7b920aacfc304ae19_pqt5NNy9_400x400.webp |
| `/assets/pages/swipe-file/cta-swipe-file.mov` | video | `` (s5.0.0.0.1.0.0) | 1200×1200 3.37s | 880×880 | https://publicassets.foreplay.co/cta-swipe-file.mov |
| `/assets/682f93b40d86b433e8039cc9_iso-swipefile.webp` | img | `cta-block-icon-image` (s5.0.0.0.2.0) | 0×0 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f93b40d86b433e8039cc9_iso-swipefile.webp |

**Inline SVGs saved** (each distinct inline `<svg>` in page content):

- `/assets/pages/swipe-file/svg-svg-185ries.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/swipe-file/svg-carousel-icon-b7rq1z.svg` — 18×18 in `carousel-icon.w-embed`
- `/assets/pages/swipe-file/svg-carousel-icon-3j2fr4.svg` — 18×18 in `carousel-icon.w-embed`
- `/assets/pages/swipe-file/svg-product-page-tab-svg-j5imqi.svg` — 24×24 in `product-page-tab-svg.w-embed`
- `/assets/pages/swipe-file/svg-product-page-tab-svg-bzt1wt.svg` — 24×24 in `product-page-tab-svg.w-embed`
- `/assets/pages/swipe-file/svg-product-page-tab-svg-nf9d4q.svg` — 24×24 in `product-page-tab-svg.w-embed`
- `/assets/pages/swipe-file/svg-svg-bjw7ed.svg` — 0×0 in `svg.w-embed`
- `/assets/pages/swipe-file/svg-svg-wqicrt.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/swipe-file/svg-svg-1i4rn0n.svg` — 20×20 in `svg.w-embed`
- `/assets/pages/swipe-file/svg-svg-1lrvzzc.svg` — 24×24 in `svg.w-embed`

## Motion

### Webflow IX2 (from `Webflow.require("ix2").store.getState().ixData`, filtered to elements on this page outside nav/footer)

- **e-224** SCROLLING_IN_VIEW → GENERAL_CONTINUOUS_ACTION list `a-71` (Product / Hero Parallax) on `product-hero-animation-trigger` ×1; mq ["main","medium"]; config [{"continuousParameterGroupId":"a-71-p","smoothing":0,"startsEntering":false,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}]

- `a-71` "Product / Hero Parallax"
  - continuous SCROLL_PROGRESS:
    - @0%: TRANSFORM_SCALE .product-hero-sticky {"xValue":1,"yValue":1,"locked":true} ‖ TRANSFORM_MOVE .product-hero-sticky {"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"} ‖ STYLE_OPACITY .product-hero-sticky {"value":1,"unit":""}
    - @100%: TRANSFORM_MOVE .product-hero-sticky {"yValue":-33,"xUnit":"PX","yUnit":"%","zUnit":"PX"} ease inOutCubic ‖ TRANSFORM_SCALE .product-hero-sticky {"xValue":0.75,"yValue":0.75,"locked":true} ‖ STYLE_OPACITY .product-hero-sticky {"value":0,"unit":""}

### Running Web Animations after load (`document.getAnimations()`, page content only)

- none

### Widgets / embeds detected

- s0.1.0.1.0.0.0 `div.code-video.w-embed` 
- s0.1.0.2.0 `div.product-hero-video.w-embed` 
- s0.1.0.2.3 `div.product-hero-video.w-background-video.w-background-video-atom` {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338a6524e01d2ff9f48747_product-video-swipefile-poster-00001.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
- s3.0.0.1.0 `div.product-page-tabs.w-tabs` {"data-current":"Save Inspiration","data-easing":"ease","data-duration-in":"300","data-duration-out":"100"}
- s3.0.0.1.0.0.0 `a.product-page-tab.w-inline-block.w-tab-link.w--current` {"data-w-tab":"Save Inspiration"}
- s3.0.0.1.0.0.1 `a.product-page-tab.w-inline-block.w-tab-link` {"data-w-tab":"Organize & Tag"}
- s3.0.0.1.0.0.2 `a.product-page-tab.w-inline-block.w-tab-link` {"data-w-tab":"Share & Collaborate"}
- s3.0.0.1.0.1.0 `div.w-tab-pane.w--tab-active` {"data-w-tab":"Save Inspiration"}
- s3.0.0.1.0.1.1 `div.w-tab-pane` {"data-w-tab":"Organize & Tag"}
- s3.0.0.1.0.1.2 `div.w-tab-pane` {"data-w-tab":"Share & Collaborate"}
- s5.0.0.0.1.0 `div.code-video.w-embed` 
- s6.0.0.1.0 `div.code-style.w-embed` 
- s6.0.0.1.1 `div.w-dyn-list` 

### Page-level `<style>` embeds (verbatim CSS)

From s6.0.0.1.0:
```css
.chevron-icon {
    transition: all 900ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  [data-expanded="true"] .chevron-icon {
    transform: rotate(180deg);
  }
  [data-expanded="true"] .faq-block_head {
    color: white;
  }
```

## CSS rules for classes not used on the homepage (verbatim from `foreplay-3-0.shared.850e08b99.min.css`)

New classes: `product-hero` `product-hero-animation-trigger` `product-hero-sticky` `product-hero-icon` `product-hero-icon-video` `product-hero-icon-image` `product-hero-content` `hero-text` `max-w-lg` `text-white-84` `product-hero-preview` `product-hero-video` `product-hero-preview-image` `product-hero-preview-underlay` `product-page-solution` `product-page-solution-grid` `static-product-page-solution-card` `static-product-page-solution-text` `static-before-wrapper` `static-product-page-image` `solution-after` `product-page-padding-y` `section-content-main` `product-carousel` `product-carousel-viewport` `product-carousel-track` `slide` `slide-card` `product-carousel-image` `product-page-carousel-content` `product-page-carousel-text-content` `slide-arrows` `carousel-arrow` `is-disabled` `carousel-icon` `product-page-tabs` `product-page-tabs-menu` `product-page-tab` `product-page-tab-svg` `product-page-tab-icon` `product-page-tabs-content` `tabs-video-wrapper` `product-page-tabs-image` `product-page-feature-grid-new` `product-page-feature-block-new` `product-page-feature-image` `product-page-feature-content` `product-page-feature-text` `home-testimonial-wrapper` `testemonial-contents` `testimonial-logo-image` `text-quote` `testimonial-bio` `testimonial-author-image` `testimonial-avatar-text` `testimonial-decoration` `is-right` `negative-spacing-bottom` `cta` `cta-block` `cta-block-content` `flex-col-gap-2` `mobile-landscape-text-display-h4` `mobile-landscape-text-body-n` `flex-col-gap-3` `no-cc-required` `icon-20` `cta-block-animation` `cta-block-icon` `cta-block-icon-image` `faq` `faq-block-container` `faq-block` `faq-block_content` `faq-block_head` `faq-block_body` `faq-block_answer` `faq-rtb` `faq-block_icon` `faq-buttons` `ghost-icon-button` `icon-left`

```css
.old__section.black.cta { background-image: radial-gradient(circle farthest-side at 10% 100%,#10b98145,#3f8cf700 48%),radial-gradient(circle farthest-side at 90% 100%,#3f8cf778,#b331b900 66%),linear-gradient(to bottom,var(--black),var(--black)); padding-top: 5em; padding-bottom: 5em; }
.old__section.black.cta.brief { background-image: radial-gradient(circle farthest-side at 90% 100%,#10b98173,#b331b900 66%),linear-gradient(to bottom,var(--black),var(--black)); }
.old__section.black.cta.discovery { background-image: radial-gradient(circle farthest-side at 90% 100%,#7c3aed73,#b331b900 66%),linear-gradient(to bottom,var(--black),var(--black)); }
.home-testimonial-wrapper { padding-top: 120px; padding-bottom: 120px; position: relative; }
.testemonial-contents { gap: 24px; text-align: center; flex-direction: column; justify-content: center; align-items: center; max-width: 80%; margin-left: auto; margin-right: auto; display: flex; }
.testimonial-logo-image { object-fit: contain; width: 120px; max-height: 48px; }
.text-quote { color: var(--body); font-size: 1.5em; line-height: 150%; }
.testimonial-bio { gap: 16px; align-items: center; display: flex; }
.testimonial-avatar-text { text-align: left; }
.testimonial-decoration { opacity: 0.7; width: 12%; position: absolute; inset: 50% auto 50% 0%; transform: translateY(-50%); }
.testimonial-decoration.is-right { inset: 50% 0% 50% auto; }
.product-page-feature-grid-new { z-index: 4; gap: 24px; border-radius: 12px; grid-template-rows: auto; grid-template-columns: 1fr 1fr 1fr; grid-auto-columns: 1fr; display: grid; position: relative; overflow: hidden; }
.product-page-feature-block-new { z-index: 1; border: 1px solid var(--_lens---solid-700); border-radius: 20px; flex-direction: column; justify-content: flex-start; align-items: stretch; padding: 0px; transition: background-color 0.2s; display: flex; position: relative; overflow: hidden; }
.product-page-feature-block-new:hover { background-color: var(--_lens---solid-900); }
.product-page-feature-block-new.spyder-block:hover { background-color: var(--_lens---background); }
.product-page-tabs-menu { gap: 16px; grid-template-rows: auto; grid-template-columns: 1fr 1fr 1fr; grid-auto-columns: 1fr; justify-content: center; width: 100%; padding: 4px; display: grid; overflow: hidden; }
.product-page-tabs-menu.spyder { grid-template-columns: 1fr 1fr 1fr 1fr 1fr; }
.product-page-tabs { flex-direction: column; align-items: center; margin-top: 0px; display: flex; }
.product-page-tabs-image { border-radius: 32px; width: 100%; }
.tabs-video-wrapper { gap: 20px; flex-flow: column; padding-top: 20px; padding-bottom: 20px; display: flex; }
.slide-arrows { gap: 24px; justify-content: center; align-items: center; display: flex; }
.slide-card { color: rgb(28, 29, 33); border-radius: 28px; flex-flow: column; width: 39vw; max-width: 576px; height: 100%; min-height: 320px; display: flex; overflow: hidden; box-shadow: rgb(27, 28, 33) 0px 0px 0px 1px; }
.product-page-carousel-content { flex: 1 1 0%; padding: 24px; }
.product-page-carousel-content.small { padding-top: 1.2em; padding-bottom: 0.7em; }
.product-page-carousel-content.acm { flex-direction: row; align-items: stretch; height: 100%; padding: 1em; display: flex; }
.product-page-feature-image { align-self: center; width: 100%; height: auto; position: static; }
.section-content-main { flex-flow: column; padding-top: 48px; display: block; }
.testimonial-author-image { border-radius: 5px; width: 48px; height: 48px; }
.product-page-tab { gap: 8px; opacity: 0.44; color: var(--alpha-0); text-align: center; background-color: rgba(0, 0, 0, 0); border-radius: 8px; flex-flow: row; justify-content: center; align-items: center; padding: 10px 20px; transition: 0.2s; display: flex; }
.product-page-tab:hover { opacity: 0.75; outline-offset: 0px; outline: rgb(255, 255, 255) 3px; }
.product-page-tab:active, .product-page-tab:focus { outline-offset: 0px; outline: rgb(255, 255, 255) 3px; }
.product-page-tab.w--current { opacity: 1; background-color: rgba(0, 0, 0, 0); }
.product-page-tab.spyder { flex-flow: column; justify-content: flex-start; align-items: center; }
.icon-20 { width: 20px; height: 20px; }
.icon-20.flip { transform: rotate(180deg); }
.button-icon-block.icon-left { z-index: 2; margin-right: -4px; }
.product-hero-content { gap: 28px; flex-flow: column; justify-content: flex-start; align-items: center; display: flex; }
.hero-text { gap: 16px; flex-flow: column; justify-content: flex-start; align-items: center; max-width: 900px; display: flex; }
.max-w-lg { max-width: 512px; }
.faq { gap: 48px; flex-flow: column; padding-top: 140px; padding-bottom: 140px; display: flex; }
.faq-block { gap: 44px; border-bottom: 1px solid var(--_lens---neutral-700); color: var(--_lens---neutral-100); cursor: pointer; flex-flow: row; justify-content: center; align-items: flex-start; padding-top: 20px; padding-bottom: 12px; transition: 0.9s cubic-bezier(0.19, 1, 0.22, 1); display: flex; }
.faq-block:hover { color: var(--_lens---neutral-0); }
.faq-block-container { width: 100%; max-width: 752px; margin-left: auto; margin-right: auto; }
.faq-block_head { gap: 44px; align-items: center; display: flex; }
.faq-block_body { height: 0px; transition: 0.9s cubic-bezier(0.19, 1, 0.22, 1); overflow: hidden; }
.faq-block_icon { justify-content: center; align-items: center; width: 28px; height: 28px; transition: 0.2s; display: flex; }
.faq-block_content { flex-flow: column; flex: 1 1 0%; display: flex; }
.faq-block_answer { opacity: 1; padding-top: 8px; padding-bottom: 8px; transition: 0.9s cubic-bezier(0.19, 1, 0.22, 1); overflow: hidden; }
.faq-buttons { gap: 12px; justify-content: center; align-items: center; padding-top: 12px; padding-bottom: 12px; display: flex; }
.flex-col-gap-2 { gap: 8px; flex-flow: column; justify-content: flex-start; align-items: center; display: flex; }
.flex-col-gap-2.align-start { justify-content: flex-start; align-items: flex-start; }
.button-dark.ghost-icon-button { gap: 5px; background-color: var(--_lens---background); color: var(--_lens---solid-0); }
.button-dark.ghost-icon-button:hover { background-color: var(--_lens---neutral-700); }
.button-dark.ghost-icon-button:active { background-color: var(--_lens---neutral-500); color: var(--_lens---solid-0); }
.button-dark.ghost-icon-button:focus { box-shadow: 0 0 0 2px var(--_lens---background),0 0 0 3px white; }
.cta { padding-top: 80px; padding-bottom: 80px; }
.cta-block { background-color: var(--_lens---background); box-shadow: 0 0 0 1px var(--_lens---solid-700); border-radius: 36px; padding: 84px; position: relative; overflow: hidden; }
.flex-col-gap-3 { gap: 12px; flex-flow: column; justify-content: center; align-items: flex-start; display: flex; }
.cta-block-content { z-index: 1; gap: 32px; flex-flow: column; max-width: 66%; display: flex; position: relative; }
.cta-block-animation { z-index: 0; mix-blend-mode: lighten; width: 880px; height: 880px; position: absolute; inset: -50% -25% 0% auto; }
.product-hero-preview-image { z-index: 2; aspect-ratio: 16 / 10; pointer-events: none; width: 100%; height: auto; position: relative; }
.product-hero-preview-underlay { background-image: linear-gradient(0deg,var(--_lens---background)75%,#02030800); pointer-events: none; width: 100vw; position: absolute; inset: -12% auto 0%; }
.product-hero-animation-trigger { pointer-events: none; height: 100vh; position: absolute; inset: -72px 0% auto; }
.product-page-carousel-text-content { z-index: 1; gap: 7px; color: var(--_lens---neutral-0); flex-flow: column; display: flex; position: relative; }
.product-page-solution-grid { gap: 16px; grid-template-rows: auto; grid-template-columns: 1fr 1fr; grid-auto-columns: 1fr; align-self: stretch; display: grid; }
.product-page-solution-card.solution-after { background-color: var(--_lens---background); box-shadow: none; color: var(--_lens---neutral-100); }
.product-page-padding-y { flex-flow: column; padding-top: 108px; padding-bottom: 108px; display: flex; overflow: hidden; }
.product-page-tab-icon, .product-page-tab-svg { width: 24px; height: 24px; }
.product-page-tabs-content { overflow: visible; }
.product-page-feature-text { gap: 8px; flex-flow: column; display: flex; }
.product-page-feature-content { flex: 1 1 0%; justify-content: flex-start; align-items: flex-end; padding: 24px; display: flex; }
.product-page-solution { gap: 36px; text-align: center; flex-flow: column; justify-content: flex-start; align-items: stretch; max-width: 940px; margin-left: auto; margin-right: auto; padding-top: 80px; padding-bottom: 80px; display: flex; }
.slide { flex: 0 0 auto; }
.product-carousel { position: relative; }
.carousel-arrow { background-color: var(--_lens---neutral-800); width: 36px; height: 36px; color: var(--_lens---neutral-600); cursor: pointer; border-radius: 200vw; justify-content: center; align-items: center; transition: 0.2s; display: flex; position: relative; }
.carousel-arrow:hover { background-color: var(--_lens---neutral-600); color: var(--_lens---neutral-25); }
.carousel-arrow.is-disabled { opacity: 0.5; pointer-events: none; }
.carousel-icon { width: 18px; height: 18px; }
.product-carousel-viewport { gap: 48px; flex-flow: column; padding-top: 64px; display: flex; }
.product-carousel-track { gap: 16px; will-change: transform; justify-content: flex-start; align-items: stretch; transition-property: transform; transition-duration: 0.8s; transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); display: flex; transform: translate(0px); }
.negative-spacing-bottom { height: 0px; margin-bottom: -80px; }
.product-carousel-image { object-fit: cover; flex: 1 1 0%; width: 100%; height: 100%; }
.product-hero-preview { aspect-ratio: 16 / 10; perspective: 1000px; transform-origin: 50% center; flex-flow: column; justify-content: flex-start; align-self: stretch; align-items: center; margin-top: 52px; margin-bottom: -48px; display: flex; position: relative; }
.product-hero { text-align: center; flex-flow: column; justify-content: flex-start; align-items: center; padding-top: 10px; padding-bottom: 0px; display: flex; }
.product-hero.mobile-app-hero { padding-bottom: 30px; }
.product-hero-sticky { flex-flow: column; justify-content: flex-start; align-items: center; display: flex; position: sticky; top: 100px; }
.product-hero-icon { width: 256px; height: 256px; margin-top: -40px; margin-bottom: -24px; }
.product-hero-video { z-index: 1; background-color: var(--_lens---background); aspect-ratio: 1400 / 730; width: 77.8%; height: auto; transform-style: preserve-3d; justify-content: center; align-items: center; margin: 0px; padding: 0px; display: flex; position: absolute; top: 6.6%; left: 11%; overflow: hidden; transform: rotateX(7deg) rotateY(0deg) rotate(0deg); }
.static-product-page-solution-card { gap: 20px; box-shadow: inset 0 0 0 1px var(--_lens---solid-50); color: var(--_lens---solid-500); border-radius: 20px; flex-flow: column; padding: 0px; display: flex; overflow: hidden; }
.static-product-page-solution-card.solution-after { background-color: var(--_lens---background); box-shadow: none; color: var(--_lens---neutral-100); }
.static-product-page-solution-text { padding: 20px 20px 0px; }
.static-product-page-image { position: relative; }
.static-before-wrapper { z-index: -1; position: relative; }
.product-hero-icon-image, .lens-integrations-image { display: none; }
.cta-block-icon-image { display: none; }
.comparison-reviews-card.solution-after { background-color: var(--_lens---background); box-shadow: none; color: var(--_lens---neutral-100); }
.no-cc-required { display: none; }
@media screen and (min-width: 1280px) {
  .old__section.black.cta { padding-top: 10em; padding-bottom: 10em; }
}
@media screen and (max-width: 991px) {
  .home-testimonial-wrapper { padding-top: 108px; padding-bottom: 108px; }
  .testemonial-contents { max-width: 640px; }
  .testimonial-decoration { width: 20%; height: 100%; left: -10%; }
  .testimonial-decoration.is-right { right: -10%; }
  .product-page-feature-grid-new { grid-template-columns: 1fr 1fr; }
  .product-page-tabs-menu.spyder { flex-flow: wrap; grid-template-columns: 1fr 1fr 1fr; align-items: center; padding-left: 57px; padding-right: 57px; display: flex; }
  .slide-card { width: 480px; }
  .product-page-tab { padding: 8px 12px; }
  .cta-block { padding: 64px 64px 0px; }
  .cta-block-content { flex-flow: column; max-width: none; }
  .cta-block-animation { width: 440px; height: 440px; margin-top: -100px; margin-bottom: -100px; display: none; position: relative; left: -20%; right: 0%; }
  .product-page-padding-y { padding-top: 96px; padding-bottom: 96px; }
  .product-page-tabs-content { width: 100%; }
  .product-hero-preview { overflow: clip; }
  .product-hero-icon { width: auto; height: auto; margin-top: 0px; margin-bottom: 0px; padding: 32px; }
  .product-hero-video { width: 77.5%; left: 11%; transform: rotateX(9deg) rotateY(0deg) rotate(0deg); }
  .product-hero-icon-image { width: 128px; height: 128px; display: block; }
  .product-hero-icon-video { display: none; }
  .cta-block-icon { flex-flow: column; justify-content: center; align-items: center; display: flex; }
  .cta-block-icon-image { width: 300px; max-width: none; height: 300px; display: block; }
}
@media screen and (max-width: 767px) {
  .home-testimonial-wrapper { padding-top: 80px; padding-bottom: 80px; }
  .text-quote { font-size: 1.2em; }
  .grid-13, .product-page-feature-grid-new { grid-template-columns: 1fr; }
  .product-page-tabs-menu { row-gap: 0px; border-radius: 10px; grid-template-columns: 1fr 1fr 1fr; width: 100%; }
  .product-page-tabs-menu.spyder { row-gap: 16px; grid-template-columns: 1fr 1fr; padding-left: 4px; padding-right: 4px; }
  .slide-card { width: 400px; }
  .product-page-tab { border-radius: 8px; flex-flow: column; justify-content: flex-start; align-items: center; }
  .text-body-l.mobile-landscape-text-body-n { font-size: 1rem; line-height: 1.5rem; }
  .text-display-h3.mobile-landscape-text-display-h4 { font-size: 1.75rem; line-height: 2.25rem; }
  .faq { gap: 40px; padding-top: 80px; padding-bottom: 80px; }
  .cta-block { padding: 48px 40px 0px; }
  .product-hero-preview-image { width: 100%; margin-left: 0px; margin-right: 0px; }
  .product-hero-preview-underlay { display: none; }
  .product-page-solution-grid { grid-template-columns: 1fr; }
  .product-page-padding-y { padding-top: 80px; padding-bottom: 80px; overflow: hidden; }
  .product-page-solution { max-width: 480px; padding-top: 80px; padding-bottom: 64px; }
  .carousel-arrow { width: 44px; height: 44px; }
  .product-hero-preview { width: 100%; margin-left: 0px; margin-right: 0px; }
  .product-hero { padding-top: 64px; }
  .product-hero-sticky { position: relative; top: 0px; }
  .product-hero-video { width: 77.7%; }
  .cta-block-icon { margin-top: 24px; }
  .cta-block-icon-image { margin-bottom: -64px; }
}
@media screen and (max-width: 479px) {
  .old__section.black.cta { padding-top: 5em; padding-bottom: 5em; }
  .testimonial-logo-image { width: 96px; max-height: 40px; }
  .text-quote { font-size: 1em; }
  .testimonial-decoration { width: 40%; }
  .product-page-tabs-menu { grid-template-columns: 1fr; }
  .product-page-tabs-image { border-radius: 16px; }
  .slide-arrows { justify-content: center; padding-top: 0px; }
  .slide-card { width: calc(-48px + 100vw); padding-top: 0px; padding-left: 0%; padding-right: 0%; }
  .product-page-carousel-content { padding-top: 1em; padding-left: 1em; padding-right: 1em; }
  .section-content-main { padding-top: 40px; }
  .testimonial-author-image { width: 40px; height: 40px; }
  .product-page-tab { flex-flow: column; }
  .product-page-tab.fireside { flex-flow: row; justify-content: center; align-items: center; }
  .product-hero-content { gap: 24px; padding-bottom: 24px; position: relative; }
  .hero-text { gap: 12px; }
  .faq { padding-top: 64px; padding-bottom: 80px; }
  .faq-buttons { flex-flow: column; align-items: stretch; }
  .cta-block { padding-top: 32px; padding-left: 32px; padding-right: 32px; }
  .cta-block-animation { width: auto; margin: -55% -115px -133px -100px; top: -25%; }
  .product-hero-preview-image { width: 100%; }
  .product-page-solution { gap: 32px; padding-top: 48px; padding-bottom: 32px; }
  .product-hero-preview { transform-origin: 50% 100%; width: 100%; margin-top: 40px; overflow: clip; }
  .product-hero { padding-top: 24px; padding-bottom: 24px; }
  .product-hero-sticky { position: relative; top: 0px; }
  .product-hero-icon { padding: 24px; }
  .static-product-page-solution-card, .static-product-page-solution-card.solution-after { padding-top: 0px; }
  .product-hero-icon-image { width: 108px; height: 108px; }
  .cta-block-icon-image { width: 256px; height: 256px; }
  .comparison-reviews-card, .comparison-reviews-card.solution-after { padding-top: 0px; }
}
```


## Caveats

- Third-party embeds (YouTube lightbox, Cal.com, Senja, Wistia) are noted but their internals were not measured.
- Hover/focus/active values come from the verbatim CSS rules above, plus the homepage spec for shared classes. They were not captured by hovering.
- `y` values are offsets inside each section at that width. Geometry for JS-cloned nodes (marquee clones) is only comparable for the original items.
