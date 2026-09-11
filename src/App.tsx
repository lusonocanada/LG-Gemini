import { useState, useCallback } from 'react';
import { MotionConfig } from 'motion/react';
import { useMotionPreference } from './hooks/useMotionPreference';
import Header from './components/Header';
import Hero from './components/Hero';
import HRVision from './components/HRVision';
import Metrics from './components/Metrics';
import Trajetoria from './components/Trajetoria';
import SelectedCases from './components/SelectedCases';
import WorkingMethodology from './components/WorkingMethodology';
import ExecutiveFit from './components/ExecutiveFit';
import WhyLG from './components/WhyLG';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ResumeDrawer from './components/ResumeDrawer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showCvModal, setShowCvModal] = useState(false);

  const reduced = useMotionPreference();
  const closeCv = useCallback(() => setShowCvModal(false), []);
  const finishSplash = useCallback(() => setShowSplash(false), []);

  return (
    <MotionConfig reducedMotion="user" transition={reduced ? { duration: 0, delay: 0 } : undefined}>
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] relative selection:bg-[#008CD2] selection:text-white font-sans antialiased">

      {/* 00. Breve abertura editorial com constelação de partículas */}

        {showSplash && <SplashScreen onComplete={finishSplash} />}


      {/* 01. Navegação Fixa com Identidade Diego Moraes e Destino Discreto LG */}
      <div className="presentation-content" inert={showSplash}>
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

        {/* 7. Áreas de maior aderência com a experiência (#aderencia) */}
        <ExecutiveFit />

        {/* 8. Por que a LG faz sentido para Diego — e o que Diego pode fazer acontecer (#porque-lg) */}
        <WhyLG />

        {/* 8. CTA final e fechamento */}
        <ClosingCTA onOpenCvModal={() => setShowCvModal(true)} />
      </main>

      {/* Rodapé com drawer discreto de fontes consultadas e declaração independente */}
      <Footer onOpenCvModal={() => setShowCvModal(true)} />

      </div>

      {/* Perfil Executivo e CV Completo (Drawer / Impressão PDF) */}
      <ResumeDrawer
        isOpen={showCvModal}
        onClose={closeCv}
      />
    </div>
    </MotionConfig>
  );
}
