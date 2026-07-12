import { Zap, AlertTriangle } from "lucide-react";

export const calculatorData = {
  slug: "solar-charge-controller-calculator",
  seoTitle: "Solar Charge Controller Calculator — Size Your MPPT or PWM",
  seoDescription: "Calculate the correct size for your solar charge controller. Determine if you need an MPPT or PWM based on your solar panel array and battery voltage.",
  
  hero: {
    title: "Solar Charge Controller Calculator —",
    highlight: "Match Your Array",
    description: "Input your solar panel specs and battery bank voltage to find the perfect MPPT or PWM charge controller size to safely manage your system's power."
  },

  content: (
    <>
      <h2>What Does a Charge Controller Do?</h2>
      <p>
        A charge controller sits between your solar panels and your battery bank. Its primary job is to prevent your batteries from overcharging by regulating the voltage and current coming from the solar panels. Without one, the high voltage from your panels would quickly destroy your batteries.
      </p>
      
      <h3>MPPT vs. PWM: Which is Better?</h3>
      <p>
        There are two main types of charge controllers:
      </p>
      <ul>
        <li><strong>MPPT (Maximum Power Point Tracking):</strong> The gold standard. MPPT controllers are highly efficient (up to 99%). They can take high voltage from a series string of solar panels and step it down to the exact voltage your battery needs, converting the excess voltage into extra charging current (amps).</li>
        <li><strong>PWM (Pulse Width Modulation):</strong> Older, cheaper technology. PWM controllers simply "clip" the excess voltage from the panels. If you connect an 18V panel to a 12V battery, a PWM controller simply throws away the extra 6V, resulting in significant power loss.</li>
      </ul>
      <p>
        Generally, if your system is over 200W, you should always use an MPPT controller.
      </p>
    </>
  ),

  proTips: [
    {
      title: "Check the Max Input Voltage (Voc)",
      desc: "Every charge controller has a maximum input voltage limit. If you wire too many panels in series and exceed this limit (especially in cold weather when panel voltage spikes), you will permanently destroy the controller. Always use our calculator to check cold-weather Voc.",
      icon: AlertTriangle
    }
  ],

  faqs: [
    {
      question: "Can I use multiple charge controllers on one battery bank?",
      answer: "Yes! If you have a massive solar array, you can split it into multiple strings and run each string to its own charge controller. All the charge controllers can then connect to the same battery bank. They will naturally work together to charge the batteries."
    }
  ]
};
