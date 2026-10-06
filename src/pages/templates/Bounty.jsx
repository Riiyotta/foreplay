// /bounties/:slug — specs/template-bounties.md
import { useParams } from 'react-router-dom'
import CTA from '../../components/CTA.jsx'
import { Button, useTabs } from '../../components/shared.jsx'
import { getEntry } from '../../components/templates/data.js'
import { bountyDetails, paragraph, rng } from '../../components/templates/standin.js'
import { BlogContainer, BlogLine, ICONS, MaskIcon, TemplateNotFound } from '../../components/templates/Layout.jsx'
import Breadcrumb from '../../components/templates/Breadcrumb.jsx'
import { BlogTop } from '../../components/templates/TitleBlock.jsx'
import RichText from '../../components/templates/RichText.jsx'
import { VideoBox } from '../../components/templates/VideoBox.jsx'
import { RecaptchaPlaceholder, SubmitButton, noSubmit } from '../../components/templates/Form.jsx'

const H1 = ({ children }) => (
  <div className="text-neutral-0">
    <h1 className="font-display text-display-h4">{children}</h1>
  </div>
)

function DetailRow({ label, children }) {
  return (
    <div className="flex items-center max-sm:flex-col max-sm:items-start">
      <div className="min-w-[150px] text-neutral-100">
        <div className="text-label-m">{label}</div>
      </div>
      {children}
    </div>
  )
}

const TAG = 'flex items-center gap-[5px] rounded-8 px-2 py-1'

const SOCIAL_ICON = { linkedin: 'linkedin', 'x.com': 'x', twitter: 'x', instagram: 'instagram', tiktok: 'tiktok', youtube: 'youtube' }
const socialIcon = (url) => Object.entries(SOCIAL_ICON).find(([k]) => url.includes(k))?.[1]

const FIELD = 'w-full rounded-10 border-0 bg-neutral-700 px-3 py-2 text-[14px] leading-5 text-neutral-0 placeholder:text-neutral-100 focus:outline-none'

function FormSection({ section, index, seed }) {
  const r = rng(`${seed}:form${index}`)
  return (
    <div className="flex flex-col gap-6 rounded-16 border border-neutral-700 p-4">
      <div className="flex items-center gap-2.5">
        <div className="flex size-7 items-center justify-center rounded-circle bg-solid-600 text-solid-100">
          <div className="text-label-m">{index + 1}</div>
        </div>
        <div className="text-neutral-0">
          <div className="text-label-m">{section.title}</div>
        </div>
      </div>
      {section.fields.map((f, k) => {
        const id = `bounty-${index}-${k}`
        const input =
          f.type === 'textarea' ? (
            <textarea id={id} required={f.required} placeholder={f.placeholder} className={`${FIELD} h-14 resize-y`} />
          ) : (
            <input id={id} type={f.type} required={f.required} placeholder={f.placeholder} className={`${FIELD} h-[38px]`} />
          )
        const icon = f.social && socialIcon(f.social)
        return (
          <div key={k} className="flex flex-col gap-1">
            <label htmlFor={id} className="text-label-s text-neutral-0">
              {f.label}
            </label>
            {f.hasHelp && (
              <div className="text-neutral-100">
                <div className="text-body-s">{paragraph(r, 90)}</div>
              </div>
            )}
            {f.social ? (
              <div className="flex gap-2.5">
                <div className="flex-1">{input}</div>
                <a
                  href={f.social}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon}
                  className="flex h-9 w-11 flex-none items-center justify-center rounded-10 bg-neutral-700 px-2 py-1 transition-all duration-200 hover:bg-neutral-500"
                >
                  {icon && <img src={`${ICONS}/bounty-social-${icon}.svg`} alt="" className="size-7" />}
                </a>
              </div>
            ) : (
              input
            )}
          </div>
        )
      })}
      {section.notes > 0 && (
        <div className="flex gap-2.5 rounded-10 bg-[rgba(84,205,248,.12)] p-3 text-[#54cdf8]">
          <img src={`${ICONS}/bounty-info.svg`} alt="" className="size-5 flex-none" />
          <div className="text-body-s">{paragraph(r, 160)}</div>
        </div>
      )}
    </div>
  )
}

export default function Bounty() {
  const { slug } = useParams()
  const b = getEntry('bounties', slug)
  const { active, linkProps, paneProps } = useTabs(2)
  if (!b) return <TemplateNotFound />
  const desc = paragraph(rng(`${b.slug}:desc`), 230)

  return (
    <>
      <section>
        <BlogContainer>
          <Breadcrumb crumbs={[{ label: 'Bounties', href: '/bounties' }, { label: b.title }]} />
        </BlogContainer>
      </section>

      <section>
        <BlogContainer>
          <BlogTop>
            <div className="flex flex-col gap-1">
              <H1>{b.title}</H1>
              <div className="text-neutral-100">
                <div className="text-body-m">{desc}</div>
              </div>
            </div>
            <VideoBox youtubeId={b.youtubeId} title={b.title} frame="bounties" />
            <div className="flex flex-col gap-4 rounded-16 border border-neutral-700 p-4">
              <DetailRow label="Bounty Amount">
                <div className="flex items-center text-[#ffd24d]">
                  <img src={`${ICONS}/bounty-amount.svg`} alt="" className="size-7" />
                  <div className="text-label-m">{b.currency || '$'}</div>
                  <div className="text-label-m">{b.amount}</div>
                </div>
              </DetailRow>
              <DetailRow label="Published By">
                <div className="flex items-center gap-2">
                  {b.authorAvatar && <img src={b.authorAvatar} alt="" className="size-6 rounded-circle object-cover" />}
                  <div className="text-label-m text-neutral-0">{b.author}</div>
                  <div>{b.authorHandle}</div>
                </div>
              </DetailRow>
              <DetailRow label="Due Date">
                <div className={`${TAG} bg-neutral-700 text-neutral-100`}>
                  <img src={`${ICONS}/bounty-calendar.svg`} alt="" className="size-5" />
                  <div className="text-label-s">{b.dueDate}</div>
                </div>
              </DetailRow>
              <DetailRow label="Status">
                <div className={`${TAG} bg-[rgba(124,221,181,.15)] pl-1 text-teal`}>
                  <img src={`${ICONS}/bounty-status.svg`} alt="" className="size-5" />
                  <div className="text-label-s">{b.status}</div>
                </div>
              </DetailRow>
            </div>
            <Button variant="dark-primary" href="#submit-form" label="Submit" iconFull className="w-full" />
          </BlogTop>
        </BlogContainer>
      </section>

      <div>
        <BlogContainer>
          <div>
            <div role="tablist" className="flex">
              {['Details', 'Submissions'].map((t, i) => (
                <a
                  key={t}
                  href="#"
                  {...linkProps(i, 'bounty')}
                  className={`flex items-center justify-center gap-[5px] border-b-2 px-[15px] py-[9px] no-underline transition-all duration-200 ${
                    active === i ? 'border-neutral-0 text-neutral-0' : 'border-background text-neutral-200 hover:text-solid-25'
                  }`}
                >
                  <MaskIcon src={`${ICONS}/bounty-tab-${i + 1}.svg`} className="size-5" />
                  <div className="text-label-m">{t}</div>
                  {i === 1 && <div className="hidden rounded-8 bg-[#e77f6e26] px-2 py-1 text-red">0</div>}
                </a>
              ))}
            </div>
            <div className="pt-6">
              <div {...paneProps(0, 'bounty')}>
                <RichText id="blog-rtb" blocks={bountyDetails(b)} variant="base" />
              </div>
              <div {...paneProps(1, 'bounty')} />
            </div>
          </div>
        </BlogContainer>
        <div className="py-12">
          <BlogLine />
        </div>
      </div>

      <section>
        <BlogContainer>
          <BlogTop>
            <div id="submit-form" className="flex scroll-mt-[120px] flex-col gap-1">
              <H1>{b.submitTitle}</H1>
              <div className="text-body-m text-neutral-100">
                {paragraph(rng(`${b.slug}:submit`), 120)} Please review the{' '}
                <a href={b.termsHref} className="text-body underline">
                  terms and conditions
                </a>
                .
              </div>
            </div>
            <form onSubmit={noSubmit} className="flex flex-col gap-8">
              {(b.formSections || []).map((s, i) => (
                <FormSection key={i} section={s} index={i} seed={b.slug} />
              ))}
              <RecaptchaPlaceholder />
              <SubmitButton />
            </form>
          </BlogTop>
        </BlogContainer>
      </section>
      <CTA />
    </>
  )
}
