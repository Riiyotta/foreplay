import { ChromeExtensionLogo, IconUsers, IconStar } from './svgs.jsx'
import { Button, Overline } from './shared.jsx'

// CLONE_SPEC §4.3 — .home-extension (hidden ≤479)
export default function ChromeExtension() {
  return (
    <div className="relative flex gap-10 overflow-hidden rounded-32 p-10 shadow-ring-extension max-md:flex-col max-sm:hidden max-sm:gap-8 max-sm:rounded-16 max-sm:p-8">
      <figure className="absolute bottom-0 left-[-4%] top-0 m-0 flex w-32 items-center justify-start opacity-50 max-md:bottom-auto max-md:left-auto max-md:right-[-5%] max-md:top-[-5%] max-md:h-32 max-sm:right-[-2%] max-sm:top-[-2%] max-sm:size-24">
        <div className="flex w-full items-center justify-center">
          <ChromeExtensionLogo />
        </div>
      </figure>
      <div className="flex flex-1 flex-col gap-5 pl-20 max-md:pl-0">
        <div className="flex max-w-[480px] flex-col gap-2">
          <div className="text-neutral-50">
            <Overline>Free Chrome Extension</Overline>
          </div>
          <div className="text-white">
            <div className="[text-wrap:balance]">
              <h3 className="font-display text-display-h4">Save ads from Meta, TikTok &amp; LinkedIn Ad Libraries.</h3>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start gap-9">
          <div className="flex items-center justify-start gap-2">
            <div className="flex-1 text-neutral-100">
              <div className="inline-flex size-6 items-center justify-center">
                <div className="flex items-center justify-center">
                  <IconUsers />
                </div>
              </div>
            </div>
            <div className="text-neutral-50">
              <div className="text-label-m">30,000 Users</div>
            </div>
          </div>
          <div className="flex items-center justify-start gap-2">
            <div className="flex-1 text-neutral-100">
              <div className="inline-flex size-6 items-center justify-center">
                <div className="flex items-center justify-center">
                  <IconStar />
                </div>
              </div>
            </div>
            <div className="text-neutral-50">
              <div className="text-label-m">4.8/5 Stars</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end max-md:flex-col max-md:items-stretch max-md:justify-start">
        <Button
          variant="dark-primary"
          href="https://chromewebstore.google.com/detail/ad-library-save-facebook/eaancnanphggbfliooildilcnjocggjm"
          target="_blank"
          label="Install Free"
          iconFull
        />
      </div>
    </div>
  )
}
