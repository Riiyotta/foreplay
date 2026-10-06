import { Button } from '../components/shared.jsx'
import { Container, SectionContainer, WhiteBlock } from '../components/shared/Layout.jsx'
import SectionHead from '../components/shared/SectionHead.jsx'
import EmbedPlaceholder from '../components/shared/EmbedPlaceholder.jsx'
import LogoStrip from '../components/shared/LogoStrip.jsx'

// specs/book-demo.md — booking hero (APAC bar + Cal.com inline placeholder), homepage logo strip,
// white social-proof block with rating tiles + Senja wall placeholder. Long copy is stand-in text.
const B = '/assets/pages/book-demo/'

const RATINGS = [
  { icon: 'svg-demo-socialproof-icon-2-1hwynxo.svg', score: '4.9/5', name: 'G2 REVIEWS' },
  { icon: 'svg-demo-socialproof-icon-2-1lzyi7t.svg', score: '4.8/5', name: 'CHROME' },
  { icon: 'svg-demo-socialproof-icon-2-1q7zp9q.svg', score: '4.8/5', name: 'CAPTERRA' },
]

export default function BookDemo() {
  return (
    <>
      <Container>
        <div className="flex flex-col items-center pt-2.5 text-center max-md:pt-16 max-sm:py-6">
          <div className="flex w-full max-w-[900px] flex-col items-center pt-2.5 max-sm:py-6">
            <div className="flex w-full flex-col items-center gap-7 pb-[42px] max-sm:relative max-sm:gap-6 max-sm:pb-6">
              <div className="flex max-w-[900px] flex-col items-center gap-4 max-sm:gap-3">
                <div className="text-white">
                  <div className="mb-2.5">
                    <h1 className="text-overline uppercase text-neutral-100">BOOK A DEMO</h1>
                  </div>
                  <h1 className="font-display text-display-h2 max-lg:text-display-h2-lg max-sm:text-display-h2-sm">
                    1:1 Creative Solutions Call
                  </h1>
                </div>
                <div className="text-body-l text-neutral-50">
                  Book a call with our team to walk through your current creative process and leave with a clear plan for
                  researching, briefing and reporting on ads.
                </div>
              </div>
              <div className="flex w-full flex-col gap-5">
                <div className="relative -order-[9999] flex w-full items-center overflow-hidden rounded-12 border border-neutral-700 p-5 max-sm:order-[9999] max-sm:flex-col max-sm:items-start max-sm:justify-start max-sm:gap-5 max-sm:text-center">
                  <div className="relative z-1 flex flex-1 flex-col items-start max-sm:text-center">
                    <div className="text-label-m text-white">Based in a APAC Country?</div>
                    <div className="text-body-m text-neutral-100">Request a call in your timezone</div>
                  </div>
                  <Button variant="dark-primary" href="/apac-demo" label="Request Call" iconFull className="flex-none" />
                  <img
                    className="absolute right-0 top-0 z-0 h-[100px] opacity-20 max-sm:h-[150px] max-sm:opacity-9"
                    src={`${B}6a3c180856026e0546089941_apac-flags-2.webp`}
                    alt="apac flags"
                    loading="lazy"
                  />
                </div>
                {/* Cal.com inline embed (team/foreplay/foreplay-demo-action-plan, column_view, dark) — not loaded */}
                <EmbedPlaceholder
                  className="cal-inline-container h-[480px] w-full overflow-scroll rounded-12 max-sm:h-[1019px]"
                  label="Book a time with the Foreplay team (Cal.com scheduler)"
                  href="https://cal.com/team/foreplay/foreplay-demo-action-plan"
                  linkLabel="Open the booking page"
                />
              </div>
            </div>
          </div>
          <LogoStrip />
        </div>
      </Container>

      <WhiteBlock>
        <SectionContainer>
          <div>
            <div className="flex flex-col items-start justify-center gap-[72px] py-20 max-lg:py-16 max-sm:pb-6 max-sm:pt-10">
              <div className="grid w-full grid-cols-2 gap-4 max-lg:grid-cols-1 max-sm:gap-6">
                <SectionHead
                  align="left"
                  theme="light"
                  title="Loved by brands and agencies globally."
                  size="h3"
                  body="Thousands of creative teams rate us highly across the review sites."
                  bodyClass="text-solid-600 [text-wrap:balance]"
                  bodyMax=""
                />
                <div className="grid grid-cols-3 gap-4 max-md:gap-2 max-sm:grid-cols-1">
                  {RATINGS.map((r) => (
                    <a
                      key={r.name}
                      href="#"
                      className="flex min-w-36 max-w-full flex-col justify-center rounded-12 p-1 shadow-ring-card-inset"
                    >
                      <div className="flex flex-1 flex-col items-center justify-center gap-3 max-md:gap-0 max-md:pb-2 max-md:pt-1">
                        <img className="size-10" src={`${B}${r.icon}`} alt="" />
                        <div className="flex items-center justify-center gap-0.5 text-solid-600">
                          <img className="size-5" src={`${B}svg-svg-5t7i94.svg`} alt="" />
                          <div className="text-[19.2px] font-semibold leading-6 tracking-[-0.18px]">{r.score}</div>
                        </div>
                      </div>
                      <div className="rounded-8 bg-solid-25 px-2 py-1.5 text-center text-solid-900">
                        <div className="text-overline uppercase">{r.name}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Senja testimonial wall (widget c4cbc78b-ee64-4ff7-827d-24eadb3f51c7) — not loaded */}
            <EmbedPlaceholder
              theme="light"
              className="h-[3693px] w-full rounded-12 max-lg:h-[3492px] max-sm:h-[10549px]"
              label="Customer testimonial wall (Senja)"
              href="/reviews"
              linkLabel="View the wall of love"
            />
          </div>
        </SectionContainer>
      </WhiteBlock>
    </>
  )
}
