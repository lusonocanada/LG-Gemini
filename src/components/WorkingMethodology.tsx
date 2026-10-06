import { useState } from 'react';
import {
  CheckCircle2,
  ChevronRight,
  ScanSearch,
  Network,
  Workflow,
  Rocket,
  TrendingUp,
} from 'lucide-react';
import LGChromaticBar from './LGChromaticBar';
import BottomSheet from './BottomSheet';
import SectionHeader from './SectionHeader';

const icons = [ScanSearch, Network, Workflow, Rocket, TrendingUp];

type Step = (typeof steps)[number];

const steps = [
  {
    number: '01',
    title: 'Entender o contexto real',
    focus: 'Imersão & Diagnóstico',
    color: '#1B4E9B',
    summary: 'Escuta atenta, diagnóstico do problema real de negócio, mapeamento de pessoas e dependências entre áreas.',
    deliverables: [
      'Mapeamento de desafios e gargalos na visão da liderança e da ponta',
      'Matriz de dependências sistêmicas e processos correlacionados',
      'Definição pactuada de critérios de sucesso'
    ],
    checkpoint: 'Validação explícita com os patrocinadores antes de desenhar a solução.'
  },
  {
    number: '02',
    title: 'Alinhar o caminho e a governança',
    focus: 'Arquitetura & Governança',
    color: '#008CD2',
    summary: 'Definição de escopo viável, cronograma executivo, governança de decisão, matriz de riscos e responsabilidades.',
    deliverables: [
      'Matriz de papéis e responsabilidades clara',
      'Cronograma realista com marcos críticos de controle',
      'Matriz de riscos com planos de contingência'
    ],
    checkpoint: 'Acordo formal entre as áreas envolvidas (RH, TI e Negócios).'
  },
  {
    number: '03',
    title: 'Conduzir a construção e integrações',
    focus: 'Execução & Homologação',
    color: '#FFC20E',
    summary: 'Articulação contínua de stakeholders, alinhamento de integrações, parametrização de regras e testes cuidadosos.',
    deliverables: [
      'Ciclos de entrega funcional com validação dos usuários-chave',
      'Homologação integrada entre sistemas legados e nova plataforma',
      'Validação dos requisitos com as áreas responsáveis'
    ],
    checkpoint: 'Simulações e testes em ambiente espelho antes da virada de chave.'
  },
  {
    number: '04',
    title: 'Entrar em operação com adesão',
    focus: 'Go-Live & Transição',
    color: '#F58220',
    summary: 'Prontidão operacional, capacitação de usuários finais, comunicação de mudança e suporte próximo.',
    deliverables: [
      'Checklist de prontidão operacional e registro das pendências',
      'Capacitação prática em linguagem acessível para os times',
      'Acompanhamento e suporte assistido nos primeiros dias de uso'
    ],
    checkpoint: 'Acompanhamento de incidentes, dúvidas e prioridades de suporte.'
  },
  {
    number: '05',
    title: 'Estabilizar, medir e evoluir',
    focus: 'Adoção & Sustentação',
    color: '#8A1538',
    summary: 'Acompanhamento de curvas de adoção, monitoramento de indicadores de uso e rituais perenes de melhoria.',
    deliverables: [
      'Acompanhamento de uso real e volume transacionado',
      'Avaliação de satisfação e aderência da liderança e colaboradores',
      'Plano de evolução contínua da experiência e dos fluxos'
    ],
    checkpoint: 'Operação estabilizada com autonomia das equipes envolvidas.'
  }
];

const readable = (color: string) => (color === '#FFC20E' ? '#B45309' : color);

function StepDetail({ step, index, compact = false }: { step: Step; index: number; compact?: boolean }) {
  const Icon = icons[index];
  const color = readable(step.color);

  return (
    <div className={compact ? 'space-y-5' : 'grid grid-cols-12 gap-10 items-start'}>
      <div className={compact ? 'space-y-5' : 'col-span-7 space-y-6'}>
        <div className={`flex gap-4 ${compact ? 'items-center' : 'items-start'}`}>
          <div
            className={`${compact ? 'w-12 h-12' : 'w-16 h-16'} rounded-2xl flex items-center justify-center border shrink-0`}
            style={{ backgroundColor: `${step.color}10`, borderColor: `${step.color}30` }}
          >
            <Icon size={compact ? 24 : 32} strokeWidth={1.7} style={{ color }} />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider block mb-1" style={{ color }}>
              {step.focus}
            </span>
            {/* No drawer o título já está no cabeçalho fixo. */}
            {!compact && <h3 className="text-3xl font-black text-[#0F294A] leading-tight">{step.title}</h3>}
          </div>
        </div>

        <p className={`${compact ? 'text-[15px]' : 'text-lg'} text-slate-700 leading-relaxed`}>{step.summary}</p>

        <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 border-l-4" style={{ borderLeftColor: step.color }}>
          <span className="text-[10px] font-mono uppercase tracking-widest font-bold block mb-1" style={{ color }}>
            Ponto de controle
          </span>
          <p className="text-sm sm:text-base text-slate-800 font-semibold leading-relaxed">{step.checkpoint}</p>
        </div>
      </div>

      <div className={compact ? '' : 'col-span-5'}>
        <div className="bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 border border-slate-200">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-4">
            Entregáveis desta fase
          </span>
          <ul className="space-y-3">
            {step.deliverables.map(item => (
              <li key={item} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color }} />
                <span className="text-sm text-slate-800 font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function WorkingMethodology() {
  const [activeStep, setActiveStep] = useState(0);
  const [sheetStep, setSheetStep] = useState<number | null>(null);
  const active = steps[activeStep];

  return (
    <section id="metodo" className="py-16 sm:py-20 lg:py-28 bg-[#F8FAFC] text-[#0F294A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Como eu trabalho"
          color="#FFC20E"
          title={<>Não basta implantar tecnologia.{' '}<span className="text-[#008CD2]">É preciso fazer pessoas, processos e decisões funcionarem juntos.</span></>}
          lead="Minha forma de trabalhar começa pela operação: traduzo uma ambição de negócio em processos claros, governança possível, escolhas de tecnologia e uma experiência que líderes e colaboradores conseguem adotar. Na prática, isso vira um método de cinco etapas."
        />

        <div className="mb-8 lg:mb-10 rounded-2xl bg-[#0F294A] border-l-4 border-l-[#FFC20E] p-5 sm:p-7 text-white">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC20E] font-bold block mb-1">Princípio</span>
          <p className="text-lg sm:text-2xl font-black tracking-tight">
            High Tech para criar escala. <span className="text-[#FFC20E]">High Touch para criar adesão.</span>
          </p>
        </div>

        {/* Mobile: lista enxuta; cada passo abre em drawer. */}
        <ol className="lg:hidden space-y-2.5">
          {steps.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <li key={step.number}>
                <button
                  type="button"
                  onClick={event => { event.currentTarget.focus(); setSheetStep(idx); }}
                  className="w-full text-left p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-4 active:scale-[0.99] transition-transform cursor-pointer"
                >
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-200 shrink-0">
                    <Icon size={21} strokeWidth={1.8} style={{ color: readable(step.color) }} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: readable(step.color) }}>
                      Passo {step.number} · {step.focus}
                    </span>
                    <span className="block text-[15px] font-black text-[#0F294A] leading-snug mt-0.5">{step.title}</span>
                  </span>
                  <ChevronRight size={18} className="text-slate-400 shrink-0" aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ol>

        {/* Desktop: seletor e detalhe adjacentes. */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-3.5 mb-6" role="tablist" aria-label="Etapas do método">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              const Icon = icons[idx];
              return (
                <button
                  key={step.number}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="metodo-detalhe"
                  onClick={() => setActiveStep(idx)}
                  className={`group p-4 text-left rounded-2xl transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#0F294A] text-white border-[#0F294A] shadow-xl -translate-y-1'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:-translate-y-0.5 shadow-sm'
                  }`}
                >
                  <span className={`w-10 h-10 mb-3 rounded-xl flex items-center justify-center border ${isSelected ? 'bg-white/10 border-white/15' : 'bg-slate-50 border-slate-200'}`}>
                    <Icon size={20} strokeWidth={1.8} style={{ color: isSelected ? '#FFFFFF' : readable(step.color) }} />
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest block mb-1" style={{ color: isSelected ? '#FFC20E' : readable(step.color) }}>
                    Passo {step.number}
                  </span>
                  <span className="block text-base font-black tracking-tight leading-snug">{step.title}</span>
                </button>
              );
            })}
          </div>

          <div id="metodo-detalhe" role="tabpanel" className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
            <LGChromaticBar size="xs" />
            <div className="p-10">
              <StepDetail step={active} index={activeStep} />
            </div>
          </div>
        </div>
      </div>

      <BottomSheet
        open={sheetStep !== null}
        onClose={() => setSheetStep(null)}
        eyebrow={sheetStep !== null ? `Passo ${steps[sheetStep].number} de 05` : ''}
        title={sheetStep !== null ? steps[sheetStep].title : ''}
        accent={sheetStep !== null ? readable(steps[sheetStep].color) : undefined}
      >
        {sheetStep !== null && (
          <div className="space-y-6">
            <StepDetail step={steps[sheetStep]} index={sheetStep} compact />
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                type="button"
                disabled={sheetStep === 0}
                onClick={() => setSheetStep(sheetStep - 1)}
                className="px-4 py-2.5 rounded-full border border-slate-300 text-xs font-bold uppercase tracking-wider text-[#0F294A] disabled:opacity-40 cursor-pointer"
              >
                Anterior
              </button>
              <div className="flex gap-1.5" aria-hidden="true">
                {steps.map((s, idx) => (
                  <span key={s.number} className="h-1.5 w-5 rounded-full" style={{ backgroundColor: s.color, opacity: idx === sheetStep ? 1 : 0.2 }} />
                ))}
              </div>
              <button
                type="button"
                disabled={sheetStep === steps.length - 1}
                onClick={() => setSheetStep(sheetStep + 1)}
                className="px-4 py-2.5 rounded-full bg-[#0F294A] text-white text-xs font-bold uppercase tracking-wider disabled:opacity-40 cursor-pointer"
              >
                Próximo
              </button>
            </div>
          </div>
        )}
      </BottomSheet>
    </section>
  );
}
