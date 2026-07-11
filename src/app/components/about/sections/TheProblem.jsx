import React from 'react';
import { HelpCircle, PhoneOff, Calculator } from 'lucide-react';
import { SketchHighlight } from "@/app/components/ui/SketchHighlight";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";

const problems = [
  {
    icon: HelpCircle,
    title: "Solar is Confusing",
    description: "Net metering, federal tax credits, panel degradation—it’s a lot to process. Most sites hide the simple answers behind industry jargon."
  },
  {
    icon: PhoneOff,
    title: "Pushy Sales Tactics",
    description: "Getting a simple quote usually means handing over your phone number to 5 different companies who will call you relentlessly for weeks."
  },
  {
    icon: Calculator,
    title: "Inaccurate Estimates",
    description: "Many online calculators use outdated utility rates or overly optimistic sun-hour data just to make the ROI look better than it actually is."
  }
];

export default function TheProblem() {
  return (
    <section className="w-full bg-[var(--bg-page)] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 flex flex-col items-center">
          <h2 className="font-heading text-[var(--color-navy)] tracking-tight mb-6 text-3xl md:text-4xl lg:text-5xl font-bold">
            <SketchHighlight>The Problem We Solve</SketchHighlight>
          </h2>
          <p className="font-body text-[var(--text-body-on-white)] opacity-75 text-base md:text-lg">
            We exist to fix a broken process. Finding out if solar makes sense for your home shouldn't be a painful, high-pressure experience.
          </p>
        </RevealOnScroll>

        {/* Features: High-Contrast Default State for Mobile & Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {problems.map((problem, idx) => {
            const delays = ["delay-100", "delay-200", "delay-300"];
            return (
              <RevealOnScroll key={idx} delay={delays[idx]} className="group relative flex flex-col p-6 sm:p-7 rounded-md bg-gradient-to-b from-[var(--color-white)] to-[var(--color-navy)]/[0.03] border border-[var(--border-divider)] hover:border-[var(--color-amber)]/40 hover:shadow-[0_16px_40px_-12px_rgba(13,27,42,0.12)] transition-all duration-500 overflow-hidden">
                {/* Brand Ambient Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-amber)]/0 via-transparent to-[var(--color-amber)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                {/* Clean Icon with permanent brand presence */}
                <div className="mb-5 flex items-center justify-between">
                  <problem.icon
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
                  {problem.title}
                </h4>
                <p className="font-body text-[var(--text-body-on-white)] opacity-75 leading-relaxed text-sm">
                  {problem.description}
                </p>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
