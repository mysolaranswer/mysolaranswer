import { calculatorData } from "@/app/data/calculators/solar-financing";
import { CalculatorPageLayout } from "@/app/components/calculators/CalculatorPageLayout";
import { SolarFinancingCalculator } from "@/app/components/calculators/SolarFinancingCalculator";

export const metadata = {
  title: calculatorData.seoTitle,
  description: calculatorData.seoDescription,
};

export default function SolarFinancingCalculatorPage() {
  return (
    <CalculatorPageLayout 
      data={calculatorData} 
      CalculatorComponent={<SolarFinancingCalculator />} 
    />
  );
}
