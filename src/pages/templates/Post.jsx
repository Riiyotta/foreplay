// /post/:slug — specs/template-post.md
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import CTA from '../../components/CTA.jsx'
import { Button } from '../../components/shared.jsx'
import { getAuthor, getEntry, relatedPosts } from '../../components/templates/data.js'
import { postBody, postExcerpt, postSummary } from '../../components/templates/standin.js'
import { BlogContainer, BlogLine, Container, ICONS, MaskIcon, TemplateNotFound } from '../../components/templates/Layout.jsx'
import Breadcrumb from '../../components/templates/Breadcrumb.jsx'
import { BlogBody, BlogTitle, BlogTop } from '../../components/templates/TitleBlock.jsx'
import RichText, { tocFromBlocks } from '../../components/templates/RichText.jsx'
import StickyToc from '../../components/templates/StickyToc.jsx'
import TrialCard from '../../components/templates/TrialCard.jsx'
import RelatedCarousel from '../../components/templates/RelatedCarousel.jsx'

const SOCIAL_ORDER = ['website', 'linkedin', 'twitter', 'instagram', 'youtube', 'facebook', 'tiktok']

// `.blog-author` (§2.3.2 item 1, duplicated in §2.5)
function AuthorRow({ post }) {
  const author = getAuthor(post.author)
  const links = { ...(author?.socials || {}), ...(author?.website ? { website: author.website } : {}) }
  return (
    <div className="flex items-center gap-4 py-10 max-md:grid max-md:grid-cols-[auto_1fr] max-md:grid-rows-[auto_auto] max-md:py-6 max-sm:py-4">
      <div className="relative size-12 overflow-hidden rounded-ray">
        {post.authorAvatar && <img src={post.authorAvatar} alt="" className="size-12 rounded-ray object-cover" />}
        <div className="pointer-events-none absolute inset-0 rounded-ray border border-neutral-600" />
      </div>
      <div className="flex-1">
        <div className="flex flex-col items-start gap-1">
          <div className="text-neutral-25">
            <div className="text-label-m">{post.authorName}</div>
          </div>
          {post.authorRole && (
            <div className="text-neutral-200">
              <div className="text-body-s">{post.authorRole}</div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-1 max-md:col-span-2 max-md:flex-wrap max-md:gap-2">
        {SOCIAL_ORDER.filter((k) => links[k]).map((k) => (
          <a
            key={k}
            href={links[k]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={k}
            className="flex h-[38px] items-center p-1 text-neutral-0 hover:text-white-80"
          >
            <MaskIcon src={`${ICONS}/author-social-${k}.svg`} className="size-6" />
          </a>
        ))}
        <Button variant="dark-ghost" href="/blog" label="More Articles" />
      </div>
    </div>
  )
}

export default function Post() {
  const { slug } = useParams()
  const post = getEntry('post', slug)
  const blocks = useMemo(() => (post ? postBody(post) : []), [post])
  const toc = useMemo(() => tocFromBlocks(blocks), [blocks])
  if (!post) return <TemplateNotFound />
  const related = relatedPosts(post)

  return (
    <>
      <section>
        <BlogContainer>
          <Breadcrumb crumbs={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
        </BlogContainer>
      </section>

      <section>
        <BlogContainer>
          <BlogTop>
            <BlogTitle>{post.title}</BlogTitle>
            <BlogBody>
              <div className="text-neutral-100">
                <p className="text-body-m">{postExcerpt(post.slug, post.excerptLen)}</p>
              </div>
            </BlogBody>
            <BlogLine />
          </BlogTop>
        </BlogContainer>
      </section>

      <div>
        <Container>
          <div className="grid grid-cols-[1fr_minmax(720px,1fr)_1fr] items-start gap-4 xl:gap-6 2xl:grid-cols-[1fr_minmax(752px,1fr)_1fr] 2xl:gap-9 max-lg:flex max-lg:flex-col max-lg:items-center">
            <div className="sticky top-[120px] max-lg:hidden">
              <StickyToc items={toc} />
            </div>

            <div className="flex flex-col gap-10 max-lg:w-full max-sm:gap-6">
              <div className="flex flex-col gap-2">
                {post.showCover && post.image && (
                  <div className="relative aspect-[1.71] w-full overflow-hidden rounded-20">
                    <img src={post.image} alt="" loading="lazy" sizes="100vw" className="aspect-[1.71] w-full object-cover" />
                    <div className="pointer-events-none absolute inset-0 rounded-20 border border-neutral-600" />
                  </div>
                )}
                <AuthorRow post={post} />
              </div>
              <BlogLine />
              {post.hasSummary && (
                <div className="flex flex-col gap-5">
                  <div className="flex gap-2">
                    <img src={`${ICONS}/blog-summary-sparkle.svg`} alt="" className="size-6" />
                    <div className="text-neutral-0">
                      <div className="text-label-l max-md:text-label-l-md">30 Second Summary</div>
                    </div>
                  </div>
                  <RichText blocks={postSummary(post)} variant="post" />
                  <BlogLine />
                </div>
              )}
              <BlogBody>
                <RichText id="blog-rtb" blocks={blocks} variant="post" anchors />
              </BlogBody>
            </div>

            <TrialCard className="sticky top-[120px] max-lg:static" />
          </div>
        </Container>
      </div>

      <RelatedCarousel posts={related} />

      <section>
        <BlogContainer>
          <AuthorRow post={post} />
        </BlogContainer>
      </section>

      <CTA />
    </>
  )
}
