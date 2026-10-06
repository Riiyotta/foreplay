Source: https://www.foreplay.co/experts-application

# `/experts-application`: Expert application (NoteForms embed)

Measured 2026-10-06 with headless Chromium at 1440 / 991 / 390. Geometry is `[x, y, w, h]` in document px. Long copy is replaced by `[N chars, L lines]`.

- Title: `Apply to be a Foreplay Expert`. wf page `64db9c64e5c3c938f3e53c49`.
- Document height: 1440 → 2308, 991 → 2478, 390 → 3073.
- Global Navbar, Footer, CalendarPopup and ExitIntentModal are unchanged. This page has **no** final CTA block: the footer follows the form directly.
- Shares its layout 1:1 with `/fireside-application`. Build one `ApplicationPage` component with props (overline, title, lead, iframe src, iframe height).


**Template:** `ApplicationPage` (`specs/_shared-community.md` §C2). This page is the reference instance.

## Reuse map
`.container.section-container` (CLONE_SPEC §0.3), the `.section-head` centered pattern (same as the homepage section heads), and the type tokens `text-overline`, `text-display-h2` and `text-body-l`. There are no new visual components except the iframe wrapper.

## 1. `div.section.overflow-hidden > .container.section-container > .demo-hero`
- `.demo-hero`: flex column, align center, padding **120/0** (≤767 80/0, ≤479 40/0). [88,72,1264,1304] @1440, [32,72,927,1302] @991, [24,72,342,1214] @390.
- `.section-head` (flex col, gap 12, max-w 720, centered) → `.section-head-wrapper` (flex col, align center, gap 12). It is 720×177.8 @1440 and 342×248 @390.
  1. `.section-head_subtitle > .text-overline.text-white-68` "FOREPLAY EXPERTS": 12/16, 550, ls 2px, uppercase, centered. **Computed color rgba(255,255,255,0.36)**: the `text-white-68` class does not override the inherited body color here.
  2. `.section-head_title > h1.text-display-h2` "Apply to be featured as an expert": 44/53.76, #fff, centered, balance. 1 line @1440 (648 wide) and @991 (40/52), 2 lines @390 (36/48).
  3. `.section-head_paragraph` (max-w 512) → `.text-alpha-100 > p.text-body-l`: [143 chars, 3 lines @1440 and @991, 4 @390]. Color rgba(255,255,255,.68), centered, `text-wrap:pretty`.
- `.demo-calendar-hubspot-calendar-embed.w-embed.w-iframe`: margin-top 50, radius 15, overflow hidden, width 100% (1264 / 927 / 342), height 836 (iframe 830 plus inline gap).
  - **Embed (third-party):** `<iframe style="border:none;width:100%;" height="830px" src="https://noteforms.com/forms/experts-application-gupcyx">`. This is a NoteForms (Notion forms) application form. Embed it as is, or use a placeholder box 830 tall. Its internals were not measured.

## Motion
None. No IX2 events and no CSS animations.

## Assets
None besides global ones. No images on the page.
