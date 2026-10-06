import { useEffect, useMemo, useRef, useState } from 'react'
import { IconCalendarClose } from './svgs.jsx'
import { Button } from './shared.jsx'

// CLONE_SPEC §9.1 — fixed bottom-left "Click Me!" widget (saved.html calendar-pop-up-interaction + date-pills-script).
// "Book a Call" opens a Cal.com embed on the original; here it links to the clone's own /book-demo page.
const CAL_LINK = '/book-demo'

function Headshot() {
  return (
    <div className="relative size-[35px] flex-none rounded-circle bg-[url('/assets/calendar-headshot.avif')] bg-cover bg-[position:0_0]">
      <div className="absolute right-px top-px size-[7px] rounded-circle bg-lime-green" />
    </div>
  )
}

function useDatePills() {
  return useMemo(() => {
    const pad = (n) => String(n).padStart(2, '0')
    return Array.from({ length: 5 }, (_, i) => {
      const d = new Date()
      d.setHours(0, 0, 0, 0)
      d.setDate(d.getDate() + i)
      const dow = d.toLocaleDateString('en-US', { weekday: 'short' })
      const iso = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
      return { dow, dom: d.getDate(), iso }
    })
  }, [])
}

export default function CalendarPopup() {
  // state: 'closed' | 'open' | 'closing'
  const [state, setState] = useState('closed')
  const closeRef = useRef(null)
  const lastFocused = useRef(null)
  const pills = useDatePills()

  const open = (e) => {
    e?.preventDefault()
    if (state !== 'closed') return
    lastFocused.current = document.activeElement
    setState('open')
    document.documentElement.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
  }

  const finishClose = () => {
    setState('closed')
    document.documentElement.style.overflow = ''
    lastFocused.current?.focus?.()
  }

  const close = (e) => {
    e?.preventDefault()
    if (state !== 'open') return
    // With prefers-reduced-motion the keyframes are disabled, so no animationend would fire.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) finishClose()
    else setState('closing')
  }

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && close(e)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  })

  const isOpen = state !== 'closed'

  return (
    <div className="fixed bottom-0 left-0 z-10 flex flex-col items-start justify-end p-5 max-sm:px-0 max-sm:pb-0">
      <div className="relative flex flex-col items-start">
        <div
          role="button"
          tabIndex={0}
          onClick={open}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && open(e)}
          className="relative z-1 flex cursor-pointer flex-col items-start rounded-12 border border-solid-100 bg-solid-0 transition-all duration-200 ease-[ease] hover:bg-solid-50 max-sm:max-w-none max-sm:rounded-b-none"
        >
          <div className="flex items-center justify-start gap-2.5 py-2 pl-2 pr-3.5">
            <Headshot />
            <div className="flex flex-1 flex-col">
              <div className="text-solid-900">
                <div className="text-label-s">Click Me!</div>
              </div>
              <div className="flex-none text-solid-400">
                <div className="text-body-xs">Free creative strategy action plan</div>
              </div>
            </div>
          </div>
        </div>

        <div
          role="dialog"
          aria-modal="true"
          aria-label="Free Creative Strategy Action Plan"
          tabIndex={-1}
          onClick={(e) => e.target === e.currentTarget && close(e)}
          onAnimationEnd={() => state === 'closing' && finishClose()}
          className={`absolute bottom-0 left-0 z-2 w-[100px] min-w-[360px] max-w-[360px] origin-bottom-left flex-col items-stretch rounded-18 border border-solid-100 bg-solid-0 max-sm:max-w-none max-sm:rounded-b-none ${
            isOpen ? 'pointer-events-auto visible flex opacity-100' : 'pointer-events-none invisible hidden opacity-0'
          } ${state === 'open' ? 'modal-animate-in' : ''} ${state === 'closing' ? 'modal-animate-out' : ''}`}
        >
          <div>
            <div className="flex items-center justify-start gap-2.5 border-b border-solid-100 p-3.5">
              <Headshot />
              <div className="flex flex-1 flex-col">
                <div className="text-solid-900">
                  <div className="text-label-s">Zach Murray</div>
                </div>
                <div className="flex-none text-solid-400">
                  <div className="text-body-xs">Founder @ Foreplay.co</div>
                </div>
              </div>
              <a
                ref={closeRef}
                href="#"
                aria-label="Close"
                onClick={close}
                className="inline-block max-w-full opacity-75 transition-all duration-200 ease-[ease] hover:opacity-100"
              >
                <div className="inline-flex size-6 items-center justify-center">
                  <IconCalendarClose />
                </div>
              </a>
            </div>
            <div className="flex flex-col items-stretch justify-start gap-[15px] border-b border-solid-100 p-3.5">
              <div className="flex flex-1 flex-col">
                <div className="text-solid-900">
                  <div className="text-label-s">Free Creative Strategy Action Plan</div>
                </div>
                <div className="flex-none text-solid-400">
                  <div className="text-body-s">
                    Let's analyze your top competitors together. Get a clear action plan to start scaling like the top
                    1% advertisers.
                  </div>
                </div>
              </div>
              <div id="datePills" className="flex items-center justify-between gap-2">
                {pills.map((p, i) => (
                  <a
                    key={p.iso}
                    href="#"
                    data-date={p.iso}
                    aria-label={`${p.dow} ${p.iso}`}
                    onClick={(e) => e.preventDefault()}
                    className={`inline-block max-w-full flex-1 cursor-pointer rounded-8 border-[1.5px] bg-solid-0 p-3 text-center text-solid-900 transition-all duration-200 ease-[ease] hover:border-solid-900 hover:bg-solid-25 ${
                      i === 0 ? 'is-today border-solid-900' : 'border-solid-200'
                    }`}
                  >
                    <div className="text-label-m">{p.dow}</div>
                    <div className="text-label-m">{p.dom}</div>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-start gap-2 p-3.5">
              <Button variant="light-primary" href={CAL_LINK} label="Book a Call" icon={false} />
              <Button variant="light-stroke" href="/pricing" label="Start Free Trial" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
