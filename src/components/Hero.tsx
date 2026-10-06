import { useMotionPreference } from '../hooks/useMotionPreference';
import { motion } from 'motion/react';
import { ArrowRight, FileText } from 'lucide-react';
import HeroExecutivePhoto from './HeroExecutivePhoto';

interface HeroProps {
  onOpenCvModal: () => void;
}

const stats = [
  { value: '18 anos', label: 'em RH no Brasil e no Canadá', color: '#1B4E9B' },
  { value: 'R$ 10 mi', label: 'de redução de custo em Talent Acquisition', color: '#E53924' },
  { value: '−55%', label: 'no ciclo de admissão (22 → 10 dias)', color: '#008CD2' },
  { value: '~R$ 6 bi', label: 'em custos de pessoas sob budget e forecast', color: '#F58220' },
];

export default function Hero({ onOpenCvModal }: HeroProps) {
  const reduced = useMotionPreference();

  return (
    <section className="hero-cinematic relative pt-24 sm:pt-32 pb-14 lg:pb-20 bg-white text-[#0F294A] border-b border-slate-200 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0F294A 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="hero-light-sweep pointer-events-none absolute inset-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
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
              Construí minha trajetória dentro do RH — planejamento, PMO, Talent Acquisition, People Analytics, operações e implantação de sistemas — no Santander, no Banco Safra e no Canadá. Hoje amplio esse repertório com automação, produtos digitais e IA aplicada, sempre partindo de problemas reais de negócio e de pessoas.
            </motion.p>

            <motion.dl
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduced ? { duration: 0 } : { duration: 0.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200"
            >
              {stats.map(item => (
                <div key={item.value} className="bg-white p-4 border-t-4" style={{ borderTopColor: item.color }}>
                  <dt className="sr-only">{item.label}</dt>
                  <dd className="text-xl sm:text-2xl font-black tracking-tight text-[#0F294A] leading-none">{item.value}</dd>
                  <dd className="text-[11px] sm:text-xs text-slate-600 leading-snug mt-1.5" aria-hidden="true">{item.label}</dd>
                </div>
              ))}
            </motion.dl>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduced ? { duration: 0 } : { duration: 0.55, delay: 2.04 }}
              className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 pt-1"
            >
              <a
                href="#cases"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#0F294A] hover:bg-[#1B4E9B] text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer border border-[#008CD2]/40 hover:border-[#008CD2] rounded-full shadow-md hover:shadow-lg"
              >
                <span>Ver cases e resultados</span>
                <ArrowRight size={15} className="text-[#FFC20E]" />
              </a>

              <button
                onClick={event => { event.currentTarget.focus(); onOpenCvModal(); }}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white hover:bg-slate-50 text-[#0F294A] border border-slate-300 hover:border-slate-400 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer rounded-full shadow-xs hover:shadow-sm"
              >
                <FileText size={15} className="text-[#008CD2]" />
                <span>Ver currículo</span>
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
