import { calculatorData } from "@/app/data/calculators/solar-inverter";
import { CalculatorPageLayout } from "@/app/components/calculators/CalculatorPageLayout";
import { SolarInverterCalculator } from "@/app/components/calculators/SolarInverterCalculator";

export const metadata = {
  title: calculatorData.seoTitle,
  description: calculatorData.seoDescription,
};

export default function SolarInverterCalculatorPage() {
  return (
    <CalculatorPageLayout 
      data={calculatorData} 
      CalculatorComponent={<SolarInverterCalculator />} 
    />
  );
}
