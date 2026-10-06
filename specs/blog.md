Source: https://www.foreplay.co/blog

# /blog: "Foreplay Blog | Ad Creative, Facebook Ad Library & More"

**Method and conventions:** see `specs/_shared-misc.md` (method, shared components, copy policy). **Raw dumps:** `specs/_measure/blog-{1440,991,390}.txt`. **Data:** `specs/data/blog.page-data.json` holds featured/popular/category/card lists with local image paths. Post titles and slugs are in `src/data/post.json`. Webflow page id `647668309e49d3c3f7a76520`. Doc height: 7211 @1440, 7311 @991, 14238 @390.

## Section map (DOM order)

| # | Section | y/h @1440 | Reuse |
|---|---|---|---|
| 1 | Hero + featured/popular grid (`section#product-hero-section > .fireside-hero`) | 72 / 992 | M1 hero (`_shared-misc.md`) + **new** `BlogHeaderGrid` |
| 2 | "Explore More Blogs" head, category tags, list grid, pagination (`div.section > .blog-feed`) | 1064 / 4177 | **new** `BlogCategories`; grid = **S4** `BlogListCard`; **new** pagination |
| 3 | Final CTA | 5241 / 1038 | `CTA` from src/components |
| — | Footer | 6319 | global |

## 1. Hero
- M1 hero inside `.container.section-container`. Overline h1 "BLOG". Title h2 "Free insights and guides for better ad creative" (2 lines @1440/991, 3 lines @390). There is no paragraph or button.
- `.section-content-main`: padding-top 48 (@390: 40).

### 1a. `.blog-header-grid` (Webflow grid)
- @1440: 6 cols × 169px, column-gap 50, row-gap 16, one row of 616. 1264×616 at y368.
  - Featured spans cols 1–4: x88, w826.
  - Popular spans cols 5–6: x964, w388.
- ≤991: `display:flex; flex-direction:column`. Featured 927 wide @991 (342 @390), then popular below. The popular wrapper gets padding-top 25.
- **Featured** (`a.featured-blog-link`, flex column, centred, gap 24; hover opacity .8, `transition all .2s`):
  - `.featured-blog-cover`: 722×407 @1440 and @991; 342×193 @390.
    - Radius 20, border 1px rgba(122,123,127,.25), overflow hidden. Centred, not full width at ≥992.
    - `img` fills it with object-fit cover (aspect ~16:9).
  - `.featured-blog-content`: flex column, gap 12. Full column width (826 @1440).
    - Title `h2.text-display-h3`: Inter Display 600 36/44, ls −0.26px, color **#fafafd**. 28/36 at ≤767. ‹post title, 2 lines @1440, 4 lines @390›.
    - Excerpt `p.text-body-m` 16/24, rgba(255,255,255,.68). ‹~145ch, 2 lines›.
  - Author row `.blog-feed-author`: flex, align centre, gap 8, padding-top 12.
    - `a.blog-thumbnail-author-link`: hover underline. Holds a 25×25 round avatar (bg-image cover, radius 100, margin-right 7) and the name in `.text-body-s`, 14/20, color **rgb(116,118,122)**.
    - `.text-seperator`: 1×20, bg rgba(122,123,127,.25), margin 0 7px.
    - Read time: "5" + "min read", 14/20 #fff, gap 4.
- **Popular** (`.blog-feed-wrapper`: flex column, gap 20):
  - Overline h2 "POPULAR BLOGS", 12/16 w550 ls 2px, color .68.
  - List `.collection-list-5`: grid, 1 column, row gap **40**. 4 items. Item heights 124/100 (2-line vs 1-line title).
  - Item `a.blog-feed-link`: flex column, gap 4; hover opacity .8.
    - Title `h3.text-label-m` 16/24 w500, #fafafd.
    - Excerpt `.text-body-s.line-clamp-2` 14/20 .68 (2 lines).
    - Then the author row: name 14/20 **#fff** (the link has no underline rule here), separator, "N min read".

## 2. Feed section (`div.section > .container.section-container > .blog-feed`)
- `.blog-feed`: flex column, gap 36, padding-bottom 120.
- **Head** `.blog-related-head` (flex column, gap 8):
  - h2 `.text-heading-l` "Explore More Blogs": Inter 18/24 **w550**, ls −0.26, #fff.
  - Sub `.text-body-m` .68: "Learn more about how to get the most from your advertising." (1 line).
- **Categories** `.blog-categories`:
  - Layout: flex row, align start, gap 15, padding 36/0. Border-top and border-bottom 1px rgba(255,255,255,.1). 1264×146 @1440.
  - ≤991: flex column (927×225 @991, 342×385 @390).
  - Label `.categories-title` "Topics & Categories:", 16/24 .68, 152 wide.
  - Tags list `.collection-list-6`: flex wrap, gap 8. 15 tags; names and hrefs are in the data file (→ `/category/<slug>`).
  - Tag `a.blog-tag`: inline-block, padding 6/12, radius 10, `box-shadow: 0 0 0 1px rgba(255,255,255,.1)`, text `.text-body-s` 14/20 rgba(255,255,255,.92). Hover bg rgba(255,255,255,.06), `transition all .2s ease`.
- **List grid**: **S4** `BlogListCard` grid.
  - 24 cards per page. 3 cols of 405.3, gap 24 @1440 (card 405×440, cover 405×230). 3 cols of 298.3, gap 16 @991 (card 298×379). 1 col @390 (342×384).
  - Card fields: cover image, author avatar 28 + name, title (2-line clamp), excerpt (2-line clamp). Card list order and images are in `cards[]` in the data file.
  - The page's inline style `.blog-list-card:hover .blog-list-card-content {background:white}` has no effect: that class is absent from the DOM.
- **Pagination** `.w-pagination-wrapper.blog-pagination`:
  - Layout: flex, centred, gap 10, padding 20/0. 1264×82.
  - Page count `.w-page-count`: "1 / 8", 16/24 w500 #fff, centred.
  - "Next" button: `a.w-pagination-next.button-dark.button-secondary` (65×42, margin 0 10). Label "Next" 14/24 w600 #fff, then a 12×12 chevron (`/assets/pages/blog/svg/w-pagination-next-button-dark-button-sec-3819e420.svg`, margin-left 4, translateY 1px). Its href is `?9edeb55f_page=2`.
  - Clone behaviour: paginate `post.json` sorted newest-first, 24 per page. Use `?page=N`, and show a "Previous" button (same style, chevron flipped) from page 2 onward.

## 3. Final CTA
`CTA` from src/components, unchanged ("Ready to ship more winning ads?", "Start free trial" + "View Pricing").

## Responsive summary
| | 1440 | 991 | 390 |
|---|---|---|---|
| hero section h | 992 | 1595 | 1493 |
| featured cover | 722×407 | 722×407 | 342×193 |
| popular list | right column 388 | below, 927 | below, 342 |
| list grid | 3×405.3 gap 24 | 3×298.3 gap 16 | 1×342 gap 16 |
| CTA h2 | 44/53.76 | 40/52 | 36/48 |

## Motion
Hover transitions only, all `.2s ease`: featured and popular link opacity → .8, tag bg, card bg/ring (S4). There are no IX2 events on this page.

## Assets (`public/assets/pages/blog/`)
- The cover images of the first page of cards and the featured cover (`6a341585b0dc1e82740a52f6_maxresdefault.jpg`, 1440×810) are 22 files here. Some author avatars are reused from `/assets/templates/authors/`. The exact element ↔ path mapping is in `cards[].img`, `cards[].avatar` and `featured[].img` in `specs/data/blog.page-data.json`.
- Pagination chevron: `svg/w-pagination-next-button-dark-button-sec-3819e420.svg`.
- CTA image: existing `/assets/680a4b467abdcf40d0d0fa8b_home-cta.webp`.
