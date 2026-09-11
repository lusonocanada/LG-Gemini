import { motion } from 'motion/react';
import LGLogo from './LGLogo';

export default function WhyLG() {
  const points = [
    {
      number: '01',
      title: 'Jornada completa, operação conectada',
      items: [
        'A LG apresenta uma proposta de jornada de RH conectada, da estrutura organizacional à operação cotidiana e à evolução das pessoas.',
        'Minha trajetória também foi construída conectando planejamento, atração, admissão, operação, dados e desligamento.'
      ],
      color: '#1B4E9B'
    },
    {
      number: '02',
      title: 'Produto precisa virar experiência de cliente',
      items: [
        'Já estive do lado de quem recebe uma implantação. Isso me ensinou que escopo, configuração, comunicação e adoção fazem parte da experiência do cliente.',
        'Posso contribuir aproximando plataforma, operação e pessoas durante a entrega.'
      ],
      color: '#008CD2'
    },
    {
      number: '03',
      title: 'Dados precisam virar decisão',
      items: [
        'People Analytics só cria valor quando parte de uma pergunta de negócio e chega a uma decisão possível.',
        'Trabalhei com indicadores, orçamento, People Analytics e mobilidade interna em ambiente corporativo de grande escala.'
      ],
      color: '#F58220'
    },
    {
      number: '04',
      title: 'IA precisa gerar capacidade operacional',
      items: [
        'A agenda AI First da LG torna mais relevante a combinação entre contexto, qualidade de dados, processos, governança e adoção.',
        'Minha experiência recente com automação, prototipação e IA aplicada parte de gargalos concretos, com validação humana.'
      ],
      color: '#8A1538'
    }
  ];

  return (
    <section id="porque-lg" className="py-20 lg:py-28 bg-white text-[#0F294A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-1 bg-[#8A1538]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#8A1538] font-mono">
                ALINHAMENTO PROFISSIONAL
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F294A] leading-[1.12] mb-4">
              Por que a LG Lugar de Gente.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              O que me atrai na empresa e onde vejo aderência com a minha trajetória.
            </p>
          </div>

          {/* Prominent LG Logo in Liquid Glass Badge */}
          <div className="liquid-glass-pill px-5 py-3 rounded-2xl flex items-center gap-3 shrink-0 shadow-xs hover:shadow-md transition-shadow">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 hidden sm:inline">Institucional</span>
            <LGLogo size="md" />
          </div>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="liquid-glass-card rounded-2xl border-t-4 border-l border-r border-b p-8 flex flex-col justify-between"
              style={{ borderTopColor: pt.color }}
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                  <span className="text-xs font-mono font-bold" style={{ color: pt.color }}>
                    EIXO {pt.number}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: pt.color }} />
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#0F294A] mb-4">
                  {pt.title}
                </h3>

                <div className="space-y-3">
                  {pt.items.map((it, itemIdx) => (
                    <p key={itemIdx} className="text-sm text-slate-700 leading-relaxed font-normal">
                      {it}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="pt-4 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-500 font-mono">
            Leitura profissional independente de Diego Moraes a partir de fontes públicas da LG Lugar de Gente.
          </p>
        </div>

      </div>
    </section>
  );
}
