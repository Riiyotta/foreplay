import { IconExpertSwipeFiles, IconMobileAppFeature, IconApiFeature } from './svgs.jsx'
import { Overline } from './shared.jsx'
import SecurityGrid from './shared/SecurityGrid.jsx'

const A = '/assets/'
const SITE = ''

export const CARDS = [
  {
    Icon: IconExpertSwipeFiles,
    title: 'Expert Swipe Files',
    img: `${A}681947a3da1e34aa66fcdccb_expert-boards-img.webp`,
    alt: 'expert swipe files',
    text: "Unlock the private swipe files behind the world's best ad creative specialists.",
    cta: 'Browse Experts',
    href: `${SITE}/experts`,
  },
  {
    Icon: IconMobileAppFeature,
    title: 'Mobile App',
    img: `${A}681947a2d93fde0a00822fcf_mobile-app-block.webp`,
    alt: 'foreplay mobile app screenshot',
    text: 'Take your creative workflow on the go and save ads from anywhere.',
    cta: 'Download App',
    href: `${SITE}/mobile-app`,
  },
  {
    Icon: IconApiFeature,
    title: 'API',
    img: `${A}68194b5e0cead2d7bd121660_Frame%201171276106.webp`,
    alt: 'competitor ad api ',
    text: 'Enriched competitor advertising data in an agent agnostic API.',
    cta: 'Learn More',
    href: `${SITE}/api`,
  },
]

// CLONE_SPEC §6 — "Miles beyond the status quo"
export default function Features() {
  return (
    <section>
      <div className="flex flex-col gap-[108px] overflow-hidden py-[108px] max-lg:gap-10 max-sm:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-10 max-lg:px-8 max-md:px-6">
          <div className="mx-auto flex max-w-[1152px] flex-col gap-12">
            <div className="mx-auto flex w-full max-w-[720px] flex-col items-center justify-start gap-3 text-center">
              <div className="flex flex-col items-center gap-3">
                <div>
                  <Overline>Features</Overline>
                </div>
                <div className="text-neutral-0 [text-wrap:balance]">
                  <h2 className="font-display text-display-h2 max-lg:text-display-h2-lg max-sm:text-display-h2-sm">
                    Miles beyond the status quo
                  </h2>
                </div>
                <div className="max-w-[512px] [text-wrap:pretty]">
                  <div className="flex-1 text-neutral-100">
                    <p className="text-body-l">
                      Say goodbye to juggling half-baked tools. Foreplay offers enterprise grade functionality with
                      beginner friendly ease of use.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <SecurityGrid cards={CARDS.map(({ Icon, ...c }) => ({ ...c, icon: <Icon /> }))} />
          </div>
        </div>
      </div>
    </section>
  )
}
