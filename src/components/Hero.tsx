import { useMotionPreference } from '../hooks/useMotionPreference';
import { motion } from 'motion/react';
import { ArrowRight, FileText, CheckCircle2, TrendingUp, Award, Globe } from 'lucide-react';
import HeroExecutivePhoto from './HeroExecutivePhoto';

interface HeroProps {
  onOpenCvModal: () => void;
}

const proofCards = [
  { icon: Award, color: '#1B4E9B', text: '18 anos em RH, transformação, dados e tecnologia' },
  { icon: TrendingUp, color: '#008CD2', text: 'R$ 10 milhões de economia anual aproximada em Talent Acquisition' },
  { icon: CheckCircle2, color: '#00A3E0', text: '55% de redução aproximada no ciclo de admissão digital' },
  { icon: Globe, color: '#F58220', text: 'Brasil + Canadá: experiência corporativa e multicultural' },
];

export default function Hero({ onOpenCvModal }: HeroProps) {
  const reduced = useMotionPreference();

  return (
    <section className="hero-cinematic relative pt-24 sm:pt-28 pb-16 lg:pb-20 bg-white text-[#0F294A] border-b border-slate-200 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0F294A 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="hero-light-sweep pointer-events-none absolute inset-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduced ? { duration: 0 } : { duration: 0.5, delay: 0.08 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-7 sm:mb-9 border-b border-slate-200/80"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex gap-1">
              <span className="w-2.5 h-1.5 rounded-full bg-[#1B4E9B]" />
              <span className="w-2.5 h-1.5 rounded-full bg-[#008CD2]" />
              <span className="w-2.5 h-1.5 rounded-full bg-[#00A3E0]" />
              <span className="w-2.5 h-1.5 rounded-full bg-[#FFC20E]" />
              <span className="w-2.5 h-1.5 rounded-full bg-[#F58220]" />
              <span className="w-2.5 h-1.5 rounded-full bg-[#E53924]" />
              <span className="w-2.5 h-1.5 rounded-full bg-[#8A1538]" />
            </span>
            <span className="text-xs font-bold font-mono tracking-widest text-slate-600 uppercase">
              PESSOAS · PROCESSOS · DADOS · TECNOLOGIA
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5 sm:space-y-7">
            <div className="space-y-2 overflow-visible">
              <motion.h1 className="text-[2rem] sm:text-[2.4rem] lg:text-[2.75rem] xl:text-[3rem] font-black tracking-[-0.03em] leading-[1.08] max-w-[760px]">
                <motion.span
                  initial={reduced ? false : { opacity: 0, y: 24, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={reduced ? { duration: 0 } : { duration: 0.72, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[#0F294A]"
                >
                  Transformo RH conectando
                </motion.span>
                <motion.span
                  initial={reduced ? false : { opacity: 0, y: 24, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={reduced ? { duration: 0 } : { duration: 0.72, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[#0F294A]"
                >
                  <span className="text-[#1B4E9B]">pessoas, processos, dados e tecnologia.</span>
                </motion.span>
                <motion.span
                  initial={reduced ? false : { opacity: 0, y: 28, filter: 'blur(9px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={reduced ? { duration: 0 } : { duration: 0.82, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
                  className="block mt-3 text-[#008CD2]"
                >
                  Agora, quero levar esse repertório
                </motion.span>
                <motion.span
                  initial={reduced ? false : { opacity: 0, y: 28, filter: 'blur(9px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={reduced ? { duration: 0 } : { duration: 0.82, delay: 1.02, ease: [0.16, 1, 0.3, 1] }}
                  className="hero-signature block text-[#008CD2]"
                >
                  ao próximo ciclo da LG.
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduced ? { duration: 0 } : { duration: 0.6, delay: 1.35 }}
              className="text-base sm:text-[1.05rem] text-slate-700 font-normal leading-relaxed max-w-2xl"
            >
              Minha trajetória foi construída dentro do RH, conectando estratégia, operações, dados e tecnologia em ambientes complexos. Passei por planejamento, PMO, Talent Acquisition, People Analytics, transformação operacional e implantação de sistemas. Hoje amplio esse repertório com automação, produtos digitais e IA aplicada, sempre partindo de problemas reais de negócio e de pessoas.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {proofCards.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    initial={reduced ? false : { opacity: 0, y: 16, scale: 0.985 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={reduced ? { duration: 0 } : { duration: 0.46, delay: 1.58 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="p-4 rounded-2xl liquid-glass-card border-l-4 flex items-center gap-3.5"
                    style={{ borderLeftColor: item.color }}
                  >
                    <motion.div
                      initial={reduced ? false : { scale: 0.72, rotate: -8 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={reduced ? { duration: 0 } : { duration: 0.45, delay: 1.68 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}14` }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </motion.div>
                    <span className="text-xs font-bold text-[#0F294A] leading-snug">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduced ? { duration: 0 } : { duration: 0.55, delay: 2.04 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <a
                href="#trajetoria"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0F294A] hover:bg-[#1B4E9B] text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer border border-[#008CD2]/40 hover:border-[#008CD2] rounded-full shadow-md hover:shadow-lg"
              >
                <span>Conheça minha trajetória</span>
                <ArrowRight size={15} className="text-[#FFC20E]" />
              </a>

              <button
                onClick={event => { event.currentTarget.focus(); onOpenCvModal(); }}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white hover:bg-slate-50 text-[#0F294A] border border-slate-300 hover:border-slate-400 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer rounded-full shadow-xs hover:shadow-sm"
              >
                <FileText size={15} className="text-[#008CD2]" />
                <span>Ver currículo executivo</span>
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.965, x: 18 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={reduced ? { duration: 0 } : { duration: 1.05, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <HeroExecutivePhoto />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
