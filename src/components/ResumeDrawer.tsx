import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Mail, 
  Linkedin, 
  MapPin, 
  Printer,
  Copy,
  Check,
  Phone
} from 'lucide-react';
import LGLogo from './LGLogo';
import LGChromaticBar from './LGChromaticBar';

interface ResumeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeDrawer({ isOpen, onClose }: ResumeDrawerProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
        if (e.key === 'Tab' && drawerRef.current) {
          const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mvdigo@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[120] flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-drawer-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F294A]/80 backdrop-blur-xs"
          />

          {/* Drawer Container */}
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-3xl bg-white text-[#0F294A] shadow-2xl h-full flex flex-col z-10 overflow-hidden"
          >
            {/* Top LG Chromatic Bar */}
            <LGChromaticBar size="xs" />

            {/* Sticky Action Header with Liquid Glass */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/80 liquid-glass-light shrink-0">
              <div className="flex items-center gap-3">
                <LGLogo size="sm" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 hidden sm:inline">
                  | Perfil Executivo
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-5 py-2 bg-[#008CD2] hover:bg-[#0072CE] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer rounded-full shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Printer size={13} />
                  <span>Imprimir / Salvar PDF</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded-full transition-colors cursor-pointer"
                  aria-label="Fechar currículo"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Scrollable Printable Profile Content */}
            <div className="overflow-y-auto flex-1 p-6 sm:p-10 space-y-8" id="resume-printable-area">
              
              {/* Header Contact Area */}
              <div className="pb-6 border-b border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="/hero-photo2.png"
                      alt="Diego Moraes"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-[center_15%] border-2 border-[#008CD2] shadow-sm shrink-0"
                    />
                    <div>
                      <h1 id="resume-drawer-title" className="text-2xl sm:text-3xl font-black text-[#0F294A] tracking-tight">
                        Diego Moraes
                      </h1>
                      <p className="text-sm font-bold text-[#008CD2] mt-1">
                        Transformação de RH · Implantação de HCM · PMO · IA aplicada
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#008CD2]" />
                    <span>São Paulo, SP</span>
                  </span>
                  <span>•</span>
                  <button 
                    onClick={handleCopyEmail} 
                    className="flex items-center gap-1.5 hover:text-[#008CD2] transition-colors cursor-pointer"
                    title="Copiar e-mail"
                  >
                    <Mail size={13} className="text-[#008CD2]" />
                    <span className="font-semibold text-slate-800">mvdigo@gmail.com</span>
                    {copiedEmail ? <Check size={12} className="text-emerald-600" /> : <Copy size={11} className="opacity-50" />}
                  </button>
                  <span>•</span>
                  <a 
                    href="https://wa.me/5511932211288" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-1.5 hover:text-[#008CD2] transition-colors font-semibold text-slate-800"
                    title="Conversar no WhatsApp"
                  >
                    <Phone size={13} className="text-[#F58220]" />
                    <span>+55 11 93221-1288</span>
                  </a>
                  <span>•</span>
                  <a 
                    href="https://www.linkedin.com/in/diegomoraes87/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-1.5 hover:text-[#008CD2] transition-colors font-semibold text-slate-800"
                  >
                    <Linkedin size={13} className="text-[#00A3E0]" />
                    <span>linkedin.com/in/diegomoraes87</span>
                  </a>
                </div>
              </div>

              {/* Resumo Executivo */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-2">
                  Resumo Executivo
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed text-justify font-normal">
                  Profissional de transformação de RH, projetos e tecnologia com mais de 15 anos de experiência em ambientes corporativos complexos no Brasil e no Canadá. Repertório em HR PMO, governança, orçamento, CSC, Talent Acquisition, People Analytics, Workday, PeopleSoft, processos digitais, experiência do cliente e IA aplicada.
                </p>
              </div>

              {/* Áreas de Especialidade */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-3">
                  Áreas de Especialidade
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { text: "Gestão de projetos, HR PMO, governança e portfólio", color: "#1B4E9B" },
                    { text: "Processos de RH, CSC, autosserviço e experiência de usuário", color: "#008CD2" },
                    { text: "Workday, PeopleSoft e implantação de soluções HCM", color: "#00A3E0" },
                    { text: "People Analytics, indicadores, orçamento e decisão baseada em dados", color: "#FFC20E" },
                    { text: "Gestão de stakeholders, mudança, capacitação e estabilização pós-go-live", color: "#F58220" },
                    { text: "Automação, prototipação e IA aplicada a problemas operacionais", color: "#8A1538" }
                  ].map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-[#F8FAFC] border-l-2 border-t border-r border-b border-slate-200 text-xs font-semibold text-slate-800" style={{ borderLeftColor: area.color }}>
                      <span className="w-1.5 h-1.5 shrink-0" style={{ backgroundColor: area.color }} />
                      <span>{area.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experiência Profissional Completa */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-4">
                  Experiência Profissional Completa
                </h2>

                <div className="space-y-4">
                  {/* Santander Brasil */}
                  <div className="p-5 bg-[#F8FAFC] border-l-4 border-l-[#E53924] border-t border-r border-b border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                      <h3 className="text-sm font-black text-[#0F294A]">Santander Brasil</h3>
                      <span className="text-xs font-mono font-semibold text-slate-500">2008 – 2018 (10 anos)</span>
                    </div>
                    <p className="text-xs font-bold text-[#E53924] mb-3">
                      Processos, Orçamento, Talent Acquisition e People Analytics
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed list-disc list-inside">
                      <li>Atuação em projetos de integração sistêmica pós-fusão ABN/Santander, mapeamento de processos e governança orçamentária.</li>
                      <li>Atuação na reformulação do modelo de atração e seleção, com internalização de processos estratégicos e economia anual aproximada de R$ 10 milhões.</li>
                      <li>Ponto focal de Talent no projeto global Workday para o Brasil.</li>
                      <li>Iniciativas de People Analytics e modelos de mobilidade interna para cerca de 50 mil colaboradores.</li>
                      <li>Gestão de orçamento de pessoal, catálogo de serviços e suporte à transição para Centro de Serviços Compartilhados (CSC) de RH.</li>
                    </ul>
                  </div>

                  {/* Banco Safra */}
                  <div className="p-5 bg-[#F8FAFC] border-l-4 border-l-[#1B4E9B] border-t border-r border-b border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                      <h3 className="text-sm font-black text-[#0F294A]">Banco Safra</h3>
                      <span className="text-xs font-mono font-semibold text-slate-500">2018 – 2020</span>
                    </div>
                    <p className="text-xs font-bold text-[#1B4E9B] mb-3">
                      Gerente de Projetos de RH · Estruturação do HR PMO
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed list-disc list-inside">
                      <li>Estruturação e metodologia do PMO de RH da instituição e rituais executivos de decisão.</li>
                      <li>Implementação da admissão digital no PeopleSoft, reduzindo o ciclo total em aproximadamente 60%.</li>
                      <li>Redesenho do fluxo de desligamento com redução aproximada de 50% no tempo de processamento.</li>
                      <li>Modernização de portal corporativo e aplicativo de RH para colaboradores e líderes.</li>
                    </ul>
                  </div>

                  {/* Vivência Internacional Canadá */}
                  <div className="p-5 bg-[#F8FAFC] border-l-4 border-l-[#F58220] border-t border-r border-b border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                      <h3 className="text-sm font-black text-[#0F294A]">Toronto, Canadá</h3>
                      <span className="text-xs font-mono font-semibold text-slate-500">2020 – 2025 (5 anos)</span>
                    </div>
                    <p className="text-xs font-bold text-[#F58220] mb-3">
                      HR Business Partner e Gestão de Operações
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed list-disc list-inside">
                      <li>Vivência multicultural, atuação em HRBP, governança e gestão de operações no Canadá.</li>
                      <li>Padronização de processos críticos e governança operacional.</li>
                      <li>Formação em Business Management pela Toronto School of Management.</li>
                    </ul>
                  </div>

                  {/* Consultoria & Prototipação */}
                  <div className="p-5 bg-[#F8FAFC] border-l-4 border-l-[#8A1538] border-t border-r border-b border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                      <h3 className="text-sm font-black text-[#0F294A]">Consultoria e Soluções Digitais</h3>
                      <span className="text-xs font-mono font-semibold text-slate-500">2025 – Atual</span>
                    </div>
                    <p className="text-xs font-bold text-[#8A1538] mb-3">
                      Transformação, Prototipação e IA Aplicada
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed list-disc list-inside">
                      <li>Diagnóstico, redesenho de processos operacionais e protótipos funcionais para validação de hipóteses em ciclos curtos.</li>
                      <li>Organização de dados, automação e aplicação de IA a problemas operacionais.</li>
                      <li>Desenho de jornadas centradas na experiência do cliente e adoção pelos usuários.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Formação Acadêmica */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-3">
                  Formação Acadêmica
                </h2>
                <div className="p-3.5 bg-[#F8FAFC] border-l-2 border-l-[#008CD2] border-t border-r border-b border-slate-200">
                  <span className="text-xs font-black text-[#0F294A] block">
                    Business Management
                  </span>
                  <span className="text-xs text-slate-600">Toronto School of Management</span>
                </div>
              </div>

              {/* Idiomas */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-2">
                  Idiomas
                </h2>
                <div className="flex gap-4 text-xs">
                  <div className="p-3.5 bg-[#F8FAFC] border-l-2 border-l-[#008CD2] border-t border-r border-b border-slate-200 flex-1">
                    <span className="font-black text-[#0F294A] block">Português</span>
                    <span className="text-slate-600">Nativo</span>
                  </div>
                  <div className="p-3.5 bg-[#F8FAFC] border-l-2 border-l-[#F58220] border-t border-r border-b border-slate-200 flex-1">
                    <span className="font-black text-[#0F294A] block">Inglês</span>
                    <span className="text-slate-600">Fluente / Profissional (5 anos Canadá)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Footer Action */}
            <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between shrink-0">
              <span className="text-xs text-slate-500 font-mono">
                Diego Moraes · São Paulo, SP
              </span>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#0F294A] hover:bg-[#1B4E9B] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-full shadow-xs"
              >
                Fechar
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
