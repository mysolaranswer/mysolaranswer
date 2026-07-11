import { Calculator, ClipboardCheck, PiggyBank } from "lucide-react";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { SketchHighlight } from "@/app/components/ui/SketchHighlight";

export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Calculate Needs",
      description:
        "Use our free calculators to determine your exact solar needs and potential savings. No guesswork, just pure data based on your actual usage.",
      icon: Calculator,
    },
    {
      num: "02",
      title: "Compare Quotes",
      description:
        "Get matched with top-rated local installers. We help you compare custom quotes apples-to-apples so you get the best equipment at the right price.",
      icon: ClipboardCheck,
    },
    {
      num: "03",
      title: "Start Saving",
      description:
        "Enjoy drastically reduced energy bills, protection from rising utility rates, and a more sustainable lifestyle with your new solar system.",
      icon: PiggyBank,
    },
  ];

  return (
    <section className="w-full font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area - Split Layout on Desktop */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 lg:mb-24">
          <RevealOnScroll className="max-w-2xl">
            <span className="text-[var(--color-amber)] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              How It Works
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--text-h-on-navy)] leading-[1.1] tracking-tight">
              Switching to Solar <br />
              <SketchHighlight>Made Simple.</SketchHighlight>
            </h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay="delay-100" className="max-w-md lg:pb-3">
            <p className="font-body text-[var(--text-body-on-navy)] text-base sm:text-lg leading-relaxed">
              Transitioning to renewable energy shouldn't be complicated. We've streamlined the entire journey into three clear steps, giving you complete confidence from start to finish.
            </p>
          </RevealOnScroll>
        </div>

        {/* Steps Grid - Minimalist Architectural Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {steps.map((step, idx) => (
            <RevealOnScroll key={idx} delay={`delay-${(idx + 1) * 100}`}>
              <div className="group relative flex flex-col h-full">
                {/* Top Border Line - Animates on hover */}
                <div className="w-full h-px bg-[var(--border-divider-on-navy)] relative mb-8">
                  <div className="absolute top-0 left-0 h-full bg-[var(--color-amber)] w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>

                <div className="flex justify-between items-start mb-6">
                  <span className="text-5xl lg:text-6xl font-light text-[var(--text-body-on-navy)] opacity-20 group-hover:opacity-100 group-hover:text-[var(--color-amber)] transition-colors duration-500 font-inter">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-[var(--border-divider-on-navy)] flex items-center justify-center group-hover:border-[var(--color-amber)] group-hover:bg-[var(--color-amber)]/10 transition-all duration-500">
                    <step.icon className="w-5 h-5 text-[var(--text-h-on-navy)] group-hover:text-[var(--color-amber)] transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-[1.3rem] font-bold text-[var(--text-h-on-navy)] mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-[var(--text-body-on-navy)] opacity-80 leading-relaxed text-[15px]">
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
