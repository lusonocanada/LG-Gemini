import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import LGChromaticBar from './LGChromaticBar';

export default function Trajetoria() {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      id: 'santander-early',
      period: '2008 – 2012',
      company: 'ABN AMRO / Santander Brasil',
      role: 'Orçamento, processos e projetos corporativos',
      location: 'São Paulo, Brasil',
      color: '#1B4E9B',
      headline: 'Integração pós-fusão, processos e disciplina orçamentária.',
      description: 'Atuação em projetos de integração sistêmica após a aquisição do ABN AMRO pelo Santander, mapeamento de processos operacionais e governança orçamentária.',
      deliverables: [
        'Padronização de rotinas',
        'Mapeamento e redesenho de fluxos',
        'Acompanhamento físico-financeiro de projetos'
      ]
    },
    {
      id: 'santander-expansion',
      period: '2012 – 2018',
      company: 'Santander Brasil',
      role: 'Indicadores, orçamento, planejamento estratégico de RH, Talent Acquisition e People Analytics',
      location: 'São Paulo, Brasil',
      color: '#008CD2',
      headline: 'Do planejamento de RH à transformação de Talent e dados.',
      description: 'Gestão de indicadores, orçamento e portfólio de RH; CSC, catálogo de serviços e interface RH/TI; transformação de Talent Acquisition, Workday Brasil, People Analytics e mobilidade interna para cerca de 50 mil colaboradores.',
      deliverables: [
        'Cenários orçamentários',
        'Catálogo de serviços e SLAs',
        'Transformação de Talent Acquisition',
        'Atuação como ponto focal de Talent no Workday Brasil',
        'Modelos de mobilidade interna'
      ]
    },
    {
      id: 'safra-pmo',
      period: '2018 – 2020',
      company: 'Banco Safra',
      role: 'Gerente de Projetos de RH e estruturação do HR PMO',
      location: 'São Paulo, Brasil',
      color: '#F58220',
      headline: 'PMO de RH, PeopleSoft e jornadas digitais que ganharam velocidade.',
      description: 'Estruturação do HR PMO, priorização de carteira, admissão digital com redução aproximada de 60% no ciclo e redesenho do desligamento com redução aproximada de 50% no processamento.',
      deliverables: [
        'Metodologia de PMO e rituais executivos',
        'Admissão digital no PeopleSoft',
        'Modernização de portal e aplicativo',
        'Redesenho de desligamento'
      ]
    },
    {
      id: 'toronto-intl',
      period: '2020 – 2025',
      company: 'Toronto, Canadá',
      role: 'HR Business Partner e gestão operacional',
      location: 'Toronto, Canadá',
      color: '#FFC20E',
      headline: 'HRBP e gestão operacional em ambiente multicultural.',
      description: 'Atuação em Business Partnering, governança e liderança de operações, com formação em Business Management pela Toronto School of Management.',
      deliverables: [
        'Apoio à governança e planejamento',
        'Padronização de operações críticas',
        'Gestão de operações e relacionamento'
      ]
    },
    {
      id: 'digital-ai',
      period: '2025 – Atual',
      company: 'Consultoria e soluções digitais',
      role: 'Transformação, prototipação e IA aplicada',
      location: 'São Paulo, Brasil',
      color: '#8A1538',
      headline: 'IA aplicada, prototipação e resolução de problemas operacionais.',
      description: 'Diagnóstico, redesenho de processos, dashboards, automação e protótipos voltados a problemas reais de negócio e RH.',
      deliverables: [
        'Diagnóstico e prototipação',
        'Organização de dados e automação',
        'Desenho de experiência'
      ]
    }
  ];

  const current = chapters[activeChapter];

  return (
    <section id="trajetoria" className="py-20 lg:py-28 bg-[#F8FAFC] text-[#0F294A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-1 bg-[#1B4E9B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B4E9B] font-mono">
              TRAJETÓRIA & REPERTÓRIO
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F294A] leading-[1.12]">
            Uma jornada construída dentro da complexidade —{' '}
            <span className="text-[#1B4E9B] block sm:inline">não observando-a de fora.</span>
          </h2>
        </div>

        {/* Timeline Navigation + Detailed Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline Navigator */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-3">
              Capítulos da Carreira:
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

          {/* Right Column: Typographic Chapter Showcase */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white border-2 border-slate-200 shadow-xl overflow-hidden"
              >
                {/* Chromatic Top Bar */}
                <div className="w-full">
                  <LGChromaticBar size="xs" />
                </div>

                {/* Typographic Header (Period, Company, Location, Color Line) */}
                <div className="p-6 sm:p-8 bg-[#0F294A] text-white">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span 
                      className="px-3 py-1 text-xs font-mono font-bold text-white uppercase tracking-wider"
                      style={{ backgroundColor: current.color }}
                    >
                      {current.period}
                    </span>
                    <span className="text-xs font-mono text-slate-300">
                      {current.location}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {current.company}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    {current.role}
                  </p>
                </div>

                {/* Chapter Content Body */}
                <div className="p-6 sm:p-10 space-y-6">
                  
                  {/* Strategic Headline */}
                  <h4 className="text-xl sm:text-2xl font-black text-[#0F294A] leading-snug">
                    {current.headline}
                  </h4>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {current.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-3">
                      Entregas:
                    </span>
                    <div className="space-y-2.5">
                      {current.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-[#008CD2] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
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
