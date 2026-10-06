import { useEffect, useState } from 'react'

/* Inlines a saved SVG file (public/assets/pages/<slug>/svg-*.svg) into the DOM so that
   `currentColor`, CSS transitions and scripts (path draw) work the way they do on the live page,
   without transcribing the artwork into JSX. onLoad fires once the markup is in the DOM. */
const cache = new Map()

export default function SvgInline({ src, className = '', onLoad, ...rest }) {
  const [html, setHtml] = useState(() => cache.get(src) ?? '')
  useEffect(() => {
    let alive = true
    if (cache.has(src)) {
      setHtml(cache.get(src))
      return
    }
    fetch(src)
      .then((r) => r.text())
      .then((t) => {
        const clean = t.replace(/\sstyle="stroke-dasharray:[^"]*"/g, '').replace(/\sstyle="clip-path:[^"]*"/g, '')
        cache.set(src, clean)
        if (alive) setHtml(clean)
      })
    return () => {
      alive = false
    }
  }, [src])
  useEffect(() => {
    if (html && onLoad) onLoad()
  }, [html]) // eslint-disable-line react-hooks/exhaustive-deps
  return <div className={`flex items-center justify-center ${className}`} dangerouslySetInnerHTML={{ __html: html }} {...rest} />
}
