import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import LGLogo from './LGLogo';

export default function WhyLG() {
  const connectionPoints = [
    {
      number: '01',
      title: 'Implantação com visão de cliente',
      description: 'Eu sei o peso de decisões de escopo, configurações, cronogramas e comunicação para quem precisa colocar uma nova solução de pé.',
      color: '#1B4E9B',
      tag: 'Empatia com o Comprador'
    },
    {
      number: '02',
      title: 'Dados e IA que precisam virar uso real',
      description: 'Minha experiência em People Analytics, automação e processos me faz olhar para IA como capacidade operacional: contexto, qualidade de dados, governança e adoção.',
      color: '#008CD2',
      tag: 'Capacidade Operacional'
    },
    {
      number: '03',
      title: 'Uma plataforma só cria valor quando conecta jornadas',
      description: 'Minha trajetória passou por planejamento, atração, admissão, operação e desligamento. Posso ajudar a traduzir essa visão integrada em experiência para o cliente.',
      color: '#E53924',
      tag: 'Visão Integrada de Ponta a Ponta'
    }
  ];

  return (
    <section id="porque-lg" className="py-20 lg:py-28 bg-white text-[#0F294A] relative border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-1 bg-[#8A1538]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#8A1538]">
              POR QUE ESTA CONVERSA FAZ SENTIDO PARA MIM
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F294A] leading-tight mb-6"
          >
            Passei 15 anos vendo o que separa uma plataforma promissora de uma transformação percebida pelo cliente.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal"
          >
            A LG Lugar de Gente está ampliando sua proposta de plataforma integrada para RH, dados e agentes de IA. O que mais me atrai nessa agenda não é apenas a tecnologia: é o desafio de fazer a tecnologia chegar à operação com clareza, confiança e resultado. Eu conheço esse desafio porque vivi a implantação do lado de quem recebe a entrega.
          </motion.p>
        </div>

        {/* 3 Strategic Connection Points: Sharp panels with distinct LG colors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {connectionPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#F8FAFC] border-t-4 border-l border-r border-b border-slate-200 p-8 flex flex-col justify-between"
              style={{ borderTopColor: point.color }}
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                  <span className="text-xs font-mono font-bold" style={{ color: point.color }}>
                    EIXO {point.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-0.5 border border-slate-200 rounded-full">
                    {point.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#0F294A] mb-3">
                  {point.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Diferencial competitivo</span>
                <span className="w-2 h-2" style={{ backgroundColor: point.color }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Bold Statement Box: Dark Architectural Panel with Gold Accent */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0C1929] border-l-4 border-l-[#FFC20E] border-t border-r border-b border-slate-800 p-8 sm:p-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFC20E] block">
              Posicionamento & Contribuição
            </span>
            <p className="text-xl sm:text-2xl font-black text-white leading-relaxed">
              “É por isso que eu não me vejo apenas como candidato a uma posição. Eu me vejo como alguém que pode ajudar a LG a fazer sua promessa de transformação chegar melhor ao cliente.”
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-center gap-2 p-5 bg-[#14263D] border border-slate-700">
            <LGLogo size="sm" />
            <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase text-center">
              Destino da Proposta
            </span>
          </div>
        </motion.div>

        {/* Small attribution footnote */}
        <p className="text-xs text-slate-400 mt-6 text-center font-normal">
          Leitura profissional de Diego Moraes a partir de fontes públicas da LG Lugar de Gente.
        </p>

      </div>
    </section>
  );
}
