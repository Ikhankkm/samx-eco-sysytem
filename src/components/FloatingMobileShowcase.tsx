import React, { useState } from 'react';
import { 
  Smartphone, 
  Star, 
  MoreHorizontal, 
  ShoppingBag, 
  Wifi, 
  Battery, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Sliders,
  Send,
  RefreshCw,
  QrCode
} from 'lucide-react';

interface FloatingCardItem {
  id: string;
  category: string;
  title: string;
  rating: string;
  ratingCount: number;
  price: string;
  stock: number;
  color: string;
  depthOffset: string;
  accent: string;
}

export const FloatingMobileShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'catalog' | 'pos' | 'field'>('catalog');
  const [selectedCard, setSelectedCard] = useState<string | null>('card-fashion');
  const [tilt, setTilt] = useState({ x: -6, y: 12 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x: y - 5, y: x + 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: -6, y: 12 });
  };

  const floatingCards: FloatingCardItem[] = [
    {
      id: 'card-fashion',
      category: 'Fashion',
      title: 'AeroGlide Ultra Runner',
      rating: '5.0',
      ratingCount: 142,
      price: '480 SAR',
      stock: 64,
      color: 'from-amber-500/20 to-orange-500/10',
      depthOffset: '-translate-x-12 -translate-y-20 z-30',
      accent: 'text-amber-400',
    },
    {
      id: 'card-electronic',
      category: 'Electronic',
      title: 'SonicPro ANC Earbuds',
      rating: '4.9',
      ratingCount: 380,
      price: '620 SAR',
      stock: 128,
      color: 'from-cyan-500/20 to-blue-500/10',
      depthOffset: 'translate-x-14 -translate-y-8 z-20',
      accent: 'text-cyan-400',
    },
    {
      id: 'card-beauty',
      category: 'Beauty',
      title: 'Oud Mystique Parfum 100ml',
      rating: '5.0',
      ratingCount: 95,
      price: '890 SAR',
      stock: 42,
      color: 'from-sky-500/20 to-indigo-500/10',
      depthOffset: '-translate-x-16 translate-y-16 z-30',
      accent: 'text-sky-400',
    },
    {
      id: 'card-home',
      category: 'Home',
      title: 'Nordic Sculpt Armchair',
      rating: '4.8',
      ratingCount: 54,
      price: '1,450 SAR',
      stock: 18,
      color: 'from-emerald-500/20 to-teal-500/10',
      depthOffset: 'translate-x-12 translate-y-28 z-20',
      accent: 'text-emerald-400',
    },
  ];

  return (
    <div 
      id="mobile-spatial-showcase"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#05070B] via-[#080d1a] to-[#05070B] border-b border-slate-800/80 overflow-hidden"
    >
      {/* Ambient Floor Lights and Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-36 bg-blue-500/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>REFERENCE-LOCK // 3D MOBILE SPATIAL SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            SellsVora Mobile CRM & Commerce
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Directly translating high-velocity mobile CRM, catalog lookup, and spatial 3D product previews 
            into production-grade field applications for retail, wholesale, and distribution enterprises.
          </p>

          {/* Mode Selector */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl">
            {(['catalog', 'pos', 'field'] as const).map(tab => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab === 'catalog' ? 'Spatial 3D Float View' : tab === 'pos' ? 'Mobile POS Stream' : 'Field Route Check-in'}
              </button>
            ))}
          </div>
        </div>

        {/* The 3D Floating Stage (Reference 1 Faithful Implementation) */}
        <div 
          className="relative min-h-[640px] sm:min-h-[720px] rounded-3xl bg-[#090D16]/90 border border-slate-800/90 p-4 sm:p-12 shadow-2xl flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing perspective-1200"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Studio Floor Specular Circle & Shadow */}
          <div className="absolute bottom-6 sm:bottom-12 w-80 sm:w-96 h-28 rounded-[100%] bg-cyan-500/10 blur-xl pointer-events-none"></div>
          <div className="absolute bottom-8 sm:bottom-14 w-64 sm:w-72 h-16 rounded-[100%] bg-black/80 blur-lg pointer-events-none"></div>

          {/* SellsVora Brand Badge (Upper Left matching Reference 1) */}
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-30 p-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-xl shadow-2xl flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 to-cyan-400 p-0.5 shadow-lg">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-extrabold text-white text-base">
                S
              </div>
            </div>
            <div>
              <span className="font-extrabold text-white text-sm tracking-tight block">SellsVora</span>
              <span className="text-[10px] font-mono text-cyan-400">Mobile CRM & Commerce</span>
            </div>
          </div>

          {/* Interactive Tilt Hint */}
          <div className="absolute bottom-6 right-6 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400">
            <RefreshCw className="w-3 h-3 text-cyan-400 animate-spin" />
            <span>Interactive 3D Stage // Move cursor to tilt</span>
          </div>

          {/* Central 3D Container with Dynamic Perspective Transform */}
          <div 
            className="relative preserve-3d transition-transform duration-300 ease-out flex items-center justify-center"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            {/* THE 3D TITANIUM PHONE CHASSIS (Focal Center) */}
            <div className="relative w-72 sm:w-80 h-[520px] sm:h-[580px] rounded-[48px] bg-gradient-to-b from-slate-700 via-slate-900 to-black p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-2 border-slate-600/60 preserve-3d">
              
              {/* Phone Outer Rim Specular Highlight */}
              <div className="absolute inset-0 rounded-[46px] border border-cyan-400/20 pointer-events-none"></div>

              {/* Phone Inner Display Screen */}
              <div className="relative w-full h-full rounded-[40px] bg-[#0A0E17] overflow-hidden border border-slate-800 flex flex-col justify-between p-4">
                
                {/* Dynamic Island / Status Bar */}
                <div className="flex items-center justify-between px-3 pt-1 text-slate-300 text-xs">
                  <span className="font-mono text-[11px] font-bold">09:41</span>
                  <div className="w-20 h-5 rounded-full bg-black border border-slate-800 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-900 mr-1"></div>
                    <span className="text-[8px] font-mono text-cyan-400">SAMX</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Wifi className="w-3.5 h-3.5" />
                    <Battery className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Internal App HUD */}
                <div className="mt-4 px-2 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-cyan-400">RIYADH STORE #04</div>
                      <div className="text-base font-bold text-white">Live Catalog</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-mono text-emerald-300">
                      ONLINE
                    </span>
                  </div>

                  {/* Search Bar in Phone */}
                  <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Scan barcode or search...</span>
                    <QrCode className="w-3.5 h-3.5 text-cyan-400" />
                  </div>

                  {/* Mini Feed in phone body */}
                  <div className="space-y-2 pt-2">
                    <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                      <div className="text-[11px]">
                        <span className="text-white font-semibold block">Today's Orders</span>
                        <span className="text-slate-400">48 Invoiced</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-400">38,420 SAR</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                      <div className="text-[11px]">
                        <span className="text-white font-semibold block">Sync Status</span>
                        <span className="text-slate-400">ZATCA e-Invoice</span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-300">100% VALID</span>
                    </div>
                  </div>
                </div>

                {/* Bottom App Bar */}
                <div className="p-2 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-around text-slate-400">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">CATALOG</span>
                  <span className="text-[10px] font-mono hover:text-white">ORDERS</span>
                  <span className="text-[10px] font-mono hover:text-white">CLIENTS</span>
                  <span className="text-[10px] font-mono hover:text-white">SYNC</span>
                </div>

              </div>
            </div>

            {/* FLOATING 3D GLASS CARDS POPPING OUT INTO THE Z-AXIS (Direct Reference 1 Composition) */}
            
            {/* Card 1: FASHION (Upper Left) */}
            <div 
              onClick={() => setSelectedCard('card-fashion')}
              className={`absolute -top-10 -left-8 sm:-top-14 sm:-left-24 w-36 sm:w-44 p-3 rounded-2xl glass-card-3d cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedCard === 'card-fashion' ? 'ring-2 ring-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.4)] z-40' : 'z-30'
              }`}
              style={{ transform: 'translateZ(60px)' }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-white">Fashion</span>
                <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" />
              </div>
              {/* Footwear Graphic Simulation */}
              <div className="w-full h-20 rounded-xl bg-gradient-to-tr from-slate-900 via-amber-950/40 to-slate-800 border border-amber-500/20 flex flex-col items-center justify-center p-2 mb-2">
                <ShoppingBag className="w-7 h-7 text-amber-400 mb-1" />
                <span className="text-[9px] font-mono text-amber-200">AeroGlide Sport</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span className="font-bold font-mono">5.0</span>
                </div>
                <span className="font-mono text-slate-300 text-[10px]">480 SAR</span>
              </div>
            </div>

            {/* Card 2: ELECTRONIC (Mid Right) */}
            <div 
              onClick={() => setSelectedCard('card-electronic')}
              className={`absolute top-12 -right-8 sm:top-8 sm:-right-24 w-36 sm:w-44 p-3 rounded-2xl glass-card-3d cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedCard === 'card-electronic' ? 'ring-2 ring-cyan-400 shadow-[0_0_30px_rgba(0,242,254,0.4)] z-40' : 'z-30'
              }`}
              style={{ transform: 'translateZ(90px)' }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-white">Electronic</span>
                <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" />
              </div>
              {/* Earbuds Graphic Simulation */}
              <div className="w-full h-20 rounded-xl bg-gradient-to-tr from-slate-900 via-cyan-950/40 to-slate-800 border border-cyan-500/20 flex flex-col items-center justify-center p-2 mb-2">
                <Sparkles className="w-7 h-7 text-cyan-400 mb-1" />
                <span className="text-[9px] font-mono text-cyan-200">SonicPro ANC</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1 text-cyan-400">
                  <Star className="w-3 h-3 fill-cyan-400" />
                  <span className="font-bold font-mono">4.9</span>
                </div>
                <span className="font-mono text-slate-300 text-[10px]">620 SAR</span>
              </div>
            </div>

            {/* Card 3: BEAUTY (Lower Left) */}
            <div 
              onClick={() => setSelectedCard('card-beauty')}
              className={`absolute bottom-16 -left-6 sm:bottom-12 sm:-left-20 w-36 sm:w-44 p-3 rounded-2xl glass-card-3d cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedCard === 'card-beauty' ? 'ring-2 ring-sky-400 shadow-[0_0_30px_rgba(14,165,233,0.4)] z-40' : 'z-30'
              }`}
              style={{ transform: 'translateZ(110px)' }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-white">Beauty</span>
                <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" />
              </div>
              {/* Perfume Bottle Graphic Simulation */}
              <div className="w-full h-20 rounded-xl bg-gradient-to-tr from-slate-900 via-sky-950/40 to-slate-800 border border-sky-500/20 flex flex-col items-center justify-center p-2 mb-2">
                <div className="w-5 h-8 rounded-sm bg-gradient-to-b from-sky-300 to-sky-600 shadow-md mb-1"></div>
                <span className="text-[9px] font-mono text-sky-200">Oud Mystique</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1 text-sky-400">
                  <Star className="w-3 h-3 fill-sky-400" />
                  <span className="font-bold font-mono">5.0</span>
                </div>
                <span className="font-mono text-slate-300 text-[10px]">890 SAR</span>
              </div>
            </div>

            {/* Card 4: HOME (Bottom Right) */}
            <div 
              onClick={() => setSelectedCard('card-home')}
              className={`absolute bottom-4 -right-6 sm:bottom-6 sm:-right-20 w-36 sm:w-44 p-3 rounded-2xl glass-card-3d cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedCard === 'card-home' ? 'ring-2 ring-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)] z-40' : 'z-30'
              }`}
              style={{ transform: 'translateZ(75px)' }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-white">Home</span>
                <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" />
              </div>
              {/* Designer Armchair Graphic Simulation */}
              <div className="w-full h-20 rounded-xl bg-gradient-to-tr from-slate-900 via-emerald-950/40 to-slate-800 border border-emerald-500/20 flex flex-col items-center justify-center p-2 mb-2">
                <Sliders className="w-7 h-7 text-emerald-400 mb-1" />
                <span className="text-[9px] font-mono text-emerald-200">Nordic Chair</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1 text-emerald-400">
                  <Star className="w-3 h-3 fill-emerald-400" />
                  <span className="font-bold font-mono">4.8</span>
                </div>
                <span className="font-mono text-slate-300 text-[10px]">1,450 SAR</span>
              </div>
            </div>

            {/* Subtle Background Floating Depth Elements (Reference 1 Depth Extension) */}
            <div 
              className="absolute -top-16 right-16 w-24 h-16 rounded-xl bg-slate-800/40 border border-slate-700/40 backdrop-blur-sm p-2 opacity-50 hidden sm:block pointer-events-none"
              style={{ transform: 'translateZ(-40px)' }}
            >
              <span className="text-[8px] font-mono text-slate-400">Headphones #09</span>
            </div>

            <div 
              className="absolute bottom-32 -left-36 w-24 h-16 rounded-xl bg-slate-800/40 border border-slate-700/40 backdrop-blur-sm p-2 opacity-40 hidden sm:block pointer-events-none"
              style={{ transform: 'translateZ(-50px)' }}
            >
              <span className="text-[8px] font-mono text-slate-400">Smart Devices</span>
            </div>

          </div>

        </div>

        {/* Selected Card Live Operational Specs */}
        {selectedCard && (
          <div className="mt-8 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white">
                    {floatingCards.find(c => c.id === selectedCard)?.title}
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">
                    Category: {floatingCards.find(c => c.id === selectedCard)?.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Live Riyadh Warehouse Stock: <span className="text-emerald-400 font-bold">{floatingCards.find(c => c.id === selectedCard)?.stock} Units</span> • 
                  Unit Price: <span className="text-white font-mono font-bold">{floatingCards.find(c => c.id === selectedCard)?.price}</span> • 
                  ZATCA E-Invoice Ready
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/966580251349?text=Hello%20SAMX,%20I%20am%20interested%20in%20deploying%20SellsVora%20Mobile%20CRM%20for%20our%20enterprise%20inventory.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Deploy via WhatsApp (+966)</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
