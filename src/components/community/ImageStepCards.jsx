import SecurityGrid from '../shared/SecurityGrid.jsx'

/* C3 ImageStepCards (specs/_shared-community.md §C3): the homepage Features grid (`SecurityGrid`)
   with 768×528 image bodies. cards: [{ title, img, alt?, text, icon? }].
   When no card has an icon (affiliates) the 24px icon box in the card head is removed. */
export default function ImageStepCards({ cards, className = '' }) {
  const hasIcons = cards.some((c) => c.icon)
  return (
    <SecurityGrid
      cards={cards}
      className={`${hasIcons ? '' : '[&>div>div:first-child>div:first-child]:hidden'} ${className}`}
    />
  )
}
