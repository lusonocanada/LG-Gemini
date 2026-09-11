import { motion } from 'motion/react';
import { FileText, Phone, Linkedin, Mail, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import LGChromaticBar from './LGChromaticBar';

interface ClosingCTAProps {
  onOpenCvModal: () => void;
}

export default function ClosingCTA({ onOpenCvModal }: ClosingCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#0F294A] text-white relative border-t-2 border-b border-slate-800 overflow-hidden">
      
      {/* Top Chromatic Bar */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <LGChromaticBar size="sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Header Statement */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-14">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#14263D] border border-slate-700 text-xs font-mono font-bold uppercase tracking-widest text-[#FFC20E] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FFC20E]" />
            <span>PROPOSTA DE VALOR & PRÓXIMO PASSO</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight"
          >
            Quero levar para a LG a visão de quem já esteve na cadeira do cliente — e sabe como fazer a transformação{' '}
            <span className="text-[#00A3E0]">acontecer na prática.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto"
          >
            Trago repertório consolidado em RH, governança, implantação de plataformas corporativas, análise de dados e inteligência artificial. Mas, acima de tudo, trago postura executiva: escutar antes de desenhar, organizar antes de acelerar e acompanhar a entrega até que ela faça parte natural da operação diária do cliente da LG.
          </motion.p>
        </div>

        {/* 3 Prominent Executive CTAs in Solid Chromatic Style */}
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-4 mb-16">
          
          {/* 1. Meu perfil completo */}
          <button
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#008CD2] hover:bg-[#0072CE] text-white text-xs font-mono font-bold uppercase tracking-widest transition-all cursor-pointer rounded-full shadow-lg hover:shadow-xl active:scale-98"
          >
            <FileText size={16} />
            <span>Ver Currículo Executivo Completo</span>
          </button>

          {/* 2. WhatsApp Direto */}
          <a
            href="https://wa.me/5511974338557"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#F58220] hover:bg-[#E53924] text-white text-xs font-mono font-bold uppercase tracking-widest transition-all cursor-pointer rounded-full shadow-lg hover:shadow-xl active:scale-98"
          >
            <Phone size={16} />
            <span>Falar com Diego no WhatsApp</span>
          </a>

          {/* 3. LinkedIn */}
          <a
            href="https://linkedin.com/in/mvdigo"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#14263D] hover:bg-[#1E3A5F] text-white border border-slate-700 hover:border-slate-500 text-xs font-mono font-bold uppercase tracking-widest transition-all cursor-pointer rounded-full shadow-md hover:shadow-lg"
          >
            <Linkedin size={16} className="text-[#00A3E0]" />
            <span>Perfil no LinkedIn</span>
          </a>
        </div>

        {/* Executive Availability & Credentials Card */}
        <div className="max-w-4xl mx-auto bg-[#0A192F] border-2 border-slate-800 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC20E] font-bold block">
                LOCALIZAÇÃO & ATUAÇÃO
              </span>
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <MapPin size={16} className="text-[#00A3E0] shrink-0" />
                <span>São Paulo / Brasil</span>
              </p>
              <p className="text-xs text-slate-400">
                Disponibilidade imediata para atuação presencial, híbrida ou projetos nacionais.
              </p>
            </div>

            <div className="sm:pl-6 pt-4 sm:pt-0 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00A3E0] font-bold block">
                CONTATO DIRETO
              </span>
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <Phone size={16} className="text-[#F58220] shrink-0" />
                <span>+55 (11) 97433-8557</span>
              </p>
              <p className="text-xs text-slate-400">
                Canal exclusivo para lideranças da LG Lugar de Gente.
              </p>
            </div>

            <div className="sm:pl-6 pt-4 sm:pt-0 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A1538] font-bold block">
                STATUS PROFISSIONAL
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-emerald-400 font-mono uppercase">
                  Disponível para Conversas
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Pronto para contribuir com a agenda estratégica de HCM e IA da LG.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
