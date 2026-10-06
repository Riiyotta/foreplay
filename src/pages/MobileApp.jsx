import { Button, BgVideo } from '../components/shared.jsx'
import { ProductHeroShell, HeroContent } from '../components/product/ProductHero.jsx'
import { NegativeSpacingBottom } from '../components/shared/Layout.jsx'
import MobileAppFeatures from '../components/shared/MobileAppFeatures.jsx'

// specs/mobile-app.md — phone hero (a-71 parallax shell), feature video card (YouTube lightbox),
// "Save content from your Phone" card, two video rows. Long copy is stand-in text.
const M = '/assets/pages/mobile-app/'

function StoreBadge({ href, img }) {
  return (
    <Button variant="dark-secondary" href={href} target="_blank" icon={false}>
      <img className="h-7" src={`${M}${img}`} alt="" loading="lazy" />
    </Button>
  )
}

export default function MobileApp() {
  return (
    <>
      <ProductHeroShell
        dots={false}
        heroClassName="pb-[30px] max-sm:pb-[30px]"
        sticky={
          <>
            <div className="relative z-2 mx-auto flex w-[80%] items-center justify-center pb-10 pt-6 max-lg:order-1 max-md:pb-0 max-sm:w-full">
              <div className="relative flex items-center justify-center">
                <img
                  className="relative w-[250px] max-md:w-[200px] max-sm:w-[65vw]"
                  src={`${M}652562834976b49df57e27d2_Group 137.avif`}
                  alt="foreplay ad library software screenshot"
                  loading="eager"
                />
                <div className="absolute z-1 h-[96%] w-[91%] overflow-hidden rounded-28 border border-phone-border max-sm:rounded-[6.5vw]">
                  <BgVideo
                    className="size-full"
                    poster={`${M}653fd29e710bbb2e92e66d1b_header-video-poster-00001.jpg`}
                    sources={[`${M}653fd29e710bbb2e92e66d1b_header-video-transcode.mp4`, `${M}653fd29e710bbb2e92e66d1b_header-video-transcode.webm`]}
                  />
                </div>
              </div>
            </div>
            <HeroContent
              overline="MOBILE APP"
              title="Creative inspiration wherever you go"
              subtitle="Save ads and posts from your phone in a couple of taps and find them in your library on any device."
              actions={
                <div className="relative z-2 flex items-center gap-3 max-sm:grid max-sm:w-full max-sm:grid-cols-1">
                  <StoreBadge href="https://apps.apple.com/ca/app/foreplay-ad-swipe-file/id6466097243" img="652560c5b07e1f8795380f3a_app-store.svg" />
                  <StoreBadge href="https://play.google.com/store/apps/details?id=co.foreplay.ForeplayMobile" img="652560c565e7688277a870bd_google-play.svg" />
                </div>
              }
            />
          </>
        }
      />

      <MobileAppFeatures />
      <NegativeSpacingBottom />
    </>
  )
}
