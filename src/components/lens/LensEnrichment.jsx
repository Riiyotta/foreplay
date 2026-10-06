import { Container } from '../shared/Layout.jsx'
import SectionHead from '../shared/SectionHead.jsx'

const L = '/assets/pages/lens-creative-analytics/'

/* "AI METADATA" — the homepage `.lens-enrichment` rays (CLONE_SPEC §5.2) on the dark background:
   two mirrored rays meeting at the lens oval, 7 hover tooltips (image + caption). Tooltip motion from
   the page <style> embed: body .3s cubic-bezier(.33,1,.68,1) (translateY 24 + scale .8 → 0 / 1),
   ring .9s cubic-bezier(.16,1,.3,1) (scale .8 → 1, opacity 0 → 1). Positions match homepage .is-N.
   left / right: [{ pos, label, img, text }] */
function Tooltip({ pos, label, img, text }) {
  return (
    <div className={`absolute -translate-x-1/2 ${pos}`}>
      <div tabIndex={0} className="group relative z-4 flex flex-col focus:outline-none">
        <div className="invisible absolute bottom-full left-1/2 h-[204px] w-[276px] -translate-x-1/2 group-hover:visible group-focus-visible:visible max-sm:hidden">
          <div className="mb-6 flex h-[180px] translate-y-6 scale-[.8] flex-col gap-1 rounded-16 bg-solid-600 p-1 opacity-0 transition-all duration-300 ease-cubic-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:opacity-100">
            <div className="flex flex-1 items-center justify-center overflow-hidden rounded-12 bg-black-20">
              <img className="size-full object-contain" src={`${L}${img}`} alt="" loading="lazy" />
            </div>
            <div className="flex items-center justify-center px-4 py-3 text-center">
              <div className="text-neutral-50">
                <div className="text-body-s">{text}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center gap-1 max-sm:gap-0">
          <div className="grid size-4 place-content-center place-items-center">
            <div className="relative z-1 col-start-1 row-start-1 size-4 scale-[.8] rounded-pill bg-tooltip-ring p-px opacity-0 transition-all duration-[900ms] ease-expo-alt group-hover:scale-100 group-hover:opacity-100 max-md:size-3">
              <div className="size-full rounded-ray bg-background" />
            </div>
            <div className="relative z-2 col-start-1 row-start-1 size-2 self-center justify-self-center rounded-ray bg-white max-md:size-1.5" />
          </div>
          <div className="whitespace-nowrap text-tooltip text-white max-md:text-[14px] max-md:leading-5 max-sm:text-[10px] max-sm:leading-[18px]">
            {label}
          </div>
        </div>
      </div>
    </div>
  )
}

const RAY =
  'relative z-3 col-start-1 row-start-1 flex h-full w-[58.8889%] rounded-r-ray border border-neutral-800 bg-ray-dark'
const FADER = 'relative z-2 -m-0.5 w-[72px] bg-fader-dark'

export default function LensEnrichment({ overline, title, body, left, right }) {
  return (
    <div className="flex flex-col gap-32 overflow-x-clip max-lg:pb-10 max-sm:gap-20">
      <Container>
        <SectionHead overline={overline} title={title} size="h3" body={body} bodySize="m" />
      </Container>
      <figure className="relative m-0 mx-auto grid aspect-[1440/520] w-full max-w-[1440px] grid-cols-1 gap-4 max-lg:-mx-20 max-lg:w-auto max-lg:max-w-none max-sm:-mx-[72px]">
        <div className="pointer-events-none absolute inset-0 z-3 flex flex-col items-center justify-center">
          <div className="pointer-events-none relative z-5 aspect-square h-full scale-x-[.97] scale-y-[.993] saturate-[1.24]">
            <img className="size-full" src={`${L}svg-svg-qwky2l.svg`} alt="" />
          </div>
        </div>
        <div className={RAY}>
          <div className={FADER} />
          <div className="absolute inset-0">
            {left.map((t) => (
              <Tooltip key={t.label} {...t} />
            ))}
          </div>
        </div>
        <div className={`${RAY} justify-self-end -scale-x-100`}>
          <div className={FADER} />
          <div className="absolute inset-0 -scale-x-100 max-md:right-[23%] max-sm:right-[18%] max-sm:top-0">
            {right.map((t) => (
              <Tooltip key={t.label} {...t} />
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-5 flex flex-col items-center">
          <div className="pointer-events-none -my-8 w-0.5 flex-1 bg-overlay-line max-md:-my-10 max-md:w-[1.5px]" />
        </div>
      </figure>
    </div>
  )
}
