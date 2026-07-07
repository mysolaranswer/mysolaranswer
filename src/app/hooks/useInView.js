"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns a [ref, isInView] pair.
 * Once the element enters the viewport it stays "in view" (fires once).
 * @param {number} threshold - 0 to 1, how much of the element must be visible
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // fire once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
