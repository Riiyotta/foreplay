Source: https://www.foreplay.co/

# Shared patterns for the misc pages and their templates

This file covers /blog, /faq, /careers, /creative-strategist-jobs, /ships, /pre-black-friday, /jumpstart-2026, /media-kit and /2026-paid-lp, plus the comparison, industries, page and careers templates.

**How it was measured:** 2026-10-06, Node Playwright 1.63 (headless Chromium, its own browser) at 1440×900, 991×900 and 390×844. A full scroll pass ran first so lazy images and IX2 end states had settled. Values come from `getComputedStyle` and `getBoundingClientRect`. Rules were read from the live CSSOM (`foreplay-3-0.shared.850e08b99.min.css`, the same file as `reference/webflow.css`). IX2 data came from `Webflow.require('ix2').store.getState().ixData`.

**Measurement dumps:** the raw DOM dumps live in `specs/_measure/<page>-<width>.txt`. Each line has the format `selector [x,y wxh]`, followed by layout/style props and then `{font size/lh weight ls color}`. Long copy has been replaced with `[TEXT Nch LL]`. When a page spec says "see dump", these files hold the exact numbers.

**Per-entry CMS field data:** this is in `specs/data/*.json`. Asset URLs have already been rewritten to local `/assets/...` paths. Sentences longer than 10 words are replaced with `‹Nch›`.

**Copy policy:** short UI strings are verbatim. For longer copy, only the role, the character count and the line count at 1440 are given. The builder writes stand-in text of matching length.

## Global / already built: do not re-spec

| Piece | Use |
|---|---|
| Navbar, Footer (incl. CalendarPopup, ExitIntentModal) | Mounted in `src/App.jsx`. Same DOM on every page here. **Exception:** `/2026-paid-lp` has **no footer** (the page ends at the last feature row; body height 2716 @1440). |
| Buttons `.button-dark.button-primary/secondary/ghost` | `Button` in `src/components/shared.jsx` (variants `dark-primary`, `dark-secondary`, `dark-ghost`) |
| Final CTA "Ready to ship more winning ads?" (`.home-cta` + `home-cta.webp`) | `CTA` in `src/components/CTA.jsx`. On comparison and industries the **title, paragraph and secondary button differ** (see the template specs), so `CTA` needs `title`, `paragraph` and `secondary={label,href}` props |
| Logo strip "POWERING +10,000 SOCIAL AD TEAMS & AGENCIES" (`.home-hero-bottom`, 14 SVG logos, 7 cols @1440 / 5 cols @991 / 3 cols @390) | `src/components/shared/LogoStrip.jsx` |
| Section head (`.section-head`: overline, h2, paragraph; dark and `title-dark` variants) | `src/components/shared/SectionHead.jsx` (spec: `_shared-pages.md` §1) |
| FAQ accordion (`.faq-block-container[data-accordion-container]`) | `src/components/shared/Faq.jsx` (script in `_shared-pages.md` §4). Collapsed row: 752×61 @1440, padding 20/0/12, bottom border 1px rgba(255,255,255,.1). Question h4 `.text-label-l` 18/24 w500 color .68. Hover and open state: #fff. Chevron 24px, color .68, rotates 180°, 900ms `cubic-bezier(.19,1,.22,1)`. Answer `.faq-rtb` 14/20 .68, padding 8/0. Links inside are #fff w500 and underline on hover. |
| "Contact support" + "Knowledge Base" ghost icon buttons (`.faq-buttons`) | `Button variant="dark-ghost"` with a left icon (`.ghost-icon-button`: gap 5, icon opacity .68). Hover bg rgba(255,255,255,.1), active .2. `#intercomButton` opens Intercom (href `#`). Knowledge Base → `https://foreplay.featurebase.app/help` (target _blank). Icons: `/assets/pages/faq/svg/svg-w-embed-6ba1702b.svg` (chat, 20px) and `/assets/pages/faq/svg/svg-w-embed-bfb75936.svg` (book, 24px). Row: flex, gap 12, padding 12/0. At ≤479 it becomes a column and the buttons go full width (342). |
| Product cards with in-card tabs (`.home-product-grid` = content card + 829×640 figure) | The homepage `ProductSections` card internals (CLONE_SPEC §4.2). Reused inside **M2**. |
| Features grid "Expert Swipe Files / Mobile App / API" (`.lens-security-grid`) | `src/components/shared/SecurityGrid.jsx` (homepage §6). On comparison the cards have **no ghost button**; only the 16/24 .84 text sits in `.card-button-holder`. |
| Blog list cards grid (`.blog-list` / `.blog-list-card`) | `_shared-templates.md` **S4** |
| Breadcrumb / blog title block / blog rich text | `_shared-templates.md` **S1**, **S2**, **S3** (`template-post.md` §3) |
| Centered hero `.demo-hero` / `.fireside-hero` + `.section-head` | `_shared-templates.md` **S9** |
| Video lightbox (Webflow `w-lightbox` + embedly YouTube) | `src/components/shared/VideoLightbox.jsx` |
| Third-party embeds (Cal.com, Elfsight, Unicorn Studio) | `src/components/shared/EmbedPlaceholder.jsx` or the real script (see the page specs) |
| API credit pricing block (`#api-pricing`: 3 credit cards + Enterprise footer) | Identical to `specs/api.md` §S5. Only the section head copy differs (see `pre-black-friday.md`) |
| Mobile-app features stack (`.mobile-app-main-features`) | Identical to `specs/mobile-app.md` S2 (same assets in `/assets/pages/mobile-app/`) |
| Industry icons (agencies, ecommerce, …) | Already exported in `src/components/svgs.jsx` (`IconAgencies`, `IconEcommerce`, `IconB2b`, `IconMobileApps`, `IconInfoEducation`, `IconFreelancers`). The same SVGs are also saved at `/assets/templates/industries/svg/icon-<slug>.svg`. |
| Button chevron icon | `ButtonChevron` in `svgs.jsx` (the saved `/assets/pages/blog/svg/svg-w-embed-b84067d3.svg` is the same file) |

---

## M1. Gradient page hero (`section#product-hero-section > … .fireside-hero / .product-hero`): blog, faq, 2026-paid-lp

This is the S9 hero with the **H1-size gradient title** instead of the h2-size one. Spot-checked on /blog.

- `canvas#product-hero-canvas` is 0×0 and inert, so skip it.
- `.fireside-hero` (blog: inside `.container.section-container` 1344 max, padding-x 40/32/24) is a flex column, centred, padding 80/0 (≤767: 40/0).
- `.product-hero-content`: flex column, gap 28 (≤479: 24).
- `.hero-text`: flex column centred, gap 16 (≤479: 12), max-width 900.
  - Overline `h1.text-overline`: 12/16, w550, ls 2px, uppercase, rgba(255,255,255,.36), centred. Text examples: "BLOG", "FAQ", "MOBILE APP".
  - Title `h2.text-display-h1.hero-title`: Inter Display 600, 60/68, ls −0.45px, centred. `background-image: radial-gradient(circle at 50% -100%, #fff, rgba(255,255,255,.88)); -webkit-background-clip:text; color: rgba(255,255,255,.88)`. Size by breakpoint: 52/60 at ≤767, **38/48** (ls −0.285) at ≤479. Width 900 @1440 and @991, 342 @390.
  - Optional paragraph `.max-w-lg` (512) `> p.text-body-l` 18/28, .68.
- Measured: /blog hero-text 900×168 at y152 (1440). Title 2 lines 136 tall @1440/991, 3 lines 144 tall @390.

## M2. Product tabs: "5 products in 1" (`.product-page-tabs.w-tabs`): comparison and industries

This is a Webflow Tabs component. Each pane holds one homepage-style product card. Spot-checked on /comparison/motion.

- Wrapper `div.section > .product-page-padding-y` (padding 108/0, overflow hidden) `> .container.section-container > .section-head` (dark), then `.section-content-main` (padding-top 48) `> .product-page-tabs` (flex column, centred). Attributes: `data-duration-in=300`, `data-duration-out=100`, `data-easing=ease`. The default tab comes from `data-current` (CMS field `tabsDefault`).
- Tab menu `.comparison-tabs-menu.w-tab-menu`:
  - 1440: grid with 5 columns of 238.4, gap 16, padding 4, overflow hidden, 1264×70.
  - 991: 3 columns (298.3), gap 12, 927×116 (2 rows).
  - 390: 1 column (334), gap 12, radius 10, 342×456.
- Tab `a.comparison-product-tab`:
  - Layout: flex row, align centre, gap 8, padding 10, radius 15. Border 1px rgba(255,255,255,.2), opacity .44, `transition: all .2s ease`. Height 62.
  - Current tab (`.w--current`): border rgba(255,255,255,.36), opacity 1, bg transparent.
  - Hover: opacity .75, outline 3px #fff with offset 0 (the outline is effectively invisible because its style is unset; keep only the opacity).
  - Icon `img.comparison-product-icon` 40×40 (30×30 at ≤991). Label `.text-label-m` 16/24 w500 #fff.
- Icons, labels and default order:

| Tab | Icon (40×40 display, 256×256 source) |
|---|---|
| Lens | `/assets/pages/lens-creative-analytics/682f9f725170de3b3258d310_pi-lens-hq.webp` |
| Swipe File | `/assets/pages/swipe-file/682f9f72df2782e8df1d1114_pi-swipefile-hq.webp` |
| Discovery | `/assets/pages/discovery/682f9f722b39359a238b0ff9_pi-discovery-hq.webp` |
| Spyder | `/assets/templates/comparison/682f8f898e2734095cb3d708_pi-spyder.webp` (144×144) |
| Briefs | `/assets/pages/briefs/682f9f72dc306ab5bf957aea_pi-briefs-hq.webp` |

- Tab order varies per entry; use the `tabOrder` field. Comparison is Lens, Swipe File, Discovery, Spyder, Briefs. Industries/agencies is Lens, Spyder, Swipe File, Discovery, Briefs.
- Pane `.w-tab-pane > .tabs-video-wrapper`: flex column, gap 20, padding 20/0, 1264×680. It contains **the homepage product card** `.home-product-grid` (1264×640; content 419 + figure 829, gap 16) for that product, with the same 3 in-card tab links, images and `padding-video` animation (`https://publicassets.foreplay.co/cta-<product>.mp4`, scaled 1.6). Reuse the homepage product-card component and pass the product key. Two differences from the homepage:
  1. The overline/title in the card head and the buttons: secondary "Get Free Trial" → app.foreplay.co/sign-up, plus ghost "Book a Demo" → /book-demo.
  2. `https://publicassets.foreplay.co/cta-briefs.mp4` returns **404** on the live site (the Briefs card animation is blank there). Use the existing `/assets/pages/briefs/cta-briefs.mov` or `/assets/templates/comparison/cta-briefs.webm`.
- Pane switch: Webflow tabs fade the old pane out over 100ms, then fade the new one in over 300ms, `ease` (`src/components/shared/useFadeTabs.js`).
- Sizes: the section is 1192 tall @1440 (comparison), 1426 @991 and 1697 @390. Panes at ≤991 stack the content card above the figure (homepage §4.4 rules).

## M3. Legal / white rich-text page body: used only by the `page` template (see `template-page.md`)

## M4. Job / apply action row (`.fireside-subscribe-action`): careers template (see `template-careers.md`)

---

## Motion summary for this page group

| Page | Motion |
|---|---|
| blog, creative-strategist-jobs | Hover only: card bg and ring, link opacity .8, all `.2s ease`. No IX2. |
| faq, pre-black-friday | FAQ accordion (900ms expo-out). Pre-BF also loads a Unicorn Studio WebGL scene in the hero. Its IX2 a-71 targets `.product-hero-sticky`, which does not exist on that page, so it has no effect. |
| jumpstart-2026 | IX2 a-82 "Jumpstart-Circle-Rotate": a PAGE_START loop rotates the circle image 0→360° over **60000ms**, linear and infinite. There is also a Lottie icon (3.05s loop) and an autoplaying muted bg video. |
| industries | IX2 a-78 "Industries Carousel": a PAGE_START loop moves `.industries-carousel-logos` translateX 0 → −100% over **20000ms**, linear, looping. There are two copies of the logo row, which makes it a seamless marquee. |
| comparison | The PSA sticky card's close button hides it (`display:none`). Product tabs fade. No IX2. |
| ships, careers, media-kit, legal, careers entries | Hover states only |
