import Link from "next/link";
import { Battery, TrendingUp, Home, Sun, ArrowRight, DollarSign, Cpu } from "lucide-react";

export function CalculatorsGridSection() {
  const calculators = [
    {
      title: "Battery Calculator",
      description: "Size your battery bank correctly based on your daily energy consumption and desired autonomy.",
      icon: Battery,
      href: "/calculators/solar-battery-calculator",
      tag: "Most Popular",
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
      title: "System Cost Estimator",
      description: "Get a comprehensive breakdown of equipment, labor, and permit costs for your solar installation.",
      icon: DollarSign,
      href: "/calculators/system-cost-estimator",
    },
    {
      title: "Inverter Calculator",
      description: "Find the perfect string or micro-inverter setup to maximize your panel efficiency.",
      icon: Cpu,
      href: "/calculators/inverter-calculator",
    },
  ];

  return (
    <section 
      className="w-full bg-[var(--bg-page)] py-16 lg:py-24 border-t border-[var(--border-divider)] font-sans relative" 
      id="calculators"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Context (Strict & Editorial) */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 flex flex-col justify-center items-start">
            
            <h2 className="font-heading text-[var(--color-navy)] mb-6">
              Calculate your <br className="hidden lg:block"/>
              <span className="text-[var(--color-amber)]">solar future.</span>
            </h2>
            
            {/* Left border anchor line for editorial feel */}
            <div className="pl-5 border-l-2 border-[var(--color-amber)] mb-10">
              <p className="font-body text-[var(--text-body-on-white)] opacity-75 max-w-md">
                Take the guesswork out of your solar journey. Use our professional-grade software tools to plan, size, and estimate your perfect setup in seconds—absolutely free.
              </p>
            </div>

            {/* Explore All CTA with Animated Sketch Underline */}
            <Link 
              href="/calculators"
              className="group relative inline-flex items-center gap-2 text-[var(--color-navy)] hover:text-[var(--color-amber)] transition-colors duration-300 w-max font-bold text-lg"
            >
              <span className="relative z-10">Explore All Calculators</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" strokeWidth={2.5} />
              
              {/* Premium Sketch Underline SVG (Animated with clip-path) */}
              <svg 
                className="absolute -bottom-2 left-0 w-[calc(100%-1.5rem)] h-2.5 text-[var(--color-amber)] transition-all duration-300 ease-out [clip-path:inset(0_100%_0_0)] opacity-0 group-hover:opacity-100 group-hover:[clip-path:inset(0_0_0_0)]"
                viewBox="0 0 100 12" 
                fill="none" 
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main stroke */}
                <path 
                  d="M 2 9 C 30 4 70 12 98 6" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
                {/* Secondary thin stroke for marker overlap realism */}
                <path 
                  d="M 10 11 C 40 8 80 14 90 9" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  strokeLinecap="round" 
                  strokeOpacity="0.5" 
                />
              </svg>
            </Link>
          </div>

          {/* Right Column: Perfect Flush Grid */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
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

// Reusable Clean Card Component with Brand Colors
function CalcCard({ calc }) {
  return (
    <Link 
      href={calc.href}
      className="group relative flex flex-col p-7 lg:p-8 rounded-lg bg-[var(--bg-card-on-white,white)] border border-[var(--border-divider)] hover:border-[var(--color-amber)]/40 hover:shadow-[0_16px_40px_-12px_rgba(13,27,42,0.12)] transition-all duration-500 overflow-hidden"
    >
      {/* Brand Ambient Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-amber)]/0 via-transparent to-[var(--color-amber)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Icon & Optional Tag */}
        <div className="flex items-start justify-between mb-8">
          {/* Subtle icon container that highlights in Navy on hover */}
          <div className="w-12 h-12 rounded-[0.85rem] bg-black/[0.03] border border-[var(--border-divider)] flex items-center justify-center group-hover:-translate-y-1 group-hover:bg-[var(--color-navy)] group-hover:border-[var(--color-navy)] transition-all duration-500 shadow-sm">
            <calc.icon 
              className="w-6 h-6 text-[var(--color-navy)] group-hover:text-white transition-colors duration-500" 
              strokeWidth={1.5} 
            />
          </div>
          
          {calc.tag && (
            <span className="px-3 py-1.5 rounded-full bg-[var(--color-navy)] text-white text-[9px] font-bold tracking-widest uppercase shadow-md shadow-[var(--color-navy)]/10">
              {calc.tag}
            </span>
          )}
        </div>

        {/* Body */}
        <h4 className="h4 text-[var(--color-navy)] mb-3 group-hover:text-[var(--color-amber)] transition-colors duration-300">
          {calc.title}
        </h4>
        <p className="font-body text-[var(--text-body-on-white)] opacity-75 leading-relaxed mb-8 flex-grow">
          {calc.description}
        </p>
        
        {/* Footer: Structural Interaction */}
        <div className="flex items-center justify-between pt-5 border-t border-[var(--border-divider)] group-hover:border-[var(--color-amber)]/30 transition-colors duration-300 mt-auto">
          <span className="text-[var(--font-size-label)] font-bold text-[var(--color-navy)] uppercase tracking-widest transition-colors duration-300">
            Calculate Now
          </span>
          {/* Arrow subtle color shift and movement */}
          <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center group-hover:bg-[var(--color-amber)]/10 transition-colors duration-300">
            <ArrowRight className="w-4 h-4 text-[var(--color-navy)] group-hover:text-[var(--color-amber)] group-hover:translate-x-0.5 transition-all duration-300" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </Link>
  );
}