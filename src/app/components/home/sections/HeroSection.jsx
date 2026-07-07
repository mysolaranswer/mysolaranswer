import Image from "next/image";
import { PrimaryButton } from "../../ui/buttons/PrimaryButton";
import { OutlineButton } from "../../ui/buttons/OutlineButton";

export function HeroSection() {
  return (
    <section className="w-full lg:min-h-[calc(100vh-5rem)] min-h-[600px] bg-white flex items-center border-b border-slate-200 font-sans py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          
          {/* Left Column — staggered entrance on page load */}
          <div className="flex flex-col items-start max-w-xl">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#0a192f] 
            leading-[1.15] md:leading-[1.1] mb-6 tracking-tight
            [animation:heroSlideIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]"
            >
              Free Solar Calculators.
              <br />
              <span className="text-[#f59e0b]">Get Your Answers</span>
              <br />
              In Seconds
            </h1>

            <p className="font-body text-[var(--text-body-on-white)] opacity-80 mb-8 max-w-xl leading-relaxed
              [animation:heroSlideIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.25s_both]">
              Free solar calculators for panels, battery, ROI, off-grid & more.
              Calculate your solar system size, savings, and payback period
              instantly. No signup needed.
            </p>

            {/* Responsive Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full
              [animation:heroSlideIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.4s_both]">
              <PrimaryButton href="#calculators">
                Explore Calculators
              </PrimaryButton>
              <OutlineButton href="#how-it-works">How It Works</OutlineButton>
            </div>
          </div>

          {/* Right Column — slides in from the right */}
          <div className="relative h-[300px] sm:h-[350px] lg:h-[380px] xl:h-[420px] w-full bg-slate-100 group
            [animation:heroSlideIn_0.9s_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">
            <Image
              src="/solar-panel-calculators-for-homeowners.jpg"
              alt="Modern solar panels on a roof"
              fill
              className="object-cover grayscale-[15%] contrast-[1.05] transition-all duration-700 rounded-md"
              priority
            />

            {/* Geometric Framing Accents */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-4 border-b-4 border-[#0a192f] pointer-events-none hidden lg:block "></div>

            {/* Enhanced Information Badge */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-18 h-18 md:w-20 md:h-20 bg-[#0a192f] rounded-full shadow-2xl flex flex-col items-center justify-center text-white border-4 border-white transition-transform duration-300 hover:scale-105 z-10">
              <span className="text-sm md:text- xl font-bold tracking-tighter text-white">
                100%
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#f59e0b] mt-1">
                Free
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
