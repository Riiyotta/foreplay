// Shared layout primitives used by every product / marketing page.
// `.container`         : max 1440, padding 0 40 / 32 (≤991) / 24 (≤767)
// `.section-container` : max 1344 (centred), same padding → 1264 content @1440
// `.section-padding > .section-white-block` : 8px gutter, white card radius 36 (16 ≤479)

export function Container({ className = '', children, ...rest }) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-10 max-lg:px-8 max-md:px-6 ${className}`} {...rest}>
      {children}
    </div>
  )
}

export function SectionContainer({ className = '', children, ...rest }) {
  return (
    <div className={`mx-auto w-full max-w-section px-10 max-lg:px-8 max-md:px-6 ${className}`} {...rest}>
      {children}
    </div>
  )
}

export function WhiteBlock({ as: Tag = 'section', className = '', innerClassName = '', children, ...rest }) {
  return (
    <Tag className={className} {...rest}>
      <div className="p-2">
        <div
          className={`relative z-2 overflow-hidden rounded-36 bg-neutral-0 text-solid-700 max-sm:rounded-16 ${innerClassName}`}
        >
          {children}
        </div>
      </div>
    </Tag>
  )
}

// `.product-page-padding-y`: flex column, 108 / 96 (≤991) / 80 (≤767) vertical padding, overflow hidden
export function PaddingY({ className = '', children, ...rest }) {
  return (
    <div className={`flex flex-col overflow-hidden py-[108px] max-lg:py-24 max-md:py-20 ${className}`} {...rest}>
      {children}
    </div>
  )
}

// `.section-content-main`: padding-top 48 (40 ≤479)
export function ContentMain({ className = '', children, ...rest }) {
  return (
    <div className={`pt-12 max-sm:pt-10 ${className}`} {...rest}>
      {children}
    </div>
  )
}

// `.negative-spacing-bottom`: 0-height spacer pulling the next section up 80px
export function NegativeSpacingBottom() {
  return <div className="-mb-20 h-0" />
}
