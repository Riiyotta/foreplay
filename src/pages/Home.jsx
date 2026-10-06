import Hero from '../components/Hero.jsx'
import BeforeAfter from '../components/BeforeAfter.jsx'
import { ResearchSection, AnalyticsSection } from '../components/ProductSections.jsx'
import Collaboration from '../components/Collaboration.jsx'
import Features from '../components/Features.jsx'
import CTA from '../components/CTA.jsx'

// Section order per CLONE_SPEC §11.
export default function Home() {
  return (
    <>
      <Hero />
      <BeforeAfter />
      <ResearchSection />
      <AnalyticsSection />
      <Collaboration />
      <Features />
      <CTA />
    </>
  )
}
