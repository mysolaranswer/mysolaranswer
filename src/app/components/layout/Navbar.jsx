"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { SecondaryButton } from "../ui/buttons/SecondaryButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Calculators", href: "/calculators" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <header className="w-full bg-[var(--bg-page)] border-b border-[var(--border-divider)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50 bg-[var(--bg-page)]">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Image 
                src="/Logo.png" 
                alt="MySolarAnswer Logo" 
                width={500} 
                height={500} 
                className="h-20 md:h-24 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative py-2 text-[15px] font-bold transition-colors duration-300 ${
                    isActive ? 'text-[var(--color-navy)]' : 'text-[var(--color-navy)]/70 hover:text-[var(--color-navy)]'
                  }`}
                >
                  {link.name}
                  
                  {/* Clean, Architectural Underline */}
                  <span 
                    className={`absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--color-amber)] origin-left transition-transform duration-300 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <SecondaryButton href="/calculators">
              Explore
            </SecondaryButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-navy)] p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-7 w-7" strokeWidth={2} /> : <Menu className="h-7 w-7" strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop Overlay */}
      <div 
        className={`md:hidden fixed inset-0 top-20 bg-black/20 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation Panel */}
      <div 
        className={`md:hidden absolute left-0 w-full bg-[var(--color-white)] shadow-2xl transition-all duration-300 ease-in-out origin-top z-40 ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
        style={{ top: '100%' }}
      >
        <div className="flex flex-col">
          {/* Mobile Links List */}
          <div className="flex flex-col py-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-6 py-4 border-b border-[var(--border-divider)]/50 last:border-none transition-colors ${
                    isActive ? 'text-[var(--color-amber)] bg-black/[0.02]' : 'text-[var(--color-navy)] active:bg-black/[0.02]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg font-bold">{link.name}</span>
                  {/* Subtle active indicator dot instead of a heavy border */}
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[var(--color-amber)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile CTA Footer */}
          <div className="p-6 bg-black/[0.02] border-t border-[var(--border-divider)] flex">
            <SecondaryButton 
              href="/calculators"
              className="w-full rounded-xl py-3.5 text-lg shadow-lg shadow-[var(--color-navy)]/10"
              onClick={() => setIsOpen(false)}
            >
              Explore Calculators
            </SecondaryButton>
          </div>
        </div>
      </div>
    </header>
  );
}