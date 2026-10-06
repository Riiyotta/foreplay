import CTA from '../components/CTA.jsx'
import Breadcrumb from '../components/templates/Breadcrumb.jsx'
import { BlogContainer, FullLine } from '../components/templates/Layout.jsx'
import { BlogTop, BlogTitle } from '../components/templates/TitleBlock.jsx'
import { ContentMain } from '../components/shared/Layout.jsx'
import ReplayList from '../components/community/ReplayRow.jsx'
import { copy } from '../components/community/data.js'

// specs/fireside-replays.md
export default function FiresideReplays() {
  return (
    <>
      <section>
        <BlogContainer>
          <Breadcrumb crumbs={[{ label: 'Fireside Events', href: '/fireside' }, { label: 'Replays' }]} />
        </BlogContainer>
      </section>
      <section>
        <BlogContainer>
          <BlogTop>
            <div className="flex flex-col gap-2">
              <BlogTitle>Watch Fireside Replays</BlogTitle>
              <div className="text-neutral-100">
                <div className="text-body-l">{copy('fireside-replays-lead', 90)}</div>
              </div>
            </div>
          </BlogTop>
        </BlogContainer>
        <FullLine />
      </section>
      <section id="product-hero-section" className="relative">
        <BlogContainer>
          <ContentMain>
            <ReplayList />
          </ContentMain>
        </BlogContainer>
      </section>
      <section>
        <div className="p-2" />
      </section>
      <CTA />
    </>
  )
}
