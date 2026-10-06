import { Overline } from '../shared.jsx'

// `.section-head` (720 max, flex column, gap 12): overline 12/16 + h2/h3 + paragraph (max 512).
// theme 'dark' → overline .36 / title white / body .68 ; theme 'light' → solid-400 / solid-700 / solid-600.
// Any colour can be overridden with the *Class props.
const TITLE_SIZE = {
  h2: 'font-display text-display-h2 max-lg:text-display-h2-lg max-sm:text-display-h2-sm',
  h3: 'font-display text-display-h3',
  'h3-sm': 'font-display text-display-h3 max-md:text-display-h4', // .mobile-landscape-text-display-h4
  h1: 'hero-title-fill font-display text-display-h1 text-hero-title max-md:text-display-h1-md max-sm:text-display-h1-sm',
}
const BODY_SIZE = { l: 'text-body-l', m: 'text-body-m' }
const THEME = {
  dark: { overline: 'text-neutral-300', title: 'text-neutral-0', body: 'text-neutral-100' },
  light: { overline: 'text-solid-400', title: 'text-solid-700', body: 'text-solid-600' },
}

export default function SectionHead({
  overline,
  overlineAs: OverlineTag = 'div',
  title,
  titleAs: TitleTag = 'h2',
  size = 'h2',
  body,
  bodySize = 'l',
  bodyAs: BodyTag = 'p',
  theme = 'dark',
  align = 'center',
  className = '',
  overlineClass,
  titleClass,
  bodyClass,
  bodyMax = 'max-w-[512px]',
  prefix, // rendered in the same wrapper as the title (e.g. api product icon)
  children,
}) {
  const t = THEME[theme]
  const left = align === 'left'
  return (
    <div
      className={`flex w-full max-w-[720px] flex-col gap-3 ${
        left ? 'items-start text-left max-sm:gap-2' : 'mx-auto items-center text-center'
      } ${className}`}
    >
      {overline && (
        <OverlineTag className={`text-overline uppercase [text-wrap:pretty] ${overlineClass ?? t.overline}`}>
          {overline}
        </OverlineTag>
      )}
      {title && prefix ? (
        <div>
          {prefix}
          <TitleTag className={`${TITLE_SIZE[size]} [text-wrap:balance] ${titleClass ?? t.title}`}>{title}</TitleTag>
        </div>
      ) : (
        title && <TitleTag className={`${TITLE_SIZE[size]} [text-wrap:balance] ${titleClass ?? t.title}`}>{title}</TitleTag>
      )}
      {body && (
        <div className={bodyMax}>
          <BodyTag className={`${BODY_SIZE[bodySize]} [text-wrap:pretty] ${bodyClass ?? t.body}`}>{body}</BodyTag>
        </div>
      )}
      {children}
    </div>
  )
}

export { Overline }
