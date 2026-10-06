// Container + small primitives shared by every CMS template (specs/_shared-templates.md).
import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

// `.container`: max 1440, padding-x 40 / 32 (≤991) / 24 (≤767)
export const Container = ({ className = '', children, ...rest }) => (
  <div className={`mx-auto w-full max-w-[1440px] px-10 max-lg:px-8 max-md:px-6 ${className}`} {...rest}>
    {children}
  </div>
)

// `.container.blog-container`: max 800 (832 at ≥1440), same padding
export const BlogContainer = ({ className = '', children, ...rest }) => (
  <div className={`mx-auto w-full max-w-[800px] px-10 max-lg:px-8 max-md:px-6 2xl:max-w-[832px] ${className}`} {...rest}>
    {children}
  </div>
)

// `.container.section-container`: max 84rem (1344), same padding
export const SectionContainer = ({ className = '', children, ...rest }) => (
  <div className={`mx-auto w-full max-w-section px-10 max-lg:px-8 max-md:px-6 ${className}`} {...rest}>
    {children}
  </div>
)

// `.blog-line`
export const BlogLine = ({ className = '' }) => <div className={`h-px bg-neutral-700 ${className}`} />

// S2 variant: `.blog-line` in a sibling full-width `div.container`
export const FullLine = () => (
  <Container>
    <BlogLine />
  </Container>
)

// Single-colour SVG drawn with currentColor via CSS mask (for icons whose files use fill="currentColor").
export const MaskIcon = ({ src, className = '' }) => (
  <span
    aria-hidden="true"
    className={`inline-block flex-none bg-current ${className}`}
    style={{ WebkitMask: `url("${src}") center / contain no-repeat`, mask: `url("${src}") center / contain no-repeat` }}
  />
)

export const ICONS = '/assets/templates/icons'

// Webflow `.w-dyn-empty` default look (padding 20, bg #ddd)
export const EmptyState = () => (
  <div className="bg-[#ddd] p-5 text-solid-900">
    <div>No items found.</div>
  </div>
)

// Fallback for unknown / missing:true slugs
export function TemplateNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6 text-center">
      <h1 className="font-display text-display-h4 text-neutral-0">Page not found</h1>
      <p className="text-body-m text-neutral-100">The page you are looking for doesn’t exist or has been moved.</p>
      <a href="/" className="text-label-m text-neutral-0 hover:underline">
        Back to home
      </a>
    </div>
  )
}

// Internal paths use client-side routing; everything else is a plain anchor.
export const SmartLink = forwardRef(function SmartLink({ href = '#', children, ...rest }, ref) {
  if (href.startsWith('/')) return <Link ref={ref} to={href} {...rest}>{children}</Link>
  const ext = /^https?:/.test(href)
  return (
    <a ref={ref} href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {children}
    </a>
  )
})
