import { Database, BadgeInfo, CheckCircle2 } from "lucide-react";
import { SketchHighlight } from "@/app/components/ui/SketchHighlight";

export default function Methodology() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-navy) 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div>
            <span className="label text-amber tracking-wider uppercase mb-4 block">
              Transparency First
            </span>
            <h2 className="font-heading text-4xl text-navy mb-4">
              Built on Real Data. <br/>
              Delivered with{" "}
              <span className="relative inline-block whitespace-nowrap">
                Honesty.
                <div className="absolute -bottom-2 left-0 w-full -z-10 text-amber">
                  <SketchHighlight />
                </div>
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Methodology (Dark / Authoritative) */}
          <div>
            <div className="bg-navy h-full rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber/10 rounded-full blur-3xl -mr-20 -mt-20 transition-opacity group-hover:opacity-100 opacity-50" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center mb-8">
                  <Database className="w-7 h-7 text-amber" />
                </div>
                <h3 className="text-2xl font-heading text-white mb-5">
                  How Our Calculators Work
                </h3>
                <p className="font-body text-white/80 leading-relaxed mb-6">
                  Our tools are powered by publicly available, highly accurate data sources. We utilize average sun-hour data from the <strong>National Renewable Energy Laboratory (NREL)</strong> and baseline efficiency standards from the <strong>Department of Energy (DOE)</strong>.
                </p>
                <p className="font-body text-white/80 leading-relaxed mb-8">
                  When you enter your inputs, we cross-reference current utility rates and geographic realities to give you an estimate that reflects your actual home—not a nationwide guess.
                </p>
              </div>

              {/* Data Proof Points */}
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber" />
                  <span className="text-sm text-white/70 font-semibold">NREL Sun Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber" />
                  <span className="text-sm text-white/70 font-semibold">DOE Standards</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Disclaimer (Light / Transparent) */}
          <div>
            <div className="bg-white h-full rounded-2xl p-8 lg:p-12 border-2 border-navy/5 shadow-lg hover:border-amber/50 transition-colors duration-300 flex flex-col justify-center">
              
              <div className="w-14 h-14 bg-amber/10 border border-amber/20 rounded-xl flex items-center justify-center mb-8">
                <BadgeInfo className="w-7 h-7 text-amber" />
              </div>
              
              <h3 className="text-2xl font-heading text-navy mb-5">
                Accuracy & Full Disclosure
              </h3>
              
              <div className="space-y-6">
                <p className="font-body text-navy/80 leading-relaxed">
                  While we strive to make our calculators the most accurate independent tools on the web, <strong className="text-navy">they provide estimates, not guarantees.</strong>
                </p>
                
                <div className="bg-navy/5 rounded-xl p-5 border-l-4 border-amber">
                  <p className="text-[14px] text-navy/70 leading-relaxed">
                    Your exact solar output will depend on the pitch and azimuth of your roof, local tree shading, weather anomalies, and the specific brand of equipment you purchase. 
                  </p>
                </div>

                <p className="font-body text-navy/80 leading-relaxed">
                  We built these tools to give you a powerful baseline. We always recommend getting a formal site assessment from a certified local installer before making final financial decisions.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}