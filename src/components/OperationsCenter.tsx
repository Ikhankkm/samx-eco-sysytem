import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Server, 
  ShieldCheck, 
  Wifi, 
  Globe2, 
  Zap, 
  RefreshCw, 
  CheckCircle2, 
  Terminal,
  Cpu,
  Lock
} from 'lucide-react';
import { TELEMETRY_NODES } from '../data/samxData';
import { TelemetryNode } from '../types';

export const OperationsCenter: React.FC = () => {
  const [nodes, setNodes] = useState<TelemetryNode[]>(TELEMETRY_NODES);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState('JUST NOW');

  const refreshTelemetry = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setNodes(prev => prev.map(node => ({
        ...node,
        latencyMs: Math.max(10, node.latencyMs + Math.floor((Math.random() - 0.5) * 4)),
        activeWorkflows: node.activeWorkflows + Math.floor((Math.random() - 0.5) * 20),
      })));
      setLastRefreshed('JUST NOW');
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <section 
      id="operations-center" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#05070B] border-b border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-3">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>LIVE INFRASTRUCTURE TELEMETRY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              SAMX Operations & Node Center
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
              Real-time cluster monitoring across Riyadh Corporate Headquarters, South Asia development hubs, and GCC enterprise edges.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">
              UPDATED: {lastRefreshed}
            </span>
            <button
              type="button"
              onClick={refreshTelemetry}
              disabled={isRefreshing}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-mono flex items-center gap-2 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>PING CLUSTERS</span>
            </button>
          </div>
        </div>

        {/* Global Summary KPI Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 font-mono">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>AVERAGE LATENCY</span>
              <Wifi className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <div className="text-2xl font-bold text-white">18.4 ms</div>
            <div className="text-[10px] text-emerald-400 mt-1">✓ SUB-50MS SLA GUARANTEED</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 font-mono">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>NETWORK UPTIME</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-white">99.98%</div>
            <div className="text-[10px] text-slate-400 mt-1">LAST 365 DAYS RECORD</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 font-mono">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>ACTIVE WORKFLOWS</span>
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-2xl font-bold text-white">4,120 / s</div>
            <div className="text-[10px] text-cyan-400 mt-1">LIVE EVENT FABRIC</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 font-mono">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>SECURITY & AUDIT</span>
              <Lock className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white">0 ANOMALIES</div>
            <div className="text-[10px] text-emerald-400 mt-1">ZATCA & GCC COMPLIANT</div>
          </div>
        </div>

        {/* Distributed Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="p-5 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all font-mono"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                  {node.status}
                </span>
              </div>

              <h4 className="text-sm font-bold text-white tracking-tight">
                {node.name}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {node.region}
              </p>

              <div className="mt-6 space-y-2 text-xs border-t border-slate-800/80 pt-4">
                <div className="flex justify-between">
                  <span className="text-slate-500">Latency:</span>
                  <span className="text-cyan-300 font-bold">{node.latencyMs}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Uptime:</span>
                  <span className="text-emerald-300 font-bold">{node.uptime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Workflows:</span>
                  <span className="text-white">{node.activeWorkflows} ops/min</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
