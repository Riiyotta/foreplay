# Foreplay clone at /foreplay (React+Vite), derived from design-repo/templates + sections, which record src/ as built. Mirrors https://www.foreplay.co sitemap.

Source: Foreplay clone at /foreplay (React+Vite), derived from design-repo/templates + sections, which record src/ as built. Mirrors https://www.foreplay.co sitemap.
Status: **measured-from-codebase**
506 routes · 48 templates · 89 unique sections

> Generated from `ia.json` by `build.mjs`. Edit the JSON, not this file.

## Shape of the site

The largest 3 templates (Post, Expert, Faq Item) account for 314 of 506 routes (62%). The remaining 192 routes span 45 templates.

| template | routes | share |
|---|---:|---:|
| Post | 182 | 36% |
| Expert | 67 | 13% |
| Faq Item | 65 | 13% |
| Author | 43 | 8% |
| Event | 27 | 5% |
| Agency | 26 | 5% |
| Video | 16 | 3% |
| Category | 15 | 3% |
| Comparison | 10 | 2% |
| Industry | 6 | 1% |
| Legal Page | 5 | 1% |
| Product Feature | 3 | 1% |
| Career | 3 | 1% |
| Application Form | 2 | 0% |
| Work With | 2 | 0% |
| Not Found | 2 | 0% |
| Home | 1 | 0% |
| Product Spyder | 1 | 0% |
| Product Lens | 1 | 0% |
| Developer Api | 1 | 0% |
| Developer Mcp | 1 | 0% |
| Mobile App | 1 | 0% |
| Paid Landing | 1 | 0% |
| Apps Extensions | 1 | 0% |
| Chrome Extension | 1 | 0% |
| Pricing | 1 | 0% |
| Pre Black Friday | 1 | 0% |
| Book Demo | 1 | 0% |
| Watch Demo | 1 | 0% |
| Agency Directory | 1 | 0% |
| Affiliates | 1 | 0% |
| Fireside | 1 | 0% |
| Bounties Index | 1 | 0% |
| Experts Index | 1 | 0% |
| Reviews | 1 | 0% |
| Contest | 1 | 0% |
| Contest Submission | 1 | 0% |
| Blog Index | 1 | 0% |
| Faq Index | 1 | 0% |
| Careers Index | 1 | 0% |
| Creative Strategist Jobs | 1 | 0% |
| Media Kit | 1 | 0% |
| Jumpstart | 1 | 0% |
| Ships | 1 | 0% |
| Fireside Replays | 1 | 0% |
| University Landing | 1 | 0% |
| University Course | 1 | 0% |
| Bounty | 1 | 0% |

## Page chrome

**505 routes carry chrome = `full`** — Home, Product Feature, Product Spyder, Product Lens, Developer Api, Developer Mcp, Mobile App, Apps Extensions, Chrome Extension, Pricing, Pre Black Friday, Book Demo, Watch Demo, Application Form, Work With, Agency Directory, Affiliates, Fireside, Bounties Index, Experts Index, Reviews, Contest, Contest Submission, Blog Index, Faq Index, Careers Index, Creative Strategist Jobs, Media Kit, Jumpstart, Ships, Fireside Replays, Post, Expert, Faq Item, Author, Event, Agency, Video, Category, Comparison, Industry, Legal Page, Career, University Landing, University Course, Bounty, Not Found.

**1 routes carry chrome = `nav-only`** — Paid Landing.

## Sections by reuse

How widely a section is shared determines whether it belongs in a shared
component library or stays local to its page.

| section | category | templates | routes | implementation | scope |
|---|---|---:|---:|---|---|
| `shell.exit-intent-modal` | SHELL | 48 | 506 | `App.jsx + ExitIntentModal.jsx` | Carried by 506 routes, on templates: home, product-feature, product-spyder, product-lens, developer-api, developer-mcp, mobile-app, paid-landing, apps-extensions, chrome-extension, pricing, pre-black-friday, book-demo, watch-demo, application-form, work-with, agency-directory, affiliates, fireside, bounties-index, experts-index, reviews, contest, contest-submission, blog-index, faq-index, careers-index, creative-strategist-jobs, media-kit, jumpstart, ships, fireside-replays, post, expert, faq-item, author, event, agency, video, category, comparison, industry, legal-page, career, university-landing, university-course, bounty, not-found. |
| `shell.navbar` | SHELL | 48 | 506 | `App.jsx + Navbar.jsx` | Carried by 506 routes, on templates: home, product-feature, product-spyder, product-lens, developer-api, developer-mcp, mobile-app, paid-landing, apps-extensions, chrome-extension, pricing, pre-black-friday, book-demo, watch-demo, application-form, work-with, agency-directory, affiliates, fireside, bounties-index, experts-index, reviews, contest, contest-submission, blog-index, faq-index, careers-index, creative-strategist-jobs, media-kit, jumpstart, ships, fireside-replays, post, expert, faq-item, author, event, agency, video, category, comparison, industry, legal-page, career, university-landing, university-course, bounty, not-found. |
| `shell.footer` | SHELL | 47 | 505 | `App.jsx + Footer.jsx` | Carried by 505 routes, on templates: home, product-feature, product-spyder, product-lens, developer-api, developer-mcp, mobile-app, apps-extensions, chrome-extension, pricing, pre-black-friday, book-demo, watch-demo, application-form, work-with, agency-directory, affiliates, fireside, bounties-index, experts-index, reviews, contest, contest-submission, blog-index, faq-index, careers-index, creative-strategist-jobs, media-kit, jumpstart, ships, fireside-replays, post, expert, faq-item, author, event, agency, video, category, comparison, industry, legal-page, career, university-landing, university-course, bounty, not-found. |
| `conversion.cta-final` | CONVERSION | 25 | 475 | `CTA.jsx` | Carried by 475 routes, on templates: home, product-feature, product-spyder, pricing, work-with, fireside, experts-index, reviews, blog-index, faq-index, creative-strategist-jobs, fireside-replays, post, expert, faq-item, author, event, agency, video, category, comparison, industry, university-landing, university-course, bounty. |
| `nav.breadcrumb` | NAV | 8 | 348 | `Breadcrumb.jsx` | Carried by 348 routes, on templates: fireside-replays, post, faq-item, author, event, agency, career, bounty. |
| `hero.blog-top` | HERO | 7 | 322 | `TitleBlock.jsx` | Carried by 322 routes, on templates: fireside-replays, post, faq-item, author, event, career, bounty. |
| `content.article` | CONTENT | 1 | 182 | `Post.jsx` | Carried by 182 routes, on templates: post. |
| `content.author-row` | CONTENT | 1 | 182 | `Post.jsx` | Carried by 182 routes, on templates: post. |
| `content.related-carousel` | CONTENT | 1 | 182 | `RelatedCarousel.jsx` | Carried by 182 routes, on templates: post. |
| `content.expert-more` | CONTENT | 1 | 67 | `Expert.jsx` | Carried by 67 routes, on templates: expert. |
| `hero.expert-profile` | HERO | 1 | 67 | `Expert.jsx` | Carried by 67 routes, on templates: expert. |
| `content.post-grid` | CONTENT | 4 | 60 | `CardGrid.jsx` | Carried by 60 routes, on templates: blog-index, creative-strategist-jobs, author, category. |
| `content.replay-list` | CONTENT | 2 | 44 | `EventRow.jsx + ReplayRow.jsx` | Carried by 44 routes, on templates: fireside-replays, author. |
| `content.event-body` | CONTENT | 1 | 27 | `Event.jsx` | Carried by 27 routes, on templates: event. |
| `content.event-more` | CONTENT | 1 | 27 | `Event.jsx` | Carried by 27 routes, on templates: event. |
| `content.agency-profile` | CONTENT | 1 | 26 | `Agency.jsx` | Carried by 26 routes, on templates: agency. |
| `hero.centered` | HERO | 3 | 17 | `CenteredHero.jsx` | Carried by 17 routes, on templates: careers-index, creative-strategist-jobs, category. |
| `interactive.product-tabs-5` | INTERACTIVE | 2 | 16 | `ProductTabs5.jsx` | Carried by 16 routes, on templates: comparison, industry. |
| `hero.video` | HERO | 1 | 16 | `Video.jsx` | Carried by 16 routes, on templates: video. |
| `content.security-grid` | CONTENT | 5 | 14 | `Features.jsx + SecurityGrid.jsx` | Carried by 14 routes, on templates: home, product-spyder, product-lens, apps-extensions, comparison. |
| `content.comparison-table` | CONTENT | 1 | 10 | `Comparison.jsx` | Carried by 10 routes, on templates: comparison. |
| `hero.comparison` | HERO | 1 | 10 | `Comparison.jsx` | Carried by 10 routes, on templates: comparison. |
| `overlay.psa-sticky` | OVERLAY | 1 | 10 | `Comparison.jsx` | Carried by 10 routes, on templates: comparison. |
| `pricing.comparison-pricing` | PRICING | 1 | 10 | `Comparison.jsx` | Carried by 10 routes, on templates: comparison. |
| `social-proof.comparison-reviews` | SOCIAL-PROOF | 1 | 10 | `Comparison.jsx` | Carried by 10 routes, on templates: comparison. |
| `content.faq` | CONTENT | 7 | 9 | `Faq.jsx` | Carried by 9 routes, on templates: product-feature, product-spyder, developer-api, developer-mcp, pricing, pre-black-friday, affiliates. |
| `content.industry-examples` | CONTENT | 1 | 6 | `Industry.jsx` | Carried by 6 routes, on templates: industry. |
| `hero.industry` | HERO | 1 | 6 | `Industry.jsx` | Carried by 6 routes, on templates: industry. |
| `social-proof.industry-testimonials` | SOCIAL-PROOF | 1 | 6 | `Industry.jsx` | Carried by 6 routes, on templates: industry. |
| `conversion.cta-banner` | CONVERSION | 3 | 5 | `CtaBanner.jsx` | Carried by 5 routes, on templates: product-feature, product-spyder, product-lens. |
| `hero.product` | HERO | 3 | 5 | `ProductHero.jsx` | Carried by 5 routes, on templates: product-feature, product-spyder, product-lens. |
| `content.legal-richtext` | CONTENT | 1 | 5 | `LegalPage.jsx` | Carried by 5 routes, on templates: legal-page. |
| `hero.legal-title` | HERO | 1 | 5 | `LegalPage.jsx` | Carried by 5 routes, on templates: legal-page. |
| `content.feature-section` | CONTENT | 2 | 4 | `FeatureSection.jsx` | Carried by 4 routes, on templates: product-feature, product-spyder. |
| `content.solution-cards` | CONTENT | 2 | 4 | `SolutionCards.jsx` | Carried by 4 routes, on templates: product-feature, product-spyder. |
| `interactive.product-tabs` | INTERACTIVE | 2 | 4 | `ProductTabs.jsx` | Carried by 4 routes, on templates: product-feature, product-spyder. |
| `hero.gradient` | HERO | 3 | 3 | `GradientHero.jsx` | Carried by 3 routes, on templates: paid-landing, blog-index, faq-index. |
| `hero.page` | HERO | 3 | 3 | `PageHero.jsx` | Carried by 3 routes, on templates: affiliates, fireside, bounties-index. |
| `hero.product-shell` | HERO | 3 | 3 | `Api.jsx + Mcp.jsx + MobileApp.jsx + ProductHero.jsx` | Carried by 3 routes, on templates: developer-api, developer-mcp, mobile-app. |
| `social-proof.ratings-wall` | SOCIAL-PROOF | 2 | 3 | `BookDemo.jsx + WorkWith.jsx` | Carried by 3 routes, on templates: book-demo, work-with. |
| `content.career-body` | CONTENT | 1 | 3 | `Career.jsx` | Carried by 3 routes, on templates: career. |
| `interactive.product-carousel` | INTERACTIVE | 1 | 3 | `ProductCarousel.jsx` | Carried by 3 routes, on templates: product-feature. |
| `content.image-step-cards` | CONTENT | 2 | 2 | `ImageStepCards.jsx` | Carried by 2 routes, on templates: affiliates, fireside. |
| `content.media-rows` | CONTENT | 2 | 2 | `Mcp.jsx + Rows.jsx` | Carried by 2 routes, on templates: developer-api, developer-mcp. |
| `content.mobile-app-features` | CONTENT | 2 | 2 | `MobileAppFeatures.jsx` | Carried by 2 routes, on templates: mobile-app, paid-landing. |
| `content.split-sections` | CONTENT | 2 | 2 | `SplitSection.jsx` | Carried by 2 routes, on templates: university-landing, university-course. |
| `hero.contest` | HERO | 2 | 2 | `Contest.jsx + ContestSubmission.jsx + contest.jsx` | Carried by 2 routes, on templates: contest, contest-submission. |
| `hero.university` | HERO | 2 | 2 | `University.jsx` | Carried by 2 routes, on templates: university-landing, university-course. |
| `pricing.api-credits` | PRICING | 2 | 2 | `ApiPricing.jsx` | Carried by 2 routes, on templates: developer-api, pre-black-friday. |
| `content.not-found` | CONTENT | 1 | 2 | `App.jsx + Layout.jsx` | Carried by 2 routes, on templates: not-found. |
| `content.work-best` | CONTENT | 1 | 2 | `WorkWith.jsx` | Carried by 2 routes, on templates: work-with. |
| `form.embed-application` | FORM | 1 | 2 | `ApplicationPage.jsx` | Carried by 2 routes, on templates: application-form. |
| `form.work-hero` | FORM | 1 | 2 | `WorkWith.jsx` | Carried by 2 routes, on templates: work-with. |
| `content.agency-directory` | CONTENT | 1 | 1 | `AgencyDirectory.jsx` | Carried by 1 routes, on templates: agency-directory. |
| `content.before-after` | CONTENT | 1 | 1 | `BeforeAfter.jsx + Home.jsx` | Carried by 1 routes, on templates: home. |
| `content.bounty-detail` | CONTENT | 1 | 1 | `Bounty.jsx` | Carried by 1 routes, on templates: bounty. |
| `content.bounty-list` | CONTENT | 1 | 1 | `Bounties.jsx` | Carried by 1 routes, on templates: bounties-index. |
| `content.ce-install-guide` | CONTENT | 1 | 1 | `ChromeExtension.jsx` | Carried by 1 routes, on templates: chrome-extension. |
| `content.collaboration` | CONTENT | 1 | 1 | `Collaboration.jsx + Home.jsx + Sharing.jsx` | Carried by 1 routes, on templates: home. |
| `content.contest-faq` | CONTENT | 1 | 1 | `contest.jsx` | Carried by 1 routes, on templates: contest-submission. |
| `content.contest-finalists` | CONTENT | 1 | 1 | `Contest.jsx` | Carried by 1 routes, on templates: contest. |
| `content.contest-sponsors` | CONTENT | 1 | 1 | `Contest.jsx` | Carried by 1 routes, on templates: contest. |
| `content.contest-submission-grid` | CONTENT | 1 | 1 | `ContestSubmission.jsx` | Carried by 1 routes, on templates: contest-submission. |
| `content.experts-directory` | CONTENT | 1 | 1 | `Experts.jsx` | Carried by 1 routes, on templates: experts-index. |
| `content.faq-list` | CONTENT | 1 | 1 | `Faq.jsx` | Carried by 1 routes, on templates: faq-index. |
| `content.jobs-list` | CONTENT | 1 | 1 | `JobsList.jsx` | Carried by 1 routes, on templates: careers-index. |
| `content.jumpstart-offer` | CONTENT | 1 | 1 | `Jumpstart.jsx` | Carried by 1 routes, on templates: jumpstart. |
| `content.lens-contextual-block` | CONTENT | 1 | 1 | `Lens.jsx + LensBenchmarking.jsx` | Carried by 1 routes, on templates: product-lens. |
| `content.lens-enrichment` | CONTENT | 1 | 1 | `LensEnrichment.jsx` | Carried by 1 routes, on templates: product-lens. |
| `content.lens-solution-block` | CONTENT | 1 | 1 | `Lens.jsx + LensGraphCard.jsx + LensReporting.jsx` | Carried by 1 routes, on templates: product-lens. |
| `content.product-showcase` | CONTENT | 1 | 1 | `Home.jsx + ProductSections.jsx` | Carried by 1 routes, on templates: home. |
| `content.ships-grid` | CONTENT | 1 | 1 | `Ships.jsx` | Carried by 1 routes, on templates: ships. |
| `content.university-curriculum` | CONTENT | 1 | 1 | `University.jsx` | Carried by 1 routes, on templates: university-course. |
| `hero.booking` | HERO | 1 | 1 | `BookDemo.jsx` | Carried by 1 routes, on templates: book-demo. |
| `hero.demo-video` | HERO | 1 | 1 | `WatchDemo.jsx` | Carried by 1 routes, on templates: watch-demo. |
| `hero.directory` | HERO | 1 | 1 | `AgencyDirectory.jsx` | Carried by 1 routes, on templates: agency-directory. |
| `hero.home` | HERO | 1 | 1 | `Hero.jsx + Home.jsx` | Carried by 1 routes, on templates: home. |
| `hero.jumpstart` | HERO | 1 | 1 | `Jumpstart.jsx` | Carried by 1 routes, on templates: jumpstart. |
| `hero.media-kit` | HERO | 1 | 1 | `MediaKit.jsx` | Carried by 1 routes, on templates: media-kit. |
| `hero.product-content` | HERO | 1 | 1 | `AppsExtensions.jsx + ProductHero.jsx` | Carried by 1 routes, on templates: apps-extensions. |
| `hero.promo` | HERO | 1 | 1 | `PreBlackFriday.jsx` | Carried by 1 routes, on templates: pre-black-friday. |
| `hero.section-head` | HERO | 1 | 1 | `Reviews.jsx` | Carried by 1 routes, on templates: reviews. |
| `hero.ships` | HERO | 1 | 1 | `Ships.jsx` | Carried by 1 routes, on templates: ships. |
| `hero.split-video` | HERO | 1 | 1 | `Experts.jsx` | Carried by 1 routes, on templates: experts-index. |
| `interactive.lens-integrations` | INTERACTIVE | 1 | 1 | `LensIntegrations.jsx` | Carried by 1 routes, on templates: product-lens. |
| `pricing.compare-table` | PRICING | 1 | 1 | `Comparison.jsx` | Carried by 1 routes, on templates: pricing. |
| `pricing.plans` | PRICING | 1 | 1 | `Pricing.jsx` | Carried by 1 routes, on templates: pricing. |
| `social-proof.logo-strip` | SOCIAL-PROOF | 1 | 1 | `Jumpstart2026.jsx` | Carried by 1 routes, on templates: jumpstart. |
| `social-proof.senja-wall` | SOCIAL-PROOF | 1 | 1 | `SenjaWall.jsx` | Carried by 1 routes, on templates: reviews. |

**28 shared sections** appear in more than one template and belong in a component library.

**61 single-use sections** appear in exactly one template. Building these
as "reusable" components up front would be speculative — keep them page-local
until a second caller actually appears.

## Templates

### Home — `template.home`

1 route · `/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.home` | page-local |
| 3 | CONTENT | `content.before-after` | page-local |
| 4 | CONTENT | `content.product-showcase` | page-local |
| 5 | CONTENT | `content.collaboration` | page-local |
| 6 | CONTENT | `content.security-grid` | shared ×5 |
| 7 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 8 | SHELL | `shell.footer` | shared ×47 |
| 9 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Product Feature — `template.product-feature`

3 routes · `/briefs`, `/discovery`, `/swipe-file` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.product` | shared ×3 |
| 3 | CONTENT | `content.solution-cards` | shared ×2 |
| 4 | INTERACTIVE | `interactive.product-carousel` | page-local |
| 5 | INTERACTIVE | `interactive.product-tabs` | shared ×2 |
| 6 | CONTENT | `content.feature-section` | shared ×2 |
| 7 | CONVERSION | `conversion.cta-banner` | shared ×3 |
| 8 | CONTENT | `content.faq` | shared ×7 |
| 9 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 10 | SHELL | `shell.footer` | shared ×47 |
| 11 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Product Spyder — `template.product-spyder`

1 route · `/spyder-ad-spy` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.product` | shared ×3 |
| 3 | CONTENT | `content.solution-cards` | shared ×2 |
| 4 | CONTENT | `content.security-grid` | shared ×5 |
| 5 | INTERACTIVE | `interactive.product-tabs` | shared ×2 |
| 6 | CONTENT | `content.feature-section` | shared ×2 |
| 7 | CONVERSION | `conversion.cta-banner` | shared ×3 |
| 8 | CONTENT | `content.faq` | shared ×7 |
| 9 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 10 | SHELL | `shell.footer` | shared ×47 |
| 11 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Product Lens — `template.product-lens`

1 route · `/lens-creative-analytics` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.product` | shared ×3 |
| 3 | CONTENT | `content.lens-solution-block` | page-local |
| 4 | INTERACTIVE | `interactive.lens-integrations` | page-local |
| 5 | CONTENT | `content.lens-contextual-block` | page-local |
| 6 | CONTENT | `content.lens-enrichment` | page-local |
| 7 | CONTENT | `content.security-grid` | shared ×5 |
| 8 | CONVERSION | `conversion.cta-banner` | shared ×3 |
| 9 | SHELL | `shell.footer` | shared ×47 |
| 10 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Developer Api — `template.developer-api`

1 route · `/api` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.product-shell` | shared ×3 |
| 3 | CONTENT | `content.media-rows` | shared ×2 |
| 4 | PRICING | `pricing.api-credits` | shared ×2 |
| 5 | CONTENT | `content.faq` | shared ×7 |
| 6 | SHELL | `shell.footer` | shared ×47 |
| 7 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Developer Mcp — `template.developer-mcp`

1 route · `/mcp` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.product-shell` | shared ×3 |
| 3 | CONTENT | `content.media-rows` | shared ×2 |
| 4 | CONTENT | `content.faq` | shared ×7 |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Mobile App — `template.mobile-app`

1 route · `/mobile-app` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.product-shell` | shared ×3 |
| 3 | CONTENT | `content.mobile-app-features` | shared ×2 |
| 4 | SHELL | `shell.footer` | shared ×47 |
| 5 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Paid Landing — `template.paid-landing`

1 route · `/2026-paid-lp` · chrome: **nav-only**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.gradient` | shared ×3 |
| 3 | CONTENT | `content.mobile-app-features` | shared ×2 |
| 4 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Apps Extensions — `template.apps-extensions`

1 route · `/apps-extensions` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.product-content` | page-local |
| 3 | CONTENT | `content.security-grid` | shared ×5 |
| 4 | SHELL | `shell.footer` | shared ×47 |
| 5 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Chrome Extension — `template.chrome-extension`

1 route · `/chrome-extension` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | CONTENT | `content.ce-install-guide` | page-local |
| 3 | SHELL | `shell.footer` | shared ×47 |
| 4 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Pricing — `template.pricing`

1 route · `/pricing` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | PRICING | `pricing.plans` | page-local |
| 3 | PRICING | `pricing.compare-table` | page-local |
| 4 | CONTENT | `content.faq` | shared ×7 |
| 5 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 6 | SHELL | `shell.footer` | shared ×47 |
| 7 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Pre Black Friday — `template.pre-black-friday`

1 route · `/pre-black-friday` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.promo` | page-local |
| 3 | PRICING | `pricing.api-credits` | shared ×2 |
| 4 | CONTENT | `content.faq` | shared ×7 |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Book Demo — `template.book-demo`

1 route · `/book-demo` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.booking` | page-local |
| 3 | SOCIAL-PROOF | `social-proof.ratings-wall` | shared ×2 |
| 4 | SHELL | `shell.footer` | shared ×47 |
| 5 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Watch Demo — `template.watch-demo`

1 route · `/watch-demo` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.demo-video` | page-local |
| 3 | SHELL | `shell.footer` | shared ×47 |
| 4 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Application Form — `template.application-form`

2 routes · `/experts-application`, `/fireside-application` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | FORM | `form.embed-application` | page-local |
| 3 | SHELL | `shell.footer` | shared ×47 |
| 4 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Work With — `template.work-with`

2 routes · `/work-with-brands`, `/work-with-marketers` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | FORM | `form.work-hero` | page-local |
| 3 | CONTENT | `content.work-best` | page-local |
| 4 | SOCIAL-PROOF | `social-proof.ratings-wall` | shared ×2 |
| 5 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 6 | SHELL | `shell.footer` | shared ×47 |
| 7 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Agency Directory — `template.agency-directory`

1 route · `/agency-directory` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.directory` | page-local |
| 3 | CONTENT | `content.agency-directory` | page-local |
| 4 | SHELL | `shell.footer` | shared ×47 |
| 5 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Affiliates — `template.affiliates`

1 route · `/affiliates` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.page` | shared ×3 |
| 3 | CONTENT | `content.image-step-cards` | shared ×2 |
| 4 | CONTENT | `content.faq` | shared ×7 |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Fireside — `template.fireside`

1 route · `/fireside` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.page` | shared ×3 |
| 3 | CONTENT | `content.image-step-cards` | shared ×2 |
| 4 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Bounties Index — `template.bounties-index`

1 route · `/bounties` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.page` | shared ×3 |
| 3 | CONTENT | `content.bounty-list` | page-local |
| 4 | SHELL | `shell.footer` | shared ×47 |
| 5 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Experts Index — `template.experts-index`

1 route · `/experts` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.split-video` | page-local |
| 3 | CONTENT | `content.experts-directory` | page-local |
| 4 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Reviews — `template.reviews`

1 route · `/reviews` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.section-head` | page-local |
| 3 | SOCIAL-PROOF | `social-proof.senja-wall` | page-local |
| 4 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Contest — `template.contest`

1 route · `/contest` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.contest` | shared ×2 |
| 3 | CONTENT | `content.contest-sponsors` | page-local |
| 4 | CONTENT | `content.contest-finalists` | page-local |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Contest Submission — `template.contest-submission`

1 route · `/contest-submission` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.contest` | shared ×2 |
| 3 | CONTENT | `content.contest-submission-grid` | page-local |
| 4 | CONTENT | `content.contest-faq` | page-local |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Blog Index — `template.blog-index`

1 route · `/blog` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.gradient` | shared ×3 |
| 3 | CONTENT | `content.post-grid` | shared ×4 |
| 4 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Faq Index — `template.faq-index`

1 route · `/faq` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.gradient` | shared ×3 |
| 3 | CONTENT | `content.faq-list` | page-local |
| 4 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Careers Index — `template.careers-index`

1 route · `/careers` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.centered` | shared ×3 |
| 3 | CONTENT | `content.jobs-list` | page-local |
| 4 | SHELL | `shell.footer` | shared ×47 |
| 5 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Creative Strategist Jobs — `template.creative-strategist-jobs`

1 route · `/creative-strategist-jobs` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.centered` | shared ×3 |
| 3 | CONTENT | `content.post-grid` | shared ×4 |
| 4 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Media Kit — `template.media-kit`

1 route · `/media-kit` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.media-kit` | page-local |
| 3 | SHELL | `shell.footer` | shared ×47 |
| 4 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Jumpstart — `template.jumpstart`

1 route · `/jumpstart-2026` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.jumpstart` | page-local |
| 3 | SOCIAL-PROOF | `social-proof.logo-strip` | page-local |
| 4 | CONTENT | `content.jumpstart-offer` | page-local |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Ships — `template.ships`

1 route · `/ships` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.ships` | page-local |
| 3 | CONTENT | `content.ships-grid` | page-local |
| 4 | SHELL | `shell.footer` | shared ×47 |
| 5 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Fireside Replays — `template.fireside-replays`

1 route · `/fireside-replays` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | NAV | `nav.breadcrumb` | shared ×8 |
| 3 | HERO | `hero.blog-top` | shared ×7 |
| 4 | CONTENT | `content.replay-list` | shared ×2 |
| 5 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 6 | SHELL | `shell.footer` | shared ×47 |
| 7 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Post — `template.post`

182 routes · `/post/{slug}` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | NAV | `nav.breadcrumb` | shared ×8 |
| 3 | HERO | `hero.blog-top` | shared ×7 |
| 4 | CONTENT | `content.article` | page-local |
| 5 | CONTENT | `content.related-carousel` | page-local |
| 6 | CONTENT | `content.author-row` | page-local |
| 7 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 8 | SHELL | `shell.footer` | shared ×47 |
| 9 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Expert — `template.expert`

67 routes · `/experts/{slug}` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.expert-profile` | page-local |
| 3 | CONTENT | `content.expert-more` | page-local |
| 4 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Faq Item — `template.faq-item`

65 routes · `/faqs/{slug}` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | NAV | `nav.breadcrumb` | shared ×8 |
| 3 | HERO | `hero.blog-top` | shared ×7 |
| 4 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Author — `template.author`

43 routes · `/authors/{slug}` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | NAV | `nav.breadcrumb` | shared ×8 |
| 3 | HERO | `hero.blog-top` | shared ×7 |
| 4 | CONTENT | `content.post-grid` | shared ×4 |
| 5 | CONTENT | `content.replay-list` | shared ×2 |
| 6 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 7 | SHELL | `shell.footer` | shared ×47 |
| 8 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Event — `template.event`

27 routes · `/events/{slug}` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | NAV | `nav.breadcrumb` | shared ×8 |
| 3 | HERO | `hero.blog-top` | shared ×7 |
| 4 | CONTENT | `content.event-body` | page-local |
| 5 | CONTENT | `content.event-more` | page-local |
| 6 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 7 | SHELL | `shell.footer` | shared ×47 |
| 8 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Agency — `template.agency`

26 routes · `/agencies/{slug}` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | NAV | `nav.breadcrumb` | shared ×8 |
| 3 | CONTENT | `content.agency-profile` | page-local |
| 4 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Video — `template.video`

16 routes · `/videos/{slug}` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.video` | page-local |
| 3 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 4 | SHELL | `shell.footer` | shared ×47 |
| 5 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Category — `template.category`

15 routes · `/category/{slug}` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.centered` | shared ×3 |
| 3 | CONTENT | `content.post-grid` | shared ×4 |
| 4 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Comparison — `template.comparison`

10 routes · `/comparison/{slug}` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.comparison` | page-local |
| 3 | SOCIAL-PROOF | `social-proof.comparison-reviews` | page-local |
| 4 | INTERACTIVE | `interactive.product-tabs-5` | shared ×2 |
| 5 | PRICING | `pricing.comparison-pricing` | page-local |
| 6 | CONTENT | `content.comparison-table` | page-local |
| 7 | CONTENT | `content.security-grid` | shared ×5 |
| 8 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 9 | OVERLAY | `overlay.psa-sticky` | page-local |
| 10 | SHELL | `shell.footer` | shared ×47 |
| 11 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Industry — `template.industry`

6 routes · `/industries/{slug}` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.industry` | page-local |
| 3 | SOCIAL-PROOF | `social-proof.industry-testimonials` | page-local |
| 4 | INTERACTIVE | `interactive.product-tabs-5` | shared ×2 |
| 5 | CONTENT | `content.industry-examples` | page-local |
| 6 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 7 | SHELL | `shell.footer` | shared ×47 |
| 8 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Legal Page — `template.legal-page`

5 routes · `/page/{slug}` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.legal-title` | page-local |
| 3 | CONTENT | `content.legal-richtext` | page-local |
| 4 | SHELL | `shell.footer` | shared ×47 |
| 5 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Career — `template.career`

3 routes · `/careers/{slug}` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | NAV | `nav.breadcrumb` | shared ×8 |
| 3 | HERO | `hero.blog-top` | shared ×7 |
| 4 | CONTENT | `content.career-body` | page-local |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### University Landing — `template.university-landing`

1 route · `/university/classes` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.university` | shared ×2 |
| 3 | CONTENT | `content.split-sections` | shared ×2 |
| 4 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 5 | SHELL | `shell.footer` | shared ×47 |
| 6 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### University Course — `template.university-course`

1 route · `/university/psychology-in-advertising` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | HERO | `hero.university` | shared ×2 |
| 3 | CONTENT | `content.university-curriculum` | page-local |
| 4 | CONTENT | `content.split-sections` | shared ×2 |
| 5 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 6 | SHELL | `shell.footer` | shared ×47 |
| 7 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Bounty — `template.bounty`

1 routes · `/bounties/{slug}` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | NAV | `nav.breadcrumb` | shared ×8 |
| 3 | HERO | `hero.blog-top` | shared ×7 |
| 4 | CONTENT | `content.bounty-detail` | page-local |
| 5 | CONVERSION | `conversion.cta-final` | shared ×25 |
| 6 | SHELL | `shell.footer` | shared ×47 |
| 7 | SHELL | `shell.exit-intent-modal` | shared ×48 |

### Not Found — `template.not-found`

2 routes · `/post/ai-emotional-analysis-new-ad-details`, `/post/restaurant-facebook-ad-examples` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×48 |
| 2 | CONTENT | `content.not-found` | page-local |
| 3 | SHELL | `shell.footer` | shared ×47 |
| 4 | SHELL | `shell.exit-intent-modal` | shared ×48 |

## Section reference

### SHELL

_Global chrome mounted once in src/App.jsx on every route (navbar, footer, overlays)._

**`shell.exit-intent-modal`** — Global exit-intent dialog: armed on desktop (>768) once per 7 days / cookie, opens when the pointer leaves the top edge (clientY <= 20).

· Carried by 506 routes, on templates: home, product-feature, product-spyder, product-lens, developer-api, developer-mcp, mobile-app, paid-landing, apps-extensions, chrome-extension, pricing, pre-black-friday, book-demo, watch-demo, application-form, work-with, agency-directory, affiliates, fireside, bounties-index, experts-index, reviews, contest, contest-submission, blog-index, faq-index, careers-index, creative-strategist-jobs, media-kit, jumpstart, ships, fireside-replays, post, expert, faq-item, author, event, agency, video, category, comparison, industry, legal-page, career, university-landing, university-course, bounty, not-found. · appears on 506 routes · implemented by `App.jsx + ExitIntentModal.jsx`

**`shell.footer`** — Global footer (with the floating calendar pop-up inside it): product sprite badges, review badges, link columns (Product, Resources + Compare dropdown, Solutions, Company, Community), an Ad Count snapshot and the legal row. No outbound links; the Ask-AI row and social icons were removed.

· Carried by 505 routes, on templates: home, product-feature, product-spyder, product-lens, developer-api, developer-mcp, mobile-app, apps-extensions, chrome-extension, pricing, pre-black-friday, book-demo, watch-demo, application-form, work-with, agency-directory, affiliates, fireside, bounties-index, experts-index, reviews, contest, contest-submission, blog-index, faq-index, careers-index, creative-strategist-jobs, media-kit, jumpstart, ships, fireside-replays, post, expert, faq-item, author, event, agency, video, category, comparison, industry, legal-page, career, university-landing, university-course, bounty, not-found. · appears on 505 routes · implemented by `App.jsx + Footer.jsx`

**`shell.navbar`** — Global sticky navigation mounted once in App.jsx: brand, Product/Solutions/Resources click dropdowns, Pricing, Book a Demo and a 'Start free trial' CTA. Every href is internal: the clone deliberately has NO outbound navbar links.

· Carried by 506 routes, on templates: home, product-feature, product-spyder, product-lens, developer-api, developer-mcp, mobile-app, paid-landing, apps-extensions, chrome-extension, pricing, pre-black-friday, book-demo, watch-demo, application-form, work-with, agency-directory, affiliates, fireside, bounties-index, experts-index, reviews, contest, contest-submission, blog-index, faq-index, careers-index, creative-strategist-jobs, media-kit, jumpstart, ships, fireside-replays, post, expert, faq-item, author, event, agency, video, category, comparison, industry, legal-page, career, university-landing, university-course, bounty, not-found. · appears on 506 routes · implemented by `App.jsx + Navbar.jsx`

### NAV

_In-page navigation aids (breadcrumbs, tables of contents) that are not the global navbar._

**`nav.breadcrumb`** — S1 breadcrumb row (padding 40/0, hidden <=479): parent crumb -> current title (ellipsis).

· Carried by 348 routes, on templates: fireside-replays, post, faq-item, author, event, agency, career, bounty. · appears on 348 routes · implemented by `Breadcrumb.jsx`

### HERO

_The opening block of a page: title, intro copy, primary actions and hero media._

**`hero.blog-top`** — S2 title block (.blog-top): h1 display-h4 (28/36 at all widths) + optional body + line. Variants by template: post (excerpt), faq (answer rich text), event (EventMeta), career, bounty (desc, video, detail card, Submit), replays (lead), author (headshot, role, website, bio, socials).

· Carried by 322 routes, on templates: fireside-replays, post, faq-item, author, event, career, bounty. · appears on 322 routes · implemented by `TitleBlock.jsx`

**`hero.booking`** — Book-demo hero: overline + h1 + lead, APAC 'Request Call' bar (-> /apac-demo, which redirects to /book-demo), Cal.com scheduler placeholder (480 / 1019 tall) and the logo strip.

· Carried by 1 routes, on templates: book-demo. · appears on 1 routes · implemented by `BookDemo.jsx`

**`hero.centered`** — S9 centred hero (.demo-hero / .fireside-hero + .section-head): overline, h1 (display-h2), stand-in paragraph. careers, creative-strategist-jobs, category.

· Carried by 17 routes, on templates: careers-index, creative-strategist-jobs, category. · appears on 17 routes · implemented by `CenteredHero.jsx`

**`hero.comparison`** — Comparison entry hero: overline, h1 'Foreplay vs X', stand-in intro (introLen), buttons and a hero video/poster.

· Carried by 10 routes, on templates: comparison. · appears on 10 routes · implemented by `Comparison.jsx`

**`hero.contest`** — Contest theme header (.contest wrapper, Circular, gradient heading): contest page (date, prize info, header bg radial fade >=1280) or submission hub (pill, 'Presented By', tips).

· Carried by 2 routes, on templates: contest, contest-submission. · appears on 2 routes · implemented by `Contest.jsx + ContestSubmission.jsx + contest.jsx`

**`hero.demo-video`** — Watch-demo: section head, Wistia player placeholder (16:9) and a white message card with a Start Free Trial button.

· Carried by 1 routes, on templates: watch-demo. · appears on 1 routes · implemented by `WatchDemo.jsx`

**`hero.directory`** — Agency directory hero (WorkHeroGrid): icon + overline h1, h2 title, lead, empty decorative panel (0 tall <=991).

· Carried by 1 routes, on templates: agency-directory. · appears on 1 routes · implemented by `AgencyDirectory.jsx`

**`hero.expert-profile`** — Expert entry hero: breadcrumb inside, headshot, name h1, social icons, role/bio text, 'Access Free Swipe File' CTA and the large board-window card.

· Carried by 67 routes, on templates: expert. · appears on 67 routes · implemented by `Expert.jsx`

**`hero.gradient`** — M1 gradient page hero: centred overline + H1-size gradient title (+ optional paragraph), with optional children (FAQ buttons) or an 'after' block (blog featured grid, paid-lp CTA).

· Carried by 3 routes, on templates: paid-landing, blog-index, faq-index. · appears on 3 routes · implemented by `GradientHero.jsx`

**`hero.home`** — Homepage hero: gradient h1, lead, Start Free Trial, the 14-logo strip and the full-width product video; the sticky block shrinks on scroll.

· Carried by 1 routes, on templates: home. · appears on 1 routes · implemented by `Hero.jsx + Home.jsx`

**`hero.industry`** — Industry entry hero: industry icon, overline, h1, stand-in paragraph (paraLen), Start Free Trial + Book a Demo, and a 20s CSS logo marquee (two copies).

· Carried by 6 routes, on templates: industry. · appears on 6 routes · implemented by `Industry.jsx`

**`hero.jumpstart`** — Jumpstart-2026 hero: spaced uppercase kicker, giant '2026' type, countdown stand-in, rotating circle (60s loop) and background video.

· Carried by 1 routes, on templates: jumpstart. · appears on 1 routes · implemented by `Jumpstart.jsx`

**`hero.legal-title`** — Legal page title: centred display-h2 h1, padding 75/0.

· Carried by 5 routes, on templates: legal-page. · appears on 5 routes · implemented by `LegalPage.jsx`

**`hero.media-kit`** — Media-kit hero only: 200px folder image + h1 + stand-in subline + 'Download all brand assets' (href #).

· Carried by 1 routes, on templates: media-kit. · appears on 1 routes · implemented by `MediaKit.jsx`

**`hero.page`** — C1 community PageHero (fireside, bounties, affiliates): optional top media, overline, title (h1 gradient or h2), subtitle, dark-primary CTA, optional children (fireside tabs, bounty characters).

· Carried by 3 routes, on templates: affiliates, fireside, bounties-index. · appears on 3 routes · implemented by `PageHero.jsx`

**`hero.product-content`** — Short centred product hero without media (apps-extensions): overline inside, h1, subtitle, one CTA.

· Carried by 1 routes, on templates: apps-extensions. · appears on 1 routes · implemented by `AppsExtensions.jsx + ProductHero.jsx`

**`hero.product-shell`** — ProductHeroShell with page-specific sticky content (api: icon, h1 gradient, docs cards, integrations row; mcp: setup tabs for Claude/ChatGPT with copy buttons; mobile-app: phone video + store badges). Same a-71 parallax as hero.product.

· Carried by 3 routes, on templates: developer-api, developer-mcp, mobile-app. · appears on 3 routes · implemented by `Api.jsx + Mcp.jsx + MobileApp.jsx + ProductHero.jsx`

**`hero.product`** — Product-page hero (swipe-file, discovery, spyder, briefs, lens): animated product icon, overline, h1, subtitle, Start free trial, then the sticky product screen video that shrinks on scroll (inOutCubic translate).

· Carried by 5 routes, on templates: product-feature, product-spyder, product-lens. · appears on 5 routes · implemented by `ProductHero.jsx`

**`hero.promo`** — Pre-black-friday hero: animated gradient stand-in for the Unicorn Studio WebGL scene, Bounties announcement pill, h1, stand-in lead, Claim Offer / View Q4 Pricing.

· Carried by 1 routes, on templates: pre-black-friday. · appears on 1 routes · implemented by `PreBlackFriday.jsx`

**`hero.section-head`** — Plain section-head page header (reviews: 'WALL OF LOVE').

· Carried by 1 routes, on templates: reviews. · appears on 1 routes · implemented by `Reviews.jsx`

**`hero.ships`** — Ships legacy '2.0' header: helmet icon + 'Foreplay Ships' (Circular, gradient), Ebgaramond 54px title, light stand-in subline, header art.

· Carried by 1 routes, on templates: ships. · appears on 1 routes · implemented by `Ships.jsx`

**`hero.split-video`** — Experts index hero: left overline/title/lead + Browse Experts / Become a Expert, right framed background video.

· Carried by 1 routes, on templates: experts-index. · appears on 1 routes · implemented by `Experts.jsx`

**`hero.university`** — University hero: landing (/university/classes: logo, heroTitle, tilt course cards over a faded bg) or course (breadcrumb, wordmark, blurb, teacher, email capture form, branding art).

· Carried by 2 routes, on templates: university-landing, university-course. · appears on 2 routes · implemented by `University.jsx`

**`hero.video`** — Video entry: S9 demo hero with overline/title/paragraph(110), primary + secondary CTAs from data, and the 16:9 VideoBox placeholder.

· Carried by 16 routes, on templates: video. · appears on 16 routes · implemented by `Video.jsx`

### CONTENT

_Body blocks that explain products, list CMS entries, or carry article/rich-text content._

**`content.agency-directory`** — Agency directory: filter sidebar (service/industry checkboxes with counts) + paginated feed of AgencyCards (9 per page). INTENTIONAL DEVIATION: <=767 the sidebar stacks above the feed (live overflows at 390).

· Carried by 1 routes, on templates: agency-directory. · appears on 1 routes · implemented by `AgencyDirectory.jsx`

**`content.agency-profile`** — Agency entry: tilt profile card (logo, name, verified, Visit Website/Contact/LinkedIn, location, service + industry pills) beside 4 stand-in sections (About, What sets them apart, Core Services & Offer, Contact + lead form). INTENTIONAL DEVIATION: stacks <=767.

· Carried by 26 routes, on templates: agency. · appears on 26 routes · implemented by `Agency.jsx`

**`content.article`** — Post body: 3-column grid (sticky TOC | article | sticky TrialCard): optional cover (showCover), author row with external socials + 'More Articles', optional '30 Second Summary', stand-in rich-text body with heading anchors.

· Carried by 182 routes, on templates: post. · appears on 182 routes · implemented by `Post.jsx`

**`content.author-row`** — Post footer author row (.blog-author repeated after the related carousel).

· Carried by 182 routes, on templates: post. · appears on 182 routes · implemented by `Post.jsx`

**`content.before-after`** — First white block 'Your new secret weapon for ads': Before (logo rain physics) vs After Foreplay (loader video) cards.

· Carried by 1 routes, on templates: home. · appears on 1 routes · implemented by `BeforeAfter.jsx + Home.jsx`

**`content.bounty-detail`** — Bounty entry: Details/Submissions tabs (instant), stand-in details rich text, then the submit form (formSections, reCAPTCHA placeholder, Submit; never submits).

· Carried by 1 routes, on templates: bounty. · appears on 1 routes · implemented by `Bounty.jsx`

**`content.bounty-list`** — Open bounties list: 'Open Bounties' tag, BountyCards (amount, due date, status, title, stand-in description, author) and a 'coming soon' placeholder card.

· Carried by 1 routes, on templates: bounties-index. · appears on 1 routes · implemented by `Bounties.jsx`

**`content.career-body`** — Career entry body: 'Apply Now' action row (job.applyUrl, external) + 'Job Description' stand-in rich text (blocksFrom, bodyLen up to 3244).

· Carried by 3 routes, on templates: career. · appears on 3 routes · implemented by `Career.jsx`

**`content.ce-install-guide`** — Chrome-extension legacy page body: sticky lottie pin, 5px blue bar, black section with Chrome/Phone pills and three numbered install steps (Chrome extension, Instagram mobile, TikTok mobile with store buttons).

· Carried by 1 routes, on templates: chrome-extension. · appears on 1 routes · implemented by `ChromeExtension.jsx`

**`content.collaboration`** — Second white block: 'Collaboration' head, testimonial-pin rays around an oval illustration (7 real customer testimonials) and the 'Beautifully present wins' sharing tabs.

· Carried by 1 routes, on templates: home. · appears on 1 routes · implemented by `Collaboration.jsx + Home.jsx + Sharing.jsx`

**`content.comparison-table`** — Comparison table: head (tableOverline/Title + stand-in) and a 3-col grid (feature | Foreplay | competitor) of value cells with check/x icons, coloured bars and pills.

· Carried by 10 routes, on templates: comparison. · appears on 10 routes · implemented by `Comparison.jsx`

**`content.contest-faq`** — Contest FAQ ('Questions? We got answers!'): ContestFaqItem rows (IX2 accordion, contest theme).

· Carried by 1 routes, on templates: contest-submission. · appears on 1 routes · implemented by `contest.jsx`

**`content.contest-finalists`** — 'Watch the Finalist Submissions': prize groups (PrizeBlock) each with 3-col FinalistCards (video thumb + play, brand row, creator, LinkedIn) opening an embed lightbox placeholder.

· Carried by 1 routes, on templates: contest. · appears on 1 routes · implemented by `Contest.jsx`

**`content.contest-sponsors`** — Contest sponsors row (logos).

· Carried by 1 routes, on templates: contest. · appears on 1 routes · implemented by `Contest.jsx`

**`content.contest-submission-grid`** — Contest submission hub grid (blocks A-E): submission options with eligible awards, bonus entries (X post embed placeholder), judges, resources.

· Carried by 1 routes, on templates: contest-submission. · appears on 1 routes · implemented by `ContestSubmission.jsx`

**`content.event-body`** — Event body: 800px framed video placeholder (Luma signup only for upcoming), 'Never miss an event' row (lu.ma external), 'What you'll learn' stand-in list and optional transcript dropdown (INTENTIONAL FIX: transparent bg instead of live #ddd).

· Carried by 27 routes, on templates: event. · appears on 27 routes · implemented by `Event.jsx`

**`content.event-more`** — Event aside: 'Watch More Replays' row (-> /fireside-replays) + 3 latest UpcomingCards.

· Carried by 27 routes, on templates: event. · appears on 27 routes · implemented by `Event.jsx`

**`content.expert-more`** — Expert entry white block: 'More ad creative experts' + paragraph(110) stand-in + 3-col ExpertCards (6 others).

· Carried by 67 routes, on templates: expert. · appears on 67 routes · implemented by `Expert.jsx`

**`content.experts-directory`** — C7 experts white block: 'Featured Experts' head + 3 board cards, 'More Experts' h2 + 2-col row cards (all 67 experts).

· Carried by 1 routes, on templates: experts-index. · appears on 1 routes · implemented by `Experts.jsx`

**`content.faq-list`** — /faq: the 65 CMS FAQ rows (sorted by order) as bare accordion rows (max 752) with plain rich-text stand-in answers.

· Carried by 1 routes, on templates: faq-index. · appears on 1 routes · implemented by `Faq.jsx`

**`content.faq`** — FAQ section (shared Faq.jsx): overline 'FAQ', title, body, accordion rows (max 752 wide) and the FaqButtons row (Contact support + Knowledge Base).

· Carried by 9 routes, on templates: product-feature, product-spyder, developer-api, developer-mcp, pricing, pre-black-friday, affiliates. · appears on 9 routes · implemented by `Faq.jsx`

**`content.feature-section`** — 'ALL FEATURES' groups of feature cards (image or lottie, title, text), optionally followed by a customer testimonial per group.

· Carried by 4 routes, on templates: product-feature, product-spyder. · appears on 4 routes · implemented by `FeatureSection.jsx`

**`content.image-step-cards`** — C3 image step cards (Features-grid style, 768x528 images): affiliates 3 numbered steps; fireside 'Why should I attend?' with head + icons.

· Carried by 2 routes, on templates: affiliates, fireside. · appears on 2 routes · implemented by `ImageStepCards.jsx`

**`content.industry-examples`** — Industry ad examples: examplesHead + 3 example ad cards (avatar, brand, days running, ad image) + CTA row (stand-in examplesCta, Start Browsing -> sign-up).

· Carried by 6 routes, on templates: industry. · appears on 6 routes · implemented by `Industry.jsx`

**`content.jobs-list`** — Careers white block: JobsList rows (title, type, location, link) in live page order.

· Carried by 1 routes, on templates: careers-index. · appears on 1 routes · implemented by `JobsList.jsx`

**`content.jumpstart-offer`** — Jumpstart white offer block: velocity head, bullet list, video card, savings rows, offer head, countdown card.

· Carried by 1 routes, on templates: jumpstart. · appears on 1 routes · implemented by `Jumpstart.jsx`

**`content.legal-richtext`** — Full-bleed white block (no 8px inset) with plain legal rich text (misc-legal-rt) built by blocksFrom(structure, bodyLen) with 'see here' stand-in links.

· Carried by 5 routes, on templates: legal-page. · appears on 5 routes · implemented by `LegalPage.jsx`

**`content.lens-contextual-block`** — Lens white block S4: 'CONTEXTUAL AD REPORTS' head, two left/right illustration rows (Gamification, Benchmarks) and two benchmarking-segment marquees (0.75 and 0.5 px/frame, opposite directions).

· Carried by 1 routes, on templates: product-lens. · appears on 1 routes · implemented by `Lens.jsx + LensBenchmarking.jsx`

**`content.lens-enrichment`** — 'AI METADATA' rays illustration with hover tooltips (left/right pins).

· Carried by 1 routes, on templates: product-lens. · appears on 1 routes · implemented by `LensEnrichment.jsx`

**`content.lens-solution-block`** — Lens white block S2: 4 solution icons, 'Axe the ad spend tax.' two graph cards with scroll-drawn SVG lines, and the white-label reporting carousel (two testimonial panes with report mockups).

· Carried by 1 routes, on templates: product-lens. · appears on 1 routes · implemented by `Lens.jsx + LensGraphCard.jsx + LensReporting.jsx`

**`content.media-rows`** — White block of alternating illustration rows (GridRow content 5 / illustration 7, or LeftRightRow): api Spyder/Discovery/Swipe File API rows with product icons; mcp capability rows.

· Carried by 2 routes, on templates: developer-api, developer-mcp. · appears on 2 routes · implemented by `Mcp.jsx + Rows.jsx`

**`content.mobile-app-features`** — Mobile-app S2 feature stack: video feature card with YouTube lightbox trigger, 'Save content from your Phone' card and two video rows.

· Carried by 2 routes, on templates: mobile-app, paid-landing. · appears on 2 routes · implemented by `MobileAppFeatures.jsx`

**`content.not-found`** — TemplateNotFound / NotFound state: 'Page not found' + back-home link. Rendered for the two post slugs whose CMS entry is a '404' stub, for any unknown CMS slug, and by the * catch-all.

· Carried by 2 routes, on templates: not-found. · appears on 2 routes · implemented by `App.jsx + Layout.jsx`

**`content.post-grid`** — S4 BlogList grid of BlogListCards (3/2/1 cols). blog: 'Explore More Blogs' head + category chips + 24/page grid + ?page=N pagination; csj: SectionHead + 66 cards; category: topic chips + posts in category; author: 'Blogs' feed.

· Carried by 60 routes, on templates: blog-index, creative-strategist-jobs, author, category. · appears on 60 routes · implemented by `CardGrid.jsx`

**`content.product-showcase`** — Dark product section: centered head + homepage ProductCard rows (in-card tabs). 'research' shows Swipe File, Spyder, Discovery + the Chrome-extension card; 'analytics' shows Lens + Briefs.

· Carried by 1 routes, on templates: home. · appears on 1 routes · implemented by `Home.jsx + ProductSections.jsx`

**`content.related-carousel`** — S5 related posts carousel (track transform .6s expo, snap-x) with BlogCarouselCards (up to 5 related posts).

· Carried by 182 routes, on templates: post. · appears on 182 routes · implemented by `RelatedCarousel.jsx`

**`content.replay-list`** — C4/S6 Fireside replay rows (flex col gap 24): fireside-replays page (all 27 events newest first) and author pages (events by speaker).

· Carried by 44 routes, on templates: fireside-replays, author. · appears on 44 routes · implemented by `EventRow.jsx + ReplayRow.jsx`

**`content.security-grid`** — Section head + the 3-card '.lens-security-grid' frame (icon + title, image body, footer text with optional ghost button). Homepage 'Miles beyond the status quo', lens security, spyder use cases, apps-extensions downloads, comparison features.

· Carried by 14 routes, on templates: home, product-spyder, product-lens, apps-extensions, comparison. · appears on 14 routes · implemented by `Features.jsx + SecurityGrid.jsx`

**`content.ships-grid`** — Ships white grid: 2-col release cards (image 300/400/175 tall, date, Ebgaramond title hover cta, light stand-in excerpt).

· Carried by 1 routes, on templates: ships. · appears on 1 routes · implemented by `Ships.jsx`

**`content.solution-cards`** — Before/after solution block on product pages: head + two cards (dark 'before', light 'after') with images.

· Carried by 4 routes, on templates: product-feature, product-spyder. · appears on 4 routes · implemented by `SolutionCards.jsx`

**`content.split-sections`** — University SplitSection: alternating image/text rows from the entry's sections (bodies are stand-in).

· Carried by 2 routes, on templates: university-landing, university-course. · appears on 2 routes · implemented by `SplitSection.jsx`

**`content.university-curriculum`** — Course curriculum: module tab list (instant tabs + 300ms tpl-fade-in pane) with trailer VideoBox placeholder and coming-soon module posters.

· Carried by 1 routes, on templates: university-course. · appears on 1 routes · implemented by `University.jsx`

**`content.work-best`** — C5 WorkBest: centred head 'The world’s best marketers use Foreplay' + stand-in lead + illustration.

· Carried by 2 routes, on templates: work-with. · appears on 2 routes · implemented by `WorkWith.jsx`

### SOCIAL-PROOF

_Reviews, testimonials, logo walls and ratings._

**`social-proof.comparison-reviews`** — Comparison reviews: head (reviewsOverline/Title + stand-in paragraph) and 2 ReviewCards (Foreplay vs competitor: logo, store ratings, review image, callout).

· Carried by 10 routes, on templates: comparison. · appears on 10 routes · implemented by `Comparison.jsx`

**`social-proof.industry-testimonials`** — Industry testimonials: SectionHead (testimonialsHead + stand-in) and 3 TestimonialCards (logo, stand-in quote of quoteLen, headshot, name, role, link).

· Carried by 6 routes, on templates: industry. · appears on 6 routes · implemented by `Industry.jsx`

**`social-proof.logo-strip`** — Stand-alone logo strip section (jumpstart), hidden <=479.

· Carried by 1 routes, on templates: jumpstart. · appears on 1 routes · implemented by `Jumpstart2026.jsx`

**`social-proof.ratings-wall`** — White social-proof block: 'Loved by brands and agencies globally.' head + 3 rating tiles (G2 4.9, Chrome 4.8, Capterra 4.8) + Senja testimonial-wall placeholder.

· Carried by 3 routes, on templates: book-demo, work-with. · appears on 3 routes · implemented by `BookDemo.jsx + WorkWith.jsx`

**`social-proof.senja-wall`** — Reviews wall inside a white block: 64 locally generated stand-in testimonial cards (SenjaWall: generic first names + initials, stars, months) - no Senja request.

· Carried by 1 routes, on templates: reviews. · appears on 1 routes · implemented by `SenjaWall.jsx`

### PRICING

_Plan cards, pricing comparisons and plan-feature tables._

**`pricing.api-credits`** — #api-pricing: section head, 3 credit cards and the Enterprise footer card (api and pre-black-friday).

· Carried by 2 routes, on templates: developer-api, pre-black-friday. · appears on 2 routes · implemented by `ApiPricing.jsx`

**`pricing.compare-table`** — Sticky plan comparison grid: 4 plan columns (Basic, Workflow, Agency -> sign-up; Enterprise -> /book-demo), collapsible categories (instant height, chevron 600ms expo) and tooltips.

· Carried by 1 routes, on templates: pricing. · appears on 1 routes · implemented by `Comparison.jsx`

**`pricing.comparison-pricing`** — Comparison pricing cards: Foreplay vs competitor plan cards (pricing[] from data, stand-in notes).

· Carried by 10 routes, on templates: comparison. · appears on 10 routes · implemented by `Comparison.jsx`

**`pricing.plans`** — Pricing hero + plans: h1 gradient head, Monthly/Annually toggle (instant swap, Annually default), 3 PlanCards with benefit popovers, and the Enterprise card.

· Carried by 1 routes, on templates: pricing. · appears on 1 routes · implemented by `Pricing.jsx`

### INTERACTIVE

_Blocks whose main job is a behaviour: tabs, carousels, accordions, filters._

**`interactive.lens-integrations`** — 'INTEGRATIONS' head, two rows of platform logos and instant tabs (Creative Test Analysis / Group Comparison / Trend Analysis) with dashboard mockups.

· Carried by 1 routes, on templates: product-lens. · appears on 1 routes · implemented by `LensIntegrations.jsx`

**`interactive.product-carousel`** — 'USE CASES' slider: section head + slide cards (image, title, text) moved by prev/next arrows (translateX, .8s expo).

· Carried by 3 routes, on templates: product-feature. · appears on 3 routes · implemented by `ProductCarousel.jsx`

**`interactive.product-tabs-5`** — M2 '5 products in 1' Webflow tabs (fade 100/300): each pane is the homepage ProductCard with ghost 'Book a Demo'; tab order from tabOrder; default from tabsDefault.

· Carried by 16 routes, on templates: comparison, industry. · appears on 16 routes · implemented by `ProductTabs5.jsx`

**`interactive.product-tabs`** — 'CORE FEATURES' fade tabs (100ms out / 300ms in) each showing a feature screenshot, plus the optional Chrome-extension card.

· Carried by 4 routes, on templates: product-feature, product-spyder. · appears on 4 routes · implemented by `ProductTabs.jsx`

### FORM

_Lead / application / signup forms (render fields, never submit)._

**`form.embed-application`** — C2 application page body: centred head (overline, h1, lead) + NoteForms iframe placeholder (830 / 620 tall). No final CTA.

· Carried by 2 routes, on templates: application-form. · appears on 2 routes · implemented by `ApplicationPage.jsx`

**`form.work-hero`** — C5 WorkHero: left overline/title/lead + 3x3 logo grid, right DemoForm (brands/marketers field sets, never submits).

· Carried by 2 routes, on templates: work-with. · appears on 2 routes · implemented by `WorkWith.jsx`

### CONVERSION

_Closing calls to action that push to trial or demo._

**`conversion.cta-banner`** — Product-page trial banner 'Get a 7-Day free trial today' with body, product video and isometric icon.

· Carried by 5 routes, on templates: product-feature, product-spyder, product-lens. · appears on 5 routes · implemented by `CtaBanner.jsx`

**`conversion.cta-final`** — Closing call to action 'Ready to ship more winning ads?' with Start free trial + secondary button and the home-cta image. Comparison and industry entries override title, paragraph and the secondary button.

· Carried by 475 routes, on templates: home, product-feature, product-spyder, pricing, work-with, fireside, experts-index, reviews, blog-index, faq-index, creative-strategist-jobs, fireside-replays, post, expert, faq-item, author, event, agency, video, category, comparison, industry, university-landing, university-course, bounty. · appears on 475 routes · implemented by `CTA.jsx`

### OVERLAY

_Fixed or modal UI layered above the page._

**`overlay.psa-sticky`** — Comparison PSA sticky card (stand-in text, psaTextLen); its close button hides it (display:none).

· Carried by 10 routes, on templates: comparison. · appears on 10 routes · implemented by `Comparison.jsx`
