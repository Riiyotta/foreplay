import CTA from '../components/CTA.jsx'
import { SectionContainer, Container, WhiteBlock } from '../components/shared/Layout.jsx'
import SectionHead from '../components/shared/SectionHead.jsx'
import SenjaWall from '../components/community/SenjaWall.jsx'
import { copy } from '../components/community/data.js'

// specs/reviews.md
export default function Reviews() {
  return (
    <>
      <div>
        <SectionContainer>
          <div className="flex flex-col pb-[108px] pt-[72px] max-sm:pb-20 max-sm:pt-10">
            <SectionHead overline="WALL OF LOVE" title="What customers have to say" body={copy('reviews-lead', 84)} />
          </div>
        </SectionContainer>
      </div>
      <WhiteBlock as="div">
        <section>
          <Container>
            <div className="flex flex-col gap-10 py-16 max-sm:gap-8">
              <SenjaWall count={64} />
            </div>
          </Container>
        </section>
      </WhiteBlock>
      <CTA />
    </>
  )
}
