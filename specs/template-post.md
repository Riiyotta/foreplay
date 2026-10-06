Source: https://www.foreplay.co/post/2025-pricing

> Shared patterns (breadcrumb S1, title block S2, rich text S3, cards S4–S7, headshot/socials S8, hero S9, video S10) are defined once in `specs/_shared-templates.md`. Where this file repeats one of them, the details are the measured instance for this template.

# Template: Blog post (`/post/:slug`)

- Data: `src/data/post.json` (184 entries). Two of them are 404 on the live site (`ai-emotional-analysis-new-ad-details`, `restaurant-facebook-ad-examples`) and are flagged with `missing:true`. The router should 404 them or skip them.
- Entries measured: `/post/2025-pricing` (cover, no summary, h2/h4/ul/figure), `/post/facebook-ad-creative` (summary visible, figcaption, embeds), `/post/download-ads-facebook-ad-library` (table, callout, code, no cover) and `/post/ad-library-mcp` (pre/code block, blockquote). All four share the same DOM. The only differences are the conditional blocks listed in §8.
- How it was measured: Node Playwright (headless Chromium 1243) on 2026-10-06 at 1440×900, 991×900 and 390×844. Values come from `getComputedStyle`/`getBoundingClientRect` after scrolling through the page so lazy images load. CSS rules are quoted from the live shared stylesheet (`reference/webflow.css`). `y` values are document offsets. The 72px sticky navbar sits on top, so content starts at y=72.
- Global pieces to reuse: Navbar, Footer, `Button` (`button-dark` primary/secondary/ghost), the final CTA block (`.home-cta`, "Ready to ship more winning ads?" with the home-cta image), the tokens in `tailwind.config.js` and the type classes in CLONE_SPEC §0.6. None of them differ on this template.
- Document height: 2025-pricing is 6717 / 7045 / 7993 (1440 / 991 / 390). facebook-ad-creative is 22932 / 22589 / 29563.

---

## 1. Breakpoints used by this template
| Width | What changes |
|---|---|
| ≥1440 | `.container.blog-container` max-width 832. Main grid is `1fr minmax(752px,1fr) 1fr`, gap 36. |
| 1280–1439 | blog-container 800. Grid `1fr minmax(720px,1fr) 1fr`, gap 24. TOC gets `transition: all .2s`. |
| 992–1279 | Grid gap 16 (base rule). |
| ≤991 | Grid becomes a flex column (`align-items:center`, gap 16). The TOC is `display:none` and the CTA aside moves below the article. Carousel cards are 50vw. |
| ≤767 | Author row becomes a grid. Carousel cards are `calc(100vw - 48px)`. Arrows grow to 44×44. In rich text, h2 margin-top is 32 and table cells get 10px 12px padding. |
| ≤479 | Breadcrumb `display:none`. `.blog-top` padding-top 40. `.blog-main` gap 24. `.blog-body` padding-bottom 24. Card content padding 20/20/16. |

Containers:
- `.container`: max 1440, padding-x 40 / 32 (≤991) / 24 (≤767).
- `.container.blog-container`: max 800 by default and 832 at ≥1440. It uses the same padding, and auto margins centre it. At 1440 the inner width is 752 (x 344→1096). At 991 it is 736 (x 127.5→863.5). At 390 it is 342 (x 24→366).

## 2. Section map (DOM order) with geometry
Format: `x,y,w,h` @1440 | @991 | @390.

### 2.1 Breadcrumb: `section.section > .container.blog-container > .blog-breadcrumb`
- `.blog-breadcrumb`: flex, align center, gap 4, padding 40px 0, margin 0 -8px, overflow hidden. Geometry: 336,72,752,120 | 119.5,72,736,120 | **display:none (≤479)**.
- `a.blog-breadcrumb-link.flex-none` → `/blog`, label "Blog". Flex, gap 5, padding 8, `white-space:nowrap`, color `rgba(255,255,255,.68)`, hover `#fff` (no transition rule). Size 48.8×40. Text inherits body 16/24, −0.18px.
- `.blog-breadcrumb-separator > .text-body-s` "/" (14/20, −0.09px, color inherits `rgba(255,255,255,.36)`), 4.9×20.
- Second link (href `#`) holds `.text-ellipsis` with the post title (`overflow:hidden; text-overflow:ellipsis`). Same link styles.

### 2.2 Title block: `section.section > .container.blog-container > .blog-top`
- `.blog-top`: flex column, gap 24, padding-bottom 40 (≤479 adds padding-top 40). Geometry: 344,192,752,345 | 127.5,192,736,345 | 24,72,342,585.
- `.blog-head` (flex col, gap 8, `text-wrap:balance`) > `.text-white` > `.text-balance` > `h1.text-display-h4`. The h1 is Inter Display 600 28/36, ls −0.2px, #fff, and it **does not change size at any breakpoint**. Height is 72 at 1440 for a 2-line title (144 at 390 for 4 lines).
- `.blog-body` (padding-bottom 40, ≤479 24) > `div > .text-alpha-100 > p.text-body-m`. This is the post's short excerpt/intro (16/24, `rgba(255,255,255,.68)`). Stand-in text: one paragraph of about 180–300 chars.
- `.blog-line`: 1px high, bg `rgba(255,255,255,.1)`, full width of the blog container (752).

### 2.3 Main grid: `div.section > .container > .blog-main-wrapper`
- 1440: `display:grid; grid-template-columns: 268px 752px 268px; gap:36px; align-items:start`. It starts at x 40, y 537 for a 2-line title.
- 991 and 390: flex column, `align-items:center`, gap 16. The wrapper is 927 wide at 991 and 342 at 390. **At ≤991 `.blog-main` takes the full container width (927 at 991), not the 736 blog-container width.**

#### 2.3.1 Left column: TOC `.blog-toc-wrapper` (desktop only)
- `.blog-toc-wrapper`: `position:sticky; top:120px`, 268 wide. `display:none` at ≤991.
- `aside#blog-toc.blog-toc`: flex column, gap 16. It has `transition: all .2s` at ≥1280. `.blog-toc.is-hidden {opacity:0; display:none}`, and the script removes `is-hidden` once there is at least one h2.
- Header: `.text-white > .text-label-m` "Table of contents" (Inter 500 16/24, −0.18px, #fff), height 24.
- `ol#blog-toc-list.blog-toc-list.w-list-unstyled`: flex column, `border-left: 1px solid rgba(255,255,255,.12)`, margin-bottom 10.
- Each `li > a.blog-toc-h2 > .text-body-s` (14/20, −0.09px). The link is `padding:12px; border-left:1px solid transparent; color: rgba(255,255,255,.68); transition: all .15s linear`. A one-line item is 229×44. Long titles wrap, so a two-line item is 64 tall.
  - Hover: color `#fff`.
  - `.is-active`: color `#fff`, `border-left: 1px solid #fff`. It sits over the list's left border (x 41, list border at x 40).
- An unused `.blog-toc-h3` style exists in an embed (a 4px dot `::before` at top 16 / left 20, `rgba(255,255,255,.68)`, white on hover). The TOC script only emits h2 items.
- **TOC script (inline, exact behaviour)**:
  1. On DOMContentLoaded, read `#blog-rtb`. For every `h2` with text, slugify it: lowercase, trim, drop `[^\w\s-]`, collapse whitespace to `-`, and add `-1`, `-2`… for duplicates.
  2. Insert `<span id=slug class="blog-offset-anchor">` before the h2. The span is `position:relative; display:block; height:0; top:-120px; visibility:hidden; pointer-events:none`.
  3. Build `li > a.blog-toc-h2.w-inline-block[href=#slug][data-id] > div.text-body-s`.
  4. Mark the first item active.
  5. On click: `scrollIntoView({behavior:'smooth', block:'start'})` on the anchor, `history.replaceState` with the hash, set active.
  6. Scroll sync: `IntersectionObserver` on every h2 with `rootMargin: '-120px 0px -80% 0px', threshold: 0`. Among intersecting entries, the one with the highest ratio sets the active item (via its previous-sibling anchor id).
  7. On `load` and `hashchange`, jump to the hash, or to the first h2 if there is none (`behavior:'auto'`).

#### 2.3.2 Centre column: `.blog-main`
Flex column, gap 40 (≤479 24). 752 wide at 1440.

1. `.blog-head` (flex col, gap 8):
   - `.blog-cover`: `position:relative; aspect-ratio:1.71; border-radius:20px; overflow:hidden; width:100%`. Geometry: 344,537,752,439.8 | 32,537,927,542.1 | 24,657,342,200.
     - `img.blog-image`: `object-fit:cover; aspect-ratio:1.71; width:100%`, loading lazy, `sizes=100vw`. The source is the entry `image`. Live serves a 1440-wide `-p-1600` variant; we store the `-p-800` variant.
     - `.blog-image-border`: absolute inset 0, `border:1px solid rgba(255,255,255,.16)`, radius 20, pointer-events none.
     - `.blog-cover` is hidden (`w-condition-invisible`) on 16 posts. Use `showCover:false` for those.
   - `.blog-author` (top author row): flex, align center, gap 16, padding 40px 0. Geometry: 344,984.8,752,128 | 32,1087,927,128 | 24,865,342,136.
     - ≤767: `display:grid; grid-template-columns:auto 1fr; grid-template-rows:auto auto; gap:16px; padding 24px 0`. ≤479 padding is 16px 0 and the measured columns are 48px 278px. `.blog-author-links` spans both columns (`grid-column: span 2`, from the Webflow node id) and wraps with gap 8.
     - `.blog-author-avatar` 48×48, radius 999, overflow hidden, position relative. `img.blog-author-avatar-image` 48×48 radius 999. `.blog-author-avatar-border` is absolute inset 0, `1px solid rgba(255,255,255,.16)`, radius 999.
     - `.flex-1 > .flex-col-gap-1.align-start` (flex col, gap 4) holds two lines. Name: `.text-alpha-25 > .text-label-m` (Inter 500 16/24, `rgba(255,255,255,.92)`). Role: `.text-alpha-200 > .text-body-s` (14/20, `rgba(255,255,255,.44)`). 65 posts have an empty role and render no role line.
     - `.blog-author-links` (flex, gap 4, align center): up to 7 icon links `a.blog-author-social-link` (padding 4, color #fff, hover `#fffc` = rgba(255,255,255,.8), 32×38 box with a 24×24 `.icon-medium` icon) in this fixed order: website, linkedin, twitter, instagram, youtube, facebook, tiktok. Only the ones the author has are rendered. Icons: `public/assets/templates/icons/author-social-{website,linkedin,twitter,instagram,youtube,facebook,tiktok}.svg`.
     - The last item is a ghost button "More Articles" with a right chevron. Measured 149.7×40, `button-dark button-ghost`, bg #020308, hover bg `rgba(255,255,255,.1)`. Live, its href is the current post (a Webflow binding quirk). Point it at `/blog`.
2. `.blog-line` (1px, `rgba(255,255,255,.1)`).
3. `.blog-summary` (conditional, `hasSummary`; 117 of 182 posts): flex col, gap 20.
   - `.blog-summary-head`: flex, gap 8. It holds a 24×24 sparkle icon (`icons/blog-summary-sparkle.svg`) and `.text-white > .text-label-l` "30 Second Summary" (Inter 500 18/24, −0.26px; 16px at ≤767).
   - `.blog-summary-body > .blog-rtb > .w-richtext`: same rich-text styles as §3. Typical structure: **one `ul` with 5 items** (52 posts). Other counts: ul(6) 19, ul(4) 15, ul(n) + p 8. Each li is about 120–200 chars of stand-in text.
   - A trailing `.blog-line`.
   - Height 485 at 1440 for a 5-item list.
4. `.blog-body` (padding-bottom 40, ≤479 24) > `div#blog-rtb.blog-rtb > .w-richtext`, the article body (§3).

#### 2.3.3 Right column: `aside.blog-cta` (sticky trial card)
- `position:sticky; top:120px; background: rgba(255,255,255,.1); border-radius:12px`. Geometry: 1132,537,268,290 | 273.1,(after article),444.9,363.9 | 24,(after article),342,331. At ≤991 it sits under the article, centred.
- `.blog-cta-content`: flex col, padding 4, radius 12, text-align center.
  - `a.blog-cta-lightbox-link.w-lightbox`: flex centre, `aspect-ratio:260/144`, radius 8, overflow hidden, bg `rgba(255,255,255,.06)`. Its CSS background image is `https://i.ytimg.com/vi/cv8db4aj7T8/maxresdefault.jpg` (saved as `public/assets/templates/shared/blog-cta-bg_cv8db4aj7T8_maxresdefault.jpg`). Size 260×144 at 1440.
    - `img.blog-cta-lightbox-thumbnail`: absolute inset 0. The file is `6a3419ee7c72f73b41f29845_mqdefault.avif` (320×180), saved as `public/assets/templates/shared/blog-cta-thumbnail_mqdefault.avif`.
    - `.blog-cta-lightbox-play`: 36×36, radius 999, bg `rgba(255,255,255,.06)`, `backdrop-filter: blur(12px)`, z 2. It holds a 16×16 white play triangle (`icons/blog-cta-play.svg`).
    - On click, the Webflow lightbox opens the YouTube video `k40dfSJUfhE` (940×528 embedly iframe). Backdrop is `#000000e6`, the same as the homepage lightbox.
  - `.blog-cta-text`: flex col, align center, padding 12. Title: `.text-white > .text-heading-l` "Start your free trial" (Inter 550 18/24, −0.26px). Body: `.text-alpha-100 > .text-body-m` "Save, organize, share and analyze your next winning ad." (16/24, 0.68, wraps to 2 lines at 236px).
  - `button-dark button-secondary` "Start free trial" → `https://app.foreplay.co/sign-up`, full width 260×42, right chevron at opacity .68.

### 2.4 Related articles: `aside.section.overflow-hidden > .blog-related`
- `.blog-related`: flex col, gap 36, padding 120px 0. Height 994.5 at 1440 and 991, 928.2 at 390.
- Head (`.container.blog-container > .blog-related-head`, flex col, gap 8):
  - `h2.text-heading-l` "Related Articles" (Inter 550 18/24, #fff).
  - `.text-alpha-100 > .text-body-m` "You might also like these reads on similar themes."
- `div[data-carousel].product-carousel` (relative) > `.container.blog-container` > `.product-carousel-viewport` (flex col, gap 48, padding-top 64):
  - `div[data-track].blog-related-list`: flex row, gap 16, padding-bottom 8, `scroll-snap-type: x proximity`, `transition: transform .6s cubic-bezier(.19,1,.22,1)`. The cards overflow to the right of the 752 column. The section clips them (`overflow:hidden` on the aside).
  - Items (`.blog-related-collection-item`): **up to 5 posts sharing the current post's category, in blog order (`order` asc), and the current post may be one of them**. 54 of 60 sampled posts had 5. A few had 0 or 2; with 0, only the empty-state is rendered.
  - Card `a.blog-carousel-card`:
    - Width `40vw`, max 480. ≤991 it is `50vw`, ≤767 `calc(100vw - 48px)`. Measured 480 | 480 | 342.
    - `border-radius:20px; box-shadow: 0 0 0 1px rgba(255,255,255,.1); overflow:hidden; flex:none; scroll-snap-align:start`. No hover rule.
    - `.blog-carousel-card-cover`: `aspect-ratio:465/264`, bg `linear-gradient(rgba(255,255,255,.04), rgba(255,255,255,.08))`. `img.blog-carousel-card-image` is `object-fit:cover`, 100%×100%.
    - `.blog-carousel-card-content`: flex col, gap 16, padding 32px 24px 24px. ≤767 adds flex 1. ≤479 padding is 20/20/16.
      - `.blog-carousel-card-author` (flex, gap 12): a 28×28 round avatar and `.text-label-s` author name (Inter 500 14/20, #fff).
      - `.blog-carousel-card-text` (flex col, gap 8): title `.text-label-l` (500 18/24, #fff, 2-line clamp on the parent) and excerpt `.line-clamp-2 > .text-alpha-100 > .text-body-m` (2-line clamp).
    - Card height 506.5 at 1440 and 402 at 390.
  - `.slide-arrows`: flex centre, gap 24. Two `a.carousel-arrow[data-dir=left|right]`, each 36×36 (≤767 44×44), radius 200vw, bg `rgba(255,255,255,.06)`, color `rgba(255,255,255,.16)`, `transition: all .2s`. Hover: bg `rgba(255,255,255,.16)`, color `rgba(255,255,255,.92)`. `.is-disabled` sets `opacity:.5; pointer-events:none`. The icon is 18×18 (`icons/carousel-arrow-left.svg`, `icons/carousel-arrow-right.svg`).
  - **Carousel script (inline, exact)**:
    1. `stride = first card width + track gap`.
    2. On a click, `current ± 1` (clamped 0…slides−1). Then set `track.style.transform = translateX(-current*stride px)` and toggle `is-disabled`/`aria-disabled`/tabIndex on the arrows. The left arrow is disabled at 0 and the right at the last slide.
    3. A 300ms lock blocks rapid clicks.
    4. Re-measure on resize/orientationchange, debounced 200ms.
    5. No autoplay. Swipe handlers are stubbed out on live.

### 2.5 Bottom author row: `section.section > .container.blog-container > .blog-author`
An exact duplicate of §2.3.2's author row (avatar, name/role, socials, "More Articles"), inside the 752 blog container. Geometry: 344,(after related),752,128.

### 2.6 Final CTA
The shared `.home-cta` section. Its height is 1037.5 / 801.6 / 643.3.

## 3. Rich text (`.blog-rtb .w-richtext`), full computed styles
The base is `.blog-rtb { color: rgba(255,255,255,.84); font: 400 16px/24px Inter; letter-spacing: -0.18px }`. A post-template style block (present on all posts) overrides the margins. Final computed values at 1440:

| Element | Font | Size / LH | Weight | Color | Margin | Other |
|---|---|---|---|---|---|---|
| `p` | Inter | 16/24 | 400 | .84 white | 0 0 16px | Webflow inserts empty `<p>‍</p>` spacers often. Keep them as 24px lines. |
| `h2` | `"Inter Display", Inter, system-ui, sans-serif` | 28/36 | **700** (synthesised from the 600 face plus browser bold; the Inter 700 file is loaded) | .84 | **40px 0 16px** (≤767 32px top) | ls −0.18px |
| `h3` | Inter Display | 24/32 | 700 | .84 | **28px 0 12px** | |
| `h4` | Inter Display | 20/32 | **400** | .84 | 12px 0 8px | `strong` inside h4 → 700 |
| `h5` | Inter Display | 18/24 | 700 | .84 | 8px 0 4px | |
| `h6` | Inter Display | 16/24 | 700 | .84 | 10px 0 | |
| `h1` (rare inside body) | Inter | 38/44 | 700 | .84 | 20px 0 10px | |
| `a` (not `.w-inline-block`) | inherits | | 500 | #fff | | `text-decoration: underline; text-decoration-color: rgba(255,255,255,.4); text-decoration-thickness:1px; text-underline-offset:3px; transition: text-decoration-color .15s ease`. Hover: decoration-color #fff. |
| `strong` | | | 700 | inherits | | |
| `em` | | | | | | italic |
| `ul` / `ol` | 16/24 | | | .84 | 16px 0 | `display:flex; flex-direction:column; gap:12px; padding-left:24px; overflow:hidden`. Markers: disc / decimal, colour .84, 16px. |
| `li + li` | | | | | margin-top 6px (so 12+6 = 18 between items) | |
| `blockquote` | Inter | **18/22** | 400 | `#CACACE` rgb(202,202,206) | 16px 0 | `padding:10px 20px; position:relative; border-left:none`. `::before` is an absolute white bar, 3px wide, full height, at left 0. |
| `figure.w-richtext-figure-type-image.w-richtext-align-fullwidth` | | | | | 24px 0 | `display:block; width:100%; max-width:100%; text-align:center`. Inner `div` is inline-block. |
| `figure img` | | | | | **32px 0** | `border-radius:20px; width:100%`. In practice a 752-wide image renders 752×423 for 16:9, inside a 522–564px figure. |
| `figcaption` | Inter | 16/24 | 400 | .84 | top 5px | centred. Links inside follow the `a` rule. |
| `figure.w-richtext-figure-type-video` | | | | | 32px 0 | `border-radius:20px; overflow:hidden; background: rgba(255,255,255,.04); box-shadow: 0 0 0 1px rgba(255,255,255,.08)`. Webflow ratio box (padding-bottom ≈ 56.2%). Iframe absolute and 100%, radius 20. ≤767: radius 12. |
| `.w-embed.w-iframe` | | | | | 32px 0 | YouTube iframes: `display:block; width:100%; aspect-ratio:16/9; border:0; border-radius:20px` (≤767 12px). |
| `.w-embed` (tweet / instagram / tiktok blockquote embeds) | | | | | 0 | third-party widgets (twitter `div.twitter-tweet` max 550). Render a placeholder card. |
| `pre.w-code-block` | monospace | 16/24 | | `#f8f8f2` on `#2b2b2b` | 0 | `padding:8px; white-space:pre; overflow-x:auto` (Webflow highlight.js theme). Inner `code` is `display:block; padding:8px; white-space:pre-wrap`, one block `span` per line. |
| inline `code` | monospace | 16/24 | | .84 | | no background |
| `.fp-table-wrap` | | | | | 24px 0 | `overflow-x:auto; border:1px solid rgba(255,255,255,.12); border-radius:12px` |
| `table` | Inter | **14/20** | | .84 | | `width:100%; border-collapse:collapse` |
| `th`, `td` | | | | | | `padding:12px 16px` (≤767 10px 12px). `text-align:left; vertical-align:top; border-bottom:1px solid rgba(255,255,255,.08)`. |
| `thead th` | | | 600 | #fff | | `background: rgba(255,255,255,.06); white-space:nowrap` |
| `tbody td:first-child` | | | 500 | #fff | | last row has no border |
| `.fp-table-compare` | | | | | | `min-width:600px` at ≤767. Last column bg `rgba(255,255,255,.04)` (head `.10`). |
| `.fp-callout` | | | | | 24px 0 | `padding:20px 24px; border:1px solid rgba(255,255,255,.14); border-radius:12px; background: rgba(255,255,255,.04)` |
| `.fp-callout-title` | Inter | 13px | 600 | #fff | 0 0 8px | `letter-spacing:.06em; text-transform:uppercase` |
| `.fp-callout ul` | | | | | 0 | `padding-left:20px`. `li+li` margin-top 8. |
| `.rt-anchor` | | | | | | `display:block; height:0; scroll-margin-top:120px` (in-body anchor targets) |
| `sup`/`sub` | | 12px | | | | |
| `hr` | | | | | 48px 0 | `border-top:1px solid rgba(255,255,255,.1)` |
| `.blog-rtb > :first-child` / `:last-child` | | | | | top 0 / bottom 0 | |

The whole style block above is embedded once per post page. Port it verbatim into a `.blog-rtb` CSS module.

## 4. Typical body-block structure (for stand-in rich text)
Measured over 182 posts. Values are p25 / median / p75 / max.
- Words: 542 / 1247 / 2474 / 7398.
- h2: 2 / 5 / 8 / 17. h3: 0 / 7 / 21 / 46. h4: 0 / 0 / 3 / 55.
- p: 23 / 49 / 90 / 233. ul: 0 / 1 / 4 / 26. ol: 0 / 0 / 1 / 7.
- Image figures: 2 / 5 / 9 / 22. Video figures/iframes: 0 / 0 / 1 / 10.
- Rare: blockquote in 7 posts, table in 1, pre in 1.

Stand-in recipe for a median post:
1. intro p ×3 (about 300 chars each)
2. Repeat 5 times: h2, then p ×2, then [h3 + p ×2] ×1–2, then a figure image
3. Somewhere in that, one ul of 4–6 items (each li 60–140 chars with a leading `<strong>` label)
4. Closing h2 with p ×2

Use `body.{h2,h3,…}` in `post.json` to size it per entry.

## 5. Colors used (exact)
- Page bg `#020308`. Body text `rgba(255,255,255,.36)`. Titles #fff. Excerpt/secondary `rgba(255,255,255,.68)`. Rich text `rgba(255,255,255,.84)`. Author name `rgba(255,255,255,.92)`. Author role `rgba(255,255,255,.44)`. Blockquote `#cacace`.
- Lines `rgba(255,255,255,.1)`. TOC rail `rgba(255,255,255,.12)`. Image/avatar borders `rgba(255,255,255,.16)`. Card ring `rgba(255,255,255,.1)`. CTA card bg `rgba(255,255,255,.1)`. Lightbox/play bg `rgba(255,255,255,.06)`.

## 6. Radii and shadows
Cover 20 (border overlay 20). Rich-text images 20. Video figure 20 (≤767 12). Table wrap / callout 12. CTA card 12. Lightbox thumb 8. Play bubble 999. Carousel card 20 with ring `0 0 0 1px rgba(255,255,255,.1)`. Arrows full round. Avatars 999.

## 7. Motion summary
- IX2: one event `e-109` PAGE_SCROLL → action list `a-43` "Blog Scroll Bar". It scales the X of an element (data-w-id `2b2d7fe3-617c-3d55-b396-7f71ebbf43bc`) from 0 to 1 across the scroll progress, smoothing 50. **That element is not in the live post DOM**, so no progress bar renders. Do not build one (optional: a 2px top bar scaleX 0→1 if a progress bar is wanted, but live shows none).
- TOC: sticky, IntersectionObserver active state, `.15s linear` colour/border transition, smooth scroll on click (§2.3.1).
- CTA aside: sticky `top:120px`. TOC wrapper: sticky `top:120px`.
- Carousel: transform `.6s cubic-bezier(.19,1,.22,1)` on arrow click.
- Hovers: breadcrumb link → #fff. Social icon → .8 white. Rich-text link underline colour .4 → 1 (.15s). Carousel arrows (.2s). Buttons per the shared `Button`.
- No load or scroll-reveal animations (`document.getAnimations()` was empty).
- Fonts loaded on posts: Inter 400/500/600/**700** (the homepage does not load it; another agent already saved it as `public/assets/pages/lens-creative-analytics/62a4ee4863aafab209e40961_Inter-Bold.otf`, so add an `@font-face` for weight 700 that points at it) and Inter Display 600.

## 8. Fields that vary per entry and the JSON shape
`src/data/post.json` entries (already filled for all 184):
```json
{
  "slug": "2025-pricing",
  "title": "We're Changing Our Pricing (And What It Means for You)",
  "author": "zachary-murray",            // authors.json slug (null if unmatched)
  "authorName": "Zachary Murray",
  "authorRole": "Founder of Foreplay.co", // "" for "Foreplay Team" etc → hide role line
  "authorAvatar": "/assets/templates/authors/…webp",
  "image": "/assets/templates/post/…-p-800.png", // cover (also used by cards)
  "showCover": true,                      // false → hide .blog-cover (16 posts)
  "categories": ["foreplay-ships"],       // category.json slugs, used for related list
  "readTime": 3, "readTimeEstimated": true, // live shows read time only in /blog "Popular" (4 posts); others ≈ words/230
  "updated": "2025-06-10",                // sitemap lastmod (no publish date is rendered or exposed on live)
  "order": 42,                            // index in /blog listing (newest first), use for sorting
  "hasSummary": false,                    // render .blog-summary block
  "body": {"words":514,"h2":4,"h3":0,"h4":5,"p":30,"ul":1,"ol":0,"img":1,"video":0,"blockquote":0,"table":0,"code":0}
}
```
Other per-entry values:
- Excerpt paragraph (`.blog-body p`). Not collected under the copy policy. Generate stand-in text of about 200 chars.
- Author social links: derive from `authors.json[author].socials`.
- Related list: derived from `categories` and `order`.

Not rendered on live: publish date, category chip, read time. Do not add them to the post page.

## 9. Not measurable / caveats
- The third-party embeds in bodies (Twitter, Instagram, TikTok, `embed.foreplay.co` ad players) are external widgets. Use placeholders.
- The Webflow lightbox UI is the standard `w-lightbox` (same as the homepage hero video lightbox).
- The "More Articles" button points at the current URL on live. That is a CMS binding bug, and `/blog` is the sensible target.
