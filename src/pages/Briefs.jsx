import ProductHero from '../components/product/ProductHero.jsx'
import SolutionCards from '../components/product/SolutionCards.jsx'
import ProductCarousel from '../components/product/ProductCarousel.jsx'
import ProductTabs from '../components/product/ProductTabs.jsx'
import FeatureSection from '../components/product/FeatureSection.jsx'
import CtaBanner from '../components/product/CtaBanner.jsx'
import Faq from '../components/shared/Faq.jsx'
import CTA from '../components/CTA.jsx'
import { TabBriefs0, TabBriefs1, TabBriefs2 } from '../components/svgs.jsx'

// specs/briefs.md — product template (_shared-pages.md §1). Long copy is stand-in text.
const P = '/assets/pages/briefs/'

const FAQ = [
  {
    q: 'Can I use the brief builder without any AI features turned on?',
    a: <p>Yes. Every block in the editor can be written by hand. The AI tools are optional helpers for drafting scripts, hooks and scene ideas when you want a starting point.</p>,
  },
  {
    q: 'Where does this tool fit into the design process?',
    a: <p>Briefs sit between research and production. Once you have collected reference ads, you turn them into a brief that explains the concept, the script and the visuals. Designers, editors and creators then work from that single page, and any assets they deliver are collected back against the same brief so nothing gets lost.</p>,
  },
  {
    q: 'How many briefs and storyboards can my team create on one plan?',
    a: <p>There is no cap on the number of briefs. Create as many as your projects need and organize them by brand, campaign or client.</p>,
  },
  {
    q: 'How can an advertising agency use the AI Brief Builder?',
    a: <p>Agencies keep a profile for each client with brand details, tone and guidelines, then generate briefs that already follow those rules. Briefs can be shared through a branded link, so clients review and approve concepts without needing an account. When creators deliver, all of the files land in one place for the account team to review.</p>,
  },
  {
    q: 'What makes an effective creative brief?',
    a: <p>A clear goal, a defined audience, one core message and concrete references. Good briefs also spell out the format, length and deliverables so there are no surprises. Attaching example ads saves a lot of back and forth, because everyone can see the style you are aiming for before any production work begins.</p>,
  },
]

export default function Briefs() {
  return (
    <>
      <ProductHero
        overline="BRIEFS"
        title="Ad Briefs & Storyboards for Marketers"
        subtitle="Turn saved references into clear briefs, scripts and storyboards your creators can follow, then collect every finished asset in the same place."
        icon={{
          webm: `${P}animated-icon-briefs.webm`,
          mov: `${P}animated-icon-briefs.mov`,
          img: `${P}682f9f72dc306ab5bf957aea_pi-briefs-hq.webp`,
          alt: 'briefs app icon',
        }}
        screen={{
          highWebm: `${P}!Briefs-2025_high.webm`,
          mp4: `${P}68338ad5ea21a80a4e3fe221_product-video-briefs-transcode.mp4`,
          webm: `${P}68338ad5ea21a80a4e3fe221_product-video-briefs-transcode.webm`,
          poster: `${P}68338ad5ea21a80a4e3fe221_product-video-briefs-poster-00001.jpg`,
        }}
      />
      <SolutionCards
        title="Why do you need a creative brief?"
        body="Scattered docs and vague instructions lead to rounds of revisions. A structured brief gives everyone the same picture of the ad before production starts."
        before={{ text: 'Endless docs, confusing deliverables and revisions.', img: `${P}682dfe3aacd1e2e93f141aee_before-briefs.webp` }}
        after={{ text: 'Turn inspiration into actionable briefs in half the time.', img: `${P}682e02bb5956e6397077a270_after-briefs.webp` }}
      />
      <ProductCarousel
        title="Scale creative output with AI"
        body="Draft more concepts in less time, keep every brand on message and give creators exactly what they need to deliver the first time around."
        slides={[
          { img: `${P}6453d07eaf4c84835bc3640a_itterate-velocity.webp`, alt: 'make versions and itterations of your ads', title: 'Iterate with Velocity', text: 'Spin up new versions of a winning concept with fresh hooks, angles and calls to action fast.' },
          { img: `${P}6474cb2a6d47ed343b8907bf_multiple-brands-2.webp`, alt: 'manage a successful campaign for multiple brands', title: 'Manage Multiple Brands', text: 'Keep separate profiles, templates and guidelines for each brand you produce creative for.' },
          { img: `${P}6474cb43476077e17c97ca8b_brief-deadline.webp`, alt: 'never miss a deadline', title: 'Never Miss a Deadline', text: 'Set due dates on each brief and see at a glance which deliverables are still open.' },
          { img: `${P}6453d07e922f8a155fff9eba_dynamic-deliverables.webp`, alt: 'dynamic deliverables', title: 'Dynamic Deliverables', text: 'Easily build out creative deliverables for your creative assets.' },
        ]}
      />
      <ProductTabs
        title="Your creative brief co-pilot"
        body="Generate scripts from your references, break them into scenes and create storyboard frames that show creators exactly what each shot should be."
        tabs={[
          { label: 'AI Script Generation', icon: <TabBriefs0 />, img: `${P}6474f34d127523e5b91bfc1b_Briefs-Tab-1.webp`, alt: 'AI Ad script creation' },
          { label: 'Storyboard Generation', icon: <TabBriefs1 />, img: `${P}6474f88aad7627eb6a9ef3f2_Briefs-Tab-2.webp`, alt: 'Storyboard generation' },
          { label: 'AI Storyboard Images', icon: <TabBriefs2 />, img: `${P}6474f8d4c237281dc975773a_Briefs-Tab-3-2.webp`, alt: 'AI storyboard images' },
        ]}
      />
      <FeatureSection
        title="Production that’s way more productive"
        body="Everything a brief needs, from references and brand details to exports and sharing, in one flexible editor."
        groups={[
          {
            features: [
              { img: `${P}645405e3a1cdeeb67fce56d3_attach-inspo.webp`, alt: 'attach facebook or tiktok ad inspiration', title: 'Attach Inspiration', text: 'Include examples from your competitors or your own ads.' },
              { img: `${P}6474dfaa2e9a4a5888f31dcd_brand-guidelines.webp`, alt: 'bulk add brand details to your brief', title: 'Brand Profiles', text: 'Inject reusable brand information with a single click.' },
              { img: `${P}645405e3fbeb9258c2385d11_modular-editor.webp`, alt: 'modular brief editor', title: 'Modular Brief Editor', text: 'Add pre-built content block your creative project needs.' },
              { img: `${P}645405e354900dd97b639df3_export-brief.webp`, alt: 'export brief', title: 'Export Everywhere', text: 'Download briefs as PDF or share them as a link with anyone.' },
              { img: `${P}645405e32a498148618e56fa_brief-template.webp`, alt: 'creative brief template', title: 'Creative Brief Template', text: 'Craft and manage reusable templates and script formats.' },
              { img: `${P}645405e3a367f05e79030230_brief-share.webp`, alt: 'share brief', title: 'Easily Share with Anyone', text: 'Share links for a client, project manager or team member.' },
            ],
            testimonial: {
              logo: `${P}6478c6a9d904f44339a39b5f_63cd2aa75c56b2db086ad38b_LOGO BLUE-p-500.webp`,
              quote: '“Our briefs used to live in a dozen different docs and every creator read them differently. Now each brief has the references, the script and the shot list in one place, and our revision rounds have dropped noticeably since we switched the whole team over to it.”',
              avatar: `${P}6478c6e1810c46a199122313_Dv92wDm3_400x400.webp`,
              name: 'Kevin Sussat',
              role: 'Founder @ Envu Media',
            },
          },
          {
            features: [
              { img: `${P}64541ad7101e24294205eba5_new-hooks.webp`, alt: 're-write ad copy to fit your marketing strategy', title: 'Regenerate Versions', text: 'Unlock new ideas for hooks, CTAs and more with AI.' },
              { img: `${P}64541acd4d56e7cdfc6abaa7_scene-description.webp`, alt: 'Add visual scene descriptions to your AI storyboard', title: 'Scene Descriptions', text: 'Detailed action descriptions for each scene in your storyboard.' },
              { img: `${P}64541ade63d9544d60a6e5f3_text-overlay.webp`, alt: 'converting text overlay', title: 'Converting Text Overlay', text: 'Generate performance-focused text-on-screen.' },
              { img: `${P}645420f1ac10bfbbe22cff0f_upload assets-4.webp`, alt: 'collect assets', title: 'Collect Assets', text: 'Manage creative asset submissions from one or many.' },
              { img: `${P}645420809ed898e0a2e34a9e_multi-language-2.webp`, alt: 'multi-language', title: 'Multi-Language', text: 'Version your script or AI storyboard into 150+ languages.' },
              { img: `${P}6474dfaa93a6291dbec99294_upload assets-4.webp`, alt: 'branded brief pages', title: 'Branded Brief Pages', text: 'Add your own logo and colors to every brief you send out to creators.' },
            ],
            testimonial: {
              logo: `${P}6478bf6f2eb8f9e5dd1563d4_Group 48348.webp`,
              quote: '“Writing scripts for a dozen creators each month was the slowest part of our process. With references attached and AI drafts to start from, our strategists finish briefs in a fraction of the time and creators deliver closer to what we pictured.”',
              avatar: `${P}6478bf7a1f7099006baab519_allan-porter.webp`,
              name: 'Allan Porter',
              role: 'Founder @ Porter Media',
            },
          },
        ]}
      />
      <CtaBanner
        body="Try every feature free for seven days. Write briefs, generate scripts and storyboards, and collect assets from your creators before you decide."
        video={`${P}cta-briefs.mov`}
        iconImg="/assets/682f93b44b8360f413644eb7_iso-briefs.webp"
        iconAlt="isometric briefs pen logo"
      />
      <Faq
        title="Questions about Briefs?"
        body="Most frequent questions about building ad briefs with Foreplay."
        items={FAQ}
      />
      <CTA />
    </>
  )
}
