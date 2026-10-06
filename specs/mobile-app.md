Source: https://www.foreplay.co/mobile-app

# /mobile-app: Foreplay Mobile App - iOS & Android | Save Ads on the Go

Measured on 2026-10-06 with headless Chromium (Playwright 1.63) at 1440×900, 991×900 and 390×844, after a full scroll pass. The Navbar and Footer have the same DOM as the homepage, so reuse `Navbar.jsx` and `Footer.jsx` (CLONE_SPEC.md §1 and §8). Tokens, buttons and type classes are in CLONE_SPEC.md §0; anything shared between these pages is in `specs/_shared-pages.md`. **Copy policy:** short UI strings are verbatim, and long copy is given only as ‹copy: ~N chars, L lines @1440›. Assets are local paths under `public/` (`/assets/...`). Files that already existed in `public/assets` were reused rather than re-downloaded, which is why some paths point at other page folders or at the root. Blocks that are identical to the homepage (the final CTA `.home-cta`, the Chrome-extension card `.home-extension`, and the logo strip `.home-hero-bottom`) are collapsed to a single line, "uses <Component> from src/components". Their internals are not re-specced and their assets were not re-downloaded.

## Build notes (summary)

- **Structure:**
  - S1 hero `.product-hero.mobile-app-hero`: a 250×510 iPhone frame image with a Webflow bg-video inside it (227.5×490 at offset 11/10; `header-video-transcode.mp4`), the overline "MOBILE APP", the title "Creative inspiration wherever you go", and two `button-dark.button-secondary` store badges (App Store 131.7×46, Google Play 147.4×46, each with a 28px-tall SVG badge image). `canvas#product-hero-canvas` is display:none.
  - S2 `.mobile-app-main-features` (900 wide):
    - (a) a 900×500 video thumbnail card with a 100px/68px concentric play button, which opens a YouTube lightbox (`BRRwHdlXHQA`);
    - (b) the "Save content to Foreplay from your Phone" card, 900×596, with a MacBook sync background and an iPhone image;
    - (c) two `.left-right-section` rows (524/558-wide Webflow bg-videos with radius, plus text including app-icon chips).
  - The page ends after S2. There is no FAQ or CTA; the footer follows directly.
- **Reuse:** `BgVideo`, `Button` (`dark-secondary` with an image instead of a label), product hero shell (the a-71 parallax is active here: event e-213).
- **Motion:**
  - IX2 a-71 hero parallax (≥768).
  - The play button `.play-button-1` transitions `.2s`, and the feature cards transition `background-color .2s ease-in-out`.
  - IX2 e-122 "Nav Scroll Stroke 2" (a-47) targets an element that no longer exists on the page (w-id `14f0a132…`), so it does nothing; skip it.
- **Embeds:** YouTube lightbox. The customer.io forms handler script loads, but no form is rendered.

## Page meta (measured)

- Webflow page id `65255f1e81b80e99170742d1`. Title: `Foreplay Mobile App - iOS & Android | Save Ads on the Go`.
- Meta description: ~141 chars (not transcribed).
- Document height: 1440 → 4169, 991 → 4067, 390 → 4914. Body bg rgb(2, 3, 8).
- Navbar: same DOM as homepage (same node count/height; only the active-link state class differs) → reuse `Navbar.jsx`.
- Footer: same DOM as homepage (same node count/height) → reuse `Footer.jsx` (incl. calendar pop-up + exit-intent modal).
- Fonts loaded: Inter Display 600 normal, Inter 400 normal, Inter 600 normal, Inter 500 normal.

## Section map (DOM order)

Legend: each line is `tag.class — W×H @x,y` at 1440 (y relative to the section top), then `| 991:` and `| 390:` geometry, then non-default computed styles at 1440, then `Δ991{…}` / `Δ390{…}` listing only layout/typography values that differ from 1440. `hidden` = display:none or 0×0 at that width. Text: short UI strings verbatim in quotes; long copy as ‹copy: ~N chars, L lines @1440› (write stand-in copy of matching length). Classes prefixed `w-` (Webflow runtime) are dropped except meaningful widget classes.

### S1. `section#product-hero-section.section.relative`

y/height: 1440 72/940.5 · 991 72/940.5 · 390 72/1007.6

- `section#product-hero-section.section.relative` — 1440×940.5 @0,0 | 991: 991×940.5 @0,0 | 390: 390×1007.6 @0,0 · pos:relative
  - `canvas#product-hero-canvas.product-hero-canvas` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only)
  - `div.container` — 1440×940.5 @0,0 | 991: 991×940.5 @0,0 | 390: 390×1007.6 @0,0 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
    - `div.product-hero.mobile-app-hero` — 1360×940.5 @40,0 | 991: 927×940.5 @32,0 | 390: 342×1007.6 @24,0 · display:flex; dir:column; align:center; pad:10px 0px 30px 0px · Δ390{pad:24px 0px 30px 0px}
      - `div.product-hero-animation-trigger` — 1440×900 @0,-72 | 991: 991×900 @0,-72 | 390: 390×844 @0,-72 · pos:absolute [-72px 0px 112.5px 0px]; pe:none · ix2 w-id cc92a1ef-d552-fb81-fdd7-0cbcee7f43e0
      - `div.product-hero-sticky` — 900×900.5 @270,10 | 991: 900×900.5 @46,10 | 390: 342×953.6 @24,24 · display:flex; dir:column; align:center; pos:sticky [100px auto auto auto]; transform:matrix(1, 0, 0, 1, 0, 0) · Δ390{pos:relative; transform:none}
        - `div.mobile-phone-wrapper` — 720×574.5 @360,10 | 991: 720×574.5 @136,336 | 390: 342×541.6 @24,436 · display:flex; justify:center; align:center; pos:relative; pad:24px 0px 40px 0px; z:2 · Δ390{pad:24px 0px 0px 0px}
          - `div.div-block-253` — 250×510.5 @595,34 | 991: 250×510.5 @371,360 | 390: 253.5×517.6 @68,460 · display:flex; justify:center; align:center; pos:relative
            - `img.iphone` — 250×510.5 @595,34 | 991: 250×510.5 @371,360 | 390: 253.5×517.6 @68,460 · pos:relative; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/mobile-app/652562834976b49df57e27d2_Group 137.avif` natural 176×359 loading=eager alt "foreplay ad library software screenshot"
            - `div.background-video-9.w-background-video` — 227.5×490.1 @606,44 | 991: 227.5×490.1 @382,370 | 390: 230.7×496.9 @80,470 · pos:absolute [10.2031px 11.25px 10.2031px 11.25px]; border:1px solid rgb(19, 19, 19); radius:28px; overflow:hidden; z:1 · Δ390{radius:25.35px} · ASSET `/assets/pages/mobile-app/653fd29e710bbb2e92e66d1b_header-video-transcode.mp4`, `/assets/pages/mobile-app/653fd29e710bbb2e92e66d1b_header-video-transcode.webm`, `/assets/pages/mobile-app/653fd29e710bbb2e92e66d1b_header-video-poster-00001.jpg` · data {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653fd29e710bbb2e92e66d1b_header-video-poster-00001.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
              - `video#f4f6a6ba-1179-aa6d-a7fa-c67197e50fb8-video` — 225.5×488.1 @607,45 | 991: 225.5×488.1 @383,371 | 390: 228.7×494.9 @81,471 · pos:absolute [-488.078px -225.5px -488.078px -225.5px]; mar:488.078px 225.5px; bgimg:url(653fd29e710bbb2e92e66d1b_header-video-poster-00001.jpg); bgsize:cover; bgpos:50% 50%; overflow:clip; z:-100; fit:cover · Δ390{mar:494.922px 228.672px} · ASSET `/assets/pages/mobile-app/653fd29e710bbb2e92e66d1b_header-video-poster-00001.jpg`, `/assets/pages/mobile-app/653fd29e710bbb2e92e66d1b_header-video-transcode.mp4`, `/assets/pages/mobile-app/653fd29e710bbb2e92e66d1b_header-video-transcode.webm` · VIDEO {"srcs":["653fd29e710bbb2e92e66d1b_header-video-transcode.mp4","653fd29e710bbb2e92e66d1b_header-video-transcode.webm"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":332,"vh":720,"dur":12.3,"preload":"metadata"} · data {"data-wf-ignore":"true","data-object-fit":"cover"}
        - `div.product-hero-content` — 900×326 @270,585 | 991: 900×326 @46,10 | 390: 342×412 @24,24 · display:flex; dir:column; align:center; gap:28px · Δ390{gap:24px; pad:0px 0px 24px 0px; pos:relative}
          - `h1.text-overline.text-white-68` — 92.6×16 @674,585 | 991: 92.6×16 @449,10 | 390: 92.6×16 @149,24 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "MOBILE APP"
          - `div.hero-text` — 900×208 @270,629 | 991: 900×208 @46,54 | 390: 342×220 @24,64 · display:flex; dir:column; align:center; gap:16px; maxw:900px · Δ390{gap:12px}
            - `h2.text-display-h1.hero-title` — 900×136 @270,629 | 991: 900×136 @46,54 | 390: 342×96 @24,64 · bgimg:radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88)); bgsize:auto; bgpos:0% 0%; bgclip:text; font:Inter Display 60px/68px w600 ls-0.45px; color:rgba(255, 255, 255, 0.88); align-text:center; wrap-text:balance; fill:rgba(0, 0, 0, 0) · Δ390{font:38px/48px; ls:-0.285px} "Creative inspiration wherever you go" (2 lines)
            - `div.max-w-lg` — 512×56 @464,781 | 991: 512×56 @240,206 | 390: 342×112 @24,172 · maxw:512px
              - `p.text-body-l.text-white-84` — 512×56 @464,781 | 991: 512×56 @240,206 | 390: 342×112 @24,172 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center ‹copy: ~112 chars, 2 lines @1440›
          - `div.main-cta-buttons` — 291.1×46 @574,865 | 991: 291.1×46 @350,290 | 390: 342×104 @24,308 · display:flex; align:center; gap:12px; pos:relative; z:2 · Δ390{display:grid; cols:342px}
            - `a.button-dark.button-secondary` — 131.7×46 @574,865 | 991: 131.7×46 @350,290 | 390: 342×46 @24,308 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(9, 10, 14); border:1px solid rgb(36, 38, 46); radius:10px; z:5; transition:0.2s · href `https://apps.apple.com/ca/app/foreplay-ad-swipe-file/id6466097243` target=_blank
              - `div.button-text-block` — 113.7×28 @583,874 | 991: 113.7×28 @359,299 | 390: 113.7×28 @138,317 · pos:relative; pad:0px 6px; z:2
                - `img.marketplace-cta-image` — 101.7×28 @589,874 | 991: 101.7×28 @365,299 | 390: 101.7×28 @144,317 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/mobile-app/652560c5b07e1f8795380f3a_app-store.svg` natural 109×30 loading=lazy
            - `a.button-dark.button-secondary` — 147.4×46 @718,865 | 991: 147.4×46 @494,290 | 390: 342×46 @24,366 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(9, 10, 14); border:1px solid rgb(36, 38, 46); radius:10px; z:5; transition:0.2s · href `https://play.google.com/store/apps/details?id=co.foreplay.ForeplayMobile` target=_blank
              - `div.button-text-block` — 129.4×28 @727,874 | 991: 129.4×28 @503,299 | 390: 129.4×28 @130,375 · pos:relative; pad:0px 6px; z:2
                - `img.marketplace-cta-image` — 117.4×28 @733,874 | 991: 117.4×28 @509,299 | 390: 117.4×28 @136,375 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/mobile-app/652560c565e7688277a870bd_google-play.svg` natural 109×26 loading=lazy

### S2. `div.section`

y/height: 1440 1013/2304.5 · 991 1013/2030.5 · 390 1080/2127.5

- `div.product-page-padding-y` — 1440×2304.5 @0,0 | 991: 991×2030.5 @0,0 | 390: 390×2127.5 @0,0 · display:flex; dir:column; pad:108px 0px; overflow:hidden · Δ991{pad:96px 0px} · Δ390{pad:80px 0px}
  - `div.container.section-container` — 1344×2088.5 @48,108 | 991: 991×1838.5 @0,96 | 390: 390×1967.5 @0,80 · pad:0px 40px; maxw:1344px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
    - `div.mobile-app-main-features` — 900×2088.5 @270,108 | 991: 900×1838.5 @46,96 | 390: 342×1967.5 @24,80 · display:flex; dir:column; gap:64px; maxw:900px
      - `div.feature-block.mobile-app-video` — 900×500 @270,108 | 991: 900×350 @46,96 | 390: 342×200 @24,80 · display:flex; dir:column; justify:space-between; pos:relative; bg:rgba(255, 255, 255, 0.05); border:1px solid rgba(122, 123, 127, 0.25); radius:10px; overflow:hidden; z:1; transition:background-color 0.2s ease-in-out · Δ390{bgsize:auto 100%, auto} · ASSET `/assets/pages/mobile-app/64358e78515265dc29237a9e_After Foreplay graphic.webp`
        - `a.lightbox-link-9` — 898×498 @271,109 | 991: 898×348 @47,97 | 390: 340×198 @25,81 · pos:absolute [0px 0px 0px 0px]; maxw:100% · href `#` · aria "open lightbox"
          - `div.mobile-app-thumbnail` — 898×498 @271,109 | 991: 898×348 @47,97 | 390: 340×198 @25,81 · display:flex; justify:center; align:center; bgimg:url(653fd278493eeb4f1702fd75_Mobile-App-Thumbnail-Website.avif); bgsize:cover; bgpos:50% 50% · ASSET `/assets/pages/mobile-app/653fd278493eeb4f1702fd75_Mobile-App-Thumbnail-Website.avif`
            - `div.play-button-1` — 100×100 @670,308 | 991: 100×100 @446,221 | 390: 70×70 @160,145 · display:flex; justify:center; align:center; pad:15px; bg:rgba(0, 0, 0, 0.24); border:1px solid rgba(0, 0, 0, 0); radius:10000px; shadow:rgba(0, 0, 0, 0.17) 0px 2px 7px 1px; backdrop:blur(5px); transition:0.2s · Δ390{transform:matrix(0.7, 0, 0, 0.7, 0, 0)}
              - `div.play-button-2` — 68×68 @686,324 | 991: 68×68 @462,237 | 390: 47.6×47.6 @171,156 · display:flex; justify:center; align:center; bg:rgba(0, 0, 0, 0.22); border:1px solid rgba(0, 0, 0, 0.01); radius:100px; backdrop:blur(3px)
                - `img.play-button3` — 20×22.5 @712,346 | 991: 20×22.5 @487,259 | 390: 14×15.8 @189,172 · mar:0px 0px 0px 3px; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/mobile-app/64502d8b633f4d3ee4584b7a_play-small.svg` natural 8×9 loading=lazy
      - `div.macbook-sync-block-copy` — 900×596.5 @270,672 | 991: 900×596.5 @46,510 | 390: 342×427.5 @24,344 · display:flex; dir:column; justify:space-between; pos:relative; bg:rgba(255, 255, 255, 0.05); border:1px solid rgba(122, 123, 127, 0.25); radius:10px; overflow:hidden; z:1; transition:background-color 0.2s · Δ390{pad:16px}
        - `div.div-block-254` — 898×442.5 @271,673 | 991: 898×442.5 @47,511 | 390: 308×163.5 @41,361 · pad:25px 0px 25px 25px · Δ390{pad:0px 0px 25px 0px}
          - `img.image-101` — 192×392.5 @296,698 | 991: 192×392.5 @72,536 | 390: 67.8×138.5 @41,361 · pos:relative; maxw:100%; overflow:clip; z:1; fit:fill · IMG `/assets/pages/mobile-app/652990b64da0f365aef91633_iphone-sync.avif` natural 366×748 loading=lazy
        - `div.mobile-app-feature-content` — 898×152 @271,1115 | 991: 898×152 @47,953 | 390: 308×230 @41,524 · display:flex; dir:column; gap:10px; pos:relative; pad:25px; z:1 · Δ390{pad:0px}
          - `h3.text-display-h4` — 848×36 @296,1140 | 991: 848×36 @72,978 | 390: 308×108 @41,524 · font:Inter Display 28px/36px w600 ls-0.2px; color:rgb(255, 255, 255) · Δ390{align-text:center} "Save content to Foreplay from your Phone"
          - `div.max-w-lg` — 512×56 @296,1186 | 991: 512×56 @72,1024 | 390: 308×112 @41,642 · maxw:512px
            - `p.text-body-l` — 512×56 @296,1186 | 991: 512×56 @72,1024 | 390: 308×112 @41,642 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68) · Δ390{align-text:center} ‹copy: ~112 chars, 2 lines @1440›
        - `div.macbook-sync-holder` — 898×594.5 @271,673 | 991: 898×594.5 @47,511 | 390: 340×425.5 @25,345 · pos:absolute [0px 0px 0px 0px]; bgimg:linear-gradient(rgba(0, 0, 0, 0) 29%, rgb(0, 0, 0) 87%), url(652990f6bb35ac50f4d5d65f_MACBOOK-SYNC.avif); bgsize:auto, cover; bgpos:0px 0px, 100% 100%; bgrep:repeat, repeat; bgclip:border-box, border-box; overflow:hidden · Δ390{bgsize:auto, 100% auto} · ASSET `/assets/pages/mobile-app/652990f6bb35ac50f4d5d65f_MACBOOK-SYNC.avif`
      - `div.left-right-section` — 900×400 @270,1332 | 991: 900×350 @46,1170 | 390: 342×578 @24,835 · display:flex; align:center; gap:24px · Δ991{gap:40px} · Δ390{dir:column; align:start; gap:40px}
        - `div#w-node-a00644b0-3649-9e29-64e8-3b912e554036-170742d1.mobile-app-video-holder` — 524×400 @270,1332 | 991: 514.4×350 @46,1170 | 390: 342×350 @24,835 · display:flex; align:center
          - `div.video-feature-block.w-background-video` — 524×400 @270,1332 | 991: 514.4×350 @46,1170 | 390: 342×350 @24,835 · pos:relative; border:1px solid rgba(122, 123, 127, 0.25); radius:10px; overflow:hidden · ASSET `/assets/pages/mobile-app/653030fda3d7bc4941a03672_Swipe-File-Pic-transcode.mp4`, `/assets/pages/mobile-app/653030fda3d7bc4941a03672_Swipe-File-Pic-transcode.webm`, `/assets/pages/mobile-app/653030fda3d7bc4941a03672_Swipe-File-Pic-poster-00001.jpg` · data {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653030fda3d7bc4941a03672_Swipe-File-Pic-poster-00001.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
            - `video#a00644b0-3649-9e29-64e8-3b912e554037-video` — 522×398 @271,1333 | 991: 512.4×348 @47,1171 | 390: 340×348 @25,836 · pos:absolute [-398px -522px -398px -522px]; mar:398px 522px; bgimg:url(653030fda3d7bc4941a03672_Swipe-File-Pic-poster-00001.jpg); bgsize:cover; bgpos:50% 50%; overflow:clip; z:-100; fit:cover · Δ991{mar:348px 512.422px} · Δ390{mar:348px 340px} · ASSET `/assets/pages/mobile-app/653030fda3d7bc4941a03672_Swipe-File-Pic-poster-00001.jpg`, `/assets/pages/mobile-app/653030fda3d7bc4941a03672_Swipe-File-Pic-transcode.mp4`, `/assets/pages/mobile-app/653030fda3d7bc4941a03672_Swipe-File-Pic-transcode.webm` · VIDEO {"srcs":["653030fda3d7bc4941a03672_Swipe-File-Pic-transcode.mp4","653030fda3d7bc4941a03672_Swipe-File-Pic-transcode.webm"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":720,"vh":720,"dur":6,"preload":"metadata"} · data {"data-wf-ignore":"true","data-object-fit":"cover"}
        - `div#w-node-a00644b0-3649-9e29-64e8-3b912e554038-170742d1.left-right-section-content` — 352×216 @818,1424 | 991: 345.6×216 @600,1237 | 390: 342×188 @24,1225 · display:flex; dir:column; justify:center; align:flex-start; gap:32px · Δ390{gap:24px}
          - `div.section-head.is-align-left` — 352×216 @818,1424 | 991: 345.6×216 @600,1237 | 390: 342×188 @24,1225 · display:flex; dir:column; align:flex-start; gap:12px; maxw:720px · Δ390{gap:8px}
            - `div.app-icon-wrapper` — 120×40 @818,1424 | 991: 120×40 @600,1237 | 390: 112×36 @24,1225 · display:flex; gap:10px; mar:0px 0px 8px 0px
              - `img.app-logo` — 40×40 @818,1424 | 991: 40×40 @600,1237 | 390: 36×36 @24,1225 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/mobile-app/652ff16b9b6781c56e020aa0_ios-camera-icon.avif` natural 121×121 loading=lazy
              - `img.app-to-app-arrows` — 20×40 @868,1424 | 991: 20×40 @650,1237 | 390: 20×36 @70,1225 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/mobile-app/652ff16b558d6fef7811591a_ap-to-app-arrow.svg` natural 17×7 loading=lazy
              - `img.app-logo` — 40×40 @898,1424 | 991: 40×40 @680,1237 | 390: 36×36 @100,1225 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/mobile-app/67b10c2cd2812e66e1c2af76_product-swipe-file.webp` natural 252×252 loading=lazy
            - `h2.text-display-h3.mobile-landscape-text-display-h4` — 352×88 @818,1484 | 991: 345.6×88 @600,1297 | 390: 342×72 @24,1277 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(255, 255, 255); wrap-text:balance · Δ390{font:28px/36px; ls:-0.202222px} "Snap a Photo and save it to Swipe File" (2 lines)
            - `div.section-head_paragraph` — 352×56 @818,1584 | 991: 345.6×56 @600,1397 | 390: 342×56 @24,1357 · maxw:512px
              - `p.text-body-l` — 352×56 @818,1584 | 991: 345.6×56 @600,1397 | 390: 342×56 @24,1357 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); wrap-text:pretty ‹copy: ~68 chars, 2 lines @1440›
      - `div.left-right-section` — 900×400 @270,1796 | 991: 900×350 @46,1584 | 390: 342×570 @24,1477 · display:flex; align:center; gap:24px · Δ991{gap:40px} · Δ390{dir:column; align:start; gap:40px}
        - `div#w-node-e90ee398-3443-4b87-135f-fdeb750dcea7-170742d1.left-right-section-content` — 317.6×244 @270,1874 | 991: 311.8×244 @46,1637 | 390: 342×180 @24,1867 · display:flex; dir:column; justify:center; align:flex-start; gap:32px · Δ390{gap:24px}
          - `div.section-head.is-align-left` — 317.6×244 @270,1874 | 991: 311.8×244 @46,1637 | 390: 342×180 @24,1867 · display:flex; dir:column; align:flex-start; gap:12px; maxw:720px · Δ390{gap:8px}
            - `div.app-icon-wrapper` — 40×40 @270,1874 | 991: 40×40 @46,1637 | 390: 36×36 @24,1867 · display:flex; gap:10px; mar:0px 0px 8px 0px
              - `img.app-logo` — 40×40 @270,1874 | 991: 40×40 @46,1637 | 390: 36×36 @24,1867 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/mobile-app/67b10c250778c8023e8536e9_product-discovery.webp` natural 252×252 loading=lazy
            - `h2.text-display-h3.mobile-landscape-text-display-h4` — 317.6×88 @270,1934 | 991: 311.8×88 @46,1697 | 390: 277.7×36 @24,1919 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(255, 255, 255); wrap-text:balance · Δ390{font:28px/36px; ls:-0.202222px} "Browse millions of ads" (2 lines)
            - `div.section-head_paragraph` — 317.6×84 @270,2034 | 991: 311.8×84 @46,1797 | 390: 342×84 @24,1963 · maxw:512px
              - `p.text-body-l` — 317.6×84 @270,2034 | 991: 311.8×84 @46,1797 | 390: 342×84 @24,1963 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); wrap-text:pretty ‹copy: ~87 chars, 3 lines @1440›
        - `div#w-node-e90ee398-3443-4b87-135f-fdeb750dcea5-170742d1.mobile-app-video-holder` — 558.4×400 @612,1796 | 991: 548.2×350 @397,1584 | 390: 342×350 @24,1477 · display:flex; align:center
          - `div#w-node-c8c7e875-08a1-3550-a650-4e72fda0d69a-170742d1.video-feature-block.w-background-video` — 558.4×400 @612,1796 | 991: 548.2×350 @397,1584 | 390: 342×350 @24,1477 · pos:relative; border:1px solid rgba(122, 123, 127, 0.25); radius:10px; overflow:hidden · ASSET `/assets/pages/mobile-app/653009a60733cf5f9aa796e7_discovery-test-render-transcode.mp4`, `/assets/pages/mobile-app/653009a60733cf5f9aa796e7_discovery-test-render-transcode.webm`, `/assets/pages/mobile-app/653009a60733cf5f9aa796e7_discovery-test-render-poster-00001.jpg` · data {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653009a60733cf5f9aa796e7_discovery-test-render-poster-00001.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
            - `video#c8c7e875-08a1-3550-a650-4e72fda0d69a-video` — 556.4×398 @613,1797 | 991: 546.2×348 @398,1585 | 390: 340×348 @25,1478 · pos:absolute [-398px -556.359px -398px -556.359px]; mar:398px 556.359px; bgimg:url(653009a60733cf5f9aa796e7_discovery-test-render-poster-00001.jpg); bgsize:cover; bgpos:50% 50%; overflow:clip; z:-100; fit:cover · Δ991{mar:348px 546.156px} · Δ390{mar:348px 340px} · ASSET `/assets/pages/mobile-app/653009a60733cf5f9aa796e7_discovery-test-render-poster-00001.jpg`, `/assets/pages/mobile-app/653009a60733cf5f9aa796e7_discovery-test-render-transcode.mp4`, `/assets/pages/mobile-app/653009a60733cf5f9aa796e7_discovery-test-render-transcode.webm` · VIDEO {"srcs":["653009a60733cf5f9aa796e7_discovery-test-render-transcode.mp4","653009a60733cf5f9aa796e7_discovery-test-render-transcode.webm"],"poster":"","autoplay":true,"loop":true,"muted":true,"playsinline":true,"controls":false,"vw":720,"vh":720,"dur":8,"preload":"metadata"} · data {"data-wf-ignore":"true","data-object-fit":"cover"}
  - `div.container.section-container` — 1344×0 @48,2196 | 991: 991×0 @0,1934 | 390: 390×0 @0,2047 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}

### S3. `div.negative-spacing-bottom`

y/height: 1440 3317/0 · 991 3043/0 · 390 3207/0

- `div.negative-spacing-bottom` — 1440×0 @0,0 | 991: 991×0 @0,0 | 390: 390×0 @0,0 · mar:0px 0px -80px 0px

## Typography roles (computed at 1440; sizes at 991/390 from the same nodes)

| font (family size/lh weight ls) | color | n | @991 | @390 | elements (sample) | example |
|---|---|---|---|---|---|---|
| Inter 18px/28px w400 ls-0.259999px | rgba(255, 255, 255, 0.68) | 4 | 18px/28px | 18px/28px | `p.text-body-l.text-white-84` `p.text-body-l` | ~112 chars |
| Inter Display 36px/44px w600 ls-0.26px | rgb(255, 255, 255) | 2 | 36px/44px | 28px/36px | `h2.text-display-h3.mobile-landscape-text-display-h4` | Snap a Photo and save it to Swipe File |
| Inter 12px/16px w550 ls2px uppercase | rgba(255, 255, 255, 0.36) | 1 | 12px/16px | 12px/16px | `h1.text-overline.text-white-68` | MOBILE APP |
| Inter Display 60px/68px w600 ls-0.45px | rgba(255, 255, 255, 0.88) | 1 | 60px/68px | 38px/48px | `h2.text-display-h1.hero-title` | Creative inspiration wherever you go |
| Inter Display 28px/36px w600 ls-0.2px | rgb(255, 255, 255) | 1 | 28px/36px | 28px/36px | `h3.text-display-h4` | Save content to Foreplay from your Phone |

## Colors, gradients, radii, shadows in use (non-text, 1440)

**background-color**
- `rgb(9, 10, 14)` — `a.button-dark.button-secondary`
- `rgba(255, 255, 255, 0.05)` — `div.feature-block.mobile-app-video`, `div.macbook-sync-block-copy`
- `rgba(0, 0, 0, 0.24)` — `div.play-button-1`
- `rgba(0, 0, 0, 0.22)` — `div.play-button-2`

**background-image**
- `url(653fd29e710bbb2e92e66d1b_header-video-poster-00001.jpg)` — `video#f4f6a6ba-1179-aa6d-a7fa-c67197e50fb8-video`
- `radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88))` — `h2.text-display-h1.hero-title`
- `url(653fd278493eeb4f1702fd75_Mobile-App-Thumbnail-Website.avif)` — `div.mobile-app-thumbnail`
- `linear-gradient(rgba(0, 0, 0, 0) 29%, rgb(0, 0, 0) 87%), url(652990f6bb35ac50f4d5d65f_MACBOOK-SYNC.avif)` — `div.macbook-sync-holder`
- `url(653030fda3d7bc4941a03672_Swipe-File-Pic-poster-00001.jpg)` — `video#a00644b0-3649-9e29-64e8-3b912e554037-video`
- `url(653009a60733cf5f9aa796e7_discovery-test-render-poster-00001.jpg)` — `video#c8c7e875-08a1-3550-a650-4e72fda0d69a-video`

**border**
- `1px solid rgb(19, 19, 19)` — `div.background-video-9.w-background-video`
- `1px solid rgb(36, 38, 46)` — `a.button-dark.button-secondary`
- `1px solid rgba(122, 123, 127, 0.25)` — `div.feature-block.mobile-app-video`, `div.macbook-sync-block-copy`, `div.video-feature-block.w-background-video`, `div#w-node-c8c7e875-08a1-3550-a650-4e72fda0d69a-170742d1.video-feature-block.w-background-video`
- `1px solid rgba(0, 0, 0, 0)` — `div.play-button-1`
- `1px solid rgba(0, 0, 0, 0.01)` — `div.play-button-2`

**radius**
- `28px` — `div.background-video-9.w-background-video`
- `10px` — `a.button-dark.button-secondary`, `div.feature-block.mobile-app-video`, `div.macbook-sync-block-copy`, `div.video-feature-block.w-background-video`, `div#w-node-c8c7e875-08a1-3550-a650-4e72fda0d69a-170742d1.video-feature-block.w-background-video`
- `10000px` — `div.play-button-1`
- `100px` — `div.play-button-2`

**box-shadow**
- `rgba(0, 0, 0, 0.17) 0px 2px 7px 1px` — `div.play-button-1`

**backdrop**
- `blur(5px)` — `div.play-button-1`
- `blur(3px)` — `div.play-button-2`

**transition**
- `0.2s` — `a.button-dark.button-secondary`, `div.play-button-1`
- `background-color 0.2s ease-in-out` — `div.feature-block.mobile-app-video`
- `background-color 0.2s` — `div.macbook-sync-block-copy`

## Assets (local path ↔ element)

| local file | kind | element | natural | displayed @1440 | source URL |
|---|---|---|---|---|---|
| `/assets/pages/mobile-app/652562834976b49df57e27d2_Group 137.avif` | img | `iphone` (s0.1.0.1.0.0.0) | 176×359 | 250×510.5 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/652562834976b49df57e27d2_Group%20137.avif |
| `/assets/pages/mobile-app/653fd29e710bbb2e92e66d1b_header-video-transcode.mp4` | bgvideo | `background-video-9.w-background-video.w-background-video-atom` (s0.1.0.1.0.0.1) |  | 227.5×490.1 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653fd29e710bbb2e92e66d1b_header-video-transcode.mp4 |
| `/assets/pages/mobile-app/653fd29e710bbb2e92e66d1b_header-video-transcode.webm` | bgvideo | `background-video-9.w-background-video.w-background-video-atom` (s0.1.0.1.0.0.1) |  | 227.5×490.1 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653fd29e710bbb2e92e66d1b_header-video-transcode.webm |
| `/assets/pages/mobile-app/653fd29e710bbb2e92e66d1b_header-video-poster-00001.jpg` | poster | `background-video-9.w-background-video.w-background-video-atom` (s0.1.0.1.0.0.1) |  |  | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653fd29e710bbb2e92e66d1b_header-video-poster-00001.jpg |
| `/assets/pages/mobile-app/653fd29e710bbb2e92e66d1b_header-video-poster-00001.jpg` | bg | `` (s0.1.0.1.0.0.1.0) |  | 225.5×488.1 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653fd29e710bbb2e92e66d1b_header-video-poster-00001.jpg |
| `/assets/pages/mobile-app/653fd29e710bbb2e92e66d1b_header-video-transcode.mp4` | video | `` (s0.1.0.1.0.0.1.0) | 332×720 12.30s | 225.5×488.1 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653fd29e710bbb2e92e66d1b_header-video-transcode.mp4 |
| `/assets/pages/mobile-app/653fd29e710bbb2e92e66d1b_header-video-transcode.webm` | video | `` (s0.1.0.1.0.0.1.0) | 332×720 12.30s | 225.5×488.1 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653fd29e710bbb2e92e66d1b_header-video-transcode.webm |
| `/assets/pages/mobile-app/652560c5b07e1f8795380f3a_app-store.svg` | img | `marketplace-cta-image` (s0.1.0.1.1.2.0.0.0) | 109×30 | 101.7×28 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/652560c5b07e1f8795380f3a_app-store.svg |
| `/assets/pages/mobile-app/652560c565e7688277a870bd_google-play.svg` | img | `marketplace-cta-image` (s0.1.0.1.1.2.1.0.0) | 109×26 | 117.4×28 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/652560c565e7688277a870bd_google-play.svg |
| `/assets/pages/mobile-app/653fd278493eeb4f1702fd75_Mobile-App-Thumbnail-Website.avif` | bg | `mobile-app-thumbnail` (s1.0.0.0.0.0.0) |  | 898×498 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653fd278493eeb4f1702fd75_Mobile-App-Thumbnail-Website.avif |
| `/assets/pages/mobile-app/64502d8b633f4d3ee4584b7a_play-small.svg` | img | `play-button3` (s1.0.0.0.0.0.0.0.0.0) | 8×9 | 20×22.5 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64502d8b633f4d3ee4584b7a_play-small.svg |
| `/assets/pages/mobile-app/652990b64da0f365aef91633_iphone-sync.avif` | img | `image-101` (s1.0.0.0.1.0.0) | 366×748 | 192×392.5 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/652990b64da0f365aef91633_iphone-sync.avif |
| `/assets/pages/mobile-app/652990f6bb35ac50f4d5d65f_MACBOOK-SYNC.avif` | bg | `macbook-sync-holder` (s1.0.0.0.1.2) |  | 898×594.5 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/652990f6bb35ac50f4d5d65f_MACBOOK-SYNC.avif |
| `/assets/pages/mobile-app/653030fda3d7bc4941a03672_Swipe-File-Pic-transcode.mp4` | bgvideo | `video-feature-block.w-background-video.w-background-video-atom` (s1.0.0.0.2.0.0) |  | 524×400 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653030fda3d7bc4941a03672_Swipe-File-Pic-transcode.mp4 |
| `/assets/pages/mobile-app/653030fda3d7bc4941a03672_Swipe-File-Pic-transcode.webm` | bgvideo | `video-feature-block.w-background-video.w-background-video-atom` (s1.0.0.0.2.0.0) |  | 524×400 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653030fda3d7bc4941a03672_Swipe-File-Pic-transcode.webm |
| `/assets/pages/mobile-app/653030fda3d7bc4941a03672_Swipe-File-Pic-poster-00001.jpg` | poster | `video-feature-block.w-background-video.w-background-video-atom` (s1.0.0.0.2.0.0) |  |  | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653030fda3d7bc4941a03672_Swipe-File-Pic-poster-00001.jpg |
| `/assets/pages/mobile-app/653030fda3d7bc4941a03672_Swipe-File-Pic-poster-00001.jpg` | bg | `` (s1.0.0.0.2.0.0.0) |  | 522×398 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653030fda3d7bc4941a03672_Swipe-File-Pic-poster-00001.jpg |
| `/assets/pages/mobile-app/653030fda3d7bc4941a03672_Swipe-File-Pic-transcode.mp4` | video | `` (s1.0.0.0.2.0.0.0) | 720×720 6.00s | 522×398 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653030fda3d7bc4941a03672_Swipe-File-Pic-transcode.mp4 |
| `/assets/pages/mobile-app/653030fda3d7bc4941a03672_Swipe-File-Pic-transcode.webm` | video | `` (s1.0.0.0.2.0.0.0) | 720×720 6.00s | 522×398 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653030fda3d7bc4941a03672_Swipe-File-Pic-transcode.webm |
| `/assets/pages/mobile-app/652ff16b9b6781c56e020aa0_ios-camera-icon.avif` | img | `app-logo` (s1.0.0.0.2.1.0.0.0) | 121×121 | 40×40 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/652ff16b9b6781c56e020aa0_ios-camera-icon.avif |
| `/assets/pages/mobile-app/652ff16b558d6fef7811591a_ap-to-app-arrow.svg` | img | `app-to-app-arrows` (s1.0.0.0.2.1.0.0.1) | 17×7 | 20×40 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/652ff16b558d6fef7811591a_ap-to-app-arrow.svg |
| `/assets/pages/mobile-app/67b10c2cd2812e66e1c2af76_product-swipe-file.webp` | img | `app-logo` (s1.0.0.0.2.1.0.0.2) | 252×252 | 40×40 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67b10c2cd2812e66e1c2af76_product-swipe-file.webp |
| `/assets/pages/mobile-app/67b10c250778c8023e8536e9_product-discovery.webp` | img | `app-logo` (s1.0.0.0.3.0.0.0.0) | 252×252 | 40×40 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67b10c250778c8023e8536e9_product-discovery.webp |
| `/assets/pages/mobile-app/653009a60733cf5f9aa796e7_discovery-test-render-transcode.mp4` | bgvideo | `video-feature-block.w-background-video.w-background-video-atom` (s1.0.0.0.3.1.0) |  | 558.4×400 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653009a60733cf5f9aa796e7_discovery-test-render-transcode.mp4 |
| `/assets/pages/mobile-app/653009a60733cf5f9aa796e7_discovery-test-render-transcode.webm` | bgvideo | `video-feature-block.w-background-video.w-background-video-atom` (s1.0.0.0.3.1.0) |  | 558.4×400 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653009a60733cf5f9aa796e7_discovery-test-render-transcode.webm |
| `/assets/pages/mobile-app/653009a60733cf5f9aa796e7_discovery-test-render-poster-00001.jpg` | poster | `video-feature-block.w-background-video.w-background-video-atom` (s1.0.0.0.3.1.0) |  |  | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653009a60733cf5f9aa796e7_discovery-test-render-poster-00001.jpg |
| `/assets/pages/mobile-app/653009a60733cf5f9aa796e7_discovery-test-render-poster-00001.jpg` | bg | `` (s1.0.0.0.3.1.0.0) |  | 556.4×398 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653009a60733cf5f9aa796e7_discovery-test-render-poster-00001.jpg |
| `/assets/pages/mobile-app/653009a60733cf5f9aa796e7_discovery-test-render-transcode.mp4` | video | `` (s1.0.0.0.3.1.0.0) | 720×720 8.00s | 556.4×398 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653009a60733cf5f9aa796e7_discovery-test-render-transcode.mp4 |
| `/assets/pages/mobile-app/653009a60733cf5f9aa796e7_discovery-test-render-transcode.webm` | video | `` (s1.0.0.0.3.1.0.0) | 720×720 8.00s | 556.4×398 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653009a60733cf5f9aa796e7_discovery-test-render-transcode.webm |
| `/assets/pages/mobile-app/64358e78515265dc29237a9e_After Foreplay graphic.webp` | bg | `feature-block.mobile-app-video` (s1.0.0.0.0) |  | 342×200 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64358e78515265dc29237a9e_After%20Foreplay%20graphic.webp |

## Motion

### Webflow IX2 (from `Webflow.require("ix2").store.getState().ixData`, filtered to elements on this page outside nav/footer)

- **e-122** PAGE_SCROLL → GENERAL_CONTINUOUS_ACTION list `a-47` (Nav Scroll Stroke 2) on `body` ×1; mq ["main","medium","small","tiny"]; config [{"continuousParameterGroupId":"a-47-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}]
- **e-213** SCROLLING_IN_VIEW → GENERAL_CONTINUOUS_ACTION list `a-71` (Product / Hero Parallax) on `product-hero-animation-trigger` ×1; mq ["main","medium"]; config [{"continuousParameterGroupId":"a-71-p","smoothing":0,"startsEntering":false,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}]

- `a-47` "Nav Scroll Stroke 2"
  - continuous SCROLL_PROGRESS:
    - @0%: STYLE_BORDER  {"globalSwatchId":"","rValue":122,"bValue":127,"gValue":123,"aValue":0}
    - @5%: STYLE_BORDER  {"globalSwatchId":"8ab657b2","rValue":122,"bValue":127,"gValue":123,"aValue":0.25}
    - @100%: STYLE_BORDER  {"globalSwatchId":""}
- `a-71` "Product / Hero Parallax"
  - continuous SCROLL_PROGRESS:
    - @0%: TRANSFORM_SCALE .product-hero-sticky {"xValue":1,"yValue":1,"locked":true} ‖ TRANSFORM_MOVE .product-hero-sticky {"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"} ‖ STYLE_OPACITY .product-hero-sticky {"value":1,"unit":""}
    - @100%: TRANSFORM_MOVE .product-hero-sticky {"yValue":-33,"xUnit":"PX","yUnit":"%","zUnit":"PX"} ease inOutCubic ‖ TRANSFORM_SCALE .product-hero-sticky {"xValue":0.75,"yValue":0.75,"locked":true} ‖ STYLE_OPACITY .product-hero-sticky {"value":0,"unit":""}

### Running Web Animations after load (`document.getAnimations()`, page content only)

- none

### Widgets / embeds detected

- s0.1.0.1.0.0.1 `div.background-video-9.w-background-video.w-background-video-atom` {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653fd29e710bbb2e92e66d1b_header-video-poster-00001.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
- s1.0.0.0.0.0 `a.lightbox-link-9.w-inline-block.w-lightbox` 
- s1.0.0.0.2.0.0 `div.video-feature-block.w-background-video.w-background-video-atom` {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653030fda3d7bc4941a03672_Swipe-File-Pic-poster-00001.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
- s1.0.0.0.3.1.0 `div.video-feature-block.w-background-video.w-background-video-atom` {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653009a60733cf5f9aa796e7_discovery-test-render-poster-00001.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}

## CSS rules for classes not used on the homepage (verbatim from `foreplay-3-0.shared.850e08b99.min.css`)

New classes: `product-hero-canvas` `product-hero` `mobile-app-hero` `product-hero-animation-trigger` `product-hero-sticky` `mobile-phone-wrapper` `div-block-253` `iphone` `background-video-9` `product-hero-content` `hero-text` `max-w-lg` `text-white-84` `marketplace-cta-image` `product-page-padding-y` `mobile-app-main-features` `feature-block` `mobile-app-video` `lightbox-link-9` `mobile-app-thumbnail` `play-button-1` `play-button-2` `play-button3` `macbook-sync-block-copy` `div-block-254` `image-101` `mobile-app-feature-content` `macbook-sync-holder` `left-right-section` `mobile-app-video-holder` `video-feature-block` `left-right-section-content` `app-icon-wrapper` `app-logo` `app-to-app-arrows` `mobile-landscape-text-display-h4` `negative-spacing-bottom`

```css
.feature-block { z-index: 1; border: 1px solid var(--grey-stroke); background-color: var(--card); border-radius: 10px; flex-direction: column; justify-content: space-between; align-items: stretch; padding: 1.5em; text-decoration: none; transition: background-color 0.2s; display: flex; position: relative; }
.feature-block:hover { background-color: rgba(255, 255, 255, 0.07); }
.feature-block.mini { gap: 16px 0px; flex-direction: row; grid-template-rows: auto; grid-template-columns: 1.5fr 1fr; grid-auto-columns: 1fr; align-items: center; height: 100%; transition-timing-function: ease-in-out; display: grid; }
.feature-block.after { border-style: none; padding: 0px; overflow: hidden; }
.feature-block.falling-items-2 { background-color: rgb(251, 251, 251); padding: 0px; overflow: hidden; }
.feature-block.capture-genius { padding-bottom: 0px; }
.feature-block.after-swipe { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6447112751a15cd17b76e60e_Swipe-After.webp"), linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)); background-position: 50% center, 0px 0px; background-repeat: no-repeat, repeat; background-size: cover, auto; border-style: none; padding: 0px; overflow: hidden; }
.feature-block.swipe-before { background-color: rgb(251, 251, 251); padding-top: 0px; padding-left: 0px; padding-right: 0px; overflow: hidden; }
.feature-block.home-falling-mobile { background-color: rgb(251, 251, 251); padding-top: 0px; padding-left: 0px; padding-right: 0px; display: none; overflow: hidden; }
.feature-block.mobile-app-video { border-style: solid; height: 500px; margin-bottom: 0px; padding: 0px; overflow: hidden; }
.play-button-1 { backdrop-filter: blur(5px); cursor: pointer; background-color: rgba(0, 0, 0, 0.24); border: 1px solid rgba(0, 0, 0, 0); border-radius: 10000px; justify-content: center; align-items: center; width: 100px; height: 100px; padding: 15px; transition: 0.2s; display: flex; box-shadow: rgba(0, 0, 0, 0.17) 0px 2px 7px 1px; }
.play-button-1:hover { padding: 5px; }
.play-button-2 { backdrop-filter: blur(3px); background-color: rgba(0, 0, 0, 0.22); border: 1px solid rgba(0, 0, 0, 0.01); border-radius: 100px; justify-content: center; align-items: center; width: 100%; height: 100%; display: flex; }
.play-button3 { width: 20px; margin-left: 3px; }
.lightbox-link-9 { position: absolute; inset: 0%; }
.iphone { width: 250px; margin-top: 0px; margin-right: 0px; position: relative; }
.div-block-253 { justify-content: center; align-items: center; display: flex; position: relative; }
.background-video-9 { z-index: 1; border: 1px solid rgb(19, 19, 19); border-radius: 28px; width: 91%; height: 96%; position: absolute; }
.mobile-phone-wrapper { z-index: 2; justify-content: center; align-items: center; width: 80%; margin-left: auto; margin-right: auto; padding-top: 24px; padding-bottom: 40px; display: flex; position: relative; }
.image-101 { z-index: 1; width: 22%; position: relative; }
.macbook-sync-holder { background-image: linear-gradient(rgba(0, 0, 0, 0) 29%, rgb(0, 0, 0) 87%), url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/652990f6bb35ac50f4d5d65f_MACBOOK-SYNC.avif"); background-position: 0px 0px, 100% 100%; background-size: auto, cover; position: absolute; inset: 0%; overflow: hidden; }
.div-block-254 { padding-top: 25px; padding-bottom: 25px; padding-left: 25px; }
.app-logo { width: 40px; margin-bottom: 0px; margin-right: 0px; }
.app-icon-wrapper { gap: 10px; margin-bottom: 8px; display: flex; }
.app-to-app-arrows { width: 20px; margin-bottom: 0px; margin-right: 0px; }
.mobile-app-thumbnail { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/653fd278493eeb4f1702fd75_Mobile-App-Thumbnail-Website.avif"); background-position: 50% center; background-size: cover; justify-content: center; align-items: center; width: 100%; height: 100%; display: flex; }
.video-feature-block { border: 1px solid rgba(122, 123, 127, 0.25); border-radius: 10px; width: 100%; height: 400px; margin-left: 0px; margin-right: 0px; }
.product-hero-content { gap: 28px; flex-flow: column; justify-content: flex-start; align-items: center; display: flex; }
.hero-text { gap: 16px; flex-flow: column; justify-content: flex-start; align-items: center; max-width: 900px; display: flex; }
.max-w-lg { max-width: 512px; }
.product-hero-canvas { width: 0px; height: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0%; }
.product-hero-animation-trigger { pointer-events: none; height: 100vh; position: absolute; inset: -72px 0% auto; }
.product-page-padding-y { flex-flow: column; padding-top: 108px; padding-bottom: 108px; display: flex; overflow: hidden; }
.left-right-section { gap: 24px; grid-template-rows: auto; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-auto-columns: 1fr; place-items: center; display: flex; }
.left-right-section-content { gap: 32px; flex-flow: column; justify-content: center; align-items: flex-start; display: flex; }
.negative-spacing-bottom { height: 0px; margin-bottom: -80px; }
.product-hero { text-align: center; flex-flow: column; justify-content: flex-start; align-items: center; padding-top: 10px; padding-bottom: 0px; display: flex; }
.product-hero.mobile-app-hero { padding-bottom: 30px; }
.product-hero-sticky { flex-flow: column; justify-content: flex-start; align-items: center; display: flex; position: sticky; top: 100px; }
.mobile-app-feature-content { z-index: 1; gap: 10px; flex-flow: column; padding: 25px; display: flex; position: relative; }
.mobile-app-main-features { gap: 64px; flex-flow: column; max-width: 900px; margin-left: auto; margin-right: auto; display: flex; }
.mobile-app-video-holder { justify-content: flex-start; align-items: center; width: 100%; display: flex; }
.macbook-sync-block-copy { z-index: 1; border: 1px solid var(--grey-stroke); background-color: var(--card); border-radius: 10px; flex-direction: column; justify-content: space-between; align-items: stretch; text-decoration: none; transition: background-color 0.2s; display: flex; position: relative; overflow: hidden; }
.macbook-sync-block-copy:hover { background-color: rgba(255, 255, 255, 0.07); }
.marketplace-cta-image { height: 28px; }
.comparison-hero.mobile-app-hero { padding-bottom: 30px; }
.bounties-hero.mobile-app-hero { padding-bottom: 30px; }
@media screen and (min-width: 1280px) {
  .feature-block.after, .feature-block.after-swipe, .feature-block.mobile-app-video { transition-timing-function: ease-in-out; }
}
@media screen and (max-width: 991px) {
  .feature-block.after { min-height: 600px; }
  .feature-block.falling-items-2 { min-height: 500px; display: none; }
  .feature-block.after-swipe, .feature-block.swipe-before { min-height: 500px; }
  .feature-block.home-falling-mobile { min-height: 500px; display: block; }
  .feature-block.mobile-app-video { height: 350px; }
  .mobile-phone-wrapper { order: 1; }
  .video-feature-block { height: 350px; }
  .product-hero-canvas, .comparison-tr-icon { display: none; }
  .product-page-padding-y { padding-top: 96px; padding-bottom: 96px; }
  .left-right-section { gap: 40px; display: flex; }
}
@media screen and (max-width: 767px) {
  .feature-block.after { min-height: 450px; }
  .feature-block.falling-items-2, .feature-block.after-swipe, .feature-block.swipe-before, .feature-block.home-falling-mobile { min-height: 400px; }
  .feature-block.mobile-app-video { height: 300px; }
  .iphone { width: 200px; }
  .mobile-phone-wrapper { padding-bottom: 0px; }
  .macbook-sync-holder { background-image: linear-gradient(rgba(0, 0, 0, 0) 15%, rgb(0, 0, 0) 52%), url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/652990f6bb35ac50f4d5d65f_MACBOOK-SYNC.avif"); background-position: 0px 0px, 100% 0px; background-repeat: repeat, no-repeat; background-size: auto, 100% auto; }
  .div-block-254 { padding-top: 0px; padding-left: 0px; }
  .app-logo { width: 36px; }
  .text-display-h3.mobile-landscape-text-display-h4 { font-size: 1.75rem; line-height: 2.25rem; }
  .product-page-padding-y { padding-top: 80px; padding-bottom: 80px; overflow: hidden; }
  .left-right-section { gap: 24px; flex-flow: column; grid-template-rows: auto auto; grid-template-columns: 1fr; align-items: start; }
  .product-hero { padding-top: 64px; }
  .product-hero-sticky { position: relative; top: 0px; }
}
@media screen and (max-width: 479px) {
  .feature-block.mini { grid-template-columns: 1.5fr; }
  .feature-block.after { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64358e78515265dc29237a9e_After%20Foreplay%20graphic.webp"), linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)); background-position: 50% center, 0px 0px; background-size: auto 100%, auto; min-height: 300px; }
  .feature-block.falling-items-2 { min-height: 300px; }
  .feature-block.after-swipe { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6447112751a15cd17b76e60e_Swipe-After.webp"), linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)); background-position: 50% 100%, 0px 0px; min-height: 300px; }
  .feature-block.swipe-before, .feature-block.home-falling-mobile { min-height: 300px; }
  .feature-block.mobile-app-video { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64358e78515265dc29237a9e_After%20Foreplay%20graphic.webp"), linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)); background-position: 50% center, 0px 0px; background-size: auto 100%, auto; height: 200px; min-height: auto; }
  .play-button-1 { transform: scale(0.7); }
  .iphone { width: 65vw; }
  .background-video-9 { border-radius: 6.5vw; }
  .mobile-phone-wrapper { width: 100%; }
  .macbook-sync-holder { background-image: linear-gradient(rgba(0, 0, 0, 0) 23%, rgb(0, 0, 0) 46%), url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/652990f6bb35ac50f4d5d65f_MACBOOK-SYNC.avif"); background-position: 0px 0px, 100% 0px; background-repeat: repeat, no-repeat; background-size: auto, 100% auto; }
  .product-hero-content { gap: 24px; padding-bottom: 24px; position: relative; }
  .hero-text { gap: 12px; }
  .left-right-section { gap: 40px; }
  .left-right-section-content { gap: 24px; }
  .product-hero { padding-top: 24px; padding-bottom: 24px; }
  .product-hero-sticky { position: relative; top: 0px; }
  .mobile-app-feature-content { text-align: center; padding: 0px; }
  .mobile-app-video-holder { padding-left: 0px; padding-right: 0px; }
  .macbook-sync-block-copy { padding: 1em; }
  .marketplace-cta-image { height: 28px; }
}
```


## Caveats

- Third-party embeds (YouTube lightbox, Cal.com, Senja, Wistia) are noted but their internals were not measured.
- Hover/focus/active values come from the verbatim CSS rules above, plus the homepage spec for shared classes. They were not captured by hovering.
- `y` values are offsets inside each section at that width. Geometry for JS-cloned nodes (marquee clones) is only comparable for the original items.
