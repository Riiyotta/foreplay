// /experts/:slug — specs/template-experts.md
import { useParams } from 'react-router-dom'
import CTA from '../../components/CTA.jsx'
import { Button } from '../../components/shared.jsx'
import { getEntry, moreExperts } from '../../components/templates/data.js'
import { paragraph, rng } from '../../components/templates/standin.js'
import { ICONS, SectionContainer, SmartLink, TemplateNotFound } from '../../components/templates/Layout.jsx'
import Breadcrumb from '../../components/templates/Breadcrumb.jsx'
import { ProfileHeadshot, SocialIconList } from '../../components/templates/Profile.jsx'
import LottieLoader from '../../components/templates/LottieLoader.jsx'

const SOCIAL_ORDER = ['instagram', 'linkedin', 'tiktok', 'twitter', 'website', 'youtube']

// Fake browser window (`.expert-board-wrapper[-large]`): white top bar + 3 dots, board bg, frosted `.blur` overlay.
function BoardWindow({ href, image, large = false, children }) {
  return (
    <SmartLink
      href={href}
      className={`flex w-full cursor-pointer flex-col overflow-hidden rounded-[5px] border border-black/[.12] no-underline transition-all duration-400 ${
        large
          ? 'h-[350px] hover:shadow-[1px_1px_30px_#00000040] max-lg:h-[400px] max-md:h-[300px] max-sm:h-[200px]'
          : 'h-[200px] hover:shadow-[1px_1px_6px_#0000001a] max-md:h-[300px] max-sm:h-[200px]'
      }`}
    >
      <div className="flex border-b border-grey-stroke bg-solid-0 py-2.5 pl-2.5">
        <div className="mr-1 size-[7px] rounded-circle bg-[#ec6960]" />
        <div className="mr-1 size-[7px] rounded-circle bg-[#f5bf50]" />
        <div className="mr-1 size-[7px] rounded-circle bg-[#61c554]" />
      </div>
      <div
        className="flex-1 bg-cover bg-[0_0]"
        style={image ? { backgroundImage: `url("${image}")` } : { backgroundColor: 'rgba(0,0,0,.04)' }}
      >
        <div className="flex size-full items-center justify-center bg-[linear-gradient(rgba(255,255,255,.49),rgba(255,255,255,.49))] backdrop-blur-10">
          {children}
        </div>
      </div>
    </SmartLink>
  )
}

const PILL = 'flex items-center rounded-8 border border-solid-200 bg-solid-0 px-3.5 py-[7px] leading-4 text-black transition-all duration-200'

function ExpertCard({ ex }) {
  return (
    <div>
      <BoardWindow href={`/experts/${ex.slug}`} image={ex.boardImage}>
        {ex.comingSoon ? (
          <div className={PILL}>
            <LottieLoader className="mr-2.5 w-5" />
            <div className="text-label-s opacity-[.82]">Coming Soon</div>
          </div>
        ) : (
          <div className={PILL}>
            <img src={`${ICONS}/expert-unlock-lock.svg`} alt="" className="mr-2.5 h-[18px] w-[13px]" />
            <div className="text-label-s">Unlock Swipe File</div>
          </div>
        )}
      </BoardWindow>
      <div className="flex pt-5">
        <div
          className="size-[50px] flex-none rounded-8 border border-grey-stroke bg-cover bg-center"
          style={ex.avatar ? { backgroundImage: `url("${ex.avatar}")` } : undefined}
        />
        <div className="flex flex-col justify-center pl-2.5 text-solid-700">
          <div className="text-label-m">{ex.name}</div>
          <div className="text-body-s">{ex.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Expert() {
  const { slug } = useParams()
  const ex = getEntry('experts', slug)
  if (!ex) return <TemplateNotFound />

  return (
    <>
      <div className="overflow-hidden">
        <SectionContainer>
          <div className="flex flex-col items-center pb-[120px] pt-[75px] max-md:pb-20 max-md:pt-16 max-sm:pt-10">
            <div className="grid grid-cols-[minmax(min-content,1fr)_1fr] place-items-center justify-between gap-10 [justify-items:stretch] max-lg:flex max-lg:flex-col max-lg:items-center max-md:pb-20 max-sm:pb-0">
              <div className="flex max-w-[960px] flex-col items-start justify-center gap-3 text-left [text-wrap:balance]">
                <Breadcrumb crumbs={[{ label: 'Experts', href: '/experts' }, { label: ex.name }]} />
                <ProfileHeadshot src={ex.avatar} alt={ex.name} />
                <div className="text-neutral-0">
                  <h1 className="font-display text-display-h2 max-lg:text-display-h2-lg max-sm:text-display-h2-sm">{ex.name}</h1>
                </div>
                <SocialIconList socials={ex.socials} order={SOCIAL_ORDER} />
                <div className="text-neutral-50">
                  <div className="text-body-m">{ex.role}</div>
                </div>
                <div className="mt-6 max-sm:self-stretch">
                  <div className="flex gap-3 max-sm:grid max-sm:grid-cols-1">
                    <Button variant="dark-primary" href={ex.swipeFileUrl} label={ex.ctaLabel || 'Access Free Swipe File'} iconFull />
                  </div>
                </div>
              </div>
              <BoardWindow href={ex.swipeFileUrl} image={ex.boardImage} large />
            </div>
          </div>
        </SectionContainer>
      </div>

      <section>
        <div className="p-2">
          <div className="relative z-2 overflow-hidden rounded-36 bg-solid-0 text-solid-700 max-sm:rounded-16">
            <SectionContainer id="featured-experts">
              <div className="flex flex-col gap-[72px] py-20 max-lg:py-16 max-sm:pb-6 max-sm:pt-10">
                <div className="grid grid-cols-1 gap-4 max-sm:gap-6">
                  <div className="flex max-w-[720px] flex-col items-start gap-3 text-left max-md:gap-2">
                    <h2 className="font-display text-display-h3 text-solid-700">More ad creative experts</h2>
                    <div className="text-solid-600">
                      <p className="text-body-l">{paragraph(rng('experts:intro'), 110)}</p>
                    </div>
                  </div>
                </div>
                <div className="max-sm:mt-8">
                  <div className="grid grid-cols-3 gap-[25px] max-lg:gap-6 max-md:grid-cols-1 max-md:gap-y-12 max-sm:gap-y-10">
                    {moreExperts(ex.slug).map((m) => (
                      <ExpertCard key={m.slug} ex={m} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="py-12 max-lg:py-8 max-md:py-6" />
            </SectionContainer>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
