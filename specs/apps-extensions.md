Source: https://www.foreplay.co/apps-extensions

# /apps-extensions: Apps & Extensions

Measured on 2026-10-06 with headless Chromium (Playwright 1.63) at 1440×900, 991×900 and 390×844, after a full scroll pass. The Navbar and Footer have the same DOM as the homepage, so reuse `Navbar.jsx` and `Footer.jsx` (CLONE_SPEC.md §1 and §8). Tokens, buttons and type classes are in CLONE_SPEC.md §0; anything shared between these pages is in `specs/_shared-pages.md`. **Copy policy:** short UI strings are verbatim, and long copy is given only as ‹copy: ~N chars, L lines @1440›. Assets are local paths under `public/` (`/assets/...`). Files that already existed in `public/assets` were reused rather than re-downloaded, which is why some paths point at other page folders or at the root. Blocks that are identical to the homepage (the final CTA `.home-cta`, the Chrome-extension card `.home-extension`, and the logo strip `.home-hero-bottom`) are collapsed to a single line, "uses <Component> from src/components". Their internals are not re-specced and their assets were not re-downloaded.

## Build notes (summary)

- **Structure:**
  - S1 short hero `.fireside-hero` (468 tall @1440): no icon or preview; overline "APPS & EXTENSIONS", gradient title "Download Foreplay's Companion Apps", an 18/28 subtitle and a primary button "Become an Affiliate" linking to `foreplay.getrewardful.com/signup`. That label is what the live site shows.
  - S2 a 3-card `.lens-security-grid` (cards 420.7×206, 1px ring, radius from CSS). The cards are "Chrome Extension", "iOS App" and "Android App". Each has 3 lines of body copy and a `button-dark.button-ghost` download button, offset −10px via `.ml-2-5`.
  - The footer follows. A FAQPage JSON-LD script is present (SEO only, not rendered).
- **Reuse:** `Button` (`dark-primary`, `dark-ghost`) and the `.lens-security-*` card styles (also used on spyder S3 and lens S5).
- **Motion:** buttons only (`.2s`). No IX2 on content.
- **Embeds:** none.

## Page meta (measured)

- Webflow page id `65b7c394cc50e9efbb43f428`. Title: `Apps & Extensions`.
- Meta description: ~160 chars (not transcribed).
- Document height: 1440 → 1728, 991 → 2266, 390 → 3005. Body bg rgb(2, 3, 8).
- Navbar: same DOM as homepage (same node count/height; only the active-link state class differs) → reuse `Navbar.jsx`.
- Footer: same DOM as homepage (same node count/height) → reuse `Footer.jsx` (incl. calendar pop-up + exit-intent modal).
- Fonts loaded: Inter Display 600 normal, Inter 400 normal, Inter 600 normal, Inter 500 normal.

## Section map (DOM order)

Legend: each line is `tag.class — W×H @x,y` at 1440 (y relative to the section top), then `| 991:` and `| 390:` geometry, then non-default computed styles at 1440, then `Δ991{…}` / `Δ390{…}` listing only layout/typography values that differ from 1440. `hidden` = display:none or 0×0 at that width. Text: short UI strings verbatim in quotes; long copy as ‹copy: ~N chars, L lines @1440› (write stand-in copy of matching length). Classes prefixed `w-` (Webflow runtime) are dropped except meaningful widget classes.

### S1. `section#product-hero-section.section.relative`

y/height: 1440 72/468 · 991 72/468 · 390 72/436

- `section#product-hero-section.section.relative` — 1440×468 @0,0 | 991: 991×468 @0,0 | 390: 390×436 @0,0 · pos:relative
  - `canvas#product-hero-canvas.product-hero-canvas` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only)
  - `div.container` — 1440×468 @0,0 | 991: 991×468 @0,0 | 390: 390×436 @0,0 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
    - `div.fireside-hero` — 1360×468 @40,0 | 991: 927×468 @32,0 | 390: 342×436 @24,0 · display:flex; dir:column; align:center; pos:relative; pad:80px 0px · Δ390{pad:40px 0px}
      - `div.product-hero-content` — 900×308 @270,80 | 991: 900×308 @46,80 | 390: 342×356 @24,40 · display:flex; dir:column; align:center; gap:28px · Δ390{gap:24px; pad:0px 0px 24px 0px; pos:relative}
        - `div.hero-text` — 900×240 @270,80 | 991: 900×240 @46,80 | 390: 342×268 @24,40 · display:flex; dir:column; align:center; gap:16px; maxw:900px · Δ390{gap:12px}
          - `h1.text-overline` — 156.6×16 @642,80 | 991: 156.6×16 @417,80 | 390: 156.6×16 @117,40 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "APPS & EXTENSIONS"
          - `h2.text-display-h1.hero-title` — 900×136 @270,112 | 991: 900×136 @46,112 | 390: 342×144 @24,68 · bgimg:radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88)); bgsize:auto; bgpos:0% 0%; bgclip:text; font:Inter Display 60px/68px w600 ls-0.45px; color:rgba(255, 255, 255, 0.88); align-text:center; wrap-text:balance; fill:rgba(0, 0, 0, 0) · Δ390{font:38px/48px; ls:-0.285px} "Download Foreplay's Companion Apps" (2 lines)
          - `div.max-w-lg` — 512×56 @464,264 | 991: 512×56 @240,264 | 390: 342×84 @24,224 · maxw:512px
            - `p.text-body-l.text-white-84` — 512×56 @464,264 | 991: 512×56 @240,264 | 390: 342×84 @24,224 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center ‹copy: ~114 chars, 2 lines @1440›
        - `a.button-dark.button-primary` — 195×40 @622,348 | 991: 195×40 @398,348 | 390: 195×40 @97,332 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; flex:1 1 0%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `https://foreplay.getrewardful.com/signup` target=_blank
          - `div.button-text-block` — 159×24 @630,356 | 991: 159×24 @406,356 | 390: 159×24 @105,340 · pos:relative; pad:0px 6px; z:2
            - `div.text-heading-m` — 147×24 @636,356 | 991: 147×24 @412,356 | 390: 147×24 @111,340 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14); align-text:center "Become an Affiliate"
          - `div.button-icon-block.icon-right.opacity-100` — 24×24 @786,356 | 991: 24×24 @561,356 | 390: 24×24 @261,340 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; z:2
            - `div.icon-medium` — 24×24 @786,356 | 991: 24×24 @561,356 | 390: 24×24 @261,340 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @786,356 | 991: 24×24 @561,356 | 390: 24×24 @261,340 · display:flex; justify:center; align:center
                - `svg` — 24×24 @786,356 | 991: 24×24 @561,356 | 390: 24×24 @261,340 · overflow:hidden · SVG `/assets/pages/apps-extensions/svg-svg-185ries.svg`

### S2. `div.section`

y/height: 1440 540/256 · 991 540/622 · 390 508/710

- `div.section` — 1440×256 @0,0 | 991: 991×622 @0,0 | 390: 390×710 @0,0
  - `div.container.section-container` — 1344×256 @48,0 | 991: 991×622 @0,0 | 390: 390×710 @0,0 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
    - `div.section-content-main` — 1264×256 @88,0 | 991: 927×622 @32,0 | 390: 342×710 @24,0 · pad:48px 0px 0px 0px · Δ390{pad:40px 0px 0px 0px}
      - `div.lens-security-grid` — 1264×208 @88,48 | 991: 480×574 @256,48 | 390: 342×670 @24,40 · display:grid; cols:420.656px 420.672px 420.656px; rows:206px; gap:0px; border:1px solid rgb(23, 25, 32); radius:28px · Δ991{cols:478px; mar:0px 223.5px; maxw:480px} · Δ390{cols:340px; maxw:480px}
        - `div.lens-security-card` — 420.7×206 @89,49 | 991: 478×206 @257,49 | 390: 340×238 @25,41 · display:flex; dir:column; pad:24px 24px 16px 24px · Δ390{pad:24px}
          - `div.lens-security-card-head` — 372.7×24 @113,73 | 991: 430×24 @281,73 | 390: 292×24 @49,65 · display:flex; align:center; gap:8px · Δ390{pos:relative}
            - `img.icon-medium` — 24×24 @113,73 | 991: 24×24 @281,73 | 390: 24×24 @49,65 · display:flex; justify:center; align:center; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/chrome-extension/64944e2428c1fae0b340fded_Google_Chrome_icon_(February_2022).svg.avif` natural 720×720 loading=lazy alt "google chrome icon"
            - `h3.text-label-m` — 136.8×24 @145,73 | 991: 136.8×24 @313,73 | 390: 136.8×24 @81,65 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Chrome Extension"
          - `div.lens-security-card-footer` — 372.7×0 @113,97 | 991: 430×0 @281,97 | 390: 292×0 @49,89
          - `div.card-button-holder` — 372.7×142 @113,97 | 991: 430×142 @281,97 | 390: 292×166 @49,89 · display:flex; dir:column; justify:flex-end; align:flex-start; gap:15px; pad:15px 0px 0px 0px
            - `div.text-body-m` — 372.7×72 @113,112 | 991: 430×72 @281,112 | 390: 292×96 @49,104 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.84); wrap-text:balance ‹copy: ~122 chars, 3 lines @1440›
            - `div.ml-2-5` — 202.5×40 @103,199 | 991: 202.5×40 @271,199 | 390: 202.5×40 @39,215 · mar:0px 0px 0px -10px
              - `a.button-dark.button-ghost` — 202.5×40 @103,199 | 991: 202.5×40 @271,199 | 390: 202.5×40 @39,215 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `https://chromewebstore.google.com/detail/ad-library-save-facebook/eaancnanphggbfliooildilc…` target=_blank
                - `div.button-text-block` — 166.5×24 @111,207 | 991: 166.5×24 @279,207 | 390: 166.5×24 @47,223 · pos:relative; pad:0px 6px; z:2
                  - `div.text-heading-m` — 154.5×24 @117,207 | 991: 154.5×24 @285,207 | 390: 154.5×24 @53,223 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255); wrap-text:balance "Download Extension"
                - `div.button-icon-block.icon-right` — 24×24 @274,207 | 991: 24×24 @441,207 | 390: 24×24 @210,223 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                  - `div.icon-medium` — 24×24 @274,207 | 991: 24×24 @441,207 | 390: 24×24 @210,223 · display:flex; justify:center; align:center
                    - `div.svg.w-embed` — 24×24 @274,207 | 991: 24×24 @441,207 | 390: 24×24 @210,223 · display:flex; justify:center; align:center
                      - `svg` — 24×24 @274,207 | 991: 24×24 @441,207 | 390: 24×24 @210,223 · overflow:hidden · SVG `/assets/pages/apps-extensions/svg-svg-185ries.svg`
        - `div.lens-security-card.is-middle` — 420.7×206 @510,49 | 991: 478×184 @257,255 | 390: 340×216 @25,279 · display:flex; dir:column; pad:24px 24px 16px 24px; border:T/R/B/L 0 | 1px solid rgb(23, 25, 32) | 0 | 1px solid rgb(23, 25, 32) · Δ390{pad:24px}
          - `div.lens-security-card-head` — 370.7×24 @535,73 | 991: 430×24 @281,280 | 390: 292×24 @49,304 · display:flex; align:center; gap:8px · Δ390{pos:relative}
            - `img.icon-medium` — 24×24 @535,73 | 991: 24×24 @281,280 | 390: 24×24 @49,304 · display:flex; justify:center; align:center; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/apps-extensions/65b7c4b2d828767278319529_8e146e9e28baeb9b59c6004ed7b1343b.avif` natural 1024×1024 loading=lazy
            - `h3.text-label-m` — 60.5×24 @567,73 | 991: 60.5×24 @313,280 | 390: 60.5×24 @81,304 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "iOS App"
          - `div.card-button-holder` — 370.7×142 @535,97 | 991: 430×118 @281,304 | 390: 292×142 @49,328 · display:flex; dir:column; justify:flex-end; align:flex-start; gap:15px; pad:15px 0px 0px 0px; flex:1 1 0%
            - `div.text-body-m` — 370.7×72 @535,112 | 991: 430×48 @281,319 | 390: 292×72 @49,343 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.84) ‹copy: ~98 chars, 3 lines @1440›
            - `div.ml-2-5` — 189×40 @525,199 | 991: 189×40 @271,382 | 390: 189×40 @39,430 · mar:0px 0px 0px -10px
              - `a.button-dark.button-ghost` — 189×40 @525,199 | 991: 189×40 @271,382 | 390: 189×40 @39,430 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `https://apps.apple.com/ca/app/foreplay-ad-swipe-file/id6466097243` target=_blank
                - `div.button-text-block` — 153×24 @533,207 | 991: 153×24 @279,390 | 390: 153×24 @47,438 · pos:relative; pad:0px 6px; z:2
                  - `div.text-heading-m` — 141×24 @539,207 | 991: 141×24 @285,390 | 390: 141×24 @53,438 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Download iOS App"
                - `div.button-icon-block.icon-right` — 24×24 @682,207 | 991: 24×24 @428,390 | 390: 24×24 @196,438 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                  - `div.icon-medium` — 24×24 @682,207 | 991: 24×24 @428,390 | 390: 24×24 @196,438 · display:flex; justify:center; align:center
                    - `div.svg.w-embed` — 24×24 @682,207 | 991: 24×24 @428,390 | 390: 24×24 @196,438 · display:flex; justify:center; align:center
                      - `svg` — 24×24 @682,207 | 991: 24×24 @428,390 | 390: 24×24 @196,438 · overflow:hidden · SVG `/assets/pages/apps-extensions/svg-svg-185ries.svg`
        - `div.lens-security-card` — 420.7×206 @930,49 | 991: 478×182 @257,439 | 390: 340×214 @25,495 · display:flex; dir:column; pad:24px 24px 16px 24px · Δ390{pad:24px}
          - `div.lens-security-card-head` — 372.7×24 @954,73 | 991: 430×24 @281,463 | 390: 292×24 @49,519 · display:flex; align:center; gap:8px · Δ390{pos:relative}
            - `img.icon-medium` — 24×24 @954,73 | 991: 24×24 @281,463 | 390: 24×24 @49,519 · display:flex; justify:center; align:center; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/apps-extensions/65b7c4fba3efe52513c43327_google-play-icon-1024x1024-ntijeqxd.webp` natural 1024×1024 loading=lazy
            - `h3.text-label-m` — 93.4×24 @986,73 | 991: 93.4×24 @313,463 | 390: 93.4×24 @81,519 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Android App"
          - `div.card-button-holder` — 372.7×142 @954,97 | 991: 430×118 @281,487 | 390: 292×142 @49,543 · display:flex; dir:column; justify:flex-end; align:flex-start; gap:15px; pad:15px 0px 0px 0px; flex:1 1 0%
            - `div.text-body-m` — 372.7×72 @954,112 | 991: 430×48 @281,502 | 390: 292×72 @49,558 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.84) ‹copy: ~105 chars, 3 lines @1440›
            - `div.ml-2-5` — 222.7×40 @944,199 | 991: 222.7×40 @271,565 | 390: 222.7×40 @39,645 · mar:0px 0px 0px -10px
              - `a.button-dark.button-ghost` — 222.7×40 @944,199 | 991: 222.7×40 @271,565 | 390: 222.7×40 @39,645 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `https://play.google.com/store/apps/details?id=co.foreplay.ForeplayMobile` target=_blank
                - `div.button-text-block` — 186.7×24 @952,207 | 991: 186.7×24 @279,573 | 390: 186.7×24 @47,653 · pos:relative; pad:0px 6px; z:2
                  - `div.text-heading-m` — 174.7×24 @958,207 | 991: 174.7×24 @285,573 | 390: 174.7×24 @53,653 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Download Android App"
                - `div.button-icon-block.icon-right` — 24×24 @1135,207 | 991: 24×24 @461,573 | 390: 24×24 @230,653 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                  - `div.icon-medium` — 24×24 @1135,207 | 991: 24×24 @461,573 | 390: 24×24 @230,653 · display:flex; justify:center; align:center
                    - `div.svg.w-embed` — 24×24 @1135,207 | 991: 24×24 @461,573 | 390: 24×24 @230,653 · display:flex; justify:center; align:center
                      - `svg` — 24×24 @1135,207 | 991: 24×24 @461,573 | 390: 24×24 @230,653 · overflow:hidden · SVG `/assets/pages/apps-extensions/svg-svg-185ries.svg`

## Typography roles (computed at 1440; sizes at 991/390 from the same nodes)

| font (family size/lh weight ls) | color | n | @991 | @390 | elements (sample) | example |
|---|---|---|---|---|---|---|
| Inter 16px/24px w500 ls-0.18px | rgb(255, 255, 255) | 3 | 16px/24px | 16px/24px | `h3.text-label-m` | Chrome Extension |
| Inter 16px/24px w400 ls-0.18px | rgba(255, 255, 255, 0.84) | 3 | 16px/24px | 16px/24px | `div.text-body-m` | ~122 chars |
| Inter 16px/24px w550 ls-0.18px | rgb(255, 255, 255) | 3 | 16px/24px | 16px/24px | `div.text-heading-m` | Download Extension |
| Inter 12px/16px w550 ls2px uppercase | rgba(255, 255, 255, 0.36) | 1 | 12px/16px | 12px/16px | `h1.text-overline` | APPS & EXTENSIONS |
| Inter Display 60px/68px w600 ls-0.45px | rgba(255, 255, 255, 0.88) | 1 | 60px/68px | 38px/48px | `h2.text-display-h1.hero-title` | Download Foreplay's Companion Apps |
| Inter 18px/28px w400 ls-0.259999px | rgba(255, 255, 255, 0.68) | 1 | 18px/28px | 18px/28px | `p.text-body-l.text-white-84` | ~114 chars |
| Inter 16px/24px w550 ls-0.18px | rgb(9, 10, 14) | 1 | 16px/24px | 16px/24px | `div.text-heading-m` | Become an Affiliate |

## Colors, gradients, radii, shadows in use (non-text, 1440)

**background-color**
- `rgb(255, 255, 255)` — `a.button-dark.button-primary`
- `rgb(2, 3, 8)` — `a.button-dark.button-ghost`

**background-image**
- `radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88))` — `h2.text-display-h1.hero-title`

**border**
- `1px solid rgb(23, 25, 32)` — `div.lens-security-grid`
- `T/R/B/L 0 | 1px solid rgb(23, 25, 32) | 0 | 1px solid rgb(23, 25, 32)` — `div.lens-security-card.is-middle`

**radius**
- `10px` — `a.button-dark.button-primary`, `a.button-dark.button-ghost`
- `28px` — `div.lens-security-grid`

**opacity**
- `0.68` — `div.button-icon-block.icon-right`

**transition**
- `0.2s` — `a.button-dark.button-primary`, `a.button-dark.button-ghost`

## Assets (local path ↔ element)

| local file | kind | element | natural | displayed @1440 | source URL |
|---|---|---|---|---|---|
| `/assets/pages/chrome-extension/64944e2428c1fae0b340fded_Google_Chrome_icon_(February_2022).svg.avif` | img | `icon-medium` (s1.0.0.0.0.0.0) | 720×720 | 24×24 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64944e2428c1fae0b340fded_Google_Chrome_icon_(February_2022).svg.avif |
| `/assets/pages/apps-extensions/65b7c4b2d828767278319529_8e146e9e28baeb9b59c6004ed7b1343b.avif` | img | `icon-medium` (s1.0.0.0.1.0.0) | 1024×1024 | 24×24 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/65b7c4b2d828767278319529_8e146e9e28baeb9b59c6004ed7b1343b.avif |
| `/assets/pages/apps-extensions/65b7c4fba3efe52513c43327_google-play-icon-1024x1024-ntijeqxd.webp` | img | `icon-medium` (s1.0.0.0.2.0.0) | 1024×1024 | 24×24 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/65b7c4fba3efe52513c43327_google-play-icon-1024x1024-ntijeqxd.webp |

**Inline SVGs saved** (each distinct inline `<svg>` in page content):

- `/assets/pages/apps-extensions/svg-svg-185ries.svg` — 24×24 in `svg.w-embed`

## Motion

### Webflow IX2 (from `Webflow.require("ix2").store.getState().ixData`, filtered to elements on this page outside nav/footer)

- none


### Running Web Animations after load (`document.getAnimations()`, page content only)

- none

### Widgets / embeds detected


## CSS rules for classes not used on the homepage (verbatim from `foreplay-3-0.shared.850e08b99.min.css`)

New classes: `product-hero-canvas` `fireside-hero` `product-hero-content` `hero-text` `max-w-lg` `text-white-84` `section-content-main`

```css
.section-content-main { flex-flow: column; padding-top: 48px; display: block; }
.product-hero-content { gap: 28px; flex-flow: column; justify-content: flex-start; align-items: center; display: flex; }
.hero-text { gap: 16px; flex-flow: column; justify-content: flex-start; align-items: center; max-width: 900px; display: flex; }
.max-w-lg { max-width: 512px; }
.product-hero-canvas { width: 0px; height: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0%; }
.fireside-hero { text-align: center; flex-flow: column; justify-content: flex-start; align-items: center; padding-top: 80px; padding-bottom: 80px; display: flex; position: relative; }
@media screen and (max-width: 991px) {
  .product-hero-canvas, .comparison-tr-icon { display: none; }
}
@media screen and (max-width: 767px) {
  .fireside-hero { padding-top: 40px; padding-bottom: 40px; }
}
@media screen and (max-width: 479px) {
  .section-content-main { padding-top: 40px; }
  .product-hero-content { gap: 24px; padding-bottom: 24px; position: relative; }
  .hero-text { gap: 12px; }
  .fireside-hero { padding-top: 40px; padding-bottom: 40px; }
}
```


## Caveats

- Third-party embeds (YouTube lightbox, Cal.com, Senja, Wistia) are noted but their internals were not measured.
- Hover/focus/active values come from the verbatim CSS rules above, plus the homepage spec for shared classes. They were not captured by hovering.
- `y` values are offsets inside each section at that width. Geometry for JS-cloned nodes (marquee clones) is only comparable for the original items.
