import { motion } from 'motion/react';
import { ArrowRight, FileText, CheckCircle2, TrendingUp, Award, Globe } from 'lucide-react';
import HeroExecutivePhoto from './HeroExecutivePhoto';

interface HeroProps {
  onOpenCvModal: () => void;
}

export default function Hero({ onOpenCvModal }: HeroProps) {
  return (
    <section className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 bg-white text-[#0F294A] border-b border-slate-200 overflow-hidden">
      
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0F294A 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Editorial Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 sm:mb-12 border-b border-slate-200/80">
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
              APRESENTAÇÃO EXECUTIVA · TRANSFORMAÇÃO DE RH, IMPLANTAÇÃO E IA APLICADA
            </span>
          </div>
        </div>

        {/* Main Hero Layout: Asymmetric Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold Headline & Executive Positioning */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F294A] tracking-tight leading-[1.1]"
              >
                Eu conheço a transformação pelo lado de quem vive a operação.{' '}
                <span className="text-[#008CD2] block mt-2">
                  Agora, quero ajudar a LG a fazer cada entrega acontecer.
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl"
            >
              Construí minha trajetória dentro de operações complexas de RH. Fui o cliente que precisou organizar prioridades, implantar sistemas, conectar áreas, defender decisões, treinar pessoas e fazer uma mudança funcionar depois do go-live. Hoje, transformo esse repertório em método para conectar tecnologia, experiência e resultado.
            </motion.p>

            {/* Quatro provas breves */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
            >
              <div className="p-4 rounded-2xl liquid-glass-card border-l-4 border-l-[#1B4E9B] flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#1B4E9B]/10 flex items-center justify-center shrink-0">
                  <Award size={18} className="text-[#1B4E9B]" />
                </div>
                <span className="text-xs font-bold text-[#0F294A] leading-snug">
                  15+ anos em RH, projetos e transformação
                </span>
              </div>

              <div className="p-4 rounded-2xl liquid-glass-card border-l-4 border-l-[#008CD2] flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#008CD2]/10 flex items-center justify-center shrink-0">
                  <TrendingUp size={18} className="text-[#008CD2]" />
                </div>
                <span className="text-xs font-bold text-[#0F294A] leading-snug">
                  R$ 10 milhões de economia anual aproximada em Talent Acquisition
                </span>
              </div>

              <div className="p-4 rounded-2xl liquid-glass-card border-l-4 border-l-[#00A3E0] flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#00A3E0]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} className="text-[#00A3E0]" />
                </div>
                <span className="text-xs font-bold text-[#0F294A] leading-snug">
                  60% de redução aproximada no ciclo de admissão digital
                </span>
              </div>

              <div className="p-4 rounded-2xl liquid-glass-card border-l-4 border-l-[#F58220] flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#F58220]/10 flex items-center justify-center shrink-0">
                  <Globe size={18} className="text-[#F58220]" />
                </div>
                <span className="text-xs font-bold text-[#0F294A] leading-snug">
                  Brasil + Canadá: experiência corporativa e multicultural
                </span>
              </div>
            </motion.div>

            {/* Actions: High-Contrast Executive Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#trajetoria"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0F294A] hover:bg-[#1B4E9B] text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer border border-[#008CD2]/40 hover:border-[#008CD2] rounded-full shadow-md hover:shadow-lg"
              >
                <span>Conheça minha trajetória</span>
                <ArrowRight size={15} className="text-[#FFC20E]" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white hover:bg-slate-50 text-[#0F294A] border border-slate-300 hover:border-slate-400 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer rounded-full shadow-xs hover:shadow-sm"
              >
                <FileText size={15} className="text-[#008CD2]" />
                <span>Ver currículo executivo</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: High-Impact Visual Composition with Real Executive Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
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
