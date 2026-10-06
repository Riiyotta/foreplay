Source: https://www.foreplay.co/discovery

# /discovery: Discovery | Facebook & TikTok Ad Inspiration Library

Measured on 2026-10-06 with headless Chromium (Playwright 1.63) at 1440×900, 991×900 and 390×844, after a full scroll pass. The Navbar and Footer have the same DOM as the homepage, so reuse `Navbar.jsx` and `Footer.jsx` (CLONE_SPEC.md §1 and §8). Tokens, buttons and type classes are in CLONE_SPEC.md §0; anything shared between these pages is in `specs/_shared-pages.md`. **Copy policy:** short UI strings are verbatim, and long copy is given only as ‹copy: ~N chars, L lines @1440›. Assets are local paths under `public/` (`/assets/...`). Files that already existed in `public/assets` were reused rather than re-downloaded, which is why some paths point at other page folders or at the root. Blocks that are identical to the homepage (the final CTA `.home-cta`, the Chrome-extension card `.home-extension`, and the logo strip `.home-hero-bottom`) are collapsed to a single line, "uses <Component> from src/components". Their internals are not re-specced and their assets were not re-downloaded.

## Build notes (summary)

- **Template:** this page uses the product template (`_shared-pages.md` §1). S1 hero ("DISCOVERY" / "Search over 100 million incredible ad ideas", icon video `animated-icon-discovery.webm`), S2 solution block, S3 carousel with **4** slides, S4 tabs ("AI Search", "Historical Ads", "Emotional Analysis") plus the Chrome-extension card, S5 a single 6-card feature grid plus one testimonial, S6 CTA (`cta-discovery.mov`), S7 FAQ, S8 home CTA.
- **Reuse:** same as swipe-file. Tab icons are `TabDiscovery0..2` in `svgs.jsx`. Some SVG hashes match the swipe-file ones; the saved copies are in this page's folder.
- **Page `<style>` embed in S2** (see the Motion section below) adds per-page CSS. It is quoted verbatim there.
- **Motion:** IX2 a-71 hero parallax, Webflow tab fade, carousel, FAQ accordion. Same as swipe-file.
- **Embeds:** none.

## Page meta (measured)

- Webflow page id `647668309e49d3c3f7a76531`. Title: `Discovery | Facebook & TikTok Ad Inspiration Library`.
- Meta description: ~151 chars (not transcribed).
- Document height: 1440 → 9994, 991 → 9971, 390 → 11052. Body bg rgb(2, 3, 8).
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
      - `div.product-hero-animation-trigger` — 1440×900 @0,-72 | 991: 991×900 @0,-72 | 390: 390×844 @0,-72 · pos:absolute [-72px 0px 548px 0px]; pe:none · ix2 w-id eee8f4a1-74d3-3f60-52d5-2a354d1e86d5
      - `div.product-hero-sticky` — 900×512 @270,28 | 991: 900×512 @46,28 | 390: 342×524 @24,24 · display:flex; dir:column; align:center; pos:sticky [100px auto auto auto]; transform:matrix(1, 0, 0, 1, 0, 0) · Δ390{pos:relative; transform:none}
        - `div.product-hero-icon` — 256×256 @592,-12 | 991: 192×192 @400,28 | 390: 156×156 @117,24 · mar:-40px 0px -24px 0px · Δ991{pad:32px; mar:0px} · Δ390{pad:24px; mar:0px}
          - `div.code-video.w-embed` — 256×256 @592,-12 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; pos:relative
            - `video` — 256×256 @592,-12 | 991: hidden | 390: hidden · overflow:clip; fit:contain · ASSET `/assets/pages/discovery/animated-icon-discovery.webm`, `/assets/pages/discovery/animated-icon-discovery.mov` · VIDEO {"srcs":["animated-icon-discovery.webm","animated-icon-discovery.mov"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":2000,"vh":2000,"dur":4,"preload":"metadata"}
          - `img.product-hero-icon-image` — hidden | 991: 128×128 @432,60 | 390: 108×108 @141,48 · display:none; maxw:100%; overflow:clip; fit:fill; aspect:auto 128 / 128 · Δ991{display:block} · Δ390{display:block} · IMG `/assets/pages/discovery/682f9f722b39359a238b0ff9_pi-discovery-hq.webp` natural 0×0 loading=lazy alt "magnifying glass discovery logo"
        - `div.product-hero-content` — 900×320 @270,220 | 991: 900×320 @46,220 | 390: 342×368 @24,180 · display:flex; dir:column; align:center; gap:28px · Δ390{gap:24px; pad:0px 0px 24px 0px; pos:relative}
          - `h1.text-overline.text-white-68` — 87.5×16 @676,220 | 991: 87.5×16 @452,220 | 390: 87.5×16 @151,180 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "DISCOVERY"
          - `div.hero-text` — 900×208 @270,264 | 991: 900×208 @46,264 | 390: 342×240 @24,220 · display:flex; dir:column; align:center; gap:16px; maxw:900px · Δ390{gap:12px}
            - `h2.text-display-h1.hero-title` — 900×136 @270,264 | 991: 900×136 @46,264 | 390: 342×144 @24,220 · bgimg:radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88)); bgsize:auto; bgpos:0% 0%; bgclip:text; font:Inter Display 60px/68px w600 ls-0.45px; color:rgba(255, 255, 255, 0.88); align-text:center; wrap-text:balance; fill:rgba(0, 0, 0, 0) · Δ390{font:38px/48px; ls:-0.285px} "Search over 100 million incredible ad ideas" (2 lines)
            - `div.max-w-lg` — 512×56 @464,416 | 991: 512×56 @240,416 | 390: 342×84 @24,376 · maxw:512px
              - `p.text-body-l.text-white-84` — 512×56 @464,416 | 991: 512×56 @240,416 | 390: 342×84 @24,376 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center ‹copy: ~118 chars, 2 lines @1440›
          - `a.button-dark.button-primary` — 152.6×40 @644,500 | 991: 152.6×40 @419,500 | 390: 152.6×40 @119,484 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; flex:1 1 0%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `https://app.foreplay.co/sign-up`
            - `div.button-text-block` — 116.6×24 @652,508 | 991: 116.6×24 @427,508 | 390: 116.6×24 @127,492 · pos:relative; pad:0px 6px; z:2
              - `div.text-heading-m` — 104.6×24 @658,508 | 991: 104.6×24 @433,508 | 390: 104.6×24 @133,492 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14); align-text:center "Start free trial"
            - `div.button-icon-block.icon-right.opacity-100` — 24×24 @764,508 | 991: 24×24 @540,508 | 390: 24×24 @239,492 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; z:2
              - `div.icon-medium` — 24×24 @764,508 | 991: 24×24 @540,508 | 390: 24×24 @239,492 · display:flex; justify:center; align:center
                - `div.svg.w-embed` — 24×24 @764,508 | 991: 24×24 @540,508 | 390: 24×24 @239,492 · display:flex; justify:center; align:center
                  - `svg` — 24×24 @764,508 | 991: 24×24 @540,508 | 390: 24×24 @239,492 · overflow:hidden · SVG `/assets/pages/discovery/svg-svg-185ries.svg`
      - `div.product-hero-preview` — 1360×850 @40,574 | 991: 927×579.4 @32,574 | 390: 342×213.8 @24,588 · display:flex; dir:column; align:center; pos:relative; mar:52px 0px -48px 0px; aself:stretch; aspect:16 / 10 · Δ390{mar:40px 0px -48px 0px}
        - `img.product-hero-preview-image` — 1360×850 @40,574 | 991: 927×579.4 @32,574 | 390: 342×213.8 @24,588 · pos:relative; maxw:100%; overflow:clip; z:2; fit:fill; aspect:16 / 10; pe:none · IMG `/assets/pages/swipe-file/6820c07c2e5b8c350c8e1f4c_hero-empty-mockup.webp` natural 1440×900 loading=lazy alt "apple pro xdr monnitor mockup"
        - `div.product-hero-video.w-background-video` — 1094.9×541.9 @171,644 | 991: 740.1×366.5 @123,622 | 390: 268.6×136.3 @60,604 · display:flex; justify:center; align:center; pos:absolute [56.0938px 152.328px 242.203px 149.594px]; bg:rgb(2, 3, 8); transform:matrix3d(1, 0, 0, 0, 0, 0.992546, 0.121869, 0, 0, -0.121869, 0.992546, 0, 0, 0, 0, 1); overflow:hidden; z:1; aspect:1400 / 730 · Δ991{transform:matrix3d(1, 0, 0, 0, 0, 0.987688, 0.156434, 0, 0, -0.156434, 0.987688, 0, 0, 0, 0, 1)} · Δ390{transform:matrix3d(1, 0, 0, 0, 0, 0.987688, 0.156434, 0, 0, -0.156434, 0.987688, 0, 0, 0, 0, 1)} · ASSET `/assets/pages/discovery/68338a8a2fcb274d77daaec1_product-video-discovery-transcode.mp4`, `/assets/pages/discovery/68338a8a2fcb274d77daaec1_product-video-discovery-transcode.webm`, `/assets/pages/discovery/68338a8a2fcb274d77daaec1_product-video-discovery-poster-00001.jpg` · data {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338a8a2fcb274d77daaec1_product-video-discovery-poster-00001.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
          - `video#2763a6f8-9c23-8542-1bcc-f0df9782dd98-video` — 1094.9×541.9 @171,644 | 991: 740.1×366.5 @123,622 | 390: 268.6×136.3 @60,604 · pos:absolute [-551.703px -1058.08px -551.703px -1058.08px]; mar:551.703px 1058.08px; bgimg:url(62a4ed18ddad95dde8b8bfa4/68338a8a2fcb274d77daaec1_product-video-discovery-poster-00001.jpg); bgsize:cover; bgpos:50% 50%; overflow:clip; z:-100; fit:cover · Δ991{mar:374.594px 718.422px} · Δ390{mar:138.547px 265.719px} · ASSET `/assets/pages/discovery/68338a8a2fcb274d77daaec1_product-video-discovery-poster-00001.jpg`, `/assets/pages/discovery/68338a8a2fcb274d77daaec1_product-video-discovery-transcode.mp4`, `/assets/pages/discovery/68338a8a2fcb274d77daaec1_product-video-discovery-transcode.webm` · VIDEO {"srcs":["62a4ed18ddad95dde8b8bfa4/68338a8a2fcb274d77daaec1_product-video-discovery-transcode.mp4","62a4ed18ddad95dde8b8bfa4/68338a8a2fcb274d77daaec1_product-video-discovery-transcode.webm"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":1280,"vh":668,"dur":12.5,"preload":"metadata"} · data {"data-wf-ignore":"true","data-object-fit":"cover"}
        - `div.product-hero-preview-underlay` — 1440×952 @0,472 | 991: 991×648.9 @0,504 | 390: hidden · pos:absolute [-102px -40px 0px -40px]; bgimg:linear-gradient(0deg, rgb(2, 3, 8) 75%, rgba(2, 3, 8, 0)); bgsize:auto; bgpos:0% 0%; pe:none · Δ390{display:none}

### S2. `section.section`

y/height: 1440 1448/782.4 · 991 1177/770.7 · 390 850/1076.4

- `div.section-padding` — 1440×782.4 @0,0 | 991: 991×770.7 @0,0 | 390: 390×1076.4 @0,0 · pad:8px
  - `div.section-white-block` — 1424×766.4 @8,8 | 991: 975×754.7 @8,8 | 390: 374×1060.4 @8,8 · pos:relative; bg:rgb(255, 255, 255); radius:36px; overflow:hidden; z:2 · Δ390{radius:16px}
    - `div.container.section-container` — 1344×766.4 @48,8 | 991: 975×754.7 @8,8 | 390: 374×1060.4 @8,8 · pad:0px 40px; mar:0px 40px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
      - `div.product-page-solution` — 940×766.4 @250,8 | 991: 911×754.7 @40,8 | 390: 326×1060.4 @32,8 · display:flex; dir:column; gap:36px; pad:80px 0px; mar:0px 162px; maxw:940px · Δ991{mar:0px} · Δ390{gap:32px; pad:48px 0px 32px 0px; mar:0px; maxw:480px}
        - `div.section-head` — 720×104 @360,88 | 991: 720×104 @136,88 | 390: 326×172 @32,56 · display:flex; dir:column; align:center; gap:12px; mar:0px 110px; maxw:720px · Δ991{mar:0px 95.5px} · Δ390{mar:0px}
          - `div.section-head-wrapper` — 587.2×104 @426,88 | 991: 587.2×104 @202,88 | 390: 326×172 @32,56 · display:flex; dir:column; align:center; gap:12px
            - `h2.text-display-h3` — 587.2×44 @426,88 | 991: 587.2×44 @202,88 | 390: 326×88 @32,56 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(23, 25, 32); align-text:center; wrap-text:balance "You need a top-tier ad search engine"
            - `div.section-head_paragraph` — 512×48 @464,144 | 991: 512×48 @240,144 | 390: 326×72 @32,156 · maxw:512px
              - `p.text-body-m` — 512×48 @464,144 | 991: 512×48 @240,144 | 390: 326×72 @32,156 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(36, 38, 46); align-text:center; wrap-text:pretty ‹copy: ~93 chars, 2 lines @1440›
        - `div.product-page-solution-grid` — 940×466.4 @250,228 | 991: 911×454.7 @40,228 | 390: 326×776.4 @32,260 · display:grid; cols:462px 462px; rows:466.438px; gap:16px; aself:stretch · Δ991{cols:447.5px 447.5px} · Δ390{cols:326px}
          - `div.static-product-page-solution-card` — 462×466.4 @250,228 | 991: 447.5×454.7 @40,228 | 390: 326×380.2 @32,260 · display:flex; dir:column; gap:20px; radius:20px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px inset; overflow:hidden
            - `div.static-product-page-solution-text` — 462×72 @250,228 | 991: 447.5×72 @40,228 | 390: 326×96 @32,260 · pad:20px 20px 0px 20px
              - `div.home-winning-card-text` — 422×52 @270,248 | 991: 407.5×52 @60,248 | 390: 286×76 @52,280 · pos:relative; z:10; pe:none
                - `div.flex-col-gap-1.align-start` — 422×52 @270,248 | 991: 407.5×52 @60,248 | 390: 286×76 @52,280 · display:flex; dir:column; align:flex-start; gap:4px; pe:none
                  - `div.text-solid-900` — 74×24 @270,248 | 991: 74×24 @60,248 | 390: 65.8×24 @52,280 · pe:none
                    - `div.text-label-l` — 74×24 @270,248 | 991: 74×24 @60,248 | 390: 65.8×24 @52,280 · pe:none; font:Inter 18px/24px w500 ls-0.259999px; color:rgb(9, 10, 14) · Δ390{font:16px/24px; ls:-0.23111px} "Before ..."
                  - `div.text-solid-500` — 371.9×24 @270,276 | 991: 371.9×24 @60,276 | 390: 286×48 @52,308 · pe:none
                    - `div` — 371.9×24 @270,276 | 991: 371.9×24 @60,276 | 390: 286×48 @52,308 · pe:none; font:Inter 16px/24px w400 ls-0.18px; color:rgb(52, 54, 66); wrap-text:pretty "Limited searches, messy folders and minimal data."
            - `div.static-before-wrapper` — 462×374.4 @250,320 | 991: 447.5×362.6 @40,320 | 390: 326×264.2 @32,376 · pos:relative; z:-1
              - `img.static-product-page-image` — 462×374.4 @250,320 | 991: 447.5×362.6 @40,320 | 390: 326×264.2 @32,376 · pos:relative; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/discovery/682e02bbeb2b8d4676c51bcb_before-discovery.webp` natural 1392×1128 loading=lazy
          - `div.static-product-page-solution-card.solution-after` — 462×466.4 @728,228 | 991: 447.5×454.7 @504,228 | 390: 326×380.2 @32,656 · display:flex; dir:column; gap:20px; bg:rgb(2, 3, 8); radius:20px; overflow:hidden
            - `div.static-product-page-solution-text` — 462×72 @728,228 | 991: 447.5×72 @504,228 | 390: 326×96 @32,656 · pad:20px 20px 0px 20px
              - `div.home-winning-card-text` — 422×52 @748,248 | 991: 407.5×52 @524,248 | 390: 286×76 @52,676 · pos:relative; z:10; pe:none
                - `div.flex-col-gap-1.align-start` — 422×52 @748,248 | 991: 407.5×52 @524,248 | 390: 286×76 @52,676 · display:flex; dir:column; align:flex-start; gap:4px; pe:none
                  - `div.text-white` — 117.9×24 @748,248 | 991: 117.9×24 @524,248 | 390: 104.8×24 @52,676 · pe:none
                    - `div.text-label-l` — 117.9×24 @748,248 | 991: 117.9×24 @524,248 | 390: 104.8×24 @52,676 · pe:none; font:Inter 18px/24px w500 ls-0.259999px; color:rgb(255, 255, 255) · Δ390{font:16px/24px; ls:-0.23111px} "After Foreplay"
                  - `div.text-alpha-100` — 360.2×24 @748,276 | 991: 360.2×24 @524,276 | 390: 286×48 @52,704 · flex:1 1 0%; pe:none
                    - `div` — 360.2×24 @748,276 | 991: 360.2×24 @524,276 | 390: 286×48 @52,704 · pe:none; font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Search the largest winning ad creative database."
            - `img.static-product-page-image` — 462×374.4 @728,320 | 991: 447.5×362.7 @504,320 | 390: 326×264.2 @32,772 · pos:relative; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/discovery/682e02bb2bfe3aa652c28c43_after-discovery.webp` natural 1393×1129 loading=lazy

### S3. `div.section`

y/height: 1440 2230/972.3 · 991 1948/909.4 · 390 1926/924

- `div.product-page-padding-y` — 1440×972.3 @0,0 | 991: 991×909.4 @0,0 | 390: 390×924 @0,0 · display:flex; dir:column; pad:108px 0px; overflow:hidden · Δ991{pad:96px 0px} · Δ390{pad:80px 0px}
  - `div.section-content-main` — 1440×756.3 @0,108 | 991: 991×717.4 @0,96 | 390: 390×764 @0,80 · pad:48px 0px 0px 0px · Δ390{pad:40px 0px 0px 0px}
    - `div.container` — 1440×177.8 @0,156 | 991: 991×176 @0,144 | 390: 390×248 @0,120 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
      - `div.section-head` — 720×177.8 @360,156 | 991: 720×176 @136,144 | 390: 342×248 @24,120 · display:flex; dir:column; align:center; gap:12px; mar:0px 320px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
        - `div.section-head-wrapper` — 519.8×177.8 @460,156 | 991: 512×176 @240,144 | 390: 342×248 @24,120 · display:flex; dir:column; align:center; gap:12px
          - `div.text-overline.text-white-68` — 85.1×16 @677,156 | 991: 85.1×16 @453,144 | 390: 85.1×16 @152,120 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "USE CASES"
          - `h2.text-display-h2` — 519.8×53.8 @460,184 | 991: 472.5×52 @259,172 | 390: 342×96 @24,148 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Discover your next best ad"
          - `div.section-head_paragraph` — 512×84 @464,250 | 991: 512×84 @240,236 | 390: 342×112 @24,256 · maxw:512px
            - `p.text-body-l` — 512×84 @464,250 | 991: 512×84 @240,236 | 390: 342×112 @24,256 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~154 chars, 3 lines @1440›
    - `div.product-carousel` — 1440×530.5 @0,334 | 991: 991×493.4 @0,320 | 390: 390×476 @0,368 · pos:relative · data {"data-carousel":""}
      - `div.container.section-container` — 1344×530.5 @48,334 | 991: 991×493.4 @0,320 | 390: 390×476 @0,368 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
        - `div.product-carousel-viewport` — 1264×530.5 @88,334 | 991: 927×493.4 @32,320 | 390: 342×476 @24,368 · display:flex; dir:column; gap:48px; pad:64px 0px 0px 0px
          - `div.product-carousel-track` — 1264×382.5 @88,398 | 991: 927×345.4 @32,384 | 390: 342×320 @24,432 · display:flex; gap:16px; transform:matrix(1, 0, 0, 1, 0, 0); transition:transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-track":""}
            - `div.slide` — 561.6×382.5 @88,398 | 991: 480×345.4 @32,384 | 390: 342×320 @24,432 · flex:0 0 auto
              - `div.slide-card` — 561.6×382.5 @88,398 | 991: 480×345.4 @32,384 | 390: 342×320 @24,432 · display:flex; dir:column; maxw:576px; minh:320px; radius:28px; shadow:rgb(27, 28, 33) 0px 0px 0px 1px; overflow:hidden
                - `img.product-carousel-image` — 561.6×255.5 @88,398 | 991: 480×218.4 @32,384 | 390: 342×155.6 @24,432 · maxw:100%; flex:1 1 0%; overflow:clip; fit:cover · IMG `/assets/pages/discovery/6452b20ee4031bfa414e9376_stay-on-trends.webp` natural 594×270 loading=lazy alt "facebook ad spy tool for trending creatives"
                - `div.product-page-carousel-content` — 561.6×127 @88,654 | 991: 480×127 @32,602 | 390: 342×164.4 @24,588 · pad:24px; flex:1 1 0% · Δ390{pad:16px 16px 24px 16px}
                  - `div.product-page-carousel-text-content` — 513.6×79 @112,678 | 991: 432×79 @56,626 | 390: 310×103 @40,604 · display:flex; dir:column; gap:7px; pos:relative; z:1
                    - `h3.text-label-m` — 513.6×24 @112,678 | 991: 432×24 @56,626 | 390: 310×24 @40,604 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Stay on-top of trends"
                    - `div.text-alpha-100` — 513.6×48 @112,709 | 991: 432×48 @56,657 | 390: 310×72 @40,635 · flex:1 1 0%
                      - `p.text-body-m` — 513.6×48 @112,709 | 991: 432×48 @56,657 | 390: 310×72 @40,635 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~87 chars, 2 lines @1440›
            - `div.slide` — 561.6×382.5 @666,398 | 991: 480×345.4 @528,384 | 390: 342×320 @382,432 · flex:0 0 auto
              - `div.slide-card` — 561.6×382.5 @666,398 | 991: 480×345.4 @528,384 | 390: 342×320 @382,432 · display:flex; dir:column; maxw:576px; minh:320px; radius:28px; shadow:rgb(27, 28, 33) 0px 0px 0px 1px; overflow:hidden
                - `img.product-carousel-image` — 561.6×255.5 @666,398 | 991: 480×218.4 @528,384 | 390: 342×155.6 @382,432 · maxw:100%; flex:1 1 0%; overflow:clip; fit:cover · IMG `/assets/pages/discovery/6452b20e1faec53688be8c5e_secret competitors.webp` natural 594×270 loading=lazy alt "competitors advertisements in a feed"
                - `div.product-page-carousel-content` — 561.6×127 @666,654 | 991: 480×127 @528,602 | 390: 342×164.4 @382,588 · pad:24px; flex:1 1 0% · Δ390{pad:16px 16px 24px 16px}
                  - `div.product-page-carousel-text-content` — 513.6×79 @690,678 | 991: 432×79 @552,626 | 390: 310×103 @398,604 · display:flex; dir:column; gap:7px; pos:relative; z:1
                    - `h3.text-label-m` — 513.6×24 @690,678 | 991: 432×24 @552,626 | 390: 310×24 @398,604 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Find Secret Competitors"
                    - `div.text-alpha-100` — 513.6×48 @690,709 | 991: 432×48 @552,657 | 390: 310×72 @398,635 · flex:1 1 0%
                      - `p.text-body-m` — 513.6×48 @690,709 | 991: 432×48 @552,657 | 390: 310×72 @398,635 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~101 chars, 2 lines @1440›
            - …2 more `div.slide` siblings with the same structure (4 total):
              - [3] 561.6×382.5 @1243,398 — img 6452b2233aadbc8e5dddb5dd_ad-screative-time-machine.webp, "Ad Creative Time Machine", ‹~107ch›
              - [4] 561.6×382.5 @1821,398 — img 6452b4e5b9602e476d8dbf96_competitor-hitlist.webp, "Assemble your competitor hit-list", ‹~94ch›
          - `div.slide-arrows` — 1264×36 @88,829 | 991: 927×36 @32,777 | 390: 342×44 @24,800 · display:flex; justify:center; align:center; gap:24px
            - `a.carousel-arrow.is-disabled` — 36×36 @672,829 | 991: 36×36 @448,777 | 390: 44×44 @139,800 · display:flex; justify:center; align:center; pos:relative; maxw:100%; bg:rgba(255, 255, 255, 0.06); radius:2880px; opacity:0.5; transition:0.2s; pe:none · Δ991{radius:1982px} · Δ390{radius:780px} · href `#` · aria "Previous" · data {"data-dir":"left"}
              - `div.carousel-icon.w-embed` — 18×18 @681,838 | 991: 18×18 @457,786 | 390: 18×18 @152,813 · pe:none
                - `svg` — 18×18 @681,838 | 991: 18×18 @457,786 | 390: 18×18 @152,813 · overflow:hidden; pe:none · SVG `/assets/pages/discovery/svg-carousel-icon-b7rq1z.svg`
            - `a.carousel-arrow` — 36×36 @732,829 | 991: 36×36 @508,777 | 390: 44×44 @207,800 · display:flex; justify:center; align:center; pos:relative; maxw:100%; bg:rgba(255, 255, 255, 0.06); radius:2880px; transition:0.2s · Δ991{radius:1982px} · Δ390{radius:780px} · href `#` · aria "Previous" · data {"data-dir":"right"}
              - `svg` — 18×18 @741,838 | 991: 18×18 @517,786 | 390: 18×18 @220,813 · overflow:hidden · SVG `/assets/pages/discovery/svg-carousel-icon-3j2fr4.svg`

### S4. `div.section`

y/height: 1440 3203/1470.8 · 991 2857/1251.4 · 390 2850/904.4

- `div.product-page-padding-y` — 1440×1470.8 @0,0 | 991: 991×1251.4 @0,0 | 390: 390×904.4 @0,0 · display:flex; dir:column; pad:108px 0px; overflow:hidden · Δ991{pad:96px 0px} · Δ390{pad:80px 0px}
  - `div.container.section-container` — 1344×1254.8 @48,108 | 991: 991×1059.4 @0,96 | 390: 390×744.4 @0,80 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
    - `div.section-head` — 720×177.8 @360,108 | 991: 720×176 @136,96 | 390: 342×248 @24,80 · display:flex; dir:column; align:center; gap:12px; mar:0px 272px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
      - `div.section-head-wrapper` — 562.3×177.8 @439,108 | 991: 512×176 @240,96 | 390: 342×248 @24,80 · display:flex; dir:column; align:center; gap:12px
        - `div.text-overline.text-white-68` — 123.9×16 @658,108 | 991: 123.9×16 @434,96 | 390: 123.9×16 @133,80 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "CORE FEATURES"
        - `h2.text-display-h2` — 562.3×53.8 @439,136 | 991: 511.1×52 @240,124 | 390: 342×96 @24,108 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Stop Wasting Time & Budget"
        - `div.section-head_paragraph` — 512×84 @464,201 | 991: 512×84 @240,188 | 390: 342×112 @24,216 · maxw:512px
          - `p.text-body-l` — 512×84 @464,201 | 991: 512×84 @240,188 | 390: 342×112 @24,216 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~128 chars, 3 lines @1440›
    - `div.section-content-main` — 1264×1077 @88,285 | 991: 927×883.4 @32,272 | 390: 342×496.4 @24,328 · pad:48px 0px 0px 0px · Δ390{pad:40px 0px 0px 0px}
      - `div.product-page-tabs.w-tabs` — 1264×803 @88,333 | 991: 927×609.4 @32,320 | 390: 342×456.4 @24,368 · display:flex; dir:column; align:center; pos:relative · data {"data-current":"AI Search","data-easing":"ease","data-duration-in":"300","data-duration-out":"100"}
        - `div.product-page-tabs-menu` — 1264×52 @88,333 | 991: 927×48 @32,320 | 390: 342×224 @24,368 · display:grid; cols:408px 408px 408px; rows:44px; gap:16px; pos:relative; pad:4px; overflow:hidden · Δ991{cols:295.656px 295.672px 295.656px} · Δ390{cols:334px; gap:0px 16px; radius:10px}
          - `a#w-tabs-0-data-w-tab-0.product-page-tab.w-tab-link` — 408×44 @92,337 | 991: 295.7×40 @36,324 | 390: 334×72 @28,372 · display:flex; justify:center; align:center; gap:8px; pos:relative; pad:10px 20px; maxw:100%; radius:8px; transition:0.2s · Δ991{pad:8px 12px} · Δ390{dir:column; justify:flex-start; pad:8px 12px} · href `#w-tabs-0-data-w-pane-0` · data {"data-w-tab":"AI Search"}
            - `svg` — 24×24 @244,347 | 991: 24×24 @132,332 | 390: 24×24 @183,380 · overflow:hidden · SVG `/assets/pages/discovery/svg-product-page-tab-svg-1w2n5lq.svg`
            - `div.text-label-m` — 71.5×24 @276,347 | 991: 71.5×24 @164,332 | 390: 71.5×24 @159,412 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255); align-text:center "AI Search"
          - `a#w-tabs-0-data-w-tab-1.product-page-tab.w-tab-link` — 408×44 @516,337 | 991: 295.7×40 @348,324 | 390: 334×72 @28,444 · display:flex; justify:center; align:center; gap:8px; pos:relative; pad:10px 20px; maxw:100%; radius:8px; opacity:0.44; transition:0.2s · Δ991{pad:8px 12px} · Δ390{dir:column; justify:flex-start; pad:8px 12px} · href `#w-tabs-0-data-w-pane-1` · data {"data-w-tab":"Historical Ads"}
            - `svg` — 24×24 @652,347 | 991: 24×24 @428,332 | 390: 24×24 @183,452 · overflow:hidden · SVG `/assets/pages/discovery/svg-product-page-tab-svg-bzt1wt.svg`
            - `div.text-label-m` — 103.6×24 @684,347 | 991: 103.6×24 @460,332 | 390: 103.6×24 @143,484 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255); align-text:center "Historical Ads"
          - `a#w-tabs-0-data-w-tab-2.product-page-tab.w-tab-link` — 408×44 @940,337 | 991: 295.7×40 @659,324 | 390: 334×72 @28,516 · display:flex; justify:center; align:center; gap:8px; pos:relative; pad:10px 20px; maxw:100%; radius:8px; opacity:0.44; transition:0.2s · Δ991{pad:8px 12px} · Δ390{dir:column; justify:flex-start; pad:8px 12px} · href `#w-tabs-0-data-w-pane-2` · data {"data-w-tab":"Experts"}
            - `svg` — 24×24 @1058,347 | 991: 24×24 @721,332 | 390: 24×24 @183,524 · overflow:hidden · SVG `/assets/pages/discovery/svg-product-page-tab-svg-kn8jdt.svg`
            - `div.text-label-m` — 140.7×24 @1090,347 | 991: 140.7×24 @753,332 | 390: 140.7×24 @125,556 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255); align-text:center "Emotional Analysis"
        - `div.product-page-tabs-content` — 1264×751 @88,385 | 991: 927×561.4 @32,368 | 390: 342×232.4 @24,592 · pos:relative
          - `div#w-tabs-0-data-w-pane-0.w-tab-pane` — 1264×751 @88,385 | 991: 927×561.4 @32,368 | 390: 342×232.4 @24,592 · pos:relative · data {"data-w-tab":"AI Search"}
            - `div.tabs-video-wrapper` — 1264×751 @88,385 | 991: 927×561.4 @32,368 | 390: 342×232.4 @24,592 · display:flex; dir:column; gap:20px; pad:20px 0px
              - `img.product-page-tabs-image` — 1264×711 @88,405 | 991: 927×521.4 @32,388 | 390: 342×192.4 @24,612 · maxw:100%; radius:32px; overflow:clip; fit:fill · Δ390{radius:16px} · IMG `/assets/pages/discovery/64753b4254d0e02cef7b9a53_Discovery-Tab-2.webp` natural 1440×810 loading=eager alt "How to save ads browser illustration"
          - `div#w-tabs-0-data-w-pane-1.w-tab-pane` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: img 647538013ac0c5c0ec50e836_Discovery-Tab-1.webp
          - `div#w-tabs-0-data-w-pane-2.w-tab-pane` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: img 681922ba61ce305541bf6b10_discovery-ai-new.webp
      - `div.home-extension` — 1264×226 @88,1136 | 991: 927×226 @32,930 | 390: hidden · **identical to the homepage block → uses `ChromeExtension.jsx` from src/components (not re-specced; no assets downloaded)**

### S5. `div.section`

y/height: 1440 4673/1606.1 · 991 4109/2017.3 · 390 3755/2860.8

- `div.section` — 1440×1606.1 @0,0 | 991: 991×2017.3 @0,0 | 390: 390×2860.8 @0,0
  - `div.product-page-padding-y` — 1440×1606.1 @0,0 | 991: 991×2017.3 @0,0 | 390: 390×2860.8 @0,0 · display:flex; dir:column; pad:108px 0px; overflow:hidden · Δ991{pad:96px 0px} · Δ390{pad:80px 0px}
    - `div.container.section-container` — 1344×1390.1 @48,108 | 991: 991×1825.3 @0,96 | 390: 390×2700.8 @0,80 · pad:0px 40px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
      - `div.section-head` — 720×205.8 @360,108 | 991: 720×204 @136,96 | 390: 342×276 @24,80 · display:flex; dir:column; align:center; gap:12px; mar:0px 272px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
        - `div.section-head-wrapper` — 604.2×205.8 @418,108 | 991: 549.3×204 @221,96 | 390: 342×276 @24,80 · display:flex; dir:column; align:center; gap:12px
          - `div.text-overline.text-white-68` — 110.8×16 @665,108 | 991: 110.8×16 @440,96 | 390: 110.8×16 @140,80 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "ALL FEATURES"
          - `h2.text-display-h2` — 604.2×53.8 @418,136 | 991: 549.3×52 @221,124 | 390: 342×96 @24,108 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Like Pinterest for ad inspiration"
          - `div.section-head_paragraph` — 512×112 @464,202 | 991: 512×112 @240,188 | 390: 342×140 @24,216 · maxw:512px
            - `p.text-body-l` — 512×112 @464,202 | 991: 512×112 @240,188 | 390: 342×140 @24,216 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~194 chars, 4 lines @1440›
      - `div.section-content-main` — 1264×736.3 @88,314 | 991: 927×1161.3 @32,300 | 390: 342×2008.8 @24,356 · pad:48px 0px 0px 0px · Δ390{pad:40px 0px 0px 0px}
        - `div.product-page-feature-grid-new` — 1264×688.3 @88,362 | 991: 927×1113.3 @32,348 | 390: 342×1968.8 @24,396 · display:grid; cols:405.328px 405.328px 405.344px; rows:332.156px 332.156px; gap:24px; pos:relative; radius:12px; overflow:hidden; z:4 · Δ991{cols:451.5px 451.5px} · Δ390{cols:342px}
          - `div#w-node-eee8f4a1-74d3-3f60-52d5-2a354d1e8799-f7a76531.product-page-feature-block-new` — 405.3×332.2 @88,362 | 991: 451.5×355.3 @32,348 | 390: 342×300 @24,396 · display:flex; dir:column; pos:relative; gcol:span 1/span 1; grow:span 1/span 1; border:1px solid rgb(23, 25, 32); radius:20px; overflow:hidden; z:1; transition:background-color 0.2s
            - `img.product-page-feature-image` — 403.3×201.7 @89,363 | 991: 449.5×224.8 @33,349 | 390: 340×170 @25,397 · maxw:100%; aself:center; overflow:clip; fit:fill · IMG `/assets/pages/discovery/6452c3588f595986621e7e7f_ai-search.webp` natural 599×299 loading=lazy alt "UI for AI search of facebook ads spy tools"
            - `div.product-page-feature-content` — 403.3×128.5 @89,565 | 991: 449.5×128.5 @33,574 | 390: 340×128 @25,567 · display:flex; align:flex-end; pad:24px; flex:1 1 0%
              - `div.product-page-feature-text` — 355.3×80 @113,589 | 991: 401.5×80 @57,598 | 390: 292×80 @49,591 · display:flex; dir:column; gap:8px
                - `h3.text-label-m` — 355.3×24 @113,589 | 991: 401.5×24 @57,598 | 390: 292×24 @49,591 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "AI Search Engine"
                - `div.text-alpha-100` — 355.3×48 @113,621 | 991: 401.5×48 @57,630 | 390: 292×48 @49,623 · flex:1 1 0%
                  - `p.text-body-m` — 355.3×48 @113,621 | 991: 401.5×48 @57,630 | 390: 292×48 @49,623 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Search by ad content and visuals to conduct in-depth research." (2 lines)
          - `div#w-node-eee8f4a1-74d3-3f60-52d5-2a354d1e87a3-f7a76531.product-page-feature-block-new` — 405.3×332.2 @517,362 | 991: 451.5×355.3 @508,348 | 390: 342×300.4 @24,720 · display:flex; dir:column; pos:relative; gcol:span 1/span 1; grow:span 1/span 1; border:1px solid rgb(23, 25, 32); radius:20px; overflow:hidden; z:1; transition:background-color 0.2s
            - `img.product-page-feature-image` — 403.3×202.2 @518,363 | 991: 449.5×225.3 @509,349 | 390: 340×170.4 @25,721 · maxw:100%; aself:center; overflow:clip; fit:fill · IMG `/assets/pages/discovery/6452c358f3df0561dcd05aaf_discovery-filtering.webp` natural 599×300 loading=lazy alt "filter facebook ad spy tools by industry"
            - `div.product-page-feature-content` — 403.3×128 @518,565 | 991: 449.5×128 @509,574 | 390: 340×128 @25,891 · display:flex; align:flex-end; pad:24px; flex:1 1 0%
              - `div.product-page-feature-text` — 355.3×80 @542,589 | 991: 401.5×80 @533,598 | 390: 292×80 @49,915 · display:flex; dir:column; gap:8px
                - `h3.text-label-m` — 355.3×24 @542,589 | 991: 401.5×24 @533,598 | 390: 292×24 @49,915 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Filter by Niche & Format"
                - `div.text-alpha-100` — 355.3×48 @542,621 | 991: 401.5×48 @533,630 | 390: 292×48 @49,947 · flex:1 1 0%
                  - `p.text-body-m` — 355.3×48 @542,621 | 991: 401.5×48 @533,630 | 390: 292×48 @49,947 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Discover specific ad types to help inform competitor analysis." (2 lines)
          - …4 more `div#w-node-eee8f4a1-74d3-3f60-52d5-2a354d1e8799-f7a76531.product-page-feature-block-new` siblings with the same structure (6 total):
            - [3] 405.3×332.2 @947,362 — img 6452c359d7107e537d664c3e_filter-by-platform.webp, "Filter by Platform", "Deep dive ad creative by 1 or multiple platforms."
            - [4] 405.3×332.2 @88,718 — img 6452c3582ce631b474f7a429_Discovery-Real-Time Activity.webp, "Ad Activity Status", ‹~83ch›
            - [5] 405.3×332.2 @517,718 — img 6452c6577004376045ccff74_Landing Page Screenshot.webp, "Landing Page & Metadata", ‹~76ch›
            - [6] 405.3×332.2 @947,718 — img 6452c64a23cd3d10d788aff5_sort-by-longest-running.webp, "Sort by Longest Running", "Quickly discover winning ads by segmenting time running."
      - `div.container` — 1264×448 @88,1051 | 991: 927×460 @32,1461 | 390: 342×416 @24,2364 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
        - `div.home-testimonial-wrapper` — 1184×448 @128,1051 | 991: 863×460 @64,1461 | 390: 294×416 @48,2364 · pos:relative; pad:120px 0px · Δ991{pad:108px 0px} · Δ390{pad:80px 0px}
          - `div.testemonial-contents` — 947.2×208 @246,1171 | 991: 640×244 @176,1569 | 390: 294×256 @48,2444 · display:flex; dir:column; justify:center; align:center; gap:24px; mar:0px 118.406px; maxw:80% · Δ991{mar:0px 111.5px; maxw:640px} · Δ390{mar:0px; maxw:640px}
            - `img.testimonial-logo-image` — 120×40 @660,1171 | 991: 120×40 @436,1569 | 390: 96×40 @147,2444 · maxw:100%; maxh:48px; overflow:clip; fit:contain; aspect:auto 70 / 40 · IMG `/assets/pages/discovery/6478c259d089e1fcfd9fe514_9d81a1_1c7f11b03b5b4dd990abe5c8426f16cd~mv2.webp` natural 300×92 loading=lazy
            - `div.text-quote` — 947.2×72 @246,1235 | 991: 640×108 @176,1633 | 390: 294×120 @48,2508 · font:Inter 24px/36px w400 ls-0.18px; color:rgb(250, 250, 253); align-text:center · Δ390{font:16px/24px} ‹copy: ~166 chars, 2 lines @1440›
            - `div.testimonial-bio` — 243.5×48 @598,1331 | 991: 243.5×48 @374,1765 | 390: 235.5×48 @77,2652 · display:flex; align:center; gap:16px
              - `img.testimonial-author-image` — 48×48 @598,1331 | 991: 48×48 @374,1765 | 390: 40×40 @77,2656 · maxw:100%; radius:5px; overflow:clip; fit:fill · IMG `/assets/pages/discovery/6478c25916a783229ba8d802_Jess-Fire Team.webp` natural 500×500 loading=lazy
              - `div.testimonial-avatar-text` — 179.5×48 @662,1331 | 991: 179.5×48 @438,1765 | 390: 179.5×48 @133,2652
                - `div.text-label-m` — 179.5×24 @662,1331 | 991: 179.5×24 @438,1765 | 390: 179.5×24 @133,2652 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Jess Bachman"
                - `div.text-body-m` — 179.5×24 @662,1355 | 991: 179.5×24 @438,1789 | 390: 179.5×24 @133,2676 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Co-Founder @ FireTeam"
          - `img.testimonial-decoration.is-right` — 142.1×280.4 @1170,1134 | 991: 172.6×460 @841,1461 | 390: 117.6×416 @254,2364 · pos:absolute [224px 0px 224px 1041.92px]; maxw:100%; opacity:0.7; transform:matrix(1, 0, 0, 1, 0, -140.203); overflow:clip; fit:fill · Δ991{transform:matrix(1, 0, 0, 1, 0, -230)} · Δ390{transform:matrix(1, 0, 0, 1, 0, -208)} · IMG `/assets/pages/swipe-file/642db608b19bd600e001723a_awward-right.svg` natural 114×225 loading=lazy
          - `img.testimonial-decoration` — 142.1×280.4 @128,1134 | 991: 172.6×460 @-22,1461 | 390: 117.6×416 @19,2364 · pos:absolute [224px 1041.92px 224px 0px]; maxw:100%; opacity:0.7; transform:matrix(1, 0, 0, 1, 0, -140.203); overflow:clip; fit:fill · Δ991{transform:matrix(1, 0, 0, 1, 0, -230)} · Δ390{transform:matrix(1, 0, 0, 1, 0, -208)} · IMG `/assets/pages/swipe-file/642db6082db5f7803a7a121e_award-left.svg` natural 114×225 loading=lazy
  - `div.negative-spacing-bottom` — 1440×0 @0,1607 | 991: 991×0 @0,2017 | 390: 390×0 @0,2860 · mar:0px 0px -80px 0px

### S6. `div.section`

y/height: 1440 6200/564 · 991 6046/760 · 390 6535/704

- `div.section` — 1440×564 @0,0 | 991: 991×760 @0,0 | 390: 390×704 @0,0
  - `div.container.section-container` — 1344×564 @48,0 | 991: 991×760 @0,0 | 390: 390×704 @0,0 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
    - `div.cta` — 1264×564 @88,0 | 991: 927×760 @32,0 | 390: 342×704 @24,0 · pad:80px 0px
      - `div.cta-block` — 1264×404 @88,80 | 991: 927×600 @32,80 | 390: 342×544 @24,80 · pos:relative; pad:84px; bg:rgb(2, 3, 8); radius:36px; shadow:rgb(23, 25, 32) 0px 0px 0px 1px; overflow:hidden · Δ991{pad:64px 64px 0px 64px} · Δ390{pad:32px 32px 0px 32px}
        - `div.cta-block-content` — 723.4×236 @172,164 | 991: 799×236 @96,144 | 390: 278×296 @56,112 · display:flex; dir:column; gap:32px; pos:relative; maxw:66%; z:1 · Δ991{maxw:none} · Δ390{maxw:none}
          - `div.flex-col-gap-2.align-start.text-balance` — 723.4×164 @172,164 | 991: 799×164 @96,144 | 390: 278×224 @56,112 · display:flex; dir:column; align:flex-start; gap:8px
            - `h2.text-display-h3.mobile-landscape-text-display-h4` — 429×44 @172,164 | 991: 429×44 @96,144 | 390: 278×72 @56,112 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(255, 255, 255); wrap-text:balance · Δ390{font:28px/36px; ls:-0.202222px} "Get a 7-Day free trial today"
            - `div.text-alpha-100` — 723.4×112 @172,216 | 991: 799×112 @96,196 | 390: 278×144 @56,192 · flex:1 1 0%
              - `p.text-body-l.mobile-landscape-text-body-n` — 723.4×112 @172,216 | 991: 799×112 @96,196 | 390: 278×144 @56,192 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); wrap-text:balance · Δ390{font:16px/24px; ls:-0.23111px} ‹copy: ~153 chars, 4 lines @1440›
          - `div.flex-col-gap-3` — 723.4×40 @172,360 | 991: 799×40 @96,340 | 390: 278×40 @56,368 · display:flex; dir:column; justify:center; align:flex-start; gap:12px
            - `a.button-dark.button-primary` — 159.3×40 @172,360 | 991: 159.3×40 @96,340 | 390: 159.3×40 @56,368 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; flex:1 1 0%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `https://app.foreplay.co/sign-up`
              - `div.button-text-block` — 123.3×24 @180,368 | 991: 123.3×24 @104,348 | 390: 123.3×24 @64,376 · pos:relative; pad:0px 6px; z:2
                - `div.text-heading-m` — 111.3×24 @186,368 | 991: 111.3×24 @110,348 | 390: 111.3×24 @70,376 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14) "Start Free Trial"
              - `div.button-icon-block.icon-right.opacity-100` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; z:2
                - `div.icon-medium` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · display:flex; justify:center; align:center
                  - `div.svg.w-embed` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · display:flex; justify:center; align:center
                    - `svg` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · overflow:hidden · SVG `/assets/pages/discovery/svg-svg-185ries.svg`
            - `div.no-cc-required` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: "No credit card required", svg bjw7ed
        - `div.cta-block-animation` — 880×880 @788,-122 | 991: hidden | 390: hidden · pos:absolute [-202px -316px 0px 700px]; blend:lighten; z:0 · Δ991{display:none; mar:-100px 0px; pos:relative} · Δ390{display:none; mar:-55% -115px -133px -100px; pos:relative}
          - `div.code-video.w-embed` — 880×880 @788,-122 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; pos:relative
            - `video` — 880×880 @788,-122 | 991: hidden | 390: hidden · overflow:clip; fit:contain · ASSET `/assets/pages/discovery/cta-discovery.mov` · VIDEO {"srcs":["cta-discovery.mov"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":1000,"vh":1000,"dur":3.36,"preload":"metadata"}
        - `div.cta-block-icon` — 1096×0 @172,400 | 991: 799×300 @96,380 | 390: 278×192 @56,432 · Δ991{display:flex; dir:column; wrap:nowrap; justify:center; align:center; gap:normal} · Δ390{display:flex; dir:column; wrap:nowrap; justify:center; align:center; gap:normal; mar:24px 0px 0px 0px}
          - `img.cta-block-icon-image` — hidden | 991: 300×300 @346,380 | 390: 256×256 @67,432 · display:none; maxw:100%; overflow:clip; fit:fill · Δ991{display:block; maxw:none} · Δ390{display:block; mar:0px 0px -64px 0px; maxw:none} · IMG `/assets/682f93b42567b6ff190373b9_iso-discovery.webp` natural 0×0 loading=lazy alt "isometric discovery logo"

### S7. `div.section`

y/height: 1440 6764/1260.8 · 991 6806/1259 · 390 7239/1383

- `div.container` — 1440×1260.8 @0,0 | 991: 991×1259 @0,0 | 390: 390×1383 @0,0 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
  - `div.faq` — 1360×1260.8 @40,0 | 991: 927×1259 @32,0 | 390: 342×1383 @24,0 · display:flex; dir:column; gap:48px; pad:140px 0px · Δ390{gap:40px; pad:64px 0px 80px 0px}
    - `div.section-head` — 720×149.8 @360,140 | 991: 720×148 @136,140 | 390: 342×192 @24,64 · display:flex; dir:column; align:center; gap:12px; mar:0px 320px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
      - `div.section-head-wrapper` — 552.7×149.8 @444,140 | 991: 512×148 @240,140 | 390: 342×192 @24,64 · display:flex; dir:column; align:center; gap:12px
        - `div.text-overline.text-white-68` — 29.5×16 @705,140 | 991: 29.5×16 @481,140 | 390: 29.5×16 @180,64 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "FAQ"
        - `h3.text-display-h2` — 552.7×53.8 @444,168 | 991: 502.5×52 @244,168 | 390: 342×96 @24,92 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Questions about Discovery?"
        - `div.section-head_paragraph` — 512×56 @464,233 | 991: 512×56 @240,232 | 390: 342×56 @24,200 · maxw:512px
          - `p.text-body-l` — 512×56 @464,233 | 991: 512×56 @240,232 | 390: 342×56 @24,200 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty "Most frequent questions about finding ad inspiration with Discovery." (2 lines)
    - `div.faq-block-container` — 752×671 @344,337 | 991: 752×671 @120,336 | 390: 342×851 @24,296 · mar:0px 304px; maxw:752px · Δ991{mar:0px 87.5px} · Δ390{mar:0px} · data {"data-accordion-container":""}
      - `div.` — 752×671 @344,337 | 991: 752×671 @120,336 | 390: 342×851 @24,296
        - `div.faq-block` — 752×61 @344,337 | 991: 752×61 @120,336 | 390: 342×81 @24,296 · display:flex; justify:center; align:flex-start; gap:44px; pad:20px 0px 12px 0px; border:T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-accordion-item":"","data-expanded":"false"}
          - `div.faq-block_content` — 680×24 @344,357 | 991: 680×24 @120,356 | 390: 270×48 @24,316 · display:flex; dir:column; flex:1 1 0%
            - `div.faq-block_head` — 680×24 @344,357 | 991: 680×24 @120,356 | 390: 270×48 @24,316 · display:flex; align:center; gap:44px
              - `h4.text-label-l` — 449.1×24 @344,357 | 991: 449.1×24 @120,356 | 390: 270×48 @24,316 · font:Inter 18px/24px w500 ls-0.259999px; color:rgba(255, 255, 255, 0.68) · Δ390{font:16px/24px; ls:-0.23111px} "How does the Inspiration Library fit into my workflow?"
            - `div.faq-block_body` — 680×0 @344,381 | 991: 680×0 @120,380 | 390: 270×0 @24,364 · overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
              - `div.faq-block_answer` — 680×76 @344,381 | 991: 680×76 @120,380 | 390: 270×136 @24,364 · pad:8px 0px; overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
                - `p` — 680×60 @344,389 | 991: 680×60 @120,388 | 390: 270×120 @24,372 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) ‹copy: ~217 chars, 3 lines @1440›
          - `div.faq-block_icon` — 28×28 @1068,357 | 991: 28×28 @844,356 | 390: 28×28 @338,316 · display:flex; justify:center; align:center; transition:0.2s
            - `div.icon-medium` — 24×24 @1070,359 | 991: 24×24 @846,358 | 390: 24×24 @340,318 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @1070,359 | 991: 24×24 @846,358 | 390: 24×24 @340,318 · display:flex; justify:center; align:center
                - `svg` — 24×24 @1070,359 | 991: 24×24 @846,358 | 390: 24×24 @340,318 · overflow:hidden · SVG `/assets/pages/discovery/svg-svg-wqicrt.svg`
        - `div.faq-block` — 752×61 @344,398 | 991: 752×61 @120,397 | 390: 342×81 @24,377 · display:flex; justify:center; align:flex-start; gap:44px; pad:20px 0px 12px 0px; border:T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-accordion-item":"","data-expanded":"false"}
          - `div.faq-block_content` — 680×24 @344,418 | 991: 680×24 @120,417 | 390: 270×48 @24,397 · display:flex; dir:column; flex:1 1 0%
            - `div.faq-block_head` — 680×24 @344,418 | 991: 680×24 @120,417 | 390: 270×48 @24,397 · display:flex; align:center; gap:44px
              - `h4.text-label-l` — 310.3×24 @344,418 | 991: 310.3×24 @120,417 | 390: 270×48 @24,397 · font:Inter 18px/24px w500 ls-0.259999px; color:rgba(255, 255, 255, 0.68) · Δ390{font:16px/24px; ls:-0.23111px} "How do I find the best facebook ads?"
            - `div.faq-block_body` — 680×0 @344,442 | 991: 680×0 @120,441 | 390: 270×0 @24,445 · overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
              - `div.faq-block_answer` — 680×56 @344,442 | 991: 680×56 @120,441 | 390: 270×116 @24,445 · pad:8px 0px; overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
                - `p` — 680×40 @344,450 | 991: 680×40 @120,449 | 390: 270×100 @24,453 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) ‹copy: ~153 chars, 2 lines @1440›
          - `div.faq-block_icon` — 28×28 @1068,418 | 991: 28×28 @844,417 | 390: 28×28 @338,397 · display:flex; justify:center; align:center; transition:0.2s
            - `div.icon-medium` — 24×24 @1070,420 | 991: 24×24 @846,419 | 390: 24×24 @340,399 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @1070,420 | 991: 24×24 @846,419 | 390: 24×24 @340,399 · display:flex; justify:center; align:center
                - `svg` — 24×24 @1070,420 | 991: 24×24 @846,419 | 390: 24×24 @340,399 · overflow:hidden · SVG `/assets/pages/discovery/svg-svg-wqicrt.svg`
        - …9 more `div.` siblings with the same structure (11 total):
          - [3] 752×61 @344,459 — "Do you have a brand monitoring program?", svg wqicrt, ‹~145ch›
          - [4] 752×61 @344,520 — "Can I see my competitor's ads?", svg wqicrt, ‹~171ch›
          - [5] 752×61 @344,581 — "How do I become a Foreplay Expert?", svg wqicrt, ‹~182ch›, "‍"
          - [6] 752×61 @344,642 — "Why is this the best ad spy tool?", svg wqicrt, ‹~229ch›
          - [7] 752×61 @344,703 — "How often is the example ad library updated?", svg wqicrt, ‹~167ch›
          - [8] 752×61 @344,764 — ‹~53ch›, svg wqicrt, ‹~223ch›
          - [9] 752×61 @344,825 — "How do ads get into the foreplay platform?", svg wqicrt, ‹~121ch›
          - [10] 752×61 @344,886 — "What platforms are included in this ad spy?", svg wqicrt, "Facebook Ad Inspiration", "Instagram Ad Inspiration", "TikTok Ad Inspiration", "TikTok Organic Content Inspiration", "LinkedIn Ads Inspiration"
          - [11] 752×61 @344,947 — "Does this ad spy tool show every ad online?", svg wqicrt, ‹~135ch›
    - `div.faq-buttons` — 1360×64 @40,1056 | 991: 927×64 @32,1055 | 390: 342×116 @24,1187 · display:flex; justify:center; align:center; gap:12px; pad:12px 0px · Δ390{dir:column; align:stretch}
      - `a#intercomButton.button-dark.ghost-icon-button` — 177.4×40 @536,1068 | 991: 177.4×40 @311,1067 | 390: 342×40 @24,1199 · display:flex; justify:center; align:center; gap:5px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `#`
        - `div.button-icon-block.icon-left` — 24×24 @544,1076 | 991: 24×24 @319,1075 | 390: 24×24 @114,1207 · display:flex; justify:center; align:center; pos:relative; mar:0px -4px 0px 0px; opacity:0.68; z:2
          - `div.icon-medium` — 24×24 @544,1076 | 991: 24×24 @319,1075 | 390: 24×24 @114,1207 · display:flex; justify:center; align:center
            - `div.svg.w-embed` — 20×20 @546,1078 | 991: 20×20 @321,1077 | 390: 20×20 @116,1209 · display:flex; justify:center; align:center
              - `svg` — 20×20 @546,1078 | 991: 20×20 @321,1077 | 390: 20×20 @116,1209 · overflow:hidden · SVG `/assets/pages/discovery/svg-svg-1i4rn0n.svg`
        - `div.button-text-block` — 136.4×24 @569,1076 | 991: 136.4×24 @344,1075 | 390: 136.4×24 @139,1207 · pos:relative; pad:0px 6px; z:2
          - `div.text-heading-m` — 124.4×24 @575,1076 | 991: 124.4×24 @350,1075 | 390: 124.4×24 @145,1207 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Contact support"
      - `a.button-dark.ghost-icon-button` — 179.1×40 @725,1068 | 991: 179.1×40 @501,1067 | 390: 342×40 @24,1251 · display:flex; justify:center; align:center; gap:5px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `https://foreplay.featurebase.app/help` target=_blank
        - `div.button-icon-block.icon-left` — 24×24 @733,1076 | 991: 24×24 @509,1075 | 390: 24×24 @113,1259 · display:flex; justify:center; align:center; pos:relative; mar:0px -4px 0px 0px; opacity:0.68; z:2
          - `div.icon-medium` — 24×24 @733,1076 | 991: 24×24 @509,1075 | 390: 24×24 @113,1259 · display:flex; justify:center; align:center
            - `div.svg.w-embed` — 24×24 @733,1076 | 991: 24×24 @509,1075 | 390: 24×24 @113,1259 · display:flex; justify:center; align:center
              - `svg` — 24×24 @733,1076 | 991: 24×24 @509,1075 | 390: 24×24 @113,1259 · overflow:hidden · SVG `/assets/pages/discovery/svg-svg-1lrvzzc.svg`
        - `div.button-text-block` — 138.1×24 @758,1076 | 991: 138.1×24 @534,1075 | 390: 138.1×24 @138,1259 · pos:relative; pad:0px 6px; z:2
          - `div.text-heading-m` — 126.1×24 @764,1076 | 991: 126.1×24 @540,1075 | 390: 126.1×24 @144,1259 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Knowledge Base"

### S8. `div.section.overflow-hidden`

y/height: 1440 8024/1037.5 · 991 8065/801.8 · 390 8622/643.3

- `div.section.overflow-hidden` — 1440×1037.5 @0,0 | 991: 991×801.8 @0,0 | 390: 390×643.3 @0,0 · overflow:hidden
  - `div.container.section-container` — 1344×1037.5 @48,0 | 991: 991×801.8 @0,0 | 390: 390×643.3 @0,0 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
    - `div.home-cta` — 1264×1037.5 @88,0 | 991: 927×801.8 @32,0 | 390: 342×643.3 @24,0 · **identical to the homepage block → uses `CTA.jsx` from src/components (not re-specced; no assets downloaded)**

## Typography roles (computed at 1440; sizes at 991/390 from the same nodes)

| font (family size/lh weight ls) | color | n | @991 | @390 | elements (sample) | example |
|---|---|---|---|---|---|---|
| Inter 14px/20px w400 ls-0.09px | rgba(255, 255, 255, 0.68) | 16 | 14px/20px | 14px/20px | `p` `li` | ~217 chars |
| Inter 16px/24px w500 ls-0.18px | rgb(255, 255, 255) | 14 | 16px/24px | 16px/24px | `h3.text-label-m` `div.text-label-m` | Stay on-top of trends |
| Inter 16px/24px w400 ls-0.18px | rgba(255, 255, 255, 0.68) | 12 | 16px/24px | 16px/24px | `div` `p.text-body-m` `div.text-body-m` | Search the largest winning ad creative d |
| Inter 18px/24px w500 ls-0.259999px | rgba(255, 255, 255, 0.68) | 11 | 18px/24px | 16px/24px | `h4.text-label-l` | How does the Inspiration Library fit int |
| Inter 18px/28px w400 ls-0.259999px | rgba(255, 255, 255, 0.68) | 6 | 18px/28px | 18px/28px, 16px/24px | `p.text-body-l.text-white-84` `p.text-body-l` `p.text-body-l.mobile-landscape-text-body-n` | ~118 chars |
| Inter 12px/16px w550 ls2px uppercase | rgba(255, 255, 255, 0.36) | 5 | 12px/16px | 12px/16px | `h1.text-overline.text-white-68` `div.text-overline.text-white-68` | DISCOVERY |
| Inter Display 44px/53.76px w600 ls-0.33px | rgb(255, 255, 255) | 4 | 40px/52px | 36px/48px | `h2.text-display-h2` `h3.text-display-h2` | Discover your next best ad |
| Inter 16px/24px w550 ls-0.18px | rgb(9, 10, 14) | 2 | 16px/24px | 16px/24px | `div.text-heading-m` | Start free trial |
| Inter 16px/24px w550 ls-0.18px | rgb(255, 255, 255) | 2 | 16px/24px | 16px/24px | `div.text-heading-m` | Contact support |
| Inter Display 60px/68px w600 ls-0.45px | rgba(255, 255, 255, 0.88) | 1 | 60px/68px | 38px/48px | `h2.text-display-h1.hero-title` | Search over 100 million incredible ad id |
| Inter Display 36px/44px w600 ls-0.26px | rgb(23, 25, 32) | 1 | 36px/44px | 36px/44px | `h2.text-display-h3` | You need a top-tier ad search engine |
| Inter 16px/24px w400 ls-0.18px | rgb(36, 38, 46) | 1 | 16px/24px | 16px/24px | `p.text-body-m` | ~93 chars |
| Inter 18px/24px w500 ls-0.259999px | rgb(9, 10, 14) | 1 | 18px/24px | 16px/24px | `div.text-label-l` | Before ... |
| Inter 16px/24px w400 ls-0.18px | rgb(52, 54, 66) | 1 | 16px/24px | 16px/24px | `div` | Limited searches, messy folders and mini |
| Inter 18px/24px w500 ls-0.259999px | rgb(255, 255, 255) | 1 | 18px/24px | 16px/24px | `div.text-label-l` | After Foreplay |
| Inter 24px/36px w400 ls-0.18px | rgb(250, 250, 253) | 1 | 24px/36px | 16px/24px | `div.text-quote` | ~166 chars |
| Inter Display 36px/44px w600 ls-0.26px | rgb(255, 255, 255) | 1 | 36px/44px | 28px/36px | `h2.text-display-h3.mobile-landscape-text-display-h4` | Get a 7-Day free trial today |

## Colors, gradients, radii, shadows in use (non-text, 1440)

**background-color**
- `rgb(255, 255, 255)` — `a.button-dark.button-primary`, `div.section-white-block`
- `rgb(2, 3, 8)` — `div.product-hero-video.w-background-video`, `div.static-product-page-solution-card.solution-after`, `div.cta-block`, `a#intercomButton.button-dark.ghost-icon-button`, `a.button-dark.ghost-icon-button`
- `rgba(255, 255, 255, 0.06)` — `a.carousel-arrow.is-disabled`, `a.carousel-arrow`

**background-image**
- `url(68331d86cf0a6a7db433a56d_dot-grid.webp)` — `div.dot-bg`
- `radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88))` — `h2.text-display-h1.hero-title`
- `url(62a4ed18ddad95dde8b8bfa4/68338a8a2fcb274d77daaec1_product-video-discovery-poster-00001.jpg)` — `video#2763a6f8-9c23-8542-1bcc-f0df9782dd98-video`
- `linear-gradient(0deg, rgb(2, 3, 8) 75%, rgba(2, 3, 8, 0))` — `div.product-hero-preview-underlay`

**border**
- `1px solid rgb(23, 25, 32)` — `div#w-node-eee8f4a1-74d3-3f60-52d5-2a354d1e8799-f7a76531.product-page-feature-block-new`, `div#w-node-eee8f4a1-74d3-3f60-52d5-2a354d1e87a3-f7a76531.product-page-feature-block-new`, `div#w-node-eee8f4a1-74d3-3f60-52d5-2a354d1e87ad-f7a76531.product-page-feature-block-new`, `div#w-node-eee8f4a1-74d3-3f60-52d5-2a354d1e87b7-f7a76531.product-page-feature-block-new`, `div#w-node-eee8f4a1-74d3-3f60-52d5-2a354d1e87c1-f7a76531.product-page-feature-block-new` (+1)
- `T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0` — `div.faq-block`

**radius**
- `10px` — `a.button-dark.button-primary`, `a#intercomButton.button-dark.ghost-icon-button`, `a.button-dark.ghost-icon-button`
- `36px` — `div.section-white-block`, `div.cta-block`
- `20px` — `div.static-product-page-solution-card`, `div.static-product-page-solution-card.solution-after`, `div#w-node-eee8f4a1-74d3-3f60-52d5-2a354d1e8799-f7a76531.product-page-feature-block-new`, `div#w-node-eee8f4a1-74d3-3f60-52d5-2a354d1e87a3-f7a76531.product-page-feature-block-new`, `div#w-node-eee8f4a1-74d3-3f60-52d5-2a354d1e87ad-f7a76531.product-page-feature-block-new` (+3)
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
- `background-color 0.2s` — `div#w-node-eee8f4a1-74d3-3f60-52d5-2a354d1e8799-f7a76531.product-page-feature-block-new`, `div#w-node-eee8f4a1-74d3-3f60-52d5-2a354d1e87a3-f7a76531.product-page-feature-block-new`, `div#w-node-eee8f4a1-74d3-3f60-52d5-2a354d1e87ad-f7a76531.product-page-feature-block-new`, `div#w-node-eee8f4a1-74d3-3f60-52d5-2a354d1e87b7-f7a76531.product-page-feature-block-new`, `div#w-node-eee8f4a1-74d3-3f60-52d5-2a354d1e87c1-f7a76531.product-page-feature-block-new` (+1)
- `0.9s cubic-bezier(0.19, 1, 0.22, 1)` — `div.faq-block`, `div.faq-block_body`, `div.faq-block_answer`

## Assets (local path ↔ element)

| local file | kind | element | natural | displayed @1440 | source URL |
|---|---|---|---|---|---|
| `/assets/pages/swipe-file/68331d86cf0a6a7db433a56d_dot-grid.webp` | bg | `dot-bg` (s0.0) |  | 1440×1376 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68331d86cf0a6a7db433a56d_dot-grid.webp |
| `/assets/pages/discovery/animated-icon-discovery.webm` | video | `` (s0.1.0.1.0.0.0.0) | 2000×2000 4.00s | 256×256 | https://publicassets.foreplay.co/animated-icon-discovery.webm |
| `/assets/pages/discovery/animated-icon-discovery.mov` | video | `` (s0.1.0.1.0.0.0.0) | 2000×2000 4.00s | 256×256 | https://publicassets.foreplay.co/animated-icon-discovery.mov |
| `/assets/pages/discovery/682f9f722b39359a238b0ff9_pi-discovery-hq.webp` | img | `product-hero-icon-image` (s0.1.0.1.0.1) | 0×0 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f722b39359a238b0ff9_pi-discovery-hq.webp |
| `/assets/pages/swipe-file/6820c07c2e5b8c350c8e1f4c_hero-empty-mockup.webp` | img | `product-hero-preview-image` (s0.1.0.2.0) | 1440×900 | 1360×850 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6820c07c2e5b8c350c8e1f4c_hero-empty-mockup.webp |
| `/assets/pages/discovery/68338a8a2fcb274d77daaec1_product-video-discovery-transcode.mp4` | bgvideo | `product-hero-video.w-background-video.w-background-video-atom` (s0.1.0.2.1) |  | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338a8a2fcb274d77daaec1_product-video-discovery-transcode.mp4 |
| `/assets/pages/discovery/68338a8a2fcb274d77daaec1_product-video-discovery-transcode.webm` | bgvideo | `product-hero-video.w-background-video.w-background-video-atom` (s0.1.0.2.1) |  | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338a8a2fcb274d77daaec1_product-video-discovery-transcode.webm |
| `/assets/pages/discovery/68338a8a2fcb274d77daaec1_product-video-discovery-poster-00001.jpg` | poster | `product-hero-video.w-background-video.w-background-video-atom` (s0.1.0.2.1) |  |  | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338a8a2fcb274d77daaec1_product-video-discovery-poster-00001.jpg |
| `/assets/pages/discovery/68338a8a2fcb274d77daaec1_product-video-discovery-poster-00001.jpg` | bg | `` (s0.1.0.2.1.0) |  | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338a8a2fcb274d77daaec1_product-video-discovery-poster-00001.jpg |
| `/assets/pages/discovery/68338a8a2fcb274d77daaec1_product-video-discovery-transcode.mp4` | video | `` (s0.1.0.2.1.0) | 1280×668 12.50s | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338a8a2fcb274d77daaec1_product-video-discovery-transcode.mp4 |
| `/assets/pages/discovery/68338a8a2fcb274d77daaec1_product-video-discovery-transcode.webm` | video | `` (s0.1.0.2.1.0) | 1280×668 12.50s | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338a8a2fcb274d77daaec1_product-video-discovery-transcode.webm |
| `/assets/pages/discovery/682e02bbeb2b8d4676c51bcb_before-discovery.webp` | img | `static-product-page-image` (s1.0.0.0.0.2.0.1.0) | 1392×1128 | 462×374.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682e02bbeb2b8d4676c51bcb_before-discovery.webp |
| `/assets/pages/discovery/682e02bb2bfe3aa652c28c43_after-discovery.webp` | img | `static-product-page-image` (s1.0.0.0.0.2.1.1) | 1393×1129 | 462×374.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682e02bb2bfe3aa652c28c43_after-discovery.webp |
| `/assets/pages/discovery/6452b20ee4031bfa414e9376_stay-on-trends.webp` | img | `product-carousel-image` (s2.0.0.1.0.0.0.0.0.0) | 594×270 | 561.6×255.5 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6452b20ee4031bfa414e9376_stay-on-trends.webp |
| `/assets/pages/discovery/6452b20e1faec53688be8c5e_secret competitors.webp` | img | `product-carousel-image` (s2.0.0.1.0.0.0.1.0.0) | 594×270 | 561.6×255.5 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6452b20e1faec53688be8c5e_secret%20competitors.webp |
| `/assets/pages/discovery/6452b2233aadbc8e5dddb5dd_ad-screative-time-machine.webp` | img | `product-carousel-image` (s2.0.0.1.0.0.0.2.0.0) | 594×270 | 561.6×255.5 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6452b2233aadbc8e5dddb5dd_ad-screative-time-machine.webp |
| `/assets/pages/discovery/6452b4e5b9602e476d8dbf96_competitor-hitlist.webp` | img | `` (s2.0.0.1.0.0.0.3.0.0) | 594×270 | 561.6×255.5 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6452b4e5b9602e476d8dbf96_competitor-hitlist.webp |
| `/assets/pages/discovery/64753b4254d0e02cef7b9a53_Discovery-Tab-2.webp` | img | `product-page-tabs-image` (s3.0.0.1.0.1.0.0.0) | 1440×810 | 1264×711 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64753b4254d0e02cef7b9a53_Discovery-Tab-2.webp |
| `/assets/pages/discovery/647538013ac0c5c0ec50e836_Discovery-Tab-1.webp` | img | `product-page-tabs-image` (s3.0.0.1.0.1.1.0.0) | 1440×810 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/647538013ac0c5c0ec50e836_Discovery-Tab-1.webp |
| `/assets/681922ba61ce305541bf6b10_discovery-ai-new.webp` | img | `product-page-tabs-image` (s3.0.0.1.0.1.2.0.0) | 1440×1225 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/681922ba61ce305541bf6b10_discovery-ai-new.webp |
| `/assets/pages/discovery/6452c3588f595986621e7e7f_ai-search.webp` | img | `product-page-feature-image` (s4.0.0.1.0.0.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6452c3588f595986621e7e7f_ai-search.webp |
| `/assets/pages/discovery/6452c358f3df0561dcd05aaf_discovery-filtering.webp` | img | `product-page-feature-image` (s4.0.0.1.0.1.0) | 599×300 | 403.3×202.2 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6452c358f3df0561dcd05aaf_discovery-filtering.webp |
| `/assets/pages/discovery/6452c359d7107e537d664c3e_filter-by-platform.webp` | img | `product-page-feature-image` (s4.0.0.1.0.2.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6452c359d7107e537d664c3e_filter-by-platform.webp |
| `/assets/pages/discovery/6452c3582ce631b474f7a429_Discovery-Real-Time Activity.webp` | img | `product-page-feature-image` (s4.0.0.1.0.3.0) | 599×300 | 403.3×202.2 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6452c3582ce631b474f7a429_Discovery-Real-Time%20Activity.webp |
| `/assets/pages/discovery/6452c6577004376045ccff74_Landing Page Screenshot.webp` | img | `product-page-feature-image` (s4.0.0.1.0.4.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6452c6577004376045ccff74_Landing%20Page%20Screenshot.webp |
| `/assets/pages/discovery/6452c64a23cd3d10d788aff5_sort-by-longest-running.webp` | img | `product-page-feature-image` (s4.0.0.1.0.5.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6452c64a23cd3d10d788aff5_sort-by-longest-running.webp |
| `/assets/pages/discovery/6478c259d089e1fcfd9fe514_9d81a1_1c7f11b03b5b4dd990abe5c8426f16cd~mv2.webp` | img | `testimonial-logo-image` (s4.0.0.2.0.0.0.0) | 300×92 | 120×40 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6478c259d089e1fcfd9fe514_9d81a1_1c7f11b03b5b4dd990abe5c8426f16cd~mv2.webp |
| `/assets/pages/discovery/6478c25916a783229ba8d802_Jess-Fire Team.webp` | img | `testimonial-author-image` (s4.0.0.2.0.0.0.2.0) | 500×500 | 48×48 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6478c25916a783229ba8d802_Jess-Fire%20Team.webp |
| `/assets/pages/swipe-file/642db608b19bd600e001723a_awward-right.svg` | img | `testimonial-decoration.is-right` (s4.0.0.2.0.0.1) | 114×225 | 142.1×280.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/642db608b19bd600e001723a_awward-right.svg |
| `/assets/pages/swipe-file/642db6082db5f7803a7a121e_award-left.svg` | img | `testimonial-decoration` (s4.0.0.2.0.0.2) | 114×225 | 142.1×280.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/642db6082db5f7803a7a121e_award-left.svg |
| `/assets/pages/discovery/cta-discovery.mov` | video | `` (s5.0.0.0.1.0.0) | 1000×1000 3.36s | 880×880 | https://publicassets.foreplay.co/cta-discovery.mov |
| `/assets/682f93b42567b6ff190373b9_iso-discovery.webp` | img | `cta-block-icon-image` (s5.0.0.0.2.0) | 0×0 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f93b42567b6ff190373b9_iso-discovery.webp |

**Inline SVGs saved** (each distinct inline `<svg>` in page content):

- `/assets/pages/discovery/svg-svg-185ries.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/discovery/svg-carousel-icon-b7rq1z.svg` — 18×18 in `carousel-icon.w-embed`
- `/assets/pages/discovery/svg-carousel-icon-3j2fr4.svg` — 18×18 in `carousel-icon.w-embed`
- `/assets/pages/discovery/svg-product-page-tab-svg-1w2n5lq.svg` — 24×24 in `product-page-tab-svg.w-embed`
- `/assets/pages/discovery/svg-product-page-tab-svg-bzt1wt.svg` — 24×24 in `product-page-tab-svg.w-embed`
- `/assets/pages/discovery/svg-product-page-tab-svg-kn8jdt.svg` — 24×24 in `product-page-tab-svg.w-embed`
- `/assets/pages/discovery/svg-svg-bjw7ed.svg` — 0×0 in `svg.w-embed`
- `/assets/pages/discovery/svg-svg-wqicrt.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/discovery/svg-svg-1i4rn0n.svg` — 20×20 in `svg.w-embed`
- `/assets/pages/discovery/svg-svg-1lrvzzc.svg` — 24×24 in `svg.w-embed`

## Motion

### Webflow IX2 (from `Webflow.require("ix2").store.getState().ixData`, filtered to elements on this page outside nav/footer)

- **e-207** SCROLLING_IN_VIEW → GENERAL_CONTINUOUS_ACTION list `a-71` (Product / Hero Parallax) on `product-hero-animation-trigger` ×1; mq ["main","medium"]; config [{"continuousParameterGroupId":"a-71-p","smoothing":0,"startsEntering":false,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}]

- `a-71` "Product / Hero Parallax"
  - continuous SCROLL_PROGRESS:
    - @0%: TRANSFORM_SCALE .product-hero-sticky {"xValue":1,"yValue":1,"locked":true} ‖ TRANSFORM_MOVE .product-hero-sticky {"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"} ‖ STYLE_OPACITY .product-hero-sticky {"value":1,"unit":""}
    - @100%: TRANSFORM_MOVE .product-hero-sticky {"yValue":-33,"xUnit":"PX","yUnit":"%","zUnit":"PX"} ease inOutCubic ‖ TRANSFORM_SCALE .product-hero-sticky {"xValue":0.75,"yValue":0.75,"locked":true} ‖ STYLE_OPACITY .product-hero-sticky {"value":0,"unit":""}

### Running Web Animations after load (`document.getAnimations()`, page content only)

- none

### Widgets / embeds detected

- s0.1.0.1.0.0.0 `div.code-video.w-embed` 
- s0.1.0.2.1 `div.product-hero-video.w-background-video.w-background-video-atom` {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338a8a2fcb274d77daaec1_product-video-discovery-poster-00001.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
- s1.0.0.0.0.1 `div.code-style.w-embed` 
- s3.0.0.1.0 `div.product-page-tabs.w-tabs` {"data-current":"AI Search","data-easing":"ease","data-duration-in":"300","data-duration-out":"100"}
- s3.0.0.1.0.0.0 `a.product-page-tab.w-inline-block.w-tab-link.w--current` {"data-w-tab":"AI Search"}
- s3.0.0.1.0.0.1 `a.product-page-tab.w-inline-block.w-tab-link` {"data-w-tab":"Historical Ads"}
- s3.0.0.1.0.0.2 `a.product-page-tab.w-inline-block.w-tab-link` {"data-w-tab":"Experts"}
- s3.0.0.1.0.1.0 `div.w-tab-pane.w--tab-active` {"data-w-tab":"AI Search"}
- s3.0.0.1.0.1.1 `div.w-tab-pane` {"data-w-tab":"Historical Ads"}
- s3.0.0.1.0.1.2 `div.w-tab-pane` {"data-w-tab":"Experts"}
- s5.0.0.0.1.0 `div.code-video.w-embed` 
- s6.0.0.1.0 `div.code-style.w-embed` 
- s6.0.0.1.1 `div.w-dyn-list` 

### Page-level `<style>` embeds (verbatim CSS)

From s1.0.0.0.0.1:
```css
.svg-animate-path {
    transition: stroke-dashoffset 0.2s linear;
  }

  .svg-animate-clip {
    transition: clip-path 0.2s linear;
  }
```
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

New classes: `product-hero` `product-hero-animation-trigger` `product-hero-sticky` `product-hero-icon` `product-hero-icon-video` `product-hero-icon-image` `product-hero-content` `hero-text` `max-w-lg` `text-white-84` `product-hero-preview` `product-hero-preview-image` `product-hero-video` `product-hero-preview-underlay` `product-page-solution` `product-page-solution-grid` `static-product-page-solution-card` `static-product-page-solution-text` `static-before-wrapper` `static-product-page-image` `solution-after` `product-page-padding-y` `section-content-main` `product-carousel` `product-carousel-viewport` `product-carousel-track` `slide` `slide-card` `product-carousel-image` `product-page-carousel-content` `product-page-carousel-text-content` `slide-arrows` `carousel-arrow` `is-disabled` `carousel-icon` `product-page-tabs` `product-page-tabs-menu` `product-page-tab` `product-page-tab-svg` `product-page-tab-icon` `product-page-tabs-content` `tabs-video-wrapper` `product-page-tabs-image` `product-page-feature-grid-new` `product-page-feature-block-new` `product-page-feature-image` `product-page-feature-content` `product-page-feature-text` `home-testimonial-wrapper` `testemonial-contents` `testimonial-logo-image` `text-quote` `testimonial-bio` `testimonial-author-image` `testimonial-avatar-text` `testimonial-decoration` `is-right` `negative-spacing-bottom` `cta` `cta-block` `cta-block-content` `flex-col-gap-2` `mobile-landscape-text-display-h4` `mobile-landscape-text-body-n` `flex-col-gap-3` `no-cc-required` `icon-20` `cta-block-animation` `cta-block-icon` `cta-block-icon-image` `faq` `faq-block-container` `faq-block` `faq-block_content` `faq-block_head` `faq-block_body` `faq-block_answer` `faq-rtb` `faq-block_icon` `faq-buttons` `ghost-icon-button` `icon-left`

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
