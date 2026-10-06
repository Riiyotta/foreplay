// /authors/:slug — specs/template-authors.md
import { useParams } from 'react-router-dom'
import CTA from '../../components/CTA.jsx'
import { eventsBySpeaker, getEntry, postsByAuthor } from '../../components/templates/data.js'
import { authorBio } from '../../components/templates/standin.js'
import { BlogContainer, FullLine, TemplateNotFound } from '../../components/templates/Layout.jsx'
import Breadcrumb from '../../components/templates/Breadcrumb.jsx'
import { BlogTop } from '../../components/templates/TitleBlock.jsx'
import RichText from '../../components/templates/RichText.jsx'
import { ProfileHeadshot, SocialIconList } from '../../components/templates/Profile.jsx'
import { BlogList } from '../../components/templates/CardGrid.jsx'
import { FiresideReplayRow } from '../../components/templates/EventRow.jsx'

const SOCIAL_ORDER = ['facebook', 'instagram', 'linkedin', 'tiktok', 'twitter', 'youtube']

// `.blog-feed` (flex col, gap 36, padding-bottom 120) with a `.blog-related-head` h2
const Feed = ({ title, children }) => (
  <div>
    <BlogContainer>
      <div className="flex flex-col gap-9 pb-[120px]">
        <div className="text-neutral-0">
          <h2 className="text-label-l font-550">{title}</h2>
        </div>
        {children}
      </div>
    </BlogContainer>
  </div>
)

export default function Author() {
  const { slug } = useParams()
  const author = getEntry('authors', slug)
  if (!author) return <TemplateNotFound />
  const posts = postsByAuthor(author.slug)
  const replays = eventsBySpeaker(author.slug)
  const bio = authorBio(author)

  return (
    <>
      <section>
        <BlogContainer>
          <Breadcrumb crumbs={[{ label: 'Authors', href: '#' }, { label: author.name }]} />
        </BlogContainer>
      </section>

      <section>
        <BlogContainer>
          <BlogTop>
            <div className="flex flex-col gap-2">
              <div className="text-neutral-0">
                <div className="flex flex-col gap-2.5">
                  <ProfileHeadshot src={author.avatar} alt={author.name} />
                  <div className="flex flex-col gap-[5px]">
                    <h1 className="font-display text-display-h4">{author.name}</h1>
                    {author.role && (
                      <div className="text-neutral-100">
                        <div className="text-label-m">{author.role}</div>
                      </div>
                    )}
                    {author.website && (
                      <div>
                        <a
                          href={author.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline text-[14px] leading-5 text-neutral-100 transition-all duration-200 hover:text-neutral-0 hover:underline"
                        >
                          {author.website}
                        </a>
                      </div>
                    )}
                  </div>
                  {bio.length > 0 && <RichText blocks={bio} variant="plain" className="text-body-m" />}
                  <SocialIconList socials={author.socials} order={SOCIAL_ORDER} />
                </div>
              </div>
            </div>
          </BlogTop>
        </BlogContainer>
        <FullLine />
      </section>

      <div className="py-[25px]" />

      {/* Empty lists: Webflow's grey "No items found." box is hidden (spec recommendation) */}
      {posts.length > 0 && (
        <Feed title="Blogs">
          <BlogList posts={posts} />
        </Feed>
      )}
      {replays.length > 0 && (
        <Feed title="Fireside Replays">
          <div className="flex flex-col gap-6">
            {replays.map((ev) => (
              <FiresideReplayRow key={ev.slug} ev={ev} />
            ))}
          </div>
        </Feed>
      )}
      <CTA />
    </>
  )
}
