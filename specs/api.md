Source: https://www.foreplay.co/api

# /api: Competitor Advertising API - Foreplay API

Measured on 2026-10-06 with headless Chromium (Playwright 1.63) at 1440×900, 991×900 and 390×844, after a full scroll pass. The Navbar and Footer have the same DOM as the homepage, so reuse `Navbar.jsx` and `Footer.jsx` (CLONE_SPEC.md §1 and §8). Tokens, buttons and type classes are in CLONE_SPEC.md §0; anything shared between these pages is in `specs/_shared-pages.md`. **Copy policy:** short UI strings are verbatim, and long copy is given only as ‹copy: ~N chars, L lines @1440›. Assets are local paths under `public/` (`/assets/...`). Files that already existed in `public/assets` were reused rather than re-downloaded, which is why some paths point at other page folders or at the root. Blocks that are identical to the homepage (the final CTA `.home-cta`, the Chrome-extension card `.home-extension`, and the logo strip `.home-hero-bottom`) are collapsed to a single line, "uses <Component> from src/components". Their internals are not re-specced and their assets were not re-downloaded.

## Build notes (summary)

- **Structure:**
  - S1 is an empty `code-style` embed. Its CSS is listed below.
  - S2 hero: an 88×113 API icon image, overline "API", title "Power AI agents & workflows with competitor ad data", primary "Start Free Trial" plus secondary "View Pricing" (→ `#api-pricing`), two 335×74 `.api-docs-link` cards ("Docs GPT", "Technical Docs", each with a 56px icon), and an "Integrations" row with n8n/Zapier 44px icons.
  - S3 `#lens-hero-section` is **0px tall**. It holds `#lens-hero-canvas`, which the twinkling dot-grid script draws into, so nothing is visible on the live site. Skip it or keep it as a no-op.
  - S4 white block: head "Extract and leverage enriched advertising data", then 3 alternating rows ("Spyder API", "Discovery API", "Swipe File API"). Each row has a 512 text column with a `button-light.button-stroke` and a 560-wide illustration.
  - S5 `#api-pricing`: head "Additional API Credit Pricing", then 3 credit cards (100,000 Credits $99; 250,000 Credits $189; 500,000 Credits $349) and an Enterprise footer card ("Custom", "Save up-to 80%", "Talk with an Expert", a 3-item checklist).
  - S6 FAQ (5 items) plus a `.faq-buttons` row ("Contact support" `#intercomButton`, "Knowledge Base").
  - No home CTA.
- **Reuse:** `Button` variants, `section-white-block`, `.pricing-footer` (shared with pricing S1), `Faq`.
- **Motion:** no IX2 besides a-71, and that has no visible effect because the sticky block fits. `.api-docs-link` and buttons transition `.2s`, and the FAQ accordion is the shared one. The svg-path-draw, AutoScrollCarousel and data-tabs scripts are included on this page but find no targets here.
- **Embeds:** none (the docs links are external).

## Page meta (measured)

- Webflow page id `681bc7a3e2182fd526390c72`. Title: `Competitor Advertising API - Foreplay API`.
- Meta description: ~98 chars (not transcribed).
- Document height: 1440 → 5250, 991 → 5975, 390 → 7583. Body bg rgb(2, 3, 8).
- Navbar: same DOM as homepage (same node count/height; only the active-link state class differs) → reuse `Navbar.jsx`.
- Footer: same DOM as homepage (same node count/height) → reuse `Footer.jsx` (incl. calendar pop-up + exit-intent modal).
- Fonts loaded: Inter Display 600 normal, Inter 400 normal, Inter 600 normal, Inter 500 normal.

## Section map (DOM order)

Legend: each line is `tag.class — W×H @x,y` at 1440 (y relative to the section top), then `| 991:` and `| 390:` geometry, then non-default computed styles at 1440, then `Δ991{…}` / `Δ390{…}` listing only layout/typography values that differ from 1440. `hidden` = display:none or 0×0 at that width. Text: short UI strings verbatim in quotes; long copy as ‹copy: ~N chars, L lines @1440› (write stand-in copy of matching length). Classes prefixed `w-` (Webflow runtime) are dropped except meaningful widget classes.

### S1. `div.code-style.w-embed`

y/height: 1440 0/0 · 991 hidden · 390 hidden


### S2. `section#product-hero-section.section.relative`

y/height: 1440 72/695 · 991 72/695 · 390 72/841

- `section#product-hero-section.section.relative` — 1440×695 @0,0 | 991: 991×695 @0,0 | 390: 390×841 @0,0 · pos:relative
  - `canvas#product-hero-canvas.product-hero-canvas` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only)
  - `div.container` — 1440×695 @0,0 | 991: 991×695 @0,0 | 390: 390×841 @0,0 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
    - `div.product-hero` — 1360×695 @40,0 | 991: 927×695 @32,0 | 390: 342×841 @24,0 · display:flex; dir:column; align:center; pad:10px 0px 0px 0px · Δ390{pad:24px 0px}
      - `div.product-hero-animation-trigger` — 1440×900 @0,-72 | 991: 991×900 @0,-72 | 390: 390×844 @0,-72 · pos:absolute [-72px 0px -133px 0px]; pe:none · ix2 w-id ada86b34-fc44-2717-f2b7-e0a48ca54738
      - `div.product-hero-sticky` — 900×685 @270,10 | 991: 900×685 @46,10 | 390: 342×793 @24,24 · display:flex; dir:column; align:center; pos:sticky [100px auto auto auto]; transform:matrix(1, 0, 0, 1, 0, 0) · Δ390{pos:relative; transform:none}
        - `img.api-icon` — 88×113 @676,10 | 991: 88×113 @452,10 | 390: 88×113 @151,24 · pad:0px 0px 25px 0px; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/api/68b700a67c674a39df0d4960_api-icon-3.webp` natural 176×176 loading=lazy alt "foreplay api icon"
        - `div.api-hero-content` — 900×572 @270,123 | 991: 900×572 @46,123 | 390: 342×680 @24,137 · display:flex; dir:column; align:center; gap:28px; pad:0px 0px 42px 0px · Δ390{gap:24px; pad:0px 0px 24px 0px; pos:relative}
          - `h1.text-overline.text-white-68` — 25.7×16 @707,123 | 991: 25.7×16 @483,123 | 390: 25.7×16 @182,137 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "API"
          - `div.hero-text` — 900×208 @270,167 | 991: 900×208 @46,167 | 390: 342×212 @24,177 · display:flex; dir:column; align:center; gap:16px; maxw:900px · Δ390{gap:12px}
            - `h2.text-display-h1.hero-title` — 900×136 @270,167 | 991: 900×136 @46,167 | 390: 342×144 @24,177 · bgimg:radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88)); bgsize:auto; bgpos:0% 0%; bgclip:text; font:Inter Display 60px/68px w600 ls-0.45px; color:rgba(255, 255, 255, 0.88); align-text:center; wrap-text:balance; fill:rgba(0, 0, 0, 0) · Δ390{font:38px/48px; ls:-0.285px} "Power AI agents & workflows with competitor ad data" (2 lines)
            - `div.max-w-lg` — 512×56 @464,319 | 991: 512×56 @240,319 | 390: 342×56 @24,333 · maxw:512px
              - `p.text-body-l.text-white-84` — 512×56 @464,319 | 991: 512×56 @240,319 | 390: 342×56 @24,333 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center ‹copy: ~76 chars, 2 lines @1440›
          - `div.main-cta-buttons` — 315.7×42 @562,403 | 991: 315.7×42 @338,403 | 390: 342×94 @24,413 · display:flex; align:center; gap:12px; pos:relative; z:2 · Δ390{display:grid; cols:342px}
            - `a.button-dark.button-primary` — 159.3×40 @562,404 | 991: 159.3×40 @338,404 | 390: 342×40 @24,413 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; flex:1 1 0%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `https://app.foreplay.co/sign-up`
              - `div.button-text-block` — 123.3×24 @570,412 | 991: 123.3×24 @346,412 | 390: 123.3×24 @123,421 · pos:relative; pad:0px 6px; z:2
                - `div.text-heading-m` — 111.3×24 @576,412 | 991: 111.3×24 @352,412 | 390: 111.3×24 @129,421 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14); align-text:center "Start Free Trial"
              - `div.button-icon-block.icon-right.opacity-100` — 24×24 @689,412 | 991: 24×24 @465,412 | 390: 24×24 @243,421 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; z:2
                - `div.icon-medium` — 24×24 @689,412 | 991: 24×24 @465,412 | 390: 24×24 @243,421 · display:flex; justify:center; align:center
                  - `div.svg.w-embed` — 24×24 @689,412 | 991: 24×24 @465,412 | 390: 24×24 @243,421 · display:flex; justify:center; align:center
                    - `svg` — 24×24 @689,412 | 991: 24×24 @465,412 | 390: 24×24 @243,421 · overflow:hidden · SVG `/assets/pages/api/svg-svg-185ries.svg`
            - `a.button-dark.button-secondary` — 144.4×42 @733,403 | 991: 144.4×42 @509,403 | 390: 342×42 @24,465 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(9, 10, 14); border:1px solid rgb(36, 38, 46); radius:10px; z:5; transition:0.2s · href `#api-pricing`
              - `div.button-text-block` — 106.4×24 @742,412 | 991: 106.4×24 @518,412 | 390: 106.4×24 @132,474 · pos:relative; pad:0px 6px; z:2
                - `div.text-heading-m` — 94.4×24 @748,412 | 991: 94.4×24 @524,412 | 390: 94.4×24 @138,474 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255); align-text:center "View Pricing"
              - `div.button-icon-block.icon-right` — 24×24 @845,412 | 991: 24×24 @620,412 | 390: 24×24 @234,474 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                - `div.icon-medium` — 24×24 @845,412 | 991: 24×24 @620,412 | 390: 24×24 @234,474 · display:flex; justify:center; align:center
                  - `div.svg.w-embed` — 24×24 @845,412 | 991: 24×24 @620,412 | 390: 24×24 @234,474 · display:flex; justify:center; align:center
                    - `svg` — 24×24 @845,412 | 991: 24×24 @620,412 | 390: 24×24 @234,474 · overflow:hidden · SVG `/assets/pages/api/svg-svg-185ries.svg`
          - `div.api-docs-link-wrapper` — 683.8×74 @378,473 | 991: 683.8×74 @154,473 | 390: 336.6×160 @27,531 · display:flex; gap:12px · Δ390{dir:column}
            - `a.api-docs-link` — 335.1×74 @378,473 | 991: 335.1×74 @154,473 | 390: 336.6×74 @27,531 · display:flex; align:center; gap:10px; pad:8px 16px 8px 9px; maxw:100%; bg:rgb(2, 3, 8); border:1px solid rgba(255, 255, 255, 0.1); radius:20px; transition:0.2s · href `https://chatgpt.com/g/g-68b06c9529548191b5d25556e66a272a-foreplay-api-docs` target=_blank
              - `img.icon-56` — 56×56 @388,482 | 991: 56×56 @164,482 | 390: 56×56 @37,540 · display:flex; justify:center; align:center; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/api/68b6edc929653fab1d6de4d0_Screenshot 2025-08-28 at 22.36.37 2.avif` natural 113×113 loading=lazy alt "foreplay api docs chat"
              - `div.api-docs-text` — 242.1×48 @454,486 | 991: 242.1×48 @230,486 | 390: 242.1×48 @103,544 · display:flex; dir:column; align:flex-start
                - `div.text-label-m` — 74.3×24 @454,486 | 991: 74.3×24 @230,486 | 390: 74.3×24 @103,544 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(250, 250, 253); align-text:center · Δ390{align-text:left} "Docs GPT"
                - `div.text-alpha-100` — 242.1×24 @454,510 | 991: 242.1×24 @230,510 | 390: 242.1×24 @103,568 · flex:1 1 0%
                  - `div.text-body-m` — 242.1×24 @454,510 | 991: 242.1×24 @230,510 | 390: 242.1×24 @103,568 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68); align-text:center · Δ390{align-text:left} "Chat with the Foreplay API Docs."
            - `a.api-docs-link` — 336.6×74 @725,473 | 991: 336.6×74 @501,473 | 390: 336.6×74 @27,617 · display:flex; align:center; gap:10px; pad:8px 16px 8px 9px; maxw:100%; bg:rgb(2, 3, 8); border:1px solid rgba(255, 255, 255, 0.1); radius:20px; transition:0.2s · href `https://public.api.foreplay.co/docs` target=_blank
              - `img.icon-56` — 56×56 @735,482 | 991: 56×56 @511,482 | 390: 56×56 @37,626 · display:flex; justify:center; align:center; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/api/68b6edc96b8314f18b566e33_openai 1.avif` natural 112×112 loading=lazy alt "foreplay api docs gear"
              - `div.api-docs-text` — 243.6×48 @801,486 | 991: 243.6×48 @577,486 | 390: 243.6×48 @103,630 · display:flex; dir:column; align:flex-start
                - `div.text-label-m` — 113.5×24 @801,486 | 991: 113.5×24 @577,486 | 390: 113.5×24 @103,630 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(250, 250, 253); align-text:center · Δ390{align-text:left} "Technical Docs"
                - `div.text-alpha-100` — 243.6×24 @801,510 | 991: 243.6×24 @577,510 | 390: 243.6×24 @103,654 · flex:1 1 0%
                  - `div.text-body-m` — 243.6×24 @801,510 | 991: 243.6×24 @577,510 | 390: 243.6×24 @103,654 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68); align-text:center · Δ390{align-text:left} "Full API endpoint documentation."
          - `div.api-connections-wrapper` — 268×78 @586,575 | 991: 268×78 @362,575 | 390: 268×78 @61,715 · display:flex; dir:column; align:center; gap:10px
            - `div.api-connections-text` — 251×24 @595,575 | 991: 251×24 @370,575 | 390: 251×24 @70,715 · display:flex; gap:6px
              - `div.text-label-m` — 89.7×24 @595,575 | 991: 89.7×24 @370,575 | 390: 89.7×24 @70,715 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255); align-text:center "Integrations"
              - `div.text-alpha-100` — 155.3×24 @690,575 | 991: 155.3×24 @466,575 | 390: 155.3×24 @165,715 · flex:1 1 0%
                - `div.text-body-m` — 155.3×24 @690,575 | 991: 155.3×24 @466,575 | 390: 155.3×24 @165,715 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68); align-text:center "Easily connect with..."
            - `div.integrations-icons` — 268×44 @586,609 | 991: 268×44 @362,609 | 390: 268×44 @61,749 · display:flex; gap:12px
              - `a.api-integration-link` — 44×44 @586,609 | 991: 44×44 @362,609 | 390: 44×44 @61,749 · pos:relative; maxw:100% · href `#`
                - `img.icon-44` — 44×44 @586,609 | 991: 44×44 @362,609 | 390: 44×44 @61,749 · display:flex; justify:center; align:center; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/api/68b6ef420e259ffe76d23e1a_Group 29.webp` natural 88×88 loading=lazy alt "n8n integration"
              - `a.api-integration-link` — 44×44 @642,609 | 991: 44×44 @418,609 | 390: 44×44 @117,749 · pos:relative; maxw:100% · href `#`
                - `img.icon-44` — 44×44 @642,609 | 991: 44×44 @418,609 | 390: 44×44 @117,749 · display:flex; justify:center; align:center; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/api/68b6ef42c9ad43c54bb3080f_Group 26.avif` natural 88×88 loading=lazy alt "zapier integration"
              - …3 more `a.api-integration-link` siblings with the same structure (5 total):
                - [3] 44×44 @698,609 — img 68b6ef42db6dce89b740730b_Group 25.webp
                - [4] 44×44 @754,609 — img 68b6ef4232d52577c91c5b8b_Group 27.avif
                - [5] 44×44 @810,609 — img 68b6ef4229653fab1d6ebc37_Group 28.avif

### S3. `section#lens-hero-section.section.relative`

y/height: 1440 767/0 · 991 767/0 · 390 913/0

- `section#lens-hero-section.section.relative` — 1440×0 @0,0 | 991: 991×0 @0,0 | 390: 390×0 @0,0 · pos:relative
  - `canvas#lens-hero-canvas.product-hero-canvas` — 1440×0 @0,0 | 991: hidden | 390: hidden · pos:absolute [0px 0px 0px 0px]; overflow:clip; aspect:auto 1440 / 0 · Δ991{display:none} · Δ390{display:none}

### S4. `section.section`

y/height: 1440 767/1667.4 · 991 767/1359.2 · 390 913/2076.4

- `div.section-padding` — 1440×1667.4 @0,0 | 991: 991×1359.2 @0,0 | 390: 390×2076.4 @0,0 · pad:8px
  - `div.section-white-block` — 1424×1651.4 @8,8 | 991: 975×1343.2 @8,8 | 390: 374×2060.4 @8,8 · pos:relative; bg:rgb(255, 255, 255); radius:36px; overflow:hidden; z:2 · Δ390{radius:16px}
    - `div.container.section-container` — 1344×316 @48,8 | 991: 975×284 @8,8 | 390: 374×316 @8,8 · pad:0px 40px; mar:0px 40px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
      - `div.demo-socialproof` — 1264×316 @88,8 | 991: 911×284 @40,8 | 390: 326×316 @32,8 · display:flex; dir:column; justify:center; align:flex-start; gap:72px; pad:80px 0px · Δ991{pad:64px 0px} · Δ390{pad:40px 0px 24px 0px}
        - `div.demo-socailproof-head` — 1264×156 @88,88 | 991: 911×156 @40,72 | 390: 326×252 @32,48 · display:grid; cols:1264px; rows:156px; gap:16px · Δ991{cols:911px} · Δ390{cols:326px; gap:24px}
          - `div.section-head.is-align-left` — 720×156 @88,88 | 991: 720×156 @40,72 | 390: 326×252 @32,48 · display:flex; dir:column; align:flex-start; gap:12px; maxw:720px · Δ390{gap:8px}
            - `h2.text-display-h3` — 720×88 @88,88 | 991: 720×88 @40,72 | 390: 326×132 @32,48 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(23, 25, 32); wrap-text:balance "Extract and leverage enriched advertising data" (2 lines)
            - `p.text-body-l` — 720×56 @88,188 | 991: 720×56 @40,172 | 390: 326×112 @32,188 · font:Inter 18px/28px w400 ls-0.259999px; color:rgb(36, 38, 46); wrap-text:balance ‹copy: ~110 chars, 2 lines @1440›
    - `div.container.section-container` — 1344×1335.4 @48,324 | 991: 975×1059.2 @8,292 | 390: 374×1744.4 @8,324 · pad:0px 40px; mar:0px 40px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
      - `div.left-right-section-wrapper` — 1264×1239.4 @88,324 | 991: 911×995.2 @40,292 | 390: 326×1696.4 @32,324 · display:flex; dir:column; gap:80px
        - `div.lens-gamification-grid` — 1264×359.8 @88,324 | 991: 911×281.6 @40,292 | 390: 326×513.5 @32,324 · display:grid; cols:105.328px 105.328px 105.344px 105.328px 105.328px 105.344px 105.328px 105.328px 105.344px 105.328px 105.328px 105.344px; rows:359.797px; jitems:center; align:center; gap:0px · Δ991{display:flex; dir:row; wrap:nowrap; justify:normal; align:center; gap:40px} · Δ390{display:flex; dir:column; wrap:nowrap; justify:normal; align:start; gap:40px}
          - `div#w-node-_4d6e6860-d0cd-203f-15eb-cc139dc91128-26390c72.lens-gamification-content` — 512×272 @95,368 | 991: 400.7×272 @40,297 | 390: 326×288 @32,549 · display:flex; dir:column; justify:center; align:flex-start; gap:32px; gcol:span 5/span 5; grow:span 1/span 1 · Δ390{gap:24px}
            - `div.section-head.is-align-left` — 512×200 @95,368 | 991: 400.7×200 @40,297 | 390: 326×224 @32,549 · display:flex; dir:column; align:flex-start; gap:12px; maxw:720px · Δ390{gap:8px}
              - `div.text-solid-900` — 178.1×104 @95,368 | 991: 178.1×104 @40,297 | 390: 178.1×104 @32,549
                - `div.api-product-icon` — 50×50 @95,368 | 991: 50×50 @40,297 | 390: 50×50 @32,549 · mar:0px 0px 10px 0px
                  - `div.footer-product-icon.sprite-image.sprite-spyder` — 44×44 @95,368 | 991: 44×44 @40,297 | 390: 44×44 @32,549 · bgimg:url(nav-spritesheet-160x160-spyder.png); bgsize:auto 100%; bgpos:0px 0px; bgrep:no-repeat · Δ991{bgsize:cover} · Δ390{bgsize:cover} · ASSET `/assets/pages/api/nav-spritesheet-160x160-spyder.png`
                - `h2.text-display-h3` — 178.1×44 @95,428 | 991: 178.1×44 @40,357 | 390: 178.1×44 @32,609 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(9, 10, 14); wrap-text:balance "Spyder API"
              - `div.section-head_paragraph` — 512×84 @95,484 | 991: 400.7×84 @40,413 | 390: 326×112 @32,661 · maxw:512px
                - `p.text-body-l` — 512×84 @95,484 | 991: 400.7×84 @40,413 | 390: 326×112 @32,661 · font:Inter 18px/28px w400 ls-0.259999px; color:rgb(52, 54, 66); wrap-text:pretty ‹copy: ~126 chars, 3 lines @1440›
            - `a.button-light.button-stroke` — 159.3×40 @95,600 | 991: 159.3×40 @40,529 | 390: 159.3×40 @32,797 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(255, 255, 255); radius:10px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px; z:5; transition:0.15s · href `https://app.foreplay.co/sign-up`
              - `div.button-text-block` — 123.3×24 @103,608 | 991: 123.3×24 @48,537 | 390: 123.3×24 @40,805 · pos:relative; pad:0px 6px; z:2
                - `div.text-heading-m` — 111.3×24 @109,608 | 991: 111.3×24 @54,537 | 390: 111.3×24 @46,805 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14) "Start Free Trial"
              - `div.button-icon-block.icon-right` — 24×24 @223,608 | 991: 24×24 @167,537 | 390: 24×24 @159,805 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                - `div.icon-medium` — 24×24 @223,608 | 991: 24×24 @167,537 | 390: 24×24 @159,805 · display:flex; justify:center; align:center
                  - `div.svg.w-embed` — 24×24 @223,608 | 991: 24×24 @167,537 | 390: 24×24 @159,805 · display:flex; justify:center; align:center
                    - `svg` — 24×24 @223,608 | 991: 24×24 @167,537 | 390: 24×24 @159,805 · overflow:hidden · SVG `/assets/pages/api/svg-svg-185ries.svg`
          - `div#w-node-_4d6e6860-d0cd-203f-15eb-cc139dc91138-26390c72.lens-gamification-illustration` — 592×359.8 @687,324 | 991: 470.3×281.6 @481,292 | 390: 326×185.5 @32,324 · pad:0px 16px; gcol:span 7/span 7; grow:span 1/span 1 · Δ390{pad:0px}
            - `img.lens-gamification-illustration-image.with-padding` — 560×359.8 @703,324 | 991: 438.3×281.6 @497,292 | 390: 326×209.5 @32,324 · maxw:100%; overflow:clip; fit:fill · Δ390{mar:0px 0px -24px 0px} · IMG `/assets/pages/api/681bc98f0887a5dda006dfe7_spyder-api.webp` natural 560×359 loading=lazy alt "competitor ads api illustration"
        - `div.left-right-section` — 1264×359.8 @88,764 | 991: 911×272 @40,654 | 390: 326×537.5 @32,917 · display:flex; align:center; gap:24px · Δ991{gap:40px} · Δ390{dir:column; align:start; gap:40px}
          - `div#w-node-_7dc964ef-99b4-911a-fe81-2fe6f72c2f15-26390c72.left-right-section-content` — 512×272 @88,808 | 991: 512×272 @40,654 | 390: 326×288 @32,1167 · display:flex; dir:column; justify:center; align:flex-start; gap:32px · Δ390{gap:24px}
            - `div.section-head.is-align-left` — 512×200 @88,808 | 991: 512×200 @40,654 | 390: 326×224 @32,1167 · display:flex; dir:column; align:flex-start; gap:12px; maxw:720px · Δ390{gap:8px}
              - `div.text-solid-900` — 223.7×104 @88,808 | 991: 223.7×104 @40,654 | 390: 223.7×104 @32,1167
                - `div.api-product-icon` — 50×50 @88,808 | 991: 50×50 @40,654 | 390: 50×50 @32,1167 · mar:0px 0px 10px 0px
                  - `div.footer-product-icon.sprite-image.sprite-discovery` — 44×44 @88,808 | 991: 44×44 @40,654 | 390: 44×44 @32,1167 · bgimg:url(nav-spritesheet-160x160-discovery.png); bgsize:auto 100%; bgpos:0px 0px; bgrep:no-repeat · Δ991{bgsize:cover} · Δ390{bgsize:cover} · ASSET `/assets/pages/api/nav-spritesheet-160x160-discovery.png`
                - `h2.text-display-h3` — 223.7×44 @88,868 | 991: 223.7×44 @40,714 | 390: 223.7×44 @32,1227 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(9, 10, 14); wrap-text:balance "Discovery API"
              - `div.section-head_paragraph` — 512×84 @88,924 | 991: 512×84 @40,770 | 390: 326×112 @32,1279 · maxw:512px
                - `p.text-body-l` — 512×84 @88,924 | 991: 512×84 @40,770 | 390: 326×112 @32,1279 · font:Inter 18px/28px w400 ls-0.259999px; color:rgb(52, 54, 66); wrap-text:pretty ‹copy: ~120 chars, 3 lines @1440›
            - `a.button-light.button-stroke` — 159.3×40 @88,1040 | 991: 159.3×40 @40,886 | 390: 159.3×40 @32,1415 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(255, 255, 255); radius:10px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px; z:5; transition:0.15s · href `https://app.foreplay.co/sign-up`
              - `div.button-text-block` — 123.3×24 @96,1048 | 991: 123.3×24 @48,894 | 390: 123.3×24 @40,1423 · pos:relative; pad:0px 6px; z:2
                - `div.text-heading-m` — 111.3×24 @102,1048 | 991: 111.3×24 @54,894 | 390: 111.3×24 @46,1423 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14) "Start Free Trial"
              - `div.button-icon-block.icon-right` — 24×24 @215,1048 | 991: 24×24 @167,894 | 390: 24×24 @159,1423 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                - `div.icon-medium` — 24×24 @215,1048 | 991: 24×24 @167,894 | 390: 24×24 @159,1423 · display:flex; justify:center; align:center
                  - `div.svg.w-embed` — 24×24 @215,1048 | 991: 24×24 @167,894 | 390: 24×24 @159,1423 · display:flex; justify:center; align:center
                    - `svg` — 24×24 @215,1048 | 991: 24×24 @167,894 | 390: 24×24 @159,1423 · overflow:hidden · SVG `/assets/pages/api/svg-svg-185ries.svg`
          - `div#w-node-_7dc964ef-99b4-911a-fe81-2fe6f72c2f23-26390c72.left-right-section-image-wrapper` — 728×359.8 @624,764 | 991: 359×210.1 @592,685 | 390: 326×209.5 @32,917 · pad:0px 16px; flex:1 1 0% · Δ390{pad:0px}
            - `img.left-right-section-image` — 560×359.8 @640,764 | 991: 327×210.1 @608,685 | 390: 326×209.5 @32,917 · maxw:100%; radius:20px; overflow:clip; fit:fill · Δ390{radius:10px} · IMG `/assets/pages/api/681bc98fb1fefc751990ef9a_discovery-api.webp` natural 560×359 loading=lazy alt "ad search api illustration"
        - `div.lens-gamification-grid` — 1264×359.8 @88,1204 | 991: 911×281.6 @40,1006 | 390: 326×485.5 @32,1535 · display:grid; cols:105.328px 105.328px 105.344px 105.328px 105.328px 105.344px 105.328px 105.328px 105.344px 105.328px 105.328px 105.344px; rows:359.797px; jitems:center; align:center; gap:0px · Δ991{display:flex; dir:row; wrap:nowrap; justify:normal; align:center; gap:40px} · Δ390{display:flex; dir:column; wrap:nowrap; justify:normal; align:start; gap:40px}
          - `div#w-node-_15d71dba-cc29-d0bb-fea9-48f2d659c121-26390c72.lens-gamification-content` — 512×244 @95,1261 | 991: 400.7×272 @40,1010 | 390: 326×260 @32,1760 · display:flex; dir:column; justify:center; align:flex-start; gap:32px; gcol:span 5/span 5; grow:span 1/span 1 · Δ390{gap:24px}
            - `div.section-head.is-align-left` — 512×172 @95,1261 | 991: 400.7×200 @40,1010 | 390: 326×196 @32,1760 · display:flex; dir:column; align:flex-start; gap:12px; maxw:720px · Δ390{gap:8px}
              - `div.text-solid-900` — 227.5×104 @95,1261 | 991: 227.5×104 @40,1010 | 390: 227.5×104 @32,1760
                - `div.api-product-icon` — 50×50 @95,1261 | 991: 50×50 @40,1010 | 390: 50×50 @32,1760 · mar:0px 0px 10px 0px
                  - `div.footer-product-icon.sprite-image.sprite-library` — 44×44 @95,1261 | 991: 44×44 @40,1010 | 390: 44×44 @32,1760 · bgimg:url(nav-spritesheet-160x160-library.png); bgsize:auto 100%; bgpos:0px 0px; bgrep:no-repeat · Δ991{bgsize:cover} · Δ390{bgsize:cover} · ASSET `/assets/pages/api/nav-spritesheet-160x160-library.png`
                - `h2.text-display-h3` — 227.5×44 @95,1321 | 991: 227.5×44 @40,1070 | 390: 227.5×44 @32,1820 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(9, 10, 14); wrap-text:balance "Swipe File API"
              - `div.section-head_paragraph` — 512×56 @95,1377 | 991: 400.7×84 @40,1126 | 390: 326×84 @32,1872 · maxw:512px
                - `p.text-body-l` — 512×56 @95,1377 | 991: 400.7×84 @40,1126 | 390: 326×84 @32,1872 · font:Inter 18px/28px w400 ls-0.259999px; color:rgb(52, 54, 66); wrap-text:pretty ‹copy: ~102 chars, 2 lines @1440›
            - `a.button-light.button-stroke` — 159.3×40 @95,1465 | 991: 159.3×40 @40,1242 | 390: 159.3×40 @32,1980 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(255, 255, 255); radius:10px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px; z:5; transition:0.15s · href `https://app.foreplay.co/sign-up`
              - `div.button-text-block` — 123.3×24 @103,1473 | 991: 123.3×24 @48,1250 | 390: 123.3×24 @40,1988 · pos:relative; pad:0px 6px; z:2
                - `div.text-heading-m` — 111.3×24 @109,1473 | 991: 111.3×24 @54,1250 | 390: 111.3×24 @46,1988 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14) "Start Free Trial"
              - `div.button-icon-block.icon-right` — 24×24 @223,1473 | 991: 24×24 @167,1250 | 390: 24×24 @159,1988 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                - `div.icon-medium` — 24×24 @223,1473 | 991: 24×24 @167,1250 | 390: 24×24 @159,1988 · display:flex; justify:center; align:center
                  - `div.svg.w-embed` — 24×24 @223,1473 | 991: 24×24 @167,1250 | 390: 24×24 @159,1988 · display:flex; justify:center; align:center
                    - `svg` — 24×24 @223,1473 | 991: 24×24 @167,1250 | 390: 24×24 @159,1988 · overflow:hidden · SVG `/assets/pages/api/svg-svg-185ries.svg`
          - `div#w-node-_15d71dba-cc29-d0bb-fea9-48f2d659c12f-26390c72.lens-gamification-illustration` — 592×359.8 @687,1204 | 991: 470.3×281.6 @481,1006 | 390: 326×185.5 @32,1535 · pad:0px 16px; gcol:span 7/span 7; grow:span 1/span 1 · Δ390{pad:0px}
            - `img.lens-gamification-illustration-image.with-padding` — 560×359.8 @703,1204 | 991: 438.3×281.6 @497,1006 | 390: 326×209.5 @32,1535 · maxw:100%; overflow:clip; fit:fill · Δ390{mar:0px 0px -24px 0px} · IMG `/assets/pages/api/681bc98f48f11604a4a60a1e_swipe-file-api.webp` natural 560×359 loading=lazy alt "foreplay api illustration"
      - `div.v-padding-experts` — 1264×96 @88,1563 | 991: 911×64 @40,1287 | 390: 326×48 @32,2020 · pad:48px 0px · Δ991{pad:32px 0px} · Δ390{pad:24px 0px}

### S5. `div#api-pricing.section`

y/height: 1440 2434/988.8 · 991 2126/1852 · 390 2989/1970

- `div#api-pricing.section` — 1440×988.8 @0,0 | 991: 991×1852 @0,0 | 390: 390×1970 @0,0
  - `div.container.section-container` — 1344×988.8 @48,0 | 991: 991×1852 @0,0 | 390: 390×1970 @0,0 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
    - `div.pricing` — 1264×988.8 @88,0 | 991: 927×1852 @32,0 | 390: 342×1970 @24,0 · display:flex; dir:column; pad:72px 0px 108px 0px · Δ390{pad:40px 0px 80px 0px}
      - `div.api-pricing-wrapper` — 1264×808.8 @88,72 | 991: 927×1672 @32,72 | 390: 342×1850 @24,40 · display:flex; dir:column; gap:25px
        - `div.section-head` — 720×149.8 @360,72 | 991: 720×148 @136,72 | 390: 342×220 @24,40 · display:flex; dir:column; align:center; gap:12px; mar:0px 272px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
          - `div.text-overline.text-white-68` — 93.7×16 @673,72 | 991: 93.7×16 @449,72 | 390: 93.7×16 @148,40 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "API PRICING"
          - `h1.text-display-h2` — 552.8×53.8 @444,100 | 991: 502.6×52 @244,100 | 390: 342×96 @24,68 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Additional API Credit Pricing"
          - `div.max-w-lg` — 512×56 @464,166 | 991: 512×56 @240,164 | 390: 342×84 @24,176 · maxw:512px
            - `p.text-body-l.text-white-84` — 512×56 @464,166 | 991: 512×56 @240,164 | 390: 342×84 @24,176 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center ‹copy: ~94 chars, 2 lines @1440› · inline: a.link-3 "base plans" (color rgb(221, 222, 229), fill rgb(221, 222, 229))
        - `div.pricing-content` — 1264×634 @88,247 | 991: 927×1499 @32,245 | 390: 342×1605 @24,285 · display:flex; dir:column
          - `div.api-pricing-grid` — 1264×586 @88,295 | 991: 927×1451 @32,293 | 390: 342×1557 @24,333 · display:grid; cols:404.656px 404.672px 404.656px; rows:255px 306px; jitems:center; align:center; gap:25px; mar:48px 0px 0px 0px · Δ991{cols:927px; gap:32px} · Δ390{cols:342px; gap:20px}
            - `div.api-pricing-card-container` — 404.7×255 @88,295 | 991: 927×255 @32,293 | 390: 342×255 @24,333 · bg:rgb(2, 3, 8); radius:20px; shadow:rgba(255, 255, 255, 0.16) 0px 0px 0px 1px
              - `div.pricing-card` — 404.7×255 @88,295 | 991: 927×255 @32,293 | 390: 342×255 @24,333 · display:flex; dir:column; gap:20px; pad:24px
                - `div.pricing-card-head` — 356.7×36 @112,319 | 991: 879×36 @56,317 | 390: 294×36 @48,357 · display:flex; dir:column; align:center; gap:8px
                  - `div.api-credis-pricing-title` — 184×36 @198,319 | 991: 184×36 @403,317 | 390: 169.1×36 @110,357 · display:flex; align:center; gap:10px; pad:4px 8px 4px 4px; bg:rgba(255, 255, 255, 0.06); radius:100px
                    - `div.icon-large.w-embed` — 28×28 @202,323 | 991: 28×28 @407,321 | 390: 28×28 @114,361 · flex:0 0 auto
                      - `svg` — 28×30 @202,323 | 991: 28×30 @407,321 | 390: 28×30 @114,361 · overflow:hidden · SVG `/assets/pages/api/svg-icon-large-1yeu1rx.svg`
                    - `div.text-label-l` — 134×24 @240,325 | 991: 134×24 @445,323 | 390: 119.1×24 @152,363 · font:Inter 18px/24px w500 ls-0.259999px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ390{font:16px/24px; ls:-0.23111px} "100,000 Credits"
                - `div.horizontal_divider` — 356.7×1 @112,375 | 991: 879×1 @56,373 | 390: 294×1 @48,413 · bg:rgb(23, 25, 32)
                - `div.pricing-card-cta` — 356.7×130 @112,396 | 991: 879×130 @56,394 | 390: 294×130 @48,434 · display:flex; dir:column; gap:20px
                  - `div.flex-col-gap-2` — 356.7×32 @112,396 | 991: 879×32 @56,394 | 390: 294×32 @48,434 · display:flex; dir:column; align:center; gap:8px
                    - `div.flex-baseline` — 94.7×32 @243,396 | 991: 94.7×32 @448,394 | 390: 94.7×32 @148,434 · display:flex; align:baseline; gap:4px
                      - `div.text-display-h5` — 44×32 @243,396 | 991: 44×32 @448,394 | 390: 44×32 @148,434 · font:Inter Display 24px/32px w600 ls-0.16px; color:rgb(255, 255, 255) "$99"
                      - `div.text-alpha-100` — 46.7×20 @291,405 | 991: 46.7×20 @496,403 | 390: 46.7×20 @196,443 · flex:1 1 0%
                        - `div.text-body-s` — 46.7×20 @291,405 | 991: 46.7×20 @496,403 | 390: 46.7×20 @196,443 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) "/month"
                  - `div.flex-col-gap-2` — 356.7×78 @112,448 | 991: 879×78 @56,446 | 390: 294×78 @48,486 · display:flex; dir:column; align:center; gap:8px
                    - `div.div-block-335` — 356.7×78 @112,448 | 991: 879×78 @56,446 | 390: 294×78 @48,486 · display:flex; dir:column
                      - `a.button-dark.button-primary` — 356.7×40 @112,448 | 991: 879×40 @56,446 | 390: 294×40 @48,486 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; flex:1 1 0%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `https://app.foreplay.co/sign-up`
                        - `div.button-text-block` — 123.3×24 @219,456 | 991: 123.3×24 @424,454 | 390: 123.3×24 @123,494 · pos:relative; pad:0px 6px; z:2
                          - `div.text-heading-m` — 111.3×24 @225,456 | 991: 111.3×24 @430,454 | 390: 111.3×24 @129,494 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14) "Start Free Trial"
                        - `div.button-icon-block.icon-right.opacity-100` — 24×24 @338,456 | 991: 24×24 @543,454 | 390: 24×24 @243,494 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; z:2
                          - `div.icon-medium` — 24×24 @338,456 | 991: 24×24 @543,454 | 390: 24×24 @243,494 · display:flex; justify:center; align:center
                            - `div.svg.w-embed` — 24×24 @338,456 | 991: 24×24 @543,454 | 390: 24×24 @243,494 · display:flex; justify:center; align:center
                              - `svg` — 24×24 @338,456 | 991: 24×24 @543,454 | 390: 24×24 @243,494 · overflow:hidden · SVG `/assets/pages/api/svg-svg-185ries.svg`
                      - `div.free-credit-pricing` — 356.7×28 @112,498 | 991: 879×28 @56,496 | 390: 294×28 @48,536 · display:flex; justify:center; pad:4px 8px; mar:10px 0px 0px 0px; bg:rgba(255, 255, 255, 0.06); radius:4px
                        - `div.text-label-s` — 235.3×20 @173,502 | 991: 235.3×20 @378,500 | 390: 235.3×20 @77,540 · font:Inter 14px/20px w500 ls-0.09px; color:rgba(255, 255, 255, 0.36); align-text:center "10,000 Free credits during your trial"
                    - `div.no-cc-required` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: "No credit card required", svg 1130es6
            - `div.api-pricing-card-container` — 404.7×255 @518,295 | 991: 927×255 @32,580 | 390: 342×255 @24,608 · bg:rgb(2, 3, 8); radius:20px; shadow:rgba(255, 255, 255, 0.16) 0px 0px 0px 1px
              - `div.pricing-card` — 404.7×255 @518,295 | 991: 927×255 @32,580 | 390: 342×255 @24,608 · display:flex; dir:column; gap:20px; pad:24px
                - `div.pricing-card-head` — 356.7×36 @542,319 | 991: 879×36 @56,604 | 390: 294×36 @48,632 · display:flex; dir:column; align:center; gap:8px
                  - `div.api-credis-pricing-title` — 186.1×36 @627,319 | 991: 186.1×36 @402,604 | 390: 171×36 @110,632 · display:flex; align:center; gap:10px; pad:4px 8px 4px 4px; bg:rgba(255, 255, 255, 0.06); radius:100px
                    - `div.icon-large.w-embed` — 28×28 @631,323 | 991: 28×28 @406,608 | 390: 28×28 @114,636 · flex:0 0 auto
                      - `svg` — 28×30 @631,323 | 991: 28×30 @406,608 | 390: 28×30 @114,636 · overflow:hidden · SVG `/assets/pages/api/svg-icon-large-1yeu1rx.svg`
                    - `div.text-label-l` — 136.1×24 @669,325 | 991: 136.1×24 @444,610 | 390: 121×24 @152,638 · font:Inter 18px/24px w500 ls-0.259999px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ390{font:16px/24px; ls:-0.23111px} "250,000 Credits"
                - `div.horizontal_divider` — 356.7×1 @542,375 | 991: 879×1 @56,660 | 390: 294×1 @48,688 · bg:rgb(23, 25, 32)
                - `div.pricing-card-cta` — 356.7×130 @542,396 | 991: 879×130 @56,681 | 390: 294×130 @48,709 · display:flex; dir:column; gap:20px
                  - `div.flex-col-gap-2` — 356.7×32 @542,396 | 991: 879×32 @56,681 | 390: 294×32 @48,709 · display:flex; dir:column; align:center; gap:8px
                    - `div.flex-baseline` — 103.6×32 @668,396 | 991: 103.6×32 @444,681 | 390: 103.6×32 @143,709 · display:flex; align:baseline; gap:4px
                      - `div.text-display-h5` — 52.9×32 @668,396 | 991: 52.9×32 @444,681 | 390: 52.9×32 @143,709 · font:Inter Display 24px/32px w600 ls-0.16px; color:rgb(255, 255, 255) "$189"
                      - `div.text-alpha-100` — 46.7×20 @725,405 | 991: 46.7×20 @501,690 | 390: 46.7×20 @200,718 · flex:1 1 0%
                        - `div.text-body-s` — 46.7×20 @725,405 | 991: 46.7×20 @501,690 | 390: 46.7×20 @200,718 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) "/month"
                  - `div.flex-col-gap-2` — 356.7×78 @542,448 | 991: 879×78 @56,733 | 390: 294×78 @48,761 · display:flex; dir:column; align:center; gap:8px
                    - `div.div-block-335` — 356.7×78 @542,448 | 991: 879×78 @56,733 | 390: 294×78 @48,761 · display:flex; dir:column
                      - `a.button-dark.button-primary` — 356.7×40 @542,448 | 991: 879×40 @56,733 | 390: 294×40 @48,761 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; flex:1 1 0%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `https://app.foreplay.co/sign-up`
                        - `div.button-text-block` — 123.3×24 @648,456 | 991: 123.3×24 @424,741 | 390: 123.3×24 @123,769 · pos:relative; pad:0px 6px; z:2
                          - `div.text-heading-m` — 111.3×24 @654,456 | 991: 111.3×24 @430,741 | 390: 111.3×24 @129,769 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14) "Start Free Trial"
                        - `div.button-icon-block.icon-right.opacity-100` — 24×24 @768,456 | 991: 24×24 @543,741 | 390: 24×24 @243,769 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; z:2
                          - `div.icon-medium` — 24×24 @768,456 | 991: 24×24 @543,741 | 390: 24×24 @243,769 · display:flex; justify:center; align:center
                            - `div.svg.w-embed` — 24×24 @768,456 | 991: 24×24 @543,741 | 390: 24×24 @243,769 · display:flex; justify:center; align:center
                              - `svg` — 24×24 @768,456 | 991: 24×24 @543,741 | 390: 24×24 @243,769 · overflow:hidden · SVG `/assets/pages/api/svg-svg-185ries.svg`
                      - `div.free-credit-pricing` — 356.7×28 @542,498 | 991: 879×28 @56,783 | 390: 294×28 @48,811 · display:flex; justify:center; pad:4px 8px; mar:10px 0px 0px 0px; bg:rgba(255, 255, 255, 0.06); radius:4px
                        - `div.text-label-s` — 235.3×20 @602,502 | 991: 235.3×20 @378,787 | 390: 235.3×20 @77,815 · font:Inter 14px/20px w500 ls-0.09px; color:rgba(255, 255, 255, 0.36); align-text:center "10,000 Free credits during your trial"
                    - `div.no-cc-required` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: "No credit card required", svg 1130es6
            - `div.api-pricing-card-container` — 404.7×255 @947,295 | 991: 927×255 @32,867 | 390: 342×255 @24,883 · bg:rgb(2, 3, 8); radius:20px; shadow:rgba(255, 255, 255, 0.16) 0px 0px 0px 1px
              - `div.pricing-card` — 404.7×255 @947,295 | 991: 927×255 @32,867 | 390: 342×255 @24,883 · display:flex; dir:column; gap:20px; pad:24px
                - `div.pricing-card-head` — 356.7×36 @971,319 | 991: 879×36 @56,891 | 390: 294×36 @48,907 · display:flex; dir:column; align:center; gap:8px
                  - `div.api-credis-pricing-title` — 186.7×36 @1056,319 | 991: 186.7×36 @402,891 | 390: 171.5×36 @109,907 · display:flex; align:center; gap:10px; pad:4px 8px 4px 4px; bg:rgba(255, 255, 255, 0.06); radius:100px
                    - `div.icon-large.w-embed` — 28×28 @1060,323 | 991: 28×28 @406,895 | 390: 28×28 @113,911 · flex:0 0 auto
                      - `svg` — 28×30 @1060,323 | 991: 28×30 @406,895 | 390: 28×30 @113,911 · overflow:hidden · SVG `/assets/pages/api/svg-icon-large-1yeu1rx.svg`
                    - `div.text-label-l` — 136.7×24 @1098,325 | 991: 136.7×24 @444,897 | 390: 121.5×24 @151,913 · font:Inter 18px/24px w500 ls-0.259999px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ390{font:16px/24px; ls:-0.23111px} "500,000 Credits"
                - `div.horizontal_divider` — 356.7×1 @971,375 | 991: 879×1 @56,947 | 390: 294×1 @48,963 · bg:rgb(23, 25, 32)
                - `div.pricing-card-cta` — 356.7×130 @971,396 | 991: 879×130 @56,968 | 390: 294×130 @48,984 · display:flex; dir:column; gap:20px
                  - `div.flex-col-gap-2` — 356.7×32 @971,396 | 991: 879×32 @56,968 | 390: 294×32 @48,984 · display:flex; dir:column; align:center; gap:8px
                    - `div.flex-baseline` — 110.1×32 @1095,396 | 991: 110.1×32 @440,968 | 390: 110.1×32 @140,984 · display:flex; align:baseline; gap:4px
                      - `div.text-display-h5` — 59.4×32 @1095,396 | 991: 59.4×32 @440,968 | 390: 59.4×32 @140,984 · font:Inter Display 24px/32px w600 ls-0.16px; color:rgb(255, 255, 255) "$349"
                      - `div.text-alpha-100` — 46.7×20 @1158,405 | 991: 46.7×20 @504,977 | 390: 46.7×20 @203,993 · flex:1 1 0%
                        - `div.text-body-s` — 46.7×20 @1158,405 | 991: 46.7×20 @504,977 | 390: 46.7×20 @203,993 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) "/month"
                  - `div.flex-col-gap-2` — 356.7×78 @971,448 | 991: 879×78 @56,1020 | 390: 294×78 @48,1036 · display:flex; dir:column; align:center; gap:8px
                    - `div.div-block-335` — 356.7×78 @971,448 | 991: 879×78 @56,1020 | 390: 294×78 @48,1036 · display:flex; dir:column
                      - `a.button-dark.button-primary` — 356.7×40 @971,448 | 991: 879×40 @56,1020 | 390: 294×40 @48,1036 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; flex:1 1 0%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `https://app.foreplay.co/sign-up`
                        - `div.button-text-block` — 123.3×24 @1078,456 | 991: 123.3×24 @424,1028 | 390: 123.3×24 @123,1044 · pos:relative; pad:0px 6px; z:2
                          - `div.text-heading-m` — 111.3×24 @1084,456 | 991: 111.3×24 @430,1028 | 390: 111.3×24 @129,1044 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14) "Start Free Trial"
                        - `div.button-icon-block.icon-right.opacity-100` — 24×24 @1197,456 | 991: 24×24 @543,1028 | 390: 24×24 @243,1044 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; z:2
                          - `div.icon-medium` — 24×24 @1197,456 | 991: 24×24 @543,1028 | 390: 24×24 @243,1044 · display:flex; justify:center; align:center
                            - `div.svg.w-embed` — 24×24 @1197,456 | 991: 24×24 @543,1028 | 390: 24×24 @243,1044 · display:flex; justify:center; align:center
                              - `svg` — 24×24 @1197,456 | 991: 24×24 @543,1028 | 390: 24×24 @243,1044 · overflow:hidden · SVG `/assets/pages/api/svg-svg-185ries.svg`
                      - `div.free-credit-pricing` — 356.7×28 @971,498 | 991: 879×28 @56,1070 | 390: 294×28 @48,1086 · display:flex; justify:center; pad:4px 8px; mar:10px 0px 0px 0px; bg:rgba(255, 255, 255, 0.06); radius:4px
                        - `div.text-label-s` — 235.3×20 @1032,502 | 991: 235.3×20 @378,1074 | 390: 235.3×20 @77,1090 · font:Inter 14px/20px w500 ls-0.09px; color:rgba(255, 255, 255, 0.36); align-text:center "10,000 Free credits during your trial"
                    - `div.no-cc-required` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: "No credit card required", svg 1130es6
            - `div#w-node-a1e63b10-a410-ef9c-0c96-923e20146dad-26390c72.pricing-footer` — 1264×306 @88,575 | 991: 927×590 @32,1154 | 390: 342×732 @24,1158 · display:flex; gcol:span 3/span 3; grow:span 1/span 1; border:1px solid rgba(255, 255, 255, 0.1); radius:20px · Δ991{dir:column} · Δ390{dir:column}
              - `div.pricing-footer-enterprise` — 368×304 @89,576 | 991: 925×280 @33,1155 | 390: 340×300 @25,1159 · display:flex; dir:column; gap:20px; pad:20px 24px 24px 24px; maxw:368px; minw:320px · Δ991{maxw:none} · Δ390{maxw:none}
                - `div.pricing-footer-head` — 320×72 @113,596 | 991: 877×52 @57,1175 | 390: 292×72 @49,1179 · display:flex; dir:column; gap:8px; pad:8px 0px 0px 0px
                  - `div.text-overline` — 320×16 @113,604 | 991: 877×16 @57,1183 | 390: 292×16 @49,1187 · font:Inter 12px/16px w550 ls2px; color:rgb(255, 255, 255); tt:uppercase "ENTERPRISE"
                  - `div.text-alpha-100` — 320×40 @113,628 | 991: 877×20 @57,1207 | 390: 292×40 @49,1211 · flex:1 1 0%
                    - `div.text-body-s` — 320×40 @113,628 | 991: 877×20 @57,1207 | 390: 292×40 @49,1211 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) "For custom API use cases and large credit usage." (2 lines)
                - `div.horizontal_divider` — 320×1 @113,688 | 991: 877×1 @57,1247 | 390: 292×1 @49,1271 · bg:rgb(23, 25, 32)
                - `div.pricing-footer-custom` — 320×60 @113,709 | 991: 877×60 @57,1268 | 390: 292×60 @49,1292 · display:flex; dir:column; gap:8px
                  - `h4.text-display-h5` — 320×32 @113,709 | 991: 877×32 @57,1268 | 390: 292×32 @49,1292 · font:Inter Display 24px/32px w600 ls-0.16px; color:rgb(255, 255, 255) "Custom"
                  - `div.flex-gap-1` — 320×20 @113,749 | 991: 877×20 @57,1308 | 390: 292×20 @49,1332 · display:flex; align:center; gap:4px
                    - `div.svg.w-embed` — 20×20 @113,749 | 991: 20×20 @57,1308 | 390: 20×20 @49,1332 · display:flex; justify:center; align:center
                      - `svg` — 20×20 @113,749 | 991: 20×20 @57,1308 | 390: 20×20 @49,1332 · overflow:hidden · SVG `/assets/pages/api/svg-svg-v8ic9h.svg`
                    - `div.text-label-s` — 105.2×20 @137,749 | 991: 105.2×20 @81,1308 | 390: 105.2×20 @73,1332 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(255, 255, 255) "Save up-to 80%"
                - `div.horizontal_divider` — 320×1 @113,789 | 991: 877×1 @57,1348 | 390: 292×1 @49,1372 · bg:rgb(23, 25, 32)
                - `a.button-dark.button-secondary` — 320×42 @113,810 | 991: 877×42 @57,1369 | 390: 292×42 @49,1393 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(9, 10, 14); border:1px solid rgb(36, 38, 46); radius:10px; z:5; transition:0.2s · href `/book-demo`
                  - `div.button-text-block` — 156×24 @185,819 | 991: 156×24 @407,1378 | 390: 156×24 @107,1402 · pos:relative; pad:0px 6px; z:2
                    - `div.text-heading-m` — 144×24 @191,819 | 991: 144×24 @413,1378 | 390: 144×24 @113,1402 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Talk with an Expert"
                  - `div.button-icon-block.icon-right` — 24×24 @337,819 | 991: 24×24 @560,1378 | 390: 24×24 @259,1402 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                    - `div.icon-medium` — 24×24 @337,819 | 991: 24×24 @560,1378 | 390: 24×24 @259,1402 · display:flex; justify:center; align:center
                      - `div.svg.w-embed` — 24×24 @337,819 | 991: 24×24 @560,1378 | 390: 24×24 @259,1402 · display:flex; justify:center; align:center
                        - `svg` — 24×24 @337,819 | 991: 24×24 @560,1378 | 390: 24×24 @259,1402 · overflow:hidden · SVG `/assets/pages/api/svg-svg-185ries.svg`
              - `div.pricing-footer-vertical_divider` — 1×0 @457,576 | 991: 1×0 @33,1435 | 390: 1×0 @25,1459 · bg:rgba(255, 255, 255, 0.16)
              - `div.pricing-footer-extra` — 893×304 @458,576 | 991: 925×308 @33,1435 | 390: 340×430 @25,1459 · display:flex; dir:column; justify:space-between; gap:40px; pad:32px 24px; flex:1 1 0%
                - `div.pricing-footer-extra-content` — 845×116 @482,608 | 991: 877×116 @57,1467 | 390: 292×156 @49,1491 · display:flex; dir:column; gap:12px
                  - `div.text-alpha-100` — 845×20 @482,608 | 991: 877×20 @57,1467 | 390: 292×40 @49,1491 · flex:1 1 0%
                    - `div.text-label-s` — 845×20 @482,608 | 991: 877×20 @57,1467 | 390: 292×40 @49,1491 · font:Inter 14px/20px w500 ls-0.09px; color:rgba(255, 255, 255, 0.68) "Let's discuss a tailored solution that covers unique needs."
                  - `ul.pricing-footer-extra-list` — 845×84 @482,640 | 991: 877×84 @57,1499 | 390: 292×104 @49,1543 · display:flex; dir:column; gap:12px
                    - `li.pricing-footer-extra-list-item` — 845×20 @482,640 | 991: 877×20 @57,1499 | 390: 292×20 @49,1543 · display:flex; align:center; gap:8px
                      - `div.svg.w-embed` — 20×20 @482,640 | 991: 20×20 @57,1499 | 390: 20×20 @49,1543 · display:flex; justify:center; align:center
                        - `svg` — 20×20 @482,640 | 991: 20×20 @57,1499 | 390: 20×20 @49,1543 · overflow:hidden · SVG `/assets/pages/api/svg-svg-yw0r87.svg`
                      - `div.text-body-s` — 191.8×20 @510,640 | 991: 191.8×20 @85,1499 | 390: 191.8×20 @77,1543 · font:Inter 14px/20px w400 ls-0.09px; color:rgb(255, 255, 255) "Highly discounted API credits"
                    - `li.pricing-footer-extra-list-item` — 845×20 @482,672 | 991: 877×20 @57,1531 | 390: 292×20 @49,1575 · display:flex; align:center; gap:8px
                      - `div.svg.w-embed` — 20×20 @482,672 | 991: 20×20 @57,1531 | 390: 20×20 @49,1575 · display:flex; justify:center; align:center
                        - `svg` — 20×20 @482,672 | 991: 20×20 @57,1531 | 390: 20×20 @49,1575 · overflow:hidden · SVG `/assets/pages/api/svg-svg-yw0r87.svg`
                      - `div.text-body-s` — 203.8×20 @510,672 | 991: 203.8×20 @85,1531 | 390: 203.8×20 @77,1575 · font:Inter 14px/20px w400 ls-0.09px; color:rgb(255, 255, 255) "Priority in-app or Slack support"
                    - `li.pricing-footer-extra-list-item` — 845×20 @482,704 | 991: 877×20 @57,1563 | 390: 292×40 @49,1607 · display:flex; align:center; gap:8px
                      - `div.svg.w-embed` — 20×20 @482,704 | 991: 20×20 @57,1563 | 390: 20×20 @49,1617 · display:flex; justify:center; align:center
                        - `svg` — 20×20 @482,704 | 991: 20×20 @57,1563 | 390: 20×20 @49,1617 · overflow:hidden · SVG `/assets/pages/api/svg-svg-yw0r87.svg`
                      - `div.text-body-s` — 297.4×20 @510,704 | 991: 297.4×20 @85,1563 | 390: 264×40 @77,1607 · font:Inter 14px/20px w400 ls-0.09px; color:rgb(255, 255, 255) "Early access to new features and integrations"
                - `div.div-block-332` — 845×84 @482,764 | 991: 877×88 @57,1623 | 390: 292×170 @49,1687 · display:flex; dir:column; gap:16px
                  - `div.text-alpha-100` — 845×20 @482,764 | 991: 877×20 @57,1623 | 390: 292×40 @49,1687 · flex:1 1 0%
                    - `div.text-label-s` — 845×20 @482,764 | 991: 877×20 @57,1623 | 390: 292×40 @49,1687 · font:Inter 14px/20px w500 ls-0.09px; color:rgba(255, 255, 255, 0.68) "Trusted by over 10,000 growth teams and agencies"
                  - `div.pricing-enterprise-logo-wrapper` — 845×48 @482,800 | 991: 877×52 @57,1659 | 390: 292×114 @49,1743 · display:flex; wrap:wrap; justify:space-between; align:center; gap:15px
                    - `div.pricing-grid-logo-wrapper` — 92×48 @482,800 | 991: 96×52 @57,1659 | 390: 88×28 @49,1743 · display:flex; dir:column; justify:center; align:center; pad:10px; transition:0.2s · Δ991{pad:12px} · Δ390{pad:8px}
                      - `div.home-hero-logo-image.w-embed` — 72×28 @492,810 | 991: 72×28 @69,1671 | 390: 54×9 @66,1753 · display:flex; justify:center; align:center · Δ390{transform:matrix(0.75, 0, 0, 0.75, 0, 0)}
                        - `svg` — 72×24 @492,812 | 991: 72×24 @69,1673 | 390: 54×18 @66,1748 · overflow:hidden · SVG `/assets/pages/api/svg-home-hero-logo-image-za5l90.svg`
                    - `div.pricing-grid-logo-wrapper` — 150×48 @640,800 | 991: 154×52 @222,1659 | 390: 146×28 @195,1743 · display:flex; dir:column; justify:center; align:center; pad:10px; transition:0.2s · Δ991{pad:12px} · Δ390{pad:8px}
                      - `div.home-hero-logo-image.w-embed` — 130×28 @650,810 | 991: 130×28 @234,1671 | 390: 97.5×9 @219,1753 · display:flex; justify:center; align:center · Δ390{transform:matrix(0.75, 0, 0, 0.75, 0, 0)}
                        - `svg` — 130×19 @650,815 | 991: 130×19 @234,1676 | 390: 97.5×14.3 @219,1750 · overflow:hidden · SVG `/assets/pages/api/svg-home-hero-logo-image-6jksov.svg`
                    - …3 more `div.pricing-grid-logo-wrapper` siblings with the same structure (5 total):
                      - [3] 115×48 @856,800 — svg pywyqt
                      - [4] 141×48 @1037,800 — svg qiancg
                      - [5] 83×48 @1244,800 — svg 5mxnba

### S6. `div.section`

y/height: 1440 3423/894.8 · 991 3978/893 · 390 4959/837

- `div.container` — 1440×894.8 @0,0 | 991: 991×893 @0,0 | 390: 390×837 @0,0 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
  - `div.faq` — 1360×894.8 @40,0 | 991: 927×893 @32,0 | 390: 342×837 @24,0 · display:flex; dir:column; gap:48px; pad:140px 0px · Δ390{gap:40px; pad:64px 0px 80px 0px}
    - `div.section-head` — 720×149.8 @360,140 | 991: 720×148 @136,140 | 390: 342×192 @24,64 · display:flex; dir:column; align:center; gap:12px; mar:0px 320px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
      - `div.section-head-wrapper` — 512×149.8 @464,140 | 991: 512×148 @240,140 | 390: 342×192 @24,64 · display:flex; dir:column; align:center; gap:12px
        - `div.text-overline.text-white-68` — 29.5×16 @705,140 | 991: 29.5×16 @481,140 | 390: 29.5×16 @180,64 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "FAQ"
        - `h3.text-display-h2` — 498.7×53.8 @471,168 | 991: 453.3×52 @269,168 | 390: 342×96 @24,92 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Questions about the API?"
        - `div.section-head_paragraph` — 512×56 @464,234 | 991: 512×56 @240,232 | 390: 342×56 @24,200 · maxw:512px
          - `p.text-body-l` — 512×56 @464,234 | 991: 512×56 @240,232 | 390: 342×56 @24,200 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty "Most common questions about the Foreplay API pricing and features." (2 lines)
    - `div.faq-block-container` — 752×305 @344,338 | 991: 752×305 @120,336 | 390: 342×305 @24,296 · mar:0px 304px; maxw:752px · Δ991{mar:0px 87.5px} · Δ390{mar:0px} · data {"data-accordion-container":""}
      - `div.` — 752×305 @344,338 | 991: 752×305 @120,336 | 390: 342×305 @24,296
        - `div.faq-block` — 752×61 @344,338 | 991: 752×61 @120,336 | 390: 342×61 @24,296 · display:flex; justify:center; align:flex-start; gap:44px; pad:20px 0px 12px 0px; border:T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-accordion-item":"","data-expanded":"false"}
          - `div.faq-block_content` — 680×24 @344,358 | 991: 680×24 @120,356 | 390: 270×24 @24,316 · display:flex; dir:column; flex:1 1 0%
            - `div.faq-block_head` — 680×24 @344,358 | 991: 680×24 @120,356 | 390: 270×24 @24,316 · display:flex; align:center; gap:44px
              - `h4.text-label-l` — 183.8×24 @344,358 | 991: 183.8×24 @120,356 | 390: 163.4×24 @24,316 · font:Inter 18px/24px w500 ls-0.259999px; color:rgba(255, 255, 255, 0.68) · Δ390{font:16px/24px; ls:-0.23111px} "Do credits carry over?"
            - `div.faq-block_body` — 680×0 @344,382 | 991: 680×0 @120,380 | 390: 270×0 @24,340 · overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
              - `div.faq-block_answer` — 680×56 @344,382 | 991: 680×56 @120,380 | 390: 270×76 @24,340 · pad:8px 0px; overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
                - `p` — 680×40 @344,390 | 991: 680×40 @120,388 | 390: 270×60 @24,348 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) ‹copy: ~118 chars, 2 lines @1440›
          - `div.faq-block_icon` — 28×28 @1068,358 | 991: 28×28 @844,356 | 390: 28×28 @338,316 · display:flex; justify:center; align:center; transition:0.2s
            - `div.icon-medium` — 24×24 @1070,360 | 991: 24×24 @846,358 | 390: 24×24 @340,318 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @1070,360 | 991: 24×24 @846,358 | 390: 24×24 @340,318 · display:flex; justify:center; align:center
                - `svg` — 24×24 @1070,360 | 991: 24×24 @846,358 | 390: 24×24 @340,318 · overflow:hidden · SVG `/assets/pages/api/svg-svg-wqicrt.svg`
        - `div.faq-block` — 752×61 @344,399 | 991: 752×61 @120,397 | 390: 342×61 @24,357 · display:flex; justify:center; align:flex-start; gap:44px; pad:20px 0px 12px 0px; border:T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-accordion-item":"","data-expanded":"false"}
          - `div.faq-block_content` — 680×24 @344,419 | 991: 680×24 @120,417 | 390: 270×24 @24,377 · display:flex; dir:column; flex:1 1 0%
            - `div.faq-block_head` — 680×24 @344,419 | 991: 680×24 @120,417 | 390: 270×24 @24,377 · display:flex; align:center; gap:44px
              - `h4.text-label-l` — 277×24 @344,419 | 991: 277×24 @120,417 | 390: 246.2×24 @24,377 · font:Inter 18px/24px w500 ls-0.259999px; color:rgba(255, 255, 255, 0.68) · Δ390{font:16px/24px; ls:-0.23111px} "How does pro-rated billing work?"
            - `div.faq-block_body` — 680×0 @344,443 | 991: 680×0 @120,441 | 390: 270×0 @24,401 · overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
              - `div.faq-block_answer` — 680×56 @344,443 | 991: 680×56 @120,441 | 390: 270×96 @24,401 · pad:8px 0px; overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
                - `p` — 680×40 @344,451 | 991: 680×40 @120,449 | 390: 270×80 @24,409 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) ‹copy: ~135 chars, 2 lines @1440›
          - `div.faq-block_icon` — 28×28 @1068,419 | 991: 28×28 @844,417 | 390: 28×28 @338,377 · display:flex; justify:center; align:center; transition:0.2s
            - `div.icon-medium` — 24×24 @1070,421 | 991: 24×24 @846,419 | 390: 24×24 @340,379 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @1070,421 | 991: 24×24 @846,419 | 390: 24×24 @340,379 · display:flex; justify:center; align:center
                - `svg` — 24×24 @1070,421 | 991: 24×24 @846,419 | 390: 24×24 @340,379 · overflow:hidden · SVG `/assets/pages/api/svg-svg-wqicrt.svg`
        - …3 more `div.` siblings with the same structure (5 total):
          - [3] 752×61 @344,460 — "When do my credits renew?", svg wqicrt, ‹~197ch›
          - [4] 752×61 @344,521 — "How are credits calculated?", svg wqicrt, ‹~70ch›, "For example,", ‹~67ch›, ‹~112ch›
          - [5] 752×61 @344,582 — "When will my credits be added?", svg wqicrt, ‹~177ch›
    - `div.faq-buttons` — 1360×64 @40,691 | 991: 927×64 @32,689 | 390: 342×116 @24,641 · display:flex; justify:center; align:center; gap:12px; pad:12px 0px · Δ390{dir:column; align:stretch}
      - `a#intercomButton.button-dark.ghost-icon-button` — 177.4×40 @536,703 | 991: 177.4×40 @311,701 | 390: 342×40 @24,653 · display:flex; justify:center; align:center; gap:5px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `#`
        - `div.button-icon-block.icon-left` — 24×24 @544,711 | 991: 24×24 @319,709 | 390: 24×24 @114,661 · display:flex; justify:center; align:center; pos:relative; mar:0px -4px 0px 0px; opacity:0.68; z:2
          - `div.icon-medium` — 24×24 @544,711 | 991: 24×24 @319,709 | 390: 24×24 @114,661 · display:flex; justify:center; align:center
            - `div.svg.w-embed` — 20×20 @546,713 | 991: 20×20 @321,711 | 390: 20×20 @116,663 · display:flex; justify:center; align:center
              - `svg` — 20×20 @546,713 | 991: 20×20 @321,711 | 390: 20×20 @116,663 · overflow:hidden · SVG `/assets/pages/api/svg-svg-1i4rn0n.svg`
        - `div.button-text-block` — 136.4×24 @569,711 | 991: 136.4×24 @344,709 | 390: 136.4×24 @139,661 · pos:relative; pad:0px 6px; z:2
          - `div.text-heading-m` — 124.4×24 @575,711 | 991: 124.4×24 @350,709 | 390: 124.4×24 @145,661 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Contact support"
      - `a.button-dark.ghost-icon-button` — 179.1×40 @725,703 | 991: 179.1×40 @501,701 | 390: 342×40 @24,705 · display:flex; justify:center; align:center; gap:5px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `https://foreplay.featurebase.app/help` target=_blank
        - `div.button-icon-block.icon-left` — 24×24 @733,711 | 991: 24×24 @509,709 | 390: 24×24 @113,713 · display:flex; justify:center; align:center; pos:relative; mar:0px -4px 0px 0px; opacity:0.68; z:2
          - `div.icon-medium` — 24×24 @733,711 | 991: 24×24 @509,709 | 390: 24×24 @113,713 · display:flex; justify:center; align:center
            - `div.svg.w-embed` — 24×24 @733,711 | 991: 24×24 @509,709 | 390: 24×24 @113,713 · display:flex; justify:center; align:center
              - `svg` — 24×24 @733,711 | 991: 24×24 @509,709 | 390: 24×24 @113,713 · overflow:hidden · SVG `/assets/pages/api/svg-svg-1lrvzzc.svg`
        - `div.button-text-block` — 138.1×24 @758,711 | 991: 138.1×24 @534,709 | 390: 138.1×24 @138,713 · pos:relative; pad:0px 6px; z:2
          - `div.text-heading-m` — 126.1×24 @764,711 | 991: 126.1×24 @540,709 | 390: 126.1×24 @144,713 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Knowledge Base"

## Typography roles (computed at 1440; sizes at 991/390 from the same nodes)

| font (family size/lh weight ls) | color | n | @991 | @390 | elements (sample) | example |
|---|---|---|---|---|---|---|
| Inter 14px/20px w400 ls-0.09px | rgba(255, 255, 255, 0.68) | 12 | 14px/20px | 14px/20px | `div.text-body-s` `p` | /month |
| Inter 16px/24px w550 ls-0.18px | rgb(9, 10, 14) | 7 | 16px/24px | 16px/24px | `div.text-heading-m` | Start Free Trial |
| Inter 18px/24px w500 ls-0.259999px | rgba(255, 255, 255, 0.68) | 5 | 18px/24px | 16px/24px | `h4.text-label-l` | Do credits carry over? |
| Inter 16px/24px w550 ls-0.18px | rgb(255, 255, 255) | 4 | 16px/24px | 16px/24px | `div.text-heading-m` | View Pricing |
| Inter Display 24px/32px w600 ls-0.16px | rgb(255, 255, 255) | 4 | 24px/32px | 24px/32px | `div.text-display-h5` `h4.text-display-h5` | $99 |
| Inter 12px/16px w550 ls2px uppercase | rgba(255, 255, 255, 0.36) | 3 | 12px/16px | 12px/16px | `h1.text-overline.text-white-68` `div.text-overline.text-white-68` | API |
| Inter 18px/28px w400 ls-0.259999px | rgba(255, 255, 255, 0.68) | 3 | 18px/28px | 18px/28px | `p.text-body-l.text-white-84` `p.text-body-l` | ~76 chars |
| Inter 16px/24px w400 ls-0.18px | rgba(255, 255, 255, 0.68) | 3 | 16px/24px | 16px/24px | `div.text-body-m` | Chat with the Foreplay API Docs. |
| Inter Display 36px/44px w600 ls-0.26px | rgb(9, 10, 14) | 3 | 36px/44px | 36px/44px | `h2.text-display-h3` | Spyder API |
| Inter 18px/28px w400 ls-0.259999px | rgb(52, 54, 66) | 3 | 18px/28px | 18px/28px | `p.text-body-l` | ~126 chars |
| Inter 18px/24px w500 ls-0.259999px | rgb(255, 255, 255) | 3 | 18px/24px | 16px/24px | `div.text-label-l` | 100,000 Credits |
| Inter 14px/20px w500 ls-0.09px | rgba(255, 255, 255, 0.36) | 3 | 14px/20px | 14px/20px | `div.text-label-s` | 10,000 Free credits during your trial |
| Inter 14px/20px w400 ls-0.09px | rgb(255, 255, 255) | 3 | 14px/20px | 14px/20px | `div.text-body-s` | Highly discounted API credits |
| Inter 16px/24px w500 ls-0.18px | rgb(250, 250, 253) | 2 | 16px/24px | 16px/24px | `div.text-label-m` | Docs GPT |
| Inter Display 44px/53.76px w600 ls-0.33px | rgb(255, 255, 255) | 2 | 40px/52px | 36px/48px | `h1.text-display-h2` `h3.text-display-h2` | Additional API Credit Pricing |
| Inter 14px/20px w500 ls-0.09px | rgba(255, 255, 255, 0.68) | 2 | 14px/20px | 14px/20px | `div.text-label-s` | Let's discuss a tailored solution that c |
| Inter Display 60px/68px w600 ls-0.45px | rgba(255, 255, 255, 0.88) | 1 | 60px/68px | 38px/48px | `h2.text-display-h1.hero-title` | Power AI agents & workflows with competi |
| Inter 16px/24px w500 ls-0.18px | rgb(255, 255, 255) | 1 | 16px/24px | 16px/24px | `div.text-label-m` | Integrations |
| Inter Display 36px/44px w600 ls-0.26px | rgb(23, 25, 32) | 1 | 36px/44px | 36px/44px | `h2.text-display-h3` | Extract and leverage enriched advertisin |
| Inter 18px/28px w400 ls-0.259999px | rgb(36, 38, 46) | 1 | 18px/28px | 18px/28px | `p.text-body-l` | ~110 chars |
| Inter 12px/16px w550 ls2px uppercase | rgb(255, 255, 255) | 1 | 12px/16px | 12px/16px | `div.text-overline` | ENTERPRISE |
| Inter 14px/20px w500 ls-0.09px | rgb(255, 255, 255) | 1 | 14px/20px | 14px/20px | `div.text-label-s` | Save up-to 80% |

## Colors, gradients, radii, shadows in use (non-text, 1440)

**background-color**
- `rgb(255, 255, 255)` — `a.button-dark.button-primary`, `div.section-white-block`, `a.button-light.button-stroke`
- `rgb(9, 10, 14)` — `a.button-dark.button-secondary`
- `rgb(2, 3, 8)` — `a.api-docs-link`, `div.api-pricing-card-container`, `a#intercomButton.button-dark.ghost-icon-button`, `a.button-dark.ghost-icon-button`
- `rgba(255, 255, 255, 0.06)` — `div.api-credis-pricing-title`, `div.free-credit-pricing`
- `rgb(23, 25, 32)` — `div.horizontal_divider`
- `rgba(255, 255, 255, 0.16)` — `div.pricing-footer-vertical_divider`

**background-image**
- `radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88))` — `h2.text-display-h1.hero-title`
- `url(nav-spritesheet-160x160-spyder.png)` — `div.footer-product-icon.sprite-image.sprite-spyder`
- `url(nav-spritesheet-160x160-discovery.png)` — `div.footer-product-icon.sprite-image.sprite-discovery`
- `url(nav-spritesheet-160x160-library.png)` — `div.footer-product-icon.sprite-image.sprite-library`

**border**
- `1px solid rgb(36, 38, 46)` — `a.button-dark.button-secondary`
- `1px solid rgba(255, 255, 255, 0.1)` — `a.api-docs-link`, `div#w-node-a1e63b10-a410-ef9c-0c96-923e20146dad-26390c72.pricing-footer`
- `T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0` — `div.faq-block`

**radius**
- `10px` — `a.button-dark.button-primary`, `a.button-dark.button-secondary`, `a.button-light.button-stroke`, `a#intercomButton.button-dark.ghost-icon-button`, `a.button-dark.ghost-icon-button`
- `20px` — `a.api-docs-link`, `img.left-right-section-image`, `div.api-pricing-card-container`, `div#w-node-a1e63b10-a410-ef9c-0c96-923e20146dad-26390c72.pricing-footer`
- `36px` — `div.section-white-block`
- `100px` — `div.api-credis-pricing-title`
- `4px` — `div.free-credit-pricing`

**box-shadow**
- `rgb(233, 234, 239) 0px 0px 0px 1px` — `a.button-light.button-stroke`
- `rgba(255, 255, 255, 0.16) 0px 0px 0px 1px` — `div.api-pricing-card-container`

**opacity**
- `0.68` — `div.button-icon-block.icon-right`, `div.button-icon-block.icon-left`

**transition**
- `0.2s` — `a.button-dark.button-primary`, `a.button-dark.button-secondary`, `a.api-docs-link`, `div.pricing-grid-logo-wrapper`, `div.faq-block_icon` (+2)
- `0.15s` — `a.button-light.button-stroke`
- `0.9s cubic-bezier(0.19, 1, 0.22, 1)` — `div.faq-block`, `div.faq-block_body`, `div.faq-block_answer`

## Assets (local path ↔ element)

| local file | kind | element | natural | displayed @1440 | source URL |
|---|---|---|---|---|---|
| `/assets/pages/api/68b700a67c674a39df0d4960_api-icon-3.webp` | img | `api-icon` (s1.1.0.1.0) | 176×176 | 88×113 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68b700a67c674a39df0d4960_api-icon-3.webp |
| `/assets/pages/api/68b6edc929653fab1d6de4d0_Screenshot 2025-08-28 at 22.36.37 2.avif` | img | `icon-56` (s1.1.0.1.1.3.0.0.0) | 113×113 | 56×56 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68b6edc929653fab1d6de4d0_Screenshot%202025-08-28%20at%2022.36.37%202.avif |
| `/assets/pages/api/68b6edc96b8314f18b566e33_openai 1.avif` | img | `icon-56` (s1.1.0.1.1.3.0.1.0) | 112×112 | 56×56 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68b6edc96b8314f18b566e33_openai%201.avif |
| `/assets/pages/api/68b6ef420e259ffe76d23e1a_Group 29.webp` | img | `icon-44` (s1.1.0.1.1.4.1.0.0) | 88×88 | 44×44 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68b6ef420e259ffe76d23e1a_Group%2029.webp |
| `/assets/pages/api/68b6ef42c9ad43c54bb3080f_Group 26.avif` | img | `icon-44` (s1.1.0.1.1.4.1.1.0) | 88×88 | 44×44 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68b6ef42c9ad43c54bb3080f_Group%2026.avif |
| `/assets/pages/api/68b6ef42db6dce89b740730b_Group 25.webp` | img | `icon-44` (s1.1.0.1.1.4.1.2.0) | 88×88 | 44×44 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68b6ef42db6dce89b740730b_Group%2025.webp |
| `/assets/pages/api/68b6ef4232d52577c91c5b8b_Group 27.avif` | img | `icon-44` (s1.1.0.1.1.4.1.3.0) | 88×88 | 44×44 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68b6ef4232d52577c91c5b8b_Group%2027.avif |
| `/assets/pages/api/68b6ef4229653fab1d6ebc37_Group 28.avif` | img | `icon-44` (s1.1.0.1.1.4.1.4.0) | 88×88 | 44×44 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/68b6ef4229653fab1d6ebc37_Group%2028.avif |
| `/assets/pages/api/nav-spritesheet-160x160-spyder.png` | bg | `footer-product-icon.sprite-image.sprite-spyder` (s3.0.0.1.0.0.0.0.0.0.0.0) |  | 44×44 | https://publicassets.foreplay.co/nav-spritesheet-160x160-spyder.png |
| `/assets/pages/api/681bc98f0887a5dda006dfe7_spyder-api.webp` | img | `lens-gamification-illustration-image.with-padding` (s3.0.0.1.0.0.1.0) | 560×359 | 560×359.8 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/681bc98f0887a5dda006dfe7_spyder-api.webp |
| `/assets/pages/api/nav-spritesheet-160x160-discovery.png` | bg | `footer-product-icon.sprite-image.sprite-discovery` (s3.0.0.1.0.1.0.0.0.0.0.0) |  | 44×44 | https://publicassets.foreplay.co/nav-spritesheet-160x160-discovery.png |
| `/assets/pages/api/681bc98fb1fefc751990ef9a_discovery-api.webp` | img | `left-right-section-image` (s3.0.0.1.0.1.1.0) | 560×359 | 560×359.8 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/681bc98fb1fefc751990ef9a_discovery-api.webp |
| `/assets/pages/api/nav-spritesheet-160x160-library.png` | bg | `footer-product-icon.sprite-image.sprite-library` (s3.0.0.1.0.2.0.0.0.0.0.0) |  | 44×44 | https://publicassets.foreplay.co/nav-spritesheet-160x160-library.png |
| `/assets/pages/api/681bc98f48f11604a4a60a1e_swipe-file-api.webp` | img | `lens-gamification-illustration-image.with-padding` (s3.0.0.1.0.2.1.0) | 560×359 | 560×359.8 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/681bc98f48f11604a4a60a1e_swipe-file-api.webp |

**Inline SVGs saved** (each distinct inline `<svg>` in page content):

- `/assets/pages/api/svg-svg-185ries.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/api/svg-icon-large-1yeu1rx.svg` — 28×30 in `icon-large.w-embed`
- `/assets/pages/api/svg-svg-1130es6.svg` — 0×0 in `svg.w-embed`
- `/assets/pages/api/svg-svg-v8ic9h.svg` — 20×20 in `svg.w-embed`
- `/assets/pages/api/svg-svg-yw0r87.svg` — 20×20 in `svg.w-embed`
- `/assets/pages/api/svg-home-hero-logo-image-za5l90.svg` — 72×24 in `home-hero-logo-image.w-embed`
- `/assets/pages/api/svg-home-hero-logo-image-6jksov.svg` — 130×19 in `home-hero-logo-image.w-embed`
- `/assets/pages/api/svg-home-hero-logo-image-pywyqt.svg` — 95×21 in `home-hero-logo-image.w-embed`
- `/assets/pages/api/svg-home-hero-logo-image-qiancg.svg` — 121×13 in `home-hero-logo-image.w-embed`
- `/assets/pages/api/svg-home-hero-logo-image-5mxnba.svg` — 63×21 in `home-hero-logo-image.w-embed`
- `/assets/pages/api/svg-svg-wqicrt.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/api/svg-svg-1i4rn0n.svg` — 20×20 in `svg.w-embed`
- `/assets/pages/api/svg-svg-1lrvzzc.svg` — 24×24 in `svg.w-embed`

## Motion

### Webflow IX2 (from `Webflow.require("ix2").store.getState().ixData`, filtered to elements on this page outside nav/footer)

- **e-214** SCROLLING_IN_VIEW → GENERAL_CONTINUOUS_ACTION list `a-71` (Product / Hero Parallax) on `product-hero-animation-trigger` ×1; mq ["main","medium"]; config [{"continuousParameterGroupId":"a-71-p","smoothing":0,"startsEntering":false,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}]

- `a-71` "Product / Hero Parallax"
  - continuous SCROLL_PROGRESS:
    - @0%: TRANSFORM_SCALE .product-hero-sticky {"xValue":1,"yValue":1,"locked":true} ‖ TRANSFORM_MOVE .product-hero-sticky {"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"} ‖ STYLE_OPACITY .product-hero-sticky {"value":1,"unit":""}
    - @100%: TRANSFORM_MOVE .product-hero-sticky {"yValue":-33,"xUnit":"PX","yUnit":"%","zUnit":"PX"} ease inOutCubic ‖ TRANSFORM_SCALE .product-hero-sticky {"xValue":0.75,"yValue":0.75,"locked":true} ‖ STYLE_OPACITY .product-hero-sticky {"value":0,"unit":""}

### Running Web Animations after load (`document.getAnimations()`, page content only)

- none

### Widgets / embeds detected

- s0 `div.code-style.w-embed` 
- s4.0.0.0.1.0.0.0.0.0.0.0 `div.icon-large.w-embed` 
- s4.0.0.0.1.0.1.0.0.0.0.0 `div.icon-large.w-embed` 
- s4.0.0.0.1.0.2.0.0.0.0.0 `div.icon-large.w-embed` 
- s4.0.0.0.1.0.3.2.1.1.0.0 `div.home-hero-logo-image.w-embed` 
- s4.0.0.0.1.0.3.2.1.1.1.0 `div.home-hero-logo-image.w-embed` 
- s4.0.0.0.1.0.3.2.1.1.2.0 `div.home-hero-logo-image.w-embed` 
- s4.0.0.0.1.0.3.2.1.1.3.0 `div.home-hero-logo-image.w-embed` 
- s4.0.0.0.1.0.3.2.1.1.4.0 `div.home-hero-logo-image.w-embed` 
- s5.0.0.1.0 `div.code-style.w-embed` 
- s5.0.0.1.1 `div.w-dyn-list` 

### Page-level `<style>` embeds (verbatim CSS)

From s0:
```css
.chevron-icon {
    transition: transform 0.5s var(--expo-out);
    transform-origin: center;
  }

  [aria-expanded="true"] .chevron-icon {
    transform: rotate(180deg);
  }

  .sprite-image {
    background-position: 0px 0px;
    background-size: auto 100%;
    background-repeat: no-repeat;
  }

  .sprite-image.sprite-library {
    background-image: url('https://publicassets.foreplay.co/nav-spritesheet-160x160-library.png');
  }

  .sprite-image.sprite-discovery {
    background-image: url('https://publicassets.foreplay.co/nav-spritesheet-160x160-discovery.png');
  }

  .sprite-image.sprite-spyder {
    background-image: url('https://publicassets.foreplay.co/nav-spritesheet-160x160-spyder.png');
  }

  .sprite-image.sprite-briefs {
    background-image: url('https://publicassets.foreplay.co/nav-spritesheet-160x160-briefs.png');
  }

  .sprite-image.sprite-lens {
    background-image: url('https://publicassets.foreplay.co/nav-spritesheet-160x160-lens.png');
  }

  .nav-badge-link:hover .nav-badge-gradient {
    opacity: 1;
    transform: translateY(0%);
  }
```
From s5.0.0.1.0:
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

New classes: `product-hero-canvas` `product-hero` `product-hero-animation-trigger` `product-hero-sticky` `api-icon` `api-hero-content` `hero-text` `max-w-lg` `text-white-84` `api-header-content` `api-docs-link-wrapper` `api-docs-link` `icon-56` `api-docs-text` `api-connections-wrapper` `api-connections-text` `integrations-icons` `api-integration-link` `icon-44` `demo-socialproof` `demo-socailproof-head` `left-right-section-wrapper` `lens-gamification-grid` `lens-gamification-content` `api-product-icon` `footer-product-icon` `sprite-image` `sprite-spyder` `button-stroke` `lens-gamification-illustration` `lens-gamification-illustration-image` `with-padding` `left-right-section` `left-right-section-content` `sprite-discovery` `left-right-section-image-wrapper` `left-right-section-image` `sprite-library` `v-padding-experts` `pricing` `api-pricing-wrapper` `pricing-content` `api-pricing-grid` `api-pricing-card-container` `pricing-card` `pricing-card-head` `api-credis-pricing-title` `icon-large` `horizontal_divider` `pricing-card-cta` `flex-col-gap-2` `flex-baseline` `text-display-h5` `div-block-335` `free-credit-pricing` `no-cc-required` `icon-20` `pricing-footer` `pricing-footer-enterprise` `pricing-footer-head` `text-alpha-0` `pricing-footer-custom` `flex-gap-1` `pricing-footer-vertical_divider` `pricing-footer-extra` `pricing-footer-extra-content` `pricing-footer-extra-list` `pricing-footer-extra-list-item` `div-block-332` `pricing-enterprise-logo-wrapper` `pricing-grid-logo-wrapper` `faq` `faq-block-container` `faq-block` `faq-block_content` `faq-block_head` `faq-block_body` `faq-block_answer` `faq-rtb` `faq-block_icon` `faq-buttons` `ghost-icon-button` `icon-left`

```css
.old__section.black.pricing { padding-top: 10em; padding-bottom: 10em; }
.secondary.pricing { margin-top: 0.75em; }
.icon-20 { width: 20px; height: 20px; }
.icon-20.flip { transform: rotate(180deg); }
.button-icon-block.icon-left { z-index: 2; margin-right: -4px; }
.text-display-h5 { letter-spacing: -0.00666667em; margin-top: 0px; margin-bottom: 0px; font-family: "Inter Display", Arial, sans-serif; font-size: 1.5rem; font-weight: 600; line-height: 2rem; }
.hero-text { gap: 16px; flex-flow: column; justify-content: flex-start; align-items: center; max-width: 900px; display: flex; }
.max-w-lg { max-width: 512px; }
.footer-product-icon { width: 44px; height: 44px; }
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
.text-alpha-0 { color: var(--_lens---neutral-0); }
.pricing { flex-flow: column; padding-top: 72px; padding-bottom: 108px; display: flex; }
.pricing-content { flex-flow: column; display: flex; }
.pricing-footer { border: 1px solid var(--_lens---neutral-700); border-radius: 20px; width: 100%; display: flex; }
.pricing-footer-enterprise { gap: 20px; flex-flow: column; min-width: 320px; max-width: 368px; padding: 20px 24px 24px; display: flex; }
.pricing-footer-extra { gap: 40px; flex-flow: column; flex: 1 1 0%; justify-content: space-between; padding: 32px 24px; display: flex; }
.pricing-footer-vertical_divider { background-color: var(--_lens---neutral-600); width: 1px; height: 100%; }
.pricing-footer-head { gap: 8px; flex-flow: column; padding-top: 8px; display: flex; }
.horizontal_divider { background-color: var(--_lens---solid-700); width: 100%; height: 1px; }
.flex-gap-1 { gap: 4px; justify-content: flex-start; align-items: center; display: flex; }
.pricing-footer-custom { gap: 8px; flex-flow: column; display: flex; }
.pricing-footer-extra-list-item { gap: 8px; justify-content: flex-start; align-items: center; display: flex; }
.pricing-footer-extra-content { gap: 12px; flex-flow: column; display: flex; }
.pricing-footer-extra-list { gap: 12px; flex-flow: column; margin-bottom: 0px; padding-left: 0px; display: flex; }
.div-block-332 { gap: 16px; flex-flow: column; display: flex; }
.pricing-enterprise-logo-wrapper { gap: 15px; flex-flow: wrap; justify-content: space-between; align-items: center; display: flex; }
.pricing-card { gap: 20px; flex-flow: column; padding: 24px; display: flex; }
.pricing-card-head { gap: 8px; text-align: center; flex-flow: column; justify-content: flex-start; align-items: center; display: flex; }
.pricing-card-cta { gap: 20px; flex-flow: column; display: flex; }
.flex-baseline { gap: 4px; align-items: baseline; display: flex; }
.flex-col-gap-2 { gap: 8px; flex-flow: column; justify-content: flex-start; align-items: center; display: flex; }
.flex-col-gap-2.align-start { justify-content: flex-start; align-items: flex-start; }
.div-block-335 { flex-flow: column; width: 100%; display: flex; }
.button-dark.button-stroke { background-color: var(--_lens---background); box-shadow: 0 0 0 1px var(--_lens---neutral-600); color: var(--_lens---solid-0); }
.button-dark.button-stroke:hover { background-color: var(--_lens---neutral-700); box-shadow: 0 0 0 0 var(--_lens---neutral-600); }
.button-dark.button-stroke:active { background-color: var(--_lens---neutral-500); color: var(--_lens---neutral-0); }
.button-dark.button-stroke:focus { box-shadow: 0 0 0 2px var(--_lens---background),0 0 0 3px var(--_lens---neutral-0); }
.button-dark.ghost-icon-button { gap: 5px; background-color: var(--_lens---background); color: var(--_lens---solid-0); }
.button-dark.ghost-icon-button:hover { background-color: var(--_lens---neutral-700); }
.button-dark.ghost-icon-button:active { background-color: var(--_lens---neutral-500); color: var(--_lens---solid-0); }
.button-dark.ghost-icon-button:focus { box-shadow: 0 0 0 2px var(--_lens---background),0 0 0 3px white; }
.button-light.button-stroke { background-color: var(--_lens---solid-0); box-shadow: 0 0 0 1px var(--_lens---solid-50); color: var(--_lens---solid-900); }
.button-light.button-stroke:hover { background-color: var(--_lens---solid-25); box-shadow: 0 0 0 0 var(--_lens---solid-50); }
.button-light.button-stroke:active { background-color: var(--_lens---solid-50); }
.button-light.button-stroke:focus { box-shadow: 0 0 0 2px white,0 0 0 3px var(--_lens---solid-900); }
.product-hero-canvas { width: 0px; height: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0%; }
.lens-gamification-grid { gap: 0px; grid-template-rows: auto; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-auto-columns: 1fr; place-items: center; display: grid; }
.lens-gamification-content { gap: 32px; flex-flow: column; justify-content: center; align-items: flex-start; display: flex; }
.lens-gamification-illustration { padding-left: 16px; padding-right: 16px; }
.product-hero-animation-trigger { pointer-events: none; height: 100vh; position: absolute; inset: -72px 0% auto; }
.demo-socialproof { gap: 72px; flex-flow: column; justify-content: center; align-items: flex-start; padding-top: 80px; padding-bottom: 80px; display: flex; }
.demo-socailproof-head { gap: 16px; grid-template-rows: auto; grid-template-columns: 1fr; grid-auto-columns: 1fr; width: 100%; display: grid; }
.pricing-grid-logo-wrapper { color: var(--_lens---neutral-50); flex-flow: column; justify-content: center; align-items: center; padding: 10px; transition: 0.2s; display: flex; }
.pricing-grid-logo-wrapper:hover { color: var(--_lens---neutral-100); }
.api-product-icon { width: 50px; height: 50px; margin-bottom: 10px; }
.left-right-section-wrapper { gap: 80px; flex-flow: column; display: flex; }
.left-right-section { gap: 24px; grid-template-rows: auto; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-auto-columns: 1fr; place-items: center; display: flex; }
.left-right-section-content { gap: 32px; flex-flow: column; justify-content: center; align-items: flex-start; display: flex; }
.left-right-section-image-wrapper { flex: 1 1 0%; width: 100%; padding-left: 16px; padding-right: 16px; }
.left-right-section-image { border-radius: 20px; }
.product-hero { text-align: center; flex-flow: column; justify-content: flex-start; align-items: center; padding-top: 10px; padding-bottom: 0px; display: flex; }
.product-hero.mobile-app-hero { padding-bottom: 30px; }
.product-hero-sticky { flex-flow: column; justify-content: flex-start; align-items: center; display: flex; position: sticky; top: 100px; }
.v-padding-experts { padding-top: 48px; padding-bottom: 48px; }
.icon-large { flex: 0 0 auto; width: 1.75rem; height: 1.75rem; }
.no-cc-required { display: none; }
.api-pricing-wrapper { gap: 25px; flex-flow: column; display: flex; }
.api-credis-pricing-title { gap: 10px; background-color: var(--_lens---neutral-800); border-radius: 100px; align-items: center; padding: 4px 8px 4px 4px; display: flex; }
.api-pricing-grid { gap: 25px; grid-template-rows: auto; grid-template-columns: 1fr 1fr 1fr; grid-auto-columns: 1fr; place-items: center; margin-top: 48px; padding: 0px; display: grid; }
.api-pricing-card-container { background-color: var(--_lens---background); width: 100%; box-shadow: 0 0 0 1px var(--_lens---neutral-600); border-radius: 20px; }
.api-pricing-card-container.is-last { border-top-right-radius: 20px; border-bottom-right-radius: 20px; }
.api-pricing-card-container.is-middle { box-shadow: 0 0 0 1px var(--_lens---neutral-100); border-radius: 20px; padding-top: 16px; padding-bottom: 16px; position: relative; }
.free-credit-pricing { background-color: var(--_lens---neutral-800); text-align: center; border-radius: 4px; justify-content: center; align-items: stretch; margin-top: 10px; padding: 4px 8px; display: flex; }
.api-docs-link-wrapper { gap: 12px; display: flex; }
.api-docs-link { gap: 10px; border: 1px solid var(--_lens---neutral-700); background-color: var(--_lens---background); color: var(--body); border-radius: 20px; justify-content: flex-start; padding: 8px 16px 8px 9px; transition: 0.2s; display: flex; }
.api-docs-link:hover { border-color: var(--_lens---neutral-500); background-color: var(--_lens---neutral-800); }
.icon-56 { justify-content: center; align-items: center; width: 56px; height: 56px; display: flex; }
.api-docs-text { flex-flow: column; align-items: flex-start; display: flex; }
.api-connections-text { gap: 6px; display: flex; }
.api-connections-wrapper { gap: 10px; flex-flow: column; align-items: center; display: flex; }
.integrations-icons { gap: 12px; display: flex; }
.icon-44 { justify-content: center; align-items: center; width: 44px; height: 44px; display: flex; }
.api-integration-link { color: var(--_lens---neutral-100); position: relative; }
.api-hero-content { gap: 28px; flex-flow: column; justify-content: flex-start; align-items: center; padding-bottom: 42px; display: flex; }
.api-icon { padding-bottom: 25px; }
.button-jumpstart.button-stroke { background-color: var(--_lens---solid-0); box-shadow: 0 0 0 1px var(--_lens---solid-50); color: var(--_lens---solid-900); }
.button-jumpstart.button-stroke:hover { background-color: var(--_lens---solid-25); box-shadow: 0 0 0 0 var(--_lens---solid-50); }
.button-jumpstart.button-stroke:active { background-color: var(--_lens---solid-50); }
.button-jumpstart.button-stroke:focus { box-shadow: 0 0 0 2px white,0 0 0 3px var(--_lens---solid-900); }
@media screen and (max-width: 991px) {
  .pricing-footer { flex-flow: column; }
  .pricing-footer-enterprise { max-width: none; }
  .sprite-image.sprite-library { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f72df2782e8df1d1114_pi-swipefile-hq.webp"); background-position: 50% center; background-repeat: no-repeat; background-size: cover; }
  .sprite-image.sprite-discovery { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f722b39359a238b0ff9_pi-discovery-hq.webp"); background-position: 50% center; background-repeat: no-repeat; background-size: cover; }
  .sprite-image.sprite-spyder { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f72ef4d27826a8d2aa0_pi-spyder-hq.webp"); background-position: 50% center; background-repeat: no-repeat; background-size: cover; }
  .sprite-image.sprite-lens { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f725170de3b3258d310_pi-lens-hq.webp"); background-position: 50% center; background-size: cover; }
  .sprite-image.sprite-briefs { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f72dc306ab5bf957aea_pi-briefs-hq.webp"); background-position: 50% center; background-repeat: no-repeat; background-size: cover; }
  .product-hero-canvas, .comparison-tr-icon { display: none; }
  .lens-gamification-grid { gap: 40px; display: flex; }
  .demo-socialproof { padding-top: 64px; padding-bottom: 64px; }
  .pricing-grid-logo-wrapper { padding: 12px; }
  .left-right-section { gap: 40px; display: flex; }
  .v-padding-experts { padding-top: 32px; padding-bottom: 32px; }
  .api-pricing-grid { gap: 32px; grid-template-rows: auto auto auto; grid-template-columns: 1fr; padding: 0px; overflow: visible; }
  .api-pricing-card-container { width: 100%; }
  .api-pricing-card-container.is-first, .api-pricing-card-container.is-last { border-radius: 20px; }
  .api-pricing-card-container.is-middle { box-shadow: 0 0 0 1px var(--_lens---neutral-600); }
}
@media screen and (max-width: 767px) {
  .faq { gap: 40px; padding-top: 80px; padding-bottom: 80px; }
  .lens-gamification-grid { gap: 64px; flex-flow: column; grid-template-rows: auto auto; grid-template-columns: 1fr; align-items: start; }
  .lens-gamification-illustration-image.with-padding { margin-bottom: -40px; }
  .left-right-section { gap: 24px; flex-flow: column; grid-template-rows: auto auto; grid-template-columns: 1fr; align-items: start; }
  .left-right-section-image-wrapper { padding-left: 0px; padding-right: 0px; }
  .left-right-section-image { width: 100%; }
  .product-hero { padding-top: 64px; }
  .product-hero-sticky { position: relative; top: 0px; }
  .v-padding-experts { padding-top: 24px; padding-bottom: 24px; }
  .api-pricing-grid { gap: 24px; }
}
@media screen and (max-width: 479px) {
  .old__section.black.pricing, .old__section.black.hero { padding-top: 7em; }
  .hero-text { gap: 12px; }
  .faq { padding-top: 64px; padding-bottom: 80px; }
  .faq-buttons { flex-flow: column; align-items: stretch; }
  .pricing { padding-top: 40px; padding-bottom: 80px; }
  .lens-gamification-grid { gap: 40px; }
  .lens-gamification-content { gap: 24px; }
  .lens-gamification-illustration { padding-left: 0px; padding-right: 0px; }
  .lens-gamification-illustration-image.with-padding { margin-bottom: -24px; }
  .demo-socialproof { padding-top: 40px; padding-bottom: 24px; }
  .demo-socailproof-head { gap: 24px; grid-template-rows: auto; }
  .pricing-grid-logo-wrapper { padding: 8px; }
  .left-right-section { gap: 40px; }
  .left-right-section-content { gap: 24px; }
  .left-right-section-image-wrapper { padding-left: 0px; padding-right: 0px; }
  .left-right-section-image { border-radius: 10px; }
  .product-hero { padding-top: 24px; padding-bottom: 24px; }
  .product-hero-sticky { position: relative; top: 0px; }
  .api-pricing-grid { gap: 20px; }
  .api-docs-link-wrapper { flex-flow: column; }
  .api-docs-text { text-align: left; }
  .api-hero-content { gap: 24px; padding-bottom: 24px; position: relative; }
}
```


## Caveats

- Third-party embeds (YouTube lightbox, Cal.com, Senja, Wistia) are noted but their internals were not measured.
- Hover/focus/active values come from the verbatim CSS rules above, plus the homepage spec for shared classes. They were not captured by hovering.
- `y` values are offsets inside each section at that width. Geometry for JS-cloned nodes (marquee clones) is only comparable for the original items.
