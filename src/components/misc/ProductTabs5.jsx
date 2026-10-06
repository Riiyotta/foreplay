// M2 "5 products in 1" Webflow tabs (_shared-misc.md M2): comparison + industries templates.
// Each pane is the homepage product card (ProductSections ProductCard) with a "Book a Demo" ghost button.
import { ProductCard, PRODUCTS } from '../ProductSections.jsx'
import { PaddingY, SectionContainer, ContentMain } from '../shared/Layout.jsx'
import SectionHead from '../shared/SectionHead.jsx'
import useFadeTabs from '../shared/useFadeTabs.js'

const P = '/assets/pages/'
const TABS = {
  Lens: { key: 'lens', title: 'Creative Analytics & Reporting', icon: `${P}lens-creative-analytics/682f9f725170de3b3258d310_pi-lens-hq.webp` },
  'Swipe File': { key: 'swipe', icon: `${P}swipe-file/682f9f72df2782e8df1d1114_pi-swipefile-hq.webp` },
  Discovery: { key: 'discovery', icon: `${P}discovery/682f9f722b39359a238b0ff9_pi-discovery-hq.webp` },
  Spyder: { key: 'spyder', icon: '/assets/templates/comparison/682f8f898e2734095cb3d708_pi-spyder.webp' },
  Briefs: { key: 'briefs', icon: `${P}briefs/682f9f72dc306ab5bf957aea_pi-briefs-hq.webp` },
}
const GHOST = { label: 'Book a Demo', href: '/book-demo' }

/** head: {overline, title, body}; order: tab labels; initial: default tab label (CMS tabsDefault) */
export default function ProductTabs5({ head, order, initial }) {
  const start = Math.max(0, order.indexOf(initial))
  const { current, shown, paneStyle, select } = useFadeTabs(start, { durationIn: 300, durationOut: 100 })
  return (
    <div className="section">
      <PaddingY>
        <SectionContainer>
          <SectionHead {...head} />
          <ContentMain>
            <div className="flex flex-col items-center">
              <div
                role="tablist"
                className="grid w-full grid-cols-5 gap-4 overflow-hidden p-1 max-lg:grid-cols-3 max-lg:gap-3 max-sm:grid-cols-1 max-sm:rounded-10"
              >
                {order.map((label, i) => (
                  <a
                    key={label}
                    href="#"
                    role="tab"
                    aria-selected={current === i}
                    onClick={(e) => {
                      e.preventDefault()
                      select(i)
                    }}
                    className={`flex items-center gap-2 rounded-[15px] border p-2.5 no-underline max-lg:p-2 max-md:flex-col max-md:text-center transition-all duration-200 ease-[ease] ${
                      current === i ? 'border-neutral-300 opacity-100' : 'border-neutral-500 opacity-44 hover:opacity-75'
                    }`}
                  >
                    <img src={TABS[label].icon} alt="" className="size-10 max-lg:size-[30px]" />
                    <div className="text-label-m text-neutral-0">{label}</div>
                  </a>
                ))}
              </div>
              <div className="w-full">
                <div role="tabpanel" style={paneStyle} className="flex flex-col gap-5 py-5">
                  <ProductCard key={order[shown]} product={PRODUCTS[TABS[order[shown]].key]} title={TABS[order[shown]].title} ghost={GHOST} />
                </div>
              </div>
            </div>
          </ContentMain>
        </SectionContainer>
      </PaddingY>
    </div>
  )
}
