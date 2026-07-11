import React from 'react';
import Image from 'next/image';

const stats = [
  { value: "25+", label: "Calculators" },
  { value: "50+", label: "Topics Covered" },
  { value: "100%", label: "Free & Unbiased" }
];

export default function WhoWeAre() {
  return (
    <section className="w-full bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/5] lg:aspect-square overflow-hidden shadow-xl rounded-md">
              {/* Unsplash Placeholder for Team/Developers */}
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Text & Stats */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--color-navy)] mb-6">
              Developers Passionate About Clear Information
            </h2>
            
            <p className="text-base md:text-lg text-[var(--text-body-on-white)] opacity-80 mb-8 leading-relaxed">
              We&apos;re a small team of developers who noticed a huge gap in the solar industry: it&apos;s incredibly hard to get simple, accurate answers without talking to a salesperson. <br /><br />
              We decided to build the tools we wished we had when we were researching solar. No 50-person corporate team, no hidden agendas. Just clean, accurate calculators designed to give homeowners the power of transparent information.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-[var(--border-divider)]">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-amber)] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-[var(--text-body-on-white)] opacity-70 uppercase tracking-wide font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
