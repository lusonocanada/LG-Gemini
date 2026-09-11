import ContextImage from './ContextImage';
import { Target, Shuffle, Cpu, ShieldCheck } from 'lucide-react';

export default function HRVision() {
  const blocks = [
    {
      title: 'Estratégia que chega à operação',
      description: 'Prioridades, indicadores, decisões e responsabilidades claras.',
      icon: Target,
      color: '#1B4E9B'
    },
    {
      title: 'Processos que reduzem fricção',
      description: 'Jornadas desenhadas para quem usa, não apenas para quem aprova.',
      icon: Shuffle,
      color: '#008CD2'
    },
    {
      title: 'Tecnologia que resolve um problema real',
      description: 'Plataforma, dados, automação e integrações a serviço de resultado.',
      icon: Cpu,
      color: '#00A3E0'
    },
    {
      title: 'Mudança que permanece',
      description: 'Comunicação, capacitação, escuta e estabilização depois da entrega.',
      icon: ShieldCheck,
      color: '#F58220'
    }
  ];

  return (
    <section id="visao" className="py-20 lg:py-28 bg-[#F8FAFC] text-[#0F294A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 lg:mb-18 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-1 bg-[#008CD2]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#008CD2] font-mono">
              MINHA VISÃO DE TRANSFORMAÇÃO
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F294A] leading-[1.12] mb-6">
            Não basta implantar tecnologia.{' '}
            <span className="text-[#008CD2] block sm:inline">
              É preciso fazer pessoas, processos e decisões funcionarem juntos.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
            Minha forma de trabalhar começa pela operação. Eu traduzo uma ambição de negócio em processos claros, governança possível, escolhas de tecnologia e uma experiência que líderes e colaboradores conseguem adotar. É assim que uma entrega deixa de ser projeto e passa a gerar capacidade real para o RH.
          </p>
        </div>

        <ContextImage name="visao-operacao" alt="Profissionais analisando uma jornada de processos em ambiente de trabalho." className="h-[240px] lg:h-[420px] mb-10" />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {blocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <div 
                key={idx}
                className="p-8 bg-white border-l-4 border-t border-r border-b border-slate-200 shadow-xs hover:shadow-md transition-shadow"
                style={{ borderLeftColor: block.color }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-50 border border-slate-200">
                    <Icon size={18} style={{ color: block.color }} />
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-black text-[#0F294A] mb-2 tracking-tight">
                  {block.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {block.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Fecho Banner */}
        <div className="bg-[#0F294A] border-l-4 border-l-[#FFC20E] p-6 sm:p-8 text-white shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC20E] font-bold block mb-1">
              PRINCÍPIO FUNDAMENTAL
            </span>
            <p className="text-xl sm:text-2xl font-black text-white tracking-tight">
              High Tech para criar escala. <span className="text-[#FFC20E]">High Touch para criar adesão.</span>
            </p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#008CD2]" />
            <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />
            <span className="w-2 h-2 rounded-full bg-[#FFC20E]" />
            <span className="w-2 h-2 rounded-full bg-[#F58220]" />
          </div>
        </div>

      </div>
    </section>
  );
}
