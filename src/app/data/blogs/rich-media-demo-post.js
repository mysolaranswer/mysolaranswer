import Image from "next/image";
import Link from "next/link";

export const post = {
  slug: "rich-media-demo-post",
  title: "How to Embed Rich Media in Your Solar Blogs",
  author: "System Admin",
  postedDate: "May 10, 2025",
  updatedDate: "May 11, 2025",
  category: "Technology & Innovation",
  tags: ["media", "tutorial", "blogging"],
  seoTitle: "Rich Media Demo Post - MySolarAnswer",
  seoDescription: "A demonstration of embedding videos, multiple images, and internal/external links in the new blog infrastructure.",
  seoKeywords: ["blog", "demo", "rich media", "tutorial"],
  heroImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop",
  heroImageAlt: "A person holding a tablet showing graphs in front of a solar farm",
  content: (
    <>
      <p>
        Welcome to the rich media demo post! Since we are using standard React JSX for our blog content, 
        you have incredible flexibility. You are not limited to just text. You can easily link to our 
        <Link href="/about" className="text-[var(--color-amber)] font-bold hover:underline mx-1">
          Internal About Page
        </Link> 
        using Next.js routing, or point to an 
        <a href="https://energy.gov/eere/solar" target="_blank" rel="noopener noreferrer" className="text-[var(--color-amber)] font-bold hover:underline mx-1">
          External Resource
        </a>
        like the Department of Energy safely.
      </p>

      <h2>Embedding Images</h2>
      <p>
        You can insert as many images as you like into the body of your post. Just use the standard Next.js <code>&lt;Image&gt;</code> component inside a container to maintain aspect ratios!
      </p>
      
      {/* Example of an inline image */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden my-8 shadow-md">
        <Image 
          src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2070&auto=format&fit=crop" 
          alt="Solar panels on a bright day" 
          fill 
          className="object-cover" 
        />
      </div>

      <h2>Embedding Video Elements</h2>
      <p>
        Need to show an explainer video? You can drop a native HTML5 video player right into the content, or embed a YouTube iframe. Here is an example of an HTML5 video element playing a stock loop:
      </p>

      {/* Example of a video player */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden my-8 shadow-md bg-[var(--color-navy)]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="https://videos.pexels.com/video-files/2822152/2822152-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h2>Summary</h2>
      <p>
        As you can see, because the entire blog system is powered by Javascript instead of a rigid markdown parser, 
        you can literally build <strong>mini-applications</strong> inside a blog post if you wanted to!
      </p>
    </>
  )
};
