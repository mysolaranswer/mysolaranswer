import { BlogSection } from "../components/ui/sections/BlogSection";
import { NewsletterSection } from "../components/ui/sections/NewsletterSection";
import { PageHero } from "../components/ui/hero/PageHero";
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
      <PageHero 
        title="Insight & Innovation"
        titleHighlight="The MySolarAnswer Blog"
        description="Your guide to clean energy solutions, savings, and solar industry trends."
        backgroundImageUrl="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Wind turbines in a green landscape"
      />

      {/* Blogs Grid Section */}
      <div className="py-16 lg:py-24">
        <BlogSection articles={blogs} />
      </div>

      {/* Newsletter Section */}
      <NewsletterSection />
      
    </div>
  );
}
