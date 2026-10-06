import { Button } from './shared.jsx'

// CLONE_SPEC §7 — final CTA. Optional overrides (comparison / industries templates):
// title, paragraph, secondary={label, href}. Omitted → homepage copy/buttons unchanged.
export default function CTA({
  title = 'Ready to ship more winning ads?',
  paragraph = 'Unlock the power of Foreplay with an unrestricted 7 day free trial.',
  secondary = { label: 'View Pricing', href: '/pricing' },
}) {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto w-full max-w-section px-10 max-lg:px-8 max-md:px-6">
        <div className="flex flex-col items-center justify-start gap-9 pt-[108px] max-sm:items-stretch max-sm:pt-20">
          <div className="relative z-2 mx-auto flex w-full max-w-[960px] flex-col items-center justify-start gap-3 text-center">
            <div className="text-neutral-0 [text-wrap:balance]">
              <h2 className="font-display text-display-h2 max-lg:text-display-h2-lg max-sm:text-display-h2-sm">
                {title}
              </h2>
            </div>
            <div className="max-w-[640px] text-neutral-300 [text-wrap:balance]">
              <div className="flex-1 text-neutral-100">
                <p className="text-body-l">{paragraph}</p>
              </div>
            </div>
          </div>
          <div className="relative z-2 flex items-center justify-start gap-3 max-sm:grid max-sm:grid-cols-1 max-sm:self-stretch">
            <Button variant="dark-primary" href="https://app.foreplay.co/sign-up" label="Start free trial" iconFull />
            <Button variant="dark-secondary" href={secondary.href} label={secondary.label} icon={false} />
          </div>
          <div className="-mx-10 -my-[8%] max-md:-mx-20 max-md:mb-[-20%] max-sm:mx-[-64px] max-sm:mt-0">
            <img
              className="max-w-none max-lg:h-auto max-lg:w-full"
              src="/assets/680a4b467abdcf40d0d0fa8b_home-cta.webp"
              srcSet="/assets/680a4b467abdcf40d0d0fa8b_home-cta.webp 2880w"
              sizes="(max-width: 1439px) 100vw, 1440px"
              width="1440"
              height="924"
              alt="Two people looking at laptop, Foreplay dashboard is displayed."
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
