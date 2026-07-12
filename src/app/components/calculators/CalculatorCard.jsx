import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";

export function CalculatorCard({ calc, index }) {
  return (
    <RevealOnScroll delay={`delay-${(index % 4) * 100}`}>
      <Link 
        href={calc.href}
        className="group relative flex flex-col h-full p-6 sm:p-7 rounded-md bg-gradient-to-b from-[var(--color-white)] to-[var(--color-navy)]/[0.03] border border-[var(--border-divider)] hover:border-[var(--color-amber)]/40 hover:shadow-[0_16px_40px_-12px_rgba(13,27,42,0.12)] transition-all duration-500 overflow-hidden"
      >
        {/* Brand Ambient Glow on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-amber)]/0 via-transparent to-[var(--color-amber)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

        {/* Clean Icon with permanent brand presence */}
        <div className="mb-5 flex items-center justify-between relative z-10">
          <calc.icon
            className="w-7 h-7 text-[var(--color-navy)] group-hover:text-[var(--color-amber)] transition-colors duration-300"
            strokeWidth={1.5}
          />
          <span className="text-xs font-bold text-[var(--color-navy)]/30 font-inter uppercase tracking-widest group-hover:text-[var(--color-amber)]/60 transition-colors duration-300">
            {calc.category}
          </span>
        </div>

        {/* Permanent divider line */}
        <div className="relative z-10 w-10 h-[2px] bg-[var(--color-navy)]/10 mb-4 group-hover:bg-[var(--color-amber)] transition-colors duration-300" />
        
        <h2 className="relative z-10 h4 mb-2 text-[var(--color-navy)]">
          {calc.title}
        </h2>
        
        <p className="relative z-10 body-regular text-[var(--text-body-on-white)] opacity-75 mb-6 flex-grow">
          {calc.desc}
        </p>

        {/* Subtle CTA at the bottom */}
        <div className="relative z-10 flex items-center gap-2 text-sm font-bold text-[var(--color-navy)]/60 mt-auto group-hover:text-[var(--color-amber)] transition-colors duration-300">
          Launch Tool
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </RevealOnScroll>
  );
}
