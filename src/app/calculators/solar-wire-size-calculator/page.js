import { calculatorData } from "@/app/data/calculators/solar-wire-size";
import { CalculatorPageLayout } from "@/app/components/calculators/CalculatorPageLayout";
import { SolarWireSizeCalculator } from "@/app/components/calculators/SolarWireSizeCalculator";

// Dynamic SEO Metadata from Data File
export const metadata = {
  title: calculatorData.seoTitle,
  description: calculatorData.seoDescription,
};

export default function SolarWireSizeCalculatorPage() {
  return (
    <CalculatorPageLayout 
      data={calculatorData} 
      CalculatorComponent={<SolarWireSizeCalculator />} 
    />
  );
}