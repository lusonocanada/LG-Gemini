import { FileText, Phone, Linkedin, MapPin, Mail } from 'lucide-react';
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
          
          <div className="inline-flex items-center gap-2 px-4 py-2 liquid-glass-pill text-xs font-mono font-bold uppercase tracking-widest text-[#0F294A] rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#008CD2]" />
            <span>PRÓXIMO PASSO</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Quero levar para a LG a visão de quem viveu a dor da implantação na cadeira do cliente.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            Trago repertório em projetos, processos, dados e tecnologia, com a postura de quem prefere resolver gargalos reais a vender promessas vazias. Se a agenda da LG é fazer a transformação chegar com qualidade à ponta, temos muito sobre o que conversar.
          </p>
        </div>

        {/* 3 Executive CTAs */}
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-4 mb-16">
          
          {/* 1. Ver perfil completo */}
          <button
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#008CD2] hover:bg-[#0072CE] text-white text-xs font-mono font-bold uppercase tracking-widest transition-all cursor-pointer rounded-full shadow-lg hover:shadow-xl active:scale-98"
          >
            <FileText size={16} />
            <span>Ver perfil completo</span>
          </button>

          {/* 2. Conversar no WhatsApp */}
          <a
            href="https://wa.me/5511932211288"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#F58220] hover:bg-[#E53924] text-white text-xs font-mono font-bold uppercase tracking-widest transition-all cursor-pointer rounded-full shadow-lg hover:shadow-xl active:scale-98"
          >
            <Phone size={16} />
            <span>Conversar no WhatsApp</span>
          </a>

          {/* 3. Conectar no LinkedIn */}
          <a
            href="https://www.linkedin.com/in/diegomoraes87/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#14263D] hover:bg-[#1E3A5F] text-white border border-slate-700 hover:border-slate-500 text-xs font-mono font-bold uppercase tracking-widest transition-all cursor-pointer rounded-full shadow-md hover:shadow-lg"
          >
            <Linkedin size={16} className="text-[#00A3E0]" />
            <span>Conectar no LinkedIn</span>
          </a>
        </div>

        {/* Executive Contact Card with Apple-Style Liquid Glass */}
        <div className="max-w-4xl mx-auto rounded-3xl liquid-glass-dark border border-white/15 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC20E] font-bold block">
                LOCALIZAÇÃO & ATUAÇÃO
              </span>
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <MapPin size={16} className="text-[#00A3E0] shrink-0" />
                <span>São Paulo / Brasil</span>
              </p>
              <p className="text-xs text-slate-400">
                Disponível para atuação presencial, híbrida ou projetos em escala.
              </p>
            </div>

            <div className="sm:pl-6 pt-4 sm:pt-0 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00A3E0] font-bold block">
                TELEFONE / WHATSAPP
              </span>
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <Phone size={16} className="text-[#F58220] shrink-0" />
                <span>+55 11 93221-1288</span>
              </p>
              <p className="text-xs text-slate-400">
                Contato direto com Diego Moraes.
              </p>
            </div>

            <div className="sm:pl-6 pt-4 sm:pt-0 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A1538] font-bold block">
                E-MAIL
              </span>
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <Mail size={16} className="text-emerald-400 shrink-0" />
                <span>mvdigo@gmail.com</span>
              </p>
              <p className="text-xs text-slate-400">
                Canal para propostas e conversas profissionais.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
