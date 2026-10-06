// /industries/:slug — specs/template-industries.md
import { useParams } from 'react-router-dom'
import CTA from '../../components/CTA.jsx'
import { TemplateNotFound } from '../../components/templates/Layout.jsx'
import ProductTabs5 from '../../components/misc/ProductTabs5.jsx'
import { IndustryExamples, IndustryHero, IndustryTestimonials } from '../../components/misc/Industry.jsx'
import { standin } from '../../components/misc/copy.js'
import entries from '../../data/industries.json'

export default function Industry() {
  const { slug } = useParams()
  const entry = entries.find((e) => e.slug === slug)
  if (!entry || !entry.h) return <TemplateNotFound />
  const th = entry.tabsHead

  return (
    <>
      <IndustryHero entry={entry} />
      <IndustryTestimonials entry={entry} />
      <ProductTabs5
        key={`tabs-${entry.slug}`}
        head={{ overline: th.overline, title: th.title, body: standin(`ind:${entry.slug}:tabs`, th.paraLen) }}
        order={entry.tabOrder}
        initial={entry.tabsDefault}
      />
      <IndustryExamples entry={entry} />
      <CTA
        title={entry.ctaTitle}
        paragraph={standin(`ind:${entry.slug}:cta`, entry.ctaParaLen)}
        secondary={{ label: 'Book a Demo', href: '/book-demo' }}
      />
    </>
  )
}
