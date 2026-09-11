import { useState } from 'react';
import { Phone, Mail, Linkedin, MapPin, ArrowUp, FileText, X, ExternalLink, ShieldCheck } from 'lucide-react';
import LGLogo from './LGLogo';
import LGChromaticBar from './LGChromaticBar';

interface FooterProps {
  onOpenCvModal: () => void;
}

export default function Footer({ onOpenCvModal }: FooterProps) {
  const [sourcesModalOpen, setSourcesModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#0F172A] text-white pt-16 pb-12 relative overflow-hidden border-t border-slate-800">
        
        <div className="absolute top-0 left-0 right-0">
          <LGChromaticBar size="xs" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            
            {/* Identity & Scope */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-extrabold text-lg tracking-tight text-white">
                  DIEGO MORAES
                </span>
                <span className="text-slate-600">|</span>
                <LGLogo onDark size="xs" />
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg font-normal">
                Apresentação executiva e proposta de valor de <strong>Diego Moraes</strong> direcionada à <strong>LG Lugar de Gente</strong>. Transformação de RH, implantação de plataformas HCM, governança de processos e inteligência artificial aplicada.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenCvModal}
                  className="inline-flex items-center gap-2 bg-[#008CD2] hover:bg-[#0072CE] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors uppercase tracking-wider cursor-pointer shadow-xs"
                >
                  <FileText size={14} />
                  <span>Ver currículo executivo</span>
                </button>

                <button
                  onClick={() => setSourcesModalOpen(true)}
                  className="inline-flex items-center gap-1.5 bg-[#14263D] hover:bg-[#1C3352] text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  <span>Fontes e referências</span>
                </button>

                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-xs font-semibold px-4 py-2.5 border border-slate-800 hover:border-slate-700 hover:bg-[#14263D] rounded-full transition-colors cursor-pointer"
                >
                  <ArrowUp size={14} />
                  <span>Voltar ao topo</span>
                </button>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00A3E0] block mb-2">
                Contato Direto
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href="https://wa.me/5511974338557"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3.5 bg-[#14263D] border-l-2 border-l-[#F58220] border-t border-r border-b border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone size={15} className="text-[#F58220] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-mono">Telefone / WhatsApp</span>
                    <span className="font-bold text-white">(11) 97433-8557</span>
                  </div>
                </a>

                <a
                  href="mailto:mvdigo@gmail.com"
                  className="flex items-center gap-2.5 p-3.5 bg-[#14263D] border-l-2 border-l-[#008CD2] border-t border-r border-b border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail size={15} className="text-[#008CD2] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-mono">E-mail</span>
                    <span className="font-bold text-white">mvdigo@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/mvdigo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3.5 bg-[#14263D] border-l-2 border-l-[#00A3E0] border-t border-r border-b border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin size={15} className="text-[#00A3E0] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-mono">LinkedIn</span>
                    <span className="font-bold text-white">linkedin.com/in/mvdigo</span>
                  </div>
                </a>

                <div className="flex items-center gap-2.5 p-3.5 bg-[#14263D] border-l-2 border-l-[#FFC20E] border-t border-r border-b border-slate-700 text-slate-300">
                  <MapPin size={15} className="text-[#FFC20E] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-mono">Localização</span>
                    <span className="font-bold text-white">São Paulo, SP · Brasil</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Mandatory Statement */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 leading-relaxed">
            <p className="max-w-3xl">
              Apresentação profissional independente criada por Diego Moraes. LG Lugar de Gente e suas marcas são citadas exclusivamente como contexto de estudo e afinidade profissional.
            </p>
            <span className="shrink-0 text-slate-400 font-mono text-xs">
              © {new Date().getFullYear()} Diego Moraes
            </span>
          </div>

        </div>
      </footer>

      {/* Discrete Sources Drawer / Modal */}
      {sourcesModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setSourcesModalOpen(false)}
            className="fixed inset-0 bg-black/80" 
          />
          <div className="relative z-10 max-w-lg w-full bg-white text-slate-900 border-t-4 border-t-[#008CD2] p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008CD2]">
                Fontes Institucionais e Metodológicas
              </span>
              <button 
                onClick={() => setSourcesModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900 block mb-1">Fato de Fonte Institucional:</strong>
                Informações sobre produtos, presença de mercado e histórico de 40+ anos da LG Lugar de Gente foram obtidas exclusivamente de canais oficiais e declarações públicas da empresa (site institucional e apresentações em eventos como CONARH).
              </p>
              <p>
                <strong className="text-slate-900 block mb-1">Leitura Profissional de Diego Moraes:</strong>
                A correlação entre as dores do mercado, a esteira de implantação e as oportunidades de aplicação de IA agêntica reflete a análise técnica independente do autor, baseada em 15 anos de vivência em grandes corporações.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 text-right">
              <button
                onClick={() => setSourcesModalOpen(false)}
                className="px-6 py-2.5 bg-[#0F294A] hover:bg-[#1B4E9B] text-white text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer shadow-xs"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
