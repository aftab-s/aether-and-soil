import { useEffect, useRef } from 'react'

/**
 * Smooth inertial scroll using a lerp (linear interpolation) loop.
 * Intercepts wheel events, applies easing toward target, drives window.scrollTo.
 * Falls back to native scroll on touch devices (which have their own inertia).
 *
 * Dispatches/listens to a custom 'smoothScrollTo' event so that anchor links
 * from child components can animate smoothly too.
 */
export default function SmoothScroll({ children }) {
  const targetY = useRef(0)
  const rafRef  = useRef(null)
  const isTouchRef = useRef(false)

  useEffect(() => {
    // Detect touch device — leave native scroll intact
    const onTouchStart = () => { isTouchRef.current = true }
    window.addEventListener('touchstart', onTouchStart, { once: true, passive: true })

    // Initialise target to current scroll position (handles page refresh mid-page)
    targetY.current = window.scrollY

    const EASE = 0.05 // lower = more inertia (0.05–0.12 is a good range)

    const animate = () => {
      if (!isTouchRef.current) {
        const current = window.scrollY
        const delta   = targetY.current - current

        // Snap tiny deltas to avoid infinite loop / jitter
        if (Math.abs(delta) > 0.1) {
          window.scrollTo({ top: current + delta * EASE, behavior: 'instant' })
        } else if (Math.abs(delta) > 0) {
          window.scrollTo({ top: targetY.current, behavior: 'instant' })
        }
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    const onWheel = (e) => {
      if (isTouchRef.current) return
      e.preventDefault()

      // Normalise deltaY (some trackpads send very large values)
      const delta = e.deltaMode === 1
        ? e.deltaY * 30    // line mode
        : e.deltaMode === 2
          ? e.deltaY * 300 // page mode
          : e.deltaY       // pixel mode

      const maxY = document.documentElement.scrollHeight - window.innerHeight
      targetY.current = Math.max(0, Math.min(targetY.current + delta, maxY))
    }

    // Allow children to programmatically scroll by dispatching a custom event
    const onSmoothScrollTo = (e) => {
      const maxY = document.documentElement.scrollHeight - window.innerHeight
      const top = Math.max(0, Math.min(e.detail.top, maxY))
      
      if (isTouchRef.current) {
        // Fallback for touch devices or hybrid laptops in touch mode
        window.scrollTo({ top, behavior: 'smooth' })
      } else {
        targetY.current = top
      }
    }

    // Sync targetY on native scroll (touch) to prevent jumps on subsequent clicks
    const onScroll = () => {
      if (isTouchRef.current) {
        targetY.current = window.scrollY
      }
    }

    rafRef.current = requestAnimationFrame(animate)
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('smoothScrollTo', onSmoothScrollTo)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('smoothScrollTo', onSmoothScrollTo)
      window.removeEventListener('touchstart', onTouchStart)
    }
  }, [])

  return children
}

/**
 * Utility: smooth-scroll to a section by ID via the SmoothScroll engine.
 * Use this instead of scrollIntoView in child components.
 */
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 0 // no offset needed
  window.dispatchEvent(new CustomEvent('smoothScrollTo', { detail: { top } }))
}
