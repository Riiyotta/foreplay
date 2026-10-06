import ApplicationPage from '../components/community/ApplicationPage.jsx'
import { copy } from '../components/community/data.js'

// specs/experts-application.md (C2). No final CTA.
export default function ExpertsApplication() {
  return (
    <ApplicationPage
      overline="FOREPLAY EXPERTS"
      title="Apply to be featured as an expert"
      lead={copy('experts-application', 143)}
      formSrc="https://noteforms.com/forms/experts-application-gupcyx"
      formHeight={830}
    />
  )
}
