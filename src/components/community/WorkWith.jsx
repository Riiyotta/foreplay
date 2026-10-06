import CTA from '../CTA.jsx'
import { SectionContainer } from '../shared/Layout.jsx'
import SectionHead from '../shared/SectionHead.jsx'
import EmbedPlaceholder from '../shared/EmbedPlaceholder.jsx'
import { copy } from './data.js'

const W = '/assets/pages/work-with-brands/'
const LOGOS = [
  ['688b6298b31d165cabb4f613_work-logo-hello-fresh.webp', 'HelloFresh'],
  ['688b6298585107d4c043dc95_work-logo-canva.webp', 'Canva'],
  ['688b62989ae80e4a3b1bfa15_work-logo-vayner-media.webp', 'VaynerMedia'],
  ['688b6298e2496c5e3f207e03_work-logo-pearmill.webp', 'Pearmill'],
  ['688b629848219ed53e3068e9_work-logo-paramount.webp', 'Paramount'],
  ['688b6298505fecedaf609070_work-logo-true-classic.webp', 'True Classic'],
  ['688b6298b53ef7d16e3538f5_work-logo-common-thread-collective.webp', 'Common Thread Collective'],
  ['688b62981fd02f73d1c39824_work-logo-ag1.webp', 'AG1'],
  ['688b62986d6c5f9871b82029_work-logo-growth-collective.webp', 'Growth Collective'],
]

/* `.work-hero`: grid 2 cols, gap 96 (1280–1439) / 128 (≥1440), padding 128/0 (≤767 80, ≤479 48).
   ≤991 one column; `gap` overrides the ≤991 row gap (80 work pages, 25 agency directory). */
export function WorkHeroGrid({ className = '', children }) {
  return (
    <div
      className={`grid grid-cols-2 gap-24 py-32 max-lg:grid-cols-1 max-md:py-20 max-sm:py-12 2xl:gap-32 ${className}`}
    >
      {children}
    </div>
  )
}

export function WorkLogoGrid() {
  return (
    <div className="grid grid-cols-[104px_132px_152px] auto-rows-[60px] gap-1 max-sm:w-full max-sm:grid-cols-3 max-sm:auto-rows-[40px]">
      {LOGOS.map(([f, alt]) => (
        <img key={f} src={W + f} alt={alt} loading="lazy" className="size-full object-contain" />
      ))}
    </div>
  )
}

/* ---------- DemoForm (§C5) ---------- */
const INPUT =
  'demo-hero-form-input h-[38px] w-full rounded-8 border-0 bg-neutral-700 px-3 py-2 text-[14px] font-medium leading-5 text-neutral-0 outline-none placeholder:font-medium placeholder:text-neutral-200 hover:text-neutral-50 focus:text-neutral-0'

function Field({ label, optional, children }) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <label className="text-[16px] font-semibold leading-6 text-neutral-0">
        {label}
        {optional && <span className="font-normal text-neutral-200"> (Optional)</span>}
      </label>
      {children}
    </div>
  )
}

function Select({ name, options, required }) {
  return (
    <select name={name} required={required} defaultValue="" className={INPUT}>
      <option value="">Select</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  )
}

const BUDGETS = ['< $1,000', '$1,000 - $3,000', '$3,000 - $5,000', '$5,000 - $10,000', '>$10,000']
const COMPANY_TYPES = ['Individual', 'Brand', 'Agency', 'Holding Co', 'Software']
const NEEDS = ['Ads', 'AI', 'Creative', 'CRO', 'Design', 'Email', 'Finance', 'SEO', 'UGC', 'Foreplay Support']

/* variant 'brands' (line 3 = Budget full width) | 'marketers' (line 3 = What do you need? + Budget).
   Renders the Webflow form fields; it does not submit (Turnstile not loaded). */
export function DemoForm({ variant = 'brands' }) {
  const id = variant === 'brands' ? 'wf-form-Brand-Form' : 'wf-form-Marketers-Form'
  return (
    <form
      id={id}
      name={variant === 'brands' ? 'Brand Form' : 'Marketers Form'}
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full max-w-[512px] flex-col gap-5 max-lg:max-w-none"
    >
      <div className="flex flex-row gap-5">
        <Field label="Name">
          <input className={INPUT} type="text" name="Name" placeholder="John Smith" required />
        </Field>
        <Field label="Phone" optional>
          <input className={INPUT} type="tel" name="Phone" placeholder="000-000-0000" />
        </Field>
      </div>
      <div className="flex flex-row gap-5">
        <Field label="Email">
          <input className={INPUT} type="email" name="Email" placeholder="hello@company.com" required />
        </Field>
        <Field label="Company Type">
          <Select name="Company-Type" options={COMPANY_TYPES} required />
        </Field>
      </div>
      <div className="flex flex-row gap-5">
        {variant === 'marketers' && (
          <Field label="What do you need?">
            <Select name="What-do-you-need" options={NEEDS} required />
          </Field>
        )}
        <Field label="Budget" optional>
          <Select name="Budget" options={BUDGETS} />
        </Field>
      </div>
      <div className="flex flex-row gap-5">
        <Field label="Additional requirements" optional>
          <textarea
            className={`${INPUT} h-20`}
            name="Additional-requirements"
            placeholder="Enter your message"
            required
          />
        </Field>
      </div>
      <div className="mx-auto flex w-full max-w-[400px] flex-col gap-5">
        <input
          type="submit"
          value="Continue"
          className="h-10 w-full cursor-pointer rounded-10 bg-neutral-0 p-2 text-heading-m text-solid-900 transition-all duration-200 ease-[ease] hover:bg-neutral-50 focus:shadow-focus-dark focus:outline-none active:bg-neutral-200 active:text-neutral-200"
        />
        <div className="mx-10">
          <p className="text-center text-body-s text-neutral-100">{copy('work-form-terms', 85)}</p>
        </div>
      </div>
    </form>
  )
}

/* ---------- WorkHero ---------- */
export function WorkHero({ overline, title, lead, formVariant }) {
  return (
    <div>
      <SectionContainer>
        <WorkHeroGrid className="max-lg:gap-20">
          <div className="flex flex-col justify-between gap-10">
            <div className="max-w-[512px]">
              <div className="flex flex-col gap-5">
                <div className="text-overline uppercase text-neutral-100">{overline}</div>
                <div className="flex flex-col gap-3">
                  <h1 className="font-display text-display-h2 text-neutral-0 max-lg:text-display-h2-lg max-sm:text-display-h2-sm">
                    {title}
                  </h1>
                  <div className="text-neutral-50">
                    <p className="text-body-l">{lead}</p>
                  </div>
                </div>
              </div>
            </div>
            <WorkLogoGrid />
          </div>
          <div>
            <DemoForm variant={formVariant} />
          </div>
        </WorkHeroGrid>
      </SectionContainer>
    </div>
  )
}

/* ---------- WorkBest ---------- */
export function WorkBest() {
  return (
    <div>
      <SectionContainer>
        <div className="flex flex-col gap-12 pt-32">
          <SectionHead title="The world’s best marketers use Foreplay" body={copy('work-best-lead', 189)} />
          <div className="flex flex-col items-center">
            <img
              src={`${W}688baa48834a09a6fb2242b7_5fc566ef4ffe8d9a1f4eb5c58376f9f7_work-with-brands-illo.webp`}
              alt=""
              width="1136"
              height="590"
              loading="lazy"
              className="h-auto w-[1136px] max-w-full"
            />
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

/* ---------- LovedBlock ---------- */
const TILES = [
  ['inline-demo-socialproof-content-1d2fc7.svg', '4.9/5', 'G2 REVIEWS'],
  ['inline-demo-socialproof-content-64a56d.svg', '4.8/5', 'CHROME'],
  ['inline-demo-socialproof-content-12ffcf.svg', '4.8/5', 'CAPTERRA'],
]

export function RatingTiles() {
  return (
    <div className="grid grid-cols-[repeat(3,144px)] auto-rows-[144px] gap-4 max-lg:grid-cols-3 max-lg:auto-rows-[112px] max-sm:grid-cols-1 max-sm:gap-2">
      {TILES.map(([icon, rating, name]) => (
        <a
          key={name}
          href="#"
          className="flex min-w-[144px] max-w-full flex-col items-stretch rounded-12 p-1 shadow-ring-card-inset"
        >
          <div className="flex flex-1 flex-col items-center justify-center gap-3 max-sm:gap-0 max-sm:pb-2 max-sm:pt-1">
            <img src={W + icon} alt="" className="size-10" />
            <div className="flex items-center justify-center gap-[2px] text-solid-600">
              <img src={`${W}inline-dev-socialproof-rating-83a211.svg`} alt="" className="size-5" />
              <div className="text-[19.2px] font-semibold leading-6">{rating}</div>
            </div>
          </div>
          <div className="rounded-8 bg-solid-25 px-2 py-1.5 text-center text-overline uppercase text-solid-900">{name}</div>
        </a>
      ))}
    </div>
  )
}

/* Full-bleed white block (not inside `.section-padding`), `.work-loved` + Senja wall placeholder.
   Senja widget 26b5df20-… is third-party: reserve 3693 @≥992, 3487 @≤991; 1600 @≤479 (unmeasured live). */
export function LovedBlock() {
  return (
    <div className="relative z-2 overflow-hidden rounded-36 bg-neutral-0 max-sm:rounded-16">
      <SectionContainer>
        <div className="flex flex-col gap-20 py-20 max-sm:py-12">
          <div className="flex flex-row justify-between gap-10 max-lg:flex-col max-lg:gap-12 max-sm:gap-8">
            <div className="flex max-w-[384px] flex-col gap-3">
              <h2 className="font-display text-display-h3 text-solid-900">Loved by brands and agencies globally.</h2>
              <p className="text-body-m text-solid-500">{copy('work-loved-lead', 79)}</p>
            </div>
            <RatingTiles />
          </div>
          <div>
            <EmbedPlaceholder
              theme="light"
              label="Customer testimonials wall (Senja embed)"
              className="h-[3693px] w-full max-lg:h-[3487px] max-sm:h-[1600px]"
            />
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

/* C5 WorkWithTemplate: WorkHero → WorkBest → LovedBlock → CTA. */
export default function WorkWithTemplate({ title, lead, formVariant }) {
  return (
    <>
      <WorkHero
        overline="FIND A BEST FIT MARKETING PARTNER FOR YOUR BRAND"
        title={title}
        lead={lead}
        formVariant={formVariant}
      />
      <WorkBest />
      <LovedBlock />
      <CTA />
    </>
  )
}
