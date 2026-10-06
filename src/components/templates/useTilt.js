// Mouse-move tilt (IX2 "New Mouse Animation" a-79 on agencies, "FU - Card Mouse Move" a-68 on university).
// IX2 `main` breakpoint only (≥992). Smoothing 50 → lerp 0.5 per frame toward the target; rests at 50% (flat).
// Mouse X 0→100%: card rotateY −rot→+rot, shine translateX +shineX%→−shineX%.
// Mouse Y 0→100%: card rotateX +rot→−rot, shine translateY +shineY%→−shineY%.
import { useEffect, useRef } from 'react'

export default function useTilt({ rot = 15, shineX = 90, shineY = 50 } = {}) {
  const cardRef = useRef(null)
  const shineRef = useRef(null)
  const s = useRef({ tx: 0.5, ty: 0.5, x: 0.5, y: 0.5, raf: 0 })

  const apply = () => {
    const { x, y } = s.current
    if (cardRef.current) cardRef.current.style.transform = `rotateX(${rot - 2 * rot * y}deg) rotateY(${-rot + 2 * rot * x}deg)`
    if (shineRef.current) shineRef.current.style.transform = `translate(${shineX - 2 * shineX * x}%, ${shineY - 2 * shineY * y}%)`
  }
  const tick = () => {
    const a = s.current
    a.x += (a.tx - a.x) * 0.5
    a.y += (a.ty - a.y) * 0.5
    apply()
    if (Math.abs(a.tx - a.x) > 0.0005 || Math.abs(a.ty - a.y) > 0.0005) a.raf = requestAnimationFrame(tick)
    else a.raf = 0
  }
  const setTarget = (tx, ty) => {
    s.current.tx = tx
    s.current.ty = ty
    if (!s.current.raf) s.current.raf = requestAnimationFrame(tick)
  }

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 992px)')
    const onChange = () => {
      if (!mq.matches) {
        Object.assign(s.current, { tx: 0.5, ty: 0.5, x: 0.5, y: 0.5 })
        apply()
      }
    }
    mq.addEventListener('change', onChange)
    return () => {
      mq.removeEventListener('change', onChange)
      cancelAnimationFrame(s.current.raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlers = {
    onMouseMove: (e) => {
      if (!window.matchMedia('(min-width: 992px)').matches) return
      const r = e.currentTarget.getBoundingClientRect()
      setTarget(Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)), Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)))
    },
    onMouseLeave: () => setTarget(0.5, 0.5),
  }
  return { cardRef, shineRef, handlers }
}
