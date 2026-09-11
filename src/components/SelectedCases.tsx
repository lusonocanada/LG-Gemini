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
  image: string;
  imageAlt: string;
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
    image: '/images/cases/case-01-safra.webp',
    imageAlt: 'Ambiente corporativo do Banco Safra em São Paulo.',
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
    image: '/images/cases/case-02-csc.webp',
    imageAlt: 'Ambiente corporativo do Santander Brasil.',
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
    image: '/images/cases/case-03-talent-workday.webp',
    imageAlt: 'Reunião corporativa representando Talent Acquisition e transformação de RH.',
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
    image: '/images/cases/case-04-people-analytics.webp',
    imageAlt: 'Dashboard de People Analytics em notebook corporativo.',
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
    image: '/images/cases/case-05-toronto.webp',
    imageAlt: 'Vista de Toronto representando experiência profissional internacional.',
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
    image: '/images/cases/case-06-ia.webp',
    imageAlt: 'Visual conceitual de inteligência artificial aplicada a soluções digitais.',
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

function CaseDetail({ item }: { item: CaseItem }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-xs">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-1">Contexto</span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.contexto}</p>
        </div>
        <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border-t-2 border-t-[#E53924] border-l border-r border-b border-slate-200/80 shadow-xs">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#E53924] font-bold block mb-1">Desafio</span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.desafio}</p>
        </div>
      </div>

      <div className="liquid-glass-dark rounded-2xl text-white p-5 border-l-4 shadow-sm" style={{ borderLeftColor: item.color }}>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC20E] font-bold block mb-1">Meu Papel</span>
        <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">{item.meuPapel}</p>
      </div>

      <div className="p-4 bg-[#F8FAFC] border-l-4 border-slate-300 border-t border-r border-b border-slate-200">
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-1">Como Conduzi</span>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.comoConduzi}</p>
      </div>

      <div className="pt-2">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-3">Entregas:</span>
        <div className="space-y-2">
          {item.entregas.map((entrega, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 size={16} className="text-[#008CD2] shrink-0 mt-0.5" />
              <span>{entrega}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-[#F8FAFC] border-l-4 border-l-[#8A1538] border-t border-r border-b border-slate-200 text-xs sm:text-sm text-slate-900 font-semibold">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A1538] font-bold block mb-1">Resultado</span>
        <p className="leading-relaxed">{item.resultado}</p>
      </div>
    </>
  );
}

export default function SelectedCases() {
  const reduced = useMotionPreference();
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [mobileModalCase, setMobileModalCase] = useState<CaseItem | null>(null);
  const dialogRef = useDialog(!!mobileModalCase, () => setMobileModalCase(null));
  const activeCase = casesData[selectedCaseIdx];

  return (
    <section id="cases" className="py-20 lg:py-28 bg-white text-[#0F294A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-1 bg-[#8A1538]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#8A1538] font-mono">CASES SELECIONADOS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F294A] leading-[1.12]">
            Projetos em que participei da transformação na prática.
          </h2>
        </div>

        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          <div className="col-span-4 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-3">Selecione o Case:</span>
            {casesData.map((item, idx) => {
              const selected = selectedCaseIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedCaseIdx(idx)}
                  className={`w-full text-left rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer border-l-4 ${selected ? 'liquid-glass-light shadow-lg scale-[1.02] border-t border-r border-b border-white' : 'liquid-glass-card opacity-90 hover:opacity-100 hover:scale-[1.01]'}`}
                  style={{ borderLeftColor: item.color }}
                >
                  <div className="flex min-h-[104px]">
                    <img src={item.image} alt={item.imageAlt} loading="lazy" className="w-[118px] shrink-0 object-cover" />
                    <div className="p-3.5 min-w-0 flex-1 flex flex-col justify-center">
                      <div className="flex items-center justify-between text-[10px] font-mono mb-1.5 gap-2">
                        <span className="font-bold" style={{ color: item.color }}>CASE {item.number}</span>
                        <span className="text-slate-400 font-semibold whitespace-nowrap">{item.period}</span>
                      </div>
                      <div className="text-sm font-black text-[#0F294A] tracking-tight leading-snug">{item.title}</div>
                      <div className="text-xs text-slate-600 truncate mt-1">{item.organization}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={reduced ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={reduced ? { duration: 0 } : { duration: 0.25 }}
                className="liquid-glass-card rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden"
              >
                <LGChromaticBar size="xs" />

                <div className="relative h-[280px] overflow-hidden bg-[#0F294A]">
                  <img src={activeCase.image} alt={activeCase.imageAlt} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#07192f]/90 via-[#0F294A]/55 to-[#0F294A]/15" />
                  <div className="absolute inset-0 p-7 sm:p-9 flex flex-col justify-between text-white">
                    <div className="flex items-start justify-between gap-4">
                      <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider shadow-sm" style={{ backgroundColor: activeCase.color }}>
                        CASE {activeCase.number}
                      </span>
                      <span className="text-xs font-mono text-white/90 text-right drop-shadow">{activeCase.organization} · {activeCase.period}</span>
                    </div>
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-black tracking-tight drop-shadow-lg">{activeCase.title}</h3>
                      <p className="text-sm sm:text-base text-white/90 mt-1.5 font-medium">{activeCase.organization}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-10 space-y-6">
                  <CaseDetail item={activeCase} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:hidden space-y-4">
          {casesData.map(item => (
            <div key={item.id} className="bg-[#F8FAFC] border-l-4 border-t border-r border-b border-slate-200 overflow-hidden" style={{ borderLeftColor: item.color }}>
              <img src={item.image} alt={item.imageAlt} loading="lazy" className="w-full aspect-[16/7] object-cover" />
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2 py-0.5" style={{ backgroundColor: item.color === '#FFC20E' ? '#FEF3C7' : `${item.color}15`, color: item.color === '#FFC20E' ? '#92400E' : item.color }}>CASE {item.number}</span>
                  <span className="text-xs text-slate-500 font-medium">{item.organization}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F294A]">{item.title}</h3>
                  <p className="text-xs text-slate-600 mt-1">{item.period}</p>
                </div>
                <button onClick={event => { event.currentTarget.focus(); setMobileModalCase(item); }} className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold border border-slate-300 rounded-full cursor-pointer uppercase tracking-wider shadow-xs">
                  <span>Ver detalhes do case</span><ChevronRight size={14} style={{ color: item.color }} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {mobileModalCase && (
            <div className="fixed inset-0 z-[120] flex items-end justify-center" role="dialog" aria-modal="true" aria-labelledby="case-dialog-title">
              <motion.div initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileModalCase(null)} className="fixed inset-0 bg-[#0F294A]/80 backdrop-blur-xs" />
              <motion.div
                ref={dialogRef}
                tabIndex={-1}
                initial={reduced ? false : { y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={reduced ? { duration: 0 } : { type: 'spring', damping: 25, stiffness: 250 }}
                className="relative z-10 w-full max-h-[88vh] liquid-glass-light rounded-t-3xl border-t-4 overflow-y-auto shadow-2xl backdrop-blur-2xl"
                style={{ borderTopColor: mobileModalCase.color }}
              >
                <div className="relative h-48 bg-[#0F294A]">
                  <img src={mobileModalCase.image} alt={mobileModalCase.imageAlt} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07192f]/90 via-[#0F294A]/35 to-transparent" />
                  <button onClick={() => setMobileModalCase(null)} aria-label="Fechar detalhes do case" className="absolute right-4 top-4 p-2 text-white bg-black/30 hover:bg-black/50 rounded-full cursor-pointer backdrop-blur-sm"><X size={20} /></button>
                  <div className="absolute left-5 right-14 bottom-5 text-white">
                    <span className="text-xs font-mono font-bold" style={{ color: mobileModalCase.color }}>CASE {mobileModalCase.number}</span>
                    <h3 id="case-dialog-title" className="text-2xl font-black mt-1">{mobileModalCase.title}</h3>
                    <p className="text-xs text-white/80 mt-1">{mobileModalCase.organization} · {mobileModalCase.period}</p>
                  </div>
                </div>
                <div className="p-6 space-y-6"><CaseDetail item={mobileModalCase} /></div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
