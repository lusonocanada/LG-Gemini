import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import LGChromaticBar from './LGChromaticBar';

export default function WorkingMethodology() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Entender o Contexto Real',
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
      title: 'Alinhar o Caminho & Governança',
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
      title: 'Conduzir a Construção & Integrações',
      focus: 'Execução & Homologação',
      color: '#FFC20E',
      summary: 'Articulação contínua de stakeholders, alinhamento de integrações, parametrização de regras e testes cuidadosos.',
      deliverables: [
        'Ciclos de entrega funcional com validação dos usuários-chave',
        'Homologação integrada entre sistemas legados e nova plataforma',
        'Conformidade com requisitos regulatórios e políticas internas'
      ],
      checkpoint: 'Simulações e testes em ambiente espelho antes da virada de chave.'
    },
    {
      number: '04',
      title: 'Entrar em Operação com Adesão',
      focus: 'Go-Live & Transição',
      color: '#F58220',
      summary: 'Prontidão operacional, capacitação de usuários finais, comunicação de mudança e suporte próximo.',
      deliverables: [
        'Checklist de prontidão operacional com todas as frentes validadas',
        'Capacitação prática em linguagem acessível para os times',
        'Acompanhamento e suporte assistido nos primeiros dias de uso'
      ],
      checkpoint: 'Acompanhamento diário de incidentes e resolução rápida de dúvidas.'
    },
    {
      number: '05',
      title: 'Estabilizar, Medir & Evoluir',
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
            Arquitetura de cinco etapas baseada na prática de projetos corporativos complexos e foco na adoção real.
          </p>
        </div>

        {/* Phase Selector Conveyor (5 Step Blueprint) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 text-left border-t-4 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0F294A] text-white border-t-[#FFC20E] shadow-lg'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-t-slate-300 border-l border-r border-b border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-1.5 font-bold">
                  <span style={{ color: isSelected ? '#FFC20E' : step.color }}>PASSO {step.number}</span>
                  <span className="w-2 h-2" style={{ backgroundColor: step.color }} />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider block opacity-75 mb-1">
                  {step.focus}
                </div>
                <h3 className="text-sm sm:text-base font-black tracking-tight leading-snug">
                  {step.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspection Stage for Selected Phase */}
        <div className="bg-white border-2 border-slate-200 shadow-xl p-6 sm:p-10 relative overflow-hidden">
          <div className="w-full absolute top-0 left-0 right-0">
            <LGChromaticBar size="xs" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span 
                  className="px-3 py-1 text-xs font-mono font-bold text-white uppercase"
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

              {/* Quality Gate Checkpoint */}
              <div className="p-4 bg-[#F8FAFC] border-l-4 border-l-[#E53924] border-t border-r border-b border-slate-200">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E53924] font-bold block mb-1">
                  Ponto de Controle (Gate de Qualidade):
                </span>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold">
                  {steps[activeStep].checkpoint}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3 bg-[#F8FAFC] p-6 border border-slate-200">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
                Entregáveis Desta Fase:
              </span>

              <div className="space-y-3">
                {steps[activeStep].deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3 bg-white p-3.5 border border-slate-200 shadow-2xs">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
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
