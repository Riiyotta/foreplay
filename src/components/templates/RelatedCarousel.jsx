// S5 Related articles carousel (template-post.md §2.4) incl. the inline [data-carousel] behaviour.
import { useCallback, useEffect, useRef, useState } from 'react'
import { BlogContainer, EmptyState, SmartLink } from './Layout.jsx'
import { CardBody } from './CardGrid.jsx'

// carousel-arrow-{left,right}.svg path, drawn with currentColor so the hover colour applies
const Arrow = ({ dir }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M10.5 4.5L15 9L10.5 13.5M14.25 9H3"
      transform={dir === 'left' ? 'rotate(180 9 9)' : undefined}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function useCarousel(count) {
  const trackRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const stride = useRef(0)
  const lock = useRef(false)

  const measure = useCallback(() => {
    const track = trackRef.current
    const first = track?.children[0]
    if (!first) return
    stride.current = first.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).gap) || 0)
    track.style.transform = `translateX(-${current * stride.current}px)`
  }, [current])

  useEffect(() => {
    measure()
    let t
    const onResize = () => {
      clearTimeout(t)
      t = setTimeout(measure, 200)
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
    }
  }, [measure])

  const go = (d) => {
    if (lock.current) return
    lock.current = true
    setTimeout(() => (lock.current = false), 300)
    setCurrent((c) => Math.max(0, Math.min(count - 1, c + d)))
  }
  return { trackRef, current, go }
}

const ARROW =
  'flex size-9 items-center justify-center rounded-[200vw] bg-neutral-800 text-neutral-600 transition-all duration-200 hover:bg-neutral-600 hover:text-neutral-25 max-md:size-11'

export default function RelatedCarousel({ posts }) {
  const { trackRef, current, go } = useCarousel(posts.length)
  const arrow = (dir, disabled) => (
    <a
      href="#"
      role="button"
      data-dir={dir}
      aria-label={dir === 'left' ? 'Previous' : 'Next'}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={(e) => {
        e.preventDefault()
        go(dir === 'left' ? -1 : 1)
      }}
      className={`${ARROW} ${disabled ? 'pointer-events-none opacity-50' : ''}`}
    >
      <Arrow dir={dir} />
    </a>
  )

  return (
    <aside className="overflow-hidden">
      <div className="flex flex-col gap-9 py-[120px]">
        <BlogContainer>
          <div className="flex flex-col gap-2">
            <h2 className="text-label-l font-550 text-neutral-0">Related Articles</h2>
            <div className="text-neutral-100">
              <div className="text-body-m">You might also like these reads on similar themes.</div>
            </div>
          </div>
        </BlogContainer>
        <div data-carousel className="relative">
          <BlogContainer>
            {posts.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="flex flex-col gap-12 pt-16">
                <div
                  ref={trackRef}
                  data-track
                  className="flex snap-x snap-proximity gap-4 pb-2 transition-transform duration-600 ease-expo"
                >
                  {posts.map((p) => (
                    <SmartLink
                      key={p.slug}
                      href={`/post/${p.slug}`}
                      className="flex w-[40vw] max-w-[480px] flex-none snap-start flex-col overflow-hidden rounded-20 no-underline shadow-ring-product max-lg:w-[50vw] max-md:w-[calc(100vw-48px)]"
                    >
                      <CardBody post={p} nameClass="text-label-s" />
                    </SmartLink>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-6">
                  {arrow('left', current === 0)}
                  {arrow('right', current >= posts.length - 1)}
                </div>
              </div>
            )}
          </BlogContainer>
        </div>
      </div>
    </aside>
  )
}
