import { Container } from '../shared/Layout.jsx'

const LEFT = '/assets/pages/swipe-file/642db6082db5f7803a7a121e_award-left.svg'
const RIGHT = '/assets/pages/swipe-file/642db608b19bd600e001723a_awward-right.svg'

const DECORATION =
  'absolute top-1/2 w-[12%] -translate-y-1/2 opacity-70 max-lg:h-full max-lg:w-[20%] max-sm:w-[40%]'

/* `.home-testimonial-wrapper`: logo (120 wide, max 48 tall), 24/36 quote (19.2 ≤767, 16/24 ≤479),
   48px avatar (40 ≤479) + name/role, award laurels left/right at opacity .7.
   { logo, logoAlt, quote, avatar, name, role } */
export default function Testimonial({ logo, logoAlt = '', quote, avatar, name, role }) {
  return (
    <Container>
      <div className="relative py-[120px] max-lg:py-[108px] max-md:py-20">
        <div className="mx-auto flex max-w-[80%] flex-col items-center justify-center gap-6 text-center max-lg:max-w-[640px]">
          <img
            className="max-h-12 w-[120px] object-contain max-sm:max-h-10 max-sm:w-24"
            src={logo}
            alt={logoAlt}
            loading="lazy"
          />
          <div className="text-quote text-body max-md:text-quote-md max-sm:text-quote-sm">{quote}</div>
          <div className="flex items-center gap-4">
            <img className="size-12 rounded-[5px] max-sm:size-10" src={avatar} alt="" loading="lazy" />
            <div className="text-left">
              <div className="text-label-m text-white">{name}</div>
              <div className="text-body-m text-neutral-100">{role}</div>
            </div>
          </div>
        </div>
        <img className={`${DECORATION} right-0 max-lg:right-[-10%]`} src={RIGHT} alt="" loading="lazy" />
        <img className={`${DECORATION} left-0 max-lg:left-[-10%]`} src={LEFT} alt="" loading="lazy" />
      </div>
    </Container>
  )
}
