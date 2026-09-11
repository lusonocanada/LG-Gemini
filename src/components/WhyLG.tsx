import { motion } from 'motion/react';
import LGLogo from './LGLogo';

export default function WhyLG() {
  const points = [
    {
      number: '01',
      title: 'Escala e relevância no mercado brasileiro',
      items: [
        'A LG processa a folha e a gestão de pessoas de milhões de vidas em organizações de grande porte.',
        'Minha experiência foi construída em ambientes desse mesmo porte — Santander e Safra —, onde estabilidade, precisão e escala não são negociáveis.'
      ],
      color: '#1B4E9B'
    },
    {
      number: '02',
      title: 'Visão de ecossistema e plataforma completa',
      items: [
        'A evolução da LG para uma plataforma integrada reflete o que vi na prática: sistemas pontuais criam silos; soluções completas criam governança e eficiência.',
        'Atuei na interface entre produtos, processos e tecnologia corporativa.'
      ],
      color: '#008CD2'
    },
    {
      number: '03',
      title: 'Oportunidade de expansão e modernização contínua',
      items: [
        'O movimento da LG com apoio da H.I.G. Capital e as aquisições recentes mostram ambição de crescimento e consolidação.',
        'Trago disciplina de processos, vivência de integração e capacidade de conectar estratégia e execução.'
      ],
      color: '#F58220'
    },
    {
      number: '04',
      title: 'Cultura de tecnologia que resolve problemas reais',
      items: [
        'A LG combina solidez de mais de 40 anos com evolução contínua para SaaS, nuvem e novas tecnologias.',
        'Minha atuação recente com IA aplicada e prototipação tem exatamente esse foco: resolver gargalos concretos, sem pirotecnia.'
      ],
      color: '#8A1538'
    }
  ];

  return (
    <section id="porque-lg" className="py-20 lg:py-28 bg-white text-[#0F294A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 pb-8 border-b border-slate-200">
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

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] border-t-4 border-l border-r border-b border-slate-200 p-8 flex flex-col justify-between"
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
            Leitura profissional de Diego Moraes a partir de fontes públicas da LG Lugar de Gente.
          </p>
        </div>

      </div>
    </section>
  );
}
