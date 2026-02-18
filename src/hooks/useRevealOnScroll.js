import { useEffect } from 'react'

export default function useRevealOnScroll(ref, { threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
  useEffect(() => {
    const el = ref?.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-in')
          el.classList.remove('reveal-init')
          obs.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    el.classList.add('reveal-init')
    obs.observe(el)

    return () => obs.disconnect()
  }, [ref, threshold, rootMargin])
}
