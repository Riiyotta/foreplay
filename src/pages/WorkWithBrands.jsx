import WorkWithTemplate from '../components/community/WorkWith.jsx'
import { copy } from '../components/community/data.js'

// specs/work-with-brands.md (C5)
export default function WorkWithBrands() {
  return <WorkWithTemplate title="Work with Brands" lead={copy('work-brands-lead', 137)} formVariant="brands" />
}
