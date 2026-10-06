// S8 ProfileHeadshot + SocialIconList (specs/_shared-templates.md S8).
import { ICONS } from './Layout.jsx'

// `.author-page-headshot`: 96 (≤991 80, ≤767 64), 1px .1 border, radius 10
export const ProfileHeadshot = ({ src, alt = '' }) => (
  <div className="size-24 flex-none overflow-hidden rounded-10 border border-neutral-700 max-lg:size-20 max-md:size-16">
    {src && <img src={src} alt={alt} className="size-full object-cover" />}
  </div>
)

/** `ul.footer-social-links-list`. order = slot order for this template; only networks present in `socials` render. */
export function SocialIconList({ socials = {}, order }) {
  const items = order.filter((k) => socials[k])
  if (!items.length) return null
  return (
    <ul className="mb-2.5 flex gap-1.5">
      {items.map((k) => (
        <li key={k} className="size-7 opacity-68 transition-all duration-200 hover:opacity-100">
          <a href={socials[k]} target="_blank" rel="noopener noreferrer" aria-label={k} className="block size-7">
            <img src={`${ICONS}/expert-social-${k}.svg`} alt="" className="size-7" />
          </a>
        </li>
      ))}
    </ul>
  )
}
