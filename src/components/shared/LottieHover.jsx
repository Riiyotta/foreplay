import { useEffect, useRef } from 'react'
import lottie from 'lottie-web/build/player/lottie_light'

/* Lottie player driven by progress (Webflow IX2 lottie targets, autoplay off).
   mode 'hover': hovering `hoverRef` (or the element itself) plays 0→100% over `inMs` with
   easeInOut; leaving scrubs back to 0 over `outMs` with `ease` (spyder a-76 / a-77, 4000ms each).
   mode 'loop': plain autoplay loop (chrome-extension pin hint). */
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)
// CSS `ease` = cubic-bezier(.25,.1,.25,1); solved numerically
function cssEase(x) {
  const cx = 0.75, bx = 3 * (0.25 - 0.25) - cx, ax = 1 - cx - bx // x(t) coefficients for p1x=.25,p2x=.25
  const cy = 0.3, by = 3 * (1 - 0.1) - cy, ay = 1 - cy - by // p1y=.1, p2y=1
  let t = x
  for (let i = 0; i < 8; i++) {
    const xt = ((ax * t + bx) * t + cx) * t - x
    const d = (3 * ax * t + 2 * bx) * t + cx
    if (Math.abs(d) < 1e-6) break
    t -= xt / d
  }
  return ((ay * t + by) * t + cy) * t
}

export default function LottieHover({ src, mode = 'hover', hoverRef, inMs = 4000, outMs = 4000, loop = false, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const anim = lottie.loadAnimation({
      container: el,
      renderer: 'svg',
      loop: mode === 'loop' ? true : loop,
      autoplay: mode === 'loop',
      path: src,
    })
    if (mode === 'loop') return () => anim.destroy()

    let raf = 0
    let p = 0
    let ready = false
    const draw = () => ready && anim.goToAndStop(p * (anim.totalFrames - 1), true)
    anim.addEventListener('DOMLoaded', () => {
      ready = true
      draw()
    })
    const run = (target, ms, ease) => {
      cancelAnimationFrame(raf)
      const from = p
      let t0 = null
      const tick = (now) => {
        if (t0 === null) t0 = now
        const raw = Math.min((now - t0) / ms, 1)
        p = from + (target - from) * ease(raw)
        draw()
        if (raw < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    const host = hoverRef?.current ?? el
    const enter = () => run(1, inMs, easeInOut)
    const leave = () => run(0, outMs, cssEase)
    host.addEventListener('mouseenter', enter)
    host.addEventListener('mouseleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      host.removeEventListener('mouseenter', enter)
      host.removeEventListener('mouseleave', leave)
      anim.destroy()
    }
  }, [src, mode, hoverRef, inMs, outMs, loop])
  return <div ref={ref} className={className} />
}
