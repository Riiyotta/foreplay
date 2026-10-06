// M1 gradient page hero (_shared-misc.md M1): /blog, /faq, /2026-paid-lp.
// `section#product-hero-section > container > .fireside-hero > .product-hero-content > .hero-text`
import { Container, SectionContainer } from '../shared/Layout.jsx'

// h2.text-display-h1.hero-title: Inter Display 60/68 (52/60 ≤767, 38/48 ≤479), radial gradient fill
export function GradientTitle({ children, className = '' }) {
  return (
    <h2
      className={`hero-title-fill text-center font-display text-display-h1 text-hero-title max-md:text-display-h1-md max-sm:text-display-h1-sm ${className}`}
    >
      {children}
    </h2>
  )
}

// h1.text-overline: 12/16 w550 ls 2px uppercase .36, centred
export const HeroOverline = ({ children }) => (
  <h1 className="text-center text-overline uppercase text-neutral-300">{children}</h1>
)

/**
 * overline, title, paragraph: copy. children: extra nodes inside `.hero-text` (e.g. FAQ buttons).
 * after: nodes after `.product-hero-content` inside the hero (blog grid, paid-lp button).
 * container: 'section' (1344, blog) | 'wide' (1440 `.container`, faq / paid-lp).
 * variant: 'fireside' (padding 80/0, ≤767 40/0) | 'product' (paid-lp nested .product-hero: padding-top 20, ≤479 24/0)
 * overlineOutside: paid-lp puts the overline above `.hero-text` as a sibling (gap 28).
 */
export default function GradientHero({
  overline,
  title,
  paragraph,
  children,
  after,
  container = 'section',
  variant = 'fireside',
  overlineOutside = false,
}) {
  const Wrap = container === 'section' ? SectionContainer : Container
  const pad = variant === 'product' ? 'pt-5 max-sm:py-6' : 'py-20 max-md:py-10'
  return (
    <section id="product-hero-section" className="relative">
      <Wrap>
        <div className={`flex flex-col items-center ${pad}`}>
          <div className="flex w-full flex-col items-center gap-7 max-sm:gap-6">
            {overlineOutside && overline && <HeroOverline>{overline}</HeroOverline>}
            <div className="flex w-full max-w-[900px] flex-col items-center gap-4 max-sm:gap-3">
              {!overlineOutside && overline && <HeroOverline>{overline}</HeroOverline>}
              <GradientTitle>{title}</GradientTitle>
              {paragraph && (
                <div className="max-w-lg">
                  <p className="text-center text-body-l text-neutral-100">{paragraph}</p>
                </div>
              )}
              {children}
            </div>
          </div>
          {after}
        </div>
      </Wrap>
    </section>
  )
}
