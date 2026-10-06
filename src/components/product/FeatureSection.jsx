import { useRef } from 'react'
import { SectionContainer, PaddingY, ContentMain, NegativeSpacingBottom } from '../shared/Layout.jsx'
import SectionHead from '../shared/SectionHead.jsx'
import LottieHover from '../shared/LottieHover.jsx'
import Testimonial from './Testimonial.jsx'

/* `.product-page-feature-block-new`: 1px solid-700 border, radius 20, bg hover .2s
   (solid-900; spyder blocks → background). Media is a 403×202 image or a 180px Lottie
   (spyder: hover plays 0→100% over 4s easeInOut, leave scrubs back over 4s ease). */
function FeatureCard({ img, alt, lottie, title, text, bodyTone, spyder }) {
  const cardRef = useRef(null)
  return (
    <div
      ref={cardRef}
      className={`relative z-1 flex flex-col overflow-hidden rounded-20 border border-solid-700 transition-[background-color] duration-200 ${
        spyder ? 'hover:bg-background' : 'hover:bg-solid-900'
      }`}
    >
      {lottie ? (
        <LottieHover src={lottie} hoverRef={cardRef} className="mt-0 h-[180px]" />
      ) : (
        <img className="h-auto w-full self-center" src={img} alt={alt ?? ''} loading="lazy" />
      )}
      <div className="flex flex-1 items-end justify-start p-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-label-m text-white">{title}</h3>
          {bodyTone === 'white' ? (
            <p className="text-body-m text-white">{text}</p>
          ) : (
            <div className="flex-1 text-neutral-100">
              <p className="text-body-m">{text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// `.product-page-feature-grid-new`: 3 columns (2 ≤991, 1 ≤767), gap 24
export function FeatureGrid({ features, bodyTone = 'muted', spyder = false }) {
  return (
    <div className="relative z-4 grid grid-cols-3 gap-6 overflow-hidden rounded-12 max-lg:grid-cols-2 max-md:grid-cols-1">
      {features.map((f) => (
        <FeatureCard key={f.title} {...f} bodyTone={bodyTone} spyder={spyder} />
      ))}
    </div>
  )
}

/* S5 "ALL FEATURES": head, then 1–2 × (feature grid + testimonial), then `.negative-spacing-bottom`.
   groups: [{ features, bodyTone?, testimonial }] */
export default function FeatureSection({ overline = 'ALL FEATURES', title, body, groups, spyder = false }) {
  return (
    <div>
      <PaddingY>
        <SectionContainer>
          <SectionHead overline={overline} title={title} body={body} />
          {groups.map((g, i) => (
            <div key={i}>
              <ContentMain>
                <FeatureGrid features={g.features} bodyTone={g.bodyTone} spyder={spyder} />
              </ContentMain>
              {g.testimonial && <Testimonial {...g.testimonial} />}
            </div>
          ))}
        </SectionContainer>
      </PaddingY>
      <NegativeSpacingBottom />
    </div>
  )
}
