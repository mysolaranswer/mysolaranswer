import React from 'react';
import Link from 'next/link';
import { Battery, Calculator, Sun, Zap } from 'lucide-react';

const tools = [
  {
    icon: Sun,
    title: "Solar ROI Calculator",
    description: "Find out exactly how long it takes for a solar system to pay for itself in your area.",
    href: "/calculators/solar-roi"
  },
  {
    icon: Battery,
    title: "Battery Storage Calculator",
    description: "Determine how many batteries you need to keep your home powered during an outage.",
    href: "/calculators/battery-storage"
  },
  {
    icon: Zap,
    title: "Off-Grid Calculator",
    description: "Sizing an off-grid system? Calculate your exact panel and battery requirements.",
    href: "/calculators/off-grid"
  },
  {
    icon: Calculator,
    title: "System Size Estimator",
    description: "Get a quick estimate of how many solar panels you need based on your monthly bill.",
    href: "/calculators/system-size"
  }
];

export default function WhatWeOffer() {
  return (
    <section className="w-full dark-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="mb-4 text-[var(--color-amber)] font-bold tracking-wider text-sm uppercase">
              // WHAT WE OFFER
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white">
              Comprehensive Solar Tools
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-base md:text-lg text-[var(--text-body-on-navy)] opacity-80">
              We provide a full suite of calculators to help you plan your solar journey from start to finish. Free, instant, and incredibly detailed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <Link 
              key={idx} 
              href={tool.href}
              className="bg-white/5 border border-white/10 p-8 rounded-md hover:border-[var(--color-amber)] hover:shadow-lg hover:shadow-[var(--color-amber)]/10 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="mb-6 bg-[var(--color-amber)]/10 w-14 h-14 rounded-md flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-amber)] transition-all duration-300">
                <tool.icon className="w-7 h-7 text-[var(--color-amber)] group-hover:text-[var(--color-navy)] transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-heading font-bold text-white mb-3">{tool.title}</h4>
              <p className="text-sm text-[var(--text-body-on-navy)] opacity-80 flex-grow">
                {tool.description}
              </p>
              <div className="mt-6 text-[var(--color-amber)] font-bold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                Open Calculator &rarr;
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
