"use client";

import { useInView } from "@/app/hooks/useInView";

/**
 * Wraps children in a div that fades + slides up when scrolled into view.
 * @param {string} animation - "reveal" | "reveal-left" | "reveal-right" | "reveal-scale"
 * @param {string} delay - e.g. "delay-100" | "delay-200" etc.
 * @param {string} className - additional classes on the wrapper
 */
export function RevealOnScroll({ children, animation = "reveal", delay = "", className = "" }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`${animation} ${inView ? "in-view" : ""} ${delay} ${className}`}
    >
      {children}
    </div>
  );
}
