import { useMotionPreference } from '../hooks/useMotionPreference';
import ContextImage from './ContextImage';
import BottomSheet from './BottomSheet';
import SectionHeader from './SectionHeader';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, MapPin } from 'lucide-react';
import LGChromaticBar from './LGChromaticBar';

interface Chapter {
  id: string;
  period: string;
  company: string;
  role: string;
  location: string;
  color: string;
  headline: string;
  description: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
}

const chapters: Chapter[] = [
  {
    id: 'abn-amro',
    period: '2008 – 2010',
    company: 'ABN AMRO',
    role: 'Analista de Orçamento',
    location: 'São Paulo, Brasil',
    color: '#1B4E9B',
    headline: 'Orçamento, processos e controles.',
    description: 'Planejamento e acompanhamento de despesas, gestão orçamentária e padronização de processos de compras.',
    deliverables: [
      'Planejamento e acompanhamento de despesas',
      'Gestão orçamentária',
      'Padronização de processos de compras'
    ],
    image: '/images/banco-real.jpg',
    imageAlt: 'Fachada do Banco Real / ABN AMRO, em fotografia fornecida por Diego Moraes.'
  },
  {
    id: 'santander',
    period: '2010 – 2018',
    company: 'Santander Brasil',
    role: 'Seis posições: PMO corporativo → Planejamento de RH → Talent Acquisition → People Analytics',
    location: 'São Paulo, Brasil',
    color: '#008CD2',
    headline: 'De PMO corporativo a People Analytics.',
    description: 'Progressão interna em seis posições, de Analista de Projetos no PMO Corporativo a Coordenador de People Analytics, passando por Indicadores, Orçamento e Planejamento Estratégico de RH e Atração e Seleção. Governança executiva em reporte à Vice-Presidência, transformação de Operações de RH em CSC, Talent Acquisition, Workday e mobilidade interna.',
    deliverables: [
      'Budget, forecast e realizado de ~R$ 6 bilhões em custos de pessoas',
      'Dashboard mensal automatizado para ~3.600 gestores e HRBPs',
      'Governança executiva da Diretoria de RH, com ~300 profissionais',
      'Internalização de ~2.000 vagas/mês, com ~R$ 10 milhões de redução em 12 meses',
      'Ponto focal local de Atração e Seleção no rollout global do Workday',
      'Mobilidade interna com matching algorítmico para ~50 mil colaboradores'
    ],
    image: '/images/santander-sede.jpg',
    imageAlt: 'Fachada do Santander, em fotografia fornecida por Diego Moraes.',
    imageFit: 'contain'
  },
  {
    id: 'safra-pmo',
    period: '2018 – 2020',
    company: 'Banco Safra',
    role: 'Gerente de Projetos de RH · HR PMO',
    location: 'São Paulo, Brasil',
    color: '#F58220',
    headline: 'HR PMO e transformação operacional.',
    description: 'Estruturação do HR PMO do zero, com equipe direta e coordenação matricial com Tecnologia, Operações e PMO corporativo. Admissão digital, desligamento no PeopleSoft, eSocial, autosserviço e iniciativas de employee experience.',
    deliverables: [
      'Admissão digital: de 22 para 10 dias (−55%)',
      'Desligamento integrado ao PeopleSoft (−50% no processamento)',
      'Implantação do eSocial e modernização dos processos regulatórios',
      'Autosserviço de ponto, férias e declarações no app de RH',
      'Clube de descontos com 2.500+ parceiros, Gympass e bem-estar'
    ],
    image: '/images/banco-safra.webp',
    imageAlt: 'Fachada do Banco Safra, em fotografia fornecida por Diego Moraes.'
  },
  {
    id: 'toronto-intl',
    period: '2020 – 2025',
    company: 'Toronto, Canadá',
    role: 'Franquia e P&L · HR Business Partner · Operação de imigração',
    location: 'Toronto, Canadá',
    color: '#FFC20E',
    headline: 'Operação em ambientes multiculturais, regulados e orientados ao cliente.',
    description: 'Três frentes em Toronto: gestão de franquia com responsabilidade por P&L, HR Business Partner na Federation of Canadian-Brazilian Businesses e operação regulatória de imigração na CanadaVistos, com evolução para coordenação operacional. Diploma in Business Management pela Toronto School of Management.',
    deliverables: [
      'FCBB · HRBP (2021–2025): apoio ao comitê executivo e a 6 lideranças regionais; Workforce e Capacity Planning para ~36 profissionais',
      'CanadaVistos (2021–2025): ~650 processos por ano, LMIA, Work Permit e recrutamento internacional',
      'Seda Intercâmbios (2020–2021): gestão de P&L e 26 parcerias com escolas mantidas durante a pandemia'
    ],
    image: '/images/trajetoria-canada.webp',
    imageAlt: 'Vista urbana de Toronto em contexto multicultural e profissional.'
  },
  {
    id: 'digital-ai',
    period: '2025 – Atual',
    company: 'Consultoria independente',
    role: 'HR Transformation, produtos digitais e IA aplicada',
    location: 'São Paulo, Brasil',
    color: '#8A1538',
    headline: 'Do desenho do processo à construção da solução.',
    description: 'Diagnóstico, mapeamento AS-IS/TO-BE, requisitos, roadmaps, dashboards, automações e produtos digitais construídos de ponta a ponta com apoio de IA, além de pesquisa autoral sobre RH, HR Tech e futuro do trabalho.',
    deliverables: [
      'Diagnóstico, jornadas, requisitos e roadmaps de transformação',
      'Dashboards, CRMs, automações e workflows para RH e operações',
      'The Lusim, plataforma SaaS em operação, e FreelaDeck',
      'People Systems Brief, newsletter autoral no LinkedIn'
    ],
    image: '/images/trajetoria-digital.webp',
    imageAlt: 'Mesa de trabalho com protótipos e materiais de planejamento.'
  }
];

function ChapterBody({ chapter }: { chapter: Chapter }) {
  return (
    <div className="space-y-5">
      <h4 className="text-xl sm:text-2xl font-black text-[#0F294A] leading-snug">{chapter.headline}</h4>
      <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed">{chapter.description}</p>
      <div className="pt-4 border-t border-slate-200">
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-3">Entregas</span>
        <ul className="space-y-2.5">
          {chapter.deliverables.map(item => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
              <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: chapter.color === '#FFC20E' ? '#B45309' : chapter.color }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Trajetoria() {
  const reduced = useMotionPreference();
  const [activeChapter, setActiveChapter] = useState(0);
  const [sheetChapter, setSheetChapter] = useState<Chapter | null>(null);
  const current = chapters[activeChapter];

  return (
    <section id="trajetoria" className="py-16 sm:py-20 lg:py-28 bg-[#F8FAFC] text-[#0F294A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Trajetória"
          color="#1B4E9B"
          title={<>Uma jornada construída dentro da complexidade —{' '}<span className="text-[#1B4E9B]">não observando-a de fora.</span></>}
          lead="18 anos entre ABN AMRO, Santander, Banco Safra, Canadá e consultoria — 12 deles em São Paulo, sempre perto da operação."
        />

        {/* Mobile: linha do tempo; o detalhe abre em drawer, sem trocar conteúdo fora da tela. */}
        <ol className="lg:hidden relative ml-2 border-l-2 border-slate-200 space-y-3">
          {chapters.map(chap => (
            <li key={chap.id} className="relative pl-5">
              <span className="absolute -left-[7px] top-5 w-3 h-3 rounded-full ring-4 ring-[#F8FAFC]" style={{ backgroundColor: chap.color }} aria-hidden="true" />
              <button
                type="button"
                onClick={event => { event.currentTarget.focus(); setSheetChapter(chap); }}
                className="w-full text-left p-4 rounded-2xl bg-white border border-slate-200 shadow-xs active:scale-[0.99] transition-transform flex items-center gap-3 cursor-pointer"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-mono font-bold" style={{ color: chap.color === '#FFC20E' ? '#B45309' : chap.color }}>{chap.period}</span>
                  <span className="block text-[15px] font-black text-[#0F294A] tracking-tight mt-0.5">{chap.company}</span>
                  <span className="block text-xs text-slate-600 mt-0.5 line-clamp-2">{chap.role}</span>
                </div>
                <ChevronRight size={18} className="text-slate-400 shrink-0" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ol>

        {/* Desktop: lista e painel lado a lado, o detalhe fica sempre visível ao lado da escolha. */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          <div className="col-span-4 space-y-2 lg:sticky lg:top-28">
            {chapters.map((chap, idx) => {
              const isActive = activeChapter === idx;
              return (
                <button
                  key={chap.id}
                  onClick={() => setActiveChapter(idx)}
                  aria-pressed={isActive}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 cursor-pointer border-l-4 border-t border-r border-b ${
                    isActive
                      ? 'bg-white shadow-md border-slate-300 translate-x-1'
                      : 'bg-white/60 hover:bg-white border-slate-200'
                  }`}
                  style={{ borderLeftColor: chap.color }}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span className="font-bold" style={{ color: chap.color === '#FFC20E' ? '#B45309' : chap.color }}>{chap.period}</span>
                    <span className="text-slate-400 font-semibold">{chap.location}</span>
                  </div>
                  <div className="text-sm font-black text-[#0F294A] tracking-tight">{chap.company}</div>
                  <div className="text-xs text-slate-600 truncate mt-0.5">{chap.role}</div>
                </button>
              );
            })}
          </div>

          <div className="col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter}
                initial={reduced ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={reduced ? { duration: 0, delay: 0 } : { duration: 0.25 }}
                className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
              >
                <LGChromaticBar size="xs" />
                <div className="p-8 bg-[#0F294A] text-white">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider" style={{ backgroundColor: current.color, color: current.color === '#FFC20E' ? '#0F294A' : '#FFFFFF' }}>
                      {current.period}
                    </span>
                    <span className="text-xs font-mono text-slate-300">{current.location}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white">{current.company}</h3>
                  <p className="text-sm text-slate-300 font-medium mt-1">{current.role}</p>
                </div>
                <ContextImage
                  key={current.id}
                  src={current.image}
                  alt={current.imageAlt}
                  fit={current.imageFit}
                  className="aspect-[16/8] rounded-none bg-slate-100"
                />
                <div className="p-10">
                  <ChapterBody chapter={current} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <BottomSheet
        open={!!sheetChapter}
        onClose={() => setSheetChapter(null)}
        eyebrow={sheetChapter ? sheetChapter.period : ''}
        title={sheetChapter?.company ?? ''}
        accent={sheetChapter?.color === '#FFC20E' ? '#B45309' : sheetChapter?.color}
      >
        {sheetChapter && (
          <div className="space-y-5">
            <ContextImage
              src={sheetChapter.image}
              alt={sheetChapter.imageAlt}
              fit={sheetChapter.imageFit}
              className="aspect-video bg-slate-100"
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600">
              <span className="font-semibold text-[#0F294A]">{sheetChapter.role}</span>
              <span className="inline-flex items-center gap-1"><MapPin size={12} />{sheetChapter.location}</span>
            </div>
            <ChapterBody chapter={sheetChapter} />
          </div>
        )}
      </BottomSheet>
    </section>
  );
}
