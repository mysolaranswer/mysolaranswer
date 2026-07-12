import { Activity, AlertTriangle } from "lucide-react";

export const calculatorData = {
  slug: "solar-inverter-calculator",
  seoTitle: "Solar Inverter Size Calculator — Match Your Continuous and Surge Loads",
  seoDescription: "Calculate the right inverter size for your off-grid or grid-tied solar system. Account for continuous power and inductive surge loads.",
  
  hero: {
    title: "Solar Inverter Calculator —",
    highlight: "Handle the Surge",
    description: "Your inverter is the bottleneck of your system. Ensure it is large enough to handle the starting surge of all your heavy appliances simultaneously."
  },

  content: (
    <>
      <h2>Continuous vs. Surge Power</h2>
      <p>
        An inverter takes the DC power from your batteries and converts it into AC power for your household appliances. When sizing an inverter, you must account for two different types of power:
      </p>
      <ul>
        <li><strong>Continuous Power:</strong> The amount of power an appliance uses while running normally.</li>
        <li><strong>Surge Power (Starting Watts):</strong> A massive, temporary spike in power required to start motors or compressors (like refrigerators, well pumps, and air conditioners). This surge can be 2x to 5x higher than the continuous running wattage!</li>
      </ul>
      <p>
        If your inverter cannot handle the starting surge of a refrigerator compressor turning on, the inverter will overload and shut down the entire system, even if it could easily handle the continuous running load.
      </p>

      <h2>Pure Sine vs. Modified Sine Wave</h2>
      <p>
        Always buy a <strong>Pure Sine Wave</strong> inverter. They produce clean power identical to what comes from the city grid. "Modified Sine Wave" inverters are cheaper, but they produce a blocky, 'dirty' electrical wave that will cause motors to run hot, audio equipment to buzz, and sensitive electronics (like CPAP machines or microwaves) to eventually fail.
      </p>
    </>
  ),

  proTips: [
    {
      title: "Factor in Idle Consumption",
      desc: "Large inverters (e.g., 5000W+) have high 'idle consumption'—meaning they burn a lot of battery power just by being turned on, even if you aren't using any appliances. Don't buy a massive inverter if you only plan to run a few lights and a laptop.",
      icon: AlertTriangle
    }
  ],

  faqs: [
    {
      question: "Can I run a 2000W inverter on a 12V battery?",
      answer: "Yes, but it is the absolute maximum recommended for 12V. A 2000W inverter at 12V pulls over 150 Amps from the battery. This requires massive, expensive 1/0 AWG cables to prevent fire. For anything over 2000W, you should upgrade to a 24V or 48V battery bank."
    }
  ]
};
