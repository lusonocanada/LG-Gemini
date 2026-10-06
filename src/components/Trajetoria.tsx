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
    ],
    image: '/images/banco-real.jpg',
    imageAlt: 'Fachada do Banco Real / ABN AMRO, em fotografia fornecida por Diego Moraes.'
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
    ],
    image: '/images/santander-sede.jpg',
    imageAlt: 'Fachada do Santander, em fotografia fornecida por Diego Moraes.',
    imageFit: 'contain'
  },
  {
    id: 'safra-pmo',
    period: '2018 – 2020',
    company: 'Banco Safra',
    role: 'Gerente de Projetos de RH e estruturação do HR PMO',
    location: 'São Paulo, Brasil',
    color: '#F58220',
    headline: 'PMO de RH, PeopleSoft e jornadas digitais que ganharam velocidade.',
    description: 'Estruturação do HR PMO, priorização de carteira, admissão digital com redução aproximada de 55% no ciclo e redesenho do desligamento com redução aproximada de 50% no processamento.',
    deliverables: [
      'Metodologia de PMO e rituais executivos',
      'Admissão digital no PeopleSoft',
      'Modernização de portal e aplicativo',
      'Redesenho de desligamento'
    ],
    image: '/images/banco-safra.webp',
    imageAlt: 'Fachada do Banco Safra, em fotografia fornecida por Diego Moraes.'
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
    ],
    image: '/images/trajetoria-canada.webp',
    imageAlt: 'Vista urbana de Toronto em contexto multicultural e profissional.'
  },
  {
    id: 'digital-ai',
    period: '2025 – Atual',
    company: 'Consultoria e soluções digitais',
    role: 'HR Transformation, produtos digitais e IA aplicada',
    location: 'São Paulo, Brasil',
    color: '#8A1538',
    headline: 'Do problema de RH à solução: processos, dados, automação e IA aplicada.',
    description: 'Diagnóstico, redesenho de processos, dashboards, automação, produtos digitais e IA aplicada a problemas reais de negócio e RH, com pesquisa autoral sobre HR Tech e futuro do trabalho.',
    deliverables: [
      'Diagnóstico e desenho de processos',
      'People Analytics, dados e automação',
      'Produtos digitais e IA aplicada'
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
          lead="18 anos entre Santander, Banco Safra, Canadá e consultoria — sempre dentro do RH, perto da operação."
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
