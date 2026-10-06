import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  color: string;
  title: ReactNode;
  lead?: ReactNode;
}

export default function SectionHeader({ eyebrow, color, title, lead }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl mb-10 lg:mb-14">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-3 h-1" style={{ backgroundColor: color }} />
        <span className="text-xs font-bold uppercase tracking-widest font-mono" style={{ color: color === '#FFC20E' ? '#B45309' : color }}>
          {eyebrow}
        </span>
      </div>
      <h2 className="text-[1.65rem] sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F294A] leading-[1.12]">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
          {lead}
        </p>
      )}
    </div>
  );
}
