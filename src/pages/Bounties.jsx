import { SectionContainer, PaddingY, ContentMain } from '../components/shared/Layout.jsx'
import PageHero from '../components/community/PageHero.jsx'
import { copy } from '../components/community/data.js'
import bounties from '../data/bounties.json'

const B = '/assets/pages/bounties/'
const VID = `${B}social_ertuken_httpss.mj.runKynClZlOrV4_A_hyper-realistic_3D_silver__903bcbf3-69a6-4f0d-8277-159c9f4a9ecf_1`

// bounties.md §1 BountyCharacter: absolute ≥992, static flex row 768–991, hidden ≤767
const CHARACTERS = [
  ['lg:[inset:10%_auto_auto_50px]', '68adc94dead0f5ba730266f8_bounty-headshot-2.webp', 'Designer', 'inline-bounty-character-tag-2935dc.svg'],
  ['lg:[inset:20px_15%_auto_auto]', '68adc94dc3123ce060f8da49_bounty-headshot-3.webp', 'n8n Expert', 'inline-bounty-character-tag-ca3231.svg'],
  ['lg:[inset:auto_50px_-30px_auto]', '68adc94ee865abf4eba75c61_bounty-headshot-1.webp', 'Creative Strategist', 'inline-bounty-character-tag-263045.svg'],
  ['lg:[inset:auto_auto_0%_75px]', '68adcf403461f59d0b560588_bounty-headshot-4.webp', 'Video Editor', 'inline-bounty-character-tag-08b3bc.svg'],
]

const TAG = 'flex w-fit items-center gap-[5px] rounded-8 px-2 py-1'

function StatusTag({ label }) {
  return (
    <div className={`${TAG} bg-[#7cddb526] pl-1`}>
      <img src={`${B}inline-bounties-item-tag-9060be.svg`} alt="" className="size-5" />
      <div className="text-label-s text-teal">{label}</div>
    </div>
  )
}

const Sep = () => <div className="h-px bg-neutral-700" />
const CARD = 'flex flex-col items-stretch gap-4 rounded-20 border border-neutral-700 bg-background p-4 text-neutral-100'

function BountyCard({ b }) {
  return (
    <a href={`/bounties/${b.slug}`} className={`${CARD} transition-all duration-200 hover:border-neutral-500 hover:bg-solid-900`}>
      <div className="flex items-center max-sm:flex-col max-sm:items-start max-sm:gap-[5px]">
        <div className="flex flex-1 items-center">
          <img src={`${B}inline-bounties-item-amount-46b9f0.svg`} alt="" className="size-7" />
          <div className="text-label-m text-[#ffd24d]">{b.currency}</div>
          <div className="text-label-m text-[#ffd24d]">{b.amount}</div>
        </div>
        <div className="flex gap-2.5 max-sm:flex-col">
          <div className={`${TAG} bg-neutral-700`}>
            <img src={`${B}inline-bounties-item-tag-a6ada4.svg`} alt="" className="size-5" />
            <div className="text-label-s text-neutral-100">{b.dueDate}</div>
          </div>
          <StatusTag label={b.status} />
        </div>
      </div>
      <Sep />
      <div className="flex flex-col gap-1">
        <h3 className="text-label-l leading-[30px] text-neutral-0 max-sm:text-[16px]">{b.title}</h3>
        <div className="text-body-m">{copy(`bounty-${b.slug}`, 243)}</div>
      </div>
      <Sep />
      <div className="flex items-center gap-2">
        <img src={b.authorAvatar} alt="" className="size-6 rounded-circle object-cover" />
        <div className="text-label-m text-neutral-0">{b.author}</div>
        <div className="text-body-m text-neutral-100">{b.authorHandle}</div>
      </div>
    </a>
  )
}

// specs/bounties.md. No final CTA.
export default function Bounties() {
  return (
    <>
      <PageHero
        titleStyle="h2"
        className="overflow-x-clip" // the 750px glow would otherwise widen the page ≤749
        heroClassName="pt-2.5 max-md:pt-16 max-sm:py-6"
        overline="BOUNTIES"
        title="Work with top Foreplay Marketers & Builders"
        subtitle={copy('bounties-hero', 110)}
        cta={{ href: '#', label: 'Post a Bounty (Coming Soon)' }}
        top={
          <>
            <div className="pointer-events-none absolute inset-x-0 top-2.5 mx-auto size-[750px] rounded-full bg-[radial-gradient(circle_at_50%_0,#fff,#fff0_86%)] opacity-5" />
            <div className="relative mt-[50px] max-w-[150px] max-lg:hidden max-md:block max-sm:max-w-[100px]">
              <video autoPlay loop muted playsInline className="size-[150px] object-contain max-sm:size-[100px]">
                <source src={`${VID}.webm`} type="video/webm" />
                <source src={`${VID}.mov`} type="video/mp4" />
              </video>
            </div>
          </>
        }
      >
        <div className="flex gap-5 max-md:hidden lg:block">
          {CHARACTERS.map(([pos, img, tag, icon]) => (
            <div key={tag} className={`flex flex-col items-center [transform-style:preserve-3d] lg:absolute ${pos}`}>
              <img src={B + img} alt="" className="size-[68px] rounded-full border border-neutral-700" />
              <div className="-mt-[5px] flex items-center gap-1 rounded-8 bg-solid-700 px-2 py-1">
                <img src={B + icon} alt="" className="size-5" />
                <div className="whitespace-nowrap text-label-s text-neutral-200">{tag}</div>
              </div>
            </div>
          ))}
        </div>
        <ContentMain />
      </PageHero>

      <div className="relative">
        <PaddingY>
          <SectionContainer>
            <div className="flex flex-col items-stretch gap-6">
              <div>
                <StatusTag label="Open Bounties" />
              </div>
              <div className="flex flex-col gap-6">
                {bounties.map((b) => (
                  <BountyCard key={b.slug} b={b} />
                ))}
              </div>
              <div className={`${CARD} min-h-[225px] items-center justify-center`}>
                <div className="flex gap-[5px]">
                  <img src={`${B}inline-div-block-347-923fd5.svg`} alt="" className="h-5 w-[21px]" />
                  <div className="text-label-s text-neutral-100">Public community bounties coming soon ...</div>
                </div>
              </div>
            </div>
          </SectionContainer>
        </PaddingY>
      </div>
    </>
  )
}
