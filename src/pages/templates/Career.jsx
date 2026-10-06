// /careers/:slug — specs/template-careers.md (S1 breadcrumb, S2 title, apply + description blocks; no CTA)
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/shared.jsx'
import { BlogContainer, FullLine, TemplateNotFound } from '../../components/templates/Layout.jsx'
import Breadcrumb from '../../components/templates/Breadcrumb.jsx'
import { BlogTitle, BlogTop } from '../../components/templates/TitleBlock.jsx'
import RichText from '../../components/templates/RichText.jsx'
import { blocksFrom } from '../../components/misc/copy.js'
import careers from '../../data/careers.json'

const SVG = '/assets/templates/careers/svg/'

// `.fireside-subscribe-action`: row (≤991 column, gap 24, padding 40/0)
function ActionBlock({ icon, title, children, action }) {
  return (
    <div className="flex items-center border-b border-neutral-700 pb-20 pt-10 max-lg:flex-col max-lg:items-start max-lg:gap-6 max-lg:py-10">
      <div className="flex flex-1 flex-col gap-4 self-stretch">
        <div className="flex items-center gap-2">
          <img src={`${SVG}${icon}`} alt="" className="size-6" />
          <div className="text-label-l text-neutral-0">{title}</div>
        </div>
        {children}
      </div>
      {action}
    </div>
  )
}

export default function Career() {
  const { slug } = useParams()
  const job = careers.find((c) => c.slug === slug)
  const blocks = useMemo(() => (job ? blocksFrom(`career:${job.slug}`, job.blocks, job.bodyLen, { spacers: true }) : []), [job])
  if (!job) return <TemplateNotFound />

  return (
    <>
      <section>
        <BlogContainer>
          <Breadcrumb crumbs={[{ label: 'Careers', href: '/careers' }, { label: job.title }]} />
        </BlogContainer>
      </section>
      <section>
        <BlogContainer>
          <BlogTop>
            <BlogTitle>{job.title}</BlogTitle>
          </BlogTop>
        </BlogContainer>
        <FullLine />
      </section>
      <div>
        <BlogContainer>
          <ActionBlock
            icon="icon-medium-w-embed-77b6990d.svg"
            title="Apply Now"
            action={<Button variant="dark-secondary" href={job.applyUrl} label="Apply Now" />}
          >
            <p className="text-body-m text-neutral-50">Fill out the job application to be selected for an interview.</p>
          </ActionBlock>
          <ActionBlock icon="icon-medium-w-embed-54641751.svg" title="Job Description">
            <div className="text-neutral-50">
              <RichText id="blog-rtb" variant="base" blocks={blocks} />
            </div>
          </ActionBlock>
        </BlogContainer>
      </div>
    </>
  )
}
