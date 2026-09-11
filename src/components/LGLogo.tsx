interface LGLogoProps {
  className?: string;
  onDark?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export default function LGLogo({ className = '', onDark = false, size = 'sm' }: LGLogoProps) {
  const heightClass = 
    size === 'xs' ? 'h-4' :
    size === 'sm' ? 'h-6' :
    size === 'md' ? 'h-8' :
    'h-10';

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
      <div className={`inline-flex items-center justify-center bg-white px-2.5 py-1 rounded-md shadow-xs ${className}`}>
        {logoElement}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center shrink-0 ${className}`} aria-label="LG Lugar de Gente">
      {logoElement}
    </div>
  );
}
