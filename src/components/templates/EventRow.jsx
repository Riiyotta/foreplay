// S7 EventMeta + S6 FiresideReplayRow + the events "upcoming" card (template-events.md §1.5).
import { Button } from '../shared.jsx'
import { ICONS, MaskIcon } from './Layout.jsx'

const ITEM = 'flex items-center gap-[9px] overflow-hidden text-ellipsis whitespace-nowrap text-neutral-100'

/**
 * layout: 'head' (row, gap 24; ≤479 column gap 16) | 'left' (.event-details-left: column gap 12, row ≥1280)
 *         | 'row' (.event-details-left.flex-row: row gap 12)
 * size: label class ('text-label-m' | 'text-label-s'); tone: name colour wrapper (.84 = neutral-50, .68 = neutral-100)
 */
export function EventMeta({ ev, layout = 'head', size = 'text-label-m', tone = 'text-neutral-50', dateTone = tone }) {
  const wrap = {
    head: 'flex gap-6 max-sm:flex-col max-sm:gap-4',
    left: 'flex flex-col gap-3 xl:flex-row',
    row: 'flex flex-row gap-3',
  }[layout]
  return (
    <div className={wrap}>
      <div className={ITEM}>
        <div
          className="size-6 flex-none rounded-circle bg-cover bg-center"
          style={ev.speakerAvatar ? { backgroundImage: `url("${ev.speakerAvatar}")` } : undefined}
        />
        <div className={tone}>
          <div className={size}>{ev.speaker}</div>
        </div>
      </div>
      <div className={ITEM}>
        <MaskIcon src={`${ICONS}/event-calendar.svg`} className="size-6" />
        <div className={dateTone}>
          <div className={size}>{ev.date}</div>
        </div>
      </div>
    </div>
  )
}

// S6 `.fireside-replay-item`
export function FiresideReplayRow({ ev }) {
  return (
    <div className="flex items-center gap-6 rounded-20 border border-neutral-700 bg-background py-2 pl-2 pr-6 max-md:grid max-md:grid-cols-[auto_1fr] max-md:gap-4 max-md:p-4 max-sm:grid-cols-1">
      <img
        src={ev.thumbnail}
        alt=""
        loading="lazy"
        className="aspect-[162/92] w-[162px] rounded-12 border border-neutral-800 object-cover max-sm:w-full"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-2 py-2 max-sm:pb-0">
        <EventMeta ev={ev} layout="row" size="text-label-s" tone="text-neutral-50" dateTone="" />
        <div className="text-neutral-0">
          <div className="line-clamp-2 text-label-m">{ev.title}</div>
        </div>
      </div>
      <div className="self-center max-md:col-span-full max-md:flex max-md:w-full max-md:flex-col">
        <Button variant="dark-secondary" href={`/events/${ev.slug}`} label="Watch" />
      </div>
    </div>
  )
}

// `.firside-upcoming-item-block`
export function UpcomingCard({ ev }) {
  return (
    <div className="flex h-full flex-col rounded-20 border border-neutral-700 bg-background p-2">
      <img src={ev.thumbnail} alt="" loading="lazy" className="aspect-video w-full rounded-12 object-cover" />
      <div className="flex flex-col gap-5 px-3 py-6 text-left">
        <EventMeta ev={ev} layout="left" tone="text-neutral-100" />
        <div className="text-neutral-0">
          <div className="text-body-l">{ev.title}</div>
        </div>
      </div>
      <Button variant="dark-secondary" href={`/events/${ev.slug}`} label="Watch Replay" className="mt-auto w-full" />
    </div>
  )
}
