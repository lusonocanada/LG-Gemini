import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Shuffle, Cpu, ShieldCheck, CheckCircle2, ArrowRight, Layers, Sparkles } from 'lucide-react';
import LGChromaticBar from './LGChromaticBar';

export default function HRVision() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      number: '01',
      title: 'Estratégia que chega à operação',
      subtitle: 'Direção & Alinhamento',
      tag: 'Governança Ativa',
      description: 'Prioridades executivas, indicadores de sucesso, matriz RACI e governança objetiva para que a ambição do C-Level não se dilua nas reuniões departamentais.',
      impact: 'Alinhamento direto entre decisão executiva e execução na ponta.',
      icon: Target,
      color: '#1B4E9B',
      deliverable: 'Matriz de Priorização, SLA e Governança de Decisão'
    },
    {
      number: '02',
      title: 'Processos que eliminam atrito',
      subtitle: 'Experiência & Eficiência',
      tag: 'Redesenho Operacional',
      description: 'Jornadas desenhadas para quem consome o serviço — não apenas para quem audita. Redução drástica de cliques, retrabalhos, formulários manuais e dúvidas crônicas.',
      impact: 'Redução de até 60% no tempo de ciclo de rotinas como admissão e férias.',
      icon: Shuffle,
      color: '#008CD2',
      deliverable: 'Fluxogramas Simplificados, Políticas Claras & Autosserviço'
    },
    {
      number: '03',
      title: 'Tecnologia que resolve problemas reais',
      subtitle: 'Plataforma & Automação',
      tag: 'Arquitetura de Dados',
      description: 'Workday, PeopleSoft, IA e automações a serviço de resultados de negócio mensuráveis — nunca tecnologia por fetiche tecnológico.',
      impact: 'Visibilidade em tempo real com People Analytics e autosserviço confiável.',
      icon: Cpu,
      color: '#F58220',
      deliverable: 'Integrações Estáveis, Dashboards de Decisão e Agentes de IA'
    },
    {
      number: '04',
      title: 'Mudança que permanece após o go-live',
      subtitle: 'Adoção & Sustentação',
      tag: 'Gestão da Mudança',
      description: 'Comunicação transparente, capacitação estruturada por público, rituais de escuta ativa e suporte contínuo para evitar a volta aos velhos hábitos.',
      impact: 'Adoção voluntária e acelerada por líderes, RH e colaboradores.',
      icon: ShieldCheck,
      color: '#8A1538',
      deliverable: 'Trilhas de Capacitação, Rituais de Adoção e War-Room de Go-Live'
    },
  ];

  return (
    <section id="visao" className="py-20 lg:py-28 bg-[#F8FAFC] text-[#0F294A] relative border-b border-slate-200 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 lg:mb-18 pb-8 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-1 bg-[#008CD2]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#008CD2] font-mono">
                A TESE PROFISSIONAL
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F294A] leading-[1.12]">
              Não basta implantar tecnologia.{' '}
              <span className="text-[#008CD2] block sm:inline">
                É preciso fazer pessoas, processos e decisões funcionarem juntos.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-md">
            Minha abordagem traduz a ambição de negócio em processos ágeis, tecnologia adotada e experiência humanizada para colaboradores e líderes.
          </p>
        </div>

        {/* Asymmetric Design Layout: Interactive Stepper Left + Editorial Photography Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch mb-16">
          
          {/* Left: Interactive 4-Pillar Pipeline with connected track */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-1 flex items-center gap-2">
              <Layers size={14} className="text-[#008CD2]" />
              <span>Selecione um pilar para inspecionar os entregáveis:</span>
            </div>

            <div className="space-y-3">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isActive = activeTab === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`cursor-pointer transition-all duration-300 p-5 border-l-4 text-left ${
                      isActive 
                        ? 'bg-white shadow-md border-t border-r border-b border-slate-300 scale-[1.01]' 
                        : 'bg-white/60 hover:bg-white border-t border-r border-b border-slate-200 opacity-80 hover:opacity-100'
                    }`}
                    style={{ borderLeftColor: pillar.color }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3.5">
                        <div 
                          className="w-8 h-8 flex items-center justify-center shrink-0 text-white font-mono font-bold text-xs"
                          style={{ backgroundColor: pillar.color }}
                        >
                          {pillar.number}
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider" style={{ color: pillar.color }}>
                              {pillar.subtitle}
                            </span>
                            <span className="text-slate-300">·</span>
                            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                              {pillar.tag}
                            </span>
                          </div>

                          <h3 className="text-base sm:text-lg font-black text-[#0F294A]">
                            {pillar.title}
                          </h3>

                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.3 }}
                              className="mt-3 space-y-2 pt-2 border-t border-slate-100"
                            >
                              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                {pillar.description}
                              </p>

                              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F294A] pt-1">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pillar.color }} />
                                <span>Entregável: {pillar.deliverable}</span>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>

                      <div className="shrink-0 pt-1">
                        <Icon size={18} style={{ color: pillar.color }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Immersive Editorial Vignette with Realistic Corporate War-Room Photography */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="relative border-2 border-slate-200 bg-[#0F294A] overflow-hidden shadow-lg h-full flex flex-col justify-between">
              
              {/* Top Accent Chromatic Line */}
              <div className="absolute top-0 left-0 right-0 z-20">
                <LGChromaticBar size="xs" />
              </div>

              {/* Realistic Corporate Decision Room Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                  alt="Corporate Strategy & HR Transformation War-Room"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1929] via-[#0C1929]/50 to-transparent" />
                
                <div className="absolute top-4 left-4 z-20 bg-[#0C1929]/90 border border-slate-700 px-3 py-1 text-[11px] font-mono text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>METODOLOGIA TESTADA EM GRANDES BANCOS</span>
                </div>
              </div>

              {/* Deep Detail Focus Card based on Active Tab */}
              <div className="p-6 sm:p-8 bg-[#0C1929] text-white flex-1 flex flex-col justify-between border-t border-slate-800">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FFC20E]">
                        Foco Operacional · Pilar {pillars[activeTab].number}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {pillars[activeTab].tag}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-white">
                      {pillars[activeTab].title}
                    </h4>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {pillars[activeTab].impact}
                    </p>

                    <div className="bg-[#14263D] border-l-4 p-4 border-slate-700" style={{ borderLeftColor: pillars[activeTab].color }}>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Garantia de Entrega Diego Moraes
                      </span>
                      <p className="text-xs font-medium text-slate-200">
                        {pillars[activeTab].deliverable}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Quote Ribbon */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="italic">"A tecnologia é a alavanca. A transformação é humana."</span>
                  <span className="font-mono text-[10px] text-[#008CD2]">SANTANDER · SAFRA · LG</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* The Fundamental Equilibrium: Architectural Split Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0F294A] border-l-4 border-l-[#FFC20E] border-t border-r border-b border-slate-800 p-8 sm:p-12 text-white shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFC20E] font-bold block">
                O EQUILÍBRIO ESSENCIAL DA IMPLANTAÇÃO
              </span>
              <p className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                High Tech para criar escala.{' '}
                <span className="text-[#FFC20E] block sm:inline">High Touch para criar adesão.</span>
              </p>
              <p className="text-sm text-slate-300 font-normal leading-relaxed max-w-2xl pt-1">
                A tecnologia gera velocidade e governança de dados. Mas são o treinamento empático, os rituais de liderança e a simplificação operacional que garantem que o cliente da LG nunca volte à planilha.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:border-l lg:border-slate-700 lg:pl-8">
              <div className="p-3 bg-[#14263D] border border-slate-700">
                <span className="text-[10px] font-mono text-[#00A3E0] uppercase font-bold block">High Tech</span>
                <span className="text-xs text-slate-200">IA, People Analytics, Workday, PeopleSoft & LG</span>
              </div>
              <div className="p-3 bg-[#14263D] border border-slate-700">
                <span className="text-[10px] font-mono text-[#FFC20E] uppercase font-bold block">High Touch</span>
                <span className="text-xs text-slate-200">Change Management, escuta da ponta e cultura</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
