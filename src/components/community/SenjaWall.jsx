import { rng, int } from '../templates/standin.js'
import { copy } from './data.js'
import { IconChromeReview } from '../svgs.jsx'

/* Senja "Wall of Love" stand-in (reviews.md §2). The real widget (0fd75b98-…) is third-party
   shadow DOM; this renders `count` neutral stand-in cards in the measured masonry:
   4 columns × 318 (gap 24) @≥992, 3 columns @≤991, 1 column @≤479. Review text is NOT transcribed. */
const FIRST = ['Alex', 'Sam', 'Jordan', 'Taylor', 'Casey', 'Morgan', 'Riley', 'Jamie', 'Avery', 'Quinn', 'Drew', 'Parker']
const LAST = ['M.', 'K.', 'R.', 'S.', 'T.', 'L.', 'B.', 'H.', 'D.', 'W.']
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']

function Star({ on }) {
  return (
    <svg viewBox="0 0 20 20" className={`size-5 ${on ? 'text-yellow' : 'text-[#e6e6e6]'}`} aria-hidden="true">
      <path fill="currentColor" d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
    </svg>
  )
}

function Card({ i }) {
  const r = rng(`senja-${i}`)
  const name = `${FIRST[int(r, 0, FIRST.length - 1)]} ${LAST[int(r, 0, LAST.length - 1)]}`
  const stars = r() < 0.15 ? 4 : 5
  const chars = int(r, 60, 420)
  return (
    <div className="mb-6 break-inside-avoid rounded-12 bg-solid-0 p-[17px] text-[#374151]">
      <div className="flex items-start gap-3">
        <div className="flex size-[42px] flex-none items-center justify-center rounded-full bg-solid-50 text-[16px] font-medium">
          {name[0]}
        </div>
        <div className="flex-1 text-[16px] font-medium leading-5">{name}</div>
        <div className="size-5 flex-none">
          <IconChromeReview width="20" height="20" />
        </div>
      </div>
      <div className="mt-3 flex gap-0.5">
        {[0, 1, 2, 3, 4].map((s) => (
          <Star key={s} on={s < stars} />
        ))}
      </div>
      <p className="mt-3 text-[16px] leading-6">{copy(`senja-text-${i}`, chars)}</p>
      <div className="mt-3 text-body-s text-solid-300">
        {MONTHS[i % MONTHS.length]} {(i % 28) + 1}, 2026
      </div>
    </div>
  )
}

export default function SenjaWall({ count = 64 }) {
  return (
    <div className="mx-auto w-full max-w-[1344px]">
      <div className="mb-6 flex justify-center">
        <div className="flex h-[42px] items-center rounded-12 border border-[#e6e6e6] px-3 text-[16px] leading-6 text-[#374151]">All</div>
      </div>
      <div className="columns-4 gap-6 max-lg:columns-3 max-sm:columns-1">
        {Array.from({ length: count }, (_, i) => (
          <Card key={i} i={i} />
        ))}
      </div>
    </div>
  )
}
