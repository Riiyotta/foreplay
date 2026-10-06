// /comparison/:slug — specs/template-comparison.md
import { useParams } from 'react-router-dom'
import CTA from '../../components/CTA.jsx'
import { CARDS } from '../../components/Features.jsx'
import { Container } from '../../components/shared/Layout.jsx'
import SectionHead from '../../components/shared/SectionHead.jsx'
import SecurityGrid from '../../components/shared/SecurityGrid.jsx'
import { TemplateNotFound } from '../../components/templates/Layout.jsx'
import ProductTabs5 from '../../components/misc/ProductTabs5.jsx'
import {
  ComparisonHero,
  ComparisonPricing,
  ComparisonReviews,
  ComparisonTable,
  PsaSticky,
} from '../../components/misc/Comparison.jsx'
import { standin } from '../../components/misc/copy.js'
import entries from '../../data/comparison.json'

// §6: homepage feature cards without the ghost button (text only in .card-button-holder)
const FEATURE_CARDS = CARDS.map(({ Icon, cta, href, ...c }) => ({ ...c, icon: <Icon /> }))

export default function Comparison() {
  const { slug } = useParams()
  const entry = entries.find((e) => e.slug === slug)
  if (!entry || !entry.h) return <TemplateNotFound />

  return (
    <>
      <ComparisonHero entry={entry} />
      <ComparisonReviews entry={entry} />
      <ProductTabs5
        key={`tabs-${entry.slug}`}
        head={{ overline: 'ALL-INCLUSIVE', title: 'Get 5 Products in 1 with Foreplay', body: standin('cmp-tabs', 127) }}
        order={entry.tabOrder}
        initial={entry.tabsDefault}
      />
      <ComparisonPricing entry={entry} />
      <ComparisonTable entry={entry} />
      {/* §6 `.lens-enrichment_security` */}
      <div className="flex flex-col gap-[108px] overflow-hidden py-[108px] max-lg:gap-10 max-sm:py-20">
        <Container>
          <div className="mx-auto flex max-w-[1152px] flex-col gap-12">
            <SectionHead overline="MOST LOVED" title="Exclusive Foreplay Features" body={standin('cmp-most-loved', 158)} />
            <SecurityGrid cards={FEATURE_CARDS} />
          </div>
        </Container>
      </div>
      <CTA
        title={entry.ctaTitle}
        paragraph={standin(`cmp:${entry.slug}:cta`, entry.ctaParaLen)}
        secondary={{ label: 'Book a Demo', href: '/book-demo' }}
      />
      <PsaSticky key={`psa-${entry.slug}`} textLen={entry.psaTextLen} />
    </>
  )
}
