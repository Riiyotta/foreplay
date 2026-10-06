// S3 RichText: renders stand-in blocks (standin.js) with the measured .blog-rtb styles (index.css "CMS TEMPLATES").
// variant: 'post' (post-only overrides) | 'base' (.blog-rtb) | 'agency' (.ad-rich-text) | 'plain' (FAQ / bio .w-richtext)
import { VideoBox } from './VideoBox.jsx'

// template-post.md §2.3.1 step 1: lowercase, trim, drop [^\w\s-], whitespace → '-', -1/-2 for duplicates.
export function slugify(text) {
  return text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
}
export function tocFromBlocks(blocks) {
  const seen = {}
  return blocks
    .filter((b) => b.t === 'h2' && b.text)
    .map((b) => {
      const base = slugify(b.text)
      const n = seen[base] || 0
      seen[base] = n + 1
      return { id: n ? `${base}-${n}` : base, text: b.text }
    })
}

const Item = ({ it }) => (
  <li>
    {it.strong && <strong>{it.strong}</strong>} {it.href ? <a href={it.href}>{it.text}</a> : it.text}
  </li>
)

export default function RichText({ blocks, variant = 'base', id, anchors = false, className = '' }) {
  const toc = anchors ? tocFromBlocks(blocks) : []
  let h2i = 0
  const root = variant === 'plain' ? 'tpl-plain-rt' : `tpl-rtb ${variant === 'post' ? 'is-post' : variant === 'agency' ? 'is-agency' : ''}`
  return (
    <div id={id} className={`${root} ${className}`}>
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'p':
            return (
              <p key={i}>
                {b.strongLead && <strong>{b.strongLead} </strong>}
                {b.text}
                {b.link && (
                  <>
                    {' '}
                    <a href={b.link.href}>{b.link.text}</a>.
                  </>
                )}
              </p>
            )
          case 'h2': {
            const a = anchors ? toc[h2i++] : null
            return [
              a && (
                // .blog-offset-anchor
                <span key={`a${i}`} id={a.id} className="pointer-events-none invisible relative -top-[120px] block h-0" />
              ),
              <h2 key={i}>{b.text}</h2>,
            ]
          }
          case 'h1':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6': {
            const T = b.t
            return <T key={i}>{b.text}</T>
          }
          case 'ul':
            return <ul key={i}>{b.items.map((it, k) => <Item key={k} it={it} />)}</ul>
          case 'ol':
            return <ol key={i}>{b.items.map((it, k) => <Item key={k} it={it} />)}</ol>
          case 'img':
            return (
              <figure key={i}>
                <div>
                  <img src={b.src} alt="" loading="lazy" />
                </div>
              </figure>
            )
          case 'video':
            return (
              <figure key={i} className="tpl-video">
                <VideoBox youtubeId={null} />
              </figure>
            )
          case 'blockquote':
            return <blockquote key={i}>{b.text}</blockquote>
          case 'table':
            return (
              <div key={i} className="fp-table-wrap">
                <table>
                  <thead>
                    <tr>{b.head.map((h, k) => <th key={k}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, k) => (
                      <tr key={k}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case 'code':
            return (
              <pre key={i}>
                <code>{b.lines.map((l, k) => <span key={k}>{l}</span>)}</code>
              </pre>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
