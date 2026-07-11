import { blogs } from "@/app/data/blogs";
import { BlogSection } from "@/app/components/ui/sections/BlogSection";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for all blogs
export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  
  if (!post) return { title: "Blog Not Found" };

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || `Read about ${post.title} on MySolarAnswer.`,
    keywords: post.seoKeywords || [],
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  // Find 3 related articles based on category (excluding current post)
  const relatedArticles = blogs
    .filter((b) => b.slug !== slug && b.category === post.category)
    .slice(0, 3);

  // If not enough by category, pad with other articles
  if (relatedArticles.length < 3) {
    const additional = blogs
      .filter((b) => b.slug !== slug && !relatedArticles.find(r => r.slug === b.slug))
      .slice(0, 3 - relatedArticles.length);
    relatedArticles.push(...additional);
  }

  return (
    <main className="w-full bg-[var(--bg-page)] pt-8 pb-16 lg:pt-12 lg:pb-24">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb (Hidden on Mobile) */}
        <div className="hidden md:flex items-center justify-center space-x-2 text-sm text-[var(--text-body)] mb-8">
          <Link href="/blogs" className="hover:text-[var(--color-navy)] transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-[var(--color-amber)] font-medium">
            {post.title}
          </span>
        </div>

        {/* Hero Title & Meta */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="h1 mb-6 tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm text-[var(--text-body)]">
            <span className="font-medium text-[var(--color-black)]">Author:</span>
            <span className="text-[var(--color-amber)]">{post.author}</span>
            <span className="text-[var(--border-divider)] hidden sm:inline">|</span>
            <span className="font-medium text-[var(--color-black)]">Posted:</span>
            <span className="text-[var(--color-amber)]">{post.postedDate}</span>
            {post.updatedDate && (
              <>
                <span className="text-[var(--border-divider)] hidden sm:inline">|</span>
                <span className="font-medium text-[var(--color-black)]">Updated:</span>
                <span className="text-[var(--color-amber)]">{post.updatedDate}</span>
              </>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden mb-16 shadow-lg">
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt || post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Blog Content */}
        <article className="max-w-3xl mx-auto blog-content body-large mb-24">
          {post.content}
        </article>

      </div>

      {/* Related Articles Section */}
      <div className="border-t border-[var(--border-divider)] pt-20 lg:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogSection 
            articles={relatedArticles} 
            isRelated={true} 
            limit={3} 
          />
        </div>
      </div>
    </main>
  );
}
