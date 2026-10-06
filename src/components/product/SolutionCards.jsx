import { WhiteBlock, SectionContainer } from '../shared/Layout.jsx'
import SectionHead from '../shared/SectionHead.jsx'

/* S2 "Why do you need …" white block: `.product-page-solution` (940 max) with an h2.text-display-h3
   head and a 2-column grid of before/after `.static-product-page-solution-card`s (radius 20).
   before / after: { title, text, img } */
function CardText({ title, text, dark }) {
  return (
    <div className="px-5 pt-5">
      <div className="pointer-events-none relative z-10 text-left">
        <div className="pointer-events-none flex flex-col items-start gap-1">
          <div className={`text-label-l max-md:text-label-l-md ${dark ? 'text-white' : 'text-solid-900'}`}>{title}</div>
          <div className={dark ? 'flex-1 text-neutral-100' : 'text-solid-500 [text-wrap:pretty]'}>
            <div>{text}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SolutionCards({ title, body, before, after }) {
  return (
    <WhiteBlock>
      <SectionContainer>
        <div className="mx-auto flex max-w-[940px] flex-col gap-9 py-20 text-center max-md:max-w-[480px] max-md:pb-16 max-sm:gap-8 max-sm:pb-8 max-sm:pt-12">
          <SectionHead title={title} size="h3" body={body} bodySize="m" theme="light" />
          <div className="grid grid-cols-2 gap-4 self-stretch max-md:grid-cols-1">
            <div className="flex flex-col gap-5 overflow-hidden rounded-20 text-solid-500 shadow-ring-card-inset">
              <CardText title={before.title ?? 'Before ...'} text={before.text} />
              <div className="relative -z-1">
                <img className="relative" src={before.img} alt="" loading="lazy" />
              </div>
            </div>
            <div className="flex flex-col gap-5 overflow-hidden rounded-20 bg-background text-neutral-100">
              <CardText title={after.title ?? 'After Foreplay'} text={after.text} dark />
              <img className="relative" src={after.img} alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </SectionContainer>
    </WhiteBlock>
  )
}
