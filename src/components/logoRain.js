import Matter from 'matter-js'

// CLONE_SPEC §3.3: port of the original inline "Logo-rain animation" script (reference/saved.html
// lines 1964-2145), values copied verbatim. Rendering is Matter.Render on a <canvas> with sprite
// textures, exactly like the original. Additions for React: start() returns a destroy() for unmount.
const cfg = {
  gravity: 0.7,
  wallThickness: 100,
  dropY: -60,
  firstDelay: 300,
  gapDelay: 300,
  maxSide: 200,
  smallScale: 1,
  smallWidth: 400,
  show: { mobile: 8, tablet: 12, desktop: 16 },
}

const images = [
  { src: '/rain/hba-asset-01.webp', width: 210, height: 57 },
  { src: '/rain/hba-asset-02.webp', width: 326, height: 57 },
  { src: '/rain/hba-asset-03.webp', width: 388, height: 57 },
  { src: '/rain/hba-asset-04.webp', width: 250, height: 57 },
  { src: '/rain/hba-asset-05.webp', width: 208, height: 57 },
  { src: '/rain/hba-asset-06.webp', width: 328, height: 57 },
  { src: '/rain/hba-asset-07.webp', width: 88, height: 89 },
  { src: '/rain/hba-asset-08.webp', width: 88, height: 89 },
  { src: '/rain/hba-asset-09.webp', width: 88, height: 89 },
  { src: '/rain/hba-asset-10.webp', width: 88, height: 89 },
  { src: '/rain/hba-asset-11.webp', width: 88, height: 89 },
  { src: '/rain/hba-asset-12.webp', width: 114, height: 65 },
  { src: '/rain/hba-asset-13.webp', width: 87, height: 87 },
  { src: '/rain/hba-asset-14.webp', width: 88, height: 89 },
  { src: '/rain/hba-asset-15.webp', width: 88, height: 89 },
  { src: '/rain/hba-asset-16.webp', width: 160, height: 153 },
  { src: '/rain/hba-asset-17.webp', width: 180, height: 105 },
]

export function mountLogoRain(container) {
  // Bail out on mobile devices (original UA test)
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return () => {}
  if (!container) return () => {}

  const { Engine, Render, Runner, Bodies, Body, Composite } = Matter
  const timers = []
  let runner = null
  let started = false

  /* world */
  const engine = Engine.create({ enableSleeping: true })
  engine.world.gravity.y = cfg.gravity
  let scaleFactor = container.clientWidth < cfg.smallWidth ? cfg.smallScale : 1.2

  /* canvas */
  const render = Render.create({
    element: container,
    engine,
    options: {
      background: 'transparent',
      wireframes: false,
      width: container.clientWidth,
      height: container.clientHeight,
      pixelRatio: Math.min(window.devicePixelRatio, 2),
    },
  })
  render.canvas.style.pointerEvents = 'none'

  /* walls */
  const t = cfg.wallThickness
  const w0 = container.clientWidth
  const h0 = container.clientHeight
  const wallOpts = { isStatic: true, render: { visible: false } }
  const walls = {
    l: Bodies.rectangle(-t / 2, h0 / 2, t, h0 * 5, wallOpts),
    r: Bodies.rectangle(w0 + t / 2, h0 / 2, t, h0 * 5, wallOpts),
    b: Bodies.rectangle(w0 / 2, h0 + t / 2, w0 * 2, t, wallOpts),
  }
  Composite.add(engine.world, Object.values(walls))

  /* bodies */
  const vw = window.innerWidth
  const n = vw <= 480 ? cfg.show.mobile : vw <= 768 ? cfg.show.tablet : cfg.show.desktop
  const bodies = images.slice(0, n).map((img) => {
    const w2 = img.width / 2
    const h2 = img.height / 2
    const resize = Math.min(cfg.maxSide / Math.max(w2, h2), 1)
    const W = w2 * resize * scaleFactor
    const H = h2 * resize * scaleFactor
    const x = Math.random() * (container.clientWidth - W) + W / 2
    const body = Bodies.rectangle(x, cfg.dropY, W, H, {
      restitution: 0.1,
      friction: 0.3,
      frictionAir: 0.00001,
      render: { sprite: { texture: img.src, xScale: W / img.width, yScale: H / img.height } },
    })
    Body.rotate(body, ((Math.random() * 60 - 30) * Math.PI) / 180)
    body.angularVelocity = Math.random() * 0.02 - 0.01
    return body
  })

  /* start on first intersection (default IO options: threshold 0, root viewport) */
  const io = new IntersectionObserver((entries, obs) => {
    if (entries.some((e) => e.isIntersecting)) {
      started = true
      Render.run(render)
      runner = Runner.create()
      Runner.run(runner, engine)
      let delay = cfg.firstDelay
      bodies.forEach((b) => {
        timers.push(setTimeout(() => Composite.add(engine.world, b), delay))
        delay += cfg.gapDelay
      })
      obs.disconnect()
    }
  })
  io.observe(container)

  /* resize (original sets scaleFactor to 1 here, which only matters for bodies created later: none) */
  const onResize = () => {
    scaleFactor = container.clientWidth < cfg.smallWidth ? cfg.smallScale : 1
    const w = container.clientWidth
    const h = container.clientHeight
    // matter-js 0.19 has no Render.setSize (the original throws here); resize the canvas directly
    const ratio = render.options.pixelRatio || 1
    render.options.width = w
    render.options.height = h
    render.bounds.max.x = w
    render.bounds.max.y = h
    render.canvas.width = w * ratio
    render.canvas.height = h * ratio
    render.canvas.style.width = `${w}px`
    render.canvas.style.height = `${h}px`
    if (ratio !== 1) render.context.setTransform(ratio, 0, 0, ratio, 0, 0)
    Body.setPosition(walls.l, { x: -t / 2, y: h / 2 })
    Body.setPosition(walls.r, { x: w + t / 2, y: h / 2 })
    Body.setPosition(walls.b, { x: w / 2, y: h + t / 2 })
  }
  window.addEventListener('resize', onResize)

  // Debug handle for QA scripts (read-only inspection of the live world)
  container.__logoRain = { engine, render, bodies, walls, cfg, get started() { return started } }

  return () => {
    io.disconnect()
    timers.forEach(clearTimeout)
    window.removeEventListener('resize', onResize)
    if (runner) Runner.stop(runner)
    Render.stop(render)
    Composite.clear(engine.world, false)
    Engine.clear(engine)
    render.canvas.remove()
    render.textures = {}
    delete container.__logoRain
  }
}
