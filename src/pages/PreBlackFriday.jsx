// /pre-black-friday — specs/pre-black-friday.md (Unicorn Studio hero stand-in, API pricing, FAQ; no CTA)
import { Button } from '../components/shared.jsx'
import { Container } from '../components/shared/Layout.jsx'
import ApiPricing from '../components/shared/ApiPricing.jsx'
import Faq from '../components/shared/Faq.jsx'
import { standin } from '../components/misc/copy.js'
import { PBF_FAQS } from '../components/misc/pageData.js'

const FAQS = PBF_FAQS.map((f, i) => {
  const n = f.aBlocks.split(' ').length
  return {
    q: f.q,
    a: (
      <>
        {Array.from({ length: n }, (_, k) => (
          <p key={k}>{standin(`pbf-faq-${i}-${k}`, Math.round(f.aLen / n))}</p>
        ))}
      </>
    ),
  }
})

// `a.home-hero-announcement.bounties`
function Announcement() {
  return (
    <a
      href="/bounties/build-share-a-workflow-using-the-foreplay-api"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2.5 overflow-hidden rounded-10 bg-neutral-700 py-[5px] pl-2.5 pr-[5px] no-underline backdrop-blur-[2px] transition-all duration-200 ease-[ease] hover:bg-neutral-600 max-sm:gap-2 max-sm:py-2 max-sm:pl-2.5 max-sm:pr-3"
    >
      <div className="text-label-s text-neutral-0 max-sm:text-[12px]">Bounties</div>
      <div className="h-3 w-px rounded-2 bg-neutral-500" />
      <div className="text-label-s text-neutral-0 max-sm:text-[12px]">Win $5,000 by Building with the API</div>
      <div className="rounded-[7px] bg-neutral-800 px-2 py-[5px] text-overline uppercase text-neutral-0">Ends Oct 31</div>
    </a>
  )
}

export default function PreBlackFriday() {
  return (
    <>
      <section id="product-hero-section" className="relative">
        <Container>
          <div className="pt-2.5">
            <div className="relative py-[50px]">
              {/* `.us-bg > .us-canvas`: Unicorn Studio WebGL scene → CSS gradient stand-in (no third-party script) */}
              <div aria-hidden="true" className="misc-unicorn-standin absolute inset-0" />
              <div className="relative z-1 flex justify-center">
                <div className="flex max-w-[573px] flex-col items-center gap-4 text-center max-sm:gap-3">
                  <Announcement />
                  <h1 className="font-display text-display-h2 text-neutral-0 max-lg:text-display-h2-lg max-sm:text-display-h2-sm">
                    Capture the Q4 Demand with winning creative
                  </h1>
                  <div className="max-w-lg">
                    <p className="text-body-l text-neutral-100">{standin('pbf-hero', 213)}</p>
                  </div>
                  <div className="flex items-center gap-3 max-sm:w-full max-sm:flex-col">
                    <Button variant="dark-primary" href="https://app.foreplay.co/sign-up" label="Claim Offer" iconFull className="max-sm:w-full" />
                    <Button variant="dark-secondary" href="#api-pricing" label="View Q4 Pricing" className="max-sm:w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ApiPricing
        head={{
          title: 'Why getting into Foreplay before the holiday is crucial',
          size: 'h3',
          body: standin('pbf-pricing', 108),
        }}
      />

      <Faq
        title="Questions about the API?"
        body="Most common questions about the Foreplay API pricing and features."
        items={FAQS}
      />
    </>
  )
}
