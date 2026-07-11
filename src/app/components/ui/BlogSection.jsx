import Link from "next/link";
import Image from "next/image";
import { SketchHighlight } from "@/app/components/ui/SketchHighlight";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";

export function BlogSection({ articles = [], limit, showHeading = false, isRelated = false }) {
  const displayedArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <section className="w-full bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showHeading && !isRelated && (
          <RevealOnScroll className="text-center mb-16">
            <h2 className="h2">
              Stay Informed With Expert Insights, Tips About <SketchHighlight>Solar Energy</SketchHighlight>
            </h2>
          </RevealOnScroll>
        )}

        {isRelated && (
          <RevealOnScroll className="text-center mb-16">
            <h2 className="h2 mt-2 text-[var(--color-black)]">Related Articles</h2>
          </RevealOnScroll>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {displayedArticles.map((article, idx) => (
            <Link 
              key={idx} 
              href={article.href || `/blogs/${article.slug}`}
              className="flex flex-col group"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
                <Image 
                  src={article.heroImage || article.image} 
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
                  {article.postedDate || article.date}
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
