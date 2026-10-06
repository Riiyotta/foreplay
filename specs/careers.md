Source: https://www.foreplay.co/careers

# /careers: "Jobs at Foreplay"

**Method:** see `specs/_shared-misc.md`. **Raw dumps:** `specs/_measure/careers-{1440,991,390}.txt`. **Data:** `specs/data/careers.page-data.json` (3 jobs). Each job comes from `src/data/careers.json` and links to `/careers/<slug>` (see `template-careers.md`). Webflow page id `64a72a4948f6bf39ef9ec668`. Doc height: 1902 @1440, 2072 @991, 2731 @390. **No final CTA**: the footer follows the jobs block directly.

## Section map
| # | Section | y/h @1440 | Reuse |
|---|---|---|---|
| 1 | `div.section.overflow-hidden > .container.section-container > .demo-hero` | 72 / 446 | **S9** CenteredHero (`.demo-hero`: padding 120/0, @390 40/0). Overline "CAREERS", h1 `.text-display-h2` "Jobs @ Foreplay", paragraph ‹~177ch, 4 lines @1440, max 512›. |
| 2 | `section.section > .section-padding (8) > .section-white-block` (bg #fff, radius 36, @390 16) | 518 / 452 | white block as on the homepage; **new** `JobsList` |

## 2. Jobs list
- `.product-page-solution`: max 940, centred, flex column, gap 36, padding 80/0. @390: padding 48/0/32, gap 32. 940×436 @1440.
- `.jobs-list`: flex column, gap 15. 3 rows, in this order: "Customer Support Representative", "AI Ops & Automation Engineer", "Account Executive". Every row shows "Full Time" | "Remote".
- Row `.job-list-link`:
  - Layout: flex row, align centre, gap 16, padding 20, radius 20, border 1px **#dddee5** (solid-100). 940×82 @1440, 911×82 @991.
  - @390: flex column, align start, gap 12, padding 16, 326×146.
  - Title `.text-label-m` 16/24 w500 #090a0e.
  - `.jobs-destinction`: flex 1, justify end, gap 12. "Full Time" / divider / "Remote" are `.text-label-m` 16/24 w500 **#171920** with `white-space:nowrap`. The divider `.jobs-divider` is 1×12, bg **#c3c5d2**.
  - Button **"Learn More"** `a.button-light.button-secondary` (**new light-secondary variant**):
    - Size: 134×40, padding 8, radius 10. At @390 it is 292 wide (full).
    - Colors: bg #f9f9fa, label 16/24 w550 #090a0e, chevron icon at opacity .68.
    - States: `transition all .15s ease`. Hover bg #e9eaef, active bg #dddee5 with text rgba(255,255,255,.44) (sic, from CSS), focus ring `0 0 0 2px #fff, 0 0 0 3px #090a0e`.
    - Links to `/careers/<slug>`.
- Add `light-secondary` to `BUTTON_VARIANTS` in the build (not present yet).

## Motion
Button hover transitions only.

## Assets
None besides the shared chevron.
