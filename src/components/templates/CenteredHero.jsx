// S9 CenteredHero: `.fireside-hero` / `.demo-hero` + `.section-head` (specs/_shared-templates.md S9).
import { Overline } from '../shared.jsx'

// `.section-head` (720 max, gap 12, centred) > `.section-head-wrapper`
export function SectionHead({ overline, title, paragraph, as: Tag = 'h1' }) {
  return (
    <div className="mx-auto flex w-full max-w-[720px] flex-col items-center gap-3 text-center">
      <div className="flex flex-col gap-3">
        {overline && <Overline className="text-neutral-300">{overline}</Overline>}
        <div className="text-neutral-0">
          <Tag className="font-display text-display-h2 max-lg:text-display-h2-lg max-sm:text-display-h2-sm">{title}</Tag>
        </div>
        {paragraph && (
          <div className="mx-auto max-w-[512px] [text-wrap:pretty]">
            <div className="text-neutral-100">
              <p className="text-body-l">{paragraph}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// `.fireside-hero`: padding 80/80 (≤767 40/40), inside `.container`
export function FiresideHero({ className = '', children }) {
  return <div className={`relative flex flex-col items-center py-20 text-center max-md:py-10 ${className}`}>{children}</div>
}

// `.product-hero-content`: gap 28 (≤479 gap 24, padding-bottom 24)
export function HeroContent({ className = '', children }) {
  return <div className={`flex flex-col gap-7 max-sm:gap-6 max-sm:pb-6 ${className}`}>{children}</div>
}

// `.demo-hero`: padding 120/120 (≤767 80, ≤479 40), inside `.container.section-container`
export function DemoHero({ children }) {
  return <div className="flex flex-col items-center py-[120px] max-md:py-20 max-sm:py-10">{children}</div>
}
