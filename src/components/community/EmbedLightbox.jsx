import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import EmbedPlaceholder from '../shared/EmbedPlaceholder.jsx'

/* Webflow `w-lightbox` stand-in for third-party video embeds (YouTube / Wistia via embedly).
   Same backdrop + close button as shared/VideoLightbox, but with Webflow's default fade (300ms)
   and a neutral placeholder frame (no provider assumed). Escape / backdrop / × close it. */
export function EmbedLightbox({ title = 'Video', href, onClose }) {
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const raf = requestAnimationFrame(() => setShown(true))
    const onKey = (e) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('keydown', onKey)
    }
  })
  const close = () => {
    setShown(false)
    setTimeout(onClose, 300)
  }
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={close}
      className={`fixed inset-0 z-[2000] flex items-center justify-center bg-lightbox-backdrop text-center text-white transition-opacity duration-300 ease-[ease] ${
        shown ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        type="button"
        aria-label="close lightbox"
        onClick={close}
        className="absolute right-0 top-0 h-[2.6em] w-[4em] text-[24px] leading-none text-white opacity-80 hover:opacity-100"
      >
        ×
      </button>
      <div onClick={(e) => e.stopPropagation()} className="aspect-[940/528] w-[940px] max-w-[96vw]">
        <EmbedPlaceholder label={`${title} (video embed)`} href={href} linkLabel="Open video" className="size-full" />
      </div>
    </div>,
    document.body,
  )
}

export function useEmbedLightbox() {
  const [item, setItem] = useState(null)
  return {
    open: (it) => setItem(it),
    node: item ? <EmbedLightbox {...item} onClose={() => setItem(null)} /> : null,
  }
}
