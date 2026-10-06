// Neutral stand-in copy, generated deterministically from a seed string (usually the slug).
// Live article bodies, bios, answers and descriptions are intentionally NOT reproduced; only the
// block *structure* and approximate lengths from each spec are followed.
import { imagePool } from './data.js'

function hash(str) {
  let h = 1779033703 ^ str.length
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  return h >>> 0
}

export function rng(seed) {
  let a = hash(String(seed))
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const pick = (r, arr) => arr[Math.floor(r() * arr.length)]
export const int = (r, min, max) => min + Math.floor(r() * (max - min + 1))

const SUBJECTS = [
  'The team', 'Each brief', 'A clear hook', 'Strong creative', 'The workflow', 'Every test', 'This approach',
  'A shared board', 'A simple framework', 'The best concepts', 'Good research', 'A weekly review', 'The process',
  'Each iteration', 'A focused angle', 'The library', 'Fresh inspiration', 'A short checklist',
]
const VERBS = [
  'supports', 'highlights', 'clarifies', 'shapes', 'improves', 'organizes', 'connects', 'simplifies', 'frames',
  'guides', 'speeds up', 'keeps track of', 'brings structure to', 'makes room for', 'helps explain',
]
const OBJECTS = [
  'the next round of concepts', 'how ideas move from research to launch', 'the core message for each audience',
  'what the data is really saying', 'the decisions behind every variation', 'a steady pipeline of ideas',
  'the feedback loop between teams', 'the way results are reported', 'the formats worth testing next',
  'the details that usually get lost', 'a repeatable testing rhythm', 'the story a campaign is telling',
]
const TAILS = [
  '', '', '', ' across every channel', ' without extra overhead', ' over a few short weeks',
  ' for small and large teams alike', ' before anything goes live', ' in a way everyone can follow',
  ' with far less guesswork', ' from the very first draft',
]
const TITLE_WORDS = [
  'Creative', 'Testing', 'Framework', 'Workflow', 'Research', 'Strategy', 'Insights', 'Process', 'Briefs',
  'Concepts', 'Results', 'Planning', 'Hooks', 'Formats', 'Feedback', 'Iteration', 'Audience', 'Library',
]
const TITLE_LEADS = ['How to Plan', 'Getting Started With', 'Why Teams Value', 'A Closer Look at', 'Building Better', 'Simple Steps for', 'Common Questions About', 'Making Sense of']
const LABELS = ['Clarity', 'Speed', 'Focus', 'Consistency', 'Context', 'Structure', 'Reach', 'Timing', 'Scale', 'Alignment']

export function sentence(r) {
  return `${pick(r, SUBJECTS)} ${pick(r, VERBS)} ${pick(r, OBJECTS)}${pick(r, TAILS)}.`
}

export function paragraph(r, chars = 300) {
  let out = sentence(r)
  while (out.length < chars - 40) out += ' ' + sentence(r)
  return out
}

export function title(r) {
  return `${pick(r, TITLE_LEADS)} ${pick(r, TITLE_WORDS)} ${pick(r, TITLE_WORDS)}`
}

export const label = (r) => pick(r, LABELS)

const short = (r) => sentence(r).replace(/\.$/, '')
export const listItem = (r, chars = 100, strong = true) => ({
  strong: strong ? `${label(r)}:` : null,
  text: paragraph(r, chars).slice(0, Math.max(chars, 60)).replace(/\s+\S*$/, '') + '.',
})

/* ---------- Block builders (rendered by RichText) ----------
   Block shapes: {t:'p',text} {t:'h1'..'h6',text} {t:'ul'|'ol',items:[{strong,text,href?}]} {t:'img',src}
   {t:'video'} {t:'blockquote',text} {t:'table',head,rows} {t:'code',lines} {t:'spacer'} */

const spread = (total, buckets) => Array.from({ length: buckets }, (_, i) => Math.floor(total / buckets) + (i < total % buckets ? 1 : 0))

// template-post.md §4 recipe, sized by post.json `body` counts.
export function postBody(post) {
  const r = rng(`${post.slug}:body`)
  const b = post.body || {}
  const h2 = b.h2 || 0
  const sections = Math.max(h2, 1)
  const pTotal = Math.max(b.p || 6, 3)
  const pChars = Math.min(480, Math.max(140, Math.round(((b.words || 600) * 6) / pTotal)))
  const intro = Math.min(3, pTotal)
  const pPer = spread(pTotal - intro, sections)
  const h3Per = spread(b.h3 || 0, sections)
  const h4Per = spread(b.h4 || 0, sections)
  const ulPer = spread(b.ul || 0, sections)
  const olPer = spread(b.ol || 0, sections)
  const imgPer = spread(b.img || 0, sections)
  const vidPer = spread(b.video || 0, sections)
  const extras = { blockquote: b.blockquote ? 1 : 0, table: b.table ? 1 : 0, code: b.code ? 1 : 0 }
  let imgIdx = Math.floor(r() * imagePool.length)
  const blocks = []
  for (let i = 0; i < intro; i++) blocks.push({ t: 'p', text: paragraph(r, pChars) })
  for (let s = 0; s < sections; s++) {
    if (h2) blocks.push({ t: 'h2', text: title(r) })
    const subs = h3Per[s] + h4Per[s]
    const pHere = pPer[s]
    const lead = subs ? Math.min(2, pHere) : pHere
    for (let i = 0; i < lead; i++) blocks.push({ t: 'p', text: paragraph(r, pChars) })
    const rest = spread(pHere - lead, Math.max(subs, 1))
    for (let k = 0; k < subs; k++) {
      blocks.push({ t: k < h3Per[s] ? 'h3' : 'h4', text: title(r) })
      for (let i = 0; i < rest[k]; i++) blocks.push({ t: 'p', text: paragraph(r, pChars) })
    }
    for (let i = 0; i < ulPer[s]; i++) blocks.push({ t: 'ul', items: Array.from({ length: int(r, 4, 6) }, () => listItem(r, int(r, 60, 140))) })
    for (let i = 0; i < olPer[s]; i++) blocks.push({ t: 'ol', items: Array.from({ length: int(r, 3, 5) }, () => listItem(r, int(r, 60, 120), false)) })
    for (let i = 0; i < imgPer[s]; i++) blocks.push({ t: 'img', src: imagePool[imgIdx++ % imagePool.length] })
    for (let i = 0; i < vidPer[s]; i++) blocks.push({ t: 'video' })
    if (s === 0 && extras.blockquote) blocks.push({ t: 'blockquote', text: sentence(r) + ' ' + sentence(r) })
    if (s === Math.min(1, sections - 1) && extras.table)
      blocks.push({ t: 'table', head: ['Feature', 'Option A', 'Option B'], rows: Array.from({ length: 4 }, () => [label(r), short(r).split(' ').slice(0, 4).join(' '), short(r).split(' ').slice(0, 4).join(' ')]) })
    if (s === Math.min(2, sections - 1) && extras.code)
      blocks.push({ t: 'code', lines: ['{', '  "query": "example",', '  "limit": 10,', '  "order": "newest"', '}'] })
  }
  return blocks
}

export const postExcerpt = (seed, chars = 200) => paragraph(rng(`${seed}:excerpt`), chars)
export const cardExcerpt = (seed) => paragraph(rng(`${seed}:card`), 120)

export function postSummary(post) {
  const r = rng(`${post.slug}:summary`)
  return [{ t: 'ul', items: Array.from({ length: int(r, 4, 6) }, () => listItem(r, int(r, 120, 200), false)) }]
}

// template-faqs.md §3
export function faqAnswer(faq) {
  const a = faq.answer || {}
  if (!a.chars) return []
  const r = rng(`${faq.slug}:answer`)
  const n = Math.max(1, Math.min(a.paragraphs || 1, 4))
  const blocks = Array.from({ length: n }, () => ({ t: 'p', text: paragraph(r, Math.max(150, Math.min(250, a.chars / n))) }))
  if (a.links) blocks[0].link = { text: 'Learn more', href: '#' }
  if (a.lists) blocks.push({ t: 'ul', items: Array.from({ length: int(r, 4, 5) }, () => listItem(r, 60, false)) })
  return blocks
}

export const authorBio = (author) => {
  const r = rng(`${author.slug}:bio`)
  return Array.from({ length: author.bioParagraphs || 0 }, () => ({ t: 'p', text: paragraph(r, int(r, 170, 500)) }))
}

// template-events.md §1.4
export function eventLearn(ev) {
  const r = rng(`${ev.slug}:learn`)
  const l = ev.learn || { paragraphs: 1 }
  const blocks = Array.from({ length: Math.max(1, l.paragraphs || 1) }, () => ({ t: 'p', text: paragraph(r, int(r, 150, 400)) }))
  if (l.h3) blocks.push({ t: 'h3', text: 'Key Takeaways' })
  if (l.listItems) blocks.push({ t: 'ol', items: Array.from({ length: l.listItems }, () => ({ text: paragraph(r, 40).slice(0, int(r, 40, 70)).replace(/\s+\S*$/, '') })) })
  return blocks
}

const ts = (s) => {
  const h = String(Math.floor(s / 3600)).padStart(2, '0')
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0')
  const sec = String(s % 60).padStart(2, '0')
  return `${h}:${m}:${sec}:${String((s * 7) % 30).padStart(2, '0')}`
}
export function eventTranscript(ev) {
  const r = rng(`${ev.slug}:transcript`)
  const n = int(r, 20, 40)
  let t = 0
  return Array.from({ length: n }, (_, i) => {
    const d = int(r, 20, 45)
    const line = { stamp: `${ts(t)} - ${ts(t + d)}`, speaker: i % 2 ? ev.speaker : 'Host', text: paragraph(r, 300) }
    t += d
    return line
  })
}

// template-agencies.md §1.2 (sized by bodySections)
export function agencySection(agency, idx) {
  const s = agency.bodySections?.[idx] || { p: 1, li: 0, chars: 300 }
  const r = rng(`${agency.slug}:s${idx}`)
  const pChars = Math.max(80, Math.min(560, (s.chars - s.li * 90) / Math.max(1, s.p)))
  const blocks = Array.from({ length: Math.max(1, s.p) }, () => ({ t: 'p', text: paragraph(r, pChars) }))
  if (s.li) blocks.push({ t: 'ul', items: Array.from({ length: s.li }, () => listItem(r, 90)) })
  return blocks
}

// template-bounties.md §1.3: p×3, then 4 × [h4 + ol(3)/ol(2)/ul(4 links)/ul(4 links)]
export function bountyDetails(b) {
  const r = rng(`${b.slug}:details`)
  const links = () => Array.from({ length: 4 }, () => ({ text: title(r), href: '#' }))
  return [
    { t: 'p', text: paragraph(r, 250) },
    { t: 'p', text: sentence(r) },
    { t: 'p', text: paragraph(r, 160), strongLead: `${label(r)}:`, link: { text: 'See the guidelines', href: '#' } },
    { t: 'h4', text: title(r) },
    { t: 'ol', items: Array.from({ length: 3 }, () => listItem(r, 80, false)) },
    { t: 'h4', text: title(r) },
    { t: 'ol', items: Array.from({ length: 2 }, () => listItem(r, 80, false)) },
    { t: 'h4', text: title(r) },
    { t: 'ul', items: links() },
    { t: 'h4', text: title(r) },
    { t: 'ul', items: links() },
  ]
}
