"use client";

import { useState } from "react";
import { Zap, Activity, AlertTriangle, CheckCircle2, ArrowRight, Info } from "lucide-react";

// Standard commercial charge controller sizes (Amps)
const CONTROLLER_SIZES = [10, 20, 30, 40, 60, 80, 100];

// Derive MPPT/PWM recommendation from voltage ratio
function getControllerTypeRec(voltageRatio) {
  if (voltageRatio > 2.0) {
    return {
      label: "MPPT Recommended",
      reason:
        "Your panel voltage is more than 2× your battery voltage. MPPT will recover 20–30% more energy that PWM would waste.",
    };
  }
  if (voltageRatio >= 1.5) {
    return {
      label: "MPPT Recommended",
      reason:
        "Your panel voltage is significantly higher than your battery voltage. MPPT is the better choice for efficiency.",
    };
  }
  if (voltageRatio > 1.1) {
    return {
      label: "MPPT or PWM",
      reason:
        "PWM will work but MPPT will give you better efficiency. Worth the upgrade if budget allows.",
    };
  }
  return {
    label: "PWM Acceptable",
    reason:
      "Your panel voltage closely matches your battery voltage. A PWM controller is the practical choice here.",
  };
}

export function SolarChargeControllerCalculator() {
  // Inputs
  const [numPanels, setNumPanels]         = useState("");
  const [wattsPerPanel, setWattsPerPanel] = useState("");
  const [systemVoltage, setSystemVoltage] = useState(12);
  const [voc, setVoc]                     = useState("");

  // Outputs
  const [result, setResult] = useState(null);
  const [error, setError]   = useState("");

  const handleCalculate = () => {
    setError("");
    setResult(null);

    const panels   = parseFloat(numPanels);
    const watts    = parseFloat(wattsPerPanel);
    const voltage  = systemVoltage;
    const vocVal   = parseFloat(voc);

    // ── Validation ──────────────────────────────────────────────────────────
    if (
      !numPanels || !wattsPerPanel || !voc ||
      isNaN(panels) || panels <= 0 ||
      isNaN(watts)  || watts  <= 0 ||
      isNaN(vocVal) || vocVal <= 0
    ) {
      setError("Please fill in all fields with valid values.");
      return;
    }

    // ── Step 1: Total wattage ────────────────────────────────────────────────
    const totalWatts = panels * watts;

    // ── Step 2: Raw current ──────────────────────────────────────────────────
    const rawAmps = totalWatts / voltage;

    // ── Step 3: NEC 125% safety factor ──────────────────────────────────────
    const requiredAmps = rawAmps * 1.25;

    // ── Step 4: Recommended controller size ─────────────────────────────────
    const recommendedSize = CONTROLLER_SIZES.find((s) => s >= requiredAmps);
    const exceeded        = recommendedSize === undefined; // > 100A

    // ── Step 5: MPPT vs PWM ──────────────────────────────────────────────────
    const voltageRatio = vocVal / voltage;
    const controllerType = getControllerTypeRec(voltageRatio);

    // Low Voc warning
    const vocWarning = vocVal < voltage;

    setResult({
      totalWatts,
      rawAmps,
      requiredAmps,
      recommendedSize,
      exceeded,
      controllerType,
      vocWarning,
      // store inputs for the breakdown
      panels,
      watts,
      voltage,
    });
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(13,27,42,0.1)] border border-navy/5 overflow-hidden flex flex-col lg:flex-row">

      {/* ── INPUTS (Left Column) ─────────────────────────────────────────── */}
      <div className="flex-1 p-6 sm:p-10 lg:p-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center">
            <Zap className="w-5 h-5 text-amber" />
          </div>
          <h3 className="font-heading text-2xl text-navy">System Specs</h3>
        </div>

        <div className="space-y-6">

          {/* Number of Panels + Wattage Per Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Number of Panels */}
            <div>
              <label className="block text-[13px] font-bold text-navy/60 uppercase tracking-wider mb-3">
                Number of Panels
              </label>
              <input
                type="number"
                min="1"
                step="1"
                value={numPanels}
                onChange={(e) => { setNumPanels(e.target.value); setResult(null); }}
                placeholder="e.g. 4"
                className="w-full bg-navy/[0.03] border border-navy/10 rounded-xl py-3.5 pl-5 pr-5 text-navy text-lg font-bold focus:ring-2 focus:ring-amber focus:border-amber focus:bg-white transition-all outline-none"
              />
            </div>

            {/* Wattage Per Panel */}
            <div>
              <label className="block text-[13px] font-bold text-navy/60 uppercase tracking-wider mb-3">
                Wattage Per Panel (W)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  value={wattsPerPanel}
                  onChange={(e) => { setWattsPerPanel(e.target.value); setResult(null); }}
                  placeholder="e.g. 400"
                  className="w-full bg-navy/[0.03] border border-navy/10 rounded-xl py-3.5 pl-5 pr-16 text-navy text-lg font-bold focus:ring-2 focus:ring-amber focus:border-amber focus:bg-white transition-all outline-none"
                />
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-navy/40 font-bold">W</span>
              </div>
            </div>
          </div>

          {/* System Voltage */}
          <div>
            <label className="block text-[13px] font-bold text-navy/60 uppercase tracking-wider mb-3">
              System Voltage (Battery Bank)
            </label>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[12, 24, 48].map((v) => (
                <button
                  key={v}
                  onClick={() => { setSystemVoltage(v); setResult(null); }}
                  className={`py-3 rounded-xl font-bold border-2 transition-all ${
                    systemVoltage === v
                      ? "bg-navy text-white border-navy shadow-md"
                      : "bg-white border-navy/10 text-navy hover:border-amber/50 hover:bg-navy/[0.02]"
                  }`}
                >
                  {v}V
                </button>
              ))}
            </div>
          </div>

          {/* Panel Voc */}
          <div>
            <label className="block text-[13px] font-bold text-navy/60 uppercase tracking-wider mb-3">
              Panel Open Circuit Voltage — Voc (V)
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                step="0.1"
                value={voc}
                onChange={(e) => { setVoc(e.target.value); setResult(null); }}
                placeholder="e.g. 22.5"
                className="w-full bg-navy/[0.03] border border-navy/10 rounded-xl py-3.5 pl-5 pr-16 text-navy text-lg font-bold focus:ring-2 focus:ring-amber focus:border-amber focus:bg-white transition-all outline-none"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-navy/40 font-bold">V</span>
            </div>
            <p className="mt-2 text-xs text-navy/50 flex items-start gap-1.5">
              <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              Find this labeled as &apos;Voc&apos; on your panel&apos;s specification sticker or datasheet.
            </p>
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
              Calculate Controller Size
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

      {/* ── OUTPUTS (Right Column) ───────────────────────────────────────── */}
      <div className="w-full lg:w-[45%] bg-navy p-6 sm:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

        <h3 className="font-heading text-xl text-white mb-8 opacity-90 relative z-10">Recommendation</h3>

        <div className="relative z-10 h-full flex flex-col justify-center min-h-[250px]">
          {result ? (
            result.exceeded ? (
              /* Over 100A */
              <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl flex flex-col items-center text-center gap-4 animate-fade-in-up justify-center">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-red-400 font-bold text-lg mb-2">Capacity Exceeded</h4>
                  <p className="text-red-200/70 text-sm leading-relaxed">
                    Your system requires over 100A. Use two charge controllers in parallel or upgrade to a higher system voltage.
                  </p>
                </div>
              </div>
            ) : (
              /* Success */
              <div className="animate-fade-in-up space-y-5">

                {/* Primary result — controller size */}
                <div className="bg-amber p-8 rounded-2xl text-navy flex flex-col items-center text-center shadow-[0_10px_40px_-10px_rgba(245,161,34,0.5)] border border-amber/50 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1 relative z-10">Minimum Controller Size</span>
                  <span className="text-6xl sm:text-7xl font-heading font-black tracking-tight relative z-10">
                    {result.recommendedSize}A
                  </span>
                </div>

                {/* Detail metrics */}
                <div className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">

                  {/* Total wattage */}
                  <div className="flex justify-between items-center text-white">
                    <span className="opacity-70 text-sm">Total Array Wattage:</span>
                    <span className="font-bold text-lg flex items-center gap-2">
                      <Activity className="w-4 h-4 text-amber" />
                      {result.totalWatts}W
                    </span>
                  </div>

                  <div className="w-full h-px bg-white/10"></div>

                  {/* Controller type */}
                  <div className="flex flex-col gap-1 text-white">
                    <div className="flex justify-between items-start">
                      <span className="opacity-70 text-sm">Recommended Type:</span>
                      <span className={`font-bold text-sm text-right ml-4 ${
                        result.controllerType.label === "PWM Acceptable"
                          ? "text-sky-300"
                          : "text-emerald-400"
                      }`}>
                        {result.controllerType.label}
                      </span>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed mt-1">
                      {result.controllerType.reason}
                    </p>
                  </div>

                  {/* Low Voc warning */}
                  {result.vocWarning && (
                    <>
                      <div className="w-full h-px bg-white/10"></div>
                      <div className="flex items-start gap-2 text-amber">
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                        <p className="text-xs leading-relaxed">
                          Note: Your Voc appears lower than your system voltage. Double-check your panel specs — this is unusual.
                        </p>
                      </div>
                    </>
                  )}

                  <div className="w-full h-px bg-white/10"></div>

                  {/* Calculation breakdown */}
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-2">Calculation Breakdown</p>
                    <p className="text-white/60 text-xs">
                      {result.panels} panels × {result.watts}W = <span className="text-white font-bold">{result.totalWatts}W</span> total
                    </p>
                    <p className="text-white/60 text-xs">
                      {result.totalWatts}W ÷ {result.voltage}V = <span className="text-white font-bold">{result.rawAmps.toFixed(1)}A</span> raw current
                    </p>
                    <p className="text-white/60 text-xs">
                      {result.rawAmps.toFixed(1)}A × 1.25 safety factor = <span className="text-white font-bold">{result.requiredAmps.toFixed(1)}A</span> required
                    </p>
                  </div>

                </div>

                {/* Disclaimer */}
                <p className="text-white/40 text-xs leading-relaxed">
                  This calculator sizes your controller based on panel wattage and NEC safety standards. Always verify your controller&apos;s maximum input voltage supports your panel Voc before purchasing. Results are estimates — consult your panel and controller datasheets before installation.
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
