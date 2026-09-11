import { useState } from 'react';
import {
  CheckCircle2,
  ScanSearch,
  Network,
  Workflow,
  Rocket,
  TrendingUp,
} from 'lucide-react';
import LGChromaticBar from './LGChromaticBar';

const icons = [ScanSearch, Network, Workflow, Rocket, TrendingUp];

export default function WorkingMethodology() {
  const [activeStep, setActiveStep] = useState(0);

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

  const active = steps[activeStep];
  const ActiveIcon = icons[activeStep];

  return (
    <section id="metodo" className="py-20 lg:py-28 bg-[#F8FAFC] text-[#0F294A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-1 bg-[#FFC20E]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#B45309] font-mono">
              MÉTODO DE EXECUÇÃO
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F294A] leading-[1.12] mb-4">
            Eu organizo o caminho para que a complexidade{' '}
            <span className="text-[#008CD2] block sm:inline">não paralise a entrega.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Meu método pessoal de cinco etapas, construído na prática de projetos corporativos e adaptado ao contexto de cada entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-8">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            const StepIcon = icons[idx];

            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                aria-pressed={isSelected}
                className={`group p-4 text-left rounded-2xl transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#0F294A] text-white border-[#0F294A] shadow-xl -translate-y-1'
                    : 'bg-white/80 text-slate-700 border-slate-200 hover:bg-white hover:border-slate-300 hover:-translate-y-0.5 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-transform duration-200 group-hover:scale-105 ${
                      isSelected ? 'bg-white/10 border-white/15' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <StepIcon size={22} strokeWidth={1.8} style={{ color: isSelected ? step.color : step.color }} />
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full mt-1" style={{ backgroundColor: step.color }} />
                </div>

                <span className="text-[10px] font-mono font-bold uppercase tracking-widest block mb-1" style={{ color: isSelected ? '#FFFFFF' : step.color }}>
                  PASSO {step.number}
                </span>
                <div className={`text-[10px] font-mono uppercase tracking-wider mb-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {step.focus}
                </div>
                <h3 className="text-sm sm:text-base font-black tracking-tight leading-snug">
                  {step.title}
                </h3>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden">
          <div className="w-full absolute top-0 left-0 right-0">
            <LGChromaticBar size="xs" />
          </div>

          <div className="p-6 sm:p-10 pt-10 sm:pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center border shrink-0"
                    style={{ backgroundColor: `${active.color}10`, borderColor: `${active.color}30` }}
                  >
                    <ActiveIcon size={34} strokeWidth={1.7} style={{ color: active.color }} />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className="px-3 py-1 rounded-md text-xs font-mono font-bold text-white uppercase shadow-xs"
                        style={{ backgroundColor: active.color }}
                      >
                        ETAPA {active.number}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                        {active.focus}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-[#0F294A] leading-tight">
                      {active.title}
                    </h3>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
                  {active.summary}
                </p>

                <div className="p-5 rounded-2xl bg-[#F8FAFC] border-l-4 border-t border-r border-b border-slate-200 shadow-sm" style={{ borderLeftColor: active.color }}>
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold block mb-1" style={{ color: active.color }}>
                    Ponto de controle
                  </span>
                  <p className="text-sm sm:text-base text-slate-800 font-semibold leading-relaxed">
                    {active.checkpoint}
                  </p>
                </div>

                <div className="hidden lg:flex items-center gap-3 pt-1 text-xs font-mono uppercase tracking-widest text-slate-400">
                  <span className="h-px flex-1 bg-slate-200" />
                  <span>Da leitura do contexto à sustentação</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                      Entregáveis desta fase
                    </span>
                    <span className="text-xs font-mono font-black" style={{ color: active.color }}>
                      {active.number}/05
                    </span>
                  </div>

                  <div className="space-y-3">
                    {active.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${active.color}12` }}>
                          <CheckCircle2 size={15} style={{ color: active.color }} />
                        </div>
                        <span className="text-sm text-slate-800 font-medium leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-5 gap-1.5 mt-6" aria-hidden="true">
                    {steps.map((step, idx) => (
                      <div
                        key={step.number}
                        className="h-1.5 rounded-full transition-opacity duration-200"
                        style={{
                          backgroundColor: step.color,
                          opacity: idx === activeStep ? 1 : 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
