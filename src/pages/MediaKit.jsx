// /media-kit — specs/media-kit.md (hero only; footer follows)
import { Button } from '../components/shared.jsx'
import { SectionContainer } from '../components/shared/Layout.jsx'
import { standin } from '../components/misc/copy.js'

const A = '/assets/pages/media-kit/'

export default function MediaKit() {
  return (
    <div className="overflow-hidden">
      <SectionContainer>
        {/* `.demo-hero`: padding 120/0 (≤479 40/0) */}
        <div className="flex flex-col items-center py-[120px] max-sm:py-10">
          {/* `.media-kit-header`: stays a row at every width (as measured on the live site) */}
          <div className="flex items-center gap-[25px]">
            <img
              src={`${A}6972490d55ff501309a8bec6_foreplay-folder-gray.webp`}
              alt=""
              width="200"
              height="200"
              className="size-[200px] max-w-none flex-none"
            />
            <div className="flex min-w-0 max-w-[720px] flex-col items-start gap-3 text-left">
              <h1 className="font-display text-display-h2 text-neutral-0 max-lg:text-display-h2-lg max-sm:text-display-h2-sm">
                Media Kit
              </h1>
              <div className="max-w-[512px]">
                <p className="text-body-l text-neutral-100">{standin('media-kit-sub', 84)}</p>
              </div>
              <Button
                variant="dark-secondary"
                href="#"
                label="Download all brand assets"
                iconRight={<img src={`${A}svg/svg-w-embed-2cdd8273.svg`} alt="" className="size-[18px]" />}
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
