// Blog TOC (template-post.md §2.3.1): sticky top 120, IntersectionObserver active state, smooth-scroll on click.
import { useEffect, useState } from 'react'

export default function StickyToc({ items, rtbId = 'blog-rtb' }) {
  const [active, setActive] = useState(items[0]?.id)

  // Step 6: observe every h2; among intersecting ones the highest ratio wins (via its previous-sibling anchor id).
  useEffect(() => {
    const root = document.getElementById(rtbId)
    if (!root || !items.length) return
    const heads = [...root.querySelectorAll('h2')].filter((h) => h.previousElementSibling?.id)
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (vis[0]) setActive(vis[0].target.previousElementSibling.id)
      },
      { rootMargin: '-120px 0px -80% 0px', threshold: 0 },
    )
    heads.forEach((h) => io.observe(h))
    return () => io.disconnect()
  }, [items, rtbId])

  // Step 7: on load / hashchange jump to the hash (behavior auto).
  useEffect(() => {
    const jump = () => {
      const id = decodeURIComponent(location.hash.slice(1))
      const el = id && items.some((i) => i.id === id) ? document.getElementById(id) : null
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' })
        setActive(id)
      }
    }
    const t = setTimeout(jump, 0)
    window.addEventListener('hashchange', jump)
    return () => {
      clearTimeout(t)
      window.removeEventListener('hashchange', jump)
    }
  }, [items])

  if (!items.length) return null // `.blog-toc.is-hidden` until there is at least one h2
  return (
    <aside id="blog-toc" className="flex flex-col gap-4 xl:transition-all xl:duration-200">
      <div className="text-neutral-0">
        <div className="text-label-m">Table of contents</div>
      </div>
      <ol className="mb-2.5 flex flex-col border-l border-white-12">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              data-id={it.id}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(it.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                history.replaceState(null, '', `#${it.id}`)
                setActive(it.id)
              }}
              className={`block border-l p-3 no-underline transition-all duration-150 ease-linear hover:text-neutral-0 ${
                active === it.id ? 'border-neutral-0 text-neutral-0' : 'border-transparent text-neutral-100'
              }`}
            >
              <div className="text-body-s">{it.text}</div>
            </a>
          </li>
        ))}
      </ol>
    </aside>
  )
}
