import { Button } from '../shared.jsx'
import { SectionContainer } from './Layout.jsx'
import SectionHead from './SectionHead.jsx'
import EnterpriseCard from './EnterpriseCard.jsx'

// `#api-pricing` block (api.md S5): 3 credit cards + Enterprise footer card. Extracted from pages/Api.jsx so
// /pre-black-friday can reuse it; only the section head differs (head = SectionHead props).
const A = '/assets/pages/api/'

const CREDITS = [
  { credits: '100,000 Credits', price: '$99' },
  { credits: '250,000 Credits', price: '$189' },
  { credits: '500,000 Credits', price: '$349' },
]

function CreditCard({ credits, price }) {
  return (
    <div className="w-full rounded-20 bg-background shadow-ring-neutral-600">
      <div className="flex flex-col gap-5 p-6">
        <div className="flex flex-col items-center justify-start gap-2 text-center">
          <div className="flex items-center gap-2.5 rounded-pill bg-neutral-800 py-1 pl-1 pr-2">
            <div className="size-7 flex-none">
              <img src={`${A}svg-icon-large-1yeu1rx.svg`} alt="" className="h-[30px] w-7" />
            </div>
            <div className="text-label-l text-white [text-wrap:balance] max-md:text-label-l-md">{credits}</div>
          </div>
        </div>
        <div className="h-px w-full bg-solid-700" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-baseline gap-1">
              <div className="font-display text-display-h5 text-white">{price}</div>
              <div className="flex-1 text-neutral-100">
                <div className="text-body-s">/month</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex w-full flex-col">
              <Button variant="dark-primary" href="https://app.foreplay.co/sign-up" label="Start Free Trial" iconFull />
              <div className="mt-2.5 flex justify-center rounded-[4px] bg-neutral-800 px-2 py-1 text-center">
                <div className="text-label-s text-neutral-300">10,000 Free credits during your trial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ApiPricing({ head }) {
  return (
    <div id="api-pricing">
      <SectionContainer>
        <div className="flex flex-col pb-[108px] pt-[72px] max-sm:pb-20 max-sm:pt-10">
          <div className="flex flex-col gap-[25px]">
            <SectionHead {...head} />
            <div className="flex flex-col">
              <div className="mt-12 grid grid-cols-3 place-items-center gap-[25px] max-lg:grid-cols-1 max-lg:gap-8 max-md:gap-6 max-sm:gap-5">
                {CREDITS.map((c) => (
                  <CreditCard key={c.credits} {...c} />
                ))}
                <EnterpriseCard
                  className="col-span-3 max-lg:col-span-1"
                  subtitle="For custom API use cases and large credit usage."
                  title="Custom"
                  items={['Highly discounted API credits', 'Priority in-app or Slack support', 'Early access to new features and integrations']}
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
