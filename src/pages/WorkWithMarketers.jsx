import WorkWithTemplate from '../components/community/WorkWith.jsx'
import { copy } from '../components/community/data.js'

// specs/work-with-marketers.md (C5)
export default function WorkWithMarketers() {
  return <WorkWithTemplate title="Work with Marketers" lead={copy('work-marketers-lead', 228)} formVariant="marketers" />
}
