import { useEffect, useRef, useState } from 'react'
import { IconExitClose } from './svgs.jsx'
import { Button, Overline } from './shared.jsx'

// CLONE_SPEC §9.2. Must be rendered with no positioned ancestor: like the original, it is
// `position:absolute; inset:0` against the initial containing block (document top, 0..100vh).
// Trigger: ouibounce defaults (mouse leaves through the top of the viewport, sensitivity 20px),
// only when innerWidth > 768 and localStorage.exitTimestamp is missing or older than 7 days.
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000
const COOKIE = 'viewedOuibounceModal'

export default function ExitIntentModal() {
  const [visible, setVisible] = useState(false)
  const armed = useRef(false)
  const loadedAt = useRef(Date.now())

  useEffect(() => {
    const lastShown = localStorage.getItem('exitTimestamp')
    const now = loadedAt.current
    if (!(window.innerWidth > 768 && (!lastShown || now - parseInt(lastShown, 10) > SEVEN_DAYS))) return
    if (document.cookie.split('; ').some((c) => c.startsWith(`${COOKIE}=`))) return
    armed.current = true

    const onLeave = (e) => {
      if (!armed.current || e.clientY > 20) return
      armed.current = false
      setVisible(true)
    }
    const html = document.documentElement
    html.addEventListener('mouseleave', onLeave)
    return () => html.removeEventListener('mouseleave', onLeave)
  }, [])

  const close = () => {
    setVisible(false)
    localStorage.setItem('exitTimestamp', loadedAt.current.toString())
    armed.current = false
    document.cookie = `${COOKIE}=true; path=/`
  }

  return (
    <div
      id="exit-intent-modal"
      className={`absolute inset-0 z-1000 items-center justify-center bg-exit-overlay ${visible ? 'flex' : 'hidden'}`}
    >
      <div className="max-w-[600px] rounded-12 bg-neutral-700 p-1 backdrop-blur-10">
        <img src="/assets/686bbf0597d137efcd833b36_Exit-intent-image.webp" alt="" loading="lazy" />
        <div className="pb-0 pt-5">
          <div className="mx-auto flex w-full max-w-[720px] flex-col items-center justify-start gap-3 text-center">
            <div className="flex flex-col items-center gap-3">
              <div>
                <Overline>1:1 Creative Strategy Audit</Overline>
              </div>
              <div className="text-neutral-0 [text-wrap:balance]">
                <h2 className="font-display text-display-h4">Can’t find what you’re looking for?</h2>
              </div>
              <div className="max-w-[512px] [text-wrap:pretty]">
                <div className="flex-1 text-neutral-100">
                  <p className="text-body-m">Speak with the Foreplay team to accelerate your paid marketing goals.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-2 mt-5 grid grid-cols-2 items-center justify-center gap-3 max-sm:grid-cols-1 max-sm:self-stretch">
            <Button variant="dark-secondary" href="https://app.foreplay.co/sign-up" label="Start a Trial" />
            <Button variant="dark-primary" href="/book-demo" label="Book a Demo" iconFull />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 flex items-center justify-end py-5 pr-2.5">
        <div role="button" tabIndex={0} aria-label="Close" onClick={close} onKeyDown={(e) => e.key === 'Enter' && close()} className="cursor-pointer opacity-65 hover:opacity-100">
          <div className="flex size-9 flex-none items-center justify-center">
            <IconExitClose />
          </div>
        </div>
      </div>
    </div>
  )
}
