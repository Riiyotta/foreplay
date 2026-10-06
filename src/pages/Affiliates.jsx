import { SectionContainer, ContentMain } from '../components/shared/Layout.jsx'
import Faq from '../components/shared/Faq.jsx'
import PageHero from '../components/community/PageHero.jsx'
import ImageStepCards from '../components/community/ImageStepCards.jsx'
import { copy } from '../components/community/data.js'

const A = '/assets/pages/affiliates/'

const STEPS = [
  ['1. Signup Instantly', '6835eba827d5b7821771ad71_affiliate-1.webp', 123],
  ['2. Share your love of Foreplay', '6835eba8cb712c81db2fe4f7_affiliate-2.webp', 129],
  ['3. Get Paid', '6835eba861799402175d285e_affiliate-3.webp', 104],
].map(([title, img, n]) => ({ title, img: A + img, text: copy(`affiliates-${title}`, n) }))

const FAQS = [
  ['Can I Advertise to Your Domain?', 176],
  ['How long is your cookie window?', 152],
  ['As an agency owner, can I use my affiliate link with my clients?', 177],
  ['How do I get paid my commission?', 215],
].map(([q, n]) => ({ q, a: <p>{copy(`affiliates-faq-${q}`, n)}</p> }))

// specs/affiliates.md. No final CTA.
export default function Affiliates() {
  return (
    <>
      <PageHero
        overline="AFFILIATE PROGRAM"
        title="Foreplay is better with friends"
        subtitle={copy('affiliates-hero', 128)}
        cta={{
          href: 'https://foreplay.getrewardful.com/signup',
          target: '_blank',
          rel: 'noopener noreferrer',
          label: 'Become an Affiliate',
        }}
      />
      <div>
        <SectionContainer>
          <ContentMain>
            <ImageStepCards cards={STEPS} />
          </ContentMain>
        </SectionContainer>
      </div>
      <Faq
        overline="FAQ"
        title="Affiliate program questions"
        body={copy('affiliates-faq-lead', 72)}
        items={FAQS}
      />
    </>
  )
}
