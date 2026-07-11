import AboutHero from "../components/about/sections/AboutHero";
import TheProblem from "../components/about/sections/TheProblem";
import Methodology from "../components/about/sections/Methodology";
import WhoWeAre from "../components/about/sections/WhoWeAre";
import OurValues from "../components/about/sections/OurValues";
import { CTASection } from "../components/home/sections/CTASection";

export const metadata = {
  title: "About Us | My Solar Answer",
  description: "We built MySolarAnswer to provide clear, unbiased solar estimates without the pushy sales calls.",
};

// Single source of truth for section spacing across the about page
const SP = "py-12 lg:py-16";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--bg-page)] min-h-screen">

      {/* Hero — manages its own viewport-height layout */}
      <AboutHero />

      {/* All content sections share the same vertical rhythm */}
      <div className={`${SP} border-t border-[var(--border-divider)]`}>
        <TheProblem />
      </div>

      <div className={`${SP} border-t border-[var(--border-divider)]`}>
        <WhoWeAre />
      </div>

      <div className={`${SP} border-t border-[var(--border-divider)]`}>
        <OurValues />
      </div>

      <div className={`${SP} border-t border-[var(--border-divider)]`}>
        <Methodology />
      </div>

      <div className={`${SP} border-t border-[var(--border-divider)]`}>
        <CTASection />
      </div>

    </div>
  );
}
