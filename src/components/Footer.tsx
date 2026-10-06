import { useState, useRef } from 'react';
import { useDialog } from '../hooks/useDialog';
import { ArrowUp, FileText, X, ExternalLink } from 'lucide-react';
import LGLogo from './LGLogo';
import LGChromaticBar from './LGChromaticBar';

interface FooterProps {
  onOpenCvModal: () => void;
}

interface SourceItem {
  title: string;
  url: string;
}

const sourcesList: SourceItem[] = [
  {
    title: 'LG Lugar de Gente — página institucional e jornada de RH',
    url: 'https://www.lg.com.br/'
  },
  {
    title: 'LG Lugar de Gente — Quem somos',
    url: 'https://www.lg.com.br/quem-somos/'
  },
  {
    title: 'LiGiaPro — agentes de IA para RH',
    url: 'https://www.lg.com.br/ligia/'
  },
  {
    title: 'People Analytics',
    url: 'https://www.lg.com.br/produtos/people-analytics/'
  },
  {
    title: 'LG Benefícios',
    url: 'https://www.lg.com.br/beneficios/'
  },
  {
    title: 'LG Connect Marketplace',
    url: 'https://www.lg.com.br/marketplace/'
  },
  {
    title: 'Canais BPO',
    url: 'https://www.lg.com.br/canais-bpo/'
  },
  {
    title: 'Moavi e LG Lugar de Gente',
    url: 'https://www.lg.com.br/blog/moavi-lg-lugar-de-gente/'
  },
  {
    title: 'CONARH 2025 — IA e dados estratégicos',
    url: 'https://www.lg.com.br/blog/conarh-2025-ia-dados-estrategicos/'
  },
  {
    title: 'Aquecimento CONARH 2026',
    url: 'https://lp.lg.com.br/aquecimento-conarh-2026/'
  },
  {
    title: 'Report IA no RH',
    url: 'https://page.lg.com.br/lps/wp-content/uploads/2026/02/Report-IA-no-RH.pdf'
  }
];

export default function Footer({ onOpenCvModal }: FooterProps) {
  const [sourcesModalOpen, setSourcesModalOpen] = useState(false);
  const sourcesButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useDialog(sourcesModalOpen, () => setSourcesModalOpen(false));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };

  const navLinks = [
    { label: 'Trajetória', href: '#trajetoria' },
    { label: 'Cases', href: '#cases' },
    { label: 'Como trabalho', href: '#metodo' },
    { label: 'Por que LG', href: '#porque-lg' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <footer className="bg-[#0F172A] text-white pt-16 pb-12 relative overflow-hidden border-t border-slate-800">
        <div className="absolute top-0 left-0 right-0">
          <LGChromaticBar size="xs" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="pb-10 border-b border-slate-800">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-extrabold text-lg tracking-tight text-white">
                  DIEGO MORAES
                </span>
                <span className="text-slate-600">|</span>
                <LGLogo onDark size="sm" className="-mt-[17px]" />
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Apresentação executiva e proposta de valor profissional direcionada à <strong>LG Lugar de Gente</strong>. HR Transformation, HR Tech, People Analytics, operações, governança, produtos digitais e IA aplicada.
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-xs font-semibold text-slate-400 hover:text-[#00A3E0] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={event => { event.currentTarget.focus(); onOpenCvModal(); }}
                  className="inline-flex items-center gap-2 bg-[#008CD2] hover:bg-[#0072CE] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors uppercase tracking-wider cursor-pointer shadow-xs"
                >
                  <FileText size={14} />
                  <span>Ver currículo</span>
                </button>

                <button
                  ref={sourcesButtonRef}
                  onClick={event => { event.currentTarget.focus(); setSourcesModalOpen(true); }}
                  className="inline-flex items-center gap-1.5 bg-[#14263D] hover:bg-[#1C3352] text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-semibold px-4 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  <span>Fontes e referências</span>
                </button>

                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-xs font-semibold px-4 py-2.5 border border-slate-800 hover:border-slate-700 hover:bg-[#14263D] rounded-full transition-colors cursor-pointer"
                >
                  <ArrowUp size={14} />
                  <span>Voltar ao topo</span>
                </button>
              </div>
            </div>

          </div>

          <div className="pt-6 border-b border-slate-800 pb-6">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-300 mb-2">
              Documento de caráter privado, confidencial e não comercial
            </p>
            <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed max-w-6xl">
              Material destinado exclusivamente a apresentação profissional, avaliação de perfil e circulação interna entre colaboradores da LG Lugar de Gente. O conteúdo reúne produção autoral e referências visuais inspiradas em materiais públicos disponibilizados pela LG Lugar de Gente em seus canais institucionais. Marcas, logotipos, nomes empresariais, identidade visual, paleta cromática, elementos gráficos e demais sinais distintivos eventualmente reproduzidos ou mencionados permanecem de titularidade de seus respectivos detentores e são utilizados unicamente para contextualização da candidatura, sem alegação de afiliação oficial, endosso, patrocínio, aprovação institucional ou finalidade comercial, publicitária ou de divulgação pública.
            </p>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 leading-relaxed">
            <p className="max-w-3xl">
              Uso restrito ao contexto desta apresentação profissional e às pessoas diretamente envolvidas em sua avaliação.
            </p>
            <span className="shrink-0 text-slate-400 font-mono text-xs">
              © {new Date().getFullYear()} Diego Moraes
            </span>
          </div>
        </div>
      </footer>

      {sourcesModalOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sources-drawer-title"
        >
          <div
            onClick={() => setSourcesModalOpen(false)}
            className="fixed inset-0 bg-[#0F294A]/80 backdrop-blur-xs transition-opacity"
          />

          <div
            ref={drawerRef}
            tabIndex={-1}
            className="relative z-10 w-full max-w-2xl max-h-[90vh] sm:max-h-[85vh] bg-white text-slate-900 rounded-t-3xl sm:rounded-2xl border-t-4 border-t-[#008CD2] shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white shrink-0">
              <h2 id="sources-drawer-title" className="text-sm font-bold uppercase tracking-wider text-[#008CD2]">
                Fontes e Referências
              </h2>
              <button
                onClick={() => setSourcesModalOpen(false)}
                aria-label="Fechar fontes e referências"
                className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1">
              <div className="p-4 bg-[#F8FAFC] border-l-4 border-l-[#008CD2] border-t border-r border-b border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
                Referências institucionais públicas consultadas para contextualização da candidatura e compreensão do posicionamento, produtos e iniciativas da LG Lugar de Gente. A utilização dessas referências não implica afiliação, endosso, patrocínio ou aprovação institucional.
              </div>

              <div className="space-y-3">
                {sourcesList.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white border border-slate-200 hover:border-[#008CD2] rounded-xl transition-all shadow-2xs hover:shadow-xs group"
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block space-y-1"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs sm:text-sm font-bold text-[#0F294A] group-hover:text-[#008CD2] transition-colors">
                          {idx + 1}. {item.title}
                        </span>
                        <ExternalLink size={14} className="text-slate-400 group-hover:text-[#008CD2] shrink-0 mt-0.5" />
                      </div>
                      <span className="text-xs font-mono text-[#008CD2] break-all block">
                        {item.url}
                      </span>
                      <span className="text-[11px] text-slate-500 block pt-0.5">
                        Acesso em setembro de 2026
                      </span>
                    </a>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 leading-relaxed font-normal">
                Posicionamentos, produtos e informações institucionais podem evoluir ao longo do tempo. O conteúdo profissional apresentado neste material corresponde exclusivamente à candidatura de Diego Moraes.
              </div>
            </div>

            <div className="p-4 border-t border-slate-200 bg-white flex justify-end shrink-0">
              <button
                onClick={() => setSourcesModalOpen(false)}
                className="px-6 py-2.5 bg-[#0F294A] hover:bg-[#1B4E9B] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors cursor-pointer shadow-xs"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
