import Link from "next/link";
import { Battery, TrendingUp, Home, Sun, ArrowRight, PiggyBank, CreditCard } from "lucide-react";
import { SketchHighlight } from "@/app/components/ui/SketchHighlight";

export function CalculatorsGridSection() {
  const calculators = [
    {
      title: "Battery Calculator",
      description: "Size your battery bank correctly based on your daily energy consumption and desired autonomy.",
      icon: Battery,
      href: "/calculators/solar-battery-calculator",
      tag: "Popular",
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
    {
      title: "Savings Calculator",
      description: "Calculate your exact monthly and lifetime utility bill reductions after making the switch.",
      icon: PiggyBank,
      href: "/calculators/solar-savings-calculator",
    },
    {
      title: "Financing Calculator",
      description: "Compare cash purchases, solar loans, and leases to find the smartest way to fund your system.",
      icon: CreditCard,
      href: "/calculators/solar-financing-calculator",
    },
  ];

  return (
    <section 
      className="w-full bg-[var(--bg-page)] font-sans relative" 
      id="calculators"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 items-start">
          
          {/* Left Column: Context */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 flex flex-col justify-center items-start">
            <div>
              <h2 className="h2 mb-2">
                <SketchHighlight>Calculate your</SketchHighlight>
              </h2>
              <h2 className="h2 mb-4">
                <span className="text-[var(--color-amber)]">solar future.</span>
              </h2>
              
              <div className="pl-5 border-l-2 border-[var(--color-amber)]/50 mb-8 sm:mb-10">
                <p className="body-large text-[var(--color-navy)]/70 max-w-md">
                  Take the guesswork out of your solar journey. Use our professional-grade software tools to plan, size, and estimate your perfect setup in seconds—absolutely free.
                </p>
              </div>

              <Link 
                href="/calculators"
                className="group relative inline-flex items-center gap-2 text-[var(--color-navy)] hover:text-[var(--color-amber)] transition-colors duration-300 w-max font-bold text-base sm:text-lg py-2"
              >
                <span className="relative z-10">Explore All Calculators</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" strokeWidth={2.5} />
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--color-amber)] origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100" />
              </Link>
            </div>
          </div>

          {/* Right Column: Grid */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
              {calculators.map((calc, idx) => (
                <CalcCard key={idx} calc={calc} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Adaptive Card Component
function CalcCard({ calc }) {
  return (
    <Link 
      href={calc.href}
      className="group relative flex flex-col p-4 sm:p-7 lg:p-8 rounded-md bg-[var(--bg-card-on-white)] border border-[var(--color-navy)]/10 hover:border-[var(--color-amber)]/40 hover:shadow-[0_16px_40px_-12px_rgba(13,27,42,0.12)] transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-amber)]/0 via-transparent to-[var(--color-amber)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-row sm:flex-col h-full gap-4 sm:gap-0 items-center sm:items-start">
        
        {/* HEADER */}
        <div className="flex sm:w-full items-start justify-between sm:mb-8 shrink-0">
          <div className="w-12 h-12 rounded-xl sm:rounded-[0.85rem] bg-[var(--color-navy)]/5 border border-[var(--color-navy)]/5 flex items-center justify-center sm:group-hover:-translate-y-1 group-hover:bg-[var(--color-navy)] group-hover:border-[var(--color-navy)] transition-all duration-500 shadow-sm">
            <calc.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-navy)] group-hover:text-[var(--color-white)] transition-colors duration-500" strokeWidth={1.5} />
          </div>
          
          {calc.tag && (
            <span className="hidden sm:block px-3 py-1.5 rounded-full bg-[var(--color-navy)] text-[var(--color-white)] text-[9px] font-bold tracking-widest uppercase shadow-md shadow-[var(--color-navy)]/10">
              {calc.tag}
            </span>
          )}
        </div>

        {/* BODY */}
        <div className="flex-1 min-w-0 sm:flex-grow">
          <div className="flex items-center gap-2 sm:block mb-1 sm:mb-3">
            <h4 className="h4 text-[var(--color-navy)] truncate sm:whitespace-normal group-hover:text-[var(--color-amber)] transition-colors duration-300">
              {calc.title}
            </h4>
            {calc.tag && (
              <span className="sm:hidden px-2 py-0.5 rounded-full bg-[var(--color-navy)] text-[var(--color-white)] text-[8px] font-bold uppercase tracking-wider shrink-0">
                {calc.tag}
              </span>
            )}
          </div>
          <p className="body-regular text-[var(--color-navy)]/70 line-clamp-1 sm:line-clamp-none sm:mb-8">
            {calc.description}
          </p>
        </div>
        
        {/* MOBILE FOOTER */}
        <div className="block sm:hidden shrink-0 pl-2">
          <ArrowRight className="w-5 h-5 text-[var(--color-navy)]/30 group-hover:text-[var(--color-amber)] group-hover:translate-x-1 transition-all duration-300" />
        </div>

        {/* DESKTOP FOOTER */}
        <div className="hidden sm:flex items-center justify-between w-full pt-5 border-t border-[var(--color-navy)]/10 group-hover:border-[var(--color-amber)]/30 transition-colors duration-300 mt-auto">
          <span className="text-[11px] font-bold text-[var(--color-navy)] uppercase tracking-widest">
            Calculate Now
          </span>
          <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center group-hover:bg-[var(--color-amber)]/10 transition-colors duration-300">
            <ArrowRight className="w-4 h-4 text-[var(--color-navy)] group-hover:text-[var(--color-amber)] group-hover:translate-x-0.5 transition-all duration-300" strokeWidth={2.5} />
          </div>
        </div>

      </div>
    </Link>
  );
}