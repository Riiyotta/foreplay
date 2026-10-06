Source: https://www.foreplay.co/category/ad-briefs

> Shared patterns are defined in `specs/_shared-templates.md`. This template uses S9 (centred hero) and S4 (blog card grid). Navbar, Footer and `CTA` come from src/components.

# Template: Blog category (`/category/:slug`)

- Data: `src/data/category.json` (15 entries). Measured `/category/ad-briefs` (17 posts) and `/category/ad-inspiration`. The DOM is identical, and only the number of grid rows differs (docH 4405/4249/9442 vs 11322/10208/26725).
- `saas-operators-podcast` has 0 posts, so it shows the Webflow empty state ("No items found." in a `#ddd` box, padding 20). You may hide it.
- Method: Node Playwright at 1440/991/390.

## 1. Section map

### 1.1 Hero: `section#product-hero-section.section.relative > .container > .fireside-hero` (S9)
- Padding 80/80 (≤767 40/40). Geometry: 40,72,1360,337.8 | 32,72,927,336 | 24,72,342,304.
- `.product-hero-content` > `.section-head`:
  - Overline "Categories" (the same for every entry).
  - `h1.text-display-h2` = category `title`.
  - `p.text-body-l` description (512 max, .68, 3 lines ≈ 84px @1440, 4 lines @390; about 150 chars). **Not collected**, so use stand-in text.
- The inert `canvas#product-hero-canvas` is 0×0. Skip it.

### 1.2 Feed: `div.section > .container.section-container > .blog-feed`
- `.container.section-container`: max 1344, padding-x 40/32/24.
- `.blog-feed`: flex col, gap 36, padding-bottom 120.
- **Topic chips** `.blog-categories`:
  - Box: `display:flex; align-items:flex-start; gap:15px; padding:36px 0; border-top:1px solid rgba(255,255,255,.1); border-bottom:1px solid rgba(255,255,255,.1)`. ≤991 it is a flex column. Geometry: 88,409.8,1264,146 | 32,408,927,225 | 24,376,342,385.
  - `.categories-title` (flex none): `.text-alpha-100 > .text-body-m` "Topics & Categories:" (16/24, .68), 151.9 wide.
  - `.collection-list-6`: `display:flex; flex-wrap:wrap; gap:.5em (8px)`. All 15 categories in `tagOrder` order. Each is `a.blog-tag` → `/category/<slug>`:
    - Box: `padding:6px 12px; border-radius:10px; box-shadow: 0 0 0 1px rgba(255,255,255,.1); color: rgba(255,255,255,.92); transition: all .2s`. Hover bg `rgba(255,255,255,.06)`.
    - Label `.text-body-s` (14/20, −0.09px). 32 tall.
    - The current category carries `w--current` with **no distinct style** on live. You may add one, but it's optional.
- **Post grid** `.blog-list-wrapper > .blog-list` (S4):
  - 3 columns (gap 24 @1440, 16 @991; 1 column @390). Column widths 405.33 / 298.33 / 342. Card heights 440.1 / 379.4 / 384.2.
  - Lists **every post** whose `categories` includes this slug, in blog `order` (newest first). No pagination (the max is well under Webflow's 100).
  - Card fields: post `image`, `authorAvatar`, `authorName`, `title`, and an excerpt (stand-in).

### 1.3 Final CTA
Uses `CTA` from src/components.

## 2. Motion
No IX2. Hovers only: tags (.2s bg) and cards (S4 hover).

## 3. JSON shape (`src/data/category.json`, filled for all 15)
```json
{ "slug": "ad-briefs", "title": "Ad Briefs", "overline": "Categories", "postCount": 17, "tagOrder": 7, "updated": "2024-06-14" }
```
Varies per entry: title, description (stand-in), and the post list (derived from `post.json[].categories`).
