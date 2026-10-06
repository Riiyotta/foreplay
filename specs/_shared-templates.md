Source: https://www.foreplay.co/

# Shared building blocks for the CMS templates (`/post`, `/experts`, `/faqs`, `/authors`, `/events`, `/agencies`, `/videos`, `/category`, `/university`, `/bounties`)

Measured 2026-10-06 with Node Playwright (headless Chromium) at 1440×900, 991×900 and 390×844, using computed styles plus the live shared CSS (`reference/webflow.css`). Each pattern below is defined once. The `template-<collection>.md` files reference these IDs (S1…S9) and list only their own differences and fields.

Global pieces are not re-specced. Navbar and Footer (with CalendarPopup and ExitIntentModal) are mounted in `src/App.jsx`. Buttons use `Button` from `src/components/shared.jsx`. The final "Ready to ship more winning ads?" block uses `CTA` from `src/components/CTA.jsx`, and it ends **every** template. The `[data-carousel]` slider script and the `.section-head` pattern are in `specs/_shared-pages.md` §1 and §4. `.section-white-block` follows the homepage BeforeAfter block.

| ID | Pattern | Used by | Canonical spec |
|---|---|---|---|
| S1 | `BlogBreadcrumb` | post, faqs, authors, events, agencies, bounties, experts (inside hero) | below |
| S2 | `BlogTop` title block + `.blog-line` | post, faqs, authors, events, bounties | below |
| S3 | `RichText` (`.blog-rtb .w-richtext`) | post (full set), events, bounties, agencies (`.ad-rich-text`) | `template-post.md` §3 (full table). Differences per template are listed below |
| S4 | `BlogListCard` grid (`.blog-list` / `.blog-list-card`) | category, authors | below |
| S5 | `BlogCarouselCard` + `[data-carousel]` | post (related) | `template-post.md` §2.4 |
| S6 | `FiresideReplayRow` (`.fireside-replay-item`) | authors, (fireside-replays page) | below |
| S7 | `EventMeta` (`.fireside-event-detail-item`: headshot + name, calendar + date) | events, authors, replay rows | below |
| S8 | `ProfileHeadshot` + `SocialIconList` | experts, authors | below |
| S9 | `CenteredHero` (`.fireside-hero` / `.demo-hero` + `.section-head`) | category, videos, university/classes | below |
| S10 | `ResponsiveVideo` (`.w-video` 16:9 box with embedly/YouTube iframe) | events, videos, bounties, university course | below |
| S11 | `LeftRightSection` (`.left-right-section`) | university (both) | same component as api/mcp pages (see `api.md`) |

---

## S1 BlogBreadcrumb
- Wrapper: `section.section > .container.blog-container` (or `.container` on agencies) `> .blog-breadcrumb`.
- `.container.blog-container`: max-width 800, and 832 at ≥1440. Padding-x 40 / 32 (≤991) / 24 (≤767), centred. Inner width 752 @1440, 736 @991, 342 @390.
- `.blog-breadcrumb`: `display:flex; align-items:center; gap:4px; padding:40px 0; margin:0 -8px; overflow:hidden; width:100%`. Height 120. **`display:none` at ≤479.**
- Crumb `a.blog-breadcrumb-link`: `display:flex; align-items:center; gap:5px; padding:8px; white-space:nowrap; overflow:hidden; color: rgba(255,255,255,.68)`, hover `#fff` (no transition). Text inherits Inter 16/24, −0.18px. The first crumb has `.flex-none` (flex:none). The last crumb's text is wrapped in `.text-ellipsis` (`overflow:hidden; text-overflow:ellipsis`) with href `#`.
- Separator: `.blog-breadcrumb-separator > .text-body-s` "/" (14/20, −0.09px, colour `rgba(255,255,255,.36)`), 4.9×20.
- Measured: crumb row y 112–152 @1440; the first crumb box is 48.8×40 for "Blog".

## S2 BlogTop
- `section.section > .container.blog-container > .blog-top`: `display:flex; flex-direction:column; gap:24px; padding-bottom:40px`. ≤479 adds `padding-top:40px` (the breadcrumb is hidden there).
- `.blog-head` (flex col, gap 8, `text-wrap:balance`) `> .text-white > .text-balance > h1.text-display-h4`. The h1 is Inter Display 600, 28px/36px, ls −0.2px, #fff, **unchanged at all widths**.
- Optional `.blog-body` (padding-bottom 40, ≤479 24) with `.text-alpha-100` copy (16/24, `rgba(255,255,255,.68)`).
- `.blog-line`: `height:1px; background: rgba(255,255,255,.1)`. In post it sits inside `.blog-top` (752 wide). In faqs, authors, events and bounties it sits in a sibling `div.container` (full container width: 1360 @1440, 927 @991, 342 @390).

## S3 RichText differences
- `.blog-rtb` base: `color: rgba(255,255,255,.84); font: 400 16px/24px Inter; letter-spacing:-0.18px`.
  - Heading font is `"Inter Display", Inter, system-ui`.
  - h2 28/36 margin 24 0 16. h3 24/32 margin 16 0 12. h4 20/32 (weight 400) margin 12 0 8. h5 18/24 margin 8 0 4. h6 16/24. Headings other than h4 render at 700.
  - ul/ol: `display:flex; flex-direction:column; gap:12px; margin:16px 0; padding-left:24px`.
  - blockquote: 18/22, `#cacace`, padding 10px 20px, white 3px `::before` bar.
  - hr: 48px margins, `rgba(255,255,255,.1)`.
  - a: weight 500, #fff, underline on hover. img: radius 20, margin 32 0.
  - `p` margin **0** (only posts override this to 0 0 16).
- **Post only** adds the per-template style block (p 0 0 16, li+li 6, h2 top 40/32, h3 top 28, underline links with offset 3, video/table/callout styles). See `template-post.md` §3.
- **Agencies** use `.ad-rich-text` inside `.blog-rtb`: `p {margin-bottom:16px}`. Everything else is as the base.
- **FAQ and Author bios** are plain `.w-richtext` with no `.blog-rtb`. `p` margin 0. Links are Webflow default `#3a6ffb`, no underline. Colour is inherited (.68 for FAQ answers, #fff for author bios).

## S4 BlogListCard grid
- `.blog-list`: `display:grid; grid-template-columns:1fr 1fr 1fr`. Gap 16 below 1280, 20 at 1280–1439, 24 at ≥1440. ≤767 2 columns, ≤479 1 column. `.block-list-item` uses `align-self:stretch`.
- `a.blog-list-card`: `background:#020308; border-radius:20px; box-shadow: 0 0 0 1px rgba(255,255,255,.1); overflow:hidden; height:100%; transition: all .2s`. Hover: `background: rgba(255,255,255,.03)` (`#ffffff08`) and `box-shadow: 0 0 0 1px rgba(255,255,255,.2)`.
  - `.blog-carousel-card-cover`: `aspect-ratio:465/264`, bg `linear-gradient(rgba(255,255,255,.04), rgba(255,255,255,.08))`. `img.blog-carousel-card-image` uses `object-fit:cover; width:100%; height:100%`.
  - `.blog-carousel-card-content`: flex col, gap 16, padding 32px 24px 24px. ≤767 adds `flex:1`. ≤479 padding is 20px 20px 16px.
    - `.blog-carousel-card-author`: flex, gap 12. A 28×28 round avatar (`.blog-carousel-card-author-avatar`, radius 999, overflow hidden) and the author name (`.text-white > .text-label-m`, Inter 500 16/24 on category/author grids; `.text-label-s` 14/20 in the post carousel).
    - `.blog-carousel-card-text`: flex col, gap 8, align start. Title is `.text-label-l.line-clamp-2` (Inter 500 18/24, −0.26px, #fff; 16px ≤767). Excerpt is `.line-clamp-2 > .text-alpha-100 > .text-body-m` (16/24, .68). Excerpts are not collected, so use about 120 chars of stand-in.
- Measured card sizes: category grid 405.3×440.1 @1440, 298.3×379.4 @991, 342×384.2 @390 (the cover is 405.3×230). In the author page's 752 column the cards are 234.7×343.2 @1440.

## S6 FiresideReplayRow
Defined in `template-authors.md` §1.5 (the measured instance). Summary:
- Box: `display:flex; align-items:center; gap:24px; padding:8px 24px 8px 8px; border:1px solid rgba(255,255,255,.1); background:#020308; border-radius:20px`.
- Thumbnail 162×92, radius 12.
- Content: S7 meta row, then a 2-line `.text-label-m` title.
- `Button` secondary "Watch".
- ≤767 it becomes a 2-col grid with padding 16. ≤479 it is a single column with a full-width thumbnail.
- List: flex col, gap 24.

## S7 EventMeta
- `.fireside-event-details-wrapper`: flex, gap 24 (≤479 column, gap 16). The `.event-details-left` variant is a column with gap 12 and becomes a **row at ≥1280**. `.flex-row` forces a row.
- `.fireside-event-detail-item`: `display:flex; align-items:center; gap:9px; color: rgba(255,255,255,.68); white-space:nowrap; overflow:hidden; text-overflow:ellipsis`.
  - Item 1: `.fireside-event-author-headshot` (24×24, radius 100, `background-size:cover`) plus the name.
  - Item 2: a 24×24 calendar SVG (`public/assets/templates/icons/event-calendar.svg`) plus the date ("March 5, 2024" format).
  - Label class: `.text-label-m` (16/24, 500) in event heads and upcoming cards, `.text-label-s` (14/20) in replay rows. Colour wrapper is `.text-alpha-50` (.84) or `.text-alpha-100` (.68).

## S8 ProfileHeadshot + SocialIconList
- `.author-page-headshot`: 96×96 (≤991 80, ≤767 64), `border:1px solid rgba(255,255,255,.1); border-radius:10px; overflow:hidden`. The img fills it.
- `ul.footer-social-links-list.w-list-unstyled`: `display:flex; gap:6px; margin-bottom:10px`.
  - `li.footer-social-links-item`: 28×28, `opacity:.68; transition: all .2s`, hover opacity 1.
  - `a.footer-social-link > .icon-large` holds a 28×28 white SVG.
  - Icons: `public/assets/templates/icons/expert-social-{facebook,instagram,linkedin,tiktok,twitter,website,youtube}.svg`.
  - Render only the networks present in the entry's `socials`.

## S9 CenteredHero
- `.fireside-hero`: flex col, centred, `text-align:center`, padding 80/80 (≤767 40/40), position relative. It sits inside a `.container`.
- An empty `canvas#product-hero-canvas` (0×0, display:none ≤991) is inert on these pages, so skip it.
- `.product-hero-content`: flex col, gap 28 (≤479 gap 24, padding-bottom 24) > `.section-head` (720 max, gap 12, centred) > `.section-head-wrapper` (flex col, gap 12):
  - `.section-head_subtitle > .text-overline` (Inter 550 12/16, ls 2px, uppercase, `rgba(255,255,255,.36)`).
  - `.section-head_title > h1.text-display-h2` (#fff, Inter Display 600 44/53.76, ls −0.33; ≤991 40/52; ≤479 36/48).
  - `.section-head_paragraph` (max 512, `text-wrap:pretty`) `> .text-alpha-100 > p.text-body-l` (18/28, −0.26px, .68).
- `.demo-hero` (videos) is the same idea: flex col, centred, padding 120/120 (≤767 80/80, ≤479 40/40), inside a `.container.section-container` (max 1344, padding-x 40/32/24).

## S10 ResponsiveVideo
- `.w-video.w-embed`: `position:relative; padding-top:56.206%` (embedly 940×528 ratio). The iframe is `position:absolute; inset:0; width/height 100%`.
- Live wraps YouTube in `cdn.embedly.com/widgets/media.html?...`. Build it as `https://www.youtube.com/embed/<youtubeId>` with `allow="autoplay; fullscreen; encrypted-media; picture-in-picture"` and `allowfullscreen`.
- Frame styling differs per template:
  - events: wrapper `border:1px solid #171920; border-radius:28px`.
  - bounties: `border:1px solid #24262e; border-radius:16px`.
  - videos: no frame, `overflow:hidden`.
  - course: `border:1px solid rgba(255,255,255,.12)` with bottom border #171920, radius 15.
