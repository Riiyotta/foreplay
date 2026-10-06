import { SharingTab0, SharingTab1, SharingTab2 } from './svgs.jsx'
import { Button, Overline, useTabs } from './shared.jsx'

const A = '/assets/'
const GID = 'sharing-presenting'

const TABS = [
  {
    Icon: SharingTab0,
    label: 'Inspiration & Moodboards',
    title: 'Curate & collaborate on creative genius',
    body: 'Like Pinterest for ad inspiration, Foreplay lets you create mood boards to communicate internally or show off externally.',
    mockup: `${A}680c3ed43df5ea8859a6ac18_home-mockup-1.webp`,
    message: `${A}681926627347f25bbe9bb302_moodboard-message.webp`,
    messageAlt: 'marketing team message',
    messagePos: 'top-1/4 left-[5%]',
  },
  {
    Icon: SharingTab1,
    label: 'Performance Reports',
    title: 'Highlight trends. Back it with proof.',
    body: 'Turn creative data into deck-worthy insights. Share visual reports that break down what’s driving performance — and what’s just taking up space.',
    mockup: `${A}680c3ed4458a2826d337aa28_home-mockup-2.webp`,
    message: `${A}681927286de6a527f591fa12_reports-message.webp`,
    messageAlt: 'marketing team message',
    messagePos: 'top-[58%] left-[7%]',
  },
  {
    Icon: SharingTab2,
    label: 'Briefs & Asset Collection',
    title: 'Brief once. Collect everything.',
    body: (
      <>
        Send one brief to multiple creators and gather all their work in one clean, organized place.
        <br />
        <br />
        No more chasing links, files, or context across multiple platforms.
      </>
    ),
    mockup: `${A}680c3ed40c687a098d45485e_home-mockup-3.webp`,
    message: `${A}681927698f437ece92472cac_upload-content-message.webp`,
    messageAlt: 'upload assets to brief',
    messagePos: 'bottom-[16%] left-[29%]',
  },
]

// CLONE_SPEC §5.3 — both pane groups switch together via the same tabs.
export default function Sharing() {
  const { active, linkProps, paneProps } = useTabs(TABS.length)
  return (
    <div className="mx-auto w-full max-w-[1440px] px-10 max-lg:px-8 max-md:px-6">
      <div
        data-tabs=""
        className="grid grid-cols-2 items-stretch justify-between gap-10 pt-24 2xl:gap-20 max-lg:flex max-lg:flex-col max-lg:items-center max-sm:gap-2 max-sm:pt-20"
      >
        <div className="flex flex-col gap-10 max-lg:pb-0">
          <div className="flex w-full max-w-[720px] flex-col items-start justify-start gap-3 text-left max-md:gap-2">
            <div className="text-solid-500 [text-wrap:pretty]">
              <Overline>SHARING &amp; PRESENTING</Overline>
            </div>
            <div className="[text-wrap:balance]">
              <h2 className="font-display text-display-h3">Beautifully present wins and opportunities</h2>
            </div>
            <div className="[text-wrap:balance]">
              <div className="text-solid-600">
                <p className="text-body-l">
                  Impress your clients or wow your co-workers. Foreplay makes it seamless to share inspiration,
                  performance reports and briefs with anyone, anywhere.
                </p>
              </div>
            </div>
          </div>
          <div className="h-px bg-solid-50" />
          <div className="relative z-2 flex gap-3 max-sm:flex-col max-sm:gap-8">
            <div role="tablist" className="flex flex-1 flex-col gap-1.5">
              {TABS.map(({ Icon, label }, i) => (
                <div
                  key={label}
                  {...linkProps(i, GID)}
                  className={`flex cursor-pointer items-center justify-start gap-1.5 rounded-10 py-1.5 pl-1.5 pr-5 transition-all duration-400 ease-expo hover:bg-solid-25 focus:outline-none ${
                    active === i ? 'is-active bg-solid-25' : 'bg-transparent'
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <Icon />
                  </div>
                  <div className="text-label-s">{label}</div>
                </div>
              ))}
            </div>
            <div data-tab-panes="" className="block flex-1">
              {TABS.map((t, i) => (
                <div key={t.label} {...paneProps(i, GID)} className={active === i ? 'is-active flex' : 'hidden'}>
                  <div className="flex w-full flex-col gap-3 rounded-18 bg-solid-25 p-2">
                    <div className="flex flex-col gap-3 p-2">
                      <div className="text-label-s">{t.title}</div>
                      <div className="text-body-s">{t.body}</div>
                    </div>
                    <Button variant="light-primary" href="https://app.foreplay.co/sign-up" label="Start For Free" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          data-tab-panes=""
          className="-mr-[999px] -mt-20 aspect-[720/680] w-[60vw] max-w-[720px] max-lg:mr-0 max-lg:mt-0 max-lg:h-[640px] max-lg:w-auto max-lg:max-w-none max-md:aspect-auto max-md:h-auto max-md:max-h-[480px] max-md:w-full"
        >
          {TABS.map((t, i) => (
            <div
              key={t.label}
              {...paneProps(i, GID, '-media')}
              className={`relative size-full max-sm:h-[320px] ${
                active === i
                  ? 'is-active flex items-center justify-center max-md:rounded-20 max-md:bg-solid-25 max-sm:flex-col max-sm:items-center max-sm:justify-start'
                  : 'hidden'
              }`}
            >
              <img
                className="size-full max-md:h-[400px] max-md:w-auto max-sm:h-[320px] max-sm:max-w-none"
                src={t.mockup}
                width="720"
                height="680"
                alt={`Hands holding a tablet: ${t.label}`}
                loading="eager"
              />
              <img className={`absolute w-[45%] ${t.messagePos}`} src={t.message} alt={t.messageAlt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
