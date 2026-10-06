Source: https://www.foreplay.co/book-demo

# /book-demo: Foreplay.co | Book a Demo

Measured on 2026-10-06 with headless Chromium (Playwright 1.63) at 1440×900, 991×900 and 390×844, after a full scroll pass. The Navbar and Footer have the same DOM as the homepage, so reuse `Navbar.jsx` and `Footer.jsx` (CLONE_SPEC.md §1 and §8). Tokens, buttons and type classes are in CLONE_SPEC.md §0; anything shared between these pages is in `specs/_shared-pages.md`. **Copy policy:** short UI strings are verbatim, and long copy is given only as ‹copy: ~N chars, L lines @1440›. Assets are local paths under `public/` (`/assets/...`). Files that already existed in `public/assets` were reused rather than re-downloaded, which is why some paths point at other page folders or at the root. Blocks that are identical to the homepage (the final CTA `.home-cta`, the Chrome-extension card `.home-extension`, and the logo strip `.home-hero-bottom`) are collapsed to a single line, "uses <Component> from src/components". Their internals are not re-specced and their assets were not re-downloaded.

## Build notes (summary)

- **Structure:**
  - S1 hero (container > `.product-hero` > `.api-hero-content`, 900 wide): overline "BOOK A DEMO", `h1.text-display-h2` "1:1 Creative Solutions Call", 2 lines of body-l, then `.booking-options`. That contains an `.apac-section` bar (900×90; "Based in a APAC Country?" / "Request a call in your timezone", a 146.6×100 flags image, and the primary button "Request Call" → `/apac-demo`) and the **Cal.com inline embed** (900×480 @1440). Below it is the homepage logo strip "POWERING +10,000 SOCIAL AD TEAMS & AGENCIES" with 14 logos in a 7-column grid (154×52 cells).
  - S2 `.old-demo` is display:none at every width; skip it.
  - S3 white block: "Loved by brands and agencies globally." plus 3 rating tiles (G2 4.9/5, CHROME 4.8/5, CAPTERRA 4.8/5; 197×128, star SVG 20px), then the **Senja testimonial wall embed** (`.senja-embed`).
  - Footer.
- **Reuse:** the logo grid is the homepage hero logo strip, so reuse the `LOGOS` array and markup from `Hero.jsx` (the same 14 SVGs). `IconG2`/`IconChromeReview` exist in `svgs.jsx` for the rating tiles. Also `Button`.
- **Motion:** logos `.2s` hover (as on the homepage). Buttons .2s. No IX2 on content.
- **Embeds:** Cal.com inline (`team/foreplay/foreplay-demo-action-plan`, dark, column_view) and the Senja wall (widget `c4cbc78b-ee64-4ff7-827d-24eadb3f51c7`). Both are third-party. Size them as measured (Senja ≈3693px tall @1440, ≈11,200px @390) or use placeholders.
- **Fonts:** Inter 500 italic is loaded but has no measured visible use (likely in the hidden old-demo section). The file is at `/assets/pages/book-demo/62a4ee4910ae3435c66edb56_Inter-MediumItalic.otf`.

## Page meta (measured)

- Webflow page id `681a705e3eb74c34c4e41935`. Title: `Foreplay.co | Book a Demo`.
- Meta description: ~148 chars (not transcribed).
- Document height: 1440 → 6009, 991 → 6098, 390 → 14947. Body bg rgb(2, 3, 8).
- Navbar: same DOM as homepage (same node count/height; only the active-link state class differs) → reuse `Navbar.jsx`.
- Footer: same DOM as homepage (same node count/height) → reuse `Footer.jsx` (incl. calendar pop-up + exit-intent modal).
- Fonts loaded: Inter Display 600 normal, Inter 500 italic, Inter 400 normal, Inter 600 normal, Inter 500 normal.

## Section map (DOM order)

Legend: each line is `tag.class — W×H @x,y` at 1440 (y relative to the section top), then `| 991:` and `| 390:` geometry, then non-default computed styles at 1440, then `Δ991{…}` / `Δ390{…}` listing only layout/typography values that differ from 1440. `hidden` = display:none or 0×0 at that width. Text: short UI strings verbatim in quotes; long copy as ‹copy: ~N chars, L lines @1440› (write stand-in copy of matching length). Classes prefixed `w-` (Webflow runtime) are dropped except meaningful widget classes.

### S1. `div.container`

y/height: 1440 72/1007.8 · 991 72/1074 · 390 72/1887

- `div.container` — 1440×1007.8 @0,0 | 991: 991×1074 @0,0 | 390: 390×1887 @0,0 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
  - `div.product-hero` — 1360×1007.8 @40,0 | 991: 927×1074 @32,0 | 390: 342×1887 @24,0 · display:flex; dir:column; align:center; pad:10px 0px 0px 0px · Δ390{pad:24px 0px}
    - `div.product-hero` — 900×821.8 @270,10 | 991: 900×820 @46,10 | 390: 342×1531 @24,24 · display:flex; dir:column; align:center; pad:10px 0px 0px 0px · Δ390{pad:24px 0px}
      - `div.api-hero-content` — 900×811.8 @270,20 | 991: 900×810 @46,20 | 390: 342×1483 @24,48 · display:flex; dir:column; align:center; gap:28px; pad:0px 0px 42px 0px · Δ390{gap:24px; pad:0px 0px 24px 0px; pos:relative}
        - `div.hero-text` — 900×151.8 @270,20 | 991: 900×150 @46,20 | 390: 342×246 @24,48 · display:flex; dir:column; align:center; gap:16px; maxw:900px · Δ390{gap:12px}
          - `div.text-white` — 496.3×79.8 @472,20 | 991: 451.2×78 @270,20 | 390: 342×122 @24,48
            - `div.overline-heading-wrapper` — 496.3×16 @472,20 | 991: 451.2×16 @270,20 | 390: 342×16 @24,48 · mar:0px 0px 10px 0px
              - `h1.text-overline` — 496.3×16 @472,20 | 991: 451.2×16 @270,20 | 390: 342×16 @24,48 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.68); align-text:center; tt:uppercase "BOOK A DEMO"
            - `h1.text-display-h2` — 496.3×53.8 @472,46 | 991: 451.2×52 @270,46 | 390: 342×96 @24,74 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "1:1 Creative Solutions Call"
          - `div.text-body-l` — 900×56 @270,116 | 991: 900×56 @46,114 | 390: 342×112 @24,182 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.84); align-text:center ‹copy: ~148 chars, 2 lines @1440›
        - `div.booking-options` — 900×590 @270,200 | 991: 900×590 @46,198 | 390: 342×1189 @24,318 · display:flex; dir:column; gap:20px
          - `div.apac-section` — 900×90 @270,200 | 991: 900×90 @46,198 | 390: 342×150 @24,1357 · display:flex; align:center; pos:relative; pad:20px; order:-9999; border:1px solid rgba(255, 255, 255, 0.1); radius:12px; overflow:hidden · Δ390{dir:column; justify:flex-start; align:flex-start; gap:20px}
            - `div.apac-section-text` — 714.9×48 @291,221 | 991: 714.9×48 @67,219 | 390: 229.9×48 @45,1378 · display:flex; dir:column; align:flex-start; pos:relative; flex:1 1 0%; z:1
              - `div.text-white` — 195.8×24 @291,221 | 991: 195.8×24 @67,219 | 390: 195.8×24 @45,1378 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255); align-text:center "Based in a APAC Country?"
              - `div.text-alpha-100` — 229.9×24 @291,245 | 991: 229.9×24 @67,243 | 390: 229.9×24 @45,1402 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68); align-text:center "Request a call in your timezone"
            - `a.button-dark.button-primary` — 143.1×40 @1006,225 | 991: 143.1×40 @781,223 | 390: 143.1×40 @45,1446 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `/apac-demo`
              - `div.button-text-block` — 107.1×24 @1014,233 | 991: 107.1×24 @789,231 | 390: 107.1×24 @53,1454 · pos:relative; pad:0px 6px; z:2
                - `div.text-heading-m` — 95.1×24 @1020,233 | 991: 95.1×24 @795,231 | 390: 95.1×24 @59,1454 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14); align-text:center "Request Call"
              - `div.button-icon-block.icon-right.opacity-100` — 24×24 @1117,233 | 991: 24×24 @893,231 | 390: 24×24 @156,1454 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; z:2
                - `div.icon-medium` — 24×24 @1117,233 | 991: 24×24 @893,231 | 390: 24×24 @156,1454 · display:flex; justify:center; align:center
                  - `div.svg.w-embed` — 24×24 @1117,233 | 991: 24×24 @893,231 | 390: 24×24 @156,1454 · display:flex; justify:center; align:center
                    - `svg` — 24×24 @1117,233 | 991: 24×24 @893,231 | 390: 24×24 @156,1454 · overflow:hidden · SVG `/assets/pages/book-demo/svg-svg-185ries.svg`
            - `img.apac-flags-image` — 146.6×100 @1022,201 | 991: 146.6×100 @798,199 | 390: 219.9×150 @145,1358 · pos:absolute [0px 0px -12px 751.375px]; maxw:100%; opacity:0.2; overflow:clip; z:0; fit:fill · Δ390{opacity:0.09} · IMG `/assets/pages/book-demo/6a3c180856026e0546089941_apac-flags-2.webp` natural 500×341 loading=lazy alt "apac flags"
          - `div#my-cal-inline-foreplay-demo-action-plan.cal-inline-container` — 900×480 @270,310 | 991: 900×480 @46,308 | 390: 342×1019 @24,318 · overflow:scroll · **THIRD-PARTY EMBED — internals not measured; reproduce as an embed/placeholder box of this size**
    - `div.home-hero-bottom` — 1174×176 @133,832 | 991: 834×244 @79,830 | 390: 342×308 @24,1555 · **identical to the homepage block → uses `Hero.jsx (logo strip markup + LOGOS array)` from src/components (not re-specced; no assets downloaded)**

### S2. `div.section.overflow-hidden.old-demo`

y/height: 1440 0/0 · 991 hidden · 390 hidden

- `div.section.overflow-hidden.old-demo` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: "1:1 Creative Solutions Call", ‹~148ch›, svg za5l90, svg 5mxnba, svg 1ybcmky, svg 6jksov, svg pywyqt, svg stvxec, svg qiancg, svg 1z0fzb6, svg 1oh4y8h, "Book a Demo"

### S3. `section.section`

y/height: 1440 1080/3997.2 · 991 1146/3848.2 · 390 1959/11201.4

- `div.section-padding` — 1440×3997.2 @0,0 | 991: 991×3848.2 @0,0 | 390: 390×11201.4 @0,0 · pad:8px
  - `div.section-white-block` — 1424×3981.2 @8,8 | 991: 975×3832.2 @8,8 | 390: 374×11185.4 @8,8 · pos:relative; bg:rgb(255, 255, 255); radius:36px; overflow:hidden; z:2 · Δ390{radius:16px}
    - `div.container.section-container` — 1344×3981.2 @48,8 | 991: 975×3832.2 @8,8 | 390: 374×11185.4 @8,8 · pad:0px 40px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
      - `div.div-block-340` — 1264×3981.2 @88,8 | 991: 911×3832.2 @40,8 | 390: 326×11185.4 @32,8
        - `div.demo-socialproof` — 1264×288 @88,8 | 991: 911×340 @40,8 | 390: 326×636 @32,8 · display:flex; dir:column; justify:center; align:flex-start; gap:72px; pad:80px 0px · Δ991{pad:64px 0px} · Δ390{pad:40px 0px 24px 0px}
          - `div.demo-socailproof-head-copy` — 1264×128 @88,88 | 991: 911×212 @40,72 | 390: 326×572 @32,48 · display:grid; cols:624px 624px; rows:128px; gap:16px · Δ991{cols:911px} · Δ390{cols:326px; gap:24px}
            - `div.section-head.is-align-left` — 624×128 @88,88 | 991: 720×84 @40,72 | 390: 326×196 @32,48 · display:flex; dir:column; align:flex-start; gap:12px; maxw:720px · Δ390{gap:8px}
              - `h2.text-display-h3` — 624×88 @88,88 | 991: 624.9×44 @40,72 | 390: 326×132 @32,48 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(23, 25, 32); wrap-text:balance "Loved by brands and agencies globally." (2 lines)
              - `p.text-body-l` — 623.1×28 @88,188 | 991: 623.1×28 @40,128 | 390: 326×56 @32,188 · font:Inter 18px/28px w400 ls-0.259999px; color:rgb(36, 38, 46); wrap-text:balance ‹copy: ~79 chars, 1 lines @1440›
            - `div.demo-socialproof-icons` — 624×128 @728,88 | 991: 911×112 @40,172 | 390: 326×352 @32,268 · display:grid; cols:197.328px 197.328px 197.328px; rows:128px; gap:16px · Δ991{cols:293px 293px 293px} · Δ390{cols:326px; gap:8px}
              - `a.demo-socialproof-item` — 197.3×128 @728,88 | 991: 293×112 @40,172 | 390: 326×112 @32,268 · display:flex; dir:column; justify:center; pad:4px; maxw:100%; minw:144px; radius:12px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px inset · href `#`
                - `div.demo-socialproof-content` — 189.3×92 @732,92 | 991: 285×76 @44,176 | 390: 318×76 @36,272 · display:flex; dir:column; justify:center; align:center; gap:12px; flex:1 1 0% · Δ390{gap:0px; pad:4px 0px 8px 0px}
                  - `svg` — 40×40 @807,100 | 991: 40×40 @167,176 | 390: 40×40 @175,276 · overflow:hidden · SVG `/assets/pages/book-demo/svg-demo-socialproof-icon-2-1hwynxo.svg`
                  - `div.dev-socialproof-rating` — 70.7×24 @791,152 | 991: 70.7×24 @151,228 | 390: 70.7×24 @160,316 · display:flex; justify:center; align:center; gap:2px
                    - `div.svg.w-embed` — 20×20 @791,154 | 991: 20×20 @151,230 | 390: 20×20 @160,318 · display:flex; justify:center; align:center
                      - `svg` — 20×20 @791,154 | 991: 20×20 @151,230 | 390: 20×20 @160,318 · overflow:hidden · SVG `/assets/pages/book-demo/svg-svg-5t7i94.svg`
                    - `div.font-semibold` — 48.7×24 @813,152 | 991: 48.7×24 @173,228 | 390: 48.7×24 @182,316 · font:Inter 19.2px/24px w600 ls-0.18px; color:rgb(36, 38, 46) "4.9/5"
                - `div.demo-socialproof-item-name` — 189.3×28 @732,184 | 991: 285×28 @44,252 | 390: 318×28 @36,348 · pad:6px 8px; bg:rgb(249, 249, 250); radius:8px
                  - `div.text-overline` — 173.3×16 @740,190 | 991: 269×16 @52,258 | 390: 302×16 @44,354 · font:Inter 12px/16px w550 ls2px; color:rgb(9, 10, 14); align-text:center; tt:uppercase "G2 REVIEWS"
              - `a.demo-socialproof-item` — 197.3×128 @941,88 | 991: 293×112 @349,172 | 390: 326×112 @32,388 · display:flex; dir:column; justify:center; pad:4px; maxw:100%; minw:144px; radius:12px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px inset · href `#`
                - `div.demo-socialproof-content` — 189.3×92 @945,92 | 991: 285×76 @353,176 | 390: 318×76 @36,392 · display:flex; dir:column; justify:center; align:center; gap:12px; flex:1 1 0% · Δ390{gap:0px; pad:4px 0px 8px 0px}
                  - `svg` — 40×40 @1020,100 | 991: 40×40 @476,176 | 390: 40×40 @175,396 · overflow:hidden · SVG `/assets/pages/book-demo/svg-demo-socialproof-icon-2-1lzyi7t.svg`
                  - `div.dev-socialproof-rating` — 70.4×24 @1005,152 | 991: 70.4×24 @460,228 | 390: 70.4×24 @160,436 · display:flex; justify:center; align:center; gap:2px
                    - `div.svg.w-embed` — 20×20 @1005,154 | 991: 20×20 @460,230 | 390: 20×20 @160,438 · display:flex; justify:center; align:center
                      - `svg` — 20×20 @1005,154 | 991: 20×20 @460,230 | 390: 20×20 @160,438 · overflow:hidden · SVG `/assets/pages/book-demo/svg-svg-5t7i94.svg`
                    - `div.font-semibold` — 48.4×24 @1027,152 | 991: 48.4×24 @482,228 | 390: 48.4×24 @182,436 · font:Inter 19.2px/24px w600 ls-0.18px; color:rgb(36, 38, 46) "4.8/5"
                - `div.demo-socialproof-item-name` — 189.3×28 @945,184 | 991: 285×28 @353,252 | 390: 318×28 @36,468 · pad:6px 8px; bg:rgb(249, 249, 250); radius:8px
                  - `div.text-overline` — 173.3×16 @953,190 | 991: 269×16 @361,258 | 390: 302×16 @44,474 · font:Inter 12px/16px w550 ls2px; color:rgb(9, 10, 14); align-text:center; tt:uppercase "CHROME"
              - `a.demo-socialproof-item` — 197.3×128 @1155,88 | 991: 293×112 @658,172 | 390: 326×112 @32,508 · display:flex; dir:column; justify:center; pad:4px; maxw:100%; minw:144px; radius:12px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px inset · href `#`
                - `div.demo-socialproof-content` — 189.3×92 @1159,92 | 991: 285×76 @662,176 | 390: 318×76 @36,512 · display:flex; dir:column; justify:center; align:center; gap:12px; flex:1 1 0% · Δ390{gap:0px; pad:4px 0px 8px 0px}
                  - `svg` — 40×40 @1233,100 | 991: 40×40 @785,176 | 390: 40×40 @175,516 · overflow:hidden · SVG `/assets/pages/book-demo/svg-demo-socialproof-icon-2-1q7zp9q.svg`
                  - `div.dev-socialproof-rating` — 70.4×24 @1218,152 | 991: 70.4×24 @769,228 | 390: 70.4×24 @160,556 · display:flex; justify:center; align:center; gap:2px
                    - `div.svg.w-embed` — 20×20 @1218,154 | 991: 20×20 @769,230 | 390: 20×20 @160,558 · display:flex; justify:center; align:center
                      - `svg` — 20×20 @1218,154 | 991: 20×20 @769,230 | 390: 20×20 @160,558 · overflow:hidden · SVG `/assets/pages/book-demo/svg-svg-5t7i94.svg`
                    - `div.font-semibold` — 48.4×24 @1240,152 | 991: 48.4×24 @791,228 | 390: 48.4×24 @182,556 · font:Inter 19.2px/24px w600 ls-0.18px; color:rgb(36, 38, 46) "4.8/5"
                - `div.demo-socialproof-item-name` — 189.3×28 @1159,184 | 991: 285×28 @662,252 | 390: 318×28 @36,588 · pad:6px 8px; bg:rgb(249, 249, 250); radius:8px
                  - `div.text-overline` — 173.3×16 @1167,190 | 991: 269×16 @670,258 | 390: 302×16 @44,594 · font:Inter 12px/16px w550 ls2px; color:rgb(9, 10, 14); align-text:center; tt:uppercase "CAPTERRA"
        - `div.senja-embed` — 1264×3693.2 @88,296 | 991: 911×3492.2 @40,348 | 390: 326×10549.4 @32,644 · data {"data-id":"26b5df20-f5c6-41fa-a198-c3bcb97d0f42","data-mode":"shadow","data-lazyload":"false","data-built":"true","data-session":"e7620969-e741-4882-b6b7-22d8d7e34257"} · **THIRD-PARTY EMBED — internals not measured; reproduce as an embed/placeholder box of this size**

## Typography roles (computed at 1440; sizes at 991/390 from the same nodes)

| font (family size/lh weight ls) | color | n | @991 | @390 | elements (sample) | example |
|---|---|---|---|---|---|---|
| Inter 19.2px/24px w600 ls-0.18px | rgb(36, 38, 46) | 3 | 19.2px/24px | 19.2px/24px | `div.font-semibold` | 4.9/5 |
| Inter 12px/16px w550 ls2px uppercase | rgb(9, 10, 14) | 3 | 12px/16px | 12px/16px | `div.text-overline` | G2 REVIEWS |
| Inter 12px/16px w550 ls2px uppercase | rgba(255, 255, 255, 0.68) | 1 | 12px/16px | 12px/16px | `h1.text-overline` | BOOK A DEMO |
| Inter Display 44px/53.76px w600 ls-0.33px | rgb(255, 255, 255) | 1 | 40px/52px | 36px/48px | `h1.text-display-h2` | 1:1 Creative Solutions Call |
| Inter 18px/28px w400 ls-0.259999px | rgba(255, 255, 255, 0.84) | 1 | 18px/28px | 18px/28px | `div.text-body-l` | ~148 chars |
| Inter 16px/24px w500 ls-0.18px | rgb(255, 255, 255) | 1 | 16px/24px | 16px/24px | `div.text-white` | Based in a APAC Country? |
| Inter 16px/24px w400 ls-0.18px | rgba(255, 255, 255, 0.68) | 1 | 16px/24px | 16px/24px | `div.text-alpha-100` | Request a call in your timezone |
| Inter 16px/24px w550 ls-0.18px | rgb(9, 10, 14) | 1 | 16px/24px | 16px/24px | `div.text-heading-m` | Request Call |
| Inter Display 36px/44px w600 ls-0.26px | rgb(23, 25, 32) | 1 | 36px/44px | 36px/44px | `h2.text-display-h3` | Loved by brands and agencies globally. |
| Inter 18px/28px w400 ls-0.259999px | rgb(36, 38, 46) | 1 | 18px/28px | 18px/28px | `p.text-body-l` | ~79 chars |

## Colors, gradients, radii, shadows in use (non-text, 1440)

**background-color**
- `rgb(255, 255, 255)` — `a.button-dark.button-primary`, `div.section-white-block`
- `rgb(249, 249, 250)` — `div.demo-socialproof-item-name`

**border**
- `1px solid rgba(255, 255, 255, 0.1)` — `div.apac-section`

**radius**
- `12px` — `div.apac-section`, `a.demo-socialproof-item`
- `10px` — `a.button-dark.button-primary`
- `36px` — `div.section-white-block`
- `8px` — `div.demo-socialproof-item-name`

**box-shadow**
- `rgb(233, 234, 239) 0px 0px 0px 1px inset` — `a.demo-socialproof-item`

**opacity**
- `0.2` — `img.apac-flags-image`

**transition**
- `0.2s` — `a.button-dark.button-primary`

## Assets (local path ↔ element)

| local file | kind | element | natural | displayed @1440 | source URL |
|---|---|---|---|---|---|
| `/assets/pages/book-demo/6a3c180856026e0546089941_apac-flags-2.webp` | img | `apac-flags-image` (s0.0.0.0.1.0.2) | 500×341 | 146.6×100 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6a3c180856026e0546089941_apac-flags-2.webp |

**Inline SVGs saved** (each distinct inline `<svg>` in page content):

- `/assets/pages/book-demo/svg-svg-185ries.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/book-demo/svg-demo-socialproof-icon-2-1hwynxo.svg` — 40×40 in `demo-socialproof-icon-2.w-embed`
- `/assets/pages/book-demo/svg-svg-5t7i94.svg` — 20×20 in `svg.w-embed`
- `/assets/pages/book-demo/svg-demo-socialproof-icon-2-1lzyi7t.svg` — 40×40 in `demo-socialproof-icon-2.w-embed`
- `/assets/pages/book-demo/svg-demo-socialproof-icon-2-1q7zp9q.svg` — 40×40 in `demo-socialproof-icon-2.w-embed`

## Motion

### Webflow IX2 (from `Webflow.require("ix2").store.getState().ixData`, filtered to elements on this page outside nav/footer)

- none


### Running Web Animations after load (`document.getAnimations()`, page content only)

- none

### Widgets / embeds detected

- s0.0.0.0.1.1 `div.demo-embed.w-embed.w-script` 
- s0.0.1.1.0.0 `div.home-hero-logo-image.w-embed` 
- s0.0.1.1.1.0 `div.home-hero-logo-image.w-embed` 
- s0.0.1.1.2.0 `div.home-hero-logo-image.w-embed` 
- s0.0.1.1.3.0 `div.home-hero-logo-image.w-embed` 
- s0.0.1.1.4.0 `div.home-hero-logo-image.w-embed` 
- s0.0.1.1.5.0 `div.home-hero-logo-image.w-embed` 
- s0.0.1.1.6.0 `div.home-hero-logo-image.w-embed` 
- s0.0.1.1.7.0 `div.home-hero-logo-image.w-embed` 
- s0.0.1.1.8.0 `div.home-hero-logo-image.w-embed` 
- s0.0.1.1.9.0 `div.home-hero-logo-image.w-embed` 
- s0.0.1.1.10.0 `div.home-hero-logo-image.w-embed` 
- s0.0.1.1.11.0 `div.home-hero-logo-image.w-embed` 
- s0.0.1.1.12.0 `div.home-hero-logo-image.w-embed` 
- s0.0.1.1.13.0 `div.home-hero-logo-image.w-embed` 
- s1.0.0.0.0.1.0.0 `div.home-hero-logo-image.w-embed` 
- s1.0.0.0.0.1.1.0 `div.home-hero-logo-image.w-embed` 
- s1.0.0.0.0.1.2.0 `div.home-hero-logo-image.w-embed` 
- s1.0.0.0.0.1.3.0 `div.home-hero-logo-image.w-embed` 
- s1.0.0.0.0.1.4.0 `div.home-hero-logo-image.w-embed` 
- s1.0.0.0.0.1.5.0 `div.home-hero-logo-image.w-embed` 
- s1.0.0.0.0.1.6.0 `div.home-hero-logo-image.w-embed` 
- s1.0.0.0.0.1.7.0 `div.home-hero-logo-image.w-embed` 
- s1.0.0.0.0.1.8.0 `div.home-hero-logo-image.w-embed` 
- s1.0.0.0.1 `div.code-embed.w-embed.w-script` 
- s2.0.0.0.0.0.0.1.0.0.0 `div.demo-socialproof-icon-2.w-embed` 
- s2.0.0.0.0.0.0.1.1.0.0 `div.demo-socialproof-icon-2.w-embed` 
- s2.0.0.0.0.0.0.1.2.0.0 `div.demo-socialproof-icon-2.w-embed` 
- s2.0.0.0.0.1 `div.code-iframe.w-embed` 

### Page-level `<style>` embeds (verbatim CSS)

From s0.0.0.0.1.1:
```css
.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}
```

### Page-level `<script>` embeds

From s0.0.0.0.1.1 (1065 chars):
```js
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "foreplay-demo-action-plan", {origin:"https://app.cal.com"});

  Cal.ns["foreplay-demo-action-plan"]("inline", {
    elementOrSelector:"#my-cal-inline-foreplay-demo-action-plan",
    config: {"layout":"column_view","theme":"dark"},
    calLink: "team/foreplay/foreplay-demo-action-plan",
  });

  Cal.ns["foreplay-demo-action-plan"]("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"column_view"});
```
From s1.0.0.0.1 (0 chars, src https://js-na3.hsforms.net/forms/embed/341476674.js):
```js

```

## CSS rules for classes not used on the homepage (verbatim from `foreplay-3-0.shared.850e08b99.min.css`)

New classes: `product-hero` `api-hero-content` `hero-text` `overline-heading-wrapper` `booking-options` `apac-section` `apac-section-text` `apac-flags-image` `demo-embed` `cal-inline-container` `old-demo` `demo-hero` `demo-hero-top` `demo-hero-content` `demo-hero-logo-grid` `code-embed` `hs-form-frame` `div-block-340` `demo-socialproof` `demo-socailproof-head-copy` `demo-socialproof-icons` `demo-socialproof-item` `demo-socialproof-content` `demo-socialproof-icon-2` `dev-socialproof-rating` `font-semibold` `demo-socialproof-item-name` `code-iframe` `senja-embed`

```css
.section.overflow-hidden.old-demo { display: none; }
.hero-text { gap: 16px; flex-flow: column; justify-content: flex-start; align-items: center; max-width: 900px; display: flex; }
.demo-socialproof { gap: 72px; flex-flow: column; justify-content: center; align-items: flex-start; padding-top: 80px; padding-bottom: 80px; display: flex; }
.demo-socialproof-icons { grid-template-rows: auto; grid-template-columns: 1fr 1fr 1fr; }
.demo-socialproof-item { min-width: 144px; box-shadow: inset 0 0 0 1px var(--_lens---solid-50); border-radius: 12px; flex-flow: column; align-items: stretch; padding: 4px; display: flex; }
.demo-socialproof-item-name { background-color: var(--_lens---solid-25); color: var(--_lens---solid-900); text-align: center; border-radius: 8px; padding: 6px 8px; }
.demo-socialproof-content { gap: 12px; flex-flow: column; flex: 1 1 0%; justify-content: center; align-items: center; display: flex; }
.demo-socialproof-icon-2 { width: 40px; height: 40px; }
.dev-socialproof-rating { gap: 2px; color: var(--_lens---solid-600); justify-content: center; align-items: center; font-size: 1.2rem; display: flex; }
.font-semibold { font-weight: 600; }
.demo-hero-top { gap: 40px; flex-flow: column; grid-template-rows: auto auto; grid-template-columns: 1fr 1fr; grid-auto-columns: 1fr; justify-content: space-between; place-items: start stretch; padding-bottom: 0px; display: grid; }
.demo-hero-content { gap: 12px; text-align: left; text-wrap: balance; flex-flow: column; justify-content: center; align-items: flex-start; display: flex; }
.demo-hero-logo-grid { gap: 16px; grid-template-rows: auto auto; grid-template-columns: 1fr 1fr 1fr; grid-auto-columns: 1fr; align-self: stretch; margin-top: 40px; display: grid; }
.demo-hero { gap: 0px; flex-flow: column; grid-template-rows: auto auto; grid-template-columns: 1fr 1fr; grid-auto-columns: 1fr; justify-content: flex-start; align-items: center; padding-top: 120px; padding-bottom: 120px; display: flex; }
.overline-heading-wrapper { margin-bottom: 10px; }
.product-hero { text-align: center; flex-flow: column; justify-content: flex-start; align-items: center; padding-top: 10px; padding-bottom: 0px; display: flex; }
.product-hero.mobile-app-hero { padding-bottom: 30px; }
.code-embed { width: 100%; margin: 0px; }
.demo-socailproof-head-copy { gap: 16px; grid-template-rows: auto; grid-template-columns: 1fr 1fr; grid-auto-columns: 1fr; width: 100%; display: grid; }
.api-hero-content { gap: 28px; flex-flow: column; justify-content: flex-start; align-items: center; padding-bottom: 42px; display: flex; }
.demo-embed { width: 100%; margin-bottom: 0px; }
.apac-section { border: 1px solid var(--_lens---neutral-700); border-radius: 12px; order: -9999; align-items: center; width: 100%; padding: 20px; display: flex; position: relative; overflow: hidden; }
.apac-section-text { z-index: 1; flex-flow: column; flex: 1 1 0%; align-items: flex-start; display: flex; position: relative; }
.apac-flags-image { z-index: 0; opacity: 0.2; height: 100px; position: absolute; inset: 0% 0% auto auto; }
.booking-options { gap: 20px; flex-flow: column; width: 100%; display: flex; }
@media screen and (max-width: 991px) {
  .demo-socialproof { padding-top: 64px; padding-bottom: 64px; }
  .demo-socialproof-icons { grid-template-columns: 1fr 1fr 1fr; }
  .demo-hero-top { gap: 64px; flex-flow: column; grid-template-rows: auto auto; grid-template-columns: 1fr; justify-content: center; place-items: start stretch; display: flex; }
  .demo-hero-logo-grid { margin-top: 0px; }
  .demo-socailproof-head-copy { grid-template-columns: 1fr; }
}
@media screen and (max-width: 767px) {
  .demo-socialproof-icons { gap: 8px; }
  .demo-socialproof-content { gap: 0px; padding-top: 4px; padding-bottom: 8px; }
  .demo-hero-top { gap: 40px; padding-bottom: 80px; }
  .demo-hero-logo-grid { grid-template-columns: 1fr 1fr 1fr; }
  .demo-hero { padding-top: 80px; padding-bottom: 80px; }
  .product-hero { padding-top: 64px; }
}
@media screen and (max-width: 479px) {
  .hero-text { gap: 12px; }
  .demo-socialproof { padding-top: 40px; padding-bottom: 24px; }
  .demo-socialproof-icons { grid-template-rows: auto auto auto; grid-template-columns: 1fr; }
  .demo-socialproof-content { gap: 0px; }
  .demo-hero-top { align-items: stretch; padding-bottom: 48px; }
  .demo-hero-logo-grid { row-gap: 24px; grid-template-columns: 1fr 1fr; display: none; }
  .demo-hero { padding-top: 40px; padding-bottom: 40px; }
  .product-hero { padding-top: 24px; padding-bottom: 24px; }
  .demo-socailproof-head-copy { gap: 24px; grid-template-rows: auto; }
  .api-hero-content { gap: 24px; padding-bottom: 24px; position: relative; }
  .apac-section { gap: 20px; text-align: center; flex-flow: column; order: 9999; justify-content: flex-start; align-items: flex-start; }
  .apac-section-text { text-align: center; }
  .apac-flags-image { opacity: 0.09; height: 150px; }
}
```


## Caveats

- Third-party embeds (YouTube lightbox, Cal.com, Senja, Wistia) are noted but their internals were not measured.
- Hover/focus/active values come from the verbatim CSS rules above, plus the homepage spec for shared classes. They were not captured by hovering.
- `y` values are offsets inside each section at that width. Geometry for JS-cloned nodes (marquee clones) is only comparable for the original items.
