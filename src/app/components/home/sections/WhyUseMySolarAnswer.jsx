import Image from "next/image";
import { CircleDollarSign, Zap, Leaf, Home } from "lucide-react";

export function WhyUseMySolarAnswer() {
  const benefits = [
    {
      title: "Significant Cost Savings",
      description: "Cut your monthly electricity bills up to 70% with accurate solar sizing.",
      icon: CircleDollarSign,
    },
    {
      title: "Energy Independence",
      description: "Escape unpredictable energy rates and outages by calculating off-grid needs.",
      icon: Zap,
    },
    {
      title: "Eco-Friendly Solution",
      description: "Lower carbon emissions and promote a cleaner planet with renewable energy.",
      icon: Leaf,
    },
    {
      title: "Increased Property Value",
      description: "Homes with optimized solar panels sell faster and at higher prices.",
      icon: Home,
    },
  ];

  return (
    <section className="w-full dark-section py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col items-start mb-16">
          
          <h2 className="h2 mb-6">
            Why Use Our Solar Calculators
          </h2>
          <p className="body-large text-[var(--text-body-on-navy)] max-w-2xl">
            Unlock the power of solar energy and enjoy long-term advantages with our precise and free calculators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left - Image */}
          <div className="flex flex-col items-start">
            
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/why-use-our-solar-calculators.jpg" 
                alt="Why use our solar calculators" 
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - List of Benefits */}
          <div className="flex flex-col gap-10">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-amber/20 flex items-center justify-center border border-amber/30 group-hover:bg-amber group-hover:text-navy transition-colors">
                  <benefit.icon className="w-6 h-6 text-amber group-hover:text-navy transition-colors" />
                </div>
                <div>
                  <h3 className="h4 text-white mb-2">{benefit.title}</h3>
                  <p className="body-regular text-[var(--text-body-on-navy)]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
