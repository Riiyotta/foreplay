Source: https://www.foreplay.co/pricing

# /pricing: Foreplay.co | Pricing

Measured on 2026-10-06 with headless Chromium (Playwright 1.63) at 1440×900, 991×900 and 390×844, after a full scroll pass. The Navbar and Footer have the same DOM as the homepage, so reuse `Navbar.jsx` and `Footer.jsx` (CLONE_SPEC.md §1 and §8). Tokens, buttons and type classes are in CLONE_SPEC.md §0; anything shared between these pages is in `specs/_shared-pages.md`. **Copy policy:** short UI strings are verbatim, and long copy is given only as ‹copy: ~N chars, L lines @1440›. Assets are local paths under `public/` (`/assets/...`). Files that already existed in `public/assets` were reused rather than re-downloaded, which is why some paths point at other page folders or at the root. Blocks that are identical to the homepage (the final CTA `.home-cta`, the Chrome-extension card `.home-extension`, and the logo strip `.home-hero-bottom`) are collapsed to a single line, "uses <Component> from src/components". Their internals are not re-specced and their assets were not re-downloaded.

## Build notes (summary)

- **Structure:**
  - S1 `.pricing`: head "PRICING" / "Flexible, risk-free pricing" (60/68 gradient h1). It contains:
    - **Webflow tabs `.pricing-tabs`** with a pill menu: "Monthly" and "Annually" plus the badge "Save 15% + Unlimited Spyder". **Annually is the default active pane** (`w-tab-pane-1`). The Monthly pane's contents are listed under its "hidden at all widths" line.
    - 3 plan cards in `.pricing-grid-new`: BASIC $49, WORKFLOW $149 (`.is-primary`), AGENCY $389 on the annual tab, each with a "Save $X annually" chip, the "Start 7 Day Free Trial" button, a user count, and a benefit checklist with product icons. Benefit rows show a **hover popover** (`.pricing_popover`, opacity .15s; above/below placement from the script in `_shared-pages.md`). Each card ends with "Integrates with" plus an `ai_row.webp` logo strip and "and more...".
    - The `.pricing-footer` Enterprise card ("Custom Pricing", "Save up-to 80%", "Talk with an Expert" → /book-demo, 3-item list, "Trusted by over 10,000 growth teams and agencies" plus a logo wrapper).
  - S2 white block "Compare Plans":
    - a "Only with Foreplay" badge with a hover tooltip (`.comparison-tooltip-body` .6s cubic-bezier(0.19,1,0.22,1));
    - a sticky-header comparison grid (`.comparison-grid`, 1320 wide, 5 columns: 401.1 + 4×229.2) with 4 collapsible categories ("Access & Usage", "Creative Analytics", "Ad Research & Inspiration", "Production"). Each category head is 63px and each row 53–70px. Categories toggle `height` 0 ↔ scrollHeight via `data-open`, and the head icon rotates (.6s);
    - footer "Need something custom?" + "Book a Demo" (`.new-button.new-button-secondary`). At ≤479 (measured at 390) the footer is hidden and `.comparison-grid-cta-mobile` is shown instead. At 991 the desktop footer is still used.
  - S3 FAQ "Questions? We have answers." (6) plus faq-buttons.
  - S4 home CTA.
- **Reuse:** `CTA.jsx` (S4), `Button`, `Faq`, `CompareChevron` in `svgs.jsx` (check it against the saved chevron SVG). The check/cross SVGs used in comparison cells are saved in this page's folder.
- **Motion:**
  - Plan card `background-color .2s cubic-bezier(0.55,0.085,0.68,0.53)`.
  - Benefit rows `background-color .25s, color .25s`.
  - Popover opacity .15s.
  - Tab links .2s.
  - Monthly/Annually panes swap **instantly** (`data-duration-in/out=0`, easing ease-out-cubic).
  - Comparison collapse: instant. `.comparison-category-rows` has no transition, so the height jumps between 0 and scrollHeight. Only the head icon rotates (.6s cubic-bezier(0.19,1,0.22,1)).
  - FAQ accordion.
- **Embeds:** none.

## Page meta (measured)

- Webflow page id `67d606bd6bfc757685e9ab06`. Title: `Foreplay.co | Pricing`.
- Meta description: ~118 chars (not transcribed).
- Document height: 1440 → 9683, 991 → 10764, 390 → 12289. Body bg rgb(2, 3, 8).
- Navbar: same DOM as homepage (same node count/height; only the active-link state class differs) → reuse `Navbar.jsx`.
- Footer: same DOM as homepage (same node count/height) → reuse `Footer.jsx` (incl. calendar pop-up + exit-intent modal).
- Fonts loaded: Inter Display 600 normal, Inter 400 normal, Inter 600 normal, Inter 500 normal.

## Section map (DOM order)

Legend: each line is `tag.class — W×H @x,y` at 1440 (y relative to the section top), then `| 991:` and `| 390:` geometry, then non-default computed styles at 1440, then `Δ991{…}` / `Δ390{…}` listing only layout/typography values that differ from 1440. `hidden` = display:none or 0×0 at that width. Text: short UI strings verbatim in quotes; long copy as ‹copy: ~N chars, L lines @1440› (write stand-in copy of matching length). Classes prefixed `w-` (Webflow runtime) are dropped except meaningful widget classes.

### S1. `div.section`

y/height: 1440 72/1650.8 · 991 72/3359.4 · 390 72/3747

- `div.section` — 1440×1650.8 @0,0 | 991: 991×3359.4 @0,0 | 390: 390×3747 @0,0
  - `div.container.section-container` — 1344×1650.8 @48,0 | 991: 991×3359.4 @0,0 | 390: 390×3747 @0,0 · pad:0px 40px; maxw:1344px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
    - `div.pricing` — 1264×1650.8 @88,0 | 991: 927×3359.4 @32,0 | 390: 342×3747 @24,0 · display:flex; dir:column; pad:72px 0px 108px 0px · Δ390{pad:40px 0px 80px 0px}
      - `div.section-head` — 720×164 @360,72 | 991: 720×164 @136,72 | 390: 342×248 @24,40 · display:flex; dir:column; align:center; gap:12px; mar:0px 272px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
        - `div.text-overline.text-white-68` — 63×16 @689,72 | 991: 63×16 @464,72 | 390: 63×16 @164,40 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "PRICING"
        - `h1.text-display-h1.hero-title` — 652×68 @394,100 | 991: 652×68 @169,100 | 390: 342×96 @24,68 · bgimg:radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88)); bgsize:auto; bgpos:0% 0%; bgclip:text; font:Inter Display 60px/68px w600 ls-0.45px; color:rgba(255, 255, 255, 0.88); align-text:center; wrap-text:balance; fill:rgba(0, 0, 0, 0) · Δ390{font:38px/48px; ls:-0.285px} "Flexible, risk-free pricing"
        - `div.section-head_paragraph.is-large` — 640×56 @400,180 | 991: 640×56 @176,180 | 390: 342×112 @24,176 · maxw:640px
          - `p.text-body-l` — 640×56 @400,180 | 991: 640×56 @176,180 | 390: 342×112 @24,176 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:balance ‹copy: ~120 chars, 2 lines @1440›
      - `div.pricing-content` — 1264×1306.8 @88,236 | 991: 927×3015.4 @32,236 | 390: 342×3379 @24,288 · display:flex; dir:column
        - `div.pricing-tabs.w-tabs` — 1264×1000.8 @88,236 | 991: 927×2425.4 @32,236 | 390: 342×2647 @24,288 · display:flex; dir:column; gap:24px; pos:relative · data {"data-current":"Annualluy","data-easing":"ease-out-cubic","data-duration-in":"0","data-duration-out":"0"}
          - `div.pricing-tabs-menu` — 375.2×44 @532,260 | 991: 375.2×44 @308,260 | 390: 342×60 @24,312 · display:flex; justify:center; align:center; gap:4px; pos:relative; pad:4px; aself:center; radius:12px; shadow:rgba(255, 255, 255, 0.16) 0px 0px 0px 1px · Δ390{display:grid; cols:165px 165px}
            - `a#w-tabs-0-data-w-tab-0.pricing-tab-link.w-tab-link` — 78×36 @536,264 | 991: 78×36 @312,264 | 390: 165×52 @28,316 · display:flex; justify:center; align:center; gap:12px; pos:relative; pad:8px 12px; maxw:100%; radius:8px; transition:0.2s · Δ390{dir:column; gap:0px} · href `#w-tabs-0-data-w-pane-0` · data {"data-w-tab":"Monthly"}
              - `div.text-label-s` — 54×20 @548,272 | 991: 54×20 @324,272 | 390: 54×20 @84,332 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(255, 255, 255); align-text:center "Monthly"
            - `a#w-tabs-0-data-w-tab-1.pricing-tab-link.w-tab-link` — 285.2×36 @618,264 | 991: 285.2×36 @394,264 | 390: 165×52 @197,316 · display:flex; justify:center; align:center; gap:12px; pos:relative; pad:8px 12px; maxw:100%; bg:rgba(255, 255, 255, 0.1); radius:8px; transition:0.2s · Δ390{dir:column; gap:0px} · href `#w-tabs-0-data-w-pane-1` · data {"data-w-tab":"Annualluy"}
              - `div.text-label-s` — 57×20 @630,272 | 991: 57×20 @406,272 | 390: 57×20 @251,324 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(255, 255, 255); align-text:center "Annually"
              - `div.text-alpha-100` — 192.2×20 @699,272 | 991: 192.2×20 @475,272 | 390: 137.3×16 @211,344 · flex:1 1 0%
                - `div.text-label-s.mobile-xxs` — 192.2×20 @699,272 | 991: 192.2×20 @475,272 | 390: 137.3×16 @211,344 · font:Inter 14px/20px w500 ls-0.09px; color:rgba(255, 255, 255, 0.68); align-text:center · Δ390{font:10px/16px; ls:-0.0642857px} "Save 15% + Unlimited Spyder"
          - `div.pricing-tabs-content` — 1280×892.8 @80,320 | 991: 943×2317.4 @24,320 | 390: 358×2523 @16,388 · pos:relative; pad:20px 8px; mar:-8px -8px 0px -8px
            - `div#w-tabs-0-data-w-pane-0.pricing-tab-pane.w-tab-pane` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only) · contents: "Integrates with", img 6aa63d4c49fe53fce82260cf_ai_row.webp, "and more...", "Integrates with", img 6aa63d4c49fe53fce82260cf_ai_row.webp, "and more...", "Basic", "Start 7 Day Free Trial", "WORKFLOW", "Agency", "Start 7 Day Free Trial", ‹~83ch›, "$59", "/month", "1 User", "$20 per additional user", "Analyze competitors and get creative analytics on your own ads", "$175", "/month", "Start 7 Day Free Trial", "5 Users", "$20 per additional user", "Supercharging marketing groups to scale multiple ad accounts", "$459", "/month", "10 Users", "$20 per additional user", img 6aa6182040c91b1f553769e7_swipe.avif, "Save Organize & Share Ad Ideas", img 6aa6353367282599e25baaa5_71dd86cfbb8857433e479a8c409a1989_swipe-animated.webp, img 6aa61820c99e3449437fb578_discovery.avif, "Search Ads Database (200M+ Ads)", img 6aa635a599359da7669613a0_27293449d1c92e07a005118aee457496_discovery-animated.webp, img 6aa618209de79defba6f4a74_briefs.avif, "Create Sharable Ad Briefs", img 6aa63654d36b309d88d73d6b_9f1c73173220bad6cedaf638291f0d27_briefs-animated.webp, img 6aa61820c81d5cd55b6b6310_spyder.avif, "Analyze Competitor Ad Libraries", "10+ Brands", img 6aa63bee9fa42d4f2df9452c_3bcb77ffa51ce2fcd065004a603f6d20_spyder-animated.webp, img 6aa61820a4d74f5f770376e8_lens.avif, "Analyze your ads & build reports", "1 Brand", img 6aa63bed8a03456c2a49acff_4e029abc3eb790f550b7d069d22fbe41_lens-animated.webp, img 6aa618209d6eda94f1a108c1_ai.webp, "Connect to AI Tools", img 6aa618209d104f28ed7ada66_chrome.avif, "Chrome Extension", img 6aa6181fc81d5cd55b6b62f3_ig.webp, "Save ads directly in Instagram", img 6aa6182040c91b1f553769e7_swipe.avif, "Save Organize & Share Ad Ideas", img 6aa6353367282599e25baaa5_71dd86cfbb8857433e479a8c409a1989_swipe-animated.webp, img 6aa61820c99e3449437fb578_discovery.avif, "Search Ads Database (200M+ Ads)", img 6aa635a599359da7669613a0_27293449d1c92e07a005118aee457496_discovery-animated.webp, img 6aa618209de79defba6f4a74_briefs.avif, "Create Sharable Ad Briefs", img 6aa63654d36b309d88d73d6b_9f1c73173220bad6cedaf638291f0d27_briefs-animated.webp, img 6aa61820c81d5cd55b6b6310_spyder.avif, "Analyze Competitor Ad Libraries", "50+ Brands", img 6aa63bee9fa42d4f2df9452c_3bcb77ffa51ce2fcd065004a603f6d20_spyder-animated.webp, img 6aa61820a4d74f5f770376e8_lens.avif, "Analyze your ads & build reports", "10+ Brands", img 6aa63bed8a03456c2a49acff_4e029abc3eb790f550b7d069d22fbe41_lens-animated.webp, img 6aa618209d6eda94f1a108c1_ai.webp, "Connect to AI Tools", img 6aa618209d104f28ed7ada66_chrome.avif, "Chrome Extension", img 6aa6181fc81d5cd55b6b62f3_ig.webp, "Save ads directly in Instagram", img 6aa6182040c91b1f553769e7_swipe.avif, "Save Organize & Share Ad Ideas", img 6aa6353367282599e25baaa5_71dd86cfbb8857433e479a8c409a1989_swipe-animated.webp, img 6aa61820c99e3449437fb578_discovery.avif, "Search Ads Database (200M+ Ads)", img 6aa635a599359da7669613a0_27293449d1c92e07a005118aee457496_discovery-animated.webp, img 6aa618209de79defba6f4a74_briefs.avif
            - `div#w-tabs-0-data-w-pane-1.pricing-tab-pane.w-tab-pane` — 1264×852.8 @88,340 | 991: 927×2277.4 @32,340 | 390: 342×2483 @24,408 · pos:relative · data {"data-w-tab":"Annualluy"}
              - `div.pricing-grid-new` — 1264×852.8 @88,340 | 991: 927×2277.4 @32,340 | 390: 342×2483 @24,408 · display:grid; cols:410.656px 410.672px 410.656px; rows:852.844px; align:start; gap:16px · Δ991{cols:927px; gap:32px} · Δ390{cols:342px; gap:20px}
                - `div.pricing_card-new` — 410.7×511 @88,340 | 991: 927×491 @32,340 | 390: 342×549 @24,408 · display:flex; dir:column; gap:20px; pad:20px 12px; border:1px solid rgba(255, 255, 255, 0.1); radius:16px; transition:background-color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53)
                  - `div.pricing_card-inner` — 384.7×248 @101,361 | 991: 901×228 @45,361 | 390: 316×248 @37,429 · display:flex; dir:column; gap:20px; pad:0px 8px
                    - `div.vflex-top-left.spacing-xsmall` — 368.7×64 @109,361 | 991: 885×44 @53,361 | 390: 300×64 @45,429 · display:flex; dir:column; align:flex-start; gap:8px
                      - `h3.text-overline` — 46.5×16 @109,361 | 991: 46.5×16 @53,361 | 390: 46.5×16 @45,429 · font:Inter 12px/16px w550 ls2px; color:rgb(255, 255, 255); tt:uppercase "BASIC"
                      - `p.text-body-s` — 368.7×40 @109,385 | 991: 541.5×20 @53,385 | 390: 300×40 @45,453 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68); wrap-text:balance ‹copy: ~83 chars, 2 lines @1440›
                    - `div.horizontal_divider` — 368.7×1 @109,445 | 991: 885×1 @53,425 | 390: 300×1 @45,513 · bg:rgb(23, 25, 32)
                    - `div.vflex-top-left.spacing-xsmall` — 368.7×60 @109,466 | 991: 885×60 @53,446 | 390: 300×60 @45,534 · display:flex; dir:column; align:flex-start; gap:8px
                      - `div.flex-baseline` — 95.6×32 @109,466 | 991: 95.6×32 @53,446 | 390: 95.6×32 @45,534 · display:flex; align:baseline; gap:4px
                        - `div.text-display-h5` — 44.9×32 @109,466 | 991: 44.9×32 @53,446 | 390: 44.9×32 @45,534 · font:Inter Display 24px/32px w600 ls-0.16px; color:rgb(255, 255, 255) "$49"
                        - `div.text-alpha-100` — 46.7×20 @158,475 | 991: 46.7×20 @102,455 | 390: 46.7×20 @94,543 · flex:1 1 0%
                          - `div.text-body-s` — 46.7×20 @158,475 | 991: 46.7×20 @102,455 | 390: 46.7×20 @94,543 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) "/month"
                      - `div.flex-gap-1` — 151.5×20 @109,506 | 991: 151.5×20 @53,486 | 390: 151.5×20 @45,574 · display:flex; align:center; gap:4px
                        - `div.svg.w-embed` — 20×20 @109,506 | 991: 20×20 @53,486 | 390: 20×20 @45,574 · display:flex; justify:center; align:center
                          - `svg` — 20×20 @109,506 | 991: 20×20 @53,486 | 390: 20×20 @45,574 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-v8ic9h.svg`
                        - `div.text-label-s` — 127.5×20 @133,506 | 991: 127.5×20 @77,486 | 390: 127.5×20 @69,574 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(255, 255, 255) "Save $120 annually"
                    - `a.button-dark.button-secondary` — 368.7×42 @109,546 | 991: 885×42 @53,526 | 390: 300×42 @45,614 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(9, 10, 14); border:1px solid rgb(36, 38, 46); radius:10px; z:5; transition:0.2s · href `https://app.foreplay.co/sign-up`
                      - `div.button-text-block` — 169.3×24 @209,555 | 991: 169.3×24 @411,535 | 390: 169.3×24 @110,623 · pos:relative; pad:0px 6px; z:2
                        - `div.text-heading-m` — 157.3×24 @215,555 | 991: 157.3×24 @417,535 | 390: 157.3×24 @116,623 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Start 7 Day Free Trial"
                    - `div.horizontal_divider` — 368.7×1 @109,608 | 991: 885×1 @53,588 | 390: 300×1 @45,676 · bg:rgb(23, 25, 32)
                  - `div.pricing-card-details` — 384.7×201 @101,629 | 991: 901×201 @45,609 | 390: 316×239 @37,697 · display:flex; dir:column; gap:16px
                    - `div.pricing_card-inner` — 384.7×44 @101,629 | 991: 901×44 @45,609 | 390: 316×44 @37,697 · display:flex; dir:column; gap:20px; pad:0px 8px
                      - `div.vflex-top-left.spacing-xxsmall` — 368.7×44 @109,629 | 991: 885×44 @53,609 | 390: 300×44 @45,697 · display:flex; dir:column; align:flex-start; gap:4px
                        - `div.text-label-s` — 41.2×20 @109,629 | 991: 41.2×20 @53,609 | 390: 41.2×20 @45,697 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(255, 255, 255) "1 User"
                        - `div.text-alpha-100` — 151.4×20 @109,653 | 991: 151.4×20 @53,633 | 390: 151.4×20 @45,721 · flex:1 1 0%
                          - `div.text-body-s` — 151.4×20 @109,653 | 991: 151.4×20 @53,633 | 390: 151.4×20 @45,721 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) "$20 per additional user"
                    - `ul.vflex-stretch-top.spacing-xxsmall` — 384.7×131 @101,689 | 991: 901×131 @45,669 | 390: 316×169 @37,757 · display:flex; dir:column; gap:4px; mar:0px 0px 10px 0px
                      - `li` — 384.7×41 @101,689 | 991: 901×41 @45,669 | 390: 316×60 @37,757 · display:list-item
                        - `div.pricing_card-benefit` — 384.7×41 @101,689 | 991: 901×41 @45,669 | 390: 316×60 @37,757 · display:grid; cols:280.656px 80px; rows:29px; align:center; gap:8px; pos:relative; pad:6px 8px; radius:12px; transition:background-color 0.25s, color 0.25s · Δ991{cols:797px 80px} · Δ390{cols:212px 80px}
                          - `div.pricing_benefit-text` — 280.7×28 @109,696 | 991: 797×28 @53,676 | 390: 212×48 @45,763 · display:flex; align:center; gap:10.8px
                            - `img.icon-large` — 28×28 @109,696 | 991: 28×28 @53,676 | 390: 28×28 @45,773 · maxw:100%; flex:0 0 auto; overflow:clip; fit:fill · IMG `/assets/pages/pricing/6aa6182040c91b1f553769e7_swipe.avif` natural 107×107 loading=lazy
                            - `div` — 209.5×24 @148,698 | 991: 209.5×24 @92,678 | 390: 173.2×48 @84,763 · font:Inter 14px/24px w500 ls-0.14px; color:rgb(233, 234, 239) "Save Organize & Share Ad Ideas"
                          - `div.text-align-right` — 80×29 @398,695 | 991: 80×29 @858,675 | 390: 80×29 @265,773
                            - `div.icon-medium` — 24×24 @454,700 | 991: 24×24 @914,680 | 390: 24×24 @321,778 · display:inline-flex; justify:center; align:center
                              - `div.svg.w-embed` — 24×24 @454,700 | 991: 24×24 @914,680 | 390: 24×24 @321,778 · display:flex; justify:center; align:center
                                - `svg` — 24×24 @454,700 | 991: 24×24 @914,680 | 390: 24×24 @321,778 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-yw0r87.svg`
                          - `div.pricing_popover` — 384.7×402.9 @101,508 | 991: 901×707 @45,336 | 390: 316×356.1 @37,609 · pos:absolute [-180.938px 0px -180.938px 0px]; bg:rgb(23, 25, 32); border:1px solid rgb(23, 25, 32); radius:16px; shadow:rgb(15, 17, 22) 0px 0px 16px 0px; opacity:0; z:100; transition:opacity 0.15s; pe:none; vis:hidden
                            - `div.w-embed` — 382.7×0 @102,509 | 991: 899×0 @46,337 | 390: 314×0 @38,610 · pe:none; vis:hidden
                            - `div.pricing_popover-content` — 382.7×140 @102,509 | 991: 899×92 @46,337 | 390: 314×140 @38,610 · pos:relative; pad:16px; pe:none; vis:hidden
                              - `div.vflex-top-left.spacing-xsmall` — 350.7×108 @118,525 | 991: 867×60 @62,353 | 390: 282×108 @54,626 · display:flex; dir:column; align:flex-start; gap:8px; pe:none; vis:hidden
                                - `div.pricing_benefit-text` — 114.7×28 @118,525 | 991: 114.7×28 @62,353 | 390: 114.7×28 @54,626 · display:flex; align:center; gap:10.8px; flex:1 1 0%; pe:none; vis:hidden
                                  - `img.icon-large` — 28×28 @118,525 | 991: 28×28 @62,353 | 390: 28×28 @54,626 · maxw:100%; flex:0 0 auto; overflow:clip; fit:fill; pe:none; vis:hidden · IMG `/assets/pages/pricing/6aa6182040c91b1f553769e7_swipe.avif` natural 107×107 loading=lazy
                                  - `div.text-label-m` — 75.9×24 @157,527 | 991: 75.9×24 @101,355 | 390: 75.9×24 @93,628 · pe:none; vis:hidden; font:Inter 16px/24px w500 ls-0.18px; color:rgb(249, 249, 250) "Swipe File"
                                - `div.text-color-secondary` — 350.7×72 @118,561 | 991: 782.4×24 @62,389 | 390: 282×72 @54,662 · pe:none; vis:hidden; font:Inter 14px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~119 chars, 3 lines @1440›
                            - `div` — 382.7×0 @102,649 | 991: 899×0 @46,429 | 390: 314×0 @38,750 · pe:none; vis:hidden
                            - `img.pricing_popover-image` — 382.7×260.9 @102,649 | 991: 899×613 @46,429 | 390: 314×214.1 @38,750 · maxw:100%; overflow:clip; fit:fill; pe:none; vis:hidden · IMG `/assets/pages/pricing/6aa6353367282599e25baaa5_71dd86cfbb8857433e479a8c409a1989_swipe-animated.webp` natural 704×480 loading=lazy alt "User interface panel titled 'Save to Foreplay' with options "
                      - `li` — 384.7×41 @101,734 | 991: 901×41 @45,714 | 390: 316×60 @37,821 · display:list-item
                        - `div.pricing_card-benefit` — 384.7×41 @101,734 | 991: 901×41 @45,714 | 390: 316×60 @37,821 · display:grid; cols:280.656px 80px; rows:29px; align:center; gap:8px; pos:relative; pad:6px 8px; radius:12px; transition:background-color 0.25s, color 0.25s · Δ991{cols:797px 80px} · Δ390{cols:212px 80px}
                          - `div.pricing_benefit-text` — 280.7×28 @109,741 | 991: 797×28 @53,721 | 390: 212×48 @45,827 · display:flex; align:center; gap:10.8px
                            - `img.icon-large` — 28×28 @109,741 | 991: 28×28 @53,721 | 390: 28×28 @45,837 · maxw:100%; flex:0 0 auto; overflow:clip; fit:fill · IMG `/assets/pages/pricing/6aa61820c99e3449437fb578_discovery.avif` natural 107×107 loading=lazy
                            - `div` — 231.9×24 @148,743 | 991: 231.9×24 @92,723 | 390: 173.2×48 @84,827 · font:Inter 14px/24px w500 ls-0.14px; color:rgb(233, 234, 239) "Search Ads Database (200M+ Ads)"
                          - `div.text-align-right` — 80×29 @398,740 | 991: 80×29 @858,720 | 390: 80×29 @265,837
                            - `div.icon-medium` — 24×24 @454,745 | 991: 24×24 @914,725 | 390: 24×24 @321,842 · display:inline-flex; justify:center; align:center
                              - `div.svg.w-embed` — 24×24 @454,745 | 991: 24×24 @914,725 | 390: 24×24 @321,842 · display:flex; justify:center; align:center
                                - `svg` — 24×24 @454,745 | 991: 24×24 @914,725 | 390: 24×24 @321,842 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-yw0r87.svg`
                          - `div.pricing_popover` — 384.7×378.9 @101,565 | 991: 901×707 @45,381 | 390: 316×356.1 @37,673 · pos:absolute [-168.938px 0px -168.938px 0px]; bg:rgb(23, 25, 32); border:1px solid rgb(23, 25, 32); radius:16px; shadow:rgb(15, 17, 22) 0px 0px 16px 0px; opacity:0; z:100; transition:opacity 0.15s; pe:none; vis:hidden
                            - `div.w-embed` — 382.7×0 @102,566 | 991: 899×0 @46,382 | 390: 314×0 @38,674 · pe:none; vis:hidden
                            - `div.pricing_popover-content` — 382.7×116 @102,566 | 991: 899×92 @46,382 | 390: 314×140 @38,674 · pos:relative; pad:16px; pe:none; vis:hidden
                              - `div.vflex-top-left.spacing-xsmall` — 350.7×84 @118,582 | 991: 867×60 @62,398 | 390: 282×108 @54,690 · display:flex; dir:column; align:flex-start; gap:8px; pe:none; vis:hidden
                                - `div.pricing_benefit-text` — 113.3×28 @118,582 | 991: 113.3×28 @62,398 | 390: 113.3×28 @54,690 · display:flex; align:center; gap:10.8px; flex:1 1 0%; pe:none; vis:hidden
                                  - `img.icon-large` — 28×28 @118,582 | 991: 28×28 @62,398 | 390: 28×28 @54,690 · maxw:100%; flex:0 0 auto; overflow:clip; fit:fill; pe:none; vis:hidden · IMG `/assets/pages/pricing/6aa61820c99e3449437fb578_discovery.avif` natural 107×107 loading=lazy
                                  - `div.text-label-m` — 74.5×24 @157,584 | 991: 74.5×24 @101,400 | 390: 74.5×24 @93,692 · pe:none; vis:hidden; font:Inter 16px/24px w500 ls-0.18px; color:rgb(249, 249, 250) "Discovery"
                                - `div.text-color-secondary` — 350.7×48 @118,618 | 991: 697.7×24 @62,434 | 390: 282×72 @54,726 · pe:none; vis:hidden; font:Inter 14px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~106 chars, 2 lines @1440›
                            - `div` — 382.7×0 @102,682 | 991: 899×0 @46,474 | 390: 314×0 @38,814 · pe:none; vis:hidden
                            - `img.pricing_popover-image` — 382.7×260.9 @102,682 | 991: 899×613 @46,474 | 390: 314×214.1 @38,814 · maxw:100%; overflow:clip; fit:fill; pe:none; vis:hidden · IMG `/assets/pages/pricing/6aa635a599359da7669613a0_27293449d1c92e07a005118aee457496_discovery-animated.webp` natural 880×600 loading=lazy alt "User interface showing a search bar with recent searches tag"
                      - `li` — 384.7×41 @101,779 | 991: 901×41 @45,759 | 390: 316×41 @37,885 · display:list-item
                        - `div.pricing_card-benefit` — 384.7×41 @101,779 | 991: 901×41 @45,759 | 390: 316×41 @37,885 · display:grid; cols:280.656px 80px; rows:29px; align:center; gap:8px; pos:relative; pad:6px 8px; radius:12px; transition:background-color 0.25s, color 0.25s · Δ991{cols:797px 80px} · Δ390{cols:212px 80px}
                          - `div.pricing_benefit-text` — 280.7×28 @109,786 | 991: 797×28 @53,766 | 390: 212×28 @45,892 · display:flex; align:center; gap:10.8px
                            - `img.icon-large` — 28×28 @109,786 | 991: 28×28 @53,766 | 390: 28×28 @45,892 · maxw:100%; flex:0 0 auto; overflow:clip; fit:fill · IMG `/assets/pages/pricing/6aa618209de79defba6f4a74_briefs.avif` natural 107×107 loading=lazy
                            - `div` — 168.8×24 @148,788 | 991: 168.8×24 @92,768 | 390: 168.8×24 @84,894 · font:Inter 14px/24px w500 ls-0.14px; color:rgb(233, 234, 239) "Create Sharable Ad Briefs"
                          - `div.text-align-right` — 80×29 @398,785 | 991: 80×29 @858,765 | 390: 80×29 @265,891
                            - `div.icon-medium` — 24×24 @454,790 | 991: 24×24 @914,770 | 390: 24×24 @321,896 · display:inline-flex; justify:center; align:center
                              - `div.svg.w-embed` — 24×24 @454,790 | 991: 24×24 @914,770 | 390: 24×24 @321,896 · display:flex; justify:center; align:center
                                - `svg` — 24×24 @454,790 | 991: 24×24 @914,770 | 390: 24×24 @321,896 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-yw0r87.svg`
                          - `div.pricing_popover` — 384.7×400.6 @101,599 | 991: 901×758 @45,400 | 390: 316×349.9 @37,731 · pos:absolute [-179.812px 0px -179.812px 0px]; bg:rgb(23, 25, 32); border:1px solid rgb(23, 25, 32); radius:16px; shadow:rgb(15, 17, 22) 0px 0px 16px 0px; opacity:0; z:100; transition:opacity 0.15s; pe:none; vis:hidden
                            - `div.w-embed` — 382.7×0 @102,600 | 991: 899×0 @46,401 | 390: 314×0 @38,732 · pe:none; vis:hidden
                            - `div.pricing_popover-content` — 382.7×116 @102,600 | 991: 899×92 @46,401 | 390: 314×116 @38,732 · pos:relative; pad:16px; pe:none; vis:hidden
                              - `div.vflex-top-left.spacing-xsmall` — 350.7×84 @118,616 | 991: 867×60 @62,417 | 390: 282×84 @54,748 · display:flex; dir:column; align:flex-start; gap:8px; pe:none; vis:hidden
                                - `div.pricing_benefit-text` — 81.9×28 @118,616 | 991: 81.9×28 @62,417 | 390: 81.9×28 @54,748 · display:flex; align:center; gap:10.8px; flex:1 1 0%; pe:none; vis:hidden
                                  - `img.icon-large` — 28×28 @118,616 | 991: 28×28 @62,417 | 390: 28×28 @54,748 · maxw:100%; flex:0 0 auto; overflow:clip; fit:fill; pe:none; vis:hidden · IMG `/assets/pages/pricing/6aa618209de79defba6f4a74_briefs.avif` natural 107×107 loading=lazy
                                  - `div.text-label-m` — 43.1×24 @157,618 | 991: 43.1×24 @101,419 | 390: 43.1×24 @93,750 · pe:none; vis:hidden; font:Inter 16px/24px w500 ls-0.18px; color:rgb(249, 249, 250) "Briefs"
                                - `div.text-color-secondary` — 350.7×48 @118,652 | 991: 429.2×24 @62,453 | 390: 282×48 @54,784 · pe:none; vis:hidden; font:Inter 14px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~68 chars, 2 lines @1440›
                            - `div` — 382.7×0 @102,716 | 991: 899×0 @46,493 | 390: 314×0 @38,848 · pe:none; vis:hidden
                            - `img.pricing_popover-image` — 382.7×282.6 @102,716 | 991: 899×664 @46,493 | 390: 314×231.9 @38,848 · maxw:100%; overflow:clip; fit:fill; pe:none; vis:hidden · IMG `/assets/pages/pricing/6aa63654d36b309d88d73d6b_9f1c73173220bad6cedaf638291f0d27_briefs-animated.webp` natural 880×650 loading=lazy alt "Notification banner at top reading 'New submission received!"
                - `div.pricing_card-new.is-primary` — 410.7×850.8 @515,340 | 991: 927×860.2 @32,863 | 390: 342×946 @24,977 · display:flex; dir:column; gap:20px; pad:20px 12px; bg:rgba(255, 255, 255, 0.03); border:1px solid rgba(255, 255, 255, 0.1); radius:16px; transition:background-color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53)
                  - `div.pricing_card-inner` — 384.7×246 @528,361 | 991: 901×226 @45,884 | 390: 316×246 @37,998 · display:flex; dir:column; gap:20px; pad:0px 8px
                    - `div.vflex-top-left.spacing-xsmall` — 368.7×64 @536,361 | 991: 885×44 @53,884 | 390: 300×64 @45,998 · display:flex; dir:column; align:flex-start; gap:8px
                      - `h3.text-overline` — 87.5×16 @536,361 | 991: 87.5×16 @53,884 | 390: 87.5×16 @45,998 · font:Inter 12px/16px w550 ls2px; color:rgb(255, 255, 255); tt:uppercase "WORKFLOW"
                      - `p.text-body-s` — 368.7×40 @536,385 | 991: 416.8×20 @53,908 | 390: 300×40 @45,1022 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68); wrap-text:balance "Analyze competitors and get creative analytics on your own ads" (2 lines)
                    - `div.horizontal_divider` — 368.7×1 @536,445 | 991: 885×1 @53,948 | 390: 300×1 @45,1082 · bg:rgb(23, 25, 32)
                    - `div.vflex-top-left.spacing-xsmall` — 368.7×60 @536,466 | 991: 885×60 @53,969 | 390: 300×60 @45,1103 · display:flex; dir:column; align:flex-start; gap:8px
                      - `div.flex-baseline` — 104.5×32 @536,466 | 991: 104.5×32 @53,969 | 390: 104.5×32 @45,1103 · display:flex; align:baseline; gap:4px
                        - `div.text-display-h5` — 53.8×32 @536,466 | 991: 53.8×32 @53,969 | 390: 53.8×32 @45,1103 · font:Inter Display 24px/32px w600 ls-0.16px; color:rgb(255, 255, 255) "$149"
                        - `div.text-alpha-100` — 46.7×20 @594,475 | 991: 46.7×20 @111,978 | 390: 46.7×20 @103,1112 · flex:1 1 0%
                          - `div.text-body-s` — 46.7×20 @594,475 | 991: 46.7×20 @111,978 | 390: 46.7×20 @103,1112 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) "/month"
                      - `div.flex-gap-1` — 152×20 @536,506 | 991: 152×20 @53,1009 | 390: 152×20 @45,1143 · display:flex; align:center; gap:4px
                        - `div.svg.w-embed` — 20×20 @536,506 | 991: 20×20 @53,1009 | 390: 20×20 @45,1143 · display:flex; justify:center; align:center
                          - `svg` — 20×20 @536,506 | 991: 20×20 @53,1009 | 390: 20×20 @45,1143 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-v8ic9h.svg`
                        - `div.text-label-s` — 128×20 @560,506 | 991: 128×20 @77,1009 | 390: 128×20 @69,1143 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(255, 255, 255) "Save $310 annually"
                    - `a.button-dark.button-primary` — 368.7×40 @536,546 | 991: 885×40 @53,1049 | 390: 300×40 @45,1183 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(255, 255, 255); radius:10px; z:5; transition:0.2s · href `https://app.foreplay.co/sign-up`
                      - `div.button-text-block` — 169.3×24 @635,554 | 991: 169.3×24 @411,1057 | 390: 169.3×24 @110,1191 · pos:relative; pad:0px 6px; z:2
                        - `div.text-heading-m` — 157.3×24 @641,554 | 991: 157.3×24 @417,1057 | 390: 157.3×24 @116,1191 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(9, 10, 14) "Start 7 Day Free Trial"
                    - `div.horizontal_divider` — 368.7×1 @536,606 | 991: 885×1 @53,1109 | 390: 300×1 @45,1243 · bg:rgb(23, 25, 32)
                  - `div.pricing-card-details` — 384.7×416 @528,627 | 991: 901×416 @45,1130 | 390: 316×513 @37,1264 · display:flex; dir:column; gap:16px
                    - `div.pricing_card-inner` — 384.7×44 @528,627 | 991: 901×44 @45,1130 | 390: 316×44 @37,1264 · display:flex; dir:column; gap:20px; pad:0px 8px
                      - `div.vflex-top-left.spacing-xxsmall` — 368.7×44 @536,627 | 991: 885×44 @53,1130 | 390: 300×44 @45,1264 · display:flex; dir:column; align:flex-start; gap:4px
                        - `div.text-label-s` — 50.7×20 @536,627 | 991: 50.7×20 @53,1130 | 390: 50.7×20 @45,1264 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(255, 255, 255) "5 Users"
                        - `div.text-alpha-100` — 151.4×20 @536,651 | 991: 151.4×20 @53,1154 | 390: 151.4×20 @45,1288 · flex:1 1 0%
                          - `div.text-body-s` — 151.4×20 @536,651 | 991: 151.4×20 @53,1154 | 390: 151.4×20 @45,1288 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) "$20 per additional user"
                    - `ul.vflex-stretch-top.spacing-xxsmall` — 384.7×346 @528,687 | 991: 901×346 @45,1190 | 390: 316×443 @37,1324 · display:flex; dir:column; gap:4px; mar:0px 0px 10px 0px
                      - `li` — 384.7×40 @528,687 | 991: 901×40 @45,1190 | 390: 316×60 @37,1324 · display:list-item
                        - `div.pricing_card-benefit` — 384.7×40 @528,687 | 991: 901×40 @45,1190 | 390: 316×60 @37,1324 · display:grid; cols:280.672px 80px; rows:28px; align:center; gap:8px; pos:relative; pad:6px 8px; radius:12px; transition:background-color 0.25s, color 0.25s · Δ991{cols:797px 80px} · Δ390{cols:212px 80px}
                          - `div.pricing_benefit-text` — 280.7×28 @536,693 | 991: 797×28 @53,1196 | 390: 212×48 @45,1330 · display:flex; align:center; gap:10.8px
                            - `img.icon-large` — 28×28 @536,693 | 991: 28×28 @53,1196 | 390: 28×28 @45,1340 · maxw:100%; flex:0 0 auto; overflow:clip; fit:fill · IMG `/assets/pages/pricing/6aa61820c81d5cd55b6b6310_spyder.avif` natural 107×107 loading=lazy
                            - `div` — 212.1×24 @574,695 | 991: 212.1×24 @92,1198 | 390: 173.2×48 @84,1330 · font:Inter 14px/24px w500 ls-0.14px; color:rgb(233, 234, 239) "Analyze Competitor Ad Libraries"
                          - `div` — 80×24 @824,695 | 991: 80×24 @858,1198 | 390: 80×24 @265,1342 · font:Inter 14px/24px w400 ls-0.18px; color:rgb(233, 234, 239); align-text:right "10+ Brands"
                          - `div.pricing_popover` — 384.7×378.9 @528,518 | 991: 901×707 @45,857 | 390: 316×356.1 @37,1176 · pos:absolute [-169.453px 0px -169.453px 0px]; bg:rgb(23, 25, 32); border:1px solid rgb(23, 25, 32); radius:16px; shadow:rgb(15, 17, 22) 0px 0px 16px 0px; opacity:0; z:100; transition:opacity 0.15s; pe:none; vis:hidden
                            - `div.w-embed` — 382.7×0 @529,519 | 991: 899×0 @46,858 | 390: 314×0 @38,1177 · pe:none; vis:hidden
                            - `div.pricing_popover-content` — 382.7×116 @529,519 | 991: 899×92 @46,858 | 390: 314×140 @38,1177 · pos:relative; pad:16px; pe:none; vis:hidden
                              - `div.vflex-top-left.spacing-xsmall` — 350.7×84 @545,535 | 991: 867×60 @62,874 | 390: 282×108 @54,1193 · display:flex; dir:column; align:flex-start; gap:8px; pe:none; vis:hidden
                                - `div.pricing_benefit-text` — 91.9×28 @545,535 | 991: 91.9×28 @62,874 | 390: 91.9×28 @54,1193 · display:flex; align:center; gap:10.8px; flex:1 1 0%; pe:none; vis:hidden
                                  - `img.icon-large` — 28×28 @545,535 | 991: 28×28 @62,874 | 390: 28×28 @54,1193 · maxw:100%; flex:0 0 auto; overflow:clip; fit:fill; pe:none; vis:hidden · IMG `/assets/pages/pricing/6aa61820c81d5cd55b6b6310_spyder.avif` natural 107×107 loading=lazy
                                  - `div.text-label-m` — 53.1×24 @583,537 | 991: 53.1×24 @101,876 | 390: 53.1×24 @93,1195 · pe:none; vis:hidden; font:Inter 16px/24px w500 ls-0.18px; color:rgb(249, 249, 250) "Spyder"
                                - `div.text-color-secondary` — 350.7×48 @545,571 | 991: 666.8×24 @62,910 | 390: 282×72 @54,1229 · pe:none; vis:hidden; font:Inter 14px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~105 chars, 2 lines @1440›
                            - `div` — 382.7×0 @529,635 | 991: 899×0 @46,950 | 390: 314×0 @38,1317 · pe:none; vis:hidden
                            - `img.pricing_popover-image` — 382.7×260.9 @529,635 | 991: 899×613 @46,950 | 390: 314×214.1 @38,1317 · maxw:100%; overflow:clip; fit:fill; pe:none; vis:hidden · IMG `/assets/pages/pricing/6aa63bee9fa42d4f2df9452c_3bcb77ffa51ce2fcd065004a603f6d20_spyder-animated.webp` natural 880×600 loading=lazy alt "Dashboard segment showing statistics for new creatives (161)"
                      - `li` — 384.7×40 @528,731 | 991: 901×40 @45,1234 | 390: 316×60 @37,1388 · display:list-item
                        - `div.pricing_card-benefit` — 384.7×40 @528,731 | 991: 901×40 @45,1234 | 390: 316×60 @37,1388 · display:grid; cols:280.672px 80px; rows:28px; align:center; gap:8px; pos:relative; pad:6px 8px; radius:12px; transition:background-color 0.25s, color 0.25s · Δ991{cols:797px 80px} · Δ390{cols:212px 80px}
                          - `div.pricing_benefit-text` — 280.7×28 @536,737 | 991: 797×28 @53,1240 | 390: 212×48 @45,1394 · display:flex; align:center; gap:10.8px
                            - `img.icon-large` — 28×28 @536,737 | 991: 28×28 @53,1240 | 390: 28×28 @45,1404 · maxw:100%; flex:0 0 auto; overflow:clip; fit:fill · IMG `/assets/pages/pricing/6aa61820a4d74f5f770376e8_lens.avif` natural 107×107 loading=lazy
                            - `div` — 212.1×24 @574,739 | 991: 212.1×24 @92,1242 | 390: 173.2×48 @84,1394 · font:Inter 14px/24px w500 ls-0.14px; color:rgb(233, 234, 239) "Analyze your ads & build reports"
                          - `div` — 80×24 @824,739 | 991: 80×24 @858,1242 | 390: 80×24 @265,1406 · font:Inter 14px/24px w400 ls-0.18px; color:rgb(233, 234, 239); align-text:right "1 Brand"
                          - `div.pricing_popover` — 384.7×378.9 @528,562 | 991: 901×707 @45,901 | 390: 316×356.1 @37,1240 · pos:absolute [-169.453px 0px -169.453px 0px]; bg:rgb(23, 25, 32); border:1px solid rgb(23, 25, 32); radius:16px; shadow:rgb(15, 17, 22) 0px 0px 16px 0px; opacity:0; z:100; transition:opacity 0.15s; pe:none; vis:hidden
                            - `div.w-embed` — 382.7×0 @529,563 | 991: 899×0 @46,902 | 390: 314×0 @38,1241 · pe:none; vis:hidden
                            - `div.pricing_popover-content` — 382.7×116 @529,563 | 991: 899×92 @46,902 | 390: 314×140 @38,1241 · pos:relative; pad:16px; pe:none; vis:hidden
                              - `div.vflex-top-left.spacing-xsmall` — 350.7×84 @545,579 | 991: 867×60 @62,918 | 390: 282×108 @54,1257 · display:flex; dir:column; align:flex-start; gap:8px; pe:none; vis:hidden
                                - `div.pricing_benefit-text` — 74.6×28 @545,579 | 991: 74.6×28 @62,918 | 390: 74.6×28 @54,1257 · display:flex; align:center; gap:10.8px; flex:1 1 0%; pe:none; vis:hidden
                                  - `img.icon-large` — 28×28 @545,579 | 991: 28×28 @62,918 | 390: 28×28 @54,1257 · maxw:100%; flex:0 0 auto; overflow:clip; fit:fill; pe:none; vis:hidden · IMG `/assets/pages/pricing/6aa61820a4d74f5f770376e8_lens.avif` natural 107×107 loading=lazy
                                  - `div.text-label-m` — 35.8×24 @583,581 | 991: 35.8×24 @101,920 | 390: 35.8×24 @93,1259 · pe:none; vis:hidden; font:Inter 16px/24px w500 ls-0.18px; color:rgb(249, 249, 250) "Lens"
                                - `div.text-color-secondary` — 350.7×48 @545,615 | 991: 662.7×24 @62,954 | 390: 282×72 @54,1293 · pe:none; vis:hidden; font:Inter 14px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~99 chars, 2 lines @1440›
                            - `div` — 382.7×0 @529,679 | 991: 899×0 @46,994 | 390: 314×0 @38,1381 · pe:none; vis:hidden
                            - `img.pricing_popover-image` — 382.7×260.9 @529,679 | 991: 899×613 @46,994 | 390: 314×214.1 @38,1381 · maxw:100%; overflow:clip; fit:fill; pe:none; vis:hidden · IMG `/assets/pages/pricing/6aa63bed8a03456c2a49acff_4e029abc3eb790f550b7d069d22fbe41_lens-animated.webp` natural 880×600 loading=lazy alt "Animated bar chart with four sets of vertical bars in differ"
                      - …4 more `li` siblings with the same structure (6 total):
                        - [3] 384.7×123 @528,775 — img 6aa618209d6eda94f1a108c1_ai.webp, "Connect to AI Tools", img 6aa618209d104f28ed7ada66_chrome.avif, "Chrome Extension", img 6aa6181fc81d5cd55b6b62f3_ig.webp, "Save ads directly in Instagram", svg yw0r87, ‹~77ch›, svg yw0r87, ‹~78ch›, svg yw0r87, "Save & share ad inspiration from your mobile phone."
                        - [4] 384.7×41 @528,902 — img 6aa6182040c91b1f553769e7_swipe.avif, "Save Organize & Share Ad Ideas", img 6aa6353367282599e25baaa5_71dd86cfbb8857433e479a8c409a1989_swipe-animated.webp, svg yw0r87, ‹~119ch›, img 6aa6182040c91b1f553769e7_swipe.avif, "Swipe File"
                        - [5] 384.7×41 @528,947 — img 6aa61820c99e3449437fb578_discovery.avif, "Search Ads Database (200M+ Ads)", img 6aa635a599359da7669613a0_27293449d1c92e07a005118aee457496_discovery-animated.webp, svg yw0r87, ‹~106ch›, img 6aa61820c99e3449437fb578_discovery.avif, "Discovery"
                        - [6] 384.7×41 @528,992 — img 6aa618209de79defba6f4a74_briefs.avif, "Create Sharable Ad Briefs", img 6aa63654d36b309d88d73d6b_9f1c73173220bad6cedaf638291f0d27_briefs-animated.webp, svg yw0r87, ‹~68ch›, img 6aa618209de79defba6f4a74_briefs.avif, "Briefs"
                  - `div.horizontal_divider` — 384.7×1 @528,1063 | 991: 901×1 @45,1566 | 390: 316×1 @37,1797 · bg:rgb(23, 25, 32)
                  - `div.vflex-center-top.spacing-xsmall` — 384.7×85.8 @528,1084 | 991: 901×115.2 @45,1587 | 390: 316×84 @37,1818 · display:flex; dir:column; align:center; gap:8px
                    - `div.text-size-small.text-color-secondary` — 96.6×24 @672,1084 | 991: 96.6×24 @447,1587 | 390: 96.6×24 @147,1818 · font:Inter 14px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Integrates with"
                    - `img.ai_row` — 384.7×21.8 @528,1116 | 991: 901×51.2 @45,1619 | 390: 316×20 @37,1850 · maxw:100%; minh:20px; overflow:clip; fit:contain; aspect:17.6 / 1 · IMG `/assets/pages/pricing/6aa63d4c49fe53fce82260cf_ai_row.webp` natural 1440×81 loading=lazy alt "Logos of Claude, Grok, Gemini, ChatGPT"
                    - `div.text-size-small.text-color-secondary` — 72×24 @684,1146 | 991: 72×24 @460,1678 | 390: 72×24 @159,1878 · font:Inter 14px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "and more..."
                - `div.pricing_card-new` — 410.7×852.8 @941,340 | 991: 927×862.2 @32,1755 | 390: 342×948 @24,1943 · display:flex; dir:column; gap:20px; pad:20px 12px; border:1px solid rgba(255, 255, 255, 0.1); radius:16px; transition:background-color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53)
                  - `div.pricing_card-inner` — 384.7×248 @954,361 | 991: 901×228 @45,1776 | 390: 316×248 @37,1964 · display:flex; dir:column; gap:20px; pad:0px 8px
                    - `div.vflex-top-left.spacing-xsmall` — 368.7×64 @962,361 | 991: 885×44 @53,1776 | 390: 300×64 @45,1964 · display:flex; dir:column; align:flex-start; gap:8px
                      - `h3.text-overline` — 62.9×16 @962,361 | 991: 62.9×16 @53,1776 | 390: 62.9×16 @45,1964 · font:Inter 12px/16px w550 ls2px; color:rgb(255, 255, 255); tt:uppercase "AGENCY"
                      - `p.text-body-s` — 368.7×40 @962,385 | 991: 407.1×20 @53,1800 | 390: 300×40 @45,1988 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68); wrap-text:balance "Supercharging marketing groups to scale multiple ad accounts" (2 lines)
                    - `div.horizontal_divider` — 368.7×1 @962,445 | 991: 885×1 @53,1840 | 390: 300×1 @45,2048 · bg:rgb(23, 25, 32)
                    - `div.vflex-top-left.spacing-xsmall` — 368.7×60 @962,466 | 991: 885×60 @53,1861 | 390: 300×60 @45,2069 · display:flex; dir:column; align:flex-start; gap:8px
                      - `div.flex-baseline` — 109.2×32 @962,466 | 991: 109.2×32 @53,1861 | 390: 109.2×32 @45,2069 · display:flex; align:baseline; gap:4px
                        - `div.text-display-h5` — 58.5×32 @962,466 | 991: 58.5×32 @53,1861 | 390: 58.5×32 @45,2069 · font:Inter Display 24px/32px w600 ls-0.16px; color:rgb(255, 255, 255) "$389"
                        - `div.text-alpha-100` — 46.7×20 @1025,475 | 991: 46.7×20 @115,1870 | 390: 46.7×20 @107,2078 · flex:1 1 0%
                          - `div.text-body-s` — 46.7×20 @1025,475 | 991: 46.7×20 @115,1870 | 390: 46.7×20 @107,2078 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) "/month"
                      - `div.flex-gap-1` — 153.8×20 @962,506 | 991: 153.8×20 @53,1901 | 390: 153.8×20 @45,2109 · display:flex; align:center; gap:4px
                        - `div.svg.w-embed` — 20×20 @962,506 | 991: 20×20 @53,1901 | 390: 20×20 @45,2109 · display:flex; justify:center; align:center
                          - `svg` — 20×20 @962,506 | 991: 20×20 @53,1901 | 390: 20×20 @45,2109 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-v8ic9h.svg`
                        - `div.text-label-s` — 129.8×20 @986,506 | 991: 129.8×20 @77,1901 | 390: 129.8×20 @69,2109 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(255, 255, 255) "Save $820 annually"
                    - `a.button-dark.button-secondary` — 368.7×42 @962,546 | 991: 885×42 @53,1941 | 390: 300×42 @45,2149 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(9, 10, 14); border:1px solid rgb(36, 38, 46); radius:10px; z:5; transition:0.2s · href `https://app.foreplay.co/sign-up`
                      - `div.button-text-block` — 169.3×24 @1062,555 | 991: 169.3×24 @411,1950 | 390: 169.3×24 @110,2158 · pos:relative; pad:0px 6px; z:2
                        - `div.text-heading-m` — 157.3×24 @1068,555 | 991: 157.3×24 @417,1950 | 390: 157.3×24 @116,2158 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Start 7 Day Free Trial"
                    - `div.horizontal_divider` — 368.7×1 @962,608 | 991: 885×1 @53,2003 | 390: 300×1 @45,2211 · bg:rgb(23, 25, 32)
                  - `div.pricing-card-details` — 384.7×416 @954,629 | 991: 901×416 @45,2024 | 390: 316×513 @37,2232 · display:flex; dir:column; gap:16px
                    - `div.pricing_card-inner` — 384.7×44 @954,629 | 991: 901×44 @45,2024 | 390: 316×44 @37,2232 · display:flex; dir:column; gap:20px; pad:0px 8px
                      - `div.vflex-top-left.spacing-xxsmall` — 368.7×44 @962,629 | 991: 885×44 @53,2024 | 390: 300×44 @45,2232 · display:flex; dir:column; align:flex-start; gap:4px
                        - `div.text-label-s` — 57.6×20 @962,629 | 991: 57.6×20 @53,2024 | 390: 57.6×20 @45,2232 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(255, 255, 255) "10 Users"
                        - `div.text-alpha-100` — 151.4×20 @962,653 | 991: 151.4×20 @53,2048 | 390: 151.4×20 @45,2256 · flex:1 1 0%
                          - `div.text-body-s` — 151.4×20 @962,653 | 991: 151.4×20 @53,2048 | 390: 151.4×20 @45,2256 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) "$20 per additional user"
                    - `ul.vflex-stretch-top.spacing-xxsmall` — 384.7×346 @954,689 | 991: 901×346 @45,2084 | 390: 316×443 @37,2292 · display:flex; dir:column; gap:4px; mar:0px 0px 10px 0px
                      - `li` — 384.7×40 @954,689 | 991: 901×40 @45,2084 | 390: 316×60 @37,2292 · display:list-item
                        - `div.pricing_card-benefit` — 384.7×40 @954,689 | 991: 901×40 @45,2084 | 390: 316×60 @37,2292 · display:grid; cols:280.656px 80px; rows:28px; align:center; gap:8px; pos:relative; pad:6px 8px; radius:12px; transition:background-color 0.25s, color 0.25s · Δ991{cols:797px 80px} · Δ390{cols:212px 80px}
                          - `div.pricing_benefit-text` — 280.7×28 @962,695 | 991: 797×28 @53,2090 | 390: 212×48 @45,2298 · display:flex; align:center; gap:10.8px
                            - `img.icon-large` — 28×28 @962,695 | 991: 28×28 @53,2090 | 390: 28×28 @45,2308 · maxw:100%; flex:0 0 auto; overflow:clip; fit:fill · IMG `/assets/pages/pricing/6aa61820c81d5cd55b6b6310_spyder.avif` natural 107×107 loading=lazy
                            - `div` — 212.1×24 @1001,697 | 991: 212.1×24 @92,2092 | 390: 173.2×48 @84,2298 · font:Inter 14px/24px w500 ls-0.14px; color:rgb(233, 234, 239) "Analyze Competitor Ad Libraries"
                          - `div` — 80×24 @1251,697 | 991: 80×24 @858,2092 | 390: 80×24 @265,2310 · font:Inter 14px/24px w400 ls-0.18px; color:rgb(233, 234, 239); align-text:right "50+ Brands"
                          - `div.pricing_popover` — 384.7×378.9 @954,520 | 991: 901×707 @45,1751 | 390: 316×356.1 @37,2144 · pos:absolute [-169.438px 0px -169.438px 0px]; bg:rgb(23, 25, 32); border:1px solid rgb(23, 25, 32); radius:16px; shadow:rgb(15, 17, 22) 0px 0px 16px 0px; opacity:0; z:100; transition:opacity 0.15s; pe:none; vis:hidden
                            - `div.w-embed` — 382.7×0 @955,521 | 991: 899×0 @46,1752 | 390: 314×0 @38,2145 · pe:none; vis:hidden
                            - `div.pricing_popover-content` — 382.7×116 @955,521 | 991: 899×92 @46,1752 | 390: 314×140 @38,2145 · pos:relative; pad:16px; pe:none; vis:hidden
                              - `div.vflex-top-left.spacing-xsmall` — 350.7×84 @971,537 | 991: 867×60 @62,1768 | 390: 282×108 @54,2161 · display:flex; dir:column; align:flex-start; gap:8px; pe:none; vis:hidden
                                - `div.pricing_benefit-text` — 91.9×28 @971,537 | 991: 91.9×28 @62,1768 | 390: 91.9×28 @54,2161 · display:flex; align:center; gap:10.8px; flex:1 1 0%; pe:none; vis:hidden
                                  - `img.icon-large` — 28×28 @971,537 | 991: 28×28 @62,1768 | 390: 28×28 @54,2161 · maxw:100%; flex:0 0 auto; overflow:clip; fit:fill; pe:none; vis:hidden · IMG `/assets/pages/pricing/6aa61820c81d5cd55b6b6310_spyder.avif` natural 107×107 loading=lazy
                                  - `div.text-label-m` — 53.1×24 @1010,539 | 991: 53.1×24 @101,1770 | 390: 53.1×24 @93,2163 · pe:none; vis:hidden; font:Inter 16px/24px w500 ls-0.18px; color:rgb(249, 249, 250) "Spyder"
                                - `div.text-color-secondary` — 350.7×48 @971,573 | 991: 666.8×24 @62,1804 | 390: 282×72 @54,2197 · pe:none; vis:hidden; font:Inter 14px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~105 chars, 2 lines @1440›
                            - `div` — 382.7×0 @955,637 | 991: 899×0 @46,1844 | 390: 314×0 @38,2285 · pe:none; vis:hidden
                            - `img.pricing_popover-image` — 382.7×260.9 @955,637 | 991: 899×613 @46,1844 | 390: 314×214.1 @38,2285 · maxw:100%; overflow:clip; fit:fill; pe:none; vis:hidden · IMG `/assets/pages/pricing/6aa63bee9fa42d4f2df9452c_3bcb77ffa51ce2fcd065004a603f6d20_spyder-animated.webp` natural 880×600 loading=lazy alt "Dashboard segment showing statistics for new creatives (161)"
                      - `li` — 384.7×40 @954,733 | 991: 901×40 @45,2128 | 390: 316×60 @37,2356 · display:list-item
                        - `div.pricing_card-benefit` — 384.7×40 @954,733 | 991: 901×40 @45,2128 | 390: 316×60 @37,2356 · display:grid; cols:280.656px 80px; rows:28px; align:center; gap:8px; pos:relative; pad:6px 8px; radius:12px; transition:background-color 0.25s, color 0.25s · Δ991{cols:797px 80px} · Δ390{cols:212px 80px}
                          - `div.pricing_benefit-text` — 280.7×28 @962,739 | 991: 797×28 @53,2134 | 390: 212×48 @45,2362 · display:flex; align:center; gap:10.8px
                            - `img.icon-large` — 28×28 @962,739 | 991: 28×28 @53,2134 | 390: 28×28 @45,2372 · maxw:100%; flex:0 0 auto; overflow:clip; fit:fill · IMG `/assets/pages/pricing/6aa61820a4d74f5f770376e8_lens.avif` natural 107×107 loading=lazy
                            - `div` — 212.1×24 @1001,741 | 991: 212.1×24 @92,2136 | 390: 173.2×48 @84,2362 · font:Inter 14px/24px w500 ls-0.14px; color:rgb(233, 234, 239) "Analyze your ads & build reports"
                          - `div` — 80×24 @1251,741 | 991: 80×24 @858,2136 | 390: 80×24 @265,2374 · font:Inter 14px/24px w400 ls-0.18px; color:rgb(233, 234, 239); align-text:right "10+ Brands"
                          - `div.pricing_popover` — 384.7×378.9 @954,564 | 991: 901×707 @45,1795 | 390: 316×356.1 @37,2208 · pos:absolute [-169.438px 0px -169.438px 0px]; bg:rgb(23, 25, 32); border:1px solid rgb(23, 25, 32); radius:16px; shadow:rgb(15, 17, 22) 0px 0px 16px 0px; opacity:0; z:100; transition:opacity 0.15s; pe:none; vis:hidden
                            - `div.w-embed` — 382.7×0 @955,565 | 991: 899×0 @46,1796 | 390: 314×0 @38,2209 · pe:none; vis:hidden
                            - `div.pricing_popover-content` — 382.7×116 @955,565 | 991: 899×92 @46,1796 | 390: 314×140 @38,2209 · pos:relative; pad:16px; pe:none; vis:hidden
                              - `div.vflex-top-left.spacing-xsmall` — 350.7×84 @971,581 | 991: 867×60 @62,1812 | 390: 282×108 @54,2225 · display:flex; dir:column; align:flex-start; gap:8px; pe:none; vis:hidden
                                - `div.pricing_benefit-text` — 74.6×28 @971,581 | 991: 74.6×28 @62,1812 | 390: 74.6×28 @54,2225 · display:flex; align:center; gap:10.8px; flex:1 1 0%; pe:none; vis:hidden
                                  - `img.icon-large` — 28×28 @971,581 | 991: 28×28 @62,1812 | 390: 28×28 @54,2225 · maxw:100%; flex:0 0 auto; overflow:clip; fit:fill; pe:none; vis:hidden · IMG `/assets/pages/pricing/6aa61820a4d74f5f770376e8_lens.avif` natural 107×107 loading=lazy
                                  - `div.text-label-m` — 35.8×24 @1010,583 | 991: 35.8×24 @101,1814 | 390: 35.8×24 @93,2227 · pe:none; vis:hidden; font:Inter 16px/24px w500 ls-0.18px; color:rgb(249, 249, 250) "Lens"
                                - `div.text-color-secondary` — 350.7×48 @971,617 | 991: 662.7×24 @62,1848 | 390: 282×72 @54,2261 · pe:none; vis:hidden; font:Inter 14px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) ‹copy: ~99 chars, 2 lines @1440›
                            - `div` — 382.7×0 @955,681 | 991: 899×0 @46,1888 | 390: 314×0 @38,2349 · pe:none; vis:hidden
                            - `img.pricing_popover-image` — 382.7×260.9 @955,681 | 991: 899×613 @46,1888 | 390: 314×214.1 @38,2349 · maxw:100%; overflow:clip; fit:fill; pe:none; vis:hidden · IMG `/assets/pages/pricing/6aa63bed8a03456c2a49acff_4e029abc3eb790f550b7d069d22fbe41_lens-animated.webp` natural 880×600 loading=lazy alt "Animated bar chart with four sets of vertical bars in differ"
                      - …4 more `li` siblings with the same structure (6 total):
                        - [3] 384.7×123 @954,777 — img 6aa618209d6eda94f1a108c1_ai.webp, "Connect to AI Tools", img 6aa618209d104f28ed7ada66_chrome.avif, "Chrome Extension", img 6aa6181fc81d5cd55b6b62f3_ig.webp, "Save ads directly in Instagram", svg yw0r87, ‹~77ch›, svg yw0r87, ‹~78ch›, svg yw0r87, "Save & share ad inspiration from your mobile phone."
                        - [4] 384.7×41 @954,904 — img 6aa6182040c91b1f553769e7_swipe.avif, "Save Organize & Share Ad Ideas", img 6aa6353367282599e25baaa5_71dd86cfbb8857433e479a8c409a1989_swipe-animated.webp, svg yw0r87, ‹~119ch›, img 6aa6182040c91b1f553769e7_swipe.avif, "Swipe File"
                        - [5] 384.7×41 @954,949 — img 6aa61820c99e3449437fb578_discovery.avif, "Search Ads Database (200M+ Ads)", img 6aa635a599359da7669613a0_27293449d1c92e07a005118aee457496_discovery-animated.webp, svg yw0r87, ‹~106ch›, img 6aa61820c99e3449437fb578_discovery.avif, "Discovery"
                        - [6] 384.7×41 @954,994 — img 6aa618209de79defba6f4a74_briefs.avif, "Create Sharable Ad Briefs", img 6aa63654d36b309d88d73d6b_9f1c73173220bad6cedaf638291f0d27_briefs-animated.webp, svg yw0r87, ‹~68ch›, img 6aa618209de79defba6f4a74_briefs.avif, "Briefs"
                  - `div.horizontal_divider` — 384.7×1 @954,1065 | 991: 901×1 @45,2460 | 390: 316×1 @37,2765 · bg:rgb(23, 25, 32)
                  - `div.vflex-center-top.spacing-xsmall` — 384.7×85.8 @954,1086 | 991: 901×115.2 @45,2481 | 390: 316×84 @37,2786 · display:flex; dir:column; align:center; gap:8px
                    - `div.text-size-small.text-color-secondary` — 96.6×24 @1098,1086 | 991: 96.6×24 @447,2481 | 390: 96.6×24 @147,2786 · font:Inter 14px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "Integrates with"
                    - `img.ai_row` — 384.7×21.8 @954,1118 | 991: 901×51.2 @45,2513 | 390: 316×20 @37,2818 · maxw:100%; minh:20px; overflow:clip; fit:contain; aspect:17.6 / 1 · IMG `/assets/pages/pricing/6aa63d4c49fe53fce82260cf_ai_row.webp` natural 1440×81 loading=lazy alt "Logos of Claude, Grok, Gemini, ChatGPT"
                    - `div.text-size-small.text-color-secondary` — 72×24 @1111,1148 | 991: 72×24 @460,2572 | 390: 72×24 @159,2846 · font:Inter 14px/24px w400 ls-0.18px; color:rgba(255, 255, 255, 0.68) "and more..."
        - `div.pricing-footer` — 1264×306 @88,1237 | 991: 927×590 @32,2661 | 390: 342×732 @24,2935 · display:flex; border:1px solid rgba(255, 255, 255, 0.1); radius:20px · Δ991{dir:column} · Δ390{dir:column}
          - `div.pricing-footer-enterprise` — 368×304 @89,1238 | 991: 925×280 @33,2662 | 390: 340×300 @25,2936 · display:flex; dir:column; gap:20px; pad:20px 24px 24px 24px; maxw:368px; minw:320px · Δ991{maxw:none} · Δ390{maxw:none}
            - `div.pricing-footer-head` — 320×72 @113,1258 | 991: 877×52 @57,2682 | 390: 292×72 @49,2956 · display:flex; dir:column; gap:8px; pad:8px 0px 0px 0px
              - `div.text-overline` — 320×16 @113,1266 | 991: 877×16 @57,2690 | 390: 292×16 @49,2964 · font:Inter 12px/16px w550 ls2px; color:rgb(255, 255, 255); tt:uppercase "ENTERPRISE"
              - `div.text-alpha-100` — 320×40 @113,1290 | 991: 877×20 @57,2714 | 390: 292×40 @49,2988 · flex:1 1 0%
                - `div.text-body-s` — 320×40 @113,1290 | 991: 877×20 @57,2714 | 390: 292×40 @49,2988 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) "For large agencies and scaling brand organizations." (2 lines)
            - `div.horizontal_divider` — 320×1 @113,1350 | 991: 877×1 @57,2754 | 390: 292×1 @49,3048 · bg:rgb(23, 25, 32)
            - `div.pricing-footer-custom` — 320×60 @113,1371 | 991: 877×60 @57,2775 | 390: 292×60 @49,3069 · display:flex; dir:column; gap:8px
              - `h4.text-display-h5` — 320×32 @113,1371 | 991: 877×32 @57,2775 | 390: 292×32 @49,3069 · font:Inter Display 24px/32px w600 ls-0.16px; color:rgb(255, 255, 255) "Custom Pricing"
              - `div.flex-gap-1` — 320×20 @113,1411 | 991: 877×20 @57,2815 | 390: 292×20 @49,3109 · display:flex; align:center; gap:4px
                - `div.svg.w-embed` — 20×20 @113,1411 | 991: 20×20 @57,2815 | 390: 20×20 @49,3109 · display:flex; justify:center; align:center
                  - `svg` — 20×20 @113,1411 | 991: 20×20 @57,2815 | 390: 20×20 @49,3109 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-v8ic9h.svg`
                - `div.text-label-s` — 105.2×20 @137,1411 | 991: 105.2×20 @81,2815 | 390: 105.2×20 @73,3109 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(255, 255, 255) "Save up-to 80%"
            - `div.horizontal_divider` — 320×1 @113,1451 | 991: 877×1 @57,2855 | 390: 292×1 @49,3149 · bg:rgb(23, 25, 32)
            - `a.button-dark.button-secondary` — 320×42 @113,1472 | 991: 877×42 @57,2876 | 390: 292×42 @49,3170 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(9, 10, 14); border:1px solid rgb(36, 38, 46); radius:10px; z:5; transition:0.2s · href `/book-demo`
              - `div.button-text-block` — 156×24 @185,1481 | 991: 156×24 @407,2885 | 390: 156×24 @107,3179 · pos:relative; pad:0px 6px; z:2
                - `div.text-heading-m` — 144×24 @191,1481 | 991: 144×24 @413,2885 | 390: 144×24 @113,3179 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Talk with an Expert"
              - `div.button-icon-block.icon-right` — 24×24 @337,1481 | 991: 24×24 @560,2885 | 390: 24×24 @259,3179 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                - `div.icon-medium` — 24×24 @337,1481 | 991: 24×24 @560,2885 | 390: 24×24 @259,3179 · display:flex; justify:center; align:center
                  - `div.svg.w-embed` — 24×24 @337,1481 | 991: 24×24 @560,2885 | 390: 24×24 @259,3179 · display:flex; justify:center; align:center
                    - `svg` — 24×24 @337,1481 | 991: 24×24 @560,2885 | 390: 24×24 @259,3179 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-185ries.svg`
          - `div.pricing-footer-vertical_divider` — 1×0 @457,1238 | 991: 1×0 @33,2942 | 390: 1×0 @25,3236 · bg:rgba(255, 255, 255, 0.16)
          - `div.pricing-footer-extra` — 893×304 @458,1238 | 991: 925×308 @33,2942 | 390: 340×430 @25,3236 · display:flex; dir:column; justify:space-between; gap:40px; pad:32px 24px; flex:1 1 0%
            - `div.pricing-footer-extra-content` — 845×116 @482,1270 | 991: 877×116 @57,2974 | 390: 292×156 @49,3268 · display:flex; dir:column; gap:12px
              - `div.text-alpha-100` — 845×20 @482,1270 | 991: 877×20 @57,2974 | 390: 292×40 @49,3268 · flex:1 1 0%
                - `div.text-label-s` — 845×20 @482,1270 | 991: 877×20 @57,2974 | 390: 292×40 @49,3268 · font:Inter 14px/20px w500 ls-0.09px; color:rgba(255, 255, 255, 0.68) "Let's discuss a tailored solution that covers unique needs."
              - `ul.pricing-footer-extra-list` — 845×84 @482,1302 | 991: 877×84 @57,3006 | 390: 292×104 @49,3320 · display:flex; dir:column; gap:12px
                - `li.pricing-footer-extra-list-item` — 845×20 @482,1302 | 991: 877×20 @57,3006 | 390: 292×20 @49,3320 · display:flex; align:center; gap:8px
                  - `div.svg.w-embed` — 20×20 @482,1302 | 991: 20×20 @57,3006 | 390: 20×20 @49,3320 · display:flex; justify:center; align:center
                    - `svg` — 20×20 @482,1302 | 991: 20×20 @57,3006 | 390: 20×20 @49,3320 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-yw0r87.svg`
                  - `div.text-body-s` — 212.2×20 @510,1302 | 991: 212.2×20 @85,3006 | 390: 212.2×20 @77,3320 · font:Inter 14px/20px w400 ls-0.09px; color:rgb(255, 255, 255) "Unlimited users & product usage"
                - `li.pricing-footer-extra-list-item` — 845×20 @482,1334 | 991: 877×20 @57,3038 | 390: 292×20 @49,3352 · display:flex; align:center; gap:8px
                  - `div.svg.w-embed` — 20×20 @482,1334 | 991: 20×20 @57,3038 | 390: 20×20 @49,3352 · display:flex; justify:center; align:center
                    - `svg` — 20×20 @482,1334 | 991: 20×20 @57,3038 | 390: 20×20 @49,3352 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-yw0r87.svg`
                  - `div.text-body-s` — 203.8×20 @510,1334 | 991: 203.8×20 @85,3038 | 390: 203.8×20 @77,3352 · font:Inter 14px/20px w400 ls-0.09px; color:rgb(255, 255, 255) "Priority in-app or Slack support"
                - `li.pricing-footer-extra-list-item` — 845×20 @482,1366 | 991: 877×20 @57,3070 | 390: 292×40 @49,3384 · display:flex; align:center; gap:8px
                  - `div.svg.w-embed` — 20×20 @482,1366 | 991: 20×20 @57,3070 | 390: 20×20 @49,3394 · display:flex; justify:center; align:center
                    - `svg` — 20×20 @482,1366 | 991: 20×20 @57,3070 | 390: 20×20 @49,3394 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-yw0r87.svg`
                  - `div.text-body-s` — 297.4×20 @510,1366 | 991: 297.4×20 @85,3070 | 390: 264×40 @77,3384 · font:Inter 14px/20px w400 ls-0.09px; color:rgb(255, 255, 255) "Early access to new features and integrations"
            - `div.div-block-332` — 845×84 @482,1426 | 991: 877×88 @57,3130 | 390: 292×170 @49,3464 · display:flex; dir:column; gap:16px
              - `div.text-alpha-100` — 845×20 @482,1426 | 991: 877×20 @57,3130 | 390: 292×40 @49,3464 · flex:1 1 0%
                - `div.text-label-s` — 845×20 @482,1426 | 991: 877×20 @57,3130 | 390: 292×40 @49,3464 · font:Inter 14px/20px w500 ls-0.09px; color:rgba(255, 255, 255, 0.68) "Trusted by over 10,000 growth teams and agencies"
              - `div.pricing-enterprise-logo-wrapper` — 845×48 @482,1462 | 991: 877×52 @57,3166 | 390: 292×114 @49,3520 · display:flex; wrap:wrap; justify:space-between; align:center; gap:15px
                - `div.pricing-grid-logo-wrapper` — 92×48 @482,1462 | 991: 96×52 @57,3166 | 390: 88×28 @49,3520 · display:flex; dir:column; justify:center; align:center; pad:10px; transition:0.2s · Δ991{pad:12px} · Δ390{pad:8px}
                  - `div.home-hero-logo-image.w-embed` — 72×28 @492,1472 | 991: 72×28 @69,3178 | 390: 54×9 @66,3530 · display:flex; justify:center; align:center · Δ390{transform:matrix(0.75, 0, 0, 0.75, 0, 0)}
                    - `svg` — 72×24 @492,1474 | 991: 72×24 @69,3180 | 390: 54×18 @66,3525 · overflow:hidden · SVG `/assets/pages/pricing/svg-home-hero-logo-image-za5l90.svg`
                - `div.pricing-grid-logo-wrapper` — 150×48 @640,1462 | 991: 154×52 @222,3166 | 390: 146×28 @195,3520 · display:flex; dir:column; justify:center; align:center; pad:10px; transition:0.2s · Δ991{pad:12px} · Δ390{pad:8px}
                  - `div.home-hero-logo-image.w-embed` — 130×28 @650,1472 | 991: 130×28 @234,3178 | 390: 97.5×9 @219,3530 · display:flex; justify:center; align:center · Δ390{transform:matrix(0.75, 0, 0, 0.75, 0, 0)}
                    - `svg` — 130×19 @650,1476 | 991: 130×19 @234,3183 | 390: 97.5×14.3 @219,3527 · overflow:hidden · SVG `/assets/pages/pricing/svg-home-hero-logo-image-6jksov.svg`
                - …3 more `div.pricing-grid-logo-wrapper` siblings with the same structure (5 total):
                  - [3] 115×48 @856,1462 — svg pywyqt
                  - [4] 141×48 @1037,1462 — svg qiancg
                  - [5] 83×48 @1244,1462 — svg 5mxnba

### S2. `div.section-padding`

y/height: 1440 1723/5073 · 991 3431/4509 · 390 3819/5062

- `div.section-padding` — 1440×5073 @0,0 | 991: 991×4509 @0,0 | 390: 390×5062 @0,0 · pad:8px
  - `div.section-white-block.overflow-visible` — 1424×5057 @8,8 | 991: 975×4493 @8,8 | 390: 374×5046 @8,8 · pos:relative; bg:rgb(255, 255, 255); radius:36px; z:2 · Δ390{radius:16px}
    - `div.container` — 1424×5057 @8,8 | 991: 975×4493 @8,8 | 390: 374×5046 @8,8 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
      - `div.comparison` — 1344×5057 @48,8 | 991: 911×4493 @40,8 | 390: 326×5046 @32,8 · display:flex; dir:column; gap:40px; pad:64px 0px · Δ390{gap:32px}
        - `div.comparison-head` — 1344×92 @48,72 | 991: 911×92 @40,72 | 390: 326×116 @32,72 · display:flex; dir:column; align:center; gap:40px; pad:0px 0px 16px 0px · Δ390{gap:32px}
          - `div.max-w-2xl` — 542×76 @449,72 | 991: 542×76 @225,72 | 390: 326×100 @32,72 · maxw:640px
            - `div.flex-col-gap-2` — 542×76 @449,72 | 991: 542×76 @225,72 | 390: 326×100 @32,72 · display:flex; dir:column; align:center; gap:8px
              - `h2.text-display-h3` — 245.1×44 @597,72 | 991: 245.1×44 @373,72 | 390: 245.1×44 @72,72 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(9, 10, 14); align-text:center "Compare Plans"
              - `p.text-body-m` — 542×24 @449,124 | 991: 542×24 @225,124 | 390: 326×48 @32,124 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(52, 54, 66); align-text:center; wrap-text:pretty ‹copy: ~73 chars, 1 lines @1440›
        - `div.comparison-tooltip` — 198.4×36 @621,204 | 991: 198.4×36 @396,204 | 390: 198.4×36 @96,220 · pos:relative; aself:center; z:100
          - `div.comparison-tooltip-body-container` — 240×72 @600,132 | 991: 240×72 @375,132 | 390: 240×72 @75,148 · pos:absolute [-72px -140.797px 36px 99.1875px]; pad:0px 0px 8px 0px; transform:matrix(1, 0, 0, 1, -120, 0); vis:hidden
            - `div.comparison-tooltip-body` — 230.4×61.4 @605,142 | 991: 230.4×61.4 @380,143 | 390: 230.4×61.4 @80,158 · display:flex; dir:column; align:center; gap:4px; pos:relative; pad:12px; maxw:280px; minw:240px; bg:rgb(52, 54, 66); radius:12px; opacity:0; transform:matrix(0.96, 0, 0, 0.96, 0, 7.68); transition:0.6s cubic-bezier(0.19, 1, 0.22, 1); pe:none; vis:hidden
              - `div.text-balance` — 207.4×38.4 @616,154 | 991: 207.4×38.4 @392,154 | 390: 207.4×38.4 @91,170 · pe:none; vis:hidden
                - `div.text-label-s` — 207.4×38.4 @616,154 | 991: 207.4×38.4 @392,154 | 390: 207.4×38.4 @91,170 · pe:none; vis:hidden; font:Inter 14px/20px w500 ls-0.09px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance "Features Tagged with 👑 are only available with Foreplay" (2 lines)
          - `div.comparison-tooltip-trigger` — 198.4×36 @621,204 | 991: 198.4×36 @396,204 | 390: 198.4×36 @96,220 · display:flex; justify:center; align:center
            - `div.comparison-badge` — 198.4×36 @621,204 | 991: 198.4×36 @396,204 | 390: 198.4×36 @96,220 · display:flex; align:center; radius:8px; shadow:rgb(233, 234, 239) 0px 0px 0px 1px; transition:color 0.2s
              - `div.comparison-badge-icon` — 36×36 @621,204 | 991: 36×36 @396,204 | 390: 36×36 @96,220 · display:flex; justify:center; align:center; border:T/R/B/L 0 | 1px solid rgb(233, 234, 239) | 0 | 0
                - `div.svg.w-embed` — 18×18 @629,213 | 991: 18×18 @405,213 | 390: 18×18 @104,229 · display:flex; justify:center; align:center
                  - `svg` — 18×18 @629,213 | 991: 18×18 @405,213 | 390: 18×18 @104,229 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-xel2bx.svg`
              - `div.comparison-badge-label` — 162.4×36 @657,204 | 991: 162.4×36 @432,204 | 390: 162.4×36 @132,220 · pad:6px 12px; flex:1 1 0%
                - `div.text-label-m` — 138.4×24 @669,210 | 991: 138.4×24 @444,210 | 390: 138.4×24 @144,226 · font:Inter 16px/24px w500 ls-0.18px; color:rgb(36, 38, 46); align-text:center "Only with Foreplay"
        - `div.comparison-grid-scroll` — 1344×4721 @48,280 | 991: 911×4157 @40,280 | 390: 374×4538 @8,288 · pad:0px 0px 0px 24px · Δ390{pad:0px 24px 0px 40px; mar:0px -48px 0px 0px; pos:relative}
          - `div.comparison-grid` — 1320×4721 @72,280 | 991: 887×4157 @64,280 | 390: 480×4538 @48,288 · border:1px solid rgb(233, 234, 239); radius:16px · Δ390{pos:relative}
            - `div.comparison-th` — 1318×109 @73,281 | 991: 885×49 @65,281 | 390: 478×33 @49,289 · display:grid; cols:401.125px 229.219px 229.219px 229.219px 229.219px; rows:108px; gap:0px; pos:sticky [72px auto auto auto]; bg:rgb(255, 255, 255); border:T/R/B/L 0 | 0 | 1px solid rgb(233, 234, 239) | 0; radius:16px 16px 0px 0px; z:50 · Δ991{cols:210.703px 168.578px 168.562px 168.578px 168.562px} · Δ390{cols:95.5938px 95.5938px 95.6094px 95.5938px 95.5938px}
              - `div.comparison-tr-title` — 401.1×108 @73,281 | 991: 210.7×48 @65,281 | 390: 95.6×32 @49,289 · display:flex; wrap:wrap; align:center; gap:4px 12px; pos:relative; pad:16px · Δ991{pad:10px} · Δ390{dir:column; wrap:nowrap; align:stretch; gap:4px; pad:8px}
              - `div.comparison-tr-cell.start-trial-cell` — 229.2×108 @474,281 | 991: 168.6×48 @276,281 | 390: 95.6×32 @145,289 · display:flex; dir:column; justify:center; align:center; gap:12px; pad:16px; border:T/R/B/L 0 | 0 | 0 | 1px solid rgb(233, 234, 239) · Δ991{pad:12px} · Δ390{pad:4px}
                - `div.text-heading-l` — 45.8×24 @566,297 | 991: 40.8×24 @340,293 | 390: 30.6×24 @178,293 · font:Inter 18px/24px w550 ls-0.259999px; color:rgb(23, 25, 32); align-text:center · Δ991{font:16px/24px; ls:-0.23111px} · Δ390{font:12px/24px; ls:-0.173333px} "Basic"
                - `a.button-light.button-primary` — 122.1×40 @528,333 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.15s · href `https://app.foreplay.co/sign-up`
                  - `div.button-text-block` — 86.1×24 @536,341 | 991: hidden | 390: hidden · pos:relative; pad:0px 6px; z:2
                    - `div.text-heading-m` — 74.1×24 @542,341 | 991: hidden | 390: hidden · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255); align-text:center "Start Trial"
                  - `div.button-icon-block.icon-right` — 24×24 @618,341 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                    - `div.icon-medium` — 24×24 @618,341 | 991: hidden | 390: hidden · display:flex; justify:center; align:center
                      - `div.svg.w-embed` — 24×24 @618,341 | 991: hidden | 390: hidden · display:flex; justify:center; align:center
                        - `svg` — 24×24 @618,341 | 991: hidden | 390: hidden · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-185ries.svg`
              - `div.comparison-tr-cell.start-trial-cell` — 229.2×108 @703,281 | 991: 168.6×48 @444,281 | 390: 95.6×32 @240,289 · display:flex; dir:column; justify:center; align:center; gap:12px; pad:16px; border:T/R/B/L 0 | 0 | 0 | 1px solid rgb(233, 234, 239) · Δ991{pad:12px} · Δ390{pad:4px}
                - `div.text-heading-l` — 80.6×24 @778,297 | 991: 71.6×24 @493,293 | 390: 53.7×24 @262,293 · font:Inter 18px/24px w550 ls-0.259999px; color:rgb(23, 25, 32); align-text:center · Δ991{font:16px/24px; ls:-0.23111px} · Δ390{font:12px/24px; ls:-0.173333px} "Workflow"
                - `a.button-light.button-primary` — 122.1×40 @757,333 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.15s · href `https://app.foreplay.co/sign-up`
                  - `div.button-text-block` — 86.1×24 @765,341 | 991: hidden | 390: hidden · pos:relative; pad:0px 6px; z:2
                    - `div.text-heading-m` — 74.1×24 @771,341 | 991: hidden | 390: hidden · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255); align-text:center "Start Trial"
                  - `div.button-icon-block.icon-right` — 24×24 @847,341 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                    - `div.icon-medium` — 24×24 @847,341 | 991: hidden | 390: hidden · display:flex; justify:center; align:center
                      - `div.svg.w-embed` — 24×24 @847,341 | 991: hidden | 390: hidden · display:flex; justify:center; align:center
                        - `svg` — 24×24 @847,341 | 991: hidden | 390: hidden · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-185ries.svg`
              - …2 more `div.comparison-tr-cell.start-trial-cell` siblings with the same structure (4 total):
                - [3] 229.2×108 @933,281 — "Agency", "Start Trial", svg 185ries
                - [4] 229.2×108 @1162,281 — "Enterprise", "Book Demo", svg 185ries
            - `div.comparison-category` — 1318×458 @73,390 | 991: 885×394 @65,330 | 390: 478×463 @49,322 · data {"data-open":"true"}
              - `a.comparison-category-head` — 1318×63 @73,390 | 991: 885×63 @65,330 | 390: 478×47 @49,322 · display:flex; align:center; pad:16px; maxw:100%; bg:rgb(249, 249, 250); border:T/R/B/L 0 | 0 | 1px solid rgb(233, 234, 239) | 0; z:2 · Δ390{pad:8px} · href `#`
                - `div.flex-1` — 1262×24 @89,409 | 991: 829×24 @81,349 | 390: 438×24 @57,333 · flex:1 1 0%
                  - `h3.text-heading-l` — 1262×24 @89,409 | 991: 829×24 @81,349 | 390: 438×24 @57,333 · font:Inter 18px/24px w550 ls-0.259999px; color:rgb(23, 25, 32) · Δ991{font:16px/24px; ls:-0.23111px} · Δ390{font:12px/24px; ls:-0.173333px} "Access & Usage"
                - `div.comparison-category-head-icon` — 24×30 @1351,406 | 991: 24×30 @910,346 | 390: 24×30 @495,330 · transform:matrix(-1, 0, 0, -1, 0, 0); transition:0.6s cubic-bezier(0.19, 1, 0.22, 1)
                  - `div.icon-medium` — 24×24 @1351,406 | 991: 24×24 @910,346 | 390: 24×24 @495,330 · display:inline-flex; justify:center; align:center
                    - `div.svg.w-embed` — 24×24 @1351,406 | 991: 24×24 @910,346 | 390: 24×24 @495,330 · display:flex; justify:center; align:center
                      - `svg` — 24×24 @1351,406 | 991: 24×24 @910,346 | 390: 24×24 @495,330 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-wqicrt.svg`
              - `div.comparison-category-rows` — 1414×395 @25,453 | 991: 965×331 @25,393 | 390: 558×416 @9,369 · pad:0px 48px; mar:0px -48px; overflow:clip visible · Δ991{pad:0px 40px; mar:0px -40px} · Δ390{pad:0px 40px; mar:0px -40px}
                - `div.comparison-tr` — 1318×57 @73,453 | 991: 885×45 @65,393 | 390: 478×72 @49,369 · display:grid; cols:401.125px 229.219px 229.219px 229.219px 229.219px; rows:56px; gap:0px; pos:relative; border:T/R/B/L 0 | 0 | 1px solid rgb(233, 234, 239) | 0; z:2 · Δ991{cols:210.703px 168.578px 168.562px 168.578px 168.562px} · Δ390{cols:95.5938px 95.5938px 95.6094px 95.5938px 95.5938px}
                  - `div.comparison-tr-title` — 401.1×56 @73,453 | 991: 210.7×44 @65,393 | 390: 95.6×71 @49,369 · display:flex; wrap:wrap; align:center; gap:4px 12px; pos:relative; pad:16px · Δ991{pad:10px} · Δ390{dir:column; wrap:nowrap; align:stretch; gap:4px; pad:8px}
                    - `div.text-label-s` — 38.5×20 @89,471 | 991: 33×20 @75,405 | 390: 79.6×17 @57,377 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(23, 25, 32) · Δ991{font:12px/20px; ls:-0.0771428px} · Δ390{font:11.2px/17px; ls:-0.072px} "Users"
                    - `div.text-body-s` — 151.4×20 @139,471 | 991: 129.8×20 @120,405 | 390: 79.6×34 @57,398 · font:Inter 14px/20px w400 ls-0.09px; color:rgb(52, 54, 66); wrap-text:pretty · Δ991{font:12px/20px; ls:-0.0771428px} · Δ390{font:11.2px/17px; ls:-0.072px} "$20 per additional user"
                  - `div.comparison-tr-cell` — 229.2×56 @474,453 | 991: 168.6×44 @276,393 | 390: 95.6×71 @145,369 · display:flex; justify:center; align:center; pad:16px; border:T/R/B/L 0 | 0 | 0 | 1px solid rgb(233, 234, 239) · Δ991{pad:12px} · Δ390{pad:4px}
                    - `div.text-body-m` — 7.3×24 @586,469 | 991: 6.4×20 @357,405 | 390: 5.5×18 @190,396 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(23, 25, 32); align-text:center · Δ991{font:14px/20px; ls:-0.1575px} · Δ390{font:12px/18px; ls:-0.135px} "1"
                  - `div.comparison-tr-cell` — 229.2×56 @703,453 | 991: 168.6×44 @444,393 | 390: 95.6×71 @240,369 · display:flex; justify:center; align:center; pad:16px; border:T/R/B/L 0 | 0 | 0 | 1px solid rgb(233, 234, 239) · Δ991{pad:12px} · Δ390{pad:4px}
                    - `div.text-body-m` — 77.2×24 @780,469 | 991: 67.6×20 @495,405 | 390: 57.9×18 @260,396 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(23, 25, 32); align-text:center · Δ991{font:14px/20px; ls:-0.1575px} · Δ390{font:12px/18px; ls:-0.135px} "5 Included"
                  - …2 more `div.comparison-tr-cell` siblings with the same structure (4 total):
                    - [3] 229.2×56 @933,453 — "10 Included"
                    - [4] 229.2×56 @1162,453 — "Unlimited"
                - `div.comparison-tr` — 1318×57 @73,510 | 991: 885×49 @65,438 | 390: 478×51 @49,441 · display:grid; cols:401.125px 229.219px 229.219px 229.219px 229.219px; rows:56px; gap:0px; pos:relative; border:T/R/B/L 0 | 0 | 1px solid rgb(233, 234, 239) | 0; z:2 · Δ991{cols:210.703px 168.578px 168.562px 168.578px 168.562px} · Δ390{cols:95.5938px 95.5938px 95.6094px 95.5938px 95.5938px}
                  - `div.comparison-tr-title` — 401.1×56 @73,510 | 991: 210.7×48 @65,438 | 390: 95.6×50 @49,441 · display:flex; wrap:wrap; align:center; gap:4px 12px; pos:relative; pad:16px · Δ991{pad:10px} · Δ390{dir:column; wrap:nowrap; align:stretch; gap:4px; pad:8px}
                    - `div.text-label-s` — 172.1×20 @89,528 | 991: 147.5×20 @75,452 | 390: 79.6×34 @57,449 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(23, 25, 32) · Δ991{font:12px/20px; ls:-0.0771428px} · Δ390{font:11.2px/17px; ls:-0.072px} "Guest / Public Share Links"
                  - `div.comparison-tr-cell` — 229.2×56 @474,510 | 991: 168.6×48 @276,438 | 390: 95.6×50 @145,441 · display:flex; justify:center; align:center; pad:16px; border:T/R/B/L 0 | 0 | 0 | 1px solid rgb(233, 234, 239) · Δ991{pad:12px} · Δ390{pad:4px}
                    - `div.icon-medium` — 24×24 @577,526 | 991: 24×24 @348,450 | 390: 24×24 @181,454 · display:flex; justify:center; align:center
                      - `div.svg.w-embed` — 24×24 @577,526 | 991: 24×24 @348,450 | 390: 24×24 @181,454 · display:flex; justify:center; align:center
                        - `svg` — 24×24 @577,526 | 991: 24×24 @348,450 | 390: 24×24 @181,454 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-yw0r87.svg`
                  - `div.comparison-tr-cell` — 229.2×56 @703,510 | 991: 168.6×48 @444,438 | 390: 95.6×50 @240,441 · display:flex; justify:center; align:center; pad:16px; border:T/R/B/L 0 | 0 | 0 | 1px solid rgb(233, 234, 239) · Δ991{pad:12px} · Δ390{pad:4px}
                    - `div.icon-medium` — 24×24 @806,526 | 991: 24×24 @517,450 | 390: 24×24 @276,454 · display:flex; justify:center; align:center
                      - `div.svg.w-embed` — 24×24 @806,526 | 991: 24×24 @517,450 | 390: 24×24 @276,454 · display:flex; justify:center; align:center
                        - `svg` — 24×24 @806,526 | 991: 24×24 @517,450 | 390: 24×24 @276,454 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-yw0r87.svg`
                  - …2 more `div.comparison-tr-cell` siblings with the same structure (4 total):
                    - [3] 229.2×56 @933,510 — svg yw0r87
                    - [4] 229.2×56 @1162,510 — svg yw0r87
                - …5 more `div.comparison-tr` siblings with the same structure (7 total):
                  - [3] 1318×57 @73,567 — "White-Label External Share Links", svg yw0r87, svg yw0r87, svg yw0r87, svg yw0r87, svg xel2bx
                  - [4] 1318×53 @73,624 — "External Integrations"
                  - [5] 1318×57 @73,677 — "MCP", img 6a0235cbd475d1479d230a01_mcp-black-icon.svg, svg yw0r87, svg yw0r87, svg yw0r87, svg yw0r87
                  - [6] 1318×57 @73,734 — "Claude", img 6a02366845ce81bd09b4dd99_claude-logo.svg, svg yw0r87, svg yw0r87, svg yw0r87, svg yw0r87
                  - [7] 1318×57 @73,791 — "ChatGPT", img 6a0236681a484d13fa7aa548_chat-gpt.svg, svg yw0r87, svg yw0r87, svg yw0r87, svg yw0r87
            - `div.comparison-category` — 1318×1046 @73,848 | 991: 885×930 @65,724 | 390: 478×1078 @49,785 · data {"data-open":"true"}
              - `a.comparison-category-head` — 1318×63 @73,848 | 991: 885×63 @65,724 | 390: 478×47 @49,785 · display:flex; align:center; pad:16px; maxw:100%; bg:rgb(249, 249, 250); border:T/R/B/L 0 | 0 | 1px solid rgb(233, 234, 239) | 0; z:2 · Δ390{pad:8px} · href `#`
                - `div.flex-1` — 1262×24 @89,867 | 991: 829×24 @81,743 | 390: 438×24 @57,796 · flex:1 1 0%
                  - `h3.text-heading-l` — 1262×24 @89,867 | 991: 829×24 @81,743 | 390: 438×24 @57,796 · font:Inter 18px/24px w550 ls-0.259999px; color:rgb(23, 25, 32) · Δ991{font:16px/24px; ls:-0.23111px} · Δ390{font:12px/24px; ls:-0.173333px} "Creative Analytics"
                - `div.comparison-category-head-icon` — 24×30 @1351,864 | 991: 24×30 @910,740 | 390: 24×30 @495,793 · transform:matrix(-1, 0, 0, -1, 0, 0); transition:0.6s cubic-bezier(0.19, 1, 0.22, 1)
                  - `div.icon-medium` — 24×24 @1351,864 | 991: 24×24 @910,740 | 390: 24×24 @495,793 · display:inline-flex; justify:center; align:center
                    - `div.svg.w-embed` — 24×24 @1351,864 | 991: 24×24 @910,740 | 390: 24×24 @495,793 · display:flex; justify:center; align:center
                      - `svg` — 24×24 @1351,864 | 991: 24×24 @910,740 | 390: 24×24 @495,793 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-wqicrt.svg`
              - `div.comparison-category-rows` — 1414×983 @25,911 | 991: 965×867 @25,787 | 390: 558×1031 @9,832 · pad:0px 48px; mar:0px -48px; overflow:clip visible · Δ991{pad:0px 40px; mar:0px -40px} · Δ390{pad:0px 40px; mar:0px -40px}
                - `div.comparison-tr.is-product` — 1318×71 @73,911 | 991: 885×83 @65,787 | 390: 478×96 @49,832 · display:grid; cols:401.125px 229.219px 229.219px 229.219px 229.219px; rows:70px; gap:0px; pos:relative; bg:rgb(249, 249, 250); border:T/R/B/L 0 | 0 | 1px solid rgb(233, 234, 239) | 0; z:2 · Δ991{cols:210.703px 168.578px 168.562px 168.578px 168.562px} · Δ390{cols:95.5938px 95.5938px 95.6094px 95.5938px 95.5938px}
                  - `div.comparison-tr-title` — 401.1×70 @73,911 | 991: 210.7×82 @65,787 | 390: 95.6×95 @49,832 · display:flex; wrap:wrap; align:center; gap:4px 12px; pos:relative; pad:16px · Δ991{pad:10px} · Δ390{dir:column; wrap:nowrap; align:stretch; gap:4px; pad:8px}
                    - `a.pricing-prodcut-link` — 86.6×38 @89,927 | 991: 82.1×38 @75,797 | 390: 79.6×24 @57,840 · display:flex; wrap:wrap; align:center; gap:4px 12px; pad:5px 10px 5px 5px; maxw:100%; bg:rgb(249, 249, 250); radius:6px; transition:0.2s · Δ390{gap:4px 8px; pad:0px} · href `/lens-creative-analytics`
                      - `div.pricing-icon.sprite-image.sprite-lens` — 28×28 @94,932 | 991: 28×28 @80,802 | 390: 24×24 @57,840 · bgimg:url(nav-spritesheet-160x160-lens.png); bgsize:auto 100%; bgpos:0px 0px; bgrep:no-repeat · Δ991{bgsize:cover} · Δ390{bgsize:cover} · ASSET `/assets/pages/pricing/nav-spritesheet-160x160-lens.png`, `/assets/pages/lens-creative-analytics/682f9f725170de3b3258d310_pi-lens-hq.webp`
                      - `div.text-label-s` — 31.6×20 @134,936 | 991: 27.1×20 @120,806 | 390: 25.3×17 @89,844 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(9, 10, 14) · Δ991{font:12px/20px; ls:-0.0771428px} · Δ390{font:11.2px/17px; ls:-0.072px} "Lens"
                    - `div.text-body-s` — 161.2×20 @188,936 | 991: 138.2×20 @75,839 | 390: 79.6×51 @57,868 · font:Inter 14px/20px w400 ls-0.09px; color:rgb(52, 54, 66); wrap-text:pretty · Δ991{font:12px/20px; ls:-0.0771428px} · Δ390{font:11.2px/17px; ls:-0.072px} "$50 per additional brand"
                  - `div.comparison-tr-cell` — 229.2×70 @474,911 | 991: 168.6×82 @276,787 | 390: 95.6×95 @145,832 · display:flex; justify:center; align:center; pad:16px; border:T/R/B/L 0 | 0 | 0 | 1px solid rgb(233, 234, 239) · Δ991{pad:12px} · Δ390{pad:4px}
                    - `div` — 15.8×24 @581,934 | 991: 15.8×24 @353,816 | 390: 15.8×24 @185,868 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(178, 180, 197); align-text:center "—"
                  - `div.comparison-tr-cell` — 229.2×70 @703,911 | 991: 168.6×82 @444,787 | 390: 95.6×95 @240,832 · display:flex; justify:center; align:center; pad:16px; border:T/R/B/L 0 | 0 | 0 | 1px solid rgb(233, 234, 239) · Δ991{pad:12px} · Δ390{pad:4px}
                    - `div.text-body-m` — 55.4×24 @791,934 | 991: 48.4×20 @505,818 | 390: 41.5×18 @268,871 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(23, 25, 32); align-text:center · Δ991{font:14px/20px; ls:-0.1575px} · Δ390{font:12px/18px; ls:-0.135px} "1 Brand"
                  - …2 more `div.comparison-tr-cell` siblings with the same structure (4 total):
                    - [3] 229.2×70 @933,911 — "10 Brands"
                    - [4] 229.2×70 @1162,911 — "Unlimited"
                - `div.comparison-tr` — 1318×57 @73,982 | 991: 885×49 @65,870 | 390: 478×51 @49,928 · display:grid; cols:401.125px 229.219px 229.219px 229.219px 229.219px; rows:56px; gap:0px; pos:relative; border:T/R/B/L 0 | 0 | 1px solid rgb(233, 234, 239) | 0; z:2 · Δ991{cols:210.703px 168.578px 168.562px 168.578px 168.562px} · Δ390{cols:95.5938px 95.5938px 95.6094px 95.5938px 95.5938px}
                  - `div.comparison-tr-title` — 401.1×56 @73,982 | 991: 210.7×48 @65,870 | 390: 95.6×50 @49,928 · display:flex; wrap:wrap; align:center; gap:4px 12px; pos:relative; pad:16px · Δ991{pad:10px} · Δ390{dir:column; wrap:nowrap; align:stretch; gap:4px; pad:8px}
                    - `div.text-label-s` — 122×20 @89,1000 | 991: 104.6×20 @75,884 | 390: 79.6×34 @57,936 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(23, 25, 32) · Δ991{font:12px/20px; ls:-0.0771428px} · Δ390{font:11.2px/17px; ls:-0.072px} "Monthly Ad Spend"
                    - `div.comparison-tr-icon` — 20×20 @223,1000 | 991: hidden | 390: hidden · display:flex; justify:center; align:center · Δ991{display:none} · Δ390{display:none}
                      - `div.comparison-tooltip` — 28×28 @219,996 | 991: hidden | 390: hidden · pos:relative; aself:center; z:100
                        - `a.comparison-tooltip-trigger` — 28×28 @219,996 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; maxw:100% · href `#`
                          - `div.p-1` — 28×28 @219,996 | 991: hidden | 390: hidden · pad:4px
                            - `div.svg.w-embed` — 20×20 @223,1000 | 991: hidden | 390: hidden · display:flex; justify:center; align:center
                              - `svg` — 20×20 @223,1000 | 991: hidden | 390: hidden · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-2c328x.svg`
                        - `div.comparison-tooltip-body-container` — 240×128 @113,868 | 991: hidden | 390: hidden · pos:absolute [-128px -226px 28px 14px]; pad:0px 0px 8px 0px; transform:matrix(1, 0, 0, 1, -120, 0); vis:hidden · Δ991{transform:none} · Δ390{transform:none}
                          - `div.comparison-tooltip-body` — 230.4×115.2 @118,880 | 991: hidden | 390: hidden · display:flex; dir:column; align:center; gap:4px; pos:relative; pad:12px; maxw:280px; minw:240px; bg:rgb(52, 54, 66); radius:12px; opacity:0; transform:matrix(0.96, 0, 0, 0.96, 0, 7.68); transition:0.6s cubic-bezier(0.19, 1, 0.22, 1); pe:none; vis:hidden · Δ991{transform:none} · Δ390{transform:none}
                            - `div.text-body-s` — 207.4×57.6 @129,892 | 991: hidden | 390: hidden · pe:none; vis:hidden; font:Inter 14px/20px w400 ls-0.09px; color:rgb(255, 255, 255) · Δ991{font:12px/20px; ls:-0.0771428px} · Δ390{font:11.2px/17px; ls:-0.072px} ‹copy: ~81 chars, 3 lines @1440›
                            - `a.comparison-tooltip-button` — 114×30.7 @176,953 | 991: hidden | 390: hidden · pad:4px 4px 4px 12px; maxw:100%; radius:6px; transition:0.2s; pe:none; vis:hidden · href `/pricing`
                              - `div.flex-gap-1` — 98.7×23 @187,957 | 991: hidden | 390: hidden · display:flex; align:center; gap:4px; pe:none; vis:hidden
                                - `div.text-label-s` — 71.8×19.2 @187,959 | 991: hidden | 390: hidden · pe:none; vis:hidden; font:Inter 14px/20px w500 ls-0.09px; color:rgb(255, 255, 255) · Δ991{font:12px/20px; ls:-0.0771428px} · Δ390{font:11.2px/17px; ls:-0.072px} "Learn more"
                                - `div.icon-medium` — 23×23 @263,957 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; pe:none; vis:hidden
                                  - `div.svg.w-embed` — 23×23 @263,957 | 991: hidden | 390: hidden · display:flex; justify:center; align:center; pe:none; vis:hidden
                                    - `svg` — 23×23 @263,957 | 991: hidden | 390: hidden · overflow:hidden; pe:none; vis:hidden · SVG `/assets/pages/pricing/svg-svg-185ries.svg`
                  - `div.comparison-tr-cell` — 229.2×56 @474,982 | 991: 168.6×48 @276,870 | 390: 95.6×50 @145,928 · display:flex; justify:center; align:center; pad:16px; border:T/R/B/L 0 | 0 | 0 | 1px solid rgb(233, 234, 239) · Δ991{pad:12px} · Δ390{pad:4px}
                    - `div` — 15.8×24 @581,998 | 991: 15.8×24 @353,882 | 390: 15.8×24 @185,941 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(178, 180, 197); align-text:center "—"
                  - `div.comparison-tr-cell` — 229.2×56 @703,982 | 991: 168.6×48 @444,870 | 390: 95.6×50 @240,928 · display:flex; justify:center; align:center; pad:16px; border:T/R/B/L 0 | 0 | 0 | 1px solid rgb(233, 234, 239) · Δ991{pad:12px} · Δ390{pad:4px}
                    - `div.text-body-m` — 69.9×24 @784,998 | 991: 61.2×20 @498,884 | 390: 52.4×18 @262,944 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(23, 25, 32); align-text:center · Δ991{font:14px/20px; ls:-0.1575px} · Δ390{font:12px/18px; ls:-0.135px} "Unlimited"
                  - …2 more `div.comparison-tr-cell` siblings with the same structure (4 total):
                    - [3] 229.2×56 @933,982 — "Unlimited"
                    - [4] 229.2×56 @1162,982 — "Unlimited"
                  - `div.comparison-tr-badge` — 44×58 @29,981 | 991: 28×50 @37,869 | 390: 28×52 @21,927 · display:flex; justify:center; align:center; pos:absolute [-1px 1318px -1px -44px]; border:T/R/B/L 1px solid rgb(233, 234, 239) | 0 | 1px solid rgb(233, 234, 239) | 1px solid rgb(233, 234, 239); radius:10px 0px 0px 10px
                    - `div.svg.w-embed` — 18×18 @43,1001 | 991: 16×16 @44,886 | 390: 16×16 @28,945 · display:flex; justify:center; align:center
                      - `svg` — 18×18 @43,1001 | 991: 16×16 @44,886 | 390: 16×16 @28,945 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-xel2bx.svg`
                - `div.comparison-tr` — 1318×57 @73,1039 | 991: 885×49 @65,919 | 390: 478×51 @49,979 · display:grid; cols:401.125px 229.219px 229.219px 229.219px 229.219px; rows:56px; gap:0px; pos:relative; border:T/R/B/L 0 | 0 | 1px solid rgb(233, 234, 239) | 0; z:2 · Δ991{cols:210.703px 168.578px 168.562px 168.578px 168.562px} · Δ390{cols:95.5938px 95.5938px 95.6094px 95.5938px 95.5938px}
                  - `div.comparison-tr-title` — 401.1×56 @73,1039 | 991: 210.7×48 @65,919 | 390: 95.6×50 @49,979 · display:flex; wrap:wrap; align:center; gap:4px 12px; pos:relative; pad:16px · Δ991{pad:10px} · Δ390{dir:column; wrap:nowrap; align:stretch; gap:4px; pad:8px}
                    - `div.text-label-s` — 140.3×20 @89,1057 | 991: 120.3×20 @75,933 | 390: 79.6×34 @57,987 · font:Inter 14px/20px w500 ls-0.09px; color:rgb(23, 25, 32) · Δ991{font:12px/20px; ls:-0.0771428px} · Δ390{font:11.2px/17px; ls:-0.072px} "Data Look-back Limit"
                  - `div.comparison-tr-cell` — 229.2×56 @474,1039 | 991: 168.6×48 @276,919 | 390: 95.6×50 @145,979 · display:flex; justify:center; align:center; pad:16px; border:T/R/B/L 0 | 0 | 0 | 1px solid rgb(233, 234, 239) · Δ991{pad:12px} · Δ390{pad:4px}
                    - `div` — 15.8×24 @581,1055 | 991: 15.8×24 @353,931 | 390: 15.8×24 @185,992 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(178, 180, 197); align-text:center "—"
                  - `div.comparison-tr-cell` — 229.2×56 @703,1039 | 991: 168.6×48 @444,919 | 390: 95.6×50 @240,979 · display:flex; justify:center; align:center; pad:16px; border:T/R/B/L 0 | 0 | 0 | 1px solid rgb(233, 234, 239) · Δ991{pad:12px} · Δ390{pad:4px}
                    - `div.text-body-m` — 69.9×24 @784,1055 | 991: 61.2×20 @498,933 | 390: 52.4×18 @262,995 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(23, 25, 32); align-text:center · Δ991{font:14px/20px; ls:-0.1575px} · Δ390{font:12px/18px; ls:-0.135px} "Unlimited"
                  - …2 more `div.comparison-tr-cell` siblings with the same structure (4 total):
                    - [3] 229.2×56 @933,1039 — "Unlimited"
                    - [4] 229.2×56 @1162,1039 — "Unlimited"
                - …14 more `div.comparison-tr` siblings with the same structure (16 total):
                  - [3] 1318×57 @73,1096 — "Top Performing Reports", "Unlimited", "Unlimited", "Unlimited", "—"
                  - [4] 1318×57 @73,1153 — "Comparison Reports", "Unlimited", "Unlimited", "Unlimited", "—"
                  - [5] 1318×57 @73,1210 — "Foreplay Creative Scores", "—", svg yw0r87, svg yw0r87, svg yw0r87
                  - [6] 1318×57 @73,1267 — "White-Label Sharing", "—", svg yw0r87, svg yw0r87, svg yw0r87
                  - [7] 1318×57 @73,1324 — "Multi-Ad Account Summary", "—", svg yw0r87, svg yw0r87, svg yw0r87
                  - [8] 1318×57 @73,1381 — "Creative Testing Dashboard", "—", svg yw0r87, svg yw0r87, svg yw0r87
                  - [9] 1318×57 @73,1438 — "Personalized Inspiration", "—", svg yw0r87, svg yw0r87, svg yw0r87
                  - [10] 1318×57 @73,1495 — "Automated Transcription", "—", svg yw0r87, svg yw0r87, svg yw0r87
                  - [11] 1318×57 @73,1552 — "Custom Tags", "—", svg yw0r87, svg yw0r87, svg yw0r87
                  - [12] 1318×57 @73,1609 — "Advanced Creative Filtering", "—", svg yw0r87, svg yw0r87, svg yw0r87
                  - [13] 1318×57 @73,1666 — "Advanced Creative Segmentation", "—", svg yw0r87, svg yw0r87, svg yw0r87
                  - [14] 1318×57 @73,1723 — "Custom Metric Builder", "Coming soon", "Coming soon", "Coming soon", "—", svg xel2bx
                  - [15] 1318×57 @73,1780 — "Team Performance Gamification", "—", svg yw0r87, svg yw0r87, svg yw0r87, svg xel2bx
                  - [16] 1318×57 @73,1837 — "Competitor Benchmarking Data", "—", svg yw0r87, svg yw0r87, svg yw0r87, svg xel2bx
            - …2 more `div.comparison-category` siblings with the same structure (4 total):
              - [3] 1318×2340 @73,1894 — "Ad Research & Inspiration", "Supported Platforms:", "Meta Ad Library", "Instagram Organic", "TikTok Ad Library & Top Ads", "TikTok Organic", "LinkedIn Ad Library", "YouTube Shorts", "Google Transparency Center", "Coming Soon", "Coming Soon", "Coming Soon"
              - [4] 1318×590 @73,4234 — "Production", "AI Script Generator", "Unlimited", "Unlimited", "Unlimited", "Unlimited", "Brand Profiles", "Embeded Inspiration", "Modular Details Builder", "Storyboard Generator", "AI Scene Iterations", "Public Brief Share Pages"
            - `div.comparison-grid-footer` — 1318×176 @73,4824 | 991: 885×172 @65,4264 | 390: hidden · display:flex; dir:column; align:center; gap:20px; pad:40px 0px · Δ991{gap:16px} · Δ390{display:none}
              - `h3.text-display-h4` — 321.6×36 @571,4864 | 991: 321.6×36 @347,4304 | 390: hidden · font:Inter Display 28px/36px w600 ls-0.2px; color:rgb(9, 10, 14); align-text:center · Δ390{font:22px/36px; ls:-0.157143px} "Need something custom?"
              - `a.new-button.new-button-secondary` — 227×40 @619,4920 | 991: 227×40 @394,4356 | 390: hidden · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(255, 255, 255); radius:10px; shadow:rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(235, 235, 235) 0px 0px 0px 1px inset; z:5; transition:0.6s cubic-bezier(0.19, 1, 0.22, 1) · href `/book-demo`
                - `div.button-text-block` — 111.4×24 @676,4928 | 991: 111.4×24 @452,4364 | 390: hidden · pos:relative; pad:0px 6px; z:2
                  - `div.text-heading-m` — 99.4×24 @682,4928 | 991: 99.4×24 @458,4364 | 390: hidden · font:Inter 16px/24px w550 ls-0.18px; color:rgb(19, 21, 26); align-text:center "Book a Demo"
        - `div.comparison-grid-cta-mobile` — hidden | 991: hidden | 390: 326×172 @32,4818 · display:none; pad:40px 0px · Δ390{display:flex; dir:column; wrap:nowrap; justify:flex-start; align:center; gap:16px; mar:-40px 0px 0px 0px}
          - `h3.text-display-h4` — hidden | 991: hidden | 390: 252.7×36 @69,4858 · font:Inter Display 28px/36px w600 ls-0.2px; color:rgb(9, 10, 14); align-text:center · Δ390{font:22px/36px; ls:-0.157143px} "Need something custom?"
          - `a.new-button.new-button-secondary` — hidden | 991: hidden | 390: 227×40 @82,4910 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(255, 255, 255); radius:10px; shadow:rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(235, 235, 235) 0px 0px 0px 1px inset; z:5; transition:0.6s cubic-bezier(0.19, 1, 0.22, 1) · href `/book-demo`
            - `div.button-text-block` — hidden | 991: hidden | 390: 111.4×24 @139,4918 · pos:relative; pad:0px 6px; z:2
              - `div.text-heading-m` — hidden | 991: hidden | 390: 99.4×24 @145,4918 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(19, 21, 26); align-text:center "Book a Demo"

### S3. `div.section`

y/height: 1440 6796/918 · 991 7940/918 · 390 8881/978

- `div.container` — 1440×918 @0,0 | 991: 991×918 @0,0 | 390: 390×978 @0,0 · pad:0px 40px; maxw:1440px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
  - `div.faq` — 1360×918 @40,0 | 991: 927×918 @32,0 | 390: 342×978 @24,0 · display:flex; dir:column; gap:48px; pad:140px 0px · Δ390{gap:40px; pad:64px 0px 80px 0px}
    - `div.section-head` — 720×112 @360,140 | 991: 720×112 @136,140 | 390: 342×212 @24,64 · display:flex; dir:column; align:center; gap:12px; mar:0px 320px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
      - `h2.text-display-h3` — 480.6×44 @480,140 | 991: 480.6×44 @255,140 | 390: 342×88 @24,64 · font:Inter Display 36px/44px w600 ls-0.26px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance "Questions? We have answers."
      - `div.section-head_paragraph.is-large` — 640×56 @400,196 | 991: 640×56 @176,196 | 390: 342×112 @24,164 · maxw:640px
        - `p.text-body-l.text-white-68` — 640×56 @400,196 | 991: 640×56 @176,196 | 390: 342×112 @24,164 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.36); align-text:center; wrap-text:balance ‹copy: ~130 chars, 2 lines @1440›
    - `div.faq-block-container` — 752×366 @344,300 | 991: 752×366 @120,300 | 390: 342×426 @24,316 · mar:0px 304px; maxw:752px · Δ991{mar:0px 87.5px} · Δ390{mar:0px} · data {"data-accordion-container":""}
      - `div.` — 752×366 @344,300 | 991: 752×366 @120,300 | 390: 342×426 @24,316
        - `div.faq-block` — 752×61 @344,300 | 991: 752×61 @120,300 | 390: 342×81 @24,316 · display:flex; justify:center; align:flex-start; gap:44px; pad:20px 0px 12px 0px; border:T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-accordion-item":"","data-expanded":"false"}
          - `div.faq-block_content` — 680×24 @344,320 | 991: 680×24 @120,320 | 390: 270×48 @24,336 · display:flex; dir:column; flex:1 1 0%
            - `div.faq-block_head` — 680×24 @344,320 | 991: 680×24 @120,320 | 390: 270×48 @24,336 · display:flex; align:center; gap:44px
              - `h4.text-label-l` — 371×24 @344,320 | 991: 371×24 @120,320 | 390: 270×48 @24,336 · font:Inter 18px/24px w500 ls-0.259999px; color:rgba(255, 255, 255, 0.68) · Δ390{font:16px/24px; ls:-0.23111px} "Is Foreplay support available during my trial?"
            - `div.faq-block_body` — 680×0 @344,344 | 991: 680×0 @120,344 | 390: 270×0 @24,384 · overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
              - `div.faq-block_answer` — 680×76 @344,344 | 991: 680×76 @120,344 | 390: 270×156 @24,384 · pad:8px 0px; overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
                - `p` — 680×60 @344,352 | 991: 680×60 @120,352 | 390: 270×140 @24,392 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) ‹copy: ~268 chars, 3 lines @1440› · inline: a "hello@foreplay.co" (color rgb(58, 111, 251), fill rgb(58, 111, 251))
          - `div.faq-block_icon` — 28×28 @1068,320 | 991: 28×28 @844,320 | 390: 28×28 @338,336 · display:flex; justify:center; align:center; transition:0.2s
            - `div.icon-medium` — 24×24 @1070,322 | 991: 24×24 @846,322 | 390: 24×24 @340,338 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @1070,322 | 991: 24×24 @846,322 | 390: 24×24 @340,338 · display:flex; justify:center; align:center
                - `svg` — 24×24 @1070,322 | 991: 24×24 @846,322 | 390: 24×24 @340,338 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-wqicrt.svg`
        - `div.faq-block` — 752×61 @344,361 | 991: 752×61 @120,361 | 390: 342×81 @24,397 · display:flex; justify:center; align:flex-start; gap:44px; pad:20px 0px 12px 0px; border:T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1) · data {"data-accordion-item":"","data-expanded":"false"}
          - `div.faq-block_content` — 680×24 @344,381 | 991: 680×24 @120,381 | 390: 270×48 @24,417 · display:flex; dir:column; flex:1 1 0%
            - `div.faq-block_head` — 680×24 @344,381 | 991: 680×24 @120,381 | 390: 270×48 @24,417 · display:flex; align:center; gap:44px
              - `h4.text-label-l` — 322.6×24 @344,381 | 991: 322.6×24 @120,381 | 390: 270×48 @24,417 · font:Inter 18px/24px w500 ls-0.259999px; color:rgba(255, 255, 255, 0.68) · Δ390{font:16px/24px; ls:-0.23111px} "Do I get support & help as a customer?"
            - `div.faq-block_body` — 680×0 @344,405 | 991: 680×0 @120,405 | 390: 270×0 @24,465 · overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
              - `div.faq-block_answer` — 680×56 @344,405 | 991: 680×56 @120,405 | 390: 270×116 @24,465 · pad:8px 0px; overflow:hidden; transition:0.9s cubic-bezier(0.19, 1, 0.22, 1)
                - `p` — 680×40 @344,413 | 991: 680×40 @120,413 | 390: 270×100 @24,473 · font:Inter 14px/20px w400 ls-0.09px; color:rgba(255, 255, 255, 0.68) ‹copy: ~196 chars, 2 lines @1440›
          - `div.faq-block_icon` — 28×28 @1068,381 | 991: 28×28 @844,381 | 390: 28×28 @338,417 · display:flex; justify:center; align:center; transition:0.2s
            - `div.icon-medium` — 24×24 @1070,383 | 991: 24×24 @846,383 | 390: 24×24 @340,419 · display:flex; justify:center; align:center
              - `div.svg.w-embed` — 24×24 @1070,383 | 991: 24×24 @846,383 | 390: 24×24 @340,419 · display:flex; justify:center; align:center
                - `svg` — 24×24 @1070,383 | 991: 24×24 @846,383 | 390: 24×24 @340,419 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-wqicrt.svg`
        - …4 more `div.` siblings with the same structure (6 total):
          - [3] 752×61 @344,422 — "Can I cancel at anytime?", svg wqicrt, ‹~214ch›
          - [4] 752×61 @344,483 — "How does the trial work? Will I be charged?", svg wqicrt, ‹~460ch›
          - [5] 752×61 @344,544 — "Are there any usage limitations?", svg wqicrt, ‹~137ch›
          - [6] 752×61 @344,605 — "Do you offer annual discounts?", svg wqicrt, ‹~139ch›
    - `div.faq-buttons` — 1360×64 @40,714 | 991: 927×64 @32,714 | 390: 342×116 @24,782 · display:flex; justify:center; align:center; gap:12px; pad:12px 0px · Δ390{dir:column; align:stretch}
      - `a#intercomButton.button-dark.ghost-icon-button` — 177.4×40 @536,726 | 991: 177.4×40 @311,726 | 390: 342×40 @24,794 · display:flex; justify:center; align:center; gap:5px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `#`
        - `div.button-icon-block.icon-left` — 24×24 @544,734 | 991: 24×24 @319,734 | 390: 24×24 @114,802 · display:flex; justify:center; align:center; pos:relative; mar:0px -4px 0px 0px; opacity:0.68; z:2
          - `div.icon-medium` — 24×24 @544,734 | 991: 24×24 @319,734 | 390: 24×24 @114,802 · display:flex; justify:center; align:center
            - `div.svg.w-embed` — 20×20 @546,736 | 991: 20×20 @321,736 | 390: 20×20 @116,804 · display:flex; justify:center; align:center
              - `svg` — 20×20 @546,736 | 991: 20×20 @321,736 | 390: 20×20 @116,804 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-1i4rn0n.svg`
        - `div.button-text-block` — 136.4×24 @569,734 | 991: 136.4×24 @344,734 | 390: 136.4×24 @139,802 · pos:relative; pad:0px 6px; z:2
          - `div.text-heading-m` — 124.4×24 @575,734 | 991: 124.4×24 @350,734 | 390: 124.4×24 @145,802 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Contact support"
      - `a.button-dark.ghost-icon-button` — 179.1×40 @725,726 | 991: 179.1×40 @501,726 | 390: 342×40 @24,846 · display:flex; justify:center; align:center; gap:5px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.2s · href `https://foreplay.featurebase.app/help` target=_blank
        - `div.button-icon-block.icon-left` — 24×24 @733,734 | 991: 24×24 @509,734 | 390: 24×24 @113,854 · display:flex; justify:center; align:center; pos:relative; mar:0px -4px 0px 0px; opacity:0.68; z:2
          - `div.icon-medium` — 24×24 @733,734 | 991: 24×24 @509,734 | 390: 24×24 @113,854 · display:flex; justify:center; align:center
            - `div.svg.w-embed` — 24×24 @733,734 | 991: 24×24 @509,734 | 390: 24×24 @113,854 · display:flex; justify:center; align:center
              - `svg` — 24×24 @733,734 | 991: 24×24 @509,734 | 390: 24×24 @113,854 · overflow:hidden · SVG `/assets/pages/pricing/svg-svg-1lrvzzc.svg`
        - `div.button-text-block` — 138.1×24 @758,734 | 991: 138.1×24 @534,734 | 390: 138.1×24 @138,854 · pos:relative; pad:0px 6px; z:2
          - `div.text-heading-m` — 126.1×24 @764,734 | 991: 126.1×24 @540,734 | 390: 126.1×24 @144,854 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Knowledge Base"

### S4. `div.section.overflow-hidden`

y/height: 1440 7714/1037.5 · 991 8858/801.8 · 390 9859/643.3

- `div.section.overflow-hidden` — 1440×1037.5 @0,0 | 991: 991×801.8 @0,0 | 390: 390×643.3 @0,0 · overflow:hidden
  - `div.container.section-container` — 1344×1037.5 @48,0 | 991: 991×801.8 @0,0 | 390: 390×643.3 @0,0 · pad:0px 40px; mar:0px 48px; maxw:1344px · Δ991{pad:0px 32px; mar:0px} · Δ390{pad:0px 24px; mar:0px}
    - `div.home-cta` — 1264×1037.5 @88,0 | 991: 927×801.8 @32,0 | 390: 342×643.3 @24,0 · **identical to the homepage block → uses `CTA.jsx` from src/components (not re-specced; no assets downloaded)**

## Typography roles (computed at 1440; sizes at 991/390 from the same nodes)

| font (family size/lh weight ls) | color | n | @991 | @390 | elements (sample) | example |
|---|---|---|---|---|---|---|
| Inter 14px/20px w500 ls-0.09px | rgb(23, 25, 32) | 66 | 12px/20px | 11.2px/17px | `div.text-label-s` | Users |
| Inter 16px/24px w400 ls-0.18px | rgb(23, 25, 32) | 41 | 14px/20px | 12px/18px | `div.text-body-m` | 1 |
| Inter 16px/24px w400 ls-0.18px | rgb(178, 180, 197) | 26 | 16px/24px | 16px/24px | `div` | — |
| Inter 14px/24px w400 ls-0.18px | rgba(255, 255, 255, 0.68) | 23 | 14px/24px | 14px/24px | `div.text-color-secondary` `div.text-size-small.text-color-secondary` | ~119 chars |
| Inter 14px/24px w500 ls-0.14px | rgb(233, 234, 239) | 19 | 14px/24px | 14px/24px | `div` | Save Organize & Share Ad Ideas |
| Inter 16px/24px w500 ls-0.18px | rgb(249, 249, 250) | 19 | 16px/24px | 16px/24px | `div.text-label-m` | Swipe File |
| Inter 14px/20px w400 ls-0.09px | rgba(255, 255, 255, 0.68) | 16 | 14px/20px | 14px/20px | `p.text-body-s` `div.text-body-s` `p` | ~83 chars |
| Inter 14px/20px w500 ls-0.09px | rgb(255, 255, 255) | 15 | 14px/20px, 12px/20px | 14px/20px, 11.2px/17px | `div.text-label-s` | Monthly |
| Inter 16px/24px w550 ls-0.18px | rgb(255, 255, 255) | 9 | 16px/24px | 16px/24px | `div.text-heading-m` | Start 7 Day Free Trial |
| Inter 14px/20px w400 ls-0.09px | rgb(255, 255, 255) | 8 | 14px/20px, 12px/20px | 14px/20px, 11.2px/17px | `div.text-body-s` | Unlimited users & product usage |
| Inter 18px/24px w550 ls-0.259999px | rgb(23, 25, 32) | 8 | 16px/24px | 12px/24px | `div.text-heading-l` `h3.text-heading-l` | Basic |
| Inter 14px/20px w500 ls-0.09px | rgb(9, 10, 14) | 6 | 12px/20px | 11.2px/17px | `div.text-label-s` | Lens |
| Inter 18px/24px w500 ls-0.259999px | rgba(255, 255, 255, 0.68) | 6 | 18px/24px | 16px/24px | `h4.text-label-l` | Is Foreplay support available during my  |
| Inter 12px/16px w550 ls2px uppercase | rgb(255, 255, 255) | 4 | 12px/16px | 12px/16px | `h3.text-overline` `div.text-overline` | BASIC |
| Inter Display 24px/32px w600 ls-0.16px | rgb(255, 255, 255) | 4 | 24px/32px | 24px/32px | `div.text-display-h5` `h4.text-display-h5` | $49 |
| Inter 14px/24px w400 ls-0.18px | rgb(233, 234, 239) | 4 | 14px/24px | 14px/24px | `div` | 10+ Brands |
| Inter 14px/20px w500 ls-0.09px | rgba(255, 255, 255, 0.68) | 3 | 14px/20px | 10px/16px, 14px/20px | `div.text-label-s.mobile-xxs` `div.text-label-s` | Save 15% + Unlimited Spyder |
| Inter 14px/20px w400 ls-0.09px | rgb(52, 54, 66) | 2 | 12px/20px | 11.2px/17px | `div.text-body-s` | $20 per additional user |
| Inter 12px/16px w550 ls2px uppercase | rgba(255, 255, 255, 0.36) | 1 | 12px/16px | 12px/16px | `div.text-overline.text-white-68` | PRICING |
| Inter Display 60px/68px w600 ls-0.45px | rgba(255, 255, 255, 0.88) | 1 | 60px/68px | 38px/48px | `h1.text-display-h1.hero-title` | Flexible, risk-free pricing |
| Inter 18px/28px w400 ls-0.259999px | rgba(255, 255, 255, 0.68) | 1 | 18px/28px | 18px/28px | `p.text-body-l` | ~120 chars |
| Inter 16px/24px w550 ls-0.18px | rgb(9, 10, 14) | 1 | 16px/24px | 16px/24px | `div.text-heading-m` | Start 7 Day Free Trial |
| Inter Display 36px/44px w600 ls-0.26px | rgb(9, 10, 14) | 1 | 36px/44px | 36px/44px | `h2.text-display-h3` | Compare Plans |
| Inter 16px/24px w400 ls-0.18px | rgb(52, 54, 66) | 1 | 16px/24px | 16px/24px | `p.text-body-m` | ~73 chars |
| Inter 16px/24px w500 ls-0.18px | rgb(36, 38, 46) | 1 | 16px/24px | 16px/24px | `div.text-label-m` | Only with Foreplay |
| Inter Display 28px/36px w600 ls-0.2px | rgb(9, 10, 14) | 1 | 28px/36px | 22px/36px | `h3.text-display-h4` | Need something custom? |
| Inter 16px/24px w550 ls-0.18px | rgb(19, 21, 26) | 1 | 16px/24px | 16px/24px | `div.text-heading-m` | Book a Demo |
| Inter Display 36px/44px w600 ls-0.26px | rgb(255, 255, 255) | 1 | 36px/44px | 36px/44px | `h2.text-display-h3` | Questions? We have answers. |
| Inter 18px/28px w400 ls-0.259999px | rgba(255, 255, 255, 0.36) | 1 | 18px/28px | 18px/28px | `p.text-body-l.text-white-68` | ~130 chars |

## Colors, gradients, radii, shadows in use (non-text, 1440)

**background-color**
- `rgba(255, 255, 255, 0.1)` — `a#w-tabs-0-data-w-tab-1.pricing-tab-link.w-tab-link`
- `rgb(23, 25, 32)` — `div.horizontal_divider`, `div.pricing_popover`
- `rgb(9, 10, 14)` — `a.button-dark.button-secondary`
- `rgba(255, 255, 255, 0.03)` — `div.pricing_card-new.is-primary`
- `rgb(255, 255, 255)` — `a.button-dark.button-primary`, `div.pricing_video-wrap`, `div.section-white-block.overflow-visible`, `div.comparison-th`, `a.new-button.new-button-secondary`
- `rgba(255, 255, 255, 0.16)` — `div.pricing-footer-vertical_divider`
- `rgb(52, 54, 66)` — `div.comparison-tooltip-body`
- `rgb(2, 3, 8)` — `a.button-light.button-primary`, `a#intercomButton.button-dark.ghost-icon-button`, `a.button-dark.ghost-icon-button`
- `rgb(249, 249, 250)` — `a.comparison-category-head`, `div.comparison-tr.is-product`, `a.pricing-prodcut-link`, `a.pricing-prodcut-link.version-2`

**background-image**
- `radial-gradient(circle at 50% -100%, rgb(255, 255, 255), rgba(255, 255, 255, 0.88))` — `h1.text-display-h1.hero-title`
- `url(62a4ed18ddad95dde8b8bfa4/6aa9c6f5c56b7c96c60e33bc_final-comp_poster.0000000.jpg)` — `video#8ed58759-2839-83c7-9780-e46350661d4e-video`
- `url(nav-spritesheet-160x160-lens.png)` — `div.pricing-icon.sprite-image.sprite-lens`
- `url(nav-spritesheet-160x160-library.png)` — `div.pricing-icon.sprite-image.sprite-library`
- `url(nav-spritesheet-160x160-discovery.png)` — `div.pricing-icon.sprite-image.sprite-discovery`
- `url(nav-spritesheet-160x160-spyder.png)` — `div.pricing-icon.sprite-image.sprite-spyder`
- `url(nav-spritesheet-160x160-briefs.png)` — `div.pricing-icon.sprite-image.sprite-briefs`

**border**
- `1px solid rgba(255, 255, 255, 0.1)` — `div.pricing_card-new`, `div.pricing_card-new.is-primary`, `div.pricing-footer`
- `1px solid rgb(36, 38, 46)` — `a.button-dark.button-secondary`
- `1px solid rgb(23, 25, 32)` — `div.pricing_popover`
- `T/R/B/L 0 | 1px solid rgb(233, 234, 239) | 0 | 0` — `div.comparison-badge-icon`
- `1px solid rgb(233, 234, 239)` — `div.comparison-grid`
- `T/R/B/L 0 | 0 | 1px solid rgb(233, 234, 239) | 0` — `div.comparison-th`, `a.comparison-category-head`, `div.comparison-tr`, `div.comparison-tr.is-product`
- `T/R/B/L 0 | 0 | 0 | 1px solid rgb(233, 234, 239)` — `div.comparison-tr-cell.start-trial-cell`, `div.comparison-tr-cell`
- `T/R/B/L 1px solid rgb(233, 234, 239) | 0 | 1px solid rgb(233, 234, 239) | 1px solid rgb(233, 234, 239)` — `div.comparison-tr-badge`
- `T/R/B/L 0 | 0 | 1px solid rgba(255, 255, 255, 0.1) | 0` — `div.faq-block`

**radius**
- `12px` — `div.pricing-tabs-menu`, `div.pricing_card-benefit`, `div.comparison-tooltip-body`
- `8px` — `a#w-tabs-0-data-w-tab-0.pricing-tab-link.w-tab-link`, `a#w-tabs-0-data-w-tab-1.pricing-tab-link.w-tab-link`, `div.comparison-badge`
- `16px` — `div.pricing_card-new`, `div.pricing_popover`, `div.pricing_card-new.is-primary`, `div.pricing_video-wrap`, `div.comparison-grid`
- `10px` — `a.button-dark.button-secondary`, `a.button-dark.button-primary`, `a.button-light.button-primary`, `a.new-button.new-button-secondary`, `a#intercomButton.button-dark.ghost-icon-button` (+1)
- `20px` — `div.pricing-footer`
- `36px` — `div.section-white-block.overflow-visible`
- `16px 16px 0px 0px` — `div.comparison-th`
- `10px 0px 0px 10px` — `div.comparison-tr-badge`
- `6px` — `a.pricing-prodcut-link`, `a.comparison-tooltip-button`, `a.pricing-prodcut-link.version-2`

**box-shadow**
- `rgba(255, 255, 255, 0.16) 0px 0px 0px 1px` — `div.pricing-tabs-menu`
- `rgb(15, 17, 22) 0px 0px 16px 0px` — `div.pricing_popover`
- `rgb(233, 234, 239) 0px 0px 0px 1px` — `div.comparison-badge`
- `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(235, 235, 235) 0px 0px 0px 1px inset` — `a.new-button.new-button-secondary`

**opacity**
- `0` — `div.pricing_popover`, `div.comparison-tooltip-body`
- `0.68` — `div.button-icon-block.icon-right`, `div.button-icon-block.icon-left`

**transition**
- `0.2s` — `a#w-tabs-0-data-w-tab-0.pricing-tab-link.w-tab-link`, `a#w-tabs-0-data-w-tab-1.pricing-tab-link.w-tab-link`, `a.button-dark.button-secondary`, `a.button-dark.button-primary`, `div.pricing-grid-logo-wrapper` (+6)
- `background-color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53)` — `div.pricing_card-new`, `div.pricing_card-new.is-primary`
- `background-color 0.25s, color 0.25s` — `div.pricing_card-benefit`
- `opacity 0.15s` — `div.pricing_popover`
- `0.6s cubic-bezier(0.19, 1, 0.22, 1)` — `div.comparison-tooltip-body`, `div.comparison-category-head-icon`, `a.new-button.new-button-secondary`
- `color 0.2s` — `div.comparison-badge`
- `0.15s` — `a.button-light.button-primary`
- `0.9s cubic-bezier(0.19, 1, 0.22, 1)` — `div.faq-block`, `div.faq-block_body`, `div.faq-block_answer`

## Assets (local path ↔ element)

| local file | kind | element | natural | displayed @1440 | source URL |
|---|---|---|---|---|---|
| `/assets/pages/pricing/6aa6182040c91b1f553769e7_swipe.avif` | img | `icon-large` (s0.0.0.1.0.1.0.0.0.1.1.0.0.0.0) | 107×107 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6aa6182040c91b1f553769e7_swipe.avif |
| `/assets/pages/pricing/6aa6353367282599e25baaa5_71dd86cfbb8857433e479a8c409a1989_swipe-animated.webp` | img | `pricing_popover-image` (s0.0.0.1.0.1.0.0.0.1.1.0.0.2.3) | 704×480 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6aa6353367282599e25baaa5_71dd86cfbb8857433e479a8c409a1989_swipe-animated.webp |
| `/assets/pages/pricing/6aa61820c99e3449437fb578_discovery.avif` | img | `icon-large` (s0.0.0.1.0.1.0.0.0.1.1.1.0.0.0) | 107×107 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6aa61820c99e3449437fb578_discovery.avif |
| `/assets/pages/pricing/6aa635a599359da7669613a0_27293449d1c92e07a005118aee457496_discovery-animated.webp` | img | `pricing_popover-image` (s0.0.0.1.0.1.0.0.0.1.1.1.0.2.3) | 880×600 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6aa635a599359da7669613a0_27293449d1c92e07a005118aee457496_discovery-animated.webp |
| `/assets/pages/pricing/6aa618209de79defba6f4a74_briefs.avif` | img | `icon-large` (s0.0.0.1.0.1.0.0.0.1.1.2.0.0.0) | 107×107 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6aa618209de79defba6f4a74_briefs.avif |
| `/assets/pages/pricing/6aa63654d36b309d88d73d6b_9f1c73173220bad6cedaf638291f0d27_briefs-animated.webp` | img | `pricing_popover-image` (s0.0.0.1.0.1.0.0.0.1.1.2.0.2.3) | 880×650 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6aa63654d36b309d88d73d6b_9f1c73173220bad6cedaf638291f0d27_briefs-animated.webp |
| `/assets/pages/pricing/6aa61820c81d5cd55b6b6310_spyder.avif` | img | `icon-large` (s0.0.0.1.0.1.0.0.1.1.1.0.0.0.0) | 107×107 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6aa61820c81d5cd55b6b6310_spyder.avif |
| `/assets/pages/pricing/6aa63bee9fa42d4f2df9452c_3bcb77ffa51ce2fcd065004a603f6d20_spyder-animated.webp` | img | `pricing_popover-image` (s0.0.0.1.0.1.0.0.1.1.1.0.0.2.3) | 880×600 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6aa63bee9fa42d4f2df9452c_3bcb77ffa51ce2fcd065004a603f6d20_spyder-animated.webp |
| `/assets/pages/pricing/6aa61820a4d74f5f770376e8_lens.avif` | img | `icon-large` (s0.0.0.1.0.1.0.0.1.1.1.1.0.0.0) | 107×107 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6aa61820a4d74f5f770376e8_lens.avif |
| `/assets/pages/pricing/6aa63bed8a03456c2a49acff_4e029abc3eb790f550b7d069d22fbe41_lens-animated.webp` | img | `pricing_popover-image` (s0.0.0.1.0.1.0.0.1.1.1.1.0.2.3) | 880×600 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6aa63bed8a03456c2a49acff_4e029abc3eb790f550b7d069d22fbe41_lens-animated.webp |
| `/assets/pages/pricing/6aa618209d6eda94f1a108c1_ai.webp` | img | `icon-large` (s0.0.0.1.0.1.0.0.1.1.1.2.0.0.0) | 100×100 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6aa618209d6eda94f1a108c1_ai.webp |
| `/assets/pages/pricing/6aa618209d104f28ed7ada66_chrome.avif` | img | `icon-large` (s0.0.0.1.0.1.0.0.1.1.1.2.1.0.0) | 100×100 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6aa618209d104f28ed7ada66_chrome.avif |
| `/assets/pages/pricing/6aa6181fc81d5cd55b6b62f3_ig.webp` | img | `icon-large` (s0.0.0.1.0.1.0.0.1.1.1.2.2.0.0) | 100×100 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6aa6181fc81d5cd55b6b62f3_ig.webp |
| `/assets/pages/pricing/6aa63d4c49fe53fce82260cf_ai_row.webp` | img | `ai_row` (s0.0.0.1.0.1.0.0.1.3.1) | 1440×81 | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6aa63d4c49fe53fce82260cf_ai_row.webp |
| `/assets/pages/pricing/6aa9c6f5c56b7c96c60e33bc_final-comp_mp4.mp4` | bgvideo | `pricing_popover-video.w-background-video.w-background-video-atom` (s0.0.0.1.0.1.0.0.2.1.1.2.2.2.2.0.0) |  | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F6aa9c6f5c56b7c96c60e33bc_final-comp_mp4.mp4 |
| `/assets/pages/pricing/6aa9c6f5c56b7c96c60e33bc_final-comp_webm.webm` | bgvideo | `pricing_popover-video.w-background-video.w-background-video-atom` (s0.0.0.1.0.1.0.0.2.1.1.2.2.2.2.0.0) |  | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F6aa9c6f5c56b7c96c60e33bc_final-comp_webm.webm |
| `/assets/pages/pricing/6aa9c6f5c56b7c96c60e33bc_final-comp_poster.0000000.jpg` | poster | `pricing_popover-video.w-background-video.w-background-video-atom` (s0.0.0.1.0.1.0.0.2.1.1.2.2.2.2.0.0) |  |  | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F6aa9c6f5c56b7c96c60e33bc_final-comp_poster.0000000.jpg |
| `/assets/pages/pricing/6aa9c6f5c56b7c96c60e33bc_final-comp_poster.0000000.jpg` | bg | `` (s0.0.0.1.0.1.0.0.2.1.1.2.2.2.2.0.0.0) |  | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F6aa9c6f5c56b7c96c60e33bc_final-comp_poster.0000000.jpg |
| `/assets/pages/pricing/6aa9c6f5c56b7c96c60e33bc_final-comp_mp4.mp4` | video | `` (s0.0.0.1.0.1.0.0.2.1.1.2.2.2.2.0.0.0) | 692×720 6.47s | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F6aa9c6f5c56b7c96c60e33bc_final-comp_mp4.mp4 |
| `/assets/pages/pricing/6aa9c6f5c56b7c96c60e33bc_final-comp_webm.webm` | video | `` (s0.0.0.1.0.1.0.0.2.1.1.2.2.2.2.0.0.0) | 692×720 6.47s | 0×0 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F6aa9c6f5c56b7c96c60e33bc_final-comp_webm.webm |
| `/assets/pages/pricing/6a0235cbd475d1479d230a01_mcp-black-icon.svg` | img | `comparison-tr-image` (s1.0.0.0.1.2.0.1.1.4.0.0.0) | 20×20 | 20×20 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6a0235cbd475d1479d230a01_mcp-black-icon.svg |
| `/assets/pages/mcp/6a02366845ce81bd09b4dd99_claude-logo.svg` | img | `comparison-tr-image` (s1.0.0.0.1.2.0.1.1.5.0.0.0) | 100×100 | 20×20 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6a02366845ce81bd09b4dd99_claude-logo.svg |
| `/assets/pages/pricing/6a0236681a484d13fa7aa548_chat-gpt.svg` | img | `comparison-tr-image` (s1.0.0.0.1.2.0.1.1.6.0.0.0) | 130×130 | 20×20 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6a0236681a484d13fa7aa548_chat-gpt.svg |
| `/assets/pages/pricing/nav-spritesheet-160x160-lens.png` | bg | `pricing-icon.sprite-image.sprite-lens` (s1.0.0.0.1.2.0.2.1.0.0.0.0) |  | 28×28 | https://publicassets.foreplay.co/nav-spritesheet-160x160-lens.png |
| `/assets/pages/chrome-extension/64944e2428c1fae0b340fded_Google_Chrome_icon_(February_2022).svg.avif` | img | `comparison-tr-image` (s1.0.0.0.1.2.0.3.1.0.0.0.0.0) | 1440×1440 | 20×20 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/64944e2428c1fae0b340fded_Google_Chrome_icon_(February_2022).svg.avif |
| `/assets/pages/pricing/62a55e3da3f817548b037cf3_facebook_icon.svg` | img | `comparison-tr-image` (s1.0.0.0.1.2.0.3.1.2.0.0.0) | 446×446 | 20×20 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/62a55e3da3f817548b037cf3_facebook_icon.svg |
| `/assets/pages/chrome-extension/642ca4c12f8f5f73d94780dd_instagram.svg` | img | `comparison-tr-image` (s1.0.0.0.1.2.0.3.1.3.0.0.0) | 25×25 | 20×20 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/642ca4c12f8f5f73d94780dd_instagram.svg |
| `/assets/pages/pricing/62a55efe05dd119cc2c83c09_tiktok-ad-logo.svg` | img | `comparison-tr-image` (s1.0.0.0.1.2.0.3.1.4.0.0.0) | 477×477 | 20×20 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/62a55efe05dd119cc2c83c09_tiktok-ad-logo.svg |
| `/assets/pages/chrome-extension/664e52e8d13ae48e8b3788d0_contest-linkedin.svg` | img | `comparison-tr-image` (s1.0.0.0.1.2.0.3.1.6.0.0.0) | 20×20 | 20×20 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/664e52e8d13ae48e8b3788d0_contest-linkedin.svg |
| `/assets/pages/chrome-extension/664e52e820acdb847c1534e2_contest-youtube.svg` | img | `comparison-tr-image` (s1.0.0.0.1.2.0.3.1.7.0.0.0) | 20×20 | 20×20 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/664e52e820acdb847c1534e2_contest-youtube.svg |
| `/assets/pages/pricing/6820c8e6421d1f477457ae4b_Google-G-Logo-300x300.png.avif` | img | `comparison-tr-image` (s1.0.0.0.1.2.0.3.1.8.0.0.0) | 300×300 | 20×20 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/6820c8e6421d1f477457ae4b_Google-G-Logo-300x300.png.avif |
| `/assets/pages/api/nav-spritesheet-160x160-library.png` | bg | `pricing-icon.sprite-image.sprite-library` (s1.0.0.0.1.2.0.3.1.9.0.0.0) |  | 28×28 | https://publicassets.foreplay.co/nav-spritesheet-160x160-library.png |
| `/assets/pages/api/nav-spritesheet-160x160-discovery.png` | bg | `pricing-icon.sprite-image.sprite-discovery` (s1.0.0.0.1.2.0.3.1.20.0.0.0) |  | 28×28 | https://publicassets.foreplay.co/nav-spritesheet-160x160-discovery.png |
| `/assets/pages/api/nav-spritesheet-160x160-spyder.png` | bg | `pricing-icon.sprite-image.sprite-spyder` (s1.0.0.0.1.2.0.3.1.30.0.0.0) |  | 28×28 | https://publicassets.foreplay.co/nav-spritesheet-160x160-spyder.png |
| `/assets/pages/pricing/nav-spritesheet-160x160-briefs.png` | bg | `pricing-icon.sprite-image.sprite-briefs` (s1.0.0.0.1.2.0.4.1.0.0.0.0) |  | 28×28 | https://publicassets.foreplay.co/nav-spritesheet-160x160-briefs.png |
| `/assets/pages/lens-creative-analytics/682f9f725170de3b3258d310_pi-lens-hq.webp` | bg | `pricing-icon.sprite-image.sprite-lens` (s1.0.0.0.1.2.0.2.1.0.0.0.0) |  | 28×28 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f725170de3b3258d310_pi-lens-hq.webp |
| `/assets/pages/swipe-file/682f9f72df2782e8df1d1114_pi-swipefile-hq.webp` | bg | `pricing-icon.sprite-image.sprite-library` (s1.0.0.0.1.2.0.3.1.9.0.0.0) |  | 28×28 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f72df2782e8df1d1114_pi-swipefile-hq.webp |
| `/assets/pages/discovery/682f9f722b39359a238b0ff9_pi-discovery-hq.webp` | bg | `pricing-icon.sprite-image.sprite-discovery` (s1.0.0.0.1.2.0.3.1.20.0.0.0) |  | 28×28 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f722b39359a238b0ff9_pi-discovery-hq.webp |
| `/assets/pages/spyder-ad-spy/682f9f72ef4d27826a8d2aa0_pi-spyder-hq.webp` | bg | `pricing-icon.sprite-image.sprite-spyder` (s1.0.0.0.1.2.0.3.1.30.0.0.0) |  | 28×28 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f72ef4d27826a8d2aa0_pi-spyder-hq.webp |
| `/assets/pages/briefs/682f9f72dc306ab5bf957aea_pi-briefs-hq.webp` | bg | `pricing-icon.sprite-image.sprite-briefs` (s1.0.0.0.1.2.0.4.1.0.0.0.0) |  | 28×28 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f72dc306ab5bf957aea_pi-briefs-hq.webp |

**Inline SVGs saved** (each distinct inline `<svg>` in page content):

- `/assets/pages/pricing/svg-svg-yw0r87.svg` — 0×0 in `svg.w-embed`
- `/assets/pages/pricing/svg-svg-v8ic9h.svg` — 20×20 in `svg.w-embed`
- `/assets/pages/pricing/svg-svg-185ries.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/pricing/svg-home-hero-logo-image-za5l90.svg` — 72×24 in `home-hero-logo-image.w-embed`
- `/assets/pages/pricing/svg-home-hero-logo-image-6jksov.svg` — 130×19 in `home-hero-logo-image.w-embed`
- `/assets/pages/pricing/svg-home-hero-logo-image-pywyqt.svg` — 95×21 in `home-hero-logo-image.w-embed`
- `/assets/pages/pricing/svg-home-hero-logo-image-qiancg.svg` — 121×13 in `home-hero-logo-image.w-embed`
- `/assets/pages/pricing/svg-home-hero-logo-image-5mxnba.svg` — 63×21 in `home-hero-logo-image.w-embed`
- `/assets/pages/pricing/svg-svg-xel2bx.svg` — 18×18 in `svg.w-embed`
- `/assets/pages/pricing/svg-svg-wqicrt.svg` — 24×24 in `svg.w-embed`
- `/assets/pages/pricing/svg-svg-2c328x.svg` — 20×20 in `svg.w-embed`
- `/assets/pages/pricing/svg-svg-1i4rn0n.svg` — 20×20 in `svg.w-embed`
- `/assets/pages/pricing/svg-svg-1lrvzzc.svg` — 24×24 in `svg.w-embed`

## Motion

### Webflow IX2 (from `Webflow.require("ix2").store.getState().ixData`, filtered to elements on this page outside nav/footer)

- none


### Running Web Animations after load (`document.getAnimations()`, page content only)

- none

### Widgets / embeds detected

- s0.0.0.1.0 `div.pricing-tabs.w-tabs` {"data-current":"Annualluy","data-easing":"ease-out-cubic","data-duration-in":"0","data-duration-out":"0"}
- s0.0.0.1.0.0.0 `a.pricing-tab-link.w-inline-block.w-tab-link` {"data-w-tab":"Monthly"}
- s0.0.0.1.0.0.1 `a.pricing-tab-link.w-inline-block.w-tab-link.w--current` {"data-w-tab":"Annualluy"}
- s0.0.0.1.0.1.0 `div.pricing-tab-pane.w-tab-pane` {"data-w-tab":"Monthly"}
- s0.0.0.1.0.1.0.0.0.1.1.0.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.0.1.1.1.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.0.1.1.2.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.1.1.1.0.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.1.1.1.1.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.1.1.1.2.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.1.1.1.2.1.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.1.1.1.2.2.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.1.1.1.3.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.1.1.1.4.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.1.1.1.5.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.2.1.1.0.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.2.1.1.1.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.2.1.1.2.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.2.1.1.2.1.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.2.1.1.2.2.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.2.1.1.2.2.2.2.0.0 `div.pricing_popover-video.w-background-video.w-background-video-atom` {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F6aa9c6f5c56b7c96c60e33bc_final-comp_poster.0000000.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
- s0.0.0.1.0.1.0.0.2.1.1.3.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.2.1.1.4.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.0.0.2.1.1.5.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1 `div.pricing-tab-pane.w-tab-pane.w--tab-active` {"data-w-tab":"Annualluy"}
- s0.0.0.1.0.1.1.0.0.1.1.0.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.0.1.1.1.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.0.1.1.2.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.1.1.1.0.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.1.1.1.1.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.1.1.1.2.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.1.1.1.2.1.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.1.1.1.2.2.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.1.1.1.3.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.1.1.1.4.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.1.1.1.5.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.2.1.1.0.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.2.1.1.1.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.2.1.1.2.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.2.1.1.2.1.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.2.1.1.2.2.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.2.1.1.2.2.2.2.0.0 `div.pricing_popover-video.w-background-video.w-background-video-atom` {"data-poster-url":"https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4%2F6aa9c6f5c56b7c96c60e33bc_final-comp_poster.0000000.jpg","data-autoplay":"true","data-loop":"true","data-wf-ignore":"true"}
- s0.0.0.1.0.1.1.0.2.1.1.3.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.2.1.1.4.0.2.0 `div.w-embed` 
- s0.0.0.1.0.1.1.0.2.1.1.5.0.2.0 `div.w-embed` 
- s0.0.0.1.1 `div.code-style.w-embed` 
- s0.0.0.1.2.2.1.1.0.0 `div.home-hero-logo-image.w-embed` 
- s0.0.0.1.2.2.1.1.1.0 `div.home-hero-logo-image.w-embed` 
- s0.0.0.1.2.2.1.1.2.0 `div.home-hero-logo-image.w-embed` 
- s0.0.0.1.2.2.1.1.3.0 `div.home-hero-logo-image.w-embed` 
- s0.0.0.1.2.2.1.1.4.0 `div.home-hero-logo-image.w-embed` 
- s1.0.0.0.0 `div.code-style.w-embed` 
- s2.0.0.1.0 `div.code-style.w-embed` 
- s2.0.0.1.1 `div.w-dyn-list` 

### Page-level `<style>` embeds (verbatim CSS)

From s0.0.0.1.0.1.0.0.0.1.1.0.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.0.1.1.1.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.0.1.1.2.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.1.1.1.0.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.1.1.1.1.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.1.1.1.2.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.1.1.1.2.1.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.1.1.1.2.2.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.1.1.1.3.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.1.1.1.4.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.1.1.1.5.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.2.1.1.0.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.2.1.1.1.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.2.1.1.2.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.2.1.1.2.1.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.2.1.1.2.2.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.2.1.1.3.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.2.1.1.4.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.0.0.2.1.1.5.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.0.1.1.0.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.0.1.1.1.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.0.1.1.2.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.1.1.1.0.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.1.1.1.1.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.1.1.1.2.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.1.1.1.2.1.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.1.1.1.2.2.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.1.1.1.3.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.1.1.1.4.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.1.1.1.5.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.2.1.1.0.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.2.1.1.1.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.2.1.1.2.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.2.1.1.2.1.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.2.1.1.2.2.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.2.1.1.3.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.2.1.1.4.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.0.1.1.0.2.1.1.5.0.2.0:
```css
.pricing_card-benefit {
  position: relative;
}

.pricing_popover {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.pricing_popover.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pricing_popover.is-below {
  top: 100%;
  margin-top: 6px;
}

.pricing_popover.is-above {
  bottom: 100%;
  margin-bottom: 6px;
}
```
From s0.0.0.1.1:
```css
.pricing-card-details-item.is-unavailable .sprite-image {
	pointer-events: none;
  filter: grayscale(100%);
}
```
From s1.0.0.0.0:
```css
.comparison-tooltip-body-container {
	visibility: hidden;
}

.comparison-tooltip:hover .comparison-tooltip-body-container {
	visibility: visible;
}

.comparison-tooltip-body {
	opacity: 0;
  transform: scale(0.96) translateY(8px);
  pointer-events: none;
}

.comparison-tooltip:hover .comparison-tooltip-body {
	opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}

.comparison-category[data-open="true"] .comparison-category-head-icon{
	transform: rotate(180deg);
}

@media screen and (max-width: 992px) {
  .comparison-grid .text-label-m, .comparison-grid .text-body-m {
    font-size: .875rem;
    line-height: 1.25rem;
  }
  .comparison-grid .text-label-s, .comparison-grid .text-body-s {
    font-size: .75rem;
		line-height: 1.25rem;
  }
  .comparison .text-heading-l {
    font-size: 1rem;
  }
}

@media screen and (max-width: 479px) {
  .comparison-grid .text-label-m, .comparison-grid .text-body-m {
    font-size: .75rem;
    line-height: 1.125rem;
  }
  .comparison-grid .text-label-s, .comparison-grid .text-body-s {
    font-size: .7rem;
    line-height: 1.0625rem;
  }
  .comparison-grid .text-heading-l {
    font-size: 0.75rem;
  }
   .comparison .text-display-h4 {
    font-size: 1.375rem;
  }
}
```
From s2.0.0.1.0:
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

New classes: `pricing` `pricing-content` `pricing-tabs` `pricing-tabs-menu` `pricing-tab-link` `mobile-xxs` `pricing-tabs-content` `pricing-tab-pane` `pricing-grid-new` `pricing_card-new` `pricing_card-inner` `vflex-top-left` `spacing-xsmall` `horizontal_divider` `flex-baseline` `text-display-h5` `pricing-card-details` `spacing-xxsmall` `vflex-stretch-top` `pricing_card-benefit` `pricing_benefit-text` `icon-large` `text-align-right` `pricing_popover` `pricing_popover-content` `text-color-secondary` `pricing_popover-image` `is-primary` `vflex-center-top` `text-size-small` `ai_row` `pricing_video-wrap` `pricing_popover-video` `flex-gap-1` `icon-20` `pricing-footer` `pricing-footer-enterprise` `pricing-footer-head` `text-alpha-0` `pricing-footer-custom` `pricing-footer-vertical_divider` `pricing-footer-extra` `pricing-footer-extra-content` `pricing-footer-extra-list` `pricing-footer-extra-list-item` `div-block-332` `pricing-enterprise-logo-wrapper` `pricing-grid-logo-wrapper` `overflow-visible` `comparison` `comparison-head` `max-w-2xl` `flex-col-gap-2` `comparison-tooltip` `comparison-tooltip-body-container` `comparison-tooltip-body` `comparison-tooltip-trigger` `comparison-badge` `comparison-badge-icon` `icon-18` `comparison-badge-label` `comparison-grid-scroll` `comparison-grid` `comparison-th` `comparison-tr-title` `comparison-tr-cell` `start-trial-cell` `text-heading-l` `pricing-sticky-header-button` `comparison-category` `comparison-category-head` `flex-1` `comparison-category-head-icon` `comparison-category-rows` `comparison-tr` `comparison-tr-badge` `tablet-icon-16` `comparison-tr-image` `is-product` `pricing-prodcut-link` `pricing-icon` `sprite-image` `sprite-lens` `text-solid-300` `comparison-tr-icon` `p-1` `comparison-tooltip-button` `version-2` `sprite-library` `sprite-discovery` `sprite-spyder` `sprite-briefs` `comparison-grid-footer` `comparison-footer-button` `new-button` `new-button-secondary` `comparison-grid-cta-mobile` `faq` `faq-block-container` `faq-block` `faq-block_content` `faq-block_head` `faq-block_body` `faq-block_answer` `faq-block_icon` `faq-buttons` `ghost-icon-button` `icon-left`

```css
.old__section.black.pricing { padding-top: 10em; padding-bottom: 10em; }
.secondary.pricing { margin-top: 0.75em; }
.text-heading-l { letter-spacing: -0.0144444em; margin-top: 0px; margin-bottom: 0px; font-family: Inter, sans-serif; font-size: 1.125rem; font-weight: 550; line-height: 1.5rem; }
.icon-20 { width: 20px; height: 20px; }
.icon-20.flip { transform: rotate(180deg); }
.new-button { z-index: 5; gap: 0px; border-radius: 10px; padding: 8px; text-decoration: none; transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1); display: flex; position: relative; }
.new-button:active { color: var(--_lens---neutral-200); }
.new-button:focus { outline-style: none; }
.new-button:focus-visible, .new-button[data-wf-focus-visible] { box-shadow: rgb(2, 3, 8) 0px 0px 0px 2px, rgb(255, 255, 255) 0px 0px 0px 3px; }
.new-button.new-button-small { border-radius: 8px; padding: 6px; }
.new-button.new-button-primary { color: rgb(19, 21, 26); background-color: rgb(255, 255, 255); }
.new-button.new-button-primary:hover { color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); }
.new-button.new-button-primary:active { color: var(--_lens---neutral-200); }
.new-button.new-button-primary:focus { box-shadow: none; }
.new-button.new-button-primary:focus-visible, .new-button.new-button-primary[data-wf-focus-visible] { box-shadow: rgb(2, 3, 8) 0px 0px 0px 2px, rgb(255, 255, 255) 0px 0px 0px 3px; }
.new-button.new-button-secondary { color: rgb(19, 21, 26); background-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0) 0px 0px, rgba(0, 0, 0, 0) 0px 0px, rgb(235, 235, 235) 0px 0px 0px 1px inset; }
.new-button.new-button-secondary:hover { background-color: rgb(242, 242, 242); box-shadow: rgba(235, 235, 235, 0) 0px 0px 0px 1px inset; }
.new-button.new-button-secondary:active { color: rgb(94, 96, 99); background-color: rgba(242, 242, 242, 0.5); }
.new-button.new-button-secondary:focus { box-shadow: none; }
.new-button.new-button-secondary:focus-visible, .new-button.new-button-secondary[data-wf-focus-visible] { box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, rgb(235, 235, 235) 0px 0px 0px 3px, rgb(19, 21, 26) 0px 0px 0px 1px inset; }
.new-button.new-button-ghost { color: var(--_lens---neutral-0); }
.new-button.new-button-ghost:active { color: var(--_lens---neutral-200); }
.new-button.new-button-ghost:focus-visible, .new-button.new-button-ghost[data-wf-focus-visible] { box-shadow: rgb(2, 3, 8) 0px 0px 0px 2px, rgba(255, 255, 255, 0.25) 0px 0px 0px 3px; }
.new-button.new-button-plain { color: rgb(19, 21, 26); background-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0) 0px 0px inset, rgba(0, 0, 0, 0) 0px 0px, rgba(0, 0, 0, 0) 0px 0px; }
.new-button.new-button-plain:hover { background-color: rgb(242, 242, 242); }
.new-button.new-button-plain:active { color: rgb(94, 96, 99); background-color: rgba(242, 242, 242, 0.5); }
.new-button.new-button-plain:focus-visible, .new-button.new-button-plain[data-wf-focus-visible] { box-shadow: rgb(19, 21, 26) 0px 0px 0px 1px inset, rgb(255, 255, 255) 0px 0px 0px 2px, rgb(235, 235, 235) 0px 0px 0px 3px; }
.new-button.new-button-navbar { z-index: 5; background-color: var(--_lens---solid-0); color: var(--_lens---solid-900); font-weight: 600; }
.new-button.new-button-navbar:hover { background-color: var(--_lens---solid-100); }
.new-button.new-button-navbar:active { background-color: var(--_lens---solid-200); }
.new-button.new-button-navbar:focus { box-shadow: 0 0 0 2px var(--_lens---background),0 0 0 3px white; }
.new-button.new-button-navbar:focus-visible, .new-button.new-button-navbar[data-wf-focus-visible] { box-shadow: rgb(2, 3, 8) 0px 0px 0px 2px, rgb(255, 255, 255) 0px 0px 0px 3px; }
.button-icon-block.icon-left { z-index: 2; margin-right: -4px; }
.text-display-h5 { letter-spacing: -0.00666667em; margin-top: 0px; margin-bottom: 0px; font-family: "Inter Display", Arial, sans-serif; font-size: 1.5rem; font-weight: 600; line-height: 2rem; }
.section-white-block.overflow-visible { overflow: visible; }
.text-solid-300 { color: var(--_lens---solid-300); }
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
.flex-1 { flex: 1 1 0%; }
.max-w-2xl { max-width: 640px; }
.text-alpha-0 { color: var(--_lens---neutral-0); }
.pricing { flex-flow: column; padding-top: 72px; padding-bottom: 108px; display: flex; }
.pricing-tabs-menu { gap: 4px; box-shadow: 0 0 0 1px var(--_lens---neutral-600); border-radius: 12px; flex-flow: row; justify-content: center; align-self: center; align-items: center; padding: 4px; display: flex; }
.pricing-tabs { gap: 1.5rem; flex-flow: column; display: flex; }
.pricing-tabs-content { margin-top: -8px; margin-left: -8px; margin-right: -8px; padding: 1.25rem 8px; overflow: visible; }
.pricing-tab-link { gap: 12px; color: var(--_lens---neutral-0); text-align: center; background-color: rgba(0, 0, 0, 0); border-radius: 8px; flex-flow: row; justify-content: center; align-items: center; padding: 8px 12px; transition: 0.2s; display: flex; }
.pricing-tab-link:hover { background-color: var(--_lens---neutral-800); }
.pricing-tab-link:focus-visible, .pricing-tab-link[data-wf-focus-visible] { box-shadow: rgba(255, 255, 255, 0.12) 0px 0px 0px 2px; }
.pricing-tab-link.w--current { background-color: var(--_lens---neutral-700); color: var(--_lens---neutral-0); }
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
.pricing-card-details { gap: 16px; flex-flow: column; display: flex; }
.pricing-icon { width: 28px; height: 28px; }
.flex-baseline { gap: 4px; align-items: baseline; display: flex; }
.flex-col-gap-2 { gap: 8px; flex-flow: column; justify-content: flex-start; align-items: center; display: flex; }
.flex-col-gap-2.align-start { justify-content: flex-start; align-items: flex-start; }
.comparison { gap: 40px; text-align: center; flex-flow: column; justify-content: flex-start; align-items: stretch; padding-top: 64px; padding-bottom: 64px; display: flex; }
.comparison-grid { border: 1px solid var(--_lens---solid-50); border-radius: 16px; }
.comparison-head { gap: 40px; flex-flow: column; justify-content: flex-start; align-items: center; padding-bottom: 16px; display: flex; }
.icon-18 { width: 18px; height: 18px; }
.comparison-badge { box-shadow: 0 0 0 1px var(--_lens---solid-50); user-select: none; border-radius: 8px; justify-content: flex-start; align-items: center; transition-property: color; transition-duration: 0.2s; transition-timing-function: ease; display: flex; }
.comparison-badge:hover { color: var(--_lens---yellow); }
.comparison-badge-icon { border-right: 1px solid var(--_lens---solid-50); justify-content: center; align-items: center; width: 36px; height: 36px; display: flex; }
.comparison-badge-label { flex: 1 1 0%; padding: 6px 12px; }
.comparison-grid-footer { gap: 20px; flex-flow: column; justify-content: flex-start; align-items: center; padding-top: 40px; padding-bottom: 40px; display: flex; }
.comparison-footer-button { width: 227px; }
.comparison-tooltip { z-index: 100; color: var(--_lens---solid-400); align-self: center; position: relative; }
.comparison-tooltip-trigger { color: var(--_lens---solid-400); cursor: pointer; justify-content: center; align-items: center; margin: 0px; padding: 0px; display: flex; }
.comparison-tooltip-trigger:hover { color: var(--_lens---solid-700); }
.comparison-tooltip-body { gap: 4px; background-color: var(--_lens---solid-500); transform-origin: 50% 100%; min-width: 240px; max-width: 280px; color: var(--_lens---solid-0); border-radius: 12px; flex-flow: column; justify-content: flex-start; align-items: center; padding: 12px; transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1); display: flex; position: relative; }
.comparison-tooltip-button { color: var(--_lens---solid-0); border-radius: 6px; padding: 4px 4px 4px 12px; transition: 0.2s; }
.comparison-tooltip-button:hover { background-color: var(--_lens---solid-500); }
.comparison-tooltip-body-container { padding-bottom: 8px; position: absolute; inset: auto auto 100% 50%; transform: translate(-50%); }
.comparison-category-head { z-index: 2; border-bottom: 1px solid var(--_lens---solid-50); background-color: var(--_lens---solid-25); color: var(--_lens---solid-700); text-align: left; justify-content: flex-start; align-items: center; padding: 16px; display: flex; }
.comparison-tr { z-index: 2; gap: 0px; border-bottom: 1px solid var(--_lens---solid-50); grid-template-rows: auto; grid-template-columns: 1.75fr 1fr 1fr 1fr 1fr; grid-auto-columns: 1fr; display: grid; position: relative; }
.comparison-tr.is-product { background-color: var(--_lens---solid-25); }
.comparison-tr-title { gap: 4px 12px; text-align: left; flex-flow: wrap; justify-content: flex-start; align-items: center; padding: 16px; display: flex; position: relative; }
.comparison-tr-cell { border-left: 1px solid var(--_lens---solid-50); justify-content: center; align-items: center; padding: 16px; display: flex; }
.comparison-tr-cell.start-trial-cell { gap: 12px; flex-flow: column; justify-content: center; align-items: center; }
.comparison-th { z-index: 50; gap: 0px; border-bottom: 1px solid var(--_lens---solid-50); background-color: var(--_lens---neutral-0); border-radius: 16px 16px 0px 0px; grid-template-rows: auto; grid-template-columns: 1.75fr 1fr 1fr 1fr 1fr; grid-auto-columns: 1fr; display: grid; position: sticky; top: 72px; }
.comparison-category-rows { height: auto; margin-left: -48px; margin-right: -48px; padding-left: 48px; padding-right: 48px; overflow: clip visible; }
.comparison-tr-badge { border-style: solid none solid solid; border-width: 1px; border-color: var(--_lens---solid-50); border-radius: 10px 0px 0px 10px; justify-content: center; align-items: center; width: 40px; display: flex; position: absolute; inset: -1px 100% -1px auto; }
.comparison-grid-scroll { padding-left: 24px; }
.button-dark.ghost-icon-button { gap: 5px; background-color: var(--_lens---background); color: var(--_lens---solid-0); }
.button-dark.ghost-icon-button:hover { background-color: var(--_lens---neutral-700); }
.button-dark.ghost-icon-button:active { background-color: var(--_lens---neutral-500); color: var(--_lens---solid-0); }
.button-dark.ghost-icon-button:focus { box-shadow: 0 0 0 2px var(--_lens---background),0 0 0 3px white; }
.p-1 { padding: 4px; }
.comparison-tr-icon { justify-content: center; align-items: center; width: 1.25rem; height: 1.25rem; display: flex; }
.comparison-category-head-icon { transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1); }
.pricing-grid-logo-wrapper { color: var(--_lens---neutral-50); flex-flow: column; justify-content: center; align-items: center; padding: 10px; transition: 0.2s; display: flex; }
.pricing-grid-logo-wrapper:hover { color: var(--_lens---neutral-100); }
.pricing-prodcut-link { gap: 4px 12px; background-color: var(--_lens---solid-25); color: var(--_lens---solid-900); border-radius: 6px; flex-flow: wrap; justify-content: flex-start; align-items: center; padding: 5px 10px 5px 5px; transition: 0.2s; display: flex; }
.pricing-prodcut-link:hover { background-color: var(--_lens---solid-50); }
.pricing-prodcut-link.version-2 { padding-left: 10px; }
.icon-large { flex: 0 0 auto; width: 1.75rem; height: 1.75rem; }
.comparison-grid-cta-mobile { gap: 20px; flex-flow: column; justify-content: flex-start; align-items: center; padding-top: 40px; padding-bottom: 40px; display: none; }
.comparison-competitor-tr.is-product { background-color: var(--_lens---solid-25); }
.comparison-competitor-cell.start-trial-cell { gap: 12px; flex-flow: column; align-items: stretch; }
.pricing_card-new { gap: 1.25rem; border: 1px solid var(--_lens---neutral-700); border-radius: 1rem; flex-flow: column; justify-content: flex-start; align-items: stretch; padding: 1.25rem 0.75rem; transition: background-color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53); display: flex; }
.pricing_card-new:hover, .pricing_card-new.is-primary { background-color: var(--_lens---neutral-900); }
.pricing_card-new.is-primary:hover { background-color: var(--_lens---neutral-800); }
.pricing-grid-new { gap: 1rem; grid-template-rows: auto; grid-template-columns: 1fr 1fr 1fr; grid-auto-columns: 1fr; place-items: start stretch; display: grid; }
.vflex-top-left { flex-flow: column; justify-content: flex-start; align-items: flex-start; display: flex; }
.vflex-top-left.spacing-xsmall { gap: 0.5rem; }
.vflex-top-left.spacing-xxsmall { gap: 0.25rem; }
.vflex-center-top { flex-flow: column; justify-content: flex-start; align-items: center; display: flex; }
.vflex-center-top.spacing-small { gap: 1rem; }
.vflex-center-top.spacing-xsmall { gap: 0.5rem; }
.pricing_benefit-text { gap: 0.675rem; letter-spacing: -0.01em; flex: 1 1 0%; justify-content: flex-start; align-items: center; font-weight: 500; display: flex; }
.pricing_card-benefit { gap: 0.5rem; color: var(--_lens---solid-50); border-radius: 0.75rem; grid-template-rows: auto; grid-template-columns: 1fr 5rem; grid-auto-columns: 1fr; justify-content: flex-start; align-items: center; padding: 0.375rem 0.5rem; font-size: 0.875rem; transition: background-color 0.25s, color 0.25s; display: grid; position: relative; }
.pricing_card-benefit:hover { background-color: var(--_lens---solid-700); color: var(--_lens---solid-300); }
.pricing_popover { z-index: 999; border: 1px solid var(--_lens---solid-700); background-color: var(--_lens---solid-700); width: 100%; box-shadow: 0 0 1rem 0 var(--_lens---solid-800); color: var(--_lens---solid-25); border-radius: 1rem; position: absolute; left: 0%; right: 0%; }
.pricing_popover-content { padding: 1rem; position: relative; }
.text-color-secondary { color: var(--_lens---neutral-100); }
.pricing_popover-image { width: 100%; }
.ai_row { aspect-ratio: 17.6 / 1; object-fit: contain; width: 100%; min-height: 1.25rem; }
.text-size-small { font-size: 0.875rem; }
.text-align-right { text-align: right; }
.pricing_card-inner { gap: 1.25rem; flex-flow: column; padding-left: 0.5rem; padding-right: 0.5rem; display: flex; }
.vflex-stretch-top { flex-flow: column; display: flex; }
.vflex-stretch-top.spacing-xsmall { gap: 0.5rem; }
.vflex-stretch-top.spacing-xxsmall { gap: 0.25rem; }
.pricing_popover-video { z-index: 200; aspect-ratio: 1.2 / 1.25; flex: 1 1 0%; width: 100%; height: auto; }
.pricing_video-wrap { background-color: var(--_lens---solid-0); border-radius: 1rem; justify-content: center; padding-left: 1rem; padding-right: 1rem; display: flex; }
@media screen and (min-width: 1440px) {
  .comparison-tr-badge { width: 44px; }
}
@media screen and (max-width: 991px) {
  .pricing-footer { flex-flow: column; }
  .pricing-footer-enterprise { max-width: none; }
  .sprite-image.sprite-library { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f72df2782e8df1d1114_pi-swipefile-hq.webp"); background-position: 50% center; background-repeat: no-repeat; background-size: cover; }
  .sprite-image.sprite-discovery { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f722b39359a238b0ff9_pi-discovery-hq.webp"); background-position: 50% center; background-repeat: no-repeat; background-size: cover; }
  .sprite-image.sprite-spyder { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f72ef4d27826a8d2aa0_pi-spyder-hq.webp"); background-position: 50% center; background-repeat: no-repeat; background-size: cover; }
  .sprite-image.sprite-lens { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f725170de3b3258d310_pi-lens-hq.webp"); background-position: 50% center; background-size: cover; }
  .sprite-image.sprite-briefs { background-image: url("https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/682f9f72dc306ab5bf957aea_pi-briefs-hq.webp"); background-position: 50% center; background-repeat: no-repeat; background-size: cover; }
  .icon-18.tablet-icon-16 { width: 16px; height: 16px; }
  .comparison-grid-footer { gap: 16px; }
  .comparison-tr { grid-template-columns: 1.25fr 1fr 1fr 1fr 1fr; }
  .comparison-tr-title { padding: 10px; }
  .comparison-tr-cell { padding: 12px; }
  .comparison-th { grid-template-columns: 1.25fr 1fr 1fr 1fr 1fr; }
  .comparison-category-rows { margin-left: -40px; margin-right: -40px; padding-left: 40px; padding-right: 40px; }
  .comparison-tr-badge { width: 28px; }
  .product-hero-canvas, .comparison-tr-icon { display: none; }
  .pricing-grid-logo-wrapper { padding: 12px; }
  .pricing-sticky-header-button { display: none; }
  .comparison-grid-cta-mobile { gap: 16px; }
  .icon-14.tablet-icon-16 { width: 16px; height: 16px; }
  .pricing-grid-new { gap: 32px; grid-template-rows: auto auto auto; grid-template-columns: 1fr; padding: 0px; overflow: visible; }
}
@media screen and (max-width: 767px) {
  .faq { gap: 40px; padding-top: 80px; padding-bottom: 80px; }
  .pricing-tabs-menu { align-items: stretch; width: 100%; }
  .pricing-tab-link { gap: 4px; flex-flow: column; flex: 1 1 0%; }
  .pricing-icon { width: 24px; height: 24px; }
  .comparison-grid { border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; width: 600px; position: relative; }
  .comparison-head { gap: 32px; }
  .comparison-grid-footer { display: none; }
  .comparison-category-head { padding: 8px; }
  .comparison-tr-title { column-gap: 4px; padding: 8px; }
  .comparison-tr-cell { padding: 8px; }
  .comparison-th { position: sticky; top: 0px; }
  .comparison-grid-scroll { margin-right: -48px; padding-left: 40px; padding-right: 24px; position: relative; left: -24px; overflow: auto; }
  .comparison-grid-cta-mobile { margin-top: -40px; display: flex; }
  .pricing-grid-new { gap: 24px; }
}
@media screen and (max-width: 479px) {
  .old__section.black.pricing, .old__section.black.hero { padding-top: 7em; }
  .text-label-s.mobile-xxs { font-size: 0.625rem; line-height: 1rem; }
  .faq { padding-top: 64px; padding-bottom: 80px; }
  .faq-buttons { flex-flow: column; align-items: stretch; }
  .pricing { padding-top: 40px; padding-bottom: 80px; }
  .pricing-tabs-menu { gap: 4px; flex-flow: column; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr; grid-auto-columns: 1fr; align-items: stretch; display: grid; }
  .pricing-tabs { gap: 24px; }
  .pricing-tab-link { gap: 0px; text-wrap: balance; }
  .comparison { gap: 32px; }
  .comparison-grid { width: 480px; }
  .comparison-tr { grid-template-columns: 1fr 1fr 1fr 1fr 1fr; }
  .comparison-tr-title { flex-flow: column; align-items: stretch; }
  .comparison-tr-cell { padding: 4px; }
  .comparison-th { grid-template-columns: 1fr 1fr 1fr 1fr 1fr; }
  .pricing-grid-logo-wrapper { padding: 8px; }
  .pricing-prodcut-link { column-gap: 8px; padding: 0px; }
  .pricing-prodcut-link.version-2 { padding: 0px; }
  .comparison-tr-image { width: 16px; height: 16px; }
  .pricing-grid-new { gap: 20px; }
}
```


## Caveats

- Third-party embeds (YouTube lightbox, Cal.com, Senja, Wistia) are noted but their internals were not measured.
- Hover/focus/active values come from the verbatim CSS rules above, plus the homepage spec for shared classes. They were not captured by hovering.
- `y` values are offsets inside each section at that width. Geometry for JS-cloned nodes (marquee clones) is only comparable for the original items.
