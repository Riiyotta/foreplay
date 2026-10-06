import { SectionContainer } from '../shared/Layout.jsx'
import SectionHead from '../shared/SectionHead.jsx'
import EmbedPlaceholder from '../shared/EmbedPlaceholder.jsx'

/* C2 ApplicationPage (specs/_shared-community.md §C2, experts-application.md §1).
   The NoteForms iframe is third-party: a same-size placeholder is rendered instead.
   Wrapper height = iframe height + 6px inline gap (measured 836 for an 830 iframe). */
export default function ApplicationPage({ overline, title, lead, formSrc, formHeight }) {
  return (
    <div className="overflow-hidden">
      <SectionContainer>
        <div className="flex flex-col items-center py-[120px] max-md:py-20 max-sm:py-10">
          <SectionHead overline={overline} title={title} titleAs="h1" body={lead} />
          <div className="mt-[50px] w-full overflow-hidden rounded-[15px]" style={{ height: formHeight + 6 }}>
            <EmbedPlaceholder
              label="Application form (NoteForms embed)"
              href={formSrc}
              linkLabel="Open form"
              className="h-[calc(100%-6px)] w-full"
            />
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
