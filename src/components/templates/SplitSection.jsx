// S11 LeftRightSection (template-university.md A.2 / B.3; same component as api/mcp pages).
import { Button } from '../shared.jsx'

/** sections: [{title, image, icon?, button?, body: string[]}] — rows alternate content/image, starting with `firstImageLeft`. */
export default function SplitSection({ sections, firstImageLeft = false }) {
  return (
    <div className="flex flex-col gap-20">
      {sections.map((s, i) => {
        const imageLeft = firstImageLeft ? i % 2 === 0 : i % 2 === 1
        const content = (
          <div key="c" className="flex w-[512px] max-w-full flex-none flex-col items-start justify-center gap-8 max-md:w-full max-sm:gap-6">
            <div className="flex max-w-[720px] flex-col items-start gap-3 text-left max-md:gap-2">
              {s.icon && <img src={s.icon} alt="" className="mb-2.5 max-h-[50px] w-auto" />}
              <div className="text-neutral-0">
                <h2 className="font-display text-display-h3">{s.title}</h2>
              </div>
              <div className="max-w-[512px] text-neutral-100">
                {s.body.map((p, k) => (
                  <p key={k} className="text-body-l">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            {s.button && <Button variant="dark-secondary" href={s.button.href} label={s.button.label} />}
          </div>
        )
        const image = (
          <div key="i" className="w-full flex-1 px-4 max-md:order-[-9999] max-md:px-0">
            <img src={s.image} alt="" loading="lazy" className="w-[560px] max-w-full rounded-20 max-sm:rounded-10" />
          </div>
        )
        return (
          <div key={i} className="flex items-center gap-6 max-lg:gap-10 max-md:flex-col max-md:items-start">
            {imageLeft ? [image, content] : [content, image]}
          </div>
        )
      })}
    </div>
  )
}
