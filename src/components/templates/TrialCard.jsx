// `aside.blog-cta` sticky trial card (template-post.md §2.3.3) + its Webflow-style lightbox.
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../shared.jsx'
import { IconPlay } from '../svgs.jsx'

const SHARED = '/assets/templates/shared'

// Same look as the homepage lightbox (backdrop #000000e6). Placeholder that opens the video on YouTube.
function Lightbox({ youtubeId, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])
  return createPortal(
    <div role="dialog" aria-modal="true" onClick={onClose} className="fixed inset-0 z-[2000] flex items-center justify-center bg-lightbox-backdrop text-center text-white">
      <button type="button" aria-label="close lightbox" onClick={onClose} className="absolute right-0 top-0 h-[2.6em] w-[4em] text-[24px] leading-none text-white opacity-80 hover:opacity-100">
        ×
      </button>
      <a
        href={`https://www.youtube.com/watch?v=${youtubeId}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="relative block aspect-[940/528] w-[940px] max-w-[96vw]"
      >
        <img src="/assets/yt-thumb.jpg" alt="Watch on YouTube" className="size-full object-cover" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-[50px] items-center justify-center rounded-circle bg-play-bubble backdrop-blur-10">
            <span className="size-5">
              <IconPlay />
            </span>
          </span>
        </span>
      </a>
    </div>,
    document.body,
  )
}

export default function TrialCard({ className = '' }) {
  const [open, setOpen] = useState(false)
  return (
    <aside className={`rounded-12 bg-neutral-700 ${className}`}>
      <div className="flex flex-col rounded-12 p-1 text-center">
        <a
          href="#"
          aria-label="open lightbox"
          onClick={(e) => {
            e.preventDefault()
            setOpen(true)
          }}
          className="relative flex aspect-[260/144] items-center justify-center overflow-hidden rounded-8 bg-neutral-800 bg-cover bg-center"
          style={{ backgroundImage: `url("${SHARED}/blog-cta-bg_cv8db4aj7T8_maxresdefault.jpg")` }}
        >
          <img src={`${SHARED}/blog-cta-thumbnail_mqdefault.avif`} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
          <div className="relative z-2 flex size-9 items-center justify-center rounded-ray bg-neutral-800 backdrop-blur-[12px]">
            <img src="/assets/templates/icons/blog-cta-play.svg" alt="" className="size-4" />
          </div>
        </a>
        <div className="flex flex-col items-center p-3">
          <div className="text-neutral-0">
            <div className="text-label-l font-550">Start your free trial</div>
          </div>
          <div className="text-neutral-100">
            <div className="text-body-m">Save, organize, share and analyze your next winning ad.</div>
          </div>
        </div>
        <Button variant="dark-secondary" href="https://app.foreplay.co/sign-up" label="Start free trial" className="w-full" />
      </div>
      {open && <Lightbox youtubeId="k40dfSJUfhE" onClose={() => setOpen(false)} />}
    </aside>
  )
}
