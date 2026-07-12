import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";

export function ProTips({ tips = [] }) {
  if (!tips || tips.length === 0) return null;

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
