import CTA from '../components/CTA.jsx'
import { Button } from '../components/shared.jsx'
import { SectionContainer, PaddingY, ContentMain } from '../components/shared/Layout.jsx'
import SectionHead from '../components/shared/SectionHead.jsx'
import useFadeTabs from '../components/shared/useFadeTabs.js'
import PageHero from '../components/community/PageHero.jsx'
import ImageStepCards from '../components/community/ImageStepCards.jsx'
import ReplayList from '../components/community/ReplayRow.jsx'
import { copy } from '../components/community/data.js'

const F = '/assets/pages/fireside/'

const TABS = [
  ['Upcoming Events', 'inline-product-page-tab-3ee70f.svg'],
  ['Watch Replays', 'inline-product-page-tab-0f7662.svg'],
  ['Become a Speaker', 'inline-product-page-tab-icon-eb5e6e.svg'],
]

const ATTEND = [
  ['Industry Wisdom', 'inline-icon-medium-1df4b2.svg', '681bbe6f0c7c257b3e711497_industry-wisdom.webp', 115],
  ['Tomorrow’s Trends', 'inline-icon-medium-66eeb3.svg', '681bbe702e90daa3591b4857_tomorrows-trends.webp', 93],
  ['Connect with People', 'inline-icon-medium-2c6bf5.svg', '681bbe6f77919dfb706705d8_connect-with-people.webp', 92],
].map(([title, icon, img, n]) => ({
  title,
  icon: <img src={F + icon} alt="" className="size-6" />,
  img: F + img,
  text: copy(`fireside-attend-${title}`, n),
}))

// fireside.md §1.1: Webflow tabs, fade out 100ms / in 300ms, ease. Default "Upcoming Events".
function FiresideTabs() {
  const { current, shown, paneStyle, select } = useFadeTabs(0, { durationIn: 300, durationOut: 100 })
  return (
    <div className="relative">
      <div
        role="tablist"
        className="mx-auto grid w-fit grid-cols-3 gap-4 overflow-hidden p-[3px] max-md:w-full max-md:rounded-10 max-sm:w-fit max-sm:grid-cols-1 max-sm:gap-y-3"
      >
        {TABS.map(([label, icon], i) => (
          <a
            key={label}
            href="#"
            role="tab"
            aria-selected={current === i}
            onClick={(e) => {
              e.preventDefault()
              select(i)
            }}
            className={`flex items-center justify-center gap-2 rounded-8 px-5 py-2.5 transition-all duration-200 ease-[ease] max-lg:px-3 max-lg:py-2 ${
              current === i ? 'opacity-100' : 'opacity-[.44] hover:opacity-75'
            }`}
          >
            <img src={F + icon} alt="" className="size-6" />
            <div className="text-label-m text-neutral-0">{label}</div>
          </a>
        ))}
      </div>
      <div className="relative overflow-hidden" style={paneStyle}>
        {shown === 0 && (
          <div className="py-12 max-md:py-10 max-sm:py-6">
            <div className="rounded-10 bg-solid-800 p-6 text-center text-body-m text-solid-200">No items found.</div>
          </div>
        )}
        {shown === 1 && (
          <div className="mx-auto max-w-[720px] py-12 text-left max-md:py-10 max-sm:py-6">
            <ReplayList />
          </div>
        )}
        {shown === 2 && (
          <div className="flex flex-col gap-5 py-5">
            <div className="rounded-28 border border-solid-700 bg-background px-[50px] py-[100px] max-sm:p-8">
              <SectionHead
                size="h3"
                bodySize="m"
                title="The stage is yours — if you’ve got something worth saying."
                body={copy('fireside-speaker', 124)}
              />
              <div className="mt-[30px] flex justify-center">
                <Button variant="dark-secondary" href="/fireside-application" label="Apply Now" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// specs/fireside.md
export default function Fireside() {
  return (
    <>
      <PageHero
        title="Discover tactics, tools & tips from top voices."
        subtitle={copy('fireside-hero', 110)}
        cta={{ href: '#', label: 'Subscribe to the Calendar' }}
        top={
          <div className="pb-10 max-sm:pb-6">
            <img
              src={`${F}681bb42926f71fca09455943_foreplay-fireside-logo-2.webp`}
              alt="foreplay fireside"
              className="h-auto w-40 max-lg:w-32"
            />
          </div>
        }
      >
        <ContentMain className="w-fit max-w-full max-md:w-full">
          <FiresideTabs />
        </ContentMain>
      </PageHero>

      <div className="relative">
        <PaddingY>
          <SectionContainer>
            <div className="mx-auto flex max-w-[1152px] flex-col gap-12">
              <SectionHead size="h3" bodySize="m" title="Why should I attend?" body={copy('fireside-why', 128)} />
              <ImageStepCards cards={ATTEND} />
            </div>
          </SectionContainer>
        </PaddingY>
      </div>

      <CTA />
    </>
  )
}
