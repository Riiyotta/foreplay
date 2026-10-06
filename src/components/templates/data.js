// CMS data access + joins for the template pages (specs/template-*.md §JSON shape).
import posts from '../../data/post.json'
import experts from '../../data/experts.json'
import faqs from '../../data/faqs.json'
import authors from '../../data/authors.json'
import events from '../../data/events.json'
import agencies from '../../data/agencies.json'
import videos from '../../data/videos.json'
import categories from '../../data/category.json'
import university from '../../data/university.json'
import bounties from '../../data/bounties.json'

export const collections = { post: posts, experts, faqs, authors, events, agencies, videos, category: categories, university, bounties }

// Live 404s: flagged `missing:true`, or scraped as a "404" page with no order (post.json).
export const isMissing = (e) => !e || e.missing === true || (e.title === '404' && e.order == null)

export function getEntry(collection, slug) {
  const e = (collections[collection] || []).find((x) => x.slug === slug)
  return isMissing(e) ? null : e
}

export const livePosts = posts.filter((p) => !isMissing(p))
const byOrder = (a, b) => (a.order ?? 1e9) - (b.order ?? 1e9)

export const getAuthor = (slug) => authors.find((a) => a.slug === slug) || null

// template-post.md §2.4: up to 5 posts sharing the category, blog order asc, current post may be included.
export function relatedPosts(post, limit = 5) {
  const cat = post.categories?.[0]
  if (!cat) return []
  return livePosts.filter((p) => p.categories?.includes(cat)).sort(byOrder).slice(0, limit)
}

export const postsInCategory = (slug) => livePosts.filter((p) => p.categories?.includes(slug)).sort(byOrder)
export const postsByAuthor = (slug) => livePosts.filter((p) => p.author === slug).sort(byOrder)
export const allCategories = () => [...categories].sort((a, b) => a.tagOrder - b.tagOrder)

const byDateDesc = (a, b) => (b.dateISO || '').localeCompare(a.dateISO || '')
export const eventsBySpeaker = (slug) => events.filter((e) => e.speakerSlug === slug).sort(byDateDesc)
export const latestEvents = (n = 3) => [...events].sort(byDateDesc).slice(0, n)

// template-experts.md §1.2: next 6 in experts.json order, wrapping around.
export function moreExperts(slug, n = 6) {
  const i = experts.findIndex((e) => e.slug === slug)
  return Array.from({ length: Math.min(n, experts.length - 1) }, (_, k) => experts[(i + 1 + k) % experts.length])
}

// Deterministic pool of local images for stand-in rich-text figures.
export const imagePool = livePosts.map((p) => p.image).filter(Boolean)
