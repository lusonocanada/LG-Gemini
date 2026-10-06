import { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, Layers, Rocket } from 'lucide-react';
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
    highlight: { value: 'R$ 10 mi', label: 'de redução de custo operacional em 12 meses' },
    contexto: 'Uma operação de aproximadamente 2.000 vagas por mês dependia de mais de 25 consultorias externas, em paralelo ao rollout global do Workday.',
    desafio: 'Reformular o modelo com economia real, sem perder qualidade, e adaptar os processos de recrutamento à realidade brasileira dentro de um projeto global.',
    meuPapel: 'Coordenador de Atração e Seleção, responsável pelo redesenho e internalização da operação e ponto focal local de Atração e Seleção no rollout global do Workday.',
    comoConduzi: 'Internalização de processos seletivos estratégicos, redesenho de fluxos, acompanhamento de indicadores e localização funcional do Workday.',
    entregas: [
      'Internalização de processos seletivos estratégicos',
      'Redesenho de fluxos de seleção',
      'Localização dos processos de recrutamento no Workday para o Brasil',
      'Contribuição em iniciativas de diversidade, inclusão e early careers'
    ],
    resultado: 'Redução aproximada de R$ 10 milhões em custo operacional em 12 meses, com ~2.000 vagas por mês em modelo internalizado.'
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
    meuPapel: 'Gerente de Projetos de RH, recrutado para estruturar o HR PMO do zero, com equipe direta e coordenação matricial com Tecnologia, Operações e PMO corporativo.',
    comoConduzi: 'Metodologia de PMO, matriz de priorização, rituais executivos, gestão de riscos e dependências com Tecnologia e Operações.',
    entregas: [
      'Metodologia de PMO, comitês e rituais executivos',
      'Admissão digital no PeopleSoft',
      'Redesenho do desligamento integrado ao PeopleSoft',
      'Implantação do eSocial e modernização dos processos regulatórios',
      'Autosserviço de ponto, férias e declarações no aplicativo de RH'
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
    highlight: { value: '50 mil', label: 'colaboradores em mobilidade interna com matching algorítmico' },
    contexto: 'Uma organização com cerca de 50 mil colaboradores precisava de mais visibilidade para decisões sobre talentos e mobilidade interna.',
    desafio: 'Conectar dados de pessoas a uma visão mais estruturada de oportunidades internas.',
    meuPapel: 'Liderança da implantação da mobilidade interna e, em 2018, Coordenador de People Analytics.',
    comoConduzi: 'Matching algorítmico priorizando o talento interno antes da busca externa, coordenação entre áreas de RH e parceiros, inclusive na escolha de uma alternativa tecnológica após dificuldades do fornecedor original.',
    entregas: [
      'Mobilidade interna com matching algorítmico',
      'Data Warehouse de RH e dashboards evoluídos de Excel para Power BI',
      'Modelo preditivo de risco de saída',
      'Análises de prontidão para promoção e mérito'
    ],
    resultado: 'Mobilidade interna com matching algorítmico para cerca de 50 mil colaboradores e decisões de carreira apoiadas por análises preditivas.'
  },
  {
    id: 'csc-budget',
    number: '04',
    title: 'Orçamento, CSC e governança executiva',
    organization: 'Santander Brasil',
    period: '2012 – 2016',
    color: '#F58220',
    highlight: { value: '~R$ 6 bi', label: 'em custos de pessoas sob budget e forecast' },
    contexto: 'A Vice-Presidência de RH precisava conectar planejamento estratégico, disciplina orçamentária e modernização operacional.',
    desafio: 'Governar o orçamento de pessoal enquanto as operações de RH migravam para um modelo de Centro de Serviços Compartilhados.',
    meuPapel: 'Analista de Indicadores, Analista Sênior de Orçamento e Coordenador de Planejamento Estratégico de RH, liderando a governança executiva da Diretoria de RH em reporte à Vice-Presidência.',
    comoConduzi: 'Comitês, metas e portfólio para ~300 profissionais; simulador orçamentário para comitês de pessoas; redesenho e digitalização de processos no CSC; avaliações preventivas antes de auditorias externas.',
    entregas: [
      'Budget, forecast e realizado de ~R$ 6 bilhões em custos de pessoas',
      'Simulador de promoção, mérito, contratação e desligamento',
      'Dashboard mensal automatizado para ~3.600 gestores e HRBPs',
      'Operações de RH em CSC, com indicadores de satisfação e produtividade'
    ],
    resultado: 'Governança de ~R$ 6 bilhões em custos de pessoas e indicadores mensais para ~3.600 gestores e HRBPs.'
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

// Conteúdo e capturas vindos da seção "Transformação Digital e IA" de diegomoraes.me.
const digital = {
  label: 'Consultoria independente',
  title: 'Transformação Digital e IA',
  subtitle: 'Prática independente de transformação digital: do diagnóstico à execução de produtos digitais, usando IA como alavanca de execução.',
  period: 'jun/2025 a atual · São Paulo',
  steps: [
    'Diagnóstico de necessidades',
    'Desenho e melhoria de processos',
    'Roadmap e governança',
    'Execução de produtos digitais com IA'
  ],
  products: [
    {
      name: 'The Lusim',
      tag: 'SaaS em operação',
      description: 'Plataforma para consultores de imigração canadense, construída de ponta a ponta.',
      image: '/images/produtos/the-lusim.webp',
      imageAlt: 'Painel do The Lusim com agenda, tarefas e notícias de imigração do consultor.',
      position: 'left top',
      icon: Rocket
    },
    {
      name: 'FreelaDeck',
      tag: 'SaaS para freelancers',
      description: 'Propostas comerciais, CRM e gestão operacional e financeira.',
      image: '/images/produtos/freeladeck.webp',
      imageAlt: 'Página do FreelaDeck mostrando o fluxo da oportunidade à proposta.',
      position: 'center top',
      icon: Layers
    }
  ]
};

function DigitalAI() {
  return (
    <div className="mt-10 lg:mt-14 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      <div>
        <div className="flex items-center justify-between gap-3 text-[11px] font-mono">
          <span className="font-bold text-[#8A1538]">CASE 05 · {digital.label.toUpperCase()}</span>
        </div>
        <h3 className="mt-3 text-[1.65rem] sm:text-4xl font-black tracking-tight text-[#0F294A] leading-[1.1]">{digital.title}</h3>
        <p className="mt-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#008CD2]">{digital.period}</p>
        <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">{digital.subtitle}</p>
        <ol className="mt-6 border-t border-slate-200">
          {digital.steps.map((step, idx) => (
            <li key={step} className="grid grid-cols-[48px_1fr] items-center py-3.5 sm:py-4 border-b border-slate-200">
              <span className="text-2xl sm:text-3xl font-black text-[#008CD2] leading-none">{String(idx + 1).padStart(2, '0')}</span>
              <span className="text-[15px] sm:text-base font-semibold text-[#0F294A] leading-snug">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-4">
        {digital.products.map(product => {
          const Icon = product.icon;
          return (
            <article key={product.name} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
              <div className="aspect-[16/8] bg-slate-100 border-b border-slate-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width={1600}
                  height={800}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: product.position }}
                />
              </div>
              <div className="p-5 sm:p-6 space-y-3">
                <div className="flex items-center gap-3.5">
                  <span className="w-11 h-11 rounded-full bg-[#0F294A] flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-white" />
                  </span>
                  <div>
                    <h4 className="text-xl font-black text-[#0F294A] leading-tight">{product.name}</h4>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E53924]">{product.tag}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">{product.description}</p>
              </div>
            </article>
          );
        })}
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

          <div className="sm:col-span-2 rounded-2xl bg-[#0F294A] text-white p-5 sm:p-6 flex flex-col justify-between gap-5">
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

        <DigitalAI />

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
