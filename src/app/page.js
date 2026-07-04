import { Hero } from "./components/home/Hero";
import { CalculatorGrid } from "./components/home/CalculatorGrid";
import { WhyUse } from "./components/home/WhyUse";
import { HowItWorks } from "./components/home/HowItWorks";
import { FeaturedBlogs } from "./components/home/FeaturedBlogs";
import { FAQ } from "./components/home/FAQ";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <CalculatorGrid />
      <WhyUse />
      <HowItWorks />
      <FeaturedBlogs />
      <FAQ />
    </div>
  );
}
