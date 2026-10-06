Source: https://www.foreplay.co/spyder-ad-spy

# /spyder-ad-spy: Spyder Ad Spy - Creative-First Meta Competitor Tracking

Measured on 2026-10-06 with headless Chromium (Playwright 1.63) at 1440×900, 991×900 and 390×844, after a full scroll pass. The Navbar and Footer have the same DOM as the homepage, so reuse `Navbar.jsx` and `Footer.jsx` (CLONE_SPEC.md §1 and §8). Tokens, buttons and type classes are in CLONE_SPEC.md §0; anything shared between these pages is in `specs/_shared-pages.md`. **Copy policy:** short UI strings are verbatim, and long copy is given only as ‹copy: ~N chars, L lines @1440›. Assets are local paths under `public/` (`/assets/...`). Files that already existed in `public/assets` were reused rather than re-downloaded, which is why some paths point at other page folders or at the root. Blocks that are identical to the homepage (the final CTA `.home-cta`, the Chrome-extension card `.home-extension`, and the logo strip `.home-hero-bottom`) are collapsed to a single line, "uses <Component> from src/components". Their internals are not re-specced and their assets were not re-downloaded.

## Build notes (summary)

- **Template:** this page is a product-template variant. S1 hero ("SPYDER META AD SPY" / "Competitor Ad Tracking & Insights on Autopilot"), S2 solution block. **S3 is different:** instead of a carousel it uses a 3-card `.lens-security-grid` (cards 420.7 wide, each with an icon, title and illustration). **S4 tabs have 5 items** (`.product-page-tabs-menu.spyder`, each tab 238.4×76 with the icon stacked above the label) and a 1264×790.8 `img.spyder-ui`; there is no Chrome-extension card. S5 feature grid: 6 `.spyder-block` cards whose media are **Lottie animations** (403.3×180) instead of images, followed by one testimonial. S6 CTA (`cta-spyder.mov`), S7 FAQ (6 items), S8 home CTA.
- **Reuse:** template blocks plus `TabSpyder*` icons (only 3 exist in `svgs.jsx`; the 5 tab SVGs used here are saved in this folder).
- **Motion:**
  - IX2 a-71 hero parallax.
  - IX2 **e-225/e-226 on each `.spyder-block` card (all breakpoints).** On MOUSE_OVER, a-76 "Spyder Lottie In" plays the card's `.spyder-feature-lottie` from 0→100% over **4000ms, easeInOut**, and the initial state is set to frame 0. On MOUSE_OUT, a-77 "Spyder Lottie Out" scrubs back to 0 over **4000ms, ease**. The Lottie elements have autoplay off. The JSON files are in the asset table (6 files).
  - Webflow tab fade, FAQ accordion, card `background-color .2s` hover.
- **Embeds:** none. Lottie needs `lottie-web` (or a React wrapper) driven by progress, not autoplay.

## Page meta (measured)

- Webflow page id `65e0c28c33b4fcd56fefac74`. Title: `Spyder Ad Spy - Creative-First Meta Competitor Tracking`.
- Meta description: ~158 chars (not transcribed).
- Document height: 1440 → 9614, 991 → 10562, 390 → 11683. Body bg rgb(2, 3, 8).
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
      - `div.product-hero-animation-trigger` — 1440×900 @0,-72 | 991: 991×900 @0,-72 | 390: 390×844 @0,-72 · pos:absolute [-72px 0px 548px 0px]; pe:none · ix2 w-id a4db27c9-97fc-6531-53bb-b04f236e6e9c
      - `div.product-hero-sticky` — 900×512 @270,28 | 991: 900×512 @46,28 | 390: 342×524 @24,24 · display:flex; dir:column; align:center; pos:sticky [100px auto auto auto]; transform:matrix(1, 0, 0, 1, 0, 0) · Δ390{pos:relative; transform:none}
        - `div.product-hero-icon` — 256×256 @592,-12 | 991: 192×192 @400,28 | 390: 156×156 @117,24 · mar:-40px 0px -24px 0px · Δ991{pad:32px; mar:0px} · Δ390{pad:24px; mar:0px}
          - `div.code-video.w-embed` — 256×256 @592,-12 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; pos:relative
            - `video` — 256×256 @592,-12 | 991: hidden | 390: hidden · overflow:clip; fit:contain · ASSET `/assets/pages/spyder-ad-spy/animated-icon-spyder.webm`, `/assets/pages/spyder-ad-spy/animated-icon-spyder.mov` · VIDEO {"srcs":["animated-icon-spyder.webm","animated-icon-spyder.mov"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":2000,"vh":2000,"dur":4,"preload":"metadata"}
          - `img.product-hero-icon-image` — hidden | 991: 128×128 @432,60 | 390: 108×108 @141,48 · display:none; maxw:100%; overflow:clip; fit:fill; aspect:auto 128 / 128 · Δ991{display:block} · Δ390{display:block} · IMG `/assets/pages/spyder-ad-spy/682f9f72ef4d27826a8d2aa0_pi-spyder-hq.webp` natural 0×0 loading=lazy alt "spyder ad spy app icon"
        - `div.product-hero-content` — 900×320 @270,220 | 991: 900×320 @46,220 | 390: 342×368 @24,180 · display:flex; dir:column; align:center; gap:28px · Δ390{gap:24px; pad:0px 0px 24px 0px; pos:relative}
          - `h1.text-overline` — 167.8×16 @636,220 | 991: 167.8×16 @412,220 | 390: 167.8×16 @111,180 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "SPYDER META AD SPY"
          - `div.hero-text` — 900×208 @270,264 | 991: 900×208 @46,264 | 390: 342×240 @24,220 · display:flex; dir:column; align:center; gap:16px; maxw:900px · Δ390{gap:12px}
            - `h2.text-display-h1.hero-title` — 900×136 @270,264 | 991: 900×136 @46,264 | 390: 342×144 @24,220 · bgimg:radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88)); bgsize:auto; bgpos:0% 0%; bgclip:text; font:Inter Display 60px/68px w600 ls-0.45px; color:rgba(255, 255, 255, 0.88); align-text:center; wrap-text:balance; fill:rgba(0, 0, 0, 0) · Δ390{font:38px/48px; ls:-0.285px} "Competitor Ad Tracking & Insights on Autopilot" (2 lines)
            - `div.max-w-lg` — 512×56 @464,416 | 991: 512×56 @240,416 | 390: 342×84 @24,376 · maxw:512px
              - `p.text-body-l.text-white-84` — 512×56 @464,416 | 991: 512×56 @240,416 | 390: 342×84 @24,376 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center ‹copy: ~105 chars, 2 lines @1440›
          - `a.button-dark.button-primary` — 152.6×40 @644,500 | 991: 152.6×40 @419,500 | 390: 152.6×40 @119,484 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; flex:1 1 0%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `#`
            - `div.button-text-block` — 116.6×24 @652,508 | 991: 116.6×24 @427,508 | 390: 116.6×24 @127,492 · pos:relative; pad:0px 6px; z:2
              - `div.text-heading-m` — 104.6×24 @658,508 | 991: 104.6×24 @433,508 | 390: 104.6×24 @133,492 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14); align-text:center "Start free trial"
            - `div.button-icon-block.icon-right.opacity-100` — 24×24 @764,508 | 991: 24×24 @540,508 | 390: 24×24 @239,492 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; z:2
              - `div.icon-medium` — 24×24 @764,508 | 991: 24×24 @540,508 | 390: 24×24 @239,492 · display:flex; justify:center; align:center
                - `div.svg.w-embed` — 24×24 @764,508 | 991: 24×24 @540,508 | 390: 24×24 @239,492 · display:flex; justify:center; align:center
                  - `svg` — 24×24 @764,508 | 991: 24×24 @540,508 | 390: 24×24 @239,492 · overflow:hidden · SVG `/assets/pages/spyder-ad-spy/svg-svg-185ries.svg`
      - `div.product-hero-preview` — 1360×850 @40,574 | 991: 927×579.4 @32,574 | 390: 342×213.8 @24,588 · display:flex; dir:column; align:center; pos:relative; mar:52px 0px -48px 0px; aself:stretch; aspect:16 / 10 · Δ390{mar:40px 0px -48px 0px}
        - `img.product-hero-preview-image` — 1360×850 @40,574 | 991: 927×579.4 @32,574 | 390: 342×213.8 @24,588 · pos:relative; maxw:100%; overflow:clip; z:2; fit:fill; aspect:16 / 10; pe:none · IMG `/assets/pages/swipe-file/6820c07c2e5b8c350c8e1f4c_hero-empty-mockup.webp` natural 1440×900 loading=lazy alt "apple pro xdr monnitor mockup"
        - `div.product-hero-preview-underlay` — 1440×952 @0,472 | 991: 991×648.9 @0,504 | 390: hidden · pos:absolute [-102px -40px 0px -40px]; bgimg:linear-gradient(0deg, rgb(2, 3, 8) 75%, rgba(2, 3, 8, 0)); bgsize:auto; bgpos:0% 0%; pe:none · Δ390{display:none}
        - `div.product-hero-video.w-background-video` — 1094.9×541.9 @171,644 | 991: 740.1×366.5 @123,622 | 390: 268.6×136.3 @60,604 · display:flex; justify:center; align:center; pos:absolute [56.0938px 152.328px 242.203px 149.594px]; bg:rgb(2, 3, 8); transform:matrix3d(1, 0, 0, 0, 0, 0.992546, 0.121869, 0, 0, -0.121869, 0.992546, 0, 0, 0, 0, 1); overflow:hidden; z:1; aspect:1400 / 730 · Δ991{transform:matrix3d(1, 0, 0, 0, 0, 0.987688, 0.156434, 0, 0, -0.156434, 0.987688, 0, 0, 0, 0, 1)} · Δ390{transform:matrix3d(1, 0, 0, 0, 0, 0.987688, 0.156434, 0, 0, -0.156434, 0.987688, 0, 0, 0, 0, 1)} · ASSET `/assets/pages/spyder-ad-spy/68338b3e839a771394bbc430_product-video-spyder-transcode.mp4`, `/assets/pages/spyder-ad-spy/68338b3e839a771394bbc430_product-video-spyder-transcode.webm`, `/assets/pages/spyder-ad-spy/68338b3e839a771394bbc430_product-video-spyder-poster-00001.jpg` · data {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338b3e839a771394bbc430_product-video-spyder-poster-00001.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
          - `video#23c0f4a3-6291-df92-e879-e6241b2c98d5-video` — 1094.9×541.9 @171,644 | 991: 740.1×366.5 @123,622 | 390: 268.6×136.3 @60,604 · pos:absolute [-551.703px -1058.08px -551.703px -1058.08px]; mar:551.703px 1058.08px; bgimg:url(62a4ed18ddad95dde8b8bfa4/68338b3e839a771394bbc430_product-video-spyder-poster-00001.jpg); bgsize:cover; bgpos:50% 50%; overflow:clip; z:-100; fit:cover · Δ991{mar:374.594px 718.422px} · Δ390{mar:138.547px 265.719px} · ASSET `/assets/pages/spyder-ad-spy/68338b3e839a771394bbc430_product-video-spyder-poster-00001.jpg`, `/assets/pages/spyder-ad-spy/68338b3e839a771394bbc430_product-video-spyder-transcode.mp4`, `/assets/pages/spyder-ad-spy/68338b3e839a771394bbc430_product-video-spyder-transcode.webm` · VIDEO {"srcs":["62a4ed18ddad95dde8b8bfa4/68338b3e839a771394bbc430_product-video-spyder-transcode.mp4","62a4ed18ddad95dde8b8bfa4/68338b3e839a771394bbc430_product-video-spyder-transcode.webm"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":1280,"vh":668,"dur":11.4,"preload":"metadata"} · data {"data-wf-ignore":"true","data-object-fit":"cover"}

### S2. `section.section`

y/height: 1440 1448/782.4 · 991 1177/770.6 · 390 850/1120.3

- `div.section-padding` — 1440×782.4 @0,0 | 991: 991×770.6 @0,0 | 390: 390×1120.3 @0,0 · pad:8px
  - `div.section-white-block` — 1424×766.4 @8,8 | 991: 975×754.6 @8,8 | 390: 374×1104.3 @8,8 · pos:relative; bg:rgb(255, 255, 255); radius:36px; overflow:hidden; z:2 · Δ390{radius:16px}
    - `div.container.section-container` — 1344×766.4 @48,8 | 991: 975×754.6 @8,8 | 390: 374×1104.3 @8,8 · pad:0px 40px; mar:0px 40px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
      - `div.product-page-solution` — 940×766.4 @250,8 | 991: 911×754.6 @40,8 | 390: 326×1104.3 @32,8 · display:flex; dir:column; gap:36px; pad:80px 0px; mar:0px 162px; maxw:940px · Δ991{mar:0px} · Δ390{gap:32px; pad:48px 0px 32px 0px; mar:0px; maxw:480px}
        - `div.section-head` — 720×104 @360,88 | 991: 720×104 @136,88 | 390: 326×216 @32,56 · display:flex; dir:column; align:center; gap:12px; mar:0px 110px; maxw:720px · Δ991{mar:0px 95.5px} · Δ390{mar:0px}
          - `div.section-head-wrapper` — 598×104 @421,88 | 991: 598×104 @197,88 | 390: 326×216 @32,56 · display:flex; dir:column; align:center; gap:12px
            - `h2.text-display-h3` — 598×44 @421,88 | 991: 598×44 @197,88 | 390: 326×132 @32,56 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(23, 25, 32); align-text:center; wrap-text:balance "Why choose creative-first ad spying?"
            - `div.section-head_paragraph` — 512×48 @464,144 | 991: 512×48 @239,144 | 390: 326×72 @32,200 · maxw:512px
              - `p.text-body-m` — 512×48 @464,144 | 991: 512×48 @239,144 | 390: 326×72 @32,200 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(36, 38, 46); align-text:center; wrap-text:pretty ‹copy: ~112 chars, 2 lines @1440›
        - `div.product-page-solution-grid` — 940×466.4 @250,228 | 991: 911×454.6 @40,228 | 390: 326×776.3 @32,304 · display:grid; cols:462px 462px; rows:466.375px; gap:16px; aself:stretch · Δ991{cols:447.5px 447.5px} · Δ390{cols:326px}
          - `div.static-product-page-solution-card` — 462×466.4 @250,228 | 991: 447.5×454.6 @40,228 | 390: 326×380.2 @32,304 · display:flex; dir:column; gap:20px; radius:20px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px inset; overflow:hidden
            - `div.static-product-page-solution-text` — 462×72 @250,228 | 991: 447.5×72 @40,228 | 390: 326×96 @32,304 · pad:20px 20px 0px 20px
              - `div.home-winning-card-text` — 422×52 @270,248 | 991: 407.5×52 @60,248 | 390: 286×76 @52,324 · pos:relative; z:10; pe:none
                - `div.flex-col-gap-1.align-start` — 422×52 @270,248 | 991: 407.5×52 @60,248 | 390: 286×76 @52,324 · display:flex; dir:column; align:flex-start; gap:4px; pe:none
                  - `div.text-solid-900` — 74×24 @270,248 | 991: 74×24 @60,248 | 390: 65.8×24 @52,324 · pe:none
                    - `div.text-label-l` — 74×24 @270,248 | 991: 74×24 @60,248 | 390: 65.8×24 @52,324 · pe:none; font:Inter 18px/24px w500 ls-0.259999px; color:rgb(9, 10, 14) · Δ390{font:16px/24px; ls:-0.23111px} "Before ..."
                  - `div.text-solid-500` — 399.1×24 @270,276 | 991: 399.1×24 @60,276 | 390: 286×48 @52,352 · pe:none
                    - `div` — 399.1×24 @270,276 | 991: 399.1×24 @60,276 | 390: 286×48 @52,352 · pe:none; font:Inter 16px/24px w400 ls-0.18px; color:rgb(52, 54, 66); wrap-text:pretty "Antiquated ad spy tools, broken links and limited data."
            - `div.static-before-wrapper` — 462×374.4 @250,320 | 991: 447.5×362.6 @40,320 | 390: 326×264.2 @32,420 · pos:relative; z:-1
              - `img.static-product-page-image` — 462×374.4 @250,320 | 991: 447.5×362.6 @40,320 | 390: 326×264.2 @32,420 · pos:relative; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/spyder-ad-spy/682e02bbc356a16526b39201_before-spyder.webp` natural 1392×1128 loading=lazy
          - `div.static-product-page-solution-card.solution-after` — 462×466.4 @728,228 | 991: 447.5×454.6 @504,228 | 390: 326×380.2 @32,700 · display:flex; dir:column; gap:20px; bg:rgb(2, 3, 8); radius:20px; overflow:hidden
            - `div.static-product-page-solution-text` — 462×72 @728,228 | 991: 447.5×72 @504,228 | 390: 326×96 @32,700 · pad:20px 20px 0px 20px
              - `div.home-winning-card-text` — 422×52 @748,248 | 991: 407.5×52 @524,248 | 390: 286×76 @52,720 · pos:relative; z:10; pe:none
                - `div.flex-col-gap-1.align-start` — 422×52 @748,248 | 991: 407.5×52 @524,248 | 390: 286×76 @52,720 · display:flex; dir:column; align:flex-start; gap:4px; pe:none
                  - `div.text-white` — 117.9×24 @748,248 | 991: 117.9×24 @524,248 | 390: 104.8×24 @52,720 · pe:none
                    - `div.text-label-l` — 117.9×24 @748,248 | 991: 117.9×24 @524,248 | 390: 104.8×24 @52,720 · pe:none; font:Inter 18px/24px w500 ls-0.259999px; color:rgb(255, 255, 255) · Δ390{font:16px/24px; ls:-0.23111px} "After Foreplay"
                  - `div.text-alpha-100` — 383.2×24 @748,276 | 991: 383.2×24 @524,276 | 390: 286×48 @52,748 · flex:1 1 0%; pe:none
                    - `div` — 383.2×24 @748,276 | 991: 383.2×24 @524,276 | 390: 286×48 @52,748 · pe:none; font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Track any brand and analyze their creative strategy."
            - `img.static-product-page-image` — 462×374.4 @728,320 | 991: 447.5×362.6 @504,320 | 390: 326×264.2 @32,816 · pos:relative; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/spyder-ad-spy/682e02bbb206d4bd3ae644fe_after-spyder.webp` natural 1392×1128 loading=lazy

### S3. `div.section`

y/height: 1440 2230/892.3 · 991 1948/1848.2 · 390 1970/1554.6

- `div.product-page-padding-y` — 1440×892.3 @0,0 | 991: 991×1848.2 @0,0 | 390: 390×1554.6 @0,0 · display:flex; dir:column; pad:108px 0px; overflow:hidden · Δ991{pad:96px 0px} · Δ390{pad:80px 0px}
  - `div.section-content-main` — 1440×676.3 @0,108 | 991: 991×1656.2 @0,96 | 390: 390×1394.6 @0,80 · pad:48px 0px 0px 0px · Δ390{pad:40px 0px 0px 0px}
    - `div.container` — 1440×149.8 @0,156 | 991: 991×148 @0,144 | 390: 390×220 @0,120 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
      - `div.section-head` — 720×149.8 @360,156 | 991: 720×148 @136,144 | 390: 342×220 @24,120 · display:flex; dir:column; align:center; gap:12px; mar:0px 320px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
        - `div.section-head-wrapper` — 512×149.8 @464,156 | 991: 512×148 @240,144 | 390: 342×220 @24,120 · display:flex; dir:column; align:center; gap:12px
          - `div.text-overline.text-white-68` — 85.1×16 @677,156 | 991: 85.1×16 @453,144 | 390: 85.1×16 @152,120 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "USE CASES"
          - `h2.text-display-h2` — 461.1×53.8 @489,184 | 991: 419.2×52 @286,172 | 390: 342×96 @24,148 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Creative-first ad spying"
          - `div.section-head_paragraph` — 512×56 @464,250 | 991: 512×56 @240,236 | 390: 342×84 @24,256 · maxw:512px
            - `p.text-body-l` — 512×56 @464,250 | 991: 512×56 @240,236 | 390: 342×84 @24,256 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~112 chars, 2 lines @1440›
    - `div.container.section-container` — 1344×478.6 @48,306 | 991: 991×1460.2 @0,292 | 390: 390×1134.6 @0,340 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
      - `div.section-content-main` — 1264×478.6 @88,306 | 991: 927×1460.2 @32,292 | 390: 342×1134.6 @24,340 · pad:48px 0px 0px 0px · Δ390{pad:40px 0px 0px 0px}
        - `div.lens-security-grid` — 1264×430.6 @88,354 | 991: 480×1412.2 @256,340 | 390: 342×1094.6 @24,380 · display:grid; cols:420.656px 420.672px 420.656px; rows:428.578px; gap:0px; border:1px solid rgb(23, 25, 32); radius:28px · Δ991{cols:478px; mar:0px 223.5px; maxw:480px} · Δ390{cols:340px; maxw:480px}
          - `div.lens-security-card` — 420.7×428.6 @89,355 | 991: 478×469.7 @257,341 | 390: 340×363.8 @25,381 · display:flex; dir:column; pad:24px 24px 16px 24px · Δ390{pad:24px}
            - `div.lens-security-card-head` — 372.7×24 @113,379 | 991: 430×24 @281,365 | 390: 292×24 @49,405 · display:flex; align:center; gap:8px · Δ390{pos:relative}
              - `div.icon-medium` — 24×24 @113,379 | 991: 24×24 @281,365 | 390: 24×24 @49,405 · display:flex; justify:center; align:center
                - `div.svg.w-embed` — 24×24 @113,379 | 991: 24×24 @281,365 | 390: 24×24 @49,405 · display:flex; justify:center; align:center
                  - `svg` — 24×24 @113,379 | 991: 24×24 @281,365 | 390: 24×24 @49,405 · overflow:hidden · SVG `/assets/pages/spyder-ad-spy/svg-svg-kn8jdt.svg`
              - `h3.text-label-m` — 178.5×24 @145,379 | 991: 178.5×24 @313,365 | 390: 178.5×24 @81,405 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "24/7 Ad Library Scraper"
            - `div.lens-security-card-body.home-card-body` — 420.7×301.6 @89,403 | 991: 478×342.7 @257,389 | 390: 340×243.8 @25,390 · mar:0px -24px · Δ390{mar:-39px -24px 0px -24px}
              - `img.lens-security-card-illustration` — 420.7×301.6 @89,403 | 991: 478×342.7 @257,389 | 390: 340×243.8 @25,390 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/spyder-ad-spy/6679734bf7cb3c37f5ebdf64_24-7-scraper.webp` natural 756×542 loading=lazy alt "meta ad library scraper"
            - `div.card-button-holder` — 372.7×63 @113,705 | 991: 430×63 @281,732 | 390: 292×87 @49,634 · display:flex; dir:column; justify:flex-end; align:flex-start; gap:15px; pad:15px 0px 0px 0px
              - `div.text-body-m` — 372.7×48 @113,720 | 991: 430×48 @281,747 | 390: 292×72 @49,649 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.84); wrap-text:balance ‹copy: ~80 chars, 2 lines @1440›
          - `div.lens-security-card.is-middle` — 420.7×428.6 @510,355 | 991: 478×470.8 @257,811 | 390: 340×365.1 @25,745 · display:flex; dir:column; pad:24px 24px 16px 24px; border:T/R/B/L 0 | 1px solid rgb(23, 25, 32) | 0 | 1px solid rgb(23, 25, 32) · Δ390{pad:24px}
            - `div.lens-security-card-head` — 370.7×24 @535,379 | 991: 430×24 @281,836 | 390: 292×24 @49,770 · display:flex; align:center; gap:8px · Δ390{pos:relative}
              - `div.icon-medium` — 24×24 @535,379 | 991: 24×24 @281,836 | 390: 24×24 @49,770 · display:flex; justify:center; align:center
                - `div.svg.w-embed` — 24×24 @535,379 | 991: 24×24 @281,836 | 390: 24×24 @49,770 · display:flex; justify:center; align:center
                  - `svg` — 24×24 @535,379 | 991: 24×24 @281,836 | 390: 24×24 @49,770 · overflow:hidden · SVG `/assets/pages/spyder-ad-spy/svg-svg-2n663l.svg`
              - `h3.text-label-m` — 249.3×24 @567,379 | 991: 249.3×24 @313,836 | 390: 249.3×24 @81,770 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Automated Competitor Reporting"
            - `div.lens-security-card-body.home-card-body` — 418.7×299.4 @511,403 | 991: 478×341.8 @257,860 | 390: 340×243.1 @25,755 · mar:0px -24px · Δ390{mar:-39px -24px 0px -24px}
              - `img.lens-security-card-illustration` — 418.7×299.4 @511,403 | 991: 478×341.8 @257,860 | 390: 340×243.1 @25,755 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/spyder-ad-spy/667b034872fc6e86638d70fc_share-report-2.webp` natural 758×542 loading=lazy alt "competitor ad reports"
            - `div.card-button-holder` — 370.7×65.2 @535,703 | 991: 430×63 @281,1201 | 390: 292×87 @49,998 · display:flex; dir:column; justify:flex-end; align:flex-start; gap:15px; pad:15px 0px 0px 0px; flex:1 1 0%
              - `div.text-body-m` — 370.7×48 @535,720 | 991: 430×48 @281,1216 | 390: 292×72 @49,1013 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.84) "Automatically receive a competitor summary delivered directly to your inbox." (2 lines)
          - `div.lens-security-card` — 420.7×428.6 @930,355 | 991: 478×469.7 @257,1281 | 390: 340×363.8 @25,1110 · display:flex; dir:column; pad:24px 24px 16px 24px · Δ390{pad:24px}
            - `div.lens-security-card-head` — 372.7×24 @954,379 | 991: 430×24 @281,1305 | 390: 292×24 @49,1134 · display:flex; align:center; gap:8px · Δ390{pos:relative}
              - `div.icon-medium` — 24×24 @954,379 | 991: 24×24 @281,1305 | 390: 24×24 @49,1134 · display:flex; justify:center; align:center
                - `div.svg.w-embed` — 24×24 @954,379 | 991: 24×24 @281,1305 | 390: 24×24 @49,1134 · display:flex; justify:center; align:center
                  - `svg` — 24×24 @954,379 | 991: 24×24 @281,1305 | 390: 24×24 @49,1134 · overflow:hidden · SVG `/assets/pages/spyder-ad-spy/svg-svg-j4hkwa.svg`
              - `h3.text-label-m` — 182.1×24 @986,379 | 991: 182.1×24 @313,1305 | 390: 182.1×24 @81,1134 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Discover Winning Hooks"
            - `div.lens-security-card-body.home-card-body` — 420.7×301.6 @930,403 | 991: 478×342.7 @257,1329 | 390: 340×243.8 @25,1119 · mar:0px -24px · Δ390{mar:-39px -24px 0px -24px}
              - `img.lens-security-card-illustration` — 420.7×301.6 @930,403 | 991: 478×342.7 @257,1329 | 390: 340×243.8 @25,1119 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/spyder-ad-spy/6679734b836c41d2742ab24b_identify-hooks.webp` natural 756×542 loading=lazy alt "winning ad hooks"
            - `div.card-button-holder` — 372.7×63 @954,705 | 991: 430×63 @281,1672 | 390: 292×87 @49,1363 · display:flex; dir:column; justify:flex-end; align:flex-start; gap:15px; pad:15px 0px 0px 0px; flex:1 1 0%
              - `div.text-body-m` — 372.7×48 @954,720 | 991: 430×48 @281,1687 | 390: 292×72 @49,1378 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.84) ‹copy: ~87 chars, 2 lines @1440›

### S4. `div.section`

y/height: 1440 3123/1512.5 · 991 3796/1360.1 · 390 3525/1182.5

- `div.product-page-padding-y` — 1440×1512.5 @0,0 | 991: 991×1360.1 @0,0 | 390: 390×1182.5 @0,0 · display:flex; dir:column; pad:108px 0px; overflow:hidden · Δ991{pad:96px 0px} · Δ390{pad:80px 0px}
  - `div.container.section-container` — 1344×1296.5 @48,108 | 991: 991×1168.1 @0,96 | 390: 390×1022.5 @0,80 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
    - `div.section-head` — 720×177.8 @360,108 | 991: 720×176 @136,96 | 390: 342×248 @24,80 · display:flex; dir:column; align:center; gap:12px; mar:0px 272px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
      - `div.section-head-wrapper` — 606.4×177.8 @417,108 | 991: 551.3×176 @220,96 | 390: 342×248 @24,80 · display:flex; dir:column; align:center; gap:12px
        - `div.text-overline.text-white-68` — 123.9×16 @658,108 | 991: 123.9×16 @434,96 | 390: 123.9×16 @133,80 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "CORE FEATURES"
        - `h2.text-display-h2` — 606.4×53.8 @417,136 | 991: 551.3×52 @220,124 | 390: 342×96 @24,108 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Leveraging competitor insights"
        - `div.section-head_paragraph` — 512×84 @464,201 | 991: 512×84 @239,188 | 390: 342×112 @24,216 · maxw:512px
          - `p.text-body-l` — 512×84 @464,201 | 991: 512×84 @239,188 | 390: 342×112 @24,216 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~125 chars, 3 lines @1440›
    - `div.section-content-main` — 1264×1118.8 @88,285 | 991: 927×992.1 @32,272 | 390: 342×774.5 @24,328 · pad:48px 0px 0px 0px · Δ390{pad:40px 0px 0px 0px}
      - `div.product-page-tabs.w-tabs` — 1264×1070.8 @88,333 | 991: 927×944.1 @32,320 | 390: 342×734.5 @24,368 · display:flex; dir:column; align:center; pos:relative · data {"data-current":"Real-Time Analysis","data-easing":"ease","data-duration-in":"300","data-duration-out":"100"}
        - `div.product-page-tabs-menu.spyder` — 1264×84 @88,333 | 991: 927×168 @32,320 | 390: 342×256 @24,368 · display:grid; cols:238.391px 238.406px 238.391px 238.406px 238.391px; rows:76px; gap:16px; pos:relative; pad:4px; overflow:hidden · Δ991{display:flex; dir:row; wrap:wrap; justify:center; align:center; pad:4px 57px} · Δ390{display:flex; dir:row; wrap:wrap; justify:center; align:center; radius:10px}
          - `a#w-tabs-0-data-w-tab-0.product-page-tab.spyder.w-tab-link` — 238.4×76 @92,337 | 991: 166.1×72 @171,324 | 390: 166.1×72 @38,372 · display:flex; dir:column; align:center; gap:8px; pos:relative; pad:10px 20px; maxw:100%; radius:8px; transition:0.2s · Δ991{pad:8px 12px} · Δ390{pad:8px 12px} · href `#w-tabs-0-data-w-pane-0` · data {"data-w-tab":"Real-Time Analysis"}
            - `svg` — 24×24 @199,347 | 991: 24×24 @242,332 | 390: 24×24 @109,380 · overflow:hidden · SVG `/assets/pages/spyder-ad-spy/svg-product-page-tab-svg-19vsi34.svg`
            - `div.text-label-m` — 142.1×24 @140,379 | 991: 142.1×24 @183,364 | 390: 142.1×24 @50,412 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255); align-text:center "Real-Time Analysis"
          - `a#w-tabs-0-data-w-tab-1.product-page-tab.spyder.w-tab-link` — 238.4×76 @346,337 | 991: 131.4×72 @353,324 | 390: 131.4×72 @220,372 · display:flex; dir:column; align:center; gap:8px; pos:relative; pad:10px 20px; maxw:100%; radius:8px; opacity:0.44; transition:0.2s · Δ991{pad:8px 12px} · Δ390{pad:8px 12px} · href `#w-tabs-0-data-w-pane-1` · data {"data-w-tab":"Creative Tests"}
            - `svg` — 24×24 @454,347 | 991: 24×24 @407,332 | 390: 24×24 @274,380 · overflow:hidden · SVG `/assets/pages/spyder-ad-spy/svg-product-page-tab-svg-1ljbnb3.svg`
            - `div.text-label-m` — 107.4×24 @412,379 | 991: 107.4×24 @365,364 | 390: 107.4×24 @232,412 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255); align-text:center "Creative Tests"
          - …3 more `a#w-tabs-0-data-w-tab-0.product-page-tab.spyder.w-tab-link` siblings with the same structure (5 total):
            - [3] 238.4×76 @601,337 — "Landing Page Archive", svg 1gkfig0
            - [4] 238.4×76 @855,337 — "Hook Export", svg 1srbybv
            - [5] 238.4×76 @1110,337 — "Historical Timeline", svg avki79
        - `div.product-page-tabs-content` — 1264×986.8 @88,417 | 991: 927×776.1 @32,488 | 390: 342×478.5 @24,624 · pos:relative
          - `div#w-tabs-0-data-w-pane-0.w-tab-pane` — 1264×986.8 @88,417 | 991: 927×776.1 @32,488 | 390: 342×478.5 @24,624 · pos:relative · data {"data-w-tab":"Real-Time Analysis"}
            - `div.tabs-video-wrapper` — 1264×986.8 @88,417 | 991: 927×776.1 @32,488 | 390: 342×478.5 @24,624 · display:flex; dir:column; gap:20px; pad:20px 0px
              - `img.spyder-ui` — 1264×790.8 @88,437 | 991: 927×580.1 @32,508 | 390: 342×214.5 @24,644 · pos:relative; maxw:100%; border:1px solid rgba(250, 250, 253, 0.13); radius:15px; overflow:clip; z:1; fit:fill · Δ390{radius:6px} · IMG `/assets/pages/spyder-ad-spy/667ad492136c1f374d053bee_Alaysis Screenshot.webp` natural 1440×900 loading=eager alt "ad library scraper screenshot"
              - `div.spyder-description` — 720×136 @360,1248 | 991: 720×136 @136,1108 | 390: 342×204 @24,878 · display:flex; gap:40px; pos:relative; pad:40px; mar:0px 272px; maxw:720px; radius:32px; shadow:rgb(23, 25, 32) 0px 0px 0px 1px; overflow:hidden · Δ991{mar:0px 103.5px} · Δ390{dir:column; gap:32px; pad:32px; mar:0px; maxw:480px; radius:16px}
                - `div.spyder-description-content` — 640×56 @400,1288 | 991: 640×56 @176,1148 | 390: 278×140 @56,910 · display:flex; dir:column; gap:20px; flex:1 1 0%
                  - `p.text-body-l` — 640×56 @400,1288 | 991: 640×56 @176,1148 | 390: 278×140 @56,910 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:balance ‹copy: ~129 chars, 2 lines @1440›
          - `div#w-tabs-0-data-w-pane-1.w-tab-pane` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: img 667ad49024ca4e1a0e253562_Creative Tests Screenshot.webp, ‹~125ch›
          - …3 more `div#w-tabs-0-data-w-pane-0.w-tab-pane` siblings with the same structure (5 total):
            - [3] 0×0 @0,-3123 — img 667ad492e7894210e2a47060_Landing Pages Screenshot.webp, ‹~105ch›
            - [4] 0×0 @0,-3123 — img 667ad4903b6a22bf3270a7fa_Hooks Screenshot.webp, ‹~134ch›
            - [5] 0×0 @0,-3123 — img 667ad4904c410615fa47a384_Timeline Screenshot.webp, ‹~121ch›

### S5. `div.section`

y/height: 1440 4635/1541.8 · 991 5156/1838 · 390 4707/2888

- `div.section` — 1440×1541.8 @0,0 | 991: 991×1838 @0,0 | 390: 390×2888 @0,0
  - `div.product-page-padding-y` — 1440×1541.8 @0,0 | 991: 991×1838 @0,0 | 390: 390×2888 @0,0 · display:flex; dir:column; pad:108px 0px; overflow:hidden · Δ991{pad:96px 0px} · Δ390{pad:80px 0px}
    - `div.container.section-container` — 1344×1325.8 @48,108 | 991: 991×1646 @0,96 | 390: 390×2728 @0,80 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
      - `div.section-head` — 720×149.8 @360,108 | 991: 720×148 @136,96 | 390: 342×220 @24,80 · display:flex; dir:column; align:center; gap:12px; mar:0px 272px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
        - `div.section-head-wrapper` — 512×149.8 @464,108 | 991: 512×148 @240,96 | 390: 342×220 @24,80 · display:flex; dir:column; align:center; gap:12px
          - `div.text-overline.text-white-68` — 110.8×16 @665,108 | 991: 110.8×16 @440,96 | 390: 110.8×16 @140,80 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "ALL FEATURES"
          - `h2.text-display-h2` — 472.6×53.8 @484,136 | 991: 429.7×52 @281,124 | 390: 342×96 @24,108 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Spyder Ad Spy Features"
          - `div.section-head_paragraph` — 512×56 @464,202 | 991: 512×56 @240,188 | 390: 342×84 @24,216 · maxw:512px
            - `p.text-body-l` — 512×56 @464,202 | 991: 512×56 @240,188 | 390: 342×84 @24,216 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~111 chars, 2 lines @1440›
      - `div.section-content-main` — 1264×692 @88,258 | 991: 927×1002 @32,244 | 390: 342×2068 @24,300 · pad:48px 0px 0px 0px · Δ390{pad:40px 0px 0px 0px}
        - `div.product-page-feature-grid-new` — 1264×644 @88,306 | 991: 927×954 @32,292 | 390: 342×2028 @24,340 · display:grid; cols:405.328px 405.328px 405.344px; rows:310px 310px; gap:24px; pos:relative; radius:12px; overflow:hidden; z:4 · Δ991{cols:451.5px 451.5px} · Δ390{cols:342px}
          - `div#w-node-a4db27c9-97fc-6531-53bb-b04f236e6f68-6fefac74.product-page-feature-block-new.spyder-block` — 405.3×310 @88,306 | 991: 451.5×310 @32,292 | 390: 342×310 @24,340 · display:flex; dir:column; pos:relative; gcol:span 1/span 1; grow:span 1/span 1; border:1px solid rgb(23, 25, 32); radius:20px; overflow:hidden; z:1; transition:background-color 0.2s
            - `div.spyder-feature-lottie` — 403.3×180 @89,307 | 991: 449.5×180 @33,293 | 390: 340×180 @25,341 · ASSET `/assets/pages/spyder-ad-spy/6822010b1db333a3279d12f0_Untitled (7).json` · LOTTIE {"src":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6822010b1db333a3279d12f0_Untitled%20(7).json","loop":"1","autoplay":"0","dir":"1","renderer":"svg","dur":"0","ix2":"1"} · data {"data-is-ix2-target":"1","data-animation-type":"lottie","data-src":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6822010b1db333a3279d12f0_Untitled%20(7).json","data-loop":"1","data-direction":"1","data-autoplay":"0","data-renderer":"svg","data-default-duration":"0","data-duration":"0","data-loading":"eager","data-ix2-initial-state":"0"} · ix2 w-id 43386084-4865-6127-0f39-516782f95f49 · (Lottie: children are lottie-web runtime SVG, not measured)
            - `div.product-page-feature-content` — 403.3×128 @89,487 | 991: 449.5×128 @33,473 | 390: 340×128 @25,521 · display:flex; align:flex-end; pad:24px; flex:1 1 0%
              - `div.product-page-feature-text` — 355.3×80 @113,511 | 991: 401.5×80 @57,497 | 390: 292×80 @49,545 · display:flex; dir:column; gap:8px
                - `h3.text-label-m` — 355.3×24 @113,511 | 991: 401.5×24 @57,497 | 390: 292×24 @49,545 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Real-Time Status"
                - `div.text-alpha-100` — 355.3×48 @113,543 | 991: 401.5×48 @57,529 | 390: 292×48 @49,577 · flex:1 1 0%
                  - `p.text-body-m` — 355.3×48 @113,543 | 991: 401.5×48 @57,529 | 390: 292×48 @49,577 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~68 chars, 2 lines @1440›
          - `div#w-node-a4db27c9-97fc-6531-53bb-b04f236e6f72-6fefac74.product-page-feature-block-new.spyder-block` — 405.3×310 @517,306 | 991: 451.5×310 @508,292 | 390: 342×310 @24,674 · display:flex; dir:column; pos:relative; gcol:span 1/span 1; grow:span 1/span 1; border:1px solid rgb(23, 25, 32); radius:20px; overflow:hidden; z:1; transition:background-color 0.2s
            - `div.spyder-feature-lottie` — 403.3×180 @518,307 | 991: 449.5×180 @509,293 | 390: 340×180 @25,675 · ASSET `/assets/pages/spyder-ad-spy/682250526cf05f1944daa3f3_new.json` · LOTTIE {"src":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682250526cf05f1944daa3f3_new.json","loop":"0","autoplay":"0","dir":"1","renderer":"svg","dur":"4","ix2":"1"} · data {"data-is-ix2-target":"1","data-animation-type":"lottie","data-src":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682250526cf05f1944daa3f3_new.json","data-loop":"0","data-direction":"1","data-autoplay":"0","data-renderer":"svg","data-default-duration":"0","data-duration":"4","data-loading":"eager","data-ix2-initial-state":"0"} · ix2 w-id 828d23f3-eca2-dc72-b87d-b887185c5ce9 · (Lottie: children are lottie-web runtime SVG, not measured)
            - `div.product-page-feature-content` — 403.3×128 @518,487 | 991: 449.5×128 @509,473 | 390: 340×128 @25,855 · display:flex; align:flex-end; pad:24px; flex:1 1 0%
              - `div.product-page-feature-text` — 355.3×80 @542,511 | 991: 395.6×56 @533,521 | 390: 292×80 @49,879 · display:flex; dir:column; gap:8px
                - `h3.text-label-m` — 355.3×24 @542,511 | 991: 395.6×24 @533,521 | 390: 292×24 @49,879 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Track Creative Tests"
                - `div.text-alpha-100` — 355.3×48 @542,543 | 991: 395.6×24 @533,553 | 390: 292×48 @49,911 · flex:1 1 0%
                  - `p.text-body-m` — 355.3×48 @542,543 | 991: 395.6×24 @533,553 | 390: 292×48 @49,911 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Bundle and track competitors' ads launched together." (2 lines)
          - …4 more `div#w-node-a4db27c9-97fc-6531-53bb-b04f236e6f68-6fefac74.product-page-feature-block-new.spyder-block` siblings with the same structure (6 total):
            - [3] 405.3×310 @947,306 — "Landing Page Insights", "Know what landing pages are getting the most spend."
            - [4] 405.3×310 @88,640 — "Time Travel / Historical Data", "Bundle and track competitors' ads launched together."
            - [5] 405.3×310 @517,640 — "Share Competitor Reports", ‹~86ch›
            - [6] 405.3×310 @947,640 — "Slack & Email Updates", ‹~76ch›
      - `div.container` — 1264×484 @88,950 | 991: 927×496 @32,1246 | 390: 342×440 @24,2368 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
        - `div.home-testimonial-wrapper` — 1184×484 @128,950 | 991: 863×496 @64,1246 | 390: 294×440 @48,2368 · pos:relative; pad:120px 0px · Δ991{pad:108px 0px} · Δ390{pad:80px 0px}
          - `div.testemonial-contents` — 947.2×244 @246,1070 | 991: 640×280 @176,1354 | 390: 294×280 @48,2448 · display:flex; dir:column; justify:center; align:center; gap:24px; mar:0px 118.406px; maxw:80% · Δ991{mar:0px 111.5px; maxw:640px} · Δ390{mar:0px; maxw:640px}
            - `img.testimonial-logo-image` — 120×40 @660,1070 | 991: 120×40 @436,1354 | 390: 96×40 @147,2448 · maxw:100%; maxh:48px; overflow:clip; fit:contain; aspect:auto 70 / 40 · IMG `/assets/pages/spyder-ad-spy/6679ef83dd47e5000aa10cd5_Wiza.svg` natural 160×48 loading=lazy
            - `div.text-quote` — 947.2×108 @246,1134 | 991: 640×144 @176,1418 | 390: 294×144 @48,2512 · font:Inter 24px/36px w400 ls-0.18px; color:rgb(250, 250, 253); align-text:center · Δ390{font:16px/24px} ‹copy: ~203 chars, 3 lines @1440›
            - `div.testimonial-bio` — 186.8×48 @627,1266 | 991: 186.8×48 @402,1586 | 390: 178.8×48 @106,2680 · display:flex; align:center; gap:16px
              - `img.testimonial-author-image` — 48×48 @627,1266 | 991: 48×48 @402,1586 | 390: 40×40 @106,2684 · maxw:100%; radius:5px; overflow:clip; fit:fill · IMG `/assets/6679ebddfad13bb59b5a8f25_TS2G1MWKZ-US2G1MXHD-eb1db3a0ea43-192.avif` natural 192×192 loading=lazy
              - `div.testimonial-avatar-text` — 122.8×48 @691,1266 | 991: 122.8×48 @466,1586 | 390: 122.8×48 @162,2680
                - `div.text-label-m` — 122.8×24 @691,1266 | 991: 122.8×24 @466,1586 | 390: 122.8×24 @162,2680 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Stephen Hakami"
                - `div.text-body-m` — 122.8×24 @691,1290 | 991: 122.8×24 @466,1610 | 390: 122.8×24 @162,2704 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Founder @ Wiza"
          - `img.testimonial-decoration.is-right` — 142.1×280.4 @1170,1052 | 991: 172.6×496 @841,1246 | 390: 117.6×440 @254,2368 · pos:absolute [242px 0px 242px 1041.92px]; maxw:100%; opacity:0.7; transform:matrix(1, 0, 0, 1, 0, -140.203); overflow:clip; fit:fill · Δ991{transform:matrix(1, 0, 0, 1, 0, -248)} · Δ390{transform:matrix(1, 0, 0, 1, 0, -220)} · IMG `/assets/pages/swipe-file/642db608b19bd600e001723a_awward-right.svg` natural 114×225 loading=lazy
          - `img.testimonial-decoration` — 142.1×280.4 @128,1052 | 991: 172.6×496 @-22,1246 | 390: 117.6×440 @19,2368 · pos:absolute [242px 1041.92px 242px 0px]; maxw:100%; opacity:0.7; transform:matrix(1, 0, 0, 1, 0, -140.203); overflow:clip; fit:fill · Δ991{transform:matrix(1, 0, 0, 1, 0, -248)} · Δ390{transform:matrix(1, 0, 0, 1, 0, -220)} · IMG `/assets/pages/swipe-file/642db6082db5f7803a7a121e_award-left.svg` natural 114×225 loading=lazy
  - `div.negative-spacing-bottom` — 1440×0 @0,1542 | 991: 991×0 @0,1838 | 390: 390×0 @0,2888 · mar:0px 0px -80px 0px

### S6. `div.section`

y/height: 1440 6097/564 · 991 6914/760 · 390 7515/704

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
                    - `svg` — 24×24 @299,368 | 991: 24×24 @223,348 | 390: 24×24 @183,376 · overflow:hidden · SVG `/assets/pages/spyder-ad-spy/svg-svg-185ries.svg`
            - `div.no-cc-required` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: "No credit card required", svg bjw7ed
        - `div.cta-block-animation` — 880×880 @788,-122 | 991: hidden | 390: hidden · pos:absolute [-202px -316px 0px 700px]; blend:lighten; z:0 · Δ991{display:none; mar:-100px 0px; pos:relative} · Δ390{display:none; mar:-55% -115px -133px -100px; pos:relative}
          - `div.code-video.w-embed` — 880×880 @788,-122 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; pos:relative
            - `video` — 880×880 @788,-122 | 991: hidden | 390: hidden · overflow:clip; fit:contain · ASSET `/assets/pages/spyder-ad-spy/cta-spyder.mov` · VIDEO {"srcs":["cta-spyder.mov"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":1000,"vh":1000,"dur":3.36,"preload":"metadata"}
        - `div.cta-block-icon` — 1096×0 @172,400 | 991: 799×300 @96,380 | 390: 278×192 @56,432 · Δ991{display:flex; dir:column; wrap:nowrap; justify:center; align:center; gap:normal} · Δ390{display:flex; dir:column; wrap:nowrap; justify:center; align:center; gap:normal; mar:24px 0px 0px 0px}
          - `img.cta-block-icon-image` — hidden | 991: 300×300 @346,380 | 390: 256×256 @67,432 · display:none; maxw:100%; overflow:clip; fit:fill · Δ991{display:block; maxw:none} · Δ390{display:block; mar:0px 0px -64px 0px; maxw:none} · IMG `/assets/682f93b469081ade4aadbbad_iso-spyder.webp` natural 0×0 loading=lazy alt "isometric radar logo"

### S7. `div.section`

y/height: 1440 6661/983.8 · 991 7674/982 · 390 8219/1034

- `div.container` — 1440×983.8 @0,0 | 991: 991×982 @0,0 | 390: 390×1034 @0,0 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
  - `div.faq` — 1360×983.8 @40,0 | 991: 927×982 @32,0 | 390: 342×1034 @24,0 · display:flex; dir:column; gap:48px; pad:140px 0px · Δ390{gap:40px; pad:64px 0px 80px 0px}
    - `div.section-head` — 720×177.8 @360,140 | 991: 720×176 @136,140 | 390: 342×248 @24,64 · display:flex; dir:column; align:center; gap:12px; mar:0px 320px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
      - `div.section-head-wrapper` — 512×177.8 @464,140 | 991: 512×176 @240,140 | 390: 342×248 @24,64 · display:flex; dir:column; align:center; gap:12px
        - `div.text-overline.text-white-68` — 29.5×16 @705,140 | 991: 29.5×16 @481,140 | 390: 29.5×16 @180,64 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "FAQ"
        - `h3.text-display-h2` — 441.1×53.8 @499,168 | 991: 401×52 @295,168 | 390: 342×96 @24,92 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Ad Spy Tool Questions"
        - `div.section-head_paragraph` — 512×84 @464,234 | 991: 512×84 @240,232 | 390: 342×112 @24,200 · maxw:512px
          - `p.text-body-l` — 512×84 @464,234 | 991: 512×84 @240,232 | 390: 342×112 @24,200 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~149 chars, 3 lines @1440›
    - `div.faq-block-container` — 752×366 @344,366 | 991: 752×366 @120,364 | 390: 342×446 @24,352 · mar:0px 304px; maxw:752px · Δ991{mar:0px 87.5px} · Δ390{mar:0px} · data {"data-accordion-container":""}
      - `div.` — 752×366 @344,366 | 991: 752×366 @120,364 | 390: 342×446 @24,352
        - `div.faq-block` — 752×61 @344,366 | 991: 752×61 @120,364 | 390: 342×81 @24,352 · display:flex; justify:center; align:flex-start; gap:44px; pad:20px 0px 12px 0px; border:T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-accordion-item":"","data-expanded":"false"}
          - `div.faq-block_content` — 680×24 @344,386 | 991: 680×24 @120,384 | 390: 270×48 @24,372 · display:flex; dir:column; flex:1 1 0%
            - `div.faq-block_head` — 680×24 @344,386 | 991: 680×24 @120,384 | 390: 270×48 @24,372 · display:flex; align:center; gap:44px
              - `h4.text-label-l` — 330.4×24 @344,386 | 991: 330.4×24 @120,384 | 390: 270×48 @24,372 · font:Inter 18px/24px w500 ls-0.259999px; color:rgba(255, 255, 255, 0.68) · Δ390{font:16px/24px; ls:-0.23111px} "How long can I access the tracked ads?"
            - `div.faq-block_body` — 680×0 @344,410 | 991: 680×0 @120,408 | 390: 270×0 @24,420 · overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
              - `div.faq-block_answer` — 680×56 @344,410 | 991: 680×56 @120,408 | 390: 270×96 @24,420 · pad:8px 0px; overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
                - `p` — 680×40 @344,418 | 991: 680×40 @120,416 | 390: 270×80 @24,428 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) ‹copy: ~165 chars, 2 lines @1440›
          - `div.faq-block_icon` — 28×28 @1068,386 | 991: 28×28 @844,384 | 390: 28×28 @338,372 · display:flex; justify:center; align:center; transition:0.2s
            - `div.icon-medium` — 24×24 @1070,388 | 991: 24×24 @846,386 | 390: 24×24 @340,374 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @1070,388 | 991: 24×24 @846,386 | 390: 24×24 @340,374 · display:flex; justify:center; align:center
                - `svg` — 24×24 @1070,388 | 991: 24×24 @846,386 | 390: 24×24 @340,374 · overflow:hidden · SVG `/assets/pages/spyder-ad-spy/svg-svg-wqicrt.svg`
        - `div.faq-block` — 752×61 @344,427 | 991: 752×61 @120,425 | 390: 342×81 @24,433 · display:flex; justify:center; align:flex-start; gap:44px; pad:20px 0px 12px 0px; border:T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-accordion-item":"","data-expanded":"false"}
          - `div.faq-block_content` — 680×24 @344,447 | 991: 680×24 @120,445 | 390: 270×48 @24,453 · display:flex; dir:column; flex:1 1 0%
            - `div.faq-block_head` — 680×24 @344,447 | 991: 680×24 @120,445 | 390: 270×48 @24,453 · display:flex; align:center; gap:44px
              - `h4.text-label-l` — 410.2×24 @344,447 | 991: 410.2×24 @120,445 | 390: 270×48 @24,453 · font:Inter 18px/24px w500 ls-0.259999px; color:rgba(255, 255, 255, 0.68) · Δ390{font:16px/24px; ls:-0.23111px} "How does Spyder help with Facebook ad spying?"
            - `div.faq-block_body` — 680×0 @344,471 | 991: 680×0 @120,469 | 390: 270×0 @24,501 · overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
              - `div.faq-block_answer` — 680×56 @344,471 | 991: 680×56 @120,469 | 390: 270×116 @24,501 · pad:8px 0px; overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
                - `p` — 680×40 @344,479 | 991: 680×40 @120,477 | 390: 270×100 @24,509 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) ‹copy: ~172 chars, 2 lines @1440›
          - `div.faq-block_icon` — 28×28 @1068,447 | 991: 28×28 @844,445 | 390: 28×28 @338,453 · display:flex; justify:center; align:center; transition:0.2s
            - `div.icon-medium` — 24×24 @1070,449 | 991: 24×24 @846,447 | 390: 24×24 @340,455 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @1070,449 | 991: 24×24 @846,447 | 390: 24×24 @340,455 · display:flex; justify:center; align:center
                - `svg` — 24×24 @1070,449 | 991: 24×24 @846,447 | 390: 24×24 @340,455 · overflow:hidden · SVG `/assets/pages/spyder-ad-spy/svg-svg-wqicrt.svg`
        - …4 more `div.` siblings with the same structure (6 total):
          - [3] 752×61 @344,488 — "What is Spyder Meta Ad Spy?", svg wqicrt, ‹~172ch›
          - [4] 752×61 @344,549 — "Will the ads expire like in Facebook Ad Library?", svg wqicrt, ‹~139ch›
          - [5] 752×61 @344,610 — "Will Spyder track instagram ads in addition to Facebook Ads?", svg wqicrt, ‹~112ch›
          - [6] 752×61 @344,671 — "How many brand’s ads can I scrape?", svg wqicrt, ‹~105ch›
    - `div.faq-buttons` — 1360×64 @40,780 | 991: 927×64 @32,778 | 390: 342×116 @24,838 · display:flex; justify:center; align:center; gap:12px; pad:12px 0px · Δ390{dir:column; align:stretch}
      - `a#intercomButton.button-dark.ghost-icon-button` — 177.4×40 @536,792 | 991: 177.4×40 @311,790 | 390: 342×40 @24,850 · display:flex; justify:center; align:center; gap:5px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `#`
        - `div.button-icon-block.icon-left` — 24×24 @544,800 | 991: 24×24 @319,798 | 390: 24×24 @114,858 · display:flex; justify:center; align:center; pos:relative; mar:0px -4px 0px 0px; opacity:0.68; z:2
          - `div.icon-medium` — 24×24 @544,800 | 991: 24×24 @319,798 | 390: 24×24 @114,858 · display:flex; justify:center; align:center
            - `div.svg.w-embed` — 20×20 @546,802 | 991: 20×20 @321,800 | 390: 20×20 @116,860 · display:flex; justify:center; align:center
              - `svg` — 20×20 @546,802 | 991: 20×20 @321,800 | 390: 20×20 @116,860 · overflow:hidden · SVG `/assets/pages/spyder-ad-spy/svg-svg-1i4rn0n.svg`
        - `div.button-text-block` — 136.4×24 @569,800 | 991: 136.4×24 @344,798 | 390: 136.4×24 @139,858 · pos:relative; pad:0px 6px; z:2
          - `div.text-heading-m` — 124.4×24 @575,800 | 991: 124.4×24 @350,798 | 390: 124.4×24 @145,858 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Contact support"
      - `a.button-dark.ghost-icon-button` — 179.1×40 @725,792 | 991: 179.1×40 @501,790 | 390: 342×40 @24,902 · display:flex; justify:center; align:center; gap:5px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `https://foreplay.featurebase.app/help` target=_blank
        - `div.button-icon-block.icon-left` — 24×24 @733,800 | 991: 24×24 @509,798 | 390: 24×24 @113,910 · display:flex; justify:center; align:center; pos:relative; mar:0px -4px 0px 0px; opacity:0.68; z:2
          - `div.icon-medium` — 24×24 @733,800 | 991: 24×24 @509,798 | 390: 24×24 @113,910 · display:flex; justify:center; align:center
            - `div.svg.w-embed` — 24×24 @733,800 | 991: 24×24 @509,798 | 390: 24×24 @113,910 · display:flex; justify:center; align:center
              - `svg` — 24×24 @733,800 | 991: 24×24 @509,798 | 390: 24×24 @113,910 · overflow:hidden · SVG `/assets/pages/spyder-ad-spy/svg-svg-1lrvzzc.svg`
        - `div.button-text-block` — 138.1×24 @758,800 | 991: 138.1×24 @534,798 | 390: 138.1×24 @138,910 · pos:relative; pad:0px 6px; z:2
          - `div.text-heading-m` — 126.1×24 @764,800 | 991: 126.1×24 @540,798 | 390: 126.1×24 @144,910 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Knowledge Base"

### S8. `div.section.overflow-hidden`

y/height: 1440 7645/1037.5 · 991 8656/801.8 · 390 9253/643.3

- `div.section.overflow-hidden` — 1440×1037.5 @0,0 | 991: 991×801.8 @0,0 | 390: 390×643.3 @0,0 · overflow:hidden
  - `div.container.section-container` — 1344×1037.5 @48,0 | 991: 991×801.8 @0,0 | 390: 390×643.3 @0,0 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
    - `div.home-cta` — 1264×1037.5 @88,0 | 991: 927×801.8 @32,0 | 390: 342×643.3 @24,0 · **identical to the homepage block → uses `CTA.jsx` from src/components (not re-specced; no assets downloaded)**

## Typography roles (computed at 1440; sizes at 991/390 from the same nodes)

| font (family size/lh weight ls) | color | n | @991 | @390 | elements (sample) | example |
|---|---|---|---|---|---|---|
| Inter 16px/24px w500 ls-0.18px | rgb(255, 255, 255) | 15 | 16px/24px | 16px/24px | `h3.text-label-m` `div.text-label-m` | 24/7 Ad Library Scraper |
| Inter 16px/24px w400 ls-0.18px | rgba(255, 255, 255, 0.68) | 8 | 16px/24px | 16px/24px | `div` `p.text-body-m` `div.text-body-m` | Track any brand and analyze their creati |
| Inter 18px/28px w400 ls-0.259999px | rgba(255, 255, 255, 0.68) | 7 | 18px/28px | 18px/28px, 16px/24px | `p.text-body-l.text-white-84` `p.text-body-l` `p.text-body-l.mobile-landscape-text-body-n` | ~105 chars |
| Inter 18px/24px w500 ls-0.259999px | rgba(255, 255, 255, 0.68) | 6 | 18px/24px | 16px/24px | `h4.text-label-l` | How long can I access the tracked ads? |
| Inter 14px/20px w400 ls-0.09px | rgba(255, 255, 255, 0.68) | 6 | 14px/20px | 14px/20px | `p` | ~165 chars |
| Inter 12px/16px w550 ls2px uppercase | rgba(255, 255, 255, 0.36) | 5 | 12px/16px | 12px/16px | `h1.text-overline` `div.text-overline.text-white-68` | SPYDER META AD SPY |
| Inter Display 44px/53.76px w600 ls-0.33px | rgb(255, 255, 255) | 4 | 40px/52px | 36px/48px | `h2.text-display-h2` `h3.text-display-h2` | Creative-first ad spying |
| Inter 16px/24px w400 ls-0.18px | rgba(255, 255, 255, 0.84) | 3 | 16px/24px | 16px/24px | `div.text-body-m` | ~80 chars |
| Inter 16px/24px w550 ls-0.18px | rgb(9, 10, 14) | 2 | 16px/24px | 16px/24px | `div.text-heading-m` | Start free trial |
| Inter 16px/24px w550 ls-0.18px | rgb(255, 255, 255) | 2 | 16px/24px | 16px/24px | `div.text-heading-m` | Contact support |
| Inter Display 60px/68px w600 ls-0.45px | rgba(255, 255, 255, 0.88) | 1 | 60px/68px | 38px/48px | `h2.text-display-h1.hero-title` | Competitor Ad Tracking & Insights on Aut |
| Inter Display 36px/44px w600 ls-0.26px | rgb(23, 25, 32) | 1 | 36px/44px | 36px/44px | `h2.text-display-h3` | Why choose creative-first ad spying? |
| Inter 16px/24px w400 ls-0.18px | rgb(36, 38, 46) | 1 | 16px/24px | 16px/24px | `p.text-body-m` | ~112 chars |
| Inter 18px/24px w500 ls-0.259999px | rgb(9, 10, 14) | 1 | 18px/24px | 16px/24px | `div.text-label-l` | Before ... |
| Inter 16px/24px w400 ls-0.18px | rgb(52, 54, 66) | 1 | 16px/24px | 16px/24px | `div` | Antiquated ad spy tools, broken links an |
| Inter 18px/24px w500 ls-0.259999px | rgb(255, 255, 255) | 1 | 18px/24px | 16px/24px | `div.text-label-l` | After Foreplay |
| Inter 24px/36px w400 ls-0.18px | rgb(250, 250, 253) | 1 | 24px/36px | 16px/24px | `div.text-quote` | ~203 chars |
| Inter Display 36px/44px w600 ls-0.26px | rgb(255, 255, 255) | 1 | 36px/44px | 28px/36px | `h2.text-display-h3.mobile-landscape-text-display-h4` | Get a 7-Day free trial today |

## Colors, gradients, radii, shadows in use (non-text, 1440)

**background-color**
- `rgb(255, 255, 255)` — `a.button-dark.button-primary`, `div.section-white-block`
- `rgb(2, 3, 8)` — `div.product-hero-video.w-background-video`, `div.static-product-page-solution-card.solution-after`, `div.cta-block`, `a#intercomButton.button-dark.ghost-icon-button`, `a.button-dark.ghost-icon-button`

**background-image**
- `url(68331d86cf0a6a7db433a56d_dot-grid.webp)` — `div.dot-bg`
- `radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88))` — `h2.text-display-h1.hero-title`
- `linear-gradient(0deg, rgb(2, 3, 8) 75%, rgba(2, 3, 8, 0))` — `div.product-hero-preview-underlay`
- `url(62a4ed18ddad95dde8b8bfa4/68338b3e839a771394bbc430_product-video-spyder-poster-00001.jpg)` — `video#23c0f4a3-6291-df92-e879-e6241b2c98d5-video`

**border**
- `1px solid rgb(23, 25, 32)` — `div.lens-security-grid`, `div#w-node-a4db27c9-97fc-6531-53bb-b04f236e6f68-6fefac74.product-page-feature-block-new.spyder-block`, `div#w-node-a4db27c9-97fc-6531-53bb-b04f236e6f72-6fefac74.product-page-feature-block-new.spyder-block`, `div#w-node-a4db27c9-97fc-6531-53bb-b04f236e6f7c-6fefac74.product-page-feature-block-new.spyder-block`, `div#w-node-a4db27c9-97fc-6531-53bb-b04f236e6f86-6fefac74.product-page-feature-block-new.spyder-block` (+2)
- `T/R/B/L 0 | 1px solid rgb(23, 25, 32) | 0 | 1px solid rgb(23, 25, 32)` — `div.lens-security-card.is-middle`
- `1px solid rgba(250, 250, 253, 0.13)` — `img.spyder-ui`
- `T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0` — `div.faq-block`

**radius**
- `10px` — `a.button-dark.button-primary`, `a#intercomButton.button-dark.ghost-icon-button`, `a.button-dark.ghost-icon-button`
- `36px` — `div.section-white-block`, `div.cta-block`
- `20px` — `div.static-product-page-solution-card`, `div.static-product-page-solution-card.solution-after`, `div#w-node-a4db27c9-97fc-6531-53bb-b04f236e6f68-6fefac74.product-page-feature-block-new.spyder-block`, `div#w-node-a4db27c9-97fc-6531-53bb-b04f236e6f72-6fefac74.product-page-feature-block-new.spyder-block`, `div#w-node-a4db27c9-97fc-6531-53bb-b04f236e6f7c-6fefac74.product-page-feature-block-new.spyder-block` (+3)
- `28px` — `div.lens-security-grid`
- `8px` — `a#w-tabs-0-data-w-tab-0.product-page-tab.spyder.w-tab-link`, `a#w-tabs-0-data-w-tab-1.product-page-tab.spyder.w-tab-link`, `a#w-tabs-0-data-w-tab-2.product-page-tab.spyder.w-tab-link`, `a#w-tabs-0-data-w-tab-3.product-page-tab.spyder.w-tab-link`, `a#w-tabs-0-data-w-tab-4.product-page-tab.spyder.w-tab-link`
- `15px` — `img.spyder-ui`
- `32px` — `div.spyder-description`
- `12px` — `div.product-page-feature-grid-new`
- `5px` — `img.testimonial-author-image`

**box-shadow**
- `rgb(233, 234, 239) 0px 0px 0px 1px inset` — `div.static-product-page-solution-card`
- `rgb(23, 25, 32) 0px 0px 0px 1px` — `div.spyder-description`, `div.cta-block`

**opacity**
- `0.66` — `div.dot-bg`
- `0.44` — `a#w-tabs-0-data-w-tab-1.product-page-tab.spyder.w-tab-link`, `a#w-tabs-0-data-w-tab-2.product-page-tab.spyder.w-tab-link`, `a#w-tabs-0-data-w-tab-3.product-page-tab.spyder.w-tab-link`, `a#w-tabs-0-data-w-tab-4.product-page-tab.spyder.w-tab-link`
- `0.7` — `img.testimonial-decoration.is-right`, `img.testimonial-decoration`
- `0.68` — `div.button-icon-block.icon-left`

**transition**
- `0.2s` — `a.button-dark.button-primary`, `a#w-tabs-0-data-w-tab-0.product-page-tab.spyder.w-tab-link`, `a#w-tabs-0-data-w-tab-1.product-page-tab.spyder.w-tab-link`, `a#w-tabs-0-data-w-tab-2.product-page-tab.spyder.w-tab-link`, `a#w-tabs-0-data-w-tab-3.product-page-tab.spyder.w-tab-link` (+4)
- `background-color 0.2s` — `div#w-node-a4db27c9-97fc-6531-53bb-b04f236e6f68-6fefac74.product-page-feature-block-new.spyder-block`, `div#w-node-a4db27c9-97fc-6531-53bb-b04f236e6f72-6fefac74.product-page-feature-block-new.spyder-block`, `div#w-node-a4db27c9-97fc-6531-53bb-b04f236e6f7c-6fefac74.product-page-feature-block-new.spyder-block`, `div#w-node-a4db27c9-97fc-6531-53bb-b04f236e6f86-6fefac74.product-page-feature-block-new.spyder-block`, `div#w-node-a4db27c9-97fc-6531-53bb-b04f236e6f90-6fefac74.product-page-feature-block-new.spyder-block` (+1)
- `0.9s cubic-bezier(0.19, 1, 0.22, 1)` — `div.faq-block`, `div.faq-block_body`, `div.faq-block_answer`

## Assets (local path ↔ element)

| local file | kind | element | natural | displayed @1440 | source URL |
|---|---|---|---|---|---|
| `/assets/pages/swipe-file/68331d86cf0a6a7db433a56d_dot-grid.webp` | bg | `dot-bg` (s0.0) |  | 1440×1376 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68331d86cf0a6a7db433a56d_dot-grid.webp |
| `/assets/pages/spyder-ad-spy/animated-icon-spyder.webm` | video | `` (s0.1.0.1.0.0.0.0) | 2000×2000 4.00s | 256×256 | https://publicassets.foreplay.co/animated-icon-spyder.webm |
| `/assets/pages/spyder-ad-spy/animated-icon-spyder.mov` | video | `` (s0.1.0.1.0.0.0.0) | 2000×2000 4.00s | 256×256 | https://publicassets.foreplay.co/animated-icon-spyder.mov |
| `/assets/pages/spyder-ad-spy/682f9f72ef4d27826a8d2aa0_pi-spyder-hq.webp` | img | `product-hero-icon-image` (s0.1.0.1.0.1) | 0×0 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f72ef4d27826a8d2aa0_pi-spyder-hq.webp |
| `/assets/pages/swipe-file/6820c07c2e5b8c350c8e1f4c_hero-empty-mockup.webp` | img | `product-hero-preview-image` (s0.1.0.2.0) | 1440×900 | 1360×850 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6820c07c2e5b8c350c8e1f4c_hero-empty-mockup.webp |
| `/assets/pages/spyder-ad-spy/68338b3e839a771394bbc430_product-video-spyder-transcode.mp4` | bgvideo | `product-hero-video.w-background-video.w-background-video-atom` (s0.1.0.2.2) |  | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338b3e839a771394bbc430_product-video-spyder-transcode.mp4 |
| `/assets/pages/spyder-ad-spy/68338b3e839a771394bbc430_product-video-spyder-transcode.webm` | bgvideo | `product-hero-video.w-background-video.w-background-video-atom` (s0.1.0.2.2) |  | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338b3e839a771394bbc430_product-video-spyder-transcode.webm |
| `/assets/pages/spyder-ad-spy/68338b3e839a771394bbc430_product-video-spyder-poster-00001.jpg` | poster | `product-hero-video.w-background-video.w-background-video-atom` (s0.1.0.2.2) |  |  | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338b3e839a771394bbc430_product-video-spyder-poster-00001.jpg |
| `/assets/pages/spyder-ad-spy/68338b3e839a771394bbc430_product-video-spyder-poster-00001.jpg` | bg | `` (s0.1.0.2.2.0) |  | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338b3e839a771394bbc430_product-video-spyder-poster-00001.jpg |
| `/assets/pages/spyder-ad-spy/68338b3e839a771394bbc430_product-video-spyder-transcode.mp4` | video | `` (s0.1.0.2.2.0) | 1280×668 11.40s | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338b3e839a771394bbc430_product-video-spyder-transcode.mp4 |
| `/assets/pages/spyder-ad-spy/68338b3e839a771394bbc430_product-video-spyder-transcode.webm` | video | `` (s0.1.0.2.2.0) | 1280×668 11.40s | 1094.9×541.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338b3e839a771394bbc430_product-video-spyder-transcode.webm |
| `/assets/pages/spyder-ad-spy/682e02bbc356a16526b39201_before-spyder.webp` | img | `static-product-page-image` (s1.0.0.0.0.2.0.1.0) | 1392×1128 | 462×374.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682e02bbc356a16526b39201_before-spyder.webp |
| `/assets/pages/spyder-ad-spy/682e02bbb206d4bd3ae644fe_after-spyder.webp` | img | `static-product-page-image` (s1.0.0.0.0.2.1.1) | 1392×1128 | 462×374.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682e02bbb206d4bd3ae644fe_after-spyder.webp |
| `/assets/pages/spyder-ad-spy/6679734bf7cb3c37f5ebdf64_24-7-scraper.webp` | img | `lens-security-card-illustration` (s2.0.0.1.0.0.0.1.0) | 756×542 | 420.7×301.6 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6679734bf7cb3c37f5ebdf64_24-7-scraper.webp |
| `/assets/pages/spyder-ad-spy/667b034872fc6e86638d70fc_share-report-2.webp` | img | `lens-security-card-illustration` (s2.0.0.1.0.0.1.1.0) | 758×542 | 418.7×299.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/667b034872fc6e86638d70fc_share-report-2.webp |
| `/assets/pages/spyder-ad-spy/6679734b836c41d2742ab24b_identify-hooks.webp` | img | `lens-security-card-illustration` (s2.0.0.1.0.0.2.1.0) | 756×542 | 420.7×301.6 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6679734b836c41d2742ab24b_identify-hooks.webp |
| `/assets/pages/spyder-ad-spy/667ad492136c1f374d053bee_Alaysis Screenshot.webp` | img | `spyder-ui` (s3.0.0.1.0.1.0.0.0) | 1440×900 | 1264×790.8 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/667ad492136c1f374d053bee_Alaysis%20Screenshot.webp |
| `/assets/pages/spyder-ad-spy/667ad49024ca4e1a0e253562_Creative Tests Screenshot.webp` | img | `spyder-ui` (s3.0.0.1.0.1.1.0.0) | 1440×900 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/667ad49024ca4e1a0e253562_Creative%20Tests%20Screenshot.webp |
| `/assets/pages/spyder-ad-spy/667ad492e7894210e2a47060_Landing Pages Screenshot.webp` | img | `spyder-ui` (s3.0.0.1.0.1.2.0.0) | 1440×900 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/667ad492e7894210e2a47060_Landing%20Pages%20Screenshot.webp |
| `/assets/pages/spyder-ad-spy/667ad4903b6a22bf3270a7fa_Hooks Screenshot.webp` | img | `spyder-ui` (s3.0.0.1.0.1.3.0.0) | 1440×900 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/667ad4903b6a22bf3270a7fa_Hooks%20Screenshot.webp |
| `/assets/pages/spyder-ad-spy/667ad4904c410615fa47a384_Timeline Screenshot.webp` | img | `spyder-ui` (s3.0.0.1.0.1.4.0.0) | 1440×900 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/667ad4904c410615fa47a384_Timeline%20Screenshot.webp |
| `/assets/pages/spyder-ad-spy/6822010b1db333a3279d12f0_Untitled (7).json` | lottie | `spyder-feature-lottie` (s4.0.0.1.0.0.0) |  | 403.3×180 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6822010b1db333a3279d12f0_Untitled%20(7).json |
| `/assets/pages/spyder-ad-spy/682250526cf05f1944daa3f3_new.json` | lottie | `spyder-feature-lottie` (s4.0.0.1.0.1.0) |  | 403.3×180 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682250526cf05f1944daa3f3_new.json |
| `/assets/pages/spyder-ad-spy/68220b448aa4cb6939da0c95_landing page.json` | lottie | `spyder-feature-lottie` (s4.0.0.1.0.2.0) |  | 403.3×180 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68220b448aa4cb6939da0c95_landing%20page.json |
| `/assets/pages/spyder-ad-spy/6823a697a0c46d8ee3c03b18_time_travel_lottie.json` | lottie | `spyder-feature-lottie` (s4.0.0.1.0.3.0) |  | 403.3×180 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6823a697a0c46d8ee3c03b18_time_travel_lottie.json |
| `/assets/pages/spyder-ad-spy/68220b4429bdc7d30078e6b7_share.json` | lottie | `spyder-feature-lottie` (s4.0.0.1.0.4.0) |  | 403.3×180 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68220b4429bdc7d30078e6b7_share.json |
| `/assets/pages/spyder-ad-spy/68220b44c6a9b4d97676ea73_notifications.json` | lottie | `spyder-feature-lottie` (s4.0.0.1.0.5.0) |  | 403.3×180 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68220b44c6a9b4d97676ea73_notifications.json |
| `/assets/pages/spyder-ad-spy/6679ef83dd47e5000aa10cd5_Wiza.svg` | img | `testimonial-logo-image` (s4.0.0.2.0.0.0.0) | 160×48 | 120×40 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6679ef83dd47e5000aa10cd5_Wiza.svg |
| `/assets/6679ebddfad13bb59b5a8f25_TS2G1MWKZ-US2G1MXHD-eb1db3a0ea43-192.avif` | img | `testimonial-author-image` (s4.0.0.2.0.0.0.2.0) | 192×192 | 48×48 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6679ebddfad13bb59b5a8f25_TS2G1MWKZ-US2G1MXHD-eb1db3a0ea43-192.avif |
| `/assets/pages/swipe-file/642db608b19bd600e001723a_awward-right.svg` | img | `testimonial-decoration.is-right` (s4.0.0.2.0.0.1) | 114×225 | 142.1×280.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/642db608b19bd600e001723a_awward-right.svg |
| `/assets/pages/swipe-file/642db6082db5f7803a7a121e_award-left.svg` | img | `testimonial-decoration` (s4.0.0.2.0.0.2) | 114×225 | 142.1×280.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/642db6082db5f7803a7a121e_award-left.svg |
| `/assets/pages/spyder-ad-spy/cta-spyder.mov` | video | `` (s5.0.0.0.1.0.0) | 1000×1000 3.36s | 880×880 | https://publicassets.foreplay.co/cta-spyder.mov |
| `/assets/682f93b469081ade4aadbbad_iso-spyder.webp` | img | `cta-block-icon-image` (s5.0.0.0.2.0) | 0×0 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f93b469081ade4aadbbad_iso-spyder.webp |

**Inline SVGs saved** (each distinct inline `<svg>` in page content):

- `/assets/pages/spyder-ad-spy/svg-svg-185ries.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/spyder-ad-spy/svg-svg-kn8jdt.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/spyder-ad-spy/svg-svg-2n663l.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/spyder-ad-spy/svg-svg-j4hkwa.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/spyder-ad-spy/svg-product-page-tab-svg-19vsi34.svg` — 24×24 in `product-page-tab-svg.w-embed`
- `/assets/pages/spyder-ad-spy/svg-product-page-tab-svg-1ljbnb3.svg` — 24×24 in `product-page-tab-svg.w-embed`
- `/assets/pages/spyder-ad-spy/svg-product-page-tab-svg-1gkfig0.svg` — 24×24 in `product-page-tab-svg.w-embed`
- `/assets/pages/spyder-ad-spy/svg-product-page-tab-svg-1srbybv.svg` — 24×24 in `product-page-tab-svg.w-embed`
- `/assets/pages/spyder-ad-spy/svg-product-page-tab-svg-avki79.svg` — 24×24 in `product-page-tab-svg.w-embed`
- `/assets/pages/spyder-ad-spy/svg-svg-bjw7ed.svg` — 0×0 in `svg.w-embed`
- `/assets/pages/spyder-ad-spy/svg-svg-wqicrt.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/spyder-ad-spy/svg-svg-1i4rn0n.svg` — 20×20 in `svg.w-embed`
- `/assets/pages/spyder-ad-spy/svg-svg-1lrvzzc.svg` — 24×24 in `svg.w-embed`

## Motion

### Webflow IX2 (from `Webflow.require("ix2").store.getState().ixData`, filtered to elements on this page outside nav/footer)

- **e-212** SCROLLING_IN_VIEW → GENERAL_CONTINUOUS_ACTION list `a-71` (Product / Hero Parallax) on `product-hero-animation-trigger` ×1; mq ["main","medium"]; config [{"continuousParameterGroupId":"a-71-p","smoothing":0,"startsEntering":false,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}]
- **e-225** MOUSE_OVER → GENERAL_START_ACTION list `a-76` (Spyder Lottie In) on `product-page-feature-block-new.spyder-block, product-page-feature-block-new.spyder-block, product-page-feature-block-new.spyder-block` ×6; mq ["main","medium","small","tiny"]; config {"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null}
- **e-226** MOUSE_OUT → GENERAL_START_ACTION list `a-77` (Spyder Lottie Out) on `product-page-feature-block-new.spyder-block, product-page-feature-block-new.spyder-block, product-page-feature-block-new.spyder-block` ×6; mq ["main","medium","small","tiny"]; config {"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null}

- `a-71` "Product / Hero Parallax"
  - continuous SCROLL_PROGRESS:
    - @0%: TRANSFORM_SCALE .product-hero-sticky {"xValue":1,"yValue":1,"locked":true} ‖ TRANSFORM_MOVE .product-hero-sticky {"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"} ‖ STYLE_OPACITY .product-hero-sticky {"value":1,"unit":""}
    - @100%: TRANSFORM_MOVE .product-hero-sticky {"yValue":-33,"xUnit":"PX","yUnit":"%","zUnit":"PX"} ease inOutCubic ‖ TRANSFORM_SCALE .product-hero-sticky {"xValue":0.75,"yValue":0.75,"locked":true} ‖ STYLE_OPACITY .product-hero-sticky {"value":0,"unit":""}
- `a-76` "Spyder Lottie In" (first group = initial state)
  - group 0: PLUGIN_LOTTIE .spyder-feature-lottie dur 4000 delay 0 ease linear {"value":0}
  - group 1: PLUGIN_LOTTIE .spyder-feature-lottie dur 4000 delay 0 ease easeInOut {"value":100}
- `a-77` "Spyder Lottie Out"
  - group 0: PLUGIN_LOTTIE .spyder-feature-lottie dur 4000 delay 0 ease ease {"value":0}

### Running Web Animations after load (`document.getAnimations()`, page content only)

- none

### Widgets / embeds detected

- s0.1.0.1.0.0.0 `div.code-video.w-embed` 
- s0.1.0.2.2 `div.product-hero-video.w-background-video.w-background-video-atom` {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F68338b3e839a771394bbc430_product-video-spyder-poster-00001.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
- s1.0.0.0.0.1 `div.code-style.w-embed` 
- s3.0.0.1.0 `div.product-page-tabs.w-tabs` {"data-current":"Real-Time Analysis","data-easing":"ease","data-duration-in":"300","data-duration-out":"100"}
- s3.0.0.1.0.0.0 `a.product-page-tab.spyder.w-inline-block.w-tab-link.w--current` {"data-w-tab":"Real-Time Analysis"}
- s3.0.0.1.0.0.1 `a.product-page-tab.spyder.w-inline-block.w-tab-link` {"data-w-tab":"Creative Tests"}
- s3.0.0.1.0.0.2 `a.product-page-tab.spyder.w-inline-block.w-tab-link` {"data-w-tab":"Landing Page Archive"}
- s3.0.0.1.0.0.3 `a.product-page-tab.spyder.w-inline-block.w-tab-link` {"data-w-tab":"Hook Export"}
- s3.0.0.1.0.0.4 `a.product-page-tab.spyder.w-inline-block.w-tab-link` {"data-w-tab":"Historical Timeline"}
- s3.0.0.1.0.1.0 `div.w-tab-pane.w--tab-active` {"data-w-tab":"Real-Time Analysis"}
- s3.0.0.1.0.1.1 `div.w-tab-pane` {"data-w-tab":"Creative Tests"}
- s3.0.0.1.0.1.2 `div.w-tab-pane` {"data-w-tab":"Landing Page Archive"}
- s3.0.0.1.0.1.3 `div.w-tab-pane` {"data-w-tab":"Hook Export"}
- s3.0.0.1.0.1.4 `div.w-tab-pane` {"data-w-tab":"Historical Timeline"}
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

New classes: `product-hero` `product-hero-animation-trigger` `product-hero-sticky` `product-hero-icon` `product-hero-icon-video` `product-hero-icon-image` `product-hero-content` `hero-text` `max-w-lg` `text-white-84` `product-hero-preview` `product-hero-preview-image` `product-hero-preview-underlay` `product-hero-video` `product-page-solution` `product-page-solution-grid` `static-product-page-solution-card` `static-product-page-solution-text` `static-before-wrapper` `static-product-page-image` `solution-after` `product-page-padding-y` `section-content-main` `product-page-tabs` `product-page-tabs-menu` `spyder` `product-page-tab` `product-page-tab-svg` `product-page-tab-icon` `product-page-tabs-content` `tabs-video-wrapper` `spyder-ui` `spyder-description` `spyder-description-content` `product-page-feature-grid-new` `product-page-feature-block-new` `spyder-block` `spyder-feature-lottie` `product-page-feature-content` `product-page-feature-text` `home-testimonial-wrapper` `testemonial-contents` `testimonial-logo-image` `text-quote` `testimonial-bio` `testimonial-author-image` `testimonial-avatar-text` `testimonial-decoration` `is-right` `negative-spacing-bottom` `cta` `cta-block` `cta-block-content` `flex-col-gap-2` `mobile-landscape-text-display-h4` `mobile-landscape-text-body-n` `flex-col-gap-3` `no-cc-required` `icon-20` `cta-block-animation` `cta-block-icon` `cta-block-icon-image` `faq` `faq-block-container` `faq-block` `faq-block_content` `faq-block_head` `faq-block_body` `faq-block_answer` `faq-rtb` `faq-block_icon` `faq-buttons` `ghost-icon-button` `icon-left`

```css
.old__section.black.cta { background-image: radial-gradient(circle farthest-side at 10% 100%,#10b98145,#3f8cf700 48%),radial-gradient(circle farthest-side at 90% 100%,#3f8cf778,#b331b900 66%),linear-gradient(to bottom,var(--black),var(--black)); padding-top: 5em; padding-bottom: 5em; }
.old__section.black.cta.brief { background-image: radial-gradient(circle farthest-side at 90% 100%,#10b98173,#b331b900 66%),linear-gradient(to bottom,var(--black),var(--black)); }
.old__section.black.cta.discovery { background-image: radial-gradient(circle farthest-side at 90% 100%,#7c3aed73,#b331b900 66%),linear-gradient(to bottom,var(--black),var(--black)); }
.h3.more-than-title.spyder { font-size: 16px; }
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
.tabs-video-wrapper { gap: 20px; flex-flow: column; padding-top: 20px; padding-bottom: 20px; display: flex; }
.image-61.spyder { width: 30px; }
.section-content-main { flex-flow: column; padding-top: 48px; display: block; }
.testimonial-author-image { border-radius: 5px; width: 48px; height: 48px; }
.product-page-tab { gap: 8px; opacity: 0.44; color: var(--alpha-0); text-align: center; background-color: rgba(0, 0, 0, 0); border-radius: 8px; flex-flow: row; justify-content: center; align-items: center; padding: 10px 20px; transition: 0.2s; display: flex; }
.product-page-tab:hover { opacity: 0.75; outline-offset: 0px; outline: rgb(255, 255, 255) 3px; }
.product-page-tab:active, .product-page-tab:focus { outline-offset: 0px; outline: rgb(255, 255, 255) 3px; }
.product-page-tab.w--current { opacity: 1; background-color: rgba(0, 0, 0, 0); }
.product-page-tab.spyder { flex-flow: column; justify-content: flex-start; align-items: center; }
.spyder-feature-lottie { height: 180px; margin-top: 0px; }
.spyder-ui { z-index: 1; border: 1px solid rgba(250, 250, 253, 0.13); border-radius: 15px; width: 100%; margin-left: auto; margin-right: auto; position: relative; }
.icon-20 { width: 20px; height: 20px; }
.icon-20.flip { transform: rotate(180deg); }
.button-icon-block.icon-left { z-index: 2; margin-right: -4px; }
.product-hero-content { gap: 28px; flex-flow: column; justify-content: flex-start; align-items: center; display: flex; }
.hero-text { gap: 16px; flex-flow: column; justify-content: flex-start; align-items: center; max-width: 900px; display: flex; }
.max-w-lg { max-width: 512px; }
.nav-badge-gradient.spyder { background-image: linear-gradient(rgba(237, 97, 90, 0), rgb(237, 97, 90) 70%); }
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
.product-page-solution-grid { gap: 16px; grid-template-rows: auto; grid-template-columns: 1fr 1fr; grid-auto-columns: 1fr; align-self: stretch; display: grid; }
.product-page-solution-card.solution-after { background-color: var(--_lens---background); box-shadow: none; color: var(--_lens---neutral-100); }
.product-page-padding-y { flex-flow: column; padding-top: 108px; padding-bottom: 108px; display: flex; overflow: hidden; }
.product-page-tab-icon, .product-page-tab-svg { width: 24px; height: 24px; }
.product-page-tabs-content { overflow: visible; }
.product-page-feature-text { gap: 8px; flex-flow: column; display: flex; }
.product-page-feature-content { flex: 1 1 0%; justify-content: flex-start; align-items: flex-end; padding: 24px; display: flex; }
.product-page-solution { gap: 36px; text-align: center; flex-flow: column; justify-content: flex-start; align-items: stretch; max-width: 940px; margin-left: auto; margin-right: auto; padding-top: 80px; padding-bottom: 80px; display: flex; }
.negative-spacing-bottom { height: 0px; margin-bottom: -80px; }
.spyder-description { gap: 40px; max-width: 720px; box-shadow: 0 0 0 1px var(--_lens---solid-700); border-radius: 32px; margin-left: auto; margin-right: auto; padding: 40px; display: flex; position: relative; overflow: hidden; }
.spyder-description-content { gap: 20px; text-align: center; flex-flow: column; flex: 1 1 0%; display: flex; }
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
.comparison-tabs-menu.spyder { grid-template-columns: 1fr 1fr 1fr 1fr 1fr; }
.comparison-product-tab.spyder { flex-flow: column; justify-content: flex-start; align-items: center; }
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
  .comparison-tabs-menu.spyder { flex-flow: wrap; grid-template-columns: 1fr 1fr 1fr; align-items: center; padding-left: 57px; padding-right: 57px; display: flex; }
}
@media screen and (max-width: 767px) {
  .home-testimonial-wrapper { padding-top: 80px; padding-bottom: 80px; }
  .text-quote { font-size: 1.2em; }
  .grid-13, .product-page-feature-grid-new { grid-template-columns: 1fr; }
  .product-page-tabs-menu { row-gap: 0px; border-radius: 10px; grid-template-columns: 1fr 1fr 1fr; width: 100%; }
  .product-page-tabs-menu.spyder { row-gap: 16px; grid-template-columns: 1fr 1fr; padding-left: 4px; padding-right: 4px; }
  .product-page-tab { border-radius: 8px; flex-flow: column; justify-content: flex-start; align-items: center; }
  .spyder-tab, .spyder-ui { border-radius: 8px; }
  .text-body-l.mobile-landscape-text-body-n { font-size: 1rem; line-height: 1.5rem; }
  .text-display-h3.mobile-landscape-text-display-h4 { font-size: 1.75rem; line-height: 2.25rem; }
  .faq { gap: 40px; padding-top: 80px; padding-bottom: 80px; }
  .cta-block { padding: 48px 40px 0px; }
  .product-hero-preview-image { width: 100%; margin-left: 0px; margin-right: 0px; }
  .product-hero-preview-underlay { display: none; }
  .product-page-solution-grid { grid-template-columns: 1fr; }
  .product-page-padding-y { padding-top: 80px; padding-bottom: 80px; overflow: hidden; }
  .product-page-solution { max-width: 480px; padding-top: 80px; padding-bottom: 64px; }
  .spyder-description { flex-flow: column; max-width: 480px; }
  .spyder-description-content { padding-left: 0px; }
  .product-hero-preview { width: 100%; margin-left: 0px; margin-right: 0px; }
  .product-hero { padding-top: 64px; }
  .product-hero-sticky { position: relative; top: 0px; }
  .product-hero-video { width: 77.7%; }
  .cta-block-icon { margin-top: 24px; }
  .cta-block-icon-image { margin-bottom: -64px; }
  .comparison-tabs-menu.spyder { row-gap: 16px; grid-template-columns: 1fr 1fr; padding-left: 4px; padding-right: 4px; }
}
@media screen and (max-width: 479px) {
  .old__section.black.cta { padding-top: 5em; padding-bottom: 5em; }
  .section-2-0.product-header-wrapper.spyder { padding-top: 85px; }
  .testimonial-logo-image { width: 96px; max-height: 40px; }
  .text-quote { font-size: 1em; }
  .testimonial-decoration { width: 40%; }
  .product-page-tabs-menu { grid-template-columns: 1fr; }
  .section-content-main { padding-top: 40px; }
  .testimonial-author-image { width: 40px; height: 40px; }
  .product-page-tab { flex-flow: column; }
  .product-page-tab.fireside { flex-flow: row; justify-content: center; align-items: center; }
  .spyder-ui { border-radius: 6px; }
  .product-hero-content { gap: 24px; padding-bottom: 24px; position: relative; }
  .hero-text { gap: 12px; }
  .faq { padding-top: 64px; padding-bottom: 80px; }
  .faq-buttons { flex-flow: column; align-items: stretch; }
  .cta-block { padding-top: 32px; padding-left: 32px; padding-right: 32px; }
  .cta-block-animation { width: auto; margin: -55% -115px -133px -100px; top: -25%; }
  .product-hero-preview-image { width: 100%; }
  .product-page-solution { gap: 32px; padding-top: 48px; padding-bottom: 32px; }
  .spyder-description { gap: 32px; border-radius: 16px; padding: 32px; }
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
