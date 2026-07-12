import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { AlertTriangle } from "lucide-react";

export function WireSizeSafetyWarning() {
  return (
    <RevealOnScroll className="mb-24">
      <div className="max-w-4xl mx-auto bg-red-50 border-l-4 border-red-500 rounded-r-2xl shadow-sm p-6 md:p-8 relative overflow-hidden">
        {/* Subtle background icon for design depth */}
        <div className="absolute -right-4 -top-4 opacity-5 pointer-events-none">
          <AlertTriangle className="w-48 h-48 text-red-500" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-red-100 rounded-full p-3 flex-shrink-0 mt-1">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h2 className="font-heading text-2xl text-red-900 mb-3">Safety & NEC Compliance Warning</h2>
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
    </RevealOnScroll>
  );
}
