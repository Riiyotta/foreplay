// /2026-paid-lp — specs/2026-paid-lp.md (M1 hero variant + mobile-app S2 features; no footer — see App.jsx hideFooterOn)
import { Button } from '../components/shared.jsx'
import { NegativeSpacingBottom } from '../components/shared/Layout.jsx'
import MobileAppFeatures from '../components/shared/MobileAppFeatures.jsx'
import GradientHero from '../components/misc/GradientHero.jsx'
import { standin } from '../components/misc/copy.js'

export default function PaidLp2026() {
  return (
    <>
      <GradientHero
        container="wide"
        variant="product"
        overlineOutside
        overline="Mobile App"
        title="Stop Guessing What Ads to Make Next"
        paragraph={standin('paid-lp-hero', 148)}
        after={
          <div>
            <Button variant="dark-primary" href="https://app.foreplay.co/sign-up" label="Start Free Trial" iconFull />
          </div>
        }
      />
      <MobileAppFeatures />
      <NegativeSpacingBottom />
    </>
  )
}
