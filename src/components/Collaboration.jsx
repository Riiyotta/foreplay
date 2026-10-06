import { CollabOval } from './svgs.jsx'
import { Overline } from './shared.jsx'
import Sharing from './Sharing.jsx'

const A = '/assets/'

// Order and .is-N classes follow the saved DOM (saved.html L783–855).
// Position classes per CLONE_SPEC §5.2 table / webflow.css `.lens-integrations-tooltip-container.is-N`.
const LEFT = [
  {
    pos: 'top-[16%] left-1/2 max-lg:left-[58%] max-md:top-[12%] max-md:left-[60%] max-sm:top-[12%]', // is-2
    quote:
      '“Foreplay is a key piece of how we find, save, review, and communicate around performance creative assets. It’s really reduced a lot of friction in the process and has allowed us to review and save 10x more content than we would have otherwise.”',
    img: `${A}6814ed829560f0bddedd81e3_6478c447be86e2342219433d_Connor%20MacDonald.webp`,
    name: 'Connor MacDonald',
    role: 'CMO @ Ridge Wallet',
  },
  {
    pos: 'top-[45%] left-[33%] max-lg:left-[45%] max-md:left-1/2 max-sm:top-[44%] max-sm:left-1/2', // is-1
    quote:
      '"My team uses it daily. Creative communication between performance teams, clients and strategists has always been a massive bottleneck. Foreplay added structure & efficiency that simply let\'s everyone do their best work while cutting down needless back and forth."',
    img: `${A}646e13166ca538092d4c53fc_nick-shak.webp`,
    name: 'Nick Shackelford',
    role: 'Founder @ Structured & Konstant Kreative',
  },
  {
    pos: 'top-[76%] left-1/2 max-lg:left-[58%] max-md:left-[60%]', // is-3
    quote:
      '"We use Foreplay literally every day at our agency. It started as a simple way to collect ad inspiration but it has turned into such a crucial part of our workflow internally, but more importantly for client communication" ',
    img: `${A}68307355e138e6b0366b3a58_628EA4nu_400x400.avif`,
    name: 'Savannah Sanchez',
    role: 'Founder @ The Social Savannah',
  },
]

const RIGHT = [
  {
    pos: 'top-[24%] right-[15%] max-md:top-[45%] max-md:right-[40%] max-sm:top-[39%] max-sm:right-[36%]', // is-4
    quote:
      '"We operate in a highly competitive market, and every time I use Spyder, it feels like an unfair advantage. We have been using it since beta, and easily 90% of our winning ads come from Spyder insights."',
    img: `${A}6679ebddfad13bb59b5a8f25_TS2G1MWKZ-US2G1MXHD-eb1db3a0ea43-192.avif`,
    name: 'Stephen Hakami',
    role: 'Founder @ Wiza',
  },
  {
    pos: 'top-[10%] right-[40%] max-md:right-1/2', // is-5
    quote:
      '"This is the #1 tool in my facebook ads toolkit. I use it daily for creative strategy research, compiling content ideas for clients, and even personal content development. If you’re trying to make better ad creative, Foreplay is not just “a nice to have”. It’s a must."',
    img: `${A}646e7c53dd2b77ffdce88775_1671719386025.avif`,
    name: 'Dara Denney',
    role: 'Director of Performance Creative',
  },
  {
    pos: 'top-1/2 right-[26%] max-md:hidden', // is-6
    quote:
      'Once we found Foreplay it became our agencies one-stop shop for everything creative research and creative analysis. Lens specifically has catapulted our creative testing for the better. ',
    img: `${A}68307166d8a07360e78b981a_Webtopia_Headshot_1080x1080_Christina.avif`,
    name: 'Christina Bell',
    role: 'Growth Lead @ Webtopia',
  },
  {
    pos: 'top-[77%] right-[40%] max-md:right-1/2 max-sm:top-[70%]', // is-7
    quote:
      '"Everyone who works in creative strategy knows 90% of your success ends in a brief with references. Every week I schedule time to build out moodboards for our projects. I do most of this work in Foreplay since I can save content from anywhere including my mobile phone."',
    img: `${A}68307315081e73189935dab8_1706814091085.avif`,
    name: 'Oren John',
    role: 'Creative Director',
  },
]

function Pin({ pos, quote, img, name, role }) {
  return (
    <div className={`absolute -translate-x-1/2 ${pos}`}>
      <div className="group relative z-4 flex flex-col">
        {/* hover card (hidden ≤767) */}
        <div className="invisible absolute bottom-full left-1/2 -translate-x-1/2 group-hover:visible group-focus-visible:visible max-md:hidden">
          <div className="mb-6 flex h-auto w-[276px] translate-y-6 scale-[.8] flex-col gap-1 rounded-16 bg-solid-600 p-1 opacity-0 transition-all duration-300 ease-cubic-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:opacity-100">
            <div className="flex flex-1 items-center justify-center overflow-hidden rounded-12 bg-black-20">
              <div className="p-3">
                <div className="text-neutral-50">
                  <div className="text-body-s">{quote}</div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="flex flex-1 items-center justify-start gap-3">
                <img className="size-10 rounded-6" src={img} alt="" loading="lazy" />
                <div className="flex flex-col items-start justify-start gap-1">
                  <div className="text-neutral-50">
                    <div className="text-label-s">{name}</div>
                  </div>
                  <div className="flex-1 text-neutral-100">
                    <div className="text-body-s">{role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-start gap-1 max-md:gap-0">
          <img
            className="size-[72px] rounded-pill transition-all duration-300 ease-cubic-out group-hover:shadow-avatar-hover group-focus-visible:shadow-avatar-hover max-lg:size-14 max-md:size-12 max-sm:size-8"
            src={img}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

const RAY =
  'relative z-3 col-start-1 row-start-1 flex h-full w-[58.8889%] rounded-r-ray border border-l-0 border-solid-50 bg-ray'
const FADER = 'relative z-2 -m-0.5 w-[72px] bg-fader-light'
const LAYER =
  'absolute inset-0 max-lg:left-auto max-lg:w-full max-sm:top-[-2%]'

export default function Collaboration() {
  return (
    <section>
      <div className="p-2">
        <div className="relative z-2 overflow-hidden rounded-36 bg-neutral-0 text-solid-700 max-sm:rounded-16">
          {/* §5.1 head */}
          <div className="flex flex-col items-center justify-start gap-10 py-20">
            <div className="mx-auto w-full max-w-section px-10 max-lg:px-8 max-md:px-6">
              <div className="mx-auto flex w-full max-w-[720px] flex-col items-center justify-start gap-3 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div>
                    <Overline className="text-solid-400">Collaboration</Overline>
                  </div>
                  <div className="text-solid-700 [text-wrap:balance]">
                    <h2 className="font-display text-display-h2 max-lg:text-display-h2-lg max-sm:text-display-h2-sm">
                      Bringing performance &amp; creative teams together.
                    </h2>
                  </div>
                  <div className="max-w-[512px] [text-wrap:pretty]">
                    <div className="text-solid-600">
                      <p className="text-body-l">
                        Magic happens when strategy, creative, and data speak the same language. Foreplay bridges the
                        gap between media buyers, creatives, and agencies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* §5.2 testimonial rays */}
          <div className="mb-20 flex flex-col gap-32 overflow-x-clip max-lg:pb-10 max-md:mb-0 max-md:gap-20">
            <figure className="relative m-0 -mx-20 grid aspect-[1440/520] grid-cols-1 gap-4 xl:-mx-10 2xl:mx-auto 2xl:w-full 2xl:max-w-[1440px] max-lg:-mx-20 max-sm:-mx-[72px]">
              <div className="pointer-events-none absolute z-3 mx-auto flex aspect-square size-full flex-col items-center justify-center">
                <div className="relative z-5 aspect-square h-full scale-x-[.97] scale-y-[.993] saturate-[1.24] [transform-style:preserve-3d]">
                  <div className="flex size-full items-center justify-center">
                    <CollabOval />
                  </div>
                </div>
              </div>
              <div className={RAY}>
                <div className={FADER} />
                <div className={`${LAYER} max-lg:right-[7%] max-md:right-[9%] max-sm:right-[6%]`}>
                  {LEFT.map((t) => (
                    <Pin key={t.name} {...t} />
                  ))}
                </div>
              </div>
              <div className={`${RAY} justify-self-end -scale-x-100`}>
                <div className={FADER} />
                <div className={`${LAYER} -scale-x-100 max-lg:right-[-8%] max-md:right-[8%]`}>
                  {RIGHT.map((t) => (
                    <Pin key={t.name} {...t} />
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 z-5 flex flex-col items-center justify-start" />
            </figure>
          </div>

          {/* §5.3 */}
          <Sharing />
        </div>
      </div>
    </section>
  )
}
