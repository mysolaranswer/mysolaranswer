import Link from "next/link";
import { Battery, TrendingUp, Home, Sun, ArrowRight, PiggyBank, CreditCard } from "lucide-react";
import { SketchHighlight } from "@/app/components/ui/elements/SketchHighlight";

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
              <h2 className="h2">
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
      className="group flex flex-col p-5 sm:p-6 lg:p-8 rounded-xl bg-white border border-[var(--color-navy)]/10 hover:border-[var(--color-navy)]/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300"
    >
      <div className="flex flex-col h-full w-full">
        
        {/* DESKTOP HEADER */}
        <div className="hidden sm:flex w-full items-start justify-between mb-6 shrink-0">
          <div className="w-12 h-12 rounded-lg bg-[var(--color-navy)]/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--color-navy)]/10">
            <calc.icon className="w-6 h-6 text-[var(--color-navy)]" strokeWidth={1.5} />
          </div>
          
          {calc.tag && (
            <span className="px-2.5 py-1 rounded-md bg-[var(--color-navy)]/5 text-[var(--color-navy)]/80 text-xs font-semibold uppercase tracking-wider">
              {calc.tag}
            </span>
          )}
        </div>

        {/* MOBILE HORIZONTAL BODY & DESKTOP VERTICAL BODY */}
        <div className="flex flex-row sm:flex-col gap-4 sm:gap-0 flex-grow w-full items-center sm:items-start mb-0 sm:mb-6">
          
          {/* MOBILE ICON */}
          <div className="sm:hidden w-12 h-12 shrink-0 rounded-lg bg-[var(--color-navy)]/5 flex items-center justify-center">
            <calc.icon className="w-6 h-6 text-[var(--color-navy)]" strokeWidth={1.5} />
          </div>

          <div className="flex-1 min-w-0 w-full">
            <div className="flex items-center justify-between sm:block mb-1 sm:mb-2 gap-2">
              <h4 className="h4 text-[var(--color-navy)] truncate sm:whitespace-normal">
                {calc.title}
              </h4>
              {calc.tag && (
                <span className="sm:hidden px-2 py-0.5 rounded-md bg-[var(--color-navy)]/5 text-[var(--color-navy)]/80 text-[10px] font-semibold uppercase tracking-wider shrink-0">
                  {calc.tag}
                </span>
              )}
            </div>
            
            <p className="body-regular text-[var(--color-navy)]/70 line-clamp-1 sm:line-clamp-none">
              {calc.description}
            </p>
          </div>
          
        </div>
        
        {/* FOOTER - VISIBLE ON ALL SCREENS */}
        <div className="flex items-center text-[var(--color-navy)]/60 group-hover:text-[var(--color-navy)] transition-colors duration-300 mt-4 sm:mt-auto pt-0 sm:pt-2">
          <span className="text-[13px] sm:text-sm font-semibold tracking-wide">
            Calculate Now
          </span>
          <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2} />
        </div>

      </div>
    </Link>
  );
}