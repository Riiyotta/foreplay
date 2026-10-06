import { useCallback, useEffect, useRef, useState } from 'react'
import { Container, SectionContainer, PaddingY, ContentMain } from '../shared/Layout.jsx'
import SectionHead from '../shared/SectionHead.jsx'

const ICON_PREV = '/assets/pages/swipe-file/svg-carousel-icon-b7rq1z.svg'
const ICON_NEXT = '/assets/pages/swipe-file/svg-carousel-icon-3j2fr4.svg'

/* `[data-carousel]` — port of _shared-pages.md §4 "Product carousel": stride = first card width + gap,
   translateX(−current·stride), track transition transform .8s cubic-bezier(0.19,1,0.22,1), clicks locked
   for 300ms, arrows get .is-disabled at the ends, re-measure on resize (debounced 200ms).
   The original swipe handler is not in the spec; a plain horizontal swipe (>50px) is used here. */
function useCarousel(count) {
  const trackRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [stride, setStride] = useState(0)
  const animating = useRef(false)

  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track || !track.children[0]) return
    const card = track.children[0].querySelector('[data-slide-card]') || track.children[0]
    setStride(card.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).gap) || 0))
  }, [])

  useEffect(() => {
    measure()
    let t
    const onResize = () => {
      clearTimeout(t)
      t = setTimeout(measure, 200)
    }
    window.addEventListener('resize', onResize, { passive: true })
    window.addEventListener('orientationchange', onResize, { passive: true })
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
    }
  }, [measure])

  const go = (dir) => {
    if (animating.current) return
    const next = current + dir
    if (next < 0 || next > count - 1) return
    animating.current = true
    setCurrent(next)
    setTimeout(() => (animating.current = false), 300)
  }

  const touch = useRef(null)
  const touchProps = {
    onTouchStart: (e) => (touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }),
    onTouchEnd: (e) => {
      if (!touch.current) return
      const dx = e.changedTouches[0].clientX - touch.current.x
      const dy = e.changedTouches[0].clientY - touch.current.y
      touch.current = null
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1)
    },
  }
  return { trackRef, current, stride, go, touchProps }
}

function Arrow({ dir, disabled, onClick }) {
  return (
    <a
      href="#"
      data-dir={dir}
      aria-label={dir === 'left' ? 'Previous' : 'Next'}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      className={`relative flex size-9 cursor-pointer items-center justify-center rounded-full bg-neutral-800 text-neutral-600 transition-all duration-200 hover:bg-neutral-600 hover:text-neutral-25 max-md:size-11 ${
        disabled ? 'pointer-events-none opacity-50' : ''
      }`}
    >
      <img className="pointer-events-none size-[18px]" src={dir === 'left' ? ICON_PREV : ICON_NEXT} alt="" />
    </a>
  )
}

/* S3 "USE CASES": section head + slider of `.slide-card`s (39vw / max 576; 480 ≤991; 400 ≤767; 100vw−48 ≤479).
   slides: [{ img, alt, title, text }] */
export default function ProductCarousel({ overline = 'USE CASES', title, body, slides }) {
  const { trackRef, current, stride, go, touchProps } = useCarousel(slides.length)
  return (
    <div>
      <PaddingY>
        <ContentMain>
          <Container>
            <SectionHead overline={overline} title={title} body={body} />
          </Container>
          <div data-carousel="" className="relative">
            <SectionContainer>
              <div className="flex flex-col gap-12 pt-16">
                <div
                  ref={trackRef}
                  data-track=""
                  {...touchProps}
                  className="flex items-stretch justify-start gap-4 transition-transform duration-800 ease-expo will-change-transform"
                  style={{ transform: `translateX(-${current * stride}px)` }}
                >
                  {slides.map((s, i) => (
                    <div key={i} className="flex-none">
                      <div
                        data-slide-card=""
                        className="flex h-full min-h-[320px] w-[39vw] max-w-[576px] flex-col overflow-hidden rounded-28 shadow-ring-slide max-lg:w-[480px] max-md:w-[400px] max-sm:w-[calc(100vw-48px)]"
                      >
                        <img className="size-full flex-1 object-cover" src={s.img} alt={s.alt ?? ''} loading="lazy" />
                        <div className="flex-1 p-6 max-sm:px-4 max-sm:pb-6 max-sm:pt-4">
                          <div className="relative z-1 flex flex-col gap-[7px] text-neutral-0">
                            <h3 className="text-label-m">{s.title}</h3>
                            <div className="flex-1 text-neutral-100">
                              <p className="text-body-m">{s.text}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-6">
                  <Arrow dir="left" disabled={current === 0} onClick={() => go(-1)} />
                  <Arrow dir="right" disabled={current === slides.length - 1} onClick={() => go(1)} />
                </div>
              </div>
            </SectionContainer>
          </div>
        </ContentMain>
      </PaddingY>
    </div>
  )
}
