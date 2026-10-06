import { useEmbedLightbox } from '../components/community/EmbedLightbox.jsx'
import {
  C, LINKEDIN, ContestTheme, Container1200, ContestH2, ContestH3, Pill, PrizeType, DetailRow, PlayThumb,
} from '../components/community/contest.jsx'
import { copy } from '../components/community/data.js'

const SPONSORS = [
  ['6661cb2c74a3bcef4607b9bd_replo-full.avif', 'replo'],
  ['646e150348980ed19a8bee5c_konstant-logo.svg', 'Konstant'],
  ['668d5cf4fd5ef2392c4aa5a9_657bc584c724a928948c1721_Logo.webp', 'arcads'],
  ['6694067365c60d35575daec1_submagic-logo.svg', 'submagic'],
  ['668d71d2eae09ece9288eb18_6543cbe2c12afbe521000e90_footer-logo.webp', 'Fermat'],
  ['668d8180f015d2bdebe39944_ugc-pro.avif', 'ugc pro'],
]

/* Card media in upload order; brand names come from the thumbnail file names. Submitter names, roles,
   locations and brand/avatar pairing are stand-ins (not in the spec). Two lightbox sources were recorded. */
const VIDEO_URLS = ['https://www.youtube.com/watch?v=k40dfSJUfhE', 'https://foreplay.wistia.com/medias/jtmgi3a2r5']
const card = (thumb, brand, extra = {}) => ({ thumb: C + thumb, brand, ...extra })
const GROUPS = [
  {
    title: 'All Around Best Ad (6 Finalists)', amount: '$10,000 Cash', type: '*AWARDED BY JUDGES*',
    icon: '664e42c277a8b571e16c1dd6_best-ad-icon-v2.svg',
    cards: [
      card('677c514bdaf0225bfd5d8d9c_Vitaly-Thumbnail.avif', 'Vitaly', { logo: '677c4f7a3122cafef6069cc2_vitaly_design_logo.avif' }),
      card('677c53b378bf1edc664fedc6_Brite-Thumbnail.avif', 'Brite Drinks', { logo: '677c53e6d8e31af904bd9cd2_britedrinks_logo.avif' }),
      card('677c55a9c9799c6dc8142d77_Sintra-Thumbnail.avif', 'Sintra'),
      card('677c5659f96aeeb814b8f3e9_Ella-Mila-Thumbnail.avif', 'Ella Mila'),
      card('677c576960f4c560f59339a0_Tweakit-Thumbnail.avif', 'Tweakit'),
      card('677c591ef96aeeb814bb11be_Loop-Thumbnail.avif', 'Loop'),
    ],
  },
  {
    title: 'Best UGC Video (3 Finalists)', amount: '$1,000 Cash', type: '*AWARDED BY JUDGES*',
    icon: '664f71d24dfe2b8d3b29f6ee_award-ugc.svg', sponsor: '668d8180f015d2bdebe39944_ugc-pro.avif',
    cards: [
      card('677d4ccd0bc5dfb533f97ac7_Nueboo-Thumbnail.avif', 'Nueboo'),
      card('677d4ccd6b976f44abbf0487_Oscar-Myer-Thumbnail.avif', 'Oscar Mayer'),
      card('677d4ccd80eef3f5fe17b445_Waterdrop-Thumbnail.avif', 'Waterdrop'),
    ],
  },
  {
    title: 'Best Hook (3 Finalists)', amount: '$1,000 Cash', type: '*AWARDED BY JUDGES*',
    icon: '664f71d2d2abc29e5fa80bf2_award-hook.svg', sponsor: '646e150348980ed19a8bee5c_konstant-logo.svg',
    cards: [
      card('677d51b69ffc3ba242bda43a_Cough-Syrup-Thumbnail.avif', 'Cough Syrup', { logo: '677d50059ffc3ba242bc3725_Cough-Syrup-Logo.avif' }),
      card('677d51b6acdd1cccb48aeca7_Bike-Bac-Thumbnail.avif', 'Bike Bac'),
      card('677d51b6ae2b77d66c9e486f_Birdie-&-Louie-Thumbnail.avif', 'Birdie & Louie'),
    ],
  },
  {
    title: 'Best Single Image (6 Finalists)', amount: '$1,000 Cash', type: '*AWARDED BY JUDGES*',
    icon: '664f71d26ba955f8ea6a5d9b_award-image.svg', image: true,
    cards: [
      card('677d55f2c401e4d8480ddaf2_Artboard-6---Zack-Vitiello.avif', 'Brand name'),
      card('677d5a89f4d646e6a8c6b0b5_Kitchn-Image.avif', 'Kitchn'),
      card('677d5a89fa6fc75b2ca28635_Birdie-Image.avif', 'Birdie'),
      card('677d5a8a0fd5ec2ae5acba20_Vella-Image.avif', 'Vella'),
      card('677d5a8a53ea2bafacacda1b_Superroot-Image.avif', 'Superroot'),
      card('677d5a8ad77c0fc08d0594c9_Gramarly-Image.avif', 'Grammarly'),
    ],
  },
  {
    title: 'Best AI Ad (3 Finalists)', amount: '$1,000 Cash', type: '*AWARDED BY JUDGES*',
    icon: '668ec9688836ae05695929dc_award-ugly.svg',
    cards: [
      card('677d770927698d7656f8d4d4_Foreplay-Thumbnail.avif', 'Foreplay', { logo: '647102737a861edf662aa7cd_foreplay-white-icon-logo.webp' }),
      card('677d7c1cd5de1bf97ebcc938_ATPlab-Thumbnail.avif', 'ATPlab'),
      card('67bf81692e5a129792ec595a_Screenshot-2025-02-26-at-4.02.23-PM.avif', 'Brand name'),
    ],
  },
  {
    title: 'Best Behind the Scenes (7 Finalists)', amount: '$2,500 Cash', type: 'AWARDED BY FOREPLAY',
    icon: '664f71d216a079ebcb5acb9a_award-bts.svg',
    cards: ['Colby', 'Klaudia', 'Alex', 'Kapadia', 'Martin', 'Genevieve', 'Ivan'].map((n) =>
      card(
        {
          Colby: '677d8fad04ba98d2f449980d_Colby-Thumbnail.avif',
          Klaudia: '677d8fad4648978ad86a5c24_Klaudia-Thumbnail.avif',
          Alex: '677d8fadbbd35624fcb835f9_Alex-Thumbnail.avif',
          Kapadia: '677d8fadbfa4e8c541683d5f_Kapadia-Thumbnail.avif',
          Martin: '677d8faddcd7b4c3166bc7bc_Martin-Thumbnail.avif',
          Genevieve: '677d8fae51a819f2655d8bf2_Genevieve-Thumbnail.avif',
          Ivan: '677d8fb6638bb1ec7c3e1e04_Ivan-Thumbnail.avif',
        }[n],
        'Brand name',
      ),
    ),
  },
]
// stand-in brand logos (200×200) and avatars (square) reused cyclically
const LOGOS = ['677c554cbf32f9dab7349dbf_image-(2).avif', '677c563fb7b2cf95767dd311_image-(3).avif', '677c5799401537b9dfa37152_image-(4).avif', '677c58b8ac02137a67253afe_image-(7).avif', '677d4cbbdde7ceabf892a90d_image-(9).avif', '677d4d5bd7c3a1fa1ab20903_image-(10).avif', '677d4e4acb3c1061597ecacf_image-(11).avif', '677d5214a923f02d0ea7707d_image-(15).avif', '677d569b0d3f567e5636e04a_image-(16).avif', '677d5bc392f7fc5bbc252fa3_image-(18).avif', '677d5c37befd324ec136573c_image-(20).avif']
const AVATARS = ['677c4ec3b27affb73e4d28f1_1724449539452.avif', '677c539ca22068717e54fcda_1719826768034.avif', '677c54c1b7b2cf95767ca2c9_image-(1).avif', '677c569f59749611c6756083_1696356862762.avif', '677c57ee8b9d2506e87cf6fa_image-(5).avif', '677d4cdd34e95a9a7c70ffbd_image-(8).avif', '677d515072b5885d06597d42_image-(12).avif', '677d5b377dee7ccadbbf3719_image-(17).avif', '677d5d4efad7d7c1c8db1d1f_Sunday-Headshot.avif', '677d8cd4a1d59f466459c750_Colby-Headshot.avif', '677d8d64cc9f0a8e805eed54_no-user-image-square.webp']

// `.prize-block`
function PrizeBlock({ g }) {
  return (
    <div className="flex items-stretch justify-between overflow-hidden rounded-20 border border-contest-card bg-contest-card p-4 transition-all duration-200 hover:bg-contest-card max-md:flex-col max-md:items-start max-md:gap-[9px] max-sm:items-center">
      <div className="flex items-center gap-[15px] max-sm:flex-col">
        <img src={C + g.icon} alt="" className="size-[60px] max-sm:size-[45px]" />
        <ContestH3 className="max-sm:text-center max-sm:text-[20px] max-sm:leading-6">{g.title}</ContestH3>
        {g.sponsor && <img src={C + g.sponsor} alt="" className="h-5 w-auto max-sm:mb-[15px]" />}
      </div>
      <div className="flex flex-col items-end justify-center max-sm:items-center">
        <ContestH3 className="text-right max-sm:text-center max-sm:text-[20px] max-sm:leading-6">{g.amount}</ContestH3>
        <PrizeType className="text-right">{g.type}</PrizeType>
      </div>
    </div>
  )
}

// `._3-steps-block` finalist card
function FinalistCard({ c, i, k, image, onOpen }) {
  return (
    <div className="flex min-h-[375px] flex-col justify-end overflow-hidden rounded-20 border border-contest-card bg-contest-card transition-all duration-200 hover:bg-contest-card max-lg:justify-start">
      <div className="z-1 flex flex-1 flex-col items-center justify-center gap-5 bg-[linear-gradient(#0e122700,#0e1227_50%)] p-4">
        <Pill>Finalist {i + 1}</Pill>
        {image ? (
          <img src={c.thumb} alt="" loading="lazy" className="w-full rounded-[15px]" />
        ) : (
          <PlayThumb src={c.thumb} className="w-full" onOpen={() => onOpen({ title: `${c.brand} finalist video`, href: VIDEO_URLS[k % 2] })} />
        )}
        <DetailRow href="#" icon={C + (c.logo || LOGOS[k % LOGOS.length])} className="w-full">
          {c.brand}
        </DetailRow>
        <div className="flex w-full flex-col gap-2.5 border-t border-contest-card pt-5">
          <div className="flex items-center gap-2.5">
            <img src={C + AVATARS[k % AVATARS.length]} alt="" loading="lazy" className="size-[70px] flex-none rounded-10 object-cover" />
            <div>
              <p className="font-circular text-[19.2px] font-light leading-[28.8px] text-contest-bright max-sm:text-[16px] max-sm:font-extralight max-sm:leading-6">
                Submitter Name
              </p>
              <PrizeType>Creative Strategist</PrizeType>
              <PrizeType>🇺🇸 United States</PrizeType>
            </div>
          </div>
          <DetailRow href="#" icon={LINKEDIN}>LinkedIn</DetailRow>
        </div>
      </div>
    </div>
  )
}

// specs/contest.md
export default function Contest() {
  const lb = useEmbedLightbox()
  let k = 0
  return (
    <ContestTheme>
      {/* 1. Header */}
      <div className="contest-header-bg relative flex flex-col items-stretch overflow-hidden pt-[180px] max-sm:pt-[100px]">
        <Container1200>
          <div className="flex flex-col items-center">
            <div className="-mb-5 -mt-[60px] max-sm:mx-0 max-sm:mb-[5px] max-sm:mt-0">
              <img src={`${C}664e20a701afb605005d4609_uaa-logo.avif`} alt="Unverified Ad Awards" className="w-[275px] max-sm:w-[195px]" />
            </div>
            <img
              src={`${C}6661ce04fa12b88886af1906_header-pedistal-fadded-2.webp`}
              alt=""
              className="w-full max-w-[700px] max-sm:max-w-[120%]"
            />
          </div>
          <div className="relative mx-auto max-w-[800px] pb-[22px] text-center">
            <h1 className="contest-gradient mx-0 mb-[22px] mt-5 font-sans text-[50px] font-medium leading-[50px] max-sm:text-[30px] max-sm:leading-[30px]">
              The Ad Award Finalists
            </h1>
            <div className="absolute left-[84px] top-[55px] w-32 rotate-[18deg] max-lg:hidden">
              <img src={`${C}665dfe80ae0f13adec10f551_contest-arrow.svg`} alt="" />
            </div>
            <div className="absolute right-[84px] top-[55px] w-32 [transform:rotateY(180deg)_rotate(-18deg)] max-lg:hidden">
              <img src={`${C}665dfe80ae0f13adec10f551_contest-arrow.svg`} alt="" />
            </div>
            <div className="mx-auto mb-2.5 max-w-[360px]">
              <a
                href="/events/unverified-ad-awards-live-judging"
                className="inline-block rounded-[7px] bg-link px-4 py-3 text-center font-sans text-[16px] font-medium leading-6 text-neutral-0 transition-all duration-200 ease-in-out hover:bg-contest-cta-hover hover:shadow-[0_0_0_-20px_#1151d3] xl:bg-cta xl:hover:bg-contest-cta-hover"
              >
                Signup for Live Judging Event
              </a>
            </div>
            <div className="flex flex-col items-center gap-2.5">
              <p className="font-sans text-[16px] font-extralight leading-6 text-contest-text">February 27, 2024</p>
            </div>
          </div>
        </Container1200>
        <div className="pointer-events-none absolute inset-x-0 -top-[125px] z-5 blur-[6px] max-sm:hidden">
          <img src={`${C}663533288f7831e2caef1cd4_contest-curtain-left.webp`} alt="" className="absolute -left-[187px] h-[622px] w-[501px] rotate-[18deg] max-lg:-left-[45%] max-md:-left-1/2" />
          <img src={`${C}66353327cf0ff9a853ec13ea_contest-curtain-right.webp`} alt="" className="absolute -right-[187px] h-[622px] w-[501px] -rotate-[18deg] max-lg:-right-[45%] max-md:-right-1/2" />
        </div>
      </div>

      {/* 2. Sponsors */}
      <section>
        <Container1200>
          <div className="grid grid-cols-6 auto-rows-[30px] gap-4 py-[50px] max-lg:grid-cols-3 max-sm:py-[25px]">
            {SPONSORS.map(([f, alt]) => (
              <div key={f} className="flex items-center justify-center">
                <img src={C + f} alt={alt} className="max-h-[30px] max-w-[135px] max-sm:max-w-[75px]" />
              </div>
            ))}
          </div>
        </Container1200>
      </section>

      {/* 3. Finalists */}
      <div className="flex flex-col gap-[100px] pb-[100px] pt-[50px] max-sm:pt-0">
        <section>
          <Container1200>
            <div className="mx-auto mb-[50px] max-w-[800px] text-center">
              <ContestH2>Watch the Finalist Submissions</ContestH2>
              <p className="font-sans text-[16px] font-extralight leading-6 text-contest-text">{copy('contest-finalists', 153)}</p>
            </div>
            {GROUPS.map((g) => (
              <div key={g.title} className="relative mt-[30px]">
                <PrizeBlock g={g} />
                <div className="mt-[30px] grid grid-cols-3 gap-[30px] max-lg:grid-cols-2 max-lg:gap-5 max-md:grid-cols-1">
                  {g.cards.map((c, i) => (
                    <FinalistCard key={c.thumb} c={c} i={i} k={k++} image={g.image} onOpen={lb.open} />
                  ))}
                </div>
              </div>
            ))}
          </Container1200>
        </section>
      </div>
      {lb.node}
    </ContestTheme>
  )
}
