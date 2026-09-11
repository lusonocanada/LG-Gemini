export default function ExecutiveFit() {
  const areas = [
    {
      title: 'Projetos estratégicos e PMO de RH',
      missao: 'Estruturação de portfólio, governança, prazos e alinhamento com áreas de negócio e tecnologia.',
      diferencial: 'Experiência de PMO de RH em banco de grande porte e condução de projetos estruturantes.',
      comoAtuo: 'Rituais executivos, gestão de riscos, priorização de carteira e acompanhamento de entregas.',
      color: '#1B4E9B'
    },
    {
      title: 'Implantação e transformação de processos de RH',
      missao: 'Aproximação entre processos, tecnologia e as pessoas que operam a solução no dia a dia.',
      diferencial: 'Vivência em jornadas críticas — admissão, desligamento, catálogo de serviços e modelos de atração.',
      comoAtuo: 'Mapeamento de fluxos, eliminação de gargalos e foco na adoção prática das equipes.',
      color: '#008CD2'
    },
    {
      title: 'People Analytics, dados e planejamento',
      missao: 'Transformar dados dispersos em informações para decisão da liderança.',
      diferencial: 'Atuação em indicadores, orçamento de RH, People Analytics e mobilidade em grande escala.',
      comoAtuo: 'Estruturação de métricas, conciliação de informações e visão executiva de portfólio.',
      color: '#FFC20E'
    },
    {
      title: 'IA aplicada e prototipação operacional',
      missao: 'Testar soluções para gargalos reais antes de grandes investimentos.',
      diferencial: 'Capacidade de prototipar fluxos, desenhar automações e validar hipóteses em ciclos curtos.',
      comoAtuo: 'Diagnóstico de processos, prototipação rápida e foco em utilidade real para a operação.',
      color: '#8A1538'
    }
  ];

  return (
    <section id="aderencia" className="py-20 lg:py-28 bg-[#F8FAFC] text-[#0F294A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-1 bg-[#1B4E9B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] font-mono">
              ADERÊNCIA EXECUTIVA
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F294A] leading-[1.12] mb-4">
            Áreas onde vejo maior aderência com a minha experiência.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Onde minha trajetória pode gerar contribuição prática dentro da agenda da empresa.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map((area, idx) => (
            <div
              key={idx}
              className="liquid-glass-card rounded-2xl border-t-4 border-l border-r border-b p-8 flex flex-col justify-between shadow-xs hover:shadow-xl"
              style={{ borderTopColor: area.color }}
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                  <span className="text-xs font-mono font-bold" style={{ color: area.color }}>
                    EIXO 0{idx + 1}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: area.color }} />
                </div>

                <h3 className="text-xl font-black text-[#0F294A] mb-4">
                  {area.title}
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-1">
                      Missão
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      {area.missao}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-1">
                      Diferencial
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      {area.diferencial}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-1">
                      Como atuo
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      {area.comoAtuo}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
