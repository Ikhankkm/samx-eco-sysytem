import React, { useState } from 'react';
import { 
  Package, 
  MessageSquare, 
  BarChart3, 
  GitMerge, 
  Cpu, 
  RotateCw, 
  Maximize2, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  Activity,
  Boxes,
  Zap,
  Radio
} from 'lucide-react';

export const ExplodedCore3D: React.FC = () => {
  const [isExploded, setIsExploded] = useState(true);
  const [activeQuadrant, setActiveQuadrant] = useState<'core' | 'inventory' | 'support' | 'analytics' | 'automation'>('core');
  const [viewAngle, setViewAngle] = useState<'iso' | 'elevated' | 'plan'>('iso');

  return (
    <div 
      id="ecosystem-core"
      className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-800/80 bg-[#070A10] overflow-hidden"
    >
      {/* Background Grids & Ambient Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>REFERENCE-LOCK // ONE ECOSYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ONE ECOSYSTEM. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              ENDLESS POSSIBILITIES.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            SAMX unifies disparate enterprise operational silos into an engineered, modular technological core. 
            Inspect the live exploded architecture below.
          </p>

          {/* Interactive Core Controls */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl">
            <button
              type="button"
              onClick={() => setIsExploded(!isExploded)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                isExploded 
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,242,254,0.4)]' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isExploded ? 'EXPLODED VIEW (ACTIVE)' : 'ASSEMBLE CORE'}</span>
            </button>

            <div className="h-4 w-px bg-slate-800 hidden sm:block"></div>

            <div className="flex items-center gap-1">
              {(['iso', 'elevated', 'plan'] as const).map(angle => (
                <button
                  key={angle}
                  type="button"
                  onClick={() => setViewAngle(angle)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono uppercase transition-colors ${
                    viewAngle === angle
                      ? 'bg-slate-800 text-cyan-300 border border-slate-700'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {angle === 'iso' ? 'Isometric 3D' : angle === 'elevated' ? 'High Angle' : 'Top Plan'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Visual Stage Container (Matching Reference 2 Composition) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main 3D Isometric Exploded Stage */}
          <div className="lg:col-span-8 relative">
            <div 
              className={`relative min-h-[520px] sm:min-h-[580px] rounded-3xl bg-gradient-to-b from-slate-950/90 via-[#0a0f1d]/80 to-black border border-slate-800/80 p-6 sm:p-10 shadow-2xl overflow-hidden transition-all duration-700 flex items-center justify-center ${
                viewAngle === 'elevated' ? 'perspective-1000' : 'perspective-1200'
              }`}
            >
              {/* Floor Neon Ring and Grid */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[480px] sm:w-[580px] h-[340px] rounded-[100%] border border-cyan-500/20 shadow-[0_0_50px_rgba(0,242,254,0.06)] transform rotate-x-60"></div>
                <div className="w-[320px] sm:w-[400px] h-[220px] rounded-[100%] border border-cyan-400/30 transform rotate-x-60"></div>
              </div>

              {/* Quadrant 1: Top-Left INVENTORY */}
              <div 
                onClick={() => setActiveQuadrant('inventory')}
                className={`absolute top-6 left-6 sm:top-10 sm:left-10 p-4 rounded-2xl cursor-pointer transition-all duration-500 border ${
                  activeQuadrant === 'inventory'
                    ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_25px_rgba(0,242,254,0.25)] scale-105 z-30'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 z-20'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Inventory</span>
                    <span className="text-[10px] text-cyan-400 font-mono">3D Volumetric Pallets</span>
                  </div>
                </div>
                {/* 3D Isometric Stack Graphic Mockup */}
                <div className="w-36 sm:w-44 h-24 bg-slate-950/80 rounded-xl p-2.5 border border-slate-800/80 flex flex-col justify-between">
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="h-6 rounded bg-gradient-to-t from-cyan-600 to-cyan-400/80 opacity-90"></div>
                    <div className="h-9 rounded bg-gradient-to-t from-amber-600 to-amber-400/80 opacity-90"></div>
                    <div className="h-5 rounded bg-gradient-to-t from-blue-600 to-blue-400/80 opacity-90"></div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>PALLET_CAP:</span>
                    <span className="text-emerald-400 font-bold">98.4%</span>
                  </div>
                </div>
              </div>

              {/* Quadrant 2: Top-Right CUSTOMER SUPPORT */}
              <div 
                onClick={() => setActiveQuadrant('support')}
                className={`absolute top-6 right-6 sm:top-10 sm:right-10 p-4 rounded-2xl cursor-pointer transition-all duration-500 border ${
                  activeQuadrant === 'support'
                    ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_25px_rgba(0,242,254,0.25)] scale-105 z-30'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 z-20'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-sky-950/80 border border-sky-500/30 text-sky-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Customer Support</span>
                    <span className="text-[10px] text-sky-400 font-mono">Conversational HUD</span>
                  </div>
                </div>
                {/* Floating Glass Chat Bubbles */}
                <div className="w-36 sm:w-44 h-24 bg-slate-950/80 rounded-xl p-2 border border-slate-800/80 flex flex-col justify-center gap-1.5">
                  <div className="h-5 w-4/5 rounded-md bg-sky-500/20 border border-sky-500/30 flex items-center px-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-1.5"></span>
                    <span className="text-[8px] text-sky-200">ZATCA Invoicing sync complete</span>
                  </div>
                  <div className="h-5 w-3/4 self-end rounded-md bg-slate-800 border border-slate-700 flex items-center px-2">
                    <span className="text-[8px] text-slate-300">Dispatch courier tracking</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono px-1">
                    <span>AI RESPONSE:</span>
                    <span className="text-cyan-400 font-bold">0.4s</span>
                  </div>
                </div>
              </div>

              {/* CENTER: EXPLODED MODULAR CORE CHASSIS (Reference 2 Focal Point) */}
              <div 
                onClick={() => setActiveQuadrant('core')}
                className={`relative z-20 cursor-pointer transition-all duration-700 p-6 rounded-3xl ${
                  activeQuadrant === 'core'
                    ? 'ring-2 ring-cyan-400 shadow-[0_0_50px_rgba(0,242,254,0.3)]'
                    : 'hover:ring-1 hover:ring-cyan-500/40'
                }`}
              >
                <div 
                  className={`flex flex-col items-center justify-center transition-transform duration-700 ${
                    isExploded ? 'gap-6 sm:gap-8' : 'gap-1'
                  }`}
                >
                  {/* Layer 1: Top Floating Shell (Petals) */}
                  <div 
                    className={`w-44 sm:w-56 h-12 rounded-2xl bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border border-slate-600/60 shadow-xl flex items-center justify-between px-4 transition-all duration-700 ${
                      isExploded ? '-translate-y-4 shadow-[0_15px_30px_rgba(0,0,0,0.8)]' : 'translate-y-0'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                      <span className="text-[10px] font-mono text-cyan-300 font-bold">SAMX CORE L1</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400">ARCH_EXP_01</span>
                  </div>

                  {/* Layer 2: Acrylic Transparent Holographic Pane */}
                  <div 
                    className={`w-52 sm:w-64 h-16 rounded-2xl bg-cyan-950/40 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_30px_rgba(0,242,254,0.2)] flex items-center justify-around px-4 transition-all duration-700 ${
                      isExploded ? '-translate-y-2' : 'translate-y-0'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-[10px] font-mono text-slate-400">ACTIVE BUS</div>
                      <div className="text-xs font-bold font-mono text-cyan-300">100Gb/s</div>
                    </div>
                    <div className="w-px h-8 bg-cyan-500/30"></div>
                    <div className="text-center">
                      <div className="text-[10px] font-mono text-slate-400">LATENCY</div>
                      <div className="text-xs font-bold font-mono text-emerald-400">&lt; 14ms</div>
                    </div>
                    <div className="w-px h-8 bg-cyan-500/30"></div>
                    <div className="text-center">
                      <div className="text-[10px] font-mono text-slate-400">SECURITY</div>
                      <div className="text-xs font-bold font-mono text-blue-300">TIER 4</div>
                    </div>
                  </div>

                  {/* Layer 3: Central Physical Motherboard Core Emitter */}
                  <div className="relative w-60 sm:w-72 h-24 rounded-2xl bg-gradient-to-b from-slate-900 via-[#0a1120] to-black border-2 border-cyan-400 shadow-[0_0_40px_rgba(0,242,254,0.35)] flex items-center justify-between px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/80 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(0,242,254,0.4)]">
                        <Cpu className="w-6 h-6 animate-pulse" />
                      </div>
                      <div>
                        <div className="text-xs font-extrabold text-white font-mono tracking-wider">
                          OMNICORE ENGINE
                        </div>
                        <div className="text-[10px] text-cyan-400 font-mono">
                          RIYADH_SYS_01 // 99.99% UP
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                        ONLINE
                      </span>
                      <span className="text-[9px] text-slate-400 mt-1 font-mono">GCC_MESH_OK</span>
                    </div>
                  </div>

                  {/* Layer 4: Foundation Base Pedestal with LED Rim */}
                  <div 
                    className={`w-64 sm:w-80 h-10 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.15)] flex items-center justify-center px-4 transition-all duration-700 ${
                      isExploded ? 'translate-y-4' : 'translate-y-0'
                    }`}
                  >
                    <div className="flex items-center gap-4 text-[10px] font-mono text-slate-300">
                      <span className="flex items-center gap-1 text-amber-400">
                        <Zap className="w-3 h-3" /> POWERED BUS
                      </span>
                      <span>•</span>
                      <span>ISOMETRIC BASE PEDESTAL</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quadrant 3: Bottom-Left ANALYTICS */}
              <div 
                onClick={() => setActiveQuadrant('analytics')}
                className={`absolute bottom-6 left-6 sm:bottom-10 sm:left-10 p-4 rounded-2xl cursor-pointer transition-all duration-500 border ${
                  activeQuadrant === 'analytics'
                    ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_25px_rgba(0,242,254,0.25)] scale-105 z-30'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 z-20'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Analytics</span>
                    <span className="text-[10px] text-emerald-400 font-mono">3D Metric Visualizer</span>
                  </div>
                </div>
                {/* 3D Bar Graph Visualizer */}
                <div className="w-36 sm:w-44 h-24 bg-slate-950/80 rounded-xl p-2.5 border border-slate-800/80 flex flex-col justify-end">
                  <div className="flex items-end justify-between gap-1.5 h-14">
                    <div className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t h-[35%]"></div>
                    <div className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t h-[65%]"></div>
                    <div className="w-full bg-gradient-to-t from-amber-600 to-amber-400 rounded-t h-[85%]"></div>
                    <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t h-[100%]"></div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mt-2">
                    <span>GROWTH:</span>
                    <span className="text-cyan-400 font-bold">+284%</span>
                  </div>
                </div>
              </div>

              {/* Quadrant 4: Bottom-Right AUTOMATION */}
              <div 
                onClick={() => setActiveQuadrant('automation')}
                className={`absolute bottom-6 right-6 sm:bottom-10 sm:right-10 p-4 rounded-2xl cursor-pointer transition-all duration-500 border ${
                  activeQuadrant === 'automation'
                    ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_25px_rgba(0,242,254,0.25)] scale-105 z-30'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 z-20'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-purple-950/80 border border-purple-500/30 text-purple-400">
                    <GitMerge className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Automation</span>
                    <span className="text-[10px] text-purple-400 font-mono">Routing Circuit Nodes</span>
                  </div>
                </div>
                {/* Connected Circuit Nodes */}
                <div className="w-36 sm:w-44 h-24 bg-slate-950/80 rounded-xl p-2 border border-slate-800/80 flex items-center justify-around relative">
                  <div className="w-7 h-7 rounded-lg bg-purple-600/30 border border-purple-400/60 flex items-center justify-center text-[9px] text-white font-mono">
                    TRIG
                  </div>
                  <div className="w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400"></div>
                  <div className="w-7 h-7 rounded-lg bg-cyan-600/30 border border-cyan-400/60 flex items-center justify-center text-[9px] text-white font-mono">
                    EXEC
                  </div>
                  <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400"></div>
                  <div className="w-7 h-7 rounded-lg bg-emerald-600/30 border border-emerald-400/60 flex items-center justify-center text-[9px] text-white font-mono">
                    SYNC
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Telemetry Detail Panel for the Selected Quadrant */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
                  ACTIVE SUBSYSTEM INSPECTOR
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  REAL-TIME
                </span>
              </div>

              {activeQuadrant === 'core' && (
                <div>
                  <h3 className="text-xl font-bold text-white">SAMX OmniCore Motherboard</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    The central nervous system linking all distributed enterprise apps, cloud databases, and AI pipelines into one unified operational plane.
                  </p>
                  <div className="mt-4 space-y-2 font-mono text-xs">
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Core Architecture:</span>
                      <span className="text-cyan-300">Distributed Event Fabric</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Headquarters Node:</span>
                      <span className="text-emerald-300">Riyadh, KSA (Primary)</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Throughput:</span>
                      <span className="text-amber-300">2.4M ops / min</span>
                    </div>
                  </div>
                </div>
              )}

              {activeQuadrant === 'inventory' && (
                <div>
                  <h3 className="text-xl font-bold text-white">3D Volumetric Inventory</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Real-time warehouse visualization. Replaces manual counting and stale spreadsheet reconciliation with spatial bin and pallet tracking.
                  </p>
                  <div className="mt-4 space-y-2 font-mono text-xs">
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Reconciliation:</span>
                      <span className="text-emerald-300">Automated Sub-second</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Barcode/QR Scanning:</span>
                      <span className="text-cyan-300">Mobile Native Offline</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Safety Stock Alerts:</span>
                      <span className="text-amber-300">Predictive AI Dispatch</span>
                    </div>
                  </div>
                </div>
              )}

              {activeQuadrant === 'support' && (
                <div>
                  <h3 className="text-xl font-bold text-white">Omnichannel Conversational HUD</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Unifies WhatsApp Business API, corporate email, live webchat, and telephony into an automated triage queue with Arabic/English intelligence.
                  </p>
                  <div className="mt-4 space-y-2 font-mono text-xs">
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">First-Response SLA:</span>
                      <span className="text-emerald-300">&lt; 2 seconds</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Autonomous Resolution:</span>
                      <span className="text-cyan-300">78.4% of queries</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Human Escalation:</span>
                      <span className="text-amber-300">One-click live handoff</span>
                    </div>
                  </div>
                </div>
              )}

              {activeQuadrant === 'analytics' && (
                <div>
                  <h3 className="text-xl font-bold text-white">Multi-Dimensional Analytics</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Live revenue velocity, cash-flow telemetry, operator KPI leaderboards, and conversion analytics rendered with GPU-accelerated graphics.
                  </p>
                  <div className="mt-4 space-y-2 font-mono text-xs">
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Data Freshness:</span>
                      <span className="text-emerald-300">Live WebSockets (0 delay)</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Export Formats:</span>
                      <span className="text-cyan-300">ZATCA Compliant XML/PDF</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Executive Forecast:</span>
                      <span className="text-blue-300">Monte Carlo Simulation</span>
                    </div>
                  </div>
                </div>
              )}

              {activeQuadrant === 'automation' && (
                <div>
                  <h3 className="text-xl font-bold text-white">Event Routing & Circuit Nodes</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Multi-step automation connecting ERP webhooks, payment triggers, delivery tracking, and invoice dispatch with built-in retry and audit logs.
                  </p>
                  <div className="mt-4 space-y-2 font-mono text-xs">
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Failure Handling:</span>
                      <span className="text-emerald-300">Self-Healing Retries</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Trigger Nodes:</span>
                      <span className="text-cyan-300">Webhooks, CRON, AI Events</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Audit Compliance:</span>
                      <span className="text-amber-300">Immutable Ledger</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Integrated in SAMX OmniCore</span>
                <a
                  href="#products-hub"
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                >
                  <span>View Product Specs</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Quick Architecture Continuum Callout */}
            <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/20 text-xs font-mono text-slate-400 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-200 font-semibold block">SAMX Continuum Principle</span>
                <span>Turning client problems into reusable, productized IP.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
