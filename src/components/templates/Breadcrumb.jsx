// S1 BlogBreadcrumb (specs/_shared-templates.md S1, template-post.md §2.1)
import { Fragment } from 'react'
import { SmartLink } from './Layout.jsx'

const LINK = 'flex items-center gap-[5px] overflow-hidden whitespace-nowrap p-2 text-neutral-100 no-underline hover:text-neutral-0'

/** crumbs: [{label, href, icon?, iconClass?}]; the last crumb is rendered with ellipsis and href "#". */
export default function Breadcrumb({ crumbs, alwaysVisible = false, pad = 'py-10', className = '' }) {
  const last = crumbs.length - 1
  return (
    <div className={`-mx-2 flex w-full items-center gap-1 overflow-hidden ${pad} ${alwaysVisible ? '' : 'max-sm:hidden'} ${className}`}>
      {crumbs.map((c, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <div>
              <div className="text-body-s">/</div>
            </div>
          )}
          <SmartLink href={i === last ? '#' : c.href} className={`${LINK} ${i === 0 ? 'flex-none' : ''}`}>
            {c.icon && <img src={c.icon} alt="" className={c.iconClass} />}
            {i === last ? <div className="overflow-hidden text-ellipsis">{c.label}</div> : <div>{c.label}</div>}
          </SmartLink>
        </Fragment>
      ))}
    </div>
  )
}
