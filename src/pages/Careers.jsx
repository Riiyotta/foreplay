// /careers — specs/careers.md (S9 demo hero + white block jobs list; no CTA)
import { DemoHero, SectionHead } from '../components/templates/CenteredHero.jsx'
import { SectionContainer, WhiteBlock } from '../components/shared/Layout.jsx'
import JobsList from '../components/misc/JobsList.jsx'
import { standin } from '../components/misc/copy.js'
import careers from '../data/careers.json'

// Page order on the live site (careers.page-data.json)
const ORDER = ['customer-support-representative', 'ai-ops-automation-engineer', 'account-executive']
const JOBS = ORDER.map((slug) => careers.find((c) => c.slug === slug)).filter(Boolean)

export default function Careers() {
  return (
    <>
      <div className="overflow-hidden">
        <SectionContainer>
          <DemoHero>
            <SectionHead overline="Careers" title="Jobs @ Foreplay" paragraph={standin('careers-hero', 177)} />
          </DemoHero>
        </SectionContainer>
      </div>
      <WhiteBlock>
        <SectionContainer>
          <div className="mx-auto flex max-w-[940px] flex-col gap-9 py-20 max-sm:gap-8 max-sm:pb-8 max-sm:pt-12">
            <JobsList jobs={JOBS} />
          </div>
        </SectionContainer>
      </WhiteBlock>
    </>
  )
}
