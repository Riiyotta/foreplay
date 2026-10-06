import {
  LogoHelloFresh,
  LogoCanva,
  LogoAG1,
  LogoClickFunnels,
  LogoTrueClassic,
  LogoTheRidge,
  LogoParamount,
  LogoPearmill,
  LogoCommonThread,
  LogoVaynerMedia,
  LogoLunar,
  LogoKasper,
  LogoKlientBoost,
  LogoDentsu,
} from '../svgs.jsx'
import { Overline } from '../shared.jsx'

export const LOGOS = [
  LogoHelloFresh,
  LogoCanva,
  LogoAG1,
  LogoClickFunnels,
  LogoTrueClassic,
  LogoTheRidge,
  LogoParamount,
  LogoPearmill,
  LogoCommonThread,
  LogoVaynerMedia,
  LogoLunar,
  LogoKasper,
  LogoKlientBoost,
  LogoDentsu,
]

// `.home-hero-bottom` — "Powering +10,000 Social Ad Teams & Agencies" + 14-logo grid (CLONE_SPEC §2).
// Shared by the homepage Hero and /book-demo.
export default function LogoStrip() {
  return (
      <div className="relative flex flex-col gap-10 text-center [text-wrap:balance]">
        <div className="flex-1 text-neutral-100">
          <Overline>Powering +10,000 Social Ad Teams &amp; Agencies</Overline>
        </div>
        <div className="grid grid-cols-7 gap-4 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:max-w-full max-sm:grid-cols-3 max-sm:place-items-center max-sm:gap-x-0 max-sm:gap-y-6">
          {LOGOS.map((Logo, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-3 text-neutral-50 transition-all duration-200 ease-[ease] hover:text-neutral-100 max-md:px-0 max-sm:py-2"
            >
              <div className="flex h-7 items-center justify-center max-md:h-6 max-md:scale-[.85] max-sm:h-3 max-sm:scale-75">
                <Logo />
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}
