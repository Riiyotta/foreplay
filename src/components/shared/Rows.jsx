import SectionHead from './SectionHead.jsx'
import { Button } from '../shared.jsx'

/* Alternating image/text rows on white blocks (lens, api, mcp, mobile-app).
   `.left-right-section`  → LeftRightRow (flex, gap 24 / 40 ≤991, column ≤767 with the media first)
   `.lens-gamification-grid` → GridRow (12-col grid: content span 5, illustration span 7, flex ≤991,
                                column ≤479 with the illustration first) */

// Text column: left-aligned section head + optional light stroke button.
export function RowContent({
  overline,
  overlineClass = 'text-solid-500',
  title,
  titleAs = 'h3',
  titleSize = 'h3',
  titleClass = 'text-solid-900',
  body,
  bodyClass = 'text-solid-500',
  button = { label: 'Start Free Trial', href: 'https://app.foreplay.co/sign-up' },
  above,
  theme = 'light',
}) {
  return (
    <>
      <SectionHead
        align="left"
        theme={theme}
        overline={overline}
        overlineClass={overlineClass}
        title={title}
        titleAs={titleAs}
        size={titleSize}
        titleClass={titleClass}
        body={body}
        bodyClass={bodyClass}
        prefix={above}
      />
      {button && <Button variant="light-stroke" href={button.href} label={button.label} />}
    </>
  )
}

/* media: ReactNode (wrapped in `.left-right-section-image-wrapper` unless rawMedia), mediaFirst: DOM order. */
export function LeftRightRow({ media, rawMedia = false, mediaFirst = true, className = '', contentClass = '', children }) {
  const mediaEl = rawMedia ? (
    media
  ) : (
    <div className="w-full flex-1 px-4 max-md:order-first max-md:px-0">{media}</div>
  )
  const content = (
    <div className={`flex flex-col items-start justify-center gap-8 max-sm:gap-6 ${contentClass}`}>{children}</div>
  )
  return (
    <div
      className={`flex items-center gap-6 max-lg:gap-10 max-md:flex-col max-md:items-start max-md:gap-6 max-sm:gap-10 ${className}`}
    >
      {mediaFirst ? mediaEl : content}
      {mediaFirst ? content : mediaEl}
    </div>
  )
}

// `.left-right-section-image`: radius 20 (10 ≤479), full width ≤767
export function RowImage({ src, alt = '', className = '' }) {
  return <img className={`rounded-20 max-md:w-full max-sm:rounded-10 ${className}`} src={src} alt={alt} loading="lazy" />
}

export function GridRow({ img, alt = '', mediaFirst = false, children }) {
  const media = (
    <div className="col-span-7 px-4 max-sm:order-first max-sm:px-0">
      <img className="max-sm:-mb-6" src={img} alt={alt} loading="lazy" />
    </div>
  )
  const content = (
    <div className="col-span-5 flex flex-col items-start justify-center gap-8 max-sm:gap-6">{children}</div>
  )
  return (
    <div className="grid grid-cols-12 items-center justify-items-center max-lg:flex max-lg:gap-10 max-sm:flex-col max-sm:items-start">
      {mediaFirst ? media : content}
      {mediaFirst ? content : media}
    </div>
  )
}
