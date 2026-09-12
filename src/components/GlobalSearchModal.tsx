import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Layers, Box, Cpu, ArrowRight, ShieldCheck, Activity, Terminal } from 'lucide-react';
import { SAMX_PRODUCTS, OFFICIAL_SERVICES, TELEMETRY_NODES } from '../data/samxData';
import { ProductItem, ServiceItem } from '../types';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: ProductItem) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectService,
}) => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'products' | 'services' | 'telemetry'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent, but if already open, toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const filteredProducts = SAMX_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(normalizedQuery) ||
    p.description.toLowerCase().includes(normalizedQuery) ||
    p.category.toLowerCase().includes(normalizedQuery) ||
    p.features.some(f => f.toLowerCase().includes(normalizedQuery)) ||
    p.techStack.some(t => t.toLowerCase().includes(normalizedQuery))
  );

  const filteredServices = OFFICIAL_SERVICES.filter(s =>
    s.name.toLowerCase().includes(normalizedQuery) ||
    s.domainName.toLowerCase().includes(normalizedQuery) ||
    s.description.toLowerCase().includes(normalizedQuery) ||
    s.capabilities.some(c => c.toLowerCase().includes(normalizedQuery))
  );

  const filteredTelemetry = TELEMETRY_NODES.filter(n =>
    n.name.toLowerCase().includes(normalizedQuery) ||
    n.region.toLowerCase().includes(normalizedQuery)
  );

  return (
    <div 
      id="global-search-modal-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
      onClick={onClose}
    >
      <div 
        id="global-search-container"
        className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search SAMX Software, AI Pipelines, Services, or Systems..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button 
              type="button" 
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-1 text-xs font-mono bg-slate-800 text-slate-400 rounded border border-slate-700 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-950/60 border-b border-slate-800 text-xs">
          {(['all', 'products', 'services', 'telemetry'] as const).map(f => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              className={`px-2.5 py-1 rounded-md font-mono capitalize transition-colors ${
                activeFilter === f
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Results Stream */}
        <div className="overflow-y-auto p-4 space-y-4">
          
          {/* Products Group */}
          {(activeFilter === 'all' || activeFilter === 'products') && filteredProducts.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <Box className="w-3.5 h-3.5" />
                <span>PRODUCTS & PLATFORMS ({filteredProducts.length})</span>
              </div>
              <div className="space-y-2">
                {filteredProducts.map(prod => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/40 cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">
                          {prod.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-700 text-slate-300">
                          {prod.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {prod.tagline}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services Group */}
          {(activeFilter === 'all' || activeFilter === 'services') && filteredServices.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>ENGINEERING SERVICES ({filteredServices.length})</span>
              </div>
              <div className="space-y-2">
                {filteredServices.map(srv => (
                  <div
                    key={srv.id}
                    onClick={() => {
                      onSelectService(srv);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-emerald-500/40 cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-sm group-hover:text-emerald-300 transition-colors">
                          {srv.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-700 text-slate-300">
                          {srv.domainName}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {srv.clientOutcome}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Telemetry Nodes Group */}
          {(activeFilter === 'all' || activeFilter === 'telemetry') && filteredTelemetry.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                <Activity className="w-3.5 h-3.5" />
                <span>SYSTEM NODES ({filteredTelemetry.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredTelemetry.map(node => (
                  <div
                    key={node.id}
                    className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs flex items-center justify-between"
                  >
                    <div>
                      <div className="text-white font-medium">{node.name}</div>
                      <div className="text-slate-400 text-[10px]">{node.region}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-emerald-400 font-mono font-bold">{node.latencyMs}ms</span>
                      <div className="text-[9px] text-slate-500">{node.uptime}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {filteredProducts.length === 0 && filteredServices.length === 0 && filteredTelemetry.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              <Terminal className="w-8 h-8 mx-auto mb-2 text-slate-600" />
              <p className="text-sm">No systems found matching "{query}".</p>
              <p className="text-xs mt-1">Try searching "CRM", "AI", "Mobile", "Riyadh", or "Broadcast".</p>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>SAMX Autonomous Discovery</span>
          <span>Source: Official System Database</span>
        </div>
      </div>
    </div>
  );
};
