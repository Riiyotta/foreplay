import { useTabs } from '../shared.jsx'
import { Container } from '../shared/Layout.jsx'
import SectionHead from '../shared/SectionHead.jsx'
import SvgInline from '../shared/SvgInline.jsx'

const L = '/assets/pages/lens-creative-analytics/'

function Logo({ src }) {
  return (
    <div className="flex aspect-square h-[23.2558%] items-center justify-center rounded-[20%] bg-background shadow-ring-neutral-600-inset max-sm:h-[28%]">
      <img className="size-full" src={`${L}${src}`} alt="" loading="lazy" />
    </div>
  )
}

/* S3 "INTEGRATIONS": 944×368 illustration (gradient-spectrum video, mirrored animated path SVGs,
   3+3 platform tiles, centre lens icon video) and a `[data-tabs]` mockup switcher over a people
   photo. Tab links .5s expo, panes swap instantly.
   tabs: [{ label, icon (svg file), mockup, alt }] */
export default function LensIntegrations({ overline, title, body, left, right, tabs }) {
  const { active, linkProps, paneProps } = useTabs(tabs.length)
  return (
    <section>
      <div className="flex flex-col overflow-hidden py-[108px] max-lg:py-24 max-md:py-20">
        <Container>
          <SectionHead overline={overline} title={title} body={body} />
        </Container>
        <Container>
          <figure className="relative z-2 m-0 mx-auto mt-[88px] flex aspect-[944/368] w-full max-w-[944px] items-center justify-center max-lg:mx-0 max-lg:mt-16 max-lg:w-auto max-md:-mx-24 max-sm:mx-0 max-sm:mt-12">
            <div className="absolute inset-x-0 top-1/2 z-1 origin-[50%_0] [transform-style:preserve-3d] [transform:scaleY(1.2)] 2xl:[transform:scale(1.1,1.3)]">
              <div className="relative flex items-center justify-center">
                <video className="w-full object-contain" autoPlay loop muted playsInline preload="metadata">
                  <source src={`${L}gradient-spectrum-optimized.mp4`} />
                </video>
              </div>
            </div>
            <div className="relative z-2 flex size-full items-center justify-center">
              <div className="h-full w-1/2 max-lg:flex-[0_1_auto]">
                <img className="size-full" src={`${L}svg-svg-1io048a.svg`} alt="" />
              </div>
              <div className="h-full w-1/2 -scale-x-100 max-lg:flex-[0_1_auto]">
                <img className="size-full" src={`${L}svg-svg-p2ad2f.svg`} alt="" />
              </div>
            </div>
            <div className="absolute inset-0 z-5 mx-auto flex max-w-[944px] justify-between">
              <div className="flex flex-col items-start justify-between max-md:flex-1 max-md:pl-[108px] max-sm:relative max-sm:z-2 max-sm:pl-0">
                {left.map((s) => (
                  <Logo key={s} src={s} />
                ))}
              </div>
              <div className="flex aspect-square h-1/2 items-center justify-center self-center overflow-hidden rounded-[21%] max-md:h-full max-md:flex-1 max-sm:relative max-sm:z-2">
                <div className="relative -top-px left-[3px] size-[200%] flex-none max-md:static max-md:flex max-md:size-full max-md:flex-1 max-md:items-center max-md:justify-center">
                  <div className="relative flex items-center justify-center max-md:hidden">
                    <video className="size-full object-contain" autoPlay loop muted playsInline preload="metadata">
                      <source src={`${L}animated-icon-lens.webm`} />
                      <source src={`${L}animated-icon-lens.mov`} />
                    </video>
                  </div>
                  <div className="hidden max-md:flex max-md:items-center max-md:justify-center max-sm:relative max-sm:z-2">
                    <img
                      className="mx-auto size-32 max-sm:h-auto max-sm:w-[85%] max-sm:max-w-[108px]"
                      src={`${L}682f9f725170de3b3258d310_pi-lens-hq.webp`}
                      alt="Lens app icon"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between max-md:flex-1 max-md:pr-[108px] max-sm:relative max-sm:z-2 max-sm:pr-0">
                {right.map((s) => (
                  <Logo key={s} src={s} />
                ))}
              </div>
            </div>
          </figure>
        </Container>
        <div
          data-tabs=""
          className="relative z-2 mt-6 xl:-mx-20 xl:mt-5 2xl:-mt-6 max-lg:mt-0 max-md:mt-6 max-sm:-mt-6"
        >
          <div data-tab-panes="" className="-mb-[12%] flex flex-col items-center max-sm:-mb-[16%]">
            {tabs.map((t, i) => (
              <div
                key={t.label}
                {...paneProps(i, 'integrations')}
                className={`aspect-[1953/1202] max-lg:-mx-[20%] max-md:-mx-[32%] max-sm:-mx-[36%] ${active === i ? 'flex' : 'hidden'}`}
              >
                <div className="flex flex-col items-center max-md:overflow-x-hidden">
                  <div className="relative z-2 grid grid-cols-1 items-start justify-center gap-4">
                    <img
                      className="aspect-[1953/1202] h-auto w-full max-w-none"
                      src={t.mockup}
                      alt={t.alt}
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0 z-5 flex w-full flex-col items-center">
            <img
              className="z-5 aspect-[1953/1202] w-full max-w-[1993px] 2xl:mx-auto max-lg:h-full max-lg:w-auto max-sm:hidden"
              src={`${L}67c6cef61d31b32e3dde9251_8e7cb2680b3833f83c61a14e695bfc7e_lens-people.webp`}
              alt="People viewing desktop device"
              loading="eager"
            />
          </div>
          <div
            role="tablist"
            className="relative z-10 mx-auto flex max-w-[min(100vw,1080px)] items-center justify-center gap-3 p-2 xl:max-w-[1080px] xl:gap-1 max-lg:px-8 max-md:px-6 max-sm:flex-col max-sm:items-stretch"
          >
            {tabs.map((t, i) => (
              <div
                key={t.label}
                {...linkProps(i, 'integrations')}
                className={`flex cursor-pointer items-center justify-center gap-[5px] rounded-10 px-3 py-2 text-center transition-all duration-500 ease-expo hover:bg-neutral-800 focus-visible:shadow-focus-dark-52 focus-visible:outline-none active:shadow-ring-white-12 ${
                  active === i
                    ? 'border-0 bg-neutral-700 text-white backdrop-blur-[4px] max-md:border max-md:border-transparent'
                    : 'border border-solid-700 text-white-56 backdrop-blur-[2px]'
                }`}
              >
                <SvgInline src={`${L}${t.icon}`} className="size-6 [&>svg]:size-5" />
                <div className="text-label-l max-md:text-label-l-md">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
