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
    <section className="w-full dark-section py-20 lg:py-32" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          
          <h2 className="h2 text-white">
            Switching To Solar <br className="hidden md:block"/> In 3 Easy Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative">
              {/* Divider Line */}
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] right-[-40%] h-[1px] bg-[var(--border-divider-on-navy)] z-0"></div>
              )}
              
              <div className="relative z-10 w-16 h-16 rounded-full bg-navy border border-amber text-amber flex items-center justify-center font-bold text-xl mb-6 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                {step.num}
              </div>
              
              <h3 className="h3 text-white mb-4">{step.title}</h3>
              <p className="body-regular text-[var(--text-body-on-navy)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
