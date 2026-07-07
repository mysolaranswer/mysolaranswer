import AboutHero from "../components/about/sections/AboutHero";
import TheProblem from "../components/about/sections/TheProblem";
import Methodology from "../components/about/sections/Methodology";
import WhoWeAre from "../components/about/sections/WhoWeAre";
import OurValues from "../components/about/sections/OurValues";

// Imported from Home
import { CalculatorsGridSection } from "../components/home/sections/CalculatorsGridSection";
import { CTASection } from "../components/home/sections/CTASection";

export const metadata = {
  title: "About Us | My Solar Answer",
  description: "We built MySolarAnswer to provide clear, unbiased solar estimates without the pushy sales calls.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--bg-main)] min-h-screen">
      {/* 1. Hero / Mission Statement */}
      <AboutHero />

      {/* 2. The Problem We Solve & 7. Accuracy Disclaimer */}
      <TheProblem />

      {/* 5. Who We Are & 8. Stats Bar */}
      <WhoWeAre />

      {/* 6. Our Values / Why Free */}
      <OurValues />

      {/* 3. What We Offer (Tool Overview - Replaced by CalculatorsGridSection) */}
      <CalculatorsGridSection />

      {/* 4. How Our Calculators Work (Methodology) */}
      <Methodology />

      {/* 9. CTA (Replaced by Home CTASection) */}
      <CTASection />
    </div>
  );
}
