import { useRef, useState } from 'react'
import SvgInline from '../shared/SvgInline.jsx'
import useSvgPathDraw from '../shared/useSvgPathDraw.js'

const L = '/assets/pages/lens-creative-analytics/'

/* `.lens-solution-graph-card.svg-animation-container` — grid-lined 22:13 chart whose paths draw on
   scroll (useSvgPathDraw). lens: dark card with the rainbow "Flat Rate Pricing" band. */
function Lines({ count, vertical, firstPlain }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 flex size-full justify-between ${vertical ? '' : 'flex-col'}`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`pointer-events-none ${vertical ? 'h-full w-px' : 'h-px w-full'} ${
            firstPlain && i === 0 ? '' : 'bg-current'
          }`}
        />
      ))}
    </div>
  )
}

function Legend({ items, lens }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {items.map(({ label, dot }) => (
        <div key={label} className="flex items-center justify-start gap-2 py-2 pl-2 pr-3">
          <div className={`size-2 rounded-pill ${dot}`} />
          <div className={`text-body-s ${lens ? 'text-neutral-100' : 'text-solid-500'}`}>{label}</div>
        </div>
      ))}
    </div>
  )
}

export default function LensGraphCard({ lens = false, title, text, svgs, legend }) {
  const ref = useRef(null)
  const [loaded, setLoaded] = useState(0)
  const ready = loaded >= svgs.length
  useSvgPathDraw(ready ? ref : { current: null })
  const layers = svgs.map((s) => (
    <div key={s} className="absolute inset-0 z-2">
      <SvgInline src={`${L}${s}`} className="size-full [&>svg]:size-full" onLoad={() => setLoaded((n) => n + 1)} />
    </div>
  ))
  return (
    <div
      ref={ref}
      className={`flex flex-col gap-2 rounded-20 px-3 pb-3 pt-8 max-sm:pt-6 ${
        lens ? 'bg-background text-neutral-100' : 'text-solid-500 shadow-ring-card-inset'
      }`}
    >
      <div>
        <h3
          className={`text-label-l leading-[30px] max-md:text-label-l-md max-md:leading-[30px] ${lens ? 'text-white' : 'text-solid-800'}`}
        >
          {title}
        </h3>
        <div className="mx-auto max-w-[328px] pb-5 pt-1 [text-wrap:balance] max-sm:pb-3">
          <p className={`text-body-m [text-wrap:balance] ${lens ? 'text-neutral-100' : 'text-solid-500'}`}>{text}</p>
        </div>
      </div>
      <div
        className={`relative z-5 aspect-[22/13] overflow-hidden rounded-8 ${
          lens ? 'text-solid-700 shadow-ring-solid-700-inset' : 'text-solid-50 shadow-ring-card-inset'
        }`}
      >
        {lens ? (
          <>
            <Lines count={6} />
            <Lines count={8} vertical />
          </>
        ) : (
          <>
            <Lines count={7} vertical firstPlain />
            <Lines count={6} />
          </>
        )}
        {layers}
        {lens && (
          <>
            <div className="absolute inset-x-0 bottom-0 h-1/5 bg-rainbow-90 opacity-25" />
            <div className="absolute inset-x-0 bottom-0 flex h-1/5 items-center justify-center bg-graph-fade">
              <div className="rounded-[4px] bg-white-05 px-1.5 py-px text-white-54">
                <div className="text-body-xs">Flat Rate Pricing</div>
              </div>
            </div>
          </>
        )}
      </div>
      <Legend items={legend} lens={lens} />
    </div>
  )
}
