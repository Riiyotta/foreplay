// /ships — specs/ships.md (legacy "2.0" theme: Circular / EB Garamond, dark header + white grid; no CTA)
import { Link } from 'react-router-dom'
import { standin } from '../components/misc/copy.js'
import { SHIPS_ITEMS } from '../components/misc/pageData.js'

const A = '/assets/pages/ships/'
const GARAMOND = "font-['Ebgaramond',serif] font-medium tracking-[-0.18px]"

// `.container-2-0.w-container`: max 1200, padding 0 50 (≤479 4%)
const Container20 = ({ children }) => <div className="mx-auto w-full max-w-[1200px] px-[50px] max-sm:px-[4%]">{children}</div>

function ShipsHeader() {
  return (
    <div
      className="relative overflow-hidden bg-background bg-[length:80%_auto] bg-[position:100%_0] bg-no-repeat pb-[120px] pt-[150px] max-lg:pb-[100px] max-sm:pb-[45px] max-sm:pt-[75px]"
      style={{ backgroundImage: `url("${A}64c13144e58ab54051f601ef_ships-header.avif")` }}
    >
      <Container20>
        <div className="flex items-center gap-4">
          <div className="flex w-[550px] flex-col items-start max-lg:w-full max-lg:items-center max-lg:text-center">
            <div className="mb-[15px] flex items-center max-lg:flex-col">
              <img src={`${A}64c1303544d31a8830884038_space-helmet.svg`} alt="" width="25" height="30" className="mr-2.5 h-[30px] w-[25px]" />
              <h1 className="misc-ships-name font-circular text-[22px] font-normal leading-[33px] tracking-[-0.18px] max-sm:text-[16px] max-sm:leading-6">
                Foreplay Ships
              </h1>
            </div>
            <h2 className={`misc-ships-title ${GARAMOND} text-[54px] leading-[67.5px] max-sm:text-[37px] max-sm:leading-[46.25px]`}>
              Recent Product Updates &amp; Releases
            </h2>
            <div className="mt-[5px] max-w-[650px]">
              <p className="text-[17.6px] font-[200] leading-[26.4px] text-misc-grey max-sm:text-[16px] max-sm:leading-6">
                {standin('ships-sub', 101)}
              </p>
            </div>
          </div>
        </div>
      </Container20>
    </div>
  )
}

function ShipsItem({ item }) {
  return (
    <div>
      <Link to={item.href} className="block transition-opacity duration-200 ease-[ease] hover:opacity-[.85]">
        <img
          src={item.img}
          alt=""
          loading="lazy"
          className="h-[300px] w-full rounded-10 object-cover max-lg:h-[400px] max-sm:h-[175px]"
        />
      </Link>
      <div className="pt-2.5">
        <p className="text-[12.8px] leading-[19.2px] text-misc-grey">{item.date}</p>
        <Link to={item.href} className="group no-underline">
          <h2 className={`mb-[5px] ${GARAMOND} text-[20px] leading-[26px] text-black transition-colors duration-200 ease-[ease] group-hover:text-cta`}>
            {item.title}
          </h2>
        </Link>
        <p className="text-[12.8px] font-[200] leading-[19.2px] text-black">{standin(`ships:${item.href}`, item.excerptLen)}</p>
      </div>
    </div>
  )
}

export default function Ships() {
  return (
    <>
      <ShipsHeader />
      <div className="relative z-10 min-h-[650px] overflow-hidden bg-neutral-0 py-[100px] max-lg:pb-[100px] max-lg:pt-[50px] max-sm:pb-[75px]">
        <Container20>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 max-lg:grid-cols-1">
            {SHIPS_ITEMS.map((it) => (
              <ShipsItem key={it.href} item={it} />
            ))}
          </div>
        </Container20>
      </div>
    </>
  )
}
