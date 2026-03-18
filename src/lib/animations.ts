/**
 * src/lib/animations.ts
 * Anime.js animation hooks — import only from "use client" components.
 *
 * Safety guarantees:
 * - All initial hiding is done in JS (never CSS) so content is
 *   always visible if JS or animejs fails
 * - Every hook has a hard failsafe timeout that shows content
 *   after 2 seconds regardless of animation state
 */

import { useEffect, useRef } from "react";

const IO_OPTIONS: IntersectionObserverInit = {
  threshold: 0.05,
  rootMargin: "0px 0px -20px 0px",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function loadAnime(): Promise<any> {
  const mod = await import("animejs");
  return typeof mod.default === "function" ? mod.default : mod;
}

/* ------------------------------------------------------------------
   useHeroAnimation — mount-time stagger for [data-hero] elements
------------------------------------------------------------------ */
export function useHeroAnimation(selector = "[data-hero]") {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(selector)
    );
    if (!targets.length) return;

    // Hide via JS
    targets.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
    });

    // Hard failsafe — show after 2s no matter what
    const failsafe = setTimeout(() => {
      targets.forEach((el) => {
        el.style.opacity = "";
        el.style.transform = "";
      });
    }, 2000);

    const timer = setTimeout(async () => {
      try {
        const anime = await loadAnime();
        clearTimeout(failsafe);
        anime({
          targets,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 700,
          delay: anime.stagger(110, { start: 150 }),
          easing: "easeOutQuad",
          complete: () => {
            targets.forEach((el) => {
              el.style.opacity = "";
              el.style.transform = "";
            });
          },
        });
      } catch {
        clearTimeout(failsafe);
        targets.forEach((el) => {
          el.style.opacity = "";
          el.style.transform = "";
        });
      }
    }, 60);

    return () => {
      clearTimeout(timer);
      clearTimeout(failsafe);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/* ------------------------------------------------------------------
   useRevealAnimation — scroll-triggered fade-up for a single element
------------------------------------------------------------------ */
export function useRevealAnimation(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";

    const failsafe = setTimeout(() => {
      el.style.opacity = "";
      el.style.transform = "";
    }, 2000);

    const observer = new IntersectionObserver(async (entries) => {
      if (!entries[0].isIntersecting) return;
      observer.unobserve(el);
      clearTimeout(failsafe);
      try {
        const anime = await loadAnime();
        el.style.transition = "none";
        anime({
          targets: el,
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 600,
          delay,
          easing: "easeOutQuad",
          complete: () => {
            el.style.transition = "";
            el.style.opacity = "";
            el.style.transform = "";
          },
        });
      } catch {
        el.style.transition = "";
        el.style.opacity = "";
        el.style.transform = "";
      }
    }, IO_OPTIONS);

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, [delay]);

  return ref;
}

/* ------------------------------------------------------------------
   useStaggerAnimation — scroll-triggered stagger for card grids
------------------------------------------------------------------ */
export function useStaggerAnimation(
  childSelector: string,
  staggerMs = 80,
  initialDelay = 0
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(
      container.querySelectorAll<HTMLElement>(childSelector)
    );
    if (!children.length) return;

    // Hide via JS only (not CSS)
    children.forEach((child) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(14px)";
    });

    // Hard failsafe
    const failsafe = setTimeout(() => {
      children.forEach((child) => {
        child.style.opacity = "";
        child.style.transform = "";
      });
    }, 2000);

    const observer = new IntersectionObserver(async (entries) => {
      if (!entries[0].isIntersecting) return;
      observer.unobserve(container);
      clearTimeout(failsafe);
      try {
        const anime = await loadAnime();
        children.forEach((child) => { child.style.transition = "none"; });
        anime({
          targets: children,
          opacity: [0, 1],
          translateY: [14, 0],
          duration: 500,
          delay: anime.stagger(staggerMs, { start: initialDelay }),
          easing: "easeOutQuad",
          complete: () => {
            children.forEach((child) => {
              child.style.transition = "";
              child.style.opacity = "";
              child.style.transform = "";
            });
          },
        });
      } catch {
        children.forEach((child) => {
          child.style.transition = "";
          child.style.opacity = "";
          child.style.transform = "";
        });
      }
    }, IO_OPTIONS);

    observer.observe(container);
    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, [childSelector, staggerMs, initialDelay]);

  return ref;
}
