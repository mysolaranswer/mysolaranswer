import Link from "next/link";
import Image from "next/image";
import { SketchHighlight } from "@/app/components/ui/SketchHighlight";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";

export function BlogSection({ limit, showHeading = false }) {
  const articles = [
    {
      title: "How to Choose the Right Solar Panel System for Your Home",
      category: "Solar Buying Guide",
      date: "Jan 16, 2025",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop",
      href: "/blog/how-to-choose-solar-panels",
    },
    {
      title: "The Environmental Impact of Solar Energy",
      category: "Sustainability & Green Living",
      date: "Feb 21, 2025",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop",
      href: "/blog/environmental-impact-solar",
    },
    {
      title: "Understanding Solar Battery Storage: Is It Right for You?",
      category: "Technology & Innovation",
      date: "Apr 22, 2025",
      image: "https://images.pexels.com/photos/27637329/pexels-photo-27637329.jpeg",
      href: "/blog/understanding-solar-batteries",
    },
    {
      title: "Government Incentives & Rebates for Solar Energy",
      category: "Solar Policies & Incentives",
      date: "Mar 4, 2025",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
      href: "/blog/government-incentives",
    },
    {
      title: "5 Reasons to Invest in Solar Panels in 2025",
      category: "Solar Industry Trends",
      date: "Jan 16, 2025",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
      href: "/blog/reasons-to-invest-in-solar",
    },
    {
      title: "How Solar Energy Can Save You Thousands",
      category: "Cost Savings & Financial Benefits",
      date: "Feb 11, 2025",
      image: "https://images.unsplash.com/photo-1580519542036-ed47f3088bfe?q=80&w=2071&auto=format&fit=crop",
      href: "/blog/how-solar-saves-thousands",
    },
  ];

  const displayedArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <section className="w-full bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showHeading && (
          <RevealOnScroll className="text-center mb-16">
            <h2 className="h2">
              Stay Informed With Expert Insights, Tips About <SketchHighlight>Solar Energy</SketchHighlight>
            </h2>
          </RevealOnScroll>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {displayedArticles.map((article, idx) => (
            <Link 
              key={idx} 
              href={article.href}
              className="flex flex-col group"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 rounded-md group-hover:scale-105"
                />
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[var(--color-amber)] text-xs font-bold uppercase tracking-wide">
                  {article.category}
                </span>
                <span className="text-[var(--border-divider)] text-xs">•</span>
                <span className="text-[var(--text-body-on-white)]/60 text-xs">
                  {article.date}
                </span>
              </div>
              
              <h3 className="h4 text-[var(--color-black)] transition-colors group-hover:text-[var(--color-amber)]">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
