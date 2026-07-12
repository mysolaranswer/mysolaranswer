import { CalculatorHero } from "@/app/components/calculators/sections/CalculatorHero";
import { RelatedCalculators } from "@/app/components/calculators/sections/RelatedCalculators";
import { FAQSection } from "@/app/components/ui/sections/FAQSection";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { ProTips } from "@/app/components/calculators/sections/ProTips";

export function CalculatorPageLayout({ data, CalculatorComponent }) {
  if (!data) return null;

  return (
    <main className="bg-[var(--bg-page)] min-h-screen pt-24 lg:pt-32 pb-20">
      
      {/* 1. Universal Hero */}
      <CalculatorHero 
        title={data.hero?.title || ""}
        highlight={data.hero?.highlight || ""}
        description={data.hero?.description || ""}
      />

      {/* 2. Interactive Calculator Tool (Passed as Prop) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 mb-20">
        <div className="bg-white rounded-2xl shadow-xl shadow-[var(--color-navy)]/5 border border-[var(--border-divider)] overflow-hidden">
          {CalculatorComponent}
        </div>
      </div>

      {/* 3. Main SEO Content Body (JSX from Data) */}
      {data.content && (
        <RevealOnScroll className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <article className="max-w-3xl mx-auto blog-content body-large">
            {data.content}
          </article>
        </RevealOnScroll>
      )}

      {/* 4. Pro Tips */}
      {data.proTips && data.proTips.length > 0 && (
        <div className="px-4 sm:px-6 lg:px-8">
          <ProTips tips={data.proTips} />
        </div>
      )}

      {/* 5. FAQs */}
      {data.faqs && data.faqs.length > 0 && (
        <RevealOnScroll className="mb-24">
          <FAQSection faqs={data.faqs} />
        </RevealOnScroll>
      )}

      {/* 6. Related Tools */}
      <RelatedCalculators currentSlug={data.slug} />

    </main>
  );
}
