import ChromeExtension from '../ChromeExtension.jsx'
import { SectionContainer, PaddingY, ContentMain } from '../shared/Layout.jsx'
import SectionHead from '../shared/SectionHead.jsx'
import useFadeTabs from '../shared/useFadeTabs.js'

/* S4 "CORE FEATURES": Webflow `.w-tabs` (fade out 100ms → in 300ms, ease) with a 3-column
   `.product-page-tabs-menu` and a 1264×711 tab image, followed by the homepage Chrome-extension card.
   variant 'spyder': 5 stacked icon tabs, `.spyder-ui` screenshot + `.spyder-description` card, no extension.
   tabs: [{ label, icon: ReactNode, img, alt, description? }] */
export default function ProductTabs({ overline = 'CORE FEATURES', title, body, tabs, variant = 'default', extension = true }) {
  const { current, shown, paneStyle, select } = useFadeTabs(0)
  const spyder = variant === 'spyder'
  const tab = tabs[shown]
  return (
    <div>
      <PaddingY>
        <SectionContainer>
          <SectionHead overline={overline} title={title} body={body} />
          <ContentMain>
            <div className="relative flex flex-col items-center">
              <div
                role="tablist"
                className={`relative grid w-full justify-center gap-4 overflow-hidden p-1 max-md:gap-y-0 max-md:rounded-10 ${
                  spyder
                    ? 'grid-cols-5 max-lg:flex max-lg:flex-wrap max-lg:items-center max-lg:px-[57px] max-md:gap-y-4 max-md:px-1'
                    : 'grid-cols-3 max-sm:grid-cols-1'
                }`}
              >
                {tabs.map((t, i) => (
                  <a
                    key={t.label}
                    href={`#tab-${i}`}
                    role="tab"
                    aria-selected={current === i}
                    onClick={(e) => {
                      e.preventDefault()
                      select(i)
                    }}
                    className={`relative flex items-center gap-2 rounded-8 px-5 py-2.5 text-center text-white transition-all duration-200 max-lg:px-3 max-lg:py-2 max-md:flex-col max-md:justify-start ${
                      spyder ? 'flex-col justify-start' : 'justify-center'
                    } ${current === i ? 'opacity-100' : 'opacity-44 hover:opacity-75'}`}
                  >
                    <div className="size-6">{t.icon}</div>
                    <div className="text-label-m">{t.label}</div>
                  </a>
                ))}
              </div>
              <div className="relative w-full overflow-visible">
                <div role="tabpanel" className="relative" style={paneStyle}>
                  <div className="flex flex-col gap-5 py-5">
                    {spyder ? (
                      <>
                        <img
                          className="relative z-1 mx-auto w-full rounded-[15px] border border-spyder-ui-border max-md:rounded-8 max-sm:rounded-6"
                          src={tab.img}
                          alt={tab.alt ?? ''}
                          loading="eager"
                        />
                        <div className="relative mx-auto flex w-full max-w-[720px] gap-10 overflow-hidden rounded-32 p-10 shadow-ring-extension max-md:max-w-[480px] max-md:flex-col max-sm:gap-8 max-sm:rounded-16 max-sm:p-8">
                          <div className="flex flex-1 flex-col gap-5 text-center">
                            <p className="text-body-l text-neutral-100 [text-wrap:balance]">{tab.description}</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <img className="w-full rounded-32 max-sm:rounded-16" src={tab.img} alt={tab.alt ?? ''} loading="eager" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            {extension && <ChromeExtension />}
          </ContentMain>
        </SectionContainer>
      </PaddingY>
    </div>
  )
}
