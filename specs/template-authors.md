Source: https://www.foreplay.co/authors/aaron-nosbisch

> Shared patterns (breadcrumb S1, title block S2, rich text S3, cards S4–S7, headshot/socials S8, hero S9, video S10) are defined once in `specs/_shared-templates.md`. Where this file repeats one of them, the details are the measured instance for this template.

# Template: Author profile (`/authors/:slug`)

- Data: `src/data/authors.json` (43 entries). Measured `/authors/aaron-nosbisch` (no blog posts, 1 replay) and `/authors/zachary-murray` (61 posts, 2 replays). The DOM is identical apart from the posts list being empty or filled.
- Method: Node Playwright at 1440/991/390, computed styles plus live CSS.
- Document height: aaron 3220 / 3140 / 3945. zachary 10941 / 10725 / 28421.
- Reuse: Navbar and Footer (global). Final CTA uses `CTA` from src/components. Breadcrumb and `.blog-line` are the same as `template-post.md` §2.1–2.2. The blog card is the same `.blog-list-card` as `template-category.md` §1.3. The replay row is the same as `template-events.md` §1.5.

## 1. Section map

### 1.1 Breadcrumb (`.blog-breadcrumb` in `.container.blog-container`)
"Authors" (href `#`, no listing page exists), "/", then the name. Same styles as the post breadcrumb. Hidden ≤479.

### 1.2 Author hero: `section.section > .container.blog-container > .blog-top > .blog-head > .text-white > .author-page-hero`
- `.blog-top`: flex col, gap 24, padding-bottom 40 (≤479 padding-top 40).
- `.author-page-hero`: flex col, gap 10. Geometry: 344,192,752,349 | 127.5,192,736,357 | 24,112,342,413. Children:
  1. `.author-page-headshot`: 96×96 (≤991 80, ≤767 64), `border:1px solid rgba(255,255,255,.1)`, radius 10, overflow hidden. Holds `img` = `avatar` (cover).
  2. `.author-page-title` (flex col, gap 5):
     - `h1.text-display-h4` name: Inter Display 600 28/36, −0.2px, #fff, the same at every width.
     - `.text-alpha-100 > .text-label-m` role: Inter 500 16/24, `rgba(255,255,255,.68)`. 9 authors have no role.
     - `a.author-website-link` (inline): the website URL as visible text, 14/20 (measured 176.6×20; the font size comes from the link's context, `rgba(255,255,255,.68)`). `transition: all .2s`, hover #fff and underline. Optional (`website`).
  3. `.w-richtext` bio: 16/24, color #fff (inherits `.text-white`), `p` margin 0. Links are Webflow default `#3a6ffb`. 31 of 43 authors have a bio. Paragraph counts are in `bioParagraphs` (mostly 1, max 3, about 170–940 chars). **Bio text not collected**, so use stand-in text.
  4. `ul.footer-social-links-list`: flex, gap 6, margin-bottom 10. Each `li` is 28×28, opacity .68, hover 1, `transition: all .2s`. Slot order: facebook, instagram, linkedin, tiktok, twitter, youtube (only filled ones render). Icons: `public/assets/templates/icons/expert-social-*.svg`, the same glyph set.
- Then `div.container > .blog-line` (full container width, 1px `rgba(255,255,255,.1)`) at y 581 (zachary at 1440).

### 1.3 Spacer: `div.v-padding-50`
Padding 25/25, so 50 tall.

### 1.4 "Blogs": `div.section > .container.blog-container > .blog-feed`
- `.blog-feed`: flex col, gap 36, padding-bottom 120.
- `.blog-related-head > .text-white > h2.text-heading-l` "Blogs" (Inter 550 18/24, −0.26px, #fff).
- `.blog-list-wrapper.w-dyn-list`:
  - **Empty** (27 authors): `.empty-state.w-dyn-empty > div` "No items found." This is Webflow's default empty state: padding 20, bg `#ddd`. Live shows that grey box. Render it as-is, or hide the section (recommended, since live looks broken).
  - **Filled**: `.blog-list` grid, `1fr 1fr 1fr` gap 24 at ≥1440 (20 at 1280–1439, 16 below). ≤767 2 columns, ≤479 1 column. Because it sits in the 752 blog container, the columns are **234.66 wide at 1440** (cards 343.2 tall) and 234.7 at 991. At 390 there is 1 column of 342 (cards 384). The card is `a.blog-list-card`, identical to the category grid card (`template-category.md` §1.3), with a 28px avatar plus `.text-label-m` author name.
  - Lists **all** that author's posts (zachary: 61), newest first (`post.json` `order`). No pagination.

### 1.5 "Fireside Replays": second `div.section > .container.blog-container > .blog-feed`
- Same heading style: "Fireside Replays".
- `.fireside-replay-list`: flex col, gap 24. Items are the author's events (`events.json` where `speakerSlug === slug`). 24 authors have at least 1. When there are none, Webflow renders the same "No items found." empty box.
- Item `.fireside-replay-item`:
  - Flex row, align center, gap 24, padding 8px 24px 8px 8px, `border:1px solid rgba(255,255,255,.1)`, bg #020308, radius 20. 752×110 at 1440.
  - ≤767: grid `auto 1fr`, gap 16, padding 16. ≤479: 1 column with rows thumb / content / button (measured 342×370.9).
  - `img.fireside-replay-thumbnail`: 162×92 (`aspect-ratio:162/92`), `object-fit:cover`, radius 12, `border:1px solid rgba(255,255,255,.06)`. ≤479 full width (308×174.9). Source = event `thumbnail`.
  - `.fireside-replay-list-content` (flex 1, flex col, gap 8, padding 8/0, ≤479 padding-bottom 0):
    - `.fireside-event-details-wrapper.event-details-left.flex-row` (flex row, gap 12). Two `.fireside-event-detail-item`s (flex, gap 9, `rgba(255,255,255,.68)`, nowrap ellipsis):
      - [24×24 round headshot (bg-image) + `.text-alpha-50 > .text-label-s` speaker name (Inter 500 14/20, `rgba(255,255,255,.84)`)]
      - [24×24 calendar icon (`icons/event-calendar.svg`) + `.text-label-s` date "February 22, 2024"]
    - `.text-white > .text-label-m.line-clamp-2`: event title (Inter 500 16/24, #fff, 2-line clamp).
  - `.fireside-replay-list-button` (align-self center; ≤767 full width, flex col): `button-dark button-secondary` "Watch" with chevron (98.5×42) → `/events/<slug>`.

### 1.6 Final CTA
Uses `CTA` from src/components.

## 2. Colors, motion
- Colors as listed. Card ring `rgba(255,255,255,.1)`. Card hover bg `#ffffff08` with ring `rgba(255,255,255,.2)` (`.blog-list-card:hover`, `transition: all .2s`).
- No IX2 and no scroll animations. The only motion is the hovers (cards, social icons, website link, buttons).

## 3. JSON shape (`src/data/authors.json`, filled for all 43)
```json
{
  "slug": "zachary-murray",
  "title": "Zachary Murray",
  "name": "Zachary Murray",
  "role": "Founder of Foreplay.co",
  "website": "https://www.foreplay.co",
  "avatar": "/assets/templates/authors/…webp",
  "socials": {"linkedin": "…", "instagram": "…"},
  "postCount": 61,
  "replayCount": 2,
  "bioParagraphs": 2,
  "updated": "…"
}
```
Varies per entry: name, role, website, avatar, bio (stand-in), socials, and the post and replay lists. Posts link via `post.json[].author` and replays via `events.json[].speakerSlug`.
