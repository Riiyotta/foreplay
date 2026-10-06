import { Button } from '../shared.jsx'
import { MaskIcon } from '../templates/Layout.jsx'
import { replays } from './data.js'

const CAL = '/assets/pages/fireside/inline-fireside-event-detail-item-f6d4c8.svg'

/* C4 ReplayRow (fireside-replays.md §3): flex row ≥768, grid `auto 1fr` ≤767, 1 column ≤479. */
export function ReplayRow({ ev }) {
  return (
    <div className="flex items-center gap-6 rounded-20 border border-neutral-700 bg-background py-2 pl-2 pr-6 max-md:grid max-md:grid-cols-[auto_1fr] max-md:items-center max-md:gap-4 max-md:p-4 max-sm:grid-cols-1">
      <img
        src={ev.thumbnail}
        alt=""
        loading="lazy"
        className="aspect-[162/92] h-[92px] w-[162px] flex-none rounded-12 border border-neutral-800 object-cover max-md:h-full max-sm:h-auto max-sm:w-full"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-2 py-2 max-sm:pb-0">
        <div className="flex flex-row gap-3">
          <div className="flex items-center gap-[9px] overflow-hidden">
            <div
              className="size-6 flex-none rounded-circle bg-cover bg-center"
              style={{ backgroundImage: `url("${ev.speakerAvatar}")` }}
            />
            <div className="whitespace-nowrap text-label-s text-neutral-50">{ev.speaker}</div>
          </div>
          {ev.date && (
            <div className="flex items-center gap-[9px] overflow-hidden">
              <MaskIcon src={CAL} className="size-6 text-neutral-100" />
              <div className="whitespace-nowrap text-label-s text-neutral-50">{ev.date}</div>
            </div>
          )}
        </div>
        <div className="text-neutral-0">
          <div className="line-clamp-2 text-label-m">{ev.title}</div>
        </div>
      </div>
      <div className="max-md:col-[1/-1] max-md:flex max-md:flex-col">
        <Button variant="dark-secondary" href={`/events/${ev.slug}`} label="Watch" />
      </div>
    </div>
  )
}

// `.fireside-replay-list`: flex column, gap 24, all CMS items.
export default function ReplayList({ items = replays }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((ev) => (
        <ReplayRow key={ev.slug} ev={ev} />
      ))}
    </div>
  )
}
