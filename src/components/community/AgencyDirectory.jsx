import { useMemo, useRef, useState } from 'react'
import { MaskIcon } from '../templates/Layout.jsx'
import { agencyList } from './data.js'

const AD = '/assets/pages/agency-directory/'
const PER_PAGE = 9

// agency-directory.md §2.1 (facet order as on the live sidebar)
export const GROUPS = [
  {
    key: 'services',
    label: 'Services',
    options: ['UGC Production', 'Full-Stack Marketing', 'CRO', 'Retention Marketing', 'Performance Creative', 'Creative Strategy', 'TikTok Ads', 'YouTube Ads', 'Google Ads', 'Meta Ads'],
  },
  {
    key: 'industries',
    label: 'Industries',
    options: ['Local Lead Generation', 'Affiliate', 'Info & Education', 'B2B & SaaS', 'Mobile Apps & Gaming', 'DTC E-Commerce'],
  },
]

// `.filter_clear` pill (Clear / Clear All / pagination buttons share the look)
const PILL =
  'rounded-8 border border-neutral-700 bg-neutral-900 text-[14px] leading-6 text-neutral-100 transition-all duration-200 hover:border-neutral-700 hover:bg-neutral-600 hover:text-neutral-25'

function Checkbox({ label, count, checked, onChange }) {
  return (
    <label className={`flex h-6 cursor-pointer items-center hover:text-[#e1e1e1] ${count === 0 ? 'opacity-50' : ''}`}>
      <input type="checkbox" className="peer sr-only" checked={checked} onChange={onChange} />
      <span className="mr-3 mt-[2px] size-5 flex-none rounded-[5px] border-2 border-neutral-400 bg-[length:14px_auto] bg-center bg-no-repeat peer-checked:border-neutral-0 peer-checked:bg-neutral-0 peer-checked:bg-[url('/assets/pages/agency-directory/691f4c06cc0bb6d8662029a2_check-icon-black.webp')] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-[3px] peer-focus-visible:outline-neutral-100" />
      <span className="text-label-s text-[#b7b7b7]">{label}</span>
      <span className="ml-auto text-[14px] leading-6 text-[#b7b7b7]">{count}</span>
    </label>
  )
}

function Tags({ title, items }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-overline uppercase text-neutral-300">{title}</div>
      <div className="flex flex-row gap-1 max-md:flex-wrap">
        {items.map((t) => (
          <div key={t} className="min-w-0 rounded-circle bg-neutral-700 px-3 py-1 text-label-s text-neutral-50">
            {t}
          </div>
        ))}
      </div>
    </div>
  )
}

export function AgencyCard({ a }) {
  return (
    <div className="rounded-12 border border-neutral-700 p-1">
      <a
        href={`/agencies/${a.slug}`}
        className="flex items-center rounded-10 bg-neutral-800 py-1 pl-1 pr-3 transition-all duration-200 hover:bg-neutral-700"
      >
        <div className="flex flex-1 items-center gap-3">
          {a.logo ? (
            <img src={a.logo} alt="" loading="lazy" className="size-[65px] flex-none rounded-8 border border-neutral-700 object-cover" />
          ) : (
            <div className="size-[65px] flex-none rounded-8 border border-neutral-700" />
          )}
          <div className="flex flex-col">
            <div className="text-label-l text-neutral-0 max-sm:text-[16px]">{a.name}</div>
            <div className="flex items-center gap-1.5">
              {a.flag && <img src={a.flag} alt="" className="h-[15px] rounded-[3px] saturate-[.9]" />}
              <div className="text-label-s text-neutral-100">{a.location}</div>
            </div>
          </div>
        </div>
        {a.verified && (
          <div className="flex flex-none items-center gap-1 p-1">
            <img src={`${AD}691f5c6f5a60a7669c84e1fb_verified-icon.svg`} alt="" className="size-5" />
            <div className="text-label-m text-neutral-0">Verified Agency</div>
          </div>
        )}
      </a>
      <div className="flex flex-col gap-6 py-4 pl-[18px] pr-4">
        <Tags title="CORE SERVICES" items={a.services} />
        <Tags title="CORE INDUSTRIES" items={a.industries} />
      </div>
    </div>
  )
}

const EMPTY = { services: [], industries: [] }
const matches = (a, sel, skip) =>
  GROUPS.every((g) => g.key === skip || !sel[g.key].length || sel[g.key].some((o) => a[g.key].includes(o)))

/* Finsweet `list` behaviour (agency-directory.md §2.3): search on the name only, OR within a group,
   AND across groups, facet counts = results that include the option, empty facets dim to .5,
   per-group Clear + Clear All, 9 per page with Previous / Next (scrolls to the list top). */
export default function AgencyDirectory() {
  const [query, setQuery] = useState('')
  const [sel, setSel] = useState(EMPTY)
  const [page, setPage] = useState(1)
  const listRef = useRef(null)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return agencyList.filter((a) => a.name.toLowerCase().includes(q) && matches(a, sel))
  }, [query, sel])
  const pages = Math.ceil(results.length / PER_PAGE)
  const shown = results.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const update = (next) => {
    setSel(next)
    setPage(1)
  }
  const toggle = (key, opt) =>
    update({ ...sel, [key]: sel[key].includes(opt) ? sel[key].filter((o) => o !== opt) : [...sel[key], opt] })
  const go = (p) => {
    if (p < 1 || p > pages) return
    setPage(p)
    listRef.current?.scrollIntoView({ block: 'start' })
  }

  return (
    <div className="flex flex-row items-start gap-5 max-md:flex-col max-md:items-stretch">
      {/* Sidebar */}
      <div className="w-[300px] max-w-[350px] flex-none rounded-24 border border-neutral-700 p-2 max-md:w-full max-md:max-w-none">
        <form className="grid grid-cols-1 gap-4 px-2 pb-2" onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center justify-between gap-4 py-4 max-lg:items-start max-lg:pl-4">
            <div className="flex items-center gap-1">
              <img src={`${AD}inline-icon-20-e01f7a.svg`} alt="" className="size-5" />
              <div className="text-label-m text-neutral-0">Filters</div>
            </div>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setPage(1)
            }}
            placeholder="Search agencies"
            aria-label="Search agencies by name"
            className="h-10 w-full rounded-8 bg-neutral-800 bg-[length:20px_auto] bg-[position:12px_52%] bg-no-repeat py-2 pl-[42px] pr-6 text-[16px] text-neutral-0 outline-none transition-all duration-200 placeholder:text-neutral-200 hover:bg-neutral-700"
            style={{ backgroundImage: `url("${AD}691f4b8418e4cbc67faf5515_search-icon-white.svg")` }}
          />
          {GROUPS.map((g) => (
            <div key={g.key} className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="text-label-m text-neutral-0">{g.label}</div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    update({ ...sel, [g.key]: [] })
                  }}
                  className={`${PILL} px-3 py-1`}
                >
                  Clear
                </a>
              </div>
              <div className="flex flex-col gap-3">
                {g.options.map((o) => (
                  <Checkbox
                    key={o}
                    label={o}
                    count={results.filter((a) => a[g.key].includes(o)).length}
                    checked={sel[g.key].includes(o)}
                    onChange={() => toggle(g.key, o)}
                  />
                ))}
              </div>
            </div>
          ))}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setQuery('')
              update(EMPTY)
            }}
            className={`${PILL} flex h-[34px] w-full items-center justify-center`}
          >
            Clear All
          </a>
        </form>
      </div>

      {/* Feed */}
      <div ref={listRef} className="flex min-w-0 flex-1 flex-col gap-8">
        <div className="flex flex-col gap-6">
          {shown.length ? (
            shown.map((a) => <AgencyCard key={a.slug} a={a} />)
          ) : (
            <div className="rounded-12 border border-neutral-700 p-6 text-center text-body-m text-neutral-100">
              No agencies found
            </div>
          )}
        </div>
        <div className="flex items-center pt-6">
          <a
            href="#"
            aria-disabled={page <= 1}
            onClick={(e) => {
              e.preventDefault()
              go(page - 1)
            }}
            className={`${PILL} flex h-11 items-center px-5 py-[9px]`}
          >
            <MaskIcon src={`${AD}inline-w-pagination-wrapper-762537.svg`} className="mr-1 size-3" />
            Previous
          </a>
          <div className="mt-5 flex-1 text-center text-[16px] leading-6 text-neutral-100">
            {page} / {pages}
          </div>
          <a
            href="#"
            aria-disabled={page >= pages}
            onClick={(e) => {
              e.preventDefault()
              go(page + 1)
            }}
            className={`${PILL} flex h-11 items-center px-5 py-[9px]`}
          >
            Next
            <MaskIcon src={`${AD}inline-w-pagination-wrapper-11db86.svg`} className="ml-1 size-3" />
          </a>
        </div>
      </div>
    </div>
  )
}
