// S2 BlogTop (specs/_shared-templates.md S2, template-post.md §2.2)

// `.blog-top`: flex col, gap 24, padding-bottom 40; ≤479 padding-top 40 (breadcrumb hidden)
export const BlogTop = ({ className = '', children }) => (
  <div className={`flex flex-col gap-6 pb-10 max-sm:pt-10 ${className}`}>{children}</div>
)

// `.blog-head > .text-white > .text-balance > h1.text-display-h4` (28/36 at every width)
export const BlogTitle = ({ children, as: Tag = 'h1' }) => (
  <div className="flex flex-col gap-2 [text-wrap:balance]">
    <div className="text-neutral-0">
      <div className="[text-wrap:balance]">
        <Tag className="font-display text-display-h4">{children}</Tag>
      </div>
    </div>
  </div>
)

// `.blog-body` (padding-bottom 40, ≤479 24)
export const BlogBody = ({ className = '', children }) => <div className={`pb-10 max-sm:pb-6 ${className}`}>{children}</div>
