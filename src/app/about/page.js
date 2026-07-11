import { PageHero } from "../components/ui/hero/PageHero";
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

      <PageHero
        title="Solar is a math equation."
        titleHighlight="Not a sales pitch."
        backgroundImageUrl="/solar-panels-image-for-solar-calculators-site.jpg"
        imageAlt="Modern home with residential solar panels"
      >
        <p className="body-large text-[var(--color-white)]/90 mb-6">
          Finding the price of a new roof takes seconds. But pricing solar panels usually means surrendering your phone number and dodging aggressive sales calls.
        </p>
        <div className="pt-1 border-l-2 border-[var(--color-amber)]/50 pl-4">
          <p className="text-xl sm:text-2xl font-bold text-[var(--color-white)] leading-tight tracking-tight">
            We got tired of it. <br className="block sm:hidden" />
            So we built MySolarAnswer.
          </p>
        </div>
      </PageHero>

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
