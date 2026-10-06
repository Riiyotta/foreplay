Source: https://www.foreplay.co/2026-paid-lp

# /2026-paid-lp: "2026 Paid LP"

**Method:** see `specs/_shared-misc.md`. **Raw dumps:** `specs/_measure/2026-paid-lp-{1440,991,390}.txt`. Webflow page id `6aa9a8b1507dedae6dcd8bf6`. Doc height: 2716 @1440, 2442 @991, 2667 @390.

This is a paid-traffic landing page and a trimmed copy of `/mobile-app`. The **Navbar is present but there is NO footer**. There is no CTA or FAQ either: the page ends with `div.negative-spacing-bottom` (margin-bottom −80, height 0). Only Inter 400/600 and Inter Display 600 are loaded.

## Section map
| # | Section | y/h @1440 | Reuse |
|---|---|---|---|
| 1 | Hero `section#product-hero-section > .container > .product-hero > .product-hero` (nested; padding-top 10 each) | 72 / 340 | M1 gradient hero |
| 2 | `div.section > .product-page-padding-y` (108/0; @390 80/0) `> .container.section-container > .mobile-app-main-features` (900 max, gap 64) | 412 / 2304 | **identical to `mobile-app.md` S2** (video-lightbox card, MacBook sync card, two `.left-right-section` rows with bg videos). Same assets in `/assets/pages/mobile-app/`. |

## 1. Hero (differences from M1)
- Overline h1 "MOBILE APP" sits **above** `.hero-text`, as a sibling inside `.product-hero-content` (gap 28).
- Title h2 `.hero-title` "Stop Guessing What Ads to Make Next": 2 lines @1440/991, 3 lines @390 (38/48).
- Paragraph `.max-w-lg > p.text-body-l.text-white-84` (.68) ‹~148ch, 3 lines›.
- The button sits **outside** `.product-hero-content`, in a bare `div` after it: `button-dark.button-primary` "Start Free Trial" → `https://app.foreplay.co/sign-up`, 159×40, centred (x640 @1440).
- Heights: 340 @1440/991, 468 @390 (padding 24/0 at ≤479).

## 2. Features
Same as `mobile-app.md` S2:
- Lightbox video card 900×500 (YouTube `BRRwHdlXHQA`, play bubble 100/68 px).
- "Save content to Foreplay from your Phone" card (900×596).
- Left/right rows: "Snap a Photo and save it to Swipe File" (video left 524×400, text right) and "Browse millions of ads" (text left, video right 558×400).

Geometry @991: video card 900×350; rows 514/548-wide videos, gap 40. @390: everything stacks, videos 342×350. Hover: `.feature-block` / `.macbook-sync-block-copy` bg → rgba(255,255,255,.07) (`.2s ease-in-out`). `.play-button-1` padding 15 → 5 on hover (`.2s`).

## Motion
Bg videos autoplay (muted, loop). Lightbox. Hover. No IX2.
