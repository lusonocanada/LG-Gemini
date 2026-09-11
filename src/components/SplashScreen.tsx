import { useState, useEffect, useRef, useCallback } from 'react';
import { useMotionPreference } from '../hooks/useMotionPreference';
import { useDialog } from '../hooks/useDialog';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, FastForward } from 'lucide-react';
import LGLogo from './LGLogo';

interface SplashScreenProps {
  onFinish?: () => void;
  onComplete?: () => void;
}

export default function SplashScreen({ onFinish, onComplete }: SplashScreenProps) {
  const reduced = useMotionPreference();
  const [step, setStep] = useState<1 | 2>(1);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleDismiss = useCallback(() => {
    if (onFinish) onFinish();
    if (onComplete) onComplete();
  }, [onFinish, onComplete]);
  const dialogRef = useDialog(true, handleDismiss);

  useEffect(() => {
    if (reduced) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Reveal context at 1.1s
    const timerStep2 = setTimeout(() => {
      setStep(2);
    }, 1100);

    // Auto complete at 3.2s (max 3.5s)
    const timerFinish = setTimeout(() => {
      handleDismiss();
    }, 3200);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timerStep2);
      clearTimeout(timerFinish);
    };
  }, [reduced, handleDismiss]);

  // Subtle constellation particle canvas
  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number; alpha: number }> = [];
    const count = 75;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 15, 26, 0.35)';
      ctx.fillRect(0, 0, width, height);

      // Connect particles if close
      for (let i = 0; i < count; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.fillStyle = `rgba(224, 242, 254, ${p1.alpha})`;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < count; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 110) {
            ctx.strokeStyle = `rgba(0, 140, 210, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [reduced]);

  return (
    <>
        <motion.div
          ref={dialogRef}
          role="dialog" aria-modal="true" aria-labelledby="splash-title" tabIndex={-1}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[300] bg-[#0A0F1A] text-white select-none overflow-y-auto flex flex-col justify-between"
        >
          {!reduced && <canvas aria-hidden="true" ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />}

          {/* Top Bar */}
          <div className="relative z-10 w-full h-16 flex items-center justify-between px-6 sm:px-12">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-slate-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008CD2]" />
              <span>Apresentação profissional executiva</span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDismiss();
              }}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-4 py-1.5 border border-slate-700 bg-[#14263D] hover:bg-[#1B4E9B] rounded-full transition-colors cursor-pointer"
            >
              <span>Pular</span>
              <FastForward size={13} />
            </button>
          </div>

          {/* Central Focus: Diego Moraes first */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center max-w-3xl mx-auto">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#00A3E0] uppercase block">
                REPERTÓRIO · MÉTODO · TRANSFORMAÇÃO
              </span>

              <h1 id="splash-title" className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
                DIEGO MORAES
              </h1>

              <p className="text-sm sm:text-base text-slate-300 font-normal tracking-wide max-w-xl mx-auto">
                Transformação de RH, Implantação e IA Aplicada
              </p>
            </motion.div>

            {/* Step 2: The recipient (LG Lugar de Gente) appears understated and respectful */}
            <AnimatePresence>
              {(reduced || step >= 2) && (
                <motion.div
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 }}
                  className="mt-10 pt-8 border-t border-slate-800 flex flex-col items-center gap-3"
                >
                  <span className="text-[11px] tracking-wider uppercase text-slate-400">
                    Apresentação direcionada à
                  </span>

                  {/* Pristine official LG Logo inside clear container on dark */}
                  <LGLogo onDark size="md" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Bar with CTA */}
          <div className="relative z-10 w-full h-20 flex items-center justify-center px-6 pb-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.stopPropagation();
                handleDismiss();
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#008CD2] hover:bg-[#0072CE] text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <span>Entrar na apresentação</span>
              <ChevronRight size={14} />
            </motion.button>
          </div>
        </motion.div>
    </>
  );
}
