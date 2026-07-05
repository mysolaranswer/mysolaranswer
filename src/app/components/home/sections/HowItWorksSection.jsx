import Image from "next/image";

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
    <section className="w-full dark-section py-20 lg:py-32 overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-12 items-center">
          
          {/* Left Column - Heading & Diagonal Steps */}
          <div className="flex flex-col lg:col-span-3 order-2 lg:order-1">
            <div className="text-left mb-12">
              <h2 className="h2 text-white">
                Switching To Solar <br className="hidden lg:block"/> In 3 Easy Steps
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-4 lg:gap-6">
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-2 gap-4 items-center md:flex md:flex-col md:items-start text-left group ${idx !== 0 ? 'md:border-l md:border-[var(--border-divider-on-navy)] md:pl-4 lg:pl-6' : 'md:pr-4 lg:pr-6'} ${idx === 1 ? 'md:mt-12 lg:mt-20' : idx === 2 ? 'md:mt-24 lg:mt-40' : ''}`}
                >
                  <div className="flex flex-row items-center gap-3 md:flex-col md:items-start md:gap-0 mb-0 md:mb-2 lg:mb-4">
                    <div className="text-amber font-bold text-xl md:text-4xl lg:text-5xl md:mb-2 lg:mb-4">
                      {step.num}
                    </div>
                    <h4 className="h4 text-white text-xl md:text-base lg:text-lg">{step.title}</h4>
                  </div>
                  <p className="text-sm md:text-sm lg:text-base text-[var(--text-body-on-navy)] leading-tight lg:leading-snug">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px] lg:h-[600px] lg:col-span-2 order-1 lg:order-2">
            {/* Col 1 - 1 Portrait Image */}
            <div className="relative w-full h-full overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop" 
                alt="Solar installation process 1" 
                fill
                className="object-cover"
              />
            </div>
            {/* Col 2 - 2 Rows of Images */}
            <div className="grid grid-rows-2 gap-4 h-full">
              <div className="relative w-full h-full overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2069&auto=format&fit=crop" 
                  alt="Solar installation process 2" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-full overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop" 
                  alt="Solar installation process 3" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
