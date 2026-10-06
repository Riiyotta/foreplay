import { useEffect } from 'react'

/* SVG path-draw on scroll (`.svg-animation-container`) — port of _shared-pages.md §4.
   The progress window runs from 70% to 30% of the viewport height. Every `.svg-animate-path`
   gets stroke-dashoffset = length·(1−p); every `.svg-animate-clip` gets
   clip-path: inset(0 X% 0 0), revealing left→right up to the rightmost x of `.svg-graph-ref`.
   The 0.2s linear transitions come from the page <style> embed (index.css). */
const VIEWPORT_OFFSET = 0.3
const CLIP_CORRECTION = -0.01

export default function useSvgPathDraw(containerRef, viewBoxW = 440) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const paths = Array.from(container.querySelectorAll('.svg-animate-path'))
    const clips = Array.from(container.querySelectorAll('.svg-animate-clip'))
    const refPath = container.querySelector('.svg-animate-path.svg-graph-ref')
    let rightmostX = 0
    let lastProgress = -1
    let activeOnPage = false

    const lengths = paths.map((p) => p.getTotalLength())
    paths.forEach((p, i) => {
      p.style.strokeDasharray = lengths[i]
      p.style.strokeDashoffset = lengths[i]
    })
    if (refPath) {
      const L = refPath.getTotalLength()
      for (let i = 0; i <= L; i += 2) rightmostX = Math.max(rightmostX, refPath.getPointAtLength(i).x)
      clips.forEach((c) => (c.style.clipPath = 'inset(0 100% 0 0)'))
    }

    function updateAnimations() {
      if (!activeOnPage) return
      const rect = container.getBoundingClientRect()
      const h = window.innerHeight
      const startPx = h * (1 - VIEWPORT_OFFSET)
      const endPx = h * VIEWPORT_OFFSET
      const prog = Math.min(1, Math.max(0, (startPx - rect.top) / (startPx - endPx)))
      if (prog === lastProgress || prog <= 0 || prog >= 1) {
        lastProgress = prog
        return
      }
      lastProgress = prog
      paths.forEach((p, i) => (p.style.strokeDashoffset = lengths[i] * (1 - prog)))
      if (refPath && clips.length) {
        const curX = rightmostX * Math.max(0, prog - CLIP_CORRECTION)
        const pct = ((viewBoxW - curX) / viewBoxW) * 100
        clips.forEach((c) => (c.style.clipPath = `inset(0 ${pct}% 0 0)`))
      }
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        activeOnPage = entry.isIntersecting
        if (activeOnPage) updateAnimations()
      },
      { threshold: 0 },
    )
    io.observe(container)

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        updateAnimations()
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    updateAnimations()
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [containerRef, viewBoxW])
}
