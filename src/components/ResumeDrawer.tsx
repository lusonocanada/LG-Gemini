import { useMotionPreference } from '../hooks/useMotionPreference';
import { useState } from 'react';
import { useDialog } from '../hooks/useDialog';
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
  const reduced = useMotionPreference();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const drawerRef = useDialog(isOpen, onClose);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('mvdigo@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handlePrint = () => window.print();

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="resume-dialog fixed inset-0 z-[120] flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-drawer-title"
        >
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F294A]/80 backdrop-blur-xs"
          />

          <motion.div
            ref={drawerRef}
            tabIndex={-1}
            initial={reduced ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={reduced ? { duration: 0 } : { type: 'spring', damping: 28, stiffness: 280 }}
            className="resume-panel relative w-full max-w-3xl bg-white text-[#0F294A] shadow-2xl h-full flex flex-col z-10 overflow-hidden"
          >
            <LGChromaticBar size="xs" />

            <div className="flex items-center justify-between px-3 sm:px-6 py-4 border-b border-slate-200/80 liquid-glass-light shrink-0">
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
                  <span>Imprimir / PDF</span>
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

            <div className="overflow-y-auto flex-1 p-6 sm:p-10 space-y-8" id="resume-printable-area">
              <div className="pb-6 border-b border-slate-200">
                <div className="flex items-center gap-4">
                  <img
                    src="/hero-photo2.png"
                    alt="Diego Moraes"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-[center_15%] border-2 border-[#008CD2] shadow-sm shrink-0"
                  />
                  <div>
                    <h1 id="resume-drawer-title" className="text-2xl sm:text-3xl font-black text-[#0F294A] tracking-tight">
                      Diego Moraes da Silva
                    </h1>
                    <p className="text-sm font-bold text-[#008CD2] mt-1">
                      Gerente de Projetos · Implantação HCM · HR Tech · PMO · Stakeholders · Change Management
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#008CD2]" />
                    <span>São Paulo, SP</span>
                  </span>
                  <span>•</span>
                  <a href="mailto:mvdigo@gmail.com" className="font-semibold text-slate-800">mvdigo@gmail.com</a>
                  <button onClick={handleCopyEmail} className="flex items-center gap-1.5 hover:text-[#008CD2] transition-colors cursor-pointer" title="Copiar e-mail">
                    <Mail size={13} className="text-[#008CD2]" />
                    <span>{copiedEmail ? 'Copiado' : 'Copiar e-mail'}</span>
                    {copiedEmail ? <Check size={12} className="text-emerald-600" /> : <Copy size={11} className="opacity-50" />}
                  </button>
                  <span>•</span>
                  <a href="https://wa.me/5511932211288" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#008CD2] transition-colors font-semibold text-slate-800">
                    <Phone size={13} className="text-[#F58220]" />
                    <span>+55 11 93221-1288</span>
                  </a>
                  <span>•</span>
                  <a href="https://www.linkedin.com/in/diegomoraes87/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#008CD2] transition-colors font-semibold text-slate-800">
                    <Linkedin size={13} className="text-[#00A3E0]" />
                    <span>linkedin.com/in/diegomoraes87</span>
                  </a>
                  <span>•</span>
                  <a href="https://lg.diegomoraes.me" target="_blank" rel="noreferrer" className="font-semibold text-slate-800 hover:text-[#008CD2]">lg.diegomoraes.me</a>
                </div>
              </div>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-2">Resumo Executivo</h2>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                  Gerente de Projetos e profissional sênior de Recursos Humanos com 15+ anos de experiência em ambientes corporativos complexos, conduzindo iniciativas na interseção entre projetos, processos de RH, sistemas HCM, operação e experiência do cliente. Histórico em implantação e evolução de PeopleSoft, Workday, SAP/ERP, eSocial e plataformas digitais de Talent Acquisition, com governança de escopo, cronograma, riscos, mudanças, orçamento, indicadores e reports executivos. Atuação direta com Diretoria, Vice-Presidência, TI, Operações, fornecedores e usuários, coordenando equipes multidisciplinares e múltiplas frentes simultaneamente. Forte comunicação executiva, negociação, tomada de decisão e gestão de stakeholders. Diferencial para a LG: vivência real nos processos de RH/HCM que o cliente precisa parametrizar, implantar, adotar e operar após o go-live.
                </p>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-3">Aderência à vaga · LG Lugar de Gente</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Implantação de software: PeopleSoft, Workday, eSocial, SAP/ERP e plataforma digital de seleção.',
                    'Gestão de projeto: escopo, prazo, orçamento, riscos, mudanças, dependências, indicadores e reports.',
                    'Stakeholders: comitês executivos, steering, liderança, clientes, usuários, TI, Operações e fornecedores.',
                    'Frentes simultâneas: coordenação de equipes multidisciplinares e portfólios de transformação em bancos.',
                    'HCM / RH: admissão, onboarding, desligamento, Talent Acquisition, CSC, indicadores e planejamento.',
                    'Melhoria contínua: digitalização, automação, autosserviço, PDCA, redesign de processos e experiência.'
                  ].map((text, idx) => (
                    <div key={idx} className="p-3 bg-[#F8FAFC] border-l-2 border-l-[#008CD2] border-t border-r border-b border-slate-200 text-xs text-slate-800 font-medium leading-relaxed">
                      {text}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-4">Experiência Profissional</h2>
                <div className="space-y-4">
                  <Experience
                    color="#8A1538"
                    title="Consultor de Transformação Digital | Freelance | Self-Employed"
                    period="06/2025 – atual"
                    location="São Paulo, SP"
                    intro="Atuação independente em projetos de transformação, HR Tech, melhoria de processos, automação e produtos digitais, conectando necessidade de negócio, execução e tecnologia."
                    bullets={[
                      'Condução de projetos do diagnóstico à entrega, estruturando roadmaps, requisitos, prioridades, cronogramas, indicadores e mecanismos de governança.',
                      'Tradução de necessidades funcionais em jornadas, dashboards, MVPs e soluções testáveis, atuando como ponte entre negócio, usuários e Tecnologia.',
                      'Entrega de dashboards, sistemas web, CRMs, plataformas de gestão e automações com React, Next.js, Python, APIs, Supabase e IA aplicada.',
                      'Projetos executados incluem Dashboard People Analytics com IA, The Lusim, CanadaVistos, Freelance Cockpit, Business Intelligence Overview e ferramentas de gestão.'
                    ]}
                  />

                  <Experience
                    color="#1B4E9B"
                    title="Gerente de Projetos de RH / HR PMO | Banco Safra"
                    period="10/2018 – 04/2020"
                    location="São Paulo, SP"
                    intro="Recrutado para estruturar o PMO de RH e apoiar diretamente o Diretor de Recursos Humanos na agenda de transformação do banco."
                    bullets={[
                      'Estruturação da governança de portfólio: escopo, cronogramas, riscos, dependências, recursos, prioridades, mudanças e planos de ação.',
                      'Condução de reuniões de status, steering updates e reports executivos; interface entre RH, Tecnologia, Operações e PMO corporativo.',
                      'Liderança de equipe multidisciplinar e responsabilidade pelas operações de Admissão e Onboarding.',
                      'Digitalização do processo de admissão em PeopleSoft, reduzindo aproximadamente 60% o tempo de contratação.',
                      'Redesenho do desligamento em PeopleSoft, reduzindo aproximadamente 50% o tempo de processamento.',
                      'Implantação multidisciplinar do eSocial, expansão de autosserviço e modernização de canais e processos de RH.'
                    ]}
                  />

                  <Experience
                    color="#E53924"
                    title="Santander Brasil | Progressão em Projetos, Planejamento, Talent Acquisition e People Analytics"
                    period="06/2010 – 10/2018"
                    location="São Paulo, SP"
                    bullets={[
                      'Coordenador de People Analytics (2018): mobilidade interna por algoritmo sobre ~50 mil colaboradores, Data Warehouse, indicadores e dashboards executivos.',
                      'Coordenador de Talent Acquisition (2016–2018): internalização e digitalização da operação; plataforma digital de seleção; ponto focal de Talent no projeto global Workday Brasil; redução aproximada de R$ 10 milhões em custos operacionais em 12 meses.',
                      'Coordenador de Planejamento Estratégico de RH (2014–2016): portfólio da Vice-Presidência de RH, governança de cronogramas, riscos e impactos; transformação de Operações de RH em CSC com processos digitalizados e automação.',
                      'Analista Sênior de Orçamento, Indicadores e Projetos (2010–2014): orçamento de RH, TMI/IBM, dashboards, integração ABN-Santander, SAP/ERP, S2P, projetos digitais e Comitê de Gastos e Investimentos.'
                    ]}
                  />

                  <Experience
                    color="#F58220"
                    title="Especialista em Imigração e Processos | CanadaVistos Immigration Consulting"
                    period="10/2021 – 06/2025"
                    location="Toronto, Canadá"
                    bullets={[
                      'Gestão de processos complexos, prazos críticos, controles de status, qualidade e experiência do cliente em ambiente internacional.',
                      'Liderança de equipe de consultores e padronização de processos ponta a ponta para elevar previsibilidade, qualidade e reduzir retrabalho.',
                      'Atuação consultiva com múltiplos stakeholders, traduzindo requisitos complexos em orientações claras e planos de ação.'
                    ]}
                  />

                  <Experience
                    color="#008CD2"
                    title="Analista de Orçamento | ABN AMRO Brasil"
                    period="05/2008 – 05/2010"
                    location="São Paulo, SP"
                    bullets={[
                      'Implementação de sistema de gestão para Compras, Despesas, SAP e Contratos; aplicação de PDCA, indicadores, macrofluxos, fluxogramas e planos de ação.',
                      'Automação de controles com Access e VBA/Excel e produção de apresentações executivas.'
                    ]}
                  />
                </div>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-3">Resultados Selecionados</h2>
                <ul className="space-y-2 text-xs text-slate-700 leading-relaxed list-disc pl-5">
                  <li>60% de redução no tempo de contratação após digitalização da admissão no Banco Safra.</li>
                  <li>50% de redução no tempo de processamento de desligamentos após redesenho em PeopleSoft.</li>
                  <li>R$ 10 milhões de redução aproximada de custos operacionais em 12 meses na transformação de Talent Acquisition do Santander.</li>
                  <li>~50 mil colaboradores considerados em iniciativa de mobilidade interna apoiada por algoritmo e People Analytics.</li>
                  <li>HR PMO estruturado do zero no Safra, com portfólio, riscos, cronogramas, comitês e reports executivos.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-3">Modelo de Condução de Implantação</h2>
                <ol className="space-y-2 text-xs text-slate-700 leading-relaxed list-decimal pl-5">
                  <li><strong>Kick-off e escopo:</strong> alinhamento de expectativa, premissas, papéis, entregáveis e critérios de aceite.</li>
                  <li><strong>Plano e cronograma:</strong> WBS, marcos, dependências, capacidade de time, orçamento e baseline.</li>
                  <li><strong>Execução e riscos:</strong> rituais de status, matriz de riscos, gestão de mudanças, conflitos e escalonamento.</li>
                  <li><strong>Validação e go-live:</strong> testes com usuários-chave, treinamento, plano de corte, comunicação e checklist de produção.</li>
                  <li><strong>Estabilização:</strong> acompanhamento pós-go-live, indicadores de adoção, lições aprendidas e transição para operação/serviço.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-3">Project Management, HCM & Digital Toolkit</h2>
                <div className="grid grid-cols-1 gap-2.5 text-xs text-slate-700">
                  <Toolkit label="Gestão de projetos" text="MS Project | Jira | Trello | Asana | Excel Avançado | PMO | WBS | Risk & Change Management" />
                  <Toolkit label="HCM / HR Tech" text="PeopleSoft | Workday | SAP SuccessFactors | LG Gente | eSocial | plataformas digitais de Talent Acquisition" />
                  <Toolkit label="Dados & reports" text="Power BI | SQL | Data Warehouse | Excel/VBA | indicadores | dashboards | reporting executivo" />
                  <Toolkit label="Automação & IA" text="Python | APIs | Make | Supabase | IA aplicada | automação de processos | prototipagem" />
                </div>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-3">Formação & Certificações</h2>
                <div className="space-y-2.5 text-xs">
                  <Education title="Diploma in Business Management" school="Toronto School of Management" period="2020 – 2022" />
                  <Education title="Gerenciamento de Projetos" school="Fundação Getulio Vargas (FGV)" period="2011 – 2012" />
                  <Education title="Bacharelado em Administração de Empresas" school="Universidade Cruzeiro do Sul" period="2005 – 2008" />
                  <div className="p-3.5 bg-[#F8FAFC] border-l-2 border-l-[#FFC20E] border-t border-r border-b border-slate-200">
                    <span className="font-black text-[#0F294A] block mb-1">Certificações / desenvolvimento</span>
                    <span className="text-slate-600">Certified Project Management | O Papel do RH na Transformação Digital | Power BI: Como Criar um Dashboard de RH | QuickBooks Certification</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-2">Idiomas</h2>
                <div className="flex gap-4 text-xs">
                  <div className="p-3.5 bg-[#F8FAFC] border-l-2 border-l-[#008CD2] border-t border-r border-b border-slate-200 flex-1">
                    <span className="font-black text-[#0F294A] block">Português</span>
                    <span className="text-slate-600">Nativo</span>
                  </div>
                  <div className="p-3.5 bg-[#F8FAFC] border-l-2 border-l-[#F58220] border-t border-r border-b border-slate-200 flex-1">
                    <span className="font-black text-[#0F294A] block">Inglês</span>
                    <span className="text-slate-600">Profissional</span>
                  </div>
                </div>
              </section>
            </div>

            <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between shrink-0">
              <span className="text-xs text-slate-500 font-mono">Diego Moraes · São Paulo, SP</span>
              <button onClick={onClose} className="px-6 py-2.5 bg-[#0F294A] hover:bg-[#1B4E9B] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-full shadow-xs">
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function Experience({ color, title, period, location, intro, bullets }: { color: string; title: string; period: string; location: string; intro?: string; bullets: string[] }) {
  return (
    <div className="p-5 bg-[#F8FAFC] border-l-4 border-t border-r border-b border-slate-200" style={{ borderLeftColor: color }}>
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-1">
        <h3 className="text-sm font-black text-[#0F294A]">{title}</h3>
        <span className="text-xs font-mono font-semibold text-slate-500 whitespace-nowrap">{period}</span>
      </div>
      <p className="text-xs font-bold mb-2" style={{ color }}>{location}</p>
      {intro && <p className="text-xs text-slate-700 leading-relaxed mb-2">{intro}</p>}
      <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed list-disc pl-5">
        {bullets.map((bullet, idx) => <li key={idx}>{bullet}</li>)}
      </ul>
    </div>
  );
}

function Toolkit({ label, text }: { label: string; text: string }) {
  return (
    <div className="p-3.5 bg-[#F8FAFC] border-l-2 border-l-[#00A3E0] border-t border-r border-b border-slate-200">
      <strong className="text-[#0F294A]">{label}: </strong>{text}
    </div>
  );
}

function Education({ title, school, period }: { title: string; school: string; period: string }) {
  return (
    <div className="p-3.5 bg-[#F8FAFC] border-l-2 border-l-[#008CD2] border-t border-r border-b border-slate-200">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="font-black text-[#0F294A] block">{title}</span>
          <span className="text-slate-600">{school}</span>
        </div>
        <span className="text-slate-500 font-mono whitespace-nowrap">{period}</span>
      </div>
    </div>
  );
}