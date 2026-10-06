// /agencies/:slug — specs/template-agencies.md
import { useParams } from 'react-router-dom'
import CTA from '../../components/CTA.jsx'
import { Button } from '../../components/shared.jsx'
import { getEntry } from '../../components/templates/data.js'
import { agencySection } from '../../components/templates/standin.js'
import { Container, ICONS, TemplateNotFound } from '../../components/templates/Layout.jsx'
import Breadcrumb from '../../components/templates/Breadcrumb.jsx'
import RichText from '../../components/templates/RichText.jsx'
import TiltCard from '../../components/templates/TiltCard.jsx'
import { RecaptchaPlaceholder, SubmitButton, noSubmit } from '../../components/templates/Form.jsx'

// Button with a left icon (`.icon-left`, margin-right −4) — label slot of the shared Button.
const iconLabel = (icon, text) => (
  <span className="flex items-center">
    <img src={`${ICONS}/${icon}`} alt="" className="-ml-1.5 mr-0.5 size-6" />
    {text}
  </span>
)

const Separator = () => <div className="h-px bg-neutral-700" />

function PillList({ title, items }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-label-m text-neutral-0">{title}</h2>
      <div className="flex flex-col items-start gap-2">
        {items.map((it) => (
          <div key={it} className="rounded-circle bg-neutral-700 px-3 py-1">
            <div className="text-neutral-25">
              <div className="text-body-s">{it}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const FIELD =
  'h-[38px] w-full rounded-10 border border-solid-600 bg-neutral-800 px-3 py-2 text-[14px] leading-5 text-neutral-0 transition-all duration-200 placeholder:text-neutral-100 hover:bg-neutral-700 focus:outline-none'

function LeadForm({ agency }) {
  return (
    <div>
      <form onSubmit={noSubmit} className="grid grid-cols-2 gap-4 rounded-24 border border-neutral-700 p-4">
        <input className={FIELD} name="first-name" placeholder="First Name" required />
        <input className={FIELD} name="last-name" placeholder="Last Name" required />
        <input className={`${FIELD} col-span-2`} type="email" name="email" placeholder="Email" required />
        <input className={`${FIELD} col-span-2`} name="company-name" placeholder="Company Name" />
        <input className={`${FIELD} col-span-2`} name="company-domain" placeholder="Company Domain" />
        <textarea className={`${FIELD} col-span-2 h-[58px] resize-y`} name="details" placeholder="Details" />
        <input type="hidden" name="agency-email" value="" />
        <input type="hidden" name="agency-name" value={agency.name} />
        <RecaptchaPlaceholder className="col-span-2 mb-2" />
        <SubmitButton className="col-span-2" />
      </form>
    </div>
  )
}

export default function Agency() {
  const { slug } = useParams()
  const a = getEntry('agencies', slug)
  if (!a) return <TemplateNotFound />
  const sections = [
    { h: ['About', a.name] },
    { h: ['What sets them apart'] },
    { h: ['Core Services & Offer'] },
    { h: ['Contact', a.name], id: 'agency-contact' },
  ]

  return (
    <>
      <section>
        <Container>
          <Breadcrumb crumbs={[{ label: 'Agencies', href: '/agency-directory' }, { label: a.name }]} />
        </Container>
      </section>

      <section>
        <Container>
          {/* Live has no responsive rules (article pushed off-canvas at 390). Intentional fix: stack at ≤767. */}
          <div className="flex items-start gap-8 max-md:flex-col">
            <div className="min-w-[400px] rounded-24 border border-neutral-700 p-2 max-md:w-full max-md:min-w-0">
              <TiltCard
                tilt={{ rot: 15, shineX: 90, shineY: 50 }}
                cardClass="flex flex-col items-center overflow-hidden rounded-16 bg-neutral-800 p-4 shadow-[inset_0_2px_0_rgba(255,255,255,.05)]"
                shineClass="size-[150px] rounded-circle bg-solid-0 opacity-[.19] blur-[70px]"
              >
                <div className="relative flex w-full flex-col gap-12">
                  {a.logo ? (
                    <img src={a.logo} alt={a.name} className="size-[65px] rounded-8 border border-neutral-700 object-cover" />
                  ) : (
                    <div className="size-[65px]" />
                  )}
                  <div>
                    <h1 className="font-display text-display-h5 text-neutral-0">{a.name}</h1>
                    {a.verified && (
                      <div className="flex items-center gap-1 p-1 text-neutral-0">
                        <img src={`${ICONS}/agency-verified.svg`} alt="" className="size-5" />
                        <div className="text-label-m">Verified Agency</div>
                      </div>
                    )}
                  </div>
                  <img src="/assets/templates/shared/foreplay-agency-wordmark.svg" alt="Foreplay" className="absolute right-0 top-0 w-[120px]" />
                </div>
              </TiltCard>

              <div className="flex flex-col gap-4 p-4">
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="dark-primary"
                    href="#agency-contact"
                    label={iconLabel('agency-button-website.svg', 'Visit Website')}
                    icon={false}
                    className="col-span-2"
                  />
                  <Button variant="dark-secondary" href="#agency-contact" label={iconLabel('agency-button-contact.svg', 'Contact')} icon={false} />
                  <Button
                    variant="dark-secondary"
                    href={a.linkedin || '#'}
                    target={a.linkedin ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    label={iconLabel('agency-button-linkedin.svg', 'LinkedIn')}
                    icon={false}
                  />
                </div>
                <Separator />
                <div className="flex items-center">
                  <h2 className="flex-1 text-label-m text-neutral-0">Location</h2>
                  <div className="flex items-center gap-2 text-neutral-0">
                    {a.flag && <img src={a.flag} alt="" className="h-[15px] w-[30px] rounded-[3px] object-cover saturate-[.9]" />}
                    <div className="text-label-m">{a.location}</div>
                  </div>
                </div>
                <Separator />
                <PillList title="Core Services" items={a.services || []} />
                <Separator />
                <PillList title="Core Industries" items={a.industries || []} />
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-8 max-md:w-full">
              {sections.map((s, i) => (
                <div key={i} id={s.id} className="flex flex-col gap-2">
                  <div className="text-neutral-0">
                    <div className="flex flex-wrap gap-3">
                      {s.h.map((t) => (
                        <h2 key={t} className="font-display text-display-h4">
                          {t}
                        </h2>
                      ))}
                    </div>
                  </div>
                  <RichText blocks={agencySection(a, i)} variant="agency" />
                  {s.id === 'agency-contact' && <LeadForm agency={a} />}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  )
}
