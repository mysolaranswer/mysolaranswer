import React from 'react';
import { PrimaryButton } from '../../ui/buttons/PrimaryButton';

export default function AboutCTA() {
  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1592833159155-c62df1b65634?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
      >
        <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 to-navy/40"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
          Ready To Get Your Free Solar Estimate?
        </h2>
        <p className="text-lg md:text-xl text-[var(--text-body-on-navy)] opacity-80 mb-10 leading-relaxed max-w-2xl mx-auto">
          Join thousands of homeowners who used our calculators to make informed, data-driven decisions about their energy future.
        </p>
        <div className="flex justify-center">
          <PrimaryButton href="/#calculators">
            Go To Calculators
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
