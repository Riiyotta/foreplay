import { useRef } from 'react'
import { Button, BgVideo } from './shared.jsx'
import LogoStrip from './shared/LogoStrip.jsx'
import useHeroParallax from './useHeroParallax.js'


// CLONE_SPEC §2. The scroll-shrink (IX2 a-72) is left to the Animation agent:
//   data-anim="hero-trigger"  → .home-hero-animation-trigger (top −72, 100vh)
//   data-anim="hero-parallax" → .home-hero-sticky (translateY 0→−33%, scale 1→.75, opacity 1→0, ≥768 only)
export default function Hero() {
  const triggerRef = useRef(null)
  const parallaxRef = useRef(null)
  useHeroParallax(triggerRef, parallaxRef)
  return (
    <section id="product-hero-section" className="relative">
      <div
        className="dot-bg-mask pointer-events-none absolute inset-0 h-full w-full bg-[url('/assets/dot-grid.webp')] bg-[length:380px_380px] bg-[position:50%_0] bg-repeat opacity-66 max-md:bg-[length:256px_256px]"
      />
      <div className="mx-auto w-full max-w-section px-10 max-lg:px-8 max-md:px-6">
        <div className="relative flex flex-col items-stretch justify-start gap-16 pb-20 pt-[60px] max-lg:pb-12 max-lg:pt-16 max-md:pb-0">
          <div
            ref={triggerRef}
            data-anim="hero-trigger"
            data-w-id="c1e0d7b4-84e0-ca9c-45c3-0046d7256357"
            className="pointer-events-none absolute -top-[72px] left-0 right-0 h-screen"
          />
          <div ref={parallaxRef} data-anim="hero-parallax" className="sticky top-[132px] max-md:relative max-md:top-0 max-sm:static">
            <div className="-mt-3 flex flex-col items-center justify-between gap-10 pb-20 pt-3 max-lg:justify-center max-sm:items-stretch max-sm:pb-12">
              <div className="flex max-w-[960px] flex-col items-center gap-3 text-center [text-wrap:balance]">
                <div className="text-white">
                  <h1 className="hero-title-fill font-display text-display-h1 text-hero-title [text-wrap:balance] max-md:text-display-h1-md max-sm:text-display-h1-sm">
                    The Complete Winning Ad Workflow
                  </h1>
                </div>
                <div className="text-neutral-50">
                  <div className="text-body-l">
                    Everything you need to predictably make ads that convert, from the first spark of inspiration
                    saving ads from facebook ad library to the final performance report.
                  </div>
                </div>
              </div>
              <div className="flex flex-none items-center justify-start gap-3 max-sm:justify-center">
                <Button variant="dark-primary" href="https://app.foreplay.co/sign-up" label="Start Free Trial" iconFull />
              </div>
            </div>
            <LogoStrip />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-[-10%] top-[33%] bg-hero-overlay max-sm:hidden" />
          <div className="relative z-1 -mb-[120px] h-auto max-lg:mb-0 max-md:overflow-hidden max-sm:-mx-4">
            <div className="relative flex flex-col items-center justify-start overflow-hidden">
              <BgVideo
                className="aspect-[1400/730] h-auto w-full max-lg:overflow-hidden max-sm:rounded-none"
                poster="/videos/home-video-poster-00001.jpg"
                sources={['/videos/home-video-transcode.mp4', '/videos/home-video-transcode.webm']}
              />
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-video-overlay max-lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
