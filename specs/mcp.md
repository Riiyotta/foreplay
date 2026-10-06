Source: https://www.foreplay.co/mcp

# /mcp: Foreplay Ad Library MCP - Competitor Creative Data for Any Agent

Measured on 2026-10-06 with headless Chromium (Playwright 1.63) at 1440×900, 991×900 and 390×844, after a full scroll pass. The Navbar and Footer have the same DOM as the homepage, so reuse `Navbar.jsx` and `Footer.jsx` (CLONE_SPEC.md §1 and §8). Tokens, buttons and type classes are in CLONE_SPEC.md §0; anything shared between these pages is in `specs/_shared-pages.md`. **Copy policy:** short UI strings are verbatim, and long copy is given only as ‹copy: ~N chars, L lines @1440›. Assets are local paths under `public/` (`/assets/...`). Files that already existed in `public/assets` were reused rather than re-downloaded, which is why some paths point at other page folders or at the root. Blocks that are identical to the homepage (the final CTA `.home-cta`, the Chrome-extension card `.home-extension`, and the logo strip `.home-hero-bottom`) are collapsed to a single line, "uses <Component> from src/components". Their internals are not re-specced and their assets were not re-downloaded.

## Build notes (summary)

- **Structure:**
  - S2 hero: an `.mcp-tag` pill "MCP" (79.8×36), the title "Turn chats & agents into your creative research expert", primary "Start now" plus secondary "View Pricing". Then the **Webflow tabs `.tabs-2.w-tabs`** (pill menu 252.5×50 with "Claude"/"ChatGPT", each with a 20px logo). Each pane holds a 3-column `.mcp-steps-grid` (numbered steps "Open Claude Settings", "Add a custom connector", "Connect and sign in"). The steps include `[data-copy]` copy buttons that change their label to "Copied!" for 1500ms.
  - S3 white block (top padding 0) with 4 alternating `.lens-gamification-grid` rows ("SKILLS & WORKFLOWS", "BRAND TRACKING", "INTERACTIVE ARTIFACTS", "LIVE AD LIBRARY"). Each has an h3, 3 lines of copy, a "Connect MCP" button and a 560×443.8 screenshot.
  - S4 FAQ (6) plus faq-buttons.
  - No home CTA.
- **Reuse:** `Button`, `Faq`, white block. `IconClaude`/`IconChatGPT` exist in `svgs.jsx`, but the tabs here use the downloaded `claude-logo.svg` / `chat-gpt-green.svg` images.
- **Motion:** Webflow tabs (pane fade in 300ms, out 100ms, `ease`), buttons `.2s`, `.mcp-steps-button` `.2s`, FAQ accordion. The dot-grid canvas is 0-height here too (no visible effect).
- **Embeds:** none.

## Page meta (measured)

- Webflow page id `6a027c50f706e7e9436e00b8`. Title: `Foreplay Ad Library MCP - Competitor Creative Data for Any Agent`.
- Meta description: ~113 chars (not transcribed).
- Document height: 1440 → 4819, 991 → 4779, 390 → 6831. Body bg rgb(2, 3, 8).
- Navbar: same DOM as homepage (same node count/height; only the active-link state class differs) → reuse `Navbar.jsx`.
- Footer: same DOM as homepage (same node count/height) → reuse `Footer.jsx` (incl. calendar pop-up + exit-intent modal).
- Fonts loaded: Inter Display 600 normal, Inter 400 normal, Inter 600 normal, Inter 500 normal.

## Section map (DOM order)

Legend: each line is `tag.class — W×H @x,y` at 1440 (y relative to the section top), then `| 991:` and `| 390:` geometry, then non-default computed styles at 1440, then `Δ991{…}` / `Δ390{…}` listing only layout/typography values that differ from 1440. `hidden` = display:none or 0×0 at that width. Text: short UI strings verbatim in quotes; long copy as ‹copy: ~N chars, L lines @1440› (write stand-in copy of matching length). Classes prefixed `w-` (Webflow runtime) are dropped except meaningful widget classes.

### S1. `div.code-style.w-embed`

y/height: 1440 0/0 · 991 hidden · 390 hidden


### S2. `section#product-hero-section.section.relative`

y/height: 1440 72/690 · 991 72/1023 · 390 72/1243

- `section#product-hero-section.section.relative` — 1440×690 @0,0 | 991: 991×1023 @0,0 | 390: 390×1243 @0,0 · pos:relative
  - `canvas#product-hero-canvas.product-hero-canvas` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only)
  - `div.container` — 1440×690 @0,0 | 991: 991×1023 @0,0 | 390: 390×1243 @0,0 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
    - `div.product-hero` — 1360×394 @40,0 | 991: 927×394 @32,0 | 390: 342×518 @24,0 · display:flex; dir:column; align:center; pad:10px 0px 0px 0px · Δ390{pad:24px 0px}
      - `div.product-hero-animation-trigger` — 1440×900 @0,-72 | 991: 991×900 @0,-72 | 390: 390×844 @0,-72 · pos:absolute [-72px 0px -138px 0px]; pe:none · ix2 w-id ada86b34-fc44-2717-f2b7-e0a48ca54738
      - `div.product-hero-sticky` — 900×384 @270,10 | 991: 900×384 @46,10 | 390: 342×470 @24,24 · display:flex; dir:column; align:center; pos:sticky [100px auto auto auto] · Δ390{pos:relative}
        - `div.api-hero-content` — 900×384 @270,10 | 991: 900×384 @46,10 | 390: 342×470 @24,24 · display:flex; dir:column; align:center; gap:28px; pad:0px 0px 42px 0px · Δ390{gap:24px; pad:0px 0px 24px 0px; pos:relative}
          - `div.mcp-tag` — 79.8×36 @680,10 | 991: 79.8×36 @456,10 | 390: 79.8×36 @155,24 · display:flex; align:center; gap:4px; pad:6px 10px 6px 6px; bg:rgba(255, 255, 255, 0.1); radius:100px
            - `img.icon-medium` — 24×24 @686,16 | 991: 24×24 @462,16 | 390: 24×24 @161,30 · display:flex; justify:center; align:center; maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/mcp/6a02344c3fd0db1c64ab3488_mcp-icon.svg` natural 20×20 loading=lazy alt "mcp logo white"
            - `h1.text-label-m` — 35.8×24 @714,16 | 991: 35.8×24 @490,16 | 390: 35.8×24 @189,30 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255); align-text:center "MCP"
          - `div.hero-text` — 900×208 @270,74 | 991: 900×208 @46,74 | 390: 342×268 @24,84 · display:flex; dir:column; align:center; gap:16px; maxw:900px · Δ390{gap:12px}
            - `h3.text-display-h1.hero-title` — 900×136 @270,74 | 991: 900×136 @46,74 | 390: 342×144 @24,84 · bgimg:radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88)); bgsize:auto; bgpos:0% 0%; bgclip:text; font:Inter Display 60px/68px w600 ls-0.45px; color:rgba(255, 255, 255, 0.88); align-text:center; wrap-text:balance; fill:rgba(0, 0, 0, 0) · Δ390{font:38px/48px; ls:-0.285px} "Turn chats & agents into your creative research expert" (2 lines)
            - `div.max-w-lg` — 512×56 @464,226 | 991: 512×56 @240,226 | 390: 342×112 @24,240 · maxw:512px
              - `p.text-body-l.text-white-84` — 512×56 @464,226 | 991: 512×56 @240,226 | 390: 342×112 @24,240 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center ‹copy: ~113 chars, 2 lines @1440›
          - `div.main-cta-buttons` — 278×42 @581,310 | 991: 278×42 @357,310 | 390: 342×94 @24,376 · display:flex; align:center; gap:12px; pos:relative; z:2 · Δ390{display:grid; cols:342px}
            - `a.button-dark.button-primary` — 121.6×40 @581,311 | 991: 121.6×40 @357,311 | 390: 342×40 @24,376 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; flex:1 1 0%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `https://app.foreplay.co/sign-up`
              - `div.button-text-block` — 85.6×24 @589,319 | 991: 85.6×24 @365,319 | 390: 85.6×24 @142,384 · pos:relative; pad:0px 6px; z:2
                - `div.text-heading-m` — 73.6×24 @595,319 | 991: 73.6×24 @371,319 | 390: 73.6×24 @148,384 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14); align-text:center "Start now"
              - `div.button-icon-block.icon-right.opacity-100` — 24×24 @671,319 | 991: 24×24 @446,319 | 390: 24×24 @224,384 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; z:2
                - `div.icon-medium` — 24×24 @671,319 | 991: 24×24 @446,319 | 390: 24×24 @224,384 · display:flex; justify:center; align:center
                  - `div.svg.w-embed` — 24×24 @671,319 | 991: 24×24 @446,319 | 390: 24×24 @224,384 · display:flex; justify:center; align:center
                    - `svg` — 24×24 @671,319 | 991: 24×24 @446,319 | 390: 24×24 @224,384 · overflow:hidden · SVG `/assets/pages/mcp/svg-svg-185ries.svg`
            - `a.button-dark.button-secondary` — 144.4×42 @715,310 | 991: 144.4×42 @490,310 | 390: 342×42 @24,428 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(9, 10, 14); border:1px solid rgb(36, 38, 46); radius:10px; z:5; transition:0.2s · href `/pricing`
              - `div.button-text-block` — 106.4×24 @724,319 | 991: 106.4×24 @499,319 | 390: 106.4×24 @132,437 · pos:relative; pad:0px 6px; z:2
                - `div.text-heading-m` — 94.4×24 @730,319 | 991: 94.4×24 @505,319 | 390: 94.4×24 @138,437 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255); align-text:center "View Pricing"
              - `div.button-icon-block.icon-right` — 24×24 @826,319 | 991: 24×24 @601,319 | 390: 24×24 @234,437 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                - `div.icon-medium` — 24×24 @826,319 | 991: 24×24 @601,319 | 390: 24×24 @234,437 · display:flex; justify:center; align:center
                  - `div.svg.w-embed` — 24×24 @826,319 | 991: 24×24 @601,319 | 390: 24×24 @234,437 · display:flex; justify:center; align:center
                    - `svg` — 24×24 @826,319 | 991: 24×24 @601,319 | 390: 24×24 @234,437 · overflow:hidden · SVG `/assets/pages/mcp/svg-svg-185ries.svg`
    - `div.mcp-tabs-whole` — 1360×296 @40,394 | 991: 927×629 @32,394 | 390: 342×725 @24,518 · mar:0px 0px -10px 0px
      - `div.tabs-2.w-tabs` — 1360×296 @40,394 | 991: 927×629 @32,394 | 390: 342×725 @24,518 · display:flex; dir:column; align:center; pos:relative · data {"data-current":"Claude","data-easing":"ease","data-duration-in":"300","data-duration-out":"100"}
        - `div.mcp-tabs-menu` — 252.5×50 @594,394 | 991: 252.5×50 @369,394 | 390: 252.5×50 @69,518 · display:flex; align:center; gap:4px; pos:relative; pad:4px; bgimg:linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)); bgsize:auto; bgpos:0% 0%; radius:100px
          - `a#w-tabs-0-data-w-tab-0.mcp-tab-link.w-tab-link` — 112.7×42 @598,398 | 991: 112.7×42 @373,398 | 390: 112.7×42 @73,522 · display:flex; justify:center; align:center; gap:8px; pos:relative; pad:9px 16px; maxw:100%; bg:rgba(255, 255, 255, 0.12); radius:100px; transition:0.2s · href `#w-tabs-0-data-w-pane-0` · data {"data-w-tab":"Claude"}
            - `img.icon-20` — 20×20 @614,409 | 991: 20×20 @389,409 | 390: 20×20 @89,533 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/mcp/6a02366845ce81bd09b4dd99_claude-logo.svg` natural 100×100 loading=lazy alt "claude logo"
            - `div.text-label-m` — 52.7×24 @642,407 | 991: 52.7×24 @417,407 | 390: 52.7×24 @117,531 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(250, 250, 253) "Claude"
          - `a#w-tabs-0-data-w-tab-1.mcp-tab-link.w-tab-link` — 127.8×42 @714,398 | 991: 127.8×42 @490,398 | 390: 127.8×42 @189,522 · display:flex; justify:center; align:center; gap:8px; pos:relative; pad:9px 16px; maxw:100%; bg:rgba(255, 255, 255, 0); radius:100px; transition:0.2s · href `#w-tabs-0-data-w-pane-1` · data {"data-w-tab":"ChatGPT"}
            - `img.icon-20` — 20×20 @730,409 | 991: 20×20 @506,409 | 390: 20×20 @205,533 · maxw:100%; overflow:clip; fit:fill · IMG `/assets/pages/mcp/6a031b5d19c25920d6bb1b5d_chat-gpt-green.svg` natural 20×20 loading=lazy alt "chat gpt icon"
            - `div.text-label-m` — 67.8×24 @758,407 | 991: 67.8×24 @534,407 | 390: 67.8×24 @233,531 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(250, 250, 253) "ChatGPT"
        - `div.tabs-content-3` — 1360×246 @40,444 | 991: 927×579 @32,444 | 390: 342×675 @24,568 · pos:relative; overflow:hidden
          - `div#w-tabs-0-data-w-pane-0.mcp-setup-tab-pane.w-tab-pane` — 1360×246 @40,444 | 991: 927×548 @32,444 | 390: 342×644 @24,568 · pos:relative; pad:48px 0px 0px 0px · data {"data-w-tab":"Claude"}
            - `div.mcp-steps-grid` — 1360×198 @40,492 | 991: 927×500 @32,492 | 390: 342×596 @24,616 · display:grid; cols:442.656px 442.672px 442.656px; rows:198px; gap:16px · Δ991{display:flex; dir:column; wrap:nowrap; justify:normal; align:normal; mar:0px 0px 31px 0px} · Δ390{display:flex; dir:column; wrap:nowrap; justify:normal; align:normal; mar:0px 0px 31px 0px}
              - `div.mcp-steps-wrapper` — 442.7×198 @40,492 | 991: 927×156 @32,492 | 390: 342×180 @24,616 · pad:24px; bg:rgba(255, 255, 255, 0.12); radius:24px 24px 0px 0px · Δ991{radius:20px} · Δ390{radius:20px}
                - `div.mcp-steps-content` — 394.7×132 @64,516 | 991: 879×108 @56,516 | 390: 294×132 @48,640 · display:flex; align:flex-start; gap:12px
                  - `div.mcp-content-number` — 28×28 @64,516 | 991: 28×28 @56,516 | 390: 28×28 @48,640 · display:flex; justify:center; align:center; pad:4px; flex:0 0 auto; bg:rgba(255, 255, 255, 0.12); radius:8px
                    - `div.text-label-m` — 7.4×24 @74,518 | 991: 7.4×24 @66,518 | 390: 7.4×24 @58,642 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "1"
                  - `div.mcp-steps-content-2` — 354.7×132 @104,516 | 991: 389.3×108 @96,516 | 390: 254×132 @88,640 · display:flex; dir:column; align:flex-start; gap:6px
                    - `div.text-white` — 163.4×24 @104,516 | 991: 163.4×24 @96,516 | 390: 163.4×24 @88,640 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Open Claude Settings"
                    - `div.text-alpha-100` — 354.7×48 @104,546 | 991: 389.3×24 @96,546 | 390: 254×48 @88,670 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Launch the desktop app or open claude.ai and go to:" (2 lines)
                    - `a.mcp-steps-button` — 212.1×36 @104,612 | 991: 212.1×36 @96,588 | 390: 212.1×36 @88,736 · display:flex; align:center; gap:8px; pad:8px 8px 8px 12px; mar:12px 0px 0px 0px; maxw:100%; bg:rgba(255, 255, 255, 0.08); radius:8px; transition:0.2s · href `https://claude.ai/customize/connectors` target=_blank
                      - `div.div-block-362` — 164.1×20 @116,620 | 991: 164.1×20 @108,596 | 390: 164.1×20 @100,744 · display:flex; gap:6px; flex:1 1 0%
                        - `div.text-label-s` — 54.9×20 @116,620 | 991: 54.9×20 @108,596 | 390: 54.9×20 @100,744 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(255, 255, 255) "Settings"
                        - `svg` — 20×20 @177,620 | 991: 20×20 @169,596 | 390: 20×20 @161,744 · overflow:hidden · SVG `/assets/pages/mcp/svg-icon-20-1fgtg90.svg`
                        - `div.text-label-s` — 77.2×20 @203,620 | 991: 77.2×20 @195,596 | 390: 77.2×20 @187,744 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(255, 255, 255) "Connectors"
                      - `svg` — 20×20 @288,620 | 991: 20×20 @280,596 | 390: 20×20 @272,744 · overflow:hidden · SVG `/assets/pages/mcp/svg-icon-20-139p2q6.svg`
              - `div.mcp-steps-wrapper` — 442.7×198 @499,492 | 991: 927×162 @32,664 | 390: 342×186 @24,812 · pad:24px; bg:rgba(255, 255, 255, 0.12); radius:24px 24px 0px 0px · Δ991{radius:20px} · Δ390{radius:20px}
                - `div.mcp-steps-content` — 394.7×138 @523,516 | 991: 879×114 @56,688 | 390: 294×138 @48,836 · display:flex; align:flex-start; gap:12px
                  - `div.mcp-content-number` — 28×28 @523,516 | 991: 28×28 @56,688 | 390: 28×28 @48,836 · display:flex; justify:center; align:center; pad:4px; flex:0 0 auto; bg:rgba(255, 255, 255, 0.12); radius:8px
                    - `div.text-label-m` — 9.6×24 @532,518 | 991: 9.6×24 @65,690 | 390: 9.6×24 @57,838 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "2"
                  - `div.mcp-steps-content-2` — 354.7×138 @563,516 | 991: 360.8×114 @96,688 | 390: 271.2×138 @88,836 · display:flex; dir:column; align:flex-start; gap:6px
                    - `div.text-white` — 183.7×24 @563,516 | 991: 183.7×24 @96,688 | 390: 183.7×24 @88,836 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Add a custom connector"
                    - `div.text-alpha-100` — 354.7×48 @563,546 | 991: 360.8×24 @96,718 | 390: 271.2×48 @88,866 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Name it "Foreplay" and then copy/paste the URL:" (2 lines)
                    - `a.mcp-steps-button` — 271.2×36 @563,612 | 991: 271.2×36 @96,760 | 390: 271.2×36 @88,932 · display:flex; align:center; gap:8px; pad:8px 8px 8px 12px; mar:12px 0px 0px 0px; maxw:100%; bg:rgba(255, 255, 255, 0.08); radius:8px; transition:0.2s · href `#` · data {"data-copy":"https://public.api.foreplay.co/mcp"}
                      - `div.div-block-362` — 223.2×20 @575,620 | 991: 223.2×20 @108,768 | 390: 223.2×20 @100,940 · display:flex; gap:6px; flex:1 1 0%
                        - `div.text-label-s` — 223.2×20 @575,620 | 991: 223.2×20 @108,768 | 390: 223.2×20 @100,940 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(255, 255, 255) "https://public.api.foreplay.co/mcp"
                      - `svg` — 20×20 @806,620 | 991: 20×20 @339,768 | 390: 20×20 @331,940 · overflow:hidden · SVG `/assets/pages/mcp/svg-icon-20-1tuwbiv.svg`
              - `div.mcp-steps-wrapper` — 442.7×198 @957,492 | 991: 927×150 @32,842 | 390: 342×198 @24,1014 · pad:24px; bg:rgba(255, 255, 255, 0.12); radius:24px 24px 0px 0px · Δ991{radius:20px} · Δ390{radius:20px}
                - `div.mcp-steps-content` — 394.7×150 @981,516 | 991: 879×102 @56,866 | 390: 294×150 @48,1038 · display:flex; align:flex-start; gap:12px
                  - `div.mcp-content-number` — 28×28 @981,516 | 991: 28×28 @56,866 | 390: 28×28 @48,1038 · display:flex; justify:center; align:center; pad:4px; flex:0 0 auto; bg:rgba(255, 255, 255, 0.12); radius:8px
                    - `div.text-label-m` — 10.1×24 @990,518 | 991: 10.1×24 @65,868 | 390: 10.1×24 @57,1040 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "3"
                  - `div.mcp-steps-content-2` — 354.7×150 @1021,516 | 991: 421.5×102 @96,866 | 390: 254×150 @88,1038 · display:flex; dir:column; align:flex-start; gap:6px
                    - `div.text-white` — 148.5×24 @1021,516 | 991: 148.5×24 @96,866 | 390: 148.5×24 @88,1038 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(255, 255, 255) "Connect and sign in"
                    - `div.text-alpha-100` — 354.7×120 @1021,546 | 991: 421.5×72 @96,896 | 390: 254×120 @88,1068 · font:Inter 16px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~110 chars, 5 lines @1440›
          - `div#w-tabs-0-data-w-pane-1.mcp-setup-tab-pane.w-tab-pane` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: "1", "2", "3", "Enable Dev Mode", "Launch settings, Click Apps → Advanced and enable dev mode.", "Create a Custom App", "Name it "Foreplay MCP" and then copy/paste the URL:", "Connect and sign in", ‹~111ch›, "Settings", "Apps", "Advanced", svg 139p2q6, "https://public.api.foreplay.co/mcp", svg 1tuwbiv, svg 1fgtg90, svg 1fgtg90

### S3. `section.section`

y/height: 1440 752/2179.2 · 991 1085/1635.6 · 390 1305/2741.4

- `div.section-padding._0-top-px` — 1440×2179.2 @0,0 | 991: 991×1635.6 @0,0 | 390: 390×2741.4 @0,0 · pad:0px 8px 8px 8px
  - `div.section-white-block` — 1424×2171.2 @8,0 | 991: 975×1627.6 @8,0 | 390: 374×2733.4 @8,0 · pos:relative; bg:rgb(255, 255, 255); radius:36px; overflow:hidden; z:2 · Δ390{radius:16px}
    - `div.container.section-container` — 1344×2171.2 @48,0 | 991: 975×1627.6 @8,0 | 390: 374×2733.4 @8,0 · pad:0px 40px; mar:0px 40px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
      - `div.v-padding-experts` — 1264×2171.2 @88,0 | 991: 911×1627.6 @40,0 | 390: 326×2733.4 @32,0 · pad:48px 0px · Δ991{pad:32px 0px} · Δ390{pad:24px 0px}
        - `div.div-block-360` — 1264×2075.2 @88,48 | 991: 911×1563.6 @40,32 | 390: 326×2685.4 @32,24 · display:flex; dir:column; gap:100px
          - `div.left-right-section-wrapper` — 1264×443.8 @88,48 | 991: 911×305.2 @40,32 | 390: 326×614.3 @32,24 · display:flex; dir:column; gap:80px
            - `div.lens-gamification-grid` — 1264×443.8 @88,48 | 991: 911×305.2 @40,32 | 390: 326×614.3 @32,24 · display:grid; cols:105.328px 105.328px 105.344px 105.328px 105.328px 105.344px 105.328px 105.328px 105.344px 105.328px 105.328px 105.344px; rows:443.797px; jitems:center; align:center; gap:0px · Δ991{display:flex; dir:row; wrap:nowrap; justify:normal; align:center; gap:40px} · Δ390{display:flex; dir:column; wrap:nowrap; justify:normal; align:start; gap:40px}
              - `div#w-node-_2ad7e405-fa51-924e-b31b-306bb5a7b14b-436e00b8.lens-gamification-content` — 526.7×284 @88,128 | 991: 453.8×284 @40,43 | 390: 326×340 @32,298 · display:flex; dir:column; justify:center; align:flex-start; gap:32px; gcol:span 5/span 5; grow:span 1/span 1 · Δ390{gap:24px}
                - `div.section-head.is-align-left` — 526.7×212 @88,128 | 991: 453.8×212 @40,43 | 390: 326×276 @32,298 · display:flex; dir:column; align:flex-start; gap:12px; maxw:720px · Δ390{gap:8px}
                  - `div.text-solid-400` — 169.7×16 @88,128 | 991: 169.7×16 @40,43 | 390: 169.7×16 @32,298 · flex:0 0 auto
                    - `div.text-overline` — 169.7×16 @88,128 | 991: 169.7×16 @40,43 | 390: 169.7×16 @32,298 · font:Inter 12px/16px w550 ls2px; color:rgb(76, 80, 95); tt:uppercase "SKILLS & WORKFLOWS"
                  - `h2.text-display-h3` — 526.7×88 @88,156 | 991: 453.8×88 @40,71 | 390: 326×132 @32,322 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(9, 10, 14); wrap-text:balance "Automate Your Research & Ideation Work" (2 lines)
                  - `div.section-head_paragraph` — 512×84 @88,256 | 991: 453.8×84 @40,171 | 390: 326×112 @32,462 · maxw:512px
                    - `p.text-body-l` — 512×84 @88,256 | 991: 453.8×84 @40,171 | 390: 326×112 @32,462 · font:Inter 18px/28px w400 ls-0.259999px; color:rgb(52, 54, 66); wrap-text:pretty ‹copy: ~142 chars, 3 lines @1440›
                - `a.button-light.button-stroke` — 152.6×40 @88,372 | 991: 152.6×40 @40,287 | 390: 152.6×40 @32,598 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(255, 255, 255); radius:10px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px; z:5; transition:0.15s · href `https://app.foreplay.co/sign-up`
                  - `div.button-text-block` — 116.6×24 @96,380 | 991: 116.6×24 @48,295 | 390: 116.6×24 @40,606 · pos:relative; pad:0px 6px; z:2
                    - `div.text-heading-m` — 104.6×24 @102,380 | 991: 104.6×24 @54,295 | 390: 104.6×24 @46,606 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14) "Connect MCP"
                  - `div.button-icon-block.icon-right` — 24×24 @209,380 | 991: 24×24 @161,295 | 390: 24×24 @153,606 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                    - `div.icon-medium` — 24×24 @209,380 | 991: 24×24 @161,295 | 390: 24×24 @153,606 · display:flex; justify:center; align:center
                      - `div.svg.w-embed` — 24×24 @209,380 | 991: 24×24 @161,295 | 390: 24×24 @153,606 · display:flex; justify:center; align:center
                        - `svg` — 24×24 @209,380 | 991: 24×24 @161,295 | 390: 24×24 @153,606 · overflow:hidden · SVG `/assets/pages/mcp/svg-svg-185ries.svg`
              - `div#w-node-_2ad7e405-fa51-924e-b31b-306bb5a7b15a-436e00b8.lens-gamification-illustration` — 592×443.8 @687,48 | 991: 417.2×305.2 @534,32 | 390: 326×234.3 @32,24 · pad:0px 16px; gcol:span 7/span 7; grow:span 1/span 1 · Δ390{pad:0px}
                - `img.lens-gamification-illustration-image.with-padding` — 560×443.8 @703,48 | 991: 385.2×305.2 @550,32 | 390: 326×258.3 @32,24 · maxw:100%; overflow:clip; fit:fill · Δ390{mar:0px 0px -24px 0px} · IMG `/assets/pages/mcp/6a031a0dcd962140ba2dc4b8_mcp-automation.webp` natural 560×443 loading=lazy alt "competitor analysis data mcp screenshot"
          - `div.left-right-section-wrapper` — 1264×443.8 @88,592 | 991: 911×302.5 @40,437 | 390: 326×614.3 @32,738 · display:flex; dir:column; gap:80px
            - `div.lens-gamification-grid` — 1264×443.8 @88,592 | 991: 911×302.5 @40,437 | 390: 326×614.3 @32,738 · display:grid; cols:105.328px 105.328px 105.344px 105.328px 105.328px 105.344px 105.328px 105.328px 105.344px 105.328px 105.328px 105.344px; rows:443.797px; jitems:center; align:center; gap:0px · Δ991{display:flex; dir:row; wrap:nowrap; justify:normal; align:center; gap:40px} · Δ390{display:flex; dir:column; wrap:nowrap; justify:normal; align:start; gap:40px}
              - `div#w-node-_4d6e6860-d0cd-203f-15eb-cc139dc91138-436e00b8.lens-gamification-illustration` — 592×443.8 @161,592 | 991: 413.7×302.5 @40,437 | 390: 326×234.3 @32,738 · pad:0px 16px; gcol:span 7/span 7; grow:span 1/span 1 · Δ390{pad:0px}
                - `img.lens-gamification-illustration-image.with-padding` — 560×443.8 @177,592 | 991: 381.7×302.5 @56,437 | 390: 326×258.3 @32,738 · maxw:100%; overflow:clip; fit:fill · Δ390{mar:0px 0px -24px 0px} · IMG `/assets/pages/mcp/6a031a0d97527e45f72b5799_mcp-discovery.webp` natural 560×443 loading=lazy alt "claude foreplay mcp screenshot"
              - `div#w-node-_4d6e6860-d0cd-203f-15eb-cc139dc91128-436e00b8.lens-gamification-content` — 526.7×284 @825,672 | 991: 457.3×284 @494,446 | 390: 326×340 @32,1013 · display:flex; dir:column; justify:center; align:flex-start; gap:32px; gcol:span 5/span 5; grow:span 1/span 1 · Δ390{gap:24px}
                - `div.section-head.is-align-left` — 526.7×212 @825,672 | 991: 457.3×212 @494,446 | 390: 326×276 @32,1013 · display:flex; dir:column; align:flex-start; gap:12px; maxw:720px · Δ390{gap:8px}
                  - `div.text-solid-400` — 135.2×16 @825,672 | 991: 135.2×16 @494,446 | 390: 135.2×16 @32,1013 · flex:0 0 auto
                    - `div.text-overline` — 135.2×16 @825,672 | 991: 135.2×16 @494,446 | 390: 135.2×16 @32,1013 · font:Inter 12px/16px w550 ls2px; color:rgb(76, 80, 95); tt:uppercase "BRAND TRACKING"
                  - `h2.text-display-h3` — 526.7×88 @825,700 | 991: 457.3×88 @494,474 | 390: 326×132 @32,1037 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(9, 10, 14); wrap-text:balance "Discover Unknown Brands & Competitiors" (2 lines)
                  - `div.section-head_paragraph` — 512×84 @825,800 | 991: 457.3×84 @494,574 | 390: 326×112 @32,1177 · maxw:512px
                    - `p.text-body-l` — 512×84 @825,800 | 991: 457.3×84 @494,574 | 390: 326×112 @32,1177 · font:Inter 18px/28px w400 ls-0.259999px; color:rgb(52, 54, 66); wrap-text:pretty ‹copy: ~142 chars, 3 lines @1440›
                - `a.button-light.button-stroke` — 152.6×40 @825,916 | 991: 152.6×40 @494,690 | 390: 152.6×40 @32,1313 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(255, 255, 255); radius:10px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px; z:5; transition:0.15s · href `https://app.foreplay.co/sign-up`
                  - `div.button-text-block` — 116.6×24 @833,924 | 991: 116.6×24 @502,698 | 390: 116.6×24 @40,1321 · pos:relative; pad:0px 6px; z:2
                    - `div.text-heading-m` — 104.6×24 @839,924 | 991: 104.6×24 @508,698 | 390: 104.6×24 @46,1321 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14) "Connect MCP"
                  - `div.button-icon-block.icon-right` — 24×24 @946,924 | 991: 24×24 @614,698 | 390: 24×24 @153,1321 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                    - `div.icon-medium` — 24×24 @946,924 | 991: 24×24 @614,698 | 390: 24×24 @153,1321 · display:flex; justify:center; align:center
                      - `div.svg.w-embed` — 24×24 @946,924 | 991: 24×24 @614,698 | 390: 24×24 @153,1321 · display:flex; justify:center; align:center
                        - `svg` — 24×24 @946,924 | 991: 24×24 @614,698 | 390: 24×24 @153,1321 · overflow:hidden · SVG `/assets/pages/mcp/svg-svg-185ries.svg`
          - …2 more `div.left-right-section-wrapper` siblings with the same structure (4 total):
            - [3] 1264×443.8 @88,1136 — img 6a031a0d3613031e0a9a1440_mcp-interactions.webp, "INTERACTIVE ARTIFACTS", "Connect MCP", "Proper Human-In-The-Loop Interactions", ‹~104ch›, svg 185ries
            - [4] 1264×443.8 @88,1679 — img 6a031a0dc36b44616c24e3e9_mcp-ad-library.webp, "LIVE AD LIBRARY", "Connect MCP", "Access 200M Ads in Real-Time", ‹~125ch›, svg 185ries

### S4. `div.section`

y/height: 1440 2931/955.8 · 991 2721/954 · 390 4046/998

- `div.container` — 1440×955.8 @0,0 | 991: 991×954 @0,0 | 390: 390×998 @0,0 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
  - `div.faq` — 1360×955.8 @40,0 | 991: 927×954 @32,0 | 390: 342×998 @24,0 · display:flex; dir:column; gap:48px; pad:140px 0px · Δ390{gap:40px; pad:64px 0px 80px 0px}
    - `div.section-head` — 720×149.8 @360,140 | 991: 720×148 @136,140 | 390: 342×192 @24,64 · display:flex; dir:column; align:center; gap:12px; mar:0px 320px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
      - `div.section-head-wrapper` — 527.8×149.8 @456,140 | 991: 512×148 @240,140 | 390: 342×192 @24,64 · display:flex; dir:column; align:center; gap:12px
        - `div.text-overline.text-white-68` — 29.5×16 @705,140 | 991: 29.5×16 @481,140 | 390: 29.5×16 @180,64 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "FAQ"
        - `h3.text-display-h2` — 527.8×53.8 @456,168 | 991: 479.9×52 @256,168 | 390: 342×96 @24,92 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Questions about the MCP?"
        - `div.section-head_paragraph` — 512×56 @464,234 | 991: 512×56 @240,232 | 390: 342×56 @24,200 · maxw:512px
          - `p.text-body-l` — 512×56 @464,234 | 991: 512×56 @240,232 | 390: 342×56 @24,200 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty "Most common questions about the Foreplay MCP connection and features." (2 lines)
    - `div.faq-block-container` — 752×366 @344,338 | 991: 752×366 @120,336 | 390: 342×466 @24,296 · mar:0px 304px; maxw:752px · Δ991{mar:0px 87.5px} · Δ390{mar:0px} · data {"data-accordion-container":""}
      - `div.` — 752×366 @344,338 | 991: 752×366 @120,336 | 390: 342×466 @24,296
        - `div.faq-block` — 752×61 @344,338 | 991: 752×61 @120,336 | 390: 342×61 @24,296 · display:flex; justify:center; align:flex-start; gap:44px; pad:20px 0px 12px 0px; border:T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-accordion-item":"","data-expanded":"false"}
          - `div.faq-block_content` — 680×24 @344,358 | 991: 680×24 @120,356 | 390: 270×24 @24,316 · display:flex; dir:column; flex:1 1 0%
            - `div.faq-block_head` — 680×24 @344,358 | 991: 680×24 @120,356 | 390: 270×24 @24,316 · display:flex; align:center; gap:44px
              - `h4.text-label-l` — 204.3×24 @344,358 | 991: 204.3×24 @120,356 | 390: 181.6×24 @24,316 · font:Inter 18px/24px w500 ls-0.259999px; color:rgba(255, 255, 255, 0.68) · Δ390{font:16px/24px; ls:-0.23111px} "How current is the data?"
            - `div.faq-block_body` — 680×0 @344,382 | 991: 680×0 @120,380 | 390: 270×0 @24,340 · overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
              - `div.faq-block_answer` — 680×56 @344,382 | 991: 680×56 @120,380 | 390: 270×116 @24,340 · pad:8px 0px; overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
                - `p` — 680×40 @344,390 | 991: 680×40 @120,388 | 390: 270×100 @24,348 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) ‹copy: ~185 chars, 2 lines @1440›
          - `div.faq-block_icon` — 28×28 @1068,358 | 991: 28×28 @844,356 | 390: 28×28 @338,316 · display:flex; justify:center; align:center; transition:0.2s
            - `div.icon-medium` — 24×24 @1070,360 | 991: 24×24 @846,358 | 390: 24×24 @340,318 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @1070,360 | 991: 24×24 @846,358 | 390: 24×24 @340,318 · display:flex; justify:center; align:center
                - `svg` — 24×24 @1070,360 | 991: 24×24 @846,358 | 390: 24×24 @340,318 · overflow:hidden · SVG `/assets/pages/mcp/svg-svg-wqicrt.svg`
        - `div.faq-block` — 752×61 @344,399 | 991: 752×61 @120,397 | 390: 342×81 @24,357 · display:flex; justify:center; align:flex-start; gap:44px; pad:20px 0px 12px 0px; border:T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-accordion-item":"","data-expanded":"false"}
          - `div.faq-block_content` — 680×24 @344,419 | 991: 680×24 @120,417 | 390: 270×48 @24,377 · display:flex; dir:column; flex:1 1 0%
            - `div.faq-block_head` — 680×24 @344,419 | 991: 680×24 @120,417 | 390: 270×48 @24,377 · display:flex; align:center; gap:44px
              - `h4.text-label-l` — 391×24 @344,419 | 991: 391×24 @120,417 | 390: 270×48 @24,377 · font:Inter 18px/24px w500 ls-0.259999px; color:rgba(255, 255, 255, 0.68) · Δ390{font:16px/24px; ls:-0.23111px} "Does it work with ChatGPT too, or just Claude?"
            - `div.faq-block_body` — 680×0 @344,443 | 991: 680×0 @120,441 | 390: 270×0 @24,425 · overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
              - `div.faq-block_answer` — 680×76 @344,443 | 991: 680×76 @120,441 | 390: 270×176 @24,425 · pad:8px 0px; overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
                - `p` — 680×60 @344,451 | 991: 680×60 @120,449 | 390: 270×160 @24,433 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) ‹copy: ~281 chars, 3 lines @1440›
          - `div.faq-block_icon` — 28×28 @1068,419 | 991: 28×28 @844,417 | 390: 28×28 @338,377 · display:flex; justify:center; align:center; transition:0.2s
            - `div.icon-medium` — 24×24 @1070,421 | 991: 24×24 @846,419 | 390: 24×24 @340,379 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @1070,421 | 991: 24×24 @846,419 | 390: 24×24 @340,379 · display:flex; justify:center; align:center
                - `svg` — 24×24 @1070,421 | 991: 24×24 @846,419 | 390: 24×24 @340,379 · overflow:hidden · SVG `/assets/pages/mcp/svg-svg-wqicrt.svg`
        - …4 more `div.` siblings with the same structure (6 total):
          - [3] 752×61 @344,460 — "Can Claude access my swipe file and boards?", svg wqicrt, ‹~253ch›
          - [4] 752×61 @344,521 — "What ad data does Claude/Chat have access to?", svg wqicrt, ‹~352ch›
          - [5] 752×61 @344,582 — "What can I actually do with the Foreplay MCP?", svg wqicrt, ‹~464ch›
          - [6] 752×61 @344,643 — "How does Foreplay connect to Claude or ChatGPT?", svg wqicrt, ‹~358ch›
    - `div.faq-buttons` — 1360×64 @40,752 | 991: 927×64 @32,750 | 390: 342×116 @24,802 · display:flex; justify:center; align:center; gap:12px; pad:12px 0px · Δ390{dir:column; align:stretch}
      - `a#intercomButton.button-dark.ghost-icon-button` — 177.4×40 @536,764 | 991: 177.4×40 @311,762 | 390: 342×40 @24,814 · display:flex; justify:center; align:center; gap:5px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `#`
        - `div.button-icon-block.icon-left` — 24×24 @544,772 | 991: 24×24 @319,770 | 390: 24×24 @114,822 · display:flex; justify:center; align:center; pos:relative; mar:0px -4px 0px 0px; opacity:0.68; z:2
          - `div.icon-medium` — 24×24 @544,772 | 991: 24×24 @319,770 | 390: 24×24 @114,822 · display:flex; justify:center; align:center
            - `div.svg.w-embed` — 20×20 @546,774 | 991: 20×20 @321,772 | 390: 20×20 @116,824 · display:flex; justify:center; align:center
              - `svg` — 20×20 @546,774 | 991: 20×20 @321,772 | 390: 20×20 @116,824 · overflow:hidden · SVG `/assets/pages/mcp/svg-svg-1i4rn0n.svg`
        - `div.button-text-block` — 136.4×24 @569,772 | 991: 136.4×24 @344,770 | 390: 136.4×24 @139,822 · pos:relative; pad:0px 6px; z:2
          - `div.text-heading-m` — 124.4×24 @575,772 | 991: 124.4×24 @350,770 | 390: 124.4×24 @145,822 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Contact support"
      - `a.button-dark.ghost-icon-button` — 179.1×40 @725,764 | 991: 179.1×40 @501,762 | 390: 342×40 @24,866 · display:flex; justify:center; align:center; gap:5px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `https://foreplay.featurebase.app/help` target=_blank
        - `div.button-icon-block.icon-left` — 24×24 @733,772 | 991: 24×24 @509,770 | 390: 24×24 @113,874 · display:flex; justify:center; align:center; pos:relative; mar:0px -4px 0px 0px; opacity:0.68; z:2
          - `div.icon-medium` — 24×24 @733,772 | 991: 24×24 @509,770 | 390: 24×24 @113,874 · display:flex; justify:center; align:center
            - `div.svg.w-embed` — 24×24 @733,772 | 991: 24×24 @509,770 | 390: 24×24 @113,874 · display:flex; justify:center; align:center
              - `svg` — 24×24 @733,772 | 991: 24×24 @509,770 | 390: 24×24 @113,874 · overflow:hidden · SVG `/assets/pages/mcp/svg-svg-1lrvzzc.svg`
        - `div.button-text-block` — 138.1×24 @758,772 | 991: 138.1×24 @534,770 | 390: 138.1×24 @138,874 · pos:relative; pad:0px 6px; z:2
          - `div.text-heading-m` — 126.1×24 @764,772 | 991: 126.1×24 @540,770 | 390: 126.1×24 @144,874 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Knowledge Base"

## Typography roles (computed at 1440; sizes at 991/390 from the same nodes)

| font (family size/lh weight ls) | color | n | @991 | @390 | elements (sample) | example |
|---|---|---|---|---|---|---|
| Inter 16px/24px w500 ls-0.18px | rgb(255, 255, 255) | 7 | 16px/24px | 16px/24px | `h1.text-label-m` `div.text-label-m` `div.text-white` | MCP |
| Inter 18px/24px w500 ls-0.259999px | rgba(255, 255, 255, 0.68) | 6 | 18px/24px | 16px/24px | `h4.text-label-l` | How current is the data? |
| Inter 14px/20px w400 ls-0.09px | rgba(255, 255, 255, 0.68) | 6 | 14px/20px | 14px/20px | `p` | ~185 chars |
| Inter 16px/24px w550 ls-0.18px | rgb(9, 10, 14) | 5 | 16px/24px | 16px/24px | `div.text-heading-m` | Start now |
| Inter 12px/16px w550 ls2px uppercase | rgb(76, 80, 95) | 4 | 12px/16px | 12px/16px | `div.text-overline` | SKILLS & WORKFLOWS |
| Inter Display 36px/44px w600 ls-0.26px | rgb(9, 10, 14) | 4 | 36px/44px | 36px/44px | `h2.text-display-h3` | Automate Your Research & Ideation Work |
| Inter 18px/28px w400 ls-0.259999px | rgb(52, 54, 66) | 4 | 18px/28px | 18px/28px | `p.text-body-l` | ~142 chars |
| Inter 16px/24px w550 ls-0.18px | rgb(255, 255, 255) | 3 | 16px/24px | 16px/24px | `div.text-heading-m` | View Pricing |
| Inter 16px/24px w400 ls-0.18px | rgba(255, 255, 255, 0.68) | 3 | 16px/24px | 16px/24px | `div.text-alpha-100` | Launch the desktop app or open claude.ai |
| Inter 14px/20px w500 ls-0.09px | rgb(255, 255, 255) | 3 | 14px/20px | 14px/20px | `div.text-label-s` | Settings |
| Inter 18px/28px w400 ls-0.259999px | rgba(255, 255, 255, 0.68) | 2 | 18px/28px | 18px/28px | `p.text-body-l.text-white-84` `p.text-body-l` | ~113 chars |
| Inter 16px/24px w500 ls-0.18px | rgb(250, 250, 253) | 2 | 16px/24px | 16px/24px | `div.text-label-m` | Claude |
| Inter Display 60px/68px w600 ls-0.45px | rgba(255, 255, 255, 0.88) | 1 | 60px/68px | 38px/48px | `h3.text-display-h1.hero-title` | Turn chats & agents into your creative r |
| Inter 12px/16px w550 ls2px uppercase | rgba(255, 255, 255, 0.36) | 1 | 12px/16px | 12px/16px | `div.text-overline.text-white-68` | FAQ |
| Inter Display 44px/53.76px w600 ls-0.33px | rgb(255, 255, 255) | 1 | 40px/52px | 36px/48px | `h3.text-display-h2` | Questions about the MCP? |

## Colors, gradients, radii, shadows in use (non-text, 1440)

**background-color**
- `rgba(255, 255, 255, 0.1)` — `div.mcp-tag`
- `rgb(255, 255, 255)` — `a.button-dark.button-primary`, `div.section-white-block`, `a.button-light.button-stroke`
- `rgb(9, 10, 14)` — `a.button-dark.button-secondary`
- `rgba(255, 255, 255, 0.12)` — `a#w-tabs-0-data-w-tab-0.mcp-tab-link.w-tab-link`, `div.mcp-steps-wrapper`, `div.mcp-content-number`
- `rgba(255, 255, 255, 0)` — `a#w-tabs-0-data-w-tab-1.mcp-tab-link.w-tab-link`
- `rgba(255, 255, 255, 0.08)` — `a.mcp-steps-button`
- `rgb(2, 3, 8)` — `a#intercomButton.button-dark.ghost-icon-button`, `a.button-dark.ghost-icon-button`

**background-image**
- `radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88))` — `h3.text-display-h1.hero-title`
- `linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))` — `div.mcp-tabs-menu`

**border**
- `1px solid rgb(36, 38, 46)` — `a.button-dark.button-secondary`
- `T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0` — `div.faq-block`

**radius**
- `100px` — `div.mcp-tag`, `div.mcp-tabs-menu`, `a#w-tabs-0-data-w-tab-0.mcp-tab-link.w-tab-link`, `a#w-tabs-0-data-w-tab-1.mcp-tab-link.w-tab-link`
- `10px` — `a.button-dark.button-primary`, `a.button-dark.button-secondary`, `a.button-light.button-stroke`, `a#intercomButton.button-dark.ghost-icon-button`, `a.button-dark.ghost-icon-button`
- `24px 24px 0px 0px` — `div.mcp-steps-wrapper`
- `8px` — `div.mcp-content-number`, `a.mcp-steps-button`
- `36px` — `div.section-white-block`

**box-shadow**
- `rgb(233, 234, 239) 0px 0px 0px 1px` — `a.button-light.button-stroke`

**opacity**
- `0.68` — `div.button-icon-block.icon-right`, `div.button-icon-block.icon-left`

**transition**
- `0.2s` — `a.button-dark.button-primary`, `a.button-dark.button-secondary`, `a#w-tabs-0-data-w-tab-0.mcp-tab-link.w-tab-link`, `a#w-tabs-0-data-w-tab-1.mcp-tab-link.w-tab-link`, `a.mcp-steps-button` (+3)
- `0.15s` — `a.button-light.button-stroke`
- `0.9s cubic-bezier(0.19, 1, 0.22, 1)` — `div.faq-block`, `div.faq-block_body`, `div.faq-block_answer`

## Assets (local path ↔ element)

| local file | kind | element | natural | displayed @1440 | source URL |
|---|---|---|---|---|---|
| `/assets/pages/mcp/6a02344c3fd0db1c64ab3488_mcp-icon.svg` | img | `icon-medium` (s1.1.0.1.0.0.0) | 20×20 | 24×24 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6a02344c3fd0db1c64ab3488_mcp-icon.svg |
| `/assets/pages/mcp/6a02366845ce81bd09b4dd99_claude-logo.svg` | img | `icon-20` (s1.1.1.0.0.0.0) | 100×100 | 20×20 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6a02366845ce81bd09b4dd99_claude-logo.svg |
| `/assets/pages/mcp/6a031b5d19c25920d6bb1b5d_chat-gpt-green.svg` | img | `icon-20` (s1.1.1.0.0.1.0) | 20×20 | 20×20 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6a031b5d19c25920d6bb1b5d_chat-gpt-green.svg |
| `/assets/pages/mcp/6a031a0dcd962140ba2dc4b8_mcp-automation.webp` | img | `lens-gamification-illustration-image.with-padding` (s2.0.0.0.0.0.0.0.1.0) | 560×443 | 560×443.8 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6a031a0dcd962140ba2dc4b8_mcp-automation.webp |
| `/assets/pages/mcp/6a031a0d97527e45f72b5799_mcp-discovery.webp` | img | `lens-gamification-illustration-image.with-padding` (s2.0.0.0.0.0.1.0.0.0) | 560×443 | 560×443.8 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6a031a0d97527e45f72b5799_mcp-discovery.webp |
| `/assets/pages/mcp/6a031a0d3613031e0a9a1440_mcp-interactions.webp` | img | `lens-gamification-illustration-image.with-padding` (s2.0.0.0.0.0.2.0.1.0) | 560×443 | 560×443.8 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6a031a0d3613031e0a9a1440_mcp-interactions.webp |
| `/assets/pages/mcp/6a031a0dc36b44616c24e3e9_mcp-ad-library.webp` | img | `lens-gamification-illustration-image.with-padding` (s2.0.0.0.0.0.3.0.0.0) | 560×443 | 560×443.8 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6a031a0dc36b44616c24e3e9_mcp-ad-library.webp |

**Inline SVGs saved** (each distinct inline `<svg>` in page content):

- `/assets/pages/mcp/svg-svg-185ries.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/mcp/svg-icon-20-1fgtg90.svg` — 20×20 in `icon-20.w-embed`
- `/assets/pages/mcp/svg-icon-20-139p2q6.svg` — 20×20 in `icon-20.w-embed`
- `/assets/pages/mcp/svg-icon-20-1tuwbiv.svg` — 20×20 in `icon-20.w-embed`
- `/assets/pages/mcp/svg-svg-wqicrt.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/mcp/svg-svg-1i4rn0n.svg` — 20×20 in `svg.w-embed`
- `/assets/pages/mcp/svg-svg-1lrvzzc.svg` — 24×24 in `svg.w-embed`

## Motion

### Webflow IX2 (from `Webflow.require("ix2").store.getState().ixData`, filtered to elements on this page outside nav/footer)

- none


### Running Web Animations after load (`document.getAnimations()`, page content only)

- none

### Widgets / embeds detected

- s0 `div.code-style.w-embed` 
- s1.1.1.0 `div.tabs-2.w-tabs` {"data-current":"Claude","data-easing":"ease","data-duration-in":"300","data-duration-out":"100"}
- s1.1.1.0.0.0 `a.mcp-tab-link.w-inline-block.w-tab-link.w--current` {"data-w-tab":"Claude"}
- s1.1.1.0.0.1 `a.mcp-tab-link.w-inline-block.w-tab-link` {"data-w-tab":"ChatGPT"}
- s1.1.1.0.1.0 `div.mcp-setup-tab-pane.w-tab-pane.w--tab-active` {"data-w-tab":"Claude"}
- s1.1.1.0.1.0.0.0.0.1.2.0.1 `div.icon-20.w-embed` 
- s1.1.1.0.1.0.0.0.0.1.2.1 `div.icon-20.w-embed` 
- s1.1.1.0.1.0.0.1.0.1.2.1 `div.icon-20.w-embed` 
- s1.1.1.0.1.0.0.1.0.1.3 `div.w-embed.w-script` 
- s1.1.1.0.1.1 `div.mcp-setup-tab-pane.w-tab-pane` {"data-w-tab":"ChatGPT"}
- s1.1.1.0.1.1.0.0.0.1.2.0.1 `div.icon-20.w-embed` 
- s1.1.1.0.1.1.0.0.0.1.2.0.3 `div.icon-20.w-embed` 
- s1.1.1.0.1.1.0.0.0.1.2.1 `div.icon-20.w-embed` 
- s1.1.1.0.1.1.0.1.0.1.2.1 `div.icon-20.w-embed` 
- s1.1.1.0.1.1.0.1.0.1.3 `div.w-embed.w-script` 
- s3.0.0.1.0 `div.code-style.w-embed` 
- s3.0.0.1.1 `div.w-dyn-list` 

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
From s3.0.0.1.0:
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

### Page-level `<script>` embeds

From s1.1.1.0.1.0.0.1.0.1.3 (566 chars):
```js
document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const text = btn.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(text);
      const original = btn.querySelector('.copy-label')?.textContent || btn.textContent;
      const label = btn.querySelector('.copy-label') || btn;
      label.textContent = 'Copied!';
      setTimeout(() => { label.textContent = original; }, 1500);
    } catch (err) {
      console.error('Copy failed', err);
    }
  });
});
```
From s1.1.1.0.1.1.0.1.0.1.3 (566 chars):
```js
document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const text = btn.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(text);
      const original = btn.querySelector('.copy-label')?.textContent || btn.textContent;
      const label = btn.querySelector('.copy-label') || btn;
      label.textContent = 'Copied!';
      setTimeout(() => { label.textContent = original; }, 1500);
    } catch (err) {
      console.error('Copy failed', err);
    }
  });
});
```

## CSS rules for classes not used on the homepage (verbatim from `foreplay-3-0.shared.850e08b99.min.css`)

New classes: `product-hero-canvas` `product-hero` `product-hero-animation-trigger` `product-hero-sticky` `api-hero-content` `mcp-tag` `hero-text` `max-w-lg` `text-white-84` `mcp-tabs-whole` `tabs-2` `mcp-tabs-menu` `mcp-tab-link` `icon-20` `tabs-content-3` `mcp-setup-tab-pane` `mcp-steps-grid` `mcp-steps-wrapper` `mcp-steps-content` `mcp-content-number` `mcp-steps-content-2` `mcp-steps-button` `div-block-362` `_0-top-px` `v-padding-experts` `div-block-360` `left-right-section-wrapper` `lens-gamification-grid` `lens-gamification-content` `button-stroke` `lens-gamification-illustration` `lens-gamification-illustration-image` `with-padding` `faq` `faq-block-container` `faq-block` `faq-block_content` `faq-block_head` `faq-block_body` `faq-block_answer` `faq-rtb` `faq-block_icon` `faq-buttons` `ghost-icon-button` `icon-left`

```css
.icon-20 { width: 20px; height: 20px; }
.icon-20.flip { transform: rotate(180deg); }
.button-icon-block.icon-left { z-index: 2; margin-right: -4px; }
.hero-text { gap: 16px; flex-flow: column; justify-content: flex-start; align-items: center; max-width: 900px; display: flex; }
.max-w-lg { max-width: 512px; }
.section-padding._0-top-px { padding-top: 0px; }
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
.left-right-section-wrapper { gap: 80px; flex-flow: column; display: flex; }
.product-hero { text-align: center; flex-flow: column; justify-content: flex-start; align-items: center; padding-top: 10px; padding-bottom: 0px; display: flex; }
.product-hero.mobile-app-hero { padding-bottom: 30px; }
.product-hero-sticky { flex-flow: column; justify-content: flex-start; align-items: center; display: flex; position: sticky; top: 100px; }
.v-padding-experts { padding-top: 48px; padding-bottom: 48px; }
.api-hero-content { gap: 28px; flex-flow: column; justify-content: flex-start; align-items: center; padding-bottom: 42px; display: flex; }
.button-jumpstart.button-stroke { background-color: var(--_lens---solid-0); box-shadow: 0 0 0 1px var(--_lens---solid-50); color: var(--_lens---solid-900); }
.button-jumpstart.button-stroke:hover { background-color: var(--_lens---solid-25); box-shadow: 0 0 0 0 var(--_lens---solid-50); }
.button-jumpstart.button-stroke:active { background-color: var(--_lens---solid-50); }
.button-jumpstart.button-stroke:focus { box-shadow: 0 0 0 2px white,0 0 0 3px var(--_lens---solid-900); }
.mcp-tabs-menu { gap: 4px; background-image: linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)); border-radius: 100px; align-items: center; padding: 4px; display: flex; }
.mcp-tab-link { gap: 8px; color: var(--body); background-color: rgba(255, 255, 255, 0); border-radius: 100px; padding-left: 16px; padding-right: 16px; transition: 0.2s; display: flex; }
.mcp-tab-link:hover { background-color: rgba(255, 255, 255, 0.08); }
.mcp-tab-link.w--current { background-color: rgba(255, 255, 255, 0.12); }
.mcp-tab-link.disabled { opacity: 0.68; cursor: not-allowed; }
.mcp-tab-link.disabled:hover { background-color: rgba(255, 255, 255, 0); }
.tabs-2 { flex-flow: column; align-items: center; display: flex; }
.tabs-content-3 { width: 100%; }
.div-block-360 { gap: 100px; flex-flow: column; display: flex; }
.mcp-steps-grid { gap: 16px; grid-template-rows: auto; grid-template-columns: 1fr 1fr 1fr; grid-auto-columns: 1fr; display: grid; }
.mcp-steps-wrapper { background-color: rgba(255, 255, 255, 0.12); border-top-left-radius: 24px; border-top-right-radius: 24px; padding: 24px; }
.mcp-steps-content { gap: 12px; align-items: flex-start; display: flex; }
.mcp-steps-content-2 { gap: 6px; flex-flow: column; align-items: flex-start; display: flex; }
.mcp-content-number { width: 28px; height: 28px; color: var(--_lens---solid-0); background-color: rgba(255, 255, 255, 0.12); border-radius: 8px; flex: 0 0 auto; justify-content: center; align-items: center; padding: 4px; display: flex; }
.mcp-steps-button { gap: 8px; color: var(--white); background-color: rgba(255, 255, 255, 0.08); border-radius: 8px; justify-content: flex-start; align-items: center; margin-top: 12px; padding: 8px 8px 8px 12px; transition: 0.2s; display: flex; }
.mcp-steps-button:hover { background-color: rgba(255, 255, 255, 0.17); }
.div-block-362 { gap: 6px; flex: 1 1 0%; display: flex; }
.mcp-setup-tab-pane { padding-top: 48px; }
.mcp-tabs-whole { margin-bottom: -10px; }
.mcp-tag { gap: 4px; background-color: var(--_lens---neutral-700); border-radius: 100px; align-items: center; padding: 6px 10px 6px 6px; display: flex; }
@media screen and (max-width: 991px) {
  .product-hero-canvas, .comparison-tr-icon { display: none; }
  .lens-gamification-grid { gap: 40px; display: flex; }
  .v-padding-experts { padding-top: 32px; padding-bottom: 32px; }
  .mcp-steps-grid { flex-flow: column; margin-bottom: 31px; display: flex; }
  .mcp-steps-wrapper { border-radius: 20px; }
}
@media screen and (max-width: 767px) {
  .faq { gap: 40px; padding-top: 80px; padding-bottom: 80px; }
  .lens-gamification-grid { gap: 64px; flex-flow: column; grid-template-rows: auto auto; grid-template-columns: 1fr; align-items: start; }
  .lens-gamification-illustration-image.with-padding { margin-bottom: -40px; }
  .product-hero { padding-top: 64px; }
  .product-hero-sticky { position: relative; top: 0px; }
  .v-padding-experts { padding-top: 24px; padding-bottom: 24px; }
}
@media screen and (max-width: 479px) {
  .hero-text { gap: 12px; }
  .faq { padding-top: 64px; padding-bottom: 80px; }
  .faq-buttons { flex-flow: column; align-items: stretch; }
  .lens-gamification-grid { gap: 40px; }
  .lens-gamification-content { gap: 24px; }
  .lens-gamification-illustration { padding-left: 0px; padding-right: 0px; }
  .lens-gamification-illustration-image.with-padding { margin-bottom: -24px; }
  .product-hero { padding-top: 24px; padding-bottom: 24px; }
  .product-hero-sticky { position: relative; top: 0px; }
  .api-hero-content { gap: 24px; padding-bottom: 24px; position: relative; }
}
```


## Caveats

- Third-party embeds (YouTube lightbox, Cal.com, Senja, Wistia) are noted but their internals were not measured.
- Hover/focus/active values come from the verbatim CSS rules above, plus the homepage spec for shared classes. They were not captured by hovering.
- `y` values are offsets inside each section at that width. Geometry for JS-cloned nodes (marquee clones) is only comparable for the original items.
