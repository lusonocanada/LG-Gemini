import { useState, useEffect } from 'react';
import { lockScroll } from '../hooks/useDialog';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';
import LGLogo from './LGLogo';
import LGChromaticBar from './LGChromaticBar';

interface HeaderProps {
  onOpenCvModal: () => void;
}

export default function Header({ onOpenCvModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 56);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const unlock = lockScroll();
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMobileMenuOpen(false); };
    window.addEventListener('keydown', escape);
    return () => { unlock(); window.removeEventListener('keydown', escape); };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Visão', href: '#visao' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Trajetória', href: '#trajetoria' },
    { label: 'Cases', href: '#cases' },
    { label: 'Método', href: '#metodo' },
    { label: 'Aderência', href: '#aderencia' },
    { label: 'Por que LG', href: '#porque-lg' },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? 'opacity-0 -translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        <LGChromaticBar size="xs" />
      </div>

      <header
        className={`fixed z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'top-3 sm:top-4 left-3 right-3 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-[calc(100%-32px)] sm:max-w-[1240px] rounded-[24px] sm:rounded-full floating-nav-glass'
            : 'top-[3px] left-0 right-0 border-b border-slate-200/80 liquid-glass-light'
        }`}
      >
        <div className={`mx-auto transition-all duration-500 ${isScrolled ? 'px-3 sm:px-4 lg:px-5' : 'max-w-7xl px-4 sm:px-6 lg:px-8'}`}>
          <div className={`flex items-center justify-between gap-2 sm:gap-4 transition-all duration-500 ${isScrolled ? 'h-14 sm:h-[62px]' : 'h-16 sm:h-20'}`}>
            <a
              href="#"
              className="flex items-center gap-2.5 sm:gap-4 group focus:outline-hidden shrink-0"
              aria-label="Diego Moraes - Início"
            >
              <div className="flex items-center gap-2">
                <span className={`font-black tracking-tight text-[#0F294A] group-hover:text-[#008CD2] transition-all whitespace-nowrap ${isScrolled ? 'text-sm sm:text-base' : 'text-base sm:text-lg'}`}>
                  DIEGO MORAES
                </span>
                <span className="inline-flex gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B4E9B]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008CD2]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC20E]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8A1538]" />
                </span>
              </div>

              <div className={`h-8 w-px bg-slate-300 hidden sm:block mx-1 transition-opacity ${isScrolled ? 'opacity-55' : 'opacity-100'}`} />

              <div className={`hidden sm:flex items-center pl-1 shrink-0 -mt-[17px] transition-all duration-500 origin-left ${isScrolled ? 'scale-[0.90]' : 'scale-100'}`}>
                <LGLogo size="sm" />
              </div>
            </a>

            <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 flex-1 mx-1 xl:mx-2 min-w-0">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-bold uppercase tracking-wider text-slate-600 hover:text-[#008CD2] transition-all whitespace-nowrap shrink-0 rounded-full hover:bg-white/55 ${
                    isScrolled ? 'text-[10px] xl:text-[11px] px-2 xl:px-2.5 py-2' : 'text-[11px] xl:text-xs px-1.5 xl:px-2.5 py-1.5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                onClick={event => { event.currentTarget.focus(); onOpenCvModal(); }}
                className={`inline-flex items-center gap-2 bg-[#0F294A] hover:bg-[#1B4E9B] text-white font-bold rounded-full border border-[#1B4E9B]/40 hover:border-[#008CD2] transition-all cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap ${
                  isScrolled ? 'text-[10px] sm:text-[11px] px-3.5 sm:px-4 py-2' : 'text-[11px] sm:text-xs px-3.5 sm:px-5 py-2 sm:py-2.5'
                }`}
              >
                <FileText size={13} className="text-[#FFC20E]" />
                <span className="hidden min-[400px]:inline">Ver perfil completo</span><span className="min-[400px]:hidden">Perfil</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-[#0F294A] transition-colors focus:outline-hidden rounded-full hover:bg-white/70"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className={`lg:hidden max-h-[calc(100dvh-6rem)] overflow-y-auto mx-2 mb-2 px-4 pt-3 pb-5 space-y-1 rounded-3xl border border-white/70 shadow-xl backdrop-blur-3xl bg-white/88 ${isScrolled ? '' : 'mt-1'}`}
          >
            <div className="pb-3 mb-2 border-b border-slate-200/60 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Apresentação para</span>
              <LGLogo size="sm" />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm font-semibold text-slate-700 hover:text-[#008CD2] p-2.5 rounded-full hover:bg-[#EAF6FB] transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight size={14} className="text-slate-400" />
              </a>
            ))}

            <div className="pt-4 mt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#008CD2] hover:bg-[#0072CE] text-white text-xs font-bold py-3 rounded-full transition-colors shadow-xs"
              >
                <FileText size={14} />
                <span>Ver perfil completo</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
