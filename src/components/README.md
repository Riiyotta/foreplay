# Reusable components

Global chrome (`Navbar`, `Footer`, `ExitIntentModal`) is mounted once in `src/App.jsx`. Do not render it in pages.
Pages in `src/pages/*.jsx` should be thin: data + composition of the components below.
All colours, shadows, gradients and type sizes come from `tailwind.config.js` tokens (no raw hex in JSX).

## Root (homepage blocks, also reused)

| Component | Props | Notes |
|---|---|---|
| `shared.jsx` → `Button` | `variant` (`dark-primary`, `dark-secondary`, `dark-ghost`, `dark-stroke`, `dark-ghost-icon`, `light-primary`, `light-secondary`, `light-stroke`), `href`, `label`, `icon=true`, `iconFull=false`, `iconLeft?` (node), `iconRight?` (node), `children?` (replaces the label, e.g. store badge `<img>`), `className`, any `<a>` attrs | `.button-*` classes. |
| `shared.jsx` → `BgVideo` | `className`, `poster`, `sources[]`, `children` | Webflow `.w-background-video`. |
| `shared.jsx` → `useTabs(count)` | returns `{ active, linkProps(i, groupId), paneProps(i, groupId) }` | Custom `[data-tabs]`: instant swap, arrow-key navigation. |
| `shared.jsx` → `useSprite`, `Overline` | | |
| `CTA.jsx` | none | "Ready to ship more winning ads?" (`.home-cta`). |
| `ChromeExtension.jsx` | none | `.home-extension` card (hidden ≤479). |
| `useHeroParallax.js` | `(triggerRef, targetRef, { translateEasing })` | IX2 hero parallax. The default is linear (homepage a-72). Pass `inOutCubic` (exported) for product pages (a-71). |

## `shared/` (any page)

| Component | Props | Notes |
|---|---|---|
| `Layout.jsx` → `Container` | `className`, `children` | `.container` (max 1440, px 40/32/24). |
| `Layout.jsx` → `SectionContainer` | same | `.section-container` (max 1344). |
| `Layout.jsx` → `WhiteBlock` | `as='section'`, `className`, `innerClassName`, `children` | `.section-padding > .section-white-block` (radius 36 / 16 ≤479). Use `innerClassName="overflow-visible"` when a sticky child is inside. |
| `Layout.jsx` → `PaddingY`, `ContentMain`, `NegativeSpacingBottom` | `className`, `children` | `.product-page-padding-y` (108/96/80), `.section-content-main` (pt 48/40), and the −80px spacer. |
| `SectionHead.jsx` | `overline`, `overlineAs`, `title`, `titleAs='h2'`, `size` (`h1` gradient hero / `h2` / `h3` / `h3-sm`), `body`, `bodySize` (`l`/`m`), `bodyAs`, `theme` (`dark`/`light`), `align` (`center`/`left`), `overlineClass`, `titleClass`, `bodyClass`, `bodyMax='max-w-[512px]'`, `prefix` (node shown above the title, e.g. an icon), `children` | `.section-head`. |
| `Faq.jsx` (default) | `overline='FAQ'`, `title`, `body`, `titleAs='h3'`, `size='h2'`, `bodyClass`, `bodyMax`, `items: [{ q, a: ReactNode }]`, `buttons=true` | `.faq` section with the `[data-accordion-item]` behaviour (.9s expo height + chevron). |
| `Faq.jsx` → `FaqButtons` | none | "Contact support" + "Knowledge Base". |
| `SecurityGrid.jsx` | `cards: [{ icon: node, title, img?, alt?, text, cta?, href?, target? }]`, `className`, `bodyClass='h-auto'`, `plainText=false` | `.lens-security-grid` 3-card frame (homepage Features, spyder, lens, apps-extensions). |
| `Rows.jsx` → `LeftRightRow` | `media` (node), `rawMedia=false`, `mediaFirst=true`, `className`, `contentClass`, `children` | `.left-right-section`. The media moves first in column layout (≤767). |
| `Rows.jsx` → `GridRow` | `img`, `alt`, `mediaFirst=false`, `children` | `.lens-gamification-grid` (content span 5, illustration span 7). |
| `Rows.jsx` → `RowContent` | `overline`, `overlineClass`, `title`, `titleAs`, `titleSize`, `titleClass`, `body`, `bodyClass`, `button={label, href}` or `null`, `above` (node shown above the title), `theme` | Left-aligned head plus a `light-stroke` button. |
| `Rows.jsx` → `RowImage` | `src`, `alt`, `className` | `.left-right-section-image`. |
| `Marquee.jsx` | `speed=1` (px/frame), `gap=16`, `rtl=false`, `className`, `children` (`<li>`s) | AutoScrollCarousel port. It clones ×2 each side, pauses on hover or a hidden tab, and only runs when the items overflow. |
| `EmbedPlaceholder.jsx` | `label`, `href`, `linkLabel`, `theme` (`dark`/`light`), `className` (size), `children` | Same-size stand-in for third-party embeds (Cal.com, Senja, Wistia). |
| `VideoLightbox.jsx` → `useLightbox()` + `VideoLightbox` | hook returns `{ open, trigger, close }`; spread `trigger` on the `<a>` and render `<VideoLightbox url title poster? onClose={close} />` when `open` | YouTube `w-lightbox` replacement. Shows a placeholder frame that links out. |
| `LottieHover.jsx` | `src` (json), `mode` (`hover`/`loop`), `hoverRef?`, `inMs=4000`, `outMs=4000`, `className` | lottie-web. Hover plays 0→1 with easeInOut and leave scrubs back with `ease` (spyder a-76/a-77). |
| `useSvgPathDraw.js` | `(containerRef, viewBoxW=440)` | `.svg-animation-container` scroll draw (70%→30% viewport): paths use `.svg-animate-path`, clips use `.svg-animate-clip`, and the reference path is `.svg-graph-ref`. |
| `useFadeTabs.js` | `(initial=0, { durationIn=300, durationOut=100, easing='ease' })` returns `{ current, shown, paneStyle, select }` | Webflow `.w-tabs` fade. `0/0` gives an instant swap (pricing). |
| `SvgInline.jsx` | `src`, `className`, `onLoad` | Inlines a saved `svg-*.svg` so `currentColor` and transitions work. |
| `LogoStrip.jsx` (default) + `LOGOS` | none | `.home-hero-bottom` 14-logo grid (homepage hero, book-demo). |
| `EnterpriseCard.jsx` | `subtitle`, `title`, `items[]`, `className` | `.pricing-footer` Enterprise card (pricing, api). |
| `ApiPricing.jsx`, `MobileAppFeatures.jsx` | | Added by other build agents. See those files. |

## `product/` (product-page template, `_shared-pages.md` §1)

| Component | Props |
|---|---|
| `ProductHero.jsx` (default) | `overline`, `title`, `subtitle`, `icon: { webm, mov, img, alt }`, `screen: { highWebm?, mp4, webm, poster }`, `overlineInside?`, `previewChildren?` |
| `ProductHero.jsx` → `ProductHeroShell` | `dots=true`, `heroClassName`, `sticky` (node), `children`. The section, dot grid, a-71 trigger and sticky parallax block. Used by api, mcp and mobile-app. |
| `ProductHero.jsx` → `HeroContent` | `overline`, `title`, `subtitle`, `actions?` (default "Start free trial"), `overlineInside`, `className` |
| `ProductHero.jsx` → `HeroIcon`, `HeroPreview` | `{ webm, mov, img, alt }`; `{ screen, children }` |
| `SolutionCards.jsx` | `title`, `body`, `before: { title?, text, img }`, `after: { title?, text, img }` |
| `ProductCarousel.jsx` | `overline='USE CASES'`, `title`, `body`, `slides: [{ img, alt, title, text }]` |
| `ProductTabs.jsx` | `overline='CORE FEATURES'`, `title`, `body`, `tabs: [{ label, icon, img, alt, description? }]`, `variant` (`default`/`spyder`), `extension=true` |
| `FeatureSection.jsx` (default) | `overline='ALL FEATURES'`, `title`, `body`, `groups: [{ features: [{ img \| lottie, alt, title, text }], bodyTone?: 'white', testimonial? }]`, `spyder?` |
| `FeatureSection.jsx` → `FeatureGrid` | `features`, `bodyTone`, `spyder` |
| `Testimonial.jsx` | `logo`, `logoAlt`, `quote`, `avatar`, `name`, `role` |
| `CtaBanner.jsx` | `title='Get a 7-Day free trial today'`, `body`, `video`, `iconImg`, `iconAlt` |

## Page-specific

- `lens/`: `LensGraphCard`, `LensReporting`, `LensIntegrations`, `LensBenchmarking`, `LensEnrichment` (data via props).
- `pricing/`: `PlanCard` (benefit popovers), `Comparison` (sticky compare grid, collapsible categories, `CompareTooltip`).
