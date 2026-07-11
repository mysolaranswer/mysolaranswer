import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--bg-footer)] text-white pt-16 pb-8 border-t border-[var(--border-divider-on-navy)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <div className="flex-shrink-0 flex items-center gap-2 mb-6">
              <Link href="/" className="flex items-center">
                <Image src="/Logo.png" alt="MySolarAnswer Logo" width={500} height={500} className="h-20 lg:h-28 w-auto object-contain" />
              </Link>
            </div>
            <p className="text-base text-[var(--text-body-on-navy)] mb-6 max-w-xs leading-relaxed">
              What began as a simple idea grew into a mission to harness nature's most abundant resources, wind and sunlight, to power a brighter tomorrow.
            </p>
           
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-base font-bold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-base text-[var(--text-body-on-navy)] hover:text-[var(--color-amber)] transition-colors">Home</Link></li>
              <li><Link href="/calculators" className="text-base text-[var(--text-body-on-navy)] hover:text-[var(--color-amber)] transition-colors">Calculators</Link></li>
              <li><Link href="/about" className="text-base text-[var(--text-body-on-navy)] hover:text-[var(--color-amber)] transition-colors">About</Link></li>
              <li><Link href="/blogs" className="text-base text-[var(--text-body-on-navy)] hover:text-[var(--color-amber)] transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-base font-bold mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[var(--text-body-on-navy)] text-base break-all">
                <a href="mailto:mysolaranswer@gmail.com" className="flex items-center gap-3 hover:text-[var(--color-amber)] transition-colors">
                  <Mail className="w-6 h-6 text-[var(--color-amber)] flex-shrink-0" />
                  mysolaranswer@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="lg:col-span-4">
            <h4 className="text-white text-base font-bold mb-6 tracking-wide">Subscribe for Updates</h4>
            <p className="text-base text-[var(--text-body-on-navy)] mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest solar energy trends, exclusive offers, and expert insights.
            </p>
            <form className="relative flex max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="w-full bg-[var(--color-white)] text-[var(--color-black)] px-5 py-3.5 rounded-md outline-none focus:ring-2 focus:ring-[var(--color-amber)] pr-32"
                required
              />
              <button 
                type="submit" 
                className="absolute right-1 top-1 bottom-1 px-8 rounded-md bg-[var(--color-amber)] text-[var(--color-black)] text-base font-bold hover:opacity-90 transition-opacity"
              >
                Send
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-[var(--border-divider-on-navy)] flex flex-col-reverse lg:flex-row items-center justify-between gap-4">
          <p className="text-base text-[var(--text-body-on-navy)] text-center lg:text-left">
            &copy; {currentYear} MySolarAnswer — All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-base text-[var(--text-body-on-navy)] mr-2">Follow Us</span>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md border border-[var(--border-divider-on-navy)] flex items-center justify-center text-[var(--text-body-on-navy)] hover:text-[var(--color-white)] hover:border-[var(--color-amber)] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7.5v4H10V22h4v-8.5z"/></svg>
            </a>
            <a href="https://x.com/mysolaranswer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md border border-[var(--border-divider-on-navy)] flex items-center justify-center text-[var(--text-body-on-navy)] hover:text-[var(--color-white)] hover:border-[var(--color-amber)] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
            </a>
            <a href="https://www.instagram.com/mysolaranswer/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md border border-[var(--border-divider-on-navy)] flex items-center justify-center text-[var(--text-body-on-navy)] hover:text-[var(--color-white)] hover:border-[var(--color-amber)] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/my-solar-answer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md border border-[var(--border-divider-on-navy)] flex items-center justify-center text-[var(--text-body-on-navy)] hover:text-[var(--color-white)] hover:border-[var(--color-amber)] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
