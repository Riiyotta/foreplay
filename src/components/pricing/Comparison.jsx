import { useRef, useState } from 'react'
import { Button } from '../shared.jsx'
import { WhiteBlock, Container } from '../shared/Layout.jsx'
import SvgInline from '../shared/SvgInline.jsx'

const P = '/assets/pages/pricing/'
const COLS = 'grid grid-cols-[1.75fr_1fr_1fr_1fr_1fr] max-lg:grid-cols-[1.25fr_1fr_1fr_1fr_1fr] max-sm:grid-cols-5'
const CELL = 'flex items-center justify-center border-l border-solid-50 p-4 max-lg:p-3 max-sm:p-1'
const TITLE =
  'relative flex flex-wrap items-center justify-start gap-x-3 gap-y-1 p-4 text-left max-lg:p-2.5 max-md:gap-x-1 max-md:p-2 max-sm:flex-col max-sm:flex-nowrap max-sm:items-stretch'
const src = (f) => (f.startsWith('/') ? f : `${P}${f}`)
const SMALL = 'max-lg:text-[12px] max-lg:leading-5 max-sm:text-[11.2px] max-sm:leading-[17px]'

/* `.comparison-tooltip`: hover/focus shows the dark body above the trigger
   (opacity 0 → 1, translateY 8 · scale .96 → none, .6s cubic-bezier(0.19,1,0.22,1)).
   ≤767 the closed tooltip is display:none so its box can't widen the page (it overflowed /pricing at 390). */
export function CompareTooltip({ trigger, children, className = '' }) {
  return (
    <div className={`group relative z-[100] self-center text-solid-400 ${className}`}>
      <div className="invisible absolute bottom-full left-1/2 -translate-x-1/2 pb-2 group-hover:visible group-focus-within:visible max-lg:translate-x-0 max-md:hidden max-md:group-hover:block max-md:group-focus-within:block">
        <div className="relative flex min-w-[240px] max-w-[280px] origin-bottom translate-y-2 scale-[.96] flex-col items-center justify-start gap-1 rounded-12 bg-solid-500 p-3 text-solid-0 opacity-0 transition-all duration-600 ease-expo group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100">
          {children}
        </div>
      </div>
      {trigger}
    </div>
  )
}

// v: true → check, '—'/null → dash, string or node (e.g. two-line value with <br />) → text
function Cell({ v }) {
  if (v === true) return <SvgInline src={`${P}svg-svg-yw0r87.svg`} className="size-6" />
  if (v === '—' || v == null) return <div className="text-center text-body-m text-solid-300">—</div>
  return (
    <div className="text-center text-body-m text-solid-700 max-lg:text-[14px] max-lg:leading-5 max-sm:text-[12px] max-sm:leading-[18px]">
      {v}
    </div>
  )
}

/* Row props: title, sub?, icon?, link? (product row: pill link; smallIcon → 20px icon `.version-2`;
   external → new tab), cells, crown?, info? (+ infoHref, defaults /pricing), subhead? */
function Row({ title, sub, icon, link, smallIcon, external, cells, crown, info, infoHref = '/pricing', subhead }) {
  return (
    <div className={`relative z-2 border-b border-solid-50 ${COLS} ${subhead ? 'bg-solid-25' : ''}`}>
      <div className={TITLE}>
        {link ? (
          <a
            href={link}
            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
            className={`flex max-w-full flex-wrap items-center justify-start gap-x-3 gap-y-1 rounded-6 bg-solid-25 py-[5px] pr-2.5 transition-all duration-200 hover:bg-solid-50 max-sm:gap-x-2 max-sm:p-0 ${
              smallIcon ? 'pl-2.5' : 'pl-[5px]'
            }`}
          >
            {icon && <img className={smallIcon ? 'size-5' : 'size-7 max-md:size-6'} src={src(icon)} alt="" loading="lazy" />}
            <div className={`text-label-s text-solid-900 ${SMALL}`}>{title}</div>
          </a>
        ) : (
          <>
            {icon && <img className="size-5" src={src(icon)} alt="" loading="lazy" />}
            <div className={`text-label-s text-solid-700 ${SMALL}`}>{title}</div>
          </>
        )}
        {sub && <div className={`text-body-s text-solid-500 [text-wrap:pretty] ${SMALL}`}>{sub}</div>}
        {info && (
          <div className="flex size-5 items-center justify-center max-lg:hidden">
            <CompareTooltip
              trigger={
                <a href="#" onClick={(e) => e.preventDefault()} className="m-0 flex max-w-full cursor-pointer items-center justify-center p-0 text-solid-400 hover:text-solid-700">
                  <div className="p-1">
                    <SvgInline src={`${P}svg-svg-2c328x.svg`} className="size-5" />
                  </div>
                </a>
              }
            >
              <div className={`text-body-s text-white ${SMALL}`}>{info}</div>
              <a href={infoHref} className="max-w-full rounded-6 py-1 pl-3 pr-1 text-solid-0 transition-all duration-200 hover:bg-solid-500">
                <div className="flex items-center gap-1">
                  <div className="text-label-s text-white">Learn more</div>
                  <SvgInline src={`${P}svg-svg-185ries.svg`} className="size-[23px]" />
                </div>
              </a>
            </CompareTooltip>
          </div>
        )}
      </div>
      {subhead ? <div className="col-span-4" /> : cells.map((v, i) => <div key={i} className={CELL}><Cell v={v} /></div>)}
      {crown && (
        <div className="absolute -bottom-px -top-px right-full flex w-10 items-center justify-center rounded-l-10 border border-r-0 border-solid-50 text-solid-400 2xl:w-11 max-lg:w-7">
          <SvgInline src={`${P}svg-svg-xel2bx.svg`} className="size-[18px]" />
        </div>
      )}
    </div>
  )
}

/* `.comparison-category[data-open]`: the head toggles rows height 0 ↔ scrollHeight instantly (no transition);
   only the head icon rotates (.6s expo). */
function Category({ title, rows }) {
  // Rows stay at their natural height while open ('auto' — a px height pinned at mount went stale once
  // fonts/images loaded or the viewport changed); collapse is instant to 0, as on live.
  const [open, setOpen] = useState(true)
  const rowsRef = useRef(null)
  const height = open ? 'auto' : '0'
  const toggle = (e) => {
    e.preventDefault()
    setOpen((o) => !o)
  }
  return (
    <div data-open={open}>
      <a
        href="#"
        onClick={toggle}
        className="relative z-2 flex max-w-full items-center justify-start border-b border-solid-50 bg-solid-25 p-4 text-left text-solid-700 max-md:p-2"
      >
        <div className="flex-1">
          <h3 className="text-[18px] font-550 leading-6 tracking-[-0.26px] text-solid-700 max-lg:text-[16px] max-sm:text-[12px]">{title}</h3>
        </div>
        <div className={`transition-all duration-600 ease-expo ${open ? 'rotate-180' : ''}`}>
          <div className="inline-flex size-6 items-center justify-center">
            <SvgInline src={`${P}svg-svg-wqicrt.svg`} className="size-6" />
          </div>
        </div>
      </a>
      <div
        ref={rowsRef}
        className="-mx-12 px-12 [overflow-x:clip] max-lg:-mx-10 max-lg:px-10"
        style={{ height, overflowY: open ? 'visible' : 'clip' }}
      >
        {rows.map((r, i) => (
          <Row key={`${i}-${r.title}`} {...r} />
        ))}
      </div>
    </div>
  )
}

// `.new-button.new-button-secondary` "Book a Demo" (227 wide)
function BookDemoButton() {
  return (
    <a
      href="/book-demo"
      className="relative z-5 flex w-[227px] items-center justify-center rounded-10 bg-white p-2 text-new-btn-text no-underline shadow-new-btn-ring transition-all duration-600 ease-expo hover:bg-new-btn-hover hover:shadow-new-btn-ring-0 focus:outline-none active:bg-new-btn-active-bg active:text-new-btn-active-text"
    >
      <div className="px-1.5">
        <div className="text-heading-m">Book a Demo</div>
      </div>
    </a>
  )
}

/* S2 "Compare Plans" — white block (overflow visible for the sticky header), "Only with Foreplay" badge
   tooltip, sticky-header 5-column grid with collapsible categories, footer CTA (mobile variant ≤767).
   plans: [{ name, cta, href }], categories: [{ title, rows }] */
export default function Comparison({ body, plans, categories }) {
  return (
    <WhiteBlock as="div" innerClassName="overflow-visible">
      <Container>
        <div className="flex flex-col items-stretch justify-start gap-10 py-16 text-center max-sm:gap-8">
          <div className="flex flex-col items-center justify-start gap-10 pb-4 max-md:gap-8">
            <div className="max-w-[640px]">
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-center font-display text-display-h3 text-solid-900">Compare Plans</h2>
                <p className="text-center text-body-m text-solid-500 [text-wrap:pretty]">{body}</p>
              </div>
            </div>
          </div>
          <CompareTooltip
            trigger={
              <div className="flex cursor-pointer items-center justify-center text-solid-400 hover:text-solid-700">
                <div className="flex select-none items-center justify-start rounded-8 shadow-ring-card transition-colors duration-200 hover:text-yellow">
                  <div className="flex size-9 items-center justify-center border-r border-solid-50">
                    <SvgInline src={`${P}svg-svg-xel2bx.svg`} className="size-[18px]" />
                  </div>
                  <div className="flex-1 px-3 py-1.5">
                    <div className="text-center text-label-m text-solid-600">Only with Foreplay</div>
                  </div>
                </div>
              </div>
            }
          >
            <div className="pointer-events-none [text-wrap:balance]">
              <div className="text-center text-label-s text-white [text-wrap:balance]">
                Features Tagged with 👑 are only available with Foreplay
              </div>
            </div>
          </CompareTooltip>
          <div className="pl-6 max-md:relative max-md:-left-6 max-md:-mr-12 max-md:overflow-auto max-md:pl-10 max-md:pr-6">
            <div className="rounded-16 border border-solid-50 max-md:relative max-md:w-[600px] max-md:rounded-b-none max-sm:w-[480px]">
              <div className={`sticky top-[72px] z-50 rounded-t-16 border-b border-solid-50 bg-neutral-0 max-md:top-0 ${COLS}`}>
                <div className={TITLE} />
                {plans.map((p) => (
                  <div key={p.name} className={`${CELL} flex-col gap-3`}>
                    <div className="text-center text-[18px] font-550 leading-6 tracking-[-0.26px] text-solid-700 max-lg:text-[16px] max-sm:text-[12px]">
                      {p.name}
                    </div>
                    <Button variant="light-primary" href={p.href} label={p.cta} className="max-lg:hidden" />
                  </div>
                ))}
              </div>
              {categories.map((c) => (
                <Category key={c.title} {...c} />
              ))}
              <div className="flex flex-col items-center justify-start gap-5 py-10 max-lg:gap-4 max-md:hidden">
                <h3 className="text-center font-display text-display-h4 text-solid-900 max-sm:text-[22px]">Need something custom?</h3>
                <BookDemoButton />
              </div>
            </div>
          </div>
          <div className="-mt-10 hidden flex-col items-center justify-start gap-4 py-10 max-md:flex">
            <h3 className="text-center font-display text-display-h4 text-solid-900 max-sm:text-[22px]">Need something custom?</h3>
            <BookDemoButton />
          </div>
        </div>
      </Container>
    </WhiteBlock>
  )
}
