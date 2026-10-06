import ProductHero from '../components/product/ProductHero.jsx'
import SolutionCards from '../components/product/SolutionCards.jsx'
import ProductTabs from '../components/product/ProductTabs.jsx'
import FeatureSection from '../components/product/FeatureSection.jsx'
import CtaBanner from '../components/product/CtaBanner.jsx'
import Faq from '../components/shared/Faq.jsx'
import SecurityGrid from '../components/shared/SecurityGrid.jsx'
import SectionHead from '../components/shared/SectionHead.jsx'
import { Container, SectionContainer, PaddingY, ContentMain } from '../components/shared/Layout.jsx'
import CTA from '../components/CTA.jsx'

// specs/spyder-ad-spy.md — product template variant: S3 is a 3-card `.lens-security-grid`,
// S4 has 5 stacked tabs + `.spyder-description`, S5 cards use hover-scrubbed Lottie media.
const P = '/assets/pages/spyder-ad-spy/'
const icon = (f) => <img src={`${P}${f}`} alt="" className="size-6" />

const FAQ = [
  {
    q: 'How long can I access the tracked ads?',
    a: <p>For as long as you keep the brand tracked. Every ad we capture stays in your account, including ads the advertiser has since paused or removed.</p>,
  },
  {
    q: 'How does Spyder help with Facebook ad spying?',
    a: <p>Spyder checks the ad library for the brands you follow and saves each new ad automatically, so you get a complete timeline without searching by hand.</p>,
  },
  {
    q: 'What is Spyder Meta Ad Spy?',
    a: <p>Spyder is a competitor tracking tool. Add a brand once and it keeps collecting their ads, landing pages and launch dates in the background for you.</p>,
  },
  {
    q: 'Will the ads expire like in Facebook Ad Library?',
    a: <p>No. Ads are stored on our side, so they remain available after the brand stops running them.</p>,
  },
  {
    q: 'Will Spyder track instagram ads in addition to Facebook Ads?',
    a: <p>Yes. Ads running on Instagram placements are captured alongside Facebook ads.</p>,
  },
  {
    q: 'How many brand’s ads can I scrape?',
    a: <p>The number of tracked brands depends on your plan. You can swap brands in and out at any time.</p>,
  },
]

export default function Spyder() {
  return (
    <>
      <ProductHero
        overline="SPYDER META AD SPY"
        title="Competitor Ad Tracking & Insights on Autopilot"
        subtitle="Follow any brand and every new ad they launch is saved for you, along with landing pages and run times."
        icon={{
          webm: `${P}animated-icon-spyder.webm`,
          mov: `${P}animated-icon-spyder.mov`,
          img: `${P}682f9f72ef4d27826a8d2aa0_pi-spyder-hq.webp`,
          alt: 'spyder ad spy app icon',
        }}
        screen={{
          mp4: `${P}68338b3e839a771394bbc430_product-video-spyder-transcode.mp4`,
          webm: `${P}68338b3e839a771394bbc430_product-video-spyder-transcode.webm`,
          poster: `${P}68338b3e839a771394bbc430_product-video-spyder-poster-00001.jpg`,
        }}
      />
      <SolutionCards
        title="Why choose creative-first ad spying?"
        body="Most spy tools stop at numbers. Seeing the actual creative a competitor runs tells you far more about strategy."
        before={{ text: 'Antiquated ad spy tools, broken links and limited data.', img: `${P}682e02bbc356a16526b39201_before-spyder.webp` }}
        after={{ text: 'Track any brand and analyze their creative strategy.', img: `${P}682e02bbb206d4bd3ae644fe_after-spyder.webp` }}
      />
      {/* S3 — USE CASES as a 3-card security grid */}
      <div>
        <PaddingY>
          <ContentMain>
            <Container>
              <SectionHead
                overline="USE CASES"
                title="Creative-first ad spying"
                body="Let the tracking run in the background and spend your time on the part that matters: the creative."
              />
            </Container>
            <SectionContainer>
              <ContentMain>
                <SecurityGrid
                  cards={[
                    {
                      icon: icon('svg-svg-kn8jdt.svg'),
                      title: '24/7 Ad Library Scraper',
                      img: `${P}6679734bf7cb3c37f5ebdf64_24-7-scraper.webp`,
                      alt: 'meta ad library scraper',
                      text: 'New ads from every brand you follow are collected around the clock for you.',
                    },
                    {
                      icon: icon('svg-svg-2n663l.svg'),
                      title: 'Automated Competitor Reporting',
                      img: `${P}667b034872fc6e86638d70fc_share-report-2.webp`,
                      alt: 'competitor ad reports',
                      text: 'Automatically receive a competitor summary delivered directly to your inbox.',
                    },
                    {
                      icon: icon('svg-svg-j4hkwa.svg'),
                      title: 'Discover Winning Hooks',
                      img: `${P}6679734b836c41d2742ab24b_identify-hooks.webp`,
                      alt: 'winning ad hooks',
                      text: 'Read the opening lines of every tracked video ad to spot the hooks brands reuse.',
                    },
                  ]}
                />
              </ContentMain>
            </SectionContainer>
          </ContentMain>
        </PaddingY>
      </div>
      <ProductTabs
        variant="spyder"
        extension={false}
        title="Leveraging competitor insights"
        body="Go beyond a list of ads. See how brands test, which pages they send traffic to and how their creative evolves."
        tabs={[
          {
            label: 'Real-Time Analysis',
            icon: icon('svg-product-page-tab-svg-19vsi34.svg'),
            img: `${P}667ad492136c1f374d053bee_Alaysis Screenshot.webp`,
            alt: 'ad library scraper screenshot',
            description: 'See how many ads a brand has live right now, which formats they lean on and how quickly they are launching new ones.',
          },
          {
            label: 'Creative Tests',
            icon: icon('svg-product-page-tab-svg-1ljbnb3.svg'),
            img: `${P}667ad49024ca4e1a0e253562_Creative Tests Screenshot.webp`,
            alt: 'creative tests screenshot',
            description: 'Ads launched together are grouped as a test, so you can see which variations survived and which were cut.',
          },
          {
            label: 'Landing Page Archive',
            icon: icon('svg-product-page-tab-svg-1gkfig0.svg'),
            img: `${P}667ad492e7894210e2a47060_Landing Pages Screenshot.webp`,
            alt: 'landing pages screenshot',
            description: 'Every destination URL is captured, so you can review the pages competitors send paid traffic to.',
          },
          {
            label: 'Hook Export',
            icon: icon('svg-product-page-tab-svg-1srbybv.svg'),
            img: `${P}667ad4903b6a22bf3270a7fa_Hooks Screenshot.webp`,
            alt: 'hooks screenshot',
            description: 'Pull the opening lines from a brand’s video ads into one list and export them to use in your own planning.',
          },
          {
            label: 'Historical Timeline',
            icon: icon('svg-product-page-tab-svg-avki79.svg'),
            img: `${P}667ad4904c410615fa47a384_Timeline Screenshot.webp`,
            alt: 'timeline screenshot',
            description: 'Scroll back through a brand’s ad history on a timeline and see how their creative changed season by season.',
          },
        ]}
      />
      <FeatureSection
        spyder
        title="Spyder Ad Spy Features"
        body="Tracking, reporting and history for every competitor you follow, kept up to date without any manual work."
        groups={[
          {
            features: [
              { lottie: `${P}6822010b1db333a3279d12f0_Untitled (7).json`, title: 'Real-Time Status', text: 'Know which competitor ads are live today and how long each has run.' },
              { lottie: `${P}682250526cf05f1944daa3f3_new.json`, title: 'Track Creative Tests', text: "Bundle and track competitors' ads launched together." },
              { lottie: `${P}68220b448aa4cb6939da0c95_landing page.json`, title: 'Landing Page Insights', text: 'Know what landing pages are getting the most spend.' },
              { lottie: `${P}6823a697a0c46d8ee3c03b18_time_travel_lottie.json`, title: 'Time Travel / Historical Data', text: "Bundle and track competitors' ads launched together." },
              { lottie: `${P}68220b4429bdc7d30078e6b7_share.json`, title: 'Share Competitor Reports', text: 'Send a link to a full competitor report to teammates or clients, no login needed.' },
              { lottie: `${P}68220b44c6a9b4d97676ea73_notifications.json`, title: 'Slack & Email Updates', text: 'Get a summary of new competitor ads posted to Slack or sent to your inbox.' },
            ],
            testimonial: {
              logo: `${P}6679ef83dd47e5000aa10cd5_Wiza.svg`,
              quote: '“Tracking competitors used to mean checking the ad library every morning. Now it all arrives on its own, and the tests and landing pages show us what is working before we spend a dollar.”',
              avatar: '/assets/6679ebddfad13bb59b5a8f25_TS2G1MWKZ-US2G1MXHD-eb1db3a0ea43-192.avif',
              name: 'Stephen Hakami',
              role: 'Founder @ Wiza',
            },
          },
        ]}
      />
      <CtaBanner
        body="Try every feature free for seven days. Track competitors, review their creative tests and get reports on new ads delivered to you before you decide."
        video={`${P}cta-spyder.mov`}
        iconImg="/assets/682f93b469081ade4aadbbad_iso-spyder.webp"
        iconAlt="isometric radar logo"
      />
      <Faq
        title="Ad Spy Tool Questions"
        body="Common questions about tracking competitor ads with Spyder, from how long ads are stored to which platforms and how many brands are covered."
        items={FAQ}
      />
      <CTA />
    </>
  )
}
