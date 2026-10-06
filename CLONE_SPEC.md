Source: https://www.foreplay.co/

# Foreplay homepage: clone spec (route `/`)

Measured on 2026-10-06 against the live site with Playwright (Chromium). The widths were 1440×900, 1280×800, 991×900, 767×900 and 390×844. Computed styles and bounding boxes were read with `getComputedStyle`/`getBoundingClientRect`. Class rules come from the live CSSOM, which matches the saved `foreplay-3-0.shared.850e08b99.min.css`. The Webflow IX2 data was read from `Webflow.require('ix2').store.getState().ixData`. All px values are CSS px. In the tables, `y` is the document offset at the given width, measured after lazy-loaded images finished loading.

The saved copy is at `/Users/riyaghosh/V3/Foreplay _ The Complete Winning Ad Workflow - Save ads from Ad Libraries_files/`, with the main HTML file `Foreplay _ The Complete Winning Ad Workflow - Save ads from Ad Libraries.html`, referred to below as **SAVED.html**. Line numbers cited below are SAVED.html line numbers. The asset inventory is in `CLONE_ASSETS.md`.

Webflow ids: site `62a4ed18ddad95dde8b8bfa4`, page `67fd7bb8b9060a7ad3650744`. `<html lang="en-US">`. Title: `Foreplay | The Complete Winning Ad Workflow - Save ads from Ad Libraries`. Meta description: "From advertising inspiration to creative analytics. The best way to save ads from TikTok, and Facebook Ad Library, organize and share with your team."

---

## 0. Global

### 0.1 Breakpoints (Webflow standard, desktop-first)
| Name | Media query | Notes |
|---|---|---|
| base (desktop) | — | ≥992 |
| ≥1280 | `min-width:1280px` | Shows the nav Product-menu video banner. `.lens-enrichment-illustration` margin goes from -80 to -40. The hero-video-thumb becomes 150px tall. |
| ≥1440 | `min-width:1440px` | `.home-sharing` gap goes from 40 to 80. `.lens-enrichment-illustration` becomes width 100%, max-width 1440, margin auto. |
| tablet | `max-width:991px` | Nav collapses to the hamburger. Many sections stack. |
| mobile landscape | `max-width:767px` | |
| mobile portrait | `max-width:479px` | |

Tailwind mapping suggestion: `screens: { sm:'480px', md:'768px', lg:'992px', xl:'1280px', '2xl':'1440px' }` used mobile-first (base = ≤479).

### 0.2 Page shell
- `body.body`: bg `#020308` (rgb 2,3,8). Color `rgba(255,255,255,0.36)` (`--_lens---neutral-300`). Font `Inter, sans-serif`, 16px/24px, weight 400, letter-spacing −0.18px (−0.01125em). `overflow-x: clip`. `:root` has `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale`.
- Base resets used by Webflow: `a {color:#3a6ffb; text-decoration:none}` (most links override the color), `img {display:block; max-width:100%; vertical-align:middle}`, `p {margin:0}`, `h2 {margin:0}`, `ul {padding-left:40px}` (all lists on the page use `.w-list-unstyled` with `padding-left:0; list-style:none`), `figure {margin:0}`.
- Document height: 1440 → 11532, 1280 → 11480, 991 → ~13987, 767 → ~14013, 390 → ~13277.

### 0.3 Containers
| Class | max-width | padding-x (base / ≤991 / ≤767 / ≤479) |
|---|---|---|
| `.container` | 1440 | 40 / 32 / 24 / 24 |
| `.container.section-container` | 84rem = **1344** | 40 / 32 / 24 / 24 |
| `.container.navbar-container` | 1340 (`.navbar-container`) but `.container` sets 1440 → measured **1440** | 40 / 8 / 8 / 8 |
| `.container.footer-container` | **1216** | 40 / 32 / 24 / 24 |

At 1440 the inner content width is 1264 for section-container, 1360 for nav and 1136 for footer.

### 0.4 Color tokens (exact)
Both the CSS custom properties and the exact computed rgba values are given.
| Token | Value | Used for |
|---|---|---|
| `--_lens---background` | `#020308` rgb(2,3,8) | page bg, dark card bg, ghost buttons, light-primary button bg |
| `--_lens---solid-900` | `#090a0e` | primary-button text, secondary-button bg, dark text on white |
| `--_lens---solid-800` | `#0f1116` | — |
| `--_lens---solid-700` | `#171920` rgb(23,25,32) | white-block text, borders of extension card and features grid |
| `--_lens---solid-600` | `#24262e` rgb(36,38,46) | secondary-button border, tooltip bg, paragraph on white |
| `--_lens---solid-500` | `#343642` rgb(52,54,66) | muted text on white |
| `--_lens---solid-400` | `#4c505f` rgb(76,80,95) | overline on white, calendar subtitle |
| `--_lens---solid-300` | `#b2b4c5` | — |
| `--_lens---solid-200` | `#c3c5d2` | date-pill border |
| `--_lens---solid-100` | `#dddee5` | calendar borders, navbar-CTA hover |
| `--_lens---solid-50` | `#e9eaef` | card ring on white, divider line |
| `--_lens---solid-25` | `#f9f9fa` | active sharing tab, CTA box |
| `--_lens---neutral-0` / `--solid-0` | `#fff` | |
| `--_lens---neutral-25` | `#ffffffeb` (0.92) | footer category color |
| `--_lens---neutral-50` | `#ffffffd6` = rgba(255,255,255,0.84) | `.text-alpha-50`, logo color, overline in menus |
| `--_lens---neutral-100` | `#ffffffad` = rgba(255,255,255,0.68) | `.text-alpha-100`, paragraphs on dark |
| `--_lens---neutral-200` | `#ffffff70` = 0.44 | inactive product tab text |
| `--_lens---neutral-300` | `#ffffff5c` = 0.36 | body text, overlines with class `text-white-68` (that class has NO CSS rule, so it inherits 0.36) |
| `--_lens---neutral-400` | `#ffffff52` = 0.32 | |
| `--_lens---neutral-500` | `#fff3` = 0.20 | inactive ad dot |
| `--_lens---neutral-600` | `#ffffff29` = 0.16 | dividers, ai-button border, industries icon border |
| `--_lens---neutral-700` | `#ffffff1a` = 0.10 | product content ring, ghost hover, exit modal block |
| `--_lens---neutral-800` | `#ffffff0f` = 0.06 | product figure bg, secondary hover, mobile menu button open |
| `--_lens---neutral-900` | `#ffffff08` | |
| `--_lens---teal` | `#7cddb5` | live ad dot |
| `--lime-green` | `#10b981` | calendar online dot |
| `--cta` | `#1f69ff` | Swipe File glow |
| `--spyder` | `#ed615a` | Spyder glow |
| other `--_lens---*` | red `#e77f6e`, yellow `#ffc852`, lime `#d2e382`, sky `#5dbce5`, ocean `#5d78e5` | |
| nav menu border | `rgb(42,43,48)` = `#2a2b30` | dropdown border and internal dividers |
| nav bg | `rgba(2,3,8,0.92)` (≤767: 0.94) | |
| navlink idle | `rgba(255,255,255,0.52)` | |
| footer divider | `rgba(255,255,255,0.16)` | |
| footer badge text | `rgba(255,255,255,0.72)` | |

### 0.5 Radii, shadows, filters (exact)
- Radii: buttons 10, nav-brand 10, navlinks 10, tab links 10, dropdown panel 28, white blocks 36 (≤479: 16), product content/figure 24 (≤479: 16), winning cards 24, extension card 32 (≤479: 16), features grid 28, sharing CTA box 18, calendar trigger 12, calendar panel 18, tooltip body 16, tooltip inner 12, testimonial avatar small 6, avatars 99px, icon boxes 12, industries icon 12, ai-button 9, date-pill 8, mobile menu button 8, exit block 12, nav badge glow 16%.
- Rings (box-shadow): product content `0 0 0 1px rgba(255,255,255,0.1)`. Winning card `0 0 0 1px #e9eaef`. Extension `0 0 0 1px #171920`. Light stroke button `0 0 0 1px #e9eaef`. Avatar hover `0 0 0 3px #fff, 0 0 0 5px #4c505f`. Mobile menu inner `inset 0 0 0 1px rgba(0,0,0,0.2)`. Focus rings: `0 0 0 2px #020308, 0 0 0 3px #fff` (dark buttons) and `0 0 0 3px rgba(255,255,255,0.1)` (navlinks).
- Backdrop filters: nav `blur(24px)` (none ≤767). Exit-modal block `blur(10px)`. Video play bubble `blur(10px)`.
- Filters: nav badge glow `blur(28px)`. Oval illustration `saturate(1.24)`.

### 0.6 Typography
**Fonts actually loaded on the homepage** (`document.fonts` status=loaded + network):
| Family (CSS name) | Weight | File URL |
|---|---|---|
| `Inter` | 400 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/62a4ee4943d232746a1b1446_Inter-Regular.otf |
| `Inter` | 500 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/62a4ee497c276f0e18345d38_Inter-Medium.otf |
| `Inter` | 600 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/62a4ee494468e76b4a796bf2_Inter-SemiBold.otf |
| `Inter Display` | 600 | https://cdn.prod.website-files.com/62a4ed18ddad95dde8b8bfa4/67b39f238024c544d2154efa_InterDisplay-SemiBold.ttf |

These are OTF and TTF files, not woff2; the site serves no woff2. All faces use `font-display: swap`.

The Webflow CSS also declares **Circular** (XX Thin…ExtraBlack .otf), **Ebgaramond** (EB Garamond .ttf, incl. variable), **Geistmono** (Geist Mono .otf) and Inter 700/italics. **None of them are used or loaded on the homepage**, so do not ship them (URLs are listed in CLONE_ASSETS.md §F for completeness).

Weight **550** is used by overline, heading-m and navlink.light-text. Only static 500 and 600 faces exist, so it renders with the **600 (SemiBold)** file. Keep `font-weight:550` in CSS (or use 600; it looks identical).

Fallback stacks: `Inter, sans-serif` for text. `"Inter Display", Arial, sans-serif` for display headings.

**Type scale (computed):**
| Class / role | Family | Size / line-height | Weight | Letter-spacing | Notes |
|---|---|---|---|---|---|
| `.text-display-h1` (hero h1) | Inter Display | 60 / 68 | 600 | −0.45px (−0.0075em) | ≤767: 52/60, ls −0.39. ≤479: 38/48, ls −0.285 |
| `.text-display-h2` (section titles) | Inter Display | 44 / 53.76 | 600 | −0.33px | ≤991: 40/52 (−0.30). ≤479: 36/48 (−0.27) |
| `.text-display-h3` | Inter Display | 36 / 44 | 600 | −0.26px | product card h3, "Your new secret weapon", sharing h2 |
| `.text-display-h4` | Inter Display | 28 / 36 | 600 | −0.20px | extension title, exit modal title |
| `.text-display-h5` | Inter Display | 24 / 32 | 600 | −0.16px | footer ad total |
| `.text-body-l` | Inter | 18 / 28 | 400 | −0.26px | section paragraphs, hero subtitle |
| `.text-body-m` | Inter | 16 / 24 | 400 | −0.18px | |
| `.text-body-s` | Inter | 14 / 20 | 400 | −0.09px | |
| `.text-body-xs` | Inter | 12 / 20 | 400 | inherits −0.18px | |
| `.text-label-l` | Inter | 18 / 24 (inherited) | 500 | −0.26px | ≤767: 16px |
| `.text-label-m` | Inter | 16 / 24 | 500 | −0.18px | tab labels, card titles |
| `.text-label-s` | Inter | 14 / 20 | 500 | −0.09px | menu item titles |
| `.text-heading-m` (all button labels) | Inter | 16 / 24 | 550 (renders 600) | −0.18px | |
| `.text-overline` | Inter | 12 / 16 | 550 | **2px** (0.166667em) | uppercase |
| `.text-navlink` | Inter | 15 / 20 | 400 | −0.18px | `.light-text` → 550. ≤991: Inter Display 20/28 600 |

Color helper classes: `.text-white` #fff. `.text-alpha-50` rgba(255,255,255,.84). `.text-alpha-100` rgba(255,255,255,.68) (also `flex:1`). `.text-solid-400` #4c505f. `.text-solid-500` #343642 (text-wrap pretty). `.text-solid-600` #24262e. `.text-solid-900` #090a0e. `.text-balance` (text-wrap balance).

Hero h1 special treatment: `color: rgba(255,255,255,0.88); background-image: radial-gradient(circle at 50% -100%, #fff, rgba(255,255,255,0.88)); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color: transparent; text-wrap: balance`.

### 0.7 Buttons (shared component)
Structure: `a.button-* > .button-text-block(padding 0 6px, z2) > .text-heading-m` plus an optional `.button-icon-block.icon-right` (24×24 box `.icon-medium`, margin-left −4px, opacity 0.68, or 1 with `.opacity-100`). The icon is a chevron-right in a 20×20 viewBox (SAVED.html, 236-char inline svg). Button: `display:flex; padding:8px; border-radius:10px; gap:0; z-index:5; position:relative`. Heights: 40 (borderless) or 42 (1px border).

| Variant | bg | text | border/ring | hover | active | transition |
|---|---|---|---|---|---|---|
| `.button-dark.button-primary` | #fff | #090a0e | — | bg rgba(255,255,255,.84) | bg rgba(255,255,255,.44) | `all .2s ease` (`flex:1`) |
| `.button-dark.button-secondary` | #090a0e | #fff | 1px solid #24262e | bg rgba(255,255,255,.06) | bg rgba(255,255,255,.32) | .2s |
| `.button-dark.button-ghost` | #020308 | #fff | — | bg rgba(255,255,255,.10) | bg rgba(255,255,255,.20) | .2s |
| `.button-light.button-primary` | #020308 | #fff, weight 500 | — | bg #24262e | bg #4c505f | `.15s` |
| `.button-light.button-stroke` | #fff | #090a0e | ring 0 0 0 1px #e9eaef | bg #f9f9fa, ring→0 | bg #e9eaef | .15s |
| `.new-button.new-button-navbar` | #fff | #090a0e, 600 | — | bg #dddee5 | bg #c3c5d2 | `.6s cubic-bezier(0.19,1,0.22,1)` |

Measured widths at 1440: hero "Start Free Trial" 159.3×40. Nav "Start free trial" 145.9×40 (label 15px/20 550). "Get Free Trial" secondary 150.8×42. "Learn More" ghost 133.7×40. "Install Free" 130.6×40. CTA "Start free trial" 152.6×40. "View Pricing" 124.4×42 (no icon).

`.main-cta-buttons`: flex, gap 12, z 2. ≤479: grid 1 column, gap 12, stretch (buttons become full width).

### 0.8 Nav sticky behaviour
`.navigation` is `position: sticky; top: 0; z-index: 100; height: 72px`. Its look does not change on scroll; there is no scroll listener and no shrink.

---

## 1. Navbar (`div.navigation.w-nav`, data-collapse="medium", data-animation="default", data-duration=400, easing "ease")

### 1.1 Desktop (≥992), measured at 1440
- `.navbar-container`: flex, space-between, align center, width 1440, padding 0 40.
- `.nav-stack` (relative): 1360×72, padding 16, gap 36, flex, space-between, align center.
- Brand `a.nav-brand`: x=56, 116×40, padding 4, radius 10. Logo `.u-nav-brand-logo` 108×32 (svg viewBox 0 0 108 32, SAVED.html L440, which references the sprite at L378), transition .2s, hover opacity .8.
- `.nav-menu` (flex 1, 1176 wide at x=208) → `.nav-menu-inner` (flex, space-between):
  - `.navmenu-links`: flex, gap 12, align center, 538 wide. Items in order: Product▾ (x208, 94.4×32), Solutions▾, Resources▾, Pricing (x554.6, 67.3×32), Book a Demo.
    - Dropdown toggle `.nav-dropdown-toggle`: flex, gap 4, padding 6px 6px 6px 10px, radius 10, color rgba(255,255,255,.52). Text 15/20. Chevron icon 20×20 (`<use href="#sprite-chevron" class="chevron-icon">`, stroke 1.5, currentColor). Hover color rgba(255,255,255,.84). Open (`.w--open`) color #fff. Transition `.5s cubic-bezier(0.19,1,0.22,1)`. The chevron rotates 180° when `[aria-expanded=true]`, with `transform .5s cubic-bezier(0.16,1,0.3,1)`.
    - `.navlink` (Pricing, Book a Demo, Sign in): padding 6px 10px, radius 10, color .52, hover .84, same .5s transition.
  - `.navmenu-cta`: flex, gap 8, justify end. Contains "Sign in" (`.navlink.u-navlink-signin`, 66.3×32) and "Start free trial" (`.new-button-navbar`, 145.9×40, x=1238).
- Links: Sign in → https://app.foreplay.co/login. Start free trial → https://app.foreplay.co/sign-up. Pricing /pricing. Book a Demo /book-demo.

### 1.2 Dropdown panels (Webflow dropdown, click to toggle, `data-hover=false`; only one open at a time)
Shared:
- `nav.nav-dropdown-menu` is `position:absolute; top:100%` of `.nav-stack` (so y=72), with `left:0; right:0` (width = nav-stack 1360 at 1440, 1200 at 1280), `margin-top:-5px` (visible top at y=67).
- Closed: `display:block; opacity:0; pointer-events:none; transform: translateY(-8px) scale(0.96)`. Open (`.w--open`): `opacity:1; transform:none; pointer-events:auto; z-index:5`. Transition `all .5s cubic-bezier(0.19,1,0.22,1)`.
- `.nav-dropdown-menu-inner`: bg #020308, `border:1px solid #2a2b30`, radius 28, overflow hidden, width 100%.
- Overline titles `.nav-overline-title`: flex, padding 8, margin-bottom 8, radius 6, color rgba(255,255,255,.84). Text is `.text-overline` (12/16, 550, 2px, uppercase).
- Focus management: an inline script toggles `inert`/`aria-hidden`/tabindex on the list (SAVED.html inline script "Dropdown Focus Management").

**Product menu** (`.nav-product-menu`, flex). Height 363 at ≥1280.
- Left `.nav-product-menu-links` (flex 1, 994 wide at 1440) is a 10-column grid (`repeat(10,1fr)`, gap 0):
  - `.nav-product-menu-links-research` spans 6 columns. Padding 16 16 0, overflow hidden. Title "Research". `.nav-badge-list` flex gap 12 with 3 badges (Swipe File, Discovery, Spyder).
  - `.nav-product-menu-links-analytics` spans 4 columns, `border-left:1px solid #2a2b30`, padding 16 16 0. Title "Analytics & Production". Badges: Lens, Briefs.
  - `.nav-product-menu-links-sub` spans 10, `border-top:1px solid #2a2b30`, padding 16. Title "Extend". `.u-nav-product-menu-links-sub-list` is a 4-column grid, gap 12: Chrome Extension, MCP, Mobile App, API. Item `.u-nav-sub-link`: flex gap 12, padding 8, hover opacity .68 (transition opacity .2s). It holds the icon box `.u-nav-icon-box` (44×44, padding 10, radius 12, bg rgba(255,255,255,.1), 24px icon, SAVED.html L445/453/468/476) and the label `.text-label-s` in white.
  - Badge `.nav-badge-link`: flex column, centered, padding 8 8 0, 180×172 at 1440. Title `.text-label-s` white (14/20 500). Description `.text-body-s` rgba(255,255,255,.68), centered. Icon `.nav-badge-icon.sprite-image` 88×88, margin 16px 0 −20px, z2, clipped by the column bottom. Glow `.nav-badge-gradient`: absolute, bottom −40%, 116×116, radius 16%, `filter: blur(28px)`, opacity 0, `transform: translateY(50%)`, `transition: all .8s cubic-bezier(0.19,1,0.22,1)`. Badge hover (≥992) sets opacity 1 and translateY(0). Glow gradients:
    - swipe: `linear-gradient(rgba(31,105,255,0), rgb(31,105,255) 70%)`
    - discovery: `linear-gradient(rgba(117,64,183,0), rgb(117,64,183) 70%)`
    - spyder: `linear-gradient(rgba(237,97,90,0), rgb(237,97,90) 70%)`
    - briefs: `linear-gradient(rgba(0,168,121,0), rgb(0,168,121) 70%)`
    - lens: `linear-gradient(rgba(231,126,110,0), rgba(231,126,110,.3) 12%, rgba(233,212,104,.6) 31%, rgba(115,211,195,.75) 52%, rgb(93,120,228) 70%)`
  - Badge copy: Swipe File "Save & share creative inspiration." → /swipe-file. Discovery "Ad search engine with over 100M ads." → /discovery. Spyder "Track and analyze competitor advertising 24/7" → /spyder-ad-spy. Lens "Advertising analytics for creative teams." → /lens-creative-analytics. Briefs "Turn inspiration into actionable briefs." → /briefs.
- Right `.nav-product-menu-banner` (display:none below 1280; ≥1280 flex, 364 wide) → `.nav-product-banner-video`: `border-left:1px solid #2a2b30`, padding 80 24 0, gap 20, column, centered.
  - Title row: play-circle icon 20 + "What is Foreplay?" (label-s, white).
  - `.nav-lightbox` 240×150, radius 10, overflow hidden. It contains a Webflow background video (FOREPLAY_V6 mp4/webm, poster jpg; 1280×720, 3.47s loop, autoplay muted) and a centered play bubble `.div-block-356` (50×50, radius 100, bg rgba(255,255,255,.5), backdrop-blur 10, 20px play icon).
  - Click opens a Webflow lightbox with the YouTube video `k40dfSJUfhE` (940×528). Implement as a modal with an iframe.

**Solutions menu** (`.nav-solutions`, 12-col grid). Panel height 234.
- `.u-nav-solutions` spans 12, padding 16 16 20, gap 16. Title "Foreplay is For;".
- `.u-nav-solitions-list` is a 4-column grid, gap 12 (columns 322.5 each at 1440), 2 rows of 64.
- Item `.u-nav-link-solutions-content`: flex row, gap 12, padding 8, hover opacity .8. Icon `.industries-icon.small` 48×48, `border:1px solid rgba(255,255,255,.16)`, radius 12, 24px icon (SAVED.html L529–545). Label `.text-label-s` in white.
- Items: E-Commerce & Retail (/industries/ecommerce), Agencies, Mobile Apps & Gaming (/industries/mobile-apps), B2B & SaaS (/industries/b2b-saas), Info, Education & Community (/industries/info-education-community), Freelancers & Creators (/industries/freelancers-creators). Two empty `<li>` follow.

**Resources menu** (`.nav-resources-menu`, 12-col grid, rows 152 + 173). Panel height 327.
- `.u-nav-resources-learn` spans 9 columns, padding 16 16 20, gap 16. Title "Learn". `.u-nav-resources-list` is a 5-column grid, gap 12.
- `.u-nav-resources-earn` spans 9 columns, `border-top:1px solid #2a2b30`, same padding. Title "earn" (renders uppercase).
- Item `.u-nav-link-content`: column, gap 4, padding 8, hover opacity .8.
  - Title row `.u-nav-banner-title`: flex, gap 5, nowrap. Contains a 20px icon and `.text-label-s` in white.
  - Description `.text-body-s` rgba(255,255,255,.68).
- Learn: University "Ad masterclasses" /university. Events & Webinars "Live workshops + Q&A" /fireside. Knowledge Base "Guides and tutorials" https://help.foreplay.co/. Experts "Free Swipe Files" /experts. Blog "Marketing news & tips" /blog.
- Earn: Affiliate Program "Make over $10k/mo reffering Foreplay" (sic) /affiliates. Work with Brands "Get world-class creative services." /work-with-brands. Agency Directory "Discover the worlds best agencies." /agency-directory.
- Merch banner `a.u-nav-resources-banner` spans 3 columns and 2 rows, justify-self end. Max-width 275 (275×305 at 1440), margin 10, padding 25 0 36, radius 18, `border-left:1px solid #2a2b30`, overflow hidden, hover opacity .8. Links to https://shop.foreplay.co/ (new tab).
  - Text block (z2, centered, max-width 200, gap 4) in #090a0e: cart icon + "Merch" (label-s), "Shop workwear for marketers" (body-s).
  - Background `.merch-video`: absolute, inset −1% 0 0 −7%, 112%×115%. It holds `<video autoplay muted loop playsinline src="https://publicassets.foreplay.co/Website-Loop.webm">` (720×900, 6.05s).

### 1.3 Tablet/mobile nav (≤991)
- `.container.navbar-container` gets padding 0 8 and z5. `.nav-stack` has padding 12 16, height 72. The brand sits at x=24.
- `.nav-menu-button` is visible: 44×44, padding 12, radius 8, white. Its 20px icon is a two-line hamburger (SAVED.html L575). When open, bg is rgba(255,255,255,.06).
- Opening uses the Webflow nav: `.w-nav-overlay` is absolute at top 72, full width, overflow hidden. The `.nav-menu` slides down from `translateY(-100%)` to 0 over 400ms `ease`, and back up when closed.
- `.nav-menu-inner`: bg #020308, padding 12 20 24, radius 0 0 28 28 (≤479: 0 0 16 16), `box-shadow: inset 0 0 0 1px rgba(0,0,0,.2)`, column, align start, gap 12 (≤479: 40). At 390 it is 390×440.
- `.navmenu-links`: column, stretch, gap 12. Every toggle and link is padding 8 0, white, with `.text-navlink` in Inter Display 20/28 600. Toggles are 44 tall.
- `.navmenu-cta`: column, stretch, gap 8. "Start free trial" is full width and 44 tall. "Sign in" is centered and 44 tall.
- Mobile dropdowns open inline (`position:relative; display:flex; flex-direction:column`), as follows:
  - Product: 1-column lists. Badges become rows (gap 12, padding 0). Icons are 40×40 static images (CSS bg `pi-*-hq.webp`, background-size cover). Glow is hidden. Sub-list is a column.
  - Resources: Merch banner hidden. Lists are columns with gap 8, and items are rows with padding 4 0.
  - Solutions: list is a column with gap 8.
- ≤767: nav bg is rgba(2,3,8,.94) with **no backdrop blur**.

---

## 2. Hero (`section#product-hero-section.section.relative`)
At 1440: y 72→1355, height 1283. At 1280: height 1249.7. At 991: 1267. At 767: 1147. At 390: 1027.

### 2.1 Layout
- `.dot-bg`: absolute inset 0, opacity .66, pointer-events none.
  - `background: url(dot-grid.webp) repeat; background-size: 380px 380px; background-position: 50% 0`.
  - `mask-image: linear-gradient(to bottom, transparent 0%, #000 20%, #000 75%, transparent 100%)`.
  - ≤767: size 256×256 and mask `transparent 0, #000 30%, #000 75%, transparent 100%`.
- `.container.section-container` (max 1344, px 40) → `.home-hero`: flex column, gap 64, padding 60 0 80, relative. Width 1264 at 1440.
  - `.home-hero-animation-trigger` (data-w-id `c1e0d7b4-84e0-ca9c-45c3-0046d7256357`): absolute, top −72, left/right 0, height 100vh, pointer-events none. This is the IX2 scroll trigger (§2.3).
  - `.home-hero-sticky`: `position:sticky; top:132px`. 1264×540 at 1440.
    - `.home-hero-top`: column, space-between, align center, gap 40, margin-top −12, padding 12 0 80. Height 376.
      - `.home-hero-content`: column, centered, gap 12, max-width 960, text-center, text-wrap balance.
        - h1 "The Complete Winning Ad Workflow" (960×136, 2 lines, 60/68).
        - Subtitle `.text-alpha-50 > .text-body-l`, rgba(255,255,255,.84), 18/28, 960×56: "Everything you need to predictably make ads that convert, from the first spark of inspiration saving ads from facebook ad library to the final performance report."
      - `.home-hero-cta` (flex, gap 12, flex none): one `.button-dark.button-primary` "Start Free Trial" (159.3×40, centered, y=376 relative to page) → https://app.foreplay.co/sign-up.
    - `.home-hero-bottom` (relative): column, gap 40, centered, height 176.
      - Overline `.text-alpha-100 > .text-overline` "Powering +10,000 Social Ad Teams & Agencies", rgba(255,255,255,.68).
      - `.home-hero-logo-grid`: 7-column grid, gap 16, 2 rows of 52 → 1264×120.
        - Cell `.home-hero-logo-wrapper`: padding 12, flex centered, color rgba(255,255,255,.84). Hover color .68 (transition .2s).
        - Logo `.home-hero-logo-image`: flex, height 28; the inline SVG is ~24 tall and uses `fill: currentColor`.
        - 14 inline SVG logos in order: HelloFresh, Canva, AG1, ClickFunnels, True Classic, The Ridge, Paramount, Pearmill, Common Thread Collective, VaynerMedia, Lunar, Käsper, KlientBoost, dentsu (SAVED.html L581–713; viewBoxes 72×24, 63×21, 58×24, 130×19, 95×21, 83×20, 94×26, 76×21, 75×33, 121×13, 74×17, 77×23, 87×26, 84×18 in DOM order).
  - `.home-hero-overlay`: absolute, inset 33% 0 −10% (at 1440: top 423, height 988). `background-image: linear-gradient(0deg, #020308 10%, rgba(2,3,8,0) 100%)`, pointer-events none. It paints over the sticky block (later in DOM, no z-index).
  - `.home-hero-middle`: relative, z1, margin-bottom −120px. 1264×659 at 1440.
    - `.home-hero-mockup`: column, centered, overflow hidden.
    - `.homepage-video` (Webflow background video): width 100%, `aspect-ratio: 1400/730`, overflow hidden. The `<video>` is object-fit cover (autoplay, loop, muted, playsinline), source `home-video-transcode.mp4`/`.webm`, poster `home-video-poster-00001.jpg`. The video is 1280×668 and 20.73s long.
    - `.home-video-overlay`: absolute, inset 50% 0 0, `linear-gradient(0deg, #020308, rgba(2,3,8,0))`. Hidden ≤991.
- Video box sizes: 1440 → 1264×659. 1280 → 1200×626. 991 → 927×483. 767 → 719×375. 390 → 374×195 (margin 0 −16).

### 2.2 Responsive
- ≤991: `.home-hero` padding 64 0 48. `.home-hero-top` justify center. Logo grid has 5 columns (172.6 each at 991, 3 rows). Logo wrapper padding 12. Video overlay hidden. Sticky height becomes 608.
- ≤767: h1 52/60. `.home-hero-top` padding-bottom 80 (height 360). CTA becomes a 2-column grid (single button stays 159 wide, centered). Logo grid has 4 columns (167.75 at 767, rows 48), wrapper padding 12 0, logo height 24 with `transform: scale(.85)`. **`.home-hero-sticky` becomes `position:relative; top:0`**. `.home-hero-middle` overflow hidden. Hero padding-bottom 0.
- ≤479: h1 38/48. `.home-hero-top` align stretch, padding-bottom 48. CTA is a 1-column grid (button 342 wide). Overline wraps to 2 lines. Logo grid has 3 columns, gap 24 0, place-items center, max-width 100%. Wrapper padding 8 0, logo height 12 `scale(.75)`. `.home-hero-sticky` static. Overlay hidden. `.home-hero-middle` margin 0 −16, overflow hidden. Video radius 0.

### 2.3 Motion: IX2 "Home / Hero Parallax" (action list a-72, event e-193)
This is the **only** Webflow IX2 interaction on the page.
- Trigger: `SCROLLING_IN_VIEW` on `.home-hero-animation-trigger` (top 0 of document, height 100vh). Continuous, smoothing 0, no start/end offsets.
- Active media queries: `main` and `medium` only (≥768px). Disabled ≤767.
- Target: sibling `.home-hero-sticky`.
- Progress p = scrollY / viewportHeight, clamped to 0..1. This was verified: p is 0.5 at scrollY 450 with a 900px viewport.
- Keyframe 0: translateY 0%, scale 1, opacity 1. Keyframe 100: translateY **−33%** (of the element's own height; −178px for 540px), scale **0.75** (uniform), opacity **0**.
- Measured interpolation is **linear**. The move has an "inOutCubic" easing in the JSON, but smoothing 0 plus continuous mode outputs linear values: −3.667% / 0.9722 / 0.889 at 100px; −16.5% / 0.875 / 0.5 at 450px; −33% / 0.75 / 0 at ≥900px.
- Implementation: on scroll (rAF), `p=clamp(scrollY/innerHeight,0,1)` and `transform: translate3d(0, ${-33*p}%, 0) scale(${1-0.25*p}); opacity: ${1-p}`. Set `will-change: opacity, transform` and the transform origin at center (default). Only apply when `innerWidth ≥ 768`.
- The sticky element (top 132) stays pinned while the video section scrolls up over it. The overlay gradient and z-index 1 on `.home-hero-middle` make the video cover the fading text.

---

## 3. "Your new secret weapon for ads" (Before/After), first white block
`section.section > .section-padding (padding 8) > .section-white-block` → `.container.section-container` → `.home-winning`.

### 3.1 Layout at 1440
- White block: x=8, y=1363, 1424×876. bg #fff, color #171920, radius 36 (≤479: 16), overflow hidden, z2, relative.
- `.home-winning`: column, centered, gap 72, padding 80 0.
- Section head `.section-head` (max 720, column, centered, gap 12, text-center) → `.section-head-wrapper` (gap 12):
  - `.section-head_title.title-dark` (#171920) holds h2 `.text-display-h3` "Your new secret weapon for ads" (36/44, 512.9×44).
  - `.section-head_paragraph` (max-width 512, text-wrap pretty) holds `.text-solid-600 > p.text-body-m` #24262e 16/24 (512×72, 3 lines): "Stop launching ads that don't work. Trade guesswork for the creative process used by the world's fastest growing brands and marketing agencies."
- `.home-winning-grid`: 2-column grid (470 + 470), gap 20, width 100%, max 960. Row height 516.
  - Card `.home-winning-card`: column, gap 24, padding 24, radius 24, ring `0 0 0 1px #e9eaef`, overflow hidden, relative.
  - Card text `.home-winning-card-text` (z10, pointer-events none) → `.flex-col-gap-1.align-start` (gap 4) holds:
    - Label `.text-label-l` 18px 500.
    - Description, 16/24.
  - Card 1 "Before …": label #090a0e, description #343642 "Group chats, expired links and fragmented reports."
    - `#home-before-animation.home-before-animation`: absolute inset 0, flex column, justify end. It contains the **matter.js canvas** (470×516) (§3.3).
    - `.home-before-animation-image-wrapper` (absolute bottom 0, full width) holds `logos-rain.webp` (929×753), which is **display:none ≥768** and is the static fallback ≤767.
  - Card 2 `.is-dark` "After Foreplay": bg #020308, label white, description rgba(255,255,255,.68) "End-to-end feedback loop for winning ad creative."
    - `.home-winning-card-loader-video`: flex centered, height 440, margin −24 (bleeds to the card edges).
    - `.home-winning-card-video` (Webflow bg video): 400×400, z2. Source `home-loader-main-transcode.mp4`/`.webm` (698×720, 8.0s loop), poster `home-loader-main-poster-00001.jpg`. Centered at x=765, y=1739.
    - `.home-winning-card-loader-image` (first_frame.webp 930×960) and `.home-winning-card-loader-video-embed` (an embed `<video>` with **no source**, poster first_frame.webp) are both display:none at every breakpoint. Skip them.

### 3.2 Responsive
- 1280/991: grid 2 columns of 445.5 at 991, card height 476. Loader height 400, and the video is max-width 100% (400×400).
- ≤767: grid 1 column, place-items start center. Card width 100%, max 640, min-height 480, max-height 640 (dark card min-height 320). The canvas container `.home-before-animation` is display none and the static `logos-rain.webp` shows instead (block, full width, bottom-aligned). Loader is a flex container.
- ≤479: `.home-winning` padding 48 0. Grid rows 0.85fr/1fr. Card height 100%, min-height 320 (measured 357 and 420 at 390). Loader height 320, video 280×280.

### 3.3 Motion: "Logo rain" physics (matter.js 0.19.0, saved `matter.min.js`)
Inline script "Logo-rain animation", copied verbatim from SAVED.html.
- It bails out entirely if `navigator.userAgent` matches `/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i`. Its container is also hidden ≤767.
- Container `#home-before-animation` (470×516 at 1440). `Render.create({element: container, options:{width: clientWidth, height: clientHeight, background:'transparent', wireframes:false, pixelRatio: min(devicePixelRatio,2)}})`. The canvas has pointer-events none.
- Engine: `Engine.create({enableSleeping:true})`, `world.gravity.y = 0.7`.
- Walls (static, invisible), thickness t=100: left `rect(-t/2, h/2, t, 5h)`, right `rect(w+t/2, h/2, t, 5h)`, floor `rect(w/2, h+t/2, 2w, t)`.
- Bodies: the first N images, where N = 16 if innerWidth > 768, 12 if ≤768, 8 if ≤480.
  - Size: W = (imgW/2)·min(200/max(imgW/2, imgH/2), 1)·1.2 and H the same with imgH. The 1.2 scaleFactor applies because the container is ≥400 wide; on resize the code sets it to 1, which is an original bug and affects only new bodies.
  - Spawn: x random in [W/2, w−W/2], y = −60.
  - Physics: random rotation ±30° and angularVelocity uniform in ±0.01. `restitution .1, friction .3, frictionAir .00001`. Rendered as sprites with xScale=W/imgW and yScale=H/imgH.
- Start: when an IntersectionObserver (default options, threshold 0) sees the container, call `Render.run` + `Runner.run`, then add bodies one at a time: the first at 300ms, then +300ms each, so all 16 are in by 4.8s. It runs once and the observer disconnects.
- Images (https://publicassets.foreplay.co/hba-asset-NN.webp, with intrinsic sizes used for scaling): 01 210×57, 02 326×57, 03 388×57, 04 250×57, 05 208×57, 06 328×57, 07–11 88×89, 12 114×65, 13 87×87, 14 88×89, 15 88×89, 16 160×153, 17 180×105 (17 is never used on desktop).

---

## 4. Product sections (dark, two `div.section.overflow-hidden` blocks)
Both use `.container.section-container` → `.home-product`: column, gap 80, padding 128 0 40 (≤479 gap 64).

- Section A "Research & Inspiration": y 2247 → 5112 (height 2865) at 1440. It contains the head, 3 product cards (Swipe File, Spyder, Discovery) and the Chrome-extension card.
- Section B "Creative Analytics & Production": y 5112 → 6952 (height 1840). It contains the head and 2 product cards (Lens, Briefs).

### 4.1 Section head (dark variant)
`.section-head` (max 720, gap 12, centered) → `.section-head-wrapper` → children:
- `.section-head_subtitle > .text-overline.text-white-68`, color **rgba(255,255,255,.36)** (class has no rule): "Research & Inspiration" / "Creative Analytics & Production".
- `.section-head_title` (#fff, balance) > h2 `.text-display-h2` 44/53.76. At 720 width it wraps to 2 lines (107.5 tall):
  - A: "Spark creative genius and crush competitors."
  - B: "Identify winning patterns and replicate success."
- `.section-head_paragraph` (max 512) `.text-alpha-100 > p.text-body-l`, rgba(255,255,255,.68), 18/28, 512×84:
  - A: "Ad creative research is your shortcut to success. `<br>` Reverse engineer ads that are already crushing and identify trends."
  - B: "Instantly turn insights into action. Uncover what's working across your ads and translate those learnings into crystal clear creative direction."
- Head height 231.5 at 1440 (h2 block 107.5 + paragraph 84 + gaps).

### 4.2 Product card row `.home-product-grid` (data-tabs, 5 instances)
- Flex row, gap 16, min-height 640 (the 12-column grid template is overridden by `display:flex`).
- Left `.home-product-content`: `flex: 3 1 0`. At 1440 it is 419.2×640 (1280: 400). Column, gap 32, padding 32, radius 24, ring `0 0 0 1px rgba(255,255,255,.1)`, overflow hidden, relative.
  - `.home-research-sidebar-head` (z2, gap 8):
    - `.text-alpha-50 > .text-overline` rgba(255,255,255,.84): "Swipe File" / "Spyder" / "Discovery" / "Lens" / "Briefs".
    - `.text-white > h3.text-display-h3` 36/44, 2 lines at 355px: "Save ads from anywhere, forever" / "Automatically track competitors" / "The smartest ad search engine" / "Know what's working and why" / "Go from concept to launched, faster".
  - `.main-cta-buttons` (gap 12):
    - "Get Free Trial" `.button-dark.button-secondary` (150.8×42) → app sign-up.
    - "Learn More" `.button-dark.button-ghost` (133.7×40) → /swipe-file, /spyder-ad-spy, /discovery, /lens-creative-analytics, /briefs.
  - `.home-product-tabs-links` (z2, column, gap 6, flex 1), with 3 tab links `.home-product-tab-link`:
    - Flex, gap 6, padding 6 20 6 6, radius 10, 36 tall, transition `.4s cubic-bezier(0.19,1,0.22,1)`.
    - Color rgba(255,255,255,.44); hover #fff; `.is-active` #fff. Background stays transparent.
    - Icon: 20×20 svg (Briefs uses 24 viewBox). Label `.text-label-m` 16/24 500.
  - Tab labels:
    - Swipe File: Save & Organize / Automate Transcription / Easily Share & Collaborate
    - Spyder: 24/7 Ad Library Scraper / Analyze Creative Tests / Identify Top Hooks
    - Discovery: Smart Search / AI Creative Analysis / Advanced Filters
    - Lens: Creative Test Analysis / Build & Share Reports / Compare Winning Themes
    - Briefs: Storyboard & Script / Brand Profiles / Modular Brief Builder
  - `.home-product-animation`: absolute, `inset: auto auto -16% -15%`, width 100% (419×426), flex centered. It contains `.padding-video` with `transform: translateY(-15%) scale(1.6)`, which wraps a looping 3D isometric icon video: `<video autoplay muted loop playsinline>` sized 100%×100%. Sources:
    - Swipe File: `cta-swipe-file.mov` (1200², 3.37s)
    - Spyder: `cta-spyder.mov` (1000², 3.36s)
    - Discovery: `cta-discovery.mov` (1000²)
    - Lens: `cta-lens.mp4` (2000²)
    - Briefs: `cta-briefs.webm` with `cta-briefs.mp4` fallback (1200²)
    - These sit bottom-left and are clipped by the card's overflow. The visible part is the glowing isometric icon under the tabs. The `.mov` files play in Chromium (HEVC/alpha).
  - `.product-isometric-image` (static 600×600 webp: iso-swipefile/spyder/discovery/lens/briefs) is display:none ≥992. It is the ≤991 replacement for the video (§4.4).
- Right `.home-product-figure`: `flex: 7 1 0`. At 1440 it is 828.8×640 (1280: 784). bg rgba(255,255,255,.06), radius 24, overflow hidden, relative, flex centered.
  - `.home-product-tab-bg` (absolute inset 0, centered, pointer-events none) holds the background image at its natural size of 752×640: home-swipefile-bg / home-spyder-bg / home-discovery-bg / lens-product-bg / home-briefs-bg (.webp, 2x = 1504×1280).
  - `.home-product-tab-panes` (relative, 100%×100%) holds 3 `.home-product-tab-pane`s (display none; `.is-active` is flex centered). Each contains `img.home-product-tab-image` (object-fit cover, 100%×100%, 2x source 1504×1280).
  - Pane images:
    - Swipe File: swipe-file-slide-1, spyder-transcription-new, Swipefile-3.
    - Spyder: Spyder-1, Spyder-2, Spyder-3.
    - Discovery: Discoverty-1 (sic), discovery-ai-new, Discovery-3.
    - Lens: creative-test-analysis, build-and-share-reports, compare-segments.
    - Briefs: briefs-storyboard-2, brand-profiles, brief-editor.
- Vertical rhythm (1440, section A): head y 2375. Cards at y 2687, 3407 and 4127, with an 80px gap between them. Extension at y 4847.

### 4.3 Chrome extension card `.home-extension` (section A only, after the 3 cards)
- 1264×225.5 at 1440. Flex row, gap 40, padding 40, radius 32, ring `0 0 0 1px #171920`, overflow hidden, relative.
- `figure.home-extension-logo`: absolute `inset: 0 auto 0 -4%` (left −50.6px), width 128, opacity .5, flex align center. Chrome-style logo SVG 128×128 (SAVED.html L746).
- `.home-extension-content`: flex 1, padding-left 80, column, gap 20.
  - `.home-extension-title` (max 480, gap 8):
    - Overline "Free Chrome Extension" rgba(255,255,255,.84).
    - h3 `.text-display-h4` 28/36 white, balanced: "Save ads from Meta, TikTok & LinkedIn Ad Libraries." (480×72).
  - `.home-extension-details` (flex, gap 36): two `.flex-gap-2` items (gap 8). Each has an icon (24, rgba(255,255,255,.68)) and `.text-label-m` rgba(255,255,255,.84): "30,000 Users" (users icon), "4.8/5 Stars" (star icon).
- `.home-extension-cta`: flex, justify end, align end. Holds "Install Free" `.button-dark.button-primary` (130.6×40, icon opacity 1) → Chrome Web Store `https://chromewebstore.google.com/detail/ad-library-save-facebook/eaancnanphggbfliooildilcnjocggjm` (new tab).
- ≤767: column layout (height 305.5). Logo moves top-right: `inset:-5% -5% auto auto`, height 128. Content padding-left 0. CTA becomes a column with the button stretched full width.
- ≤479: **display:none**.

### 4.4 Responsive (product cards)
- ≤991: `.home-product-grid` becomes a column (height 854 = 358 + 16 + 480).
  - Content: flex auto, min-height auto (927×358 at 991). The h3 fits on one line.
  - Figure: height 480. Pane image cover-crops to 927×480.
  - `.padding-video` hidden. `.product-isometric-image` is shown at 300×300 inside `.home-product-animation`, which is now `position:absolute; inset:0 0 auto auto; width:100%; margin:-52px -292px -40px 0` (the icon peeks in at the top-right of the content card).
- ≤767: content align stretch. Animation margin −23px −197px 0 0, image 200×200. `.home-product-tab-pane` aspect-ratio 16/14.
- ≤479:
  - Content: padding 32 24, gap 24, radius 16 (342×438 at 390). Buttons become a 1-column grid with full-width buttons.
  - Figure: radius 16, height auto (342×299).
  - Animation: justify end, align end, margin −16px −58px −219px 0. Isometric image 175×175. The padding-video transform is `translateY(-15%) scale(2)`, but the video is hidden anyway.

### 4.5 Motion (tabs)
Custom inline tabs script ("Custom Tabs Component" in SAVED.html):
- Click or keyboard (Arrow keys wrap) switches the tab. The active link gets `.is-active` and `aria-selected`. In every `[data-tab-panes]` group, the pane with the same index gets `.is-active` and all others are `hidden`.
- **No auto-advance, no timer, no crossfade.** Panes swap instantly via display. Only the link color transitions (.4s cubic-bezier(0.19,1,0.22,1)).
- The first tab is active on init. Focus moves to the clicked link.

---

## 5. Collaboration block (second white block)
`section.section > .section-padding (8) > .section-white-block` at y 6960 (1440). Size 1424×1682 (1280: 1264×1653; 991: 975×2071; 767: 751×1682; 390: 374×1840).

### 5.1 `.home-collab` head
- Column, centered, gap 40, padding 80 0. Height 391.5 at 1440.
- Overline `.text-overline.text-solid-400` #4c505f "Collaboration".
- h2 `.text-display-h2` #171920 "Bringing performance & creative teams together." (720×107.5, 2 lines).
- Paragraph `.text-solid-600` #24262e body-l (512×84): "Magic happens when strategy, creative, and data speak the same language. Foreplay bridges the gap between media buyers, creatives, and agencies."

### 5.2 Testimonial "rays" illustration (`.lens-enrichment.home-enrichment`)
- Wrapper: column, gap 128, `overflow-x: clip`, margin-bottom 80. At 1440 it is 1424×514.
- `figure.lens-enrichment-illustration`: 1-column grid, gap 16, `aspect-ratio: 1440/520`, relative.
  - Margins: −80 (base). ≥1280: −40. ≥1440: width 100%, max-width 1440, margin auto. ≤991: −80. ≤767: −80. ≤479: −72.
  - Measured: 1424×514 at 1440, 1344×485 at 1280, 1135×410 at 991, 911×329 at 767, 518×187 at 390.
  - Both rays sit in grid cell 1/1/2/2.
    - Left ray `.lens-enrichment-illustration-ray` (`#w-node-…85bc8`): z3, width **58.8889%** (838.6 at 1440), height 100%. `border:1px solid #e9eaef` with **no left border**. `border-radius: 0 999px 999px 0`. `background-image: linear-gradient(270deg, rgba(255,255,255,.12), rgba(255,255,255,0))`.
    - Right ray `.is-inverted` (`justify-self:end`): same styles plus `transform: scaleX(-1)`.
    - Each ray has a `.lens-enrichment-illustration-fader.is-light` (z2, width 72, margin −2): `linear-gradient(90deg, #fff, rgba(255,255,255,0))`. It fades the open (left) end of the ray.
  - `.lens-enrichment-illustration-intersection`: absolute, full size, centered, z3, pointer-events none. It holds `.lens-enrichment-illustration-oval_shape` (z5, aspect 1/1, height 100%, `filter: saturate(1.24)`, `transform: scale(0.97, 0.993)`, preserve-3d) with an inline SVG (viewBox 0 0 520 520, SAVED.html L783, 2857 chars) that draws the colourful central lens/oval.
  - `.lens-enrichment-illustration-overlay`: absolute inset 0, z5, pointer-events none (empty).
- Testimonial pins are `.lens-integrations-tooltip-container.is-N`: absolute, `transform: translateX(-50%)`, inside `.lens-enrichment-tooltip_layer` (absolute inset 0). The layer inside the right ray also has `.is-inverted` (scaleX(-1)), so its content reads correctly. Positions are percentages of the ray box:
  | # | Ray | Base | ≤991 | ≤767 | ≤479 | Person (avatar file) |
  |---|---|---|---|---|---|---|
  | 1 | left | top 45%, left 33% | left 45% | left 50% | top 44%, left 50% | Connor MacDonald, CMO @ Ridge Wallet |
  | 2 | left | top 16%, left 50% | left 58% | top 12%, left 60% | top 12% | Nick Shackelford, Founder @ Structured & Konstant Kreative |
  | 3 | left | top 76%, left 50% | left 58% | left 60% | — | Savannah Sanchez, Founder @ The Social Savannah |
  | 4 | right | top 24%, right 15% | — | top 45%, right 40% | top 39%, right 36% | Stephen Hakami, Founder @ Wiza |
  | 5 | right | top 10%, right 40% | — | right 50% | — | Dara Denney, Director of Performance Creative |
  | 6 | right | top 50%, right 26% | — | display none | display none | Christina Bell, Growth Lead @ Webtopia |
  | 7 | right | top 77%, right 40% | — | right 50% | top 70% | Oren John, Creative Director |

  Layer offsets: ≤991 the layer is `width:100%; left:auto; right:7%` (inverted layer: right −8%). ≤767: right 9% (inverted 8%). ≤479: top −2%, right 6%.
- Pin = `.lens-enrichment-tooltip` (z4, column, relative):
  - Trigger: `.lens-enrichment-tooltip-trigger` > `img.home-collab-tooltip-avatar`, 72×72 round (≤991 56, ≤767 48, ≤479 32). Transition 300ms cubic-bezier(0.33,1,0.68,1).
  - Hover card: `.lens-enrichment-tooltip-wrapper`, absolute, bottom 100%, left 50%, translateX(−50%), `visibility:hidden` (display none ≤767). Inside it, `.lens-enrichment-tooltip-body.is-auto-height`: width 276, padding 4, gap 4, bg #24262e, radius 16, margin-bottom 24, column.
    - First child `.div-block-327` (bg rgba(0,0,0,.2), radius 12) holds `.p-3` (12px) with the quote in `.text-body-s` rgba(255,255,255,.84).
    - Second `.p-3` holds a row (gap 12): avatar 40×40 radius 6 (rendered 32 inside the scaled card), name `.text-label-s` rgba(255,255,255,.84) and role `.text-body-s` rgba(255,255,255,.68).
  - Hover motion (CSS): the body goes from `opacity:0; transform: translateY(24px) scale(0.8)` to `opacity:1; transform: translateY(0)`, transition `all 300ms cubic-bezier(0.33,1,0.68,1)`, with the wrapper becoming visible. The avatar gets `box-shadow: 0 0 0 3px #fff, 0 0 0 5px #4c505f`. The same applies on `:focus-visible`.
- Quotes (verbatim in SAVED.html L783–855):
  1. "Foreplay is a key piece of how we find, save, review, and communicate around performance creative assets. It's really reduced a lot of friction in the process and has allowed us to review and save 10x more content than we would have otherwise."
  2. "My team uses it daily. Creative communication between performance teams, clients and strategists has always been a massive bottleneck. Foreplay added structure & efficiency that simply let's everyone do their best work while cutting down needless back and forth."
  3. "We use Foreplay literally every day at our agency. It started as a simple way to collect ad inspiration but it has turned into such a crucial part of our workflow internally, but more importantly for client communication"
  4. "We operate in a highly competitive market, and every time I use Spyder, it feels like an unfair advantage. We have been using it since beta, and easily 90% of our winning ads come from Spyder insights."
  5. "This is the #1 tool in my facebook ads toolkit. I use it daily for creative strategy research, compiling content ideas for clients, and even personal content development. If you're trying to make better ad creative, Foreplay is not just "a nice to have". It's a must."
  6. Once we found Foreplay it became our agencies one-stop shop for everything creative research and creative analysis. Lens specifically has catapulted our creative testing for the better.
  7. "Everyone who works in creative strategy knows 90% of your success ends in a brief with references. Every week I schedule time to build out moodboards for our projects. I do most of this work in Foreplay since I can save content from anywhere including my mobile phone."
- Responsive: ≤991 wrapper padding-bottom 40. ≤767 gap 80, margin-bottom 0.

### 5.3 Sharing & Presenting (`.container > .home-sharing`, data-tabs)
- At 1440: 2-column grid (632 + 632), gap **80** (≥1440; otherwise 40 → 572+572 at 1280), padding-top 96, align stretch. Height 696 (row 600).
- Left `.home-sharing-content` (column, gap 40):
  - `.section-head.is-align-left` (gap 12, left-aligned):
    - Overline `.text-solid-500` #343642 "SHARING & PRESENTING".
    - h2 `.text-display-h3` 36/44 #171920 balanced, 2 lines: "Beautifully present wins and opportunities".
    - Paragraph `.text-solid-600 > p.text-body-l` #24262e balanced (632×56): "Impress your clients or wow your co-workers. Foreplay makes it seamless to share inspiration, performance reports and briefs with anyone, anywhere."
  - `.line`: 1px, bg #e9eaef.
  - `.home-sharing-tabs` (flex, gap 12, z2):
    - `.home-sharing-tabs-links` (column, gap 6, flex 1 → 310 wide): 3 links `.home-sharing-tab-link`. Each is 32 tall, padding 6 20 6 6, gap 6, radius 10, color #171920, text `.text-label-s`, icon 20. Hover and `.is-active` bg #f9f9fa. Transition .4s cubic-bezier(0.19,1,0.22,1). Labels: Inspiration & Moodboards / Performance Reports / Briefs & Asset Collection.
    - `.home-sharing-tabs-panes` (flex 1): the active `.home-sharing-tab-pane` holds `.home-sharing-tab-cta` (bg #f9f9fa, radius 18, padding 8, gap 12, column; 310×196 at 1440). Inside it, `.home-sharing-tab-cta-content` (padding 8, gap 12) holds:
      - Title `.text-label-s` #171920.
      - Body `.text-body-s` #171920.
      - Button "Start For Free" `.button-light.button-primary` (full width 294×40) → app sign-up.
    - CTA copy per tab:
      1. "Curate & collaborate on creative genius" / "Like Pinterest for ad inspiration, Foreplay lets you create mood boards to communicate internally or show off externally."
      2. "Highlight trends. Back it with proof." / "Turn creative data into deck-worthy insights. Share visual reports that break down what's driving performance — and what's just taking up space."
      3. "Brief once. Collect everything." / "Send one brief to multiple creators and gather all their work in one clean, organized place. `<br><br>` No more chasing links, files, or context across multiple platforms."
- Right `.home-sharing-tab-panes-2`: `aspect-ratio: 720/680; width: 60vw; max-width: 720px; margin-top: -80px; margin-right: -999px`. It overflows to the right and is clipped by the white block's overflow hidden. At 1440 it is at x=760, y=7961, 720×680.
  - The active pane (relative, flex centered) holds `img.home-mockup` 100%×100% (hands-holding-tablet mockup 1/2/3, 1440×1360 source, `loading=eager`) and an `img.home-sharing-message` overlay: absolute, width 45%, top 25%, left 5%.
    - Reports: top 58%, left 7%.
    - Briefs: `inset: auto auto 16% 29%`.
    - Images: moodboard-message (1120×356), reports-message (1119×339), upload-content-message (835×257).
  - Both pane groups switch together via the same tabs script.
- Responsive:
  - ≤991: flex column, align center. Content padding-bottom 0. Panes-2 width auto, max-width none, height 640, margin 0 (677.6×640 at 991).
  - ≤767: panes-2 width 100%, height auto, max-height 480 (703×400). The active pane gets bg #f9f9fa and radius 20. Mockup width auto, height 400.
  - ≤479: padding-top 80, gap 8. Tabs become a column with gap 32. Panes-2 height auto, pane height 320, mockup height 320, active pane column.

---

## 6. Features "Miles beyond the status quo" (`section.section > .lens-enrichment_security`)
- Wrapper: column, gap 108 (≤991: 40), padding 108 0 (≤479: 80 0), overflow hidden. At 1440: y 8649, height 913.
- `.container` → `.lens-security`: max 1152, centered, column, gap 48.
- Head (dark):
  - Overline "Features" rgba(255,255,255,.36).
  - h2 "Miles beyond the status quo" (551×53.8, 1 line).
  - Paragraph rgba(255,255,255,.68) body-l 512×84: "Say goodbye to juggling half-baked tools. Foreplay offers enterprise grade functionality with beginner friendly ease of use."
- `.lens-security-grid`: 3-column grid (383.3 each), gap 0, `border:1px solid #171920`, radius 28. 1152×471.5. No overflow clip.
  - `.lens-security-card`: column, padding 24 24 16. The middle card has left and right borders 1px #171920.
    - Head `.lens-security-card-head`: flex, gap 8, white. Icon 24 + h3 `.text-label-m` (16/24 500).
    - Body `.lens-security-card-body.home-card-body`: margin 0 −24, height auto. Holds `img.lens-security-card-illustration` at width 100% (383×287 for 4:3 images; the API image is 768×528 → 383×263).
    - Holder `.card-button-holder`: column, flex 1, justify end, gap 15, padding-top 15, balanced text. Text `.text-alpha-50 > .text-body-m` rgba(255,255,255,.84), then `.ml-2-5` (margin-left −10) with a ghost button.
  - Cards:
    1. "Expert Swipe Files": expert-boards-img.webp / "Unlock the private swipe files behind the world's best ad creative specialists." / button "Browse Experts" → /experts.
    2. "Mobile App": mobile-app-block.webp / "Take your creative workflow on the go and save ads from anywhere." / "Download App" → /mobile-app.
    3. "API": `Frame 1171276106.webp` / "Enriched competitor advertising data in an agent agnostic API." / "Learn More" → /api.
    - Card icons are inline SVGs at SAVED.html L870, L878, L884.
- ≤991: grid becomes 1 column, max-width 480, centered (478-wide cards, rows 540/542/511). The middle card switches to top and bottom borders (left/right none). h2 40/52.
- ≤479: card padding-bottom 24. Head relative. Body margin-top −39 (the image tucks under the head).

---

## 7. Final CTA (`div.section.overflow-hidden > .container.section-container > .home-cta`)
- `.home-cta`: column, centered, gap 36, padding-top 108 (≤479: 80, align stretch). At 1440: y 9563, height 1037.5.
- `.section-head.is-large` (max 960, z2, relative):
  - `.section-head_title` holds h2 "Ready to ship more winning ads?" (645×53.8).
  - `.section-head_paragraph.is-large` (max 640, color .36, balanced) holds `.text-alpha-100 > p.text-body-l` rgba(255,255,255,.68): "Unlock the power of Foreplay with an unrestricted 7 day free trial."
- `.main-cta-buttons`: "Start free trial" primary (152.6×40, icon opacity 1) → app sign-up, and "View Pricing" secondary (124.4×42, no icon) → /pricing.
- `.home-cta-image-wrapper`: margin **−8% −40px** (percentages of container width: −101px top/bottom at 1440, −96px at 1280).
  - It holds `img.home-cta-image` with natural width (1440×924), `max-width:none`. The image shows two people at a laptop and fades into the dark bg; it is a 2880×1848 2x webp.
  - At 1440 the image spans x 0→1440. At 1280 it is x −80→1360, clipped by the section's overflow hidden.
  - ≤991: image width 100%, height auto (991×636).
  - ≤767: wrapper margin −57.5px −80px −20% (bottom −20% ≈ −144px).
  - ≤479: margin 0 −64px −20%, image 470×302.

---

## 8. Footer (`footer.u-footer`)
- margin-top 40, padding 40 0 (≤991 padding-top 120, ≤767 96). Container `.footer-container` (max 1216, px 40). At 1440: y 10640, height 892.
- `.u-footer-block`: column, gap 44 (≤767: 40), padding-bottom 60. 1136 wide.

### 8.1 Product badges row (`.footer-products > ul.list`)
- `ul.list`: flex wrap, gap 16. 5 `li.list-item` (flex 1).
- Badge `a.u-footer-product-badge`: flex, gap 12, padding 8 10, min-width 200, color rgba(255,255,255,.72). 214.4×60 at 1440.
  - Icon `.footer-product-icon.sprite-image` 44×44.
  - Text: `.text-body-s` (rgba(255,255,255,.72)) above `.text-white > .text-label-m` (#fff).
- Badges: "Organize Ad Inspo / SwipeFile" (/swipe-file, sprite library, 54 frames), "Browse +100M Ads / Discovery" (62), "Track Competitors / Spyder" (31), "Creative Analytics / Lens" (21), "Write briefs with AI / Briefs" (55).
- ≤991: badges nowrap, wrap to 2 rows (row height 136 total). ≤479: badge padding 4 0, 1 per row (342×52), 324 total.

### 8.2 Dividers and company row
- `.footer-divider`: 1px, rgba(255,255,255,.16).
- `.footer-company`: flex, gap 60, align center.
  - Logo (108×32 svg, SAVED.html L1057).
  - `.footer-company-reviews` (gap 28): two `a.u-footer-company-review-block` (gap 12, hover opacity .8). Each has an icon 20 (Chrome / G2) and `.u-footer-company-review-text` (gap 8, color .68) with "4.9/5" in white label-m plus "251 Reviews" label-m (.68), and "4.8/5" + "128 Reviews". Links: Chrome Web Store URL, https://www.g2.com/products/foreplay/reviews.
- ≤767: company becomes a column, gap 24. ≤479: reviews become a column, gap 20.

### 8.3 Link columns (`.footer-links`)
- Grid: 5 × 1fr, gap 16 (≤991: 3 × 1fr with row-gap 32; ≤767: 2 × 1fr), `grid-auto-columns: 1fr`.
- The last child `.ask-ai-wrapper` has `grid-column: span 5`. **This forces 5 implicit columns at every breakpoint.** The original therefore renders 5 narrow columns on tablet and mobile, overflowing to the right at 390 (clipped by body overflow-x clip). This was confirmed with a 390px screenshot. Reproduce it with the same CSS for a faithful clone.
- ≤479: `#footer-text-ad` spans 2 columns (justify-self start, max-width 256).
- Category `.footer-text-category`: column, gap 10 (≤767: 12), color rgba(255,255,255,.92).
  - Title `.text-overline` (12/16, 550, 2px, uppercase).
  - List `.u-footer-link-list` (column, gap 4; ≤767 padding-bottom 24; ≤479 padding-bottom 16).
  - Link `.u-footer-link`: padding 3 0 (≤767: 6 0), color rgba(255,255,255,.68), hover #fff, text `.text-body-s`.
  - Columns:
    1. **Product**: Swipe File, Discovery, Spyder, Lens, Briefs, Chrome Extension, Mobile App, API, MCP.
    2. **Resources**: University, Knowledge Base, API Docs (https://public.api.foreplay.co/docs), Blog, Bounties, Events & Webinars, Agency Directory, Experts, then a "Compare ▾" Webflow dropdown.
       - The dropdown has `.compare-dropdown` padding 3 0, a 20px chevron, and an inline static list `.dropdown-list-5`.
       - Items: a 10×1px dash (rgba(255,255,255,.16)) at gap 7, followed by a link. Links: Motion, Atria, Superads, Magic Brief, Adnova, Gethookd, AdsLibrary.ai, Adscan, SwipeKit → /comparison/{motion, atria, superads, magic-brief, ad-nova, gethookd, ad-library-ai, adscan, swipekit}.
    3. **Solutions**: the 6 industries.
    4. `.footer-double-category` (column, gap 20): **Company** (Pricing, Book a Demo, Careers) and **Community** (Affiliate Program, Wall of Love /reviews, Feature Requests https://feedback.foreplay.co/, Public Road Map https://feedback.foreplay.co/roadmap, Merch Store https://shop.foreplay.co/).
    5. `#footer-text-ad.footer-text-ad` (column, gap 20):
       - Head (gap 12): overline "Ad Count" in white, then `.h-1` (4px spacer), then `#footer-ad-total.text-display-h5` (24/32 Inter Display, white) "264,801,971", then a bar-chart SVG (viewBox 212×41, SAVED.html L1087).
       - Rows `.footer-text-ad-row` (flex, gap 8): "Live" has an 8×8 dot (radius 2, #7cddb5), label `.text-body-s` (.68, flex 1) and value `#footer-ad-live` in white 16/24. "Historical" has a dot `.is-inactive` (rgba(255,255,255,.2)) and `#footer-ad-historical`.
       - Data: inline script "Footer Ad Counts". It writes the defaults (total 54,683,980 / live 1,835,779 / inactive 52,848,201) immediately, then `fetch('https://api.foreplay.co/ads/public/counts?_t='+Date.now(), {cache:'no-store'})` with an 8s timeout and renders `toLocaleString('en-US')`. Live values at capture: 264,801,971 / 9,543,639 / 255,258,332.
- `.ask-ai-wrapper` (spans 5, flex, align center):
  - Label "Ask AI about Foreplay.co" (label-m white, flex 1).
  - `.ask-ai-buttons-wrapper` (gap 8) with 5 `a.ai-button`s. Each is 35×35, `border:1.5px solid rgba(255,255,255,.16)`, radius 9, color .84, 20px icon, transition .2s. Hover colors:
    - ChatGPT `rgb(77,166,132)` / bg rgba(77,166,132,.1) / border .2
    - Grok white / bg .1 / border .2
    - Claude `rgb(217,119,87)` / .1 / .2
    - Perplexity `rgb(88,181,202)` / bg .2 / border .2
    - Gemini `rgb(48,109,246)` / .1 / .2
  - hrefs are prompt URLs built by the inline script "ASK AI Links". Icons are at SAVED.html L1087–1126.

### 8.4 Foot row (`.footer-foot`)
- Flex, gap 16, align center. ≤767: column, gap 24.
- `.footer-foot-1` (flex 1, gap 16; ≤479 column gap 12):
  - `p.text-body-s.text-white-68`, color rgba(255,255,255,.36): "© 2026 Foreplay, Inc. All rights reserved."
  - `.footer-text-cta-link`s (padding 4 0, color .36, hover .92; ≤479 margin-bottom −8): "Privacy Policy" (/page/privacy-policy), "Terms & Conditions" (/page/terms-of-service).
- `ul.footer-social-links-list` (flex, gap 6, margin-bottom 10): 6 items, each 28×28 with opacity .68 → 1 on hover (.2s), 28px icons (SAVED.html L1135–1145). Order: Facebook, Instagram, LinkedIn, TikTok, X, YouTube.

---

## 9. Floating widgets and modals

### 9.1 Calendar pop-up (`.calendar-popup-wrapper`, inside footer)
- Wrapper: `position:fixed; left:0; bottom:0; z-index:10; padding:20px`, column, align start (≤479 padding 0).
- Trigger `.calendar-pop-up-trigger`: 252.9×58, bg #fff, `border:1px solid #dddee5`, radius 12 (≤479: 12 12 0 0), cursor pointer, hover bg #e9eaef, transition .2s.
  - Body: padding 8 14 8 8, gap 10.
  - Headshot `.calendar-pop-up-headshot` (35×35 round, bg-image cover, the Zach Murray avif). It has an online dot `.calendar-pop-up-online` (7×7, #10b981, radius 100, absolute top 1 right 1).
  - Text: "Click Me!" (label-s #090a0e) / "Free creative strategy action plan" (body-xs 12/20 #4c505f).
- Panel `.calendar-pop-up-main.pop-from-bl`: absolute bottom-left of the wrapper, 360 wide (min/max 360; ≤479 max none, bottom radius 0), bg #fff, `border:1px solid #dddee5`, radius 18, column. Hidden by default (display none, opacity 0).
  - Header (padding 14, gap 10, border-bottom 1px #dddee5): headshot, "Zach Murray" / "Founder @ Foreplay.co", close icon (24, opacity .75 → 1).
  - Body (padding 14, gap 15, border-bottom):
    - "Free Creative Strategy Action Plan" (label-s #090a0e).
    - "Let's analyze your top competitors together. Get a clear action plan to start scaling like the top 1% advertisers." (body-s #4c505f).
    - `#datePills.datepills` (flex, gap 8): 5 `a.date-pill`s (flex 1, padding 12, `border:1.5px solid #c3c5d2`, radius 8, centered, hover border #090a0e + bg #f9f9fa, .2s). The first has `.is-today` (border #090a0e). Each shows `.dow` (weekday short) and `.dom` (day), both 16/24 500 #090a0e. They are filled by script with today + 4 following days.
  - CTA (padding 14, gap 8, column): "Book a Call" `.button-light.button-primary` (330×40) and "Start Free Trial" `.button-light.button-stroke` (330×40, with icon). Book a Call opens the Cal.com embed `team/foreplay/foreplay-demo-action-plan`. That is an external embed; implement as a link.
  - Measured open at 1440: x20, y494, 360×386.
- Motion:
  - Click on the trigger: add `.is-open` (display flex) and play `modalIn 380ms cubic-bezier(.16,1,.3,1) both`, which goes from `opacity:0; transform: translateY(10px) scale(.97)` to `opacity:1; transform:none`, with `transform-origin: 0 100%`. Also set `document.documentElement.style.overflow = 'hidden'`.
  - Close (×, Esc, or a backdrop click on the panel itself): `modalOut 260ms cubic-bezier(.16,1,.3,1) both` to `opacity:0; translateY(6px) scale(.97)`, then remove `.is-open` and restore overflow.
  - Under `prefers-reduced-motion`, there is no animation.

### 9.2 Exit-intent modal (`#exit-intent-modal`)
- `position:absolute; inset:0` with no positioned ancestor, so it covers the **initial containing block (document top, 0..100vh)**. This is not fixed, which is an original quirk.
- Styles: z 1000, bg rgba(2,3,8,.83), flex, centered, display none by default.
- `.exit-intent-block`: max-width 600 (600×512.7 at 1440), padding 4, bg rgba(255,255,255,.1), `backdrop-filter: blur(10px)`, radius 12.
  - `<img>` Exit-intent-image.webp: 592×298.7 (1195×603 asset).
  - `.exit-intent-text-wrapper` (padding-top 20) holds a `.section-head`:
    - Overline "1:1 Creative Strategy Audit" (.36).
    - h2 `.text-display-h4` white "Can't find what you're looking for?" (28/36).
    - `.text-alpha-100 > .text-body-m` "Speak with the Foreplay team to accelerate your paid marketing goals."
  - `.exit-intent-buttons`: 2-column grid (290 each), gap 12, margin-top 20 (≤479: 1 column). Buttons: "Start a Trial" secondary (with icon) → sign-up, "Book a Demo" primary → /book-demo.
- Close: `.div-block-345` is an absolute top strip (padding 20 10 20 0, justify end) holding `.close-button` (36×36 icon, opacity .65 → 1 on hover).
- Trigger logic (inline script + `ouibounce.min.js`):
  - Only when `window.innerWidth > 768` and `localStorage.exitTimestamp` is missing or older than 7 days.
  - Uses `ouibounce(modal, {aggressive:false, timer:0, callback: () => modal.style.display='flex'})`. Ouibounce defaults: fires when the mouse leaves through the top of the viewport (sensitivity 20px) and sets cookie `viewedOuibounceModal` so it shows once.
  - Close sets `display:none`, saves `localStorage.exitTimestamp = Date.now()` and calls `ouib.disable()`.

### 9.3 Third-party (do not rebuild unless asked)
- Intercom launcher: 48px circle #020308, fixed bottom 20 right 20, `box-shadow 0 1px 6px rgba(0,0,0,.06), 0 2px 32px rgba(0,0,0,.16)`, hover scale 1.1 (250ms cubic-bezier(.33,0,0,1)).
- Also not rebuilt: Cookiebot, HubSpot, GTM, Meta/Twitter/Reddit pixels, Rewardful, OptinMonster, Hyros, PostHog, recaptcha.

---

## 10. Motion summary (all measured or read from source)
| What | Trigger | Property | Duration / easing | Notes |
|---|---|---|---|---|
| Hero parallax (IX2 a-72) | scroll, p=scrollY/100vh | `.home-hero-sticky` translateY 0→−33%, scale 1→.75, opacity 1→0 | continuous, linear | ≥768 only |
| Nav dropdown open/close | click toggle | opacity 0→1, translateY(−8px) scale(.96)→none | .5s cubic-bezier(0.19,1,0.22,1) | panel `display:block` always |
| Dropdown chevron | aria-expanded | rotate 0→180deg | .5s cubic-bezier(0.16,1,0.3,1) | |
| Nav link/toggle color | hover | rgba(255,255,255,.52)→.84 | .5s cubic-bezier(0.19,1,0.22,1) | |
| Navbar CTA | hover | bg #fff→#dddee5 | .6s cubic-bezier(0.19,1,0.22,1) | |
| Nav product badge glow | hover (≥992) | opacity 0→1, translateY(50%)→0 | .8s cubic-bezier(0.19,1,0.22,1) | |
| Sprite icons (nav and footer badges) | mouseenter/leave (≥992) | background-position steps through N frames (frame = round(p·(N−1)), x = −frame·elementWidth) | 300ms, easeOutQuad `1-(1-t)^2`, reversible from the current progress | frames: library 54, discovery 62, spyder 31, lens 21, briefs 55. `background-size: (width·N)px 100%`. Sprite PNGs are 160px frames |
| Mobile menu | hamburger click | translateY(−100%)→0 | 400ms ease (Webflow nav) | |
| Buttons (dark) | hover | background-color | .2s ease | |
| Buttons (light) | hover | background-color | .15s ease | |
| Product and sharing tab links | hover/active | color / bg | .4s cubic-bezier(0.19,1,0.22,1) | panes swap instantly, no autoplay |
| Hero logos | hover | color .84→.68 | .2s | |
| Testimonial tooltip | hover/focus-visible | opacity 0→1, translateY(24px) scale(.8)→translateY(0) | 300ms cubic-bezier(0.33,1,0.68,1) | avatar ring same timing |
| Logo rain | IntersectionObserver (first intersect) | matter.js bodies dropped every 300ms (first at 300ms) | gravity .7 | desktop UA only, ≥768 visible |
| Calendar panel | click | modalIn / modalOut keyframes | 380ms / 260ms cubic-bezier(.16,1,.3,1) | |
| Footer links, social, review blocks, ai-buttons, date pills | hover | color/opacity/bg | .2s | |
| Background videos | autoplay | loop, muted, playsinline | hero 20.7s; loader 8s; nav thumb 3.47s; merch 6.05s; product icons ~3.36s | |

There are **no marquees, no auto-advancing sliders, no scroll-reveal fade-ins, and no CSS keyframe animations** on page content. `document.getAnimations()` returned none after load. The logo strip is a static grid. The only scroll-linked effect is the hero parallax.

---

## 11. Section y-offsets (document coordinates)
| Section | 1440 | 1280 | 991 | 767 | 390 |
|---|---|---|---|---|---|
| Nav | 0 (72) | 0 (72) | 0 (72) | 0 (72) | 0 (72) |
| Hero | 72 (1283) | 72 (1250) | 72 (1267) | 72 (1147) | 72 (1027) |
| White block 1 (Winning) | 1363 (876) | 1330 (876) | 1347 (836) | 1227 (1336) | 1107 (1161) |
| Product A | 2247 (2865) | 2214 (2865) | 2191 (3504) | 2571 (3584) | 2276 (2916) |
| Product B | 5112 (1840) | 5079 | — | — | — |
| White block 2 (Collab + Sharing) | 6960 (1682) | 6926 (1653) | 7967 (2071) | 8426 (1682) | 7342 (1840) |
| Features | 8649 (913) | 8587 (913) | 10046 (2036) | 10116 (2036) | 9190 (1657) |
| CTA | 9563 (1038) | 9500 (1048) | 12081 (802) | 12152 (605) | 10847 (643) |
| Footer | 10640 (892) | 10588 (892) | 12923 (1064) | 12797 (1216) | 11530 (1747) |

The white blocks sit in `section > .section-padding` (8px all sides). The white block's top is therefore 8px below the section top, and each white section adds 16px to the block height.

---

## 12. Things Playwright could not measure / caveats
- The YouTube lightbox content and the Cal.com booking iframe are third-party embeds and were not opened.
- Inside the matter.js logo rain, the canvas pixels are physics-random by design. Only the configuration is specified.
- The `.mov` product-icon videos rely on the browser's HEVC/alpha support. Chromium on macOS decoded them (videoWidth 1000–1200). Other browsers may show nothing; the CSS fallback is the static iso-*.webp only at ≤991.
- Footer ad counts are live API values; the numbers shown above are a snapshot.
