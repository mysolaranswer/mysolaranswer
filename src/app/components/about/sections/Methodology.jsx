import React from 'react';
import { Database, AlertTriangle } from 'lucide-react';

export default function Methodology() {
  return (
    <section className="w-full py-20 lg:py-24 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Methodology */}
          <div className="bg-[var(--bg-card-on-white)] border border-[var(--border-divider)] p-8 lg:p-10">
            <div className="w-12 h-12 bg-amber/10 rounded-full flex items-center justify-center mb-6">
              <Database className="w-6 h-6 text-amber" />
            </div>
            <h3 className="h3 text-[var(--text-heading)] mb-4">
              How Our Calculators Work
            </h3>
            <p className="text-base text-[var(--text-body)] mb-4">
              Our tools are powered by publicly available, highly accurate data sources. We utilize average sun-hour data from the <strong>National Renewable Energy Laboratory (NREL)</strong> and baseline efficiency standards from the <strong>Department of Energy (DOE)</strong>.
            </p>
            <p className="text-base text-[var(--text-body)]">
              When you enter your state, we pull current average utility rates and local incentives to give you an estimate that reflects your actual geographic reality—not a nationwide guess.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-[#FFFDF5] border border-[#FDE68A] p-8 lg:p-10">
            <div className="w-12 h-12 bg-amber/20 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="w-6 h-6 text-amber" />
            </div>
            <h3 className="h3 text-[var(--text-heading)] mb-4">
              Accuracy & Disclaimer
            </h3>
            <p className="text-base text-[var(--text-body)] mb-4">
              While we strive to make our calculators the most accurate on the web, <strong>they provide estimates, not guarantees.</strong>
            </p>
            <p className="text-base text-[var(--text-body)]">
              Your exact solar output will depend on the pitch and azimuth of your roof, local shading, and the specific equipment you purchase. We always recommend getting a formal quote from a certified, local installer before making any final purchase decisions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
