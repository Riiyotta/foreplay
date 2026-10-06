import ApplicationPage from '../components/community/ApplicationPage.jsx'
import { copy } from '../components/community/data.js'

// specs/fireside-application.md (C2). No final CTA.
export default function FiresideApplication() {
  return (
    <ApplicationPage
      overline="FIRESIDE SPEAKER"
      title="Apply to be a speaker"
      lead={copy('fireside-application', 124)}
      formSrc="https://noteforms.com/forms/fireside-speaker-application-yw0imi"
      formHeight={620}
    />
  )
}
