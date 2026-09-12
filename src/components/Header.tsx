import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Search, 
  Globe, 
  Menu, 
  X, 
  Cpu, 
  ArrowRight, 
  ShieldCheck,
  Zap,
  PhoneCall
} from 'lucide-react';
import { SAMX_COMPANY_DATA, I18N_STRINGS } from '../data/samxData';
import { Locale } from '../types';

interface HeaderProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
  onOpenSearch: () => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLocale,
  onLocaleChange,
  onOpenSearch,
  onOpenConsultation,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ping, setPing] = useState(14);
  const t = I18N_STRINGS[currentLocale];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      setPing(Math.floor(12 + Math.random() * 6));
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: t.nav.ecosystem, href: '#ecosystem-core' },
    { label: t.nav.products, href: '#products-hub' },
    { label: t.nav.services, href: '#services-matrix' },
    { label: t.nav.pipeline, href: '#neural-pipeline' },
    { label: t.nav.operations, href: '#operations-center' },
    { label: t.nav.calculator, href: '#roi-calculator' },
  ];

  return (
    <header 
      id="samx-global-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#05070B]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand & System Status */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              id="samx-logo-link"
              className="group flex items-center gap-3 focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-slate-900 to-black border border-cyan-500/30 group-hover:border-cyan-400 transition-colors shadow-[0_0_15px_rgba(0,242,254,0.15)]">
                <span className="font-extrabold text-lg tracking-wider text-white">S</span>
                <span className="text-cyan-400 font-extrabold text-sm">X</span>
                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400"></div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight text-white font-mono">SAMX</span>
                  <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-widest bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 rounded">
                    V3.0 CORE
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 tracking-wider hidden sm:block">
                  TECHNOLOGY ECOSYSTEM
                </span>
              </div>
            </a>

            {/* Live Telemetry Pill */}
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-400">RIYADH HQ:</span>
              <span className="text-emerald-300 font-semibold">{ping}ms</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-400">ACTIVE_NODES: 4</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: Search, Lang, CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Global Search Button */}
            <button
              type="button"
              id="header-search-trigger"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-mono transition-all hover:border-slate-700"
              title="Search SAMX Systems (Ctrl/Cmd + K)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">SEARCH</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[9px] bg-slate-800 border border-slate-700 rounded text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Language Switcher */}
            <div className="relative flex items-center bg-slate-900/90 border border-slate-800 rounded-lg p-0.5 text-xs font-medium">
              <button
                type="button"
                onClick={() => onLocaleChange('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  currentLocale === 'en' 
                    ? 'bg-cyan-500 text-black font-semibold shadow' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLocaleChange('ar')}
                className={`px-2 py-1 rounded transition-colors ${
                  currentLocale === 'ar' 
                    ? 'bg-cyan-500 text-black font-semibold shadow' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                العربية
              </button>
              <button
                type="button"
                onClick={() => onLocaleChange('ur')}
                className={`px-2 py-1 rounded transition-colors ${
                  currentLocale === 'ur' 
                    ? 'bg-cyan-500 text-black font-semibold shadow' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                اردو
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              id="header-engage-btn"
              onClick={onOpenConsultation}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] active:scale-95 cursor-pointer"
            >
              <span>Engage SAMX</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              id="header-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-navigation-drawer"
            className="lg:hidden mt-3 p-4 rounded-xl bg-slate-900/95 border border-slate-800 backdrop-blur-xl shadow-2xl flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            <div className="pt-3 mt-1 border-t border-slate-800 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 rounded-lg bg-cyan-500 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Contact SAMX (+966 580 251 349)</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
