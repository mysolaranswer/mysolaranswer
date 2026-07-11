import Image from "next/image";
import { CircleDollarSign, Zap, Leaf, Home } from "lucide-react";
import { SketchHighlight } from "@/app/components/ui/elements/SketchHighlight";

export function WhyUseMySolarAnswer() {
  const benefits = [
    {
      title: "Significant Cost Savings",
      description:
        "Cut your monthly electricity bills up to 70% with accurate solar sizing.",
      icon: CircleDollarSign,
    },
    {
      title: "Energy Independence",
      description:
        "Escape unpredictable energy rates and outages by calculating off-grid needs.",
      icon: Zap,
    },
    {
      title: "Eco-Friendly Solution",
      description:
        "Lower carbon emissions and promote a cleaner planet with renewable energy.",
      icon: Leaf,
    },
    {
      title: "Increased Property Value",
      description:
        "Homes with optimized solar panels sell faster and at higher prices.",
      icon: Home,
    },
  ];

  return (
    <section className="w-full bg-[var(--bg-page)] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 flex flex-col items-center">
          {/* Prominent Heading with Refined Sketch Underline */}
          <h2 className="h2 mb-6">
            <SketchHighlight>Why Choose Us</SketchHighlight>
          </h2>

          {/* Sub Heading */}
          <h3 className="font-sub-heading mb-4 text-[var(--color-navy)] font-medium">
            Unlock the power of{" "}
            <span className="text-[var(--color-amber)]">Solar Energy.</span>
          </h3>

          {/* Description */}
          <p className="body-large text-[var(--text-body-on-white)] opacity-75">
            Make informed decisions instantly. Our calculators provide precise
            data to help you transition to renewable energy seamlessly and
            profitably.
          </p>
        </div>

        {/* Features: High-Contrast Default State for Mobile & Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {benefits.map((benefit, idx) => {
            const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
            return (
              <div key={idx} className="group relative flex flex-col p-6 sm:p-7 rounded-md bg-gradient-to-b from-[var(--color-white)] to-[var(--color-navy)]/[0.03] border border-[var(--border-divider)] hover:border-[var(--color-amber)]/40 hover:shadow-[0_16px_40px_-12px_rgba(13,27,42,0.12)] transition-all duration-500 overflow-hidden">
                {/* Brand Ambient Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-amber)]/0 via-transparent to-[var(--color-amber)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                {/* Clean Icon with permanent brand presence */}
                <div className="mb-5 flex items-center justify-between">
                  <benefit.icon
                    className="w-7 h-7 text-[var(--color-navy)] group-hover:text-[var(--color-amber)] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                  <span className="text-[var(--font-size-label)] font-bold text-[var(--color-navy)]/10 font-inter">
                    0{idx + 1}
                  </span>
                </div>

                {/* Permanent divider line */}
                <div className="w-10 h-[2px] bg-[var(--color-navy)]/10 mb-4 group-hover:bg-[var(--color-amber)] transition-colors duration-300" />

                <h4 className="h4 mb-2 text-[var(--color-navy)]">
                  {benefit.title}
                </h4>
                <p className="body-regular text-[var(--text-body-on-white)] opacity-75">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
