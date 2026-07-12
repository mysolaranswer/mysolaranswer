import Link from "next/link";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { ArrowRight, Sun, Battery, PiggyBank } from "lucide-react";

const defaultRelatedCalculators = [
  { title: "Panel Calculator", desc: "How many panels do you need to power your home?", icon: Sun, href: "/calculators/how-many-solar-panels" },
  { title: "Battery Calculator", desc: "Size your off-grid or hybrid battery bank perfectly.", icon: Battery, href: "/calculators/solar-battery-calculator" },
  { title: "Savings Calculator", desc: "Calculate your exact ROI and monthly savings.", icon: PiggyBank, href: "/calculators/solar-savings-calculator" },
];

export function RelatedCalculators({ calculators = defaultRelatedCalculators, excludeHref = "" }) {
  // Filter out the current calculator if its href is passed
  const displayCalculators = calculators.filter(calc => calc.href !== excludeHref).slice(0, 3);

  return (
    <section className="bg-[var(--bg-page)] py-20 lg:py-32 w-full border-t border-[var(--border-divider)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
            <div>
              <span className="text-[var(--color-amber)] text-sm font-bold tracking-widest uppercase mb-3 block">Keep Planning</span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--color-navy)] font-medium tracking-tight">Explore More Tools</h2>
            </div>
            <Link href="/calculators" className="group text-[var(--text-body)] hover:text-[var(--color-navy)] transition-colors flex items-center gap-2 font-medium pb-1">
              View all tools 
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {displayCalculators.map((calc, idx) => (
              <Link 
                key={idx} 
                href={calc.href}
                className="group bg-white border border-[var(--border-divider)] rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--color-navy)]/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle top border highlight on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-amber)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                
                <div className="w-14 h-14 bg-[var(--bg-light)] border border-[var(--border-divider)] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[var(--color-navy)] group-hover:border-[var(--color-navy)] transition-colors duration-300">
                  <calc.icon className="w-6 h-6 text-[var(--color-navy)] group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h4 className="text-xl font-heading font-medium text-[var(--color-navy)] mb-3">{calc.title}</h4>
                <p className="text-[var(--text-body)] text-sm leading-relaxed">{calc.desc}</p>
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
