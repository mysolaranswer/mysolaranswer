import Link from "next/link";
import { SolarWireSizeCalculator } from "@/app/components/calculators/SolarWireSizeCalculator";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { Sun, Battery, PiggyBank, ArrowRight } from "lucide-react";

// SEO Metadata
export const metadata = {
  title: "Solar Wire Size Calculator — Find the Right Cable for Your System",
  description: "Free solar wire size calculator. Enter your system voltage, current, and cable length to find the correct wire gauge for your solar panel installation.",
};

export default function SolarWireSizeCalculatorPage() {
  
  // Data for the "Related Calculators" section at the bottom
  const relatedCalculators = [
    { title: "Panel Calculator", desc: "How many panels do you need?", icon: Sun, href: "/calculators/how-many-solar-panels" },
    { title: "Battery Calculator", desc: "Size your battery bank.", icon: Battery, href: "/calculators/solar-battery-calculator" },
    { title: "Savings Calculator", desc: "Calculate your ROI & savings.", icon: PiggyBank, href: "/calculators/solar-savings-calculator" },
  ];

  return (
    <main className="bg-white min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* H1 & Intro */}
        <RevealOnScroll className="text-center mb-12 lg:mb-16">
          <h1 className="h1 text-navy mb-6 leading-tight">
            Solar Wire Size Calculator — <br className="hidden sm:block"/>
            Get the Right <span className="text-amber">Cable Gauge</span>
          </h1>
          <p className="font-body text-navy/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Choosing the correct solar cable size is critical for safety and efficiency. Use our free tool below to calculate your ideal AWG wire gauge based on voltage drop and max current.
          </p>
        </RevealOnScroll>

        {/* The Calculator Component */}
        <RevealOnScroll delay="delay-100" className="mb-20 lg:mb-24">
          <SolarWireSizeCalculator />
        </RevealOnScroll>

        {/* SEO Article Content */}
        <RevealOnScroll delay="delay-200" className="mb-24">
          <article className="prose max-w-3xl mx-auto prose-headings:font-heading prose-h2:text-3xl prose-h2:text-navy prose-h2:mb-6 prose-h3:text-xl prose-h3:text-navy prose-p:font-body prose-p:text-navy/80 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-amber prose-li:font-body prose-li:text-navy/80 prose-ul:mb-8">
            
            <h2>Why Solar Wire Sizing Matters</h2>
            <p>
              When setting up a solar panel system, the cables act as the highways for your electricity. If you use a solar wire size that is too thin (a high AWG number), it creates resistance. This resistance leads to two major problems:
            </p>
            <ul>
              <li><strong>Voltage Drop:</strong> Energy is lost as heat before it ever reaches your charge controller or battery.</li>
              <li><strong>Fire Hazards:</strong> Forcing too much current through a thin wire causes overheating, which can melt insulation and cause fires.</li>
            </ul>

            <h2>Understanding Voltage Drop Risks</h2>
            <p>
              In DC (Direct Current) solar systems, voltage drop is a significant hurdle. If you have a 12V system and lose 1V through the wires, you've lost nearly 8% of your power. For critical runs (like between the charge controller and battery), you should aim for a maximum voltage drop of 1% to 2%. For standard solar panel wiring runs, 3% is acceptable. Our solar string calculator logic automatically checks these thresholds for you.
            </p>

            <h2>Series vs. Parallel Wiring Impact</h2>
            <p>
              How you wire your panels drastically impacts your required solar cable size:
            </p>
            <ul>
              <li><strong>Series Wiring:</strong> Increases voltage but keeps amps (current) the same. Higher voltage pushes through thinner wire more easily, meaning you can use a smaller gauge over longer distances.</li>
              <li><strong>Parallel Wiring:</strong> Keeps voltage the same but increases amps. High amps require a much thicker wire gauge to prevent overheating.</li>
            </ul>

            <hr className="my-12 border-navy/10" />

            <h2>Frequently Asked Questions</h2>
            
            <h3>What happens if a solar wire is too thin?</h3>
            <p>
              If a wire is too thin for the current passing through it, it creates resistance. This causes a massive voltage drop (wasting your solar energy) and generates extreme heat, which is a major fire risk.
            </p>

            <h3>What AWG should I use for a 12V solar system?</h3>
            <p>
              12V systems require thicker wires because they operate at lower voltages and higher amps compared to 24V or 48V systems. A common size for short 12V runs is 10 AWG, but if you are running more than 20 feet or higher than 30 amps, you will likely need 8 AWG, 6 AWG, or thicker. Always use a solar panel wiring calculator to verify.
            </p>

            <h3>How long can solar cables be?</h3>
            <p>
              There is no absolute maximum length, but the longer the run, the thicker the wire must be to prevent voltage drop. If you need to run cables over 100 feet, you should wire your panels in series to increase the voltage (e.g., to 48V or 150V+), which allows you to use standard 10 AWG wire over long distances safely.
            </p>

          </article>
        </RevealOnScroll>
      </div>

      {/* RELATED CALCULATORS SECTION (Full Width Dark Section) */}
      <section className="bg-navy py-16 lg:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
              <div>
                <span className="text-amber text-sm font-bold tracking-widest uppercase mb-2 block">Keep Planning</span>
                <h2 className="font-heading text-3xl sm:text-4xl text-white">Related Calculators</h2>
              </div>
              <Link href="/calculators" className="text-white/70 hover:text-amber transition-colors flex items-center gap-2 font-bold pb-1 border-b border-white/20 hover:border-amber">
                View all tools <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {relatedCalculators.map((calc, idx) => (
                <Link 
                  key={idx} 
                  href={calc.href}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber transition-colors duration-300">
                    <calc.icon className="w-6 h-6 text-white group-hover:text-navy transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{calc.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{calc.desc}</p>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </main>
  );
}