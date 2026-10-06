Source: https://www.foreplay.co/pre-black-friday

# /pre-black-friday: "Pre Black Friday"

**Method:** see `specs/_shared-misc.md`. **Raw dumps:** `specs/_measure/pre-black-friday-{1440,991,390}.txt`. **Data:** `specs/data/pre-black-friday.page-data.json` (5 FAQ questions + answer lengths). Webflow page id `68fa767a9d4ca73055d22b29`. Doc height: 3349 @1440, 4381 @991, 5296 @390. **No final CTA**: the footer follows the FAQ.

## Section map
| # | Section | y/h @1440 | Reuse |
|---|---|---|---|
| 1 | Hero: `section#product-hero-section > .container > .us-container` with a Unicorn Studio WebGL bg | 72 / 456 | **new** `UnicornHero` |
| — | `section#lens-hero-section` (canvas 0 tall) + an empty `section.section` | 0 tall | skip (inert) |
| 2 | `div#api-pricing.section` | 528 / 995 | identical to `api.md` S5 (`ApiPricing` block). Head differs: see below |
| 3 | `div.section > .container > .faq` (padding 140/0, gap 48) | 1523 / 895 | `SectionHead` + `Faq` (5 items) + `.faq-buttons` |

## 1. Hero
- `.product-hero` (padding-top 10) holds only an IX2 trigger `.product-hero-animation-trigger` (absolute, 100vh). IX2 e-237 → a-71 "Product / Hero Parallax" targets `.product-hero-sticky`, which **does not exist** on this page. **No visible effect; skip it.**
- `.us-container`: padding 50/0, position relative. 1360×446 @1440, 927×442 @991, 342×574 @390.
  - `.us-bg > .us-canvas` (absolute inset 0) is a **Unicorn Studio** embed: `data-us-project="aTrCmTNQlX5iRJ0vlnVR"`, script `https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js` → `UnicornStudio.init()`. It renders a WebGL `<canvas>` with aspect 2040/668 at 1440.
  - **The canvas content cannot be measured** (it is WebGL-rendered). Rebuild it with the real script (`EmbedPlaceholder` fallback: dark radial glow).
  - The free-tier badge "Made with unicorn.studio" (190×35, bottom 30, centred, white pill, radius 6, shadow `0 3px 9px rgba(0,0,0,.2)`) is injected by the script. Omit it in the clone.
- `.us-content`: flex row, justify centre, position relative, z 1. Inside it, `.hero-text` (max 900, flex column centred, gap 16 (@390 12), 573 wide @1440):
  - **Announcement pill** `a.home-hero-announcement.bounties` → `/bounties/build-share-a-workflow-using-the-foreplay-api` (target _blank):
    - Box: 457×36, flex centred, padding 5/5/5/10, radius 10, bg rgba(255,255,255,.1), `backdrop-filter: blur(2px)`, overflow hidden. Hover bg rgba(255,255,255,.16), `.2s`.
    - Content (gap 10): "Bounties" (`.text-label-s` 14/20 w500 #fff) | separator 1×12, rgba(255,255,255,.2), r2 | "Win $5,000 by Building with the API" | `.announcement-new` chip (padding 5/8, bg rgba(255,255,255,.06), r7) "ENDS OCT 31" (overline 12/16 w550 ls 2px #fff).
    - @390: 291×32, padding 8/12/8/10, gap 8, text 12px (`.mobile-xs`).
  - h1 `.text-display-h2` "Capture the Q4 Demand with winning creative": centred, #fff, 2 lines (573 wide). 40/52 @991, 36/48 (3 lines) @390.
  - `.max-w-lg` (512) paragraph `.text-body-l` .68 ‹~213ch, 4 lines›.
  - `.main-cta-buttons` (gap 12): primary "Claim Offer" → app.foreplay.co/sign-up (134×40) and secondary "View Q4 Pricing" → `#api-pricing` (171×42, chevron at .68). @390 both are full width (342), stacked with gap 12.

## 2. API pricing (`api.md` S5 verbatim) with these differences
- Section head: there is **no overline**. Title is `h2.text-display-h3` (36/44, not 44) "Why getting into Foreplay before the holiday is crucial" (720 wide, 2 lines; 3 lines @390). Paragraph `.max-w-lg` .68 ‹~108ch, 2 lines›.
- Cards and enterprise footer are the same as `api.md`: 100,000 Credits $99 / 250,000 Credits $189 / 500,000 Credits $349; "10,000 Free credits during your trial" chip; Enterprise "Custom", "Save up-to 80%", "Talk with an Expert" → /book-demo; 3 checklist items; 5 trusted-by logos.
- The logo SVGs were also saved here: `/assets/pages/pre-black-friday/svg/home-hero-logo-image-w-embed-*.svg`. The credits icon is `svg/icon-large-w-embed-c6f479b7.svg`; checklist ticks are `svg/svg-w-embed-5b5095f3.svg`; the "Save up-to" icon is `svg/svg-w-embed-d1db6642.svg`.
- Logo hover: `.pricing-grid-logo-wrapper:hover {color: rgba(255,255,255,.68)}` (from .84), `.2s`.

## 3. FAQ
- `.faq`: flex column, gap 48, padding 140/0 (@991 same; @390 gap 40, padding 64/0/80). Section head: overline "FAQ", h3 `.text-display-h2` "Questions about the API?", paragraph "Most common questions about the Foreplay API pricing and features." (2 lines).
- 5 accordion rows (questions are verbatim in the data file). The `.faq-buttons` row sits below the list; at @390 the buttons are full width (342).

## Motion
- Unicorn Studio WebGL scene (autoplays; not measurable).
- Accordion. Hover states.
- Inert scripts on the page whose targets are absent, so skip them: SVG path draw, AutoScrollCarousel, `[data-tabs]`, twinkling dot-grid on `#lens-hero-canvas` (the canvas is 0 tall).
