import { useRef } from 'react'
import { Button, BgVideo } from '../shared.jsx'
import { Container } from '../shared/Layout.jsx'
import useHeroParallax, { inOutCubic } from '../useHeroParallax.js'

const DOT_GRID = '/assets/pages/swipe-file/68331d86cf0a6a7db433a56d_dot-grid.webp'
const MOCKUP = '/assets/pages/swipe-file/6820c07c2e5b8c350c8e1f4c_hero-empty-mockup.webp'

/* `.product-hero-content`: overline h1 + `.hero-text` (60/68 gradient h2 + 18/28 subtitle, max 512) + actions.
   overlineInside: the h1 sits inside `.hero-text` (gap 16) instead of above it (gap 28) — lens, apps-extensions. */
export function HeroContent({ overline, title, subtitle, actions, overlineInside = false, className = '' }) {
  const h1 = <h1 className="text-overline uppercase text-neutral-300">{overline}</h1>
  return (
    <div className={`flex flex-col items-center gap-7 max-sm:relative max-sm:gap-6 max-sm:pb-6 ${className}`}>
      {!overlineInside && overline && h1}
      <div className="flex max-w-[900px] flex-col items-center gap-4 max-sm:gap-3">
        {overlineInside && overline && h1}
        <h2 className="hero-title-fill font-display text-display-h1 text-hero-title [text-wrap:balance] max-md:text-display-h1-md max-sm:text-display-h1-sm">
          {title}
        </h2>
        {subtitle && (
          <div className="max-w-[512px]">
            <p className="text-body-l text-neutral-100">{subtitle}</p>
          </div>
        )}
      </div>
      {actions ?? <Button variant="dark-primary" href="https://app.foreplay.co/sign-up" label="Start free trial" iconFull />}
    </div>
  )
}

/* `section#product-hero-section` shell: optional dot grid, `.container > .product-hero`, the IX2 a-71
   trigger and the sticky block (translateY 0→−33% inOutCubic, scale 1→.75, opacity 1→0, ≥768).
   sticky: content of `.product-hero-sticky`; children: siblings after it (e.g. the preview). */
export function ProductHeroShell({ dots = true, heroClassName = '', sticky, children }) {
  const triggerRef = useRef(null)
  const stickyRef = useRef(null)
  useHeroParallax(triggerRef, stickyRef, { translateEasing: inOutCubic })
  return (
    <section id="product-hero-section" className="relative">
      {dots && (
        <div
          className="dot-bg-mask pointer-events-none absolute inset-0 bg-[length:380px_380px] bg-[position:50%_0] bg-repeat opacity-66 max-sm:bg-[length:256px_256px]"
          style={{ backgroundImage: `url("${DOT_GRID}")` }}
        />
      )}
      <Container>
        <div
          className={`flex flex-col items-center pt-2.5 text-center max-md:pt-16 max-sm:py-6 ${heroClassName}`}
        >
          <div ref={triggerRef} className="pointer-events-none absolute inset-x-0 -top-[72px] h-screen" />
          <div
            ref={stickyRef}
            className="sticky top-[100px] flex flex-col items-center max-md:relative max-md:top-0"
          >
            {sticky}
          </div>
          {children}
        </div>
      </Container>
    </section>
  )
}

// `.product-hero-icon`: 256px animated icon video ≥992, static pi-*-hq image ≤991 (128 / 108 ≤479)
export function HeroIcon({ webm, mov, img, alt }) {
  return (
    <div className="-mb-6 -mt-10 size-64 max-lg:my-0 max-lg:size-auto max-lg:p-8 max-sm:p-6">
      <div className="relative flex size-full items-center justify-center max-lg:hidden">
        <video className="size-full object-contain" autoPlay loop muted playsInline preload="metadata">
          <source src={webm} />
          <source src={mov} />
        </video>
      </div>
      <img className="hidden size-32 max-lg:block max-sm:size-[108px]" src={img} alt={alt} loading="lazy" />
    </div>
  )
}

// `.product-hero-video`: inset 6.6% / 11%, 77.8% wide, 1400/730, rotateX(7deg) (9deg ≤991)
const SCREEN =
  'absolute left-[11%] top-[6.6%] z-1 flex aspect-[1400/730] w-[77.8%] items-center justify-center overflow-hidden bg-background [transform-style:preserve-3d] [transform:rotateX(7deg)] max-lg:w-[77.5%] max-lg:[transform:rotateX(9deg)] max-md:w-[77.7%]'

/* `.product-hero-preview` (16:10 monitor mockup, perspective 1000) with the tilted screen video.
   screen: { highWebm?, mp4, webm, poster } — highWebm is the `.w-embed` <video> (contain), the
   others the Webflow bg-video fallback that sits above it. children: overlays (lens lightbox pill). */
export function HeroPreview({ screen, children }) {
  return (
    <div className="relative -mb-12 mt-[52px] flex aspect-[16/10] flex-col items-center self-stretch [perspective:1000px] max-lg:overflow-clip max-sm:mt-10 max-sm:origin-bottom">
      {screen.highWebm && (
        <div className={SCREEN}>
          <video className="size-full object-contain" autoPlay loop muted playsInline preload="metadata">
            <source src={screen.highWebm} />
          </video>
        </div>
      )}
      <img
        className="pointer-events-none relative z-2 aspect-[16/10] h-auto w-full"
        src={MOCKUP}
        alt="apple pro xdr monnitor mockup"
        loading="lazy"
      />
      <div className="pointer-events-none absolute -left-10 -right-10 -top-[12%] bottom-0 bg-hero-underlay max-lg:-left-8 max-lg:-right-8 max-md:hidden" />
      <div className={SCREEN}>
        <BgVideo className="size-full" poster={screen.poster} sources={[screen.mp4, screen.webm]} />
      </div>
      {children}
    </div>
  )
}

/* Full product hero (swipe-file, discovery, spyder, briefs, lens):
   icon { webm, mov, img, alt }, screen (see HeroPreview), previewChildren (overlays). */
export default function ProductHero({ overline, title, subtitle, icon, screen, overlineInside, previewChildren }) {
  return (
    <ProductHeroShell
      sticky={
        <>
          <HeroIcon {...icon} />
          <HeroContent overline={overline} title={title} subtitle={subtitle} overlineInside={overlineInside} />
        </>
      }
    >
      <HeroPreview screen={screen}>{previewChildren}</HeroPreview>
    </ProductHeroShell>
  )
}
