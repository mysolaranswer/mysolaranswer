import Image from "next/image";

export function PageHero({ 
  title, 
  titleHighlight,
  description,
  children,
  backgroundImageUrl, 
  imageAlt = "Hero Background" 
}) {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={backgroundImageUrl} 
          alt={imageAlt} 
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[var(--color-navy)]/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="h1 text-[var(--color-white)] mb-4 animate-fade-in-up">
            {title}
            {titleHighlight && (
              <>
                <br />
                <span className="text-[var(--color-amber)]">{titleHighlight}</span>
              </>
            )}
          </h1>
          {description && (
            <p className="body-large text-[var(--color-white)]/90 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              {description}
            </p>
          )}
          {children && (
            <div className="mt-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
