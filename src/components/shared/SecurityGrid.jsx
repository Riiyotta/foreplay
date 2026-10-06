import { Button } from '../shared.jsx'

/* `.lens-security-grid` — 3 cards in one 1px-bordered, radius-28 frame (1 column, max 480 ≤991).
   Used by the homepage Features block, spyder S3, lens SECURITY, apps-extensions.
   cards: [{ icon: ReactNode, title, img?, alt?, text, cta?, href?, target? }]
   bodyClass: extra classes for `.lens-security-card-body` (e.g. fixed height on lens).
   plainText: render the text directly under the body (lens) instead of in `.card-button-holder`. */

function Holder({ text, cta, href, target }) {
  return (
    <div className="flex flex-1 flex-col items-start justify-end gap-[15px] pt-[15px]">
      <div className="text-neutral-50">
        <div className="text-body-m">{text}</div>
      </div>
      {cta && (
        <div className="-ml-2.5 flex flex-col items-start">
          <Button variant="dark-ghost" href={href} target={target} label={cta} />
        </div>
      )}
    </div>
  )
}

export default function SecurityGrid({ cards, className = '', bodyClass = 'h-auto', plainText = false }) {
  return (
    <div
      className={`grid grid-cols-3 rounded-28 border border-solid-700 max-lg:mx-auto max-lg:max-w-[480px] max-lg:grid-cols-1 max-lg:self-center ${className}`}
    >
      {cards.map(({ icon, title, img, alt, text, ...rest }, i) => (
        <div
          key={title}
          className={`flex flex-col px-6 pb-4 pt-6 max-sm:pb-6 ${
            i === 1 ? 'border-x border-solid-700 max-lg:border-x-0 max-lg:border-y' : ''
          }`}
        >
          <div className="flex items-center justify-start gap-2 text-solid-0 max-sm:relative">
            <div className="inline-flex size-6 items-center justify-center">
              <div className="flex items-center justify-center">{icon}</div>
            </div>
            <h3 className="text-label-m">{title}</h3>
          </div>
          {img && (
            <div className={`-mx-6 max-sm:-mt-[39px] ${bodyClass}`}>
              <img className="w-full" src={img} alt={alt ?? ''} loading="lazy" />
            </div>
          )}
          {plainText ? (
            <div className="text-neutral-50 [text-wrap:balance]">
              <div className="text-body-m">{text}</div>
            </div>
          ) : i === 0 ? (
            // Card 1 wraps the holder in .lens-security-card-footer (block, text-wrap: balance)
            <div className="[text-wrap:balance]">
              <Holder text={text} {...rest} />
            </div>
          ) : (
            <Holder text={text} {...rest} />
          )}
        </div>
      ))}
    </div>
  )
}
