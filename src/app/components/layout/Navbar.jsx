"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Calculators", href: "/calculators" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="w-full bg-[var(--bg-page)] border-b border-[var(--border-divider)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image src="/Logo.png" alt="MySolarAnswer Logo" width={500} height={500} className="h-20 md:h-24 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-bold transition-colors ${isActive ? 'text-amber' : 'text-black hover:text-amber'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/calculators"
              className="px-6 py-2.5 rounded-full border-2 border-gray-300 text-black hover:bg-amber hover:text-white hover:border-amber transition-all font-semibold text-sm flex items-center gap-2"
            >
              Explore Calculators
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy hover:text-amber focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[var(--border-divider)]">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-3 rounded-md text-base font-semibold ${isActive ? 'text-amber bg-gray-50' : 'text-black hover:bg-gray-50 hover:text-amber'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link
                href="/calculators"
                className="w-full flex justify-center px-6 py-3 rounded-full border border-gray-300 text-black font-semibold hover:bg-amber hover:text-white hover:border-amber transition-all"
                onClick={() => setIsOpen(false)}
              >
                All Calculators
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
