import Link from "next/link";
import Image from "next/image";
import { SketchHighlight } from "@/app/components/ui/SketchHighlight";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";

export function BlogPreviewSection() {
  const articles = [
    {
      title: "How to Choose the Right Solar Panel System for Your Home",
      category: "Solar Buying Guide",
      date: "Jan 16, 2026",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop",
      href: "/blog/how-to-choose-solar-panels",
    },
    {
      title: "The Environmental Impact of Solar Energy",
      category: "Sustainability & Green Living",
      date: "Feb 21, 2026",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop",
      href: "/blog/environmental-impact-solar",
    },
    {
      title: "Understanding Solar Battery Storage: Is It Right for You?",
      category: "Technology & Innovation",
      date: "Apr 22, 2026",
      image: "https://images.pexels.com/photos/27637329/pexels-photo-27637329.jpeg",
      
      href: "/blog/understanding-solar-batteries",
    },
  ];

  return (
    <section className="w-full bg-[var(--bg-page)] py-16 lg:py-24 border-t border-[var(--border-divider)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <RevealOnScroll className="text-center mb-16">
          <h2 className="font-heading text-[var(--color-navy)] max-w-2xl mx-auto leading-tight">
            Stay Informed With Expert Insights, Tips About <SketchHighlight>Solar Energy</SketchHighlight>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
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
                  className="object-cover transition-transform duration-500 rounded-md"
                />
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-amber text-xs font-bold uppercase tracking-wide">
                  {article.category}
                </span>
                <span className="text-gray-400 text-xs">•</span>
                <span className="text-gray-500 text-xs">
                  {article.date}
                </span>
              </div>
              
              <h3 className="font-sub-heading !text-lg md:!text-xl text-black  transition-colors">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
