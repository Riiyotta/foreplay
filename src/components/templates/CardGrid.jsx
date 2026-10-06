// S4 BlogListCard grid (+ the shared card body used by S5 BlogCarouselCard).
import { SmartLink } from './Layout.jsx'
import { cardExcerpt } from './standin.js'

// `.blog-carousel-card-cover` + `.blog-carousel-card-content`
export function CardBody({ post, nameClass = 'text-label-m' }) {
  return (
    <>
      <div className="aspect-[465/264] min-h-0 flex-none bg-[linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.08))]">
        {post.image && <img src={post.image} alt="" loading="lazy" className="size-full object-cover" />}
      </div>
      <div className="flex flex-col gap-4 px-6 pb-6 pt-8 max-md:flex-1 max-sm:px-5 max-sm:pb-4 max-sm:pt-5">
        <div className="flex items-center gap-3">
          <div className="size-7 flex-none overflow-hidden rounded-ray">
            {post.authorAvatar && <img src={post.authorAvatar} alt="" loading="lazy" className="size-full object-cover" />}
          </div>
          <div className="text-neutral-0">
            <div className={nameClass}>{post.authorName}</div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <div className="line-clamp-2 text-label-l text-neutral-0 max-md:text-label-l-md">{post.title}</div>
          <div className="line-clamp-2">
            <div className="text-neutral-100">
              <div className="text-body-m">{cardExcerpt(post.slug)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// `a.blog-list-card`
// baselineGap: live `a.blog-list-card` is inline-block, so each card carries ~6px of line-box descent
// below its content (measured on /blog: card 440 = cover 230 + content 204 + 6).
export function BlogListCard({ post, baselineGap = false }) {
  return (
    <SmartLink
      href={`/post/${post.slug}`}
      className={`${baselineGap ? 'pb-1.5 ' : ''}flex h-full flex-col overflow-hidden rounded-20 bg-background no-underline shadow-ring-product transition-all duration-200 hover:bg-neutral-900 hover:shadow-[0_0_0_1px_rgba(255,255,255,.2)]`}
    >
      <CardBody post={post} />
    </SmartLink>
  )
}

// `.blog-list`: 3 cols; gap 16 (<1280) / 20 (1280–1439) / 24 (≥1440); ≤767 2 cols; ≤479 1 col
export function BlogList({ posts, baselineGap = false }) {
  return (
    <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 xl:gap-5 2xl:gap-6">
      {posts.map((p) => (
        <div key={p.slug} className="self-stretch">
          <BlogListCard post={p} baselineGap={baselineGap} />
        </div>
      ))}
    </div>
  )
}
