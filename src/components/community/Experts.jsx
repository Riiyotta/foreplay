import LottieHover from '../shared/LottieHover.jsx'

const E = '/assets/pages/experts/'
const LOCK = `${E}inline-experts-tag-062879.svg`
const SPINNER = `${E}63bc3cc4e525a23812b95955_97443-loading-gray-optimized.json`

/* `.experts-tag.unlock-button`: Unlock (lock icon + label) or Coming Soon (Lottie spinner).
   size 'featured' → `.text-label-s` label; 'row' → `.text-block-11` (16/16, .82). */
export function UnlockTag({ comingSoon, size = 'featured' }) {
  return (
    <div className="flex flex-none items-center rounded-8 border border-solid-200 bg-solid-0 px-3.5 py-[7px] transition-all duration-200 ease-[ease] hover:bg-[#ffffff3b]">
      {comingSoon ? (
        <>
          <LottieHover mode="loop" src={SPINNER} className="mr-2.5 h-[22px] w-5" />
          <div className="text-[16px] font-normal leading-4 text-black opacity-[.82]">Coming Soon</div>
        </>
      ) : (
        <>
          <img src={LOCK} alt="" className="mr-2.5 h-[18px] w-[13px]" />
          {size === 'featured' ? (
            <div className="text-label-s text-black">Unlock Swipe File</div>
          ) : (
            <div className="text-[16px] font-normal leading-4 text-black opacity-[.82]">Unlock Swipe File</div>
          )}
        </>
      )}
    </div>
  )
}

function Headshot({ src }) {
  return (
    <div
      className="size-[50px] flex-none rounded-8 border border-grey-stroke bg-cover bg-center"
      style={{ backgroundImage: `url("${src}")` }}
    />
  )
}

// `.expert-thumbnail-wrapper`: macOS-window board (frosted) + headshot/name/role row.
export function ExpertBoardCard({ expert }) {
  return (
    <div>
      <a
        href={`/experts/${expert.slug}`}
        className="flex h-[200px] flex-col justify-center overflow-hidden rounded-[5px] border border-[#0000001f] transition-all duration-400 ease-[ease] hover:shadow-[1px_1px_6px_#0000001a] max-md:h-[300px] max-sm:h-[200px]"
      >
        <div className="flex h-7 flex-none items-center border-b border-grey-stroke bg-solid-0 py-2.5 pl-2.5">
          <div className="mr-1 size-[7px] rounded-circle bg-[#ec6960]" />
          <div className="mr-1 size-[7px] rounded-circle bg-[#f5bf50]" />
          <div className="mr-1 size-[7px] rounded-circle bg-[#61c554]" />
        </div>
        <div className="flex-1 bg-cover bg-[position:0_0]" style={{ backgroundImage: `url("${expert.board}")` }}>
          <div className="flex size-full items-center justify-center bg-[linear-gradient(#ffffff7d,#ffffff7d)] backdrop-blur-[10px]">
            <UnlockTag comingSoon={expert.comingSoon} />
          </div>
        </div>
      </a>
      <div className="flex min-h-[70px] flex-row pt-5">
        <Headshot src={expert.avatar} />
        <div className="flex flex-col justify-center pl-2.5 text-solid-700">
          <div className="text-label-m">{expert.name}</div>
          <div className="text-body-s">{expert.role}</div>
        </div>
      </div>
    </div>
  )
}

// `a.more-experts` row card
export function ExpertRowCard({ expert }) {
  return (
    <a
      href={`/experts/${expert.slug}`}
      className="flex flex-row items-center justify-between rounded-10 border border-solid-50 bg-solid-0 p-4 transition-all duration-200 ease-[ease] hover:border-solid-100 hover:bg-solid-25 max-md:flex-col max-md:items-start"
    >
      <div className="flex max-w-[62%] max-md:mb-4 max-md:max-w-full">
        <Headshot src={expert.avatar} />
        <div className="flex flex-col justify-center pl-2.5 text-black">
          <div className="text-label-m">{expert.name}</div>
          <div className="text-body-s">{expert.role}</div>
        </div>
      </div>
      <UnlockTag comingSoon={expert.comingSoon} size="row" />
    </a>
  )
}
