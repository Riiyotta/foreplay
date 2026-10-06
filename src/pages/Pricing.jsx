import { SectionContainer } from '../components/shared/Layout.jsx'
import SectionHead from '../components/shared/SectionHead.jsx'
import EnterpriseCard from '../components/shared/EnterpriseCard.jsx'
import useFadeTabs from '../components/shared/useFadeTabs.js'
import Faq from '../components/shared/Faq.jsx'
import PlanCard from '../components/pricing/PlanCard.jsx'
import Comparison from '../components/pricing/Comparison.jsx'
import CTA from '../components/CTA.jsx'

// specs/pricing.md — plan tabs (Monthly / Annually, instant swap, Annually default), plan cards with
// benefit popovers, Enterprise card, Compare Plans grid, FAQ, home CTA. Long copy is stand-in text.

const POP = {
  swipe: { icon: '6aa6182040c91b1f553769e7_swipe.avif', text: 'Save Organize & Share Ad Ideas', popover: { title: 'Swipe File', text: 'Save ads from any library or social feed, sort them into boards and share a link with anyone on your team or a client.', img: '6aa6353367282599e25baaa5_71dd86cfbb8857433e479a8c409a1989_swipe-animated.webp', alt: "User interface panel titled 'Save to Foreplay'" } },
  discovery: { icon: '6aa61820c99e3449437fb578_discovery.avif', text: 'Search Ads Database (200M+ Ads)', popover: { title: 'Discovery', text: 'Search a huge library of ads by keyword, niche, format and platform to find proven ideas in a few minutes.', img: '6aa635a599359da7669613a0_27293449d1c92e07a005118aee457496_discovery-animated.webp', alt: 'User interface showing a search bar with recent searches' } },
  briefs: { icon: '6aa618209de79defba6f4a74_briefs.avif', text: 'Create Sharable Ad Briefs', popover: { title: 'Briefs', text: 'Turn references into clear briefs and scripts your creators can follow.', img: '6aa63654d36b309d88d73d6b_9f1c73173220bad6cedaf638291f0d27_briefs-animated.webp' } },
  spyder: (value) => ({ icon: '6aa61820c81d5cd55b6b6310_spyder.avif', text: 'Analyze Competitor Ad Libraries', value, popover: { title: 'Spyder', text: 'Track competitor brands automatically and review every new ad, test and landing page they launch.', img: '6aa63bee9fa42d4f2df9452c_3bcb77ffa51ce2fcd065004a603f6d20_spyder-animated.webp' } }),
  lens: (value) => ({ icon: '6aa61820a4d74f5f770376e8_lens.avif', text: 'Analyze your ads & build reports', value, popover: { title: 'Lens', text: 'Connect your ad accounts to see which creative performs and share clear, branded reports.', img: '6aa63bed8a03456c2a49acff_4e029abc3eb790f550b7d069d22fbe41_lens-animated.webp' } }),
  ai: { icon: '6aa618209d6eda94f1a108c1_ai.webp', text: 'Connect to AI Tools', popover: { title: 'Connect to AI Tools', text: 'Use your ad research inside Claude, ChatGPT and other assistants through the MCP.' } },
  chrome: { icon: '6aa618209d104f28ed7ada66_chrome.avif', text: 'Chrome Extension', popover: { title: 'Chrome Extension', text: 'Save ads from the Meta, TikTok and LinkedIn ad libraries with a single click.' } },
  ig: { icon: '6aa6181fc81d5cd55b6b62f3_ig.webp', text: 'Save ads directly in Instagram', popover: { title: 'Save ads directly in Instagram', text: 'Save & share ad inspiration from your mobile phone.' } },
}

const BASE = [POP.swipe, POP.discovery, POP.briefs]
const plans = (annual) => [
  {
    name: 'Basic',
    desc: 'Collect and organize ad inspiration in one place for yourself or a small team.',
    price: annual ? '$49' : '$59',
    save: annual && 'Save $120 annually',
    users: '1 User',
    extra: '$20 per additional user',
    benefits: BASE,
  },
  {
    name: 'WORKFLOW',
    primary: true,
    desc: 'Analyze competitors and get creative analytics on your own ads',
    price: annual ? '$149' : '$175',
    save: annual && 'Save $310 annually',
    users: '5 Users',
    extra: '$20 per additional user',
    benefits: [POP.spyder('10+ Brands'), POP.lens('1 Brand'), [POP.ai, POP.chrome, POP.ig], ...BASE],
    integrates: true,
  },
  {
    name: 'Agency',
    desc: 'Supercharging marketing groups to scale multiple ad accounts',
    price: annual ? '$389' : '$459',
    save: annual && 'Save $820 annually',
    users: '10 Users',
    extra: '$20 per additional user',
    benefits: [POP.spyder('50+ Brands'), POP.lens('10+ Brands'), [POP.ai, POP.chrome, POP.ig], ...BASE],
    integrates: true,
  },
]

const Y = true
const ALL = [Y, Y, Y, Y]
const CATEGORIES = [
  {
    title: 'Access & Usage',
    rows: [
      { title: 'Users', sub: '$20 per additional user', cells: ['1', '5 Included', '10 Included', 'Unlimited'] },
      { title: 'Guest / Public Share Links', cells: ALL },
      { title: 'White-Label External Share Links', cells: ALL, crown: true },
      { title: 'External Integrations', subhead: true },
      { title: 'MCP', icon: '6a0235cbd475d1479d230a01_mcp-black-icon.svg', cells: ALL },
      { title: 'Claude', icon: '/assets/pages/mcp/6a02366845ce81bd09b4dd99_claude-logo.svg', cells: ALL },
      { title: 'ChatGPT', icon: '6a0236681a484d13fa7aa548_chat-gpt.svg', cells: ALL },
    ],
  },
  {
    title: 'Creative Analytics',
    rows: [
      { title: 'Lens', link: '/lens-creative-analytics', icon: '6aa61820a4d74f5f770376e8_lens.avif', sub: '$50 per additional brand', cells: ['—', '1 Brand', '10 Brands', 'Unlimited'] },
      { title: 'Monthly Ad Spend', info: 'Reporting is priced per brand, so a bigger ad budget never raises your bill.', crown: true, cells: ['—', 'Unlimited', 'Unlimited', 'Unlimited'] },
      { title: 'Data Look-back Limit', cells: ['—', 'Unlimited', 'Unlimited', 'Unlimited'] },
      { title: 'Top Performing Reports', cells: ['—', 'Unlimited', 'Unlimited', 'Unlimited'] },
      { title: 'Comparison Reports', cells: ['—', 'Unlimited', 'Unlimited', 'Unlimited'] },
      { title: 'Foreplay Creative Scores', cells: ['—', Y, Y, Y] },
      { title: 'White-Label Sharing', cells: ['—', Y, Y, Y] },
      { title: 'Multi-Ad Account Summary', cells: ['—', Y, Y, Y] },
      { title: 'Creative Testing Dashboard', cells: ['—', Y, Y, Y] },
      { title: 'Personalized Inspiration', cells: ['—', Y, Y, Y] },
      { title: 'Automated Transcription', cells: ['—', Y, Y, Y] },
      { title: 'Custom Tags', cells: ['—', Y, Y, Y] },
      { title: 'Advanced Creative Filtering', cells: ['—', Y, Y, Y] },
      { title: 'Advanced Creative Segmentation', cells: ['—', Y, Y, Y] },
      { title: 'Custom Metric Builder', crown: true, cells: ['—', 'Coming soon', 'Coming soon', 'Coming soon'] },
      { title: 'Team Performance Gamification', crown: true, cells: ['—', Y, Y, Y] },
      { title: 'Competitor Benchmarking Data', crown: true, cells: ['—', Y, Y, Y] },
    ],
  },
  {
    // Structure, row labels and cell values measured from the live table (fix pass); tooltip copy is stand-in.
    title: 'Ad Research & Inspiration',
    rows: [
      { title: 'Ad Saving Chrome Extension', link: 'https://chromewebstore.google.com/detail/ad-library-save-facebook/eaancnanphggbfliooildilcnjocggjm', external: true, smallIcon: true, icon: '/assets/pages/chrome-extension/64944e2428c1fae0b340fded_Google_Chrome_icon_(February_2022).svg.avif', cells: ALL },
      { title: 'Supported Platforms:', subhead: true },
      { title: 'Meta Ad Library', icon: '62a55e3da3f817548b037cf3_facebook_icon.svg', cells: ALL },
      { title: 'Instagram Organic', icon: '/assets/pages/chrome-extension/642ca4c12f8f5f73d94780dd_instagram.svg', cells: ALL },
      { title: 'TikTok Ad Library & Top Ads', icon: '62a55efe05dd119cc2c83c09_tiktok-ad-logo.svg', cells: ALL },
      { title: 'TikTok Organic', icon: '62a55efe05dd119cc2c83c09_tiktok-ad-logo.svg', cells: ALL },
      { title: 'LinkedIn Ad Library', icon: '/assets/pages/chrome-extension/664e52e8d13ae48e8b3788d0_contest-linkedin.svg', cells: ALL },
      { title: 'YouTube Shorts', icon: '/assets/pages/chrome-extension/664e52e820acdb847c1534e2_contest-youtube.svg', cells: ALL },
      { title: 'Google Transparency Center', icon: '6820c8e6421d1f477457ae4b_Google-G-Logo-300x300.png.avif', cells: ['Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon'] },
      { title: 'Swipe File', link: '/swipe-file', icon: '6aa6182040c91b1f553769e7_swipe.avif', cells: ALL },
      { title: 'Mobile App', crown: true, info: 'Find new ideas wherever you are and keep the good ones from your phone in one tap.', infoHref: '/mobile-app', cells: ALL },
      { title: 'Mobile Instagram Integration', crown: true, info: 'Keep ads you spot while scrolling on your phone.', infoHref: '/post/save-instagram-ads-on-mobile', cells: ALL },
      { title: 'Organize Folders & Boards', cells: ALL },
      { title: 'Custom Tags & Ratings', cells: ALL },
      { title: 'Landing Page Screenshots', cells: ALL },
      { title: 'Live Ad Active Status', cells: ALL },
      { title: 'Team Commenting', cells: ALL },
      { title: 'Advanced Sort & Filtering', cells: ALL },
      { title: 'Manual Upload', cells: ALL },
      { title: 'Automated Transcription', cells: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'] },
      { title: 'Discovery', link: '/discovery', icon: '6aa61820c99e3449437fb578_discovery.avif', cells: ALL },
      { title: '200,000,000+ Community Ad Library', crown: true, info: 'A huge shared library of ads saved and sorted by real marketers.', infoHref: '/discovery', cells: ALL },
      { title: 'Browse 100+ Foreplay Experts', crown: true, info: 'See what top strategists are saving.', infoHref: '/experts', cells: ALL },
      { title: 'Personal Curated Feed', cells: ALL },
      { title: 'Unlimited AI Powered Search', cells: ALL },
      { title: 'Sort by Longest Running Ads', cells: ALL },
      { title: 'AI Emotional Analysis', crown: true, cells: ALL },
      { title: 'Persona & Creative Target Detection', crown: true, cells: ALL },
      { title: 'Free Automated Transcription', cells: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'] },
      { title: 'Advanced Filtering', cells: ALL },
      {
        title: 'Spyder',
        link: '/spyder-ad-spy',
        icon: '6aa61820c81d5cd55b6b6310_spyder.avif',
        cells: ['—', <>15 Brands<br />(Unlimited on Annual)</>, <>50 Brands<br />(Unlimited on Annual)</>, 'Unlimited'],
      },
      { title: '24/7 Competitor Meta Ad Tracking', cells: ['—', Y, Y, Y] },
      { title: 'Competitor Ad History (Up to 3 Years)', crown: true, cells: ['—', Y, Y, Y] },
      { title: 'Media Mix Analysis', cells: ['—', Y, Y, Y] },
      { title: 'Competitor Creative Tests', crown: true, cells: ['—', Y, Y, Y] },
      { title: 'Landing Page Insights', cells: ['—', Y, Y, Y] },
      { title: 'Automated Transcription', cells: ['—', Y, Y, Y] },
      { title: 'Top Performing Hooks', cells: ['—', Y, Y, Y] },
      { title: 'Creative Timeline View', cells: ['—', Y, Y, Y] },
    ],
  },
  {
    title: 'Production',
    rows: [
      { title: 'Briefs', link: '/briefs', icon: '6aa618209de79defba6f4a74_briefs.avif', cells: ALL },
      { title: 'AI Script Generator', cells: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'] },
      { title: 'Brand Profiles', cells: ALL },
      { title: 'Embeded Inspiration', cells: ALL },
      { title: 'Modular Details Builder', cells: ALL },
      { title: 'Storyboard Generator', crown: true, cells: ALL },
      { title: 'AI Scene Iterations', cells: ALL },
      { title: 'Public Brief Share Pages', cells: ALL },
      { title: 'Asset Collection', crown: true, cells: ALL },
    ],
  },
]

const FAQ = [
  {
    q: 'Is Foreplay support available during my trial?',
    a: (
      <p>
        Yes. You get the same support during your trial as paying customers. Use the chat in the app for quick questions, or
        email us at <a href="mailto:hello@foreplay.co">hello@foreplay.co</a> and the team will get back to you, usually within
        the same working day.
      </p>
    ),
  },
  { q: 'Do I get support & help as a customer?', a: <p>Every plan includes chat and email support, plus a knowledge base with guides for each product.</p> },
  {
    q: 'Can I cancel at anytime?',
    a: <p>Yes. You can cancel from your account settings whenever you like. Your plan stays active until the end of the period you have already paid for, and your saved ads remain available.</p>,
  },
  {
    q: 'How does the trial work? Will I be charged?',
    a: <p>The trial gives you full access to your chosen plan for seven days. You add a payment method when you sign up, but nothing is charged until the trial ends. We send a reminder before the trial finishes so you have time to decide. If you cancel before the end of the seventh day you will not be charged at all, and you can switch plans during the trial if you find you need more or fewer seats, brands or features than you expected.</p>,
  },
  { q: 'Are there any usage limitations?', a: <p>Saving, searching and briefs are unlimited on every plan. Tracked brands and reporting limits depend on the plan you pick.</p> },
  { q: 'Do you offer annual discounts?', a: <p>Yes. Paying annually saves around 15% compared with monthly billing and includes unlimited Spyder tracking.</p> },
]

export default function Pricing() {
  const { current, shown, select } = useFadeTabs(1, { durationIn: 0, durationOut: 0 })
  const tabs = ['Monthly', 'Annually']
  return (
    <>
      <div>
        <SectionContainer>
          <div className="flex flex-col pb-[108px] pt-[72px] max-sm:pb-20 max-sm:pt-10">
            <SectionHead
              overline="PRICING"
              title="Flexible, risk-free pricing"
              titleAs="h1"
              size="h1"
              body="Start with a free trial on any plan, switch whenever your team changes, and cancel at any time right from your settings."
              bodyClass="text-neutral-100 [text-wrap:balance]"
              bodyMax="max-w-[640px]"
            />
            <div className="flex flex-col">
              <div className="relative flex flex-col gap-6 pb-6">
                <div
                  role="tablist"
                  className="relative mt-6 flex items-center justify-center gap-1 self-center rounded-12 p-1 shadow-ring-neutral-600 max-md:w-full max-md:items-stretch max-sm:grid max-sm:grid-cols-2"
                >
                  {tabs.map((t, i) => (
                    <a
                      key={t}
                      href={`#pricing-${t}`}
                      role="tab"
                      aria-selected={current === i}
                      onClick={(e) => {
                        e.preventDefault()
                        select(i)
                      }}
                      className={`relative flex max-w-full items-center justify-center gap-3 rounded-8 px-3 py-2 text-center text-white transition-all duration-200 max-md:flex-1 max-md:flex-col max-md:gap-1 max-sm:gap-0 max-sm:[text-wrap:balance] ${
                        current === i ? 'bg-neutral-700' : 'hover:bg-neutral-800'
                      }`}
                    >
                      <div className="text-label-s text-white">{t}</div>
                      {i === 1 && (
                        <div className="flex-1 text-neutral-100">
                          <div className="text-label-s text-neutral-100 max-sm:text-[10px] max-sm:leading-4">
                            Save 15% + Unlimited Spyder
                          </div>
                        </div>
                      )}
                    </a>
                  ))}
                </div>
                <div className="relative -mx-2 -mt-2 overflow-visible px-2 py-5">
                  <div role="tabpanel" className="relative">
                    <div className="grid grid-cols-3 place-items-start items-start gap-4 [&>*]:w-full max-lg:grid-cols-1 max-lg:gap-8 max-md:gap-6 max-sm:gap-5">
                      {plans(shown === 1).map((p) => (
                        <PlanCard key={p.name} {...p} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <EnterpriseCard
                subtitle="For large agencies and scaling brand organizations."
                title="Custom Pricing"
                items={['Unlimited users & product usage', 'Priority in-app or Slack support', 'Early access to new features and integrations']}
              />
            </div>
          </div>
        </SectionContainer>
      </div>

      <Comparison
        body="See every feature side by side and pick the plan that fits how you work."
        plans={[
          { name: 'Basic', cta: 'Start Trial', href: 'https://app.foreplay.co/sign-up' },
          { name: 'Workflow', cta: 'Start Trial', href: 'https://app.foreplay.co/sign-up' },
          { name: 'Agency', cta: 'Start Trial', href: 'https://app.foreplay.co/sign-up' },
          { name: 'Enterprise', cta: 'Book Demo', href: '/book-demo' },
        ]}
        categories={CATEGORIES}
      />

      <Faq
        overline={null}
        title="Questions? We have answers."
        titleAs="h2"
        size="h3"
        body="Everything you need to know about trials, billing and support. Still stuck? Reach out to the team using the buttons below."
        bodyClass="text-neutral-300 [text-wrap:balance]"
        bodyMax="max-w-[640px]"
        items={FAQ}
      />
      <CTA />
    </>
  )
}
