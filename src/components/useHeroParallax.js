import { useEffect } from 'react'

// CLONE_SPEC §2.3: Webflow IX2 "Home / Hero Parallax" (a-72, event e-193), re-implemented without Webflow.
// Measured on the live original (1440×900 and 991×700): linear in p, where
//   p = 0     → translate3d(0px, 0%, 0px)    scale3d(1, 1, 1)         opacity 1
//   p = 0.25  → translate3d(0px, -8.25%, 0px) scale3d(.9375, .9375, 1) opacity .75
//   p = 0.5   → translate3d(0px, -16.5%, 0px) scale3d(.875, .875, 1)   opacity .5
//   p = 0.75  → translate3d(0px, -24.75%, 0px) scale3d(.8125, .8125, 1) opacity .25
//   p = 1     → translate3d(0px, -33%, 0px)   scale3d(.75, .75, 1)     opacity 0
// Progress uses IX2's SCROLLING_IN_VIEW formula (startsEntering/startsExiting false, no offsets),
// which for the 100vh trigger at document top reduces to scrollY / viewportHeight.
// Active only on IX2 media queries "main" + "medium" (innerWidth ≥ 768). The original does NOT honour
// prefers-reduced-motion (body lacks data-wf-ix-vacation), so neither does this.
const MIN_WIDTH = 768

function ix2ScrollProgress(trigger) {
  const de = document.documentElement
  const u = de.clientHeight
  const l = de.scrollHeight
  const o = trigger.getBoundingClientRect()
  const r = 1 // startsEntering false, addStartOffset false → 1 - 0
  const d = 1 // startsExiting false, addEndOffset false → 1 - 0
  const c = o.top + Math.min(o.height * r, u)
  const f = Math.min(u + (o.top + o.height * d - c), l)
  if (f <= 0) return 0
  return Math.min(Math.max(0, u - c), f) / f
}

// IX2 "inOutCubic" (used by the product-page a-71 on the translate only, _shared-pages.md §3).
export const inOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const linear = (t) => t

// options.translateEasing: easing applied to the translateY only (default linear = homepage a-72).
export default function useHeroParallax(triggerRef, targetRef, { translateEasing = linear } = {}) {
  useEffect(() => {
    const trigger = triggerRef.current
    const target = targetRef.current
    if (!trigger || !target) return
    let raf = 0
    let active = false

    const apply = () => {
      raf = 0
      if (window.innerWidth < MIN_WIDTH) {
        if (active) {
          target.style.removeProperty('transform')
          target.style.removeProperty('opacity')
          target.style.removeProperty('will-change')
          active = false
        }
        return
      }
      active = true
      const p = ix2ScrollProgress(trigger)
      // Round like IX2 output (no float noise such as -8.250000001%)
      const y = +(-33 * translateEasing(p)).toFixed(4)
      const s = +(1 - 0.25 * p).toFixed(6)
      target.style.willChange = 'opacity, transform'
      target.style.transform = `translate3d(0px, ${y}%, 0px) scale3d(${s}, ${s}, 1)`
      target.style.opacity = String(+(1 - p).toFixed(6))
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply)
    }

    apply()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      target.style.removeProperty('transform')
      target.style.removeProperty('opacity')
      target.style.removeProperty('will-change')
    }
  }, [triggerRef, targetRef, translateEasing])
}
