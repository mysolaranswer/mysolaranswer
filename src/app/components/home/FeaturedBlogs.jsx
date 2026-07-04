import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

const blogs = [
  {
    title: "Is Solar Worth It in 2025? ROI, Payback & Savings Explained",
    description: "We break down the real ROI, average payback periods, and what factors affect your solar savings this year.",
    category: "Guides",
    href: "/blog/is-solar-worth-it",
    date: "July 2026",
  },
  {
    title: "How Much Do Solar Panels Cost?",
    description: "A complete guide to solar panel installation costs, including equipment, labor, and how to maximize tax incentives.",
    category: "Cost",
    href: "/blog/how-much-do-solar-panels-cost",
    date: "July 2026",
  },
  {
    title: "Solar Battery Backup Guide",
    description: "Everything you need to know about sizing your battery bank, comparing types, and calculating backup runtime.",
    category: "Battery",
    href: "/blog/solar-battery-backup-guide",
    date: "July 2026",
  },
];

export function FeaturedBlogs() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Solar Insights</h2>
            <p className="text-lg text-gray-500">
              Read our expertly researched guides to make informed decisions about your solar journey.
            </p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--color-navy)] font-semibold hover:text-[var(--color-amber)] transition-colors">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <Link 
              key={idx} 
              href={blog.href}
              className="group flex flex-col border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <BookOpen className="w-12 h-12 text-gray-400 group-hover:text-[var(--color-navy)] transition-colors" />
              </div>
              <div className="p-6 flex flex-col flex-grow bg-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-sm text-gray-400">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-navy)] transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-500 mb-6 flex-grow line-clamp-3">
                  {blog.description}
                </p>
                <div className="text-[var(--color-amber)] font-semibold flex items-center gap-2 mt-auto">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
