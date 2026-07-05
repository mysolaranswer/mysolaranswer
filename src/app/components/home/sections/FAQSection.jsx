"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "Are these calculators completely free to use?",
      answer: "Yes, all of our calculators are 100% free to use. There's no sign-up required, and you can calculate as many times as you need.",
    },
    {
      question: "How accurate are the solar estimates?",
      answer: "Our calculators use industry-standard formulas to provide highly accurate estimates based on the inputs you provide. However, for a precise quote tailored to your roof, a professional consultation is recommended.",
    },
    {
      question: "Do I need to know my exact energy usage?",
      answer: "It helps to have a rough idea of your monthly electricity bill or kWh usage, but many of our calculators provide typical household averages if you're unsure.",
    },
    {
      question: "Can I calculate for an off-grid system?",
      answer: "Absolutely! We have a dedicated Off-Grid Solar Calculator that helps you size panels, batteries, and charge controllers for completely independent setups.",
    },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full bg-[var(--bg-page)] py-20 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="h2 text-black">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border border-[var(--border-divider)] rounded-2xl overflow-hidden transition-all ${isOpen ? 'bg-navy' : 'bg-white hover:border-amber/50'}`}
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <h3 className={`h3 !text-lg md:!text-xl ${isOpen ? 'text-white' : 'text-black'}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'text-amber' : 'text-amber'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 animate-fade-in-up">
                    <p className="body-regular text-[var(--text-body-on-navy)]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
