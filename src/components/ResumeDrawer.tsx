import { useMotionPreference } from '../hooks/useMotionPreference';
import { useState } from 'react';
import { useDialog } from '../hooks/useDialog';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Mail,
  Linkedin,
  MapPin,
  Download,
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
                <LGLogo size="sm" className="-mt-[17px]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 hidden sm:inline">
                  | Perfil Executivo
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/cv-diego-moraes-lg.pdf"
                  download="CV - Diego Moraes - LG.pdf"
                  className="inline-flex items-center gap-1.5 px-5 py-2 bg-[#008CD2] hover:bg-[#0072CE] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer rounded-full shadow-xs hover:shadow-md"
                >
                  <Download size={13} />
                  <span>Baixar PDF</span>
                </a>
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
                    src="/hero-photo2.webp"
                    alt="Diego Moraes"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-[center_15%] border-2 border-[#008CD2] shadow-sm shrink-0"
                  />
                  <div>
                    <h1 id="resume-drawer-title" className="text-2xl sm:text-3xl font-black text-[#0F294A] tracking-tight">
                      Diego Moraes
                    </h1>
                    <p className="text-sm font-bold text-[#008CD2] mt-1">
                      Recursos Humanos Sênior · HR Transformation · HR Tech & Applied AI · People Analytics · HR Operations & CSC
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
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-2">Perfil Executivo</h2>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                  Profissional sênior de Recursos Humanos com 18 anos de trajetória no Brasil e no Canadá, atuando na transformação de operações, decisões e experiências de pessoas na interseção entre estratégia, processos, dados e tecnologia. Experiência em HR Transformation, HR Operations e Shared Services, People Analytics, Talent Acquisition, Workforce Planning, HR PMO e HR Tech, com passagens por Santander e Banco Safra e atuação internacional no Canadá. Histórico de diagnóstico, redesenho de processos, governança executiva e implantação/evolução de soluções, com interface com vice-presidência de RH, comitês executivos, lideranças, Tecnologia, Operações e fornecedores. Atualmente amplia essa trajetória com automação, produtos digitais e IA aplicada, com foco em ganho de capacidade, qualidade de decisão e eficiência.
                </p>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-3">Impacto Selecionado</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    ['R$ 10 milhões', 'em redução de custo operacional em 12 meses'],
                    ['~2.000 vagas/mês', 'em operação de Talent Acquisition transformada'],
                    ['~50 mil', 'colaboradores em solução de mobilidade interna'],
                    ['~R$ 6 bilhões', 'em custos de pessoas sob budget e forecast'],
                    ['−55%', 'no ciclo de admissão, de 22 para 10 dias'],
                    ['~3.600', 'gestores e HRBPs atendidos por dashboard mensal de RH']
                  ].map(([value, label]) => (
                    <div key={value} className="p-3 bg-[#F8FAFC] border-t-2 border-t-[#008CD2] border-l border-r border-b border-slate-200">
                      <span className="block text-base font-black text-[#0F294A]">{value}</span>
                      <span className="block text-[11px] text-slate-600 leading-snug mt-0.5">{label}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-3">Competências Executivas</h2>
                <div className="grid grid-cols-1 gap-2.5 text-xs text-slate-700">
                  <Toolkit label="Transformação e operações" text="HR Transformation | Modelo Operacional | HR Operations | Shared Services / CSC | Process Improvement | Change Management | Employee Experience" />
                  <Toolkit label="Dados, HR Tech e IA" text="People Analytics | Workforce Analytics | Power BI | Data Warehouse | Workday | PeopleSoft | HR Tech | Automação | Applied AI" />
                  <Toolkit label="Estratégia e governança" text="People Strategy | Workforce Planning | Capacity Planning | Budget & Forecast | Governança Executiva | Decision Support" />
                  <Toolkit label="Projetos e implantação" text="HR PMO | Gestão de Portfólio | Requisitos | Gestão de Riscos | Stakeholder Management | Melhoria Contínua" />
                  <Toolkit label="Talentos e jornadas" text="Talent Acquisition | Mobilidade Interna | International Recruitment | Workforce Mobility | Onboarding | Early Careers" />
                </div>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-4">Experiência Profissional</h2>
                <div className="space-y-4">
                  <Experience
                    color="#8A1538"
                    title="Consultor de Transformação de RH, Processos e IA Aplicada | Consultoria independente"
                    period="06/2025 – atual"
                    location="São Paulo, SP"
                    intro="Atuação independente em transformação de RH, processos e operações, conectando estratégia, dados, tecnologia e experiência do usuário para estruturar e implementar soluções de melhoria."
                    bullets={[
                      'Diagnósticos, mapeamento de processos AS-IS/TO-BE, desenho de jornadas, requisitos, priorização de iniciativas e roadmaps.',
                      'Modelos de governança, indicadores, planos de ação e mecanismos de acompanhamento para apoiar execução e decisão.',
                      'Dashboards, CRMs, automações, workflows e soluções digitais aplicadas a necessidades de RH e operações.',
                      'Aplicação de HR Tech e IA em pesquisa, análise, documentação, desenho de processos, geração de insights e redução de atividades manuais.',
                      'Produtos digitais de ponta a ponta com apoio de IA: The Lusim, plataforma SaaS em operação para consultores de imigração canadense, e FreelaDeck, para gestão de freelancers.',
                      'Produção autoral do People Systems Brief, newsletter sobre RH, HR Tech, People Analytics, IA, transformação e futuro do trabalho.'
                    ]}
                  />

                  <Experience
                    color="#F58220"
                    title="HR Business Partner | Federation of Canadian-Brazilian Businesses (FCBB)"
                    period="10/2021 – 06/2025"
                    location="Toronto, Canadá"
                    bullets={[
                      'Apoio consultivo ao comitê executivo e a seis lideranças regionais em estrutura, pessoas, prioridades e execução.',
                      'Workforce Planning e Capacity Planning para estrutura de aproximadamente 36 profissionais.',
                      'Alinhamento entre estratégia organizacional, metas, prioridades das lideranças e iniciativas de pessoas, com comunicação e stakeholder management no contexto Brasil-Canadá.'
                    ]}
                  />

                  <Experience
                    color="#F58220"
                    title="Especialista em Imigração, Processos e Operações → Coordenação Operacional | CanadaVistos"
                    period="10/2021 – 06/2025"
                    location="Toronto, Canadá"
                    bullets={[
                      'Operação regulatória de aproximadamente 650 processos por ano: prioridades, documentação, acompanhamento e qualidade operacional.',
                      'Padronização, digitalização e automação de atendimento, triagem e acompanhamento, com fluxos, controles e rotinas operacionais.',
                      'International Recruitment e contratação via LMIA para empregadores canadenses, dossiês regulatórios e suporte a Work Permit.'
                    ]}
                  />

                  <Experience
                    color="#FFC20E"
                    title="Dono de Franquia | Seda Intercâmbios"
                    period="03/2020 – 04/2021"
                    location="Toronto, Canadá"
                    bullets={[
                      'Gestão da operação da unidade em Toronto, com responsabilidade por P&L, atendimento, relacionamento e tomada de decisão.',
                      'Manutenção de rede de aproximadamente 26 parcerias com escolas canadenses durante a pandemia.'
                    ]}
                  />

                  <Experience
                    color="#1B4E9B"
                    title="Gerente de Projetos de RH | HR PMO | Banco Safra"
                    period="10/2018 – 04/2020"
                    location="São Paulo, SP"
                    intro="Recrutado para estruturar a função de PMO de RH e apoiar a agenda de transformação da Diretoria de Recursos Humanos, conectando RH, Tecnologia, Operações e PMO corporativo."
                    bullets={[
                      'Estruturação do HR PMO, com liderança de equipe direta e coordenação de iniciativas em estrutura matricial.',
                      'Digitalização da admissão, reduzindo o ciclo de aproximadamente 22 para 10 dias (cerca de 55%).',
                      'Redesenho do desligamento integrado ao PeopleSoft, reduzindo o tempo de processamento em aproximadamente 50%.',
                      'Implantação do eSocial e autosserviço de ponto, férias e declarações no aplicativo de RH.',
                      'Clube de descontos com mais de 2.500 estabelecimentos parceiros, pacote de benefícios para empresa coligada e PMO da implantação do Gympass.'
                    ]}
                  />

                  <Experience
                    color="#E53924"
                    title="Santander | Estratégia, Transformação, Talentos, Dados e PMO de RH"
                    period="06/2010 – 10/2018"
                    location="São Paulo, SP"
                    intro="Progressão interna: Analista de Projetos no PMO Corporativo (2010–2012) → Analista de Indicadores de RH (2012–2013) → Analista Sênior de Orçamento de RH (2013–2014) → Coordenador de Planejamento Estratégico de RH (2014–2016) → Coordenador de Atração e Seleção (2016–2018) → Coordenador de People Analytics (2018)."
                    bullets={[
                      'Redesenho e internalização de operação de ~2.000 vagas/mês, antes apoiada por 25+ consultorias, com redução aproximada de R$ 10 milhões em custo operacional em 12 meses.',
                      'Liderança da implantação de mobilidade interna com matching algorítmico para ~50 mil colaboradores; ponto focal local de Atração e Seleção no rollout global do Workday.',
                      'Data Warehouse de RH, dashboards de Excel para Power BI, modelo preditivo de risco de saída e análises de prontidão para promoção e mérito.',
                      'Governança executiva da Diretoria de RH em reporte à Vice-Presidência para ~300 profissionais; transformação de Operações de RH em CSC.',
                      'Budget, forecast e realizado de ~R$ 6 bilhões em custos de pessoas; simulador orçamentário para comitês de pessoas.',
                      'Dashboard mensal automatizado para ~3.600 gestores e HRBPs; projetos de eficiência de custos com ~230 gestores de despesas.'
                    ]}
                  />

                  <Experience
                    color="#008CD2"
                    title="Analista de Orçamento | ABN AMRO"
                    period="05/2008 – 05/2010"
                    location="São Paulo, SP"
                    bullets={[
                      'Planejamento e acompanhamento de despesas, gestão orçamentária e padronização de processos de compras.'
                    ]}
                  />
                </div>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-3">Formação & Certificações</h2>
                <div className="space-y-2.5 text-xs">
                  <Education title="Diploma in Business Management" school="Toronto School of Management" period="2020 – 2022" />
                  <Education title="Gestão de Projetos" school="Fundação Getulio Vargas (FGV)" period="2011 – 2012" />
                  <Education title="Administração de Empresas" school="Universidade Cruzeiro do Sul" period="2005 – 2008" />
                  <div className="p-3.5 bg-[#F8FAFC] border-l-2 border-l-[#FFC20E] border-t border-r border-b border-slate-200">
                    <span className="font-black text-[#0F294A] block mb-1">Certificações</span>
                    <span className="text-slate-600">Certified Scrum Product Owner, CSPO (Scrum Alliance) | Certified Project Management (Google) | Project Management Certification, PMI Methodologies | Power BI: Dashboard de RH (Universidade Santander) | O Papel do RH na Transformação Digital (Universidade Santander)</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-3">Ferramentas</h2>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Power BI | Data Warehouse | Workday | PeopleSoft | HRIS / HR Tech | Automação de Processos | Applied AI | Desenvolvimento de Produtos Digitais
                </p>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-2">Idiomas</h2>
                <div className="grid grid-cols-3 gap-2.5 text-xs">
                  {[['Português', 'Nativo', '#008CD2'], ['Inglês', 'Profissional', '#F58220'], ['Espanhol', 'Intermediário', '#8A1538']].map(([lang, level, color]) => (
                    <div key={lang} className="p-3.5 bg-[#F8FAFC] border-l-2 border-t border-r border-b border-slate-200" style={{ borderLeftColor: color }}>
                      <span className="font-black text-[#0F294A] block">{lang}</span>
                      <span className="text-slate-600">{level}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] mb-2">Produção Editorial · People Systems Brief</h2>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">
                  Newsletter autoral no LinkedIn sobre RH, HR Tech, IA, dados, transformação e futuro do trabalho.
                </p>
                <ol className="space-y-1 text-xs text-slate-700 leading-relaxed list-decimal pl-5">
                  <li>People Analytics precisa voltar a mudar decisões</li>
                  <li>Depois do headcount: como skills, IA e capacidade estão mudando o workforce planning</li>
                  <li>Skills first exige evidência: quando competência não pode virar keyword matching 2.0</li>
                  <li>Quando a IA ajuda os dois lados: o que muda no papel do recrutador?</li>
                  <li>Agentes de IA em RH: por que o produto é apenas uma parte da transformação</li>
                  <li>Do workflow à inteligência: como a IA está ampliando o papel do ATS</li>
                </ol>
                <a href="https://www.linkedin.com/newsletters/people-systems-brief-7513012658317721600" target="_blank" rel="noreferrer" className="inline-block mt-2 text-xs font-semibold text-[#008CD2] break-all">
                  linkedin.com/newsletters/people-systems-brief
                </a>
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