// /page/:slug — specs/template-page.md (title + full-bleed white block with plain rich text; no CTA)
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Container, SectionContainer, TemplateNotFound } from '../../components/templates/Layout.jsx'
import RichText from '../../components/templates/RichText.jsx'
import { blocksFrom } from '../../components/misc/copy.js'
import pages from '../../data/page.json'

export default function LegalPage() {
  const { slug } = useParams()
  const page = pages.find((p) => p.slug === slug)
  const blocks = useMemo(() => {
    if (!page) return []
    const b = blocksFrom(`page:${page.slug}`, page.blocks, page.bodyLen, { spacers: true })
    // Stand-in links (count from page.fields.json) on the first paragraphs
    let n = page.links || 0
    for (const blk of b) {
      if (!n) break
      if (blk.t === 'p' && blk.text !== '\u200d') {
        blk.link = { text: 'see here', href: '#' }
        n--
      }
    }
    return b
  }, [page])
  if (!page) return <TemplateNotFound />

  return (
    <>
      <div className="overflow-hidden">
        <SectionContainer>
          <div className="flex flex-col py-[75px]">
            <div className="mx-auto flex w-full max-w-[720px] flex-col items-center text-center">
              <h1 className="font-display text-display-h2 text-neutral-0 max-lg:text-display-h2-lg max-sm:text-display-h2-sm">
                {page.title}
              </h1>
            </div>
          </div>
        </SectionContainer>
      </div>
      {/* `.section-white-block` directly in the flow: full-bleed, no 8px inset */}
      <div className="relative z-2 overflow-hidden rounded-36 bg-neutral-0 max-sm:rounded-16">
        <Container>
          <div className="py-[25px]" />
          <RichText variant="plain" blocks={blocks} className="misc-legal-rt" />
          <div className="py-[25px]" />
        </Container>
      </div>
    </>
  )
}
