import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ExplodedCore3D } from './components/ExplodedCore3D';
import { FloatingMobileShowcase } from './components/FloatingMobileShowcase';
import { ConduitPipelineSimulator } from './components/ConduitPipelineSimulator';
import { ProductHub } from './components/ProductHub';
import { ServicesMatrix } from './components/ServicesMatrix';
import { OperationsCenter } from './components/OperationsCenter';
import { RoiCalculator } from './components/RoiCalculator';
import { ConsultationTerminal } from './components/ConsultationTerminal';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { Locale, ProductItem, ServiceItem } from './types';

export default function App() {
  const [currentLocale, setCurrentLocale] = useState<Locale>('en');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState<boolean>(false);

  // Set document direction for Arabic and Urdu
  useEffect(() => {
    const isRtl = currentLocale === 'ar' || currentLocale === 'ur';
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLocale);
  }, [currentLocale]);

  const handleSelectProduct = (product: ProductItem) => {
    const section = document.getElementById('products-hub');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    const section = document.getElementById('services-matrix');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Global Navigation Header */}
      <Header
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenConsultation={() => setConsultationModalOpen(true)}
      />

      {/* Main Experience Stream */}
      <main>
        {/* Hero Section */}
        <HeroSection
          currentLocale={currentLocale}
          onOpenConsultation={() => setConsultationModalOpen(true)}
          onOpenSearch={() => setSearchOpen(true)}
        />

        {/* REFERENCE 2 LOCK: One Ecosystem Exploded Modular Core */}
        <ExplodedCore3D />

        {/* REFERENCE 1 LOCK: Mobile CRM Solutions / SellsVora 3D Spatial Float */}
        <FloatingMobileShowcase />

        {/* REFERENCE 3 LOCK: AI Sales & Neural Pipeline Conduit Simulator */}
        <ConduitPipelineSimulator />

        {/* Database-driven Product Hub */}
        <ProductHub 
          onOpenConsultation={() => setConsultationModalOpen(true)} 
        />

        {/* Capability Services Blueprint & The Continuum Principle */}
        <ServicesMatrix 
          onOpenConsultation={() => setConsultationModalOpen(true)} 
        />

        {/* Real-time Infrastructure Operations Center */}
        <OperationsCenter />

        {/* Enterprise Transformation & ROI Calculator */}
        <RoiCalculator 
          onOpenConsultation={() => setConsultationModalOpen(true)} 
        />

        {/* Consultation Terminal (Embedded Ingestion Form) */}
        <ConsultationTerminal isModal={false} />
      </main>

      {/* Architectural Footer */}
      <Footer
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        onOpenConsultation={() => setConsultationModalOpen(true)}
      />

      {/* Global Search Modal (⌘K) */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={handleSelectProduct}
        onSelectService={handleSelectService}
      />

      {/* Quick Ingestion Terminal Modal */}
      {consultationModalOpen && (
        <ConsultationTerminal
          isModal={true}
          isOpen={consultationModalOpen}
          onClose={() => setConsultationModalOpen(false)}
        />
      )}

    </div>
  );
}
