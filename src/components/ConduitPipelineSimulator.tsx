import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Target, 
  PhoneCall, 
  CheckCircle2, 
  Play, 
  RefreshCw, 
  Radio, 
  Sliders, 
  Sparkles, 
  ArrowRight,
  Shield,
  Clock,
  Send,
  Cpu
} from 'lucide-react';
import { RECENT_AUTOMATION_LOGS } from '../data/samxData';
import { AutomationLog } from '../types';

export const ConduitPipelineSimulator: React.FC = () => {
  const [logs, setLogs] = useState<AutomationLog[]>(RECENT_AUTOMATION_LOGS);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState<number>(0);
  const [whatsappActive, setWhatsappActive] = useState(true);
  const [reconcileActive, setReconcileActive] = useState(true);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(1);

    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];

    setTimeout(() => {
      setSimStep(2);
      setLogs(prev => [
        {
          id: `LOG-${Math.floor(8900 + Math.random() * 900)}`,
          timestamp: timeStr,
          source: 'Inbox Skill / Ingress Node',
          pipeline: 'AI Sales Conduit',
          stage: 'TRIGGER',
          status: 'COMPLETED',
          payload: 'New Lead: Riyadh Retail Enterprise - Requested SellsVora Mobile CRM for 80 stores',
        },
        ...prev.slice(0, 5)
      ]);
    }, 1200);

    setTimeout(() => {
      setSimStep(3);
      setLogs(prev => [
        {
          id: `LOG-${Math.floor(8900 + Math.random() * 900)}`,
          timestamp: timeStr,
          source: 'CRM Reconciliation Core',
          pipeline: 'OmniCore Engine',
          stage: 'INTELLIGENCE',
          status: 'COMPLETED',
          payload: 'Dossier enriched via LinkedIn & Ministry of Commerce KSA data. WhatsApp verified.',
        },
        ...prev.slice(0, 5)
      ]);
    }, 2600);

    setTimeout(() => {
      setSimStep(4);
      setLogs(prev => [
        {
          id: `LOG-${Math.floor(8900 + Math.random() * 900)}`,
          timestamp: timeStr,
          source: 'Outbound Prospecting & Call Coach',
          pipeline: 'Autonomous Dispatcher',
          stage: 'ACTION',
          status: 'VERIFIED',
          payload: 'Autonomous quotation dispatched to client CFO. Human sign-off logged.',
        },
        ...prev.slice(0, 5)
      ]);
      setIsSimulating(false);
      setSimStep(0);
    }, 4200);
  };

  return (
    <div 
      id="neural-pipeline"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#06080F] border-b border-slate-800/80 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>REFERENCE-LOCK // NEURAL CONDUIT ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            AI Sales & Workflow Automation Conduit
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Eliminating repetitive administrative overhead. A continuous pipeline routing inbound inquiries 
            into autonomous research, CRM reconciliation, and verified closing actions.
          </p>

          {/* Trigger Simulation Button */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              id="simulate-lead-pipeline-btn"
              onClick={runSimulation}
              disabled={isSimulating}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 transition-all cursor-pointer ${
                isSimulating
                  ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.5)] animate-pulse'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_25px_rgba(0,242,254,0.5)]'
              }`}
            >
              {isSimulating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>PACKET IN TRANSIT // STEP {simStep} OF 4</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-black" />
                  <span>SIMULATE LIVE LEAD INGESTION</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* INDUSTRIAL HUD CONDUIT MATRIX (Direct Reference 3 Implementation) */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0B0F19] via-[#080C14] to-[#04060A] border-2 border-slate-700/80 p-6 sm:p-12 shadow-2xl overflow-hidden">
          
          {/* Subtle panel seam lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-slate-800/40 pointer-events-none"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-slate-800/40 pointer-events-none"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-800/40 pointer-events-none"></div>

          {/* Header HUD Framed Badge (Direct Reference 3) */}
          <div className="flex justify-center mb-12">
            <div className="relative px-8 py-2 rounded-xl bg-slate-900/90 border-2 border-cyan-400/80 shadow-[0_0_25px_rgba(0,242,254,0.25)] flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
              <h3 className="text-sm sm:text-base font-extrabold tracking-widest text-white font-mono uppercase">
                AI SALES AUTOMATION
              </h3>
              {/* Corner Chamfer Accents */}
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-cyan-300"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-cyan-300"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-cyan-300"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-cyan-300"></div>
            </div>
          </div>

          {/* Main Nodes & Conduit Network */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-20">
            
            {/* LEFT NODE: INBOX SKILL */}
            <div className="lg:col-span-3 flex flex-col items-center">
              <div 
                className={`w-48 p-4 rounded-2xl bg-slate-900/90 border transition-all duration-500 ${
                  simStep === 1 
                    ? 'border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.5)] scale-105' 
                    : 'border-slate-700/80 hover:border-cyan-500/50'
                }`}
              >
                {/* Envelope Graphic Badge */}
                <div className="w-full h-24 rounded-xl bg-gradient-to-tr from-purple-950/60 to-blue-900/40 border border-purple-500/30 flex flex-col items-center justify-center p-3 mb-3 shadow-inner">
                  <div className="relative w-12 h-9 rounded-lg bg-gradient-to-b from-purple-400 to-indigo-600 flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                    {simStep === 1 && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 animate-ping"></span>
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-xs font-bold text-white tracking-wider font-mono block">
                    INBOX SKILL
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Multi-Channel Inbound
                  </span>
                </div>
              </div>

              {/* Status pill under inbox */}
              <div className="mt-3 px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>MONITORING ACTIVE</span>
              </div>
            </div>

            {/* CENTER NODE: CRM RECONCILIATION (Reference 3 Focal Point) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div 
                className={`w-full max-w-md p-5 rounded-3xl bg-slate-900/90 border-2 transition-all duration-500 backdrop-blur-xl ${
                  simStep === 2 || simStep === 3
                    ? 'border-cyan-400 shadow-[0_0_40px_rgba(0,242,254,0.4)]'
                    : 'border-slate-700/90 shadow-2xl'
                }`}
              >
                {/* Card Top Title & Menu */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-xs font-mono text-cyan-300 font-bold uppercase">CRM</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-white">CRM RECONCILIATION</span>
                  <div className="flex gap-1 text-slate-500 text-xs">•••</div>
                </div>

                {/* Metrics Row: ACTION & CONVERSION */}
                <div className="grid grid-cols-2 gap-3 my-4">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">ACTION RATE</div>
                    <div className="text-lg font-bold font-mono text-cyan-300">33.4%</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">EFFICIENCY GAIN</div>
                    <div className="text-lg font-bold font-mono text-emerald-400">+279%</div>
                  </div>
                </div>

                {/* Interactive Toggles & Statuses (Matching Reference 3) */}
                <div className="space-y-2.5">
                  
                  {/* WhatsApp Integration Row */}
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 text-xs">✔</span>
                      <span className="text-xs font-mono text-slate-200">WHATSAPP SYNC</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setWhatsappActive(!whatsappActive)}
                      className={`w-10 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
                        whatsappActive ? 'bg-cyan-500' : 'bg-slate-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-black transition-transform ${
                        whatsappActive ? 'translate-x-5' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>

                  {/* LinkedIn Enrichment Progress Bar */}
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                      <span className="text-slate-300">LinkedIn Prospect Dossier</span>
                      <span className="text-cyan-400 font-bold">86%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-[86%] h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Reconciliation Toggle Switch */}
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="text-xs font-mono text-slate-200">RECONCILIATION</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setReconcileActive(!reconcileActive)}
                      className={`w-10 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
                        reconcileActive ? 'bg-emerald-500' : 'bg-slate-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-black transition-transform ${
                        reconcileActive ? 'translate-x-5' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>

                </div>

                {/* Sub-node telemetry */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>AUDIT CHECKSUM:</span>
                  <span className="text-cyan-300">0x9F41C...OK</span>
                </div>
              </div>
            </div>

            {/* RIGHT NODES: OUTBOUND PROSPECTING & CALL COACHING */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              
              {/* Node 1: OUTBOUND PROSPECTING */}
              <div 
                className={`p-4 rounded-2xl bg-slate-900/90 border transition-all duration-500 ${
                  simStep === 3
                    ? 'border-cyan-400 shadow-[0_0_25px_rgba(0,242,254,0.3)] scale-105'
                    : 'border-slate-700/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-300">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white font-mono block">
                      OUTBOUND PROSPECTING
                    </span>
                    <span className="text-[10px] text-purple-300 font-mono">
                      Autonomous Radar
                    </span>
                  </div>
                </div>
              </div>

              {/* Node 2: PROSPECT DOSSIER HUD */}
              <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span>ENRICHED DOSSIER</span>
                  <span className="text-emerald-400">CONFIRMED</span>
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 w-3/4 rounded bg-slate-800"></div>
                  <div className="h-2 w-1/2 rounded bg-slate-800"></div>
                  <div className="h-2 w-2/3 rounded bg-cyan-900/40"></div>
                </div>
              </div>

              {/* Node 3: CALL COACHING / AUDIO AGENT */}
              <div 
                className={`p-4 rounded-2xl bg-slate-900/90 border transition-all duration-500 ${
                  simStep === 4
                    ? 'border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)] scale-105'
                    : 'border-slate-700/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white font-mono block">
                      CALL COACHING & VOICE
                    </span>
                    <span className="text-[10px] text-indigo-300 font-mono">
                      Sub-second Objection AI
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* SVG Luminous Conduit Tubing Overlays (Physical Tubing Visuals) */}
          <div className="mt-8 pt-8 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>REAL-TIME AUDIT LOG STREAM</span>
              </span>
              <span className="text-emerald-400">LATENCY: 18ms // 0 LOSS</span>
            </div>

            {/* Live Logs Stream */}
            <div className="space-y-2 font-mono text-xs max-h-48 overflow-y-auto">
              {logs.map((log) => (
                <div 
                  key={log.id}
                  className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">{log.timestamp}</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-300 border border-slate-700">
                      {log.stage}
                    </span>
                    <span className="text-slate-300 text-[11px] truncate max-w-md">
                      {log.payload}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                    <span className="text-[10px] text-slate-500">{log.source}</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                      {log.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
