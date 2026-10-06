import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { IconPlay } from '../svgs.jsx'

/* Webflow `w-lightbox` replacement for page-level YouTube videos. The YouTube player is a
   third-party embed, so the modal shows a 16:9 placeholder frame (optional poster) that links out.
   Same backdrop / close button as the Navbar lightbox. */
export function VideoLightbox({ url, title, poster, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-lightbox-backdrop text-center text-white"
    >
      <button
        type="button"
        aria-label="close lightbox"
        onClick={onClose}
        className="absolute right-0 top-0 h-[2.6em] w-[4em] text-[24px] leading-none text-white opacity-80 hover:opacity-100"
      >
        ×
      </button>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="relative block aspect-[940/528] w-[940px] max-w-[96vw] bg-solid-900 bg-cover bg-center shadow-ring-neutral-600-inset"
        style={poster ? { backgroundImage: `url("${poster}")` } : undefined}
      >
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <span className="flex size-[50px] items-center justify-center rounded-circle bg-play-bubble backdrop-blur-10">
            <span className="size-5">
              <IconPlay />
            </span>
          </span>
          <span className="text-label-s text-neutral-50">{title} (opens on YouTube)</span>
        </span>
      </a>
    </div>,
    document.body,
  )
}

export function useLightbox() {
  const [open, setOpen] = useState(false)
  return {
    open,
    trigger: {
      href: '#',
      'aria-label': 'open lightbox',
      onClick: (e) => {
        e.preventDefault()
        setOpen(true)
      },
    },
    close: () => setOpen(false),
  }
}
