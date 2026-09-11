import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Briefcase, CheckCircle2, ArrowRight, Building2, Globe2, ChevronRight, Award } from 'lucide-react';
import LGChromaticBar from './LGChromaticBar';

export default function Trajetoria() {
  const [activeChapter, setActiveChapter] = useState(1);

  const chapters = [
    {
      id: 'santander-early',
      period: '2008 – 2012',
      company: 'ABN AMRO / Santander Brasil',
      role: 'Analista de Planejamento e Processos de RH',
      location: 'São Paulo, Brasil',
      color: '#1B4E9B',
      headline: 'Integração pós-fusão, governança de processos e disciplina orçamentária.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
      description: 'Atuação na maior integração bancária da história do país (fusão Real/Santander). Implantação de governança orçamentária para despesas de pessoal e consolidação de esteiras de RH.',
      quote: 'Viver uma fusão de 50 mil funcionários no início da carreira moldou minha disciplina: sem dados limpos e governança firme, qualquer sistema desmorona.',
      deliverables: [
        'Integração de sistemas legados de folha e administração de pessoal',
        'Padronização de rotinas operacionais do Centro de Serviços Compartilhados (CSC)',
        'Controle orçamentário mensal de quadro de vagas e despesas de pessoal'
      ],
      lgTakeaway: 'Experiência em gerenciar a dor de fusões e migrações sistêmicas complexas, comum nos grandes clientes da LG.'
    },
    {
      id: 'santander-expansion',
      period: '2012 – 2018',
      company: 'Santander Brasil',
      role: 'Especialista de Planejamento de RH & Transformação Digital',
      location: 'São Paulo, Brasil',
      color: '#008CD2',
      headline: 'Workday Brasil, People Analytics e reestruturação de Talent Acquisition.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      description: 'Liderança operacional da localização do Workday no Brasil, reestruturação da esteira de atração com R$ 10 milhões de economia anual e estruturação de mobilidade interna para 50 mil colaboradores.',
      quote: 'Não foi um projeto de TI. Foi um projeto de transformação cultural onde o RH precisou aprender a liderar por dados e autosserviço.',
      deliverables: [
        'Implantação e localização do Workday no Brasil para módulos de recrutamento e dados',
        'Economia anual de ~R$ 10M com novo modelo de contratação direta e sourcing interno',
        'Criação de dashboards de People Analytics e governança de catálogo de serviços do CSC'
      ],
      lgTakeaway: 'Diego conhece de dentro os desafios e dores de implantar e sustentar plataformas globais de HCM no Brasil.'
    },
    {
      id: 'safra-pmo',
      period: '2018 – 2020',
      company: 'Banco Safra',
      role: 'Coordenador de Projetos de RH (HR PMO)',
      location: 'Avenida Paulista, SP',
      color: '#F58220',
      headline: 'PMO de RH, PeopleSoft e admissão digital com 60% de aceleração.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      description: 'Estruturação do escritório de projetos de RH (PMO) no Banco Safra. Condução do portfólio de modernização do PeopleSoft, admissão 100% digital e automação do desligamento.',
      quote: 'No Safra, cada dia a mais na admissão é custo e insatisfação. Reduzir o tempo em 60% exigiu aproximar TI, Jurídico e Operações na mesma mesa.',
      deliverables: [
        'Estruturação da metodologia de PMO de RH e priorização estratégica junto à Diretoria',
        'Admissão digital de ponta a ponta: redução de 60% no tempo de onboarding',
        'Redesenho do fluxo demissional com redução de 50% no prazo e eliminação de multas'
      ],
      lgTakeaway: 'Domínio do ecossistema de bancos de alta exigência regulatória, nicho onde a LG possui forte presença.'
    },
    {
      id: 'toronto-intl',
      period: '2020 – 2025',
      company: 'Toronto, Canadá (FCBB & TSoM)',
      role: 'HRBP & Operations Management',
      location: 'Toronto, Ontário · Canadá',
      color: '#FFC20E',
      headline: 'Vivência internacional, Business Management e ambiente multicultural.',
      image: 'https://images.unsplash.com/photo-1507992781348-310259076fa0?auto=format&fit=crop&w=1200&q=80',
      description: 'Atuação na Federação de Câmaras de Comércio Brasil-Canadá (FCBB), coordenação de operações em ambiente bilíngue e graduação em Business Management pela Toronto School of Management.',
      quote: 'Trabalhar em um dos mercados mais multiculturais do planeta refinou minha capacidade de liderança, comunicação não violenta e negociação estratégica.',
      deliverables: [
        'Business Partnering em ambiente internacional, bilíngue (inglês/português)',
        'Formação executiva em Business Management pela Toronto School of Management',
        'Apoio à governança e expansão de parcerias corporativas bilaterais'
      ],
      lgTakeaway: 'Capacidade de dialogar com fundos globais, C-Levels multinacionais e equipes de tecnologia com visão global.'
    },
    {
      id: 'digital-ai',
      period: '2025 – Atual',
      company: 'Consultoria Digital & Inovação',
      role: 'Consultor de Transformação de RH & IA Aplicada',
      location: 'São Paulo, Brasil',
      color: '#8A1538',
      headline: 'IA aplicada a processos reais de RH, prototipação ágil e dashboards.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      description: 'Diagnóstico operacional, desenho de agentes inteligentes de IA para triagem e atendimento a colaboradores, prototipação de soluções e People Analytics avançado.',
      quote: 'A IA não substitui o RH; ela liberta o RH do trabalho repetitivo para que as pessoas possam cuidar de pessoas e estratégia.',
      deliverables: [
        'Desenvolvimento de agentes de IA para aceleração de políticas internas e triagem',
        'Automação de relatórios executivos de RH com PowerBI e modelos preditivos',
        'Consultoria em arquitetura de processos para migração HCM de nova geração'
      ],
      lgTakeaway: 'Prontidão imediata para ajudar a LG a posicionar sua suíte de IA Generativa de forma crível e prática.'
    }
  ];

  return (
    <section id="trajetoria" className="py-20 lg:py-28 bg-[#F8FAFC] text-[#0F294A] relative border-b border-slate-200 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-8 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-1 bg-[#1B4E9B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] font-mono">
                TRAJETÓRIA & REPERTÓRIO SÊNIOR
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F294A] leading-[1.12]">
              Uma jornada construída dentro da complexidade —{' '}
              <span className="text-[#1B4E9B] block sm:inline">não observando-a de fora.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-md">
            15 anos conectando grandes instituições bancárias, tecnologia HCM global e liderança internacional.
          </p>
        </div>

        {/* Interactive Documentary Grid: Chapter Navigation (Left) + Detailed Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Timeline Navigator */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-3">
              Selecione o Capítulo da Carreira:
            </span>

            {chapters.map((chap, idx) => {
              const isActive = activeChapter === idx;
              return (
                <button
                  key={chap.id}
                  onClick={() => setActiveChapter(idx)}
                  className={`w-full text-left p-4 transition-all duration-200 cursor-pointer border-l-4 ${
                    isActive 
                      ? 'bg-white shadow-md border-t border-r border-b border-slate-300 translate-x-1' 
                      : 'bg-white/60 hover:bg-white border-t border-r border-b border-slate-200 opacity-85 hover:opacity-100'
                  }`}
                  style={{ borderLeftColor: chap.color }}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span className="font-bold" style={{ color: chap.color }}>{chap.period}</span>
                    <span className="text-slate-400 font-semibold">{chap.location}</span>
                  </div>
                  <div className="text-sm font-black text-[#0F294A] tracking-tight">
                    {chap.company}
                  </div>
                  <div className="text-xs text-slate-600 truncate mt-0.5">
                    {chap.role}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Chapter Showcase with Real Image */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white border-2 border-slate-200 shadow-xl overflow-hidden"
              >
                {/* Chromatic Top Header */}
                <div className="w-full">
                  <LGChromaticBar size="xs" />
                </div>

                {/* Chapter Photo Vignette */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#0F294A]">
                  <img
                    src={chapters[activeChapter].image}
                    alt={chapters[activeChapter].company}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1929] via-[#0C1929]/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 z-20">
                    <span 
                      className="px-3 py-1 text-xs font-mono font-bold text-white uppercase tracking-wider"
                      style={{ backgroundColor: chapters[activeChapter].color }}
                    >
                      {chapters[activeChapter].period}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6 z-20 text-white">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#FFC20E] font-bold block mb-1">
                      {chapters[activeChapter].location}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      {chapters[activeChapter].company}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                      {chapters[activeChapter].role}
                    </p>
                  </div>
                </div>

                {/* Chapter Content Body */}
                <div className="p-6 sm:p-10 space-y-6">
                  
                  {/* Strategic Headline */}
                  <h4 className="text-xl sm:text-2xl font-black text-[#0F294A] leading-snug">
                    {chapters[activeChapter].headline}
                  </h4>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {chapters[activeChapter].description}
                  </p>

                  {/* Real Learning Quote */}
                  <div 
                    className="p-4 sm:p-5 border-l-4 bg-[#F8FAFC]"
                    style={{ borderLeftColor: chapters[activeChapter].color }}
                  >
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-1">
                      Visão Operacional de Diego:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 italic font-medium leading-relaxed">
                      "{chapters[activeChapter].quote}"
                    </p>
                  </div>

                  {/* Key Deliverables */}
                  <div className="pt-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-3">
                      Principais Entregas & Impacto no Período:
                    </span>
                    <div className="space-y-2.5">
                      {chapters[activeChapter].deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-[#008CD2] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Connection to LG */}
                  <div className="p-4 bg-[#0F294A] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-l-4 border-l-[#FFC20E]">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC20E] font-bold block">
                        Por que isso importa para a LG Lugar de Gente:
                      </span>
                      <p className="text-xs text-slate-200 mt-0.5">
                        {chapters[activeChapter].lgTakeaway}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 shrink-0">
                      REPERTÓRIO PRÁTICO
                    </span>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
