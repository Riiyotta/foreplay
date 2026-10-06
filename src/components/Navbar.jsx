import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  SpriteDefs,
  ForeplayLogo,
  DropdownChevron,
  IconChromeExtension,
  IconMcp,
  IconMobileApp,
  IconApi,
  IconPlayCircle,
  IconPlay,
  IconEcommerce,
  IconAgencies,
  IconMobileApps,
  IconB2b,
  IconInfoEducation,
  IconFreelancers,
  IconUniversity,
  IconEvents,
  IconExperts,
  IconBlog,
  IconAffiliate,
  IconWorkWithBrands,
  IconAgencyDirectory,
  IconHamburger,
} from './svgs.jsx'
import { ButtonIcon, BgVideo, Overline, useSprite } from './shared.jsx'

// Internal links stay inside the clone (were absolute foreplay.co URLs)
const SITE = ''

/* ---------- small building blocks ---------- */

function OverlineTitle({ children }) {
  return (
    <div className="mb-2 flex w-full items-center justify-start rounded-6 p-2 text-neutral-50 max-lg:pl-0 max-lg:text-neutral-400">
      <Overline>{children}</Overline>
    </div>
  )
}

function Icon20({ children }) {
  return (
    <div className="size-5">
      <div className="flex size-full items-center justify-center">{children}</div>
    </div>
  )
}

function Icon24({ children }) {
  return <div className="inline-flex size-6 items-center justify-center">{children}</div>
}

const GLOWS = {
  library: 'bg-glow-swipe',
  discovery: 'bg-glow-discovery',
  spyder: 'bg-glow-spyder',
  lens: 'bg-glow-lens',
  briefs: 'bg-glow-briefs',
}

function NavBadge({ sprite, frames, href, title, description, tabIndex }) {
  const { spriteRef, hoverProps } = useSprite(frames)
  return (
    <li className="flex flex-1 flex-col items-center justify-start text-center text-nav-badge-text max-lg:items-start">
      <a
        href={href}
        data-sprite={sprite}
        data-frames={frames}
        tabIndex={tabIndex}
        className="group relative flex max-w-full flex-1 flex-col items-center justify-start px-2 pt-2 text-center text-nav-badge-text transition-all duration-200 ease-[ease] focus-visible:shadow-focus-inset focus-visible:outline-none max-lg:w-full max-lg:flex-row max-lg:gap-3 max-lg:p-0"
        {...hoverProps}
      >
        <div className="flex flex-1 flex-col items-center justify-start max-lg:items-start max-lg:justify-center">
          <div className="text-white">
            <div className="text-label-s">{title}</div>
          </div>
          <div className="flex-1 text-neutral-100 max-lg:text-left">
            <div className="text-body-s">{description}</div>
          </div>
        </div>
        <div
          ref={spriteRef}
          className={`sprite-image sprite-${sprite} relative z-2 -mb-5 mt-4 size-[88px] max-lg:order-first max-lg:m-0 max-lg:size-10`}
        />
        <div
          className={`absolute -bottom-[40%] aspect-square size-[116px] translate-y-1/2 rounded-glow opacity-0 blur-glow transition-all duration-800 ease-expo lg:group-hover:translate-y-0 lg:group-hover:opacity-100 max-lg:hidden ${GLOWS[sprite]}`}
        />
      </a>
    </li>
  )
}

function SubLink({ href, icon, label, external, tabIndex }) {
  return (
    <li>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        tabIndex={tabIndex}
        className="flex max-w-full items-center justify-start gap-3 p-2 transition-opacity duration-200 ease-[ease] hover:opacity-68 focus-visible:shadow-focus-nav focus-visible:outline-none max-lg:p-0"
      >
        <div className="relative flex size-11 items-center justify-center rounded-12 bg-neutral-700 p-2.5">
          <Icon24>
            <div className="flex items-center justify-center">{icon}</div>
          </Icon24>
        </div>
        <div className="flex flex-col items-start justify-center text-neutral-100">
          <div className="text-white">
            <div className="text-label-s">{label}</div>
          </div>
        </div>
      </a>
    </li>
  )
}

function SolutionLink({ href, icon, label, tabIndex }) {
  return (
    <li className="flex flex-1 items-center justify-start gap-3">
      <a
        href={href}
        tabIndex={tabIndex}
        className="flex max-w-full flex-1 flex-row items-center justify-start gap-3 p-2 text-left text-neutral-100 transition-all duration-200 ease-[ease] hover:opacity-80 focus-visible:shadow-focus-nav focus-visible:outline-none max-lg:py-1 max-lg:pl-0 max-sm:px-0"
      >
        <div className="flex size-12 items-center justify-center rounded-12 border border-neutral-600">
          <Icon24>{icon}</Icon24>
        </div>
        <div className="text-white">
          <div className="flex items-center justify-start gap-[5px] whitespace-nowrap">
            <div className="text-label-s">{label}</div>
          </div>
        </div>
      </a>
    </li>
  )
}

function ResourceLink({ href, icon, label, description, external, tabIndex }) {
  return (
    <li className="flex flex-1 items-start justify-start gap-3">
      <a
        href={href}
        target={external ? '_blank' : undefined}
        tabIndex={tabIndex}
        className="flex max-w-full flex-col items-start justify-center gap-1 p-2 text-left text-neutral-100 transition-all duration-200 ease-[ease] hover:opacity-80 focus-visible:shadow-focus-nav focus-visible:outline-none max-lg:flex-row max-lg:gap-3 max-lg:py-1 max-lg:pl-0 max-sm:px-0"
      >
        <div className="text-white">
          <div className="flex items-center justify-start gap-[5px] whitespace-nowrap">
            <Icon20>{icon}</Icon20>
            <div className="text-label-s">{label}</div>
          </div>
        </div>
        <div className="flex-1 text-neutral-100 max-lg:text-left">
          <div className="text-body-s">{description}</div>
        </div>
      </a>
    </li>
  )
}

/* ---------- dropdown panels ---------- */

function ProductMenu({ tabIndex, onOpenVideo }) {
  return (
    <div className="flex justify-between">
      <div className="grid flex-1 grid-cols-10 max-lg:flex max-lg:flex-col max-lg:gap-3 max-lg:pb-2 max-sm:pt-1">
        <div className="col-span-6 flex flex-col items-start justify-start overflow-hidden px-4 pb-0 pt-4 max-lg:gap-2 max-lg:px-0 max-lg:pt-2 max-sm:pt-0">
          <OverlineTitle>Research</OverlineTitle>
          <ul role="list" className="mb-0 flex flex-1 items-stretch justify-start gap-3 max-lg:w-full max-lg:flex-col">
            <NavBadge sprite="library" frames={54} href={`${SITE}/swipe-file`} title="Swipe File" description="Save & share creative inspiration." tabIndex={tabIndex} />
            <NavBadge sprite="discovery" frames={62} href={`${SITE}/discovery`} title="Discovery" description="Ad search engine with over 100M ads." tabIndex={tabIndex} />
            <NavBadge sprite="spyder" frames={31} href={`${SITE}/spyder-ad-spy`} title="Spyder" description="Track and analyze competitor advertising 24/7" tabIndex={tabIndex} />
          </ul>
        </div>
        <div className="col-span-4 flex flex-col items-start justify-start overflow-hidden border-l border-nav-border px-4 pb-0 pt-4 max-lg:gap-2 max-lg:border-0 max-lg:px-0 max-lg:pt-0">
          <OverlineTitle>Analytics &amp; Production</OverlineTitle>
          <ul role="list" className="mb-0 flex flex-1 items-stretch justify-start gap-3 max-lg:w-full max-lg:flex-col">
            <NavBadge sprite="lens" frames={21} href={`${SITE}/lens-creative-analytics`} title="Lens" description="Advertising analytics for creative teams." tabIndex={tabIndex} />
            <NavBadge sprite="briefs" frames={55} href={`${SITE}/briefs`} title="Briefs" description="Turn inspiration into actionable briefs." tabIndex={tabIndex} />
          </ul>
        </div>
        <div className="col-span-10 flex flex-col items-start justify-start border-t border-nav-border p-4 max-lg:h-auto max-lg:gap-2 max-lg:border-0 max-lg:p-0">
          <OverlineTitle>Extend</OverlineTitle>
          <ul role="list" className="mb-0 grid w-full auto-cols-[1fr] grid-cols-[1fr_1fr_1fr_1fr] items-center justify-items-stretch gap-3 max-lg:ml-0 max-lg:items-start max-lg:justify-start">
            <SubLink href={`${SITE}/chrome-extension`} icon={<IconChromeExtension />} label="Chrome Extension" tabIndex={tabIndex} />
            <SubLink href={`${SITE}/mcp`} icon={<IconMcp />} label="MCP" tabIndex={tabIndex} />
            <SubLink href={`${SITE}/mobile-app`} icon={<IconMobileApp />} label="Mobile App" tabIndex={tabIndex} />
            <SubLink href={`${SITE}/api`} icon={<IconApi />} label="API" tabIndex={tabIndex} />
          </ul>
        </div>
      </div>
      {/* "What is Foreplay?" banner: ≥1280 only */}
      <div className="hidden w-[384px] max-w-[364px] flex-none flex-col xl:flex">
        <div className="flex min-h-[204px] flex-1 flex-col items-center justify-end gap-5 px-6 pt-6 xl:justify-start xl:border-l xl:border-nav-border xl:pt-20">
          <div className="relative z-2 flex max-w-[200px] flex-col items-center justify-start gap-1 text-center text-neutral-100">
            <div className="text-white">
              <div className="flex items-center justify-start gap-[5px] whitespace-nowrap">
                <Icon20>
                  <IconPlayCircle />
                </Icon20>
                <div className="text-label-s">What is Foreplay?</div>
              </div>
            </div>
          </div>
          <a
            href="#"
            tabIndex={tabIndex}
            aria-label="open lightbox"
            aria-haspopup="dialog"
            onClick={(e) => {
              e.preventDefault()
              onOpenVideo()
            }}
            className="relative inline-block w-full max-w-[240px] focus-visible:shadow-focus-nav focus-visible:outline-none xl:overflow-hidden xl:rounded-10"
          >
            <BgVideo
              className="inset-0 flex h-full w-full items-center justify-center xl:z-3 xl:h-[150px]"
              poster="/videos/FOREPLAY_V6_poster.0000000.jpg"
              sources={['/videos/FOREPLAY_V6_mp4.mp4', '/videos/FOREPLAY_V6_webm.webm']}
            >
              <div className="flex size-[50px] items-center justify-center rounded-circle bg-play-bubble backdrop-blur-10">
                <div className="size-5">
                  <IconPlay />
                </div>
              </div>
            </BgVideo>
          </a>
        </div>
      </div>
    </div>
  )
}

function SolutionsMenu({ tabIndex }) {
  const items = [
    ['/industries/ecommerce', <IconEcommerce />, 'E-Commerce & Retail'],
    ['/industries/agencies', <IconAgencies />, 'Agencies'],
    ['/industries/mobile-apps', <IconMobileApps />, 'Mobile Apps & Gaming'],
    ['/industries/b2b-saas', <IconB2b />, 'B2B & SaaS'],
    ['/industries/info-education-community', <IconInfoEducation />, 'Info, Education & Community'],
    ['/industries/freelancers-creators', <IconFreelancers />, 'Freelancers & Creators'],
  ]
  return (
    <div className="grid grid-cols-12 max-lg:flex max-lg:flex-col max-lg:gap-3 max-lg:pb-2 max-sm:pt-1">
      <div className="col-span-12 flex flex-col items-start justify-start gap-4 px-4 pb-5 pt-4 max-lg:gap-1 max-lg:p-0">
        <OverlineTitle>Foreplay is For;</OverlineTitle>
        <ul role="list" className="mb-0 grid grid-cols-4 gap-3 self-stretch max-lg:flex max-lg:flex-col max-lg:gap-2">
          {items.map(([path, icon, label]) => (
            <SolutionLink key={path} href={`${SITE}${path}`} icon={icon} label={label} tabIndex={tabIndex} />
          ))}
          <li className="flex flex-1 items-center justify-start gap-3" />
          <li className="flex flex-1 items-center justify-start gap-3" />
        </ul>
      </div>
    </div>
  )
}

function ResourcesMenu({ tabIndex }) {
  const listCls = 'mb-0 grid grid-cols-4 gap-3 self-stretch max-lg:flex max-lg:flex-col max-lg:gap-2'
  return (
    <div className="grid grid-cols-12 max-lg:flex max-lg:flex-col max-lg:gap-3 max-lg:pb-2 max-sm:pt-1">
      <div className="col-span-12 flex flex-col items-start justify-start gap-4 px-4 pb-5 pt-4 max-lg:gap-1 max-lg:p-0">
        <OverlineTitle>Learn</OverlineTitle>
        <ul role="list" className={listCls}>
          <ResourceLink href={`${SITE}/university`} icon={<IconUniversity />} label="University" description="Ad masterclasses" tabIndex={tabIndex} />
          <ResourceLink href={`${SITE}/fireside`} icon={<IconEvents />} label="Events & Webinars" description="Live workshops + Q&A" tabIndex={tabIndex} />
          <ResourceLink href={`${SITE}/experts`} icon={<IconExperts />} label="Experts" description="Free Swipe Files" tabIndex={tabIndex} />
          <ResourceLink href={`${SITE}/blog`} icon={<IconBlog />} label="Blog" description="Marketing news & tips" tabIndex={tabIndex} />
        </ul>
      </div>
      <div className="col-span-12 flex flex-col items-start justify-start gap-4 border-t border-nav-border px-4 pb-5 pt-4 max-lg:gap-1 max-lg:border-0 max-lg:p-0">
        <OverlineTitle>earn</OverlineTitle>
        <ul role="list" className={listCls}>
          <ResourceLink href={`${SITE}/affiliates`} icon={<IconAffiliate />} label="Affiliate Program" description="Make over $10k/mo reffering Foreplay" tabIndex={tabIndex} />
          <ResourceLink href={`${SITE}/work-with-brands`} icon={<IconWorkWithBrands />} label="Work with Brands" description="Get world-class creative services." tabIndex={tabIndex} />
          <ResourceLink href={`${SITE}/agency-directory`} icon={<IconAgencyDirectory />} label="Agency Directory" description="Discover the worlds best agencies." tabIndex={tabIndex} />
        </ul>
      </div>
    </div>
  )
}

/* ---------- dropdown wrapper (Webflow w-dropdown, click toggle) ---------- */

function NavDropdown({ id, label, open, onToggle, children }) {
  return (
    <div className="static p-0 text-left max-lg:mx-0 max-lg:flex max-lg:flex-col max-lg:items-start max-lg:justify-center">
      <div
        id={`w-dropdown-toggle-${id}`}
        role="button"
        tabIndex={0}
        aria-controls={`w-dropdown-list-${id}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onToggle()
          }
        }}
        className={`relative flex cursor-pointer select-none items-center justify-start gap-1 whitespace-nowrap rounded-10 py-1.5 pl-2.5 pr-1.5 text-left transition-all duration-500 ease-expo focus:outline-none focus-visible:shadow-focus-nav max-lg:mx-0 max-lg:self-stretch max-lg:px-0 max-lg:py-2 ${
          open
            ? 'text-neutral-0 max-lg:text-neutral-0' // .w--open wins over :hover in the original (later rule)
            : 'text-nav-link hover:text-neutral-50 max-lg:text-white max-lg:hover:text-neutral-50'
        }`}
      >
        <div className="text-navlink max-lg:font-display max-lg:text-navlink-mobile">{label}</div>
        <div className="size-5">
          <div className="flex size-full items-center justify-center">
            <DropdownChevron />
          </div>
        </div>
      </div>
      <nav
        id={`w-dropdown-list-${id}`}
        aria-labelledby={`w-dropdown-toggle-${id}`}
        inert={open ? undefined : ''}
        aria-hidden={open ? undefined : 'true'}
        className={`absolute left-0 right-0 top-full -mt-[5px] block min-w-full bg-transparent transition-all duration-500 ease-expo max-lg:mt-0 ${
          open
            ? 'pointer-events-auto z-5 translate-y-0 scale-100 opacity-100 max-lg:relative max-lg:flex max-lg:w-full max-lg:flex-col'
            : 'pointer-events-none -translate-y-2 scale-[0.96] opacity-0 max-lg:hidden'
        }`}
      >
        <div className="w-full overflow-hidden rounded-28 border border-nav-border bg-background max-lg:flex max-lg:flex-col max-lg:overflow-visible max-lg:border-0">
          {children(open ? undefined : -1)}
        </div>
      </nav>
    </div>
  )
}

/* ---------- YouTube lightbox (§1.2). Uses the local thumbnail; the video itself opens on YouTube
   so no external asset is loaded by this replica. ---------- */
function VideoLightbox({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])
  // Portalled to <body>: the sticky nav has a backdrop-filter, which would trap position:fixed.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="What is Foreplay? video"
      onClick={onClose}
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-lightbox-backdrop text-center text-white"
    >
      <button
        type="button"
        aria-label="close lightbox"
        onClick={onClose}
        className="absolute right-0 top-0 h-[2.6em] w-[4em] text-[24px] leading-none text-white opacity-80 hover:opacity-100"
      >
        ×
      </button>
      <a
        href="https://www.youtube.com/watch?v=k40dfSJUfhE"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="relative block aspect-[940/528] w-[940px] max-w-[96vw]"
      >
        <img src="/assets/yt-thumb.jpg" alt="What is Foreplay? (opens on YouTube)" className="size-full object-cover" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-[50px] items-center justify-center rounded-circle bg-play-bubble backdrop-blur-10">
            <span className="size-5">
              <IconPlay />
            </span>
          </span>
        </span>
      </a>
    </div>,
    document.body,
  )
}

/* ---------- Navbar ---------- */

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const navRef = useRef(null)

  // Webflow dropdowns close on outside click and on Escape; only one open at a time.
  useEffect(() => {
    const onDown = (e) => {
      if (!navRef.current?.contains(e.target)) setOpenDropdown(null)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenDropdown(null)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const toggle = (name) => () => setOpenDropdown((cur) => (cur === name ? null : name))

  const navlinkCls =
    'inline-block max-w-full rounded-10 px-2.5 py-1.5 text-nav-link no-underline transition-all duration-500 ease-expo hover:text-neutral-50 focus:shadow-focus-nav focus:outline-none max-lg:order-1 max-lg:px-0 max-lg:py-2 max-lg:text-white max-lg:hover:text-neutral-50 max-md:flex max-md:items-center max-md:justify-start'

  return (
    <div
      ref={navRef}
      role="banner"
      className="sticky top-0 z-100 bg-nav-bg text-neutral-100 backdrop-blur-nav max-md:bg-nav-bg-mobile max-md:backdrop-blur-none"
    >
      {/* .code-sprite: shared <symbol>s referenced by <use href> */}
      {/* Not display:none — gradients inside a hidden subtree don't paint in Chromium. */}
      <div className="pointer-events-none fixed left-0 top-0 size-0 overflow-clip">
        <SpriteDefs />
      </div>
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-10 max-lg:px-2">
        <div className="relative flex w-full items-center justify-between gap-9 p-4 max-lg:static max-lg:h-[72px] max-lg:py-3">
          <a href={`${SITE}/`} aria-label="home" className="relative max-w-full rounded-10 p-1 focus-visible:shadow-focus-nav focus-visible:outline-none max-lg:z-5">
            <div className="h-8 transition-all duration-200 ease-[ease] hover:opacity-80">
              <div className="flex items-center justify-center">
                <ForeplayLogo />
              </div>
            </div>
            <div className="sr-only">Foreplay</div>
          </a>

          {/* .nav-menu: inline on desktop; ≤991 an overlay below the bar that slides down (400ms ease) */}
          <nav
            role="navigation"
            className={`static flex-1 max-lg:absolute max-lg:left-0 max-lg:right-0 max-lg:top-[72px] max-lg:overflow-hidden ${
              menuOpen ? '' : 'max-lg:pointer-events-none'
            }`}
          >
            <div
              className={`flex justify-between max-lg:flex-col max-lg:items-start max-lg:gap-3 max-lg:rounded-b-28 max-lg:bg-background max-lg:px-5 max-lg:pb-6 max-lg:pt-3 max-lg:shadow-menu-inner max-sm:gap-10 max-sm:rounded-b-16 ${
                menuOpen
                  ? 'max-lg:visible max-lg:translate-y-0 max-lg:[transition:transform_400ms_ease]'
                  : 'max-lg:invisible max-lg:-translate-y-full max-lg:[transition:transform_400ms_ease,visibility_0s_linear_400ms]'
              }`}
            >
              <div className="flex items-center justify-start gap-3 max-lg:flex-col max-lg:items-stretch max-lg:self-stretch max-lg:text-left">
                <NavDropdown id={0} label="Product" open={openDropdown === 'product'} onToggle={toggle('product')}>
                  {(tabIndex) => <ProductMenu tabIndex={tabIndex} onOpenVideo={() => setVideoOpen(true)} />}
                </NavDropdown>
                <NavDropdown id={1} label="Solutions" open={openDropdown === 'solutions'} onToggle={toggle('solutions')}>
                  {(tabIndex) => <SolutionsMenu tabIndex={tabIndex} />}
                </NavDropdown>
                <NavDropdown id={2} label="Resources" open={openDropdown === 'resources'} onToggle={toggle('resources')}>
                  {(tabIndex) => <ResourcesMenu tabIndex={tabIndex} />}
                </NavDropdown>
                <a href={`${SITE}/pricing`} className={navlinkCls}>
                  <div className="text-navlink max-lg:font-display max-lg:text-navlink-mobile">Pricing</div>
                </a>
                <a href={`${SITE}/book-demo`} className={navlinkCls}>
                  <div className="text-navlink max-lg:font-display max-lg:text-navlink-mobile">Book a Demo</div>
                </a>
              </div>
              <div className="flex items-center justify-end gap-2 max-lg:flex-col max-lg:items-stretch max-lg:justify-start max-lg:self-stretch">
                <a
                  href={`${SITE}/pricing`}
                  className="relative z-5 flex max-w-full items-center justify-center rounded-10 bg-solid-0 p-2 font-semibold text-solid-900 no-underline transition-all duration-600 ease-expo hover:bg-solid-100 focus:shadow-focus-dark focus:outline-none active:bg-solid-200 active:text-neutral-200"
                >
                  <div className="relative z-2 px-1.5">
                    <div className="text-navlink font-550 max-lg:font-display max-lg:text-navlink-mobile max-lg:!font-550">Start free trial</div>
                  </div>
                  <ButtonIcon />
                </a>
              </div>
            </div>
          </nav>

          <div
            role="button"
            tabIndex={0}
            aria-label="menu"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setMenuOpen((o) => !o)
              }
            }}
            className={`relative hidden cursor-pointer select-none rounded-8 p-3 text-neutral-0 [-webkit-tap-highlight-color:transparent] focus:outline-none max-lg:block ${
              menuOpen ? 'z-5 bg-neutral-800' : ''
            }`}
          >
            <div className="size-5">
              <div className="flex size-full items-center justify-center">
                <IconHamburger />
              </div>
            </div>
          </div>
        </div>
      </div>
      {videoOpen && <VideoLightbox onClose={() => setVideoOpen(false)} />}
    </div>
  )
}
