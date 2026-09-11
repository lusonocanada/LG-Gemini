import { useMotionPreference } from '../hooks/useMotionPreference';
import { useState } from 'react';
import { useDialog } from '../hooks/useDialog';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, X } from 'lucide-react';
import LGChromaticBar from './LGChromaticBar';

interface CaseItem {
  id: string;
  number: string;
  title: string;
  organization: string;
  period: string;
  color: string;
  contexto: string;
  desafio: string;
  meuPapel: string;
  comoConduzi: string;
  entregas: string[];
  resultado: string;
}

const casesData: CaseItem[] = [
  {
    id: 'case-1',
    number: '01',
    title: 'HR PMO e PeopleSoft',
    organization: 'Banco Safra',
    period: '2018 – 2020',
    color: '#1B4E9B',
    contexto: 'A Diretoria de RH tinha uma carteira prioritária de projetos que precisava de governança, cadência de decisão e visibilidade executiva.',
    desafio: 'Criar o PMO de RH e acelerar jornadas críticas de admissão e desligamento sem gerar fricção na operação.',
    meuPapel: 'Gerente de Projetos de RH, responsável por estruturar o HR PMO e conduzir a carteira prioritária da diretoria.',
    comoConduzi: 'Metodologia de PMO, matriz de priorização, rituais executivos, gestão de riscos e dependências com Tecnologia e Operações.',
    entregas: [
      'Metodologia de PMO, comitês e rituais executivos',
      'Admissão digital no PeopleSoft',
      'Modernização do portal e do aplicativo de RH',
      'Redesenho do fluxo de desligamento'
    ],
    resultado: 'Redução aproximada de 60% no ciclo de admissão e de 50% no tempo de processamento de desligamentos.'
  },
  {
    id: 'case-2',
    number: '02',
    title: 'CSC, orçamento e governança',
    organization: 'Santander Brasil',
    period: '2012 – 2016',
    color: '#008CD2',
    contexto: 'A Vice-Presidência de RH precisava conectar planejamento estratégico, disciplina orçamentária e modernização operacional.',
    desafio: 'Governar o orçamento de pessoal enquanto as operações de RH migravam para um modelo de Centro de Serviços Compartilhados.',
    meuPapel: 'Atuação em indicadores, orçamento e planejamento estratégico de RH, com apoio à gestão do portfólio da VP de RH e interface com TI.',
    comoConduzi: 'Cenários orçamentários, estruturação de catálogo de serviços, definição de SLAs e articulação entre negócio, TI e especialistas funcionais.',
    entregas: [
      'Governança e acompanhamento do budget de pessoal',
      'Catálogo de serviços de RH e SLAs',
      'Cenários orçamentários para liderança',
      'Operações com autosserviço e escala'
    ],
    resultado: 'Maior clareza para a liderança sobre orçamento, serviços e prioridades operacionais de RH.'
  },
  {
    id: 'case-3',
    number: '03',
    title: 'Talent Acquisition e Workday',
    organization: 'Santander Brasil',
    period: '2016 – 2018',
    color: '#8A1538',
    contexto: 'O modelo de atração e seleção precisava ganhar eficiência e oferecer uma experiência mais digital ao candidato, em paralelo à implantação global do Workday.',
    desafio: 'Reformular o modelo com economia real, sem perder qualidade, e adaptar os processos de recrutamento à realidade brasileira dentro de um projeto global.',
    meuPapel: 'Atuação na reformulação de Talent Acquisition e como ponto focal de Talent no projeto global Workday para o Brasil.',
    comoConduzi: 'Internalização de processos seletivos estratégicos, redesenho de fluxos, acompanhamento de indicadores e localização funcional do Workday.',
    entregas: [
      'Internalização de processos seletivos estratégicos',
      'Redesenho de fluxos de seleção',
      'Localização dos processos de recrutamento no Workday para o Brasil'
    ],
    resultado: 'Economia anual aproximada de R$ 10 milhões.'
  },
  {
    id: 'case-4',
    number: '04',
    title: 'People Analytics e mobilidade',
    organization: 'Santander Brasil',
    period: '2016 – 2018',
    color: '#F58220',
    contexto: 'Uma organização com cerca de 50 mil colaboradores precisava de mais visibilidade para decisões sobre talentos e mobilidade interna.',
    desafio: 'Conectar dados de pessoas a uma visão mais estruturada de oportunidades internas.',
    meuPapel: 'Atuação em People Analytics e iniciativas de mobilidade interna.',
    comoConduzi: 'Organização de informações de talento e desenvolvimento de modelos de mobilidade a partir das perguntas da liderança.',
    entregas: [
      'Informações de talento organizadas para apoiar decisões',
      'Modelos de mobilidade interna'
    ],
    resultado: 'Mais visibilidade sobre talentos e mobilidade interna para cerca de 50 mil colaboradores.'
  },
  {
    id: 'case-5',
    number: '05',
    title: 'HRBP e operação internacional',
    organization: 'Toronto, Canadá',
    period: '2020 – 2025',
    color: '#FFC20E',
    contexto: 'Atuação no Canadá em ambiente multicultural, conectando operação, pessoas e relacionamento com stakeholders.',
    desafio: 'Conciliar proximidade com pessoas, planejamento e execução operacional em contexto internacional.',
    meuPapel: 'HR Business Partner e líder de operações.',
    comoConduzi: 'Apoio à governança, planejamento de atividades, organização de rotinas e relacionamento próximo com pessoas e clientes.',
    entregas: [
      'Apoio à governança e planejamento',
      'Padronização de operações críticas',
      'Gestão de operações e relacionamento'
    ],
    resultado: 'Experiência prática de gestão de pessoas e operações em ambiente multicultural.'
  },
  {
    id: 'case-6',
    number: '06',
    title: 'IA aplicada e prototipação',
    organization: 'Consultoria e soluções digitais',
    period: '2025 – Atual',
    color: '#00A3E0',
    contexto: 'Gargalos de operação e RH podem ser testados em ciclos curtos antes de exigir um grande investimento.',
    desafio: 'Reduzir o tempo entre uma necessidade real e uma solução utilizável, com validação humana.',
    meuPapel: 'Atuação em transformação digital, automação, dados e IA aplicada.',
    comoConduzi: 'Diagnóstico, prototipação, desenho de fluxos, dashboards e automações para testar hipóteses.',
    entregas: [
      'Protótipos funcionais',
      'Dashboards e fluxos de apoio à decisão',
      'Automações de rotinas de análise e documentação'
    ],
    resultado: 'Hipóteses testadas em ciclos curtos antes de uma implantação em maior escala.'
  }
];

export default function SelectedCases() {
  const reduced = useMotionPreference();
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [mobileModalCase, setMobileModalCase] = useState<CaseItem | null>(null);

  const dialogRef = useDialog(!!mobileModalCase, () => setMobileModalCase(null));

  const activeCase = casesData[selectedCaseIdx];

  return (
    <section id="cases" className="py-20 lg:py-28 bg-white text-[#0F294A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-1 bg-[#8A1538]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#8A1538] font-mono">
              CASES SELECIONADOS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F294A] leading-[1.12]">
            Projetos em que participei da transformação na prática.
          </h2>
        </div>

        {/* Desktop View: Split Sidebar Navigation (Left) + Detail Card (Right) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          
          {/* Left: Case Selector */}
          <div className="col-span-4 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-3">
              Selecione o Case:
            </span>

            {casesData.map((c, idx) => {
              const isSelected = selectedCaseIdx === idx;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCaseIdx(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 cursor-pointer border-l-4 ${
                    isSelected 
                      ? 'liquid-glass-light shadow-lg scale-[1.02] border-t border-r border-b border-white' 
                      : 'liquid-glass-card opacity-85 hover:opacity-100 hover:scale-[1.01]'
                  }`}
                  style={{ borderLeftColor: c.color }}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span className="font-bold" style={{ color: c.color }}>CASE {c.number}</span>
                    <span className="text-slate-400 font-semibold">{c.period}</span>
                  </div>
                  <div className="text-sm font-black text-[#0F294A] tracking-tight">
                    {c.title}
                  </div>
                  <div className="text-xs text-slate-600 truncate mt-0.5">
                    {c.organization}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Showcase with Liquid Glass */}
          <div className="col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={reduced ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={reduced ? { duration: 0, delay: 0 } : { duration: 0.25 }}
                className="liquid-glass-card rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden"
              >
                {/* Chromatic Top Bar */}
                <div className="w-full">
                  <LGChromaticBar size="xs" />
                </div>

                {/* Case Header (Liquid Glass Dark) */}
                <div className="p-6 sm:p-8 liquid-glass-dark text-white border-b border-white/10">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span 
                      className="px-3 py-1 rounded-md text-xs font-mono font-bold text-white uppercase tracking-wider shadow-xs"
                      style={{ backgroundColor: activeCase.color }}
                    >
                      CASE {activeCase.number}
                    </span>
                    <span className="text-xs font-mono text-slate-300">
                      {activeCase.organization} · {activeCase.period}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {activeCase.title}
                  </h3>
                </div>

                {/* Structured Body: Contexto -> Desafio -> Meu Papel -> Como Conduzi -> Entregas -> Resultado */}
                <div className="p-6 sm:p-10 space-y-6">
                  
                  {/* Contexto & Desafio */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-xs">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-1">
                        Contexto
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {activeCase.contexto}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border-t-2 border-t-[#E53924] border-l border-r border-b border-slate-200/80 shadow-xs">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#E53924] font-bold block mb-1">
                        Desafio
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {activeCase.desafio}
                      </p>
                    </div>
                  </div>

                  {/* Meu Papel */}
                  <div className="liquid-glass-dark rounded-2xl text-white p-5 border-l-4 shadow-sm" style={{ borderLeftColor: activeCase.color }}>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC20E] font-bold block mb-1">
                      Meu Papel
                    </span>
                    <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                      {activeCase.meuPapel}
                    </p>
                  </div>

                  {/* Como Conduzi */}
                  <div className="p-4 bg-[#F8FAFC] border-l-4 border-slate-300 border-t border-r border-b border-slate-200">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-1">
                      Como Conduzi
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {activeCase.comoConduzi}
                    </p>
                  </div>

                  {/* Entregas */}
                  <div className="pt-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-3">
                      Entregas:
                    </span>
                    <div className="space-y-2">
                      {activeCase.entregas.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-[#008CD2] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Resultado */}
                  <div className="p-4 bg-[#F8FAFC] border-l-4 border-l-[#8A1538] border-t border-r border-b border-slate-200 text-xs sm:text-sm text-slate-900 font-semibold">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A1538] font-bold block mb-1">
                      Resultado
                    </span>
                    <p className="leading-relaxed">
                      {activeCase.resultado}
                    </p>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile View: Cards + Bottom Sheet */}
        <div className="lg:hidden space-y-4">
          {casesData.map((c, idx) => (
            <div
              key={c.id}
              className="bg-[#F8FAFC] border-l-4 border-t border-r border-b border-slate-200 p-5 space-y-3"
              style={{ borderLeftColor: c.color }}
            >
              <div className="flex items-center justify-between">
                <span 
                  className="text-xs font-mono font-bold px-2 py-0.5"
                  style={{ 
                    backgroundColor: c.color === '#FFC20E' ? '#FEF3C7' : `${c.color}15`, 
                    color: c.color === '#FFC20E' ? '#92400E' : c.color 
                  }}
                >
                  CASE {c.number}
                </span>
                <span className="text-xs text-slate-500 font-medium">{c.organization}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#0F294A]">{c.title}</h3>
                <p className="text-xs text-slate-600 mt-1">{c.period}</p>
              </div>

              <button
                onClick={event => { event.currentTarget.focus(); setMobileModalCase(c); }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold border border-slate-300 rounded-full cursor-pointer uppercase tracking-wider shadow-xs"
              >
                <span>Ver detalhes do case</span>
                <ChevronRight size={14} style={{ color: c.color }} />
              </button>
            </div>
          ))}
        </div>

        {/* Mobile Detail Modal Bottom Sheet (Dark backdrop, solid header with close button, single scroll) */}
        <AnimatePresence>
          {mobileModalCase && (
            <div className="fixed inset-0 z-[120] flex items-end justify-center" role="dialog" aria-modal="true" aria-labelledby="case-dialog-title">
              <motion.div
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileModalCase(null)}
                className="fixed inset-0 bg-[#0F294A]/80 backdrop-blur-xs"
              />

              <motion.div
                ref={dialogRef}
                tabIndex={-1}
                initial={reduced ? false : { y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={reduced ? { duration: 0, delay: 0 } : { type: 'spring', damping: 25, stiffness: 250 }}
                className="relative z-10 w-full max-h-[88vh] liquid-glass-light rounded-t-3xl border-t-4 p-6 overflow-y-auto space-y-6 shadow-2xl backdrop-blur-2xl"
                style={{ borderTopColor: mobileModalCase.color }}
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 sticky top-0 bg-white/80 backdrop-blur-xl z-20 -mx-2 px-2">
                  <span className="text-xs font-mono font-bold" style={{ color: mobileModalCase.color }}>
                    CASE {mobileModalCase.number} · {mobileModalCase.organization}
                  </span>
                  <button
                    onClick={() => setMobileModalCase(null)}
                    aria-label="Fechar detalhes do case"
                    className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded-full transition-colors cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div>
                  <h3 id="case-dialog-title" className="text-xl font-black text-[#0F294A]">{mobileModalCase.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 font-medium">{mobileModalCase.period}</p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="font-bold uppercase tracking-wider text-slate-400 block mb-1">Contexto</span>
                    <p className="text-slate-700 leading-relaxed">{mobileModalCase.contexto}</p>
                  </div>

                  <div>
                    <span className="font-bold uppercase tracking-wider text-slate-400 block mb-1">Desafio</span>
                    <p className="text-slate-700 leading-relaxed">{mobileModalCase.desafio}</p>
                  </div>

                  <div className="bg-[#F8FAFC] p-3.5 border-l-4 border-slate-300" style={{ borderLeftColor: mobileModalCase.color }}>
                    <span className="font-bold uppercase tracking-wider block mb-1" style={{ color: mobileModalCase.color }}>Meu Papel</span>
                    <p className="text-slate-900 font-semibold">{mobileModalCase.meuPapel}</p>
                  </div>

                  <div>
                    <span className="font-bold uppercase tracking-wider text-slate-400 block mb-1">Como Conduzi</span>
                    <p className="text-slate-700 leading-relaxed">{mobileModalCase.comoConduzi}</p>
                  </div>

                  <div>
                    <span className="font-bold uppercase tracking-wider text-slate-400 block mb-1">Entregas</span>
                    <div className="space-y-1.5">
                      {mobileModalCase.entregas.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-700">
                          <CheckCircle2 size={14} className="text-[#008CD2] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="font-bold uppercase tracking-wider text-[#8A1538] block mb-1">Resultado</span>
                    <p className="bg-[#F8FAFC] p-3 border-l-4 border-l-[#8A1538] text-slate-900 font-medium">
                      {mobileModalCase.resultado}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
