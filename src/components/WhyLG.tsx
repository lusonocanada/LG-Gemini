import SectionHeader from './SectionHeader';

const axes = [
  {
    number: '01',
    title: 'Jornada → sistema',
    thesis: 'Conheço as jornadas de RH pelo lado de quem precisa operar, transformar e sustentar processos.',
    evidence: 'HR PMO, CSC, admissão, desligamento, eSocial, autosserviço e Talent Acquisition no Santander e no Banco Safra, com PeopleSoft e Workday.',
    color: '#1B4E9B'
  },
  {
    number: '02',
    title: 'Dados → decisão',
    thesis: 'Minha experiência em People Analytics parte da pergunta de negócio e chega à decisão.',
    evidence: 'Data Warehouse de RH, Power BI, modelo preditivo de risco de saída, prontidão para promoção e dashboard mensal para ~3.600 gestores e HRBPs.',
    color: '#008CD2'
  },
  {
    number: '03',
    title: 'Workflow → inteligência',
    thesis: 'Vejo HR Tech evoluindo de registro e processamento para interpretação, recomendação e ação.',
    evidence: 'Mobilidade interna com matching algorítmico para ~50 mil colaboradores e pesquisa autoral no People Systems Brief sobre ATS, agentes e workforce planning.',
    color: '#F58220'
  },
  {
    number: '04',
    title: 'Humanos + IA → novo operating model',
    thesis: 'IA amplia capacidade, mas exige clareza sobre papéis, decisões, exceções, governança e responsabilidade.',
    evidence: 'Automação, produtos digitais e IA aplicada na prática, incluindo The Lusim, plataforma SaaS em operação, e FreelaDeck.',
    color: '#8A1538'
  }
];

export default function WhyLG() {
  return (
    <section id="porque-lg" className="py-16 sm:py-20 lg:py-28 bg-white text-[#0F294A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Por que a LG"
          color="#8A1538"
          title="Onde minha trajetória encontra a LG."
          lead="Minha contribuição está na interseção entre o conhecimento funcional de RH e a capacidade de transformar processos, dados e tecnologia em operação real."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {axes.map(axis => (
            <article
              key={axis.number}
              className="rounded-2xl border border-slate-200 border-t-4 bg-[#F8FAFC] p-5 sm:p-7"
              style={{ borderTopColor: axis.color }}
            >
              <span className="text-xs font-mono font-bold" style={{ color: axis.color }}>EIXO {axis.number}</span>
              <h3 className="text-lg sm:text-xl font-black text-[#0F294A] mt-1 mb-3 leading-snug">{axis.title}</h3>

              <p className="text-base text-[#0F294A] font-semibold leading-relaxed">{axis.thesis}</p>
              <div className="mt-4 pl-4 border-l-2" style={{ borderLeftColor: axis.color }}>
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold block mb-1" style={{ color: axis.color }}>Evidência</span>
                <p className="text-sm text-slate-700 leading-relaxed">{axis.evidence}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-slate-500 text-center">
          Leitura profissional independente de Diego Moraes a partir de fontes públicas da LG Lugar de Gente.
        </p>
      </div>
    </section>
  );
}
