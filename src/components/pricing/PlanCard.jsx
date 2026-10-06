import { useRef, useState } from 'react'
import { Button } from '../shared.jsx'
import SvgInline from '../shared/SvgInline.jsx'

const P = '/assets/pages/pricing/'
const Divider = () => <div className="h-px w-full bg-solid-700" />

/* `.pricing_card-benefit` + `.pricing_popover`: on mouseenter the popover is placed below the row when
   there is room (or more room than above), otherwise above (_shared-pages.md §4), then fades in (.15s). */
function Benefit({ icon, text, value, popover }) {
  const rowRef = useRef(null)
  const popRef = useRef(null)
  const [state, setState] = useState({ visible: false, below: true })
  const enter = () => {
    if (!popover) return
    const rowRect = rowRef.current.getBoundingClientRect()
    const h = popRef.current.offsetHeight
    const spaceBelow = window.innerHeight - rowRect.bottom
    const spaceAbove = rowRect.top
    setState({ visible: true, below: spaceBelow >= h || spaceBelow >= spaceAbove })
  }
  return (
    <div
        ref={rowRef}
        onMouseEnter={enter}
        onMouseLeave={() => setState((s) => ({ ...s, visible: false }))}
        className="relative grid grid-cols-[1fr_5rem] items-center justify-start gap-2 rounded-12 px-2 py-1.5 text-[14px] text-solid-50 transition-[background-color,color] duration-[250ms] hover:bg-solid-700 hover:text-solid-300"
      >
        <div className="flex flex-1 items-center justify-start gap-[0.675rem] font-medium tracking-[-0.01em]">
          <img className="size-7 flex-none" src={`${P}${icon}`} alt="" loading="lazy" />
          <div className="text-[14px] font-medium leading-6 tracking-[-0.14px] text-solid-50">{text}</div>
        </div>
        <div className="text-right">
          {value ? (
            <div className="text-right text-[14px] leading-6 tracking-[-0.18px] text-solid-50">{value}</div>
          ) : (
            // live: the check's inline-flex box sits 5px below the line top (cell 29 tall, row 41)
            <div className="ml-auto mt-[5px] flex size-6 items-center justify-center">
              <SvgInline src={`${P}svg-svg-yw0r87.svg`} className="size-6" />
            </div>
          )}
        </div>
        {popover && (
          <div
            ref={popRef}
            className={`absolute inset-x-0 z-[100] w-full rounded-16 border border-solid-700 bg-solid-700 text-solid-25 shadow-popover transition-opacity duration-150 ease-[ease] ${
              state.below ? 'top-full mt-1.5' : 'bottom-full mb-1.5'
            } ${state.visible ? 'pointer-events-auto visible opacity-100' : 'pointer-events-none invisible opacity-0'}`}
          >
            <div className="relative p-4">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="flex flex-1 items-center gap-[0.675rem]">
                  <img className="size-7 flex-none" src={`${P}${icon}`} alt="" loading="lazy" />
                  <div className="text-label-m text-solid-25">{popover.title}</div>
                </div>
                <div className="text-[14px] leading-6 tracking-[-0.18px] text-neutral-100">{popover.text}</div>
              </div>
            </div>
            {popover.img && <img className="w-full" src={`${P}${popover.img}`} alt={popover.alt ?? ''} loading="lazy" />}
          </div>
        )}
      </div>
  )
}

/* `.pricing_card-new` — plan card (border neutral-700, radius 16; hover / .is-primary bg neutral-900,
   primary hover neutral-800; background-color .2s cubic-bezier(.55,.085,.68,.53)).
   { name, desc, price, save?, primary?, users, extra, benefits, integrates? } */
export default function PlanCard({ name, desc, price, save, primary, users, extra, benefits, integrates }) {
  return (
    <div
      className={`flex flex-col items-stretch justify-start gap-5 rounded-16 border border-neutral-700 px-3 py-5 transition-[background-color] duration-200 ease-in-quad-ish ${
        primary ? 'bg-neutral-900 hover:bg-neutral-800' : 'hover:bg-neutral-900'
      }`}
    >
      <div className="flex flex-col gap-5 px-2">
        <div className="flex flex-col items-start justify-start gap-2">
          <h3 className="text-overline uppercase text-white">{name}</h3>
          <p className="text-body-s text-neutral-100 [text-wrap:balance]">{desc}</p>
        </div>
        <Divider />
        <div className="flex flex-col items-start justify-start gap-2">
          <div className="flex items-baseline gap-1">
            <div className="font-display text-display-h5 text-white">{price}</div>
            <div className="flex-1 text-neutral-100">
              <div className="text-body-s">/month</div>
            </div>
          </div>
          {save && (
            <div className="flex items-center justify-start gap-1">
              <img className="size-5" src={`${P}svg-svg-v8ic9h.svg`} alt="" />
              <div className="text-label-s text-white">{save}</div>
            </div>
          )}
        </div>
        <Button
          variant={primary ? 'dark-primary' : 'dark-secondary'}
          href="https://app.foreplay.co/sign-up"
          label="Start 7 Day Free Trial"
          icon={false}
        />
        <Divider />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-5 px-2">
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="text-label-s text-white">{users}</div>
            <div className="flex-1 text-neutral-100">
              <div className="text-body-s">{extra}</div>
            </div>
          </div>
        </div>
        <ul className="m-0 mb-2.5 flex list-none flex-col gap-1 p-0">
          {/* a nested array renders as one <li> holding several rows with no gap (live groups AI / Chrome / IG) */}
          {benefits.map((b) => (
            <li key={Array.isArray(b) ? b.map((x) => x.text).join('|') : b.text}>
              {(Array.isArray(b) ? b : [b]).map((x) => (
                <Benefit key={x.text} {...x} />
              ))}
            </li>
          ))}
        </ul>
      </div>
      {integrates && (
        <>
          <div className="h-px w-full bg-solid-700" />
          <div className="flex flex-col items-center justify-start gap-2">
            <div className="text-[14px] leading-6 tracking-[-0.18px] text-neutral-100">Integrates with</div>
            <img
              className="aspect-[17.5/1] min-h-5 w-full object-contain"
              src={`${P}6aa63d4c49fe53fce82260cf_ai_row.webp`}
              alt="Logos of Claude, Grok, Gemini, ChatGPT"
              loading="lazy"
            />
            <div className="text-[14px] leading-6 tracking-[-0.18px] text-neutral-100">and more...</div>
          </div>
        </>
      )}
    </div>
  )
}
