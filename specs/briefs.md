Source: https://www.foreplay.co/briefs

# /briefs: AI Briefs | Write & Storyboard Winning Ad Briefs

Measured on 2026-10-06 with headless Chromium (Playwright 1.63) at 1440×900, 991×900 and 390×844, after a full scroll pass. The Navbar and Footer have the same DOM as the homepage, so reuse `Navbar.jsx` and `Footer.jsx` (CLONE_SPEC.md §1 and §8). Tokens, buttons and type classes are in CLONE_SPEC.md §0; anything shared between these pages is in `specs/_shared-pages.md`. **Copy policy:** short UI strings are verbatim, and long copy is given only as ‹copy: ~N chars, L lines @1440›. Assets are local paths under `public/` (`/assets/...`). Files that already existed in `public/assets` were reused rather than re-downloaded, which is why some paths point at other page folders or at the root. Blocks that are identical to the homepage (the final CTA `.home-cta`, the Chrome-extension card `.home-extension`, and the logo strip `.home-hero-bottom`) are collapsed to a single line, "uses <Component> from src/components". Their internals are not re-specced and their assets were not re-downloaded.

## Build notes (summary)

- **Template:** this page uses the product template exactly (`_shared-pages.md` §1). S1 hero ("BRIEFS" / "Ad Briefs & Storyboards for Marketers"; the sticky block is 540 tall because the subtitle has 3 lines). The hero screen uses `!Briefs-2025_high.webm` plus the bg-video fallback. S2 solution block, S3 carousel (4 slides), S4 tabs ("AI Script Generation", "Storyboard Generation", "AI Storyboard Images") plus the Chrome-extension card, S5 two feature grids, each followed by a testimonial (520 tall), S6 CTA, S7 FAQ, S8 home CTA.
- **Reuse:** same as swipe-file. Tab icons: `TabBriefs0..2`.
- **Motion:** a-71 parallax, tab fade, carousel, FAQ accordion, card hover.
- **Embeds:** none.

## Page meta (measured)

- Webflow page id `647668309e49d3c3f7a7651f`. Title: `AI Briefs | Write & Storyboard Winning Ad Briefs`.
- Meta description: ~135 chars (not transcribed).
- Document height: 1440 → 11004, 991 → 11376, 390 → 13078. Body bg rgb(2, 3, 8).
- Navbar: same DOM as homepage (same node count/height; only the active-link state class differs) → reuse `Navbar.jsx`.
- Footer: same DOM as homepage (same node count/height) → reuse `Footer.jsx` (incl. calendar pop-up + exit-intent modal).
- Fonts loaded: Inter Display 600 normal, Inter 400 normal, Inter 600 normal, Inter 500 normal.

## Section map (DOM order)

Legend: each line is `tag.class — W×H @x,y` at 1440 (y relative to the section top), then `| 991:` and `| 390:` geometry, then non-default computed styles at 1440, then `Δ991{…}` / `Δ390{…}` listing only layout/typography values that differ from 1440. `hidden` = display:none or 0×0 at that width. Text: short UI strings verbatim in quotes; long copy as ‹copy: ~N chars, L lines @1440› (write stand-in copy of matching length). Classes prefixed `w-` (Webflow runtime) are dropped except meaningful widget classes.

### S1. `section#product-hero-section.section.relative`

y/height: 1440 72/1404 · 991 72/1133.4 · 390 72/805.8

- `section#product-hero-section.section.relative` — 1440×1404 @0,0 | 991: 991×1133.4 @0,0 | 390: 390×805.8 @0,0 · pos:relative
  - `div.dot-bg` — 1440×1404 @0,0 | 991: 991×1133.4 @0,0 | 390: 390×805.8 @0,0 · pos:absolute [0px 0px 0px 0px]; bgimg:url(68331d86cf0a6a7db433a56d_dot-grid.webp); bgsize:380px 380px; bgpos:50% 0px; opacity:0.66; pe:none · Δ390{bgsize:256px 256px} · ASSET `/assets/pages/swipe-file/68331d86cf0a6a7db433a56d_dot-grid.webp`
  - `div.container` — 1440×1404 @0,0 | 991: 991×1133.4 @0,0 | 390: 390×805.8 @0,0 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
    - `div.product-hero` — 1360×1404 @40,0 | 991: 927×1133.4 @32,0 | 390: 342×805.8 @24,0 · display:flex; dir:column; align:center; pad:10px 0px 0px 0px · Δ390{pad:24px 0px}
      - `div.product-hero-animation-trigger` — 1440×900 @0,-72 | 991: 991×900 @0,-72 | 390: 390×844 @0,-72 · pos:absolute [-72px 0px 576px 0px]; pe:none · ix2 w-id ec27c2ea-a589-d406-a770-931c9a355139
      - `div.product-hero-sticky` — 900×540 @270,28 | 991: 900×540 @46,28 | 390: 342×552 @24,24 · display:flex; dir:column; align:center; pos:sticky [100px auto auto auto]; transform:matrix(1, 0, 0, 1, 0, 0) · Δ390{pos:relative; transform:none}
        - `div.product-hero-icon` — 256×256 @592,-12 | 991: 192×192 @400,28 | 390: 156×156 @117,24 · mar:-40px 0px -24px 0px · Δ991{pad:32px; mar:0px} · Δ390{pad:24px; mar:0px}
          - `div.code-video.w-embed` — 256×256 @592,-12 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; pos:relative
            - `video` — 256×256 @592,-12 | 991: hidden | 390: hidden · overflow:clip; fit:contain · ASSET `/assets/pages/briefs/animated-icon-briefs.webm`, `/assets/pages/briefs/animated-icon-briefs.mov` · VIDEO {"srcs":["animated-icon-briefs.webm","animated-icon-briefs.mov"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":2000,"vh":2000,"dur":4,"preload":"metadata"}
          - `img.product-hero-icon-image` — hidden | 991: 128×128 @432,60 | 390: 108×108 @141,48 · display:none; maxw:100%; overflow:clip; fit:fill; aspect:auto 128 / 128 · Δ991{display:block} · Δ390{display:block} · IMG `/assets/pages/briefs/682f9f72dc306ab5bf957aea_pi-briefs-hq.webp` natural 0×0 loading=lazy alt "briefs app icon"
        - `div.product-hero-content` — 900×348 @270,220 | 991: 900×348 @46,220 | 390: 342×396 @24,180 · display:flex; dir:column; align:center; gap:28px · Δ390{gap:24px; pad:0px 0px 24px 0px; pos:relative}
          - `h1.text-overline.text-white-68` — 53.1×16 @693,220 | 991: 53.1×16 @469,220 | 390: 53.1×16 @168,180 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "BRIEFS"
          - `div.hero-text` — 900×236 @270,264 | 991: 900×236 @46,264 | 390: 342×268 @24,220 · display:flex; dir:column; align:center; gap:16px; maxw:900px · Δ390{gap:12px}
            - `h2.text-display-h1.hero-title` — 900×136 @270,264 | 991: 900×136 @46,264 | 390: 342×144 @24,220 · bgimg:radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88)); bgsize:auto; bgpos:0% 0%; bgclip:text; font:Inter Display 60px/68px w600 ls-0.45px; color:rgba(255, 255, 255, 0.88); align-text:center; wrap-text:balance; fill:rgba(0, 0, 0, 0) · Δ390{font:38px/48px; ls:-0.285px} "Ad Briefs & Storyboards for Marketers" (2 lines)
            - `div.max-w-lg` — 512×84 @464,416 | 991: 512×84 @240,416 | 390: 342×112 @24,376 · maxw:512px
              - `p.text-body-l.text-white-84` — 512×84 @464,416 | 991: 512×84 @240,416 | 390: 342×112 @24,376 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center ‹copy: ~145 chars, 3 lines @1440›
          - `a.button-dark.button-primary` — 152.6×40 @644,528 | 991: 152.6×40 @419,528 | 390: 152.6×40 @119,512 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; flex:1 1 0%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `https://app.foreplay.co/sign-up`
            - `div.button-text-block` — 116.6×24 @652,536 | 991: 116.6×24 @427,536 | 390: 116.6×24 @127,520 · pos:relative; pad:0px 6px; z:2
              - `div.text-heading-m` — 104.6×24 @658,536 | 991: 104.6×24 @433,536 | 390: 104.6×24 @133,520 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14); align-text:center "Start free trial"
            - `div.button-icon-block.icon-right.opacity-100` — 24×24 @764,536 | 991: 24×24 @540,536 | 390: 24×24 @239,520 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; z:2
              - `div.icon-medium` — 24×24 @764,536 | 991: 24×24 @540,536 | 390: 24×24 @239,520 · display:flex; justify:center; align:center
                - `div.svg.w-embed` — 24×24 @764,536 | 991: 24×24 @540,536 | 390: 24×24 @239,520 · display:flex; justify:center; align:center
                  - `svg` — 24×24 @764,536 | 991: 24×24 @540,536 | 390: 24×24 @239,520 · overflow:hidden · SVG `/assets/pages/briefs/svg-svg-185ries.svg`
      - `div.product-hero-preview` — 1360×850 @40,602 | 991: 927×579.4 @32,602 | 390: 342×213.8 @24,616 · display:flex; dir:column; align:center; pos:relative; mar:52px 0px -48px 0px; aself:stretch; aspect:16 / 10 · Δ390{mar:40px 0px -48px 0px}
        - `div.product-hero-video.w-embed` — 1094.9×541.9 @171,672 | 991: 740.1×366.5 @123,650 | 390: 268.6×136.3 @60,632 · display:flex; justify:center; align:center; pos:absolute [56.0938px 152.328px 242.203px 149.594px]; bg:rgb(2, 3, 8); transform:matrix3d(1, 0, 0, 0, 0, 0.992546, 0.121869, 0, 0, -0.121869, 0.992546, 0, 0, 0, 0, 1); overflow:hidden; z:1; aspect:1400 / 730 · Δ991{transform:matrix3d(1, 0, 0, 0, 0, 0.987688, 0.156434, 0, 0, -0.156434, 0.987688, 0, 0, 0, 0, 1)} · Δ390{transform:matrix3d(1, 0, 0, 0, 0, 0.987688, 0.156434, 0, 0, -0.156434, 0.987688, 0, 0, 0, 0, 1)}
          - `video` — 1094.9×541.9 @171,672 | 991: 740.1×366.5 @123,650 | 390: 268.6×136.3 @60,632 · overflow:clip; fit:contain · ASSET `/assets/pages/briefs/!Briefs-2025_high.webm` · VIDEO {"srcs":["!Briefs-2025_high.webm"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":2800,"vh":1460,"dur":13.292,"preload":"metadata"}
        - `img.product-hero-preview-image` — 1360×850 @40,602 | 991: 927×579.4 @32,602 | 390: 342×213.8 @24,616 · pos:relative; maxw:100%; overflow:clip; z:2; fit:fill; aspect:16 / 10; pe:none · IMG `/assets/pages/swipe-file/6820c07c2e5b8c350c8e1f4c_hero-empty-mockup.webp` natural 1440×900 loading=lazy alt "apple pro xdr monnitor mockup"
        - `div.product-hero-video.w-background-video` — 1094.9×541.9 @171,672 | 991: 740.1×366.5 @123,650 | 390: 268.6×136.3 @60,632 · display:flex; justify:center; align:center; pos:absolute [56.0938px 152.328px 242.203px 149.594px]; bg:rgb(2, 3, 8); transform:matrix3d(1, 0, 0, 0, 0, 0.992546, 0.121869, 0, 0, -0.121869, 0.992546, 0, 0, 0, 0, 1); overflow:hidden; z:1; aspect:1400 / 730 · Δ991{transform:matrix3d(1, 0, 0, 0, 0, 0.987688, 0.156434, 0, 0, -0.156434, 0.987688, 0, 0, 0, 0, 1)} · Δ390{transform:matrix3d(1, 0, 0, 0, 0, 0.987688, 0.156434, 0, 0, -0.156434, 0.987688, 0, 0, 0, 0, 1)} · ASSET `/assets/pages/briefs/68338ad5ea21a80a4e3fe221_product-video-briefs-transcode.mp4`, `/assets/pages/briefs/68338ad5ea21a80a4e3fe221_product-video-briefs-transcode.webm`, `/assets/pages/briefs/68338ad5ea21a80a4e3fe221_product-video-briefs-poster-00001.jpg` · data {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338ad5ea21a80a4e3fe221_product-video-briefs-poster-00001.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
          - `video#39269912-7d80-76ae-34a4-36e7b7f26907-video` — 1094.9×541.9 @171,672 | 991: 740.1×366.5 @123,650 | 390: 268.6×136.3 @60,632 · pos:absolute [-551.703px -1058.08px -551.703px -1058.08px]; mar:551.703px 1058.08px; bgimg:url(62a4ed18ddad95dde8b8bfa4/68338ad5ea21a80a4e3fe221_product-video-briefs-poster-00001.jpg); bgsize:cover; bgpos:50% 50%; overflow:clip; z:-100; fit:cover · Δ991{mar:374.594px 718.422px} · Δ390{mar:138.547px 265.719px} · ASSET `/assets/pages/briefs/68338ad5ea21a80a4e3fe221_product-video-briefs-poster-00001.jpg`, `/assets/pages/briefs/68338ad5ea21a80a4e3fe221_product-video-briefs-transcode.mp4`, `/assets/pages/briefs/68338ad5ea21a80a4e3fe221_product-video-briefs-transcode.webm` · VIDEO {"srcs":["62a4ed18ddad95dde8b8bfa4/68338ad5ea21a80a4e3fe221_product-video-briefs-transcode.mp4","62a4ed18ddad95dde8b8bfa4/68338ad5ea21a80a4e3fe221_product-video-briefs-transcode.webm"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":1280,"vh":668,"dur":13.3,"preload":"metadata"} · data {"data-wf-ignore":"true","data-object-fit":"cover"}
        - `div.product-hero-preview-underlay` — 1440×952 @0,500 | 991: 991×648.9 @0,532 | 390: hidden · pos:absolute [-102px -40px 0px -40px]; bgimg:linear-gradient(0deg, rgb(2, 3, 8) 75%, rgba(2, 3, 8, 0)); bgsize:auto; bgpos:0% 0%; pe:none · Δ390{display:none}

### S2. `section.section`

y/height: 1440 1476/806.4 · 991 1205/794.6 · 390 878/1100.3

- `div.section-padding` — 1440×806.4 @0,0 | 991: 991×794.6 @0,0 | 390: 390×1100.3 @0,0 · pad:8px
  - `div.section-white-block` — 1424×790.4 @8,8 | 991: 975×778.6 @8,8 | 390: 374×1084.3 @8,8 · pos:relative; bg:rgb(255, 255, 255); radius:36px; overflow:hidden; z:2 · Δ390{radius:16px}
    - `div.container.section-container` — 1344×790.4 @48,8 | 991: 975×778.6 @8,8 | 390: 374×1084.3 @8,8 · pad:0px 40px; mar:0px 40px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
      - `div.product-page-solution` — 940×790.4 @250,8 | 991: 911×778.6 @40,8 | 390: 326×1084.3 @32,8 · display:flex; dir:column; gap:36px; pad:80px 0px; mar:0px 162px; maxw:940px · Δ991{mar:0px} · Δ390{gap:32px; pad:48px 0px 32px 0px; mar:0px; maxw:480px}
        - `div.section-head` — 720×128 @360,88 | 991: 720×128 @136,88 | 390: 326×196 @32,56 · display:flex; dir:column; align:center; gap:12px; mar:0px 110px; maxw:720px · Δ991{mar:0px 95.5px} · Δ390{mar:0px}
          - `div.section-head-wrapper` — 543.7×128 @448,88 | 991: 543.7×128 @224,88 | 390: 326×196 @32,56 · display:flex; dir:column; align:center; gap:12px
            - `h2.text-display-h3` — 543.7×44 @448,88 | 991: 543.7×44 @224,88 | 390: 326×88 @32,56 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(23, 25, 32); align-text:center; wrap-text:balance "Why do you need a creative brief?"
            - `div.section-head_paragraph` — 512×72 @464,144 | 991: 512×72 @240,144 | 390: 326×96 @32,156 · maxw:512px
              - `p.text-body-m` — 512×72 @464,144 | 991: 512×72 @240,144 | 390: 326×96 @32,156 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(36, 38, 46); align-text:center; wrap-text:pretty ‹copy: ~149 chars, 3 lines @1440›
        - `div.product-page-solution-grid` — 940×466.4 @250,252 | 991: 911×454.6 @40,252 | 390: 326×776.3 @32,284 · display:grid; cols:462px 462px; rows:466.375px; gap:16px; aself:stretch · Δ991{cols:447.5px 447.5px} · Δ390{cols:326px}
          - `div.static-product-page-solution-card` — 462×466.4 @250,252 | 991: 447.5×454.6 @40,252 | 390: 326×380.2 @32,284 · display:flex; dir:column; gap:20px; radius:20px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px inset; overflow:hidden
            - `div.static-product-page-solution-text` — 462×72 @250,252 | 991: 447.5×72 @40,252 | 390: 326×96 @32,284 · pad:20px 20px 0px 20px
              - `div.home-winning-card-text` — 422×52 @270,272 | 991: 407.5×52 @60,272 | 390: 286×76 @52,304 · pos:relative; z:10; pe:none
                - `div.flex-col-gap-1.align-start` — 422×52 @270,272 | 991: 407.5×52 @60,272 | 390: 286×76 @52,304 · display:flex; dir:column; align:flex-start; gap:4px; pe:none
                  - `div.text-solid-900` — 74×24 @270,272 | 991: 74×24 @60,272 | 390: 65.8×24 @52,304 · pe:none
                    - `div.text-label-l` — 74×24 @270,272 | 991: 74×24 @60,272 | 390: 65.8×24 @52,304 · pe:none; font:Inter 18px/24px w500 ls-0.259999px; color:rgb(9, 10, 14) · Δ390{font:16px/24px; ls:-0.23111px} "Before ..."
                  - `div.text-solid-500` — 378.2×24 @270,300 | 991: 378.2×24 @60,300 | 390: 286×48 @52,332 · pe:none
                    - `div` — 378.2×24 @270,300 | 991: 378.2×24 @60,300 | 390: 286×48 @52,332 · pe:none; font:Inter 16px/24px w400 ls-0.18px; color:rgb(52, 54, 66); wrap-text:pretty "Endless docs, confusing deliverables and revisions."
            - `div.static-before-wrapper` — 462×374.4 @250,344 | 991: 447.5×362.6 @40,344 | 390: 326×264.2 @32,400 · pos:relative; z:-1
              - `img.static-product-page-image` — 462×374.4 @250,344 | 991: 447.5×362.6 @40,344 | 390: 326×264.2 @32,400 · pos:relative; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/briefs/682dfe3aacd1e2e93f141aee_before-briefs.webp` natural 1392×1128 loading=lazy
          - `div.static-product-page-solution-card.solution-after` — 462×466.4 @728,252 | 991: 447.5×454.6 @504,252 | 390: 326×380.2 @32,680 · display:flex; dir:column; gap:20px; bg:rgb(2, 3, 8); radius:20px; overflow:hidden
            - `div.static-product-page-solution-text` — 462×72 @728,252 | 991: 447.5×72 @504,252 | 390: 326×96 @32,680 · pad:20px 20px 0px 20px
              - `div.home-winning-card-text` — 422×52 @748,272 | 991: 407.5×52 @524,272 | 390: 286×76 @52,700 · pos:relative; z:10; pe:none
                - `div.flex-col-gap-1.align-start` — 422×52 @748,272 | 991: 407.5×52 @524,272 | 390: 286×76 @52,700 · display:flex; dir:column; align:flex-start; gap:4px; pe:none
                  - `div.text-white` — 117.9×24 @748,272 | 991: 117.9×24 @524,272 | 390: 104.8×24 @52,700 · pe:none
                    - `div.text-label-l` — 117.9×24 @748,272 | 991: 117.9×24 @524,272 | 390: 104.8×24 @52,700 · pe:none; font:Inter 18px/24px w500 ls-0.259999px; color:rgb(255, 255, 255) · Δ390{font:16px/24px; ls:-0.23111px} "After Foreplay"
                  - `div.text-alpha-100` — 391×24 @748,300 | 991: 391×24 @524,300 | 390: 286×48 @52,728 · flex:1 1 0%; pe:none
                    - `div` — 391×24 @748,300 | 991: 391×24 @524,300 | 390: 286×48 @52,728 · pe:none; font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Turn inspiration into actionable briefs in half the time."
            - `img.static-product-page-image` — 462×374.4 @728,344 | 991: 447.5×362.6 @504,344 | 390: 326×264.2 @32,796 · pos:relative; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/briefs/682e02bb5956e6397077a270_after-briefs.webp` natural 1392×1128 loading=lazy

### S3. `div.section`

y/height: 1440 2282/972.3 · 991 2000/909.4 · 390 1978/924

- `div.product-page-padding-y` — 1440×972.3 @0,0 | 991: 991×909.4 @0,0 | 390: 390×924 @0,0 · display:flex; dir:column; pad:108px 0px; overflow:hidden · Δ991{pad:96px 0px} · Δ390{pad:80px 0px}
  - `div.section-content-main` — 1440×756.3 @0,108 | 991: 991×717.4 @0,96 | 390: 390×764 @0,80 · pad:48px 0px 0px 0px · Δ390{pad:40px 0px 0px 0px}
    - `div.container` — 1440×177.8 @0,156 | 991: 991×176 @0,144 | 390: 390×248 @0,120 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
      - `div.section-head` — 720×177.8 @360,156 | 991: 720×176 @136,144 | 390: 342×248 @24,120 · display:flex; dir:column; align:center; gap:12px; mar:0px 320px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
        - `div.section-head-wrapper` — 561.5×177.8 @439,156 | 991: 512×176 @240,144 | 390: 342×248 @24,120 · display:flex; dir:column; align:center; gap:12px
          - `div.text-overline.text-white-68` — 85.1×16 @677,156 | 991: 85.1×16 @453,144 | 390: 85.1×16 @152,120 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "USE CASES"
          - `h2.text-display-h2` — 561.5×53.8 @439,184 | 991: 510.4×52 @240,172 | 390: 342×96 @24,148 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Scale creative output with AI"
          - `div.section-head_paragraph` — 512×84 @464,250 | 991: 512×84 @240,236 | 390: 342×112 @24,256 · maxw:512px
            - `p.text-body-l` — 512×84 @464,250 | 991: 512×84 @240,236 | 390: 342×112 @24,256 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~153 chars, 3 lines @1440›
    - `div.product-carousel` — 1440×530.5 @0,334 | 991: 991×493.4 @0,320 | 390: 390×476 @0,368 · pos:relative · data {"data-carousel":""}
      - `div.container.section-container` — 1344×530.5 @48,334 | 991: 991×493.4 @0,320 | 390: 390×476 @0,368 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
        - `div.product-carousel-viewport` — 1264×530.5 @88,334 | 991: 927×493.4 @32,320 | 390: 342×476 @24,368 · display:flex; dir:column; gap:48px; pad:64px 0px 0px 0px
          - `div.product-carousel-track` — 1264×382.5 @88,398 | 991: 927×345.4 @32,384 | 390: 342×320 @24,432 · display:flex; gap:16px; transform:matrix(1, 0, 0, 1, 0, 0); transition:transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-track":""}
            - `div.slide` — 561.6×382.5 @88,398 | 991: 480×345.4 @32,384 | 390: 342×320 @24,432 · flex:0 0 auto
              - `div.slide-card` — 561.6×382.5 @88,398 | 991: 480×345.4 @32,384 | 390: 342×320 @24,432 · display:flex; dir:column; maxw:576px; minh:320px; radius:28px; shadow:rgb(27, 28, 33) 0px 0px 0px 1px; overflow:hidden
                - `img.product-carousel-image` — 561.6×254.8 @88,398 | 991: 480×217.8 @32,384 | 390: 342×155.2 @24,432 · maxw:100%; flex:1 1 0%; overflow:clip; fit:cover · IMG `/assets/pages/briefs/6453d07eaf4c84835bc3640a_itterate-velocity.webp` natural 594×269 loading=lazy alt "make versions and itterations of your ads"
                - `div.product-page-carousel-content` — 561.6×127.7 @88,653 | 991: 480×127.6 @32,602 | 390: 342×164.8 @24,587 · pad:24px; flex:1 1 0% · Δ390{pad:16px 16px 24px 16px}
                  - `div.product-page-carousel-text-content` — 513.6×79 @112,677 | 991: 432×79 @56,626 | 390: 310×103 @40,603 · display:flex; dir:column; gap:7px; pos:relative; z:1
                    - `h3.text-label-m` — 513.6×24 @112,677 | 991: 432×24 @56,626 | 390: 310×24 @40,603 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Iterate with Velocity"
                    - `div.text-alpha-100` — 513.6×48 @112,708 | 991: 432×48 @56,657 | 390: 310×72 @40,634 · flex:1 1 0%
                      - `p.text-body-m` — 513.6×48 @112,708 | 991: 432×48 @56,657 | 390: 310×72 @40,634 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~94 chars, 2 lines @1440›
            - `div.slide` — 561.6×382.5 @666,398 | 991: 480×345.4 @528,384 | 390: 342×320 @382,432 · flex:0 0 auto
              - `div.slide-card` — 561.6×382.5 @666,398 | 991: 480×345.4 @528,384 | 390: 342×320 @382,432 · display:flex; dir:column; maxw:576px; minh:320px; radius:28px; shadow:rgb(27, 28, 33) 0px 0px 0px 1px; overflow:hidden
                - `img.product-carousel-image` — 561.6×255.5 @666,398 | 991: 480×218.4 @528,384 | 390: 342×155.6 @382,432 · maxw:100%; flex:1 1 0%; overflow:clip; fit:cover · IMG `/assets/pages/briefs/6474cb2a6d47ed343b8907bf_multiple-brands-2.webp` natural 594×270 loading=lazy alt "manage a successful campaign for multiple brands"
                - `div.product-page-carousel-content` — 561.6×127 @666,654 | 991: 480×127 @528,602 | 390: 342×164.4 @382,588 · pad:24px; flex:1 1 0% · Δ390{pad:16px 16px 24px 16px}
                  - `div.product-page-carousel-text-content` — 513.6×79 @690,678 | 991: 432×79 @552,626 | 390: 310×103 @398,604 · display:flex; dir:column; gap:7px; pos:relative; z:1
                    - `h3.text-label-m` — 513.6×24 @690,678 | 991: 432×24 @552,626 | 390: 310×24 @398,604 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Manage Multiple Brands"
                    - `div.text-alpha-100` — 513.6×48 @690,709 | 991: 432×48 @552,657 | 390: 310×72 @398,635 · flex:1 1 0%
                      - `p.text-body-m` — 513.6×48 @690,709 | 991: 432×48 @552,657 | 390: 310×72 @398,635 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~94 chars, 2 lines @1440›
            - …2 more `div.slide` siblings with the same structure (4 total):
              - [3] 561.6×382.5 @1243,398 — img 6474cb43476077e17c97ca8b_brief-deadline.webp, "Never Miss a Deadline", ‹~83ch›
              - [4] 561.6×382.5 @1821,398 — img 6453d07e922f8a155fff9eba_dynamic-deliverables.webp, "Dynamic Deliverables", "Easily build out creative deliverables for your creative assets."
          - `div.slide-arrows` — 1264×36 @88,829 | 991: 927×36 @32,777 | 390: 342×44 @24,800 · display:flex; justify:center; align:center; gap:24px
            - `a.carousel-arrow.is-disabled` — 36×36 @672,829 | 991: 36×36 @448,777 | 390: 44×44 @139,800 · display:flex; justify:center; align:center; pos:relative; maxw:100%; bg:rgba(255, 255, 255, 0.06); radius:2880px; opacity:0.5; transition:0.2s; pe:none · Δ991{radius:1982px} · Δ390{radius:780px} · href `#` · aria "Previous" · data {"data-dir":"left"}
              - `div.carousel-icon.w-embed` — 18×18 @681,838 | 991: 18×18 @457,786 | 390: 18×18 @152,813 · pe:none
                - `svg` — 18×18 @681,838 | 991: 18×18 @457,786 | 390: 18×18 @152,813 · overflow:hidden; pe:none · SVG `/assets/pages/briefs/svg-carousel-icon-b7rq1z.svg`
            - `a.carousel-arrow` — 36×36 @732,829 | 991: 36×36 @508,777 | 390: 44×44 @207,800 · display:flex; justify:center; align:center; pos:relative; maxw:100%; bg:rgba(255, 255, 255, 0.06); radius:2880px; transition:0.2s · Δ991{radius:1982px} · Δ390{radius:780px} · href `#` · aria "Previous" · data {"data-dir":"right"}
              - `svg` — 18×18 @741,838 | 991: 18×18 @517,786 | 390: 18×18 @220,813 · overflow:hidden · SVG `/assets/pages/briefs/svg-carousel-icon-3j2fr4.svg`

### S4. `div.section`

y/height: 1440 3255/1470.8 · 991 2909/1251.4 · 390 2902/904.4

- `div.product-page-padding-y` — 1440×1470.8 @0,0 | 991: 991×1251.4 @0,0 | 390: 390×904.4 @0,0 · display:flex; dir:column; pad:108px 0px; overflow:hidden · Δ991{pad:96px 0px} · Δ390{pad:80px 0px}
  - `div.container.section-container` — 1344×1254.8 @48,108 | 991: 991×1059.4 @0,96 | 390: 390×744.4 @0,80 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
    - `div.section-head` — 720×177.8 @360,108 | 991: 720×176 @136,96 | 390: 342×248 @24,80 · display:flex; dir:column; align:center; gap:12px; mar:0px 272px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
      - `div.section-head-wrapper` — 518.6×177.8 @461,108 | 991: 512×176 @240,96 | 390: 342×248 @24,80 · display:flex; dir:column; align:center; gap:12px
        - `div.text-overline.text-white-68` — 123.9×16 @658,108 | 991: 123.9×16 @434,96 | 390: 123.9×16 @133,80 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "CORE FEATURES"
        - `h2.text-display-h2` — 518.6×53.8 @461,136 | 991: 471.5×52 @260,124 | 390: 342×96 @24,108 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Your creative brief co-pilot"
        - `div.section-head_paragraph` — 512×84 @464,201 | 991: 512×84 @240,188 | 390: 342×112 @24,216 · maxw:512px
          - `p.text-body-l` — 512×84 @464,201 | 991: 512×84 @240,188 | 390: 342×112 @24,216 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~147 chars, 3 lines @1440›
    - `div.section-content-main` — 1264×1077 @88,285 | 991: 927×883.4 @32,272 | 390: 342×496.4 @24,328 · pad:48px 0px 0px 0px · Δ390{pad:40px 0px 0px 0px}
      - `div.product-page-tabs.w-tabs` — 1264×803 @88,333 | 991: 927×609.4 @32,320 | 390: 342×456.4 @24,368 · display:flex; dir:column; align:center; pos:relative · data {"data-current":"AI Ad Scripts","data-easing":"ease","data-duration-in":"300","data-duration-out":"100"}
        - `div.product-page-tabs-menu` — 1264×52 @88,333 | 991: 927×48 @32,320 | 390: 342×224 @24,368 · display:grid; cols:408px 408px 408px; rows:44px; gap:16px; pos:relative; pad:4px; overflow:hidden · Δ991{cols:295.656px 295.672px 295.656px} · Δ390{cols:334px; gap:0px 16px; radius:10px}
          - `a#w-tabs-0-data-w-tab-0.product-page-tab.w-tab-link` — 408×44 @92,337 | 991: 295.7×40 @36,324 | 390: 334×72 @28,372 · display:flex; justify:center; align:center; gap:8px; pos:relative; pad:10px 20px; maxw:100%; radius:8px; transition:0.2s · Δ991{pad:8px 12px} · Δ390{dir:column; justify:flex-start; pad:8px 12px} · href `#w-tabs-0-data-w-pane-0` · data {"data-w-tab":"AI Ad Scripts"}
            - `svg` — 24×24 @205,347 | 991: 24×24 @93,332 | 390: 24×24 @183,380 · overflow:hidden · SVG `/assets/pages/briefs/svg-product-page-tab-svg-1w2n5lq.svg`
            - `div.text-label-m` — 150.4×24 @237,347 | 991: 150.4×24 @125,332 | 390: 150.4×24 @120,412 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255); align-text:center "AI Script Generation"
          - `a#w-tabs-0-data-w-tab-1.product-page-tab.w-tab-link` — 408×44 @516,337 | 991: 295.7×40 @348,324 | 390: 334×72 @28,444 · display:flex; justify:center; align:center; gap:8px; pos:relative; pad:10px 20px; maxw:100%; radius:8px; opacity:0.44; transition:0.2s · Δ991{pad:8px 12px} · Δ390{dir:column; justify:flex-start; pad:8px 12px} · href `#w-tabs-0-data-w-pane-1` · data {"data-w-tab":"Storyboard Generation"}
            - `svg` — 24×24 @619,347 | 991: 24×24 @394,332 | 390: 24×24 @183,452 · overflow:hidden · SVG `/assets/pages/briefs/svg-product-page-tab-svg-bzt1wt.svg`
            - `div.text-label-m` — 171×24 @651,347 | 991: 171×24 @426,332 | 390: 171×24 @110,484 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255); align-text:center "Storyboard Generation"
          - `a#w-tabs-0-data-w-tab-2.product-page-tab.w-tab-link` — 408×44 @940,337 | 991: 295.7×40 @659,324 | 390: 334×72 @28,516 · display:flex; justify:center; align:center; gap:8px; pos:relative; pad:10px 20px; maxw:100%; radius:8px; opacity:0.44; transition:0.2s · Δ991{pad:8px 12px} · Δ390{dir:column; justify:flex-start; pad:8px 12px} · href `#w-tabs-0-data-w-pane-2` · data {"data-w-tab":"AI Storyboard"}
            - `svg` — 24×24 @1047,347 | 991: 24×24 @710,332 | 390: 24×24 @183,524 · overflow:hidden · SVG `/assets/pages/briefs/svg-product-page-tab-svg-kn8jdt.svg`
            - `div.text-label-m` — 161.7×24 @1079,347 | 991: 161.7×24 @742,332 | 390: 161.7×24 @114,556 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255); align-text:center "AI Storyboard Images"
        - `div.product-page-tabs-content` — 1264×751 @88,385 | 991: 927×561.4 @32,368 | 390: 342×232.4 @24,592 · pos:relative
          - `div#w-tabs-0-data-w-pane-0.w-tab-pane` — 1264×751 @88,385 | 991: 927×561.4 @32,368 | 390: 342×232.4 @24,592 · pos:relative · data {"data-w-tab":"AI Ad Scripts"}
            - `div.tabs-video-wrapper` — 1264×751 @88,385 | 991: 927×561.4 @32,368 | 390: 342×232.4 @24,592 · display:flex; dir:column; gap:20px; pad:20px 0px
              - `img.product-page-tabs-image` — 1264×711 @88,405 | 991: 927×521.4 @32,388 | 390: 342×192.4 @24,612 · maxw:100%; radius:32px; overflow:clip; fit:fill · Δ390{radius:16px} · IMG `/assets/pages/briefs/6474f34d127523e5b91bfc1b_Briefs-Tab-1.webp` natural 1440×810 loading=eager alt "AI Ad script creation"
          - `div#w-tabs-0-data-w-pane-1.w-tab-pane` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: img 6474f88aad7627eb6a9ef3f2_Briefs-Tab-2.webp
          - `div#w-tabs-0-data-w-pane-2.w-tab-pane` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: img 6474f8d4c237281dc975773a_Briefs-Tab-3-2.webp
      - `div.home-extension` — 1264×226 @88,1136 | 991: 927×226 @32,930 | 390: hidden · **identical to the homepage block → uses `ChromeExtension.jsx` from src/components (not re-specced; no assets downloaded)**

### S5. `div.section`

y/height: 1440 4725/2930.2 · 991 4161/3736.5 · 390 3806/5280

- `div.section` — 1440×2930.2 @0,0 | 991: 991×3736.5 @0,0 | 390: 390×5280 @0,0
  - `div.product-page-padding-y` — 1440×2930.2 @0,0 | 991: 991×3736.5 @0,0 | 390: 390×5280 @0,0 · display:flex; dir:column; pad:108px 0px; overflow:hidden · Δ991{pad:96px 0px} · Δ390{pad:80px 0px}
    - `div.container.section-container` — 1344×2714.2 @48,108 | 991: 991×3544.5 @0,96 | 390: 390×5120 @0,80 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
      - `div.section-head` — 720×203.5 @360,108 | 991: 720×148 @136,96 | 390: 342×248 @24,80 · display:flex; dir:column; align:center; gap:12px; mar:0px 272px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
        - `div.section-head-wrapper` — 720×203.5 @360,108 | 991: 685.4×148 @153,96 | 390: 342×248 @24,80 · display:flex; dir:column; align:center; gap:12px
          - `div.text-overline.text-white-68` — 110.8×16 @665,108 | 991: 110.8×16 @440,96 | 390: 110.8×16 @140,80 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "ALL FEATURES"
          - `h2.text-display-h2` — 720×107.5 @360,136 | 991: 685.4×52 @153,124 | 390: 342×96 @24,108 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Production that’s way more productive" (2 lines)
          - `div.section-head_paragraph` — 512×56 @464,256 | 991: 512×56 @240,188 | 390: 342×112 @24,216 · maxw:512px
            - `p.text-body-l` — 512×56 @464,256 | 991: 512×56 @240,188 | 390: 342×112 @24,216 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~118 chars, 2 lines @1440›
      - `div.section-content-main` — 1264×735.3 @88,312 | 991: 927×1160.3 @32,244 | 390: 342×1960 @24,328 · pad:48px 0px 0px 0px · Δ390{pad:40px 0px 0px 0px}
        - `div.product-page-feature-grid-new` — 1264×687.3 @88,360 | 991: 927×1112.3 @32,292 | 390: 342×1920 @24,368 · display:grid; cols:405.328px 405.328px 405.344px; rows:331.672px 331.672px; gap:24px; pos:relative; radius:12px; overflow:hidden; z:4 · Δ991{cols:451.5px 451.5px} · Δ390{cols:342px}
          - `div#w-node-ec27c2ea-a589-d406-a770-931c9a355204-f7a7651f.product-page-feature-block-new` — 405.3×331.7 @88,360 | 991: 451.5×354.8 @32,292 | 390: 342×300 @24,368 · display:flex; dir:column; pos:relative; gcol:span 1/span 1; grow:span 1/span 1; border:1px solid rgb(23, 25, 32); radius:20px; overflow:hidden; z:1; transition:background-color 0.2s
            - `img.product-page-feature-image` — 403.3×201.7 @89,361 | 991: 449.5×224.8 @33,293 | 390: 340×170 @25,369 · maxw:100%; aself:center; overflow:clip; fit:fill · IMG `/assets/pages/briefs/645405e3a1cdeeb67fce56d3_attach-inspo.webp` natural 599×299 loading=lazy alt "attach facebook or tiktok ad inspiration"
            - `div.product-page-feature-content` — 403.3×128 @89,563 | 991: 449.5×128 @33,518 | 390: 340×128 @25,539 · display:flex; align:flex-end; pad:24px; flex:1 1 0%
              - `div.product-page-feature-text` — 355.3×80 @113,587 | 991: 401.5×80 @57,542 | 390: 292×80 @49,563 · display:flex; dir:column; gap:8px
                - `h3.text-label-m` — 355.3×24 @113,587 | 991: 401.5×24 @57,542 | 390: 292×24 @49,563 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Attach Inspiration"
                - `div.text-alpha-100` — 355.3×48 @113,619 | 991: 401.5×48 @57,574 | 390: 292×48 @49,595 · flex:1 1 0%
                  - `p.text-body-m` — 355.3×48 @113,619 | 991: 401.5×48 @57,574 | 390: 292×48 @49,595 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Include examples from your competitors or your own ads." (2 lines)
          - `div#w-node-ec27c2ea-a589-d406-a770-931c9a35520e-f7a7651f.product-page-feature-block-new` — 405.3×331.7 @517,360 | 991: 451.5×354.8 @508,292 | 390: 342×300 @24,692 · display:flex; dir:column; pos:relative; gcol:span 1/span 1; grow:span 1/span 1; border:1px solid rgb(23, 25, 32); radius:20px; overflow:hidden; z:1; transition:background-color 0.2s
            - `img.product-page-feature-image` — 403.3×201.7 @518,361 | 991: 449.5×224.8 @509,293 | 390: 340×170 @25,693 · maxw:100%; aself:center; overflow:clip; fit:fill · IMG `/assets/pages/briefs/6474dfaa2e9a4a5888f31dcd_brand-guidelines.webp` natural 599×299 loading=lazy alt "bulk add brand details to your brief"
            - `div.product-page-feature-content` — 403.3×128 @518,563 | 991: 449.5×128 @509,518 | 390: 340×128 @25,863 · display:flex; align:flex-end; pad:24px; flex:1 1 0%
              - `div.product-page-feature-text` — 355.3×80 @542,587 | 991: 381.9×56 @533,566 | 390: 292×80 @49,887 · display:flex; dir:column; gap:8px
                - `h3.text-label-m` — 355.3×24 @542,587 | 991: 381.9×24 @533,566 | 390: 292×24 @49,887 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Brand Profiles"
                - `div.text-alpha-100` — 355.3×48 @542,619 | 991: 381.9×24 @533,598 | 390: 292×48 @49,919 · flex:1 1 0%
                  - `p.text-body-m` — 355.3×48 @542,619 | 991: 381.9×24 @533,598 | 390: 292×48 @49,919 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Inject reusable brand information with a single click." (2 lines)
          - …4 more `div#w-node-ec27c2ea-a589-d406-a770-931c9a355204-f7a7651f.product-page-feature-block-new` siblings with the same structure (6 total):
            - [3] 405.3×331.7 @947,360 — img 645405e3fbeb9258c2385d11_modular-editor.webp, "Modular Brief Editor", "Add pre-built content block your creative project needs."
            - [4] 405.3×331.7 @88,716 — img 645405e354900dd97b639df3_export-brief.webp, "Export Everywhere", ‹~62ch›
            - [5] 405.3×331.7 @517,716 — img 645405e32a498148618e56fa_brief-template.webp, "Creative Brief Template", "Craft and manage reusable templates and script formats."
            - [6] 405.3×331.7 @947,716 — img 645405e3a367f05e79030230_brief-share.webp, "Easily Share with Anyone", "Share links for a client, project manager or team member."
      - `div.container` — 1264×520 @88,1047 | 991: 927×568 @32,1404 | 390: 342×488 @24,2288 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
        - `div.home-testimonial-wrapper` — 1184×520 @128,1047 | 991: 863×568 @64,1404 | 390: 294×488 @48,2288 · pos:relative; pad:120px 0px · Δ991{pad:108px 0px} · Δ390{pad:80px 0px}
          - `div.testemonial-contents` — 947.2×280 @246,1167 | 991: 640×352 @176,1512 | 390: 294×328 @48,2368 · display:flex; dir:column; justify:center; align:center; gap:24px; mar:0px 118.406px; maxw:80% · Δ991{mar:0px 111.5px; maxw:640px} · Δ390{mar:0px; maxw:640px}
            - `img.testimonial-logo-image` — 120×40 @660,1167 | 991: 120×40 @436,1512 | 390: 96×40 @147,2368 · maxw:100%; maxh:48px; overflow:clip; fit:contain; aspect:auto 70 / 40 · IMG `/assets/pages/briefs/6478c6a9d904f44339a39b5f_63cd2aa75c56b2db086ad38b_LOGO BLUE-p-500.webp` natural 500×167 loading=lazy
            - `div.text-quote` — 947.2×144 @246,1231 | 991: 640×216 @176,1576 | 390: 294×192 @48,2432 · font:Inter 24px/36px w400 ls-0.18px; color:rgb(250, 250, 253); align-text:center · Δ390{font:16px/24px} ‹copy: ~289 chars, 4 lines @1440›
            - `div.testimonial-bio` — 234.2×48 @603,1399 | 991: 234.2×48 @378,1816 | 390: 226.2×48 @82,2648 · display:flex; align:center; gap:16px
              - `img.testimonial-author-image` — 48×48 @603,1399 | 991: 48×48 @378,1816 | 390: 40×40 @82,2652 · maxw:100%; radius:5px; overflow:clip; fit:fill · IMG `/assets/pages/briefs/6478c6e1810c46a199122313_Dv92wDm3_400x400.webp` natural 400×400 loading=lazy
              - `div.testimonial-avatar-text` — 170.2×48 @667,1399 | 991: 170.2×48 @442,1816 | 390: 170.2×48 @138,2648
                - `div.text-label-m` — 170.2×24 @667,1399 | 991: 170.2×24 @442,1816 | 390: 170.2×24 @138,2648 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Kevin Sussat"
                - `div.text-body-m` — 170.2×24 @667,1423 | 991: 170.2×24 @442,1840 | 390: 170.2×24 @138,2672 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Founder @ Envu Media"
          - `img.testimonial-decoration.is-right` — 142.1×280.4 @1170,1167 | 991: 172.6×568 @841,1404 | 390: 117.6×488 @254,2288 · pos:absolute [260px 0px 260px 1041.92px]; maxw:100%; opacity:0.7; transform:matrix(1, 0, 0, 1, 0, -140.203); overflow:clip; fit:fill · Δ991{transform:matrix(1, 0, 0, 1, 0, -284)} · Δ390{transform:matrix(1, 0, 0, 1, 0, -244)} · IMG `/assets/pages/swipe-file/642db608b19bd600e001723a_awward-right.svg` natural 114×225 loading=lazy
          - `img.testimonial-decoration` — 142.1×280.4 @128,1167 | 991: 172.6×568 @-22,1404 | 390: 117.6×488 @19,2288 · pos:absolute [260px 1041.92px 260px 0px]; maxw:100%; opacity:0.7; transform:matrix(1, 0, 0, 1, 0, -140.203); overflow:clip; fit:fill · Δ991{transform:matrix(1, 0, 0, 1, 0, -284)} · Δ390{transform:matrix(1, 0, 0, 1, 0, -244)} · IMG `/assets/pages/swipe-file/642db6082db5f7803a7a121e_award-left.svg` natural 114×225 loading=lazy
      - `div.section-content-main` — 1264×735.3 @88,1567 | 991: 927×1136.3 @32,1972 | 390: 342×1960 @24,2776 · pad:48px 0px 0px 0px · Δ390{pad:40px 0px 0px 0px}
        - `div.product-page-feature-grid-new` — 1264×687.3 @88,1615 | 991: 927×1088.3 @32,2020 | 390: 342×1920 @24,2816 · display:grid; cols:405.328px 405.328px 405.344px; rows:331.656px 331.672px; gap:24px; pos:relative; radius:12px; overflow:hidden; z:4 · Δ991{cols:451.5px 451.5px} · Δ390{cols:342px}
          - `div#w-node-_8a67e8cd-1b29-0370-8eeb-abec23f19224-f7a7651f.product-page-feature-block-new` — 405.3×331.7 @88,1615 | 991: 451.5×354.8 @32,2020 | 390: 342×300 @24,2816 · display:flex; dir:column; pos:relative; gcol:span 1/span 1; grow:span 1/span 1; border:1px solid rgb(23, 25, 32); radius:20px; overflow:hidden; z:1; transition:background-color 0.2s
            - `img.product-page-feature-image` — 403.3×201.7 @89,1616 | 991: 449.5×224.8 @33,2021 | 390: 340×170 @25,2817 · maxw:100%; aself:center; overflow:clip; fit:fill · IMG `/assets/pages/briefs/64541ad7101e24294205eba5_new-hooks.webp` natural 599×299 loading=lazy alt "re-write ad copy to fit your marketing strategy"
            - `div.product-page-feature-content` — 403.3×128 @89,1818 | 991: 449.5×128 @33,2246 | 390: 340×128 @25,2987 · display:flex; align:flex-end; pad:24px; flex:1 1 0%
              - `div.product-page-feature-text` — 355.3×80 @113,1842 | 991: 385×56 @57,2294 | 390: 292×80 @49,3011 · display:flex; dir:column; gap:8px
                - `h3.text-label-m` — 355.3×24 @113,1842 | 991: 385×24 @57,2294 | 390: 292×24 @49,3011 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Regenerate Versions"
                - `div.text-alpha-100` — 355.3×48 @113,1874 | 991: 385×24 @57,2326 | 390: 292×48 @49,3043 · flex:1 1 0%
                  - `p.text-body-m` — 355.3×48 @113,1874 | 991: 385×24 @57,2326 | 390: 292×48 @49,3043 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Unlock new ideas for hooks, CTAs and more with AI." (2 lines)
          - `div#w-node-_8a67e8cd-1b29-0370-8eeb-abec23f1922e-f7a7651f.product-page-feature-block-new` — 405.3×331.7 @517,1615 | 991: 451.5×354.8 @508,2020 | 390: 342×300 @24,3140 · display:flex; dir:column; pos:relative; gcol:span 1/span 1; grow:span 1/span 1; border:1px solid rgb(23, 25, 32); radius:20px; overflow:hidden; z:1; transition:background-color 0.2s
            - `img.product-page-feature-image` — 403.3×201.7 @518,1616 | 991: 449.5×224.8 @509,2021 | 390: 340×170 @25,3141 · maxw:100%; aself:center; overflow:clip; fit:fill · IMG `/assets/pages/briefs/64541acd4d56e7cdfc6abaa7_scene-description.webp` natural 599×299 loading=lazy alt "Add visual scene descriptions to your AI storyboard"
            - `div.product-page-feature-content` — 403.3×128 @518,1818 | 991: 449.5×128 @509,2246 | 390: 340×128 @25,3311 · display:flex; align:flex-end; pad:24px; flex:1 1 0%
              - `div.product-page-feature-text` — 355.3×80 @542,1842 | 991: 401.5×80 @533,2270 | 390: 292×80 @49,3335 · display:flex; dir:column; gap:8px
                - `h3.text-label-m` — 355.3×24 @542,1842 | 991: 401.5×24 @533,2270 | 390: 292×24 @49,3335 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Scene Descriptions"
                - `div.text-alpha-100` — 355.3×48 @542,1874 | 991: 401.5×48 @533,2302 | 390: 292×48 @49,3367 · flex:1 1 0%
                  - `p.text-body-m` — 355.3×48 @542,1874 | 991: 401.5×48 @533,2302 | 390: 292×48 @49,3367 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Detailed action descriptions for each scene in your storyboard." (2 lines)
          - …4 more `div#w-node-_8a67e8cd-1b29-0370-8eeb-abec23f19224-f7a7651f.product-page-feature-block-new` siblings with the same structure (6 total):
            - [3] 405.3×331.7 @947,1615 — img 64541ade63d9544d60a6e5f3_text-overlay.webp, "Converting Text Overlay", "Generate performance-focused text-on-screen."
            - [4] 405.3×331.7 @88,1971 — img 645420f1ac10bfbbe22cff0f_upload assets-4.webp, "Collect Assets", "Manage creative asset submissions from one or many."
            - [5] 405.3×331.7 @517,1971 — img 645420809ed898e0a2e34a9e_multi-language-2.webp, "Multi-Language", "Version your script or AI storyboard into 150+ languages."
            - [6] 405.3×331.7 @947,1971 — img 6474dfaa93a6291dbec99294_upload assets-4.webp, "Branded Brief Pages", ‹~69ch›
      - `div.container` — 1264×520 @88,2303 | 991: 927×532 @32,3108 | 390: 342×464 @24,4736 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
        - `div.home-testimonial-wrapper` — 1184×520 @128,2303 | 991: 863×532 @64,3108 | 390: 294×464 @48,4736 · pos:relative; pad:120px 0px · Δ991{pad:108px 0px} · Δ390{pad:80px 0px}
          - `div.testemonial-contents` — 947.2×280 @246,2423 | 991: 640×316 @176,3216 | 390: 294×304 @48,4816 · display:flex; dir:column; justify:center; align:center; gap:24px; mar:0px 118.406px; maxw:80% · Δ991{mar:0px 111.5px; maxw:640px} · Δ390{mar:0px; maxw:640px}
            - `img.testimonial-logo-image` — 120×40 @660,2423 | 991: 120×40 @436,3216 | 390: 96×40 @147,4816 · maxw:100%; maxh:48px; overflow:clip; fit:contain; aspect:auto 70 / 40 · IMG `/assets/pages/briefs/6478bf6f2eb8f9e5dd1563d4_Group 48348.webp` natural 70×18 loading=lazy
            - `div.text-quote` — 947.2×144 @246,2487 | 991: 640×180 @176,3280 | 390: 294×168 @48,4880 · font:Inter 24px/36px w400 ls-0.18px; color:rgb(250, 250, 253); align-text:center · Δ390{font:16px/24px} ‹copy: ~270 chars, 4 lines @1440›
            - `div.testimonial-bio` — 244.1×48 @598,2655 | 991: 244.1×48 @373,3484 | 390: 236.1×48 @77,5072 · display:flex; align:center; gap:16px
              - `img.testimonial-author-image` — 48×48 @598,2655 | 991: 48×48 @373,3484 | 390: 40×40 @77,5076 · maxw:100%; radius:5px; overflow:clip; fit:fill · IMG `/assets/pages/briefs/6478bf7a1f7099006baab519_allan-porter.webp` natural 500×500 loading=lazy
              - `div.testimonial-avatar-text` — 180.1×48 @662,2655 | 991: 180.1×48 @437,3484 | 390: 180.1×48 @133,5072
                - `div.text-label-m` — 180.1×24 @662,2655 | 991: 180.1×24 @437,3484 | 390: 180.1×24 @133,5072 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Allan Porter"
                - `div.text-body-m` — 180.1×24 @662,2679 | 991: 180.1×24 @437,3508 | 390: 180.1×24 @133,5096 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Founder @ Porter Media"
          - `img.testimonial-decoration.is-right` — 142.1×280.4 @1170,2422 | 991: 172.6×532 @841,3108 | 390: 117.6×464 @254,4736 · pos:absolute [260px 0px 260px 1041.92px]; maxw:100%; opacity:0.7; transform:matrix(1, 0, 0, 1, 0, -140.203); overflow:clip; fit:fill · Δ991{transform:matrix(1, 0, 0, 1, 0, -266)} · Δ390{transform:matrix(1, 0, 0, 1, 0, -232)} · IMG `/assets/pages/swipe-file/642db608b19bd600e001723a_awward-right.svg` natural 114×225 loading=lazy
          - `img.testimonial-decoration` — 142.1×280.4 @128,2422 | 991: 172.6×532 @-22,3108 | 390: 117.6×464 @19,4736 · pos:absolute [260px 1041.92px 260px 0px]; maxw:100%; opacity:0.7; transform:matrix(1, 0, 0, 1, 0, -140.203); overflow:clip; fit:fill · Δ991{transform:matrix(1, 0, 0, 1, 0, -266)} · Δ390{transform:matrix(1, 0, 0, 1, 0, -232)} · IMG `/assets/pages/swipe-file/642db6082db5f7803a7a121e_award-left.svg` natural 114×225 loading=lazy
  - `div.negative-spacing-bottom` — 1440×0 @0,2931 | 991: 991×0 @0,3736 | 390: 390×0 @0,5280 · mar:0px 0px -80px 0px

### S6. `div.section`

y/height: 1440 7576/564 · 991 7817/760 · 390 9006/704

- `div.section` — 1440×564 @0,0 | 991: 991×760 @0,0 | 390: 390×704 @0,0
  - `div.container.section-container` — 1344×564 @48,0 | 991: 991×760 @0,0 | 390: 390×704 @0,0 · pad:0px 40px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
    - `div.cta` — 1264×564 @88,0 | 991: 927×760 @32,0 | 390: 342×704 @24,0 · pad:80px 0px
      - `div.cta-block` — 1264×404 @88,80 | 991: 927×600 @32,80 | 390: 342×544 @24,80 · pos:relative; pad:84px; bg:rgb(2, 3, 8); radius:36px; shadow:rgb(23, 25, 32) 0px 0px 0px 1px; overflow:hidden · Δ991{pad:64px 64px 0px 64px} · Δ390{pad:32px 32px 0px 32px}
        - `div.cta-block-content` — 723.4×236 @172,164 | 991: 799×236 @96,144 | 390: 278×296 @56,112 · display:flex; dir:column; gap:32px; pos:relative; maxw:66%; z:1 · Δ991{maxw:none} · Δ390{maxw:none}
          - `div.flex-col-gap-2.align-start.text-balance` — 723.4×164 @172,164 | 991: 799×164 @96,144 | 390: 278×224 @56,112 · display:flex; dir:column; align:flex-start; gap:8px
            - `h2.text-display-h3.mobile-landscape-text-display-h4` — 429×44 @172,164 | 991: 429×44 @96,144 | 390: 278×72 @56,112 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(255, 255, 255); wrap-text:balance · Δ390{font:28px/36px; ls:-0.202222px} "Get a 7-Day free trial today"
            - `div.text-alpha-100` — 723.4×112 @172,216 | 991: 799×112 @96,196 | 390: 278×144 @56,192 · flex:1 1 0%
              - `p.text-body-l.mobile-landscape-text-body-n` — 723.4×112 @172,216 | 991: 799×112 @96,196 | 390: 278×144 @56,192 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); wrap-text:balance · Δ390{font:16px/24px; ls:-0.23111px} ‹copy: ~150 chars, 4 lines @1440›
          - `div.flex-col-gap-3` — 723.4×40 @172,360 | 991: 799×40 @96,340 | 390: 278×40 @56,368 · display:flex; dir:column; justify:center; align:flex-start; gap:12px
            - `a.button-dark.button-primary` — 159.3×40 @172,360 | 991: 159.3×40 @96,340 | 390: 159.3×40 @56,368 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; flex:1 1 0%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `https://app.foreplay.co/sign-up`
              - `div.button-text-block` — 123.3×24 @180,368 | 991: 123.3×24 @104,348 | 390: 123.3×24 @64,376 · pos:relative; pad:0px 6px; z:2
                - `div.text-heading-m` — 111.3×24 @186,368 | 991: 111.3×24 @110,348 | 390: 111.3×24 @70,376 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14) "Start Free Trial"
              - `div.button-icon-block.icon-right.opacity-100` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; z:2
                - `div.icon-medium` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · display:flex; justify:center; align:center
                  - `div.svg.w-embed` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · display:flex; justify:center; align:center
                    - `svg` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · overflow:hidden · SVG `/assets/pages/briefs/svg-svg-185ries.svg`
            - `div.no-cc-required` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: "No credit card required", svg bjw7ed
        - `div.cta-block-animation` — 880×880 @788,-122 | 991: hidden | 390: hidden · pos:absolute [-202px -316px 0px 700px]; blend:lighten; z:0 · Δ991{display:none; mar:-100px 0px; pos:relative} · Δ390{display:none; mar:-55% -115px -133px -100px; pos:relative}
          - `div.code-video.w-embed` — 880×880 @788,-122 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; pos:relative
            - `video` — 880×880 @788,-122 | 991: hidden | 390: hidden · overflow:clip; fit:contain · ASSET `/assets/pages/briefs/cta-briefs.mov` · VIDEO {"srcs":["cta-briefs.mov"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":1200,"vh":1200,"dur":3.366667,"preload":"metadata"}
        - `div.cta-block-icon` — 1096×0 @172,400 | 991: 799×300 @96,380 | 390: 278×192 @56,432 · Δ991{display:flex; dir:column; wrap:nowrap; justify:center; align:center; gap:normal} · Δ390{display:flex; dir:column; wrap:nowrap; justify:center; align:center; gap:normal; mar:24px 0px 0px 0px}
          - `img.cta-block-icon-image` — hidden | 991: 300×300 @346,380 | 390: 256×256 @67,432 · display:none; maxw:100%; overflow:clip; fit:fill · Δ991{display:block; maxw:none} · Δ390{display:block; mar:0px 0px -64px 0px; maxw:none} · IMG `/assets/682f93b44b8360f413644eb7_iso-briefs.webp` natural 0×0 loading=lazy alt "isometric briefs pen logo"

### S7. `div.section`

y/height: 1440 8140/894.8 · 991 8577/893 · 390 9710/937

- `div.container` — 1440×894.8 @0,0 | 991: 991×893 @0,0 | 390: 390×937 @0,0 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
  - `div.faq` — 1360×894.8 @40,0 | 991: 927×893 @32,0 | 390: 342×937 @24,0 · display:flex; dir:column; gap:48px; pad:140px 0px · Δ390{gap:40px; pad:64px 0px 80px 0px}
    - `div.section-head` — 720×149.8 @360,140 | 991: 720×148 @136,140 | 390: 342×192 @24,64 · display:flex; dir:column; align:center; gap:12px; mar:0px 320px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
      - `div.section-head-wrapper` — 512×149.8 @464,140 | 991: 512×148 @240,140 | 390: 342×192 @24,64 · display:flex; dir:column; align:center; gap:12px
        - `div.text-overline.text-white-68` — 29.5×16 @705,140 | 991: 29.5×16 @481,140 | 390: 29.5×16 @180,64 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "FAQ"
        - `h3.text-display-h2` — 470.5×53.8 @485,168 | 991: 427.7×52 @282,168 | 390: 342×96 @24,92 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Questions about Briefs?"
        - `div.section-head_paragraph` — 512×56 @464,233 | 991: 512×56 @240,232 | 390: 342×56 @24,200 · maxw:512px
          - `p.text-body-l` — 512×56 @464,233 | 991: 512×56 @240,232 | 390: 342×56 @24,200 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty "Most frequent questions about building ad briefs with Foreplay." (2 lines)
    - `div.faq-block-container` — 752×305 @344,337 | 991: 752×305 @120,336 | 390: 342×405 @24,296 · mar:0px 304px; maxw:752px · Δ991{mar:0px 87.5px} · Δ390{mar:0px} · data {"data-accordion-container":""}
      - `div.` — 752×305 @344,337 | 991: 752×305 @120,336 | 390: 342×405 @24,296
        - `div.faq-block` — 752×61 @344,337 | 991: 752×61 @120,336 | 390: 342×81 @24,296 · display:flex; justify:center; align:flex-start; gap:44px; pad:20px 0px 12px 0px; border:T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-accordion-item":"","data-expanded":"false"}
          - `div.faq-block_content` — 680×24 @344,357 | 991: 680×24 @120,356 | 390: 270×48 @24,316 · display:flex; dir:column; flex:1 1 0%
            - `div.faq-block_head` — 680×24 @344,357 | 991: 680×24 @120,356 | 390: 270×48 @24,316 · display:flex; align:center; gap:44px
              - `h4.text-label-l` — 476×24 @344,357 | 991: 476×24 @120,356 | 390: 270×48 @24,316 · font:Inter 18px/24px w500 ls-0.259999px; color:rgba(255, 255, 255, 0.68) · Δ390{font:16px/24px; ls:-0.23111px} ‹copy: ~58 chars, 1 lines @1440›
            - `div.faq-block_body` — 680×0 @344,381 | 991: 680×0 @120,380 | 390: 270×0 @24,364 · overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
              - `div.faq-block_answer` — 680×56 @344,381 | 991: 680×56 @120,380 | 390: 270×116 @24,364 · pad:8px 0px; overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
                - `p` — 680×40 @344,389 | 991: 680×40 @120,388 | 390: 270×100 @24,372 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) ‹copy: ~177 chars, 2 lines @1440›
          - `div.faq-block_icon` — 28×28 @1068,357 | 991: 28×28 @844,356 | 390: 28×28 @338,316 · display:flex; justify:center; align:center; transition:0.2s
            - `div.icon-medium` — 24×24 @1070,359 | 991: 24×24 @846,358 | 390: 24×24 @340,318 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @1070,359 | 991: 24×24 @846,358 | 390: 24×24 @340,318 · display:flex; justify:center; align:center
                - `svg` — 24×24 @1070,359 | 991: 24×24 @846,358 | 390: 24×24 @340,318 · overflow:hidden · SVG `/assets/pages/briefs/svg-svg-wqicrt.svg`
        - `div.faq-block` — 752×61 @344,398 | 991: 752×61 @120,397 | 390: 342×81 @24,377 · display:flex; justify:center; align:flex-start; gap:44px; pad:20px 0px 12px 0px; border:T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-accordion-item":"","data-expanded":"false"}
          - `div.faq-block_content` — 680×24 @344,418 | 991: 680×24 @120,417 | 390: 270×48 @24,397 · display:flex; dir:column; flex:1 1 0%
            - `div.faq-block_head` — 680×24 @344,418 | 991: 680×24 @120,417 | 390: 270×48 @24,397 · display:flex; align:center; gap:44px
              - `h4.text-label-l` — 403.1×24 @344,418 | 991: 403.1×24 @120,417 | 390: 270×48 @24,397 · font:Inter 18px/24px w500 ls-0.259999px; color:rgba(255, 255, 255, 0.68) · Δ390{font:16px/24px; ls:-0.23111px} "Where does this tool fit into the design process?"
            - `div.faq-block_body` — 680×0 @344,442 | 991: 680×0 @120,441 | 390: 270×0 @24,445 · overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
              - `div.faq-block_answer` — 680×76 @344,442 | 991: 680×76 @120,441 | 390: 270×196 @24,445 · pad:8px 0px; overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
                - `p` — 680×60 @344,450 | 991: 680×60 @120,449 | 390: 270×180 @24,453 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) ‹copy: ~314 chars, 3 lines @1440›
          - `div.faq-block_icon` — 28×28 @1068,418 | 991: 28×28 @844,417 | 390: 28×28 @338,397 · display:flex; justify:center; align:center; transition:0.2s
            - `div.icon-medium` — 24×24 @1070,420 | 991: 24×24 @846,419 | 390: 24×24 @340,399 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @1070,420 | 991: 24×24 @846,419 | 390: 24×24 @340,399 · display:flex; justify:center; align:center
                - `svg` — 24×24 @1070,420 | 991: 24×24 @846,419 | 390: 24×24 @340,399 · overflow:hidden · SVG `/assets/pages/briefs/svg-svg-wqicrt.svg`
        - …3 more `div.` siblings with the same structure (5 total):
          - [3] 752×61 @344,459 — ‹~73ch›, svg wqicrt, ‹~148ch›
          - [4] 752×61 @344,520 — "How can an advertising agency use the AI Brief Builder?", svg wqicrt, ‹~304ch›
          - [5] 752×61 @344,581 — "What makes an effective creative brief?", svg wqicrt, ‹~300ch›
    - `div.faq-buttons` — 1360×64 @40,690 | 991: 927×64 @32,689 | 390: 342×116 @24,741 · display:flex; justify:center; align:center; gap:12px; pad:12px 0px · Δ390{dir:column; align:stretch}
      - `a#intercomButton.button-dark.ghost-icon-button` — 177.4×40 @536,702 | 991: 177.4×40 @311,701 | 390: 342×40 @24,753 · display:flex; justify:center; align:center; gap:5px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `#`
        - `div.button-icon-block.icon-left` — 24×24 @544,710 | 991: 24×24 @319,709 | 390: 24×24 @114,761 · display:flex; justify:center; align:center; pos:relative; mar:0px -4px 0px 0px; opacity:0.68; z:2
          - `div.icon-medium` — 24×24 @544,710 | 991: 24×24 @319,709 | 390: 24×24 @114,761 · display:flex; justify:center; align:center
            - `div.svg.w-embed` — 20×20 @546,712 | 991: 20×20 @321,711 | 390: 20×20 @116,763 · display:flex; justify:center; align:center
              - `svg` — 20×20 @546,712 | 991: 20×20 @321,711 | 390: 20×20 @116,763 · overflow:hidden · SVG `/assets/pages/briefs/svg-svg-1i4rn0n.svg`
        - `div.button-text-block` — 136.4×24 @569,710 | 991: 136.4×24 @344,709 | 390: 136.4×24 @139,761 · pos:relative; pad:0px 6px; z:2
          - `div.text-heading-m` — 124.4×24 @575,710 | 991: 124.4×24 @350,709 | 390: 124.4×24 @145,761 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Contact support"
      - `a.button-dark.ghost-icon-button` — 179.1×40 @725,702 | 991: 179.1×40 @501,701 | 390: 342×40 @24,805 · display:flex; justify:center; align:center; gap:5px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `https://foreplay.featurebase.app/help` target=_blank
        - `div.button-icon-block.icon-left` — 24×24 @733,710 | 991: 24×24 @509,709 | 390: 24×24 @113,813 · display:flex; justify:center; align:center; pos:relative; mar:0px -4px 0px 0px; opacity:0.68; z:2
          - `div.icon-medium` — 24×24 @733,710 | 991: 24×24 @509,709 | 390: 24×24 @113,813 · display:flex; justify:center; align:center
            - `div.svg.w-embed` — 24×24 @733,710 | 991: 24×24 @509,709 | 390: 24×24 @113,813 · display:flex; justify:center; align:center
              - `svg` — 24×24 @733,710 | 991: 24×24 @509,709 | 390: 24×24 @113,813 · overflow:hidden · SVG `/assets/pages/briefs/svg-svg-1lrvzzc.svg`
        - `div.button-text-block` — 138.1×24 @758,710 | 991: 138.1×24 @534,709 | 390: 138.1×24 @138,813 · pos:relative; pad:0px 6px; z:2
          - `div.text-heading-m` — 126.1×24 @764,710 | 991: 126.1×24 @540,709 | 390: 126.1×24 @144,813 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Knowledge Base"

### S8. `div.section.overflow-hidden`

y/height: 1440 9034/1037.5 · 991 9470/801.8 · 390 10647/643.3

- `div.section.overflow-hidden` — 1440×1037.5 @0,0 | 991: 991×801.8 @0,0 | 390: 390×643.3 @0,0 · overflow:hidden
  - `div.container.section-container` — 1344×1037.5 @48,0 | 991: 991×801.8 @0,0 | 390: 390×643.3 @0,0 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
    - `div.home-cta` — 1264×1037.5 @88,0 | 991: 927×801.8 @32,0 | 390: 342×643.3 @24,0 · **identical to the homepage block → uses `CTA.jsx` from src/components (not re-specced; no assets downloaded)**

## Typography roles (computed at 1440; sizes at 991/390 from the same nodes)

| font (family size/lh weight ls) | color | n | @991 | @390 | elements (sample) | example |
|---|---|---|---|---|---|---|
| Inter 16px/24px w500 ls-0.18px | rgb(255, 255, 255) | 21 | 16px/24px | 16px/24px | `h3.text-label-m` `div.text-label-m` | Iterate with Velocity |
| Inter 16px/24px w400 ls-0.18px | rgba(255, 255, 255, 0.68) | 19 | 16px/24px | 16px/24px | `div` `p.text-body-m` `div.text-body-m` | Turn inspiration into actionable briefs  |
| Inter 18px/28px w400 ls-0.259999px | rgba(255, 255, 255, 0.68) | 6 | 18px/28px | 18px/28px, 16px/24px | `p.text-body-l.text-white-84` `p.text-body-l` `p.text-body-l.mobile-landscape-text-body-n` | ~145 chars |
| Inter 12px/16px w550 ls2px uppercase | rgba(255, 255, 255, 0.36) | 5 | 12px/16px | 12px/16px | `h1.text-overline.text-white-68` `div.text-overline.text-white-68` | BRIEFS |
| Inter 18px/24px w500 ls-0.259999px | rgba(255, 255, 255, 0.68) | 5 | 18px/24px | 16px/24px | `h4.text-label-l` | ~58 chars |
| Inter 14px/20px w400 ls-0.09px | rgba(255, 255, 255, 0.68) | 5 | 14px/20px | 14px/20px | `p` | ~177 chars |
| Inter Display 44px/53.76px w600 ls-0.33px | rgb(255, 255, 255) | 4 | 40px/52px | 36px/48px | `h2.text-display-h2` `h3.text-display-h2` | Scale creative output with AI |
| Inter 16px/24px w550 ls-0.18px | rgb(9, 10, 14) | 2 | 16px/24px | 16px/24px | `div.text-heading-m` | Start free trial |
| Inter 24px/36px w400 ls-0.18px | rgb(250, 250, 253) | 2 | 24px/36px | 16px/24px | `div.text-quote` | ~289 chars |
| Inter 16px/24px w550 ls-0.18px | rgb(255, 255, 255) | 2 | 16px/24px | 16px/24px | `div.text-heading-m` | Contact support |
| Inter Display 60px/68px w600 ls-0.45px | rgba(255, 255, 255, 0.88) | 1 | 60px/68px | 38px/48px | `h2.text-display-h1.hero-title` | Ad Briefs & Storyboards for Marketers |
| Inter Display 36px/44px w600 ls-0.26px | rgb(23, 25, 32) | 1 | 36px/44px | 36px/44px | `h2.text-display-h3` | Why do you need a creative brief? |
| Inter 16px/24px w400 ls-0.18px | rgb(36, 38, 46) | 1 | 16px/24px | 16px/24px | `p.text-body-m` | ~149 chars |
| Inter 18px/24px w500 ls-0.259999px | rgb(9, 10, 14) | 1 | 18px/24px | 16px/24px | `div.text-label-l` | Before ... |
| Inter 16px/24px w400 ls-0.18px | rgb(52, 54, 66) | 1 | 16px/24px | 16px/24px | `div` | Endless docs, confusing deliverables and |
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
- `url(62a4ed18ddad95dde8b8bfa4/68338ad5ea21a80a4e3fe221_product-video-briefs-poster-00001.jpg)` — `video#39269912-7d80-76ae-34a4-36e7b7f26907-video`
- `linear-gradient(0deg, rgb(2, 3, 8) 75%, rgba(2, 3, 8, 0))` — `div.product-hero-preview-underlay`

**border**
- `1px solid rgb(23, 25, 32)` — `div#w-node-ec27c2ea-a589-d406-a770-931c9a355204-f7a7651f.product-page-feature-block-new`, `div#w-node-ec27c2ea-a589-d406-a770-931c9a35520e-f7a7651f.product-page-feature-block-new`, `div#w-node-ec27c2ea-a589-d406-a770-931c9a355218-f7a7651f.product-page-feature-block-new`, `div#w-node-ec27c2ea-a589-d406-a770-931c9a355222-f7a7651f.product-page-feature-block-new`, `div#w-node-ec27c2ea-a589-d406-a770-931c9a35522c-f7a7651f.product-page-feature-block-new` (+7)
- `T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0` — `div.faq-block`

**radius**
- `10px` — `a.button-dark.button-primary`, `a#intercomButton.button-dark.ghost-icon-button`, `a.button-dark.ghost-icon-button`
- `36px` — `div.section-white-block`, `div.cta-block`
- `20px` — `div.static-product-page-solution-card`, `div.static-product-page-solution-card.solution-after`, `div#w-node-ec27c2ea-a589-d406-a770-931c9a355204-f7a7651f.product-page-feature-block-new`, `div#w-node-ec27c2ea-a589-d406-a770-931c9a35520e-f7a7651f.product-page-feature-block-new`, `div#w-node-ec27c2ea-a589-d406-a770-931c9a355218-f7a7651f.product-page-feature-block-new` (+9)
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
- `background-color 0.2s` — `div#w-node-ec27c2ea-a589-d406-a770-931c9a355204-f7a7651f.product-page-feature-block-new`, `div#w-node-ec27c2ea-a589-d406-a770-931c9a35520e-f7a7651f.product-page-feature-block-new`, `div#w-node-ec27c2ea-a589-d406-a770-931c9a355218-f7a7651f.product-page-feature-block-new`, `div#w-node-ec27c2ea-a589-d406-a770-931c9a355222-f7a7651f.product-page-feature-block-new`, `div#w-node-ec27c2ea-a589-d406-a770-931c9a35522c-f7a7651f.product-page-feature-block-new` (+7)
- `0.9s cubic-bezier(0.19, 1, 0.22, 1)` — `div.faq-block`, `div.faq-block_body`, `div.faq-block_answer`

## Assets (local path ↔ element)

| local file | kind | element | natural | displayed @1440 | source URL |
|---|---|---|---|---|---|
| `/assets/pages/swipe-file/68331d86cf0a6a7db433a56d_dot-grid.webp` | bg | `dot-bg` (s0.0) |  | 1440×1404 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68331d86cf0a6a7db433a56d_dot-grid.webp |
| `/assets/pages/briefs/animated-icon-briefs.webm` | video | `` (s0.1.0.1.0.0.0.0) | 2000×2000 4.00s | 256×256 | https://publicassets.foreplay.co/animated-icon-briefs.webm |
| `/assets/pages/briefs/animated-icon-briefs.mov` | video | `` (s0.1.0.1.0.0.0.0) | 2000×2000 4.00s | 256×256 | https://publicassets.foreplay.co/animated-icon-briefs.mov |
| `/assets/pages/briefs/682f9f72dc306ab5bf957aea_pi-briefs-hq.webp` | img | `product-hero-icon-image` (s0.1.0.1.0.1) | 0×0 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f72dc306ab5bf957aea_pi-briefs-hq.webp |
| `/assets/pages/briefs/!Briefs-2025_high.webm` | video | `` (s0.1.0.2.0.0) | 2800×1460 13.29s | 1094.9×541.9 | https://publicassets.foreplay.co/!Briefs-2025_high.webm |
| `/assets/pages/swipe-file/6820c07c2e5b8c350c8e1f4c_hero-empty-mockup.webp` | img | `product-hero-preview-image` (s0.1.0.2.1) | 1440×900 | 1360×850 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6820c07c2e5b8c350c8e1f4c_hero-empty-mockup.webp |
| `/assets/pages/briefs/68338ad5ea21a80a4e3fe221_product-video-briefs-transcode.mp4` | bgvideo | `product-hero-video.w-background-video.w-background-video-atom` (s0.1.0.2.2) |  | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338ad5ea21a80a4e3fe221_product-video-briefs-transcode.mp4 |
| `/assets/pages/briefs/68338ad5ea21a80a4e3fe221_product-video-briefs-transcode.webm` | bgvideo | `product-hero-video.w-background-video.w-background-video-atom` (s0.1.0.2.2) |  | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338ad5ea21a80a4e3fe221_product-video-briefs-transcode.webm |
| `/assets/pages/briefs/68338ad5ea21a80a4e3fe221_product-video-briefs-poster-00001.jpg` | poster | `product-hero-video.w-background-video.w-background-video-atom` (s0.1.0.2.2) |  |  | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338ad5ea21a80a4e3fe221_product-video-briefs-poster-00001.jpg |
| `/assets/pages/briefs/68338ad5ea21a80a4e3fe221_product-video-briefs-poster-00001.jpg` | bg | `` (s0.1.0.2.2.0) |  | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338ad5ea21a80a4e3fe221_product-video-briefs-poster-00001.jpg |
| `/assets/pages/briefs/68338ad5ea21a80a4e3fe221_product-video-briefs-transcode.mp4` | video | `` (s0.1.0.2.2.0) | 1280×668 13.30s | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338ad5ea21a80a4e3fe221_product-video-briefs-transcode.mp4 |
| `/assets/pages/briefs/68338ad5ea21a80a4e3fe221_product-video-briefs-transcode.webm` | video | `` (s0.1.0.2.2.0) | 1280×668 13.30s | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338ad5ea21a80a4e3fe221_product-video-briefs-transcode.webm |
| `/assets/pages/briefs/682dfe3aacd1e2e93f141aee_before-briefs.webp` | img | `static-product-page-image` (s1.0.0.0.0.2.0.1.0) | 1392×1128 | 462×374.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682dfe3aacd1e2e93f141aee_before-briefs.webp |
| `/assets/pages/briefs/682e02bb5956e6397077a270_after-briefs.webp` | img | `static-product-page-image` (s1.0.0.0.0.2.1.1) | 1392×1128 | 462×374.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682e02bb5956e6397077a270_after-briefs.webp |
| `/assets/pages/briefs/6453d07eaf4c84835bc3640a_itterate-velocity.webp` | img | `product-carousel-image` (s2.0.0.1.0.0.0.0.0.0) | 594×269 | 561.6×254.8 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6453d07eaf4c84835bc3640a_itterate-velocity.webp |
| `/assets/pages/briefs/6474cb2a6d47ed343b8907bf_multiple-brands-2.webp` | img | `product-carousel-image` (s2.0.0.1.0.0.0.1.0.0) | 594×270 | 561.6×255.5 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6474cb2a6d47ed343b8907bf_multiple-brands-2.webp |
| `/assets/pages/briefs/6474cb43476077e17c97ca8b_brief-deadline.webp` | img | `product-carousel-image` (s2.0.0.1.0.0.0.2.0.0) | 594×270 | 561.6×255.5 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6474cb43476077e17c97ca8b_brief-deadline.webp |
| `/assets/pages/briefs/6453d07e922f8a155fff9eba_dynamic-deliverables.webp` | img | `` (s2.0.0.1.0.0.0.3.0.0) | 594×269 | 561.6×254.8 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6453d07e922f8a155fff9eba_dynamic-deliverables.webp |
| `/assets/pages/briefs/6474f34d127523e5b91bfc1b_Briefs-Tab-1.webp` | img | `product-page-tabs-image` (s3.0.0.1.0.1.0.0.0) | 1440×810 | 1264×711 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6474f34d127523e5b91bfc1b_Briefs-Tab-1.webp |
| `/assets/pages/briefs/6474f88aad7627eb6a9ef3f2_Briefs-Tab-2.webp` | img | `product-page-tabs-image` (s3.0.0.1.0.1.1.0.0) | 1440×810 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6474f88aad7627eb6a9ef3f2_Briefs-Tab-2.webp |
| `/assets/pages/briefs/6474f8d4c237281dc975773a_Briefs-Tab-3-2.webp` | img | `product-page-tabs-image` (s3.0.0.1.0.1.2.0.0) | 1440×810 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6474f8d4c237281dc975773a_Briefs-Tab-3-2.webp |
| `/assets/pages/briefs/645405e3a1cdeeb67fce56d3_attach-inspo.webp` | img | `product-page-feature-image` (s4.0.0.1.0.0.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/645405e3a1cdeeb67fce56d3_attach-inspo.webp |
| `/assets/pages/briefs/6474dfaa2e9a4a5888f31dcd_brand-guidelines.webp` | img | `product-page-feature-image` (s4.0.0.1.0.1.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6474dfaa2e9a4a5888f31dcd_brand-guidelines.webp |
| `/assets/pages/briefs/645405e3fbeb9258c2385d11_modular-editor.webp` | img | `product-page-feature-image` (s4.0.0.1.0.2.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/645405e3fbeb9258c2385d11_modular-editor.webp |
| `/assets/pages/briefs/645405e354900dd97b639df3_export-brief.webp` | img | `product-page-feature-image` (s4.0.0.1.0.3.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/645405e354900dd97b639df3_export-brief.webp |
| `/assets/pages/briefs/645405e32a498148618e56fa_brief-template.webp` | img | `product-page-feature-image` (s4.0.0.1.0.4.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/645405e32a498148618e56fa_brief-template.webp |
| `/assets/pages/briefs/645405e3a367f05e79030230_brief-share.webp` | img | `product-page-feature-image` (s4.0.0.1.0.5.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/645405e3a367f05e79030230_brief-share.webp |
| `/assets/pages/briefs/6478c6a9d904f44339a39b5f_63cd2aa75c56b2db086ad38b_LOGO BLUE-p-500.webp` | img | `testimonial-logo-image` (s4.0.0.2.0.0.0.0) | 500×167 | 120×40 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6478c6a9d904f44339a39b5f_63cd2aa75c56b2db086ad38b_LOGO%20BLUE-p-500.webp |
| `/assets/pages/briefs/6478c6e1810c46a199122313_Dv92wDm3_400x400.webp` | img | `testimonial-author-image` (s4.0.0.2.0.0.0.2.0) | 400×400 | 48×48 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6478c6e1810c46a199122313_Dv92wDm3_400x400.webp |
| `/assets/pages/swipe-file/642db608b19bd600e001723a_awward-right.svg` | img | `testimonial-decoration.is-right` (s4.0.0.2.0.0.1) | 114×225 | 142.1×280.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/642db608b19bd600e001723a_awward-right.svg |
| `/assets/pages/swipe-file/642db6082db5f7803a7a121e_award-left.svg` | img | `testimonial-decoration` (s4.0.0.2.0.0.2) | 114×225 | 142.1×280.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/642db6082db5f7803a7a121e_award-left.svg |
| `/assets/pages/briefs/64541ad7101e24294205eba5_new-hooks.webp` | img | `product-page-feature-image` (s4.0.0.3.0.0.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64541ad7101e24294205eba5_new-hooks.webp |
| `/assets/pages/briefs/64541acd4d56e7cdfc6abaa7_scene-description.webp` | img | `product-page-feature-image` (s4.0.0.3.0.1.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64541acd4d56e7cdfc6abaa7_scene-description.webp |
| `/assets/pages/briefs/64541ade63d9544d60a6e5f3_text-overlay.webp` | img | `product-page-feature-image` (s4.0.0.3.0.2.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64541ade63d9544d60a6e5f3_text-overlay.webp |
| `/assets/pages/briefs/645420f1ac10bfbbe22cff0f_upload assets-4.webp` | img | `product-page-feature-image` (s4.0.0.3.0.3.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/645420f1ac10bfbbe22cff0f_upload%20assets-4.webp |
| `/assets/pages/briefs/645420809ed898e0a2e34a9e_multi-language-2.webp` | img | `product-page-feature-image` (s4.0.0.3.0.4.0) | 599×299 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/645420809ed898e0a2e34a9e_multi-language-2.webp |
| `/assets/pages/briefs/6474dfaa93a6291dbec99294_upload assets-4.webp` | img | `product-page-feature-image` (s4.0.0.3.0.5.0) | 600×300 | 403.3×201.7 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6474dfaa93a6291dbec99294_upload%20assets-4.webp |
| `/assets/pages/briefs/6478bf6f2eb8f9e5dd1563d4_Group 48348.webp` | img | `testimonial-logo-image` (s4.0.0.4.0.0.0.0) | 70×18 | 120×40 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6478bf6f2eb8f9e5dd1563d4_Group%2048348.webp |
| `/assets/pages/briefs/6478bf7a1f7099006baab519_allan-porter.webp` | img | `testimonial-author-image` (s4.0.0.4.0.0.0.2.0) | 500×500 | 48×48 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6478bf7a1f7099006baab519_allan-porter.webp |
| `/assets/pages/briefs/cta-briefs.mov` | video | `` (s5.0.0.0.1.0.0) | 1200×1200 3.37s | 880×880 | https://publicassets.foreplay.co/cta-briefs.mov |
| `/assets/682f93b44b8360f413644eb7_iso-briefs.webp` | img | `cta-block-icon-image` (s5.0.0.0.2.0) | 0×0 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f93b44b8360f413644eb7_iso-briefs.webp |

**Inline SVGs saved** (each distinct inline `<svg>` in page content):

- `/assets/pages/briefs/svg-svg-185ries.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/briefs/svg-carousel-icon-b7rq1z.svg` — 18×18 in `carousel-icon.w-embed`
- `/assets/pages/briefs/svg-carousel-icon-3j2fr4.svg` — 18×18 in `carousel-icon.w-embed`
- `/assets/pages/briefs/svg-product-page-tab-svg-1w2n5lq.svg` — 24×24 in `product-page-tab-svg.w-embed`
- `/assets/pages/briefs/svg-product-page-tab-svg-bzt1wt.svg` — 24×24 in `product-page-tab-svg.w-embed`
- `/assets/pages/briefs/svg-product-page-tab-svg-kn8jdt.svg` — 24×24 in `product-page-tab-svg.w-embed`
- `/assets/pages/briefs/svg-svg-bjw7ed.svg` — 0×0 in `svg.w-embed`
- `/assets/pages/briefs/svg-svg-wqicrt.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/briefs/svg-svg-1i4rn0n.svg` — 20×20 in `svg.w-embed`
- `/assets/pages/briefs/svg-svg-1lrvzzc.svg` — 24×24 in `svg.w-embed`

## Motion

### Webflow IX2 (from `Webflow.require("ix2").store.getState().ixData`, filtered to elements on this page outside nav/footer)

- **e-208** SCROLLING_IN_VIEW → GENERAL_CONTINUOUS_ACTION list `a-71` (Product / Hero Parallax) on `product-hero-animation-trigger` ×1; mq ["main","medium"]; config [{"continuousParameterGroupId":"a-71-p","smoothing":0,"startsEntering":false,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}]

- `a-71` "Product / Hero Parallax"
  - continuous SCROLL_PROGRESS:
    - @0%: TRANSFORM_SCALE .product-hero-sticky {"xValue":1,"yValue":1,"locked":true} ‖ TRANSFORM_MOVE .product-hero-sticky {"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"} ‖ STYLE_OPACITY .product-hero-sticky {"value":1,"unit":""}
    - @100%: TRANSFORM_MOVE .product-hero-sticky {"yValue":-33,"xUnit":"PX","yUnit":"%","zUnit":"PX"} ease inOutCubic ‖ TRANSFORM_SCALE .product-hero-sticky {"xValue":0.75,"yValue":0.75,"locked":true} ‖ STYLE_OPACITY .product-hero-sticky {"value":0,"unit":""}

### Running Web Animations after load (`document.getAnimations()`, page content only)

- none

### Widgets / embeds detected

- s0.1.0.1.0.0.0 `div.code-video.w-embed` 
- s0.1.0.2.0 `div.product-hero-video.w-embed` 
- s0.1.0.2.2 `div.product-hero-video.w-background-video.w-background-video-atom` {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338ad5ea21a80a4e3fe221_product-video-briefs-poster-00001.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
- s1.0.0.0.0.1 `div.code-style.w-embed` 
- s3.0.0.1.0 `div.product-page-tabs.w-tabs` {"data-current":"AI Ad Scripts","data-easing":"ease","data-duration-in":"300","data-duration-out":"100"}
- s3.0.0.1.0.0.0 `a.product-page-tab.w-inline-block.w-tab-link.w--current` {"data-w-tab":"AI Ad Scripts"}
- s3.0.0.1.0.0.1 `a.product-page-tab.w-inline-block.w-tab-link` {"data-w-tab":"Storyboard Generation"}
- s3.0.0.1.0.0.2 `a.product-page-tab.w-inline-block.w-tab-link` {"data-w-tab":"AI Storyboard"}
- s3.0.0.1.0.1.0 `div.w-tab-pane.w--tab-active` {"data-w-tab":"AI Ad Scripts"}
- s3.0.0.1.0.1.1 `div.w-tab-pane` {"data-w-tab":"Storyboard Generation"}
- s3.0.0.1.0.1.2 `div.w-tab-pane` {"data-w-tab":"AI Storyboard"}
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
