"use client";

import { useEffect, useRef, useState } from "react";

/**
 * RevealOnScroll
 * Wraps children in a div that fades + slides up into view
 * when the element enters the viewport.
 *
 * Props:
 *   className  – additional classes forwarded to the wrapper div
 *   delay      – Tailwind animation-delay class, e.g. "delay-100", "delay-200"
 *   threshold  – IntersectionObserver threshold (default 0.1)
 */
export function RevealOnScroll({
  children,
  className = "",
  delay = "",
  threshold = 0.1,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out",
        delay,
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
