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

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[var(--bg-page)] min-h-screen">
      <HeroSection />
      <WhyUseMySolarAnswer/>
      <CalculatorsGridSection />
      <HowItWorksSection />
      <FAQSection />
      <BlogPreviewSection />
      <CTASection />
    </div>
  );
}
