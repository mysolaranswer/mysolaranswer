import React from 'react';
import { HelpCircle, PhoneOff, Calculator } from 'lucide-react';

const problems = [
  {
    icon: HelpCircle,
    title: "Solar is Confusing",
    description: "Net metering, federal tax credits, panel degradation—it’s a lot to process. Most sites hide the simple answers behind industry jargon."
  },
  {
    icon: PhoneOff,
    title: "Pushy Sales Tactics",
    description: "Getting a simple quote usually means handing over your phone number to 5 different companies who will call you relentlessly for weeks."
  },
  {
    icon: Calculator,
    title: "Inaccurate Estimates",
    description: "Many online calculators use outdated utility rates or overly optimistic sun-hour data just to make the ROI look better than it actually is."
  }
];

export default function TheProblem() {
  return (
    <section className="w-full py-20 lg:py-24 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="h2 text-[var(--text-heading)] mb-6">The Problem We Solve</h2>
          <p className="text-base md:text-lg text-[var(--text-body)]">
            We exist to fix a broken process. Finding out if solar makes sense for your home shouldn't be a painful, high-pressure experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((problem, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 lg:p-8 bg-[var(--bg-card-on-white)] border border-[var(--border-divider)] group transition-all hover:border-amber hover:shadow-[0_8px_30px_rgba(245,158,11,0.12)]">
              <div className="w-16 h-16 rounded-full bg-amber/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-8 h-8 text-amber" />
              </div>
              <h4 className="h4 text-[var(--text-heading)] mb-4">{problem.title}</h4>
              <p className="text-sm md:text-base text-[var(--text-body)]">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
