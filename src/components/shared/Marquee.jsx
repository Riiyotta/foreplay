import { useEffect, useRef } from 'react'

/* AutoScrollCarousel (`.carousel-ul`, `.rtl`) — verbatim port of the page script in
   _shared-pages.md §4. Moves `speed` px per animation frame, clones the item set ×2 before
   (reversed, via insertBefore) and ×2 after, only runs when the items are wider than the parent,
   pauses on hover and while the tab is hidden, re-evaluates 500ms after resize.
   Props: speed (data-speed), gap (data-gap / --gap), rtl, className (ul), children (<li> items). */
export default function Marquee({ speed = 1, gap = 16, rtl = false, className = '', children }) {
  const ulRef = useRef(null)

  useEffect(() => {
    const element = ulRef.current
    if (!element) return
    const config = { speed, gap, resizeDebounce: 500 }
    const state = {
      items: Array.from(element.children),
      animationFrameId: null,
      currentPosition: 0,
      isInitialized: false,
      isRTL: rtl,
    }

    const carousel = {
      calculateTotalWidth() {
        return state.items.reduce(
          (sum, item, index, array) => sum + item.offsetWidth + (index < array.length - 1 ? config.gap : 0),
          0,
        )
      },
      animate() {
        state.currentPosition += state.isRTL ? config.speed : -config.speed
        const totalWidth = this.calculateTotalWidth()
        if (state.isRTL) {
          if (state.currentPosition >= totalWidth + config.gap) state.currentPosition = 0
          else if (state.currentPosition <= 0) state.currentPosition = totalWidth
        } else if (-state.currentPosition >= totalWidth + config.gap) state.currentPosition = 0
        else if (state.currentPosition >= 0) state.currentPosition = -totalWidth
        element.style.transform = `translateX(${state.currentPosition}px)`
        state.animationFrameId = requestAnimationFrame(() => this.animate())
      },
      startAnimation() {
        if (!state.isInitialized || state.animationFrameId) return
        this.animate()
      },
      stopAnimation() {
        if (state.animationFrameId) {
          cancelAnimationFrame(state.animationFrameId)
          state.animationFrameId = null
        }
      },
      cleanup() {
        this.stopAnimation()
        Array.from(element.children)
          .filter((c) => c.dataset.marqueeClone)
          .forEach((c) => c.remove())
        element.style.transform = ''
        element.style.width = ''
        state.currentPosition = 0
        state.isInitialized = false
      },
      setup() {
        if (state.isInitialized) return
        for (let i = 0; i < 2; i++) {
          state.items.forEach((item) => {
            const after = item.cloneNode(true)
            const before = item.cloneNode(true)
            after.dataset.marqueeClone = '1'
            before.dataset.marqueeClone = '1'
            after.setAttribute('aria-hidden', 'true')
            before.setAttribute('aria-hidden', 'true')
            element.appendChild(after)
            element.insertBefore(before, element.firstChild)
          })
        }
        element.style.width = 'max-content'
        const totalWidth = this.calculateTotalWidth()
        state.currentPosition = state.isRTL ? totalWidth : -totalWidth
        element.style.transform = `translateX(${state.currentPosition}px)`
        state.isInitialized = true
        this.animate()
      },
      update() {
        const shouldAnimate = this.calculateTotalWidth() > element.parentElement.offsetWidth
        if (shouldAnimate && !state.isInitialized) this.setup()
        else if (!shouldAnimate && state.isInitialized) this.cleanup()
      },
    }

    const onEnter = () => carousel.stopAnimation()
    const onLeave = () => carousel.startAnimation()
    const onVis = () => (document.hidden ? carousel.stopAnimation() : carousel.startAnimation())
    let resizeTimeout
    const onResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => carousel.update(), config.resizeDebounce)
    }
    element.addEventListener('mouseenter', onEnter)
    element.addEventListener('mouseleave', onLeave)
    document.addEventListener('visibilitychange', onVis)
    window.addEventListener('resize', onResize)
    carousel.update()

    return () => {
      clearTimeout(resizeTimeout)
      element.removeEventListener('mouseenter', onEnter)
      element.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('visibilitychange', onVis)
      window.removeEventListener('resize', onResize)
      carousel.cleanup()
    }
  }, [speed, gap, rtl])

  return (
    <ul ref={ulRef} data-speed={speed} data-gap={gap} className={`relative m-0 flex list-none p-0 ${className}`}>
      {children}
    </ul>
  )
}
