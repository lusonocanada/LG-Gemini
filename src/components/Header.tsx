import { useState, useEffect } from 'react';
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
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
      <div className="fixed top-0 left-0 right-0 z-50">
        <LGChromaticBar size="xs" />
      </div>

      <header
        className={`fixed top-[3px] left-0 right-0 z-40 transition-all duration-300 liquid-glass-light border-b border-slate-200/80 ${
          isScrolled ? 'shadow-[0_10px_30px_-10px_rgba(15,41,74,0.1)] border-slate-300/90' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
            
            {/* Protagonist Brand Lockup: Diego Moraes first, prominent & legible LG contextual logo */}
            <a 
              href="#" 
              className="flex items-center gap-2.5 sm:gap-4 group focus:outline-hidden shrink-0"
              aria-label="Diego Moraes - Início"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-black tracking-tight text-[#0F294A] group-hover:text-[#008CD2] transition-colors whitespace-nowrap">
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
              </div>

              <div className="h-8 w-px bg-slate-300 hidden sm:block mx-1" />

              <div className="hidden sm:flex items-center pl-1 shrink-0">
                <LGLogo size="sm" />
              </div>
            </a>

            {/* Desktop Navigation Links - Fluid & Auto-resizing */}
            <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1.5 2xl:gap-2 flex-1 mx-1 xl:mx-2 min-w-0">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] xl:text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#008CD2] px-1.5 xl:px-2.5 2xl:px-3 py-1.5 transition-colors border-b-2 border-transparent hover:border-[#008CD2] whitespace-nowrap shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 bg-[#0F294A] hover:bg-[#1B4E9B] text-white text-[11px] sm:text-xs font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-700 hover:border-[#008CD2] transition-all cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <FileText size={13} className="text-[#FFC20E]" />
                <span>Ver perfil completo</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors focus:outline-hidden rounded-full hover:bg-slate-100/80"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown with Liquid Glass */}
        {mobileMenuOpen && (
          <div className="lg:hidden liquid-glass-light border-b border-slate-200/90 px-4 pt-3 pb-6 space-y-1 shadow-2xl">
            <div className="pb-3 mb-2 border-b border-slate-200/60 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Apresentação para</span>
              <LGLogo size="sm" />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm font-semibold text-slate-700 hover:text-[#008CD2] p-2.5 rounded-full hover:bg-slate-50 transition-colors"
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
