import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Sparkles, 
  ArrowRight,
  Send,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface RoiCalculatorProps {
  onOpenConsultation: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenConsultation }) => {
  const [teamSize, setTeamSize] = useState<number>(25);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(14);
  const [hourlyRate, setHourlyRate] = useState<number>(120); // in SAR (~$32 USD)

  // Computation
  const weeklyHoursWasted = teamSize * hoursPerWeek;
  const annualHoursWasted = weeklyHoursWasted * 50; // 50 working weeks
  const automationEfficiencyFactor = 0.72; // 72% automation factor
  const hoursSavedAnnual = Math.round(annualHoursWasted * automationEfficiencyFactor);
  const capitalSavedAnnual = Math.round(hoursSavedAnnual * hourlyRate);
  const velocityMultiplier = '3.6x';

  return (
    <section 
      id="roi-calculator" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070A12] border-b border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>OPERATIONAL EFFICIENCY AUDIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Digital Transformation ROI Engine
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Quantify the exact manual overhead eliminated and capital preserved by deploying SAMX 
            custom software, SellsVora Mobile CRM, and neural automation conduits.
          </p>
        </div>

        {/* Interactive Calculator Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Panel */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>Enterprise Parameters</span>
              </h3>

              <div className="space-y-6">
                
                {/* Team Size Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-mono mb-2">
                    <span className="text-slate-300">OPERATIONAL TEAM SIZE</span>
                    <span className="text-cyan-400 font-bold text-sm">{teamSize} Specialists</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="250"
                    step="5"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>5 Reps</span>
                    <span>100 Reps</span>
                    <span>250+ Reps</span>
                  </div>
                </div>

                {/* Hours Spent On Repetitive Tasks */}
                <div>
                  <div className="flex justify-between items-center text-xs font-mono mb-2">
                    <span className="text-slate-300">MANUAL RESEARCH & DATA-ENTRY / WEEK</span>
                    <span className="text-amber-400 font-bold text-sm">{hoursPerWeek} Hours / Person</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="25"
                    step="1"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>4 hrs (Minimal)</span>
                    <span>14 hrs (Standard)</span>
                    <span>25 hrs (Severe)</span>
                  </div>
                </div>

                {/* Average Resource Hourly Rate */}
                <div>
                  <div className="flex justify-between items-center text-xs font-mono mb-2">
                    <span className="text-slate-300">BLENDED HOURLY RATE (SAR / HR)</span>
                    <span className="text-emerald-400 font-bold text-sm">{hourlyRate} SAR (~${Math.round(hourlyRate / 3.75)} USD)</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="400"
                    step="10"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full accent-emerald-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>50 SAR/hr</span>
                    <span>200 SAR/hr</span>
                    <span>400 SAR/hr</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-500">
              *Based on empirical data from SAMX enterprise pipeline deployments across Saudi Arabia and regional logistics.
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border-2 border-cyan-500/40 shadow-[0_0_50px_rgba(0,242,254,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  PROJECTED TRANSFORMATION IMPACT
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold">
                  CONFIRMED ROI
                </span>
              </div>

              {/* Major Number Card */}
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 mb-6">
                <span className="text-xs font-mono text-slate-400 block mb-1">
                  ESTIMATED ANNUAL CAPITAL SAVED:
                </span>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-white font-mono">
                  {capitalSavedAnnual.toLocaleString()} SAR
                </div>
                <span className="text-xs text-slate-400 font-mono mt-1 block">
                  ≈ ${(Math.round(capitalSavedAnnual / 3.75)).toLocaleString()} USD / Year Preserved
                </span>
              </div>

              {/* Grid of secondary statistics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 font-mono">
                  <span className="text-slate-400 text-[11px]">HOURS REGAINED / YR:</span>
                  <div className="text-xl sm:text-2xl font-bold text-cyan-300 mt-1">
                    {hoursSavedAnnual.toLocaleString()} hrs
                  </div>
                  <span className="text-[10px] text-emerald-400 mt-0.5 block">
                    Redirected to Revenue
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 font-mono">
                  <span className="text-slate-400 text-[11px]">VELOCITY MULTIPLIER:</span>
                  <div className="text-xl sm:text-2xl font-bold text-amber-300 mt-1">
                    {velocityMultiplier}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">
                    Faster Lead-to-Invoice
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Action */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-300 font-mono">
                Ready to review our technical blueprint?
              </div>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all cursor-pointer"
              >
                <span>Request Custom ROI Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
