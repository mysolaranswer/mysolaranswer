import Link from "next/link";
import Image from "next/image";

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
      image: "https://images.unsplash.com/photo-1548611716-3001ab43dc4b?q=80&w=2070&auto=format&fit=crop",
      href: "/blog/understanding-solar-batteries",
    },
  ];

  return (
    <section className="w-full bg-[var(--bg-page)] py-20 lg:py-32 border-t border-[var(--border-divider)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="h2 text-black max-w-2xl mx-auto">
            Stay Informed With Expert Insights, Tips About Solar Energy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <Link 
              key={idx} 
              href={article.href}
              className="flex flex-col group"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
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
              
              <h3 className="h3 !text-lg md:!text-xl text-black group-hover:text-amber transition-colors">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
