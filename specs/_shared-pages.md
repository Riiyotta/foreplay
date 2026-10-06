Source: https://www.foreplay.co/

# Shared building blocks for the product / marketing pages

Measured on 2026-10-06 against the live site using headless Chromium (Playwright 1.63) at 1440×900, 991×900 and 390×844. Values come from `getComputedStyle` and `getBoundingClientRect` after a full scroll pass, so lazy images and IX2 end states had settled. Every page spec in this folder (`specs/<route>.md`) uses the same legend and points back here for these shared pieces. The global tokens, buttons, Navbar and Footer are in `CLONE_SPEC.md` §0, §1 and §8. **All 13 pages use the same Navbar and Footer DOM as the homepage**: the node counts and heights are identical, and only the active-link state class differs. Reuse `Navbar.jsx` and `Footer.jsx` as-is. The footer includes `CalendarPopup` and `ExitIntentModal`.

## 1. Product-page template (swipe-file, discovery, spyder-ad-spy, briefs; lens partially)

Use this section order. Exact geometry is in each page spec.

| # | DOM | What it is | Reuse |
|---|---|---|---|
| 1 | `section#product-hero-section` | Hero. `.dot-bg` (380px dot-grid tile, opacity .66, mask fades top/bottom). Sticky `.product-hero-sticky` (900 wide, `position:sticky; top:100px`) holds a 256px animated icon video (`animated-icon-<product>.webm`; static `pi-*-hq.webp` is shown ≤991, where the video is hidden), an overline h1, a 60/68 gradient title h2, an 18/28 subtitle and a "Start free trial" primary button. `.product-hero-preview` is 16:10 (1360×850 @1440). It holds the monitor mockup `hero-empty-mockup.webp` and the screen video `.product-hero-video`, which is absolutely inset and tilted with `matrix3d(... 0.992546, 0.121869 ...)` (rotateX ≈ −7°). The video's aspect ratio is 1400/730. An underlay gradient `linear-gradient(0deg,#020308 75%,#02030800)` sits under it. | New `ProductHero`. Parallax hook = adapt `useHeroParallax.js` (see §3) |
| 2 | `section > .section-padding > .section-white-block` | White "Why do you need…" block. 940-wide `.product-page-solution` with an h3 (36/44) and a 2-col grid of before/after cards (462×466 @1440, radius 20). The before card has an inset ring `0 0 0 1px #e9eaef`. The after card has bg #020308. | `section-white-block` styles exist (BeforeAfter.jsx); new `SolutionCards` |
| 3 | `div.section > .product-page-padding-y` (108px top/bottom) | "USE CASES" head plus a `[data-carousel]` slider. Slides are 561.6 wide @1440 (480 @991, 342 @390), `gap:16px`, card radius 28 with ring `0 0 0 1px #1b1c21`. Track transition `transform .8s cubic-bezier(0.19,1,0.22,1)`. Prev/next 36×36 `.carousel-arrow` buttons are centred below, 48px gap above. | New `ProductCarousel` (script in §4) |
| 4 | `div.section` | "CORE FEATURES" head plus Webflow `.w-tabs` (`data-duration-in=300`, `data-duration-out=100`, easing `ease`): a 3-tab (Spyder: 5-tab) `.product-page-tabs-menu` and a 1264×711 tab image. Then the Chrome-extension card `.home-extension` (identical to the homepage). | Tab icons already exist in `svgs.jsx` (`TabSwipeFile0..2`, `TabDiscovery*`, `TabSpyder*`, `TabBriefs*`). `ChromeExtension.jsx` is reused verbatim. Webflow tab panes cross-fade: opacity out 100ms, then in 300ms, `ease` |
| 5 | `div.section` | "ALL FEATURES" head, then 1 or 2 × (`.product-page-feature-grid-new`, 3 cols of 405.3, 6 cards, image 403×202, bg hover `background-color .2s`) + testimonial (`.home-testimonial-wrapper`, quote 3 lines, 48px avatar, award laurel SVGs left/right 142×280). | New `FeatureGrid`, `Testimonial` |
| 6 | `div.section > .cta` | "Get a 7-Day free trial today" CTA banner. `.cta-block` is 1264×404, with an 880×880 product animation video (`cta-<product>.mov`/`.mp4`) bleeding out on the right. | New `CtaBanner` |
| 7 | `div.section > .faq` | FAQ: section head plus 752-wide `.faq-block-container` with 61px collapsed rows. Answers expand via `[data-accordion-item]` (height 0 → measured px, transition `.9s cubic-bezier(0.19,1,0.22,1)`). The chevron rotates 180° (`.chevron-icon` 900ms same curve, from the page `<style>` embed). | New `Faq` (script in §4) |
| 8 | `div.section.overflow-hidden > .home-cta` | "Ready to ship more winning ads?" | `CTA.jsx` verbatim |

Shared section head pattern: `.section-head`, 720 max, flex column, centred, gap 12. It contains an overline (12/16, 550, ls 2px, uppercase, rgba(255,255,255,.36)), an `h2.text-display-h2` (44/53.76; 40/52 ≤991; 36/48 ≤479) and an 18/28 paragraph with max 512, color rgba(255,255,255,.68).

## 2. Third-party embeds and media

The following are embeds; do not rebuild their internals:
- YouTube lightboxes (Webflow `w-lightbox` + embedly JSON): lens hero "Watch Video" → `youtube.com/watch?v=93_VRP1c_a4`; mobile-app feature video → `youtube.com/watch?v=BRRwHdlXHQA`. The nav lightbox (`k40dfSJUfhE`) is global and already in the Navbar.
- Cal.com inline embed (book-demo): `calLink team/foreplay/foreplay-demo-action-plan`, `layout column_view`, `theme dark`, container `#my-cal-inline-foreplay-demo-action-plan` 900×480 @1440.
- Senja testimonial wall (book-demo, `.senja-embed`), widget `c4cbc78b-ee64-4ff7-827d-24eadb3f51c7`. It renders 1264×3693 @1440 and ~11,200px tall @390.
- Wistia player (watch-demo), media id `uwpllhs0uf`, 800×450 @1440.
- customer.io forms handler script on mobile-app and watch-demo (no visible form found in page content).

## 3. Product hero parallax (IX2 `a-71` "Product / Hero Parallax")
- Trigger is `.product-hero-animation-trigger` (absolute, 100vh tall, top −72px). The event is SCROLLING_IN_VIEW with smoothing 0 and no offsets, active on IX2 media queries `main` and `medium` (≥768 only).
- Target `.product-hero-sticky`. At 0% it is translateY 0%, scale 1, opacity 1. At 100% it is translateY **−33%** (easing **inOutCubic** on the move only), scale **0.75** (linear) and opacity **0** (linear).
- This differs from the homepage `a-72`, which is linear on every property. Reuse `useHeroParallax.js` with that one easing change: apply `inOutCubic(p)` to the translate only.

## 4. Behaviour scripts (verbatim from the live pages; these define the motion)
### Product carousel `[data-carousel]` (site-wide footer script; used by product pages)

```js
; (function () {
        // simple debounce
        const debounce = (fn, wait = 150) => {
            let t;
            return (...args) => {
                clearTimeout(t);
                t = setTimeout(() => fn(...args), wait);
            };
        };

        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('[data-carousel]').forEach(initCarousel);
        });

        function initCarousel(root) {
            const track = root.querySelector('[data-track]');
            const slides = track ? [...track.children] : [];
            const btnLeft = root.querySelector('[data-dir="left"]');
            const btnRight = root.querySelector('[data-dir="right"]');
            if (!track || slides.length === 0) return;

            let current = 0;
            let isAnimating = false;
            let stride = 0;

            // Measure once (and on resize)  
            function measureStride() {
                const card = slides[0].querySelector('.slide-card') || slides[0];
                const w = card.getBoundingClientRect().width;
                const gap = parseFloat(getComputedStyle(track).gap) || 0;
                stride = w + gap;
            }

            function update() {
                if (isAnimating) return;
                isAnimating = true;

                track.style.transform = `translateX(-${current * stride}px)`;
                setDisabled(btnLeft, current === 0);
                setDisabled(btnRight, current === slides.length - 1);

                // allow next interaction after the CSS transition (300ms)
                setTimeout(() => { isAnimating = false; }, 300);
            }

            function setDisabled(btn, disabled) {
                if (!btn) return;
                btn.setAttribute('aria-disabled', disabled);
                btn.tabIndex = disabled ? -1 : 0;
                btn.classList.toggle('is-disabled', disabled);
            }

            // Swipe handlers (unchanged)…
            let touchStartX, touchStartY, isTouchMove;
            // … implement as before, but never call measureStride here …

            // Button clicks
            btnLeft?.addEventListener('click', e => {
                e.preventDefault();
                if (current > 0 && !isAnimating) {
                    current--;
                    update();
                }
            });
            btnRight?.addEventListener('click', e => {
                e.preventDefault();
                if (current < slides.length - 1 && !isAnimating) {
                    current++;
                    update();
                }
            });

            // Initial measure & render
            measureStride();
            update();

            // Re‐measure on resize/orientation changes
            const onResize = debounce(() => {
                measureStride();
                update();
            }, 200);
            window.addEventListener('resize', onResize, { passive: true });
            window.addEventListener('orientationchange', onResize, { passive: true });

            // Cleanup if needed
            window.addEventListener('beforeunload', () => {
                window.removeEventListener('resize', onResize);
                window.removeEventListener('orientationchange', onResize);
            }, { once: true });
        }
    })();
```

### FAQ accordion `[data-accordion-item]` (site-wide footer script)

```js
(function () {
        const SELECTOR = '[data-accordion-item]';
        const CONTENT_SEL = '.faq-block_body';
        const ANSWER_SEL = '.faq-block_answer';
        const ATTR_EXPANDED = 'data-expanded';
        const ATTR_ARIA = 'aria-expanded';

        // Map each accordion element → its state & nodes
        const items = new Map();

        // 1) Initialize all accordions: cache heights, set ARIA, collapse
        function init() {
            document.querySelectorAll(SELECTOR).forEach(el => {
                try {
                    const content = el.querySelector(CONTENT_SEL);
                    const answer = el.querySelector(ANSWER_SEL);
                    if (!content || !answer) {
                        console.warn('Accordion missing content/answer for', el);
                        return;
                    }

                    // Cache full answer height once
                    const height = answer.offsetHeight;

                    // Store references & state
                    items.set(el, { content, answer, height, expanded: false });

                    // Initial collapsed state
                    content.style.height = '0px';
                    el.setAttribute(ATTR_EXPANDED, 'false');
                    el.setAttribute(ATTR_ARIA, 'false');
                    el.setAttribute('role', 'button');
                    el.setAttribute('tabindex', '0');
                } catch (err) {
                    console.error('Accordion init error on', el, err);
                }
            });
        }

        // 2) Toggle a single accordion item
        function toggle(el) {
            const data = items.get(el);
            if (!data) return;

            data.expanded = !data.expanded;
            const toHeight = data.expanded ? `${data.height}px` : '0px';
            const state = data.expanded.toString();

            // Batch writes in rAF to avoid layout thrash
            window.requestAnimationFrame(() => {
                try {
                    data.content.style.height = toHeight;
                    el.setAttribute(ATTR_EXPANDED, state);
                    el.setAttribute(ATTR_ARIA, state);
                } catch (err) {
                    console.error('Accordion toggle error on', el, err);
                }
            });
        }

        // 3) Click handler (delegated)
        function onClick(e) {
            const el = e.target.closest(SELECTOR);
            if (!el || !items.has(el)) return;

            // Allow links inside the answer to function normally
            const { answer } = items.get(el);
            if (answer.contains(e.target.closest('a[href]'))) return;

            e.preventDefault();
            toggle(el);
        }

        // 4) Keyboard handler for Enter/Space
        function onKeyDown(e) {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            const el = e.target.closest(SELECTOR);
            if (!el || !items.has(el)) return;
            e.preventDefault();
            toggle(el);
        }

        // 5) Wire up delegated listeners on the container(s)
        function wireUp() {
            document
                .querySelectorAll('[data-accordion-container]')
                .forEach(container => {
                    container.addEventListener('click', onClick);
                    container.addEventListener('keydown', onKeyDown);
                });
        }

        // 6) Bootstrapping
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                init();
                wireUp();
            }, { once: true });
        } else {
            init();
            wireUp();
        }
    })();
```

### SVG path-draw on scroll (`.svg-animation-container`) — lens, api, mcp

```js
(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const VIEWPORT_OFFSET = 0.3;
      const CLIP_CORRECTION = -0.01;

      document.querySelectorAll('.svg-animation-container').forEach(container => {
        const paths = Array.from(container.querySelectorAll('.svg-animate-path'));
        const clips = Array.from(container.querySelectorAll('.svg-animate-clip'));
        const refPath = container.querySelector('.svg-animate-path.svg-graph-ref');
        const viewBoxW = parseFloat(container.getAttribute('data-viewbox-width')) || 440;
        let rightmostX = 0;
        let lengths = [];
        let lastProgress = -1;
        let activeOnPage = false;

        // 1) Pre-compute path lengths & rightmostX
        lengths = paths.map(p => p.getTotalLength());
        paths.forEach((p, i) => {
          p.style.strokeDasharray = lengths[i];
          p.style.strokeDashoffset = lengths[i];
        });
        if (refPath) {
          const L = refPath.getTotalLength();
          for (let i = 0; i <= L; i += 2) {
            const pt = refPath.getPointAtLength(i);
            rightmostX = Math.max(rightmostX, pt.x);
          }
          clips.forEach(c => c.style.clipPath = 'inset(0 100% 0 0)');
        }

        // 2) Observe container visibility
        const io = new IntersectionObserver(([entry]) => {
          activeOnPage = entry.isIntersecting;
          if (activeOnPage) updateAnimations();  // in case we re-enter at scrolled position
        }, { threshold: 0 });
        io.observe(container);

        // 3) Main update fn
        function updateAnimations() {
          if (!activeOnPage) return;

          const rect = container.getBoundingClientRect();
          const h = window.innerHeight;
          const startPx = h * (1 - VIEWPORT_OFFSET);
          const endPx = h * VIEWPORT_OFFSET;
          const dist = startPx - endPx;
          const pos = startPx - rect.top;
          const rawProg = pos / dist;
          const prog = Math.min(1, Math.max(0, rawProg));

          // early exit if no change or fully off the range
          if (prog === lastProgress || prog <= 0 || prog >= 1) {
            lastProgress = prog;
            return;
          }
          lastProgress = prog;

          // 4) apply stroke-dashoffset
          paths.forEach((p, i) => {
            p.style.strokeDashoffset = lengths[i] * (1 - prog);
          });

          // 5) apply clipPath
          if (refPath && clips.length) {
            const adjProg = Math.max(0, prog - CLIP_CORRECTION);
            const curX = rightmostX * adjProg;
            const pct = ((viewBoxW - curX) / viewBoxW) * 100;
            clips.forEach(c => {
              c.style.clipPath = `inset(0 ${pct}% 0 0)`;
            });
          }
        }

        // 4) Hook scroll → rAF → update
        let ticking = false;
        window.addEventListener('scroll', () => {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              updateAnimations();
              ticking = false;
            });
            ticking = true;
          }
        }, { passive: true });

        // kick it off in case already in view
        updateAnimations();
      });
    });
  })();
```

### AutoScrollCarousel marquee (`.carousel-ul`, `.rtl`) — lens, api, mcp

```js
(() => {
    const AutoScrollCarousel = {
      DEFAULT_CONFIG: {
        speed: 1,
        gap: 16,
        resizeDebounce: 500
      },

      createCarousel(element, defaultConfig = {}) {
        if (!element) return;

        const config = {
          ...this.DEFAULT_CONFIG,
          ...defaultConfig,
          speed: parseFloat(element.dataset.speed) || this.DEFAULT_CONFIG.speed,
          gap: parseInt(element.dataset.gap) || parseInt(getComputedStyle(element).getPropertyValue('--gap')) || this.DEFAULT_CONFIG.gap
        };

        const state = {
          items: Array.from(element.children),
          animationFrameId: null,
          currentPosition: 0,
          isInitialized: false,
          isRTL: element.classList.contains('rtl')
        };

        const carousel = {
          calculateTotalWidth() {
            return state.items.reduce((sum, item, index, array) =>
              sum + item.offsetWidth + (index < array.length - 1 ? config.gap : 0), 0);
          },

          animate() {
            state.currentPosition += (state.isRTL ? config.speed : -config.speed);
            const totalWidth = this.calculateTotalWidth();

            if (state.isRTL) {
              if (state.currentPosition >= totalWidth + config.gap) {
                state.currentPosition = 0;
              } else if (state.currentPosition <= 0) {
                state.currentPosition = totalWidth;
              }
            } else {
              if (-state.currentPosition >= totalWidth + config.gap) {
                state.currentPosition = 0;
              } else if (state.currentPosition >= 0) {
                state.currentPosition = -totalWidth;
              }
            }

            element.style.transform = `translateX(${state.currentPosition}px)`;
            state.animationFrameId = requestAnimationFrame(() => this.animate());
          },

          startAnimation() {
            if (!state.isInitialized || state.animationFrameId) return;
            this.animate();
          },

          stopAnimation() {
            if (state.animationFrameId) {
              cancelAnimationFrame(state.animationFrameId);
              state.animationFrameId = null;
            }
          },

          cleanup() {
            this.stopAnimation();
            const clones = Array.from(element.children).slice(state.items.length);
            clones.forEach(clone => clone.remove());
            element.style.transform = '';
            state.currentPosition = 0;
            state.isInitialized = false;
          },

          setup() {
            if (state.isInitialized) return;

            for (let i = 0; i < 2; i++) {
              state.items.forEach(item => {
                element.appendChild(item.cloneNode(true));
                element.insertBefore(item.cloneNode(true), element.firstChild);
              });
            }

            Object.assign(element.style, {
              display: 'flex',
              width: 'max-content',
              position: 'relative'
            });

            const totalWidth = this.calculateTotalWidth();
            state.currentPosition = state.isRTL ? totalWidth : -totalWidth;
            element.style.transform = `translateX(${state.currentPosition}px)`;

            state.isInitialized = true;
            this.animate();
          },

          update() {
            const shouldAnimate = this.calculateTotalWidth() > element.parentElement.offsetWidth;
            if (shouldAnimate && !state.isInitialized) {
              this.setup();
            } else if (!shouldAnimate && state.isInitialized) {
              this.cleanup();
            }
          },

          init() {
            element.addEventListener('mouseenter', () => this.stopAnimation());
            element.addEventListener('mouseleave', () => this.startAnimation());
            document.addEventListener('visibilitychange',
              () => document.hidden ? this.stopAnimation() : this.startAnimation()
            );

            let resizeTimeout;
            window.addEventListener('resize', () => {
              clearTimeout(resizeTimeout);
              resizeTimeout = setTimeout(() => this.update(), config.resizeDebounce);
            });

            this.update();
            return this;
          }
        };

        return carousel.init();
      },

      init(selector = '.carousel-ul') {
        return Array.from(document.querySelectorAll(selector))
          .map(el => this.createCarousel(el));
      }
    };

    AutoScrollCarousel.init();
  })();
```

### Custom `[data-tabs]` tabs with prev/next buttons — lens, api, mcp

```js
(function () {
    let tabsCounter = 0;

    document.querySelectorAll('[data-tabs]').forEach(tabsEl => {
      const manualGroupName = tabsEl.getAttribute('data-tabs-name');
      const groupId = manualGroupName || `tabs-${tabsCounter++}`;

      const tabLinksContainer = tabsEl.querySelector('[data-tab-links]');
      const tabLinks = tabLinksContainer ? tabLinksContainer.querySelectorAll('[data-tab-link]') : [];
      const tabPanesGroups = tabsEl.querySelectorAll('[data-tab-panes]');
      const nextButton = tabsEl.querySelector('[data-tab-next]');
      const prevButton = tabsEl.querySelector('[data-tab-prev]');

      // Accessibility setup for tab list
      if (tabLinksContainer) {
        tabLinksContainer.setAttribute('role', 'tablist');
      }

      // Accessibility and ID setup for each tab link
      tabLinks.forEach((link, index) => {
        link.setAttribute('role', 'tab');

        if (!['BUTTON', 'A'].includes(link.tagName) || (link.tagName === 'A' && !link.hasAttribute('href'))) {
          link.setAttribute('role', 'button');
        }

        link.setAttribute('id', `${groupId}-tab-${index}`);
        link.setAttribute('aria-controls', `${groupId}-panel-${index}`);
      });

      // Accessibility and ID setup for each pane
      tabPanesGroups.forEach(group => {
        const panes = group.querySelectorAll('[data-tab-pane]');
        panes.forEach((pane, index) => {
          pane.setAttribute('role', 'tabpanel');
          pane.setAttribute('id', `${groupId}-panel-${index}`);
          pane.setAttribute('aria-labelledby', `${groupId}-tab-${index}`);
        });

        // Mismatch warning
        if (tabLinks.length > 0 && panes.length !== tabLinks.length) {
          console.warn(`[Tabs: ${groupId}] Mismatch between number of tab links (${tabLinks.length}) and panes (${panes.length})`, { tabsEl });
        }
      });

      let currentIndex = 0;

      function activateTab(index, focus = true) {
        if (tabLinks.length === 0 && tabPanesGroups.length === 0) return; // No links, no panes, nothing to do

        currentIndex = index;

        tabLinks.forEach((link, i) => {
          const isActive = i === index;
          link.setAttribute('aria-selected', isActive);
          link.setAttribute('tabindex', isActive ? '0' : '-1');
          link.classList.toggle('is-active', isActive);
          if (isActive && focus) {
            link.focus();
          }
        });

        tabPanesGroups.forEach(group => {
          const panes = group.querySelectorAll('[data-tab-pane]');
          panes.forEach((pane, i) => {
            const isActive = i === index;
            pane.hidden = !isActive;
            pane.setAttribute('aria-hidden', !isActive);
            pane.classList.toggle('is-active', isActive);
          });
        });

        updateNavButtonAria();
      }

      function updateNavButtonAria() {
        if (nextButton && tabLinks.length > 0) {
          const nextIndex = (currentIndex + 1) % tabLinks.length;
          nextButton.setAttribute('aria-controls', tabLinks[nextIndex].id);
        }
        if (prevButton && tabLinks.length > 0) {
          const prevIndex = (currentIndex - 1 + tabLinks.length) % tabLinks.length;
          prevButton.setAttribute('aria-controls', tabLinks[prevIndex].id);
        }
      }

      if (tabLinks.length > 0) {
        tabLinks.forEach((link, index) => {
          link.addEventListener('click', e => {
            e.preventDefault();
            activateTab(index);
          });

          link.addEventListener('keydown', e => {
            if (['ArrowRight', 'ArrowDown'].includes(e.key)) {
              e.preventDefault();
              const nextIndex = (currentIndex + 1) % tabLinks.length;
              activateTab(nextIndex);
            }
            if (['ArrowLeft', 'ArrowUp'].includes(e.key)) {
              e.preventDefault();
              const prevIndex = (currentIndex - 1 + tabLinks.length) % tabLinks.length;
              activateTab(prevIndex);
            }
          });
        });

        activateTab(0, false);
      } else if (tabPanesGroups.length > 0) {
        activateTab(0, false); // If no tab links but there are panes, still show the first pane
      }

      if (nextButton) {
        nextButton.setAttribute('type', 'button');
        nextButton.setAttribute('aria-label', 'Next tab');
        nextButton.addEventListener('click', () => {
          const panesInFirstGroup = tabPanesGroups[0]?.querySelectorAll('[data-tab-pane]') || [];
          const length = tabLinks.length || panesInFirstGroup.length;
          const nextIndex = (currentIndex + 1) % length;
          activateTab(nextIndex);
        });
      }

      if (prevButton) {
        prevButton.setAttribute('type', 'button');
        prevButton.setAttribute('aria-label', 'Previous tab');
        prevButton.addEventListener('click', () => {
          const panesInFirstGroup = tabPanesGroups[0]?.querySelectorAll('[data-tab-pane]') || [];
          const length = tabLinks.length || panesInFirstGroup.length;
          const prevIndex = (currentIndex - 1 + length) % length;
          activateTab(prevIndex);
        });
      }
    });
  })();
```

### Twinkling dot-grid canvas (`#lens-hero-canvas` in `#lens-hero-section`) — api, mcp

```js
(() => {
    /* ────── CONFIG ────── */
    const SPACING = 20;        // grid spacing px
    const SIZE_MIN = 0.75;      // radius multiplier
    const SIZE_MAX = 1.5;
    const ALPHA_MIN = 0.04;      // base opacity range (4 %–16 %)
    const ALPHA_MAX = 0.16;
    const DELTA_ALPHA = 0.03;      // ± 3 % breathing
    const SPEED_MIN_HZ = 0.30;      // cycles / second
    const SPEED_MAX_HZ = 0.85;
    const DPR_CAP = 1.6;       // clamp on retina
    const RESIZE_DEBOUNCE = 150;

    /* ────── DOM & STATE ────── */
    const canvas = document.getElementById('lens-hero-canvas');
    const section = document.getElementById('lens-hero-section');
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);

    let dots = [];
    let rafId = null;
    let resizeTimer;

    /* ────── HELPERS ────── */
    const rand = (min, max) => min + Math.random() * (max - min);

    function setCanvasSize(w, h) {
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function generateDots() {
      const rows = Math.ceil(canvas.height / (SPACING * dpr));
      const cols = Math.ceil(canvas.width / (SPACING * dpr));
      const arr = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const base = rand(ALPHA_MIN, ALPHA_MAX);          // 0.04–0.16
          const amp = Math.min(DELTA_ALPHA, base);         // keep > 0
          arr.push({
            x: c * SPACING,
            y: r * SPACING,
            r: rand(SIZE_MIN, SIZE_MAX),
            base, amp,
            phase: rand(0, Math.PI * 2),
            speed: rand(SPEED_MIN_HZ, SPEED_MAX_HZ)
          });
        }
      }
      return arr;
    }

    /* ────── RENDER ────── */
    function render(ts) {
      const t = ts * 0.001;          // ms → s
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(d => {
        ctx.globalAlpha = d.base + d.amp *
          Math.sin((2 * Math.PI * d.speed * t) + d.phase);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
      });

      rafId = requestAnimationFrame(render);
    }

    /* ────── INIT / RESET ────── */
    function init() {
      cancelAnimationFrame(rafId);
      setCanvasSize(section.offsetWidth, section.offsetHeight);
      dots = generateDots();
      rafId = requestAnimationFrame(render);
    }

    /* ────── HOOKS ────── */
    document.addEventListener('DOMContentLoaded', init);

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(init, RESIZE_DEBOUNCE);
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(rafId);
      else if (!rafId) rafId = requestAnimationFrame(render);
    });
  })();
```

### Copy-to-clipboard `[data-copy]` — mcp

```js
document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const text = btn.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(text);
      const original = btn.querySelector('.copy-label')?.textContent || btn.textContent;
      const label = btn.querySelector('.copy-label') || btn;
      label.textContent = 'Copied!';
      setTimeout(() => { label.textContent = original; }, 1500);
    } catch (err) {
      console.error('Copy failed', err);
    }
  });
});
```

### Pricing comparison category collapse (`.comparison-category`) — pricing

```js
document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.comparison-category');

    categories.forEach(category => {
        const trigger = category.querySelector('.comparison-category-head');
        const content = category.querySelector('.comparison-category-rows');

        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const isOpen = category.getAttribute('data-open') === 'true';

            if (isOpen) {
                content.style.height = '0';
                content.style.overflowY = "clip";
                category.setAttribute('data-open', 'false');
            } else {
                content.style.height = content.scrollHeight + 'px';
              	content.style.overflowY = "visible";
                category.setAttribute('data-open', 'true');
            }
        });

        if (category.getAttribute('data-open') === 'true') {
            content.style.height = content.offsetHeight + 'px';
        } else {
            content.style.height = '0';
        }
    });
});
```

### Pricing benefit popover positioning (`.pricing_card-benefit`) — pricing

```js
document.querySelectorAll('.pricing_card-benefit').forEach(function (row) {
  const popover = row.querySelector('.pricing_popover');
  if (!popover) return;

  function positionPopover() {
    const rowRect = row.getBoundingClientRect();
    const popoverHeight = popover.offsetHeight;
    const spaceBelow = window.innerHeight - rowRect.bottom;
    const spaceAbove = rowRect.top;

    popover.classList.remove('is-below', 'is-above');

    if (spaceBelow >= popoverHeight || spaceBelow >= spaceAbove) {
      popover.classList.add('is-below');
    } else {
      popover.classList.add('is-above');
    }
  }

  row.addEventListener('mouseenter', function () {
    positionPopover();
    popover.classList.add('is-visible');
  });

  row.addEventListener('mouseleave', function () {
    popover.classList.remove('is-visible');
  });
});
```

### Cal.com inline embed bootstrap — book-demo

```js
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "foreplay-demo-action-plan", {origin:"https://app.cal.com"});

  Cal.ns["foreplay-demo-action-plan"]("inline", {
    elementOrSelector:"#my-cal-inline-foreplay-demo-action-plan",
    config: {"layout":"column_view","theme":"dark"},
    calLink: "team/foreplay/foreplay-demo-action-plan",
  });

  Cal.ns["foreplay-demo-action-plan"]("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"column_view"});
```
