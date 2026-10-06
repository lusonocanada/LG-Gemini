import ContextImage from './ContextImage';
export default function ExecutiveFit() {
  const areas = [
    {
      title: 'HR Transformation, operating model e PMO',
      missao: 'Conectar estratégia de RH a modelo operacional, governança, portfólio e execução com áreas de negócio e tecnologia.',
      diferencial: 'Experiência em governança executiva, CSC, HR PMO e transformação de operações em ambientes de grande escala.',
      comoAtuo: 'Diagnóstico, priorização, governança, gestão de riscos e acompanhamento de resultados.',
      color: '#1B4E9B'
    },
    {
      title: 'HR Tech e transformação de jornadas',
      missao: 'Traduzir problemas funcionais de RH em processos, requisitos, soluções e jornadas que funcionem na operação.',
      diferencial: 'Vivência como cliente de HR Tech em Workday, PeopleSoft, autosserviço, admissão, desligamento e Talent Acquisition.',
      comoAtuo: 'Mapeamento AS-IS/TO-BE, requisitos, simplificação de fluxos, adoção e estabilização.',
      color: '#008CD2'
    },
    {
      title: 'People Analytics, dados e decisão',
      missao: 'Fazer dados de pessoas saírem do dashboard e chegarem a decisões mais claras para a liderança.',
      diferencial: 'Atuação em indicadores, orçamento de RH, People Analytics e mobilidade em grande escala.',
      comoAtuo: 'Pergunta de negócio, dados confiáveis, análise, contexto e recomendação para decisão.',
      color: '#FFC20E'
    },
    {
      title: 'IA aplicada, produtos digitais e pensamento de mercado',
      missao: 'Explorar como automação e IA podem ampliar capacidade, qualidade de decisão e eficiência em RH.',
      diferencial: 'Construção de produtos digitais e pesquisa autoral no People Systems Brief sobre HR Tech, People Analytics, agentes e futuro do trabalho.',
      comoAtuo: 'Diagnóstico, experimentação, automação e IA aplicada com foco em utilidade, governança e impacto real.',
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
            Onde minha experiência pode contribuir para o próximo ciclo de HR Tech.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Quatro frentes que conectam minha trajetória em RH à evolução de produtos, operações, dados e inteligência.
          </p>
        </div>

        <ContextImage name="aderencia-executiva" alt="Profissional conectando pessoas, processos e tecnologia em uma sessão de trabalho." className="aspect-video mb-10" />

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
