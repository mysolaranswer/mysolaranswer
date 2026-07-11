import Link from "next/link";
import { SecondaryButton } from "@/app/components/ui/buttons/SecondaryButton";
import { SketchHighlight } from "@/app/components/ui/SketchHighlight";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";

export function CTASection() {
  return (
    <section className="w-full bg-[var(--bg-page)]">
      <RevealOnScroll className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-amber)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-amber)]"></span>
          </span>
          <span className="text-xs font-bold text-[var(--color-navy)] uppercase tracking-[0.15em]">
            Ready to get started?
          </span>
        </div>

        <h2 className="font-heading text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.1] text-[var(--color-navy)] mb-6">
          Calculate Your <br className="md:hidden" />
          <SketchHighlight>Solar Savings</SketchHighlight> Today!
        </h2>

        <p className="font-body text-[var(--text-body-on-white)] opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
          Interested in switching to solar? Let's work together to find the
          perfect solution for your home or business with our free
          professional-grade calculator tools.
        </p>

        <div className="flex justify-center">
          <SecondaryButton 
            href="/calculators" 
            showArrow={true}
            className="!px-10 !py-4 !text-lg shadow-lg hover:shadow-xl"
          >
            Calculate Now
          </SecondaryButton>
        </div>
      </RevealOnScroll>
    </section>
  );
}
