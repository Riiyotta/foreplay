import { BgVideo } from '../shared.jsx'
import { SectionContainer, PaddingY } from './Layout.jsx'
import SectionHead from './SectionHead.jsx'
import { LeftRightRow } from './Rows.jsx'
import { VideoLightbox, useLightbox } from './VideoLightbox.jsx'

// `.mobile-app-main-features` (mobile-app.md S2): YouTube lightbox card, "Save content from your Phone" card,
// two video rows. Extracted from pages/MobileApp.jsx so /2026-paid-lp can reuse it. Long copy is stand-in text.
const M = '/assets/pages/mobile-app/'

// legacy `.feature-block` card: grey-stroke border, rgba(255,255,255,.05) bg, hover .07 (.2s)
const CARD =
  'relative z-1 flex flex-col justify-between overflow-hidden rounded-10 border border-grey-stroke bg-white-05 transition-[background-color] duration-200 hover:bg-white-07'

function VideoBlock({ name, className = '' }) {
  return (
    <div className={`flex w-full items-center justify-start max-md:order-first ${className}`}>
      <BgVideo
        className="h-[400px] w-full rounded-10 border border-grey-stroke max-lg:h-[350px]"
        poster={`${M}${name}-poster-00001.jpg`}
        sources={[`${M}${name}-transcode.mp4`, `${M}${name}-transcode.webm`]}
      />
    </div>
  )
}

function RowText({ icons, title, body }) {
  return (
    <SectionHead
      align="left"
      title={title}
      size="h3-sm"
      body={body}
      prefix={
        <div className="mb-2 flex gap-2.5">
          {icons.map((i) => (
            <img
              key={i}
              className={i.includes('arrow') ? 'w-5' : 'w-10 max-md:w-9'}
              src={`${M}${i}`}
              alt=""
              loading="lazy"
            />
          ))}
        </div>
      }
    />
  )
}

export default function MobileAppFeatures() {
  const { open, trigger, close } = useLightbox()
  return (
    <>
    <div>
      <PaddingY>
        <SectionContainer>
          <div className="mx-auto flex max-w-[900px] flex-col gap-16">
            {/* (a) feature video → YouTube lightbox */}
            <div className={`${CARD} h-[500px] max-lg:h-[350px] max-md:h-[300px] max-sm:h-[200px] max-sm:bg-mobile-video-sm max-sm:bg-[length:auto_100%,auto] max-sm:bg-[position:50%_50%,0_0]`}>
              <a {...trigger} className="absolute inset-0 max-w-full">
                <div className="flex size-full items-center justify-center bg-mobile-thumb bg-cover bg-center">
                  <div className="flex size-[100px] cursor-pointer items-center justify-center rounded-circle border border-transparent bg-black-24 p-[15px] shadow-play-button backdrop-blur-[5px] transition-all duration-200 hover:p-[5px] max-sm:scale-[.7]">
                    <div className="flex size-full items-center justify-center rounded-pill border border-transparent bg-black-22 backdrop-blur-[3px]">
                      <img className="ml-[3px] w-5" src={`${M}64502d8b633f4d3ee4584b7a_play-small.svg`} alt="" loading="lazy" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* (b) save from your phone */}
            <div className={`${CARD} max-sm:p-4`}>
              <div className="py-[25px] pl-[25px] max-md:pl-0 max-md:pt-0">
                <img className="relative z-1 w-[22%]" src={`${M}652990b64da0f365aef91633_iphone-sync.avif`} alt="" loading="lazy" />
              </div>
              <div className="relative z-1 flex flex-col gap-2.5 p-[25px] max-sm:p-0 max-sm:text-center">
                <h3 className="font-display text-display-h4 text-white">Save content to Foreplay from your Phone</h3>
                <div className="max-w-[512px]">
                  <p className="text-body-l text-neutral-100">
                    Share any ad or post to the app and it is saved to your library, synced to your desktop straight away.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 overflow-hidden bg-macbook-sync bg-[length:auto,cover] bg-[position:0_0,100%_100%] max-md:bg-macbook-sync-md max-md:bg-[length:auto,100%_auto] max-md:bg-[position:0_0,100%_0] max-md:bg-no-repeat max-sm:bg-macbook-sync-sm" />
            </div>

            {/* (c) rows */}
            <LeftRightRow rawMedia media={<VideoBlock name="653030fda3d7bc4941a03672_Swipe-File-Pic" />}>
              <RowText
                icons={['652ff16b9b6781c56e020aa0_ios-camera-icon.avif', '652ff16b558d6fef7811591a_ap-to-app-arrow.svg', '67b10c2cd2812e66e1c2af76_product-swipe-file.webp']}
                title="Snap a Photo and save it to Swipe File"
                body="Spot a great ad out in the world? Take a photo and keep it with the rest."
              />
            </LeftRightRow>
            <LeftRightRow rawMedia mediaFirst={false} media={<VideoBlock name="653009a60733cf5f9aa796e7_discovery-test-render" />}>
              <RowText
                icons={['67b10c250778c8023e8536e9_product-discovery.webp']}
                title="Browse millions of ads"
                body="Search and filter the full ad library from your phone whenever an idea strikes you."
              />
            </LeftRightRow>
          </div>
        </SectionContainer>
      </PaddingY>
    </div>
    {open && <VideoLightbox url="https://www.youtube.com/watch?v=BRRwHdlXHQA" title="Foreplay mobile app video" onClose={close} />}
    </>
  )
}
