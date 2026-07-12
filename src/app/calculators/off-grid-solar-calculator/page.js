import { calculatorData } from "@/app/data/calculators/off-grid-solar";
import { CalculatorPageLayout } from "@/app/components/calculators/CalculatorPageLayout";
import { OffGridSolarCalculator } from "@/app/components/calculators/OffGridSolarCalculator";

export const metadata = {
  title: calculatorData.seoTitle,
  description: calculatorData.seoDescription,
};

export default function OffGridSolarCalculatorPage() {
  return (
    <CalculatorPageLayout 
      data={calculatorData} 
      CalculatorComponent={<OffGridSolarCalculator />} 
    />
  );
}
