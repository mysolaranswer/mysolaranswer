import { Database, BadgeInfo, CheckCircle2 } from "lucide-react";
import { SketchHighlight } from "@/app/components/ui/elements/SketchHighlight";

export default function Methodology() {
  return (
    <section className="relative w-full bg-[var(--bg-page)]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="label text-[var(--color-amber)] tracking-widest uppercase mb-4 block">
            Transparency First
          </span>
          <h2 className="h2 text-[var(--color-black)] mb-6">
            Built on Real Data. <br className="hidden sm:block" />
            Delivered with <SketchHighlight>Honesty.</SketchHighlight>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Section 1: Methodology */}
          <div className="flex flex-col h-full bg-[var(--color-navy)]/[0.02] rounded-2xl border border-[var(--color-navy)]/[0.05] p-8 sm:p-10 transition-all hover:bg-[var(--color-navy)]/[0.04]">
            <div className="w-12 h-12 bg-[var(--color-white)] shadow-sm rounded-xl flex items-center justify-center mb-8 border border-[var(--color-navy)]/[0.05]">
              <Database className="w-5 h-5 text-[var(--color-amber)]" strokeWidth={2.5} />
            </div>
            
            <h3 className="h3 text-[var(--color-black)] mb-4">
              How Our Calculators Work
            </h3>
            
            <p className="body-regular text-[var(--text-body)] mb-6">
              Our tools are powered by publicly available, highly accurate data sources. We utilize average sun-hour data from the <strong>National Renewable Energy Laboratory (NREL)</strong> and baseline efficiency standards from the <strong>Department of Energy (DOE)</strong>.
            </p>
            <p className="body-regular text-[var(--text-body)] mb-8">
              When you enter your inputs, we cross-reference current utility rates and geographic realities to give you an estimate that reflects your actual home—not a nationwide guess.
            </p>

            <div className="mt-auto pt-6 border-t border-[var(--border-divider)] flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-amber)] shrink-0" />
                <span className="text-sm text-[var(--text-body)] font-medium">NREL Sun Data</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-amber)] shrink-0" />
                <span className="text-sm text-[var(--text-body)] font-medium">DOE Standards</span>
              </div>
            </div>
          </div>

          {/* Section 2: Disclaimer */}
          <div className="flex flex-col h-full bg-[var(--color-navy)]/[0.02] rounded-2xl border border-[var(--color-navy)]/[0.05] p-8 sm:p-10 transition-all hover:bg-[var(--color-navy)]/[0.04]">
            <div className="w-12 h-12 bg-[var(--color-white)] shadow-sm rounded-xl flex items-center justify-center mb-8 border border-[var(--color-navy)]/[0.05]">
              <BadgeInfo className="w-5 h-5 text-[var(--color-amber)]" strokeWidth={2.5} />
            </div>
            
            <h3 className="h3 text-[var(--color-black)] mb-4">
              Accuracy & Full Disclosure
            </h3>
            
            <p className="body-regular text-[var(--text-body)] mb-6">
              While we strive to make our calculators the most accurate independent tools on the web, <strong>they provide estimates, not guarantees.</strong>
            </p>
            
            <div className="bg-[var(--color-white)] shadow-sm rounded-lg p-5 border-l-2 border-[var(--color-amber)] mb-6">
              <p className="text-sm text-[var(--text-body)] leading-relaxed italic">
                Your exact solar output will depend on the pitch and azimuth of your roof, local tree shading, weather anomalies, and the specific brand of equipment you purchase.
              </p>
            </div>

            <p className="body-regular text-[var(--text-body)] mt-auto">
              We built these tools to give you a powerful baseline. We always recommend getting a formal site assessment from a certified local installer before making final financial decisions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}