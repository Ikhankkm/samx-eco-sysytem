import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building2, 
  Clock, 
  Sparkles,
  ShieldCheck,
  Globe2,
  X
} from 'lucide-react';
import { SAMX_COMPANY_DATA } from '../data/samxData';
import { InquiryFormData } from '../types';

interface ConsultationTerminalProps {
  isOpen?: boolean;
  onClose?: () => void;
  isModal?: boolean;
}

export const ConsultationTerminal: React.FC<ConsultationTerminalProps> = ({
  isOpen = true,
  onClose,
  isModal = false,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    preferredRegion: 'saudi_arabia',
    domain: 'custom_product',
    message: '',
    estimatedTimeline: '1-3 months',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (isModal && !isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setStatus('error');
      setErrorMessage('Please provide your full name, work email, and contact phone.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  const containerContent = (
    <div className="w-full">
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
          <Send className="w-3.5 h-3.5" />
          <span>DIRECT ENGINEERING INGESTION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Engage SAMX Technology
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
          Connect directly with our software architects and digital systems leads in Riyadh, Saudi Arabia and Pakistan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Official Contact Dossier (Locked to Source B - User Provided Data) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                CORPORATE HEADQUARTERS
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                SOURCE: B — VERIFIED
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">SAMX</h3>
            <p className="text-xs font-mono text-slate-400 mb-6">
              {SAMX_COMPANY_DATA.descriptor}
            </p>

            <div className="space-y-4 text-xs font-mono">
              
              {/* Riyadh HQ */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-500/30 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">HEADQUARTERS & PRIMARY MARKET:</span>
                  <span className="text-white font-bold text-sm">Riyadh, Saudi Arabia</span>
                  <span className="text-emerald-400 text-[10px] block mt-0.5">Focus: Saudi & GCC Enterprise</span>
                </div>
              </div>

              {/* Saudi Arabia Phone */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-500/30 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">SAUDI ARABIA DIRECT:</span>
                    <a 
                      href={`tel:${SAMX_COMPANY_DATA.contact.saudiArabiaPhone}`}
                      className="text-white font-bold hover:text-cyan-300 transition-colors"
                    >
                      {SAMX_COMPANY_DATA.contact.saudiArabiaPhone}
                    </a>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${SAMX_COMPANY_DATA.contact.saudiArabiaPhoneRaw}?text=Hello%20SAMX%20Engineering%20Team,%20I%20am%20reaching%20out%20regarding%20a%20technology%20project.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] uppercase transition-colors"
                >
                  WhatsApp
                </a>
              </div>

              {/* Pakistan Phone */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-950 text-blue-400 border border-blue-500/30 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">PAKISTAN HUB DIRECT:</span>
                    <a 
                      href={`tel:${SAMX_COMPANY_DATA.contact.pakistanPhone}`}
                      className="text-white font-bold hover:text-cyan-300 transition-colors"
                    >
                      {SAMX_COMPANY_DATA.contact.pakistanPhone}
                    </a>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${SAMX_COMPANY_DATA.contact.pakistanPhoneRaw}?text=Hello%20SAMX%20Engineering%20Team,%20I%20am%20reaching%20out%20regarding%20a%20technology%20project.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-[10px] uppercase transition-colors"
                >
                  WhatsApp
                </a>
              </div>

              {/* Official Email */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-950 text-purple-400 border border-purple-500/30 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">OFFICIAL CORRESPONDENCE:</span>
                  <a 
                    href={`mailto:${SAMX_COMPANY_DATA.contact.email}`}
                    className="text-white font-bold hover:text-cyan-300 transition-colors"
                  >
                    {SAMX_COMPANY_DATA.contact.email}
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Strict NDA & Data Confidentiality by Default</span>
          </div>
        </div>

        {/* Ingestion Terminal Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
          {status === 'success' ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-300 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Transmission Received</h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                Your enterprise requirements have been routed to the SAMX architecture desk in Riyadh. 
                Our team will respond within 4 business hours.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono"
                >
                  Send Another Transmission
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-mono text-cyan-400 uppercase">
                  ENTERPRISE PROJECT SPECIFICATION FORM
                </span>
                <span className="text-[10px] font-mono text-slate-500">256-BIT ENCRYPTION</span>
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs font-mono">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    ORGANIZATION / COMPANY
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Riyadh Logistics Group"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tariq@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    CONTACT PHONE (WITH COUNTRY CODE) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+966 50 XXX XXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    PRIMARY REGION
                  </label>
                  <select
                    value={formData.preferredRegion}
                    onChange={(e) => setFormData({ ...formData, preferredRegion: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="saudi_arabia">Saudi Arabia (Riyadh HQ)</option>
                    <option value="pakistan">Pakistan Hub</option>
                    <option value="international">GCC / International</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    CORE SYSTEM FOCUS
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="custom_product">SellsVora / Mobile Solutions</option>
                    <option value="ai_automation">AI Sales & Conduit Automation</option>
                    <option value="software">Custom Enterprise Software / ERP</option>
                    <option value="ai">AI Chatbots & Multi-Agent Systems</option>
                    <option value="media">Live Broadcasting & LED Scoreboard</option>
                    <option value="digital">Digital Transformation & Growth</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  PROJECT SCOPE & OBJECTIVES
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline current operational bottlenecks, scale targets, or specific integrations required..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,242,254,0.3)] transition-all cursor-pointer"
              >
                {status === 'submitting' ? (
                  <span>TRANSMITTING TO RIYADH HQ...</span>
                ) : (
                  <>
                    <span>Submit Specification to SAMX</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );

  if (isModal) {
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
        onClick={onClose}
      >
        <div 
          className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
          {containerContent}
        </div>
      </div>
    );
  }

  return (
    <section id="contact-terminal" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#05070B] relative">
      <div className="max-w-7xl mx-auto">
        {containerContent}
      </div>
    </section>
  );
};
