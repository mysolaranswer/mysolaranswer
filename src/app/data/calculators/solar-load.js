import { Calculator, Lightbulb } from "lucide-react";

export const calculatorData = {
  slug: "solar-load-calculator",
  seoTitle: "Solar Load Calculator — Audit Your Daily Energy Consumption",
  seoDescription: "Calculate your total daily watt-hours. A crucial first step in designing any off-grid solar or battery backup system.",
  
  hero: {
    title: "Solar Load Calculator —",
    highlight: "Know Your Power Needs",
    description: "Before you can size your panels or batteries, you must know how much power you actually use. Audit your appliances to find your daily energy load."
  },

  content: (
    <>
      <h2>Step 1 of Solar Design: The Load Audit</h2>
      <p>
        The most common mistake beginners make is buying solar panels before knowing how much power they actually need. You wouldn't buy a gas tank without knowing how far you need to drive. The same logic applies to solar.
      </p>
      
      <h3>How to Calculate Your Load</h3>
      <p>
        Energy consumption is measured in <strong>Watt-hours (Wh)</strong>. To calculate this for an appliance, simply multiply its wattage by the number of hours you run it per day.
      </p>
      <ul>
        <li><strong>Example 1:</strong> A 10W LED bulb run for 5 hours = <strong>50 Wh</strong>.</li>
        <li><strong>Example 2:</strong> A 1000W microwave run for 15 minutes (0.25 hours) = <strong>250 Wh</strong>.</li>
      </ul>
      <p>
        Add up the Watt-hours for every appliance you plan to use, and you will have your Total Daily Load. This number dictates the size of your battery bank and solar array.
      </p>
    </>
  ),

  proTips: [
    {
      title: "Beware of Phantom Loads",
      desc: "Many appliances (like TVs, microwaves, and stereo systems) consume power even when they are turned off. In an off-grid system, these 'phantom loads' can slowly drain your batteries overnight. Put these devices on a power strip and switch it off when not in use.",
      icon: Lightbulb
    }
  ],

  faqs: [
    {
      question: "How do I find the wattage of my appliance?",
      answer: "Look for a sticker on the back or bottom of the device. It will usually list the Watts (W). If it only lists Volts (V) and Amps (A), simply multiply them together (Volts x Amps = Watts)."
    }
  ]
};
