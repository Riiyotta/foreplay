import { Button } from '../shared.jsx'
import { SectionContainer } from '../shared/Layout.jsx'

/* S6 `.cta > .cta-block` "Get a 7-Day free trial today": 1264×404 dark card (ring solid-700, radius 36,
   padding 84) with an 880×880 product animation (mix-blend lighten) bleeding out on the right ≥992,
   replaced by the isometric product image ≤991.
   { body, video: src, iconImg, iconAlt } */
export default function CtaBanner({ title = 'Get a 7-Day free trial today', body, video, iconImg, iconAlt = '' }) {
  return (
    <div>
      <SectionContainer>
        <div className="py-20">
          <div className="relative overflow-hidden rounded-36 bg-background p-[84px] shadow-ring-extension max-lg:px-16 max-lg:pb-0 max-lg:pt-16 max-md:px-10 max-md:pt-12 max-sm:px-8 max-sm:pt-8">
            <div className="relative z-1 flex max-w-[66%] flex-col gap-8 max-lg:max-w-none">
              <div className="flex flex-col items-start gap-2 [text-wrap:balance]">
                <h2 className="font-display text-display-h3 text-white [text-wrap:balance] max-md:text-display-h4">
                  {title}
                </h2>
                <div className="flex-1 text-neutral-100">
                  <p className="text-body-l [text-wrap:balance] max-md:text-body-m">{body}</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-3">
                <Button variant="dark-primary" href="https://app.foreplay.co/sign-up" label="Start Free Trial" iconFull />
              </div>
            </div>
            <div className="absolute -right-1/4 -top-1/2 bottom-0 z-0 size-[880px] mix-blend-lighten max-lg:hidden">
              <div className="relative flex size-full items-center justify-center">
                <video className="size-full object-contain" autoPlay loop muted playsInline preload="metadata">
                  <source src={video} />
                </video>
              </div>
            </div>
            <div className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-md:mt-6">
              <img
                className="hidden max-lg:block max-lg:size-[300px] max-lg:max-w-none max-md:-mb-16 max-sm:size-64"
                src={iconImg}
                alt={iconAlt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
