import ProductHero from '../components/product/ProductHero.jsx'
import CtaBanner from '../components/product/CtaBanner.jsx'
import { WhiteBlock, SectionContainer, Container } from '../components/shared/Layout.jsx'
import SectionHead from '../components/shared/SectionHead.jsx'
import SecurityGrid from '../components/shared/SecurityGrid.jsx'
import SvgInline from '../components/shared/SvgInline.jsx'
import { LeftRightRow, RowContent, RowImage } from '../components/shared/Rows.jsx'
import { VideoLightbox, useLightbox } from '../components/shared/VideoLightbox.jsx'
import LensGraphCard from '../components/lens/LensGraphCard.jsx'
import LensReporting from '../components/lens/LensReporting.jsx'
import LensIntegrations from '../components/lens/LensIntegrations.jsx'
import LensBenchmarking from '../components/lens/LensBenchmarking.jsx'
import LensEnrichment from '../components/lens/LensEnrichment.jsx'

// specs/lens-creative-analytics.md — product hero + bespoke Lens sections; no FAQ / home CTA.
// Long copy is stand-in text.
const L = '/assets/pages/lens-creative-analytics/'

const ICONS = [
  { svg: 'svg-svg-1xjghn2.svg', title: 'Automated Reporting', text: 'Reports build themselves from your ad account data every single day.' },
  { svg: 'svg-svg-1evn5gy.svg', title: 'Goal Tracking', text: 'Gamify and incentivize teams to outperform your goals.' },
  { svg: 'svg-svg-141kc2v.svg', title: 'Industry Benchmarking', text: 'Compare results with over 30,000 other advertisers.' },
  { svg: 'svg-svg-ood670.svg', title: 'Automated Inspiration', text: 'Enable agents to research, ideate and iterate your advertising.' },
]

const SEGMENTS = [
  ['67d60138b8bfe229f1ca038b_segment-art.webp', 'Art'],
  ['67d60138e9944951698b6c80_segment-books.webp', 'Books'],
  ['67d6013895de9f5015615e0f_segment-clothing.webp', 'Clothing'],
  ['67d6013837ff54b81dc90b9b_segment-electronics.webp', 'Electronics'],
  ['67d60139c5c4b283a4e32e32_segment-automotive.webp', 'Automative'],
  ['67d60138e9944951698b6c9a_segment-baby.webp', 'Baby'],
  ['67d60139e9d19b9bec6f9da3_segment-toys-&-hobbies.webp', 'Toys & Hobbies'],
  ['67d60138c432e9224ddd91c3_segment-beauty.webp', 'Beauty'],
  ['67d601396d4c7e747e89fdec_segment-food-&-beverage.webp', 'Food & Beverages'],
  ['67d601396d4c7e747e89fe11_segment-sporting-goods.webp', 'Sporting Goods'],
  ['67d60138178881123c43aaac_segment-fashion.webp', 'Fashion'],
  ['67d60138748485a56d5812b5_segment-accessories.webp', 'Accessories'],
  ['67d60138d1a411f5bd2fa9a8_segment-pets.webp', 'Pets'],
  ['67d60139a79f0c901c5db349_segment-home-&-garden.webp', 'Home & Garden'],
  ['67d601396d4c7e747e89fdf3_segment-health.webp', 'Health'],
].map(([img, label]) => ({ img, label }))

const BADGES = [
  { label: '> $1m', tag: 'GMV' },
  { label: '<$100', tag: 'AOV', green: true },
  { label: '$1m - $10m', tag: 'GMV' },
  { label: '>$100', tag: 'AOV', green: true },
  { label: '> $10m', tag: 'GMV' },
]

// Homepage .is-N positions (CLONE_SPEC §5.2 / Collaboration.jsx)
const LEFT = [
  { pos: 'top-[16%] left-1/2 max-lg:left-[58%] max-md:top-[12%] max-md:left-[60%] max-sm:top-[12%]', label: 'Persona Targeting', img: '67d5f04eed5716afa723bf49_tooltip-2.webp', text: 'Find out which audiences each creative is really speaking to.' },
  { pos: 'top-[45%] left-[33%] max-lg:left-[45%] max-md:left-1/2 max-sm:top-[44%] max-sm:left-1/2', label: 'Hook Transcription', img: '67d5f04e6bfc757685daf9fd_tooltip-1.webp', text: 'Automatically transcribe and identify top performing hooks.' },
  { pos: 'top-[76%] left-1/2 max-lg:left-[58%] max-md:left-[60%]', label: 'Top Themes', img: '67d5f04fa76aa2b2af723a0e_tooltip-3.webp', text: 'See what themes and styles you should double down on.' },
]
const RIGHT = [
  { pos: 'top-[24%] right-[15%] max-md:top-[45%] max-md:right-[40%] max-sm:top-[39%] max-sm:right-[36%]', label: 'Manual Rating', img: '67d5f04ea79f0c901c510881_tooltip-4.webp', text: 'Level up your creative organization with internal ratings.' },
  { pos: 'top-[10%] right-[40%] max-md:right-1/2', label: 'Custom Tagging', img: '67d5f04e5057b3fadc63d8f1_tooltip-5.webp', text: 'Quickly add custom tags by creative ID for report creation.' },
  { pos: 'top-1/2 right-[26%] max-md:hidden', label: 'Video Transcription', img: '67d5f04f5057b3fadc63d92b_tooltip-6.webp', text: 'All videos are automatically transcribed with AI.' },
  { pos: 'top-[77%] right-[40%] max-md:right-1/2 max-sm:top-[70%]', label: 'Facial Recognition', img: '67d5f04edef0ff09efcaf290_tooltip-7.webp', text: 'See what creators in influencers perform across your entire account.' },
]

function WatchVideo() {
  const { open, trigger, close } = useLightbox()
  return (
    <div className="absolute inset-0 z-2 flex items-center justify-center max-sm:pt-12">
      <a {...trigger} className="-mt-[120px] max-w-full max-lg:-mt-[95px] max-sm:mb-[25%] max-sm:mt-0 max-sm:scale-75">
        <div className="flex items-center justify-start gap-2.5 rounded-16 bg-black-84 p-2 backdrop-blur-[5px] transition-all duration-200 hover:bg-black-90">
          <div className="flex size-[52px] items-center justify-center rounded-8 bg-white-12">
            <div className="flex size-6 items-center justify-center">
              <img className="size-5" src={`${L}svg-icon-medium-1aj97ch.svg`} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-start pr-1 max-sm:hidden">
            <div className="text-label-s text-white">Watch Video</div>
            <div className="flex-1 text-neutral-100">
              <div className="text-body-s">Learn more about Lens.</div>
            </div>
          </div>
        </div>
      </a>
      {open && <VideoLightbox url="https://www.youtube.com/watch?v=93_VRP1c_a4" title="Lens video" onClose={close} />}
    </div>
  )
}

export default function Lens() {
  return (
    <>
      <ProductHero
        overline="LENS"
        overlineInside
        title="Performance insights through a creative lens."
        subtitle="Connect your ad account and see which creative is driving results, with reports your team can read at a glance."
        icon={{
          webm: `${L}animated-icon-lens.webm`,
          mov: `${L}animated-icon-lens.mov`,
          img: `${L}682f9f725170de3b3258d310_pi-lens-hq.webp`,
          alt: 'Lens app icon',
        }}
        screen={{
          mp4: `${L}68338afa127062351d6e99da_product-video-lens-transcode.mp4`,
          webm: `${L}68338afa127062351d6e99da_product-video-lens-transcode.webm`,
          poster: `${L}68338afa127062351d6e99da_product-video-lens-poster-00001.jpg`,
        }}
        previewChildren={<WatchVideo />}
      />

      {/* S2 — white block: solution icons, "Axe the ad spend tax." graphs, creative reporting */}
      <WhiteBlock>
        <SectionContainer>
          <div className="grid grid-cols-4 gap-4 py-20 max-md:grid-cols-2 max-md:gap-y-10 max-sm:grid-cols-1 max-sm:py-12">
            {ICONS.map((c) => (
              <div key={c.title} className="flex flex-col items-center justify-start gap-3 px-2">
                <div className="flex size-6 items-center justify-center">
                  <img className="size-6" src={`${L}${c.svg}`} alt="" />
                </div>
                <div className="flex flex-col gap-1 text-center">
                  <h3 className="text-label-m text-solid-700">{c.title}</h3>
                  <p className="text-body-m text-solid-500 [text-wrap:pretty]">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto flex max-w-[940px] flex-col gap-9 py-20 text-center max-md:max-w-[480px] max-md:pb-16 max-sm:gap-8 max-sm:py-10">
            <h2 className="font-display text-display-h3 text-solid-900 [text-wrap:pretty]">Axe the ad spend tax.</h2>
            <div className="grid grid-cols-2 gap-4 self-stretch max-md:grid-cols-1">
              <LensGraphCard
                title="Other Analytics Tools"
                text="Your performance should not mean you have to pay more."
                svgs={['svg-svg-s6cry0.svg', 'svg-svg-s7bqj5.svg']}
                legend={[
                  { label: 'Ad Spend', dot: 'bg-teal' },
                  { label: 'Analytics Cost', dot: 'bg-red' },
                ]}
              />
              <LensGraphCard
                lens
                title="Lens Analytics"
                text="One flat price that stays the same however much your ad spend grows."
                svgs={['svg-svg-pjioip.svg', 'svg-svg-i20xti.svg', 'svg-svg-yl6kl9.svg']}
                legend={[
                  { label: 'Ad Spend', dot: 'bg-white' },
                  { label: 'Lens Cost', dot: 'bg-rainbow-45' },
                ]}
              />
            </div>
            <div className="mx-auto max-w-[512px] [text-wrap:pretty]">
              <div className="text-body-m text-solid-600">
                Spend more on ads without paying more for reporting. See our{' '}
                <a href="/pricing" className="font-medium text-solid-900">
                  pricing
                </a>{' '}
                for the plan details and limits.
              </div>
            </div>
          </div>
          <LensReporting
            overline="CREATIVE REPORTING"
            title="Beautiful, shareable white-labeled reports."
            body="Put your own logo on every report and send clients a link they can open anywhere, with the creative shown next to its numbers."
            panes={[
              {
                avatar: `${L}6835e653eb1107c0c2620fbf_iEUZ_Xb2_400x400.avif`,
                avatarAlt: 'Daniel Bogulewski headshot',
                quote:
                  '“Before this we were pasting screenshots into slides every week. Now the report is always current, the creative sits right next to the numbers, and our team can see which concepts are carrying the account without digging through the ads manager. It has changed how we run our weekly creative reviews and made those meetings much shorter.”',
                name: 'DANIEL BOGULEWSKI',
                role: 'CREATIVE DIRECTOR @ VIASOX',
                mockup: `${L}681132c3a80b172817826701_Viasox - Report - Website.avif`,
                mockupAlt: 'ad creative report mockup',
              },
              {
                avatar: `${L}6811334e209446a735395e88_TBGAMNA75-U04K4GJ1PS6-840aeda5bec0-512.avif`,
                avatarAlt: 'Luis Morales headshot',
                quote:
                  '“We send every client a live report link instead of a deck. They can see the creative and the results side by side, and conversations about what to make next are a lot more focused than they used to be.”',
                name: 'Luis Morales',
                role: 'Co-Founder @ Growth Collective',
                mockup: `${L}6811336e458136a0c19570fc_Growth Collective - Report - Website.avif`,
                mockupAlt: 'ad creative report mockup',
              },
            ]}
          />
        </SectionContainer>
      </WhiteBlock>

      <LensIntegrations
        overline="INTEGRATIONS"
        title="Lightning fast insights directly from the source"
        body="Connect your ad platforms once and reports stay in sync automatically, so the numbers you share are always the latest ones."
        left={['svg-svg-1vbif87.svg', 'svg-svg-olxbga.svg', 'svg-svg-1hx56xh.svg']}
        right={['svg-svg-wpumvq.svg', 'svg-svg-rfloe7.svg', 'svg-svg-1k1s7jn.svg']}
        tabs={[
          { label: 'Creative Test Analysis', icon: 'svg-icon-20-yy4sag.svg', mockup: `${L}68111d8e2cd08ba43e25c8f2_Creative Tests - Mockup - 2.avif`, alt: 'ad creative test dashboard' },
          { label: 'Group Comparison', icon: 'svg-icon-20-1m46g5i.svg', mockup: `${L}68111efbb122dcabfed9eb77_Influencer Comparison - Mockup - 2.avif`, alt: 'group comparison dashboard' },
          { label: 'Trend Analysis', icon: 'svg-svg-1uan6ha.svg', mockup: `${L}68111efb4aca9a2da3e5b251_Trend Analysis - Mockup - 2.avif`, alt: 'trend analysis dashboard' },
        ]}
      />

      {/* S4 — white block: contextual reports + benchmarking marquees */}
      <WhiteBlock>
        <div className="flex flex-col gap-[180px] py-[108px] max-md:gap-[108px] max-sm:gap-24 max-sm:pb-8 max-sm:pt-20">
          <SectionContainer>
            <SectionHead
              theme="light"
              overline="CONTEXTUAL AD REPORTS"
              title="Performance storytelling beyond a pretty picture"
              body="Reports that explain why an ad worked, not just how many clicks it got, in language anyone can follow."
            />
          </SectionContainer>
          <SectionContainer>
            <LeftRightRow
              media={<RowImage src={`${L}67eeea66467dd9874bef129c_game-illo1.webp`} alt="Winning ads illustration, Gamification by Lens" />}
            >
              <RowContent
                overline="GAMIFICATION"
                title="Gamify and incentivize team reporting."
                body="Set goals for each creator or strategist, track who is producing the winning ads and celebrate the results together as a team every week."
              />
            </LeftRightRow>
          </SectionContainer>
          <SectionContainer>
            <LeftRightRow
              mediaFirst={false}
              media={<RowImage src={`${L}67eeea669886a4ee84fc6c9c_game-illo2.webp`} alt="Benchmarks Ad Reports illustration, Gamification by Lens" />}
            >
              <RowContent
                overline="BENCHMARKS"
                title="Compare your analytics to over 20,000+ advertisers."
                body="See how your hook rates, click rates and costs stack up against brands of a similar size in your industry."
              />
            </LeftRightRow>
          </SectionContainer>
        </div>
        <LensBenchmarking heading="OVER 100 BENCHMARKING SEGMENTS" segments={SEGMENTS} badges={BADGES} />
      </WhiteBlock>

      {/* S5 — AI metadata rays + security */}
      <section>
        <div className="flex flex-col gap-[108px] overflow-hidden py-[108px] max-lg:gap-10 max-sm:py-20">
          <LensEnrichment
            overline="AI METADATA"
            title="Trade manual work for automated enrichment."
            body="Every ad is tagged, transcribed and sorted for you as it comes in, so the details you need for reporting are already filled in."
            left={LEFT}
            right={RIGHT}
          />
          <Container>
            <div className="mx-auto flex max-w-[1152px] flex-col gap-12">
              <SectionHead
                overline="SECURITY"
                title="Creative data secured under lock & key"
                size="h3"
                body="Control exactly who can open your reports, see where they are viewed from and keep internal data internal."
                bodySize="m"
              />
              <SecurityGrid
                plainText
                bodyClass="h-80"
                cards={[
                  { icon: <SvgInline src={`${L}svg-svg-j5qqo8.svg`} className="size-6" />, title: 'Password Protection', img: `${L}67d5c49be9d19b9bec42f1dc_password-protection.webp`, alt: 'password graphic image', text: 'Avoid your creative data leaking through unsecured report links.' },
                  { icon: <SvgInline src={`${L}svg-svg-sgy1nb.svg`} className="size-6" />, title: 'IP Tracking', img: `${L}67d5c49b6bfc757685b68eac_ip-tracking.webp`, alt: 'IP tracking graphic', text: 'See who’s viewing your reports and from where.' },
                  { icon: <SvgInline src={`${L}svg-svg-167k2wx.svg`} className="size-6" />, title: 'Internal Protection', img: `${L}67d5c49c9a3768e0b81621f5_internal-protection.webp`, text: 'Keep sensitive account numbers visible only to the people on your own team.' },
                ]}
              />
            </div>
          </Container>
        </div>
      </section>

      <CtaBanner
        body="Try every feature free for seven days. Connect an ad account, build a report and share it with your team or a client before you decide."
        video={`${L}cta-lens.mp4`}
        iconImg="/assets/682f93b43a94db00dbc45367_iso-lens.webp"
        iconAlt="isometric glass ball logo"
      />
    </>
  )
}
