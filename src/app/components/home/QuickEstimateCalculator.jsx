"use client";

import { useState } from "react";
import Link from "next/link";
import { PrimaryButton } from "./../ui/buttons/PrimaryButton";

export function QuickEstimateCalculator() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const monthlyKwh = parseFloat(inputValue);

    if (isNaN(monthlyKwh) || monthlyKwh <= 0) {
      setError("Please enter a valid monthly kWh usage");
      setResults(null);
      return;
    }

    setError("");

    // Hardcoded US constants
    const peakSunHours = 4.5;
    const panelWattage = 400;
    const systemEfficiency = 0.80;
    const electricityRate = 0.16;
    const daysPerMonth = 30;

    // Formulas
    const dailyKwh = monthlyKwh / daysPerMonth;
    const systemSizeKwRaw = dailyKwh / (peakSunHours * systemEfficiency);
    const systemSizeKw = parseFloat(systemSizeKwRaw.toFixed(1));
    const panels = Math.ceil((systemSizeKw * 1000) / panelWattage);
    const monthlyProduction = systemSizeKw * peakSunHours * daysPerMonth * systemEfficiency;
    const monthlySavings = Math.round(monthlyProduction * electricityRate);

    setResults({
      systemSizeKw,
      panels,
      monthlySavings
    });
  };

  return (
    <div className="w-full bg-[var(--color-navy)] rounded-md shadow-[0_20px_50px_-12px_rgba(13,27,42,0.3)] border border-[var(--border-divider-on-navy)] p-6 md:p-8 flex flex-col gap-6 relative z-10 [animation:heroSlideIn_0.9s_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">
      
      {/* Input Section */}
      <div className="flex flex-col gap-2">
        <label htmlFor="usage" className="font-bold text-white text-base">
          Calculate Estimate Solar Size Immediately
        </label>
        <p className="text-sm text-[var(--text-body-on-navy)] opacity-80">
          Find this number on your electricity bill (in kWh)
        </p>
        
        <div className="relative mt-1">
          <input
            id="usage"
            type="number"
            min="1"
            placeholder="e.g. 900"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-md py-3.5 pl-4 pr-32 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-amber)] focus:border-transparent transition-all"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-white/50 pointer-events-none">
            kWh / month
          </div>
        </div>
        {error && (
          <p className="text-red-400 text-sm font-semibold mt-1">{error}</p>
        )}
      </div>

      {/* Button Section */}
      <PrimaryButton onClick={handleCalculate} showArrow={false} className="w-full text-lg py-4">
        Calculate
      </PrimaryButton>

      {/* Output Section */}
      {results && (
        <div className="mt-4 flex flex-col gap-5 pt-6 border-t border-[var(--border-divider-on-navy)] animate-fade-in-up">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-white/50 uppercase tracking-wider">System Size</span>
              <span className="text-xl font-bold text-white">{results.systemSizeKw} kW</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Solar Panels</span>
              <span className="text-xl font-bold text-white">{results.panels} &times; 400W panels</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Est. Monthly Savings</span>
              <span className="text-xl font-bold text-[var(--color-amber)]">${results.monthlySavings} per month</span>
            </div>

          </div>

          <p className="text-xs text-[var(--text-body-on-navy)] opacity-80 leading-relaxed mt-2">
            These are estimated rough values based on US averages. For a detailed system analysis &mdash; including inverter sizing, battery recommendations, and appliance-by-appliance breakdown &mdash;{" "}
            <Link href="#" className="text-[var(--color-amber)] font-bold hover:underline">
              use our Detailed Solar Calculator
            </Link>.
          </p>
        </div>
      )}

    </div>
  );
}
