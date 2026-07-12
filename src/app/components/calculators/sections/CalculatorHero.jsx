import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";

export function CalculatorHero({ title, highlight, description }) {
  return (
    <RevealOnScroll className="text-center mb-12 lg:mb-16">
      <h1 className="h1 text-[var(--color-navy)] mb-6 leading-tight">
        {title} <br className="hidden sm:block" />
        <span className="text-[var(--color-amber)]">{highlight}</span>
      </h1>
      <p className="font-body text-[var(--text-body)] text-lg leading-relaxed max-w-2xl mx-auto">
        {description}
      </p>
    </RevealOnScroll>
  );
}
