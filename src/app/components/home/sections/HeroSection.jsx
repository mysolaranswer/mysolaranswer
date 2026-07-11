import { PrimaryButton } from "../../ui/buttons/PrimaryButton";
import { OutlineButton } from "../../ui/buttons/OutlineButton";
import { QuickEstimateCalculator } from "../QuickEstimateCalculator";

export function HeroSection() {
  return (
    <section className="w-full lg:min-h-[calc(100vh-5rem)] bg-[var(--bg-page)] flex items-start lg:items-center border-b border-[var(--border-divider)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-16 lg:gap-24 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col items-start max-w-xl">
            <h1
              className="h1 mb-3 md:mb-6 tracking-tight
            [animation:heroSlideIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]"
            >
              Free Solar Calculators.
              <br />
              <span className="text-[var(--color-amber)]">Get Your Answers</span>
              <br />
              In Seconds
            </h1>

            <p className="body-large text-[var(--text-body-on-white)] opacity-80 mb-4 md:mb-8 max-w-xl
              [animation:heroSlideIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.25s_both]">
              Free solar calculators for panels, battery, ROI, off-grid &amp; more.
              Calculate your solar system size, savings, and payback period
              instantly. No signup needed.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 w-full
              [animation:heroSlideIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.4s_both]">
              <PrimaryButton href="#calculators">
                Explore Calculators
              </PrimaryButton>
              <OutlineButton href="#how-it-works">How It Works</OutlineButton>
            </div>
          </div>

          {/* Right Column — Quick Estimate Calculator */}
          <div className="w-full lg:w-[80%] lg:mx-auto relative z-10">
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-4 border-b-4 border-[var(--color-navy)] pointer-events-none hidden lg:block"></div>
            <QuickEstimateCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}
