Source: https://www.foreplay.co/events/10x-affiliate-growth-2-secret-strategies-to-scaling-your-automated-growth-channel

> Shared patterns (breadcrumb S1, title block S2, rich text S3, cards S4–S7, headshot/socials S8, hero S9, video S10) are defined once in `specs/_shared-templates.md`. Where this file repeats one of them, the details are the measured instance for this template.

# Template: Fireside event / replay (`/events/:slug`)

- Data: `src/data/events.json` (27 entries). Measured `/events/10x-affiliate-growth-2-secret-strategies-to-scaling-your-automated-growth-channel` and `/events/black-friday-landing-pages`. The DOM is identical. The second one appears in its own "latest" list, so its button gets `w--current`.
- Method: Node Playwright at 1440/991/390, computed styles plus live CSS.
- Document height: 4364 / 4796 / 5638 and 4128 / 4584 / 5318.
- Reuse: Navbar and Footer (global). Final CTA uses `CTA` from src/components. Breadcrumb, `.blog-top`, `.blog-line` and the `.blog-rtb` rich text are as in `template-post.md`. The button is `Button` from src/components (secondary variant).

## 1. Section map

### 1.1 Breadcrumb
"Fireside Events" → `/fireside`, "/", then the title (ellipsis). Same component as posts; hidden ≤479.

### 1.2 Title block: `.container.blog-container > .blog-top` (gap 24, padding-bottom 40)
- `h1.text-display-h4`: title. Inter Display 600 28/36, #fff.
- `.fireside-event-details-wrapper`: flex, gap 24. ≤479 flex column, gap 16. Two `.fireside-event-detail-item`s (flex, align center, gap 9, `rgba(255,255,255,.68)`, nowrap, ellipsis):
  1. `.fireside-event-author-headshot` (24×24, radius 100, bg-image cover = `speakerAvatar`) + `.text-alpha-50 > .text-label-m` speaker (Inter 500 16/24, `rgba(255,255,255,.84)`).
  2. 24×24 calendar icon (`public/assets/templates/icons/event-calendar.svg`) + `.text-alpha-50 > .text-label-m` date ("March 5, 2024").
- Then `div.container > .blog-line` (full container width).

### 1.3 Video: `div.section > .container.blog-container > .fireside-main-wrapper`
- Flex col, gap 40, margin-top 40, max-width 800, margin auto, `border:1px solid #171920`, radius 28, overflow hidden. Geometry: 344,357,752,423.5 | 127.5,357,736,414.5 | 24,353,342,193.1.
- `.fireside-signup-embed` is the lu.ma embed iframe (`https://lu.ma/embed/event/<id>/simple`). It is shown only for upcoming events (`isUpcoming`). **No entry is currently upcoming**, so it is always hidden.
- `.fireside-replay-video.w-video`: responsive 16:9 box (`padding-top:56.206%`) with an absolute iframe. Live uses an embedly-wrapped YouTube embed, so render `https://www.youtube.com/embed/<youtubeId>`. 750×421.5 at 1440. One entry has no `youtubeId` (render the empty box).

### 1.4 Body: `.fireside-body`
Block. ≤991 it is a flex column.
1. `.fireside-subscribe-action` (flex row, align center, padding 40/0/80, `border-bottom:1px solid rgba(255,255,255,.1)`). ≤991 it is a flex column, align start, gap 24, padding-bottom 40.
   - `.fireside-section-title-text` (flex 1, col, gap 16):
     - `.fireside-subscribe-action-title` (flex, gap 8) = 24×24 icon (`icons/fireside-title-icon-1.svg`) + `.text-label-l` "Never miss an event" (Inter 500 18/24, −0.26px, #fff; 16px ≤767).
     - `.text-alpha-50 > .text-body-m` "Automatically get all future Firesides in your calendar." (`rgba(255,255,255,.84)`).
   - `Button` secondary "Subscribe to the Calendar" (247.1×42) → `https://lu.ma/foreplay`.
2. Second `.fireside-subscribe-action` (same box): icon `fireside-title-icon-2.svg` + "What you'll learn". Below it is `.text-alpha-50 > .blog-rtb#blog-rtb > .w-richtext`, the per-event rich text (color `rgba(255,255,255,.84)`, 16/24, `p` margin 0, h3 Inter Display 24/32 700 margin 16/0/12, ol/ul flex col gap 12 padding-left 24 margin 16/0. See post §3, minus the post-only overrides).
   - Typical structure: p ×1 (about 150–400 chars), then h3 "Key Takeaways", then ol ×3 items (about 40–70 chars each). 12 of 27 have the h3 and list, the rest are paragraphs only.
3. `.fireside-transcription-block` (flex, padding 15/0, `border-bottom:1px solid rgba(255,255,255,.1)`) > `.fireside-transcription-dropdown.w-dropdown` (full width, flex col, z 1; ≤479 padding 15/0):
   - Toggle `.transcription-dropdown-toggle`: flex, gap 10, padding 16, bg `rgba(255,255,255,.1)`, radius 8, #fff. Hover bg `rgba(255,255,255,.16)`, active `rgba(255,255,255,.32)`. 752×56.
     - Contents: 24px icon (`icons/transcription-icon-1.svg`), `.flex-1 > .text-label-l` "Transcription", and a 24px chevron (`icons/transcription-icon-2.svg` uses `#sprite-chevron`, so use `DropdownChevron`/sprite from src/components/svgs.jsx).
     - The chevron rotates 180° when open (`[aria-expanded=true] .chevron-icon {transform: rotate(180deg)}`, `transition: transform .5s cubic-bezier(.16,1,.3,1)`).
   - `nav.dropdown-list.w-dropdown-list`: hidden until clicked (Webflow dropdown, click toggles, no animation). When open it shows `.blog-rtb .w-richtext` with the transcript. Live list bg is Webflow's default `#ddd`, which is **a light-grey box with .84 white text (barely readable)**. Recommend a transparent bg with padding 16.
   - Transcript structure: many `p` (timestamp line "00:00:00:00 - 00:00:32:08" + speaker + about 300 chars), each followed by `br br`. 26 of 27 events have one. **Not collected**, so generate 20–40 stand-in paragraphs.

### 1.5 "Watch More Replays": `aside.section > .product-page-padding-y`
- Padding 108/108 (≤991 96, ≤767 80), flex col, overflow hidden.
- `.container.blog-container > div > .fireside-subscribe-action.no-stroke` (no border; ≤479 padding-top 0): icon `fireside-title-icon-3.svg` + "Watch More Replays", subtitle "Continue browsing all event replays about advertising and creative strategy." (live wording, short UI copy), and secondary button "All Replays" → `/fireside-replays`.
- `div.container` (full 1360) > `.fireside-upcoming-list`:
  - Grid `1fr 1fr 1fr`, gap 10. ≤991 2 columns, ≤767 1 column. Columns 446.66 at 1440, 458.5 at 991, 342 at 390.
  - **The 3 most recent events by date (desc), which can include the current one.**
  - Card `.firside-upcoming-item-block`: flex col, padding 8, `border:1px solid rgba(255,255,255,.1)`, bg #020308, radius 20, height 100%. 449 tall at 1440.
    - `img.fireside-upcoming-thumbnail`: `aspect-ratio:16/9; object-fit:cover; border-radius:12px; width:100%` (428.7×241.1). Source = `thumbnail`.
    - `.fireside-upcoming-content`: flex col, gap 20, padding 24px 12px, text-align left.
      - `.fireside-event-details-wrapper.event-details-left`: column, gap 12; **row at ≥1280**. Contains a speaker item (headshot + `.text-alpha-100 > .text-label-m`, .68) and a date item (calendar icon + date).
      - `.text-white > .text-body-l`: title (Inter 18/28, −0.26px, #fff).
    - `Button` secondary "Watch Replay" (full width 428.7×42) → `/events/<slug>`. The current event's button carries `w--current`, with no visual difference.

### 1.6 Final CTA
Uses `CTA` from src/components.

## 2. Typography roles
- h1 Inter Display 28/36 600.
- Meta labels Inter 500 16/24 (.84 in the head, .68 in cards).
- Section titles `text-label-l` Inter 500 18/24.
- Body `text-body-m` 16/24.
- Card title `text-body-l` 18/28.
- Rich text per post §3, with `p` margin 0.

## 3. Colors, radii
- Video frame border #171920 with radius 28.
- Cards radius 20 with border .1 white. Thumbnails radius 12.
- Toggle bg .1 / hover .16 / active .32, radius 8.
- Dividers `rgba(255,255,255,.1)`.

## 4. Motion
- No IX2.
- Dropdown chevron rotation .5s `cubic-bezier(.16,1,.3,1)`.
- Toggle bg transition is none (instant) in CSS.
- Button hovers come from the shared `Button`.

## 5. JSON shape (`src/data/events.json`, filled for all 27)
```json
{
  "slug": "10x-affiliate-growth-…",
  "title": "10x Affiliate Growth: 2 Secret Strategies to Scaling Your Automated Growth Channel",
  "speaker": "Noah Tucker",
  "speakerSlug": "noah-tucker",            // authors.json slug (author pages list replays by this)
  "speakerAvatar": "/assets/templates/events/…jpg",
  "date": "March 5, 2024", "dateISO": "2024-03-05",
  "thumbnail": "/assets/templates/events/…-p-800.png",
  "youtubeId": "9NYYhZbbY24",
  "isUpcoming": false, "lumaEmbed": null,
  "hasTranscript": true,
  "learn": {"paragraphs": 1, "h3": 1, "listItems": 3},  // shape of "What you'll learn"
  "updated": "2024-03-05"
}
```
Varies per entry: title, speaker, avatar, date, video, the learn rich text, the transcript, and current-ness in the latest-3 list.
