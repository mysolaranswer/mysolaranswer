import { calculatorData } from "@/app/data/calculators/solar-battery";
import { CalculatorPageLayout } from "@/app/components/calculators/CalculatorPageLayout";
import { SolarBatteryCalculator } from "@/app/components/calculators/SolarBatteryCalculator";

export const metadata = {
  title: calculatorData.seoTitle,
  description: calculatorData.seoDescription,
};

export default function SolarBatteryCalculatorPage() {
  return (
    <CalculatorPageLayout 
      data={calculatorData} 
      CalculatorComponent={<SolarBatteryCalculator />} 
    />
  );
}
