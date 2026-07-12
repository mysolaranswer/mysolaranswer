import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { Lightbulb, Wrench, CheckCircle2 } from "lucide-react";

export function WireSizeProTips() {
  const tips = [
    {
      title: "When in Doubt, Size Up",
      desc: "If your calculation puts you right on the border between two wire gauges (e.g., between 8 AWG and 10 AWG), always buy the thicker wire (8 AWG). The slight increase in cost is worth the peace of mind and the elimination of voltage drop.",
      icon: CheckCircle2
    },
    {
      title: "Use Proper MC4 Connectors",
      desc: "Don't try to splice solar wires together with electrical tape or wire nuts. Always use proper, watertight MC4 connectors and a dedicated crimping tool designed for solar wiring to ensure a solid, zero-resistance connection.",
      icon: Wrench
    },
    {
      title: "Plan for Future Expansion",
      desc: "If you think you might add more panels to your array next year, buy thicker wire now. Digging up trenches to run new, thicker cable later is incredibly frustrating and expensive.",
      icon: Lightbulb
    }
  ];

  return (
    <RevealOnScroll className="mb-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl text-[var(--color-navy)] mb-10 text-center">Pro Tips From Installers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip, idx) => (
            <div key={idx} className="bg-[var(--bg-light)] border border-[var(--border-divider)] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-5 border border-[var(--border-divider)] text-[var(--color-amber)]">
                <tip.icon className="w-6 h-6 text-[var(--color-amber)]" />
              </div>
              <h3 className="text-xl font-heading text-[var(--color-navy)] mb-3">{tip.title}</h3>
              <p className="font-body text-[var(--text-body)] text-sm leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}
