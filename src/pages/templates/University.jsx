// /university/:slug — specs/template-university.md (two layouts chosen by entry.template)
import { useParams } from 'react-router-dom'
import CTA from '../../components/CTA.jsx'
import { useTabs } from '../../components/shared.jsx'
import { getEntry } from '../../components/templates/data.js'
import { paragraph, rng } from '../../components/templates/standin.js'
import { Container, SectionContainer, TemplateNotFound } from '../../components/templates/Layout.jsx'
import Breadcrumb from '../../components/templates/Breadcrumb.jsx'
import { FiresideHero } from '../../components/templates/CenteredHero.jsx'
import SplitSection from '../../components/templates/SplitSection.jsx'
import TiltCard from '../../components/templates/TiltCard.jsx'
import { VideoBox } from '../../components/templates/VideoBox.jsx'
import { noSubmit } from '../../components/templates/Form.jsx'

const U = '/assets/templates/university'
const FU_MARK = `${U}/670fe1a3b5fc3cea38b7d07b_f-u-logo-transparent-white.svg`
const PLAY_BLUE = `${U}/6716b43bc943259847c9212a_play-icon-blue.svg`
const HOURGLASS = `${U}/6717ccee952a632e3eefdfad_hourglass-icon.svg`

// Stand-in copy for S11 rows, sized by `paragraphChars`
const withBody = (entry) =>
  entry.sections.map((s, i) => {
    const r = rng(`${entry.slug}:section${i}`)
    const n = s.paragraphChars > 400 ? 3 : 1
    return { ...s, body: Array.from({ length: n }, () => paragraph(r, s.paragraphChars / n)) }
  })

/* ---------------- A. landing (/university/classes) ---------------- */

// `.cards-wrapper-new` order: _3.mobile-hide, _2.mobile-hide, centre, _2, _3 (spec: only the centre card remains ≤767)
const WRAPPER = ['opacity-25 max-md:hidden', 'opacity-50 max-md:hidden', '', 'opacity-50 max-md:hidden', 'opacity-25 max-md:hidden']

function CourseCard({ course, entry, index }) {
  const live = !course.comingSoon
  return (
    <TiltCard
      tilt={{ rot: 15, shineX: 90, shineY: 150 }}
      href={course.href}
      wrapperClass={`inline-block cursor-pointer ${WRAPPER[index]}`}
      cardClass={`group flex h-[375px] w-[250px] flex-col items-center justify-center overflow-hidden rounded-10 bg-cover bg-center no-underline shadow-[0_0_0_1px_rgba(255,255,255,.15)] ${
        live ? '' : 'bg-white-12'
      }`}
      cardStyle={{ backgroundImage: `url("${live ? entry.cardBg : entry.cardBgComingSoon}")` }}
      shineClass={live ? 'size-[125px] rounded-circle bg-solid-0 opacity-[.31] blur-[70px]' : undefined}
    >
      <div
        className={`relative flex size-full items-end justify-center px-[25px] pb-[25px] max-sm:px-6 max-sm:pb-6 ${
          live ? 'bg-[linear-gradient(transparent_54%,#000)]' : 'bg-[linear-gradient(transparent_54%,rgba(0,0,0,.54))]'
        }`}
      >
        {live && course.wordmark ? (
          <img src={course.wordmark} alt="" className="w-[200px]" />
        ) : (
          <div className="text-label-m text-neutral-0 opacity-20">Coming Soon</div>
        )}
      </div>
      <img src={FU_MARK} alt="" className={`absolute right-[15px] top-[15px] w-5 mix-blend-overlay ${live ? '' : 'opacity-10'}`} />
      {live && (
        // `.video-coming-soon-button-copy`: IX2 a-69/a-70 hover fade 0↔1, 200ms easeInOut
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 rounded-circle bg-[rgba(0,0,0,.8)] px-[15px] py-2.5 text-neutral-0 opacity-0 backdrop-blur-[5px] transition-opacity duration-200 ease-in-out group-hover:opacity-100">
          <img src={PLAY_BLUE} alt="" className="size-5" />
          <div className="whitespace-nowrap text-label-s">Watch Now</div>
        </div>
      )}
    </TiltCard>
  )
}

function Landing({ entry }) {
  return (
    <>
      <section id="product-hero-section" className="relative">
        <div
          className="absolute left-0 right-0 top-0 -z-[1] h-[50vh] bg-cover bg-center opacity-[.56]"
          style={{ backgroundImage: `url("${entry.heroBg}")` }}
        />
        <Container>
          <FiresideHero>
            <div className="pb-10 max-md:pb-6">
              <img src={entry.logo} alt="Foreplay University" className="h-[51px] w-[191px] max-sm:h-10 max-sm:w-auto" />
            </div>
            <div className="flex flex-col items-center gap-7 max-sm:gap-6">
              <div className="flex max-w-[900px] flex-col gap-4 max-sm:gap-3">
                <div className="text-neutral-0">
                  <h2 className="text-center font-display text-display-h2 max-lg:text-display-h2-lg max-sm:text-display-h2-sm">{entry.heroTitle}</h2>
                </div>
              </div>
            </div>
            <SectionContainer>
              <div className="flex items-center justify-center gap-6 py-[50px] max-lg:py-10 max-md:flex-col">
                {entry.courses.map((c, i) => (
                  <CourseCard key={i} course={c} entry={entry} index={i} />
                ))}
              </div>
            </SectionContainer>
          </FiresideHero>
        </Container>
      </section>

      <div>
        <SectionContainer>
          <SplitSection sections={withBody(entry)} />
        </SectionContainer>
      </div>
      <CTA />
    </>
  )
}

/* ---------------- B. course (/university/psychology-in-advertising) ---------------- */

const SubHead = ({ children }) => (
  <div className="py-[15px]">
    <h2 className="font-display text-[20px] font-semibold leading-7 tracking-[-0.11px] text-neutral-0">{children}</h2>
  </div>
)

const MODULE_TAB =
  'flex items-center gap-5 px-5 py-[15px] no-underline transition-all duration-200 hover:bg-neutral-900 hover:text-neutral-0 hover:saturate-100'

function Curriculum({ entry }) {
  const { active, linkProps, paneProps } = useTabs(entry.modules.length)
  return (
    <div className="pt-[75px]">
      <SubHead>Course Curriculum</SubHead>
      <div className="grid grid-cols-3 gap-[15px] max-lg:flex max-lg:flex-col">
        <div role="tablist" className="col-start-3 row-start-1 flex flex-col overflow-hidden rounded-[15px] border border-white-12 border-b-solid-700">
          {entry.modules.map((m, i) => (
            <a
              key={i}
              href="#"
              {...linkProps(i, 'fu-modules')}
              className={`${MODULE_TAB} h-20 border-b border-solid-700 last:border-b-0 xl:border-white-12 ${
                active === i ? 'bg-neutral-800 text-neutral-0 saturate-100' : 'text-neutral-100 saturate-0'
              }`}
            >
              <img src={m.icon} alt="" className="size-5 flex-none" />
              <div className="flex flex-col gap-[5px]">
                <div className="text-body-s">{m.label}</div>
                <h3 className="text-label-m">{m.title}</h3>
              </div>
            </a>
          ))}
        </div>
        <div className="col-span-2 col-start-1 row-start-1">
          {entry.modules.map((m, i) => (
            <div key={i} {...paneProps(i, 'fu-modules')} className={active === i ? 'tpl-fade-in' : ''}>
              {i === 0 ? (
                <VideoBox youtubeId={entry.trailerYoutubeId} title={m.title} frame="course" />
              ) : (
                <div className="relative overflow-hidden rounded-[15px] border border-white-12 border-b-solid-700">
                  <img src={entry.modulePosters[i - 1]} alt="" loading="lazy" className="block w-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center gap-2.5 rounded-circle bg-[rgba(0,0,0,.8)] px-[15px] py-2.5 text-neutral-0 backdrop-blur-[5px]">
                      <img src={entry.comingSoonIcon} alt="" className="size-5" />
                      <div className="text-label-s">Coming Soon</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <SubHead>{entry.materialsHeading}</SubHead>
        <div className="grid grid-cols-3 gap-4 max-lg:flex max-lg:flex-col max-sm:gap-3">
          {entry.materials.map((m) => (
            <a key={m.title} href={m.href} className={`${MODULE_TAB} h-14 rounded-10 border border-white-12 text-neutral-100 saturate-0`}>
              <img src={m.icon} alt="" className="size-5 flex-none" />
              <h3 className="flex-1 text-label-m">{m.title}</h3>
              <div className="text-body-s">{m.type}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function Course({ entry }) {
  return (
    <>
      <div>
        <SectionContainer>
          <div className="relative grid grid-cols-2 gap-x-20 gap-y-4 pb-[100px] pt-[70px] max-lg:gap-x-0 max-lg:gap-y-20">
            <div className="relative z-1 flex flex-col items-start max-lg:col-span-2">
              <Breadcrumb
                alwaysVisible
                pad="py-0"
                crumbs={[
                  { label: 'University', href: '/university', icon: entry.breadcrumbIcon, iconClass: 'size-5 xl:size-[25px]' },
                  { label: entry.breadcrumb },
                ]}
              />
              <img src={entry.wordmark} alt={entry.title} className="mt-[50px] h-[50px] w-auto max-sm:mt-[30px] max-sm:h-10" />
              <div className="mt-5 max-w-[600px] max-sm:mt-[30px]">
                <div className="text-neutral-100">
                  <p className="text-body-m">{paragraph(rng(`${entry.slug}:blurb`), 230)}</p>
                </div>
                <div className="mt-[15px] flex items-center gap-2.5 py-[5px] text-neutral-0">
                  <div className="text-body-m">Taught By</div>
                  <img src={entry.teacherAvatar} alt="" className="mr-1.5 size-[25px] rounded-circle object-cover" />
                  <div className="text-label-m">{entry.teacher}</div>
                </div>
              </div>
              <div className="mt-[50px] flex flex-col items-start max-sm:mt-[30px] max-sm:w-full max-sm:items-center">
                <div className="flex items-center gap-[5px] rounded-circle bg-neutral-700 py-1 pl-2.5 pr-3 text-neutral-50 max-sm:w-full max-sm:justify-center">
                  <img src={HOURGLASS} alt="" className="size-5" />
                  <div className="text-label-s">{entry.freeTag}</div>
                </div>
                <div className="mt-2.5 min-w-[500px] max-sm:w-full max-sm:min-w-0">
                  <form onSubmit={noSubmit} className="flex gap-2.5 max-sm:flex-col">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      aria-label="Email"
                      className="h-[38px] w-[350px] rounded-8 bg-neutral-700 px-3 py-2 text-[14px] font-medium leading-5 text-neutral-0 placeholder:text-neutral-200 hover:text-neutral-50 focus:outline-none max-sm:w-full"
                    />
                    <div className="min-w-[120px]">
                      <button
                        type="submit"
                        className="flex h-10 w-[120px] items-center justify-center rounded-10 bg-neutral-0 p-2 text-heading-m text-solid-900 transition-all duration-200 hover:bg-neutral-50 max-sm:w-full"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -top-[30%] right-0 z-0 h-[130%] w-[60%] max-lg:hidden"
              style={{ background: `linear-gradient(transparent, #000), url("${entry.branding}") bottom center / contain no-repeat` }}
            />
          </div>
          <Curriculum entry={entry} />
          <div className="pt-[100px]">
            <SplitSection sections={withBody(entry)} firstImageLeft />
          </div>
        </SectionContainer>
      </div>
      <CTA />
    </>
  )
}

export default function University() {
  const { slug } = useParams()
  const entry = getEntry('university', slug)
  if (!entry) return <TemplateNotFound />
  return entry.template === 'course' ? <Course entry={entry} /> : <Landing entry={entry} />
}
