import ContextImage from './ContextImage';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import LGChromaticBar from './LGChromaticBar';

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

  return (
    <section id="metodo" className="py-20 lg:py-28 bg-[#F8FAFC] text-[#0F294A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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

        {/* Phase Selector Conveyor (5 Step Blueprint) with Liquid Glass */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-8">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                aria-pressed={isSelected}
                className={`p-4 text-left rounded-2xl transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'liquid-glass-dark text-white border-2 border-[#00A3E0] shadow-xl scale-[1.02]'
                    : 'liquid-glass-card text-slate-700 hover:text-[#0F294A] hover:scale-[1.01]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-1.5 font-bold">
                  <span style={{ color: isSelected ? '#00A3E0' : step.color }}>PASSO {step.number}</span>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: step.color }} />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider block opacity-80 mb-1">
                  {step.focus}
                </div>
                <h3 className="text-sm sm:text-base font-black tracking-tight leading-snug">
                  {step.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspection Stage for Selected Phase with Liquid Glass */}
        <div className="liquid-glass-card rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          <div className="w-full absolute top-0 left-0 right-0">
            <LGChromaticBar size="xs" />
          </div>

          <div className="method-detail pt-2">
            
            <div className="method-copy">
            <div className="method-summary space-y-4">
              <div className="flex items-center gap-3">
                <span 
                  className="px-3 py-1 rounded-md text-xs font-mono font-bold text-white uppercase shadow-xs"
                  style={{ backgroundColor: steps[activeStep].color }}
                >
                  ETAPA {steps[activeStep].number}
                </span>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  {steps[activeStep].focus}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0F294A] leading-tight">
                {steps[activeStep].title}
              </h3>

              <p className="text-base text-slate-700 leading-relaxed font-normal">
                {steps[activeStep].summary}
              </p>

            </div>
            <div className="method-checkpoint">
              {/* Quality Gate Checkpoint */}
              <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border-l-4 border-l-[#E53924] border-t border-r border-b border-slate-200/80 shadow-xs">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E53924] font-bold block mb-1">
                  Ponto de controle:
                </span>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold">
                  {steps[activeStep].checkpoint}
                </p>
              </div>
            </div>

            </div>
            <ContextImage name="metodo-colaboracao" alt="Equipe reunida para alinhar um plano de trabalho." portrait className="method-photo" />

            <div className="method-deliverables space-y-3 bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-slate-200/80 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
                Entregáveis Desta Fase:
              </span>

              <div className="space-y-3">
                {steps[activeStep].deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3 bg-white/90 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <CheckCircle2 size={16} className="text-[#008CD2] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
