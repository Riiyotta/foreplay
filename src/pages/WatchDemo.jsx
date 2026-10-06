import { Button } from '../components/shared.jsx'
import { SectionContainer } from '../components/shared/Layout.jsx'
import SectionHead from '../components/shared/SectionHead.jsx'
import EmbedPlaceholder from '../components/shared/EmbedPlaceholder.jsx'

// specs/watch-demo.md — demo hero + Wistia player (placeholder) + message card. Long copy is stand-in text.
export default function WatchDemo() {
  return (
    <div className="overflow-hidden">
      <SectionContainer>
        <div className="flex flex-col items-center justify-start py-[120px] max-md:py-20 max-sm:py-10">
          <SectionHead
            overline="DEMO"
            title="Watch the pre-recorded demo"
            titleAs="h1"
            body="A short walkthrough of the platform, from saving your first ad to sharing reports."
          />
          <div className="mx-auto mt-[25px] w-full max-w-[800px] overflow-hidden rounded-10 bg-neutral-0 max-lg:mx-[63.5px] max-md:mx-auto">
            {/* Wistia media uwpllhs0uf (videoFoam, 16:9) — third-party embed, not loaded */}
            <EmbedPlaceholder
              className="aspect-video w-full"
              label="Foreplay product demo (Wistia video)"
              href="https://fast.wistia.com/embed/medias/uwpllhs0uf"
              linkLabel="Watch on Wistia"
            />
            <div className="flex gap-x-4 p-6 max-sm:flex-col max-sm:px-6 max-sm:pb-6 max-sm:pt-2">
              <img
                className="size-[50px] rounded-circle border border-grey-stroke max-md:size-[35px] max-sm:mb-2"
                src="/assets/pages/watch-demo/633c63671c752232dd2baf09_1639943305328.avif"
                alt=""
                loading="lazy"
              />
              <div className="flex-1">
                <div className="text-body-m text-solid-500 [text-wrap:pretty]">
                  Thanks for taking a look. If anything in the demo sparks a question, start a free trial and try it on
                  your own ads, or reply to our welcome email and we will walk you through it.
                </div>
                <div className="pt-5">
                  <Button variant="light-primary" href="https://app.foreplay.co/sign-up" label="Start Free Trial" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
