import { useState } from 'react'
import { Button } from '../components/shared.jsx'
import { ProductHeroShell } from '../components/product/ProductHero.jsx'
import { WhiteBlock, SectionContainer } from '../components/shared/Layout.jsx'
import { GridRow, RowContent } from '../components/shared/Rows.jsx'
import useFadeTabs from '../components/shared/useFadeTabs.js'
import Faq from '../components/shared/Faq.jsx'

// specs/mcp.md — MCP hero with Claude / ChatGPT setup tabs (Webflow fade 100/300ms), copy-to-clipboard
// buttons, white block of 4 alternating rows, FAQ. Long copy is stand-in text.
const M = '/assets/pages/mcp/'
const MCP_URL = 'https://public.api.foreplay.co/mcp'
const Icon20 = ({ h }) => <img className="size-5" src={`${M}svg-icon-20-${h}.svg`} alt="" />

// `[data-copy]` — writes the URL to the clipboard and shows "Copied!" for 1500ms (_shared-pages.md §4)
function CopyButton({ text }) {
  const [label, setLabel] = useState(text)
  return (
    <a
      href="#"
      data-copy={text}
      onClick={async (e) => {
        e.preventDefault()
        try {
          await navigator.clipboard.writeText(text)
          setLabel('Copied!')
          setTimeout(() => setLabel(text), 1500)
        } catch (err) {
          console.error('Copy failed', err)
        }
      }}
      className="mt-3 flex max-w-full items-center justify-start gap-2 rounded-8 bg-white-08 py-2 pl-3 pr-2 text-white transition-all duration-200 hover:bg-white-17"
    >
      <div className="flex flex-1 gap-1.5">
        <div className="copy-label text-label-s text-white">{label}</div>
      </div>
      <Icon20 h="1tuwbiv" />
    </a>
  )
}

function PathButton({ parts, href }) {
  return (
    <a
      href={href}
      target={href === '#' ? undefined : '_blank'}
      rel="noreferrer"
      className="mt-3 flex max-w-full items-center justify-start gap-2 rounded-8 bg-white-08 py-2 pl-3 pr-2 text-white transition-all duration-200 hover:bg-white-17"
    >
      <div className="flex flex-1 gap-1.5">
        {parts.map((p, i) => (
          <div key={p} className="flex gap-1.5">
            {i > 0 && <Icon20 h="1fgtg90" />}
            <div className="text-label-s text-white">{p}</div>
          </div>
        ))}
      </div>
      <Icon20 h="139p2q6" />
    </a>
  )
}

function Step({ n, title, text, action }) {
  return (
    <div className="rounded-t-24 bg-white-12 p-6 max-lg:rounded-20">
      <div className="flex items-start gap-3">
        <div className="flex size-7 flex-none items-center justify-center rounded-8 bg-white-12 p-1 text-solid-0">
          <div className="text-label-m text-white">{n}</div>
        </div>
        <div className="flex flex-col items-start gap-1.5">
          <div className="text-label-m text-white">{title}</div>
          <div className="text-body-m text-neutral-100">{text}</div>
          {action}
        </div>
      </div>
    </div>
  )
}

const TABS = [
  {
    label: 'Claude',
    logo: `${M}6a02366845ce81bd09b4dd99_claude-logo.svg`,
    alt: 'claude logo',
    steps: [
      { title: 'Open Claude Settings', text: 'Launch the desktop app or open claude.ai and go to:', action: <PathButton parts={['Settings', 'Connectors']} href="https://claude.ai/customize/connectors" /> },
      { title: 'Add a custom connector', text: 'Name it "Foreplay" and then copy/paste the URL:', action: <CopyButton text={MCP_URL} /> },
      { title: 'Connect and sign in', text: 'Click connect, sign in with your account and approve access. The tools appear in your next chat.' },
    ],
  },
  {
    label: 'ChatGPT',
    logo: `${M}6a031b5d19c25920d6bb1b5d_chat-gpt-green.svg`,
    alt: 'chat gpt icon',
    steps: [
      { title: 'Enable Dev Mode', text: 'Launch settings, Click Apps → Advanced and enable dev mode.', action: <PathButton parts={['Settings', 'Apps', 'Advanced']} href="#" /> },
      { title: 'Create a Custom App', text: 'Name it "Foreplay MCP" and then copy/paste the URL:', action: <CopyButton text={MCP_URL} /> },
      { title: 'Connect and sign in', text: 'Click connect, sign in with your account and approve access. The tools appear in your next chat.' },
    ],
  },
]

const ROWS = [
  { img: '6a031a0dcd962140ba2dc4b8_mcp-automation.webp', alt: 'competitor analysis data mcp screenshot', overline: 'SKILLS & WORKFLOWS', title: 'Automate Your Research & Ideation Work', body: 'Ask your assistant to pull competitor ads, summarize the angles they use and draft fresh concepts, all in one conversation.' },
  { img: '6a031a0d97527e45f72b5799_mcp-discovery.webp', alt: 'claude foreplay mcp screenshot', overline: 'BRAND TRACKING', title: 'Discover Unknown Brands & Competitiors', body: 'Describe your market and let the assistant search the ad library for brands you have not come across yet, with examples.', mediaFirst: true },
  { img: '6a031a0d3613031e0a9a1440_mcp-interactions.webp', alt: 'mcp interactions screenshot', overline: 'INTERACTIVE ARTIFACTS', title: 'Proper Human-In-The-Loop Interactions', body: 'Review results as interactive cards, pick the ads you like and steer the next step.' },
  { img: '6a031a0dc36b44616c24e3e9_mcp-ad-library.webp', alt: 'mcp ad library screenshot', overline: 'LIVE AD LIBRARY', title: 'Access 200M Ads in Real-Time', body: 'Every question is answered with live data from the full ad library, so results always reflect what is running now.', mediaFirst: true },
]

const FAQ = [
  { q: 'How current is the data?', a: <p>The MCP reads from the same library you use in the app, which is updated continuously. Newly launched ads from tracked brands usually show up within a day of going live.</p> },
  {
    q: 'Does it work with ChatGPT too, or just Claude?',
    a: <p>Both. Any client that supports custom MCP connectors can use it. The setup steps differ slightly between apps, which is why the guide above has a tab for each one. Once connected, the same tools and data are available whichever assistant you prefer to work in.</p>,
  },
  {
    q: 'Can Claude access my swipe file and boards?',
    a: <p>Yes. After you sign in, the assistant can read the boards and saved ads in your workspace, so you can ask it to summarize a board, compare saved ads or find patterns across your own research. It only sees the workspaces your account has access to.</p>,
  },
  {
    q: 'What ad data does Claude/Chat have access to?',
    a: <p>The assistant can search the public ad library, read ads from brands you track and open the boards in your workspace. For each ad it can see the creative, copy, platform, run dates, landing page and any transcript or tags that have been added. It cannot change billing or account settings, and it only acts on the requests you make during a conversation.</p>,
  },
  {
    q: 'What can I actually do with the Foreplay MCP?',
    a: <p>Typical uses include researching a new category, building a list of competitors, summarizing the hooks a brand relies on, pulling examples for a brief and turning findings into a short report. Because the assistant can chain several searches together, you can ask open questions like which angles are most common in a niche and get an answer backed by real ads. You can also save the results back to a board so the rest of your team can pick up where the conversation left off without repeating the research.</p>,
  },
  {
    q: 'How does Foreplay connect to Claude or ChatGPT?',
    a: <p>The connection uses the Model Context Protocol. You add the Foreplay server URL as a custom connector in your assistant, sign in with your Foreplay account and approve access. From then on the assistant can call Foreplay tools whenever a question needs ad data. You can remove the connector at any time from the same settings page to revoke access immediately.</p>,
  },
]

export default function Mcp() {
  const { current, shown, paneStyle, select } = useFadeTabs(0)
  return (
    <>
      <ProductHeroShell
          dots={false}
          sticky={
            <div className="flex flex-col items-center gap-7 pb-[42px] max-sm:relative max-sm:gap-6 max-sm:pb-6">
              <div className="flex items-center gap-1 rounded-pill bg-neutral-700 py-1.5 pl-1.5 pr-2.5">
                <img className="size-6" src={`${M}6a02344c3fd0db1c64ab3488_mcp-icon.svg`} alt="mcp logo white" loading="lazy" />
                <h1 className="text-label-m text-white">MCP</h1>
              </div>
              <div className="flex max-w-[900px] flex-col items-center gap-4 max-sm:gap-3">
                <h3 className="hero-title-fill font-display text-display-h1 text-hero-title [text-wrap:balance] max-md:text-display-h1-md max-sm:text-display-h1-sm">
                  Turn chats & agents into your creative research expert
                </h3>
                <div className="max-w-[512px]">
                  <p className="text-body-l text-neutral-100">
                    Connect your assistant to live ad data and let it research competitors, trends and ideas for you.
                  </p>
                </div>
              </div>
              <div className="relative z-2 flex items-center gap-3 max-sm:grid max-sm:w-full max-sm:grid-cols-1">
                <Button variant="dark-primary" href="https://app.foreplay.co/sign-up" label="Start now" iconFull />
                <Button variant="dark-secondary" href="/pricing" label="View Pricing" />
              </div>
            </div>
          }
        >
          <div className="-mb-2.5 w-full">
            <div className="relative flex flex-col items-center">
              <div role="tablist" className="relative flex items-center gap-1 rounded-pill bg-white-08 p-1">
                {TABS.map((t, i) => (
                  <a
                    key={t.label}
                    href={`#mcp-tab-${i}`}
                    role="tab"
                    aria-selected={current === i}
                    onClick={(e) => {
                      e.preventDefault()
                      select(i)
                    }}
                    className={`relative flex max-w-full items-center justify-center gap-2 rounded-pill px-4 py-[9px] text-body transition-all duration-200 ${
                      current === i ? 'bg-white-12' : 'bg-transparent hover:bg-white-08'
                    }`}
                  >
                    <img className="size-5" src={t.logo} alt={t.alt} loading="lazy" />
                    <div className="text-label-m text-body">{t.label}</div>
                  </a>
                ))}
              </div>
              <div className="relative w-full overflow-hidden">
                <div role="tabpanel" className="relative pt-12" style={paneStyle}>
                  <div className="grid grid-cols-3 gap-4 text-left max-lg:mb-[31px] max-lg:flex max-lg:flex-col">
                    {TABS[shown].steps.map((s, i) => (
                      <Step key={s.title} n={i + 1} {...s} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </ProductHeroShell>

      <WhiteBlock className="[&>div]:pt-0">
        <SectionContainer>
          <div className="py-12 max-lg:py-8 max-md:py-6">
            <div className="flex flex-col gap-[100px]">
              {ROWS.map((r) => (
                <div key={r.title} className="flex flex-col gap-20">
                  <GridRow img={`${M}${r.img}`} alt={r.alt} mediaFirst={r.mediaFirst}>
                    <RowContent
                      overline={r.overline}
                      overlineClass="text-solid-400"
                      title={r.title}
                      titleAs="h2"
                      body={r.body}
                      button={{ label: 'Connect MCP', href: 'https://app.foreplay.co/sign-up' }}
                    />
                  </GridRow>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </WhiteBlock>

      <Faq
        title="Questions about the MCP?"
        body="Most common questions about the Foreplay MCP connection and features."
        items={FAQ}
      />
    </>
  )
}
