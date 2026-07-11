"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { SketchHighlight } from "@/app/components/ui/SketchHighlight";

export function FAQSection() {
  const faqs = [
    {
      question: "Are these calculators completely free to use?",
      answer:
        "Yes, all of our calculators are 100% free to use. There's no sign-up required, and you can calculate as many times as you need.",
    },
    {
      question: "How accurate are the solar estimates?",
      answer:
        "Our calculators use industry-standard formulas to provide highly accurate estimates based on the inputs you provide. However, for a precise quote tailored to your roof, a professional consultation is recommended.",
    },
    {
      question: "Do I need to know my exact energy usage?",
      answer:
        "It helps to have a rough idea of your monthly electricity bill or kWh usage, but many of our calculators provide typical household averages if you're unsure.",
    },
    {
      question: "Can I calculate for an off-grid system?",
      answer:
        "Absolutely! We have a dedicated Off-Grid Solar Calculator that helps you size panels, batteries, and charge controllers for completely independent setups.",
    },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full bg-white">
      {/* Expanded to max-w-4xl for a better reading width on desktop */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-8 lg:mb-12">
            <span className="label text-amber tracking-wider uppercase mb-4 block">
              Got Questions?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-navy">
              Frequently Asked <SketchHighlight>Questions</SketchHighlight>
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay="delay-100">
          <div className="flex flex-col gap-3 sm:gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-md overflow-hidden transition-all duration-300 shadow-sm ${
                    isOpen
                      ? "bg-navy border-navy shadow-lg"
                      : "bg-white border-navy/10 hover:border-amber/50 hover:bg-navy/[0.01]"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    // items-start ensures the icon stays at the top when mobile text wraps
                    className="w-full text-left px-5 py-4 sm:px-8 sm:py-6 flex items-start sm:items-center justify-between gap-4"
                  >
                    {/* Reduced mobile font size (text-[15px]) to prevent aggressive wrapping */}
                    <h3
                      className={`font-heading text-[15px] sm:text-lg lg:text-xl pr-2 sm:pr-8 leading-snug sm:leading-relaxed ${
                        isOpen ? "text-white" : "text-navy"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    {/* Added mt-0.5 on mobile so the icon perfectly aligns with the first line of text */}
                    <div
                      className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-transform duration-300 mt-0.5 sm:mt-0 ${
                        isOpen
                          ? "text-amber rotate-180"
                          : "text-navy/50 rotate-0"
                      }`}
                    >
                      {isOpen ? (
                        <Minus
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          strokeWidth={2.5}
                        />
                      ) : (
                        <Plus
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          strokeWidth={2.5}
                        />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 sm:px-8 sm:pb-8 animate-fade-in-up">
                      <p className="font-body text-[14px] sm:text-base text-white/80 leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
