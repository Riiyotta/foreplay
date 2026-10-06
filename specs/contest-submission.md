Source: https://www.foreplay.co/contest-submission

# `/contest-submission`: Unverified Ad Awards submission hub (themed campaign page)

Measured 2026-10-06 with headless Chromium at 1440 / 991 / 390. Geometry is `[x, y, w, h]` in document px. Long copy is replaced by `[N chars, L lines]`.

- Title: `Submit Your Ad - Unverified Ad Awards Submissions`. wf page `66550d886ada90bd03445c7e`.
- Document height: 1440 → 4300, 991 → 6008, 390 → 6995.
- Global Navbar, Footer and CalendarPopup are unchanged.
- **Uses the contest theme from `specs/contest.md`**: `body.contest` (bg #000211, color #bed8ff, Circular), the `.container-1200` container (max 1200, padding-x 2.4% / 5% ≤767), gradient headings, card fill rgba(96,159,254,.1), the `.section-idetifyer` pill, `.prize-type` labels, `.div-block-285` + `.play-button-1-uaa` video thumbnail with lightbox, and `.finalists---details`-style rows. Reuse the components built for `/contest`.

---


**Shared blocks:** contest theme C6 (`specs/_shared-community.md`).

## 1. Header `section.contest-section.submit-header`
- Padding 150/0/100 (≤991 100/0/100, @390 100/0/50). Background `url(contest-bg-shine.avif)` at size 100% auto, position 50% 100%. Border-bottom 1px rgba(96,159,254,.1). Size [0,72,1440,528.6] @1440, [0,72,991,835] @991, [0,72,390,623] @390.
- `.container-1200 > .grid-26`: grid 2 × 546.2, gap 50 @1440. ≤991: flex column, items center (gap 25 @390).
  - Left `.contest-text-section` (flex col, justify center, align start, gap 10; ≤991 align center), relative:
    1. `.section-idetifyer` pill "CONTEST SUBMISSION HUB" (241×32).
    2. `h1.contest-submit-h1` "Welcome to the Unverified Ad Awards": **Circular 55/66, 500**, gradient text, margin 20 0 10. 2 lines @1440 and 1 line @991 (centered). 45/54 @390 (3 lines, centered).
    3. `.div-block-299` (flex row, gap 10): "Presented By" (Circular 16/24 200) plus `a.foreplay-blue-logo` → `img blue-foreplay-logo.svg` 100×22. Hover opacity .8, transition .2s.
    4. `.arrow-floating` (absolute, left 346, top 164.5, 250 wide; hidden ≤991): `contest-arrow.svg` 250×65 plus the caption "How to Increase Your Chances!" (Circular 16/24 200, centered).
  - Right `a.lightbox-link-12.w-lightbox` (max-w 90%) → `.div-block-285` video thumbnail (radius 15, border rgba(255,255,255,.1)). 491.6×277.6 @1440, 730×411.5 @991, 316×178 @390. Image `submission-video-thumbnail.avif` (940×529), with the play button centered (same as the contest page). The lightbox opens a video embed (third-party).

## 2. Submission grid `div.primary-content` (flex col, gap 100, pt 50; @390 pt 0) → `section.contest-section > .container-1200 > .grid-27`
- Grid 2 × 551.2, gap 40, rows 690 / 783 / 127 @1440. ≤991: flex column, keeping gap 40 (measured @991: block A ends at 1378 and block B starts at 1418). Order: A, B, C, D, E.
- **`SubmitBlock`** (`.submit-block`): flex col, start, stretch, min-h 375 (≤479 none), bg rgba(96,159,254,.1), border 1px rgba(96,159,254,.1), radius 20, `transition: all .2s`. **Hover:** bg #609ffe1a.

### 2.1 Block A (top-left): two options
Two `.submit-block-item` (flex 1, flex col, gap 5, padding 16). The first has border-bottom 1px rgba(96,159,254,.1). @390 they are centered.
- `.prize-type` "OPTION 1" / "OPTION 2".
- `h3.contest-h3` "Submit Your Ad Creative" / "Submit Your BTS Video": Circular 25/25 500 gradient, mb 10 (25/30 @390).
- `p.contest-p` (Circular 16/24 200 #bed8ff): [133 chars, 2 lines] and [93 chars, 2 lines]. The tail of each paragraph is a `span.low-light` at opacity .5.
- `.div-block-294` (flex row, space-between, align end, flex 1, pt 25; @390 column, centered, gap 20, pt 20):
  - `a.uaa-button` "Enter Ad Contest" / "Enter BTS Contest" → Google Forms (`docs.google.com/forms/...`, target _blank). Padding 12/24, bg #3787ff, border 1px rgba(255,255,255,.09), radius 8, `box-shadow: inset 0 -10px 15px -4px rgba(9,48,97,.81)`, `transition: all .25s`. Text Circular 16/16 300 #fafafd. 171.7×42 / 180.6×42. **Hover:** bg `var(--contest-light-blue)`, border rgba(255,255,255,.4). ≤479: width 100%, text centered.
  - `.dropdown-3.w-dropdown` (**hover dropdown**, `data-hover=true`, delay 0, z 900). Toggle `.eligible-awards---dropdown`: flex row, gap 7, padding 4/10/4/7, bg rgba(255,255,255,.05), border 1px rgba(255,255,255,.1), radius 100 (pill), 152.5×34. It holds `uaa-icon.svg` (20×24) and "Eligible Awards" (Circular 16/24 200 #fafafd, nowrap). Hover bg rgba(255,255,255,.1). The open list (`.dropdown-list-3`, bg transparent) shows award rows: Option 1 lists "Best Overall Ad $10k", "Best UGC Video $1k", "Best Hook $1k", "Best Single Image $1k", "Best AI Ad $1k"; Option 2 lists "Best BTS Video $2.5k". The open-state geometry was not captured because the hover dropdown did not open in the headless probe. Style the rows like `.finalists---details`.

### 2.2 Block B (top-right): bonus entries
- `.div-block-296` (padding 16 16 0): `img.image-144` `Win-an-iPad-Pro.webp` (939×428 → 517×237), border 1px rgba(96,159,254,.1), radius 10, mb 16. Below it `p._3-steps-text > span.contest-p`: [123 chars, 4 lines], Circular 19.2/28.8 200, centered (16/24 @390).
- `.resources-dropdown` (flex col, gap 16, padding 16) holds 4 `BonusEntryDropdown` (`.bonus-entry-dropdown.w-dropdown`, **click** dropdowns, z 900): bg rgba(255,255,255,.02), border 1px rgba(255,255,255,.04), radius 10, 517×56 (46 @390).
  - Toggle: flex row, items center, padding 10/50/10/15, bg rgba(255,255,255,.02). It holds `.repost-dropdown-title` (icon 20×20 radius 4 + label Circular 16/24 200 #fafafd nowrap) and, on the right, an `.additional-entries-block` pill (same style as Eligible Awards: `uaa-icon.svg` + "1 Entry"; hidden ≤479), then the Webflow caret `.w-icon-dropdown-toggle` (16×16, margin 19 20 19 0, absolute right).
  - Rows: "Repost or Quote on X" (X logo) / "1 Entry", "Repost on LinkedIn" / "1 Entry", "Short-form Video" / "5 Entries", "Follow us on Instagram" / "1 Entry".
  - Open list `.dropdown-list-4.w--open`: flex col, gap 10, padding 16, bg transparent, 515×651 for the X item. It holds `a.secondary` "Repost and Claim Entry" (padding 12/16, bg rgba(255,255,255,.05), border 1px rgba(122,123,127,.25), radius 7, Circular 16/24 200 #fff, centered, `transition: all .2s ease-in-out`), followed by an **embedded X/Twitter post** (`.social-code-embed`, `blockquote.twitter-tweet` → platform.twitter.com iframe, 483×539, radius 7). This is third-party; use a placeholder of that size.

### 2.3 Block C (bottom-left): "Meet Your Judges"
- Head `.div-block-296` → `h3.contest-h3.top-pad` "Meet Your Judges" (centered, mt/mb 10).
- `.juddge-list` (flex col, padding 16) holds 6 rows `.div-block-307` (flex row, gap 10, padding 15, 80 tall):
  - `.div-block-308` (flex row, center, gap 10): `img.judge-image` 50×50 radius 8, name (Circular 16/24 200 #bed8ff), and role `.text-block-91` (same type at opacity .5).
  - Right `a.judge-logo` (flex center, 60–120 wide × 50) holds a company logo about 20 tall.
  - Judges: Nick Shackelford (Konstant), Dara Denney, Barry Hott (Adcrate), Mirella Crespi (Creative Milkshake), Rabah Rahil (Fermat), Connor MacDonald (Ridge).

### 2.4 Block D (bottom-right): "Resources to Help You Win"
- `h3.contest-h3.top-pad` header, then `.resources-dropdown` (gap 16, padding 16) with 8 `a.resources-button` (flex row, center, gap 10, padding 15, bg rgba(255,255,255,.02), border 1px rgba(255,255,255,.04), radius 10, 517×72, `transition: all .2s`):
  - `img.resources-logo` 40×40 radius 8 (border 1px rgba(255,255,255,.15) except the Foreplay one, which is `.no-stroke`). Label Circular 16/24 200 #fafafd. Optional `.uaa-code` promo chip: padding 3/5, bg rgba(55,135,255,.15), radius 3, Circular 12.8/12.8 200 #3787ff.
  - Labels: "Find Winning Ad Ideas with Foreplay", "Make AI UGC with Arcads" [chip "10 Free Credits"], "Organize Creative Assets with Air", "Enroll in UGC University" [chip `25% OFF "FP25"`], "2024 Top Ad Ideas from Konstant", "500+ Ad & Landing Page Breakdowns", "Level-Up Your Dynamic Ad Creative", "Edit Viral Ads with Submagic" [chip `10% OFF "FOREPLAY10"`].

### 2.5 Block E (full width): `.submit-block.event`
Spans 2 columns, padding 8/0/16, 1142×127. It holds `h3.contest-h3` "Winners Announced Live! Event Invite Will Be Sent to Your Email" (centered, 3 lines @1440 at 25/25).

## 3. FAQ: `.container-1200 > .contest-section-header.center`
- `h2.contest-h2` "Questions? We got answers!": Inter 45/54 500 gradient (30/36 @390).
- `.faq-wrapper`: flex col, gap 15, mt 30, 800 wide. It holds **9** `.old__faq-question.awards`:
  - Item: padding 16/24 (≤767 20/24, ≤479 16), bg rgba(96,159,254,.1), border 1px rgba(96,159,254,.1), radius 10, `transition: all .2s`. **Hover:** border-color #8f8f8f. Closed height 76.
  - `.old__faq-question-bar` (flex row, space-between, center, padding 5/0): `.faq-title-new.awards` question (Circular 16/32 300, ls −0.32, #fff), e.g. "What is the Unverified Ad Awards?" or "Who can enter the contest?", plus `img.old__faq-plus` 24×24 `faq-plus-blue.svg`.
  - `.old__faq-content` (overflow hidden, initial inline `height:0`) → `.old__faq-response.w-richtext > p` answer: Circular 16/25.6 200, #609ffe, links #fafafd. Answers are 117–290 chars (3 lines @1440).
- **Accordion (IX2 "FAQ → Open"/"FAQ → Close", MOUSE_CLICK / MOUSE_SECOND_CLICK on `.old__faq-question`):**
  - Open: `.old__faq-content` height 0 → **auto** over **300ms `ease`**, and `.old__faq-plus` rotates Z 0 → **45deg** over **300ms** (no easing set = linear). Measured after a click: item height 76 → 152.8, content 76.8, plus `rotateZ(45deg)`.
  - Close (second click): height → 0 over 300ms, rotate → 0 over 300ms.
  - The IX list also sets a bg color, a text color and a filter on selectors that do not match on this page (no-ops). Ignore them. Items are independent; opening one does not close the others.

## Motion summary
- FAQ accordion as above. Webflow dropdowns: Eligible Awards opens on hover; bonus entries open on click (Webflow default, no animation). Lightbox fade.
- PAGE_SCROLL "Nav Scroll Stroke 5" targets a missing element (no-op).
- CSS hovers: blocks .2s, uaa-button .25s, pills .2s, resources-button .2s.

## Assets: `public/assets/pages/contest-submission/` (+ shared with contest)
| File | Element |
|---|---|
| `665e03825859e547d131265d_contest-bg-shine.avif` | header bg |
| `665dfdca5859e547d12c1b65_blue-foreplay-logo.svg` | "Presented By" logo |
| `6692c1271ad28257ce9197dc_submission-video-thumbnail.avif` | header video thumb |
| `66550fd4fb02d321734c8c6b_uaa-icon.svg` | pill icon |
| `6661c76d4184372cc40ee7a3_Win-an-iPad-Pro.webp` | bonus block image |
| `6655164f1cb2f0192a2863d2_X_logo_2023_(white)-1.avif`, `668ed1d7b93d461bee629497_Group-1000004763.avif` | bonus row icons (X, short-form video) |
| judges: `668ebad0f4b666147b66008b_barry.webp`, `668ed736622f9becc56c80ce_1712751527646.avif`, `668ed7c466057b8a4eee4574_rabah.webp`, `668f05a2b1ba165699f85d0e_1564415715160.avif`; existing `/assets/646e13166ca538092d4c53fc_nick-shak.webp`, `/assets/646e7c53dd2b77ffdce88775_1671719386025.avif` | judge headshots |
| `66269cefcd8042e78308e9eb_dara-logo.avif`, `668ed68e8cdb9bd81e67ca39_adcrate.svg`, `668ed71cc52c902974262ce4_logo_…_580x.webp`, `6478c433c4fc1d3402c883fc_the-ridge.webp`; contest `646e150348980ed19a8bee5c_konstant-logo.svg`, `668d71d2eae09ece9288eb18_…footer-logo.webp` | judge logos |
| `66902b7a4e591b4dcb8e8376_1708959987676.webp`, `665e0553987ef3d343388bf0_airhq_logo.avif`, `66902c158093c8a384858ad5_1702156496055.avif`, `66902cad2e52c4bc150dbe16_konstantkreative_logo.avif`, `6690333c9b3c5796628dab4a_replo_app_logo.avif`, `6691af630af8c2f658b087b5_marpipe_logo.avif`, `669406a8aad086503ac54a6a_submagic-logo-2.svg`; contest `647102737a861edf662aa7cd_foreplay-white-icon-logo.webp` | resource logos |
| `664e5ae6e2a8324d9f15721d_faq-plus-blue.svg` | FAQ plus |
| contest folder: `665dfe80ae0f13adec10f551_contest-arrow.svg`, fonts; `/assets/pages/mobile-app/…play-small.svg`; `/assets/pages/chrome-extension/…contest-linkedin.svg` | shared |

## Embeds / third-party
Google Forms links (external), the X/Twitter tweet embed inside the bonus dropdown, and the video lightbox (embedly).
