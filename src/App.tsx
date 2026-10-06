import { useState, useCallback } from 'react';
import { MotionConfig } from 'motion/react';
import { useMotionPreference } from './hooks/useMotionPreference';
import Header from './components/Header';
import Hero from './components/Hero';
import Trajetoria from './components/Trajetoria';
import SelectedCases from './components/SelectedCases';
import WorkingMethodology from './components/WorkingMethodology';
import WhyLG from './components/WhyLG';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ResumeDrawer from './components/ResumeDrawer';

export default function App() {
  // A abertura aparece uma vez por sessão; recarregar ou voltar à página leva direto ao conteúdo.
  const [showSplash, setShowSplash] = useState(() => {
    try { return sessionStorage.getItem('splash-seen') !== '1'; } catch { return true; }
  });
  const [showCvModal, setShowCvModal] = useState(false);

  const reduced = useMotionPreference();
  const closeCv = useCallback(() => setShowCvModal(false), []);
  const finishSplash = useCallback(() => {
    try { sessionStorage.setItem('splash-seen', '1'); } catch { /* armazenamento indisponível */ }
    setShowSplash(false);
  }, []);

  return (
    <MotionConfig reducedMotion="user" transition={reduced ? { duration: 0, delay: 0 } : undefined}>
      <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] relative selection:bg-[#008CD2] selection:text-white font-sans antialiased">
        {/* A abertura existe sozinha para que nenhuma animação do hero rode escondida atrás dela. */}
        {showSplash ? (
          <SplashScreen onComplete={finishSplash} />
        ) : (
          <div className="presentation-content">
            <Header onOpenCvModal={() => setShowCvModal(true)} />

            <main>
              <Hero onOpenCvModal={() => setShowCvModal(true)} />
              <Trajetoria />
              <SelectedCases onOpenCvModal={() => setShowCvModal(true)} />
              <WorkingMethodology />
              <WhyLG />
              <ClosingCTA onOpenCvModal={() => setShowCvModal(true)} />
            </main>

            <Footer onOpenCvModal={() => setShowCvModal(true)} />
          </div>
        )}

        <ResumeDrawer
          isOpen={showCvModal}
          onClose={closeCv}
        />
      </div>
    </MotionConfig>
  );
}
