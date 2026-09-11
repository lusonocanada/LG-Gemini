import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import HRVision from './components/HRVision';
import Metrics from './components/Metrics';
import Trajetoria from './components/Trajetoria';
import SelectedCases from './components/SelectedCases';
import WorkingMethodology from './components/WorkingMethodology';
import WhyLG from './components/WhyLG';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ResumeDrawer from './components/ResumeDrawer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showCvModal, setShowCvModal] = useState(false);

  // Lock scroll while splash or CV modal is active
  useEffect(() => {
    if (showSplash || showCvModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSplash, showCvModal]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] relative selection:bg-[#008CD2] selection:text-white font-sans antialiased">
      
      {/* 00. Breve abertura editorial com constelação de partículas */}
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {/* 01. Navegação Fixa com Identidade Diego Moraes e Destino Discreto LG */}
      <Header onOpenCvModal={() => setShowCvModal(true)} />

      {/* Main Content Sections — Nova Arquitetura Obrigatória */}
      <main>
        {/* 1. Hero: Diego em uma frase inesquecível */}
        <Hero onOpenCvModal={() => setShowCvModal(true)} />

        {/* 2. A tese profissional: como Diego transforma RH (#visao) */}
        <HRVision />

        {/* 3. Provas de resultado (#resultados) */}
        <Metrics />

        {/* 4. Trajetória e repertório (#trajetoria) */}
        <Trajetoria />

        {/* 5. Cases selecionados (#cases) */}
        <SelectedCases />

        {/* 6. O método de entrega (#metodo) */}
        <WorkingMethodology />

        {/* 7. Por que a LG faz sentido para Diego — e o que Diego pode fazer acontecer (#porque-lg) */}
        <WhyLG />

        {/* 8. CTA final e fechamento */}
        <ClosingCTA onOpenCvModal={() => setShowCvModal(true)} />
      </main>

      {/* Rodapé com drawer discreto de fontes consultadas e declaração independente */}
      <Footer onOpenCvModal={() => setShowCvModal(true)} />

      {/* Perfil Executivo e CV Completo (Drawer / Impressão PDF) */}
      <ResumeDrawer 
        isOpen={showCvModal} 
        onClose={() => setShowCvModal(false)} 
      />
    </div>
  );
}
