"use client";

import { useState } from "react";
import { 
  ArrowRight, 
  Battery, 
  Calculator, 
  Sun, 
  TrendingUp, 
  PiggyBank, 
  CheckCircle2,
  Twitter,
  Linkedin,
  Instagram,
  Facebook
} from "lucide-react";

const tools = [
  { label: "Battery Calculator", icon: Battery },
  { label: "ROI Calculator", icon: TrendingUp },
  { label: "Off-Grid Calculator", icon: Sun },
  { label: "Panel Calculator", icon: Calculator },
  { label: "Savings Calculator", icon: PiggyBank },
];

export default function ComingSoonHero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    // Base layer: Deep brand navy/slate, perfectly dark.
    <section className="relative min-h-screen flex flex-col items-center justify-between bg-[#04080F] text-slate-200 font-sans selection:bg-amber-500/30 overflow-hidden">
      
      {/* 1. ARCHITECTURAL BACKGROUND (No Slop, Pure Math) */}
      {/* Faint technical grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
        style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}
      ></div>
      {/* Core brand glow - perfectly centered behind the UI */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* 2. TOP NAV / LOGO */}
      <header className="w-full max-w-5xl mx-auto px-6 py-8 flex justify-center sm:justify-start z-10">
        <div className="flex items-center gap-2">
          {/* Recreated clean logo mark */}
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#0B1524] to-[#04080F] border border-white/10 shadow-[0_0_15px_rgba(217,119,6,0.2)]">
            <Sun className="w-4 h-4 text-amber-500" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full animate-pulse border-2 border-[#04080F]"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            MySolar<span className="text-amber-500">Answer</span>
          </span>
        </div>
      </header>

      {/* 3. MAIN CONVERSION CONTENT */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 py-12 text-center z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em]">
            Development in progress
          </span>
        </div>

        {/* Headline - Massive, tight tracking, high contrast */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-[-0.04em] text-white mb-6 leading-none">
          COMING <span className="text-amber-500">SOON.</span>
        </h1>

        {/* Subhead - Clean, readable, slate color */}
        <p className="text-xl sm:text-2xl text-slate-400 font-medium tracking-tight mb-12 max-w-2xl">
          The math behind solar. <span className="text-slate-200">Simplified.</span>
        </p>

        {/* The Capture Form - High Converting, frictionless */}
        <div className="w-full max-w-md mx-auto mb-16">
          {submitted ? (
            <div className="flex items-center justify-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">You're on the list. We'll be in touch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                required
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all text-base shadow-inner"
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-[#04080F] font-bold rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:-translate-y-0.5"
              >
                Notify Me
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-slate-500 font-medium">No spam. Unsubscribe anytime.</p>
        </div>

        {/* 4. THE TOOLS (Social Proof / Product Teaser) */}
        <div className="w-full max-w-3xl border-t border-white/5 pt-12">
          <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.15em] mb-6">
            Tools We're Building
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-slate-300 font-medium hover:bg-white/[0.05] hover:border-white/10 transition-colors cursor-default"
              >
                <tool.icon className="w-4 h-4 text-amber-500/80" />
                {tool.label}
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* 5. FOOTER / SOCIALS */}
      <footer className="w-full max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 z-10 text-slate-500 border-t border-white/5">
        <a href="mailto:mysolaranswer@gmail.com" className="text-sm font-medium hover:text-white transition-colors">
          mysolaranswer@gmail.com
        </a>
        
        <div className="flex items-center gap-6">
          {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
            <a key={i} href="#" className="hover:text-white hover:scale-110 transition-all duration-200">
              <Icon className="w-5 h-5" />
            </a>
          ))}
          {/* Custom Reddit Icon SVG since Lucide doesn't have it standard */}
          <a href="#" className="hover:text-white hover:scale-110 transition-all duration-200">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.561-1.249-1.249-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
            </svg>
          </a>
        </div>
      </footer>

    </section>
  );
}