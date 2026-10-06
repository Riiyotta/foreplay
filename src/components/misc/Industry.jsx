// industries template pieces (specs/template-industries.md §1, §2, §4)
import { Button } from '../shared.jsx'
import { SectionContainer, PaddingY, ContentMain } from '../shared/Layout.jsx'
import SectionHead from '../shared/SectionHead.jsx'
import { MaskIcon } from '../templates/Layout.jsx'
import { standin } from './copy.js'

const SIGN_UP = 'https://app.foreplay.co/sign-up'

/* ---------- §1 Hero + logo marquee ---------- */
function LogoRow({ logos, hidden = false }) {
  return (
    // `.industries-carousel-logos`: 100% wide, space-around; motion = IX2 a-78 (.misc-marquee-20)
    <div aria-hidden={hidden || undefined} className="misc-marquee-20 flex w-full flex-none items-stretch justify-around">
      {logos.map((src, i) => (
        <div key={i}>
          <img
            src={src}
            alt=""
            loading="lazy"
            className="size-[100px] rounded-20 border border-neutral-600 max-lg:size-[65px] max-sm:size-[25px]"
          />
        </div>
      ))}
    </div>
  )
}

export function IndustryHero({ entry }) {
  return (
    <div className="section">
      <SectionContainer>
        {/* `.section-head > .section-head-wrapper` with the industry icon first */}
        <div className="mx-auto flex w-full max-w-[720px] flex-col items-center gap-3 text-center">
          <IndustryIcon src={entry.icon} />
          <h1 className="text-overline uppercase text-neutral-300">{entry.overline}</h1>
          <h2 className="font-display text-display-h2 text-neutral-0 [text-wrap:balance] max-lg:text-display-h2-lg max-sm:text-display-h2-sm">
            {entry.h}
          </h2>
          <div className="max-w-[512px]">
            <p className="text-body-l text-neutral-100">{standin(`ind:${entry.slug}:hero`, entry.paraLen)}</p>
          </div>
          <div className="pt-5">
            <div className="flex items-center gap-3 max-sm:flex-col">
              <Button variant="dark-primary" href={SIGN_UP} label="Start Free Trial" iconFull className="max-sm:w-[159px] max-sm:flex-none" />
              <Button variant="dark-secondary" href="/book-demo" label="Book a Demo" icon={false} className="max-sm:w-[159px]" />
            </div>
          </div>
        </div>
        <div className="relative flex justify-between overflow-hidden pb-6 pt-16">
          <LogoRow logos={entry.carousel} />
          <LogoRow logos={entry.carousel} hidden />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#020308,rgba(2,3,8,0)_15%,rgba(2,3,8,0)_85%,#020308)]" />
        </div>
      </SectionContainer>
    </div>
  )
}

// `.industries-icon` (sits above the overline inside .section-head-wrapper)
export function IndustryIcon({ src }) {
  return (
    <div className="my-5 flex size-[60px] items-center justify-center rounded-[15px] border border-neutral-600">
      <div className="flex size-9 items-center justify-center text-neutral-300">
        <MaskIcon src={src} className="size-8" />
      </div>
    </div>
  )
}

/* ---------- §2 Testimonials ---------- */
function TestimonialCard({ t, seed }) {
  return (
    <div className="relative flex flex-col items-start overflow-hidden rounded-20 border border-neutral-700 p-12 max-lg:p-6 max-sm:p-3">
      {/* `.industry-testimonial-image-holder`: right-anchored, width follows the photo's aspect at card height */}
      <div className="absolute bottom-0 right-0 top-0 max-lg:static max-lg:w-full">
        <img
          src={t.bg}
          alt=""
          loading="lazy"
          className="h-full w-auto max-w-none max-lg:aspect-[1440/828] max-lg:h-auto max-lg:w-full max-lg:rounded-[15px] max-lg:object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#020308,rgba(2,3,9,0))] max-lg:hidden" />
      </div>
      <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#020308,rgba(2,3,9,0))] max-lg:block" />
      <div className="relative z-1 flex flex-col gap-[74px] max-lg:gap-12 max-lg:pt-6">
        <a href={t.link} target="_blank" rel="noopener noreferrer" className="transition-all duration-200 ease-[ease] hover:opacity-80">
          <img src={t.logo} alt="" className="max-w-[125px]" />
        </a>
        <div className="max-w-[60%] max-lg:max-w-none">
          <blockquote className="font-display text-display-h4 text-neutral-0">“{standin(seed, t.quoteLen - 2)}”</blockquote>
        </div>
        <div className="flex items-center gap-3">
          <img src={t.headshot} alt="" loading="lazy" className="size-16 rounded-10 object-cover" />
          <div className="flex flex-col">
            <div className="text-label-m text-neutral-0">{t.name}</div>
            <div className="text-body-s text-neutral-100">{t.role}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function IndustryTestimonials({ entry }) {
  const h = entry.testimonialsHead
  return (
    <div className="section">
      <PaddingY>
        <SectionContainer>
          <SectionHead overline={h.overline} title={h.title} body={standin(`ind:${entry.slug}:tst`, h.paraLen)} />
          <div className="flex flex-col gap-16 pt-12 max-sm:pt-10">
            {entry.testimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} seed={`ind:${entry.slug}:q${i}`} />
            ))}
          </div>
        </SectionContainer>
      </PaddingY>
    </div>
  )
}

/* ---------- §4 Ad examples (stacked deck ≤479) ---------- */
const DECK = [
  'max-sm:relative max-sm:z-3',
  'max-sm:z-2 max-sm:-mt-[752px] max-sm:scale-95',
  'max-sm:z-1 max-sm:-mt-[749px] max-sm:scale-90',
]

export function IndustryExamples({ entry }) {
  const h = entry.examplesHead
  return (
    <div className="section">
      <PaddingY>
        <SectionContainer>
          <SectionHead overline={h.overline} title={h.title} />
          <ContentMain>
            <div className="relative grid grid-cols-3 gap-4 max-lg:gap-2.5 max-sm:flex max-sm:flex-col max-sm:gap-0 max-sm:pt-[75px]">
              {entry.examples.map((ex, i) => (
                <div key={i} className={`rounded-16 bg-neutral-700 max-lg:rounded-12 ${DECK[i] || ''}`}>
                  <div className="flex items-center gap-2 p-3 max-lg:py-2 max-lg:pl-[9px] max-lg:pr-2">
                    <img src={ex.avatar} alt="" className="size-7 rounded-6 object-cover max-lg:size-6" />
                    <div className="text-label-m text-neutral-0">{ex.name}</div>
                    <div className="flex items-center gap-2">
                      <div className="size-[5px] rounded-circle bg-lime-green" />
                      <div className="text-label-s text-neutral-100">{ex.days}</div>
                    </div>
                  </div>
                  <div className="px-1 pb-1">
                    <img src={ex.img} alt="" loading="lazy" className="aspect-[9/16] w-full rounded-12 object-cover" />
                  </div>
                </div>
              ))}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(2,3,8,0),#020308)] max-sm:hidden" />
            </div>
            <div className="relative z-1 -mt-[75px] flex items-center py-2 pl-4 pr-2 max-sm:hidden">
              <div className="text-label-l text-neutral-0">
                {entry.examplesCta ?? standin(`ind:${entry.slug}:excta`, entry.examplesCtaLen)}
              </div>
              <Button variant="dark-secondary" href={SIGN_UP} label="Start Browsing" />
            </div>
          </ContentMain>
        </SectionContainer>
      </PaddingY>
    </div>
  )
}
