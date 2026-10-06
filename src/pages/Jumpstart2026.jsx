// /jumpstart-2026 — specs/jumpstart-2026.md (hero, logo strip, white offer block; no CTA)
import { Container, WhiteBlock } from '../components/shared/Layout.jsx'
import LogoStrip from '../components/shared/LogoStrip.jsx'
import { JumpstartHero, JumpstartOffer } from '../components/misc/Jumpstart.jsx'

export default function Jumpstart2026() {
  return (
    <>
      <JumpstartHero />
      {/* §2: logo strip, hidden ≤479 */}
      <section className="max-sm:hidden">
        <Container>
          <div className="mb-[30px] pt-[60px]">
            <LogoStrip />
          </div>
        </Container>
      </section>
      <WhiteBlock>
        <JumpstartOffer />
      </WhiteBlock>
    </>
  )
}
