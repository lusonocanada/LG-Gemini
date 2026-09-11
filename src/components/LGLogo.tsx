interface LGLogoProps {
  className?: string;
  onDark?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export default function LGLogo({ className = '', onDark = false, size = 'sm' }: LGLogoProps) {
  // Sized generously so the fine "lugar de gente" typography is crisp, legible and prominent
  const heightClass = 
    size === 'xs' ? 'h-7 sm:h-8' :
    size === 'sm' ? 'h-9 sm:h-10' :
    size === 'md' ? 'h-11 sm:h-12' :
    size === 'lg' ? 'h-14 sm:h-16' :
    'h-16 sm:h-20';

  const logoElement = (
    <img
      src="/lg_logo_original.svg"
      alt="LG Lugar de Gente"
      className={`${heightClass} w-auto object-contain select-none`}
      referrerPolicy="no-referrer"
    />
  );

  if (onDark) {
    return (
      <div 
        className={`inline-flex items-center justify-center bg-white px-3.5 py-1.5 rounded-xl border border-white/80 shadow-sm transition-transform hover:scale-[1.02] ${className}`}
        aria-label="LG Lugar de Gente"
      >
        {logoElement}
      </div>
    );
  }

  return (
    <div 
      className={`inline-flex items-center shrink-0 transition-transform hover:scale-[1.02] ${className}`} 
      aria-label="LG Lugar de Gente"
    >
      {logoElement}
    </div>
  );
}
