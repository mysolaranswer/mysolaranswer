"use client";

import { useState } from "react";
import { Zap, Activity, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

// Internal constant — resistivity for copper
const K = 10.8;

// Standard AWG Circular Mils reference table (spec-defined)
const AWG_TABLE = [
  { gauge: "AWG 14",  cm: 4110   },
  { gauge: "AWG 12",  cm: 6530   },
  { gauge: "AWG 10",  cm: 10380  },
  { gauge: "AWG 8",   cm: 16510  },
  { gauge: "AWG 6",   cm: 26240  },
  { gauge: "AWG 4",   cm: 41740  },
  { gauge: "AWG 2",   cm: 66360  },
  { gauge: "AWG 1/0", cm: 105600 },
  { gauge: "AWG 2/0", cm: 133100 },
  { gauge: "AWG 3/0", cm: 167800 },
  { gauge: "AWG 4/0", cm: 211600 },
];

export function SolarWireSizeCalculator() {
  // Inputs
  const [powerType, setPowerType]   = useState("Watts"); // "Watts" | "Amps"
  const [powerValue, setPowerValue] = useState("");
  const [voltage, setVoltage]       = useState(24);
  const [length, setLength]         = useState("");
  const [targetDrop, setTargetDrop] = useState(3);

  // Outputs
  const [result, setResult] = useState(null);
  const [error, setError]   = useState("");

  const handleCalculate = () => {
    setError("");
    setResult(null);

    // ── Validation ──────────────────────────────────────────────────────────
    const pv = parseFloat(powerValue);
    const l  = parseFloat(length);

    if (!powerValue || !length || isNaN(pv) || pv <= 0 || isNaN(l) || l <= 0) {
      setError("Please fill in all fields with valid values.");
      return;
    }

    // ── Step 1: Derive amps ──────────────────────────────────────────────────
    let amps;
    if (powerType === "Watts") {
      amps = pv / voltage;
    } else {
      amps = pv;
    }

    if (amps <= 0 || !isFinite(amps)) {
      setError("Please enter a valid wattage or current value.");
      return;
    }

    // ── Step 2: Allowable voltage drop (volts) ───────────────────────────────
    const allowableVD = (targetDrop / 100) * voltage;

    // ── Step 3: Required circular mils ──────────────────────────────────────
    const requiredCM = (K * amps * l * 2) / allowableVD;

    // ── Step 4: Look up AWG size ─────────────────────────────────────────────
    const match = AWG_TABLE.find((w) => w.cm >= requiredCM);

    if (!match) {
      // Exceeds 4/0 AWG
      setResult({
        exceeded: true,
        message:
          "Required wire size exceeds 4/0 AWG. Split into parallel runs or consult a licensed electrician.",
      });
      return;
    }

    // ── Step 5: Actual voltage drop ──────────────────────────────────────────
    const actualVD_volts   = (K * amps * l * 2) / match.cm;
    const actualVD_percent = (actualVD_volts / voltage) * 100;
    const pass             = actualVD_percent <= targetDrop;

    setResult({
      exceeded:       false,
      gauge:          match.gauge,
      actualVD_volts:  actualVD_volts.toFixed(3),
      actualVD_percent: actualVD_percent.toFixed(2),
      pass,
    });
  };

  // Label for the power value input
  const powerLabel = powerType === "Watts" ? "Total Wattage (W)" : "Current (A)";
  const powerUnit  = powerType === "Watts" ? "W" : "A";
  const powerPlaceholder = powerType === "Watts" ? "e.g. 300" : "e.g. 30";

  return (
    <div className="bg-white rounded-2xl sm:rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(13,27,42,0.1)] border border-navy/5 overflow-hidden flex flex-col lg:flex-row">
      
      {/* INPUTS (Left Column) */}
      <div className="flex-1 p-6 sm:p-10 lg:p-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center">
            <Zap className="w-5 h-5 text-amber" />
          </div>
          <h3 className="font-heading text-2xl text-navy">System Specs</h3>
        </div>
        
        <div className="space-y-6">

          {/* Power Type Toggle */}
          <div>
            <label className="block text-[13px] font-bold text-navy/60 uppercase tracking-wider mb-3">Input Type</label>
            <div className="grid grid-cols-2 gap-3">
              {["Watts", "Amps"].map((type) => (
                <button
                  key={type}
                  onClick={() => { setPowerType(type); setPowerValue(""); setResult(null); }}
                  className={`py-3 rounded-xl font-bold border-2 transition-all ${
                    powerType === type
                      ? "bg-navy text-white border-navy shadow-md"
                      : "bg-white border-navy/10 text-navy hover:border-amber/50 hover:bg-navy/[0.02]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Power Value Input */}
          <div>
            <label className="block text-[13px] font-bold text-navy/60 uppercase tracking-wider mb-3">
              {powerLabel}
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                value={powerValue}
                onChange={(e) => { setPowerValue(e.target.value); setResult(null); }}
                placeholder={powerPlaceholder}
                className="w-full bg-navy/[0.03] border border-navy/10 rounded-xl py-3.5 pl-5 pr-16 text-navy text-lg font-bold focus:ring-2 focus:ring-amber focus:border-amber focus:bg-white transition-all outline-none"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-navy/40 font-bold">{powerUnit}</span>
            </div>
          </div>

          {/* System Voltage */}
          <div>
            <label className="block text-[13px] font-bold text-navy/60 uppercase tracking-wider mb-3">System Voltage</label>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[12, 24, 48].map((v) => (
                <button
                  key={v}
                  onClick={() => { setVoltage(v); setResult(null); }}
                  className={`py-3 rounded-xl font-bold border-2 transition-all ${
                    voltage === v
                      ? "bg-navy text-white border-navy shadow-md"
                      : "bg-white border-navy/10 text-navy hover:border-amber/50 hover:bg-navy/[0.02]"
                  }`}
                >
                  {v}V
                </button>
              ))}
            </div>
          </div>

          {/* One-Way Cable Length */}
          <div>
            <label className="block text-[13px] font-bold text-navy/60 uppercase tracking-wider mb-3">One-Way Cable Length</label>
            <div className="relative">
              <input
                type="number"
                min="0"
                value={length}
                onChange={(e) => { setLength(e.target.value); setResult(null); }}
                placeholder="e.g. 20"
                className="w-full bg-navy/[0.03] border border-navy/10 rounded-xl py-3.5 pl-5 pr-16 text-navy text-lg font-bold focus:ring-2 focus:ring-amber focus:border-amber focus:bg-white transition-all outline-none"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-navy/40 font-bold">ft</span>
            </div>
          </div>

          {/* Max Voltage Drop */}
          <div>
            <label className="block text-[13px] font-bold text-navy/60 uppercase tracking-wider mb-3">Maximum Voltage Drop</label>
            <div className="relative">
              <select
                value={targetDrop}
                onChange={(e) => { setTargetDrop(Number(e.target.value)); setResult(null); }}
                className="w-full bg-navy/[0.03] border border-navy/10 rounded-xl py-3.5 pl-5 pr-12 text-navy text-base font-bold focus:ring-2 focus:ring-amber focus:border-amber focus:bg-white transition-all outline-none appearance-none cursor-pointer"
              >
                <option value={2}>2% Drop (Highly Recommended)</option>
                <option value={3}>3% Drop (Standard Solar)</option>
                <option value={5}>5% Drop (Max Allowable)</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-navy/40 w-0 h-0"></div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm font-bold flex items-center gap-2 animate-fade-in-up">
              <AlertTriangle className="w-4 h-4" /> {error}
            </div>
          )}

          {/* CALCULATE BUTTON */}
          <div className="pt-4">
            <button
              onClick={handleCalculate}
              className="w-full bg-amber hover:bg-[#e0921f] text-navy font-bold text-lg py-4 rounded-xl shadow-[0_4px_14px_rgba(245,161,34,0.3)] hover:shadow-[0_6px_20px_rgba(245,161,34,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Calculate Wire Size
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

      {/* OUTPUTS (Right Column) */}
      <div className="w-full lg:w-[45%] bg-navy p-6 sm:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

        <h3 className="font-heading text-xl text-white mb-8 opacity-90 relative z-10">Recommendation</h3>
        
        <div className="relative z-10 h-full flex flex-col justify-center min-h-[250px]">
          {result ? (
            result.exceeded ? (
              /* Exceeded 4/0 AWG */
              <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl flex flex-col items-center text-center gap-4 animate-fade-in-up h-full justify-center">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-red-400 font-bold text-lg mb-2">Size Exceeded</h4>
                  <p className="text-red-200/70 text-sm leading-relaxed">{result.message}</p>
                </div>
              </div>
            ) : (
              /* Success */
              <div className="animate-fade-in-up space-y-6">

                {/* Primary result — gauge */}
                <div className="bg-amber p-8 rounded-2xl text-navy flex flex-col items-center text-center shadow-[0_10px_40px_-10px_rgba(245,161,34,0.5)] border border-amber/50 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2 relative z-10">Recommended Wire Gauge</span>
                  <span className="text-5xl sm:text-6xl font-heading font-black tracking-tight relative z-10">{result.gauge}</span>
                </div>

                {/* Detail metrics */}
                <div className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">

                  {/* Actual VD % */}
                  <div className="flex justify-between items-center text-white">
                    <span className="opacity-70 text-sm">Actual Voltage Drop:</span>
                    <span className="font-bold flex items-center gap-2 text-lg">
                      <Activity className="w-4 h-4 text-amber" /> {result.actualVD_percent}%
                    </span>
                  </div>

                  <div className="w-full h-px bg-white/10"></div>

                  {/* Actual VD volts */}
                  <div className="flex justify-between items-center text-white">
                    <span className="opacity-70 text-sm">Voltage Drop (Volts):</span>
                    <span className="font-bold text-lg">{result.actualVD_volts}V</span>
                  </div>

                  <div className="w-full h-px bg-white/10"></div>

                  {/* Pass / Warning */}
                  <div className="flex justify-between items-center text-white">
                    <span className="opacity-70 text-sm">NEC Status:</span>
                    {result.pass ? (
                      <span className="font-bold text-emerald-400 flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4" /> Within NEC recommended limit
                      </span>
                    ) : (
                      <span className="font-bold text-amber flex items-center gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4" /> Exceeds selected voltage drop limit
                      </span>
                    )}
                  </div>

                </div>

                {/* Disclaimer */}
                <p className="text-white/40 text-xs leading-relaxed">
                  Results assume copper wire in free air at 75°C rating. Wire bundled in conduit may require a larger gauge. Always verify with NEC Table 310.16 before installation.
                </p>

              </div>
            )
          ) : (
            /* Idle State */
            <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white opacity-50" />
              </div>
              <p className="text-white text-base font-body max-w-[250px] leading-relaxed">
                Enter your system specs and click calculate to see your results.
              </p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}