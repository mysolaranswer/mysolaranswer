"use client";

import Image from "next/image";
import { 
  Battery, 
  TrendingUp, 
  Home, 
  Sun, 
  CircleDollarSign, 
  Plus
} from "lucide-react";
import { EmailCapture } from "@/app/components/home/EmailCapture";

export default function ComingSoonPage() {
  return (
    <div className="min-h-dvh w-full bg-white flex flex-col items-center justify-center overflow-hidden px-4 py-8">
      
      {/* Centralized Container for perfect symmetry */}
      <div className="flex flex-col items-center w-full max-w-5xl gap-10 md:gap-14">
        
        {/* Top Header / Logo */}
        <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <Image 
            src="/white%20background.png" 
            alt="MySolarAnswer Logo" 
            width={400} 
            height={160}
            className="w-auto h-24 md:h-32 object-contain"
            priority
          />
        </div>
          
        {/* Center Main Content */}
        <main className="flex flex-col items-center text-center z-10 w-full">
          
          {/* Massive Heading */}
          <h1 className="text-[3rem] sm:text-[5rem] leading-[1] font-black tracking-tighter text-navy mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
              COMING <br className="md:hidden" />
              <span className="text-amber">SOON<span className="text-navy">.</span></span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-500 font-medium tracking-wide mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
              The math behind solar. Simplified.
          </p>

          {/* Email Capture */}
          <div className="w-full max-w-md animate-fade-in-up mb-10 md:mb-12" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 text-center">
              Get notified when we launch
            </p>
            <EmailCapture />
          </div>

          {/* Tools Section */}
          <div className="w-full animate-fade-in-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5 md:mb-6">
              Tools We&apos;re Building
            </p>
            <div className="flex flex-wrap gap-2.5 md:gap-3 justify-center max-w-2xl mx-auto">
              {[
                { name: "Battery Calculator", icon: Battery },
                { name: "ROI Calculator", icon: TrendingUp },
                { name: "Off-Grid Calculator", icon: Home },
                { name: "Panel Calculator", icon: Sun },
                { name: "Savings Calculator", icon: CircleDollarSign },
                { name: "More Coming…", icon: Plus }
              ].map((tool) => (
                <span key={tool.name} className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-gray-200 text-xs md:text-sm font-medium text-gray-600 bg-gray-50/50 transition-opacity hover:opacity-70 cursor-default">
                  <tool.icon className="w-4 h-4 md:w-4 md:h-4 text-amber" />
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </main>

        {/* Bottom Footer Section */}
        <div className="flex flex-col items-center gap-6 z-20 animate-fade-in-up w-full" style={{ animationDelay: "0.6s", opacity: 0 }}>
          
          {/* Social Icons Row */}
          <div className="flex items-center justify-center gap-7 md:gap-10">
              
              {/* X (Twitter) */}
              <a href="https://x.com/mysolaranswer" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-50" aria-label="X (Twitter)">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-navy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 3.824H5.068z"/>
                  </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/company/mysolaranswer" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-50" aria-label="LinkedIn">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-navy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/mysolaranswer" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-50" aria-label="Instagram">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-navy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
              </a>

              {/* Facebook */}
              <a href="https://facebook.com/mysolaranswer" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-50" aria-label="Facebook">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-navy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
              </a>

              {/* Reddit */}
              <a href="https://reddit.com/r/mysolaranswer" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-50" aria-label="Reddit">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-navy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.974 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.796-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-1.797 1.799-4.856 1.799-6.666 0-.164-.164-.164-.429 0-.592.165-.164.431-.164.596 0 1.486 1.486 4.004 1.483 5.474 0 .165-.165.431-.165.596 0 .164.164.164.429 0 .592zm-1.077-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575c0 .868-.709 1.574-1.581 1.574z"/>
                  </svg>
              </a>
          </div>

          {/* Email Footer */}
          <a href="mailto:mysolaranswer@gmail.com" className="text-gray-400 hover:text-amber transition-opacity hover:opacity-80 font-medium tracking-wide text-xs md:text-sm mt-2">
              mysolaranswer@gmail.com
          </a>
        </div>

      </div>
    </div>
  );
}