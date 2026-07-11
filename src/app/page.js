import { HeroSection } from "./components/home/sections/HeroSection";
import { CalculatorsGridSection } from "./components/home/sections/CalculatorsGridSection";
import { HowItWorksSection } from "./components/home/sections/HowItWorksSection";
import { FAQSection } from "./components/home/sections/FAQSection";
import { BlogPreviewSection } from "./components/home/sections/BlogPreviewSection";
import { CTASection } from "./components/home/sections/CTASection";
import { WhyUseMySolarAnswer } from "./components/home/sections/WhyUseMySolarAnswer";

export const metadata = {
  title: "Free Solar Calculators — Get Instant Answers",
  description: "Free solar calculators for panels, battery, ROI, off-grid & more. Calculate your solar system size, savings, and payback period instantly. No signup needed.",
};

// Single source of truth for section spacing across the home page
const SP = "py-12 lg:py-16";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[var(--bg-page)] min-h-screen">

      {/* Hero — manages its own viewport-height layout */}
      <HeroSection />

      {/* All content sections below share the same vertical rhythm */}
      <div className={`${SP} border-t border-[var(--border-divider)]`}>
        <WhyUseMySolarAnswer />
      </div>

      <div className={`${SP} border-t border-[var(--border-divider)]`} id="calculators">
        <CalculatorsGridSection />
      </div>

      {/* Dark section — bg applied here so it stretches full-width */}
      <div className={`${SP} dark-section bg-[var(--color-navy)]`} id="how-it-works">
        <HowItWorksSection />
      </div>

      <div className={`${SP} border-t border-[var(--border-divider)] bg-[var(--bg-page)]`} id="faq">
        <FAQSection />
      </div>

      <div className={`${SP} border-t border-[var(--border-divider)]`}>
        <BlogPreviewSection />
      </div>

      <div className={`${SP} border-t border-[var(--border-divider)]`}>
        <CTASection />
      </div>

    </div>
  );
}
