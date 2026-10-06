import LottieHover from '../components/shared/LottieHover.jsx'

// specs/chrome-extension.md — legacy-design page (not the Lens system): pin hint with a looping Lottie,
// 5px blue bar, black `.ce-section` with fluid 3.5vw headline pills, the Chrome step card and two
// mobile split cards. Only Navbar/Footer are shared. Long copy is stand-in text.
const C = '/assets/pages/chrome-extension/'

// `.ce-feature-block`: 1px grey-stroke, rgba(255,255,255,.05) bg (hover .07, .2s), radius 15, padding 1.5em
const CARD =
  'relative z-1 flex rounded-[15px] border border-grey-stroke bg-white-05 p-6 no-underline transition-[background-color] duration-200 hover:bg-white-07'
const TEXT = 'text-[14px] leading-[21px] tracking-[-0.18px] text-white-80' // .text-block-94
const H1 = 'm-0 font-sans text-[3.5vw] font-medium leading-[1.5] tracking-[-0.18px] text-body' // .ce-h1

function StepHead({ n, title }) {
  return (
    <div className="relative z-1 flex w-full items-center gap-2.5">
      <div className="flex size-[25px] flex-none items-center justify-center rounded-[4px] bg-link text-center text-[16px] font-normal leading-none tracking-[-0.18px] text-body">
        {n}
      </div>
      <h2 className="m-0 font-circular text-[16px] font-light leading-none tracking-[-0.18px] text-body">{title}</h2>
    </div>
  )
}

function Pill({ href, img, label, children }) {
  return (
    <a
      href={href}
      className="relative flex max-w-full items-center gap-2.5 rounded-[1000px] bg-white-15 py-[0.7vw] pl-[0.7vw] pr-[1.5vw] no-underline transition-all duration-200 hover:bg-white-30"
    >
      <img className="w-[3.5vw] self-center" src={`${C}${img}`} alt={label === 'Chrome' ? 'google chrome icon' : ''} loading="lazy" />
      <h1 className={`${H1} !leading-none`}>{label}</h1>
      {children}
    </a>
  )
}

function CeButton({ href, img, imgClass, label, external = true }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel="noreferrer"
      className="flex max-w-full items-center justify-center gap-2.5 rounded-8 border border-neutral-700 bg-neutral-700 py-2.5 text-[14.4px] font-normal leading-6 tracking-[-0.18px] text-body no-underline transition-all duration-200 hover:border-white-15 hover:bg-white-15"
    >
      <img className={imgClass} src={`${C}${img}`} alt="" loading="lazy" />
      <div>{label}</div>
    </a>
  )
}

const PLATFORMS = [
  { href: 'https://www.facebook.com/ads/library/', img: '642ca4c09d050a2be842fee0_fb.svg', label: 'Facebook Ad Library' },
  { href: 'https://www.instagram.com/', img: '642ca4c12f8f5f73d94780dd_instagram.svg', label: 'Instagram' },
  { href: '#', img: '62a64767a8f8d8bbe124a326_tiktok-icon.svg', label: 'TikTok Ad Library' },
  { href: '#', img: '664e52e8d13ae48e8b3788d0_contest-linkedin.svg', label: 'LinkedIn Ad Library' },
  { href: '#', img: '664e52e820acdb847c1534e2_contest-youtube.svg', label: 'YouTube Shorts' },
]

export default function ChromeExtension() {
  return (
    <div className="relative">
      {/* S1 `.sticky-pin` (absolute, 70px from the document top = −2px below the 72px navbar) */}
      <div className="absolute -top-0.5 right-[3%] z-1 pt-5">
        <div className="flex flex-col items-center">
          <div className="w-10 opacity-50 [transform-style:preserve-3d] [transform:rotateX(180deg)]">
            <LottieHover mode="loop" src={`${C}66f1cbd9515e8a7e0e9f9048_h8rBjGm2UJ.json`} />
          </div>
          <div className="flex justify-center gap-[5px]">
            <div className={TEXT}>Click the</div>
            <img className="size-5" src={`${C}66f1c918609c422dda8ead67_extension-puzzle.svg`} alt="" loading="lazy" />
            <div className={TEXT}>icon and make sure to</div>
          </div>
          <div className="flex justify-center gap-[5px]">
            <div className={TEXT}>pin the Foreplay</div>
            <img className="size-5" src={`${C}6471025f55598689d5324cf5_foreplay-white-icon-logo.svg`} alt="" loading="lazy" />
            <div className={TEXT}>icon.</div>
          </div>
        </div>
      </div>

      {/* S2 */}
      <div className="h-[5px] w-full bg-link" />

      {/* S3 */}
      <div className="relative overflow-hidden bg-pure-black pb-[100px] pt-[50px] max-sm:py-[75px]">
        <div className="relative z-1 mx-auto max-w-[1200px] px-[50px] max-sm:px-[4%]">
          <div className="flex flex-col items-start justify-center gap-[0.8vw] text-center">
            <a href="/" className="mb-[50px] max-w-full">
              <img className="w-[150px]" src={`${C}64764a288a2848bea7d423ed_Foreplay-logo.webp`} alt="" loading="lazy" />
            </a>
            <div className="flex gap-[0.75em]">
              <h1 className={H1}>Save ads on</h1>
              <Pill href="#chrome" img="64944e2428c1fae0b340fded_Google_Chrome_icon_(February_2022).svg.avif" label="Chrome" />
            </div>
            <div className="flex gap-[0.75em]">
              <h1 className={H1}>or your</h1>
              <Pill href="#phone" img="66f1ba0bf37ee6dab2caf166_calling.avif" label="Phone">
                <img
                  className="absolute -right-[0.5vw] -top-[0.5vw] w-[4vw]"
                  src={`${C}66f1b7d42b7a3844659d944f_new-tag.svg`}
                  alt=""
                  loading="lazy"
                />
              </Pill>
            </div>
          </div>

          <div className="mt-[50px]">
            <div id="chrome" className={`${CARD} flex-col items-center justify-between`}>
              <StepHead n="1" title="Using the Chrome Extension" />
              <div className="py-[50px]">
                <div className="relative mx-auto flex max-w-[300px] flex-col items-stretch gap-2.5">
                  <img src={`${C}66f1beb915bb1e05d141155d_save-button.svg`} alt="" loading="lazy" />
                  <img src={`${C}66f1bf3fd36995d78f4e364f_main-dropdown.svg`} alt="" loading="lazy" />
                  <img className="relative -right-1/4 h-[100px]" src={`${C}66f1c161ba5704e4258daad1_arrow-keys.svg`} alt="" loading="lazy" />
                  <img className="absolute -right-[70%] top-[15%] h-[70px]" src={`${C}66f1c0ce22e21a1d953a5279_create-new.svg`} alt="" loading="lazy" />
                  <img className="absolute -left-[60%] top-0 h-[70px]" src={`${C}66f1c00d7a7961149767ea3d_search.svg`} alt="" loading="lazy" />
                </div>
              </div>
              <div className="flex items-center gap-2.5 rounded-8 bg-white-05 py-[5px] pl-[13px] pr-[5px]">
                <div className={TEXT}>Supported Platforms:</div>
                {PLATFORMS.map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex max-w-full items-center justify-start gap-[5px] rounded-6 border border-transparent bg-transparent py-[5px] pl-[5px] pr-[7px] no-underline saturate-0 transition-all duration-200 hover:bg-white-15 hover:saturate-100"
                  >
                    <img className="w-[15px]" src={`${C}${p.img}`} alt="" loading="lazy" />
                    <div className="block text-[12px] leading-none tracking-[-0.18px] text-white-80">{p.label}</div>
                  </a>
                ))}
              </div>
            </div>

            <div id="phone" className="mt-[30px] grid grid-cols-2 gap-[30px]">
              <div className={`${CARD} flex-row justify-between gap-5`}>
                <div className="flex flex-col">
                  <StepHead n="2" title="Save from Instagram Mobile" />
                  <div className="flex flex-1 flex-col items-stretch justify-end gap-2.5">
                    <div className={TEXT}>
                      Link your Instagram account once, then share any ad or post to Foreplay straight from the app.
                    </div>
                    <CeButton href="#" external={false} img="647662134e4be7ea6b1ba257_instagram-logo.webp" imgClass="w-5" label="Connect Your Instagram" />
                  </div>
                </div>
                <img className="w-[40%] rounded-8" src={`${C}66f1c522add8a0bd054f0a4f_ig-save-example.avif`} alt="" loading="lazy" />
              </div>
              <div className={`${CARD} flex-row justify-between gap-5`}>
                <div className="flex flex-col">
                  <StepHead n="3" title="Save from TikTok Mobile" />
                  <div className="flex flex-1 flex-col items-stretch justify-end gap-2.5">
                    <div className={TEXT}>Install the mobile app and use the share menu in TikTok to save any video you like.</div>
                    <CeButton href="https://apps.apple.com/ca/app/foreplay-ad-swipe-file/id6466097243" img="66f1c677d36995d78f55733f_apple.svg" imgClass="w-[18px]" label="iOS App" />
                    <CeButton href="https://play.google.com/store/apps/details?id=co.foreplay.ForeplayMobile&pli=1" img="66f1c67741e0db33bdcb71ad_android.svg" imgClass="w-[18px]" label="Android" />
                  </div>
                </div>
                <img className="w-[40%] rounded-8" src={`${C}66f1c531131769e4019de32f_tt-ssave-exmaple.avif`} alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
