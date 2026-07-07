import React from 'react';
import { Database, AlertTriangle } from 'lucide-react';

export default function Methodology() {
  return (
    <section className="w-full py-20 lg:py-24 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Methodology */}
          <div className="bg-white border border-[var(--border-divider)] p-8 lg:p-10 rounded-md hover:border-[var(--color-amber)] transition-colors duration-300">
            <div className="w-12 h-12 bg-[var(--color-amber)]/10 rounded-md flex items-center justify-center mb-6">
              <Database className="w-6 h-6 text-[var(--color-amber)]" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-[var(--color-navy)] mb-4">
              How Our Calculators Work
            </h3>
            <p className="text-base text-[var(--text-body-on-white)] opacity-80 mb-4">
              Our tools are powered by publicly available, highly accurate data sources. We utilize average sun-hour data from the <strong className="text-[var(--color-navy)]">National Renewable Energy Laboratory (NREL)</strong> and baseline efficiency standards from the <strong className="text-[var(--color-navy)]">Department of Energy (DOE)</strong>.
            </p>
            <p className="text-base text-[var(--text-body-on-white)] opacity-80">
              When you enter your state, we pull current average utility rates and local incentives to give you an estimate that reflects your actual geographic reality—not a nationwide guess.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-[#FFFDF5] border border-[#FDE68A] p-8 lg:p-10 rounded-md">
            <div className="w-12 h-12 bg-[var(--color-amber)]/20 rounded-md flex items-center justify-center mb-6">
              <AlertTriangle className="w-6 h-6 text-[var(--color-amber)]" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-[var(--color-navy)] mb-4">
              Accuracy & Disclaimer
            </h3>
            <p className="text-base text-[var(--text-body-on-white)] opacity-80 mb-4">
              While we strive to make our calculators the most accurate on the web, <strong className="text-[var(--color-navy)]">they provide estimates, not guarantees.</strong>
            </p>
            <p className="text-base text-[var(--text-body-on-white)] opacity-80">
              Your exact solar output will depend on the pitch and azimuth of your roof, local shading, and the specific equipment you purchase. We always recommend getting a formal quote from a certified, local installer before making any final purchase decisions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
