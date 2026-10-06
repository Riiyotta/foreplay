import { Button } from '../components/shared.jsx'
import { Container, SectionContainer, ContentMain } from '../components/shared/Layout.jsx'
import { HeroContent } from '../components/product/ProductHero.jsx'
import SecurityGrid from '../components/shared/SecurityGrid.jsx'

// specs/apps-extensions.md — short `.fireside-hero` + 3-card `.lens-security-grid`. Long copy is stand-in text.
const img = (src, alt = '') => <img className="size-6" src={src} alt={alt} loading="lazy" />

export default function AppsExtensions() {
  return (
    <>
      <section id="product-hero-section" className="relative">
        <Container>
          <div className="relative flex flex-col items-center py-20 text-center max-sm:py-10">
            <HeroContent
              overlineInside
              overline="APPS & EXTENSIONS"
              title="Download Foreplay's Companion Apps"
              subtitle="Save ads from your browser or your phone and they land in the same library, ready to sort and share."
              actions={
                <Button
                  variant="dark-primary"
                  href="https://foreplay.getrewardful.com/signup"
                  target="_blank"
                  label="Become an Affiliate"
                  iconFull
                />
              }
            />
          </div>
        </Container>
      </section>
      <div>
        <SectionContainer>
          <ContentMain>
            <SecurityGrid
              cards={[
                {
                  icon: img('/assets/pages/chrome-extension/64944e2428c1fae0b340fded_Google_Chrome_icon_(February_2022).svg.avif', 'google chrome icon'),
                  title: 'Chrome Extension',
                  text: 'Add a save button to the Meta, TikTok and LinkedIn ad libraries and keep any ad you find with a single click.',
                  cta: 'Download Extension',
                  href: 'https://chromewebstore.google.com/detail/ad-library-save-facebook/eaancnanphggbfliooildilcnjocggjm',
                  target: '_blank',
                },
                {
                  icon: img('/assets/pages/apps-extensions/65b7c4b2d828767278319529_8e146e9e28baeb9b59c6004ed7b1343b.avif'),
                  title: 'iOS App',
                  text: 'Save ads and posts while you scroll on your iPhone and find them waiting in your library later.',
                  cta: 'Download iOS App',
                  href: 'https://apps.apple.com/ca/app/foreplay-ad-swipe-file/id6466097243',
                  target: '_blank',
                },
                {
                  icon: img('/assets/pages/apps-extensions/65b7c4fba3efe52513c43327_google-play-icon-1024x1024-ntijeqxd.webp'),
                  title: 'Android App',
                  text: 'Share ads from any Android app straight into your boards and keep research going on the move.',
                  cta: 'Download Android App',
                  href: 'https://play.google.com/store/apps/details?id=co.foreplay.ForeplayMobile',
                  target: '_blank',
                },
              ]}
            />
          </ContentMain>
        </SectionContainer>
      </div>
    </>
  )
}
