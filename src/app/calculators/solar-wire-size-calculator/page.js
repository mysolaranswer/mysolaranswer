import { SolarWireSizeCalculator } from "@/app/components/calculators/SolarWireSizeCalculator";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { CalculatorHero } from "@/app/components/calculators/sections/CalculatorHero";
import { RelatedCalculators } from "@/app/components/calculators/sections/RelatedCalculators";
import { WireSizeGuide } from "@/app/components/calculators/wire-size/WireSizeGuide";
import { WireSizeChart } from "@/app/components/calculators/wire-size/WireSizeChart";
import { WireSizeFAQ } from "@/app/components/calculators/wire-size/WireSizeFAQ";
import { WireSizeSafetyWarning } from "@/app/components/calculators/wire-size/WireSizeSafetyWarning";
import { WireSizeProTips } from "@/app/components/calculators/wire-size/WireSizeProTips";

export const metadata = {
  title: "Solar Wire Size Calculator — Find the Right Cable for Your System",
  description: "Free solar wire size calculator. Enter your system voltage, current, and cable length to find the correct wire gauge for your solar panel installation.",
};

export default function SolarWireSizeCalculatorPage() {
  return (
    <main className="bg-white min-h-screen pt-24 lg:pt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* H1 & Intro */}
        <CalculatorHero 
          title="Solar Wire Size Calculator —"
          highlight="Get the Right Cable Gauge"
          description="Choosing the correct solar cable size is critical for safety and efficiency. Use our free tool below to calculate your ideal AWG wire gauge based on voltage drop and max current."
        />

        {/* The Calculator Component */}
        <RevealOnScroll delay="delay-100" className="mb-20 lg:mb-24">
          <SolarWireSizeCalculator />
        </RevealOnScroll>

        {/* High Priority Safety Warning */}
        <WireSizeSafetyWarning />

        {/* SEO Guide & How to use */}
        <WireSizeGuide />

        {/* Quick Reference Chart */}
        <WireSizeChart />

        {/* Pro Tips from Installers */}
        <WireSizeProTips />

        {/* Expanded FAQs (Uses global FAQ component) */}
        <WireSizeFAQ />

      </div>

      {/* RELATED CALCULATORS SECTION */}
      <RelatedCalculators excludeHref="/calculators/solar-wire-size-calculator" />

    </main>
  );
}