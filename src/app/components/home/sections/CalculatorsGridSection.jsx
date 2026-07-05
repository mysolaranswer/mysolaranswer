import Link from "next/link";
import { Battery, TrendingUp, Home, Sun } from "lucide-react";

export function CalculatorsGridSection() {
  const calculators = [
    {
      title: "Battery Calculator",
      description: "Size your battery bank correctly based on your daily energy consumption and desired autonomy.",
      icon: Battery,
      href: "/calculators/solar-battery-calculator",
    },
    {
      title: "ROI Calculator",
      description: "Discover your breakeven point and calculate your long-term savings from going solar.",
      icon: TrendingUp,
      href: "/calculators/solar-roi-calculator",
    },
    {
      title: "Off-Grid Calculator",
      description: "Design a complete off-grid system including panels, batteries, and charge controllers.",
      icon: Home,
      href: "/calculators/off-grid-solar-calculator",
    },
    {
      title: "Panel Calculator",
      description: "Determine exactly how many solar panels you need to offset your electricity usage.",
      icon: Sun,
      href: "/calculators/how-many-solar-panels",
    },
  ];

  return (
    <section className="w-full bg-[var(--bg-page)] py-20 lg:py-32" id="calculators">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="h2 text-black mb-16">
          Our Popular Calculators
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
          {calculators.map((calc, idx) => (
            <Link 
              key={idx} 
              href={calc.href}
              className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-[var(--bg-card-on-white)] border border-[var(--border-divider)] hover:border-amber hover:shadow-[0_8px_30px_rgba(245,158,11,0.12)] transition-all group"
            >
              <div className="flex-shrink-0">
                <calc.icon className="w-8 h-8 text-amber group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h4 className="h4 text-black mb-3">{calc.title}</h4>
                <p className="body-regular text-gray-600 mb-6">
                  {calc.description}
                </p>
                <span className="label text-navy flex items-center gap-2 group-hover:text-amber transition-colors">
                  Calculate Now 
                  <span className="font-normal">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
