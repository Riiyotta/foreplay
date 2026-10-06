import { Button } from '../components/shared.jsx'
import { ProductHeroShell } from '../components/product/ProductHero.jsx'
import { WhiteBlock, SectionContainer } from '../components/shared/Layout.jsx'
import SectionHead from '../components/shared/SectionHead.jsx'
import { GridRow, LeftRightRow, RowContent, RowImage } from '../components/shared/Rows.jsx'
import ApiPricing from '../components/shared/ApiPricing.jsx'
import Faq from '../components/shared/Faq.jsx'

// specs/api.md — API hero (parallax shell), white block of 3 product API rows, #api-pricing credit cards +
// Enterprise card, FAQ. S3 (#lens-hero-section, 0px tall twinkling canvas) is a no-op on the live site
// and is omitted. Long copy is stand-in text.
const A = '/assets/pages/api/'

// `.api-product-icon > .footer-product-icon.sprite-image` — first frame of the 160×160 nav sprite sheet
function ProductIcon({ sheet }) {
  return (
    <div className="mb-2.5 size-[50px]">
      <div
        className="size-11 bg-[length:auto_100%] bg-[position:0_0] bg-no-repeat max-lg:bg-cover"
        style={{ backgroundImage: `url("${A}nav-spritesheet-160x160-${sheet}.png")` }}
      />
    </div>
  )
}

const FAQ = [
  { q: 'Do credits carry over?', a: <p>Unused credits roll into the next billing period for as long as your plan stays active, so nothing is lost.</p> },
  { q: 'How does pro-rated billing work?', a: <p>If you upgrade partway through a cycle, you only pay the difference for the days that remain until your next renewal.</p> },
  {
    q: 'When do my credits renew?',
    a: <p>Credits included with your plan renew on your billing date each month. Additional credit packs are added straight away and renew with your plan if you keep them on your subscription.</p>,
  },
  {
    q: 'How are credits calculated?',
    a: (
      <>
        <p>Each request uses credits based on the number of records it returns.</p>
        <p>For example,</p>
        <p>a search that returns 50 ads uses 50 credits from your balance.</p>
        <p>Requests that return no results do not use any credits, and you can see your remaining balance in your dashboard.</p>
      </>
    ),
  },
  {
    q: 'When will my credits be added?',
    a: <p>Credits are added to your account as soon as the payment goes through, and you can start making requests right away with the new balance.</p>,
  },
]

export default function Api() {
  return (
    <>
      <ProductHeroShell
        dots={false}
        sticky={
          <>
            <img className="w-[88px] pb-[25px]" src={`${A}68b700a67c674a39df0d4960_api-icon-3.webp`} alt="foreplay api icon" loading="lazy" />
            <div className="flex flex-col items-center gap-7 pb-[42px] max-sm:relative max-sm:gap-6 max-sm:pb-6">
              <h1 className="text-overline uppercase text-neutral-300">API</h1>
              <div className="flex max-w-[900px] flex-col items-center gap-4 max-sm:gap-3">
                <h2 className="hero-title-fill font-display text-display-h1 text-hero-title [text-wrap:balance] max-md:text-display-h1-md max-sm:text-display-h1-sm">
                  Power AI agents & workflows with competitor ad data
                </h2>
                <div className="max-w-[512px]">
                  <p className="text-body-l text-neutral-100">Plug enriched ad data into your own tools, agents and automations.</p>
                </div>
              </div>
              <div className="relative z-2 flex items-center gap-3 max-sm:grid max-sm:w-full max-sm:grid-cols-1">
                <Button variant="dark-primary" href="https://app.foreplay.co/sign-up" label="Start Free Trial" iconFull />
                <Button variant="dark-secondary" href="#api-pricing" label="View Pricing" />
              </div>
              <div className="flex gap-3 max-sm:flex-col">
                {[
                  { href: 'https://chatgpt.com/g/g-68b06c9529548191b5d25556e66a272a-foreplay-api-docs', img: '68b6edc929653fab1d6de4d0_Screenshot 2025-08-28 at 22.36.37 2.avif', alt: 'foreplay api docs chat', title: 'Docs GPT', text: 'Chat with the Foreplay API Docs.' },
                  { href: 'https://public.api.foreplay.co/docs', img: '68b6edc96b8314f18b566e33_openai 1.avif', alt: 'foreplay api docs gear', title: 'Technical Docs', text: 'Full API endpoint documentation.' },
                ].map((d) => (
                  <a
                    key={d.title}
                    href={d.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-start gap-2.5 rounded-20 border border-neutral-700 bg-background py-2 pl-[9px] pr-4 text-body transition-all duration-200 hover:border-neutral-500 hover:bg-neutral-800"
                  >
                    <img className="size-14" src={`${A}${d.img}`} alt={d.alt} loading="lazy" />
                    <div className="flex flex-col items-start max-sm:text-left">
                      <div className="text-label-m text-body">{d.title}</div>
                      <div className="flex-1 text-neutral-100">
                        <div className="text-body-m">{d.text}</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex flex-col items-center gap-2.5">
                <div className="flex gap-1.5">
                  <div className="text-label-m text-white">Integrations</div>
                  <div className="flex-1 text-neutral-100">
                    <div className="text-body-m">Easily connect with...</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  {[
                    ['68b6ef420e259ffe76d23e1a_Group 29.webp', 'n8n integration'],
                    ['68b6ef42c9ad43c54bb3080f_Group 26.avif', 'zapier integration'],
                    ['68b6ef42db6dce89b740730b_Group 25.webp', ''],
                    ['68b6ef4232d52577c91c5b8b_Group 27.avif', ''],
                    ['68b6ef4229653fab1d6ebc37_Group 28.avif', ''],
                  ].map(([img, alt]) => (
                    <a key={img} href="#" className="relative text-neutral-100">
                      <img className="size-11" src={`${A}${img}`} alt={alt} loading="lazy" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </>
        }
      />

      <WhiteBlock>
        <SectionContainer>
          <div className="flex flex-col items-start justify-center gap-[72px] py-20 max-lg:py-16 max-sm:pb-6 max-sm:pt-10">
            <div className="grid w-full grid-cols-1 gap-4 max-sm:gap-6">
              <SectionHead
                align="left"
                theme="light"
                title="Extract and leverage enriched advertising data"
                size="h3"
                body="Pull ads, transcripts, landing pages and metadata into any workflow through simple, documented endpoints."
                bodyClass="text-solid-600 [text-wrap:balance]"
                bodyMax=""
              />
            </div>
          </div>
        </SectionContainer>
        <SectionContainer>
          <div className="flex flex-col gap-20">
            <GridRow img={`${A}681bc98f0887a5dda006dfe7_spyder-api.webp`} alt="competitor ads api illustration">
              <RowContent
                above={<ProductIcon sheet="spyder" />}
                title="Spyder API"
                titleAs="h2"
                body="Pull every ad a tracked brand is running, along with launch dates, landing pages and transcripts, into your own tools."
              />
            </GridRow>
            <LeftRightRow
              mediaFirst={false}
              media={<RowImage src={`${A}681bc98fb1fefc751990ef9a_discovery-api.webp`} alt="ad search api illustration" />}
            >
              <RowContent
                above={<ProductIcon sheet="discovery" />}
                title="Discovery API"
                titleAs="h2"
                body="Search the full ad library by keyword, niche, format or platform and return structured results to any app."
              />
            </LeftRightRow>
            <GridRow img={`${A}681bc98f48f11604a4a60a1e_swipe-file-api.webp`} alt="foreplay api illustration">
              <RowContent
                above={<ProductIcon sheet="library" />}
                title="Swipe File API"
                titleAs="h2"
                body="Read and organize the ads your team has saved, including boards, tags and notes, programmatically."
              />
            </GridRow>
          </div>
          <div className="py-12 max-lg:py-8 max-md:py-6" />
        </SectionContainer>
      </WhiteBlock>

      <ApiPricing
        head={{
          overline: 'API PRICING',
          title: 'Additional API Credit Pricing',
          titleAs: 'h1',
          body: (
            <>
              Need more requests? Add a credit pack on top of the credits included in your{' '}
              <a href="/pricing" className="text-solid-100">
                base plans
              </a>
              .
            </>
          ),
        }}
      />

      <Faq
        title="Questions about the API?"
        body="Most common questions about the Foreplay API pricing and features."
        items={FAQ}
      />
    </>
  )
}
