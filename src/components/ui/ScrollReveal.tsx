"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = ref.current;
    if (!wrapper) return;

    const revealEls = Array.from(
      wrapper.querySelectorAll<HTMLElement>(".reveal")
    );
    if (!revealEls.length) return;

    // --- STEP 1: Hide elements via JS (NOT CSS) ---
    // This way, if JS is disabled or animejs fails, the CSS fallback
    // (which keeps content visible) takes over naturally.
    revealEls.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
    });

    // --- STEP 2: Hard failsafe — make everything visible after 2s ---
    // This guarantees content is never stuck invisible.
    const failsafeTimer = setTimeout(() => {
      revealEls.forEach((el) => {
        el.style.transition = "";
        el.style.opacity = "";
        el.style.transform = "";
        el.classList.add("active");
      });
    }, 2000);

    // --- STEP 3: Intersection Observer ---
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.unobserve(wrapper);

        // Map each element to its stagger delay
        const withDelay = revealEls.map((el) => {
          const dc = Array.from(el.classList).find((c) =>
            c.startsWith("reveal-delay-")
          );
          const delay = dc
            ? parseInt(dc.replace("reveal-delay-", ""), 10) * 100
            : 0;
          return { el, delay };
        });

        // --- STEP 4: Try animejs, fall back to CSS class ---
        import("animejs")
          .then((mod) => {
            clearTimeout(failsafeTimer);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const anime: any =
              typeof mod.default === "function" ? mod.default : mod;

            withDelay.forEach(({ el, delay }) => {
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
                  el.classList.add("active");
                },
              });
            });
          })
          .catch(() => {
            // animejs failed — CSS fallback
            clearTimeout(failsafeTimer);
            revealEls.forEach((el) => {
              el.style.transition = "";
              el.style.opacity = "";
              el.style.transform = "";
              el.classList.add("active");
            });
          });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(wrapper);

    return () => {
      observer.disconnect();
      clearTimeout(failsafeTimer);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
