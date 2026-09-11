import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Clock, Users, ShieldAlert, Globe, ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import LGChromaticBar from './LGChromaticBar';

export default function Metrics() {
  const [activeMetric, setActiveMetric] = useState(0);

  const metricStories = [
    {
      id: 'santander-savings',
      value: 'R$ 10M / ano',
      tag: 'EFICIÊNCIA FINANCEIRA',
      title: 'Economia Anual com Novo Modelo de Talent Acquisition',
      client: 'Santander Brasil',
      color: '#E53924',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      summary: 'Reestruturação profunda dos canais de atração e seleção corporativa, substituindo contratações via agências terceiras por esteiras proprietárias de atração direta e qualificação preditiva.',
      challenge: 'Gasto elevado com consultorias de headhunting e dependência externa para posições de tecnologia e negócios em escala nacional.',
      action: 'Criação de esteira interna de sourcing, saneamento de dados de candidatos, revisão de SLAs e implantação de métricas de custo por admissão (CPH).',
      lgValue: 'Comprova capacidade de auditar processos caros e transformar custos fixos em ganhos de margem recorrentes para clientes LG.'
    },
    {
      id: 'safra-onboarding',
      value: '-60% no tempo',
      tag: 'AGILIDADE OPERACIONAL',
      title: 'Aceleração do Ciclo de Admissão com Onboarding Digital',
      client: 'Banco Safra',
      color: '#008CD2',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      summary: 'Desenho e implantação do fluxo de admissão 100% digital, integrando captura mobile de documentos, validação automática de dados e assinatura eletrônica.',
      challenge: 'Candidatos aprovados aguardavam semanas com envio físico de cópias autenticadas, gerando atrito e desistências antes do início.',
      action: 'Mapeamento de ponta a ponta com Jurídico e Compliance, integração ao PeopleSoft e implantação de painel de status em tempo real.',
      lgValue: 'Demonstra domínio prático na digitalização de jornadas críticas onde a LG é líder de mercado.'
    },
    {
      id: 'santander-mobility',
      value: '50 mil pessoas',
      tag: 'ESCALA CORPORATIVA',
      title: 'Mobilidade Interna & People Analytics em Massa',
      client: 'Santander Brasil',
      color: '#1B4E9B',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
      summary: 'Governança unificada e saneamento de bases para viabilizar programa corporativo de recolocação e promoção interna em todo o território nacional.',
      challenge: 'Dados cadastrais dispersos em múltiplos legados, impedindo visibilidade real das competências e pretensões dos colaboradores.',
      action: 'Normalização cadastral, arquitetura de perfis de talentos e automação de conciliação de vagas internas.',
      lgValue: 'Capacidade de operar em empresas de porte enterprise com dezenas de milhares de vidas sem perder controle.'
    },
    {
      id: 'safra-offboarding',
      value: '-50% no prazo',
      tag: 'MITIGAÇÃO DE RISCOS',
      title: 'Redução do Tempo de Desligamento e Risco Trabalhista',
      client: 'Banco Safra',
      color: '#8A1538',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
      summary: 'Redesenho completo da esteira de rescisão contratual, garantindo conformidade com o artigo 477 da CLT e eliminando multas por atraso.',
      challenge: 'Gargalos na coleta de exames demissionais e conferência manual de holerites geravam risco frequente de penalidades sindicais.',
      action: 'Rastreabilidade ponta a ponta, alertas antecipados de vencimento e comunicação humanizada com o colaborador desligado.',
      lgValue: 'Segurança jurídica para os módulos de Folha e Administração de Pessoal da LG Lugar de Gente.'
    }
  ];

  return (
    <section id="resultados" className="py-20 lg:py-28 bg-white text-[#0F294A] relative border-b border-slate-200 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-8 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-1 bg-[#F58220]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#F58220] font-mono">
                EVIDÊNCIAS PRÁTICAS DE RESULTADO
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F294A] leading-[1.12]">
              Resultados mensuráveis de quem atuou na cadeira mais difícil:{' '}
              <span className="text-[#F58220] block sm:inline">a do cliente.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-md">
            Métricas auditadas em instituições de rigor extremo. Não são projeções teóricas: são ganhos financeiros e operacionais já realizados.
          </p>
        </div>

        {/* Interactive Showcase: Selector Tabs across top */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {metricStories.map((item, idx) => {
            const isSelected = activeMetric === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMetric(idx)}
                className={`p-4 text-left transition-all cursor-pointer border-t-4 ${
                  isSelected 
                    ? 'bg-[#0F294A] text-white border-t-[#FFC20E] shadow-md' 
                    : 'bg-[#F8FAFC] hover:bg-slate-100 text-slate-700 border-t-slate-300 border-l border-r border-b border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1 font-bold uppercase">
                  <span style={{ color: isSelected ? '#FFC20E' : item.color }}>{item.client}</span>
                  <span className={isSelected ? 'text-slate-300' : 'text-slate-600'}>0{idx + 1}</span>
                </div>
                <div className="text-xl sm:text-2xl font-black tracking-tight mb-1">
                  {item.value}
                </div>
                <div className="text-[11px] font-semibold truncate">
                  {item.tag}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Asymmetric Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Feature Column: Realistic Corporate Photography with Narrative Overlay */}
          <div className="lg:col-span-7 relative border-2 border-slate-200 bg-[#0F294A] shadow-xl overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 z-20">
              <LGChromaticBar size="xs" />
            </div>

            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src={metricStories[activeMetric].image}
                alt={metricStories[activeMetric].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1929] via-[#0C1929]/50 to-transparent" />
              
              <div className="absolute bottom-4 left-6 right-6 z-20 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC20E] font-bold block mb-1">
                  {metricStories[activeMetric].client} · {metricStories[activeMetric].tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {metricStories[activeMetric].title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-[#0C1929] text-white flex-1 space-y-4 border-t border-slate-800">
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {metricStories[activeMetric].summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="p-3 bg-[#14263D] border border-slate-700">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                    O Desafio Original
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {metricStories[activeMetric].challenge}
                  </p>
                </div>

                <div className="p-3 bg-[#14263D] border border-slate-700">
                  <span className="text-[10px] font-mono uppercase text-[#00A3E0] font-bold block mb-1">
                    A Solução de Diego
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {metricStories[activeMetric].action}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Value for LG + Supplementary Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Why This Matters to LG Box */}
            <div className="bg-[#F8FAFC] border-t-4 border-t-[#008CD2] border-l border-r border-b border-slate-200 p-6 sm:p-8 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#008CD2] font-bold">
                    CONEXÃO ESTRATÉGICA
                  </span>
                  <span className="text-xs font-semibold text-slate-500">Valor para a LG</span>
                </div>

                <h4 className="text-lg font-black text-[#0F294A] mb-3">
                  Como esse repertório gera receita e retenção para a LG Lugar de Gente:
                </h4>

                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                  {metricStories[activeMetric].lgValue}
                </p>
              </div>

              {/* Verified Trust Badges */}
              <div className="space-y-2 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>Capacidade de sentar com diretores de RH e CFOs</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>Eliminação de ruídos entre área de negócio e tecnologia</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>Governança de pós-implantação e valor percebido</span>
                </div>
              </div>
            </div>

            {/* Global Perspective Card: Brasil + Canada */}
            <div className="p-5 bg-[#0F294A] border-l-4 border-l-[#F58220] text-white flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#FFC20E] font-bold uppercase mb-1">
                  <Globe size={14} />
                  <span>Visão Multicultural</span>
                </div>
                <span className="text-sm font-bold block text-white">Brasil (Santander/Safra) + Canadá (Toronto)</span>
                <span className="text-xs text-slate-300">Fluência bilíngue, rigor de banco global e abertura para inovação</span>
              </div>
              <div className="text-right shrink-0 pl-4 font-mono text-xs text-slate-400">
                15+ ANOS
              </div>
            </div>

          </div>

        </div>

        {/* Footnote */}
        <div className="pt-4 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-500 font-mono">
            * Dados de economia anual, redução de prazos e volumes operacionais extraídos de projetos reais liderados por Diego Moraes no Santander Brasil e Banco Safra.
          </p>
        </div>

      </div>
    </section>
  );
}
