Source: https://www.foreplay.co/agency-directory

# `/agency-directory`: Agency Directory (CMS list + Finsweet filters)

Measured 2026-10-06 with headless Chromium at 1440 / 991 / 390. Geometry is `[x, y, w, h]` in document px. Long copy is replaced by `[N chars, L lines]`.

- Title: `Foreplay Agency Directory - Paid Media, Creative Strategy, Media Buying`. wf page `691dce799a814872375ff8e1`.
- Document height: 1440 → 3959, 991 → 4293, 390 → 4872.
- Global pieces come from src/components: `Navbar`, `Footer`, `CalendarPopup`, `ExitIntentModal`, `Button`. There is **no** final CTA block.
- Agency detail pages (`/agencies/<slug>`) are out of scope; another agent's `specs/_shared-templates.md` covers templates, and `public/assets/templates/agencies/` already holds several logos and flags.

---

## 1. Hero: `div.section > .container.section-container > .agency-directory-hero`
- Same grid as `WorkHero` (`_shared-community.md` §C5): 2 × 568, gap 128 (≥1440; 96 at 1280–1439), padding 128/0 (≤767 80/0, ≤479 48/0). ≤991: 1 column, **gap 25**. Box: [88,72,1264,525] @1440, h 547 @991, h 403 @390.
- Left `.work-hero-content > .max-w-lg > .flex-col-gap-5` (gap 20):
  - `.flex-gap-1` (flex row, gap 4): 20×20 icon (`inline-icon-20-71a98e.svg`, rgba(255,255,255,.36)) plus `h1.text-overline` "AGENCY DIRECTORY" (rgba(255,255,255,.68)).
  - `.flex-col-gap-3` (gap 12): `h2.text-display-h2` "Discover a best-fit agency from the Foreplay ecosystem." (512 wide, left aligned, 3 lines at all widths), then `.text-alpha-50 > .text-body-l` [105 chars, 2 lines; 3 @390] in rgba(255,255,255,.84).
- Right `.agency-directory-illustration`: an **empty** placeholder panel with bg rgba(255,255,255,.03), border 1px rgba(255,255,255,.1), radius 20, 568×269 @1440 (same height as the text column). ≤991 it collapses to 2 px (border only) under the text. Render it as an empty bordered box.

## 2. Directory: `div.section > .container.section-container > .agency-directory-main`
- `.agency-directory-main`: **flex row, align start, gap 20**, with no responsive override. [88,597,1264,2430] @1440, [32,619,927,2570] @991.
- **≤479 the row does not wrap**: the 300-px sidebar stays and the feed overflows the viewport to the right (document scrollWidth 839 @390; body has `overflow-x: clip`, so the feed is cut off). This is a live-site bug. Recommendation for the clone: match it, or stack the sidebar above the feed ≤767. Flag this to the user.

### 2.1 Sidebar `.agency-directory-feed-sidebar` (300 wide, max 350, padding 8, border 1px rgba(255,255,255,.1), radius 24; 920 tall)
`form.filter_form#wf-form-filter` (Finsweet `fs-list-element="filters"`): grid 1 col (266), gap 16, padding 0 8 8 8.
1. Header `.filter_block_header` (flex row, space-between, center, gap 16, padding 16/0; ≤991 align start, pl 16): funnel icon 20 (`inline-icon-20-e01f7a.svg`) plus "Filters" (`.text-label-m` #fff).
2. Search `input.filter_search#field` (`fs-list-field="title"`, so it searches **agency names only**): 266×40, padding 8/24/8/42, bg rgba(255,255,255,.06), `search-icon-white.svg` background at 20px auto / 12px 52%, radius 8, Inter 16, `transition: all .2s`. Hover bg rgba(255,255,255,.1).
3. "Services" block: header with "Services" (`.text-label-m`) and a `a.filter_clear.helper` "Clear" pill (padding 4/12, bg rgba(255,255,255,.03), border 1px rgba(255,255,255,.1), radius 8, Inter 14/24 rgba(255,255,255,.68); hover: border rgba(255,255,255,.1), bg rgba(255,255,255,.16), color rgba(255,255,255,.92)). Then a CMS checkbox list (flex col, gap 12) of **10** options with facet counts:
   - UGC Production 12
   - Full-Stack Marketing 7
   - CRO 1
   - Retention Marketing 4
   - Performance Creative 23
   - Creative Strategy 13
   - TikTok Ads 17
   - YouTube Ads 9
   - Google Ads 7
   - Meta Ads 12
4. "Industries" block (same structure), **6** options:
   - Local Lead Generation 3
   - Affiliate 0
   - Info & Education 3
   - B2B & SaaS 7
   - Mobile Apps & Gaming 10
   - DTC E-Commerce 18
5. `.filter_block.country-filter`: display none (an unused country list with flags).
6. `a.filter_clear` "Clear All" (`fs-list-element="clear"`): full width 266×34, same pill style.

Checkbox row `label.checkbox_field` (flex row, center, 24 tall; hover color #e1e1e1):
- Custom box `.checkbox_input`: 20×20, margin 2 12 0 0, border 2px rgba(255,255,255,.32), radius 5. Checked: bg #fff, border #fff, plus a `check-icon-black.webp` background (14px auto, centered). Focus-visible: outline 2px rgba(255,255,255,.68), offset 3.
- Label `.text-label-s` (14/20 500, color #b7b7b7). The facet count `.filter_facet-count` is right-aligned (margin-left auto), Inter 14/24 #b7b7b7.
- Facets with 0 results get `.is-list-emptyfacet` and **opacity .5** (e.g. "Affiliate").

### 2.2 Feed `.agency-directory-feed` (flex 1, flex col, gap 32): 944 wide @1440, 607 @991
`.agrendy-directory-feed-list.w-dyn-items` (flex col, gap 24; Finsweet `fs-list-element="list"`, `fs-list-load="pagination"`). There are **9 items per page across 3 pages** ("1 / 3"), so the CMS holds about 19–27 agencies.

**`AgencyCard`** (`.ad-feed-item`: padding 4, border 1px rgba(255,255,255,.1), radius 12). It is 944×243 @1440 (226 when the tags fit on one line); 263 @991; 263–283 @390.
- `a.ad-feed-item-header` → `/agencies/<slug>`: flex row, center, padding 4 12 4 4, bg rgba(255,255,255,.06), radius 10, `transition: all .2s`. **Hover:** bg rgba(255,255,255,.1). 73 tall.
  - `.flex-gap-3` (flex 1, gap 12): logo `img.ad-feed-item-logo` 65×65 (border 1px rgba(255,255,255,.1), radius 8). Then name `.text-label-l` (18/24 500 #fff; 16/24 @390), e.g. "Rowads.Studio" or "RYZE Performance", and a country row: flag `img.agency-directory-location-flag` (h 15, radius 3, `filter: saturate(.9)`) plus `.text-label-s` country in rgba(255,255,255,.68), e.g. "France" or "United States".
  - Optional right badge `.agency-directory-verified-badge` (flex, gap 4, padding 4): `verified-icon.svg` 20×20 plus "Verified Agency" (`.text-label-m` #fff). It is 150.7×32. 8 of the 9 page-1 agencies are verified; the first (Rowads.Studio) is not.
- `.ad-feed-item-content` (flex col, gap 24, padding 16 16 16 18): two groups `.ad-feed-item-content-list` (flex col, gap 8):
  - Overline "CORE SERVICES" / "CORE INDUSTRIES" (12/16 550 ls 2, rgba(255,255,255,.36)).
  - Tag row (flex row, gap 4, **no wrap**: tags shrink and their text wraps to 2 lines at narrow widths). Each `.agency-directory-list-item` is a pill: padding 4/12, bg rgba(255,255,255,.1), radius 100, `.text-label-s` in rgba(255,255,255,.84), 28 tall (48 when the text wraps).
- One page-1 card has an empty logo (Webflow `w-dyn-bind-empty` placeholder). Use a neutral 65×65 box.

**Pagination** `.w-pagination-wrapper.pagination` (flex row, center, pt 24):
- `a.pagination_previous` "Previous" (left chevron 12×12 `inline-w-pagination-wrapper-762537.svg`) and "Next" (right chevron `…-11db86.svg`). Each is flex, padding 9/20, bg rgba(255,255,255,.03), border 1px rgba(255,255,255,.1), radius 8, Inter 14/24 rgba(255,255,255,.68), 44 tall. Hover: bg rgba(255,255,255,.16), border rgba(255,255,255,.1), color rgba(255,255,255,.92). On page 1 the Previous button has class `is-list-pagination-disabled` but no visual change.
- `.w-page-count` "1 / 3" (16/24, rgba(255,255,255,.68), centered, mt 20, flex 1 between the buttons).

### 2.3 Filter behaviour (Finsweet Attributes v2 `list`, measured)
- Checking a facet filters instantly, with no URL change. Checking "Meta Ads" changed the page count from 1 / 3 to **1 / 2**, and the check box filled white.
- Typing in the search filters on the title field only: "ugc" gave **0 results** ("1 / 0"). The empty state `.w-dyn-empty` is unstyled/hidden in the default layout; provide a simple "No agencies found" row.
- "Clear All" resets everything (back to 1 / 3). "Clear" per group resets that group.
- Facet counts update to reflect the current results, and empty facets dim to .5.
- "Next" paginates client-side (Finsweet) and scrolled the page to y≈2555 (the list top) in our run. The page query param `?0d3b6e6c_page=N` exists on the links.
- Cloudflare Turnstile is attached to the filter form (invisible).
- Build suggestion: hold the agencies in a local array and filter by `services ∩ selected` (OR within a group, AND across groups, Finsweet default) and `name.includes(query)`, with 9 per page.

## Motion
CSS transitions only (.2s on the search input, pills and header link). No IX2.

## Assets: `public/assets/pages/agency-directory/` (page-1 cards = first 9 agencies)
| File | Element |
|---|---|
| `691f4b8418e4cbc67faf5515_search-icon-white.svg` | search input bg |
| `691f4c06cc0bb6d8662029a2_check-icon-black.webp` | checked checkbox bg |
| `691f5c6f5a60a7669c84e1fb_verified-icon.svg` | verified badge |
| `inline-icon-20-71a98e.svg` (hero overline icon), `inline-icon-20-e01f7a.svg` (Filters icon), `inline-w-pagination-wrapper-762537.svg` / `-11db86.svg` (prev/next chevrons) | inline SVGs |
| `6a8c572ddd1ad119383692e8_avatar_ryze-performance_…jpeg`, `69fe2524d1c71bcff8babfe8_avatar_wallaroo-media_…jpeg`, `6924bf63cbcdd80e56addd83_avatar_wearewebtopia_…jpeg` | agency logos |
| existing `/assets/templates/agencies/69739a02b419c2b3e5d8f0db_Icon.png`, `…avatar_pearmill_…jpeg`, `…avatar_yall_…jpeg`, `…avatar_heykasper_…jpeg` | other page-1 logos |
| existing `/assets/templates/agencies/flags/…_{fr,us,se,gb,au}.svg` | country flags |
| `691b4f4…_{ar,am,at,az,bh,bd,by,be,bo,br,bg}.svg` | hidden country-filter flags (unused) |
