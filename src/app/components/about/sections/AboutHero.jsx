import Image from "next/image";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";

export default function AboutHero() {
  return (
    <section className="w-full min-h-[calc(100vh-5rem)] bg-white flex items-start lg:items-center pt-6 pb-14 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Increased mobile gap from gap-5 to gap-8 for better breathing room */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start max-w-xl order-1">
            <RevealOnScroll animation="reveal-left">
              {/* 
                FIX 1: Removed `className="hidden lg:block"` from the <br />. 
                Now "Not a sales pitch." will ALWAYS start on a new line, 
                stopping the awkward wrapping seen in the screenshot.
              */}
              <h1 className="text-[36px] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-navy 
            leading-[1.1] mb-5 md:mb-6 tracking-tight
            [animation:heroSlideIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]">
                Solar is a math equation.<br />
                <span className="text-amber">Not a sales pitch.</span>
              </h1>

              <div className="space-y-5 md:space-y-6 max-w-xl mb-6 md:mb-8">
                {/* FIX 2: Added text-[15px] on mobile so it doesn't look like a massive block of dense text */}
                <p className="font-body text-navy/80 leading-relaxed text-[15px] sm:text-base md:text-lg">
                  If you want to know the price of a new roof, you can look it up in seconds. But if you want to know the price of solar panels, you have to hand over your phone number and endure endless calls from aggressive reps.
                </p>
                
                {/* FIX 3: Cleaned up the sub-heading spacing */}
                <div className="pt-1 border-l-2 border-amber/30 pl-4 sm:border-0 sm:pl-0">
                  <p className="text-xl sm:text-2xl font-heading text-navy leading-tight tracking-tight">
                    We got tired of it. <br className="block sm:hidden" />
                    So we built MySolarAnswer.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Image */}
          <div className="w-full relative z-10 order-2">
            <RevealOnScroll animation="reveal-right" delay="delay-100">
              {/* FIX 4: Changed aspect-[2/1] back to aspect-[16/9] so it looks like a real photo */}
              <div className="relative w-full aspect-[16/9] lg:aspect-[5/4] rounded-2xl sm:rounded-3xl overflow-hidden border border-navy/10 shadow-2xl">
                <Image
                  src="/solar-panels-image-for-solar-calculators-site.jpg"
                  alt="Modern home with residential solar panels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-navy/10 mix-blend-multiply pointer-events-none"></div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}