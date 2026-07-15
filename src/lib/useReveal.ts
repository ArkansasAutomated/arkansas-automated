import { useEffect, useRef } from 'react';

/**
 * Scroll-reveal as progressive enhancement that can NEVER strand content
 * hidden: elements start visible by default; the hook adds `rv` (hidden)
 * only when JS runs and the element is below the viewport, then reveals it
 * via IntersectionObserver with generous margins plus a scrollend sweep
 * (instant anchor jumps never flip isIntersecting). CSS transitions do the
 * animation, so no requestAnimationFrame loop is required — rAF-throttled
 * contexts (background tabs) still end up with visible content.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (el.getBoundingClientRect().top < window.innerHeight) return; // already on screen

    el.classList.add('rv');
    const reveal = () => el.classList.add('rv-in');

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            reveal();
            io.disconnect();
          }
        }
      },
      { threshold: 0, rootMargin: '150% 0px 150% 0px' },
    );
    io.observe(el);

    const sweep = () => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        reveal();
        io.disconnect();
      }
    };
    addEventListener('scrollend', sweep, { passive: true });

    return () => {
      io.disconnect();
      removeEventListener('scrollend', sweep);
    };
  }, []);

  return ref;
}
