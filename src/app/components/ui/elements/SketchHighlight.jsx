import React from "react";

export function SketchHighlight({ children, className = "" }) {
  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <span className="relative z-10">{children}</span>
      {/* 
        Fixed SVG: Positioned strictly at the bottom, 
        with flattened curves so it doesn't cross the text.
      */}
      <svg 
        className="absolute w-[105%] h-[12px] -bottom-[4px] -left-[2.5%] text-[var(--color-amber)] pointer-events-none z-0" 
        viewBox="0 0 200 12" 
        fill="none" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M 2 8 C 50 2 150 4 198 8" 
          stroke="currentColor" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
        />
        <path 
          d="M 15 11 C 60 6 140 7 185 11" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeOpacity="0.5" 
        />
      </svg>
    </span>
  );
}
