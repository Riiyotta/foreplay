// "Coming Soon" Lottie loader (template-experts.md §1.2): autoplay, loop, svg renderer.
import { useEffect, useRef } from 'react'

const SRC = '/assets/templates/shared/lottie-loading-gray.json'
const dataPromises = {}

// src: optional other Lottie JSON (e.g. the jumpstart-2026 icon); defaults to the loader above.
export default function LottieLoader({ className = '', src = SRC }) {
  const ref = useRef(null)
  useEffect(() => {
    let anim
    let cancelled = false
    dataPromises[src] ||= fetch(src).then((r) => r.json())
    Promise.all([import('lottie-web/build/player/lottie_light'), dataPromises[src]])
      .then(([mod, animationData]) => {
        if (cancelled || !ref.current) return
        anim = mod.default.loadAnimation({ container: ref.current, renderer: 'svg', loop: true, autoplay: true, animationData })
      })
      .catch(() => {})
    return () => {
      cancelled = true
      anim?.destroy()
    }
  }, [src])
  return <div ref={ref} aria-hidden="true" className={className} />
}
