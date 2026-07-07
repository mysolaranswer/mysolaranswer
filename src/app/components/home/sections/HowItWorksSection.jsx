import Image from "next/image";
import { SketchHighlight } from "@/app/components/ui/SketchHighlight";

export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Calculate Needs",
      description: "Use our free calculators to determine your exact solar needs and potential savings.",
    },
    {
      num: "02",
      title: "Compare Quotes",
      description: "Get matched with top-rated local installers and compare custom quotes.",
    },
    {
      num: "03",
      title: "Start Saving",
      description: "Enjoy reduced energy bills and a more sustainable lifestyle with your new solar system.",
    },
  ];

  return (
    <section
      className="w-full dark-section py-16 lg:py-24 overflow-hidden font-sans"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column - Heading & Diagonal Steps */}
          <div className="lg:col-span-7 flex flex-col order-1">
            
            {/* Main Heading */}
            <div className="text-left mb-16 lg:mb-24">
              <h2 className="font-heading text-white leading-[1.15] tracking-tight">
                Switching To Solar <br className="hidden sm:block"/>
                <SketchHighlight>In 3 Easy Steps</SketchHighlight>
              </h2>
            </div>

            {/* Diagonal "Staircase" Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-start">
              
              {/* Step 01 */}
              <div className="flex flex-col md:pr-6 lg:pr-8">
                <span className="text-5xl lg:text-[4rem] leading-none font-bold text-[var(--color-amber)] mb-6">
                  {steps[0].num}
                </span>
                <h4 className="h4 text-white mb-3">
                  {steps[0].title}
                </h4>
                <p className="body-regular text-[var(--text-body-on-navy)] opacity-80 leading-relaxed">
                  {steps[0].description}
                </p>
              </div>

              {/* Step 02 (Pushed down with mt-24 and left border) */}
              <div className="flex flex-col md:mt-24 md:border-l md:border-[var(--border-divider-on-navy)] md:px-6 lg:px-8">
                <span className="text-5xl lg:text-[4rem] leading-none font-bold text-[var(--color-amber)] mb-6">
                  {steps[1].num}
                </span>
                <h4 className="h4 text-white mb-3">
                  {steps[1].title}
                </h4>
                <p className="body-regular text-[var(--text-body-on-navy)] opacity-80 leading-relaxed">
                  {steps[1].description}
                </p>
              </div>

              {/* Step 03 (Pushed down further with mt-48 and left border) */}
              <div className="flex flex-col md:mt-48 md:border-l md:border-[var(--border-divider-on-navy)] md:pl-6 lg:pl-8">
                <span className="text-5xl lg:text-[4rem] leading-none font-bold text-[var(--color-amber)] mb-6">
                  {steps[2].num}
                </span>
                <h4 className="h4 text-white mb-3">
                  {steps[2].title}
                </h4>
                <p className="body-regular text-[var(--text-body-on-navy)] opacity-80 leading-relaxed">
                  {steps[2].description}
                </p>
              </div>

            </div>
          </div>

          {/* Right Column - Sharp Bento Image Grid */}
          {/* order-2 ensures images drop below text on mobile devices */}
          <div className="lg:col-span-5 w-full h-[450px] sm:h-[600px] lg:h-[700px] order-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full w-full">
              
              {/* Column 1 - Tall Portrait Image */}
              <div className="relative w-full h-full overflow-hidden bg-slate-800 rounded-md">
                <Image
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop"
                  alt="Clear blue sky over solar panels"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Column 2 - Stacked Landscape Images */}
              <div className="grid grid-rows-2 gap-3 sm:gap-4 h-full w-full">
                
                {/* Top Image */}
                <div className="relative w-full h-full overflow-hidden bg-slate-800 rounded-md">
                  <Image
                    src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2069&auto=format&fit=crop"
                    alt="Solar panels on green landscape"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Bottom Image */}
                <div className="relative w-full h-full overflow-hidden bg-slate-800 rounded-md">
                  <Image
                    src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop"
                    alt="Solar panels at sunset"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}