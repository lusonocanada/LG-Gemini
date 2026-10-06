import { useEffect, useState, type ReactNode } from 'react';
import { motion, AnimatePresence, useDragControls } from 'motion/react';
import { X } from 'lucide-react';
import { useDialog } from '../hooks/useDialog';
import { useMotionPreference } from '../hooks/useMotionPreference';
import LGChromaticBar from './LGChromaticBar';

interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow?: string;
  accent?: string;
  /** Em telas grandes o painel vira um modal centralizado; no mobile é sempre um drawer inferior. */
  desktopModal?: boolean;
  children: ReactNode;
}

const desktopQuery = '(min-width: 1024px)';

/**
 * Drawer inferior para detalhes no mobile: abre sobre o conteúdo, na zona do polegar,
 * em vez de trocar um painel fora da área visível. Fecha por botão, toque no fundo,
 * Escape ou arrastando a alça para baixo.
 */
export default function BottomSheet({ open, onClose, title, eyebrow, accent = '#008CD2', desktopModal = false, children }: BottomSheetProps) {
  const reduced = useMotionPreference();
  const dragControls = useDragControls();
  const panelRef = useDialog(open, onClose);
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(desktopQuery).matches);

  useEffect(() => {
    const media = window.matchMedia(desktopQuery);
    const update = () => setIsDesktop(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  // Sem modo desktop, o drawer só existe abaixo de lg: fecha se a tela crescer com ele aberto.
  useEffect(() => {
    if (open && isDesktop && !desktopModal) onClose();
  }, [open, isDesktop, desktopModal, onClose]);

  const asModal = desktopModal && isDesktop;
  const hidden = asModal ? { opacity: 0, y: 24, scale: 0.98 } : { y: '100%' };

  return (
    <AnimatePresence>
      {open && (
        <div
          className={`fixed inset-0 z-[220] flex justify-center ${asModal ? 'items-center p-6' : 'items-end'}`}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#071321]/60 backdrop-blur-sm"
          />

          <motion.div
            ref={panelRef}
            tabIndex={-1}
            initial={reduced ? false : hidden}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : hidden}
            transition={reduced ? { duration: 0 } : { type: 'spring', damping: 32, stiffness: 320 }}
            drag={asModal || reduced ? false : 'y'}
            dragListener={false}
            dragControls={dragControls}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 110 || info.velocity.y > 600) onClose();
            }}
            className={`relative w-full flex flex-col bg-white text-[#0F294A] overflow-hidden outline-none ${
              asModal
                ? 'max-w-3xl max-h-[88vh] rounded-3xl shadow-2xl'
                : 'max-h-[92dvh] rounded-t-[28px] shadow-[0_-24px_70px_rgba(7,19,33,.28)]'
            }`}
          >
            <LGChromaticBar size="xs" />

            <div
              className={`shrink-0 border-b border-slate-200/80 bg-white ${asModal ? '' : 'touch-none cursor-grab active:cursor-grabbing'}`}
              onPointerDown={event => { if (!asModal) dragControls.start(event); }}
            >
              {!asModal && <div className="mx-auto mt-2.5 h-1.5 w-11 rounded-full bg-slate-300" aria-hidden="true" />}
              <div className="flex items-center justify-between gap-4 px-5 sm:px-7 pt-3 pb-3.5">
                <div className="min-w-0">
                  {eyebrow && (
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: accent }}>
                      {eyebrow}
                    </span>
                  )}
                  <span className="block text-base font-black leading-snug text-[#0F294A] truncate">{title}</span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  onPointerDown={event => event.stopPropagation()}
                  className="w-10 h-10 shrink-0 rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0] flex items-center justify-center text-[#0F294A] transition-colors cursor-pointer"
                  aria-label="Fechar"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-7 pt-5 pb-[calc(1.75rem+env(safe-area-inset-bottom))]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
