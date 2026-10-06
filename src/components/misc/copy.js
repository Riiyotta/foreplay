// Neutral stand-in copy of a given length for the misc pages (specs give ‹copy: ~N chars›).
// Built on templates/standin.js so wording stays consistent across the clone.
import { rng, paragraph, sentence } from '../templates/standin.js'

/** Deterministic stand-in text of ~n characters (trimmed at a word boundary, ends with a period). */
export function standin(seed, n) {
  if (!n) return ''
  const r = rng(String(seed))
  let t = paragraph(r, n + 60)
  while (t.length < n) t += ' ' + sentence(r)
  if (t.length <= n) return t
  const cut = t.slice(0, n).replace(/[\s,.;:]+\S*$/, '')
  return (cut || t.slice(0, n)).replace(/[,.;:]$/, '') + '.'
}

/** Rich-text block list following a structure string like "p×6 h2 p×3 ul(5)" with a total char budget.
 *  spacers: insert Webflow-style empty `<p>‍</p>` between consecutive paragraphs (p margins are 0 there). */
export function blocksFrom(seed, structure, totalChars, { spacers = false } = {}) {
  const tokens = structure.split(/\s+/).filter(Boolean)
  const units = []
  tokens.forEach((tok) => {
    let m
    if ((m = tok.match(/^(p|h\d)×(\d+)$/))) for (let i = 0; i < +m[2]; i++) units.push({ t: m[1] })
    else if ((m = tok.match(/^(ul|ol)\((\d+)\)$/))) units.push({ t: m[1], n: +m[2] })
    else units.push({ t: tok })
  })
  // weights: p 1, li 0.45, headings fixed ~32 chars
  const headChars = units.filter((u) => /^h\d$/.test(u.t)).length * 32
  const weight = units.reduce((s, u) => s + (u.t === 'p' ? 1 : u.n ? u.n * 0.45 : 0), 0) || 1
  const per = Math.max(40, (totalChars - headChars) / weight)
  const blocks = units.map((u, i) => {
    const s = `${seed}:${i}`
    if (u.t === 'p') return { t: 'p', text: standin(s, Math.round(per)) }
    if (u.n) return { t: u.t, items: Array.from({ length: u.n }, (_, k) => ({ text: standin(`${s}:${k}`, Math.round(per * 0.45)) })) }
    return { t: u.t, text: standin(s, 32).replace(/\.$/, '') }
  })
  if (!spacers) return blocks
  return blocks.flatMap((b, i) => (b.t === 'p' && blocks[i + 1]?.t === 'p' ? [b, { t: 'p', text: '\u200d' }] : [b]))
}
