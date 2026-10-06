import { SectionContainer } from '../components/shared/Layout.jsx'
import { WorkHeroGrid } from '../components/community/WorkWith.jsx'
import AgencyDirectory from '../components/community/AgencyDirectory.jsx'
import { copy } from '../components/community/data.js'

const AD = '/assets/pages/agency-directory/'

// specs/agency-directory.md. No final CTA. ≤767 the sidebar stacks above the feed (fixes the live 390 overflow).
export default function AgencyDirectoryPage() {
  return (
    <>
      <div>
        <SectionContainer>
          <WorkHeroGrid className="max-lg:gap-[25px]">
            <div className="flex flex-col justify-between gap-10">
              <div className="max-w-[512px]">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-1">
                    <img src={`${AD}inline-icon-20-71a98e.svg`} alt="" className="size-5 opacity-36" />
                    <h1 className="text-overline uppercase text-neutral-100">AGENCY DIRECTORY</h1>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="font-display text-display-h2 text-neutral-0 max-lg:text-display-h2-lg max-sm:text-display-h2-sm">
                      Discover a best-fit agency from the Foreplay ecosystem.
                    </h2>
                    <div className="text-neutral-50">
                      <p className="text-body-l">{copy('agency-directory-lead', 105)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-20 border border-neutral-700 bg-neutral-900 max-lg:h-0" />
          </WorkHeroGrid>
        </SectionContainer>
      </div>
      <div>
        <SectionContainer>
          <AgencyDirectory />
        </SectionContainer>
      </div>
    </>
  )
}
