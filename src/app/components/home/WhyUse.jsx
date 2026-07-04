import { ShieldCheck, Zap, Calculator } from "lucide-react";

export function WhyUse() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Use MySolarAnswer?</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We built these tools to make solar simple, transparent, and accurate for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--color-navy)] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Calculator className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">100% Free & No Signups</h3>
            <p className="text-gray-500 leading-relaxed">
              We believe solar information should be accessible. Use all our calculators as much as you want without handing over your email or phone number.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--color-amber)] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Unbiased & Accurate</h3>
            <p className="text-gray-500 leading-relaxed">
              We don't sell solar panels. Our calculations are based on real-world data, standard industry formulas, and factual state averages.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Results</h3>
            <p className="text-gray-500 leading-relaxed">
              Stop waiting for quotes just to get basic numbers. Get instant, accurate estimates for your system size, battery needs, and ROI in seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
