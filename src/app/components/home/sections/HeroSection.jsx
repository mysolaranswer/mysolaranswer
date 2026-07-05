import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, PlayCircle, Battery, TrendingUp, Home } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full bg-[var(--bg-page)] min-h-[85vh] flex items-center pt-6 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start max-w-2xl animate-fade-in-up">
            <h1 className="h1 text-navy mb-6">
              Free Solar Calculators<br />
              <span className="text-amber">Get Your  Answer</span> in Seconds
            </h1>
            
            <p className="body-large text-gray-600 mb-10 max-w-xl">
              Free solar calculators for panels, battery, ROI, off-grid & more. Calculate your solar system size, savings, and payback period instantly. No signup needed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
              <Link 
                href="#calculators" 
                className="px-8 py-4 rounded-full bg-amber text-white label flex items-center justify-center gap-2 hover:bg-[#b08513] transition-all group shadow-lg"
              >
                Select Calculator
                <ArrowUpRight className="w-5 h-5 bg-white/20 text-white rounded-full p-0.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link 
                href="#how-it-works" 
                className="px-8 py-4 rounded-full border-2 border-navy text-navy label flex items-center justify-center gap-2 hover:bg-amber hover:border-amber hover:text-white transition-all group"
              >
                <PlayCircle className="w-5 h-5" />
                See how it works
              </Link>
            </div>
            
            {/* Calculator Cards replacing Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-8 border-t border-[var(--border-divider)]">
              <Link href="/calculators/solar-battery-calculator" className="flex flex-col gap-2 p-4 rounded-xl border border-gray-200 bg-white hover:border-amber hover:shadow-md transition-all group">
                <Battery className="w-6 h-6 text-amber group-hover:scale-110 transition-transform" />
                <p className="text-sm font-bold text-navy">Battery Calculator</p>
              </Link>
              <Link href="/calculators/solar-roi-calculator" className="flex flex-col gap-2 p-4 rounded-xl border border-gray-200 bg-white hover:border-amber hover:shadow-md transition-all group">
                <TrendingUp className="w-6 h-6 text-amber group-hover:scale-110 transition-transform" />
                <p className="text-sm font-bold text-navy">ROI Calculator</p>
              </Link>
              <Link href="/calculators/off-grid-solar-calculator" className="flex flex-col gap-2 p-4 rounded-xl border border-gray-200 bg-white hover:border-amber hover:shadow-md transition-all group">
                <Home className="w-6 h-6 text-amber group-hover:scale-110 transition-transform" />
                <p className="text-sm font-bold text-navy">Off-Grid Calculator</p>
              </Link>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Image 
              src="/solar-panel-calculators-for-homeowners.jpg" 
              alt="Solar panels at sunset" 
              fill
              className="object-cover"
              priority
            />
            {/* Floating Card equivalent */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:right-8 md:left-auto bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl max-w-sm">
              <p className="text-sm font-semibold text-navy">
                Unlock the power of solar energy and enjoy long-term savings instantly with our free tools.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
