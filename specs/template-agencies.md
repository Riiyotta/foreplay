Source: https://www.foreplay.co/agencies/adcrate

> Shared patterns are defined in `specs/_shared-templates.md`. This template uses S1 (breadcrumb, in a full `.container`) and S3 (rich text, `.ad-rich-text` variant). Navbar, Footer, `Button` and the final `CTA` come from src/components.

# Template: Agency directory listing (`/agencies/:slug`)

- Data: `src/data/agencies.json` (26 entries). Measured `/agencies/adcrate` and `/agencies/creative-milkshake`. The DOM is identical (only body length and list counts differ).
- Method: Node Playwright at 1440/991/390, computed styles plus live CSS.
- Document height: adcrate 2769 / 3493 / 5856. creative-milkshake 2853 / 3553 / 5892.

## 1. Section map

### 1.1 Breadcrumb (S1)
Inside `section.section > .container` (max 1440, padding 40/32/24, **not** the blog container). Crumbs: "Agencies" → `/agency-directory`, "/", then the name. Geometry: 32,72,1360,120 @1440. Hidden ≤479.

### 1.2 Split layout: `section.section > .container > .agency-directory-split.agency-directory-listing-split`
- `display:flex; align-items:flex-start; gap:32px`. **There are no responsive rules**: the sidebar keeps `min-width:400px` at every width.
  - @991 the article column is squeezed to 495 wide.
  - @390 the article is pushed off-canvas (x 456, 239 wide, clipped by `body{overflow-x:clip}`). This is a live-site bug.
  - Recommendation for the rebuild: stack at ≤767 (sidebar `min-width:0; width:100%`, then the article) and note it as an intentional fix. Desktop and 991 geometry below are exact.
- Geometry: 40,192,1360,1729 | 32,192,927,2257 | (broken) 24,72,342,4033.

#### Left: `.agency-directory-listing-sidebar`
`min-width:400px; padding:8px; border:1px solid rgba(255,255,255,.1); border-radius:24px`. 400×848 at 1440.

1. **Tilt card** `.agency-directory-card-wrap` (`perspective:1000px`, data-w-id `b50a2abf-86aa-b788-6049-87c8ece88706`) > `.agrency-directory-card`:
   - Card box: flex col, centred, padding 16, bg `rgba(255,255,255,.06)`, radius 16, `box-shadow: inset 0 2px 0 rgba(255,255,255,.05)`, overflow hidden, position relative. 382×209.
   - `.agency-directory-shine`: 150×150 circle, #fff, `opacity:.19; filter: blur(70px)`, position absolute, centred (left 116, top 29.5).
   - `.agency-directory-details` (relative, flex col, gap 48, width 100%):
     - `img.agency-directory-logo` = `logo`: 65px wide (65×65), `border:1px solid rgba(255,255,255,.1)`, radius 8. One agency has no logo (`logo:null`), so leave an empty 65px box.
     - `.agency-directory-card-content`:
       - `h1.text-display-h5` name (Inter Display 600 24/32, −0.16px, #fff).
       - `.agency-directory-verified-badge` (flex, gap 4, padding 4): a 20×20 badge icon (`icons/agency-verified.svg`) and `.text-label-m` "Verified Agency". All 26 are verified.
     - `img.foreplay-agency-wordmark`: 120 wide (120×20.3), absolute top-right of the details box. File: `public/assets/templates/shared/foreplay-agency-wordmark.svg`.
   - **IX2 `e-252` MOUSE_MOVE → `a-79` "New Mouse Animation"** (IX2 breakpoint `main` only, ≥992). Smoothing 50, resting state 50%, based on the hovered element:
     - Mouse X 0→100%: `.agrency-directory-card` rotateY −15°→+15°, and `.agency-directory-shine` translateX +90%→−90%.
     - Mouse Y 0→100%: card rotateX +15°→−15°, and shine translateY +50%→−50%.
     - With the mouse away it rests at 50% (0° rotation, shine centred). Implement with a mousemove handler that lerps toward the target (smoothing 50 ≈ 0.5 per frame).
2. `.agency-directory-sidebar-content`: flex col, gap 16, padding 16.
   - `.agrency-directory-sidebar-buttons`: 2-col grid, gap 12.
     - Row 1, spanning 2: `Button` primary "Visit Website" with a **left** icon (`icons/agency-button-website.svg`, icon-left block margin-right −4), 350×40. Live href is `#agency-contact` for all entries.
     - Row 2: secondary "Contact" (left icon `agency-button-contact.svg`) → `#agency-contact`, and secondary "LinkedIn" (`agency-button-linkedin.svg`) → `linkedin`. Each is 169×42.
   - `.agency-directory-seperator`: 1px `rgba(255,255,255,.1)`, ×3 between groups.
   - `.agency-directory-location` (flex, align center): `h2.text-label-m` "Location" (#fff, flex 1). On the right is `.agency-directory-location-specific` (flex, gap 8) with a flag `img` (height 15, 30 wide, radius 3, `filter:saturate(.9)`, = `flag`) and `.text-label-m` country.
   - Two `.agency-directory-list-wrapper`s (flex col, gap 8), "Core Services" and "Core Industries". Each is `h2.text-label-m` plus `.agency-directory-list` (flex col, align start, gap 8) of pills `.agency-directory-list-item` (padding 4px 12px, bg `rgba(255,255,255,.1)`, radius 100) holding `.text-alpha-25 > .text-body-s` (14/20, `rgba(255,255,255,.92)`), 28 tall.

#### Right: `.agency-directory-post`
Flex col, gap 32, `grid-column: span 2`. Fills the remaining width: 928 @1440, 495 @991.

Four `.agency-directory-post-section`s (flex col, gap 8):
- Heading: `.text-white > .post-heading-wrapper` (flex, gap 12) holding one or two `h2.text-display-h4` (Inter Display 600 28/36, −0.2px). The second h2 is the agency name. Fixed headings: "About {name}", "What sets them apart", "Core Services & Offer", "Contact {name}".
- Body: `.blog-rtb#blog-rtb > .ad-rich-text.w-richtext` (S3: .84 white, 16/24, `p` margin-bottom 16, ul flex col gap 12 padding-left 24).
- Typical structure (median 3,019 chars total):
  - About: 2 p (about 500 chars each).
  - What sets them apart: 1 p plus a ul of 3–4 li (16 of 26 agencies have a list).
  - Core Services: 2 p.
  - Contact: 1 short p ("Fill out the form below…").
  - Counts per entry are in `bodySections`.
- **Lead form** (`#agency-contact` section) `.agency-directory-lead-form > form.agency-directory-form-content`:
  - Form box: grid `1fr 1fr`, gap 16, padding 16, `border:1px solid rgba(255,255,255,.1)`, radius 24. 928×482.
  - Fields `.ad-form-field`: padding 8px 12px, bg `rgba(255,255,255,.06)`, `border:1px solid #24262e`, radius 10, #fff, 14/20, height 38, `transition: all .2s`. Hover bg `rgba(255,255,255,.1)`. Placeholder `rgba(255,255,255,.68)`.
  - Fields: First Name and Last Name (1 col each), then Email, Company Name, Company Domain, and Details (textarea, 58 tall), each spanning 2.
  - Then reCAPTCHA (304×78, span 2, margin-bottom 8). Render a placeholder box.
  - Hidden inputs: agency-email and agency-name.
  - Submit: `input.button-dark.button-primary` full width (span 2), 40 tall, label "Submit".
  - Webflow success (`#ddd` box, centred) and fail (`#ffdede`) messages are hidden by default.

### 1.3 Final CTA
Uses `CTA` from src/components.

## 2. Colors, radii
- Sidebar border .1 white, radius 24. Card bg .06, radius 16, inset highlight .05.
- Pills .1 bg, radius 100. Flags radius 3. Logo radius 8 with .1 border.
- Form border .1, radius 24. Inputs `#24262e` border on .06 bg, radius 10.

## 3. Motion
- The IX2 tilt above.
- Hovers: inputs (.2s bg), buttons (shared).
- No scroll animations.

## 4. JSON shape (`src/data/agencies.json`, filled for all 26)
```json
{
  "slug": "adcrate", "title": "Adcrate", "name": "Adcrate",
  "logo": "/assets/templates/agencies/…jpeg",
  "verified": true,
  "location": "United States",
  "flag": "/assets/templates/agencies/flags/…_us.svg",
  "services": ["Creative Strategy", "Performance Creative", "Meta Ads", "YouTube Ads", "TikTok Ads"],
  "industries": ["DTC E-Commerce"],
  "website": null,                       // live "Visit Website" goes to #agency-contact for every agency
  "linkedin": "https://www.linkedin.com/company/adcrate/",
  "bodySections": [{"heading": "About", "p": 2, "li": 0, "chars": 1103}, …],
  "updated": "…"
}
```
Varies per entry: name, logo, location and flag, services, industries, linkedin, and the four rich-text bodies (stand-in, sized from `bodySections`).
