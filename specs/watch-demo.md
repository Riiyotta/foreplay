Source: https://www.foreplay.co/watch-demo

# /watch-demo: Watch Demo & Book 1:1 Live Demo

Measured on 2026-10-06 with headless Chromium (Playwright 1.63) at 1440×900, 991×900 and 390×844, after a full scroll pass. The Navbar and Footer have the same DOM as the homepage, so reuse `Navbar.jsx` and `Footer.jsx` (CLONE_SPEC.md §1 and §8). Tokens, buttons and type classes are in CLONE_SPEC.md §0; anything shared between these pages is in `specs/_shared-pages.md`. **Copy policy:** short UI strings are verbatim, and long copy is given only as ‹copy: ~N chars, L lines @1440›. Assets are local paths under `public/` (`/assets/...`). Files that already existed in `public/assets` were reused rather than re-downloaded, which is why some paths point at other page folders or at the root. Blocks that are identical to the homepage (the final CTA `.home-cta`, the Chrome-extension card `.home-extension`, and the logo strip `.home-hero-bottom`) are collapsed to a single line, "uses <Component> from src/components". Their internals are not re-specced and their assets were not re-downloaded.

## Build notes (summary)

- **Structure:**
  - S1 `.demo-hero`: head "DEMO" / "Watch the pre-recorded demo" (`h1.text-display-h2`) plus 2 lines of body-l. Then `.demo-modal-wrapper` (800 wide), which holds the **Wistia player** (800×450, media `uwpllhs0uf`, videoFoam responsive). Under it is a `.demo-message-wrapper` card (800×204) with a 50px avatar, 4 lines of message copy and a full-width (686) `button-light.button-primary` "Start Free Trial".
  - Then the footer.
- **Reuse:** `Button` (`light-primary` variant), section head.
- **Motion:** button .15s. No IX2 on content.
- **Embeds:** Wistia (`fast.wistia.com/embed/medias/uwpllhs0uf`). Its internals were not measured, so use an `<iframe>`/`wistia-player` or a 16:9 placeholder. A customer.io forms script loads, but no form is rendered. This page loads the Wistia font `Inter-Extended.woff` (player UI only).

## Page meta (measured)

- Webflow page id `64ff700b23c604106472049c`. Title: `Watch Demo & Book 1:1 Live Demo`.
- Meta description: ~163 chars (not transcribed).
- Document height: 1440 → 2073, 991 → 2243, 390 → 2627. Body bg rgb(2, 3, 8).
- Navbar: same DOM as homepage (same node count/height; only the active-link state class differs) → reuse `Navbar.jsx`.
- Footer: same DOM as homepage (same node count/height) → reuse `Footer.jsx` (incl. calendar pop-up + exit-intent modal).
- Fonts loaded: Inter Display 600 normal, Inter 400 normal, Inter 600 normal, Inter 500 normal, WistiaPlayerInterNumbersSemiBold normal normal, WistiaPlayerInter normal normal.

## Section map (DOM order)

Legend: each line is `tag.class — W×H @x,y` at 1440 (y relative to the section top), then `| 991:` and `| 390:` geometry, then non-default computed styles at 1440, then `Δ991{…}` / `Δ390{…}` listing only layout/typography values that differ from 1440. `hidden` = display:none or 0×0 at that width. Text: short UI strings verbatim in quotes; long copy as ‹copy: ~N chars, L lines @1440› (write stand-in copy of matching length). Classes prefixed `w-` (Webflow runtime) are dropped except meaningful widget classes.

### S1. `div.section.overflow-hidden`

y/height: 1440 72/1068.8 · 991 72/1067 · 390 72/768.4

- `div.section.overflow-hidden` — 1440×1068.8 @0,0 | 991: 991×1067 @0,0 | 390: 390×768.4 @0,0 · overflow:hidden
  - `div.container.section-container` — 1344×1068.8 @48,0 | 991: 991×1067 @0,0 | 390: 390×768.4 @0,0 · pad:0px 40px; maxw:1344px · Δ991{pad:0px 32px} · Δ390{pad:0px 24px}
    - `div.demo-hero` — 1264×1068.8 @88,0 | 991: 927×1067 @32,0 | 390: 342×768.4 @24,0 · display:flex; dir:column; align:center; gap:0px; pad:120px 0px · Δ390{pad:40px 0px}
      - `div.section-head` — 720×149.8 @360,120 | 991: 720×148 @136,120 | 390: 342×192 @24,40 · display:flex; dir:column; align:center; gap:12px; mar:0px 272px; maxw:720px · Δ991{mar:0px 103.5px} · Δ390{mar:0px}
        - `div.section-head-wrapper` — 593.1×149.8 @423,120 | 991: 539.2×148 @226,120 | 390: 342×192 @24,40 · display:flex; dir:column; align:center; gap:12px
          - `div.text-overline.text-white-68` — 44.2×16 @698,120 | 991: 44.2×16 @473,120 | 390: 44.2×16 @173,40 · font:Inter 12px/16px w550 ls2px; color:rgba(255, 255, 255, 0.36); align-text:center; tt:uppercase "DEMO"
          - `h1.text-display-h2` — 593.1×53.8 @423,148 | 991: 539.2×52 @226,148 | 390: 342×96 @24,68 · font:Inter Display 44px/53.76px w600 ls-0.33px; color:rgb(255, 255, 255); align-text:center; wrap-text:balance · Δ991{font:40px/52px; ls:-0.3px} · Δ390{font:36px/48px; ls:-0.27px} "Watch the pre-recorded demo"
          - `div.section-head_paragraph` — 512×56 @464,214 | 991: 512×56 @240,212 | 390: 342×56 @24,176 · maxw:512px
            - `p.text-body-l` — 512×56 @464,214 | 991: 512×56 @240,212 | 390: 342×56 @24,176 · font:Inter 18px/28px w400 ls-0.259999px; color:rgba(255, 255, 255, 0.68); align-text:center; wrap-text:pretty ‹copy: ~82 chars, 2 lines @1440›
      - `div.demo-modal-wrapper` — 800×654 @320,295 | 991: 800×654 @96,293 | 390: 342×471.4 @24,257 · mar:25px 0px 0px 0px; maxw:800px; bg:rgb(255, 255, 255); radius:10px; overflow:hidden · Δ991{mar:25px 63.5px 0px 63.5px}
        - `div.wistia_responsive_padding` — 800×450 @320,295 | 991: 800×450 @96,293 | 390: 342×192.4 @24,257 · pos:relative; pad:450px 0px 0px 0px · Δ390{pad:192.375px 0px 0px 0px}
          - `div.wistia_responsive_wrapper` — 800×450 @320,295 | 991: 800×450 @96,293 | 390: 342×192.4 @24,257 · pos:absolute [0px 0px 0px 0px]
            - `div.wistia_video_foam_dummy` — 800×0 @320,295 | 991: 800×0 @96,293 | 390: 342×0 @24,257 · vis:hidden · data {"data-source-container-id":"wistia-uwpllhs0uf-1"}
            - `div#wistia-uwpllhs0uf-1.wistia_embed.wistia_async_uwpllhs0uf.seo=true.videoFoam=true.wistia_embed_initialized` — 800×450 @320,295 | 991: 800×450 @96,293 | 390: 342×192.4 @24,257 · pos:relative · **THIRD-PARTY EMBED — internals not measured; reproduce as an embed/placeholder box of this size**
        - `div.demo-message-wrapper` — 800×204 @320,745 | 991: 800×204 @96,743 | 390: 342×279 @24,449 · display:flex; gap:normal 16px; pad:24px · Δ390{dir:column; pad:8px 24px 24px 24px}
          - `img.image-100` — 50×50 @344,769 | 991: 50×50 @120,767 | 390: 35×35 @48,457 · maxw:100%; border:1px solid rgba(122, 123, 127, 0.25); radius:100px; overflow:clip; fit:fill · Δ390{mar:0px 0px 8px 0px} · IMG `/assets/pages/watch-demo/633c63671c752232dd2baf09_1639943305328.avif` natural 400×400 loading=lazy
          - `div` — 686×156 @410,769 | 991: 686×156 @186,767 | 390: 294×204 @48,500
            - `div.text-body-m` — 686×96 @410,769 | 991: 686×96 @186,767 | 390: 294×144 @48,500 · font:Inter 16px/24px w400 ls-0.18px; color:rgb(52, 54, 66); wrap-text:pretty ‹copy: ~175 chars, 4 lines @1440›
            - `div.watch-demo-button-wrapper` — 686×60 @410,865 | 991: 686×60 @186,863 | 390: 294×60 @48,644 · pad:20px 0px 0px 0px
              - `a.button-light.button-primary` — 686×40 @410,885 | 991: 686×40 @186,883 | 390: 294×40 @48,664 · display:flex; justify:center; align:center; gap:0px; pos:relative; pad:8px; maxw:100%; bg:rgb(2, 3, 8); radius:10px; z:5; transition:0.15s · href `https://app.foreplay.co/sign-up`
                - `div.button-text-block` — 123.3×24 @681,893 | 991: 123.3×24 @457,891 | 390: 123.3×24 @123,672 · pos:relative; pad:0px 6px; z:2
                  - `div.text-heading-m` — 111.3×24 @687,893 | 991: 111.3×24 @463,891 | 390: 111.3×24 @129,672 · font:Inter 16px/24px w550 ls-0.18px; color:rgb(255, 255, 255) "Start Free Trial"
                - `div.button-icon-block.icon-right` — 24×24 @801,893 | 991: 24×24 @576,891 | 390: 24×24 @243,672 · display:flex; justify:center; align:center; pos:relative; mar:0px 0px 0px -4px; opacity:0.68; z:2
                  - `div.icon-medium` — 24×24 @801,893 | 991: 24×24 @576,891 | 390: 24×24 @243,672 · display:flex; justify:center; align:center
                    - `div.svg.w-embed` — 24×24 @801,893 | 991: 24×24 @576,891 | 390: 24×24 @243,672 · display:flex; justify:center; align:center
                      - `svg` — 24×24 @801,893 | 991: 24×24 @576,891 | 390: 24×24 @243,672 · overflow:hidden · SVG `/assets/pages/watch-demo/svg-svg-185ries.svg`

### S2. `wistia-tag-manager`

y/height: 1440 2073/0 · 991 hidden · 390 hidden

- `wistia-tag-manager` — hidden at all widths (display:none / 0×0; e.g. inactive tab pane, popover, mobile-only)

## Typography roles (computed at 1440; sizes at 991/390 from the same nodes)

| font (family size/lh weight ls) | color | n | @991 | @390 | elements (sample) | example |
|---|---|---|---|---|---|---|
| Inter 12px/16px w550 ls2px uppercase | rgba(255, 255, 255, 0.36) | 1 | 12px/16px | 12px/16px | `div.text-overline.text-white-68` | DEMO |
| Inter Display 44px/53.76px w600 ls-0.33px | rgb(255, 255, 255) | 1 | 40px/52px | 36px/48px | `h1.text-display-h2` | Watch the pre-recorded demo |
| Inter 18px/28px w400 ls-0.259999px | rgba(255, 255, 255, 0.68) | 1 | 18px/28px | 18px/28px | `p.text-body-l` | ~82 chars |
| Inter 16px/24px w400 ls-0.18px | rgb(52, 54, 66) | 1 | 16px/24px | 16px/24px | `div.text-body-m` | ~175 chars |
| Inter 16px/24px w550 ls-0.18px | rgb(255, 255, 255) | 1 | 16px/24px | 16px/24px | `div.text-heading-m` | Start Free Trial |

## Colors, gradients, radii, shadows in use (non-text, 1440)

**background-color**
- `rgb(255, 255, 255)` — `div.demo-modal-wrapper`
- `rgb(2, 3, 8)` — `a.button-light.button-primary`

**border**
- `1px solid rgba(122, 123, 127, 0.25)` — `img.image-100`

**radius**
- `10px` — `div.demo-modal-wrapper`, `a.button-light.button-primary`
- `100px` — `img.image-100`

**opacity**
- `0.68` — `div.button-icon-block.icon-right`

**transition**
- `0.15s` — `a.button-light.button-primary`

## Assets (local path ↔ element)

| local file | kind | element | natural | displayed @1440 | source URL |
|---|---|---|---|---|---|
| `/assets/pages/watch-demo/633c63671c752232dd2baf09_1639943305328.avif` | img | `image-100` (s0.0.0.1.1.0) | 400×400 | 50×50 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/633c63671c752232dd2baf09_1639943305328.avif |

**Inline SVGs saved** (each distinct inline `<svg>` in page content):

- `/assets/pages/watch-demo/svg-svg-185ries.svg` — 24×24 in `svg.w-embed`

## Motion

### Webflow IX2 (from `Webflow.require("ix2").store.getState().ixData`, filtered to elements on this page outside nav/footer)

- none


### Running Web Animations after load (`document.getAnimations()`, page content only)

- VOLUME_SMALL_WAVE_FLASH on `path.volume__small-wave` dur 2000 delay 0 iter null ease linear dir normal kf [{"offset":0,"easing":"ease","opacity":"0","computedOffset":0},{"offset":0.33,"easing":"ease","opacity":"1","computedOffset":0.33},{"offset":0.66,"easing":"ease","opacity":"1","computedOffset":0.66},{"offset":1,"easing":"ease","opacity":"0","computedOffset":1}]
- VOLUME_LARGE_WAVE_FLASH on `path.volume__large-wave` dur 2000 delay 300 iter null ease linear dir normal kf [{"offset":0,"easing":"ease","opacity":"0","computedOffset":0},{"offset":0.33,"easing":"ease","opacity":"1","computedOffset":0.33},{"offset":0.66,"easing":"ease","opacity":"1","computedOffset":0.66},{"offset":1,"easing":"ease","opacity":"0","computedOffset":1}]

### Widgets / embeds detected

- s0.0.0.1.0 `div.w-embed.w-script` 

### Page-level `<style>` embeds (verbatim CSS)

From s0.0.0.1.0:
```css
@keyframes VOLUME_SMALL_WAVE_FLASH {
    0% { opacity: 0; }
    33% { opacity: 1; }
    66% { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes VOLUME_LARGE_WAVE_FLASH {
    0% { opacity: 0; }
    33% { opacity: 1; }
    66% { opacity: 1; }
    100% { opacity: 0; }
  }

  .volume__small-wave {
    animation: VOLUME_SMALL_WAVE_FLASH 2s infinite;
    opacity: 0;
  }

  .volume__large-wave {
    animation: VOLUME_LARGE_WAVE_FLASH 2s infinite .3s;
    opacity: 0;
  }
```
From s0.0.0.1.0:
```css
@media (prefers-reduced-motion: no-preference) {
          @keyframes w-control-bar-fade-in {
            0% {
              opacity: 0;
              transform: translateX(50%) translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateX(50%) translateY(0px);
            }
          }
        }
```
From s0.0.0.1.0:
```css
#wistia_chrome_23 #wistia_grid_73_wrapper .w-css-reset{font-size:14px;}
#wistia_chrome_23 #wistia_grid_73_wrapper div.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}
#wistia_chrome_23 #wistia_grid_73_wrapper span.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}
#wistia_chrome_23 #wistia_grid_73_wrapper ul.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}
#wistia_chrome_23 #wistia_grid_73_wrapper li.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}
#wistia_chrome_23 #wistia_grid_73_wrapper label.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}
#wistia_chrome_23 #wistia_grid_73_wrapper fieldset.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}
#wistia_chrome_23 #wistia_grid_73_wrapper button.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}
#wistia_chrome_23 #wistia_grid_73_wrapper img.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;floa
```
From s0.0.0.1.0:
```css
#wistia_grid_73_wrapper{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;font-family:Arial,sans-serif;font-size:14px;height:100%;position:relative;text-align:left;width:100%;}
#wistia_grid_73_wrapper *{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}
#wistia_grid_73_above{position:relative;}
#wistia_grid_73_main{display:block;height:100%;position:relative;}
#wistia_grid_73_behind{height:100%;left:0;position:absolute;top:0;width:100%;}
#wistia_grid_73_center{height:100%;overflow:hidden;position:relative;width:100%;}
#wistia_grid_73_front{display:none;height:100%;left:0;position:absolute;top:0;width:100%;}
#wistia_grid_73_top_inside{position:absolute;left:0;top:0;width:100%;}
#wistia_grid_73_top{width:100%;position:absolute;bottom:0;left:0;}
#wistia_grid_73_bottom_inside{position:absolute;left:0;bottom:0;width:100%;}
#wistia_grid_73_bottom{width:100%;position:absolute;top:0;left:0;}
#wistia_grid_73_left_inside{height:100%;position:absolute;left:0;top:0;}
#wistia_grid_73_left{height:100%;position:absolute;right:0;top:0;}
#wistia_grid_73_right_inside{height:100%;right:0;position:absolute;top:0;}
#wistia_grid_73_right{height:100%;left:0;position:absolute;top:0;}
#wistia_grid_73_below{position:relative;}
```

### Page-level `<script>` embeds

From s0.0.0.1.0 (0 chars, src https://fast.wistia.com/embed/medias/uwpllhs0uf.jsonp):
```js

```
From s0.0.0.1.0 (0 chars, src https://fast.wistia.com/assets/external/E-v1.js):
```js

```

## CSS rules for classes not used on the homepage (verbatim from `foreplay-3-0.shared.850e08b99.min.css`)

New classes: `demo-hero` `demo-modal-wrapper` `wistia_responsive_padding` `wistia_responsive_wrapper` `wistia_video_foam_dummy` `wistia_embed` `wistia_async_uwpllhs0uf` `seo=true` `videoFoam=true` `wistia_embed_initialized` `demo-message-wrapper` `image-100` `watch-demo-button-wrapper`

```css
.demo-modal-wrapper { background-color: rgb(255, 255, 255); border-radius: 10px; width: 100%; max-width: 800px; margin-top: 25px; margin-left: auto; margin-right: auto; overflow: hidden; }
.demo-message-wrapper { column-gap: 1em; padding: 1.5em; display: flex; }
.image-100 { border: 1px solid var(--grey-stroke); border-radius: 100px; width: 50px; height: 50px; }
.demo-hero { gap: 0px; flex-flow: column; grid-template-rows: auto auto; grid-template-columns: 1fr 1fr; grid-auto-columns: 1fr; justify-content: flex-start; align-items: center; padding-top: 120px; padding-bottom: 120px; display: flex; }
.watch-demo-button-wrapper { padding-top: 20px; }
@media screen and (max-width: 767px) {
  .image-100 { width: 35px; height: 35px; margin-right: 0px; }
  .demo-hero { padding-top: 80px; padding-bottom: 80px; }
}
@media screen and (max-width: 479px) {
  .demo-message-wrapper { flex-direction: column; padding-top: 0.5em; }
  .image-100 { margin-bottom: 0.5em; }
  .demo-hero { padding-top: 40px; padding-bottom: 40px; }
}
```


## Caveats

- Third-party embeds (YouTube lightbox, Cal.com, Senja, Wistia) are noted but their internals were not measured.
- Hover/focus/active values come from the verbatim CSS rules above, plus the homepage spec for shared classes. They were not captured by hovering.
- `y` values are offsets inside each section at that width. Geometry for JS-cloned nodes (marquee clones) is only comparable for the original items.
