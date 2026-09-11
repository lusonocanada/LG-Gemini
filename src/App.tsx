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
        {/* A abertura existe sozinha para que nenhuma animação do hero rode escondida atrás dela. */}
        {showSplash ? (
          <SplashScreen onComplete={finishSplash} />
        ) : (
          <div className="presentation-content">
            <Header onOpenCvModal={() => setShowCvModal(true)} />

            <main>
              <Hero onOpenCvModal={() => setShowCvModal(true)} />
              <HRVision />
              <Metrics />
              <Trajetoria />
              <SelectedCases />
              <WorkingMethodology />
              <ExecutiveFit />
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
