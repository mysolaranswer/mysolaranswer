import { BlogSection } from "../components/ui/BlogSection";
import { NewsletterSection } from "../components/ui/NewsletterSection";
import { blogs } from "../data/blogs";
import Image from "next/image";

export const metadata = {
  title: "Blog & Insights",
  description: "Your guide to clean energy solutions, savings, and solar industry trends.",
};

export default function BlogsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* Blog Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop" 
            alt="Wind turbines in a green landscape" 
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[var(--color-navy)]/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="h1 text-[var(--color-white)] mb-4 animate-fade-in-up">
              Insight & Innovation <br />
              The <span className="text-[var(--color-amber)]">MySolarAnswer Blog</span>
            </h1>
            <p className="body-large text-[var(--color-white)]/90 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              Your guide to clean energy solutions, savings, and solar industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Blogs Grid Section */}
      <div className="py-16 lg:py-24">
        <BlogSection articles={blogs} />
      </div>

      {/* Newsletter Section */}
      <NewsletterSection />
      
    </div>
  );
}
