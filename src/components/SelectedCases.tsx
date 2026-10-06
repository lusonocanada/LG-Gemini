import { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import BottomSheet from './BottomSheet';
import SectionHeader from './SectionHeader';

interface CaseItem {
  id: string;
  number: string;
  title: string;
  organization: string;
  period: string;
  color: string;
  highlight: { value: string; label: string };
  contexto: string;
  desafio: string;
  meuPapel: string;
  comoConduzi: string;
  entregas: string[];
  resultado: string;
}

const casesData: CaseItem[] = [
  {
    id: 'talent-workday',
    number: '01',
    title: 'Talent Acquisition e Workday',
    organization: 'Santander Brasil',
    period: '2016 – 2018',
    color: '#E53924',
    highlight: { value: 'R$ 10 mi', label: 'de economia anual aproximada' },
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
    id: 'safra-pmo',
    number: '02',
    title: 'HR PMO e jornadas no PeopleSoft',
    organization: 'Banco Safra',
    period: '2018 – 2020',
    color: '#008CD2',
    highlight: { value: '−55%', label: 'no ciclo de admissão (22 → 10 dias) e −50% no desligamento' },
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
    resultado: 'Redução aproximada de 55% no ciclo de admissão (de 22 para 10 dias) e de 50% no tempo de processamento de desligamentos.'
  },
  {
    id: 'people-analytics',
    number: '03',
    title: 'People Analytics e mobilidade interna',
    organization: 'Santander Brasil',
    period: '2016 – 2018',
    color: '#1B4E9B',
    highlight: { value: '50 mil', label: 'colaboradores com mais visibilidade para mobilidade' },
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
    id: 'csc-budget',
    number: '04',
    title: 'CSC, orçamento e governança',
    organization: 'Santander Brasil',
    period: '2012 – 2016',
    color: '#F58220',
    highlight: { value: 'CSC', label: 'budget de pessoal, catálogo de serviços e SLAs' },
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
    id: 'ia-prototipacao',
    number: '05',
    title: 'IA aplicada e prototipação',
    organization: 'Consultoria e soluções digitais',
    period: '2025 – Atual',
    color: '#8A1538',
    highlight: { value: 'Ciclos curtos', label: 'hipóteses testadas antes de escalar' },
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
    <div className="space-y-5">
      <div className="rounded-2xl p-5 text-white" style={{ backgroundColor: '#0F294A' }}>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC20E] font-bold block mb-1">Resultado</span>
        <p className="text-3xl font-black tracking-tight" style={{ color: '#7FD3F7' }}>{item.highlight.value}</p>
        <p className="text-sm text-slate-200 leading-relaxed mt-1">{item.resultado}</p>
      </div>

      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        {[
          ['Contexto', item.contexto],
          ['Desafio', item.desafio],
          ['Meu papel', item.meuPapel],
          ['Como conduzi', item.comoConduzi]
        ].map(([label, text]) => (
          <div key={label}>
            <dt className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold mb-1">{label}</dt>
            <dd className="text-sm text-slate-700 leading-relaxed">{text}</dd>
          </div>
        ))}
      </dl>

      <div className="pt-4 border-t border-slate-200">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-3">Entregas</span>
        <ul className="space-y-2">
          {item.entregas.map(entrega => (
            <li key={entrega} className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: item.color }} />
              <span>{entrega}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface SelectedCasesProps {
  onOpenCvModal: () => void;
}

export default function SelectedCases({ onOpenCvModal }: SelectedCasesProps) {
  const [openCase, setOpenCase] = useState<CaseItem | null>(null);

  return (
    <section id="cases" className="py-16 sm:py-20 lg:py-28 bg-white text-[#0F294A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Cases e resultados"
          color="#8A1538"
          title="Projetos em que participei da transformação na prática."
          lead="O resultado aparece primeiro. Abra cada case para ver contexto, papel, condução e entregas."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {casesData.map(item => (
            <button
              key={item.id}
              type="button"
              onClick={event => { event.currentTarget.focus(); setOpenCase(item); }}
              className="group text-left rounded-2xl bg-[#F8FAFC] hover:bg-white border border-slate-200 hover:border-slate-300 border-t-4 p-5 sm:p-6 flex flex-col gap-4 shadow-xs hover:shadow-lg transition-all cursor-pointer"
              style={{ borderTopColor: item.color }}
            >
              <div className="flex items-center justify-between gap-3 text-[11px] font-mono">
                <span className="font-bold" style={{ color: item.color }}>CASE {item.number}</span>
                <span className="text-slate-500 whitespace-nowrap">{item.period}</span>
              </div>

              <div>
                <p className="text-3xl sm:text-[2rem] font-black tracking-tight text-[#0F294A] leading-none">{item.highlight.value}</p>
                <p className="text-xs text-slate-600 mt-1.5 leading-snug">{item.highlight.label}</p>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-200">
                <h3 className="text-base font-black text-[#0F294A] leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{item.organization}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#008CD2]">
                  Ver case completo
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </button>
          ))}

          <div className="rounded-2xl bg-[#0F294A] text-white p-5 sm:p-6 flex flex-col justify-between gap-5">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#FFC20E]">Visão completa</span>
              <p className="text-lg font-black leading-snug mt-2">Todas as experiências, formação e competências em um só lugar.</p>
            </div>
            <button
              type="button"
              onClick={event => { event.currentTarget.focus(); onOpenCvModal(); }}
              className="self-start inline-flex items-center gap-2 px-5 py-3 bg-[#008CD2] hover:bg-[#0072CE] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors cursor-pointer"
            >
              <FileText size={14} />
              Ver currículo
            </button>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500 text-center">
          Métricas aproximadas, referentes a projetos e experiências profissionais de Diego Moraes em seus respectivos contextos.
        </p>
      </div>

      <BottomSheet
        open={!!openCase}
        onClose={() => setOpenCase(null)}
        eyebrow={openCase ? `Case ${openCase.number} · ${openCase.organization} · ${openCase.period}` : ''}
        title={openCase?.title ?? ''}
        accent={openCase?.color}
        desktopModal
      >
        {openCase && <CaseDetail item={openCase} />}
      </BottomSheet>
    </section>
  );
}
