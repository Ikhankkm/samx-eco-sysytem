import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Terminal, 
  ArrowUp,
  Cpu,
  Layers,
  Box,
  Radio
} from 'lucide-react';
import { SAMX_COMPANY_DATA } from '../data/samxData';
import { Locale } from '../types';

interface FooterProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLocale,
  onLocaleChange,
  onOpenConsultation,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="samx-footer"
      className="bg-[#030508] border-t border-slate-800 text-slate-400 py-16 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-slate-900 to-black border border-cyan-500/40 text-white font-mono font-bold text-lg shadow-[0_0_15px_rgba(0,242,254,0.2)]">
                SX
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight font-mono">
                  {SAMX_COMPANY_DATA.name}
                </span>
                <span className="text-[10px] font-mono text-cyan-400 block">
                  {SAMX_COMPANY_DATA.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-mono max-w-sm">
              {SAMX_COMPANY_DATA.descriptor}. Engineering bespoke software architectures, 
              autonomous AI pipelines, and digital business systems for market-leading enterprises.
            </p>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>DATA GOVERNANCE CLASSIFICATION</span>
              </div>
              <p className="text-slate-500">
                Official contact and service records: <span className="text-slate-300">Classification B — USER PROVIDED</span>. 
                Zero synthetic claims or fabricated customer references.
              </p>
            </div>
          </div>

          {/* Quick Ecosystem Links */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <span className="text-white font-bold uppercase tracking-wider block mb-2">
              Ecosystem
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#ecosystem-core" className="hover:text-cyan-300 transition-colors">
                  One Ecosystem Core
                </a>
              </li>
              <li>
                <a href="#mobile-spatial-showcase" className="hover:text-cyan-300 transition-colors">
                  SellsVora Mobile CRM
                </a>
              </li>
              <li>
                <a href="#products-hub" className="hover:text-cyan-300 transition-colors">
                  Products Hub
                </a>
              </li>
              <li>
                <a href="#services-matrix" className="hover:text-cyan-300 transition-colors">
                  Services Blueprint
                </a>
              </li>
              <li>
                <a href="#neural-pipeline" className="hover:text-cyan-300 transition-colors">
                  AI Sales Conduit
                </a>
              </li>
            </ul>
          </div>

          {/* Operations & Technology */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <span className="text-white font-bold uppercase tracking-wider block mb-2">
              Technology
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#operations-center" className="hover:text-cyan-300 transition-colors">
                  Operations & Nodes
                </a>
              </li>
              <li>
                <a href="#roi-calculator" className="hover:text-cyan-300 transition-colors">
                  Transformation ROI
                </a>
              </li>
              <li>
                <span className="text-slate-600">OmniCore Engine</span>
              </li>
              <li>
                <span className="text-slate-600">ZATCA e-Invoicing (KSA)</span>
              </li>
              <li>
                <span className="text-slate-600">Sub-millisecond WebRTC</span>
              </li>
            </ul>
          </div>

          {/* Direct Verified Contacts */}
          <div className="lg:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-white font-bold uppercase tracking-wider block mb-2">
              Verified Contacts
            </span>
            
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-300 font-bold block">{SAMX_COMPANY_DATA.headquarters}</span>
                  <span className="text-slate-500 text-[10px]">Primary Market: Saudi Arabia & GCC</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a 
                  href={`tel:${SAMX_COMPANY_DATA.contact.saudiArabiaPhone}`}
                  className="text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  KSA: {SAMX_COMPANY_DATA.contact.saudiArabiaPhone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a 
                  href={`tel:${SAMX_COMPANY_DATA.contact.pakistanPhone}`}
                  className="text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  PK: {SAMX_COMPANY_DATA.contact.pakistanPhone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <a 
                  href={`mailto:${SAMX_COMPANY_DATA.contact.email}`}
                  className="text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  {SAMX_COMPANY_DATA.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-mono font-bold transition-colors cursor-pointer"
              >
                Launch Engagement Terminal
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} SAMX. All rights reserved. V3.0 Autonomous Digital Headquarters.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
