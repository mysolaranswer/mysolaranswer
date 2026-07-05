import Link from "next/link";

export function CTASection() {
  return (
    <section className="w-full bg-[var(--bg-page)] py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber/10 border border-amber/20 mb-8">
          <span className="text-xs font-bold text-navy uppercase tracking-wide">Ready to get started?</span>
        </div>
        
        <h2 className="text-[3rem] md:text-[4rem] leading-[1.1] font-black tracking-tighter text-navy mb-6">
          Calculate Your <span className="text-amber">Solar Savings</span> Today!
        </h2>
        
        <p className="body-large text-gray-600 mb-10 max-w-2xl mx-auto">
          Interested in switching to solar? Let's work together to find the perfect solution for your home or business with our free calculator tools.
        </p>
        
        <div className="flex justify-center">
          <Link 
            href="/calculators"
            className="px-8 py-4 rounded-full bg-navy text-white label flex items-center justify-center gap-2 hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-lg"
          >
            Calculate Now
            <span className="bg-white text-navy rounded-full w-6 h-6 flex items-center justify-center ml-2">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
