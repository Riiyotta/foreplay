Source: https://www.foreplay.co/creative-strategist-jobs

# /creative-strategist-jobs: "Creative Strategist Jobs - Foreplay Marketing Job Board"

**Method:** see `specs/_shared-misc.md`. **Raw dumps:** `specs/_measure/creative-strategist-jobs-{1440,991,390}.txt`. **Data:** `specs/data/creative-strategist-jobs.page-data.json` has `cards[]` (66 post cards in page order: href, local cover path, avatar path, author, title, excerpt length). Webflow page id `6483b075adc8b8653a99dc2d`. Doc height: 13052 @1440.

The page has **no job listings**, despite its name. It shows the hero and then all creative-strategy posts as blog cards. A JSON-LD `FAQPage` script is present in `<head>` (SEO only, not rendered).

## Section map
| # | Section | y/h @1440 | Reuse |
|---|---|---|---|
| 1 | `.section.overflow-hidden > .container.section-container > .demo-hero` | 72 / 418 | **S9**. Overline h1 "CREATIVE STRATEGY JOBS" (color .36), h2 `.text-display-h2` "Creative Strategist Job Board", paragraph ‹~151ch, 3 lines›. |
| 2 | `div.section > .container.section-container` | 490 / 10592 | Spacer `.v-padding-50` (50: padding 25/0), then a `.section-head` (overline "INTEGRATIONS" (sic), h2 "Creative Strategy Articles", paragraph "Read articles about how to become a top 1% creative strategist." 2 lines), spacer 50, then `.blog-feed` (padding-bottom 120) holding the **S4** grid of **66** cards with **no pagination**. |
| 3 | Final CTA | 11082 / 1038 | `CTA` |

- Grid geometry is identical to /blog: 405.3×440 cards, gap 24 @1440; 298.3 3-col @991; 1-col 342 @390.
- Card list (images, authors, titles via slug → `post.json`) is in the data file. The covers are shared with /blog where they overlap and live in `/assets/pages/blog/`; the rest are in `/assets/pages/creative-strategist-jobs/`. Use the paths in the data file as-is.

## Motion
S4 card hover only.
