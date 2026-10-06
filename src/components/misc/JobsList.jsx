// /careers `.jobs-list` (specs/careers.md §2): bordered rows with "Full Time | Remote" and a light-secondary button.
import { Button } from '../shared.jsx'

/** jobs: [{ title, slug, type, location }] */
export default function JobsList({ jobs }) {
  return (
    <div className="flex flex-col gap-[15px]">
      {jobs.map((j) => (
        <div
          key={j.slug}
          className="flex items-center gap-4 rounded-20 border border-solid-100 p-5 max-sm:flex-col max-sm:items-start max-sm:gap-3 max-sm:p-4"
        >
          <div className="text-label-m text-solid-900">{j.title}</div>
          <div className="flex flex-1 items-center justify-end gap-3">
            <div className="whitespace-nowrap text-label-m text-solid-700">{j.type}</div>
            <div className="h-3 w-px bg-solid-200" />
            <div className="whitespace-nowrap text-label-m text-solid-700">{j.location}</div>
          </div>
          <Button variant="light-secondary" href={`/careers/${j.slug}`} label="Learn More" className="max-sm:self-stretch" />
        </div>
      ))}
    </div>
  )
}
