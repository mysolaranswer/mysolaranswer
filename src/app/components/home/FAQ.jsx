"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Are these solar calculators really free to use?",
    answer: "Yes! All of our calculators are 100% free. You don't need to create an account, sign up for a newsletter, or provide your phone number to see your results."
  },
  {
    question: "How accurate are the calculator results?",
    answer: "Our calculators use standard industry formulas, real-world solar panel specifications, and state-level averages to provide highly accurate estimates. However, they are designed for estimation purposes—your final system size and cost may vary based on your specific roof layout and local installer pricing."
  },
  {
    question: "How do I know how many solar panels I need?",
    answer: "The number of panels you need depends on your monthly electricity consumption (kWh), your location (sun hours), and the wattage of the panels you choose. You can use our 'How Many Solar Panels' calculator to get an exact number based on your electric bill."
  },
  {
    question: "What size solar battery do I need for backup power?",
    answer: "Battery size depends on what appliances you want to run during an outage and for how long. A typical home essential load requires a 10kWh to 13kWh battery. Use our Solar Battery Calculator to enter your specific appliances and calculate your required capacity."
  },
  {
    question: "Is solar actually a good investment?",
    answer: "In most states with high electricity rates and strong incentives (like net metering and the 30% federal tax credit), solar is an excellent investment. Most homeowners see a payback period of 6 to 9 years and a strong ROI. Our Solar ROI Calculator can show you your specific financial outlook."
  },
  {
    question: "Do you sell solar panels or installation services?",
    answer: "No, MySolarAnswer is an independent educational platform. We provide tools and guides to help you understand solar energy. We are not affiliated with any specific solar installer."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-500">
            Common questions about solar energy and using our calculators.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${openIndex === idx ? 'border-[var(--color-amber)] shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'transform rotate-180 text-[var(--color-amber)]' : ''}`} />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
