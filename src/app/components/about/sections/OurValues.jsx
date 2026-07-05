import React from 'react';
import { ShieldCheck, Unlock, ThumbsUp } from 'lucide-react';

const values = [
  {
    icon: Unlock,
    title: "Always Free",
    description: "Our tools are free because we believe everyone deserves access to clear solar information. We earn through non-intrusive advertising."
  },
  {
    icon: ShieldCheck,
    title: "Total Transparency",
    description: "We don't hide our formulas. We openly share where our data comes from so you can trust the numbers you see."
  },
  {
    icon: ThumbsUp,
    title: "User First",
    description: "No mandatory email captures. No aggressive retargeting. You get the answers you need and move on with your research."
  }
];

export default function OurValues() {
  return (
    <section className="w-full py-20 lg:py-24 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <div className="mb-4 text-[#4B7252] font-bold tracking-wider text-sm uppercase">
              // OUR VALUES
            </div>
            <h2 className="h2 text-[var(--text-heading)]">
              Why Are Our Tools Completely Free?
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base md:text-lg text-[var(--text-body)]">
              At MySolarAnswer, our values are the driving force behind everything. We want to empower homeowners, not exploit them.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="bg-[var(--bg-card-on-white)] border border-[var(--border-divider)] p-8 hover:border-amber transition-colors group">
              <div className="mb-6 text-[#4B7252]">
                <value.icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="h4 text-[var(--text-heading)] mb-4">{value.title}</h4>
              <p className="text-sm md:text-base text-[var(--text-body)]">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
