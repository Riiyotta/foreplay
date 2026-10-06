import { useState } from 'react'
import EmbedPlaceholder from '../components/shared/EmbedPlaceholder.jsx'
import { useEmbedLightbox } from '../components/community/EmbedLightbox.jsx'
import {
  C, CS, LINKEDIN, INSTAGRAM, ContestTheme, Container1200, ContestH2, ContestH3, Pill, PrizeType, DetailRow, AwardPill,
  PlayThumb, ContestFaqItem,
} from '../components/community/contest.jsx'
import { copy } from '../components/community/data.js'

const ARROW = `${C}665dfe80ae0f13adec10f551_contest-arrow.svg`
const BLOCK_BASE = 'flex flex-col items-stretch justify-start rounded-20 border border-contest-card bg-contest-card transition-all duration-200 hover:bg-contest-card'
const BLOCK = `${BLOCK_BASE} min-h-[375px] max-sm:min-h-0`
const P = 'font-circular text-[16px] font-extralight leading-6 text-contest-text'

const OPTIONS = [
  {
    label: 'OPTION 1', title: 'Submit Your Ad Creative', chars: [100, 33], button: 'Enter Ad Contest',
    awards: ['Best Overall Ad $10k', 'Best UGC Video $1k', 'Best Hook $1k', 'Best Single Image $1k', 'Best AI Ad $1k'],
  },
  { label: 'OPTION 2', title: 'Submit Your BTS Video', chars: [65, 28], button: 'Enter BTS Contest', awards: ['Best BTS Video $2.5k'] },
]

const BONUS = [
  ['Repost or Quote on X', `${CS}6655164f1cb2f0192a2863d2_X_logo_2023_(white)-1.avif`, '1 Entry', true],
  ['Repost on LinkedIn', LINKEDIN, '1 Entry'],
  ['Short-form Video', `${CS}668ed1d7b93d461bee629497_Group-1000004763.avif`, '5 Entries'],
  ['Follow us on Instagram', INSTAGRAM, '1 Entry'],
]

const JUDGES = [
  ['Nick Shackelford', 'Konstant', '/assets/646e13166ca538092d4c53fc_nick-shak.webp', `${C}646e150348980ed19a8bee5c_konstant-logo.svg`],
  ['Dara Denney', 'Creator', '/assets/646e7c53dd2b77ffdce88775_1671719386025.avif', `${CS}66269cefcd8042e78308e9eb_dara-logo.avif`],
  ['Barry Hott', 'Adcrate', `${CS}668ebad0f4b666147b66008b_barry.webp`, `${CS}668ed68e8cdb9bd81e67ca39_adcrate.svg`],
  ['Mirella Crespi', 'Creative Milkshake', `${CS}668ed736622f9becc56c80ce_1712751527646.avif`, `${CS}668ed71cc52c902974262ce4_logo_d7974e6e-4fc5-4077-9b70-f8d215cc5127_580x.webp`],
  ['Rabah Rahil', 'Fermat', `${CS}668ed7c466057b8a4eee4574_rabah.webp`, `${C}668d71d2eae09ece9288eb18_6543cbe2c12afbe521000e90_footer-logo.webp`],
  ['Connor MacDonald', 'Ridge', `${CS}668f05a2b1ba165699f85d0e_1564415715160.avif`, `${CS}6478c433c4fc1d3402c883fc_the-ridge.webp`],
]

const RESOURCES = [
  ['Find Winning Ad Ideas with Foreplay', `${C}647102737a861edf662aa7cd_foreplay-white-icon-logo.webp`, null, true],
  ['Make AI UGC with Arcads', `${CS}66902b7a4e591b4dcb8e8376_1708959987676.webp`, '10 Free Credits'],
  ['Organize Creative Assets with Air', `${CS}665e0553987ef3d343388bf0_airhq_logo.avif`],
  ['Enroll in UGC University', `${CS}66902c158093c8a384858ad5_1702156496055.avif`, '25% OFF "FP25"'],
  ['2024 Top Ad Ideas from Konstant', `${CS}66902cad2e52c4bc150dbe16_konstantkreative_logo.avif`],
  ['500+ Ad & Landing Page Breakdowns', `${CS}6690333c9b3c5796628dab4a_replo_app_logo.avif`],
  ['Level-Up Your Dynamic Ad Creative', `${CS}6691af630af8c2f658b087b5_marpipe_logo.avif`],
  ['Edit Viral Ads with Submagic', `${CS}669406a8aad086503ac54a6a_submagic-logo-2.svg`, '10% OFF "FOREPLAY10"'],
]

const FAQ = [
  ['What is the Unverified Ad Awards?', 180],
  ['Who can enter the contest?', 140],
  ['How many entries can I submit?', 200],
  ['When is the submission deadline?', 117],
  ['How are the finalists chosen?', 290],
  ['How do bonus entries work?', 220],
  ['Can agencies submit on behalf of brands?', 160],
  ['How will winners be announced?', 150],
  ['How are prizes paid out?', 240],
].map(([q, n]) => ({ q, a: copy(`contest-faq-${q}`, n) }))

// `.dropdown-3` Eligible Awards: Webflow hover dropdown (delay 0)
function EligibleAwards({ awards }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative z-[900]" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button type="button" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="block">
        <AwardPill>Eligible Awards</AwardPill>
      </button>
      {open && (
        <div className="absolute right-0 top-full flex w-max min-w-full flex-col gap-2.5 bg-transparent pt-2.5 max-sm:left-1/2 max-sm:right-auto max-sm:-translate-x-1/2">
          {awards.map((a) => (
            <DetailRow key={a} icon={`${CS}66550fd4fb02d321734c8c6b_uaa-icon.svg`} iconClass="h-6 w-5">
              {a}
            </DetailRow>
          ))}
        </div>
      )}
    </div>
  )
}

// `.bonus-entry-dropdown`: Webflow click dropdown
function BonusEntry({ label, icon, entries, embed }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative z-[900] rounded-10 border border-[#ffffff0a] bg-[#ffffff05]">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="relative flex w-full items-center justify-between bg-[#ffffff05] py-2.5 pl-[15px] pr-[50px] text-left"
      >
        <div className="flex items-center gap-2.5">
          <img src={icon} alt="" className="size-5 rounded-[4px] object-cover" />
          <div className="whitespace-nowrap font-circular text-[16px] font-extralight leading-6 text-contest-bright">{label}</div>
        </div>
        <div className="max-sm:hidden">
          <AwardPill>{entries}</AwardPill>
        </div>
        <svg viewBox="0 0 16 16" className="absolute right-0 mr-5 size-4 text-contest-bright" aria-hidden="true">
          <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      {open && (
        <div className="flex flex-col gap-2.5 bg-transparent p-4">
          <a
            href="#"
            className="rounded-[7px] border border-grey-stroke bg-[#ffffff0d] px-4 py-3 text-center font-circular text-[16px] font-extralight leading-6 text-neutral-0 transition-all duration-200 ease-in-out"
          >
            Repost and Claim Entry
          </a>
          {embed && (
            <EmbedPlaceholder label="Post on X (embed)" className="h-[539px] w-full max-w-[483px] self-center rounded-[7px]" />
          )}
        </div>
      )}
    </div>
  )
}

// specs/contest-submission.md
export default function ContestSubmission() {
  const lb = useEmbedLightbox()
  return (
    <ContestTheme>
      {/* 1. Header */}
      <section
        className="border-b border-contest-card bg-[length:100%_auto] bg-[position:50%_100%] bg-no-repeat pb-[100px] pt-[150px] max-lg:pt-[100px] max-sm:pb-[50px]"
        style={{ backgroundImage: `url("${CS}665e03825859e547d131265d_contest-bg-shine.avif")` }}
      >
        <Container1200>
          <div className="grid grid-cols-2 gap-[50px] max-lg:flex max-lg:flex-col max-lg:items-center max-sm:gap-[25px]">
            <div className="relative flex flex-col items-start justify-center gap-2.5 max-lg:items-center">
              <Pill>CONTEST SUBMISSION HUB</Pill>
              <h1 className="contest-gradient mb-2.5 mt-5 font-circular text-[55px] font-medium leading-[66px] max-lg:text-center max-sm:text-[45px] max-sm:leading-[54px]">
                Welcome to the Unverified Ad Awards
              </h1>
              <div className="flex items-center gap-2.5">
                <div className={P}>Presented By</div>
                <a href="/" className="transition-all duration-200 hover:opacity-80">
                  <img src={`${CS}665dfdca5859e547d12c1b65_blue-foreplay-logo.svg`} alt="Foreplay" className="h-[22px] w-[100px]" />
                </a>
              </div>
              <div className="absolute left-[346px] top-[164.5px] w-[250px] max-lg:hidden">
                <img src={ARROW} alt="" className="h-[65px] w-[250px]" />
                <div className={`${P} text-center`}>How to Increase Your Chances!</div>
              </div>
            </div>
            <div className="flex justify-center">
              <PlayThumb
                src={`${CS}6692c1271ad28257ce9197dc_submission-video-thumbnail.avif`}
                imgClass="aspect-[940/529]"
                className="w-full max-w-[90%]"
                onOpen={() => lb.open({ title: 'How to submit' })}
              />
            </div>
          </div>
        </Container1200>
      </section>

      {/* 2. Submission grid. pb 100 is inferred from the measured document height (not stated in the spec). */}
      <div className="flex flex-col gap-[100px] pb-[100px] pt-[50px] max-sm:pt-0">
        <section>
          <Container1200>
            <div className="grid grid-cols-2 gap-10 max-lg:flex max-lg:flex-col">
              {/* A */}
              <div className={BLOCK}>
                {OPTIONS.map((o, i) => (
                  <div key={o.label} className={`flex flex-1 flex-col gap-[5px] p-4 max-sm:items-center max-sm:text-center ${i === 0 ? 'border-b border-contest-card' : ''}`}>
                    <PrizeType>{o.label}</PrizeType>
                    <ContestH3 className="mb-2.5 leading-[25px] max-sm:leading-[30px]">{o.title}</ContestH3>
                    <p className={P}>
                      {copy(`contest-sub-${o.label}`, o.chars[0])} <span className="opacity-50">{copy(`contest-sub-tail-${o.label}`, o.chars[1])}</span>
                    </p>
                    <div className="flex flex-1 items-end justify-between pt-[25px] max-sm:flex-col max-sm:items-center max-sm:gap-5 max-sm:pt-5">
                      <a
                        href="https://docs.google.com/forms/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-8 border border-[#ffffff17] bg-contest-play px-6 py-3 font-circular text-[16px] font-light leading-4 text-contest-bright shadow-[inset_0_-10px_15px_-4px_#093061cf] transition-all duration-[250ms] hover:border-[#ffffff66] hover:bg-contest-accent max-sm:w-full max-sm:text-center"
                      >
                        {o.button}
                      </a>
                      <EligibleAwards awards={o.awards} />
                    </div>
                  </div>
                ))}
              </div>
              {/* B */}
              <div className={BLOCK}>
                <div className="px-4 pt-4">
                  <img
                    src={`${CS}6661c76d4184372cc40ee7a3_Win-an-iPad-Pro.webp`}
                    alt="Win an iPad Pro"
                    className="mb-4 w-full rounded-10 border border-contest-card"
                  />
                  <p className="text-center font-circular text-[19.2px] font-extralight leading-[28.8px] max-sm:text-[16px] max-sm:leading-6">
                    <span className="text-contest-text">{copy('contest-sub-bonus', 123)}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-4 p-4">
                  {BONUS.map(([label, icon, entries, embed]) => (
                    <BonusEntry key={label} label={label} icon={icon} entries={entries} embed={embed} />
                  ))}
                </div>
              </div>
              {/* C */}
              <div className={BLOCK}>
                <div className="px-4 pt-4">
                  <ContestH3 className="my-2.5 text-center">Meet Your Judges</ContestH3>
                </div>
                <div className="flex flex-col p-4">
                  {JUDGES.map(([name, role, img, logo]) => (
                    <div key={name} className="flex h-20 items-center justify-between gap-2.5 p-[15px]">
                      <div className="flex items-center gap-2.5">
                        <img src={img} alt="" className="size-[50px] rounded-8 object-cover" />
                        <div className={P}>{name}</div>
                        <div className={`${P} opacity-50`}>{role}</div>
                      </div>
                      <a href="#" className="flex h-[50px] w-[60px] min-w-[60px] max-w-[120px] items-center justify-center">
                        <img src={logo} alt="" className="h-5 w-auto max-w-[120px] object-contain" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              {/* D */}
              <div className={BLOCK}>
                <div className="px-4 pt-4">
                  <ContestH3 className="my-2.5 text-center">Resources to Help You Win</ContestH3>
                </div>
                <div className="flex flex-col gap-4 p-4">
                  {RESOURCES.map(([label, logo, chip, noStroke]) => (
                    <a
                      key={label}
                      href="#"
                      className="flex items-center gap-2.5 rounded-10 border border-[#ffffff0a] bg-[#ffffff05] p-[15px] transition-all duration-200"
                    >
                      <img
                        src={logo}
                        alt=""
                        className={`size-10 flex-none rounded-8 object-cover ${noStroke ? '' : 'border border-neutral-600'}`}
                      />
                      <div className="font-circular text-[16px] font-extralight leading-6 text-contest-bright">{label}</div>
                      {chip && (
                        <div className="rounded-[3px] bg-[#3787ff26] px-[5px] py-[3px] font-circular text-[12.8px] font-extralight leading-[12.8px] text-contest-play">
                          {chip}
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </div>
              {/* E */}
              <div className={`${BLOCK_BASE} col-span-2 px-0 pb-4 pt-2`}>
                <ContestH3 className="mx-auto max-w-[400px] text-center leading-[25px]">
                  Winners Announced Live! Event Invite Will Be Sent to Your Email
                </ContestH3>
              </div>
            </div>
          </Container1200>
        </section>

        {/* 3. FAQ */}
        <section>
          <Container1200>
            <div className="mx-auto max-w-[800px] text-center">
              <ContestH2>Questions? We got answers!</ContestH2>
            </div>
            <div className="mx-auto mt-[30px] flex w-full max-w-[800px] flex-col gap-[15px] text-left">
              {FAQ.map((f) => (
                <ContestFaqItem key={f.q} {...f} />
              ))}
            </div>
          </Container1200>
        </section>
      </div>
      {lb.node}
    </ContestTheme>
  )
}
