"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/white%20background.png" 
                alt="MySolarAnswer Logo" 
                width={180} 
                height={60}
                className="w-auto h-12 md:h-14 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-600 hover:text-[var(--color-navy)] font-medium transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-600 hover:text-[var(--color-navy)] font-medium transition-colors flex items-center gap-1">
                Calculators
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-2 flex flex-col gap-1">
                  <Link href="/calculators/how-many-solar-panels-do-i-need" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-navy)] rounded-lg transition-colors">How Many Panels?</Link>
                  <Link href="/calculators/solar-roi-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-navy)] rounded-lg transition-colors">Solar ROI Calculator</Link>
                  <Link href="/calculators/solar-battery-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-navy)] rounded-lg transition-colors">Battery Size Calculator</Link>
                  <Link href="/calculators/off-grid-solar-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-navy)] rounded-lg transition-colors">Off-Grid Calculator</Link>
                  <Link href="/calculators/solar-savings-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-navy)] rounded-lg transition-colors">Savings Calculator</Link>
                  <Link href="/calculators/solar-financing-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-navy)] rounded-lg transition-colors">Financing Calculator</Link>
                </div>
              </div>
            </div>
            <Link href="/blog" className="text-gray-600 hover:text-[var(--color-navy)] font-medium transition-colors">
              Blog
            </Link>
            <Link href="/calculators/how-many-solar-panels-do-i-need" className="bg-[var(--color-amber)] hover:bg-[#b88a14] text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-sm hover:shadow-md">
              Start Calculating
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[var(--color-navy)] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-[var(--color-navy)] font-medium block" onClick={() => setIsOpen(false)}>Home</Link>
            <div className="font-medium text-gray-400 uppercase text-xs tracking-wider pt-2 border-t border-gray-50">Calculators</div>
            <Link href="/calculators/how-many-solar-panels-do-i-need" className="text-gray-700 hover:text-[var(--color-navy)] font-medium block pl-2" onClick={() => setIsOpen(false)}>How Many Panels?</Link>
            <Link href="/calculators/solar-roi-calculator" className="text-gray-700 hover:text-[var(--color-navy)] font-medium block pl-2" onClick={() => setIsOpen(false)}>Solar ROI Calculator</Link>
            <Link href="/calculators/solar-battery-calculator" className="text-gray-700 hover:text-[var(--color-navy)] font-medium block pl-2" onClick={() => setIsOpen(false)}>Battery Size Calculator</Link>
            <Link href="/calculators/off-grid-solar-calculator" className="text-gray-700 hover:text-[var(--color-navy)] font-medium block pl-2" onClick={() => setIsOpen(false)}>Off-Grid Calculator</Link>
            <Link href="/blog" className="text-gray-700 hover:text-[var(--color-navy)] font-medium block pt-2 border-t border-gray-50" onClick={() => setIsOpen(false)}>Blog</Link>
            <div className="pt-4">
              <Link href="/calculators/how-many-solar-panels-do-i-need" className="w-full text-center block bg-[var(--color-amber)] text-white px-5 py-3 rounded-lg font-semibold" onClick={() => setIsOpen(false)}>
                Start Calculating
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
