// Data + stand-in copy for the community pages. Lists are driven by src/data/*.json.
import events from '../../data/events.json'
import experts from '../../data/experts.json'
import agencies from '../../data/agencies.json'
import { rng, paragraph } from '../templates/standin.js'

/* Neutral stand-in copy of roughly `chars` characters (specs give long text only as ‹N chars›).
   Whole sentences where possible; otherwise the last sentence is cut at a word boundary. */
const DANGLING = /\s+(a|an|the|to|of|and|for|with|in|from|what|how|is|by|on|at|each|every|before|across|over|without|that)$/i
export function copy(seed, chars) {
  const sentences = paragraph(rng(seed), chars * 2 + 80).match(/[^.]+\./g)
  let out = ''
  for (const s of sentences) {
    const next = (out ? out + ' ' : '') + s.trim()
    if (next.length > chars + 12) {
      if (out.length >= chars * 0.75) return out
      let cut = next.slice(0, chars).replace(/[\s,]+\S*$/, '')
      while (DANGLING.test(cut)) cut = cut.replace(DANGLING, '')
      return cut + '.'
    }
    out = next
  }
  return out
}

/* C4 replays: all 27 events, newest first. "Ben Dyer" has no date in the CMS export; the live list
   (fireside-replays.md assets order) shows it 5th, so undated items sort just after Aug 12, 2025. */
const sortKey = (e) => e.dateISO || '2025-08-01'
export const replays = [...events].filter((e) => !e.missing).sort((a, b) => sortKey(b).localeCompare(sortKey(a)))

/* Experts. Card roles in the live grid are short (≤35 chars); the CMS export only has long bios,
   so short stand-in roles are used. */
const ROLES = ['Creative Strategist', 'Founder', 'Head of Growth', 'Media Buyer', 'Paid Social Lead', 'Agency Owner', 'Head of Marketing', 'Performance Marketer']
const shortRole = (e, i) => (e.slug === 'jake-abrams' ? 'Founder' : ROLES[i % ROLES.length])
const bySlug = Object.fromEntries(experts.map((e) => [e.slug, e]))
const BOARD_DEFAULT = '/assets/pages/experts/6380e2f937ad31984c137bdb_Screen-Shot-2022-11-25-at-9.44.22-AM.png'
const BOARD_OVERRIDE = {
  0: '/assets/pages/experts/67feffc1d691b7460b8e0725_Jack-Kavanagh-Opengraph.png',
  9: '/assets/pages/experts/6913f51c0508cc809272cc06_Screenshot-2025-11-11-at-9.46.43-PM.png',
  11: '/assets/pages/experts/64dbc286844e1e8a399e128f_Chase-Chappell-Opengraph.png',
}
// experts.md §2.2: 18 featured (1 Jack Kavanagh, 2 Alexa Kilroy, 8 Jake Abrams; 3 "Coming Soon": items 2, 3 + one more).
const FEATURED = [
  'jack-kavanagh', 'alexa-kilroy', 'danish-abbasi', 'barry-hott', 'sarah-levinger', 'lauren-schwartz',
  'savannah-sanchez', 'jake-abrams', 'zach-duncan', 'ole-strand', 'caleb-kruse', 'chase-chappell',
  'rahul-issar', 'heather-melcer', 'nick-shackelford', 'luke-thorburg', 'olly-hudson', 'simon-choucroun',
]
export const featuredExperts = FEATURED.map((slug, i) => {
  const e = bySlug[slug]
  return { ...e, role: shortRole(e, i), board: BOARD_OVERRIDE[i] || BOARD_DEFAULT }
})
// experts.md §2.4: 67 rows, first two "Dara Denney", "Mirella Crespi"; 17 Coming Soon (CMS flag).
const FIRST = ['dara-denney', 'mirella-crespi']
export const moreExperts = [...FIRST.map((s) => bySlug[s]), ...experts.filter((e) => !FIRST.includes(e.slug))].map(
  (e, i) => ({ ...e, role: shortRole(e, i + 3) }),
)

/* Agency directory. Page 1 per agency-directory.md assets (Rowads.Studio first, unverified on the listing). */
const PAGE1 = ['rowads-studio', 'ryze-performance', 'wallaroo-media', 'webtopia', 'pearmill', 'yall', 'ksper', 'soscale-media', 'ecom-republic']
const agencyBySlug = Object.fromEntries(agencies.map((a) => [a.slug, a]))
export const agencyList = [
  ...PAGE1.map((s) => agencyBySlug[s]),
  ...agencies.filter((a) => !PAGE1.includes(a.slug)),
].map((a) => (a.slug === 'rowads-studio' ? { ...a, verified: false } : a))
