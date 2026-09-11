import { motion } from 'motion/react';
import { ArrowRight, FileText, CheckCircle2, MapPin, Award, TrendingUp, Sparkles } from 'lucide-react';
import LGLogo from './LGLogo';
import LGChromaticBar from './LGChromaticBar';
import HeroExecutivePhoto from './HeroExecutivePhoto';

interface HeroProps {
  onOpenCvModal: () => void;
}

export default function Hero({ onOpenCvModal }: HeroProps) {
  const tickerItems = [
    { text: 'SANTANDER BRASIL (10 ANOS)', color: '#E53924' },
    { text: 'BANCO SAFRA (PMO DE RH)', color: '#1B4E9B' },
    { text: 'WORKDAY GLOBAL BRASIL', color: '#008CD2' },
    { text: 'TORONTO / CANADÁ (5 ANOS)', color: '#F58220' },
    { text: 'ADMISSÃO DIGITAL (-60% TEMPO)', color: '#FFC20E' },
    { text: 'PEOPLE ANALYTICS (50K COLABORADORES)', color: '#00A3E0' },
    { text: 'IA AGÊNTICA APLICADA', color: '#8A1538' },
    { text: 'ECONOMIA ANUAL ~R$ 10 MILHÕES', color: '#E53924' },
  ];

  return (
    <section className="relative pt-24 sm:pt-28 pb-0 bg-white text-[#0F294A] border-b border-slate-200 overflow-hidden">
      
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0F294A 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Editorial Eyebrow with chromatic bar accent */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 sm:mb-12 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <span className="inline-flex gap-1">
              <span className="w-2.5 h-1 bg-[#1B4E9B]" />
              <span className="w-2.5 h-1 bg-[#008CD2]" />
              <span className="w-2.5 h-1 bg-[#00A3E0]" />
              <span className="w-2.5 h-1 bg-[#FFC20E]" />
              <span className="w-2.5 h-1 bg-[#F58220]" />
              <span className="w-2.5 h-1 bg-[#E53924]" />
              <span className="w-2.5 h-1 bg-[#8A1538]" />
            </span>
            <span className="text-xs font-bold font-mono tracking-widest text-slate-600 uppercase">
              APRESENTAÇÃO EXECUTIVA · PROPOSTA DE VALOR
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Disponível para agenda
            </span>
            <span className="text-slate-300">|</span>
            <span>Destinada à</span>
            <LGLogo size="xs" />
          </div>
        </div>

        {/* Main Hero Layout: Asymmetric Editorial Split with Realistic Image Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16 lg:pb-20">
          
          {/* Left Column: Bold Headline & Executive Positioning */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#F0F7FD] border border-[#008CD2]/30 text-xs font-bold text-[#008CD2] uppercase tracking-wider rounded-full">
                <Sparkles size={13} className="text-[#008CD2]" />
                <span>HR Transformation · HCM · Governança & IA</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F294A] tracking-tight leading-[1.1]"
              >
                Eu já estive onde os clientes da LG estão.{' '}
                <span className="text-[#008CD2] block mt-2">
                  Agora quero ajudar a transformação a acontecer do outro lado.
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg lg:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl"
            >
              Construí minha trajetória dentro de operações complexas de RH no <strong>Santander Brasil</strong> e <strong>Banco Safra</strong>, com vivência internacional em <strong>Toronto, Canadá</strong>. Fui o cliente que precisou organizar prioridades, implantar Workday e PeopleSoft, desenhar fluxos de People Analytics e garantir adoção real no dia seguinte ao go-live.
            </motion.p>

            {/* Quick Proof Pills with Dynamic Hover Accents */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              <div className="p-3.5 bg-[#F8FAFC] border-l-4 border-l-[#1B4E9B] border-t border-r border-b border-slate-200 flex items-start gap-2.5">
                <Award size={16} className="text-[#1B4E9B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#0F294A] block">15+ anos em Grandes Bancos</span>
                  <span className="text-[11px] text-slate-600">PMO de RH, HCM, Redesenho Operacional e CSC</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#F8FAFC] border-l-4 border-l-[#008CD2] border-t border-r border-b border-slate-200 flex items-start gap-2.5">
                <TrendingUp size={16} className="text-[#008CD2] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#0F294A] block">~R$ 10M/ano em Economia</span>
                  <span className="text-[11px] text-slate-600">Internalização e eficiência em Talent Acquisition</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#F8FAFC] border-l-4 border-l-[#F58220] border-t border-r border-b border-slate-200 flex items-start gap-2.5">
                <MapPin size={16} className="text-[#F58220] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#0F294A] block">Vivência Global (Brasil + Canadá)</span>
                  <span className="text-[11px] text-slate-600">5 anos em Toronto (FCBB) em ambiente bilíngue</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#F8FAFC] border-l-4 border-l-[#8A1538] border-t border-r border-b border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#8A1538] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#0F294A] block">Empatia Real com o Comprador</span>
                  <span className="text-[11px] text-slate-600">Vivi na prática o desafio de aprovar e sustentar HCM</span>
                </div>
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

          {/* Right Column: High-Impact Visual Composition with Realistic Executive Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Realistic Executive Photo Component */}
              <HeroExecutivePhoto />

              {/* Floating Live Badge 1: Top Right Asymmetric Metric */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-4 -right-3 sm:-right-6 bg-white border-l-4 border-l-[#E53924] border-t border-r border-b border-slate-200 p-3.5 shadow-lg max-w-[200px] z-30"
              >
                <span className="text-[10px] font-mono uppercase font-bold text-slate-500 block">
                  Impacto Comprovado
                </span>
                <span className="text-base font-black text-[#0F294A] block">
                  R$ 10M / ano
                </span>
                <span className="text-[10px] text-slate-600 font-normal">
                  Economia em Talent Acquisition
                </span>
              </motion.div>

              {/* Floating Live Badge 2: Bottom Left Asymmetric Metric */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 -left-3 sm:-left-6 bg-white border-l-4 border-l-[#008CD2] border-t border-r border-b border-slate-200 p-3.5 shadow-lg max-w-[210px] z-30"
              >
                <span className="text-[10px] font-mono uppercase font-bold text-[#008CD2] block">
                  Velocidade de Processo
                </span>
                <span className="text-base font-black text-[#0F294A] block">
                  -60% no tempo
                </span>
                <span className="text-[10px] text-slate-600 font-normal">
                  Admissão digital no Banco Safra
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>

      {/* Dynamic Animated Marquee Ribbon: Infinite Lateral Motion */}
      <div className="w-full bg-[#0F294A] border-t border-b border-slate-800 py-3.5 overflow-hidden">
        <div className="flex w-max animate-marquee gap-8 items-center text-xs font-bold uppercase tracking-widest text-white">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <span className="w-2 h-2 shrink-0" style={{ backgroundColor: item.color }} />
              <span className="hover:text-[#FFC20E] transition-colors">{item.text}</span>
              <span className="text-slate-600 font-mono">/</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
