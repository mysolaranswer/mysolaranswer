"use client";

import { useState } from "react";
import { Zap, Activity, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/app/components/ui/buttons/PrimaryButton";

// Standard AWG Copper Wire Specifications
const AWG_SIZES = [
  { gauge: "14 AWG", cma: 4110, maxAmps: 15 },
  { gauge: "12 AWG", cma: 6530, maxAmps: 20 },
  { gauge: "10 AWG", cma: 10380, maxAmps: 30 },
  { gauge: "8 AWG", cma: 16510, maxAmps: 40 },
  { gauge: "6 AWG", cma: 26240, maxAmps: 55 },
  { gauge: "4 AWG", cma: 41740, maxAmps: 70 },
  { gauge: "2 AWG", cma: 66360, maxAmps: 95 },
  { gauge: "1 AWG", cma: 83690, maxAmps: 110 },
  { gauge: "1/0 AWG", cma: 105600, maxAmps: 150 },
  { gauge: "2/0 AWG", cma: 133100, maxAmps: 175 },
  { gauge: "3/0 AWG", cma: 167800, maxAmps: 200 },
  { gauge: "4/0 AWG", cma: 211600, maxAmps: 230 },
];

export function SolarWireSizeCalculator() {
  const [voltage, setVoltage] = useState(12);
  const [current, setCurrent] = useState("");
  const [length, setLength] = useState("");
  const [targetDrop, setTargetDrop] = useState(3);
  
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    setResult(null);

    const i = parseFloat(current);
    const l = parseFloat(length);

    if (isNaN(i) || i <= 0 || isNaN(l) || l <= 0) {
      setError("Please enter valid numbers for Current and Length.");
      return;
    }

    // Math logic for copper wire (K factor = 10.75 for copper)
    const allowedVoltageDrop = voltage * (targetDrop / 100);
    const requiredCMA = (10.75 * 2 * l * i) / allowedVoltageDrop;

    // Find the smallest wire gauge that meets BOTH voltage drop and safety ampacity
    const suitableWire = AWG_SIZES.find(wire => wire.cma >= requiredCMA && wire.maxAmps >= i);

    if (suitableWire) {
      const actualDropVolts = (10.75 * 2 * l * i) / suitableWire.cma;
      const actualDropPercent = (actualDropVolts / voltage) * 100;

      setResult({
        gauge: suitableWire.gauge,
        actualDrop: actualDropPercent.toFixed(2),
        pass: true,
      });
    } else {
      setResult({ 
        pass: false, 
        error: "Current is too high or run is too long for standard AWG sizes. Requires 250+ kcmil wire." 
      });
    }
  };

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
          {/* Voltage Selection */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Current Input */}
            <div>
              <label className="block text-[13px] font-bold text-navy/60 uppercase tracking-wider mb-3">Max Amps</label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  value={current}
                  onChange={(e) => { setCurrent(e.target.value); setResult(null); }}
                  placeholder="e.g. 30"
                  className="w-full bg-navy/[0.03] border border-navy/10 rounded-xl py-3.5 pl-5 pr-16 text-navy text-lg font-bold focus:ring-2 focus:ring-amber focus:border-amber focus:bg-white transition-all outline-none"
                />
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-navy/40 font-bold">A</span>
              </div>
            </div>

            {/* Length Input */}
            <div>
              <label className="block text-[13px] font-bold text-navy/60 uppercase tracking-wider mb-3">Run Length</label>
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
          </div>

          {/* Target Drop Selection */}
          <div>
            <label className="block text-[13px] font-bold text-navy/60 uppercase tracking-wider mb-3">Acceptable Drop</label>
            <div className="relative">
              <select
                value={targetDrop}
                onChange={(e) => { setTargetDrop(Number(e.target.value)); setResult(null); }}
                className="w-full bg-navy/[0.03] border border-navy/10 rounded-xl py-3.5 pl-5 pr-12 text-navy text-base font-bold focus:ring-2 focus:ring-amber focus:border-amber focus:bg-white transition-all outline-none appearance-none cursor-pointer"
              >
                <option value={1}>1% Drop (Critical / Battery Runs)</option>
                <option value={2}>2% Drop (Highly Recommended)</option>
                <option value={3}>3% Drop (Standard Solar Panels)</option>
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
            result.pass ? (
              <div className="animate-fade-in-up space-y-6">
                
                <div className="bg-amber p-8 rounded-2xl text-navy flex flex-col items-center text-center shadow-[0_10px_40px_-10px_rgba(245,161,34,0.5)] border border-amber/50 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2 relative z-10">Required Gauge</span>
                  <span className="text-5xl sm:text-6xl font-heading font-black tracking-tight relative z-10">{result.gauge}</span>
                </div>
                
                <div className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex justify-between items-center text-white">
                    <span className="opacity-70 text-sm">Calculated Drop:</span>
                    <span className="font-bold flex items-center gap-2 text-lg">
                      <Activity className="w-4 h-4 text-amber" /> {result.actualDrop}%
                    </span>
                  </div>
                  <div className="w-full h-px bg-white/10"></div>
                  <div className="flex justify-between items-center text-white">
                    <span className="opacity-70 text-sm">Safety Status:</span>
                    <span className="font-bold text-emerald-400 flex items-center gap-2 text-base">
                      <CheckCircle2 className="w-4 h-4" /> Passed Ampacity
                    </span>
                  </div>
                </div>

              </div>
            ) : (
              <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl flex flex-col items-center text-center gap-4 animate-fade-in-up h-full justify-center">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-red-400 font-bold text-lg mb-2">Requirement Exceeded</h4>
                  <p className="text-red-200/70 text-sm leading-relaxed">{result.error}</p>
                </div>
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