// Perspective wrapper + tilting card + moving shine (agencies `.agency-directory-card-wrap`, university `.cards-wrapper-new`).
import useTilt from './useTilt.js'
import { SmartLink } from './Layout.jsx'

/**
 * tilt: {rot, shineX, shineY} (see useTilt). href → card renders as a link.
 * shineClass: size/colour/blur of the shine (it is centred, then translated by the hook); omit to hide it.
 */
export default function TiltCard({ tilt, href, wrapperClass = '', cardClass = '', cardStyle, shineClass, children }) {
  const { cardRef, shineRef, handlers } = useTilt(tilt)
  const card = (
    <>
      {shineClass && (
        <div ref={shineRef} className={`pointer-events-none absolute left-1/2 top-1/2 ${shineClass}`} style={{ translate: '-50% -50%' }} />
      )}
      {children}
    </>
  )
  return (
    <div className={`[perspective:1000px] ${wrapperClass}`} {...handlers}>
      {href ? (
        <SmartLink ref={cardRef} href={href} className={`relative ${cardClass}`} style={cardStyle}>
          {card}
        </SmartLink>
      ) : (
        <div ref={cardRef} className={`relative ${cardClass}`} style={cardStyle}>
          {card}
        </div>
      )}
    </div>
  )
}
