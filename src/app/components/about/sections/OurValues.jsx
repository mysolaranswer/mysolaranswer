import React from 'react';
import { ShieldCheck, Unlock, ThumbsUp } from 'lucide-react';
import { SketchHighlight } from "@/app/components/ui/elements/SketchHighlight";

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
    <section className="w-full bg-[var(--bg-page)] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        {/* Widened to max-w-4xl so the desktop text has plenty of room to stretch */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16 flex flex-col items-center">
          
          {/* Added sm:whitespace-nowrap to strictly enforce 1 line on desktop */}
          <h2 className="font-heading text-[var(--color-navy)] tracking-tight mb-4 sm:mb-6 text-[32px] sm:text-4xl lg:text-5xl font-bold leading-[1.15] sm:leading-tight sm:whitespace-nowrap">
            Why Are Our Tools <br className="block sm:hidden" />
            <SketchHighlight>Completely Free?</SketchHighlight>
          </h2>
          
          <p className="font-body text-[var(--text-body-on-white)] opacity-75 text-base md:text-lg max-w-2xl whitespace-normal">
            At MySolarAnswer, our values are the driving force behind everything. We want to empower homeowners, not exploit them.
          </p>
        </div>

        {/* Features: High-Contrast Default State for Mobile & Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {values.map((value, idx) => {
            const delays = ["delay-100", "delay-200", "delay-300"];
            return (
              <div key={idx} className="group relative flex flex-col p-6 sm:p-7 rounded-md bg-gradient-to-b from-[var(--color-white)] to-[var(--color-navy)]/[0.03] border border-[var(--border-divider)] hover:border-[var(--color-amber)]/40 hover:shadow-[0_16px_40px_-12px_rgba(13,27,42,0.12)] transition-all duration-500 overflow-hidden">
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

                <h4 className="text-[1.1rem] font-bold mb-2 text-[var(--color-navy)] relative z-10">
                  {value.title}
                </h4>
                <p className="font-body text-[var(--text-body-on-white)] opacity-75 leading-relaxed text-sm relative z-10">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}