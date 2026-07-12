import { BatteryCharging, AlertTriangle } from "lucide-react";

export const calculatorData = {
  slug: "solar-battery-calculator",
  seoTitle: "Solar Battery Size Calculator — Find Your Ideal Storage Capacity",
  seoDescription: "Calculate the exact battery bank size needed for your solar system. Compare Lithium vs Lead-Acid and plan for grid outages.",
  
  hero: {
    title: "Solar Battery Calculator —",
    highlight: "Size Your Storage",
    description: "Determine exactly how much battery capacity you need to keep your home running at night or during unexpected grid outages."
  },

  content: (
    <>
      <h2>Why Sizing Your Battery Bank is Crucial</h2>
      <p>
        Your battery bank is the heart of an off-grid or hybrid solar system. If your bank is too small, you'll run out of power at night. If it's too large, your solar panels might not be able to fully charge it during the day, leading to battery degradation (especially in lead-acid chemistries).
      </p>
      
      <h3>Depth of Discharge (DoD)</h3>
      <p>
        You cannot use 100% of the energy stored in a battery. Doing so will permanently damage most battery types.
      </p>
      <ul>
        <li><strong>Lead-Acid (AGM / Flooded):</strong> Should never be discharged below 50% to preserve lifespan.</li>
        <li><strong>Lithium-Iron Phosphate (LiFePO4):</strong> Can be safely discharged up to 80% or 90% without severe degradation.</li>
      </ul>
      <p>
        Because of DoD limits, a 10kWh lead-acid battery only gives you 5kWh of usable power, while a 10kWh lithium battery gives you 8-9kWh.
      </p>
    </>
  ),

  proTips: [
    {
      title: "Consider Cold Temperatures",
      desc: "If your batteries will be stored outside in cold weather, their capacity drops significantly. Lead-acid batteries lose efficiency, and lithium batteries cannot be safely charged below freezing without built-in heaters.",
      icon: AlertTriangle
    }
  ],

  faqs: [
    {
      question: "How long will my battery last?",
      answer: "It depends on your load. A 5kWh usable battery will power a 1000W load for exactly 5 hours. Use our Load Calculator to find your total daily requirement first."
    }
  ]
};
