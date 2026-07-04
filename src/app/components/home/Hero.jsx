import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-white border-b border-gray-100 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[var(--color-amber)]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[var(--color-navy)]/5 blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
          Free Solar Calculators — Get Your Solar Answer <span className="text-[var(--color-amber)]">in Seconds</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Calculate your system size, battery requirements, and potential savings instantly. Accurate tools built for homeowners and professionals, with no sign-up required.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#calculators" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-navy)] hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Explore Calculators
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href="/calculators/how-many-solar-panels-do-i-need" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg transition-all"
          >
            How Many Panels?
          </Link>
        </div>

        <div className="mt-12 pt-10 border-t border-gray-100/60 max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Trusted by homeowners to calculate</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-gray-500 font-medium">
            <span>System Size</span>
            <span>Battery Storage</span>
            <span>ROI & Payback</span>
            <span>Off-Grid Needs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
