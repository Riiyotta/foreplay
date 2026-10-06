// /blog — specs/blog.md (M1 hero + header grid, categories, S4 grid with ?page=N pagination, CTA)
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import CTA from '../components/CTA.jsx'
import GradientHero from '../components/misc/GradientHero.jsx'
import { BlogCategories, BlogHeaderGrid, BlogPagination } from '../components/misc/Blog.jsx'
import { BlogList } from '../components/templates/CardGrid.jsx'
import { SectionContainer } from '../components/templates/Layout.jsx'
import { allCategories, livePosts } from '../components/templates/data.js'

const PER_PAGE = 24
// post.json `order` is the live blog order (newest first).
const POSTS = [...livePosts].sort((a, b) => (a.order ?? 1e9) - (b.order ?? 1e9))
const FEATURED = { post: POSTS[0], img: '/assets/pages/blog/6a341585b0dc1e82740a52f6_maxresdefault.jpg', excerptLen: 145 }
const POPULAR = POSTS.slice(0, 4)
const TAGS = allCategories().map((c) => ({ label: c.title, href: `/category/${c.slug}` }))

export default function Blog() {
  const [params] = useSearchParams()
  const pages = Math.ceil(POSTS.length / PER_PAGE)
  const page = Math.min(pages, Math.max(1, parseInt(params.get('page') || '1', 10) || 1))
  const cards = POSTS.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  return (
    <>
      <GradientHero
        overline="Blog"
        title="Free insights and guides for better ad creative"
        after={
          <div className="w-full pt-12 max-sm:pt-16">
            <BlogHeaderGrid featured={FEATURED} popular={POPULAR} />
          </div>
        }
      />

      <div>
        <SectionContainer>
          <div className="flex flex-col gap-9 pb-[120px]">
            <div className="flex flex-col gap-2">
              <h2 className="text-[18px] font-550 leading-6 tracking-[-0.26px] text-neutral-0">Explore More Blogs</h2>
              <p className="text-body-m text-neutral-100">Learn more about how to get the most from your advertising.</p>
            </div>
            <BlogCategories tags={TAGS} />
            <BlogList posts={cards} baselineGap />
            <BlogPagination page={page} pages={pages} />
          </div>
        </SectionContainer>
      </div>

      <CTA />
    </>
  )
}
