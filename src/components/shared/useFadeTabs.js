import { useEffect, useRef, useState } from 'react'

/* Webflow `.w-tabs` behaviour: the tab link switches immediately; the current pane fades out
   (durationOut ms), then the new pane is shown and fades in (durationIn ms), easing `ease`.
   Defaults are the product pages' data-duration-in=300 / data-duration-out=100.
   With both durations 0 (pricing) panes swap instantly.
   Returns { current, shown, paneStyle(i), select(i) } — render only the `shown` pane. */
export default function useFadeTabs(initial = 0, { durationIn = 300, durationOut = 100, easing = 'ease' } = {}) {
  const [current, setCurrent] = useState(initial) // active tab link
  const [shown, setShown] = useState(initial) // pane in the DOM
  const [opacity, setOpacity] = useState(1)
  const [duration, setDuration] = useState(0)
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const select = (i) => {
    if (i === current) return
    timers.current.forEach(clearTimeout)
    timers.current = []
    setCurrent(i)
    if (!durationIn && !durationOut) {
      setShown(i)
      return
    }
    setDuration(durationOut)
    setOpacity(0)
    timers.current.push(
      setTimeout(() => {
        setShown(i)
        setDuration(0)
        setOpacity(0)
        // next frame: fade in
        timers.current.push(
          setTimeout(() => {
            setDuration(durationIn)
            setOpacity(1)
          }, 20),
        )
      }, durationOut),
    )
  }

  const paneStyle = { opacity, transition: `opacity ${duration}ms ${easing}` }
  return { current, shown, paneStyle, select }
}
