// /videos/:slug — specs/template-videos.md (S9 demo-hero + S10)
import { useParams } from 'react-router-dom'
import CTA from '../../components/CTA.jsx'
import { Button } from '../../components/shared.jsx'
import { getEntry } from '../../components/templates/data.js'
import { paragraph, rng } from '../../components/templates/standin.js'
import { SectionContainer, TemplateNotFound } from '../../components/templates/Layout.jsx'
import { DemoHero, SectionHead } from '../../components/templates/CenteredHero.jsx'
import { VideoBox } from '../../components/templates/VideoBox.jsx'

export default function Video() {
  const { slug } = useParams()
  const v = getEntry('videos', slug)
  if (!v) return <TemplateNotFound />
  const description = paragraph(rng(`${v.slug}:desc`), 110)

  return (
    <>
      <div className="overflow-hidden">
        <SectionContainer>
          <DemoHero>
            <div className="mb-[30px] flex flex-col items-center gap-[30px] max-sm:w-full">
              <SectionHead overline={v.overline} title={v.title} paragraph={description} />
              <div className="flex gap-3 max-sm:grid max-sm:w-full max-sm:grid-cols-1">
                <Button variant="dark-primary" href={v.primaryCta.href} label={v.primaryCta.label} iconFull />
                <Button variant="dark-secondary" href={v.secondaryCta.href} label={v.secondaryCta.label} icon={false} />
              </div>
            </div>
            <VideoBox youtubeId={v.youtubeId} title={v.title} frame="videos" className="w-full" />
          </DemoHero>
        </SectionContainer>
      </div>
      <CTA />
    </>
  )
}
