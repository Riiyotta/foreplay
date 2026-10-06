import ProductHero from '../components/product/ProductHero.jsx'
import SolutionCards from '../components/product/SolutionCards.jsx'
import ProductCarousel from '../components/product/ProductCarousel.jsx'
import ProductTabs from '../components/product/ProductTabs.jsx'
import FeatureSection from '../components/product/FeatureSection.jsx'
import CtaBanner from '../components/product/CtaBanner.jsx'
import Faq from '../components/shared/Faq.jsx'
import CTA from '../components/CTA.jsx'
import { TabDiscovery0, TabDiscovery1, TabDiscovery2 } from '../components/svgs.jsx'

// specs/discovery.md — product template (_shared-pages.md §1). Long copy is stand-in text.
const P = '/assets/pages/discovery/'

const FAQ = [
  {
    q: 'How does the Inspiration Library fit into my workflow?',
    a: <p>Most teams start their week in the library: they search for ads in their category, save the strongest examples to a board, then use those boards as the brief for the next round of concepts and scripts.</p>,
  },
  {
    q: 'How do I find the best facebook ads?',
    a: <p>Filter by how long an ad has been running and sort by the longest first. Ads that stay live for months tend to be the ones a brand keeps paying for.</p>,
  },
  {
    q: 'Do you have a brand monitoring program?',
    a: <p>Yes. You can follow specific brands and get their newly launched ads collected for you automatically, without any manual searching.</p>,
  },
  {
    q: "Can I see my competitor's ads?",
    a: <p>Yes. Search for any brand by name and you will see the ads in our library from that advertiser, including formats, copy and launch dates.</p>,
  },
  {
    q: 'How do I become a Foreplay Expert?',
    a: (
      <>
        <p>Experts are practitioners who share their curated boards with the community. Apply through the experts page and our team will review your work.</p>
        <p>‍</p>
      </>
    ),
  },
  {
    q: 'Why is this the best ad spy tool?',
    a: <p>It pairs a large, constantly growing ad library with search and filters designed around creative work, so you spend less time digging and more time studying the ads that matter. Anything you find can be saved straight into your own boards.</p>,
  },
  {
    q: 'How often is the example ad library updated?',
    a: <p>New ads are added every day. Saved ads from the community and brands being tracked flow into the library continuously, so recent launches show up quickly.</p>,
  },
  {
    q: 'Is the ad library available to every plan and seat?',
    a: <p>The library is part of every plan. Each seat on your workspace gets full access to search, filters and saving, and you can upgrade at any point if your team grows or you need more tracked brands.</p>,
  },
  {
    q: 'How do ads get into the foreplay platform?',
    a: <p>Ads are collected from public ad libraries and from the ads our users save while they research.</p>,
  },
  {
    q: 'What platforms are included in this ad spy?',
    a: (
      <ul>
        <li>Facebook Ad Inspiration</li>
        <li>Instagram Ad Inspiration</li>
        <li>TikTok Ad Inspiration</li>
        <li>TikTok Organic Content Inspiration</li>
        <li>LinkedIn Ads Inspiration</li>
      </ul>
    ),
  },
  {
    q: 'Does this ad spy tool show every ad online?',
    a: <p>No tool can show every ad. The library focuses on ads worth studying and keeps growing as more are saved.</p>,
  },
]

export default function Discovery() {
  return (
    <>
      <ProductHero
        overline="DISCOVERY"
        title="Search over 100 million incredible ad ideas"
        subtitle="Browse a huge library of ads from every category, then filter by format, platform and runtime to find what fits."
        icon={{
          webm: `${P}animated-icon-discovery.webm`,
          mov: `${P}animated-icon-discovery.mov`,
          img: `${P}682f9f722b39359a238b0ff9_pi-discovery-hq.webp`,
          alt: 'magnifying glass discovery logo',
        }}
        screen={{
          mp4: `${P}68338a8a2fcb274d77daaec1_product-video-discovery-transcode.mp4`,
          webm: `${P}68338a8a2fcb274d77daaec1_product-video-discovery-transcode.webm`,
          poster: `${P}68338a8a2fcb274d77daaec1_product-video-discovery-poster-00001.jpg`,
        }}
      />
      <SolutionCards
        title="You need a top-tier ad search engine"
        body="Good creative starts with good references, and finding them should take minutes rather than hours."
        before={{ text: 'Limited searches, messy folders and minimal data.', img: `${P}682e02bbeb2b8d4676c51bcb_before-discovery.webp` }}
        after={{ text: 'Search the largest winning ad creative database.', img: `${P}682e02bb2bfe3aa652c28c43_after-discovery.webp` }}
      />
      <ProductCarousel
        title="Discover your next best ad"
        body="Spot trends early, uncover brands you had never heard of and keep a running list of the advertisers you want to learn from each week."
        slides={[
          { img: `${P}6452b20ee4031bfa414e9376_stay-on-trends.webp`, alt: 'facebook ad spy tool for trending creatives', title: 'Stay on-top of trends', text: 'See which formats and hooks are picking up across categories before they become common.' },
          { img: `${P}6452b20e1faec53688be8c5e_secret competitors.webp`, alt: 'competitors advertisements in a feed', title: 'Find Secret Competitors', text: 'Search by product or keyword to surface smaller brands quietly competing for your audience.' },
          { img: `${P}6452b2233aadbc8e5dddb5dd_ad-screative-time-machine.webp`, alt: 'ad creative time machine', title: 'Ad Creative Time Machine', text: 'Look back at the ads a brand ran in past seasons and see how their creative changed over time.' },
          { img: `${P}6452b4e5b9602e476d8dbf96_competitor-hitlist.webp`, alt: 'competitor hit list', title: 'Assemble your competitor hit-list', text: 'Collect the brands you want to watch into one list and check their newest ads in one place.' },
        ]}
      />
      <ProductTabs
        title="Stop Wasting Time & Budget"
        body="Find proven ideas faster with search that understands creative, a deep archive of past ads and analysis of each ad's tone."
        tabs={[
          { label: 'AI Search', icon: <TabDiscovery0 />, img: `${P}64753b4254d0e02cef7b9a53_Discovery-Tab-2.webp`, alt: 'How to save ads browser illustration' },
          { label: 'Historical Ads', icon: <TabDiscovery1 />, img: `${P}647538013ac0c5c0ec50e836_Discovery-Tab-1.webp`, alt: 'Historical ads illustration' },
          { label: 'Emotional Analysis', icon: <TabDiscovery2 />, img: '/assets/681922ba61ce305541bf6b10_discovery-ai-new.webp', alt: 'Emotional analysis illustration' },
        ]}
      />
      <FeatureSection
        title="Like Pinterest for ad inspiration"
        body="Scroll a visual feed of ads, narrow it down with filters built for creative teams, and save anything useful to your boards with a single click whenever you spot it."
        groups={[
          {
            features: [
              { img: `${P}6452c3588f595986621e7e7f_ai-search.webp`, alt: 'UI for AI search of facebook ads spy tools', title: 'AI Search Engine', text: 'Search by ad content and visuals to conduct in-depth research.' },
              { img: `${P}6452c358f3df0561dcd05aaf_discovery-filtering.webp`, alt: 'filter facebook ad spy tools by industry', title: 'Filter by Niche & Format', text: 'Discover specific ad types to help inform competitor analysis.' },
              { img: `${P}6452c359d7107e537d664c3e_filter-by-platform.webp`, alt: 'filter by platform', title: 'Filter by Platform', text: 'Deep dive ad creative by 1 or multiple platforms.' },
              { img: `${P}6452c3582ce631b474f7a429_Discovery-Real-Time Activity.webp`, alt: 'ad activity status', title: 'Ad Activity Status', text: 'See at a glance whether an ad is still live and how long it has been running for.' },
              { img: `${P}6452c6577004376045ccff74_Landing Page Screenshot.webp`, alt: 'landing page and metadata', title: 'Landing Page & Metadata', text: 'View the landing page, copy and details that sit behind every ad in the feed.' },
              { img: `${P}6452c64a23cd3d10d788aff5_sort-by-longest-running.webp`, alt: 'sort by longest running', title: 'Sort by Longest Running', text: 'Quickly discover winning ads by segmenting time running.' },
            ],
            testimonial: {
              logo: `${P}6478c259d089e1fcfd9fe514_9d81a1_1c7f11b03b5b4dd990abe5c8426f16cd~mv2.webp`,
              quote: '“Finding references used to eat up half of our planning time. Now we search, filter and save in minutes, and every concept meeting starts with real examples.”',
              avatar: `${P}6478c25916a783229ba8d802_Jess-Fire Team.webp`,
              name: 'Jess Bachman',
              role: 'Co-Founder @ FireTeam',
            },
          },
        ]}
      />
      <CtaBanner
        body="Try every feature free for seven days. Search the full ad library, filter by niche and format, and save the best ideas to your boards before you decide."
        video={`${P}cta-discovery.mov`}
        iconImg="/assets/682f93b42567b6ff190373b9_iso-discovery.webp"
        iconAlt="isometric discovery logo"
      />
      <Faq
        title="Questions about Discovery?"
        body="Most frequent questions about finding ad inspiration with Discovery."
        items={FAQ}
      />
      <CTA />
    </>
  )
}
