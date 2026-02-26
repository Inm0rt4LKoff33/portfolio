"use client";

import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>(".reveal");

    // Assign CSS transition-delay per element so stagger works
    // regardless of how IntersectionObserver batches entries
    items.forEach((item, i) => {
      item.style.transitionDelay = `${i * 80}ms`;
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target); // animate once, then stop watching
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => obs.observe(item));

    return () => obs.disconnect();
  }, []);

  return ref;
}