// comparison template pieces (specs/template-comparison.md §1, §2, §4, §5, PSA)
import { useState } from 'react'
import { BgVideo, Button } from '../shared.jsx'
import { Container, SectionContainer, PaddingY, WhiteBlock } from '../shared/Layout.jsx'
import SectionHead from '../shared/SectionHead.jsx'
import LogoStrip from '../shared/LogoStrip.jsx'
import { MaskIcon } from '../templates/Layout.jsx'
import { standin } from './copy.js'

const T = '/assets/templates/comparison/'
const SVG = `${T}svg/`
const SIGN_UP = 'https://app.foreplay.co/sign-up'

/* ---------- §1 Hero ---------- */
export function ComparisonHero({ entry }) {
  return (
    <section id="product-hero-section" className="relative">
      <Container>
        <div className="grid grid-cols-2 grid-rows-[352px_276px] gap-4 pb-[50px] pt-[75px] max-lg:grid-cols-1 max-lg:grid-rows-none max-sm:py-6">
          <div className="flex flex-col gap-5 max-lg:items-center max-lg:text-center">
            <div className="flex flex-col gap-2.5">
              <h1 className="text-overline uppercase text-neutral-300">{entry.overline}</h1>
              {/* h2.text-display-h1: 60/68 #fff at every width (no responsive override, no gradient) */}
              <h2 className="font-display text-display-h1 text-neutral-0">{entry.h}</h2>
            </div>
            <p className="text-body-l text-neutral-100">{standin(`cmp:${entry.slug}:intro`, entry.introLen)}</p>
            <div className="mt-6 flex items-center gap-3 self-start max-lg:self-center max-sm:grid max-sm:w-full max-sm:grid-cols-1 max-sm:self-stretch">
              <Button variant="dark-primary" href={SIGN_UP} label="Start Free Trial" iconFull />
              <Button variant="dark-secondary" href="/book-demo" label="Book a Demo" icon={false} />
            </div>
          </div>
          {/* .comparison-video-wrapper: 0 tall; the video bleeds right (body overflow-x: clip).
              ≤991 the wrapper is 300 tall (≤479: 175) and the video stays absolute at top 25, full width, overflowing it */}
          <div className="relative h-0 max-lg:h-[300px] max-sm:h-[175px]">
            <div className="absolute -right-[353px] -top-[25px] left-[25px] aspect-[1400/730] overflow-hidden rounded-[15px] max-lg:inset-x-0 max-lg:top-[25px] max-lg:w-full max-sm:rounded-none">
              <BgVideo className="size-full" poster={entry.heroPoster} sources={entry.heroVideo} />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,3,9,0),#020309_63%),linear-gradient(rgba(2,3,9,0),#020309_81%)]" />
            </div>
          </div>
          <div className="col-span-2 mt-[100px] max-lg:col-span-1 max-lg:mt-0">
            <LogoStrip />
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ---------- §2 Reviews ---------- */
const BAR = { _20: 'w-[20%]', _30: 'w-[30%]', _50: 'w-[50%]', _60: 'w-[60%]', _70: 'w-[70%]', _80: 'w-[80%]', _90: 'w-[90%]' }
const PILL = {
  green: { fill: 'bg-misc-green', pill: 'bg-[rgba(64,196,170,.16)] text-misc-green-pill', flip: false },
  red: { fill: 'bg-misc-red', pill: 'bg-[rgba(223,28,65,.08)] text-misc-red-pill', flip: true },
  yellow: { fill: 'bg-misc-yellow', pill: 'bg-[rgba(255,190,76,.12)] text-misc-yellow-pill', flip: true },
}
// Store icons are fixed per slot in the template (Chrome, then G2); the store label comes from the CMS.
const STORE_ICONS = [`${SVG}demo-socialproof-icon-2-w-embed-77f9187b.svg`, `${SVG}demo-socialproof-icon-2-w-embed-e77ee678.svg`]

function StoreItem({ store, idx, dark }) {
  const [width, tone] = (store.bar || '').split(' ')
  const v = PILL[tone] || PILL.green
  return (
    <div className={`flex flex-col rounded-16 p-1 ${dark ? 'bg-neutral-700' : 'bg-solid-25'}`}>
      <div className="flex flex-1 flex-col items-center justify-center gap-5 py-[15px] max-md:gap-0 max-md:pb-2 max-md:pt-1">
        <img src={STORE_ICONS[idx] || STORE_ICONS[0]} alt="" className="size-10" />
        <div className="flex items-center justify-center gap-0.5">
          <MaskIcon src={`${SVG}svg-w-embed-d1cf25b2.svg`} className={`size-5 opacity-50 ${dark ? 'text-neutral-0' : 'text-solid-700'}`} />
          <div className={`text-[19.2px] font-semibold leading-6 ${dark ? 'text-neutral-0' : 'text-solid-700'}`}>{store.rating}</div>
        </div>
      </div>
      <div className={`flex flex-col gap-3 rounded-8 p-4 ${dark ? 'bg-[rgba(2,3,8,.44)]' : 'bg-solid-25'}`}>
        <div className={`h-1 rounded-circle ${dark ? 'bg-neutral-700' : 'bg-solid-100'}`}>
          {width && <div className={`h-1 rounded-circle ${BAR[width] || ''} ${v.fill}`} />}
        </div>
        <div className={`flex justify-center gap-[5px] rounded-circle px-2 py-1 ${v.pill}`}>
          <MaskIcon src={`${SVG}icon-20-w-embed-1338adf8.svg`} className={`size-5 ${v.flip ? 'rotate-180' : ''}`} />
          <div className="text-label-m">{store.reviews}</div>
        </div>
      </div>
      <div className="px-2 py-1.5">
        <div className={`text-center text-overline uppercase ${dark ? 'text-neutral-0' : 'text-solid-900'}`}>{store.store}</div>
      </div>
    </div>
  )
}

function ReviewCard({ card, dark, seed }) {
  return (
    <div
      className={`relative flex flex-col gap-5 rounded-20 ${dark ? 'bg-background' : 'bg-neutral-0 shadow-ring-card-inset'}`}
    >
      <div className="px-[25px] pt-[25px]">
        <div className="relative z-10 flex flex-col gap-2.5">
          <div className="flex justify-center">
            <img src={card.logo} alt="" className={dark ? 'h-[30px] w-auto' : 'h-[25px] w-auto'} />
          </div>
          <div className={`text-center text-body-m ${dark ? 'text-neutral-100' : 'text-solid-400'}`}>
            {standin(seed, card.summaryLen)}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 px-3">
        {card.stores.map((s, i) => (
          <StoreItem key={i} store={s} idx={i} dark={dark} />
        ))}
      </div>
      <div className="px-3 pb-3">
        <img src={card.reviewImg} alt="" loading="lazy" className="w-full" />
      </div>
      {card.callout && (
        <div className="absolute -right-[100px] left-[362px] top-[288.5px] rotate-12 scale-75 rounded-16 bg-background p-1 max-lg:hidden">
          <div className="p-2.5 text-center text-[14px] font-550 leading-5 text-neutral-0">{card.callout.text}</div>
          <div className="rounded-12 bg-neutral-700 p-2.5">
            <img src={card.callout.img} alt="" className="w-full rounded-10" />
          </div>
        </div>
      )}
    </div>
  )
}

export function ComparisonReviews({ entry }) {
  return (
    <WhiteBlock>
      <SectionContainer>
        <div className="mx-auto flex max-w-[940px] flex-col gap-9 py-20 max-md:pb-16 max-sm:gap-8 max-sm:pb-8 max-sm:pt-12">
          <SectionHead
            theme="light"
            size="h3"
            bodySize="m"
            overline={entry.reviewsOverline}
            title={entry.reviewsTitle}
            body={standin(`cmp:${entry.slug}:reviews`, entry.reviewsParaLen)}
          />
          <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
            {entry.reviewCards.map((c, i) => (
              <ReviewCard key={i} card={c} dark={i === 0} seed={`cmp:${entry.slug}:summary${i}`} />
            ))}
          </div>
          <div className="flex justify-center">
            <div className="rounded-circle bg-solid-25 px-2.5 py-1 text-body-s text-solid-400">{entry.lastUpdated}</div>
          </div>
        </div>
      </SectionContainer>
    </WhiteBlock>
  )
}

/* ---------- §4 Pricing compare ---------- */
function PricingCard({ p, foreplay, seed }) {
  const [amount, per] = p.price.split(' ')
  return (
    <div className={`flex flex-col gap-5 rounded-28 ${foreplay ? 'bg-neutral-800' : 'border border-neutral-700'}`}>
      {/* `.comparison-pricing-top-contnet`: logo holder + price row, gap 10; `img.comparison-logo.motion` is 25 tall (logoH) */}
      <div className="flex flex-col gap-2.5 px-[25px] pt-[25px]">
        <div className="flex min-h-[30px] items-center">
          <img src={p.logo} alt="" className={p.logoH ? 'w-auto' : 'h-[30px] w-auto'} style={p.logoH ? { height: p.logoH } : undefined} />
        </div>
        <div className="flex items-center gap-2.5 py-2.5">
          <div className="rounded-circle bg-neutral-800 px-3 py-1 text-overline uppercase text-neutral-300">Starts from</div>
          <div className="flex items-baseline gap-0.5">
            <div className="font-display text-[20px] font-semibold leading-7 tracking-[-0.11px] text-neutral-0">{amount}</div>
            <div className="font-display text-[20px] font-semibold leading-7 tracking-[-0.11px] text-neutral-300">{per}</div>
          </div>
        </div>
      </div>
      <ul className="mb-2.5 flex flex-col gap-3 px-[25px]">
        {p.bullets.map((b) => (
          <li key={b} className="flex gap-[5px]">
            {/* `.icon-medium` box is 24x24; the 25-tall svg overflows it, so rows stay 24 */}
            <div className="flex size-6 flex-none items-center justify-center">
              <img
                src={`${SVG}${foreplay ? 'icon-medium-w-embed-5e1c2693.svg' : 'icon-medium-w-embed-29b99be9.svg'}`}
                alt=""
                className="h-[25px] w-6 max-w-none flex-none"
              />
            </div>
            <div className="text-label-m text-neutral-0">{b}</div>
          </li>
        ))}
      </ul>
      <div className="mt-auto px-[25px] pb-[25px]">
        {foreplay ? (
          <Button variant="dark-primary" href={SIGN_UP} label="Start Free Trial" iconFull className="w-full" />
        ) : (
          p.noteLen > 0 && (
            <div className="rounded-10 bg-neutral-800 p-2.5 text-center text-body-m text-neutral-300 max-lg:p-0">{standin(seed, p.noteLen)}</div>
          )
        )}
      </div>
    </div>
  )
}

export function ComparisonPricing({ entry }) {
  return (
    <div className="section">
      <PaddingY>
        <SectionContainer>
          <SectionHead
            title="This is why 10,000+ marketers made the right choice."
            body="Enjoy the most feature-rich ad creative workflow platform under one roof."
          />
          {/* `.section-content-main` padding-top 48 */}
          <div className="pt-12 max-sm:pt-10">
            {/* `.product-page-solution`: 80/80 (≤767 pb 64; ≤479 48/32, gap 32) */}
            <div className="mx-auto flex max-w-[940px] flex-col gap-9 py-20 max-md:pb-16 max-sm:gap-8 max-sm:pb-8 max-sm:pt-12">
              <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
                {entry.pricing.map((p, i) => (
                  <PricingCard key={i} p={p} foreplay={i === 0} seed={`cmp:${entry.slug}:note`} />
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </PaddingY>
    </div>
  )
}

/* ---------- §5 Feature table ---------- */
const COLS = 'grid grid-cols-[1.75fr_1fr_1fr] max-lg:grid-cols-[340fr_272fr_272fr] max-sm:grid-cols-3'
const CELL_ICON = { check: `${SVG}icon-medium-w-embed-06fcf78e.svg`, x: `${SVG}icon-medium-w-embed-2a68024d.svg` }

function ValueCell({ c, pricing, seed }) {
  if (pricing)
    return (
      <div className="flex flex-col gap-[5px] border-l border-solid-50 p-4 max-lg:p-3 max-md:p-2 max-sm:p-1">
        <div className="text-label-m text-solid-700">{c.v}</div>
        <div className="text-body-s text-solid-400">{c.note ?? standin(seed, c.noteLen)}</div>
      </div>
    )
  return (
    <div className="flex items-center gap-[5px] border-l border-solid-50 p-4 max-lg:p-3 max-md:p-2 max-sm:p-1">
      {c.icon && <img src={CELL_ICON[c.icon]} alt="" className="size-6 flex-none" />}
      <div className="text-label-m text-solid-700">{c.v}</div>
    </div>
  )
}

function TitleCell({ children }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1 p-4 max-lg:p-2.5 max-md:p-2 max-sm:flex-col">
      <div className="text-label-m text-solid-700">{children}</div>
    </div>
  )
}

// `a.new-button.new-button-secondary`
function NewButton() {
  return (
    <a
      href="/book-demo"
      className="flex h-10 w-[227px] items-center justify-center rounded-10 bg-neutral-0 p-2 text-[16px] font-550 leading-6 tracking-[-0.18px] text-misc-cta-text no-underline shadow-[inset_0_0_0_1px_#ebebeb] transition-all duration-600 ease-expo hover:bg-misc-cta-hover hover:shadow-[inset_0_0_0_1px_transparent] active:bg-[rgba(242,242,242,.5)] active:text-misc-cta-active"
    >
      Book a Demo
    </a>
  )
}

function TableFooter({ className }) {
  return (
    <div className={`flex-col items-center gap-5 py-10 max-lg:gap-4 ${className}`}>
      <h3 className="font-display text-display-h4 text-solid-900">Need something custom?</h3>
      <NewButton />
    </div>
  )
}

export function ComparisonTable({ entry }) {
  return (
    // overflow clip (not hidden) on the white block so the sticky header row can stick under the navbar
    <WhiteBlock innerClassName="overflow-clip">
      <SectionContainer>
        <div className="flex flex-col gap-10 py-16 max-sm:gap-8">
          <div className="pb-4">
            <SectionHead
              theme="light"
              size="h3"
              bodySize="m"
              overline={entry.tableOverline}
              title={entry.tableTitle}
              body={standin(`cmp:${entry.slug}:table`, entry.tableParaLen)}
            />
          </div>
          <div className="pl-6 max-sm:-mx-6 max-sm:overflow-x-auto max-sm:pl-10 max-sm:pr-6">
            <div className="mx-auto max-w-[900px] rounded-16 border border-solid-50 max-sm:w-[480px]">
              <div className={`${COLS} sticky top-[72px] z-50 max-md:top-0 rounded-t-16 border-b border-solid-50 bg-neutral-0`}>
                <div />
                {entry.tableLogos.map((src, i) => (
                  <div key={i} className="flex flex-col items-center justify-center border-l border-solid-50 p-4 max-lg:p-3 max-sm:p-1">
                    <img src={src} alt="" className={i === 0 ? 'h-[30px] w-auto' : 'h-[23px] w-auto'} />
                  </div>
                ))}
              </div>
              {entry.tableRows.map((r, k) =>
                r.row ? (
                  <div key={k} className={`${COLS} border-b border-solid-50`}>
                    <TitleCell>{r.row}</TitleCell>
                    {r.cells.map((c, i) => (
                      <ValueCell key={i} c={c} pricing seed={`cmp:${entry.slug}:pm${i}`} />
                    ))}
                  </div>
                ) : (
                  <div key={k}>
                    <div className="flex border-b border-solid-50 bg-solid-25 p-4 max-md:p-2">
                      <h3 className="flex-1 text-[18px] font-550 leading-6 tracking-[-0.26px] text-solid-700">{r.cat}</h3>
                    </div>
                    {r.rows.map((row, j) => (
                      <div key={j} className={`${COLS} border-b border-solid-50`}>
                        <TitleCell>{row.label}</TitleCell>
                        {row.cells.map((c, i) => (
                          <ValueCell key={i} c={c} />
                        ))}
                      </div>
                    ))}
                  </div>
                ),
              )}
              <TableFooter className="flex max-sm:hidden" />
            </div>
          </div>
          <TableFooter className="hidden max-sm:-mt-10 max-sm:flex" />
        </div>
      </SectionContainer>
    </WhiteBlock>
  )
}

/* ---------- PSA sticky card (fixed, closable; identical on all entries) ---------- */
export function PsaSticky({ textLen = 204 }) {
  const [open, setOpen] = useState(true)
  if (!open) return null
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 top-[calc(100vh-350px)] z-10 flex items-baseline p-5 max-lg:px-5 max-lg:pb-0">
      <div className="pointer-events-auto max-w-[250px] rounded-16 bg-solid-800 p-1 max-lg:w-full max-lg:max-w-none max-lg:rounded-b-none">
        <div className="flex items-center justify-between p-3">
          <div className="text-label-s text-neutral-0">🚨 PSA</div>
          <button type="button" aria-label="Close" onClick={() => setOpen(false)} className="opacity-65">
            <img src={`${SVG}icon-medium-w-embed-71bf6726.svg`} alt="" className="size-6" />
          </button>
        </div>
        <div className="rounded-12 bg-neutral-800 p-3 text-body-s text-neutral-100">{standin('cmp-psa', textLen)}</div>
        <div className="flex p-3">
          <div className="flex items-center gap-2.5">
            <img src={`${T}6840562ba89ce1d885e92f6f_zach-murray-headshot.webp`} alt="" className="size-10 rounded-circle object-cover" />
            <div>
              <div className="text-label-s text-neutral-0">Zach Murray</div>
              <div className="text-body-s text-neutral-100">Founder @ Foreplay</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
