import { Button } from '../shared.jsx'
import SvgInline from './SvgInline.jsx'

const P = '/assets/pages/pricing/'
const LOGOS = ['za5l90', '6jksov', 'pywyqt', 'qiancg', '5mxnba'].map((h) => `${P}svg-home-hero-logo-image-${h}.svg`)

const Divider = () => <div className="h-px w-full bg-solid-700" />

/* `.pricing-footer` Enterprise card (pricing S1, api #api-pricing): left column with the plan,
   "Save up-to 80%" and "Talk with an Expert"; right column with a check list and a logo row.
   { subtitle, title, items: string[] } */
export default function EnterpriseCard({ subtitle, title, items, className = '' }) {
  return (
    <div className={`flex w-full rounded-20 border border-neutral-700 max-lg:flex-col ${className}`}>
      <div className="flex min-w-[320px] max-w-[368px] flex-col gap-5 px-6 pb-6 pt-5 max-lg:max-w-none max-sm:min-w-0">
        <div className="flex flex-col gap-2 pt-2">
          <div className="text-overline uppercase text-white">ENTERPRISE</div>
          <div className="flex-1 text-neutral-100">
            <div className="text-body-s">{subtitle}</div>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-2">
          <h4 className="font-display text-display-h5 text-white">{title}</h4>
          <div className="flex items-center justify-start gap-1">
            <img className="size-5" src={`${P}svg-svg-v8ic9h.svg`} alt="" />
            <div className="text-label-s text-white">Save up-to 80%</div>
          </div>
        </div>
        <Divider />
        <Button variant="dark-secondary" href="/book-demo" label="Talk with an Expert" />
      </div>
      <div className="h-full w-px bg-neutral-600" />
      <div className="flex flex-1 flex-col justify-between gap-10 px-6 py-8">
        <div className="flex flex-col gap-3">
          <div className="flex-1 text-neutral-100">
            <div className="text-label-s">Let&apos;s discuss a tailored solution that covers unique needs.</div>
          </div>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {items.map((it) => (
              <li key={it} className="flex items-center justify-start gap-2 text-white">
                <SvgInline src={`${P}svg-svg-yw0r87.svg`} className="size-5" />
                <div className="text-body-s text-white">{it}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex-1 text-neutral-100">
            <div className="text-label-s">Trusted by over 10,000 growth teams and agencies</div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-[15px]">
            {LOGOS.map((src) => (
              <div
                key={src}
                className="flex flex-col items-center justify-center p-2.5 text-neutral-50 transition-all duration-200 hover:text-neutral-100 max-lg:p-3 max-sm:p-2"
              >
                <SvgInline src={src} className="h-7 max-sm:h-3 max-sm:scale-75 max-sm:items-start max-sm:justify-start" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
