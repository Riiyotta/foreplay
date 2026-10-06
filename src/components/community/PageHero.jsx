import { Button } from '../shared.jsx'
import { Container } from '../shared/Layout.jsx'
import { HeroContent } from '../product/ProductHero.jsx'

/* C1 PageHero (specs/_shared-community.md §C1): `section#product-hero-section.relative > .container > .fireside-hero`.
   titleStyle 'h1' → `h2.text-display-h1.hero-title` (gradient, reuses product HeroContent);
   titleStyle 'h2' → `h2.text-display-h2` (#fff), used by bounties.
   heroClassName overrides the `.fireside-hero` padding (bounties uses its own).
   top: node above the content (fireside logo); children: nodes after it (tabs, bounties extras). */
export default function PageHero({
  overline,
  title,
  subtitle,
  cta,
  titleStyle = 'h1',
  heroClassName = 'py-20 max-md:py-10',
  top,
  className = '',
  children,
}) {
  const action = cta && (
    <div>
      <Button variant="dark-primary" iconFull {...cta} />
    </div>
  )
  return (
    <section id="product-hero-section" className={`relative ${className}`}>
      <Container>
        <div className={`relative flex flex-col items-center text-center ${heroClassName}`}>
          {top}
          {titleStyle === 'h1' ? (
            <HeroContent overline={overline} title={title} subtitle={subtitle} actions={action} overlineInside />
          ) : (
            <div className="relative flex flex-col items-center gap-7 max-sm:gap-6 max-sm:pb-6">
              <div className="flex max-w-[900px] flex-col items-center gap-4 max-sm:gap-3">
                {overline && <h1 className="text-overline uppercase text-neutral-300">{overline}</h1>}
                <div className="text-neutral-0">
                  <h2 className="font-display text-display-h2 max-lg:text-display-h2-lg max-sm:text-display-h2-sm">
                    {title}
                  </h2>
                </div>
                {subtitle && (
                  <div className="max-w-[512px]">
                    <p className="text-body-l text-neutral-100">{subtitle}</p>
                  </div>
                )}
              </div>
              {action}
            </div>
          )}
          {children}
        </div>
      </Container>
    </section>
  )
}
