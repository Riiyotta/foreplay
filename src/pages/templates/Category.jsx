// /category/:slug — specs/template-category.md (S9 hero + S4 grid)
import { useParams } from 'react-router-dom'
import CTA from '../../components/CTA.jsx'
import { allCategories, getEntry, postsInCategory } from '../../components/templates/data.js'
import { paragraph, rng } from '../../components/templates/standin.js'
import { Container, SectionContainer, SmartLink, TemplateNotFound } from '../../components/templates/Layout.jsx'
import { FiresideHero, HeroContent, SectionHead } from '../../components/templates/CenteredHero.jsx'
import { BlogList } from '../../components/templates/CardGrid.jsx'

export default function Category() {
  const { slug } = useParams()
  const cat = getEntry('category', slug)
  if (!cat) return <TemplateNotFound />
  const posts = postsInCategory(cat.slug)

  return (
    <>
      <section className="relative">
        <Container>
          <FiresideHero>
            <HeroContent>
              <SectionHead overline={cat.overline || 'Categories'} title={cat.title} paragraph={paragraph(rng(`${cat.slug}:desc`), 150)} />
            </HeroContent>
          </FiresideHero>
        </Container>
      </section>

      <div>
        <SectionContainer>
          <div className="flex flex-col gap-9 pb-[120px]">
            <div className="flex items-start gap-[15px] border-y border-neutral-700 py-9 max-lg:flex-col">
              <div className="flex-none">
                <div className="text-neutral-100">
                  <div className="text-body-m">Topics &amp; Categories:</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {allCategories().map((c) => (
                  <SmartLink
                    key={c.slug}
                    href={`/category/${c.slug}`}
                    aria-current={c.slug === cat.slug ? 'page' : undefined}
                    className="rounded-10 px-3 py-1.5 text-neutral-25 no-underline shadow-ring-product transition-all duration-200 hover:bg-neutral-800"
                  >
                    <div className="text-body-s">{c.title}</div>
                  </SmartLink>
                ))}
              </div>
            </div>
            {/* Empty category: Webflow "No items found." box is hidden (spec allows) */}
            {posts.length > 0 && <BlogList posts={posts} />}
          </div>
        </SectionContainer>
      </div>
      <CTA />
    </>
  )
}
