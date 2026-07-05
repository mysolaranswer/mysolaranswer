import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')" }}
      >
        <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/95"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="h1 text-white mb-6">
            Solar Answers, <br />
            <span className="text-amber">No Sales Pitches.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            We built MySolarAnswer because getting a straight answer about solar shouldn't require calling 5 companies. Just enter your numbers and get your answer — free, instant, no signup.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/#calculators" 
              className="btn-base bg-amber text-navy hover:bg-amber-hover font-bold inline-flex items-center gap-2 transition-colors"
            >
              Try Our Calculators <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
