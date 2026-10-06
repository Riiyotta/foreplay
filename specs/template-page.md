Source: https://www.foreplay.co/page/api-bounty-terms-of-service

# Template: page (legal pages, `/page/:slug`, 5 entries)

**Method:** see `specs/_shared-misc.md`. **Raw dumps:** `specs/_measure/template-page.api-bounty-tos-{1440,991,390}.txt`. **Per-entry data:** `specs/data/page.fields.json` gives h1, meta title, body char count, rich-text block sequence and link count. `api-bounty-terms-of-service` and `privacy-policy` were both measured and are structurally identical. Webflow template page id `647668309e49d3c3f7a7652e`. Doc height for api-bounty-tos: 2690 @1440, 3148 @991, 6179 @390. There is **no CTA**; the footer follows the white block.

## Fields (`src/data/page.json`)
| Field | Examples |
|---|---|
| `title` (h1) | "API Bounty Terms of Service", "API Addendum To Terms of Service", "Privacy Policy", "Terms of Service", "Unverified Ad Awards Terms of Service" |
| meta title | "<h1> \| Foreplay" |
| `body` | stand-in rich text following `blocks`. Lengths: api-bounty 4665ch (`p ol(11) p`), api-terms 2917, privacy 9780, terms 18583 (7 links), unverified-awards 5517 (`p ol(12)`) |

## Layout
1. **Title**: `div.section.overflow-hidden > .container.section-container > .pages-title`.
   - `.pages-title`: flex column, padding 75/0, 1264×204 @1440.
   - Inside it, `.section-head` (720, centred) holds only h1 `.text-display-h2`, centred #fff: 44/53.76 (40/52 @991; 36/48 @390, 2 lines).
2. **Body**: `div.section-white-block` placed **directly in the page flow, full-bleed**.
   - There is no `.section-padding` wrapper, so the block is 1440 wide at x0 with no 8px inset. Bg #fff, radius 36 (@390 16), overflow hidden, z 2.
   - `.container` (1440 max, padding-x 40/32/24) > `.v-padding-50` (50) > `div.rich-text.w-richtext` (full container width: 1360 @1440, 927 @991, 342 @390) > `.v-padding-50`.

## Rich text (`.rich-text`, plain Webflow defaults on white): computed values
| Element | Font | Size/LH | Weight | Color | Margin / other |
|---|---|---|---|---|---|
| p | Inter | 16/24 | 400 | #171920 | 0. Empty `<p>‍</p>` spacers are common; keep them at 24px |
| h2 | Inter | **32/38.4** | 700 | #171920 | 0 (global h2 reset) |
| h3 | Inter | 24/30 | 700 | #171920 | 20/0/10 |
| h4 | **Circular** 400 (font file in `/assets/pages/ships/fonts/`) | 18/24 | 400 | #171920 | 20/0/5 |
| ul / ol | Inter | 16/24 | | #171920 | margin 0 0 10, padding-left 40, overflow hidden, disc / decimal |
| li | Inter | 16/24 | 400 | #171920 | 0 |
| strong | | | 700 | | |
| a | Inter | 16/24 | **600** | **#3787ff** | no underline |

Letter-spacing is −0.18px throughout (inherited from body).

## Responsive
The container padding shrinks; nothing else changes. The api-bounty body is 1382 tall @1440, 1670 @991 and 3974 @390.

## Motion / assets
None.
