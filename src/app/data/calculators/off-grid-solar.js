import { CheckCircle2, Lightbulb, Wrench } from "lucide-react";

export const calculatorData = {
  slug: "off-grid-solar-calculator",
  seoTitle: "Off-Grid Solar Calculator — Design Your Independent Power System",
  seoDescription: "Free off-grid solar calculator. Size your panels, battery bank, and charge controller to confidently go off the grid.",
  
  hero: {
    title: "Off-Grid Solar Calculator —",
    highlight: "Design Your Independence",
    description: "Determine exactly how many solar panels and batteries you need to live comfortably and safely completely disconnected from the utility grid."
  },

  content: (
    <>
      <h2>How to Size an Off-Grid System</h2>
      <p>
        Building an off-grid solar system requires careful planning. Unlike a grid-tied system where the utility company acts as a giant battery to absorb excess power or provide backup, an off-grid system must be 100% self-sufficient.
      </p>
      <p>
        To get started, you need to know your total daily energy consumption (measured in Watt-hours). Once you have that, this calculator determines the necessary solar array size to generate that power and the battery bank size to store it for cloudy days.
      </p>

      <h2>The Importance of Autonomy Days</h2>
      <p>
        "Autonomy days" refer to how many days your battery bank can supply power without any sunlight. For most full-time off-grid homes, 3 to 5 days of autonomy is recommended. For weekend cabins, 1 to 2 days might suffice if you have a backup generator.
      </p>
    </>
  ),

  proTips: [
    {
      title: "Oversize Your Array",
      desc: "It is often much cheaper to add extra solar panels than to add extra batteries. Oversizing your array ensures your batteries charge quickly even on overcast days.",
      icon: Lightbulb
    }
  ],

  faqs: [
    {
      question: "Can I run an AC on an off-grid system?",
      answer: "Yes, but it requires a significantly larger solar array, a massive battery bank, and a heavy-duty inverter. A mini-split AC is highly recommended due to its efficiency."
    }
  ]
};
