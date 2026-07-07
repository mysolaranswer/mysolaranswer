import React from 'react';
import { ShieldCheck, Unlock, ThumbsUp } from 'lucide-react';
import { SketchHighlight } from "@/app/components/ui/SketchHighlight";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";

const values = [
  {
    icon: Unlock,
    title: "Always Free",
    description: "Our tools are free because we believe everyone deserves access to clear solar information. We earn through non-intrusive advertising."
  },
  {
    icon: ShieldCheck,
    title: "Total Transparency",
    description: "We don't hide our formulas. We openly share where our data comes from so you can trust the numbers you see."
  },
  {
    icon: ThumbsUp,
    title: "User First",
    description: "No mandatory email captures. No aggressive retargeting. You get the answers you need and move on with your research."
  }
];

export default function OurValues() {
  return (
    <section className="w-full py-16 lg:py-24 bg-[var(--bg-page)] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 flex flex-col items-center">
          <h2 className="font-heading text-[var(--color-navy)] tracking-tight mb-6 text-3xl md:text-4xl lg:text-5xl font-bold">
            <SketchHighlight>Why Are Our Tools Completely Free?</SketchHighlight>
          </h2>
          <p className="font-body text-[var(--text-body-on-white)] opacity-75 text-base md:text-lg">
            At MySolarAnswer, our values are the driving force behind everything. We want to empower homeowners, not exploit them.
          </p>
        </RevealOnScroll>

        {/* Features: High-Contrast Default State for Mobile & Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {values.map((value, idx) => {
            const delays = ["delay-100", "delay-200", "delay-300"];
            return (
              <RevealOnScroll key={idx} delay={delays[idx]} className="group relative flex flex-col p-6 sm:p-7 rounded-md bg-gradient-to-b from-[var(--color-white)] to-[var(--color-navy)]/[0.03] border border-[var(--border-divider)] hover:border-[var(--color-amber)]/40 hover:shadow-[0_16px_40px_-12px_rgba(13,27,42,0.12)] transition-all duration-500 overflow-hidden">
                {/* Brand Ambient Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-amber)]/0 via-transparent to-[var(--color-amber)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                {/* Clean Icon with permanent brand presence */}
                <div className="mb-5 flex items-center justify-between">
                  <value.icon
                    className="w-7 h-7 text-[var(--color-navy)] group-hover:text-[var(--color-amber)] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                  <span className="text-[var(--font-size-label)] font-bold text-[var(--color-navy)]/10 font-inter text-2xl">
                    0{idx + 1}
                  </span>
                </div>

                {/* Permanent divider line */}
                <div className="w-10 h-[2px] bg-[var(--color-navy)]/10 mb-4 group-hover:bg-[var(--color-amber)] transition-colors duration-300" />

                <h4 className="text-[1.1rem] font-bold mb-2 text-[var(--color-navy)]">
                  {value.title}
                </h4>
                <p className="font-body text-[var(--text-body-on-white)] opacity-75 leading-relaxed text-sm">
                  {value.description}
                </p>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
