import ProductHero from '../components/product/ProductHero.jsx'
import SolutionCards from '../components/product/SolutionCards.jsx'
import ProductCarousel from '../components/product/ProductCarousel.jsx'
import ProductTabs from '../components/product/ProductTabs.jsx'
import FeatureSection from '../components/product/FeatureSection.jsx'
import CtaBanner from '../components/product/CtaBanner.jsx'
import Faq from '../components/shared/Faq.jsx'
import CTA from '../components/CTA.jsx'
import { TabSwipeFile0, TabSwipeFile1, TabSwipeFile2 } from '../components/svgs.jsx'

// specs/swipe-file.md — product template (_shared-pages.md §1, sections 1–8). Long copy is stand-in text.
const P = '/assets/pages/swipe-file/'

const STEPS = (a, b) => (
  <>
    <p>Step 1: Download the Foreplay Chrome Extension</p>
    <p>Step 2: Add it to your browser toolbar</p>
    <p>{a}</p>
    <p>{b}</p>
  </>
)

const FAQ = [
  {
    q: 'Can I share boards with Freelancers?',
    a: <p>Yes. Any board can be shared through a public link, so freelancers and clients can browse the saved ads without needing a seat of their own on your workspace plan.</p>,
  },
  {
    q: 'Why do Facebook Ad Library Links Expire?',
    a: <p>Ad library links point to live listings. When an advertiser pauses or edits a campaign, the listing is removed and the link stops working. Saving the creative itself, along with its copy and metadata, keeps a permanent record you can come back to long after the original listing has disappeared.</p>,
  },
  {
    q: 'Can I save ads from Instagram?',
    a: <p>Yes. Instagram ads can be saved from the ad library on desktop or from the mobile app on your phone in a couple of taps.</p>,
  },
  {
    q: 'How do I use Facebook Ad Library?',
    a: <p>Open the ad library, choose a country and category, then search for a brand or keyword. Each result shows the creative, the copy and when it started running. Install the extension and a save button appears on every result so you can keep the ads worth studying.</p>,
  },
  {
    q: 'How to make an ad Swipe File?',
    a: <p>Start by collecting ads you find interesting while you browse, then group them into boards by brand, angle or format. Add tags as you go so patterns are easy to spot later. Over time the collection becomes a searchable reference your whole team can draw from when planning new creative.</p>,
  },
  {
    q: 'Where do I find good ad inspiration?',
    a: <p>Ad libraries, social feeds and competitor landing pages are the usual starting points. Look for ads that have been running for a long time, since longevity is a decent signal that something is working, and save them as you go.</p>,
  },
  {
    q: 'What is a Swipe File?',
    a: <p>A swipe file is a curated collection of reference ads that a marketing team keeps on hand for research and inspiration.</p>,
  },
  {
    q: 'What types of content can I save to Foreplay?',
    a: <p>Video ads, static images, carousels and organic posts can all be saved, along with screenshots of landing pages and any files you upload yourself from your desktop.</p>,
  },
  {
    q: 'How do I save LinkedIn Ads',
    a: STEPS(
      'Step 3: Open the LinkedIn ad library and search for a brand or keyword',
      'Step 4: Click the save button that appears under the ad you want to keep',
    ),
  },
  {
    q: 'How do I save ads from Facebook Ad Library?',
    a: STEPS(
      'Step 3: Open the Facebook Ad Library and search for the brand you want to research',
      'Step 4: Click the save button below any ad and pick a board for it',
    ),
  },
  {
    q: 'Will the ads I save stay forever?',
    a: <p>Yes. Saved ads are stored on our side, so they remain in your library even after the advertiser stops running them or removes the original post.</p>,
  },
]

export default function SwipeFile() {
  return (
    <>
      <ProductHero
        overline="SWIPE FILE"
        title="Save Ads from Facebook & TikTok Ad Library"
        subtitle="Keep every ad worth studying in one place, organized into boards and ready to share with your whole team."
        icon={{
          webm: `${P}animated-icon-swipefile.webm`,
          mov: `${P}animated-icon-swipefile.mov`,
          img: `${P}682f9f72df2782e8df1d1114_pi-swipefile-hq.webp`,
          alt: 'swipe file icon',
        }}
        screen={{
          highWebm: `${P}!SwipeFile-2025_high.webm`,
          mp4: `${P}68338a6524e01d2ff9f48747_product-video-swipefile-transcode.mp4`,
          webm: `${P}68338a6524e01d2ff9f48747_product-video-swipefile-transcode.webm`,
          poster: `${P}68338a6524e01d2ff9f48747_product-video-swipefile-poster-00001.jpg`,
        }}
      />
      <SolutionCards
        title="Why do you need Swipe File Software?"
        body="Screenshots get lost in chat threads and saved links stop working once a campaign ends. A dedicated swipe file keeps every reference ad intact, searchable and easy to pass along to the team."
        before={{ text: 'Group chats, expired links and screenshots.', img: `${P}682dfe3a46d48842bb8f17db_before-swipefile.webp` }}
        after={{ text: 'Save, organize and share ads from anywhere forever.', img: `${P}682dfe3a5956e63970743aa1_after-swipefile.webp` }}
      />
      <ProductCarousel
        title="Upgrade Your Creative Workflow"
        body="Build a reference library that supports research, pitching and planning across every brand you work on."
        slides={[
          {
            img: `${P}6446c0b1c2f78eaae4163bb9_competitor research.webp`,
            alt: 'creating a swipe file for competitor research',
            title: 'Competitor Research',
            text: 'Track what other brands in your category are running and keep their strongest ads together for side by side review.',
          },
          {
            img: `${P}6446c0b1c2f78eaae4163bb9_competitor research.webp`,
            alt: 'creating a swipe file for competitor research',
            title: 'Client Presentations',
            text: 'Pull a set of reference ads into a board and walk clients through the ideas behind a pitch.',
          },
          {
            img: `${P}6446c0b1c2f78eaae4163bb9_competitor research.webp`,
            alt: 'creating a swipe file for competitor research',
            title: 'Manage Your Portfolio',
            text: 'Keep the ads you have produced for each client in one place so past work is always easy to find.',
          },
        ]}
      />
      <ProductTabs
        title="How to save & share ads"
        body="Save from the ad libraries with one click, sort everything into boards with tags, then share a link with anyone who needs to see it today."
        tabs={[
          { label: 'Save Ad Inspiration', icon: <TabSwipeFile0 />, img: `${P}646fac024fc1759bfea42a8f_Swipe-File-Tab-1.webp`, alt: 'How to save ads browser illustration' },
          { label: 'Organize & Tag', icon: <TabSwipeFile1 />, img: `${P}646faff298f84dcd14fd6715_Swipe-File-Tab-2.webp`, alt: 'Organize and tag ads illustration' },
          { label: 'Share & Collaborate', icon: <TabSwipeFile2 />, img: `${P}646faff31a3bf4f6ae060124_Swipe-File-Tab-3.webp`, alt: 'Share boards illustration' },
        ]}
      />
      <FeatureSection
        title="Smart Swipe File Features"
        body="Everything you need to collect, sort and revisit reference ads, built for teams that research creative every day."
        groups={[
          {
            features: [
              { img: `${P}64419c26788e98000d82fa26_No Expired Links.webp`, alt: 'How to fix the facebook ad library expired link issue', title: 'No Expired Links', text: 'Saved ads keep working even after the original listing is taken down.' },
              { img: `${P}64419c27702cee383050839c_Save All Ad Types.webp`, alt: 'Facebook, LinkedIn, Instagram and TikTok app icons being saved', title: 'Save All Ad Types', text: 'Video, image and carousel ads are all captured in their full format.' },
              { img: `${P}64419c26ac48d69350ba5968_Ad Metadata.webp`, alt: 'ad metadata', title: 'Crystallize Ad Metadata', text: 'Enrich your creative research with ad metadata and copy.' },
              { img: `${P}6441d838bbed821cfc43c56c_Custom Tags.webp`, alt: 'custom tags', title: 'Custom Tags', text: 'Label ads with your own tags so related references are quick to pull up.' },
              { img: `${P}64419c26aa612008aab9e28e_Filtering.webp`, alt: 'filtering', title: 'Filter by Industry & Format', text: 'Narrow your library down by niche, format or platform in a couple of clicks.' },
              { img: `${P}64418894857cf21aa6e1b607_Share with Anyone.webp`, alt: 'share with anyone', title: 'Easily Share with Anyone', text: 'Send a board link to teammates, clients or freelancers without extra seats.' },
            ],
            testimonial: {
              logo: `${P}6478be2ffe695cac2f9d4a34_290-2904512_awe-logo-gold-affiliate-world-conferences-logo.webp`,
              quote: '“Having every reference ad in one searchable place changed how our team plans creative. We spend less time hunting for examples and far more time talking about what actually makes them work.”',
              avatar: `${P}6478bd8550054135284b7d7f_matt-williams.webp`,
              name: 'Matthew Williams',
              role: 'CMO @ iStack / Affiliate World',
            },
          },
          {
            bodyTone: 'white',
            features: [
              { img: `${P}644186758b63b0137bd005d0_Real-Time Activity-5.png`, alt: 'How to see if a facebook ad is still running', title: 'Real-Time Status', text: 'Analyze which competitor ads are working, and for how long.' },
              { img: `${P}6441d1e93e756110132e66ad_Team Commenting.webp`, alt: 'comment on your advertising inspiration board', title: 'Team Collaboration', text: 'Collect notes from colleagues or feedback from clients.' },
              { img: `${P}6441d1f1d8e29bb7aec06775_Embed in Notion.webp`, alt: 'embed in notion', title: 'Embed in Notion', text: 'Natively embed Facebook or TikTok ads in your Notion page.' },
              { img: `${P}6441d6459aadc0c4b1ee27eb_Landing Page Screenshot.webp`, alt: 'landing page screenshot', title: 'Landing Page Screenshot', text: 'Capture the landing page behind each ad alongside the creative itself.' },
              { img: `${P}6441d645f6f0ee84bb0f170a_Ai Search.webp`, alt: 'ai search', title: 'AI Search & Filter', text: 'Search your entire Swipe File using natural language text search.' },
              { img: `${P}681b6844dfcf6665c1fd25e8_embed-in-website.webp`, alt: 'embed in website', title: 'Embed in your Site or Blog', text: 'Embed Facebook, TikTok, and LinkedIn ads on your website.' },
            ],
            testimonial: {
              logo: `${P}62ab5053126567f2d1045a12_61867ad4caa11f2834eb5799_loop club logo-1.avif`,
              logoAlt: 'Loop logo',
              quote: '“We used to keep reference ads in a messy mix of folders and bookmarks. Now everything lives in shared boards, the whole team can search it, and new hires get up to speed on our creative standards in days instead of weeks.”',
              avatar: `${P}62ab50d7b920aacfc304ae19_pqt5NNy9_400x400.webp`,
              name: 'Tim Keen',
              role: 'Founder / CEO @ Loop.club',
            },
          },
        ]}
      />
      <CtaBanner
        body="Try every feature free for seven days. Save ads from any library, build boards for each brand and share your research with the team before you decide."
        video={`${P}cta-swipe-file.mov`}
        iconImg="/assets/682f93b40d86b433e8039cc9_iso-swipefile.webp"
        iconAlt="isometric swipe file logo"
      />
      <Faq
        title="Questions about Swipe File?"
        body="Answers to the questions we hear most about saving and sharing ads."
        items={FAQ}
      />
      <CTA />
    </>
  )
}
