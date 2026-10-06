import {
  TabSwipeFile0,
  TabSwipeFile1,
  TabSwipeFile2,
  TabSpyder0,
  TabSpyder1,
  TabSpyder2,
  TabDiscovery0,
  TabDiscovery1,
  TabDiscovery2,
  TabLens0,
  TabLens1,
  TabLens2,
  TabBriefs0,
  TabBriefs1,
  TabBriefs2,
} from './svgs.jsx'
import { Button, Overline, useTabs } from './shared.jsx'
import ChromeExtension from './ChromeExtension.jsx'

const A = '/assets/'
const SIGN_UP = 'https://app.foreplay.co/sign-up'
const SITE = ''

export const PRODUCTS = {
  swipe: {
    id: 'swipe-file',
    overline: 'Swipe File',
    title: 'Save ads from anywhere, forever',
    learn: `${SITE}/swipe-file`,
    tabs: [
      [TabSwipeFile0, 'Save & Organize'],
      [TabSwipeFile1, 'Automate Transcription'],
      [TabSwipeFile2, 'Easily Share & Collaborate'],
    ],
    videos: ['/videos/cta-swipe-file.mov'],
    iso: `${A}682f93b40d86b433e8039cc9_iso-swipefile.webp`,
    bg: `${A}680bbc292a514713177aac15_home-swipefile-bg.webp`,
    panes: [
      [`${A}682e079a4aaf06e2b30921cd_swipe-file-slide-1.webp`, 'ui of saving ads from ad library and mobile ads'],
      [`${A}68192291514c5eb42a2b307d_spyder-transcription-new.webp`, 'free facebook ad transcription'],
      [`${A}6810ff44263ea947f36b6c18_Swipefile-3.webp`, 'ad inspiration board'],
    ],
  },
  spyder: {
    id: 'spyder',
    overline: 'Spyder',
    title: 'Automatically track competitors',
    learn: `${SITE}/spyder-ad-spy`,
    tabs: [
      [TabSpyder0, '24/7 Ad Library Scraper'],
      [TabSpyder1, 'Analyze Creative Tests'],
      [TabSpyder2, 'Identify Top Hooks'],
    ],
    videos: ['/videos/cta-spyder.mov'],
    iso: `${A}682f93b469081ade4aadbbad_iso-spyder.webp`,
    bg: `${A}680bbc29442689a5eff3f659_home-spyder-bg.webp`,
    panes: [
      [`${A}6810ff44da8facf8efaa1529_Spyder-1.webp`, 'ad creative spy'],
      [`${A}6810ff441a17fded3a5d9e33_Spyder-2.webp`, 'competitor facebook ad analysis'],
      [`${A}6810ff493741dd270180d33a_Spyder-3.webp`, 'ad spy top hooks'],
    ],
  },
  discovery: {
    id: 'discovery',
    overline: 'Discovery',
    title: 'The smartest ad search engine',
    learn: `${SITE}/discovery`,
    tabs: [
      [TabDiscovery0, 'Smart Search'],
      [TabDiscovery1, 'AI Creative Analysis'],
      [TabDiscovery2, 'Advanced Filters'],
    ],
    videos: ['/videos/cta-discovery.mov'],
    iso: `${A}682f93b42567b6ff190373b9_iso-discovery.webp`,
    bg: `${A}680bbc2b22ec562396738e58_home-discovery-bg.webp`,
    panes: [
      [`${A}6810ff44c9b7dbd2a13d4157_Discoverty-1.webp`, 'ad inspiration search'],
      [`${A}681922ba61ce305541bf6b10_discovery-ai-new.webp`, 'advertising emotional analysis'],
      [`${A}6810ff444d53cd2c23b1643a_Discovery-3.webp`, 'ad inspiration filters'],
    ],
  },
  lens: {
    id: 'lens',
    overline: 'Lens',
    title: 'Know what’s working and why',
    learn: `${SITE}/lens-creative-analytics`,
    tabs: [
      [TabLens0, 'Creative Test Analysis'],
      [TabLens1, 'Build & Share Reports'],
      [TabLens2, 'Compare Winning Themes'],
    ],
    videos: ['/videos/cta-lens.mp4'],
    iso: `${A}682f93b43a94db00dbc45367_iso-lens.webp`,
    bg: `${A}6818f491db7df5646bba2c71_lens-product-bg.webp`,
    panes: [
      [`${A}6818f4ab1be4acb01b76b457_creative-test-analysis.webp`, 'creative analytics software'],
      [`${A}6818f4abf647a12cb791df19_build-and-share-reports.webp`, 'shared advertising report'],
      [`${A}6818f4abb4e886135485759a_compare-segments.webp`, 'ad creative comparison report'],
    ],
  },
  briefs: {
    id: 'briefs',
    overline: 'Briefs',
    title: 'Go from concept to launched, faster',
    learn: `${SITE}/briefs`,
    tabs: [
      [TabBriefs0, 'Storyboard & Script'],
      [TabBriefs1, 'Brand Profiles'],
      [TabBriefs2, 'Modular Brief Builder'],
    ],
    // cta-briefs.mp4 fallback is not in /public/videos; only the webm source is shipped.
    videos: ['/videos/cta-briefs.webm'],
    iso: `${A}682f93b44b8360f413644eb7_iso-briefs.webp`,
    bg: `${A}680bbc29f6ff9917b3df880f_home-briefs-bg.webp`,
    panes: [
      [`${A}68191db8d6fd3e791a16b485_briefs-storyboard-2.webp`, 'ad storyboard tool'],
      [`${A}6818f77a3cb4900456b65643_brand-profiles.webp`, 'ad brief'],
      [`${A}681b51296ef70672be45e334_brief-editor.webp`, 'ad brief mockup'],
    ],
  },
}

// §4.2 product card row (.home-product-grid, data-tabs)
// ghost: optional {label, href} replacing the "Learn More" ghost button (M2 tabs: "Book a Demo" → /book-demo).
// title: optional card-head title override (M2 Lens pane: "Creative Analytics & Reporting").
export function ProductCard({ product, ghost, title }) {
  const { active, linkProps, paneProps } = useTabs(product.tabs.length)
  const gid = product.id
  return (
    <div data-tabs="" className="flex min-h-[640px] gap-4 max-lg:flex-col">
      <div className="relative flex flex-[3_1_0] flex-col items-start justify-start gap-8 overflow-hidden rounded-24 p-8 shadow-ring-product max-lg:min-h-0 max-lg:flex-[0_1_auto] max-md:items-stretch max-sm:gap-6 max-sm:rounded-16 max-sm:px-6 max-sm:py-8">
        <div className="relative z-2 flex flex-col gap-2">
          <div className="text-neutral-50">
            <Overline>{product.overline}</Overline>
          </div>
          <div className="text-white">
            <h3 className="font-display text-display-h3">{title ?? product.title}</h3>
          </div>
        </div>
        <div className="relative z-2 flex items-center justify-start gap-3 max-sm:grid max-sm:grid-cols-1 max-sm:self-stretch">
          <Button variant="dark-secondary" href={SIGN_UP} label="Get Free Trial" />
          <Button variant="dark-ghost" href={ghost ? ghost.href : product.learn} label={ghost ? ghost.label : 'Learn More'} />
        </div>
        <div role="tablist" className="relative z-2 flex flex-1 flex-col gap-1.5">
          {product.tabs.map(([Icon, label], i) => (
            <div
              key={label}
              {...linkProps(i, gid)}
              className={`flex cursor-pointer items-center justify-start gap-1.5 rounded-10 bg-transparent py-1.5 pl-1.5 pr-5 transition-all duration-400 ease-expo hover:text-neutral-0 focus:outline-none ${
                active === i ? 'is-active text-solid-0' : 'text-neutral-200'
              }`}
            >
              <div className="flex items-center justify-center">
                <Icon />
              </div>
              <div className="text-label-m">{label}</div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-[-16%] left-[-15%] flex w-full items-center justify-center max-lg:bottom-auto max-lg:left-auto max-lg:right-0 max-lg:top-0 max-lg:-mb-10 max-lg:-mr-[292px] max-lg:-mt-[52px] max-md:-mr-[197px] max-md:-mt-[23px] max-md:mb-0 max-sm:-mb-[219px] max-sm:-mr-[58px] max-sm:-mt-4 max-sm:items-end max-sm:justify-end max-sm:self-center">
          <div className="w-full -translate-y-[15%] scale-[1.6] max-lg:hidden max-sm:scale-[2]">
            <video className="m-0 inline-block p-0 align-baseline" width="100%" height="100%" autoPlay muted loop playsInline>
              {product.videos.map((v) => (
                <source key={v} src={v} />
              ))}
            </video>
          </div>
          <img
            className="m-0 hidden max-lg:block max-lg:size-[300px] max-md:size-[200px] max-sm:size-[175px] max-sm:max-w-none"
            src={product.iso}
            width="600"
            height="600"
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <div className="relative flex h-[640px] flex-[7_1_0] items-center justify-center overflow-hidden rounded-24 bg-neutral-800 max-lg:h-[480px] max-lg:flex-[0_1_auto] max-sm:h-auto max-sm:rounded-16">
        <div className="pointer-events-none absolute inset-0 flex size-full items-center justify-center">
          <img src={product.bg} width="752" height="640" className="h-[640px]" alt="" loading="lazy" />
        </div>
        <div data-tab-panes="" className="relative size-full">
          {product.panes.map(([src, alt], i) => (
            <div
              key={src}
              {...paneProps(i, gid)}
              className={`size-full items-center justify-center text-solid-0 max-md:aspect-[16/14] ${
                active === i ? 'is-active flex' : 'hidden'
              }`}
            >
              <img className="size-full object-cover" src={src} width="752" height="640" alt={alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// §4.1 section head (dark variant)
function SectionHead({ overline, title, children }) {
  return (
    <div className="mx-auto flex w-full max-w-[720px] flex-col items-center justify-start gap-3 text-center">
      <div className="flex flex-col items-center gap-3">
        <div>
          <Overline>{overline}</Overline>
        </div>
        <div className="text-neutral-0 [text-wrap:balance]">
          <h2 className="font-display text-display-h2 max-lg:text-display-h2-lg max-sm:text-display-h2-sm">{title}</h2>
        </div>
        <div className="max-w-[512px] [text-wrap:pretty]">
          <div className="flex-1 text-neutral-100">
            <p className="text-body-l">{children}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductSection({ children }) {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto w-full max-w-section px-10 max-lg:px-8 max-md:px-6">
        <div className="flex flex-col gap-20 pb-10 pt-32 max-sm:gap-16">{children}</div>
      </div>
    </div>
  )
}

export function ResearchSection() {
  return (
    <ProductSection>
      <SectionHead overline="Research & Inspiration" title="Spark creative genius and crush competitors.">
        Ad creative research is your shortcut to success. <br />
        Reverse engineer ads that are already crushing and identify trends.
      </SectionHead>
      <ProductCard product={PRODUCTS.swipe} />
      <ProductCard product={PRODUCTS.spyder} />
      <ProductCard product={PRODUCTS.discovery} />
      <ChromeExtension />
    </ProductSection>
  )
}

export function AnalyticsSection() {
  return (
    <ProductSection>
      <SectionHead overline="Creative Analytics & Production" title="Identify winning patterns and replicate success.">
        Instantly turn insights into action. Uncover what’s working across your ads and translate those learnings into
        crystal clear creative direction.
      </SectionHead>
      <ProductCard product={PRODUCTS.lens} />
      <ProductCard product={PRODUCTS.briefs} />
    </ProductSection>
  )
}
