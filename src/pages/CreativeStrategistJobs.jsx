// /creative-strategist-jobs — specs/creative-strategist-jobs.md (S9 hero, section head, 66-card S4 grid, CTA)
import CTA from '../components/CTA.jsx'
import { DemoHero, SectionHead as HeroHead } from '../components/templates/CenteredHero.jsx'
import SectionHead from '../components/shared/SectionHead.jsx'
import { SectionContainer } from '../components/templates/Layout.jsx'
import { BlogList } from '../components/templates/CardGrid.jsx'
import { getEntry } from '../components/templates/data.js'
import { standin } from '../components/misc/copy.js'
import { CSJ_SLUGS } from '../components/misc/pageData.js'

// Card order from the page data; post fields (title/author/cover) come from post.json.
const POSTS = CSJ_SLUGS.map((slug) => getEntry('post', slug)).filter(Boolean)

export default function CreativeStrategistJobs() {
  return (
    <>
      <div className="overflow-hidden">
        <SectionContainer>
          <DemoHero>
            <HeroHead
              overline="Creative Strategy Jobs"
              title="Creative Strategist Job Board"
              as="h2"
              paragraph={standin('csj-hero', 151)}
            />
          </DemoHero>
        </SectionContainer>
      </div>
      <div>
        <SectionContainer>
          <div className="py-[25px]" />
          <SectionHead
            overline="Integrations"
            title="Creative Strategy Articles"
            body="Read articles about how to become a top 1% creative strategist."
          />
          <div className="py-[25px]" />
          <div className="flex flex-col gap-9 pb-[120px]">
            <BlogList posts={POSTS} />
          </div>
        </SectionContainer>
      </div>
      <CTA />
    </>
  )
}
