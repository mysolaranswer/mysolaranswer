import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";

export function WireSizeChart() {
  const tableData = [
    { awg: "10 AWG", amps: "30A", desc: "Common for 100W-400W solar panel strings and long runs." },
    { awg: "8 AWG", amps: "40A", desc: "Great for mid-sized arrays or slightly longer distances." },
    { awg: "6 AWG", amps: "55A", desc: "Standard for connecting charge controllers to batteries." },
    { awg: "4 AWG", amps: "70A", desc: "Used for high-current 12V systems or large inverters." },
    { awg: "2 AWG", amps: "95A", desc: "Heavy-duty for main battery bank interconnects." },
    { awg: "1/0 AWG", amps: "150A", desc: "Massive inverters (2000W+) pulling directly from 12V batteries." },
  ];

  return (
    <RevealOnScroll className="mb-24">
      <div className="max-w-4xl mx-auto bg-white border border-[var(--border-divider)] rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 border-b border-[var(--border-divider)] bg-[var(--bg-light)]">
          <h2 className="font-heading text-2xl text-[var(--color-navy)] mb-2">Solar Wire Size Quick Reference Chart</h2>
          <p className="font-body text-[var(--text-body)]">A quick guide to standard AWG wire sizes and their typical ampacity limits in off-grid solar systems.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body">
            <thead className="bg-[var(--bg-page)] text-[var(--color-navy)] text-sm uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-bold border-b border-[var(--border-divider)]">Wire Size (AWG)</th>
                <th className="px-6 py-4 font-bold border-b border-[var(--border-divider)]">Max Current (Amps)</th>
                <th className="px-6 py-4 font-bold border-b border-[var(--border-divider)]">Typical Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-divider)]">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-[var(--bg-light)] transition-colors">
                  <td className="px-6 py-4 font-medium text-[var(--color-navy)]">{row.awg}</td>
                  <td className="px-6 py-4 text-[var(--color-amber)] font-bold">{row.amps}</td>
                  <td className="px-6 py-4 text-[var(--text-body)] text-sm">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </RevealOnScroll>
  );
}
