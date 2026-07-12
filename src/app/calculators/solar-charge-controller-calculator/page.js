import { calculatorData } from "@/app/data/calculators/solar-charge-controller";
import { CalculatorPageLayout } from "@/app/components/calculators/CalculatorPageLayout";
import { SolarChargeControllerCalculator } from "@/app/components/calculators/SolarChargeControllerCalculator";

export const metadata = {
  title: calculatorData.seoTitle,
  description: calculatorData.seoDescription,
};

export default function SolarChargeControllerCalculatorPage() {
  return (
    <CalculatorPageLayout 
      data={calculatorData} 
      CalculatorComponent={<SolarChargeControllerCalculator />} 
    />
  );
}
