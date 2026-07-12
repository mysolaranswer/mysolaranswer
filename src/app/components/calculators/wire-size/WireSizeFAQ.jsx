import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { FAQSection } from "@/app/components/ui/sections/FAQSection";

export function WireSizeFAQ() {
  const faqs = [
    {
      question: "What happens if a solar wire is too thin?",
      answer: "If a wire is too thin for the current passing through it, it creates resistance. This causes a massive voltage drop (wasting your solar energy) and generates extreme heat, which is a major fire risk."
    },
    {
      question: "What AWG should I use for a 12V solar system?",
      answer: "12V systems require thicker wires because they operate at lower voltages and higher amps compared to 24V or 48V systems. A common size for short 12V runs is 10 AWG, but if you are running more than 20 feet or higher than 30 amps, you will likely need 8 AWG, 6 AWG, or thicker. Always use a solar panel wiring calculator to verify."
    },
    {
      question: "How long can solar cables be?",
      answer: "There is no absolute maximum length, but the longer the run, the thicker the wire must be to prevent voltage drop. If you need to run cables over 100 feet, you should wire your panels in series to increase the voltage (e.g., to 48V or 150V+), which allows you to use standard 10 AWG wire over long distances safely."
    },
    {
      question: "Should I use Copper or Aluminum wire for solar?",
      answer: "Copper is highly recommended for solar installations because it has lower resistance and is less prone to oxidation than aluminum. If you must use aluminum (usually only for very long, thick underground service runs), you must size up the wire by 1 to 2 gauges (e.g., use 4 AWG aluminum instead of 6 AWG copper)."
    },
    {
      question: "Solid vs. Stranded wire for solar panels?",
      answer: "Always use stranded wire. Solar panels are exposed to wind, vibration, and temperature changes. Stranded wire is flexible and can handle this without breaking. Solid wire is meant for rigid indoor housing circuits and can snap under outdoor stress."
    }
  ];

  return (
    <RevealOnScroll className="mb-24">
      <FAQSection faqs={faqs} />
    </RevealOnScroll>
  );
}
