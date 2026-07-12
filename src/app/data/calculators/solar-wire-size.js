import { AlertTriangle, CheckCircle2, Lightbulb, Wrench } from "lucide-react";

export const calculatorData = {
  slug: "solar-wire-size-calculator",
  seoTitle: "Solar Wire Size Calculator — Find the Right Cable for Your System",
  seoDescription: "Free solar wire size calculator. Enter your system voltage, current, and cable length to find the correct wire gauge for your solar panel installation.",
  
  hero: {
    title: "Solar Wire Size Calculator —",
    highlight: "Get the Right Cable Gauge",
    description: "Choosing the correct solar cable size is critical for safety and efficiency. Use our free tool below to calculate your ideal AWG wire gauge based on voltage drop and max current."
  },

  content: (
    <>
      <div className="mb-12 bg-red-50 border-l-4 border-red-500 rounded-r-2xl shadow-sm p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -right-4 -top-4 opacity-5 pointer-events-none">
          <AlertTriangle className="w-48 h-48 text-red-500" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-red-100 rounded-full p-3 flex-shrink-0 mt-1">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h2 className="!font-heading !text-2xl !text-red-900 !mb-3 !mt-0">Safety & NEC Compliance Warning</h2>
            <p className="font-body text-red-800 leading-relaxed mb-4">
              Electrical fires are a real risk if solar wiring is incorrectly sized. When running cables, it is absolutely critical to follow the <strong>National Electrical Code (NEC)</strong> guidelines. Always adhere to the following safety rules:
            </p>
            <ul className="list-disc list-outside ml-5 font-body text-red-800/90 space-y-2">
              <li><strong>Continuous Load Factor:</strong> Solar is considered a "continuous load" by the NEC. Always multiply your calculated max current by 1.25 (or multiply Isc by 1.56) to determine the absolute minimum wire ampacity required.</li>
              <li><strong>Use the Right Insulation:</strong> Standard indoor wire (like Romex) will degrade rapidly outdoors. Always use UV-resistant <strong>USE-2</strong> or <strong>PV Wire</strong> for any runs exposed to the sun and weather.</li>
              <li><strong>Incorporate Fuses and Breakers:</strong> Wires protect the equipment, but fuses protect the wires. Ensure you install proper overcurrent protection rated for your specific wire gauge to prevent catastrophic melting.</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>How to Use This Calculator</h2>
      <p>
        Determining the correct wire size is as simple as 1-2-3:
      </p>
      <ol>
        <li><strong>System Voltage:</strong> Enter the DC voltage of your system (e.g., 12V, 24V, 48V).</li>
        <li><strong>Max Current (Amps):</strong> Enter the total maximum amps that will pass through the wire. For a solar array, this is the short-circuit current (Isc) multiplied by 1.56.</li>
        <li><strong>One-Way Distance:</strong> Enter the physical distance (in feet) between your components.</li>
      </ol>
      <p>The calculator will instantly determine the correct AWG gauge to keep your voltage drop under the safe threshold.</p>

      <h2>Why Solar Wire Sizing Matters</h2>
      <p>
        When setting up a solar panel system, the cables act as the highways for your electricity. If you use a solar wire size that is too thin (a high AWG number), it creates resistance. This resistance leads to two major problems:
      </p>
      <ul>
        <li><strong>Voltage Drop:</strong> Energy is lost as heat before it ever reaches your charge controller or battery.</li>
        <li><strong>Fire Hazards:</strong> Forcing too much current through a thin wire causes overheating, which can melt insulation and cause fires.</li>
      </ul>

      <h2>Understanding Voltage Drop Risks</h2>
      <p>
        In DC (Direct Current) solar systems, voltage drop is a significant hurdle. If you have a 12V system and lose 1V through the wires, you've lost nearly 8% of your power. For critical runs (like between the charge controller and battery), you should aim for a maximum voltage drop of 1% to 2%. For standard solar panel wiring runs, 3% is acceptable. Our solar string calculator logic automatically checks these thresholds for you.
      </p>

      <h2>Series vs. Parallel Wiring Impact</h2>
      <p>
        How you wire your panels drastically impacts your required solar cable size:
      </p>
      <ul>
        <li><strong>Series Wiring:</strong> Increases voltage but keeps amps (current) the same. Higher voltage pushes through thinner wire more easily, meaning you can use a smaller gauge over longer distances.</li>
        <li><strong>Parallel Wiring:</strong> Keeps voltage the same but increases amps. High amps require a much thicker wire gauge to prevent overheating.</li>
      </ul>

      <div className="my-16 max-w-4xl mx-auto bg-white border border-[var(--border-divider)] rounded-2xl shadow-sm overflow-hidden not-prose">
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
              {[
                { awg: "10 AWG", amps: "30A", desc: "Common for 100W-400W solar panel strings and long runs." },
                { awg: "8 AWG", amps: "40A", desc: "Great for mid-sized arrays or slightly longer distances." },
                { awg: "6 AWG", amps: "55A", desc: "Standard for connecting charge controllers to batteries." },
                { awg: "4 AWG", amps: "70A", desc: "Used for high-current 12V systems or large inverters." },
                { awg: "2 AWG", amps: "95A", desc: "Heavy-duty for main battery bank interconnects." },
                { awg: "1/0 AWG", amps: "150A", desc: "Massive inverters (2000W+) pulling directly from 12V batteries." },
              ].map((row, idx) => (
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
    </>
  ),

  proTips: [
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
  ],

  faqs: [
    {
      question: "What happens if a solar wire is too thin?",
      answer: "If a wire is too thin for the current passing through it, it creates resistance. This causes a massive voltage drop (wasting your solar energy) and generates extreme heat, which is a major fire risk."
    },
    {
      question: "What AWG should I use for a 12V solar system?",
      answer: "12V systems require thicker wires because they operate at lower voltages and higher amps compared to 24V or 48V systems. A common size for short 12V runs is 10 AWG, but if you are running more than 20 feet or higher than 30 amps, you will likely need 8 AWG, 6 AWG, or thicker. Always use a solar panel wiring calculator to verify."
    },
    {
      question: "How long can solar cables be?",
      answer: "There is no absolute maximum length, but the longer the run, the thicker the wire must be to prevent voltage drop. If you need to run cables over 100 feet, you should wire your panels in series to increase the voltage (e.g., to 48V or 150V+), which allows you to use standard 10 AWG wire over long distances safely."
    },
    {
      question: "Should I use Copper or Aluminum wire for solar?",
      answer: "Copper is highly recommended for solar installations because it has lower resistance and is less prone to oxidation than aluminum. If you must use aluminum (usually only for very long, thick underground service runs), you must size up the wire by 1 to 2 gauges (e.g., use 4 AWG aluminum instead of 6 AWG copper)."
    },
    {
      question: "Solid vs. Stranded wire for solar panels?",
      answer: "Always use stranded wire. Solar panels are exposed to wind, vibration, and temperature changes. Stranded wire is flexible and can handle this without breaking. Solid wire is meant for rigid indoor housing circuits and can snap under outdoor stress."
    }
  ]
};
