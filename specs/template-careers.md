Source: https://www.foreplay.co/careers/account-executive

# Template: careers (`/careers/:slug`, 3 entries)

**Method:** see `specs/_shared-misc.md`. **Raw dumps:** `specs/_measure/template-careers.account-executive-{1440,991,390}.txt`. **Per-entry data:** `specs/data/careers.fields.json`. `account-executive` and `ai-ops-automation-engineer` were both measured; their DOM is identical. Webflow template page id `64a7037dd519617f8ade34f0`. Doc height for account-executive: 2471 @1440, 2653 @991, 3952 @390. There is **no CTA**.

## Fields (`src/data/careers.json`)
| Field | account-executive | ai-ops-automation-engineer | customer-support-representative |
|---|---|---|---|
| `title` (h1 + breadcrumb) | Account Executive | AI Ops & Automation Engineer | Customer Support Representative |
| meta title | "Account Executive - Remote" | "AI Ops & Automation Engineer - Remote" | "Customer Support Representative - Remote" |
| `type` / `location` (used on /careers) | Full Time / Remote | Full Time / Remote | Full Time / Remote |
| `applyUrl` (Google Form, opens in same tab) | in data file | in data file | in data file |
| body (stand-in) | 2184ch: `p×6 h2 p×3 h2 p×4 h2 p×5` | 2526ch: `p×3 ul(5) p ul(6) p ul(3) p ul(4) p ul(3)` | 3244ch: `p×11 ul(10) p×2 ul(11) p×2 ul(2)` |

## Layout (all blocks reuse `_shared-templates.md` patterns)
1. **S1 BlogBreadcrumb**: "Careers" → `/careers`, "/", then the title (href `#`). 120 tall; hidden ≤479.
2. **S2 BlogTop**: h1 `.text-display-h4` 28/36 #fff (1 line). `.blog-top` has padding-bottom 40 (@390 padding 40/0). Then a full-width `.blog-line` (1px rgba(255,255,255,.1)) in a 1440 `.container`.
3. **Body** `div.section > .container.blog-container` (832 max; inner 752 @1440, 736 @991, 342 @390), holding two `.fireside-subscribe-action` blocks.
   - Each block: flex row, align centre, padding 40/0/80, border-bottom 1px rgba(255,255,255,.1). At ≤991 it becomes a column, gap 24, padding 40/0.
   - **Apply block**:
     - `.fireside-section-title-text` (flex 1, column, gap 16):
       - Title row (gap 8): 24px icon `/assets/templates/careers/svg/icon-medium-w-embed-77b6990d.svg` + `.text-label-l` 18/24 w500 #fff "Apply Now".
       - Sub `.text-body-m` 16/24 .84 "Fill out the job application to be selected for an interview." (1 line).
     - Then a `button-dark.button-secondary` "Apply Now" (132×42) → `applyUrl`, right-aligned @1440 and below the text ≤991.
   - **Description block**:
     - Title row: icon `/assets/templates/careers/svg/icon-medium-w-embed-54641751.svg` + "Job Description".
     - Then `.text-alpha-50 > #blog-rtb.blog-rtb > .w-richtext`. These use the base `.blog-rtb` styles **without** the post-only margin overrides: p 16/24 .84 with **margin 0** (Webflow empty `<p>` spacers give the gaps). h2 is Inter Display **700** 28/36 .84 with margin 24/0/16. ul is flex column, gap 12, padding-left 24, margin 16/0. strong 700; a is w500 #fff.
     - Measured body 752×924 @1440, 736×948 @991, 342×1620 @390.

## Motion
Breadcrumb hover → #fff; button hover. No IX2.
