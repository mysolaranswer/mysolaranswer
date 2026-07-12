import { calculatorData } from "@/app/data/calculators/solar-load";
import { CalculatorPageLayout } from "@/app/components/calculators/CalculatorPageLayout";
import { SolarLoadCalculator } from "@/app/components/calculators/SolarLoadCalculator";

export const metadata = {
  title: calculatorData.seoTitle,
  description: calculatorData.seoDescription,
};

export default function SolarLoadCalculatorPage() {
  return (
    <CalculatorPageLayout 
      data={calculatorData} 
      CalculatorComponent={<SolarLoadCalculator />} 
    />
  );
}
