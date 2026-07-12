import { CircleDollarSign, LineChart } from "lucide-react";

export const calculatorData = {
  slug: "solar-financing-calculator",
  seoTitle: "Solar Financing & ROI Calculator — Compare Cash, Loans & Leases",
  seoDescription: "Calculate the payback period and total ROI of your solar system. Compare cash purchases against solar loans and PPA leases.",
  
  hero: {
    title: "Solar Financing Calculator —",
    highlight: "Calculate Your ROI",
    description: "Determine exactly how long it will take for your solar panels to pay for themselves, and compare the long-term savings of buying in cash versus taking out a solar loan."
  },

  content: (
    <>
      <h2>Understanding Solar Payback Period</h2>
      <p>
        The "payback period" is the amount of time it takes for the savings on your electricity bill to equal the total cost of your solar panel system. In the United States, the average payback period is between <strong>6 to 9 years</strong>. Since modern solar panels are warrantied for 25 years, that means you can enjoy 15+ years of completely free electricity!
      </p>
      
      <h3>The Impact of the Federal Tax Credit</h3>
      <p>
        The <strong>Federal Solar Investment Tax Credit (ITC)</strong> allows you to deduct 30% of the total cost of installing a solar energy system from your federal taxes. This massive incentive applies to the panels, the inverters, battery storage, and the labor required to install them. Make sure you factor this 30% reduction into your upfront cost calculations.
      </p>

      <h2>Cash vs. Loan vs. Lease (PPA)</h2>
      <p>
        How you pay for your system drastically changes your long-term return on investment (ROI):
      </p>
      <ul>
        <li><strong>Cash Purchase:</strong> Offers the absolute highest ROI. You own the system immediately, reap 100% of the tax credits, and eliminate your electric bill on day one.</li>
        <li><strong>Solar Loan:</strong> You own the system and get the tax credits, but you will pay interest over the life of the loan. This reduces your overall ROI, but allows you to go solar for $0 down. If your loan payment is less than your old electric bill, you save money immediately.</li>
        <li><strong>Solar Lease / PPA:</strong> You do NOT own the system, and you do NOT get the tax credit. Instead, a solar company puts panels on your roof and sells the electricity they generate back to you at a cheaper rate than the utility company. This offers the lowest long-term ROI, but is entirely hands-off.</li>
      </ul>
    </>
  ),

  proTips: [
    {
      title: "Watch Out for Dealer Fees",
      desc: "Many low-interest solar loans (e.g., 1.99% or 2.99%) include hidden 'dealer fees' that can add 20% to 30% to the total principal cost of the system. Sometimes a standard home equity loan (HELOC) with a higher interest rate but zero dealer fees is mathematically cheaper in the long run.",
      icon: CircleDollarSign
    }
  ],

  faqs: [
    {
      question: "Do solar panels increase home value?",
      answer: "Yes! Multiple studies by Zillow and the Department of Energy have shown that homes with owned solar panel systems sell faster and for an average of 4.1% more than comparable homes without solar. Note: This only applies to owned systems, not leased ones."
    }
  ]
};
