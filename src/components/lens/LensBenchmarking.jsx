import Marquee from '../shared/Marquee.jsx'

const L = '/assets/pages/lens-creative-analytics/'

/* "OVER 100 BENCHMARKING SEGMENTS": two AutoScrollCarousel marquees (data-speed .75 / .5, gap 16,
   the badge row is `.rtl` and only moves when it overflows). segments: [{ img, label }],
   badges: [{ label, tag, green? }] — in original DOM order. */
export default function LensBenchmarking({ heading, segments, badges }) {
  return (
    <div className="flex flex-col gap-6 overflow-hidden pb-[108px] pt-6 text-solid-900 max-lg:pb-24 max-md:gap-5 max-md:py-20 max-sm:pb-16 max-sm:pt-12">
      <div className="self-center">
        <div id="carousel-heading" className="text-overline uppercase">
          {heading}
        </div>
      </div>
      <div className="[transform-style:preserve-3d]">
        <Marquee speed={0.75} gap={16} className="items-center justify-center gap-4">
          {segments.map((s) => (
            <li key={s.label} className="flex-none">
              <div className="relative h-[200px] w-[220px] overflow-hidden rounded-12 max-lg:h-40 max-lg:w-[180px] max-md:h-36 max-md:w-40">
                <img className="size-full object-cover" src={`${L}${s.img}`} alt="" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 flex h-20 items-end justify-start bg-segment-fade p-4">
                  <div className="text-label-m text-white">{s.label}</div>
                </div>
              </div>
            </li>
          ))}
        </Marquee>
      </div>
      <div className="flex flex-col items-center">
        <Marquee speed={0.5} gap={16} rtl className="flex-none items-center justify-center gap-4">
          {badges.map((b) => (
            <li key={b.label + b.tag} className="flex-none">
              <div className="flex w-[220px] items-center justify-start gap-4 rounded-12 p-4 shadow-ring-card-inset max-lg:w-[180px] max-lg:gap-2 max-md:w-40 max-md:p-3 max-sm:py-2 max-sm:pr-2">
                <div className="flex-1">
                  <div className="text-label-m text-solid-900 max-md:text-[14px]">{b.label}</div>
                </div>
                <div
                  className={`rounded-[4px] px-1.5 ${b.green ? 'bg-segment-green-bg text-segment-green' : 'bg-segment-blue-bg text-segment-blue'}`}
                >
                  <div className="text-label-m max-md:text-[14px]">{b.tag}</div>
                </div>
              </div>
            </li>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
