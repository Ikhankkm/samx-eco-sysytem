import React from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Radio, 
  Layers, 
  Sparkles,
  Smartphone,
  GitBranch,
  Activity
} from 'lucide-react';
import { SAMX_COMPANY_DATA, I18N_STRINGS } from '../data/samxData';
import { Locale } from '../types';

interface HeroSectionProps {
  currentLocale: Locale;
  onOpenConsultation: () => void;
  onOpenSearch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLocale,
  onOpenConsultation,
  onOpenSearch,
}) => {
  const t = I18N_STRINGS[currentLocale];

  return (
    <section 
      id="hero-section"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#05070B] overflow-hidden"
    >
      {/* Background Architectural Mesh & Subtle Lighting */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Eyebrow / System Coordinates */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(0,242,254,0.15)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>{t.hero.eyebrow}</span>
        </div>

        {/* Master Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white font-sans max-w-5xl mx-auto leading-[1.08]">
          {t.hero.heading1}{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
            {t.hero.heading2}
          </span>
        </h1>

        {/* Subhead */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          {t.hero.subhead}
        </p>

        {/* The SAMX Continuum Architecture Banner */}
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400 max-w-full overflow-x-auto">
          <span className="text-cyan-400 font-bold shrink-0">{t.hero.modelLabel}:</span>
          <span className="text-slate-200 shrink-0">{t.hero.modelText}</span>
        </div>

        {/* Primary CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#ecosystem-core"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs font-mono tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,242,254,0.35)] transition-all cursor-pointer"
          >
            <span>{t.hero.primaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs font-mono tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>{t.hero.secondaryCta}</span>
          </button>
        </div>

        {/* Quick Reference-Lock Jump Badges */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
          
          <a 
            href="#ecosystem-core"
            className="p-4 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="p-1.5 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">
                One Ecosystem Core
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-tight">
              Modular exploded architecture (Inventory, Support, Analytics, Automation).
            </p>
          </a>

          <a 
            href="#mobile-spatial-showcase"
            className="p-4 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="p-1.5 rounded-lg bg-amber-950 text-amber-400 border border-amber-500/30">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white font-mono group-hover:text-amber-300 transition-colors">
                SellsVora Mobile CRM
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-tight">
              3D perspective floating showcase with sub-50ms offline sync.
            </p>
          </a>

          <a 
            href="#neural-pipeline"
            className="p-4 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="p-1.5 rounded-lg bg-blue-950 text-blue-400 border border-blue-500/30">
                <GitBranch className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white font-mono group-hover:text-blue-300 transition-colors">
                AI Sales Conduit
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-tight">
              Luminous conduit pipeline routing lead ingress to automated CRM state.
            </p>
          </a>

        </div>

      </div>
    </section>
  );
};
