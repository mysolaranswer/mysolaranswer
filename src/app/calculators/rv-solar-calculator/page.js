import { calculatorData } from "@/app/data/calculators/rv-solar";
import { CalculatorPageLayout } from "@/app/components/calculators/CalculatorPageLayout";
import { RvSolarCalculator } from "@/app/components/calculators/RvSolarCalculator";

export const metadata = {
  title: calculatorData.seoTitle,
  description: calculatorData.seoDescription,
};

export default function RvSolarCalculatorPage() {
  return (
    <CalculatorPageLayout 
      data={calculatorData} 
      CalculatorComponent={<RvSolarCalculator />} 
    />
  );
}
