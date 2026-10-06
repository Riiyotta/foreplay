Source: https://www.foreplay.co/fireside-application

# `/fireside-application`: Fireside speaker application (NoteForms embed)

Measured 2026-10-06 with headless Chromium at 1440 / 991 / 390. Geometry is `[x, y, w, h]` in document px.

- Title: `Fireside Application`. wf page `65ad91b8b8e90d975787a799`.
- Document height: 1440 → 2070, 991 → 2240, 390 → 2863.
- Global Navbar, Footer, CalendarPopup and ExitIntentModal are unchanged. There is no final CTA block.

**Same template as `/experts-application`** (see `specs/experts-application.md` for all styles: `.demo-hero` padding 120/0 (≤767 80, ≤479 40), `.section-head` stack, embed wrapper margin-top 50, radius 15, overflow hidden). Only these differ:

| | value |
|---|---|
| overline `.text-overline.text-white-68` | "FIRESIDE SPEAKER" (computed color rgba(255,255,255,.36)), 142×16 |
| h1 `.text-display-h2` | "Apply to be a speaker". 1 line @1440 (422.5 wide) and @991, 2 lines @390 |
| lead `p.text-body-l` | [124 chars, 2 lines @1440 and @991, 4 @390], max-w 512 |
| `.section-head` height | 149.8 @1440, 148 @991, 248 @390 |
| embed | `<iframe style="border:none;width:100%;" height="620px" src="https://noteforms.com/forms/fireside-speaker-application-yw0imi">`. Wrapper is 1264×626 @1440 (927×626 @991, 342×626 @390), at y 391.8 @1440 |
| `.demo-hero` box | [88,72,1264,1066] @1440, [32,72,927,1064] @991, [24,72,342,1004] @390 |

The embed is third-party NoteForms; its internals were not measured.


**Template:** `ApplicationPage` (`specs/_shared-community.md` §C2).

## Motion
None.

## Assets
None.
