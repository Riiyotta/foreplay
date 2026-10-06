import { lazy } from 'react'

// Every page module in src/pages/*.jsx is a route. File name = slug
// (Home.jsx → "/", Pricing.jsx is NOT auto-mapped: add it to PAGES below).
const pageModules = import.meta.glob('./pages/*.jsx')
const templateModules = import.meta.glob('./pages/templates/*.jsx')

const page = (file) => {
  const mod = pageModules[`./pages/${file}.jsx`]
  return mod ? lazy(mod) : null
}
const template = (file) => {
  const mod = templateModules[`./pages/templates/${file}.jsx`]
  return mod ? lazy(mod) : null
}

// path → page component file (in src/pages). Pages not yet built are skipped.
export const PAGES = {
  '/': 'Home',
  '/affiliates': 'Affiliates', '/briefs': 'Briefs', '/blog': 'Blog', '/discovery': 'Discovery',
  '/experts': 'Experts', '/faq': 'Faq', '/creative-strategist-jobs': 'CreativeStrategistJobs',
  '/careers': 'Careers', '/ships': 'Ships', '/experts-application': 'ExpertsApplication',
  '/watch-demo': 'WatchDemo', '/mobile-app': 'MobileApp', '/fireside': 'Fireside',
  '/fireside-application': 'FiresideApplication', '/apps-extensions': 'AppsExtensions',
  '/fireside-replays': 'FiresideReplays', '/spyder-ad-spy': 'Spyder', '/contest': 'Contest',
  '/contest-submission': 'ContestSubmission', '/chrome-extension': 'ChromeExtension',
  '/lens-creative-analytics': 'Lens', '/pricing': 'Pricing', '/reviews': 'Reviews',
  '/swipe-file': 'SwipeFile', '/book-demo': 'BookDemo', '/api': 'Api',
  '/work-with-brands': 'WorkWithBrands', '/work-with-marketers': 'WorkWithMarketers',
  '/bounties': 'Bounties', '/pre-black-friday': 'PreBlackFriday', '/agency-directory': 'AgencyDirectory',
  '/jumpstart-2026': 'Jumpstart2026', '/media-kit': 'MediaKit', '/mcp': 'Mcp', '/2026-paid-lp': 'PaidLp2026',
}

// CMS collections: /<prefix>/:slug → template file (in src/pages/templates), data in src/data/<prefix>.json
export const TEMPLATES = {
  post: 'Post', experts: 'Expert', faqs: 'FaqItem', authors: 'Author', events: 'Event',
  agencies: 'Agency', videos: 'Video', category: 'Category', comparison: 'Comparison',
  industries: 'Industry', page: 'LegalPage', careers: 'Career', university: 'University', bounties: 'Bounty',
}

export const routes = [
  ...Object.entries(PAGES).map(([path, file]) => ({ path, Component: page(file) })),
  ...Object.entries(TEMPLATES).map(([prefix, file]) => ({ path: `/${prefix}/:slug`, Component: template(file) })),
].filter((r) => r.Component)
