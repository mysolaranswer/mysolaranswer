"use client";

import { useState, useCallback } from "react";
import {
  Zap,
  Plus,
  Trash2,
  AlertTriangle,
  ArrowRight,
  Sun,
  BatteryCharging,
  Activity,
  Info,
  CheckCircle2,
} from "lucide-react";

// ─── Constants ──────────────────────────────────────────────────────────────

const DEFAULT_APPLIANCES = [
  { id: "led-lights",   name: "LED Lights",            watts: 50,   hours: 5,    qty: 1, checked: true  },
  { id: "ceiling-fan",  name: "12V Ceiling Fan",        watts: 40,   hours: 8,    qty: 1, checked: false },
  { id: "ac-unit",      name: "Roof Air Conditioner",   watts: 1500, hours: 3,    qty: 1, checked: false },
  { id: "fridge",       name: "12V Compressor Fridge",  watts: 45,   hours: 24,   qty: 1, checked: true  },
  { id: "tv",           name: "Television",             watts: 80,   hours: 3,    qty: 1, checked: false },
  { id: "laptop",       name: "Laptop",                 watts: 65,   hours: 4,    qty: 1, checked: false },
  { id: "phone",        name: "Phone Charging",         watts: 20,   hours: 2,    qty: 1, checked: false },
  { id: "coffee-maker", name: "Coffee Maker",           watts: 800,  hours: 0.5,  qty: 1, checked: false },
  { id: "microwave",    name: "Microwave",              watts: 1000, hours: 0.5,  qty: 1, checked: false },
  { id: "water-pump",   name: "Water Pump",             watts: 60,   hours: 1,    qty: 1, checked: false },
  { id: "cpap",         name: "CPAP Machine",           watts: 30,   hours: 8,    qty: 1, checked: false },
  { id: "hair-dryer",   name: "Hair Dryer",             watts: 1875, hours: 0.25, qty: 1, checked: false },
];

const CONTROLLER_SIZES = [10, 20, 30, 40, 60, 80, 100];

function roundUpToNearest(value, increment) {
  return Math.ceil(value / increment) * increment;
}

function roundUpToNearestControllerSize(amps) {
  return CONTROLLER_SIZES.find((s) => s >= amps) ?? null;
}

// ─── Sub-components ─────────────────────────────────────────────────────────

function ApplianceRow({ appliance, isCustom, onChange, onDelete }) {
  const showACWarning = appliance.id === "ac-unit" && appliance.checked;

  return (
    <div className="group">
      <div
        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
          appliance.checked
            ? "bg-amber/5 border border-amber/20"
            : "bg-navy/[0.02] border border-transparent hover:border-navy/10"
        }`}
      >
        {/* Checkbox */}
        <button
          onClick={() => onChange({ ...appliance, checked: !appliance.checked })}
          className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
            appliance.checked
              ? "bg-amber border-amber"
              : "bg-white border-navy/20 hover:border-amber/50"
          }`}
          aria-label={`Toggle ${appliance.name}`}
        >
          {appliance.checked && (
            <svg className="w-3.5 h-3.5 text-navy" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        {/* Name */}
        <div className="flex-1 min-w-0">
          {isCustom ? (
            <input
              type="text"
              value={appliance.name}
              onChange={(e) => onChange({ ...appliance, name: e.target.value })}
              placeholder="Appliance name…"
              className="w-full bg-transparent text-navy text-sm font-semibold focus:outline-none placeholder:text-navy/30 border-b border-dashed border-navy/20 focus:border-amber pb-0.5"
            />
          ) : (
            <span className={`text-sm font-semibold transition-colors ${appliance.checked ? "text-navy" : "text-navy/50"}`}>
              {appliance.name}
            </span>
          )}
        </div>

        {/* Qty */}
        <div className="flex items-center gap-1 shrink-0">
          <input
            type="number"
            min="1"
            step="1"
            value={appliance.qty === "" ? "" : appliance.qty}
            onChange={(e) => onChange({ ...appliance, qty: e.target.value === "" ? "" : parseInt(e.target.value, 10) })}
            className={`w-12 text-center bg-white border rounded-lg py-1.5 px-1 text-sm font-bold focus:ring-2 focus:ring-amber focus:border-amber outline-none transition-all ${
              appliance.checked ? "border-navy/15 text-navy" : "border-navy/10 text-navy/40"
            }`}
            aria-label="Quantity"
          />
          <span className="text-[11px] font-bold text-navy/40 w-4">×</span>
        </div>

        {/* Watts */}
        <div className="flex items-center gap-1 shrink-0">
          <input
            type="number"
            min="0"
            step="1"
            value={appliance.watts === "" ? "" : appliance.watts}
            onChange={(e) => onChange({ ...appliance, watts: e.target.value === "" ? "" : parseFloat(e.target.value) })}
            className={`w-20 text-right bg-white border rounded-lg py-1.5 px-2 text-sm font-bold focus:ring-2 focus:ring-amber focus:border-amber outline-none transition-all ${
              appliance.checked ? "border-navy/15 text-navy" : "border-navy/10 text-navy/40"
            }`}
            aria-label="Watts"
          />
          <span className="text-[11px] font-bold text-navy/40 w-4">W</span>
        </div>

        {/* Hours */}
        <div className="flex items-center gap-1 shrink-0">
          <input
            type="number"
            min="0"
            max="24"
            step="0.25"
            value={appliance.hours === "" ? "" : appliance.hours}
            onChange={(e) => onChange({ ...appliance, hours: e.target.value === "" ? "" : parseFloat(e.target.value) })}
            className={`w-16 text-right bg-white border rounded-lg py-1.5 px-2 text-sm font-bold focus:ring-2 focus:ring-amber focus:border-amber outline-none transition-all ${
              appliance.checked ? "border-navy/15 text-navy" : "border-navy/10 text-navy/40"
            }`}
            aria-label="Hours per day"
          />
          <span className="text-[11px] font-bold text-navy/40">hr</span>
        </div>

        {/* Delete (custom only) */}
        {isCustom && (
          <button
            onClick={onDelete}
            className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-navy/30 hover:text-red-500 hover:bg-red-50 transition-all"
            aria-label="Remove appliance"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* AC Warning */}
      {showACWarning && (
        <div className="mt-2 ml-9 flex items-start gap-2 bg-amber/10 border border-amber/25 rounded-lg px-3 py-2.5">
          <AlertTriangle className="w-3.5 h-3.5 text-amber shrink-0 mt-0.5" />
          <p className="text-xs text-navy/70 leading-relaxed">
            AC dramatically increases system size. Many RV owners use shore power or a generator for AC and rely on solar for everything else.
          </p>
        </div>
      )}
    </div>
  );
}

function OptionButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-sm border-2 transition-all duration-200 ${
        active
          ? "bg-navy text-white border-navy shadow-md"
          : "bg-white border-navy/10 text-navy/60 hover:border-amber/40 hover:text-navy"
      }`}
    >
      {children}
    </button>
  );
}

function ResultCard({ icon, label, value, sub }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-1.5">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-lg bg-amber/15 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">{label}</span>
      </div>
      <p className="text-white font-bold text-2xl leading-tight">{value}</p>
      {sub && <p className="text-white/50 text-xs leading-relaxed">{sub}</p>}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export function RvSolarCalculator() {
  const [appliances, setAppliances] = useState(DEFAULT_APPLIANCES);
  const [customAppliances, setCustomAppliances] = useState([]);

  const [systemVoltage, setSystemVoltage] = useState(12);
  const [peakSunOption, setPeakSunOption] = useState("average");
  const [batteryType, setBatteryType] = useState("lifepo4");
  const [daysOfAutonomy, setDaysOfAutonomy] = useState(2);

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const allAppliances = [...appliances, ...customAppliances];
  const checkedAppliances = allAppliances.filter((a) => a.checked);
  const liveTotalWh = checkedAppliances.reduce((sum, a) => {
    return sum + (parseFloat(a.watts) || 0) * (parseInt(a.qty, 10) || 1) * (parseFloat(a.hours) || 0);
  }, 0);

  const updateAppliance = useCallback((id, updated, isCustom) => {
    if (isCustom) {
      setCustomAppliances((prev) => prev.map((a) => (a.id === id ? updated : a)));
    } else {
      setAppliances((prev) => prev.map((a) => (a.id === id ? updated : a)));
    }
    setResult(null);
  }, []);

  const deleteCustomAppliance = useCallback((id) => {
    setCustomAppliances((prev) => prev.filter((a) => a.id !== id));
    setResult(null);
  }, []);

  const addCustomAppliance = () => {
    const id = `custom-${Date.now()}`;
    setCustomAppliances((prev) => [
      ...prev,
      { id, name: "", watts: "", hours: "", qty: 1, checked: true, isCustom: true },
    ]);
    setResult(null);
  };

  const handleCalculate = () => {
    setError("");
    setResult(null);

    const checked = allAppliances.filter((a) => a.checked);

    if (checked.length === 0) {
      setError("Please select at least one appliance.");
      return;
    }

    // Validate checked appliances (skip completely blank custom rows)
    for (const a of checked) {
      const w = parseFloat(a.watts);
      const h = parseFloat(a.hours);
      const isBlankCustom = a.isCustom && a.name.trim() === "" && (isNaN(w) || w <= 0) && (isNaN(h) || h <= 0);
      if (isBlankCustom) continue;
      if (isNaN(w) || w <= 0 || isNaN(h) || h <= 0) {
        setError("Please enter valid wattage and hours for all selected appliances.");
        return;
      }
    }

    // Filter valid appliances
    const validChecked = checked.filter((a) => {
      const w = parseFloat(a.watts);
      const h = parseFloat(a.hours);
      return !isNaN(w) && w > 0 && !isNaN(h) && h > 0;
    });

    if (validChecked.length === 0) {
      setError("Please select at least one appliance with valid values.");
      return;
    }

    // Step 1: Total daily Wh (watts × qty × hours)
    const totalWh = validChecked.reduce((sum, a) => sum + parseFloat(a.watts) * (parseInt(a.qty, 10) || 1) * parseFloat(a.hours), 0);

    // Step 2: Solar panel wattage
    const peakSunHours = peakSunOption === "low" ? 3.5 : peakSunOption === "high" ? 5.5 : 4.5;
    const panelWatts = roundUpToNearest((totalWh / peakSunHours) / 0.85, 50);

    // Step 3: Battery bank
    const DoD = batteryType === "lifepo4" ? 0.80 : 0.50;
    const batteryKwh = (totalWh * daysOfAutonomy) / 1000 / DoD;
    const batteryAh = roundUpToNearest((batteryKwh * 1000) / systemVoltage, 10);

    // Step 4: Charge controller
    const requiredControllerAmps = (panelWatts / systemVoltage) * 1.25;
    const recommendedControllerSize = roundUpToNearestControllerSize(requiredControllerAmps);
    const controllerExceeded = recommendedControllerSize === null;

    setResult({
      totalWh,
      panelWatts,
      batteryKwh,
      batteryAh,
      requiredControllerAmps,
      recommendedControllerSize,
      controllerExceeded,
      numberOfCheckedAppliances: validChecked.length,
    });
  };

  const batteryTypeLabel = batteryType === "lifepo4" ? "LiFePO4 / Lithium" : "Lead Acid / AGM";

  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-2xl sm:rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(13,27,42,0.1)] border border-navy/5 overflow-hidden">

      {/* ── LEFT: INPUTS ─────────────────────────────────────────────────── */}
      <div className="flex-1 p-6 sm:p-8 lg:p-10 space-y-8">

        {/* Section header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5 text-amber" />
          </div>
          <div>
            <h3 className="font-heading text-xl text-navy leading-tight">Daily Appliance Load</h3>
            <p className="text-xs text-navy/50 mt-0.5">Check the appliances you plan to run</p>
          </div>
        </div>

        {/* Column headers */}
        <div className="flex items-center gap-3 px-1">
          <div className="w-6 shrink-0" />
          <div className="flex-1 text-[10px] font-bold uppercase tracking-wider text-navy/40">Appliance</div>
          <div className="w-12 text-[10px] font-bold uppercase tracking-wider text-navy/40 text-center">Qty</div>
          <div className="w-4 shrink-0" />
          <div className="w-20 text-[10px] font-bold uppercase tracking-wider text-navy/40 text-right">Watts</div>
          <div className="w-5 shrink-0" />
          <div className="w-16 text-[10px] font-bold uppercase tracking-wider text-navy/40 text-right">Hrs/Day</div>
          <div className="w-5 shrink-0" />
        </div>

        {/* Preset appliances */}
        <div className="space-y-2">
          {appliances.map((a) => (
            <ApplianceRow
              key={a.id}
              appliance={a}
              isCustom={false}
              onChange={(updated) => updateAppliance(a.id, updated, false)}
            />
          ))}
          {customAppliances.map((a) => (
            <ApplianceRow
              key={a.id}
              appliance={a}
              isCustom={true}
              onChange={(updated) => updateAppliance(a.id, updated, true)}
              onDelete={() => deleteCustomAppliance(a.id)}
            />
          ))}
        </div>

        {/* Add custom appliance */}
        <button
          onClick={addCustomAppliance}
          className="flex items-center gap-2 text-sm font-bold text-amber hover:text-navy border border-dashed border-amber/40 hover:border-amber/80 rounded-xl px-4 py-3 w-full justify-center transition-all duration-200 hover:bg-amber/5"
        >
          <Plus className="w-4 h-4" />
          Add Custom Appliance
        </button>

        {/* Live total */}
        <div className="bg-navy/[0.03] border border-navy/8 rounded-xl px-4 py-3 flex items-center justify-between">
          <span className="text-sm text-navy/60 font-medium">Estimated daily usage:</span>
          <span className="text-lg font-bold text-navy">
            {liveTotalWh.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            <span className="text-sm font-medium text-navy/50 ml-1">Wh/day</span>
          </span>
        </div>

        {/* ── Configuration ── */}
        <div className="border-t border-navy/8 pt-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-navy/5 rounded-xl flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5 text-navy/60" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-navy leading-tight">System Configuration</h3>
              <p className="text-xs text-navy/50 mt-0.5">Tell us about your setup</p>
            </div>
          </div>

          {/* System Voltage */}
          <div>
            <label className="block text-[12px] font-bold text-navy/60 uppercase tracking-wider mb-2">System Voltage</label>
            <div className="flex gap-3">
              {[12, 24].map((v) => (
                <OptionButton key={v} active={systemVoltage === v} onClick={() => { setSystemVoltage(v); setResult(null); }}>
                  {v}V
                </OptionButton>
              ))}
            </div>
            <p className="mt-1.5 text-xs text-navy/40 flex items-center gap-1">
              <Info className="w-3 h-3 shrink-0" />
              Most RVs use 12V. Larger builds sometimes use 24V.
            </p>
          </div>

          {/* Peak Sun Hours */}
          <div>
            <label className="block text-[12px] font-bold text-navy/60 uppercase tracking-wider mb-2">Peak Sun Hours</label>
            <div className="flex gap-2">
              {[
                { key: "low",     label: "Low Sun",  sub: "3.5 hrs/day" },
                { key: "average", label: "Average",  sub: "4.5 hrs/day" },
                { key: "high",    label: "High Sun",  sub: "5.5 hrs/day" },
              ].map(({ key, label, sub }) => (
                <button
                  key={key}
                  onClick={() => { setPeakSunOption(key); setResult(null); }}
                  className={`flex-1 py-2.5 px-2 rounded-xl border-2 transition-all duration-200 text-center ${
                    peakSunOption === key
                      ? "bg-navy text-white border-navy shadow-md"
                      : "bg-white border-navy/10 text-navy/60 hover:border-amber/40 hover:text-navy"
                  }`}
                >
                  <div className="text-sm font-bold leading-tight">{label}</div>
                  <div className={`text-[10px] mt-0.5 ${peakSunOption === key ? "text-white/70" : "text-navy/40"}`}>{sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Battery Type */}
          <div>
            <label className="block text-[12px] font-bold text-navy/60 uppercase tracking-wider mb-2">Battery Type</label>
            <div className="flex gap-3">
              {[
                { key: "lifepo4",  label: "LiFePO4 / Lithium", dod: "80% DoD" },
                { key: "leadacid", label: "Lead Acid / AGM",   dod: "50% DoD" },
              ].map(({ key, label, dod }) => (
                <button
                  key={key}
                  onClick={() => { setBatteryType(key); setResult(null); }}
                  className={`flex-1 py-2.5 px-3 rounded-xl border-2 transition-all duration-200 text-center ${
                    batteryType === key
                      ? "bg-navy text-white border-navy shadow-md"
                      : "bg-white border-navy/10 text-navy/60 hover:border-amber/40 hover:text-navy"
                  }`}
                >
                  <div className="text-sm font-bold leading-tight">{label}</div>
                  <div className={`text-[10px] mt-0.5 ${batteryType === key ? "text-white/70" : "text-navy/40"}`}>{dod}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Days of Autonomy */}
          <div>
            <label className="block text-[12px] font-bold text-navy/60 uppercase tracking-wider mb-2">Days of Autonomy</label>
            <div className="relative">
              <input
                type="number"
                min="1"
                step="1"
                value={daysOfAutonomy}
                onChange={(e) => {
                  const v = parseInt(e.target.value, 10);
                  if (!isNaN(v) && v >= 1) { setDaysOfAutonomy(v); setResult(null); }
                }}
                className="w-full bg-navy/[0.03] border border-navy/10 rounded-xl py-3 pl-5 pr-16 text-navy text-lg font-bold focus:ring-2 focus:ring-amber focus:border-amber focus:bg-white transition-all outline-none"
                aria-label="Days of autonomy"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-navy/40 font-bold text-sm">
                {daysOfAutonomy === 1 ? "day" : "days"}
              </span>
            </div>
            <p className="mt-1.5 text-xs text-navy/40 flex items-center gap-1">
              <Info className="w-3 h-3 shrink-0" />
              How many cloudy days should your battery cover without any solar input?
            </p>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 text-red-500 text-sm font-bold bg-red-50 border border-red-100 rounded-xl px-4 py-3">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          className="w-full bg-amber hover:bg-[#e0921f] text-navy font-bold text-lg py-4 rounded-xl shadow-[0_4px_14px_rgba(245,161,34,0.3)] hover:shadow-[0_6px_20px_rgba(245,161,34,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
        >
          Calculate My Solar System
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* ── RIGHT: OUTPUTS ───────────────────────────────────────────────── */}
      <div className="w-full lg:w-[46%] bg-navy p-6 sm:p-8 lg:p-10 flex flex-col justify-start relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/5 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

        <h3 className="font-heading text-xl text-white mb-6 opacity-90 relative z-10">System Recommendation</h3>

        <div className="relative z-10 flex-1 flex flex-col justify-center">
          {result ? (
            <div className="space-y-4">

              {/* Output 1 — Daily Energy */}
              <ResultCard
                icon={<Zap className="w-3.5 h-3.5 text-amber" />}
                label="Daily Energy Use"
                value={`${result.totalWh.toLocaleString(undefined, { maximumFractionDigits: 0 })} Wh/day`}
              />

              {/* Output 2 — Solar Panels */}
              <ResultCard
                icon={<Sun className="w-3.5 h-3.5 text-amber" />}
                label="Recommended Solar Panel Wattage"
                value={`${result.panelWatts.toLocaleString()}W total`}
                sub={`Example: ${Math.ceil(result.panelWatts / 200)} × 200W panels or ${Math.ceil(result.panelWatts / 400)} × 400W panels`}
              />

              {/* Output 3 — Battery Bank */}
              <ResultCard
                icon={<BatteryCharging className="w-3.5 h-3.5 text-amber" />}
                label="Recommended Battery Bank"
                value={`${result.batteryAh.toLocaleString()}Ah / ${result.batteryKwh.toFixed(1)} kWh`}
                sub={`At ${daysOfAutonomy} day${daysOfAutonomy > 1 ? "s" : ""} autonomy with ${batteryTypeLabel} battery`}
              />

              {/* Output 4 — Charge Controller */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-1.5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-amber/15 flex items-center justify-center shrink-0">
                    <Activity className="w-3.5 h-3.5 text-amber" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">Minimum Charge Controller Size</span>
                </div>
                {result.controllerExceeded ? (
                  <div className="bg-amber/10 border border-amber/20 rounded-xl p-3 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                    <p className="text-amber text-sm font-bold leading-snug">
                      Your system requires over 100A. Use two charge controllers in parallel.
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-white font-bold text-2xl leading-tight">{result.recommendedControllerSize}A</p>
                    <p className="text-white/50 text-xs leading-relaxed">
                      Based on {result.panelWatts}W ÷ {systemVoltage}V × 1.25 safety factor = {result.requiredControllerAmps.toFixed(1)}A required
                    </p>
                  </>
                )}
                <p className="text-white/40 text-xs pt-1">
                  For MPPT vs PWM recommendation, use our{" "}
                  <a
                    href="/calculators/solar-charge-controller-calculator/"
                    className="text-amber hover:text-amber/80 underline underline-offset-2 transition-colors"
                  >
                    Charge Controller Calculator
                  </a>
                  .
                </p>
              </div>

              {/* Output 5 — Summary */}
              <div className="bg-amber/10 border border-amber/20 rounded-xl px-4 py-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber shrink-0" />
                <p className="text-white/80 text-xs font-medium leading-relaxed">
                  <span className="text-amber font-bold">{result.numberOfCheckedAppliances}</span> appliances ·{" "}
                  <span className="text-amber font-bold">{result.panelWatts}W</span> solar ·{" "}
                  <span className="text-amber font-bold">{result.batteryAh}Ah</span> battery ·{" "}
                  <span className="text-amber font-bold">
                    {result.controllerExceeded ? "100A+" : `${result.recommendedControllerSize}A`}
                  </span>{" "}
                  controller
                </p>
              </div>

              {/* Disclaimer */}
              <div className="bg-white/5 border border-white/[0.08] rounded-xl px-4 py-3">
                <p className="text-white/35 text-[11px] leading-relaxed">
                  Results are estimates based on your inputs and US average conditions. Actual performance varies by climate, panel placement, battery age, and usage patterns. Always size up when in doubt — oversizing a solar system is far less costly than undersizing it.
                </p>
              </div>

            </div>
          ) : (
            <div className="min-h-[320px] flex flex-col items-center justify-center text-center opacity-40 py-12">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-white opacity-50" />
              </div>
              <p className="text-white text-base max-w-[240px] leading-relaxed">
                Configure your appliances and system settings, then click calculate to size your solar system.
              </p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
