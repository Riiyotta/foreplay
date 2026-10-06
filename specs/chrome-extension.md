Source: https://www.foreplay.co/chrome-extension

# /chrome-extension: How to: Foreplay Chrome Extension & Mobile Saving

Measured on 2026-10-06 with headless Chromium (Playwright 1.63) at 1440×900, 991×900 and 390×844, after a full scroll pass. The Navbar and Footer have the same DOM as the homepage, so reuse `Navbar.jsx` and `Footer.jsx` (CLONE_SPEC.md §1 and §8). Tokens, buttons and type classes are in CLONE_SPEC.md §0; anything shared between these pages is in `specs/_shared-pages.md`. **Copy policy:** short UI strings are verbatim, and long copy is given only as ‹copy: ~N chars, L lines @1440›. Assets are local paths under `public/` (`/assets/...`). Files that already existed in `public/assets` were reused rather than re-downloaded, which is why some paths point at other page folders or at the root. Blocks that are identical to the homepage (the final CTA `.home-cta`, the Chrome-extension card `.home-extension`, and the logo strip `.home-hero-bottom`) are collapsed to a single line, "uses <Component> from src/components". Their internals are not re-specced and their assets were not re-downloaded.

## Build notes (summary)

- **This is a legacy-design page**, not the Lens design system. Everything below the shared Navbar is bespoke:
  - S1 `.sticky-pin`: an absolute (top 70, right ~43) hint "Click the [puzzle] icon and make sure to pin the Foreplay icon." with a 40px Lottie pointer at opacity .5.
  - S2: a 5px #3a6ffb bar.
  - S3 `.ce-section`: black (#000) bg, padding 50/100, container `.container-2-0` max 1200 with padding 0 50px. It contains:
    - the Foreplay logo (150×41.5);
    - a two-line h1 "Save ads on [Chrome pill]" / "or your [Phone pill] NEW". The **h1 uses fluid type of 3.5vw** (50.4px @1440, 34.685 @991, 13.65 @390), weight 500. The pills are `a.ce-chrome` with radius 1000px and bg rgba(255,255,255,.15);
    - step card "1 Using the Chrome Extension": a 1100×691 card, bg rgba(255,255,255,.05), 1px border rgba(122,123,127,.25), radius 15. It holds a 300px exploded dropdown illustration made of 5 SVG images with callouts, plus a supported-platforms row (5 links, `filter: saturate(0)` → colour on hover);
    - two split cards "2 Save from Instagram Mobile" and "3 Save from TikTok Mobile", each with a 194×363 phone screenshot and 46px-tall `.ce-button` links ("Connect Your Instagram", "iOS App", "Android").
- **Fonts:** the `h2.ce-h2` uses **Circular 300** (16/16, colour #fafafd). This page loads `CircularXX-Regular.otf` as weight 300. The file already exists at `/assets/pages/contest/fonts/64220781c8751ee2fb742f5e_CircularXX-Regular.otf`; reuse it.
- **Reuse:** only Navbar and Footer. The hero sections and buttons are not the shared `Button`.
- **Motion:** links and buttons transition `.2s`. The feature cards transition `background-color .2s` (hover rules are in the CSS block below). The Lottie hint loops (`66f1cbd9515e8a7e0e9f9048_h8rBjGm2UJ.json`). There is no IX2 on this page's content.
- **Embeds:** none. "Connect Your Instagram" is `href="#"`.

## Page meta (measured)

- Webflow page id `66f1b53bf2787598213d79b3`. Title: `How to: Foreplay Chrome Extension & Mobile Saving`.
- Meta description: ~65 chars (not transcribed).
- Document height: 1440 → 2609, 991 → 2649, 390 → 3339. Body bg rgb(2, 3, 8).
- Navbar: same DOM as homepage (same node count/height; only the active-link state class differs) → reuse `Navbar.jsx`.
- Footer: same DOM as homepage (same node count/height) → reuse `Footer.jsx` (incl. calendar pop-up + exit-intent modal).
- Fonts loaded: Inter Display 600 normal, Inter 400 normal, Inter 600 normal, Inter 500 normal, Circular 300 normal.

## Section map (DOM order)

Legend: each line is `tag.class — W×H @x,y` at 1440 (y relative to the section top), then `| 991:` and `| 390:` geometry, then non-default computed styles at 1440, then `Δ991{…}` / `Δ390{…}` listing only layout/typography values that differ from 1440. `hidden` = display:none or 0×0 at that width. Text: short UI strings verbatim in quotes; long copy as ‹copy: ~N chars, L lines @1440› (write stand-in copy of matching length). Classes prefixed `w-` (Webflow runtime) are dropped except meaningful widget classes.

### S1. `div.sticky-pin`

y/height: 1440 70/108.9 · 991 70/108.9 · 390 70/108.9

- `div.sticky-pin` — 228.1×108.9 @1169,0 | 991: 228.1×108.9 @733,0 | 390: 228.1×108.9 @150,0 · pos:absolute [70px 43.1875px 721.125px 1168.67px]; pad:20px 0px 0px 0px; z:1
  - `div.sticky-pin-section` — 228.1×88.9 @1169,20 | 991: 228.1×88.9 @733,20 | 390: 228.1×88.9 @150,20 · display:flex; dir:column; align:center
    - `div.lottie-animation-9` — 40×46.9 @1263,20 | 991: 40×46.9 @827,20 | 390: 40×46.9 @244,20 · opacity:0.5; transform:matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1) · ASSET `/assets/pages/chrome-extension/66f1cbd9515e8a7e0e9f9048_h8rBjGm2UJ.json` · LOTTIE {"src":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/66f1cbd9515e8a7e0e9f9048_h8rBjGm2UJ.json","loop":"1","autoplay":"1","dir":"1","renderer":"svg","dur":"0","ix2":"0"} · data {"data-animation-type":"lottie","data-src":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/66f1cbd9515e8a7e0e9f9048_h8rBjGm2UJ.json","data-loop":"1","data-direction":"1","data-autoplay":"1","data-is-ix2-target":"0","data-renderer":"svg","data-default-duration":"1.6","data-duration":"0","data-loading":"eager"} · ix2 w-id 1941becf-ba2b-d40c-5b99-c45018e5ec36 · (Lottie: children are lottie-web runtime SVG, not measured)
    - `div.pin-line` — 228.1×21 @1169,67 | 991: 228.1×21 @733,67 | 390: 228.1×21 @150,67 · display:flex; justify:center; gap:5px
      - `div.text-block-94` — 56.3×21 @1169,67 | 991: 56.3×21 @733,67 | 390: 56.3×21 @150,67 · font:Inter 14px/21px w400 ls-0.18px; color:rgba(255, 255, 255, 0.8) "Click the"
      - `img.image-152` — 20×20 @1230,67 | 991: 20×20 @794,67 | 390: 20×20 @211,67 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/66f1c918609c422dda8ead67_extension-puzzle.svg` natural 20×20 loading=lazy
      - `div.text-block-94` — 141.9×21 @1255,67 | 991: 141.9×21 @819,67 | 390: 141.9×21 @236,67 · font:Inter 14px/21px w400 ls-0.18px; color:rgba(255, 255, 255, 0.8) "icon and make sure to"
    - `div.pin-line` — 163.8×21 @1201,88 | 991: 163.8×21 @765,88 | 390: 163.8×21 @182,88 · display:flex; justify:center; gap:5px
      - `div.text-block-94` — 103.1×21 @1201,88 | 991: 103.1×21 @765,88 | 390: 103.1×21 @182,88 · font:Inter 14px/21px w400 ls-0.18px; color:rgba(255, 255, 255, 0.8) "pin the Foreplay"
      - `img.image-152` — 20×20 @1309,88 | 991: 20×20 @873,88 | 390: 20×20 @290,88 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/6471025f55598689d5324cf5_foreplay-white-icon-logo.svg` natural 52×51 loading=lazy
      - `div.text-block-94` — 30.6×21 @1334,88 | 991: 30.6×21 @898,88 | 390: 30.6×21 @315,88 · font:Inter 14px/21px w400 ls-0.18px; color:rgba(255, 255, 255, 0.8) "icon."

### S2. `div.div-block-313`

y/height: 1440 72/5 · 991 72/5 · 390 72/5

- `div.div-block-313` — 1440×5 @0,0 | 991: 991×5 @0,0 | 390: 390×5 @0,0 · bg:rgb(58, 111, 251)

### S3. `div.ce-section`

y/height: 1440 77/1600.4 · 991 77/1467.8 · 390 77/1475.1

- `div.ce-section` — 1440×1600.4 @0,0 | 991: 991×1467.8 @0,0 | 390: 390×1475.1 @0,0 · pos:relative; pad:50px 0px 100px 0px; bg:rgb(0, 0, 0); overflow:hidden · Δ390{pad:75px 0px}
  - `div.container-2-0` — 1200×1450.4 @120,50 | 991: 991×1317.8 @0,50 | 390: 390×1325.1 @0,75 · pos:relative; pad:0px 50px; mar:0px 120px; maxw:1200px; z:1 · Δ991{mar:0px} · Δ390{pad:0px 15.5938px; mar:0px}
    - `div.chrome-extension-header` — 1100×265.7 @170,50 | 991: 891×211.4 @50,50 | 390: 358.8×138.7 @16,75 · display:flex; dir:column; justify:center; align:flex-start; gap:11.52px · Δ991{gap:7.928px} · Δ390{gap:3.12px}
      - `a.link-block-19` — 150×41.5 @170,50 | 991: 150×41.5 @50,50 | 390: 150×41.5 @16,75 · mar:0px 0px 50px 0px; maxw:100% · href `/`
        - `img.image-153` — 150×41.5 @170,50 | 991: 150×41.5 @50,50 | 390: 150×41.5 @16,75 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/64764a288a2848bea7d423ed_Foreplay-logo.webp` natural 318×88 loading=lazy
      - `div.ec-h1-line` — 583×75.6 @170,153 | 991: 407×52 @50,149 | 390: 171.7×20.5 @16,170 · display:flex; gap:12px
        - `h1.ce-h1` — 289.7×75.6 @170,153 | 991: 198.8×52 @50,149 | 390: 77×20.5 @16,170 · font:Inter 50.4px/75.6px w500 ls-0.18px; color:rgb(250, 250, 253); align-text:center · Δ991{font:34.685px/52.0275px} · Δ390{font:13.65px/20.475px} "Save ads on"
        - `a.ce-chrome` — 281.3×75.6 @472,153 | 991: 196.3×52 @261,149 | 390: 82.7×20.5 @105,170 · display:flex; justify:center; align:center; gap:10px; pos:relative; pad:10.08px 21.6px 10.08px 10.08px; maxw:100%; bg:rgba(255, 255, 255, 0.15); radius:1000px; transition:0.2s · Δ991{pad:6.937px 14.865px 6.937px 6.937px} · Δ390{pad:2.73px 5.85px 2.73px 2.73px} · href `#chrome`
          - `img.image-147` — 50.4×50.4 @482,166 | 991: 34.7×34.7 @268,158 | 390: 13.6×13.6 @107,173 · maxw:100%; aself:center; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/64944e2428c1fae0b340fded_Google_Chrome_icon_(February_2022).svg.avif` natural 360×360 loading=lazy alt "google chrome icon"
          - `h1.ce-h1.chrome` — 189.2×50.4 @542,166 | 991: 129.8×34.7 @312,158 | 390: 50.5×13.7 @131,173 · font:Inter 50.4px/50.4px w500 ls-0.18px; color:rgb(250, 250, 253); align-text:center · Δ991{font:34.685px/34.685px} · Δ390{font:13.65px/13.65px} "Chrome"
      - `div.ec-h1-line` — 424.9×75.6 @170,240 | 991: 298.5×52 @50,209 | 390: 129.5×20.5 @16,193 · display:flex; gap:12px
        - `h1.ce-h1` — 169.1×75.6 @170,240 | 991: 116×52 @50,209 | 390: 44.9×20.5 @16,193 · font:Inter 50.4px/75.6px w500 ls-0.18px; color:rgb(250, 250, 253); align-text:center · Δ991{font:34.685px/52.0275px} · Δ390{font:13.65px/20.475px} "or your"
        - `a.ce-chrome` — 243.8×75.6 @351,240 | 991: 170.6×52 @178,209 | 390: 72.6×20.5 @72,193 · display:flex; justify:center; align:center; gap:10px; pos:relative; pad:10.08px 21.6px 10.08px 10.08px; maxw:100%; bg:rgba(255, 255, 255, 0.15); radius:1000px; transition:0.2s · Δ991{pad:6.937px 14.865px 6.937px 6.937px} · Δ390{pad:2.73px 5.85px 2.73px 2.73px} · href `#phone`
          - `img.image-147` — 50.4×50.4 @361,253 | 991: 34.7×34.7 @185,218 | 390: 13.6×13.6 @75,197 · maxw:100%; aself:center; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/66f1ba0bf37ee6dab2caf166_calling.avif` natural 160×160 loading=lazy
          - `h1.ce-h1.chrome` — 151.7×50.4 @422,253 | 991: 104.1×34.7 @230,218 | 390: 40.4×13.7 @99,197 · font:Inter 50.4px/50.4px w500 ls-0.18px; color:rgb(250, 250, 253); align-text:center · Δ991{font:34.685px/34.685px} · Δ390{font:13.65px/13.65px} "Phone"
          - `img.image-148` — 57.6×27.4 @544,233 | 991: 39.6×18.9 @314,204 | 390: 15.6×7.4 @131,191 · pos:absolute [-7.2px -7.2px 55.3594px 193.375px]; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/66f1b7d42b7a3844659d944f_new-tag.svg` natural 42×20 loading=lazy
    - `div.feature-block-wrapper` — 1100×1134.7 @170,366 | 991: 891×1056.4 @50,311 | 390: 358.8×1136.5 @16,264 · mar:50px 0px 0px 0px
      - `div#chrome.ce-feature-block.chrome` — 1100×691.5 @170,366 | 991: 891×691.5 @50,311 | 390: 358.8×712.5 @16,264 · display:flex; dir:column; justify:space-between; align:center; pos:relative; pad:24px; bg:rgba(255, 255, 255, 0.05); border:1px solid rgba(122, 123, 127, 0.25); radius:15px; z:1; transition:background-color 0.2s
        - `div.ce-subheading-wrapper` — 1050×25 @195,391 | 991: 841×25 @75,336 | 390: 308.8×25 @41,289 · display:flex; align:center; gap:10px; pos:relative; z:1
          - `div.text-block-93` — 25×25 @195,391 | 991: 25×25 @75,336 | 390: 25×25 @41,289 · display:flex; justify:center; align:center; bg:rgb(58, 111, 251); radius:4px; font:Inter 16px/16px w400 ls-0.18px; color:rgb(250, 250, 253); align-text:center "1" (2 lines)
          - `h2.ce-h2` — 196.1×16 @230,395 | 991: 196.1×16 @110,341 | 390: 196.1×16 @76,293 · font:Circular 16px/16px w300 ls-0.18px; color:rgb(250, 250, 253) "Using the Chrome Extension"
        - `div.ce-explainer-1` — 300×579.5 @570,416 | 991: 300×579.5 @346,361 | 390: 300×579.5 @45,314 · pad:50px 0px
          - `div.ce-button-explainer` — 300×479.5 @570,466 | 991: 300×479.5 @346,411 | 390: 300×479.5 @45,364 · display:flex; dir:column; gap:10px; pos:relative; maxw:300px
            - `img.ce-save-button` — 300×34.3 @570,466 | 991: 300×34.3 @346,411 | 390: 300×34.3 @45,364 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/66f1beb915bb1e05d141155d_save-button.svg` natural 358×41 loading=lazy
            - `img` — 300×325.1 @570,510 | 991: 300×325.1 @346,456 | 390: 300×325.1 @45,408 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/66f1bf3fd36995d78f4e364f_main-dropdown.svg` natural 358×388 loading=lazy
            - `img.ce-callout._3` — 300×100 @645,845 | 991: 300×100 @421,791 | 390: 300×100 @120,743 · pos:relative [0px -75px 0px 75px]; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/66f1c161ba5704e4258daad1_arrow-keys.svg` natural 403×103 loading=lazy
            - `img.ce-callout._2` — 205.6×70 @874,538 | 991: 205.6×70 @650,483 | 390: 205.6×70 @349,436 · pos:absolute [71.9062px -210px 337.562px 304.438px]; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/66f1c0ce22e21a1d953a5279_create-new.svg` natural 232×79 loading=lazy
            - `img.ce-callout` — 174.5×70 @390,466 | 991: 174.5×70 @166,411 | 390: 174.5×70 @-135,364 · pos:absolute [0px 305.453px 409.469px -180px]; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/66f1c00d7a7961149767ea3d_search.svg` natural 197×79 loading=lazy
        - `div.supported-platforms` — 833.2×37 @303,995 | 991: 833.2×37 @79,941 | 390: 472.7×58 @-41,893 · display:flex; align:center; gap:10px; pad:5px 5px 5px 13px; bg:rgba(255, 255, 255, 0.05); radius:8px
          - `div.text-block-94` — 137.2×21 @316,1003 | 991: 137.2×21 @92,949 | 390: 68.4×42 @-28,901 · font:Inter 14px/21px w400 ls-0.18px; color:rgba(255, 255, 255, 0.8) "Supported Platforms:"
          - `a.ce-platform-links` — 148.3×26.4 @464,1000 | 991: 148.3×26.4 @239,946 | 390: 73.4×48 @50,898 · display:flex; align:center; gap:5px; pad:5px 7px 5px 5px; maxw:100%; bg:rgba(255, 255, 255, 0); border:1px solid rgba(255, 255, 255, 0); radius:6px; filter:saturate(0); transition:0.2s · href `https://www.facebook.com/ads/library/` target=_blank
            - `img.image-149` — 15×14.4 @470,1006 | 991: 15×14.4 @245,952 | 390: 15×14.4 @56,915 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/642ca4c09d050a2be842fee0_fb.svg` natural 27×26 loading=lazy
            - `div.platform-name` — 114.3×12 @490,1008 | 991: 114.3×12 @265,953 | 390: 54.4×36 @76,904 · font:Inter 12px/12px w400 ls-0.18px; color:rgba(255, 255, 255, 0.8) "Facebook Ad Library"
          - `a.ce-platform-links` — 89×27 @622,1000 | 991: 89×27 @397,946 | 390: 74×27 @133,909 · display:flex; align:center; gap:5px; pad:5px 7px 5px 5px; maxw:100%; bg:rgba(255, 255, 255, 0); border:1px solid rgba(255, 255, 255, 0); radius:6px; filter:saturate(0); transition:0.2s · href `https://www.instagram.com/` target=_blank
            - `img.image-149` — 15×15 @628,1006 | 991: 15×15 @403,952 | 390: 15×15 @139,915 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/642ca4c12f8f5f73d94780dd_instagram.svg` natural 25×25 loading=lazy
            - `div.platform-name` — 55×12 @648,1008 | 991: 55×12 @423,953 | 390: 55×12 @159,916 · font:Inter 12px/12px w400 ls-0.18px; color:rgba(255, 255, 255, 0.8) "Instagram"
          - …3 more `a.ce-platform-links` siblings with the same structure (5 total):
            - [3] 129.7×26.9 @721,1000 — img 62a64767a8f8d8bbe124a326_tiktok-icon.svg, "TikTok Ad Library"
            - [4] 140×27 @861,1000 — img 664e52e8d13ae48e8b3788d0_contest-linkedin.svg, "LinkedIn Ad Library"
            - [5] 121×27 @1011,1000 — img 664e52e820acdb847c1534e2_contest-youtube.svg, "YouTube Shorts"
      - `div#phone.ce-feature-split` — 1100×413.2 @170,1087 | 991: 891×334.9 @50,1033 | 390: 358.8×394 @16,1006 · display:grid; cols:535px 535px; rows:413.188px; gap:30px; mar:30px 0px 0px 0px · Δ991{cols:430.5px 430.5px} · Δ390{cols:173.984px 154.828px}
        - `div.ce-feature-block.split` — 535×413.2 @170,1087 | 991: 430.5×334.9 @50,1033 | 390: 174×394 @16,1006 · display:flex; justify:space-between; gap:20px; pos:relative; pad:24px; bg:rgba(255, 255, 255, 0.05); border:1px solid rgba(122, 123, 127, 0.25); radius:15px; z:1; transition:background-color 0.2s
          - `div.div-block-312` — 271×363.2 @195,1112 | 991: 208.3×284.9 @75,1058 | 390: 104×344 @41,1031 · display:flex; dir:column
            - `div.ce-subheading-wrapper` — 271×25 @195,1112 | 991: 208.3×32 @75,1058 | 390: 104×48 @41,1031 · display:flex; align:center; gap:10px; pos:relative; z:1
              - `div.text-block-93` — 25×25 @195,1112 | 991: 22.5×25 @75,1061 | 390: 10.7×25 @41,1043 · display:flex; justify:center; align:center; bg:rgb(58, 111, 251); radius:4px; font:Inter 16px/16px w400 ls-0.18px; color:rgb(250, 250, 253); align-text:center "2" (2 lines)
              - `h2.ce-h2` — 195.3×16 @230,1117 | 991: 175.8×32 @108,1058 | 390: 83.3×48 @61,1031 · font:Circular 16px/16px w300 ls-0.18px; color:rgb(250, 250, 253) "Save from Instagram Mobile"
            - `div.ce-split-explaination` — 271×338.2 @195,1137 | 991: 208.3×252.9 @75,1090 | 390: 104×296 @41,1079 · display:flex; dir:column; justify:flex-end; gap:10px; flex:1 1 0%
              - `div.text-block-94` — 271×63 @195,1356 | 991: 208.3×84 @75,1203 | 390: 104×168 @41,1103 · font:Inter 14px/21px w400 ls-0.18px; color:rgba(255, 255, 255, 0.8) ‹copy: ~102 chars, 3 lines @1440›
              - `a.ce-button` — 271×46 @195,1429 | 991: 208.3×46 @75,1297 | 390: 104×94 @41,1281 · display:flex; justify:center; align:center; gap:10px; pad:10px 0px; maxw:100%; bg:rgba(255, 255, 255, 0.1); border:1px solid rgba(255, 255, 255, 0.1); radius:8px; transition:0.2s · href `#`
                - `img.image-150` — 20×20 @235,1442 | 991: 20×20 @84,1310 | 390: 20×20 @42,1318 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/647662134e4be7ea6b1ba257_instagram-logo.webp` natural 98×98 loading=lazy
                - `div` — 160.4×24 @265,1440 | 991: 160.4×24 @114,1308 | 390: 72×72 @72,1292 · font:Inter 14.4px/24px w400 ls-0.18px; color:rgb(250, 250, 253) "Connect Your Instagram"
          - `img.image-151` — 194×363.2 @486,1112 | 991: 152.2×284.9 @303,1058 | 390: 49.6×344 @165,1031 · maxw:100%; radius:8px; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/66f1c522add8a0bd054f0a4f_ig-save-example.avif` natural 438×820 loading=lazy
        - `div.ce-feature-block.split` — 535×413.2 @735,1087 | 991: 430.5×334.9 @511,1033 | 390: 154.8×394 @220,1006 · display:flex; justify:space-between; gap:20px; pos:relative; pad:24px; bg:rgba(255, 255, 255, 0.05); border:1px solid rgba(122, 123, 127, 0.25); radius:15px; z:1; transition:background-color 0.2s
          - `div.div-block-312` — 271×363.2 @760,1112 | 991: 208.3×284.9 @536,1058 | 390: 83.7×344 @245,1031 · display:flex; dir:column
            - `div.ce-subheading-wrapper` — 271×25 @760,1112 | 991: 208.3×25 @536,1058 | 390: 83.7×64 @245,1031 · display:flex; align:center; gap:10px; pos:relative; z:1
              - `div.text-block-93` — 25×25 @760,1112 | 991: 25×25 @536,1058 | 390: 10×25 @245,1051 · display:flex; justify:center; align:center; bg:rgb(58, 111, 251); radius:4px; font:Inter 16px/16px w400 ls-0.18px; color:rgb(250, 250, 253); align-text:center "3" (2 lines)
              - `h2.ce-h2` — 170.2×16 @795,1117 | 991: 170.2×16 @571,1062 | 390: 63.7×64 @265,1031 · font:Circular 16px/16px w300 ls-0.18px; color:rgb(250, 250, 253) "Save from TikTok Mobile"
            - `div.ce-split-explaination` — 271×338.2 @760,1137 | 991: 208.3×259.9 @536,1083 | 390: 83.7×280 @245,1095 · display:flex; dir:column; justify:flex-end; gap:10px; flex:1 1 0%
              - `div.text-block-94` — 271×63 @760,1300 | 991: 208.3×63 @536,1168 | 390: 83.7×168 @245,1095 · font:Inter 14px/21px w400 ls-0.18px; color:rgba(255, 255, 255, 0.8) ‹copy: ~83 chars, 3 lines @1440›
              - `a.ce-button` — 271×46 @760,1373 | 991: 208.3×46 @536,1241 | 390: 83.7×46 @245,1273 · display:flex; justify:center; align:center; gap:10px; pad:10px 0px; maxw:100%; bg:rgba(255, 255, 255, 0.1); border:1px solid rgba(255, 255, 255, 0.1); radius:8px; transition:0.2s · href `https://apps.apple.com/ca/app/foreplay-ad-swipe-file/id6466097243` target=_blank
                - `img.image-150-copy` — 18×22.5 @855,1385 | 991: 18×22.5 @599,1253 | 390: 18×22.5 @246,1285 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/66f1c677d36995d78f55733f_apple.svg` natural 16×20 loading=lazy
                - `div` — 53.6×24 @883,1384 | 991: 53.6×24 @627,1252 | 390: 53.6×24 @274,1284 · font:Inter 14.4px/24px w400 ls-0.18px; color:rgb(250, 250, 253) "iOS App"
              - `a.ce-button` — 271×46 @760,1429 | 991: 208.3×46 @536,1297 | 390: 83.7×46 @245,1329 · display:flex; justify:center; align:center; gap:10px; pad:10px 0px; maxw:100%; bg:rgba(255, 255, 255, 0.1); border:1px solid rgba(255, 255, 255, 0.1); radius:8px; transition:0.2s · href `https://play.google.com/store/apps/details?id=co.foreplay.ForeplayMobile&pli=1` target=_blank
                - `img.image-150-copy` — 18×20.3 @856,1442 | 991: 18×20.3 @600,1310 | 390: 18×20.3 @246,1342 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/66f1c67741e0db33bdcb71ad_android.svg` natural 16×18 loading=lazy
                - `div` — 51.9×24 @884,1440 | 991: 51.9×24 @628,1308 | 390: 51.9×24 @274,1340 · font:Inter 14.4px/24px w400 ls-0.18px; color:rgb(250, 250, 253) "Android"
          - `img.image-151` — 194×363.2 @1051,1112 | 991: 152.2×284.9 @764,1058 | 390: 41.9×344 @348,1031 · maxw:100%; radius:8px; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/66f1c531131769e4019de32f_tt-ssave-exmaple.avif` natural 438×820 loading=lazy

## Typography roles (computed at 1440; sizes at 991/390 from the same nodes)

| font (family size/lh weight ls) | color | n | @991 | @390 | elements (sample) | example |
|---|---|---|---|---|---|---|
| Inter 14px/21px w400 ls-0.18px | rgba(255, 255, 255, 0.8) | 7 | 14px/21px | 14px/21px | `div.text-block-94` | Click the |
| Inter 12px/12px w400 ls-0.18px | rgba(255, 255, 255, 0.8) | 5 | 12px/12px | 12px/12px | `div.platform-name` | Facebook Ad Library |
| Inter 16px/16px w400 ls-0.18px | rgb(250, 250, 253) | 3 | 16px/16px | 16px/16px | `div.text-block-93` | 1 |
| Circular 16px/16px w300 ls-0.18px | rgb(250, 250, 253) | 3 | 16px/16px | 16px/16px | `h2.ce-h2` | Using the Chrome Extension |
| Inter 14.4px/24px w400 ls-0.18px | rgb(250, 250, 253) | 3 | 14.4px/24px | 14.4px/24px | `div` | Connect Your Instagram |
| Inter 50.4px/75.6px w500 ls-0.18px | rgb(250, 250, 253) | 2 | 34.685px/52.0275px | 13.65px/20.475px | `h1.ce-h1` | Save ads on |
| Inter 50.4px/50.4px w500 ls-0.18px | rgb(250, 250, 253) | 2 | 34.685px/34.685px | 13.65px/13.65px | `h1.ce-h1.chrome` | Chrome |

## Colors, gradients, radii, shadows in use (non-text, 1440)

**background-color**
- `rgb(58, 111, 251)` — `div.div-block-313`, `div.text-block-93`
- `rgb(0, 0, 0)` — `div.ce-section`
- `rgba(255, 255, 255, 0.15)` — `a.ce-chrome`
- `rgba(255, 255, 255, 0.05)` — `div#chrome.ce-feature-block.chrome`, `div.supported-platforms`, `div.ce-feature-block.split`
- `rgba(255, 255, 255, 0)` — `a.ce-platform-links`
- `rgba(255, 255, 255, 0.1)` — `a.ce-button`

**border**
- `1px solid rgba(122, 123, 127, 0.25)` — `div#chrome.ce-feature-block.chrome`, `div.ce-feature-block.split`
- `1px solid rgba(255, 255, 255, 0)` — `a.ce-platform-links`
- `1px solid rgba(255, 255, 255, 0.1)` — `a.ce-button`

**radius**
- `1000px` — `a.ce-chrome`
- `15px` — `div#chrome.ce-feature-block.chrome`, `div.ce-feature-block.split`
- `4px` — `div.text-block-93`
- `8px` — `div.supported-platforms`, `a.ce-button`, `img.image-151`
- `6px` — `a.ce-platform-links`

**filter**
- `saturate(0)` — `a.ce-platform-links`

**opacity**
- `0.5` — `div.lottie-animation-9`

**transition**
- `0.2s` — `a.ce-chrome`, `a.ce-platform-links`, `a.ce-button`
- `background-color 0.2s` — `div#chrome.ce-feature-block.chrome`, `div.ce-feature-block.split`

## Assets (local path ↔ element)

| local file | kind | element | natural | displayed @1440 | source URL |
|---|---|---|---|---|---|
| `/assets/pages/chrome-extension/66f1cbd9515e8a7e0e9f9048_h8rBjGm2UJ.json` | lottie | `lottie-animation-9` (s0.0.0) |  | 40×46.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/66f1cbd9515e8a7e0e9f9048_h8rBjGm2UJ.json |
| `/assets/pages/chrome-extension/66f1c918609c422dda8ead67_extension-puzzle.svg` | img | `image-152` (s0.0.1.1) | 20×20 | 20×20 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/66f1c918609c422dda8ead67_extension-puzzle.svg |
| `/assets/pages/chrome-extension/6471025f55598689d5324cf5_foreplay-white-icon-logo.svg` | img | `image-152` (s0.0.2.1) | 52×51 | 20×20 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6471025f55598689d5324cf5_foreplay-white-icon-logo.svg |
| `/assets/pages/chrome-extension/64764a288a2848bea7d423ed_Foreplay-logo.webp` | img | `image-153` (s2.0.0.0.0) | 318×88 | 150×41.5 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64764a288a2848bea7d423ed_Foreplay-logo.webp |
| `/assets/pages/chrome-extension/64944e2428c1fae0b340fded_Google_Chrome_icon_(February_2022).svg.avif` | img | `image-147` (s2.0.0.1.1.0) | 360×360 | 50.4×50.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64944e2428c1fae0b340fded_Google_Chrome_icon_(February_2022).svg.avif |
| `/assets/pages/chrome-extension/66f1ba0bf37ee6dab2caf166_calling.avif` | img | `image-147` (s2.0.0.2.1.0) | 160×160 | 50.4×50.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/66f1ba0bf37ee6dab2caf166_calling.avif |
| `/assets/pages/chrome-extension/66f1b7d42b7a3844659d944f_new-tag.svg` | img | `image-148` (s2.0.0.2.1.2) | 42×20 | 57.6×27.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/66f1b7d42b7a3844659d944f_new-tag.svg |
| `/assets/pages/chrome-extension/66f1beb915bb1e05d141155d_save-button.svg` | img | `ce-save-button` (s2.0.1.0.1.0.0) | 358×41 | 300×34.3 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/66f1beb915bb1e05d141155d_save-button.svg |
| `/assets/pages/chrome-extension/66f1bf3fd36995d78f4e364f_main-dropdown.svg` | img | `` (s2.0.1.0.1.0.1) | 358×388 | 300×325.1 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/66f1bf3fd36995d78f4e364f_main-dropdown.svg |
| `/assets/pages/chrome-extension/66f1c161ba5704e4258daad1_arrow-keys.svg` | img | `ce-callout._3` (s2.0.1.0.1.0.2) | 403×103 | 300×100 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/66f1c161ba5704e4258daad1_arrow-keys.svg |
| `/assets/pages/chrome-extension/66f1c0ce22e21a1d953a5279_create-new.svg` | img | `ce-callout._2` (s2.0.1.0.1.0.3) | 232×79 | 205.6×70 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/66f1c0ce22e21a1d953a5279_create-new.svg |
| `/assets/pages/chrome-extension/66f1c00d7a7961149767ea3d_search.svg` | img | `ce-callout` (s2.0.1.0.1.0.4) | 197×79 | 174.5×70 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/66f1c00d7a7961149767ea3d_search.svg |
| `/assets/pages/chrome-extension/642ca4c09d050a2be842fee0_fb.svg` | img | `image-149` (s2.0.1.0.2.1.0) | 27×26 | 15×14.4 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/642ca4c09d050a2be842fee0_fb.svg |
| `/assets/pages/chrome-extension/642ca4c12f8f5f73d94780dd_instagram.svg` | img | `image-149` (s2.0.1.0.2.2.0) | 25×25 | 15×15 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/642ca4c12f8f5f73d94780dd_instagram.svg |
| `/assets/pages/chrome-extension/62a64767a8f8d8bbe124a326_tiktok-icon.svg` | img | `image-149` (s2.0.1.0.2.3.0) | 163×162 | 15×14.9 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/62a64767a8f8d8bbe124a326_tiktok-icon.svg |
| `/assets/pages/chrome-extension/664e52e8d13ae48e8b3788d0_contest-linkedin.svg` | img | `image-149` (s2.0.1.0.2.4.0) | 20×20 | 15×15 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/664e52e8d13ae48e8b3788d0_contest-linkedin.svg |
| `/assets/pages/chrome-extension/664e52e820acdb847c1534e2_contest-youtube.svg` | img | `image-149` (s2.0.1.0.2.5.0) | 20×20 | 15×15 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/664e52e820acdb847c1534e2_contest-youtube.svg |
| `/assets/pages/chrome-extension/647662134e4be7ea6b1ba257_instagram-logo.webp` | img | `image-150` (s2.0.1.1.0.0.1.1.0) | 98×98 | 20×20 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/647662134e4be7ea6b1ba257_instagram-logo.webp |
| `/assets/pages/chrome-extension/66f1c522add8a0bd054f0a4f_ig-save-example.avif` | img | `image-151` (s2.0.1.1.0.1) | 438×820 | 194×363.2 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/66f1c522add8a0bd054f0a4f_ig-save-example.avif |
| `/assets/pages/chrome-extension/66f1c677d36995d78f55733f_apple.svg` | img | `image-150-copy` (s2.0.1.1.1.0.1.1.0) | 16×20 | 18×22.5 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/66f1c677d36995d78f55733f_apple.svg |
| `/assets/pages/chrome-extension/66f1c67741e0db33bdcb71ad_android.svg` | img | `image-150-copy` (s2.0.1.1.1.0.1.2.0) | 16×18 | 18×20.3 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/66f1c67741e0db33bdcb71ad_android.svg |
| `/assets/pages/chrome-extension/66f1c531131769e4019de32f_tt-ssave-exmaple.avif` | img | `image-151` (s2.0.1.1.1.1) | 438×820 | 194×363.2 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/66f1c531131769e4019de32f_tt-ssave-exmaple.avif |

## Motion

### Webflow IX2 (from `Webflow.require("ix2").store.getState().ixData`, filtered to elements on this page outside nav/footer)

- none


### Running Web Animations after load (`document.getAnimations()`, page content only)

- none

### Widgets / embeds detected


## CSS rules for classes not used on the homepage (verbatim from `foreplay-3-0.shared.850e08b99.min.css`)

New classes: `sticky-pin` `sticky-pin-section` `lottie-animation-9` `pin-line` `text-block-94` `image-152` `div-block-313` `ce-section` `container-2-0` `chrome-extension-header` `link-block-19` `image-153` `ec-h1-line` `ce-h1` `ce-chrome` `image-147` `chrome` `image-148` `feature-block-wrapper` `ce-feature-block` `ce-subheading-wrapper` `text-block-93` `ce-h2` `ce-explainer-1` `ce-button-explainer` `ce-save-button` `ce-callout` `_3` `_2` `supported-platforms` `ce-platform-links` `image-149` `platform-name` `ce-feature-split` `split` `div-block-312` `ce-split-explaination` `ce-button` `image-150` `image-151` `image-150-copy`

```css
.step-wrapper._2 { z-index: 2; background-image: radial-gradient(circle farthest-corner at 100% 50%,#f4bb376e,#15151600 62%),linear-gradient(to bottom,var(--off-black),var(--off-black)); }
.step-wrapper._3 { z-index: 3; background-image: radial-gradient(circle farthest-corner at 100% 50%,#b331b969,#15151600 63%),linear-gradient(to bottom,var(--off-black),var(--off-black)); }
.folder-1._2 { z-index: 2; filter: blur(1px); width: 10vw; inset: 10% 0% auto auto; transform: rotate(0deg); }
.folder-1._3 { z-index: 1; filter: blur(2px); width: 7vw; inset: 0% auto auto 26%; transform: rotate(26deg); }
.discovery-block._2 { height: 15vw; }
.container-2-0 { z-index: 1; max-width: 1200px; padding-left: 50px; padding-right: 50px; position: relative; }
.container-2-0.mobile-z-index { z-index: 2; }
.feature-block-wrapper { margin-top: 50px; }
.block-glow._2, .block-glow._3 { display: none; }
.icon-container-alt._2 { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/642cc56975d75b62b3612507_Rectangle%204327.webp"); }
.icon-container-alt._3 { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/642cc56911e38e4ec362c088_Rectangle%204328.webp"); }
.arrow-floating._2 { inset: 55px 84px auto auto; }
.arrow-floating._3 { inset: 55px auto auto 84px; }
.image-143-copy._2 { transform: rotate(18deg); }
.chrome-extension-header { gap: 0.8vw; text-align: center; flex-direction: column; justify-content: center; align-items: flex-start; display: flex; }
.ce-h1 { color: var(--body); margin-top: 0px; margin-bottom: 0px; font-family: Inter, sans-serif; font-size: 3.5vw; font-weight: 500; line-height: 150%; }
.ce-h1.chrome { line-height: 100%; }
.ec-h1-line { gap: 0.75em; display: flex; }
.ce-chrome { gap: 10px; background-color: rgba(255, 255, 255, 0.15); border-radius: 1000px; align-items: center; padding: 0.7vw 1.5vw 0.7vw 0.7vw; text-decoration: none; transition: 0.2s; display: flex; position: relative; }
.ce-chrome:hover { background-color: rgba(255, 255, 255, 0.3); }
.image-147 { align-self: center; width: 3.5vw; }
.image-148 { width: 4vw; position: absolute; inset: -0.5vw -0.5vw auto auto; }
.ce-h2 { color: var(--body); margin-top: 0px; margin-bottom: 0px; font-family: Circular, sans-serif; font-size: 16px; font-weight: 300; line-height: 100%; }
.text-block-93 { background-color: var(--3a6ffb); width: 25px; height: 25px; color: var(--body); text-align: center; border-radius: 4px; justify-content: center; align-items: center; font-size: 16px; font-weight: 400; line-height: 100%; display: flex; }
.ce-subheading-wrapper { z-index: 1; gap: 10px; align-items: center; width: 100%; display: flex; position: relative; }
.ce-feature-block { z-index: 1; border: 1px solid var(--grey-stroke); background-color: var(--card); border-radius: 15px; flex-direction: column; justify-content: space-between; align-items: stretch; padding: 1.5em; text-decoration: none; transition: background-color 0.2s; display: flex; position: relative; }
.ce-feature-block:hover { background-color: rgba(255, 255, 255, 0.07); }
.ce-feature-block.split { gap: 20px; flex-flow: row; grid-template-rows: auto auto; grid-template-columns: 1fr 0.5fr; grid-auto-columns: 1fr; display: flex; }
.ce-feature-block.chrome { align-items: center; }
.text-block-94 { color: rgba(255, 255, 255, 0.8); font-size: 14px; line-height: 150%; }
.supported-platforms { gap: 10px; background-color: rgba(255, 255, 255, 0.05); border-radius: 8px; align-items: center; padding: 5px 5px 5px 13px; display: flex; }
.ce-platform-links { gap: 5px; filter: saturate(0%); background-color: rgba(255, 255, 255, 0); border: 1px solid rgba(255, 255, 255, 0); border-radius: 6px; justify-content: flex-start; align-items: center; padding: 5px 7px 5px 5px; text-decoration: none; transition: 0.2s; display: flex; }
.ce-platform-links:hover { filter: saturate(); background-color: rgba(255, 255, 255, 0.15); border-color: rgba(255, 255, 255, 0); }
.image-149 { width: 15px; }
.platform-name { color: rgba(255, 255, 255, 0.8); font-size: 12px; line-height: 100%; display: block; }
.ce-button-explainer { gap: 10px; flex-flow: column; align-items: stretch; max-width: 300px; margin-left: auto; margin-right: auto; display: flex; position: relative; }
.ce-explainer-1 { padding-top: 50px; padding-bottom: 50px; }
.ce-callout { height: 70px; position: absolute; inset: 0% auto auto -60%; }
.ce-callout._2 { inset: 15% -70% auto auto; }
.ce-callout._3 { height: 100px; position: relative; left: auto; right: -25%; }
.ce-feature-split { gap: 30px; grid-template-rows: auto; grid-template-columns: 1fr 1fr; grid-auto-columns: 1fr; margin-top: 30px; display: grid; }
.ce-split-explaination { gap: 10px; flex-flow: column; flex: 1 1 0%; justify-content: flex-end; align-items: stretch; display: flex; }
.image-150 { width: 20px; }
.ce-button { gap: 10px; color: var(--body); background-color: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding-top: 10px; padding-bottom: 10px; font-size: 0.9em; font-weight: 400; text-decoration: none; transition: 0.2s; display: flex; }
.ce-button:hover { background-color: rgba(255, 255, 255, 0.15); border-color: rgba(255, 255, 255, 0.15); }
.div-block-312 { flex-flow: column; display: flex; }
.image-151 { border-radius: 8px; width: 40%; }
.image-150-copy { width: 18px; }
.div-block-313 { background-color: var(--3a6ffb); width: 100%; height: 5px; }
.sticky-pin { z-index: 1; padding-top: 20px; padding-bottom: 0px; position: absolute; inset: 70px 3% auto auto; }
.image-152 { width: 20px; height: 20px; }
.pin-line { gap: 5px; justify-content: center; align-items: stretch; display: flex; }
.sticky-pin-section { flex-flow: column; align-items: center; display: flex; }
.lottie-animation-9 { opacity: 0.5; width: 40px; transform-style: preserve-3d; transform: rotateX(180deg) rotateY(0deg) rotate(0deg); }
.image-153 { width: 150px; }
.link-block-19 { margin-bottom: 50px; }
.ce-section { background-color: var(--black); padding-top: 50px; padding-bottom: 100px; position: relative; overflow: hidden; }
.cards-wrapper-new._2 { opacity: 0.5; }
.cards-wrapper-new._3 { opacity: 0.25; }
.background-highlight._2 { width: 1000px; height: 1000px; margin-top: 0px; }
@media screen and (max-width: 991px) {
  .step-wrapper._2 { background-image: radial-gradient(circle farthest-corner at 50% 100%,#f4bb376e,#15151600 62%),linear-gradient(to bottom,var(--off-black),var(--off-black)); }
  .step-wrapper._3 { background-image: radial-gradient(circle farthest-corner at 50% 100%,#b331b969,#15151600 63%),linear-gradient(to bottom,var(--off-black),var(--off-black)); }
  .discovery-block._2 { height: 30vw; }
}
@media screen and (max-width: 767px) {
  .container-2-0.black-friday-page { padding-left: 0px; padding-right: 0px; }
  .cards-wrapper-new._2.mobile-hide, .cards-wrapper-new._3 { display: none; }
}
@media screen and (max-width: 479px) {
  .container-2-0 { padding-left: 4%; padding-right: 4%; }
  .ce-section { padding-top: 75px; padding-bottom: 75px; }
}
```


## Caveats

- Third-party embeds (YouTube lightbox, Cal.com, Senja, Wistia) are noted but their internals were not measured.
- Hover/focus/active values come from the verbatim CSS rules above, plus the homepage spec for shared classes. They were not captured by hovering.
- `y` values are offsets inside each section at that width. Geometry for JS-cloned nodes (marquee clones) is only comparable for the original items.
