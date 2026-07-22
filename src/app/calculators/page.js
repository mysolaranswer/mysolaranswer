import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { CalculatorCard } from "@/app/components/calculators/CalculatorCard";
import { 
  Sun, 
  Battery, 
  PiggyBank, 
  Zap, 
  Plug, 
  Home, 
  DollarSign, 
  Calculator 
} from "lucide-react";

export const metadata = {
  title: "Free Solar Calculators & Tools — MySolarAnswer",
  description: "Explore our suite of free solar calculators to perfectly size your panels, batteries, inverters, and calculate your exact ROI.",
};

export default function CalculatorsIndexPage() {
  
  const calculators = [
    { 
      title: "Solar Wire Size Calculator", 
      desc: "Calculate the exact AWG wire gauge needed to prevent voltage drop and ensure safety.", 
      icon: Plug, 
      href: "/calculators/solar-wire-size-calculator",
      category: "Wiring & Safety",
    },
    { 
      title: "Off-Grid Solar Calculator", 
      desc: "Design a complete off-grid system, from panels to battery storage.", 
      icon: Sun, 
      href: "/calculators/off-grid-solar-calculator",
      category: "System Design",
    },
    { 
      title: "Solar Battery Calculator", 
      desc: "Size your off-grid or hybrid battery bank perfectly for your power needs.", 
      icon: Battery, 
      href: "/calculators/solar-battery-size-calculator",
      category: "Storage & Load",
    },
    { 
      title: "RV Solar Calculator", 
      desc: "Determine how many panels and batteries you need for your camper or RV.", 
      icon: Home, 
      href: "/calculators/rv-solar-calculator",
      category: "System Design",
    },
    { 
      title: "Solar Charge Controller", 
      desc: "Size your MPPT or PWM charge controller to perfectly match your solar array.", 
      icon: Zap, 
      href: "/calculators/solar-charge-controller-calculator",
      category: "Wiring & Safety",
    },
    { 
      title: "Solar Load Calculator", 
      desc: "Audit your daily energy consumption to figure out exactly how much power you need.", 
      icon: PiggyBank, 
      href: "/calculators/solar-load-calculator",
      category: "Storage & Load",
    },
    { 
      title: "Solar Inverter Calculator", 
      desc: "Find the right inverter size to handle your continuous and surge power loads.", 
      icon: Calculator, 
      href: "/calculators/solar-inverter-calculator",
      category: "Financial & Equipment",
    },
    { 
      title: "Solar Financing Calculator", 
      desc: "Compare cash, loans, and leases to find the best way to pay for your system.", 
      icon: DollarSign, 
      href: "/calculators/solar-financing-calculator",
      category: "Financial & Equipment",
    },
  ];

  return (
    <main className="bg-white min-h-screen pt-8 pb-20 lg:pt-12 lg:pb-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 relative z-10">
          <span className="text-[var(--color-amber)] text-sm font-bold tracking-widest uppercase mb-4 block">
            Tools & Resources
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--color-navy)] mb-6 tracking-tight leading-tight">
            Design Your <br className="hidden sm:block"/> <span className="text-[var(--color-amber)]">Solar System</span>
          </h1>
          <p className="font-body text-lg text-[var(--text-body)] leading-relaxed">
            From wire sizing to full off-grid blueprints, use our premium suite of calculators to build your system accurately and safely.
          </p>
        </RevealOnScroll>

        {/* Scalable Grid Layout (Ready for 25+ items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 sm:gap-6">
          {calculators.map((calc, idx) => (
            <CalculatorCard key={idx} calc={calc} index={idx} />
          ))}
        </div>

      </div>
    </main>
  );
}
