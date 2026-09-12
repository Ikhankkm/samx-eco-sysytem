import React, { useState } from 'react';
import { 
  Box, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Smartphone, 
  Database, 
  ArrowRight, 
  X,
  Radio,
  SlidersHorizontal,
  Workflow
} from 'lucide-react';
import { SAMX_PRODUCTS } from '../data/samxData';
import { ProductItem, ProductCategory } from '../types';

interface ProductHubProps {
  onOpenConsultation: () => void;
  onSelectProductItem?: (product: ProductItem) => void;
}

export const ProductHub: React.FC<ProductHubProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const categories = ['ALL', 'Mobile Solutions', 'Business Systems', 'AI Automation', 'Developer Tools'];

  const filteredProducts = selectedCategory === 'ALL'
    ? SAMX_PRODUCTS
    : SAMX_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section 
      id="products-hub" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#05070B] border-b border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
              <Box className="w-3.5 h-3.5" />
              <span>DATABASE-DRIVEN PLATFORMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              SAMX Products Hub
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
              Engineered software products built to eliminate manual friction, replace fragile SaaS webs, and provide owned enterprise infrastructure.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800/80 hover:border-cyan-500/50 p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,242,254,0.1)] flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-slate-800 text-cyan-300 border border-slate-700">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[10px] font-mono text-emerald-300 font-semibold">
                      STATUS: {product.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-cyan-400 mt-1">
                  {product.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Metrics Banner */}
                <div className="grid grid-cols-3 gap-2 my-6 p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80 font-mono">
                  {product.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-[10px] text-slate-500">{m.label}</div>
                      <div className="text-sm sm:text-base font-bold text-white mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {product.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/60 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(product)}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Inspect Architecture & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-mono text-xs transition-colors cursor-pointer"
                >
                  Deploy
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* PRODUCT SPECIFICATION MODAL */}
        {activeModalProduct && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
            onClick={() => setActiveModalProduct(null)}
          >
            <div 
              className="w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Modal Bar */}
              <div className="flex items-start justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    {activeModalProduct.category} // {activeModalProduct.status}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    {activeModalProduct.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1">
                    {activeModalProduct.tagline}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(null)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Problem vs Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-red-950/20 border border-red-900/40">
                  <span className="text-xs font-mono font-bold text-red-400 uppercase block mb-1">
                    Enterprise Problem
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeModalProduct.problem}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/40">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase block mb-1">
                    SAMX Solution
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeModalProduct.solution}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Core Architectural Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProduct.features.map((feat, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-200 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrations & Tech Stack */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 font-mono text-xs">
                <div>
                  <span className="text-slate-500 block mb-1">ENTERPRISE INTEGRATIONS:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProduct.integrations.map((intg, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
                        {intg}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">CORE TECH STACK:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProduct.techStack.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-mono">
                  Riyadh HQ Deployment Active
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/966580251349?text=Hello%20SAMX,%20we%20want%20to%20review%20architecture%20and%20pricing%20for%20${encodeURIComponent(activeModalProduct.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono uppercase tracking-wider"
                  >
                    Direct Ingestion (+966)
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
