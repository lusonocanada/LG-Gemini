import { useState } from 'react';
import LGChromaticBar from './LGChromaticBar';

export default function Metrics() {
  const [activeMetric, setActiveMetric] = useState(0);

  const metricStories = [
    {
      title: 'Talent Acquisition',
      value: 'R$ 10 milhões',
      subtitle: 'Economia anual aproximada em transformação de Talent Acquisition.',
      contexto: 'Reformulação do modelo de atração e seleção, com internalização de processos seletivos estratégicos.',
      meuPapel: 'Atuação na transformação de Talent Acquisition e como ponto focal de Talent no Workday Brasil.',
      resultado: 'Economia anual aproximada de R$ 10 milhões.',
      color: '#E53924'
    },
    {
      title: 'Admissão digital',
      value: '60%',
      subtitle: 'Redução aproximada no ciclo de admissão digital.',
      contexto: 'Jornada de admissão no PeopleSoft em ambiente de RH de alta complexidade.',
      meuPapel: 'Gerente de Projetos de RH e responsável por conduzir a transformação da jornada.',
      resultado: 'Redução aproximada de 60% no ciclo do processo.',
      color: '#008CD2'
    },
    {
      title: 'Mobilidade e People Analytics',
      value: '50 mil',
      subtitle: 'Colaboradores alcançados por iniciativa de mobilidade e People Analytics.',
      contexto: 'Necessidade de ampliar a visibilidade sobre talentos e oportunidades internas.',
      meuPapel: 'Atuação em People Analytics e modelos de mobilidade interna.',
      resultado: 'Mais visibilidade para decisões de mobilidade interna em escala.',
      color: '#1B4E9B'
    },
    {
      title: 'Desligamento',
      value: '50%',
      subtitle: 'Redução aproximada no tempo de processamento de desligamento.',
      contexto: 'Fluxo de desligamento que precisava de mais simplicidade e velocidade.',
      meuPapel: 'Atuação no redesenho da jornada e na condução do projeto.',
      resultado: 'Redução aproximada de 50% no tempo de processamento.',
      color: '#8A1538'
    }
  ];

  const current = metricStories[activeMetric];

  return (
    <section id="resultados" className="py-20 lg:py-28 bg-white text-[#0F294A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-1 bg-[#F58220]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#F58220] font-mono">
              EVIDÊNCIAS DE ENTREGA
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F294A] leading-[1.12]">
            Resultados que mostram como eu transformo complexidade em entrega.
          </h2>
        </div>

        {/* 4 Metric Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {metricStories.map((item, idx) => {
            const isSelected = activeMetric === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveMetric(idx)}
                className={`p-5 text-left transition-all cursor-pointer border-t-4 ${
                  isSelected 
                    ? 'bg-[#0F294A] text-white border-t-[#FFC20E] shadow-md' 
                    : 'bg-[#F8FAFC] hover:bg-slate-100 text-slate-700 border-t-slate-300 border-l border-r border-b border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1 font-bold uppercase">
                  <span style={{ color: isSelected ? '#FFC20E' : item.color }}>{item.title}</span>
                  <span className={isSelected ? 'text-slate-300' : 'text-slate-500'}>0{idx + 1}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight mb-1">
                  {item.value}
                </div>
                <div className="text-xs font-medium line-clamp-2">
                  {item.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Typographic Showcase */}
        <div className="border-2 border-slate-200 bg-[#0F294A] shadow-xl overflow-hidden relative text-white mb-8">
          <div className="absolute top-0 left-0 right-0 z-20">
            <LGChromaticBar size="xs" />
          </div>

          <div className="p-8 sm:p-12 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#FFC20E] font-bold block mb-1">
                  DETALHAMENTO DO RESULTADO · 0{activeMetric + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {current.title}
                </h3>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-[#00A3E0] font-mono">
                {current.value}
              </div>
            </div>

            {/* Contexto / Meu Papel / Resultado */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#14263D] border-l-4 border-l-[#008CD2] border-t border-r border-b border-slate-800">
                <span className="text-[11px] font-mono uppercase text-[#008CD2] font-bold block mb-2">
                  Contexto
                </span>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  {current.contexto}
                </p>
              </div>

              <div className="p-6 bg-[#14263D] border-l-4 border-l-[#FFC20E] border-t border-r border-b border-slate-800">
                <span className="text-[11px] font-mono uppercase text-[#FFC20E] font-bold block mb-2">
                  Meu papel
                </span>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  {current.meuPapel}
                </p>
              </div>

              <div className="p-6 bg-[#14263D] border-l-4 border-l-[#F58220] border-t border-r border-b border-slate-800">
                <span className="text-[11px] font-mono uppercase text-[#F58220] font-bold block mb-2">
                  Resultado
                </span>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  {current.resultado}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Note */}
        <div className="pt-4 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-500 font-mono">
            Métricas referem-se a projetos e experiências profissionais de Diego Moraes, em seus respectivos contextos.
          </p>
        </div>

      </div>
    </section>
  );
}
