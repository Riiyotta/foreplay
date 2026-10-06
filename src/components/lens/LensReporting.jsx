import { useState } from 'react'
import SvgInline from '../shared/SvgInline.jsx'
import SectionHead from '../shared/SectionHead.jsx'

const L = '/assets/pages/lens-creative-analytics/'

/* "CREATIVE REPORTING" — `.home-sharing` grid with a `[data-tabs]` pane switcher driven only by
   prev/next `button.arrow-button`s (panes swap instantly; buttons .5s expo). Both pane groups
   (quote + report mockup) switch together.
   panes: [{ avatar, avatarAlt, quote, name, role, mockup, mockupAlt }] */
function ArrowButton({ label, src, onClick }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex size-9 items-center justify-center rounded-[4px] bg-arrow-btn px-1.5 py-px text-solid-600 transition-all duration-500 ease-expo hover:bg-solid-600 hover:text-solid-0 max-md:flex-1"
    >
      <SvgInline src={src} className="size-[18px]" />
    </button>
  )
}

export default function LensReporting({ overline, title, body, panes }) {
  const [i, setI] = useState(0)
  const n = panes.length
  const pane = panes[i]
  return (
    <div
      data-tabs=""
      className="grid grid-cols-2 grid-rows-[auto_auto] gap-20 pt-24 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-between max-lg:gap-10 max-sm:gap-2 max-sm:pt-20"
    >
      <div className="flex flex-col gap-10">
        <SectionHead
          align="left"
          theme="light"
          overline={overline}
          overlineClass="text-solid-500"
          title={title}
          size="h3"
          body={body}
          bodyClass="text-solid-600 [text-wrap:balance]"
          bodyMax=""
        />
        <div className="h-px bg-solid-50" />
      </div>
      <div className="col-start-1 row-start-2 flex flex-col gap-10 max-lg:order-1 max-lg:w-full max-lg:pb-10 max-sm:gap-6 max-sm:py-6">
        <div data-tab-panes="">
          <div key={i} role="tabpanel" className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto] place-items-start gap-3">
            <div className="row-span-2 aspect-square size-[84px] overflow-hidden rounded-10 bg-solid-25 max-md:size-16 max-sm:col-start-1 max-sm:row-span-1 max-sm:row-start-2 max-sm:size-10 max-sm:rounded-[4px]">
              <img className="size-full" src={pane.avatar} alt={pane.avatarAlt ?? ''} loading="lazy" />
            </div>
            <div className="col-start-2 row-start-1 flex flex-col max-sm:col-span-2 max-sm:col-start-1 max-sm:gap-3">
              <div className="flex-1">
                <p className="text-body-s text-solid-700">{pane.quote}</p>
              </div>
            </div>
            <div className="col-start-2 row-start-2 flex items-center gap-3 max-lg:flex-col max-lg:items-start max-lg:justify-center max-lg:gap-1">
              <div className="text-overline uppercase text-solid-700">
                <strong className="font-bold">{pane.name}</strong>
              </div>
              <div className="text-overline uppercase text-solid-300">{pane.role}</div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <ArrowButton label="Previous tab" src={`${L}svg-svg-1178rfo.svg`} onClick={() => setI((i - 1 + n) % n)} />
          <ArrowButton label="Next tab" src={`${L}svg-svg-gwcwos.svg`} onClick={() => setI((i + 1) % n)} />
        </div>
      </div>
      <div
        data-tab-panes=""
        className="col-start-2 row-span-2 row-start-1 -mr-[999px] -mt-20 aspect-[720/680] max-w-[720px] max-lg:mr-0 max-lg:mt-0 max-lg:max-w-none"
      >
        <div role="tabpanel" className="relative flex items-center justify-center max-sm:flex-col max-sm:justify-start max-sm:rounded-20">
          <img
            className="aspect-[720/680] max-sm:max-w-none"
            src={pane.mockup}
            alt={pane.mockupAlt ?? ''}
            loading="eager"
          />
        </div>
      </div>
    </div>
  )
}
