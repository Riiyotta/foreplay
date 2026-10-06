// /blog pieces (specs/blog.md §1a, §2): featured/popular header grid, category tags, pagination.
import { Link } from 'react-router-dom'
import { SmartLink } from '../templates/Layout.jsx'
import { standin } from './copy.js'

const HOVER = 'transition-all duration-200 ease-[ease] hover:opacity-80'

// `.blog-feed-author`: avatar (featured only) + name | separator | "N min read"
function AuthorRow({ post, avatar = false, nameClass }) {
  return (
    <div className="flex items-center gap-2 pt-3">
      <SmartLink href={`/authors/${post.author}`} className="flex items-center no-underline hover:underline">
        {avatar && (
          <div
            className="mr-[7px] size-[25px] flex-none rounded-circle bg-cover bg-center"
            style={{ backgroundImage: `url("${post.authorAvatar}")` }}
          />
        )}
        <div className={`text-body-s ${nameClass}`}>{post.authorName}</div>
      </SmartLink>
      <div className="mx-[7px] h-5 w-px bg-grey-stroke" />
      <div className="flex items-center gap-1 text-body-s text-neutral-0">
        <div>{post.readTime}</div>
        <div>min read</div>
      </div>
    </div>
  )
}

/** `.blog-header-grid`: featured (cols 1–4) + "POPULAR BLOGS" (cols 5–6). featured: {post, img} */
export function BlogHeaderGrid({ featured, popular }) {
  const fp = featured.post
  return (
    <div className="grid w-full grid-cols-6 gap-x-[50px] gap-y-4 text-left max-lg:flex max-lg:flex-col">
      <div className="col-span-4">
        <Link to={`/post/${fp.slug}`} className={`flex flex-col items-center gap-6 no-underline ${HOVER}`}>
          <div className="aspect-[722/407] w-[722px] max-w-full overflow-hidden rounded-20 border border-grey-stroke">
            <img src={featured.img} alt="" className="size-full object-cover" />
          </div>
          <div className="flex w-full flex-col gap-3">
            <h2 className="font-display text-display-h3 text-body max-md:text-display-h4">{fp.title}</h2>
            <p className="text-body-m text-neutral-100">{standin(`${fp.slug}:excerpt`, featured.excerptLen || 145)}</p>
          </div>
        </Link>
        <AuthorRow post={fp} avatar nameClass="text-misc-grey" />
      </div>
      {/* `.blog-feed-wrapper` (align-items flex-start; ≤991 margin-top 25 + padding-top 25); the heading wrapper is
          flex 1 1 0%, so it absorbs the free height when the grid row is taller than the list (28 tall at 1440) */}
      <div className="col-span-2 flex flex-col gap-5 max-lg:mt-[25px] max-lg:pt-[25px]">
        <div className="flex-1">
          <h2 className="text-overline uppercase text-neutral-100">Popular Blogs</h2>
        </div>
        <div className="grid grid-cols-1 gap-y-10">
          {popular.map((p) => (
            <div key={p.slug}>
              <Link to={`/post/${p.slug}`} className={`flex flex-col gap-1 no-underline ${HOVER}`}>
                <h3 className="text-label-m text-body">{p.title}</h3>
                <div className="line-clamp-2 text-body-s text-neutral-100">{standin(`${p.slug}:popular`, 150)}</div>
              </Link>
              <AuthorRow post={p} nameClass="text-neutral-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/** `.blog-categories`: "Topics & Categories:" + tag list. tags: [{label, href}] */
export function BlogCategories({ tags }) {
  return (
    <div className="flex items-start gap-[15px] border-y border-neutral-700 py-9 max-lg:flex-col">
      <div className="w-[152px] flex-none text-body-m text-neutral-100">Topics &amp; Categories:</div>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <SmartLink
            key={t.href}
            href={t.href}
            className="inline-block rounded-10 px-3 py-1.5 text-body-s text-neutral-25 no-underline shadow-ring-product transition-all duration-200 ease-[ease] hover:bg-neutral-800"
          >
            {t.label}
          </SmartLink>
        ))}
      </div>
    </div>
  )
}

const PAGE_BTN =
  'mx-2.5 flex items-center rounded-10 border border-solid-600 bg-solid-900 p-2 text-solid-0 no-underline transition-all duration-200 ease-[ease] hover:bg-neutral-800 active:bg-neutral-400 active:text-neutral-200 focus:outline-none focus:shadow-focus-dark'

// `.w-pagination-next-icon` (12×12, translateY 1px)
const Chevron = ({ flip = false }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    aria-hidden="true"
    className={`translate-y-px ${flip ? 'mr-1 rotate-180' : 'ml-1'}`}
  >
    <path fill="none" stroke="currentColor" fillRule="evenodd" d="M4 2l4 4-4 4" />
  </svg>
)

/** `.w-pagination-wrapper.blog-pagination`: Previous (page ≥2) · "N / M" · Next */
export function BlogPagination({ page, pages }) {
  return (
    <div className="flex items-center justify-center gap-2.5 py-5">
      {page > 1 && (
        <Link to={page === 2 ? '?' : `?page=${page - 1}`} aria-label="Previous Page" className={PAGE_BTN}>
          <Chevron flip />
          <div className="text-[14px] font-semibold leading-6">Previous</div>
        </Link>
      )}
      <div aria-label={`Page ${page} of ${pages}`} className="text-center text-label-m text-neutral-0">
        {page} / {pages}
      </div>
      {page < pages && (
        <Link to={`?page=${page + 1}`} aria-label="Next Page" className={PAGE_BTN}>
          <div className="text-[14px] font-semibold leading-6">Next</div>
          <Chevron />
        </Link>
      )}
    </div>
  )
}
