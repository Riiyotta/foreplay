import { useRef, useState } from 'react'
import { Container } from './Layout.jsx'
import SectionHead from './SectionHead.jsx'
import { Button } from '../shared.jsx'

const A = '/assets/pages/swipe-file/'

// Chevron from `svg-svg-wqicrt.svg` (sprite-chevron, 20×20 in a 24 box). Rotates 180° when expanded.
function FaqChevron() {
  return (
    <svg viewBox="0 0 20 20" width="100%" height="100%" aria-hidden="true">
      <path
        className="faq-chevron origin-center"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        d="M13 8.5L10.5303 10.9697C10.2374 11.2626 9.76255 11.2626 9.46968 10.9697L7 8.5"
      />
    </svg>
  )
}

/* One `[data-accordion-item]` row. Behaviour per _shared-pages.md §4 "FAQ accordion":
   click / Enter / Space toggles; body height animates 0 ↔ measured answer height (.9s expo);
   links inside the answer keep working. */
export function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  const answerRef = useRef(null)
  const [height, setHeight] = useState(0)

  const toggle = () => {
    const next = !open
    const h = answerRef.current ? answerRef.current.offsetHeight : 0
    requestAnimationFrame(() => {
      setHeight(next ? h : 0)
      setOpen(next)
    })
  }
  const onClick = (e) => {
    if (answerRef.current?.contains(e.target.closest('a[href]'))) return
    e.preventDefault()
    toggle()
  }
  const onKeyDown = (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return
    e.preventDefault()
    toggle()
  }

  return (
    <div
      data-accordion-item=""
      data-expanded={open}
      aria-expanded={open}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className="flex cursor-pointer items-start justify-center gap-11 border-b border-neutral-700 pb-3 pt-5 text-neutral-100 transition-all duration-[900ms] ease-expo hover:text-neutral-0"
    >
      <div className="flex flex-1 flex-col">
        <div className="faq-block-head flex items-center gap-11">
          <h4 className="text-label-l max-md:text-label-l-md">{q}</h4>
        </div>
        <div className="overflow-hidden transition-all duration-[900ms] ease-expo" style={{ height }}>
          <div
            ref={answerRef}
            className="overflow-hidden py-2 text-body-s text-neutral-100 transition-all duration-[900ms] ease-expo [&_li]:ml-5 [&_li]:list-disc [&_p+p]:mt-0 [&_a]:text-link"
          >
            {a}
          </div>
        </div>
      </div>
      <div className="flex size-7 items-center justify-center transition-all duration-200">
        <div className="flex size-6 items-center justify-center">
          <FaqChevron />
        </div>
      </div>
    </div>
  )
}

// `.faq-buttons`: "Contact support" (#intercomButton) + "Knowledge Base"
export function FaqButtons() {
  return (
    <div className="flex items-center justify-center gap-3 py-3 max-sm:flex-col max-sm:items-stretch">
      <Button
        id="intercomButton"
        variant="dark-ghost-icon"
        href="#"
        label="Contact support"
        icon={false}
        iconLeft={<img src={`${A}svg-svg-1i4rn0n.svg`} alt="" className="size-5" />}
      />
      <Button
        variant="dark-ghost-icon"
        href="https://foreplay.featurebase.app/help"
        target="_blank"
        label="Knowledge Base"
        icon={false}
        iconLeft={<img src={`${A}svg-svg-1lrvzzc.svg`} alt="" className="size-6" />}
      />
    </div>
  )
}

/* `div.section > .container > .faq`: section head + 752-wide accordion (+ optional faq-buttons).
   items: [{ q: string, a: ReactNode }] */
export default function Faq({
  overline = 'FAQ',
  title,
  body,
  titleAs = 'h3',
  size = 'h2',
  bodyClass,
  bodyMax,
  items,
  buttons = true,
  className = '',
}) {
  return (
    <div className={className}>
      <Container>
        <div className="flex flex-col gap-12 py-[140px] max-md:gap-10 max-md:py-20 max-sm:pb-20 max-sm:pt-16">
          <SectionHead
            overline={overline}
            title={title}
            titleAs={titleAs}
            size={size}
            body={body}
            bodyClass={bodyClass}
            bodyMax={bodyMax}
          />
          <div data-accordion-container="" className="mx-auto w-full max-w-[752px]">
            <div>
              {items.map((it, i) => (
                <FaqItem key={i} {...it} />
              ))}
            </div>
          </div>
          {buttons && <FaqButtons />}
        </div>
      </Container>
    </div>
  )
}
