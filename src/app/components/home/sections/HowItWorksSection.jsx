import Image from "next/image";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { SketchHighlight } from "@/app/components/ui/SketchHighlight";
import { Calculator, ClipboardCheck, PiggyBank } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Calculate Needs",
      description:
        "Use our free calculators to determine your exact solar needs and potential savings.",
      icon: Calculator,
    },
    {
      num: "02",
      title: "Compare Quotes",
      description:
        "Get matched with top-rated local installers and compare custom quotes.",
      icon: ClipboardCheck,
    },
    {
      num: "03",
      title: "Start Saving",
      description:
        "Enjoy reduced energy bills and a more sustainable lifestyle with your new solar system.",
      icon: PiggyBank,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden font-sans bg-navy">
      {/* 1. CREATIVE IMAGE INTEGRATION: Cinematic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/solar-panels-image-for-solar-calculators-site.jpg"
          alt="Dark atmospheric solar panels"
          fill
          className="object-cover object-center opacity-40 mix-blend-luminosity"
          sizes="100vw"
        />
        {/* Deep navy overlay to guarantee text readability */}
        <div className="absolute inset-0 bg-navy/70"></div>
        {/* Top & Bottom gradient fades so the image blends seamlessly into the sections above and below it */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy opacity-90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Main Heading */}
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="label text-amber tracking-wider uppercase mb-4 block drop-shadow-md">
              The Process
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white leading-[1.15] tracking-tight drop-shadow-lg">
              Switching To Solar <br className="hidden sm:block" />
              <SketchHighlight>In 3 Easy Steps</SketchHighlight>
            </h2>
          </div>
        </RevealOnScroll>

        {/* 3-Column Glassmorphism Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Subtle connecting line behind cards (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 pointer-events-none"></div>

          {steps.map((step, idx) => {
            return (
              <RevealOnScroll key={idx} className="relative z-10">
                <div className="group relative flex flex-col h-full p-8 lg:p-10 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-amber/50 hover:bg-white/[0.1] transition-[background-color,border-color,transform] duration-300 overflow-hidden shadow-xl shadow-black/20 sm:hover:-translate-y-1">
                  {/* Giant Faint Background Number */}
                  <div className="absolute -bottom-8 -right-4 text-[140px] font-heading font-black text-white/[0.03] group-hover:text-amber/[0.08] transition-colors duration-500 pointer-events-none select-none leading-none">
                    {step.num}
                  </div>

                  {/* Header: Icon & Step Badge */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:-translate-y-1 group-hover:bg-amber group-hover:border-amber transition-[background-color,border-color,transform] duration-300 shadow-inner">
                      <step.icon
                        className="w-6 h-6 text-white group-hover:text-navy transition-colors duration-500"
                        strokeWidth={2}
                      />
                    </div>

                    <span className="font-mono text-sm font-bold text-amber tracking-widest bg-amber/10 px-3 py-1 rounded-full border border-amber/20 shadow-sm">
                      STEP {step.num}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="relative z-10 flex-grow">
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-amber transition-colors duration-300 drop-shadow-sm">
                      {step.title}
                    </h4>
                    <p className="font-body text-white/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
