// /jumpstart-2026 pieces (specs/jumpstart-2026.md §1, §3)
import { BgVideo, ButtonIcon } from '../shared.jsx'
import { Container, SectionContainer } from '../shared/Layout.jsx'
import SectionHead from '../shared/SectionHead.jsx'
import EmbedPlaceholder from '../shared/EmbedPlaceholder.jsx'
import { VideoLightbox, useLightbox } from '../shared/VideoLightbox.jsx'
import LottieLoader from '../templates/LottieLoader.jsx'
import { standin } from './copy.js'

const A = '/assets/pages/jumpstart-2026/'

/* Elfsight countdown stand-in (the widget renders 0px in measurement; spec allows a simple
   DD:HH:MM:SS countdown in 24/32 Inter Display #090a0e). Static: no third-party script. */
export function CountdownStandin() {
  return (
    <div aria-label="Countdown" className="text-center font-display text-display-h5 text-solid-900">
      00:00:00:00
    </div>
  )
}

// `.jumpstart-countdown-wrapper`
function CountdownCard() {
  return (
    <div className="flex w-[320px] max-w-full flex-col gap-6 rounded-16 bg-neutral-0 px-1.5 pb-1.5 pt-6 max-sm:w-[234px]">
      <div className="text-center text-overline uppercase text-solid-900">Special pricing expires in</div>
      <CountdownStandin />
      {/* a.button-dark.jumpstart-button-wide */}
      <a
        href="#2026-offer"
        className="relative flex h-10 w-full items-center justify-center rounded-10 bg-neutral-700 bg-cover bg-center p-2 text-neutral-0 no-underline transition-all duration-200 ease-[ease] hover:bg-neutral-600 hover:opacity-90 active:bg-[rgba(255,255,255,.32)] focus:outline-none focus:shadow-focus-dark"
        style={{ backgroundImage: `url("${A}6960218baf66b142e4cba775_claim-offer-bg-wide.webp")` }}
      >
        <div className="relative z-2 px-1.5">
          <div className="text-heading-m">Claim Offer</div>
        </div>
        <ButtonIcon />
      </a>
    </div>
  )
}

// §1 hero: rotating circle (motion: .misc-spin-60) + overlay with Lottie, "JUMPSTART", "2026", countdown card
export function JumpstartHero() {
  return (
    <section id="product-hero-section" className="relative">
      <Container>
        <div className="flex flex-col items-center pt-2.5 max-sm:py-6">
          <div className="relative -mt-[305px] flex h-[800px] w-[800px] max-w-full flex-col max-sm:mt-0 max-sm:h-auto">
            <img
              src={`${A}69601b8767a0b290f4e1c1f9_jumpstart-circicle.webp`}
              alt=""
              width="800"
              height="800"
              className="misc-spin-60 absolute inset-0 size-full max-w-full max-sm:static max-sm:h-auto"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end gap-[5%] bg-[linear-gradient(#020308_44%,rgba(2,3,8,0))]">
              <div className="flex flex-col items-center max-sm:pb-6">
                <LottieLoader src={`${A}6961300bfb81bd5de54f4ce6_jumpstart.json`} className="size-[70px]" />
                <h1 className="text-center text-[30px] font-semibold uppercase leading-[44px] tracking-[23px] text-neutral-0 max-sm:text-[14px] max-sm:tracking-[17px]">
                  Jumpstart
                </h1>
                <h2 className="text-center text-[140px] font-bold leading-[140px] tracking-[10px] text-neutral-0 max-sm:text-[80px] max-sm:leading-[80px]">
                  2026
                </h2>
              </div>
              <CountdownCard />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

const BULLETS = {
  analyze: ['svg-w-embed-269dcabc.svg', 'Analyze & Iterate', 86],
  tracking: ['svg-w-embed-ac79cd49.svg', '24/7 Competitor Tracking', 80],
  spend: ['svg-w-embed-7d48321b.svg', 'Unlimited Ad Spend', 75],
  dataset: ['svg-w-embed-8d8c7d34.svg', '+160M Winning ads dataset', 90],
}

// `.jumpstart-bullet-wrapper`; place = Tailwind grid placement (≥992 only)
function Bullet({ id, place }) {
  const [icon, title, len] = BULLETS[id]
  return (
    <div className={`flex flex-col gap-2 self-center ${place}`}>
      <div className="flex items-center gap-1">
        <img src={`${A}svg/${icon}`} alt="" className="size-6" />
        <h3 className="text-label-m text-solid-700">{title}</h3>
      </div>
      <p className="text-body-m text-solid-500">{standin(`jumpstart-${id}`, len)}</p>
    </div>
  )
}

// `.div-block-354`: bg video + full-cover lightbox link + play bubble
function VideoCard() {
  const lb = useLightbox()
  return (
    <div className="relative flex min-h-[350px] overflow-hidden rounded-[15px] lg:col-[4/10] lg:row-[1/3] max-sm:min-h-[150px]">
      <BgVideo
        className="flex-1"
        poster={`${A}69612b690e2aeb02841afc4f_FOREPLAY_V6_poster.0000000.jpg`}
        sources={[`${A}69612b690e2aeb02841afc4f_FOREPLAY_V6_mp4.mp4`, `${A}69612b690e2aeb02841afc4f_FOREPLAY_V6_webm.webm`]}
      />
      <a {...lb.trigger} className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-[50px] items-center justify-center rounded-circle bg-play-bubble backdrop-blur-10">
          <img src={`${A}svg/icon-20-w-embed-1e825de4.svg`} alt="" className="size-5" />
        </span>
      </a>
      {lb.open && (
        <VideoLightbox url="https://www.youtube.com/watch?v=k40dfSJUfhE" title="Foreplay overview" onClose={lb.close} />
      )}
    </div>
  )
}

// `.savings-block`
function Savings({ label, amount }) {
  return (
    <div
      className="flex flex-col items-center rounded-12 bg-cover bg-center px-1.5 pb-1.5 pt-6"
      style={{ backgroundImage: `url("${A}6961428fd7a67af11e1147c1_green-bg.webp")` }}
    >
      <div className="text-center text-overline uppercase text-neutral-0">{label}</div>
      <div className="w-full rounded-6 bg-neutral-700 px-2.5 py-2 text-center text-overline uppercase text-neutral-0 backdrop-blur-[5px]">
        Avg. Savings {amount}
      </div>
    </div>
  )
}

// `.lens-solution-graph` head on white
const Head = (props) => (
  <div className="mx-auto flex w-full max-w-[940px] flex-col gap-9 py-20 max-sm:gap-8 max-sm:py-10">
    <SectionHead theme="light" size="h3" bodySize="m" {...props} />
  </div>
)

// §3 white offer block content (goes inside WhiteBlock)
export function JumpstartOffer() {
  return (
    <SectionContainer>
      <Head
        overline="Scale creative velocity with Foreplay"
        title="Lock-in your creative workflow in a post-andromeda world"
        body={standin('jumpstart-velocity', 105)}
      />
      <div className="grid grid-cols-12 grid-rows-[135px_135px] gap-20 pb-12 max-lg:flex max-lg:flex-col max-lg:gap-5 max-sm:gap-9">
        <VideoCard />
        <Bullet id="analyze" place="lg:col-[10/13] lg:row-[1/2]" />
        <Bullet id="tracking" place="lg:col-[1/4] lg:row-[2/3]" />
        <Bullet id="spend" place="lg:col-[10/13] lg:row-[2/3]" />
        <Bullet id="dataset" place="lg:col-[1/4] lg:row-[1/2]" />
      </div>
      <div id="2026-offer">
        <Head
          overline="The best price ever"
          title="Book a Call to to claim the 1 time offer to Jumpstart 2026"
          body={standin('jumpstart-offer', 155)}
        />
      </div>
      <div
        id="offer-booking"
        className="mx-auto grid max-w-[1024px] grid-cols-3 gap-4 rounded-[15px] border border-solid-100 p-1.5 max-sm:flex max-sm:flex-col"
      >
        <Savings label="For Brands" amount="$1,500" />
        <div className="flex flex-col gap-1.5 pb-3 pt-6">
          <div className="text-center text-overline uppercase text-solid-900">Special pricing expires in</div>
          <CountdownStandin />
        </div>
        <Savings label="For Agencies" amount="$3,200" />
      </div>
      <div className="mb-12 mt-6 overflow-hidden">
        <EmbedPlaceholder
          theme="light"
          label="Cal.com booking (foreplay-demo-action-plan, month view)"
          href="https://cal.com/team/foreplay/foreplay-demo-action-plan"
          linkLabel="Open booking page"
          className="h-[490px] w-full rounded-12 max-lg:h-[480px] max-sm:h-[1005px]"
        />
      </div>
    </SectionContainer>
  )
}
