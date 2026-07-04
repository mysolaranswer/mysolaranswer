import Link from "next/link";
import { Sun, Battery, TrendingUp, Home, CircleDollarSign, PiggyBank } from "lucide-react";

const calculators = [
  {
    title: "How Many Solar Panels",
    description: "Calculate exactly how many panels you need based on your monthly electric bill or kWh usage.",
    icon: Sun,
    href: "/calculators/how-many-solar-panels-do-i-need",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Solar Battery Calculator",
    description: "Size your battery bank. Calculate the perfect kWh capacity for your home or off-grid setup.",
    icon: Battery,
    href: "/calculators/solar-battery-calculator",
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Solar ROI Calculator",
    description: "Calculate your return on investment, net cost after incentives, and payback period.",
    icon: TrendingUp,
    href: "/calculators/solar-roi-calculator",
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Off-Grid Solar Calculator",
    description: "Design your complete off-grid system. Get panel, battery, inverter, and controller recommendations.",
    icon: Home,
    href: "/calculators/off-grid-solar-calculator",
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Solar Savings Calculator",
    description: "See how much you could save monthly and over 25 years with solar panels.",
    icon: PiggyBank,
    href: "/calculators/solar-savings-calculator",
    color: "bg-teal-50 text-teal-600",
  },
  {
    title: "Solar Financing Calculator",
    description: "Compare solar loan payments, leases, and PPA options to find the best fit for your budget.",
    icon: CircleDollarSign,
    href: "/calculators/solar-financing-calculator",
    color: "bg-rose-50 text-rose-600",
  },
];

export function CalculatorGrid() {
  return (
    <section id="calculators" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Free Solar Calculators</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Choose a calculator below to get instant, accurate answers for your solar project. No sign-ups, no paywalls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {calculators.map((calc, idx) => (
            <Link 
              key={idx} 
              href={calc.href}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[var(--color-amber)] hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${calc.color}`}>
                <calc.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-navy)] transition-colors">
                {calc.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6 flex-grow">
                {calc.description}
              </p>
              <div className="text-[var(--color-amber)] font-semibold flex items-center gap-2 mt-auto">
                Calculate Now
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
