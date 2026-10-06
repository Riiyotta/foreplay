// /faqs/:slug — specs/template-faqs.md
import { useParams } from 'react-router-dom'
import CTA from '../../components/CTA.jsx'
import { getEntry } from '../../components/templates/data.js'
import { faqAnswer } from '../../components/templates/standin.js'
import { BlogContainer, FullLine, TemplateNotFound } from '../../components/templates/Layout.jsx'
import Breadcrumb from '../../components/templates/Breadcrumb.jsx'
import { BlogBody, BlogTitle, BlogTop } from '../../components/templates/TitleBlock.jsx'
import RichText from '../../components/templates/RichText.jsx'

export default function FaqItem() {
  const { slug } = useParams()
  const faq = getEntry('faqs', slug)
  if (!faq) return <TemplateNotFound />
  const answer = faqAnswer(faq)
  const question = faq.question || faq.title

  return (
    <>
      <section>
        <BlogContainer>
          <Breadcrumb crumbs={[{ label: 'FAQs', href: '/faq' }, { label: question }]} />
        </BlogContainer>
      </section>
      <section>
        <BlogContainer>
          <BlogTop>
            <BlogTitle>{question}</BlogTitle>
            {answer.length > 0 && (
              <BlogBody>
                <div>
                  <div className="text-body-m text-neutral-100">
                    <RichText blocks={answer} variant="plain" />
                  </div>
                </div>
              </BlogBody>
            )}
          </BlogTop>
        </BlogContainer>
        <FullLine />
      </section>
      <CTA />
    </>
  )
}
