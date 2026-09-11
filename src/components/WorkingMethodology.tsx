import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Compass, Cog, Rocket, ShieldCheck, CheckCircle2, XCircle, ArrowRight, Layers, FileCheck } from 'lucide-react';
import LGChromaticBar from './LGChromaticBar';

export default function WorkingMethodology() {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    {
      number: '01',
      title: 'Entender o Contexto Real',
      focus: 'Imersão & Diagnóstico',
      color: '#1B4E9B',
      summary: 'Escuta atenta, diagnóstico do problema real de negócio, mapeamento de personas e dependências entre áreas.',
      deliverables: [
        'Mapeamento de dores e gargalos na visão da liderança e da ponta',
        'Matriz de dependências sistêmicas e pontos únicos de falha',
        'Definição pactuada de critérios inegociáveis de sucesso'
      ],
      checkpoint: 'Validação explícita com os patrocinadores antes de desenhar qualquer solução.'
    },
    {
      number: '02',
      title: 'Alinhar o Caminho & Governança',
      focus: 'Arquitetura & Governança',
      color: '#008CD2',
      summary: 'Definição de escopo viável, cronograma executivo, governança de decisão, matriz de riscos e responsabilidades.',
      deliverables: [
        'Matriz RACI (quem aprova, executa, é consultado e informado)',
        'Cronograma realista com marcos críticos de controle e folgas técnicas',
        'Matriz de riscos com planos de contingência pré-aprovados'
      ],
      checkpoint: 'Acordo formal de SLA entre as diretorias envolvidas (RH, TI e Negócios).'
    },
    {
      number: '03',
      title: 'Conduzir a Construção & Integrações',
      focus: 'Execução & Homologação',
      color: '#FFC20E',
      summary: 'Articulação contínua de stakeholders, alinhamento de integrações, parametrização de regras e testes rigorosos.',
      deliverables: [
        'Sprints de entrega funcional com validação contínua dos usuários-chave',
        'Homologação integrada entre sistemas legados e nova plataforma',
        'Trilhas de auditoria e conformidade com CLT e LGPD'
      ],
      checkpoint: 'Simulações em ambiente espelho antes de qualquer virada de chave.'
    },
    {
      number: '04',
      title: 'Entrar em Operação com Adesão',
      focus: 'Go-Live & Transição',
      color: '#F58220',
      summary: 'Prontidão operacional (readiness), capacitação empática de usuários finais, comunicação de mudança e suporte próximo.',
      deliverables: [
        'Comitê de prontidão operacional (Readiness Checklist)',
        'Capacitação prática em linguagem acessível (sem jargões técnicos)',
        'War room presencial e virtual de suporte nos primeiros 30 dias de uso'
      ],
      checkpoint: 'Zero incidentes críticos não tratados em menos de 2 horas úteis.'
    },
    {
      number: '05',
      title: 'Estabilizar, Medir & Evoluir',
      focus: 'Adoção & Sustentação',
      color: '#8A1538',
      summary: 'Acompanhamento de curvas de adoção, monitoramento de indicadores de uso e rituais perenes de melhoria.',
      deliverables: [
        'Painel de telemetria de uso real e taxa de autosserviço',
        'Pesquisas de satisfação e aderência da liderança e colaboradores',
        'Plano contínuo de evolução e captura contínua de ganhos de produtividade'
      ],
      checkpoint: 'Confirmação de que o cliente não recorre mais a planilhas paralelas de controle.'
    }
  ];

  const comparisonData = [
    {
      dimension: 'Foco inicial',
      market: 'Vender funcionalidades e entregar escopo estrito de sistema.',
      diego: 'Diagnosticar a dor real da operação e construir adesão cultural desde o dia 1.'
    },
    {
      dimension: 'Relação com o Cliente',
      market: 'Reuniões semanais protocolares de status report.',
      diego: 'Presença ativa na cadeira de tomada de decisão, antecipando gargalos e riscos políticos.'
    },
    {
      dimension: 'Transição & Go-Live',
      market: 'Entrega manual em PDF e encerra o projeto na data de virada de chave.',
      diego: 'Acompanhamento assistido em sala de comando até que a operação funcione de forma autônoma.'
    },
    {
      dimension: 'Visão de Tecnologia',
      market: 'Tecnologia como um fim em si mesma.',
      diego: 'Tecnologia como alavanca para proteger margem, tempo do RH e dignidade do colaborador.'
    }
  ];

  return (
    <section id="metodo" className="py-20 lg:py-28 bg-[#F8FAFC] text-[#0F294A] relative border-b border-slate-200 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-8 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-1 bg-[#FFC20E]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#B45309] font-mono">
                MÉTODO DE EXECUÇÃO
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F294A] leading-[1.12]">
              Eu organizo o caminho para que a complexidade{' '}
              <span className="text-[#008CD2] block sm:inline">não paralise a entrega.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-md">
            Arquitetura de 5 etapas desenhada a partir de 15 anos vivendo o lado mais crítico da implantação: a cadeira do cliente.
          </p>
        </div>

        {/* Phase Selector Conveyor (Interactive Horizontal Blueprint) */}
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

        {/* Dynamic Detailed Inspection Stage for Selected Phase */}
        <div className="bg-white border-2 border-slate-200 shadow-xl p-6 sm:p-10 mb-16 relative overflow-hidden">
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

              <p className="text-base text-slate-700 leading-relaxed">
                {steps[activeStep].summary}
              </p>

              {/* Critical Quality Checkpoint */}
              <div className="p-4 bg-[#F8FAFC] border-l-4 border-l-[#E53924] border-t border-r border-b border-slate-200">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E53924] font-bold block mb-1">
                  Ponto de Controle Inegociável (Gate de Qualidade):
                </span>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold">
                  {steps[activeStep].checkpoint}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3 bg-[#F8FAFC] p-6 border border-slate-200">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
                Entregáveis Concretos Desta Fase:
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

        {/* High-Impact Visual Banner with Real Collaboration Photography */}
        <div className="relative border-2 border-slate-200 bg-[#0F294A] overflow-hidden mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 sm:p-12 text-white space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFC20E] font-bold block">
                O DIFERENCIAL COMPETITIVO PARA A LG
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                A tecnologia gera o potencial.{' '}
                <span className="text-[#00A3E0] block sm:inline">A disciplina executiva garante o ROI.</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Muitos projetos de software corporativo falham não por falha de código, mas por negligência com a dor da ponta, prazos irreais e falta de governança. O papel de Diego é blindar o cliente da LG e garantir que o software seja adotado com entusiasmo.
              </p>
            </div>

            <div className="lg:col-span-5 h-64 sm:h-80 lg:h-full relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Alinhamento e Estratégia Corporativa"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F294A] via-[#0F294A]/40 to-transparent" />
            </div>

          </div>
        </div>

        {/* Contrast Matrix: Standard Market Approach vs. Diego's Approach */}
        <div className="bg-white border-2 border-slate-200 shadow-md p-6 sm:p-10">
          <div className="mb-6 pb-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A1538] font-bold block">
                MATRIZ COMPARATIVA DE CONDUTA
              </span>
              <h4 className="text-lg sm:text-xl font-black text-[#0F294A]">
                Por que a abordagem de Diego Moraes protege a reputação da LG:
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-400">BENCHMARK DE GOVERNANÇA</span>
          </div>

          <div className="divide-y divide-slate-200">
            {comparisonData.map((row, rIdx) => (
              <div key={rIdx} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4 items-center">
                <div className="md:col-span-3 text-xs font-mono font-bold uppercase text-slate-500">
                  {row.dimension}
                </div>
                <div className="md:col-span-4 flex items-start gap-2 text-xs text-slate-600 bg-red-50/50 p-3 border-l-2 border-red-300">
                  <XCircle size={14} className="text-red-500 shrink-0 mt-0.5" />
                  <span>{row.market}</span>
                </div>
                <div className="md:col-span-5 flex items-start gap-2 text-xs text-slate-900 font-semibold bg-emerald-50/50 p-3 border-l-2 border-emerald-500">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.diego}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
