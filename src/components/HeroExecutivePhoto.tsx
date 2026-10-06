import LGChromaticBar from './LGChromaticBar';

export default function HeroExecutivePhoto() {
  return (
    <div className="hero-photo-frame relative p-2.5 rounded-3xl liquid-glass-card ai-rainbow-border shadow-2xl overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none rounded-t-3xl overflow-hidden">
        <LGChromaticBar size="xs" />
      </div>

      <div className="relative rounded-2xl overflow-hidden bg-[#0F294A] min-h-[440px] sm:min-h-[560px] lg:min-h-[640px] flex flex-col justify-end">
        <img
          src="/hero-photo2.webp"
          alt="Diego Moraes"
          className="hero-cinematic-photo w-full h-[440px] sm:h-[560px] lg:h-[640px] object-cover object-[center_12%]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1929]/95 via-[#0C1929]/30 to-transparent pointer-events-none" />
        <div className="hero-photo-light absolute inset-0 pointer-events-none" />

        <div className="hero-id-card absolute bottom-3 left-3 right-3 p-5 z-20 text-white space-y-2 rounded-2xl liquid-glass-dark border border-white/20 shadow-2xl backdrop-blur-2xl pointer-events-auto">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono uppercase tracking-widest text-[#FFC20E] font-bold border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC20E]" />
              Apresentação executiva
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Diego Moraes
          </h2>

          <p className="text-xs text-slate-300 font-medium">
            Transformação de RH · Implantação · PMO · IA aplicada
          </p>

          <div className="pt-2.5 border-t border-white/15 flex flex-wrap gap-2 items-center justify-between text-[11px] text-slate-200 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#008CD2]" />
              <span>Ecossistemas de RH</span>
            </span>
            <span className="font-mono text-slate-300 px-2 py-0.5 rounded-md bg-white/10 border border-white/10 text-[10px]">
              18 anos de experiência
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
