import { Wrench } from "lucide-react";

export const calculatorData = {
  slug: "rv-solar-calculator",
  seoTitle: "RV Solar Calculator — Size Your Camper's Solar Setup",
  seoDescription: "Calculate the perfect solar setup for your RV, campervan, or motorhome. Size your panels and batteries for life on the road.",
  
  hero: {
    title: "RV Solar Calculator —",
    highlight: "Power Your Adventures",
    description: "Whether you're boondocking in a campervan or running AC in a massive Class A motorhome, calculate exactly what you need to keep the lights on."
  },

  content: (
    <>
      <h2>Solar for RVs and Campervans</h2>
      <p>
        Sizing solar for a vehicle is unique because you are severely limited by two things: <strong>Roof Space</strong> and <strong>Weight Limits</strong>. You can't just add more panels if you run out of roof!
      </p>
      
      <h3>12V vs 24V RV Systems</h3>
      <p>
        Most RVs come standard with a 12V electrical system. If you are building a massive setup (over 1000W of solar), you might want to consider designing a 24V battery bank to keep cable sizes small, and then using a step-down converter to run your 12V DC appliances (like water pumps and lights).
      </p>
    </>
  ),

  proTips: [
    {
      title: "Use Flexible Panels Sparingly",
      desc: "Flexible solar panels are great for curved Airstream roofs, but they overheat easily and have a much shorter lifespan than rigid glass panels. Use rigid panels mounted on brackets whenever possible to allow airflow underneath.",
      icon: Wrench
    }
  ],

  faqs: [
    {
      question: "Can I run my RV Air Conditioner on solar?",
      answer: "Yes, but you need a large lithium battery bank (at least 400Ah at 12V), a 3000W+ pure sine wave inverter, and ideally a 'Soft Start' device installed on the AC unit to handle the massive surge current when the compressor turns on."
    }
  ]
};
