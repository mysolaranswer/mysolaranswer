import { SketchHighlight } from "@/app/components/ui/elements/SketchHighlight";
import { SecondaryButton } from "@/app/components/ui/buttons/SecondaryButton";

export function NewsletterSection() {
  return (
    <section className="w-full bg-[var(--color-white)] py-20 lg:py-32 border-t border-[var(--border-divider)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="h1 text-[var(--color-black)] mb-4 leading-tight">
          Stay Informed . <br className="sm:hidden"/> Stay Empowered
        </h2>
        
        <p className="body-large text-[var(--text-body-on-white)]/70 mb-10 max-w-2xl mx-auto">
          Get the latest solar insights delivered straight to your inbox
        </p>
        
        <form className="max-w-md mx-auto flex flex-col sm:flex-row items-stretch gap-3">
          <input 
            type="email" 
            placeholder="jane@framer.com" 
            className="flex-1 bg-[var(--color-white)] text-[var(--color-black)] px-6 py-3 rounded-md border border-[var(--border-divider)] outline-none focus:border-[var(--color-amber)] focus:ring-1 focus:ring-[var(--color-amber)] transition-all"
            required
          />
          <SecondaryButton 
            type="submit"
          >
            Submit
          </SecondaryButton>
        </form>
        
      </div>
    </section>
  );
}
