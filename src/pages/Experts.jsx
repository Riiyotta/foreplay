import CTA from '../components/CTA.jsx'
import { Button, BgVideo } from '../components/shared.jsx'
import { SectionContainer, WhiteBlock } from '../components/shared/Layout.jsx'
import SectionHead from '../components/shared/SectionHead.jsx'
import { ExpertBoardCard, ExpertRowCard } from '../components/community/Experts.jsx'
import { featuredExperts, moreExperts, copy } from '../components/community/data.js'

const E = '/assets/pages/experts/'

// specs/experts.md
export default function Experts() {
  return (
    <>
      {/* 1. Hero */}
      <div className="overflow-hidden">
        <SectionContainer>
          <div className="flex flex-col items-center pb-[120px] pt-[75px] max-md:pb-20 max-md:pt-16 max-sm:pt-10">
            <div className="grid w-full grid-cols-[minmax(min-content,1fr)_1fr] items-center gap-10 max-lg:flex max-lg:flex-col max-lg:items-center">
              <div className="flex max-w-[960px] flex-col gap-3 text-left [text-wrap:balance]">
                <div className="mb-2.5">
                  <div className="text-neutral-100">
                    <h1 className="text-overline uppercase">EXPERTS</h1>
                  </div>
                </div>
                <div className="text-neutral-0">
                  <h1 className="font-display text-display-h2 [text-wrap:balance] max-lg:text-display-h2-lg max-sm:text-display-h2-sm">
                    Swipe Files from Leading Creative Strategists
                  </h1>
                </div>
                <div className="text-neutral-50">
                  <div className="text-body-m">{copy('experts-hero', 78)}</div>
                </div>
                <div className="mt-6 max-sm:self-stretch">
                  <div className="flex w-fit gap-3 max-sm:grid max-sm:w-full max-sm:grid-cols-1">
                    <Button variant="dark-primary" href="#featured-experts" label="Browse Experts" iconFull />
                    <Button variant="dark-secondary" href="/experts-application" label="Become a Expert" />
                  </div>
                </div>
              </div>
              <div className="flex h-[542px] flex-col rounded-20 border border-neutral-700 bg-neutral-900 p-5 max-lg:h-auto max-lg:w-3/4 max-lg:p-3 max-sm:h-[300px] max-sm:w-full max-sm:rounded-12 max-sm:p-2">
                <BgVideo
                  className="z-1 flex-1 rounded-10 max-lg:aspect-square max-lg:flex-none max-sm:aspect-auto max-sm:flex-1 max-sm:rounded-[4px]"
                  poster={`${E}63e27aa0d157dc463ee3e125_Plain-Experts-poster-00001.jpg`}
                  sources={[
                    `${E}63e27aa0d157dc463ee3e125_Plain-Experts-transcode.mp4`,
                    `${E}63e27aa0d157dc463ee3e125_Plain-Experts-transcode.webm`,
                  ]}
                />
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* 2. Featured + More experts (C7 white block) */}
      <WhiteBlock>
        <SectionContainer id="featured-experts">
          <div className="flex flex-col gap-[72px] py-20 max-lg:py-16 max-sm:pb-6 max-sm:pt-10">
            <div className="grid grid-cols-1 gap-4 max-sm:gap-6">
              <SectionHead
                align="left"
                theme="light"
                size="h3"
                title="Featured Experts"
                body={copy('experts-featured', 130)}
                bodyMax="max-w-[720px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[25px] max-lg:gap-6 max-md:grid-cols-1 max-md:gap-y-12 max-sm:mt-8 max-sm:gap-x-6 max-sm:gap-y-10">
            {featuredExperts.map((e) => (
              <ExpertBoardCard key={e.slug} expert={e} />
            ))}
          </div>
          <div className="flex flex-col gap-[72px] py-20 max-lg:py-16 max-sm:pb-6 max-sm:pt-10">
            <h2 className="font-display text-display-h3 text-solid-700">More Experts</h2>
          </div>
          <div className="mb-[50px] grid grid-cols-2 gap-5 max-lg:grid-cols-1 max-lg:gap-[25px] max-md:gap-5">
            {moreExperts.map((e) => (
              <ExpertRowCard key={e.slug} expert={e} />
            ))}
          </div>
        </SectionContainer>
      </WhiteBlock>

      <CTA />
    </>
  )
}
