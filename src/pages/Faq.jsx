// /faq — specs/faq.md (M1 hero + faq-buttons, 65-row accordion in the same .container, CTA)
import CTA from '../components/CTA.jsx'
import GradientHero from '../components/misc/GradientHero.jsx'
import { FaqButtons, FaqItem } from '../components/shared/Faq.jsx'
import { Container } from '../components/shared/Layout.jsx'
import RichText from '../components/templates/RichText.jsx'
import { faqAnswer } from '../components/templates/standin.js'
import faqs from '../data/faqs.json'


const ITEMS = [...faqs].sort((a, b) => (a.order ?? 1e9) - (b.order ?? 1e9))

export default function Faq() {
  return (
    <>
      <GradientHero overline="FAQ" title="Questions about Foreplay" container="wide">
        <FaqButtons />
      </GradientHero>
      <Container>
        <div data-accordion-container="" className="mx-auto w-full max-w-[752px]">
          {ITEMS.map((f) => {
            const blocks = faqAnswer(f)
            return (
              <FaqItem
                key={f.slug}
                q={f.question || f.title}
                a={blocks.length ? <RichText variant="plain" blocks={blocks} className="misc-faq-rt" /> : null}
              />
            )
          })}
        </div>
      </Container>
      <CTA />
    </>
  )
}
