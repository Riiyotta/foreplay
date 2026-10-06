// /events/:slug — specs/template-events.md
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import CTA from '../../components/CTA.jsx'
import { Button } from '../../components/shared.jsx'
import { DropdownChevron } from '../../components/svgs.jsx'
import { getEntry, latestEvents } from '../../components/templates/data.js'
import { eventLearn, eventTranscript } from '../../components/templates/standin.js'
import { BlogContainer, Container, FullLine, ICONS, TemplateNotFound } from '../../components/templates/Layout.jsx'
import Breadcrumb from '../../components/templates/Breadcrumb.jsx'
import { BlogTitle, BlogTop } from '../../components/templates/TitleBlock.jsx'
import RichText from '../../components/templates/RichText.jsx'
import { VideoBox } from '../../components/templates/VideoBox.jsx'
import { EventMeta, UpcomingCard } from '../../components/templates/EventRow.jsx'

// `.fireside-subscribe-action` (padding 40/0/80, bottom stroke; ≤991 column, gap 24, padding-bottom 40)
function ActionRow({ icon, title, text, button, noStroke = false, children }) {
  return (
    <div
      className={`flex items-center pb-20 pt-10 max-lg:flex-col max-lg:items-start max-lg:gap-6 max-lg:pb-10 ${
        noStroke ? 'max-sm:pt-0' : 'border-b border-neutral-700'
      }`}
    >
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex gap-2">
          <img src={`${ICONS}/${icon}`} alt="" className="size-6" />
          <div className="text-neutral-0">
            <div className="text-label-l max-md:text-label-l-md">{title}</div>
          </div>
        </div>
        {text && (
          <div className="text-neutral-50">
            <div className="text-body-m">{text}</div>
          </div>
        )}
        {children}
      </div>
      {button}
    </div>
  )
}

// `.fireside-transcription-dropdown` (Webflow click dropdown, no animation; chevron rotates .5s)
function Transcript({ ev }) {
  const [open, setOpen] = useState(false)
  const lines = open ? eventTranscript(ev) : []
  return (
    <div className="flex border-b border-neutral-700 py-[15px]">
      <div className="relative z-1 flex w-full flex-col max-sm:py-[15px]">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="event-transcript"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center gap-2.5 rounded-8 bg-neutral-700 p-4 text-left text-neutral-0 hover:bg-neutral-600 active:bg-neutral-400"
        >
          <img src={`${ICONS}/transcription-icon-1.svg`} alt="" className="size-6" />
          <div className="flex-1">
            <div className="text-label-l">Transcription</div>
          </div>
          <span className="size-6">
            <DropdownChevron />
          </span>
        </button>
        {/* Live list bg is Webflow's #ddd (unreadable): fixed to transparent + 16px padding per spec. */}
        <nav id="event-transcript" hidden={!open} className="bg-transparent p-4">
          <div className="tpl-rtb">
            {lines.map((l, i) => (
              <div key={i}>
                <p>
                  {l.stamp}
                  <br />
                  {l.speaker}
                  <br />
                  {l.text}
                </p>
                <br />
                <br />
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default function Event() {
  const { slug } = useParams()
  const ev = getEntry('events', slug)
  if (!ev) return <TemplateNotFound />

  return (
    <>
      <section>
        <BlogContainer>
          <Breadcrumb crumbs={[{ label: 'Fireside Events', href: '/fireside' }, { label: ev.title }]} />
        </BlogContainer>
      </section>

      <section>
        <BlogContainer>
          <BlogTop>
            <BlogTitle>{ev.title}</BlogTitle>
            <EventMeta ev={ev} layout="head" tone="text-neutral-50" />
          </BlogTop>
        </BlogContainer>
        <FullLine />
      </section>

      <div>
        <BlogContainer>
          {/* .fireside-main-wrapper; lu.ma signup embed only for isUpcoming (none currently) */}
          <div className="mx-auto mt-10 flex max-w-[800px] flex-col gap-10 overflow-hidden rounded-28 border border-solid-700">
            {ev.isUpcoming && ev.lumaEmbed && (
              <div className="flex h-[450px] items-center justify-center bg-neutral-900 text-label-s text-neutral-300">Event signup embed</div>
            )}
            <VideoBox youtubeId={ev.youtubeId} title={ev.title} />
          </div>

          <div className="max-lg:flex max-lg:flex-col">
            <ActionRow
              icon="fireside-title-icon-1.svg"
              title="Never miss an event"
              text="Automatically get all future Firesides in your calendar."
              button={<Button variant="dark-secondary" href="https://lu.ma/foreplay" label="Subscribe to the Calendar" />}
            />
            <ActionRow icon="fireside-title-icon-2.svg" title="What you'll learn">
              <div className="text-neutral-50">
                <RichText id="blog-rtb" blocks={eventLearn(ev)} variant="base" />
              </div>
            </ActionRow>
            {ev.hasTranscript && <Transcript ev={ev} />}
          </div>
        </BlogContainer>
      </div>

      <aside>
        <div className="flex flex-col overflow-hidden py-[108px] max-lg:py-24 max-md:py-20">
          <BlogContainer>
            <div>
              <ActionRow
                noStroke
                icon="fireside-title-icon-3.svg"
                title="Watch More Replays"
                text="Continue browsing all event replays about advertising and creative strategy."
                button={<Button variant="dark-secondary" href="/fireside-replays" label="All Replays" />}
              />
            </div>
          </BlogContainer>
          <Container>
            <div className="grid grid-cols-3 gap-2.5 max-lg:grid-cols-2 max-md:grid-cols-1">
              {latestEvents(3).map((e) => (
                <UpcomingCard key={e.slug} ev={e} />
              ))}
            </div>
          </Container>
        </div>
      </aside>
      <CTA />
    </>
  )
}
