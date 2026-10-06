/* C6 contest theme (specs/contest.md, contest-submission.md). Everything here is scoped to the
   `.contest` wrapper (index.css "COMMUNITY" block) so it never leaks into the Lens tokens. */
import { useRef, useState } from 'react'

export const C = '/assets/pages/contest/'
export const CS = '/assets/pages/contest-submission/'
export const PLAY_SMALL = '/assets/pages/mobile-app/64502d8b633f4d3ee4584b7a_play-small.svg'
export const LINKEDIN = '/assets/pages/chrome-extension/664e52e8d13ae48e8b3788d0_contest-linkedin.svg'
export const INSTAGRAM = '/assets/pages/chrome-extension/647662134e4be7ea6b1ba257_instagram-logo.webp'
export const UAA_ICON = `${CS}66550fd4fb02d321734c8c6b_uaa-icon.svg`

// `body.contest`
export function ContestTheme({ children }) {
  return <div className="contest">{children}</div>
}

// `.container-1200.w-container`: max 1200, padding-x measured 28.8 @1440 / 19.8 @991 (= 2% of the viewport; spec text says 2.4%), 5% ≤767, relative, z 4
export function Container1200({ className = '', children }) {
  return <div className={`relative z-4 mx-auto w-full max-w-[1200px] px-[2%] max-md:px-[5%] ${className}`}>{children}</div>
}

// `h2.contest-h2`: Inter 45/54 500, gradient (30/36 ≤479)
export function ContestH2({ as: Tag = 'h2', className = '', children }) {
  return (
    <Tag className={`contest-gradient font-sans text-[45px] font-medium leading-[54px] max-sm:text-[30px] max-sm:leading-9 ${className}`}>
      {children}
    </Tag>
  )
}

// `h3.contest-h3`: Circular 25/30 500, gradient (20/24 ≤479 on the contest page)
export function ContestH3({ className = '', children }) {
  return (
    <h3 className={`contest-gradient font-circular text-[25px] font-medium leading-[30px] ${className}`}>{children}</h3>
  )
}

// `.section-idetifyer` pill
export function Pill({ children }) {
  return (
    <div className="inline-block rounded-[5px] border border-contest-card bg-[#609ffe0f] px-[12.8px] py-[3.2px] font-circular text-[16px] font-light uppercase leading-6 text-contest-accent shadow-[inset_0_-6.5px_15px_#609ffe30] backdrop-blur-[5px]">
      {children}
    </div>
  )
}

// `.prize-type`: Circular 12.8/24 400 uppercase #609ffe
export function PrizeType({ className = '', children }) {
  return <div className={`font-circular text-[12.8px] font-normal uppercase leading-6 text-contest-accent ${className}`}>{children}</div>
}

// `.finalists---details` row (brand link / social link / dropdown rows)
export function DetailRow({ href, icon, iconClass = 'size-5 rounded-[4px]', className = '', children }) {
  const Tag = href ? 'a' : 'div'
  return (
    <Tag
      href={href}
      {...(href ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`flex h-[46px] items-center gap-2.5 rounded-10 border border-[#ffffff0a] bg-[#ffffff05] p-2.5 font-circular text-[16px] font-extralight leading-6 text-contest-bright ${className}`}
    >
      {icon && <img src={icon} alt="" className={`flex-none object-cover ${iconClass}`} />}
      <div className="truncate">{children}</div>
    </Tag>
  )
}

// `.eligible-awards---dropdown` / `.additional-entries-block` pill
export function AwardPill({ children }) {
  return (
    <div className="flex items-center gap-[7px] rounded-circle border border-neutral-700 bg-[#ffffff0d] py-1 pl-[7px] pr-2.5 font-circular text-[16px] font-extralight leading-6 text-contest-bright transition-all duration-200 hover:bg-neutral-700">
      <img src={UAA_ICON} alt="" className="h-6 w-5" />
      <div className="whitespace-nowrap">{children}</div>
    </div>
  )
}

/* `.div-block-285` video thumbnail + `.play-button-1-uaa` (100 circle, hover padding 15 → 5) → lightbox. */
export function PlayThumb({ src, onOpen, className = '', imgClass = '' }) {
  return (
    <a
      href="#"
      aria-label="open lightbox"
      onClick={(e) => {
        e.preventDefault()
        onOpen?.()
      }}
      className={`group relative block overflow-hidden rounded-[15px] border border-neutral-700 ${className}`}
    >
      <img src={src} alt="" loading="lazy" className={`block w-full object-cover ${imgClass}`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-[100px] items-center justify-center rounded-circle bg-[#3787ff38] p-[15px] shadow-play-button backdrop-blur-[5px] transition-all duration-200 group-hover:p-[5px] max-sm:scale-[.7]">
          <div className="flex size-full items-center justify-center rounded-circle bg-contest-play backdrop-blur-[3px]">
            <img src={PLAY_SMALL} alt="" className="ml-[3px] h-[22.5px] w-5" />
          </div>
        </div>
      </div>
    </a>
  )
}

/* Contest-submission FAQ item (IX2 "FAQ → Open/Close"): content height 0 ↔ auto over 300ms ease,
   plus icon rotateZ 0 ↔ 45deg over 300ms linear. Items are independent. */
export function ContestFaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const inner = useRef(null)
  const toggle = () => {
    const next = !open
    setOpen(next)
    setHeight(next ? inner.current.offsetHeight : 0)
  }
  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toggle()
        }
      }}
      className="cursor-pointer rounded-10 border border-contest-card bg-contest-card px-6 py-4 transition-all duration-200 hover:border-[#8f8f8f] max-md:py-5 max-sm:p-4"
    >
      <div className="flex items-center justify-between py-[5px]">
        <div className="font-circular text-[16px] font-light leading-8 tracking-[-0.32px] text-neutral-0">{q}</div>
        <img
          src={`${CS}664e5ae6e2a8324d9f15721d_faq-plus-blue.svg`}
          alt=""
          className="size-6 flex-none transition-transform duration-300 ease-linear"
          style={{ transform: `rotateZ(${open ? 45 : 0}deg)` }}
        />
      </div>
      <div className="overflow-hidden transition-[height] duration-300 ease-[ease]" style={{ height }}>
        <div ref={inner} className="font-circular text-[16px] font-extralight leading-[25.6px] text-contest-accent [&_a]:text-contest-bright">
          <p>{a}</p>
        </div>
      </div>
    </div>
  )
}
