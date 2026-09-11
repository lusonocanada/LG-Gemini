import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Briefcase, 
  Cpu, 
  TrendingUp, 
  Globe2, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight,
  Layers,
  X
} from 'lucide-react';

interface CaseItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  organization: string;
  period: string;
  color: string;
  image: string;
  keyMetric: string;
  keyMetricLabel: string;
  contexto: string;
  desafio: string;
  meuPapel: string;
  comoConduzi: string[];
  resultado: string[];
}

const casesData: CaseItem[] = [
  {
    id: 'case-1',
    number: '01',
    title: 'HR PMO e PeopleSoft',
    tagline: 'Governança, priorização, admissão digital, portal e desligamento.',
    organization: 'Banco Safra',
    period: '2018 – 2020',
    color: '#1B4E9B',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    keyMetric: '-60%',
    keyMetricLabel: 'Tempo de Admissão Digital',
    contexto: 'Ambiente bancário de alta exigência regulatória e operacional com dependência de processos legados no PeopleSoft e alta carga manual no atendimento ao colaborador.',
    desafio: 'Falta de uma governança única para priorizar projetos de RH, admissões com prazos extensos e processos de desligamento fragmentados que geravam riscos jurídicos e operacionais.',
    meuPapel: 'Líder de HR PMO, responsável por estruturar o escritório de projetos, articular os times de RH, TI e Jurídico e redesenhar as esteiras críticas de ponta a ponta.',
    comoConduzi: [
      'Implementação de metodologia ágil adaptada ao PMO com comitê executivo de priorização de demandas',
      'Mapeamento detalhado e digitalização integral da esteira de admissão, eliminando envio físico de documentos',
      'Redesenho completo do fluxo de homologação e desligamento com controle estrito de prazos legais e integração ao PeopleSoft'
    ],
    resultado: [
      'Redução de aproximadamente 60% no tempo total do ciclo de admissão digital',
      'Redução de aproximadamente 50% no tempo de processamento das rescisões e homologações',
      'Mitigação significativa de passivos trabalhistas decorrentes de atrasos cadastrais'
    ]
  },
  {
    id: 'case-2',
    number: '02',
    title: 'CSC e Planejamento de RH',
    tagline: 'Catálogo de serviços, SLAs, orçamento e escala operacional.',
    organization: 'Santander Brasil',
    period: '2012 – 2015',
    color: '#008CD2',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    keyMetric: '99.4%',
    keyMetricLabel: 'Conformidade de SLAs do CSC',
    contexto: 'Operação de RH com dezenas de milhares de chamados mensais, múltiplos sistemas descentralizados e necessidade de padronizar a prestação de serviços internos.',
    desafio: 'Falta de visibilidade sobre custos unitários de atendimento, ausência de catálogo padronizado de serviços e necessidade de conciliar a disciplina orçamentária com a experiência do colaborador.',
    meuPapel: 'Especialista de Planejamento de RH responsável por estruturar o catálogo de serviços do CSC, estabelecer SLAs e conectar o planejamento financeiro à operação.',
    comoConduzi: [
      'Construção do catálogo corporativo de serviços de RH com classificação de complexidade e prazos pactuados',
      'Implantação de painéis de controle de SLAs em tempo real e rotinas de gestão com a liderança operacional',
      'Alinhamento direto entre a esteira de orçamento (capex/opex de RH) e os níveis de serviço prestados'
    ],
    resultado: [
      'Previsibilidade total sobre custos de atendimento e capacidade de atendimento do CSC',
      'Aumento expressivo na taxa de resolução no primeiro contato (FCR) e redução de reaberturas de chamados',
      'Interface fluida e governada entre áreas clientes, RH Corporativo e TI'
    ]
  },
  {
    id: 'case-3',
    number: '03',
    title: 'Talent Acquisition e Workday',
    tagline: 'Transformação da seleção, economia, experiência do candidato e localização global.',
    organization: 'Santander Brasil',
    period: '2015 – 2017',
    color: '#8A1538',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    keyMetric: 'R$ 10M',
    keyMetricLabel: 'Economia Anual Recorrente',
    contexto: 'Volume de contratação massivo em âmbito nacional, dependência elevada de consultorias externas e processo de implantação global da plataforma Workday.',
    desafio: 'Localizar a plataforma Workday para as particularidades trabalhistas brasileiras ao mesmo tempo em que se reestruturava a operação de atração para reduzir custos externos.',
    meuPapel: 'Líder funcional do projeto de Talent Acquisition, atuando como ponte entre o time global de produto, a equipe de TI local e as lideranças de negócio do banco.',
    comoConduzi: [
      'Condução de workshops de mapeamento de processos com recrutadores, gestores e especialistas em folha',
      'Configuração das regras de negócio, esteiras de aprovação e adequação aos requisitos de compliance do Brasil',
      'Criação de um novo modelo de atração direta, capacitação em larga escala dos times de seleção e gestão de mudança'
    ],
    resultado: [
      'Economia anual estimada em aproximadamente R$ 10 milhões pela internalização e otimização de canais de seleção',
      'Go-live bem-sucedido com aderência plena aos requisitos regulatórios locais',
      'Melhoria substancial na experiência do candidato e redução do tempo de preenchimento de vagas críticas'
    ]
  },
  {
    id: 'case-4',
    number: '04',
    title: 'People Analytics e Mobilidade',
    tagline: 'Dados de talento conectados à decisão corporativa.',
    organization: 'Santander Brasil',
    period: '2016 – 2018',
    color: '#00A3E0',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    keyMetric: '50 mil',
    keyMetricLabel: 'Vidas Integradas na Plataforma',
    contexto: 'Organização com cerca de 50 mil colaboradores onde as oportunidades internas eram pouco visíveis e as decisões de retenção e movimentação careciam de inteligência de dados.',
    desafio: 'Integrar dados de múltiplas fontes dispersas para dar transparência ao mercado interno de trabalho e fornecer aos executivos indicadores acionáveis de pessoas.',
    meuPapel: 'Especialista responsável pelo desenho funcional da plataforma de mobilidade interna e estruturação dos modelos de dados de People Analytics.',
    comoConduzi: [
      'Desenho da jornada de candidatura interna aberta, permitindo aos colaboradores explorarem vagas em todo o país',
      'Modelagem e saneamento de bases de competências, desempenho, histórico salarial e potencial',
      'Construção de dashboards executivos para diretoria com análise de turnover voluntário, mobilidade e gap de lideranças'
    ],
    resultado: [
      'Adesão em massa de colaboradores em âmbito nacional à esteira de mobilidade interna',
      'Decisões de promoção e retenção pautadas em dados consistentes e auditáveis',
      'Redução de custos de contratação externa aproveitando talentos já aculturados na organização'
    ]
  },
  {
    id: 'case-5',
    number: '05',
    title: 'HRBP e Operação no Canadá',
    tagline: 'Pessoas, gestão e execução em contexto multicultural.',
    organization: 'Toronto, Canadá',
    period: '2020 – 2025',
    color: '#FFC20E',
    image: 'https://images.unsplash.com/photo-1507992781348-310259076fa0?auto=format&fit=crop&w=1200&q=80',
    keyMetric: '100%',
    keyMetricLabel: 'Ambiente Internacional Bilíngue',
    contexto: 'Ambiente de negócios internacional, equipe diversa com profissionais de múltiplos países e culturas e necessidade de adaptação rápida a práticas globais de gestão.',
    desafio: 'Garantir alto padrão de entrega operacional e retenção de equipe ao mesmo tempo em que se consolidava formação acadêmica executiva na América do Norte.',
    meuPapel: 'HR Business Partner e gestor operacional, conduzindo rotinas de gestão de pessoas, resolução de conflitos e governança de processos.',
    comoConduzi: [
      'Aplicação de práticas de escuta ativa, liderança empática e rituais claros de feedback e alinhamento de metas',
      'Conciliação entre governança operacional rigorosa e flexibilidade cultural para engajamento dos talentos',
      'Conclusão da formação executiva em Business Management pela Toronto School of Management'
    ],
    resultado: [
      'Estabilidade de equipe e elevados índices de engajamento e produtividade',
      'Visão multicultural prática sobre como liderar e comunicar transformações em cenários diversos',
      'Enriquecimento do repertório com padrões internacionais de governança corporativa'
    ]
  },
  {
    id: 'case-6',
    number: '06',
    title: 'IA Aplicada e Prototipação',
    tagline: 'Transformar gargalos em hipóteses, automações e experiências testáveis.',
    organization: 'Consultoria e Soluções Digitais',
    period: '2025 – Atual',
    color: '#F58220',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    keyMetric: '10x',
    keyMetricLabel: 'Velocidade na Síntese Operacional',
    contexto: 'Disseminação de ferramentas de IA generativa no mercado, porém com escassez de casos de uso práticos integrados aos processos reais das empresas.',
    desafio: 'Superar o discurso teórico de inteligência artificial e construir soluções funcionais com contexto, governança e valor comprovado para a operação.',
    meuPapel: 'Consultor de transformação e desenvolvedor de protótipos aplicados a processos operacionais e de recursos humanos.',
    comoConduzi: [
      'Mapeamento de gargalos em processos de atendimento, recrutamento e geração de relatórios executivos',
      'Construção de protótipos funcionais com modelos de linguagem integrados a regras de negócio e validação humana',
      'Validação empírica de redução de esforço em tarefas rotineiras mantendo a segurança e a precisão dos dados'
    ],
    resultado: [
      'Capacidade demonstrada de traduzir IA em ferramentas funcionais com trilha de auditoria e utilidade real',
      'Criação de esteiras que reduzem drasticamente o tempo de síntese de dados e atendimento primário',
      'Visão madura e desmistificada sobre como IA deve servir à operação — sem substituir o julgamento humano'
    ]
  }
];

export default function SelectedCases() {
  const [activeCaseId, setActiveCaseId] = useState<string>('case-1');
  const [mobileModalCase, setMobileModalCase] = useState<CaseItem | null>(null);

  const activeCase = casesData.find((c) => c.id === activeCaseId) || casesData[0];

  return (
    <section id="cases" className="py-20 lg:py-28 bg-white text-[#0F294A] relative border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-1 bg-[#008CD2]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#008CD2]">
              Cases Selecionados
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F294A] leading-tight mb-6"
          >
            Seis momentos em que o meu papel foi fazer a mudança sair do papel.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal"
          >
            A visão prática de quem esteve à frente do planejamento, da governança, do redesenho de processos e da entrega final.
          </motion.p>
        </div>

        {/* Desktop Experience: Rich Selector + Detail Panel */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 6 Cases Selector List */}
          <div className="lg:col-span-4 space-y-2">
            {casesData.map((c) => {
              const isSelected = c.id === activeCaseId;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCaseId(c.id)}
                  className={`w-full text-left p-4.5 border transition-colors flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white border-l-4 border-t border-r border-b border-slate-200'
                      : 'bg-[#F8FAFC] hover:bg-white border-l-4 border-t border-r border-b border-slate-200 opacity-80 hover:opacity-100'
                  }`}
                  style={{ borderLeftColor: c.color }}
                >
                  <div className="flex items-center gap-3">
                    <span 
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                      style={{ 
                        backgroundColor: c.color === '#FFC20E' ? '#FEF3C7' : `${c.color}15`, 
                        color: c.color === '#FFC20E' ? '#92400E' : c.color 
                      }}
                    >
                      {c.number}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F294A]">
                        {c.title}
                      </h4>
                      <span className="text-[11px] text-slate-500 block font-medium">
                        {c.organization} · {c.period}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={16} style={{ color: isSelected ? c.color : '#94A3B8' }} />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Case Panel with Strict Sequence: contexto → desafio → meu papel → como conduzi → resultado */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="bg-white border-2 border-slate-200 shadow-xl overflow-hidden"
              >
                {/* Visual Editorial Header with Real Corporate Photography */}
                <div className="relative h-60 sm:h-72 bg-[#0F294A] overflow-hidden">
                  <img
                    src={activeCase.image}
                    alt={activeCase.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1929] via-[#0C1929]/50 to-transparent" />
                  
                  {/* Chromatic Top Bar */}
                  <div className="absolute top-0 left-0 right-0 z-20 h-1" style={{ backgroundColor: activeCase.color }} />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-6 right-6 z-20 flex items-center justify-between">
                    <span 
                      className="text-xs font-mono font-bold px-3 py-1 text-white uppercase tracking-wider rounded-full"
                      style={{ backgroundColor: activeCase.color }}
                    >
                      CASE {activeCase.number}
                    </span>
                    <span className="text-xs font-bold text-slate-200 font-mono bg-[#0C1929]/80 px-3 py-1 border border-slate-700 rounded-full">
                      {activeCase.organization} · {activeCase.period}
                    </span>
                  </div>

                  {/* Impact Metric Floating Callout on Image */}
                  <div className="absolute bottom-4 right-6 z-20 bg-[#0F294A] border-l-4 p-3.5 shadow-lg max-w-[200px]" style={{ borderLeftColor: activeCase.color }}>
                    <div className="text-2xl sm:text-3xl font-black text-white leading-none mb-1">
                      {activeCase.keyMetric}
                    </div>
                    <div className="text-[10px] font-mono uppercase text-slate-300 font-semibold leading-tight">
                      {activeCase.keyMetricLabel}
                    </div>
                  </div>

                  {/* Case Headline on Image */}
                  <div className="absolute bottom-4 left-6 z-20 max-w-md text-white pr-4">
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                      {activeCase.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium line-clamp-1">
                      {activeCase.tagline}
                    </p>
                  </div>
                </div>

                {/* Case Body with Strict 5-Step Editorial Sequence */}
                <div className="p-6 sm:p-10 space-y-6">
                  
                  {/* 1 & 2: Contexto e Desafio in Split Architectural Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#F8FAFC] border-t-2 border-slate-300 border-l border-r border-b border-slate-200">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-1">
                        1. O Cenário & Contexto
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {activeCase.contexto}
                      </p>
                    </div>

                    <div className="p-4 bg-[#F8FAFC] border-t-2 border-t-[#E53924] border-l border-r border-b border-slate-200">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#E53924] font-bold block mb-1">
                        2. O Desafio Crítico
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {activeCase.desafio}
                      </p>
                    </div>
                  </div>

                  {/* 3. Meu Papel (High-contrast prominent card) */}
                  <div className="bg-[#0F294A] text-white p-5 border-l-4 shadow-sm" style={{ borderLeftColor: activeCase.color }}>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC20E] font-bold block mb-1">
                      3. Meu Papel na Liderança da Solução
                    </span>
                    <p className="text-sm sm:text-base text-slate-100 font-semibold leading-relaxed">
                      {activeCase.meuPapel}
                    </p>
                  </div>

                  {/* 4. Como Conduzi */}
                  <div className="pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-3">
                      4. Como Conduzi a Transformação (Método & Execução):
                    </span>
                    <ul className="space-y-2.5">
                      {activeCase.comoConduzi.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <span className="w-1.5 h-1.5 mt-2 shrink-0" style={{ backgroundColor: activeCase.color }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 5. Resultado Mensurável */}
                  <div className="pt-6 border-t border-slate-200">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#8A1538] font-bold block mb-3">
                      5. Impacto Mensurável Comprovado:
                    </span>
                    <div className="grid grid-cols-1 gap-2.5">
                      {activeCase.resultado.map((res, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-[#F8FAFC] p-3.5 border-l-4 border-l-[#8A1538] border-t border-r border-b border-slate-200 text-xs sm:text-sm text-slate-900 font-semibold">
                          <CheckCircle2 size={16} className="text-[#8A1538] shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile Experience: Sharp architectural cards */}
        <div className="lg:hidden space-y-4">
          {casesData.map((c) => (
            <div
              key={c.id}
              className="bg-[#F8FAFC] border-l-4 border-t border-r border-b border-slate-200 p-5 space-y-3"
              style={{ borderLeftColor: c.color }}
            >
              <div className="flex items-center justify-between">
                <span 
                  className="text-xs font-mono font-bold px-2 py-0.5"
                  style={{ 
                    backgroundColor: c.color === '#FFC20E' ? '#FEF3C7' : `${c.color}15`, 
                    color: c.color === '#FFC20E' ? '#92400E' : c.color 
                  }}
                >
                  CASE {c.number}
                </span>
                <span className="text-xs text-slate-500 font-medium">{c.organization}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#0F294A]">{c.title}</h3>
                <p className="text-xs text-slate-600 mt-1">{c.tagline}</p>
              </div>

              <button
                onClick={() => setMobileModalCase(c)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold border border-slate-300 rounded-full cursor-pointer uppercase tracking-wider shadow-xs"
              >
                <span>Ver detalhes do case</span>
                <ChevronRight size={14} style={{ color: c.color }} />
              </button>
            </div>
          ))}
        </div>

        {/* Mobile Detail Modal (Solid, no translucent backdrop) */}
        <AnimatePresence>
          {mobileModalCase && (
            <div className="fixed inset-0 z-50 flex items-end justify-center lg:hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileModalCase(null)}
                className="fixed inset-0 bg-[#0F294A]/80"
              />

              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                className="relative z-10 w-full max-h-[88vh] bg-white border-t-4 border-slate-900 p-6 overflow-y-auto space-y-6 shadow-2xl"
                style={{ borderTopColor: mobileModalCase.color }}
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 sticky top-0 bg-white">
                  <span className="text-xs font-mono font-bold" style={{ color: mobileModalCase.color }}>
                    CASE {mobileModalCase.number} · {mobileModalCase.organization}
                  </span>
                  <button
                    onClick={() => setMobileModalCase(null)}
                    className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-black text-[#0F294A]">{mobileModalCase.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 font-medium">{mobileModalCase.tagline}</p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="font-bold uppercase tracking-wider text-slate-400 block mb-1">1. Contexto</span>
                    <p className="text-slate-700 leading-relaxed">{mobileModalCase.contexto}</p>
                  </div>
                  <div>
                    <span className="font-bold uppercase tracking-wider text-slate-400 block mb-1">2. Desafio</span>
                    <p className="text-slate-700 leading-relaxed">{mobileModalCase.desafio}</p>
                  </div>
                  <div className="bg-[#F8FAFC] p-3.5 border-l-4 border-slate-300" style={{ borderLeftColor: mobileModalCase.color }}>
                    <span className="font-bold uppercase tracking-wider block mb-1" style={{ color: mobileModalCase.color }}>3. Meu Papel</span>
                    <p className="text-slate-900 font-semibold">{mobileModalCase.meuPapel}</p>
                  </div>
                  <div>
                    <span className="font-bold uppercase tracking-wider text-slate-400 block mb-1">4. Como Conduzi</span>
                    <ul className="space-y-2">
                      {mobileModalCase.comoConduzi.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-700">
                          <span className="w-1.5 h-1.5 mt-1.5 shrink-0" style={{ backgroundColor: mobileModalCase.color }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <span className="font-bold uppercase tracking-wider text-[#8A1538] block mb-2">5. Resultado</span>
                    <div className="space-y-2">
                      {mobileModalCase.resultado.map((res, idx) => (
                        <div key={idx} className="bg-[#F8FAFC] p-3 border-l-4 border-l-[#8A1538] text-slate-900 font-medium">
                          {res}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
