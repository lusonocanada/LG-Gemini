import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Languages, 
  Check, 
  Printer,
  Copy,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import LGLogo from './LGLogo';
import LGChromaticBar from './LGChromaticBar';
import { getStoredPhoto, subscribeToPhotoUpdates } from '../utils/photoManager';

interface ResumeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeDrawer({ isOpen, onClose }: ResumeDrawerProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [photoUrl, setPhotoUrl] = useState<string | null>(getStoredPhoto() || '/hero-photo2.png');
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeToPhotoUpdates((newPhoto) => {
      if (newPhoto) {
        setPhotoUrl(newPhoto);
        setImageError(false);
      } else {
        setPhotoUrl('/hero-photo2.png');
      }
    });
    return unsubscribe;
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mvdigo@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('(11) 97433-8557');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F294A]/80"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-3xl bg-white text-[#0F294A] shadow-2xl h-full flex flex-col z-10 overflow-hidden"
          >
            {/* Top LG Chromatic Bar */}
            <LGChromaticBar size="xs" />

            {/* Sticky Action Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white shrink-0">
              <div className="flex items-center gap-2.5">
                <LGLogo size="xs" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  | Perfil Executivo
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-5 py-2 bg-[#008CD2] hover:bg-[#0072CE] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-full shadow-xs"
                >
                  <Printer size={13} />
                  <span>Imprimir / Salvar PDF</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
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
                    {photoUrl && !imageError ? (
                      <img
                        src={photoUrl}
                        onError={() => setImageError(true)}
                        alt="Diego Moraes da Silva"
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-[center_15%] border-2 border-[#008CD2] shadow-sm shrink-0"
                      />
                    ) : (
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1B4E9B] border-2 border-[#008CD2] flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-sm shrink-0">
                        DM
                      </div>
                    )}
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-black text-[#0F294A] tracking-tight">
                        Diego Moraes da Silva
                      </h1>
                      <p className="text-sm font-bold text-[#008CD2] mt-1">
                        HR Transformation · Implantação de HCM · Governança & IA Aplicada
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <LGLogo size="xs" />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#008CD2]" />
                    <span>São Paulo, SP</span>
                  </span>
                  <span>•</span>
                  <button 
                    onClick={handleCopyPhone} 
                    className="flex items-center gap-1.5 hover:text-[#008CD2] transition-colors cursor-pointer"
                    title="Copiar telefone"
                  >
                    <Phone size={13} className="text-[#F58220]" />
                    <span className="font-semibold text-slate-800">(11) 97433-8557</span>
                    {copiedPhone ? <Check size={12} className="text-emerald-600" /> : <Copy size={11} className="opacity-50" />}
                  </button>
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
                    href="https://linkedin.com/in/mvdigo" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-1.5 hover:text-[#008CD2] transition-colors font-semibold text-slate-800"
                  >
                    <Linkedin size={13} className="text-[#00A3E0]" />
                    <span>linkedin.com/in/mvdigo</span>
                  </a>
                </div>
              </div>

              {/* Resumo Executivo */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-2">
                  Resumo Executivo
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed text-justify font-normal">
                  Profissional com mais de 15 anos de experiência em gestão de projetos, transformação de processos, recursos humanos e operações corporativas em instituições financeiras de grande porte (Santander e Safra) e vivência internacional em Toronto, Canadá. Especialista em implantação de sistemas de RH (Workday, PeopleSoft), People Analytics, reestruturação operacional (CSC), governança de portfólio e aplicação prática de IA a fluxos de trabalho.
                </p>
              </div>

              {/* Áreas de Especialidade */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-3">
                  Áreas de Especialidade
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { text: "Gestão de Projetos e PMO de RH", color: "#1B4E9B" },
                    { text: "Implantação e Localização de HCM (Workday, PeopleSoft)", color: "#008CD2" },
                    { text: "People Analytics e Inteligência de Dados", color: "#00A3E0" },
                    { text: "Redesenho de Processos e Eficiência Operacional (CSC)", color: "#FFC20E" },
                    { text: "Gestão de Mudança e Adoção de Tecnologia", color: "#F58220" },
                    { text: "IA Aplicada a Fluxos e Agentes de RH", color: "#8A1538" }
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
                      Especialista em Processos, Talent Acquisition e PMO de RH
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed list-disc list-inside">
                      <li>Liderança na reformulação do modelo de atração e seleção, internalizando demandas estratégicas com economia anual de ~R$ 10 milhões.</li>
                      <li>Ponto focal de Talent Acquisition no projeto global de implementação do Workday Brasil.</li>
                      <li>Criação de modelos analíticos de mobilidade interna contemplando cerca de 50 mil colaboradores.</li>
                      <li>Gestão de orçamento de pessoal e suporte à transição para Centro de Serviços Compartilhados (CSC) de RH.</li>
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
                      <li>Estruturação e consolidação da metodologia do PMO de RH da instituição.</li>
                      <li>Implementação da admissão digital no PeopleSoft, reduzindo o ciclo total em ~60%.</li>
                      <li>Redesenho do fluxo de desligamento com redução de ~50% no tempo de processamento.</li>
                      <li>Modernização de portal corporativo e aplicativo mobile para colaboradores e líderes.</li>
                    </ul>
                  </div>

                  {/* Vivência Internacional Canadá */}
                  <div className="p-5 bg-[#F8FAFC] border-l-4 border-l-[#F58220] border-t border-r border-b border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                      <h3 className="text-sm font-black text-[#0F294A]">Toronto, Canadá · FCBB & Consultoria</h3>
                      <span className="text-xs font-mono font-semibold text-slate-500">2020 – 2025 (5 anos)</span>
                    </div>
                    <p className="text-xs font-bold text-[#F58220] mb-3">
                      HR Business Partner & Gestão de Operações
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed list-disc list-inside">
                      <li>Atuação como HRBP na Federation of Canadian-Brazilian Businesses em ambiente bilíngue.</li>
                      <li>Padronização de processos críticos e governança operacional para clientes corporativos.</li>
                      <li>Formação internacional em gestão de negócios pela Toronto School of Management.</li>
                    </ul>
                  </div>

                  {/* Consultoria & IA Aplicada */}
                  <div className="p-5 bg-[#F8FAFC] border-l-4 border-l-[#8A1538] border-t border-r border-b border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                      <h3 className="text-sm font-black text-[#0F294A]">Consultoria e Soluções Digitais</h3>
                      <span className="text-xs font-mono font-semibold text-slate-500">2025 – Atual</span>
                    </div>
                    <p className="text-xs font-bold text-[#8A1538] mb-3">
                      Transformação de Processos, Prototipação e IA Aplicada
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed list-disc list-inside">
                      <li>Diagnóstico de fluxos operacionais, desenho de jornadas e automação com agentes de IA.</li>
                      <li>Saneamento e estruturação de bases de dados para dashboards de People Analytics.</li>
                      <li>Apoio a estratégias de adoção de novas tecnologias centradas na experiência do colaborador.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Formação Acadêmica & Certificações */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-3">
                    Formação Acadêmica
                  </h2>
                  <div className="space-y-3">
                    <div className="p-3.5 bg-[#F8FAFC] border-l-2 border-l-[#008CD2] border-t border-r border-b border-slate-200">
                      <span className="text-xs font-black text-[#0F294A] block">
                        Pós-Graduação em Business Management
                      </span>
                      <span className="text-xs text-slate-600">Toronto School of Management · Canadá</span>
                    </div>
                    <div className="p-3.5 bg-[#F8FAFC] border-l-2 border-l-[#008CD2] border-t border-r border-b border-slate-200">
                      <span className="text-xs font-black text-[#0F294A] block">
                        Bacharelado em Administração de Empresas
                      </span>
                      <span className="text-xs text-slate-600">UNIP · São Paulo, Brasil</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-3">
                    Certificações & Especializações
                  </h2>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1B4E9B]" />
                      <span className="font-medium">PMP® (Preparação concluída)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#008CD2]" />
                      <span className="font-medium">Lean Six Sigma Green Belt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#00A3E0]" />
                      <span className="font-medium">Scrum Master (Metodologias Ágeis)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#FFC20E]" />
                      <span className="font-medium">People Analytics & Data-Driven HR</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#8A1538]" />
                      <span className="font-medium">Change Management & Transformação Organizacional</span>
                    </div>
                  </div>
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
