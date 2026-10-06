import { useState } from 'react'
import {
  ForeplayLogo,
  IconChromeReview,
  IconG2,
  CompareChevron,
  AdCountChart,
} from './svgs.jsx'
import { Overline, useSprite } from './shared.jsx'
import CalendarPopup from './CalendarPopup.jsx'

const SITE = ''

/* ---------- §8.1 product badges ---------- */
function ProductBadge({ sprite, frames, href, caption, name }) {
  const { spriteRef, hoverProps } = useSprite(frames)
  return (
    <li className="flex flex-1">
      <a
        href={href}
        data-sprite={sprite}
        data-frames={frames}
        className="flex min-w-[200px] max-w-full flex-1 items-center justify-start gap-3 px-2.5 py-2 text-footer-badge no-underline max-lg:whitespace-nowrap max-sm:px-0 max-sm:py-1"
        {...hoverProps}
      >
        <div ref={spriteRef} className={`sprite-image sprite-${sprite} size-11`} />
        <div>
          <div>
            <div className="text-body-s">{caption}</div>
          </div>
          <div className="text-white">
            <div className="text-label-m">{name}</div>
          </div>
        </div>
      </a>
    </li>
  )
}

/* ---------- §8.3 link columns ---------- */
const LINK = 'inline-block max-w-full flex-[0_1_auto] py-[3px] text-neutral-100 transition-opacity duration-200 ease-[ease] hover:text-white max-md:py-1.5'

function FooterLink({ href, label, external }) {
  return (
    <li>
      <a href={href} target={external ? '_blank' : undefined} className={LINK}>
        <div className="text-body-s">{label}</div>
      </a>
    </li>
  )
}

function Category({ title, children }) {
  return (
    <div className="flex flex-col gap-2.5 text-neutral-25 max-md:gap-3">
      <Overline>{title}</Overline>
      <ul role="list" className="mb-0 flex flex-col gap-1 max-md:pb-6 max-sm:pb-4 max-sm:pt-0">
        {children}
      </ul>
    </div>
  )
}

const COMPARE = [
  ['motion', 'Motion'],
  ['atria', 'Atria'],
  ['superads', 'Superads'],
  ['magic-brief', 'Magic Brief'],
  ['ad-nova', 'Adnova'],
  ['gethookd', 'Gethookd'],
  ['ad-library-ai', 'AdsLibrary.ai'],
  ['adscan', 'Adscan'],
  ['swipekit', 'SwipeKit'],
]

// Webflow dropdown with a static (in-flow) list.
function CompareDropdown() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((o) => !o)
  return (
    <li>
      <div className="relative z-[900] mx-auto inline-block w-full py-[3px] pr-0 text-left">
        <div
          id="w-dropdown-toggle-3"
          role="button"
          tabIndex={0}
          aria-controls="w-dropdown-list-3"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={toggle}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              toggle()
            }
          }}
          className="relative flex cursor-pointer select-none items-center whitespace-nowrap p-0 text-left text-[#222] focus:outline-none"
        >
          <div className="flex-[0_1_auto] py-[3px] text-neutral-100 transition-opacity duration-200 ease-[ease] hover:text-white max-md:py-1.5">
            <div className="text-body-s">Compare</div>
          </div>
          <div className="size-5">
            <div className="flex size-full items-center justify-center">
              <CompareChevron />
            </div>
          </div>
        </div>
        <nav
          id="w-dropdown-list-3"
          aria-labelledby="w-dropdown-toggle-3"
          inert={open ? undefined : ''}
          aria-hidden={open ? undefined : 'true'}
          className={`static min-w-full bg-transparent ${open ? 'block' : 'hidden'}`}
        >
          <ul role="list" className="mb-[10px]">
            {COMPARE.map(([slug, label]) => (
              <li key={slug} className="flex items-center gap-[7px]">
                <div className="h-px w-2.5 bg-neutral-600" />
                <a href={`${SITE}/comparison/${slug}`} className={LINK}>
                  <div className="text-body-s">{label}</div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </li>
  )
}


function ReviewBlock({ href, Icon, score, count }) {
  return (
    <a href={href} className="flex max-w-full items-center justify-start gap-3 transition-all duration-200 ease-[ease] hover:opacity-80">
      <div className="size-5">
        <div className="flex size-full items-center justify-center">
          <Icon />
        </div>
      </div>
      <div className="flex items-center justify-start gap-2 text-neutral-100">
        <div className="text-white">
          <div className="text-label-m">{score}</div>
        </div>
        <div className="text-label-m">{count}</div>
      </div>
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="mt-10 py-10 max-lg:pt-[120px] max-md:pt-24">
      <CalendarPopup />
      <div className="mx-auto w-full max-w-[1216px] px-10 max-lg:px-8 max-md:px-6">
        <div className="flex flex-col gap-11 pb-[60px] max-md:gap-10">
          <div className="flex justify-between gap-4">
            <ul role="list" className="mb-0 flex w-full flex-wrap justify-start gap-4">
              <ProductBadge sprite="library" frames={54} href={`${SITE}/swipe-file`} caption="Organize Ad Inspo" name="SwipeFile" />
              <ProductBadge sprite="discovery" frames={62} href={`${SITE}/discovery`} caption="Browse +100M Ads" name="Discovery" />
              <ProductBadge sprite="spyder" frames={31} href={`${SITE}/spyder-ad-spy`} caption="Track Competitors" name="Spyder" />
              <ProductBadge sprite="lens" frames={21} href={`${SITE}/lens-creative-analytics`} caption="Creative Analytics" name="Lens" />
              <ProductBadge sprite="briefs" frames={55} href={`${SITE}/briefs`} caption="Write briefs with AI" name="Briefs" />
            </ul>
          </div>

          <div className="h-px w-full bg-neutral-600" />

          <div className="flex items-center justify-start gap-[60px] max-md:flex-col max-md:items-start max-md:justify-center max-md:gap-6">
            <a href={`${SITE}/`} className="inline-block max-w-full">
              <div className="flex items-center justify-center">
                <ForeplayLogo />
              </div>
            </a>
            <div className="flex items-center justify-start gap-7 max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:gap-5">
              <ReviewBlock href={`${SITE}/chrome-extension`} Icon={IconChromeReview} score="4.9/5" count="251 Reviews" />
              <ReviewBlock href={`${SITE}/reviews`} Icon={IconG2} score="4.8/5" count="128 Reviews" />
            </div>
          </div>

          <div className="h-px w-full bg-neutral-600" />

          {/* 5 link/ad-count columns ≥992, 3 at ≤991, 2 at ≤767. (The original's "Ask AI" row, which forced
              5 columns at every width, was removed with the other external footer links.) */}
          <div className="grid auto-cols-[1fr] grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4 max-lg:grid-cols-[1fr_1fr_1fr] max-lg:gap-y-8 max-md:grid-cols-[1fr_1fr]">
            <Category title="Product">
              <FooterLink href={`${SITE}/swipe-file`} label="Swipe File" />
              <FooterLink href={`${SITE}/discovery`} label="Discovery" />
              <FooterLink href={`${SITE}/spyder-ad-spy`} label="Spyder" />
              <FooterLink href={`${SITE}/lens-creative-analytics`} label="Lens" />
              <FooterLink href={`${SITE}/briefs`} label="Briefs" />
              <FooterLink href={`${SITE}/chrome-extension`} label="Chrome Extension" />
              <FooterLink href={`${SITE}/mobile-app`} label="Mobile App" />
              <FooterLink href={`${SITE}/api`} label="API" />
              <FooterLink href={`${SITE}/mcp`} label="MCP" />
            </Category>
            <Category title="Resources">
              <FooterLink href={`${SITE}/university`} label="University" />
              <FooterLink href={`${SITE}/blog`} label="Blog" />
              <FooterLink href={`${SITE}/bounties`} label="Bounties" />
              <FooterLink href={`${SITE}/fireside`} label="Events & Webinars" />
              <FooterLink href={`${SITE}/agency-directory`} label="Agency Directory" />
              <FooterLink href={`${SITE}/experts`} label="Experts" />
              <CompareDropdown />
            </Category>
            <Category title="Solutions">
              <FooterLink href={`${SITE}/industries/ecommerce`} label="E-Commerce & Retail" />
              <FooterLink href={`${SITE}/industries/agencies`} label="Agencies" />
              <FooterLink href={`${SITE}/industries/mobile-apps`} label="Mobile Apps & Gaming" />
              <FooterLink href={`${SITE}/industries/b2b-saas`} label="B2B & SaaS" />
              <FooterLink href={`${SITE}/industries/info-education-community`} label="Info, Education & Community" />
              <FooterLink href={`${SITE}/industries/freelancers-creators`} label="Freelancers & Creators" />
            </Category>
            <div className="flex flex-col gap-5">
              <Category title="Company">
                <FooterLink href={`${SITE}/pricing`} label="Pricing" />
                <FooterLink href={`${SITE}/book-demo`} label="Book a Demo" />
                <FooterLink href={`${SITE}/careers`} label="Careers" />
              </Category>
              <Category title="Community">
                <FooterLink href={`${SITE}/affiliates`} label="Affiliate Program" />
                <FooterLink href={`${SITE}/reviews`} label="Wall of Love" />
              </Category>
            </div>

            {/* Ad Count: live API values are not fetched (no external requests); snapshot from capture. */}
            <div id="footer-text-ad" className="flex flex-col gap-5 max-sm:col-span-2 max-sm:max-w-[256px] max-sm:justify-self-start">
              <div className="flex flex-col gap-3">
                <div className="text-white">
                  <Overline>Ad Count</Overline>
                  <div className="h-1" />
                  <div id="footer-ad-total" className="font-display text-display-h5">
                    264,864,773
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    <AdCountChart />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-start gap-2">
                  <div className="size-2 rounded-2 bg-teal" />
                  <div className="flex-1">
                    <div className="flex-1 text-neutral-100">
                      <div className="text-body-s">Live</div>
                    </div>
                  </div>
                  <div className="text-white">
                    <div id="footer-ad-live">9,543,253</div>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <div className="size-2 rounded-2 bg-neutral-500" />
                  <div className="flex-1">
                    <div className="flex-1 text-neutral-100">
                      <div className="text-body-s">Historical</div>
                    </div>
                  </div>
                  <div className="text-white">
                    <div id="footer-ad-historical">255,321,520</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-neutral-600" />

          <div className="flex items-center justify-start gap-4 max-md:flex-col max-md:gap-6">
            <div className="flex flex-1 items-center gap-4 max-sm:flex-col max-sm:gap-3">
              <p className="text-body-s">© 2026 Foreplay, Inc. All rights reserved.</p>
              <a href={`${SITE}/page/privacy-policy`} className="inline-block max-w-full py-1 text-neutral-300 transition-opacity duration-200 ease-[ease] hover:text-neutral-25 max-sm:-mb-2">
                <div className="text-body-s">Privacy Policy</div>
              </a>
              <a href={`${SITE}/page/terms-of-service`} className="inline-block max-w-full py-1 text-neutral-300 transition-opacity duration-200 ease-[ease] hover:text-neutral-25 max-sm:-mb-2">
                <div className="text-body-s">Terms &amp; Conditions</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
