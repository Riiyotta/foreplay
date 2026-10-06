Source: https://www.foreplay.co/bounties/build-share-a-workflow-using-the-foreplay-api

> Shared patterns are defined in `specs/_shared-templates.md`. This template uses S1 (breadcrumb), S2 (BlogTop shell), S3 (rich text, base `.blog-rtb` without the post overrides) and S10 (video). Navbar, Footer, `Button` and `CTA` come from src/components.

# Template: Bounty (`/bounties/:slug`)

- Data: `src/data/bounties.json`. **There is only 1 entry**, so a second entry could not be checked. The layout below is the CMS template.
- Method: Node Playwright at 1440/991/390. docH 8157 / 8344 / 9817.
- The served HTML contains a second, unpublished copy of sections 4–7 (placeholder "Heading" text). Webflow strips it at runtime and the live DOM has exactly the 4 sections below. Ignore the copy.

## 1. Section map (all inside `.container.blog-container`, 752 @1440 / 736 @991 / 342 @390)

### 1.1 Breadcrumb (S1)
"Bounties" → `/bounties`, "/", then the title.

### 1.2 Header: `.blog-top` (gap 24, padding-bottom 40). Geometry: 344,192,752,878.7 | 127.5,192,736,869.7 | 24,72,342,928.2
1. `.bounties-item-description` (flex col, gap 4):
   - `h1.text-display-h4` = `title` (Inter Display 600 28/36; 3 lines @390).
   - `.text-alpha-100 > .text-body-m`: 3-line description (about 230 chars). Use stand-in.
2. `.bounty-video-embed` (S10): `border:1px solid #24262e; border-radius:16px; overflow:hidden`. 752×424.7 @1440, 342×194 @390. Uses `youtubeId`.
3. `.bounty-page-details`: flex col, gap 16, padding 16, `border:1px solid rgba(255,255,255,.1)`, radius 16. Height 190 (286 @390). Four `.bonty-page-details-line` rows (flex, align center; ≤479 a column, align start). Each row has a label (`.bounty-page-details-title`, min-width 150, `.text-label-m` .68) and a value:
   - "Bounty Amount": `.bounties-item-amount` (flex, colour **#ffd24d**). Contains a 28px coin icon (`icons/bounty-amount.svg`), `.text-label-m` "$" and `amount`.
   - "Published By": `.bounties-item-author` (flex, gap 8). Contains a 24px round `authorAvatar`, `.text-label-m` `author` (#fff) and a plain div `authorHandle` ("@foreplayzach", inherits 16/24 .36 white).
   - "Due Date": `.bounties-item-tag` (flex, gap 5, padding 4px 8px, bg `rgba(255,255,255,.1)`, colour .68, radius 8). Contains a 20px calendar icon (`icons/bounty-calendar.svg`) and `.text-label-s` `dueDate`.
   - "Status": `.bounties-item-tag.status` (bg `rgba(124,221,181,.15)`, colour **#7cddb5**, padding-left 4). Contains a 20px status icon (`icons/bounty-status.svg`) and `status` ("Open").
4. `Button` primary "Submit" (full width 752×40, chevron at opacity 1) → `#submit-form`.

### 1.3 Tabs: `div.section > .container.blog-container > .w-tabs` (Webflow tabs)
- `.tabs-menu-3`: flex. Two `a.bounty-tabs`:
  - Box: flex, centred, gap 5, padding 9px 15px, `border-bottom:2px solid #020308`, colour `rgba(255,255,255,.44)`, `transition: all .2s`. Hover colour `#f9f9fa`. Current: border-bottom `#fff`, colour #fff.
  - Tab 1: 20px icon `bounty-tab-1.svg` + `.text-label-m` "Details" (106.3×44).
  - Tab 2: `bounty-tab-2.svg` + "Submissions" (149.9×44). It also holds a hidden red count tag (`.bounties-item-tag.red.hide`: `#e77f6e` on `#e77f6e26`).
- `.tabs-content-2` (padding-top 24):
  - Active pane: `.blog-rtb#blog-rtb > .w-richtext` with the bounty details (S3 base: .84 white, `p` margin 0, h4 Inter Display 20/32 400 margin 12/0/8, ol/ul flex col gap 12 padding-left 24 margin 16/0, links 500 #fff).
    - Structure: p ×3 (one of about 250 chars, one short, one with bold and links), then 4 × [h4 + ol(3) / ol(2) / ul(4 link items) / ul(4 link items)]. About 1,440 chars total. Use stand-in.
  - The Submissions pane is empty (and Webflow's placeholder rich text in the hidden copy is irrelevant).
- `.div-block-349` (padding 48/48) > `.blog-line`: **full viewport width** (0→1440) because it sits outside any container.

### 1.4 Submit form: `section.section > .container.blog-container > .blog-top`
- `#submit-form.bounties-item-description`:
  - `h1.text-display-h4` = `submitTitle` "Submit to the $5k Bounty".
  - `.text-body-m` .68 intro with an inline `a.link` "terms and conditions" → `termsHref` (`/api-bounty-terms-of-service`; colour `#fafafd`, underline).
- `form.form-6`: flex col, gap 32. Three `.bounty-form-section`s, each with flex col, gap 24, padding 16, `border:1px solid rgba(255,255,255,.1)`, radius 16:
  - Section title: `.bounty-form-section-title` (flex, gap 10). Contains `.bounty-form-section-number` (28px circle, bg #24262e, colour #dddee5, `.text-label-m` digit 1/2/3) and `.text-white > .text-label-m` title.
  - Items `.bounty-form-item` (flex col, gap 4):
    - `label.text-label-s` (#fff 14/20 500).
    - Optional help `.text-alpha-100 > .text-body-s` (.68).
    - `.bounty-form-field`: bg `rgba(255,255,255,.1)`, no border, radius 10, padding 8px 12px, 14/20, #fff, 38 tall (textarea 56).
  - Info note `.div-block-348` (sections 2 and 3): flex, gap 10, padding 12, bg `rgba(84,205,248,.12)`, colour **#54cdf8**, radius 10. Contains a 20px info icon (`icons/bounty-info.svg`) and `.text-body-s` text (1–3 lines). Use stand-in.
  - Social rows `.social-form-field` (flex, gap 10): the input (flex 1) and `a.bounty-social-link` (44×36, padding 4px 8px, bg .1, radius 10, hover bg `rgba(255,255,255,.2)`, .2s) with a 28px icon (`icons/bounty-social-{linkedin,x,instagram,tiktok,youtube}.svg`).
  - Field list: `formSections` in JSON (labels, types, placeholders, required, help flags, social links).
- Submit: `input.button-dark.button-primary` full width 752×40, value "Submit".
- Success `.success-message-2`: `#10b981` text and 1px border on `rgba(16,185,129,.1)`, radius 8, centred. Fail `.error-message-2`: `#ff5b37` on `rgba(255,91,55,.1)`, radius 8. reCAPTCHA is present on live; use a placeholder.

### 1.5 Final CTA
Uses `CTA` from src/components.

## 2. Motion
No IX2. Tabs are Webflow `w-tabs` (instant switch). Hovers: tabs and social links (.2s), buttons (shared).

## 3. JSON shape (`src/data/bounties.json`)
```json
{
  "slug": "build-share-a-workflow-using-the-foreplay-api",
  "title": "Build and Share an AI Workflow with the Foreplay API",
  "amount": 5000, "currency": "$",
  "author": "Zachary Murray", "authorHandle": "@foreplayzach",
  "authorAvatar": "/assets/templates/bounties/…png",
  "dueDate": "October 31, 2025", "status": "Open",
  "youtubeId": "TqzUKpgjbwg",
  "submitTitle": "Submit to the $5k Bounty", "termsHref": "/api-bounty-terms-of-service",
  "formSections": [{"title": "Personal Details", "fields": [{"label": "Name", "type": "text", "placeholder": "First & Last", "required": true, "hasHelp": false, "social": null}, …], "notes": 0}, …3],
  "updated": "…"
}
```
Varies per entry: title, description, amount, author, due date, status (tag colour stays teal for "Open"), video, details rich text, and form config.
