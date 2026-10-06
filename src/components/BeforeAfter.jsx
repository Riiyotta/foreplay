import { useEffect, useRef } from 'react'
import { BgVideo } from './shared.jsx'
import { mountLogoRain } from './logoRain.js'

// CLONE_SPEC §3 — "Your new secret weapon for ads" (first white block).
// The matter.js logo rain (§3.3) is left to the Animation agent: it mounts into
//   #home-before-animation[data-anim="logo-rain"] (absolute inset 0, hidden ≤767).
// Rain sprites: /rain/hba-asset-01..17.webp. Static fallback ≤767: logos-rain.webp.
// The After card's hidden first_frame image and source-less embed video are intentionally omitted.

function CardText({ title, body, titleCls, bodyCls }) {
  return (
    <div className="pointer-events-none relative z-10 text-left">
      <div className="flex flex-col items-start justify-start gap-1">
        <div className={titleCls}>
          <div className="text-label-l max-md:text-label-l-md">{title}</div>
        </div>
        <div className={bodyCls}>
          <div>{body}</div>
        </div>
      </div>
    </div>
  )
}

const CARD =
  'relative flex flex-col items-stretch justify-start gap-6 overflow-hidden rounded-24 p-6 shadow-ring-card max-md:w-full max-md:max-w-[640px] max-md:min-h-[480px] max-md:max-h-[640px] max-sm:h-full max-sm:min-h-[320px]'

export default function BeforeAfter() {
  const rainRef = useRef(null)
  useEffect(() => mountLogoRain(rainRef.current), [])
  return (
    <section>
      <div className="p-2">
        <div className="relative z-2 overflow-hidden rounded-36 bg-neutral-0 text-solid-700 max-sm:rounded-16">
          <div className="mx-auto w-full max-w-section px-10 max-lg:px-8 max-md:px-6">
            <div className="flex flex-col items-center justify-start gap-[72px] py-20 max-sm:py-12">
              <div className="mx-auto flex w-full max-w-[720px] flex-col items-center justify-start gap-3 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="text-solid-700 [text-wrap:balance]">
                    <h2 className="font-display text-display-h3">Your new secret weapon for ads</h2>
                  </div>
                  <div className="max-w-[512px] [text-wrap:pretty]">
                    <div className="text-solid-600">
                      <p className="text-body-m">
                        Stop launching ads that don't work. Trade guesswork for the creative process used by the
                        world’s fastest growing brands and marketing agencies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid w-full max-w-[960px] grid-cols-2 gap-5 max-md:grid-cols-1 max-md:grid-rows-[auto_auto] max-md:items-start max-md:justify-items-center max-sm:grid-rows-[.85fr_1fr]">
                {/* Before */}
                <div className={CARD}>
                  <CardText
                    title="Before ..."
                    body="Group chats, expired links and fragmented reports."
                    titleCls="text-solid-900"
                    bodyCls="text-solid-500 [text-wrap:pretty]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-auto w-full max-md:block">
                    <img
                      className="hidden h-auto w-full max-md:block"
                      src="/assets/6832375f1f0c8f88fd92aaf0_logos-rain.webp"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div
                    ref={rainRef}
                    id="home-before-animation"
                    data-anim="logo-rain"
                    className="absolute inset-0 flex size-full flex-col items-center justify-end max-md:pointer-events-none max-md:hidden"
                  />
                </div>

                {/* After */}
                <div className={`${CARD} bg-background max-md:!min-h-[320px]`}>
                  <CardText
                    title="After Foreplay"
                    body="End-to-end feedback loop for winning ad creative."
                    titleCls="text-white"
                    bodyCls="flex-1 text-neutral-100"
                  />
                  <div className="-m-6 flex h-[440px] items-center justify-center max-lg:h-auto max-sm:h-[320px]">
                    <BgVideo
                      className="z-2 size-[400px] max-lg:max-h-full max-lg:max-w-full max-md:size-[400px] max-sm:size-[280px]"
                      poster="/videos/home-loader-main-poster-00001.jpg"
                      sources={['/videos/home-loader-main-transcode.mp4', '/videos/home-loader-main-transcode.webm']}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
