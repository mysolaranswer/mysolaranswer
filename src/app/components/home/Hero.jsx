"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Search, ChevronDown, ArrowRight, LayoutTemplate, Square, Columns, Type, ImageIcon } from "lucide-react";

const calculators = [
  { name: "How Many Solar Panels", href: "/calculators/how-many-solar-panels-do-i-need" },
  { name: "Solar Battery Calculator", href: "/calculators/solar-battery-calculator" },
  { name: "Solar ROI Calculator", href: "/calculators/solar-roi-calculator" },
  { name: "Off-Grid Solar Calculator", href: "/calculators/off-grid-solar-calculator" },
  { name: "Solar Savings Calculator", href: "/calculators/solar-savings-calculator" },
  { name: "Solar Financing Calculator", href: "/calculators/solar-financing-calculator" },
];

const fontCombos = {
  1: { name: "Modern Tech", heading: "var(--font-space)", body: "var(--font-inter)" },
  2: { name: "Editorial", heading: "var(--font-playfair)", body: "var(--font-outfit)" },
  3: { name: "Wide Art", heading: "var(--font-syne)", body: "var(--font-inter)" },
  4: { name: "Premium", heading: "var(--font-outfit)", body: "var(--font-inter)" },
};

const images = {
  1: { name: "Default 3D", src: "/hero-bg.png" },
  2: { name: "Sunset Home", src: "https://images.unsplash.com/photo-1509391366360-1e97b524fda6?q=80&w=2000" },
  3: { name: "Roof Close-up", src: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2000" },
};

export function Hero() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState(1);
  const [fontId, setFontId] = useState(4);
  const [imgId, setImgId] = useState(1);

  // Unified Control Panel
  const Controls = () => (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-4 flex flex-col gap-3 border border-gray-200 min-w-[300px]">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase font-bold text-gray-400">Layout</span>
        <div className="flex gap-1">
          {[1,2,3].map(id => (
            <button key={`layout-${id}`} onClick={() => setVariant(id)} className={`px-3 py-1.5 rounded-md flex-1 flex items-center justify-center gap-2 text-xs font-bold transition-colors ${variant === id ? 'bg-[var(--color-navy)] text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}>
               V{id}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase font-bold text-gray-400 flex items-center gap-1"><Type className="w-3 h-3"/> Font Combinations</span>
        <div className="flex flex-wrap gap-1">
          {[1,2,3,4].map(id => (
            <button key={`font-${id}`} onClick={() => setFontId(id)} className={`px-2 py-1.5 rounded-md flex-1 text-xs font-bold transition-colors ${fontId === id ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'hover:bg-gray-100 text-gray-600 border border-transparent'}`}>
              {fontCombos[id].name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase font-bold text-gray-400 flex items-center gap-1"><ImageIcon className="w-3 h-3"/> Background Image</span>
        <div className="flex flex-wrap gap-1">
          {[1,2,3].map(id => (
            <button key={`img-${id}`} onClick={() => setImgId(id)} className={`px-2 py-1.5 rounded-md flex-1 text-xs font-bold transition-colors ${imgId === id ? 'bg-green-100 text-green-800 border border-green-300' : 'hover:bg-gray-100 text-gray-600 border border-transparent'}`}>
              Img {id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const SearchBox = ({ isDark = false }) => (
    <div className="relative w-full max-w-2xl text-left mt-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} hover:scale-[1.01] rounded-2xl px-6 py-5 flex items-center justify-between transition-all shadow-2xl border-2 border-transparent hover:border-[var(--color-amber)] group`}
      >
        <div className="flex items-center gap-5">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-md transition-colors ${isDark ? 'bg-white text-gray-900' : 'bg-[var(--color-navy)] text-white'}`}>
            <Search className="w-6 h-6" />
          </div>
          <div className="flex flex-col items-start">
            <span className={`text-xs font-bold uppercase tracking-widest mb-1 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>Start Calculating</span>
            <span className={`text-xl md:text-2xl font-bold tracking-tight font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Select a solar tool...
            </span>
          </div>
        </div>
        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${isDark ? 'text-gray-400' : 'text-gray-400'}`} />
      </button>

      {isOpen && (
        <div className={`absolute top-full left-0 right-0 mt-3 rounded-2xl shadow-2xl overflow-hidden border z-50 animate-fade-in-up ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
          {calculators.map((calc, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsOpen(false);
                router.push(calc.href);
              }}
              className={`w-full text-left px-8 py-5 font-bold border-b transition-colors flex items-center justify-between group/item font-heading ${
                isDark 
                  ? 'border-gray-700 text-gray-200 hover:bg-gray-700' 
                  : 'border-gray-100 text-gray-800 hover:bg-gray-50'
              } last:border-0`}
            >
              <span className={`text-lg md:text-xl transition-colors ${isDark ? 'group-hover/item:text-[var(--color-amber)]' : 'group-hover/item:text-[var(--color-navy)]'}`}>{calc.name}</span>
              <ArrowRight className="w-5 h-5 text-[var(--color-amber)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div 
      className="w-full relative" 
      style={{ 
        '--font-heading': fontCombos[fontId].heading, 
        fontFamily: fontCombos[fontId].body 
      }}
    >
      <Controls />

      {/* VARIANT 1: Full-Width Bottom-Heavy Cinematic */}
      {variant === 1 && (
        <section className="relative w-full min-h-[90vh] flex flex-col justify-end pb-24 pt-40 shadow-2xl overflow-hidden">
          <Image unoptimized src={images[imgId].src} alt="Solar panels" fill priority className="object-cover z-0 object-center" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
          
          <div className="relative z-20 flex flex-col items-center justify-end px-4 w-full text-center max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold text-white tracking-tighter leading-[1.05] mb-8 font-heading">
              Smarter Solar. <br className="hidden md:block"/>
              Instant Answers<span className="text-[var(--color-amber)]">.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 max-w-3xl font-medium leading-relaxed mb-4">
              Empower your home with reliable data. Calculate your system size, battery requirements, and potential savings instantly.
            </p>
            <div className="w-full flex justify-center"><SearchBox isDark={false} /></div>
          </div>
        </section>
      )}

      {/* VARIANT 2: Full-Width Dashboard */}
      {variant === 2 && (
        <section className="relative w-full min-h-[90vh] flex flex-col justify-center shadow-2xl pt-24 pb-16 overflow-hidden">
          <Image unoptimized src={images[imgId].src} alt="Solar panels" fill priority className="object-cover z-0 object-center" />
          <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-sm" />
          
          <div className="relative z-20 px-4 md:px-16 w-full max-w-7xl mx-auto flex items-center justify-start h-full">
            <div className="bg-white p-10 md:p-16 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.6)] max-w-3xl w-full">
              <div className="w-16 h-2 bg-[var(--color-amber)] mb-10 rounded-full shadow-[0_0_15px_rgba(212,160,23,0.5)]"></div>
              <h1 className="text-5xl md:text-6xl lg:text-[6rem] font-bold text-gray-900 tracking-tighter leading-[1.05] mb-8 font-heading">
                Smarter Solar. <br />
                Instant Answers<span className="text-[var(--color-amber)]">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed mb-10">
                Empower your home with reliable data. Calculate your system size, battery requirements, and potential savings instantly.
              </p>
              <SearchBox isDark={true} />
            </div>
          </div>
        </section>
      )}

      {/* VARIANT 3: Full-Width Editorial Split Screen */}
      {variant === 3 && (
        <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row overflow-hidden bg-white">
          <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-32 z-20 relative bg-white border-r border-gray-100">
            <div className="w-16 h-2 bg-[var(--color-amber)] mb-10 rounded-full shadow-[0_0_15px_rgba(212,160,23,0.5)]"></div>
            <h1 className="text-5xl md:text-6xl lg:text-[6.5rem] font-bold text-gray-900 tracking-tighter leading-[1.05] mb-8 font-heading">
              Smarter Solar. <br />
              Instant Answers<span className="text-[var(--color-amber)]">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
              Empower your home with reliable data. Calculate your system size, battery requirements, and potential savings instantly.
            </p>
            <SearchBox isDark={true} />
          </div>

          <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative z-0">
             <Image unoptimized src={images[imgId].src} alt="Solar panels" fill priority className="object-cover object-center" />
             <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10 hidden md:block" />
          </div>
        </section>
      )}

    </div>
  );
}
