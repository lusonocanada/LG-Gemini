import SectionHeader from './SectionHeader';

const axes = [
  {
    number: '01',
    title: 'Jornada completa e modelo operacional de RH',
    need: 'A LG apresenta uma proposta de jornada de RH conectada, da estrutura organizacional à operação cotidiana e à evolução das pessoas.',
    bring: 'Trajetória construída atravessando estratégia, PMO, CSC, atração, admissão, operações, dados e mobilidade, com governança executiva em ambientes de grande escala.',
    color: '#1B4E9B'
  },
  {
    number: '02',
    title: 'HR Tech que vira capacidade real',
    need: 'Plataforma só gera valor quando processo, adoção e operação sustentam a solução depois do go-live.',
    bring: 'Vivência do lado do cliente de HR Tech em Workday, PeopleSoft, autosserviço, admissão, desligamento e Talent Acquisition: requisitos, simplificação de fluxos, adoção e estabilização.',
    color: '#008CD2'
  },
  {
    number: '03',
    title: 'Dados que melhoram decisões',
    need: 'People Analytics cria valor quando parte de uma pergunta relevante, transforma dados em evidência e chega a uma decisão possível.',
    bring: 'Indicadores, orçamento de RH, People Analytics e mobilidade interna para cerca de 50 mil colaboradores.',
    color: '#F58220'
  },
  {
    number: '04',
    title: 'IA que amplia capacidade e inteligência',
    need: 'Com IA em HR Tech, contexto, qualidade de dados, processos, governança e experiência ficam ainda mais decisivos.',
    bring: 'Automação, produtos digitais e IA aplicada, com pesquisa autoral no People Systems Brief sobre People Analytics, agentes, ATS e futuro do trabalho.',
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
          lead="Quatro frentes em que minha experiência em RH pode contribuir para o próximo ciclo de HR Tech."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {axes.map(axis => (
            <article
              key={axis.number}
              className="rounded-2xl border border-slate-200 border-t-4 bg-[#F8FAFC] p-5 sm:p-7"
              style={{ borderTopColor: axis.color }}
            >
              <span className="text-xs font-mono font-bold" style={{ color: axis.color }}>EIXO {axis.number}</span>
              <h3 className="text-lg sm:text-xl font-black text-[#0F294A] mt-1 mb-4 leading-snug">{axis.title}</h3>

              <dl className="space-y-4">
                <div>
                  <dt className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold mb-1">O que a categoria pede</dt>
                  <dd className="text-sm text-slate-700 leading-relaxed">{axis.need}</dd>
                </div>
                <div className="pl-4 border-l-2" style={{ borderLeftColor: axis.color }}>
                  <dt className="text-[10px] font-mono uppercase tracking-widest font-bold mb-1" style={{ color: axis.color }}>O que eu trago</dt>
                  <dd className="text-sm text-[#0F294A] font-medium leading-relaxed">{axis.bring}</dd>
                </div>
              </dl>
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
