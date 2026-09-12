import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Share2, 
  Palette, 
  Tv, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';
import { OFFICIAL_SERVICES } from '../data/samxData';
import { ServiceDomain, ServiceItem } from '../types';

interface ServicesMatrixProps {
  onOpenConsultation: () => void;
  onSelectServiceItem?: (service: ServiceItem) => void;
}

export const ServicesMatrix: React.FC<ServicesMatrixProps> = ({ onOpenConsultation }) => {
  const [activeDomain, setActiveDomain] = useState<ServiceDomain>('software');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const domainTabs: { id: ServiceDomain; label: string; icon: React.ReactNode; tier: string }[] = [
    { id: 'software', label: 'SOFTWARE', icon: <Code2 className="w-4 h-4" />, tier: 'Tier 1 Core Engineering' },
    { id: 'ai', label: 'AI & COGNITION', icon: <Cpu className="w-4 h-4" />, tier: 'Tier 2 Agentic Systems' },
    { id: 'digital', label: 'DIGITAL GROWTH', icon: <Share2 className="w-4 h-4" />, tier: 'Tier 3 Discovery' },
    { id: 'design', label: 'DESIGN & UI/UX', icon: <Palette className="w-4 h-4" />, tier: 'Tier 4 Spatial Interface' },
    { id: 'media', label: 'MEDIA & STREAMING', icon: <Tv className="w-4 h-4" />, tier: 'Tier 5 Arena Systems' },
  ];

  const domainServices = OFFICIAL_SERVICES.filter(s => s.domain === activeDomain);

  const continuumSteps = [
    { step: '01', title: 'Client Problem', desc: 'Fragmented operational friction or manual bottleneck identified' },
    { step: '02', title: 'Bespoke Service', desc: 'Architected custom solution deployed to solve immediate bottleneck' },
    { step: '03', title: 'Reusable Module', desc: 'Core patterns extracted into hardened, reusable component libraries' },
    { step: '04', title: 'Software Product', desc: 'Packaged into an enterprise multi-tenant software system' },
    { step: '05', title: 'SaaS / AI Platform', desc: 'Scalable cloud infrastructure powering recurring business value' },
    { step: '06', title: 'Proprietary IP', desc: 'Defensible technology asset driving institutional equity' },
  ];

  return (
    <section 
      id="services-matrix" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070A12] border-b border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>OFFICIAL CAPABILITY BLUEPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering & Digital Services
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Strictly structured around measurable outcomes, sub-second latency, and institutional resilience. 
            We do not sell generic packages; we engineer production technology.
          </p>
        </div>

        {/* THE SAMX CONTINUUM PRINCIPLE (Section 19 from Master Prompt) */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                SAMX CORE BUSINESS ARCHITECTURE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                The Services → Software → Proprietary IP Continuum
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-semibold">
              SCALABILITY ENGINE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {continuumSteps.map((item, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-colors group"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">
                    {item.step}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-400 mt-2 leading-tight">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Selection Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {domainTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveDomain(tab.id)}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                activeDomain === tab.id
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(0,242,254,0.3)]'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Domain Services List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domainServices.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/70 border border-slate-800/90 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
                  <span className="text-cyan-400">{service.architectureTier}</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                    {service.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {service.description}
                </p>

                {/* Capabilities list */}
                <div className="mt-6 space-y-2">
                  <span className="text-[11px] font-mono text-slate-500 block uppercase">
                    Core Technical Modules:
                  </span>
                  {service.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Client Outcome Box */}
                <div className="mt-6 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                  <span className="text-slate-500 font-mono block text-[10px] uppercase">Client Operational Outcome:</span>
                  <span className="text-slate-200 mt-1 block">{service.clientOutcome}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5"
                >
                  <span>Request System Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
