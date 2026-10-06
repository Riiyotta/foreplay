import { useCallback, useEffect, useRef, useState } from 'react'
import { ButtonChevron } from './svgs.jsx'

/* ---------- Buttons (CLONE_SPEC §0.7) ---------- */
// Webflow's base `a` rule sets justify-content/align-items: center, so flex buttons centre their content.
const BUTTON_BASE =
  'relative z-5 flex items-center justify-center rounded-10 p-2 no-underline focus:outline-none'

const BUTTON_VARIANTS = {
  // .button-dark.button-primary
  'dark-primary':
    'flex-1 bg-neutral-0 text-solid-900 font-semibold transition-all duration-200 ease-[ease] hover:bg-neutral-50 active:bg-neutral-200 active:text-neutral-200 focus:shadow-focus-dark',
  // .button-dark.button-secondary
  'dark-secondary':
    'border border-solid-600 bg-solid-900 text-solid-0 font-semibold transition-all duration-200 ease-[ease] hover:bg-neutral-800 active:bg-neutral-400 active:text-neutral-200 focus:shadow-focus-dark',
  // .button-dark.button-ghost
  'dark-ghost':
    'bg-background text-solid-0 font-semibold transition-all duration-200 ease-[ease] hover:bg-neutral-700 active:bg-neutral-500 focus:shadow-focus-dark',
  // .button-light.button-primary
  'light-primary':
    'bg-background text-solid-0 font-medium transition-all duration-150 ease-[ease] hover:bg-solid-600 active:bg-solid-400 focus:shadow-focus-light',
  // .button-dark.button-stroke (lens CSS)
  'dark-stroke':
    'bg-background text-solid-0 font-semibold shadow-ring-neutral-600 transition-all duration-200 ease-[ease] hover:bg-neutral-700 hover:shadow-ring-neutral-600-0 active:bg-neutral-500 active:text-neutral-0 focus:shadow-focus-dark',
  // .button-dark.ghost-icon-button (FAQ "Contact support" / "Knowledge Base"): gap 5px
  'dark-ghost-icon':
    'gap-[5px] bg-background text-solid-0 font-semibold transition-all duration-200 ease-[ease] hover:bg-neutral-700 active:bg-neutral-500 active:text-solid-0 focus:shadow-focus-dark',
  // .button-light.button-stroke
  'light-stroke':
    'bg-solid-0 text-solid-900 shadow-ring-card transition-all duration-150 ease-[ease] hover:bg-solid-25 hover:shadow-ring-card-0 active:bg-solid-50 active:text-neutral-200 focus:shadow-focus-light',
  // .button-light.button-secondary (careers.md §2 "Learn More")
  'light-secondary':
    'bg-solid-25 text-solid-900 transition-all duration-150 ease-[ease] hover:bg-solid-50 active:bg-solid-100 active:text-neutral-200 focus:shadow-focus-light',
}

export function ButtonIcon({ full = false }) {
  return (
    <div className={`relative z-2 -ml-1 flex items-center justify-center ${full ? 'opacity-100' : 'opacity-68'}`}>
      <div className="inline-flex size-6 items-center justify-center">
        <div className="flex size-full items-center justify-center">
          <ButtonChevron />
        </div>
      </div>
    </div>
  )
}

// iconLeft: optional node rendered in `.button-icon-block.icon-left` (opacity .68, margin-right -4px).
// iconRight: optional node replacing the chevron in the right `.button-icon-block` (opacity .68), e.g. media-kit download icon.
// children: optional custom content for `.button-text-block` instead of the label (e.g. store badges).
export function Button({
  variant,
  href,
  label,
  icon = true,
  iconFull = false,
  iconLeft,
  iconRight,
  className = '',
  children,
  ...rest
}) {
  return (
    <a href={href} className={`${BUTTON_BASE} ${BUTTON_VARIANTS[variant]} ${className}`} {...rest}>
      {iconLeft && (
        <div className="relative z-2 -mr-1 flex items-center justify-center opacity-68">
          <div className="flex size-6 items-center justify-center">{iconLeft}</div>
        </div>
      )}
      <div className="relative z-2 px-1.5">{children ?? <div className="text-heading-m">{label}</div>}</div>
      {iconRight ? (
        <div className="relative z-2 -ml-1 flex items-center justify-center opacity-68">
          <div className="inline-flex size-6 items-center justify-center">{iconRight}</div>
        </div>
      ) : (
        icon && <ButtonIcon full={iconFull} />
      )}
    </a>
  )
}

/* ---------- Webflow background video (.w-background-video) ----------
   video: object-fit cover, absolute, z -100, fills the wrapper. */
export function BgVideo({ className = '', poster, sources, children }) {
  return (
    <div className={`relative overflow-hidden text-white ${className}`}>
      <video
        className="absolute inset-0 -z-[100] m-auto size-full bg-cover bg-center object-cover"
        style={poster ? { backgroundImage: `url("${poster}")` } : undefined}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
      >
        {sources.map((s) => (
          <source key={s} src={s} />
        ))}
      </video>
      {children}
    </div>
  )
}

/* ---------- Custom tabs (§4.5, saved.html "Custom Tabs Component") ----------
   Click or Arrow keys (wrapping) switch instantly; focus moves to the activated link. */
export function useTabs(count) {
  const [active, setActive] = useState(0)
  const linkRefs = useRef([])

  const activate = useCallback((i, focus = true) => {
    setActive(i)
    if (focus) requestAnimationFrame(() => linkRefs.current[i]?.focus())
  }, [])

  const onKeyDown = (e, i) => {
    let next = -1
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % count
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + count) % count
    if (next >= 0) {
      e.preventDefault()
      activate(next)
    }
  }

  const linkProps = (i, groupId) => ({
    ref: (el) => (linkRefs.current[i] = el),
    id: `${groupId}-tab-${i}`,
    role: 'tab',
    'aria-controls': `${groupId}-panel-${i}`,
    'aria-selected': active === i,
    tabIndex: active === i ? 0 : -1,
    onClick: (e) => {
      e.preventDefault()
      activate(i)
    },
    onKeyDown: (e) => onKeyDown(e, i),
  })

  const paneProps = (i, groupId, suffix = '') => ({
    id: `${groupId}-panel-${i}${suffix}`,
    role: 'tabpanel',
    'aria-labelledby': `${groupId}-tab-${i}`,
    hidden: active !== i,
    'aria-hidden': active !== i,
  })

  return { active, linkProps, paneProps }
}

/* ---------- Sprite hover stepping (§10, saved.html MobileSafeSpriteAnimator) ----------
   ≥992 only. Frame = round(p·(N−1)), x = −frame·width, 300ms easeOutQuad, reversible. */
export function useSprite(frames, duration = 300) {
  const spriteRef = useRef(null)
  const anim = useRef({ p: 0, start: 0, tgt: 0, t0: null, raf: null, w: 0, enabled: false })

  useEffect(() => {
    const el = spriteRef.current
    if (!el) return
    const a = anim.current
    const mq = window.matchMedia('(min-width: 992px)')
    let ro = null

    const draw = (p) => {
      const frame = Math.round(p * (frames - 1))
      el.style.backgroundPosition = `-${frame * a.w}px 0`
    }
    const prepare = () => {
      a.w = el.offsetWidth
      el.style.backgroundSize = `${a.w * frames}px 100%`
      draw(a.p)
    }
    const enable = () => {
      a.enabled = true
      prepare()
      ro = new ResizeObserver(() => {
        if (el.offsetWidth && el.offsetWidth !== a.w) prepare()
      })
      ro.observe(el)
    }
    const disable = () => {
      a.enabled = false
      cancelAnimationFrame(a.raf)
      ro?.disconnect()
      ro = null
      el.style.backgroundSize = ''
      el.style.backgroundPosition = ''
    }
    a.draw = draw
    const onChange = (e) => (e.matches ? enable() : disable())
    if (mq.matches) enable()
    mq.addEventListener('change', onChange)
    return () => {
      mq.removeEventListener('change', onChange)
      disable()
    }
  }, [frames])

  const play = (dir) => {
    const a = anim.current
    if (!a.enabled) return
    const tgt = dir === 'forward' ? 1 : 0
    if (tgt === a.tgt) return
    a.start = a.p
    a.tgt = tgt
    a.t0 = null
    cancelAnimationFrame(a.raf)
    const tick = (now) => {
      if (!a.t0) a.t0 = now
      const raw = Math.min((now - a.t0) / duration, 1)
      const eased = 1 - Math.pow(1 - raw, 2)
      a.p = a.start + (a.tgt - a.start) * eased
      a.draw(a.p)
      if (raw < 1) a.raf = requestAnimationFrame(tick)
    }
    a.raf = requestAnimationFrame(tick)
  }

  return {
    spriteRef,
    hoverProps: {
      onMouseEnter: () => play('forward'),
      onMouseLeave: () => play('reverse'),
    },
  }
}

/* ---------- Section head (shared `.section-head` structure) ---------- */
export function Overline({ className = '', children }) {
  return <div className={`text-overline uppercase ${className}`}>{children}</div>
}
