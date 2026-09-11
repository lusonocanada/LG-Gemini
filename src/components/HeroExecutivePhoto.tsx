import LGChromaticBar from './LGChromaticBar';

export default function HeroExecutivePhoto() {
  return (
    <div className="relative p-2.5 rounded-3xl liquid-glass-card shadow-2xl overflow-hidden">
      {/* Chromatic Top Accent on Frame */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none rounded-t-3xl overflow-hidden">
        <LGChromaticBar size="xs" />
      </div>

      <div className="relative rounded-2xl overflow-hidden bg-[#0F294A] min-h-[460px] sm:min-h-[520px] flex flex-col justify-end">
        {/* Static Real Photo */}
        <img
          src="/hero-photo2.png"
          alt="Diego Moraes"
          className="w-full h-[460px] sm:h-[520px] object-cover object-[center_15%]"
        />

        {/* Subtle cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1929]/95 via-[#0C1929]/35 to-transparent pointer-events-none" />

        {/* Floating Apple-Style Liquid Glass Executive ID Card */}
        <div className="absolute bottom-3 left-3 right-3 p-5 z-20 text-white space-y-2 rounded-2xl liquid-glass-dark border border-white/20 shadow-2xl backdrop-blur-2xl pointer-events-auto">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono uppercase tracking-widest text-[#FFC20E] font-bold border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC20E]" />
              Apresentação Executiva
            </span>
            <span className="text-[10px] font-mono text-slate-300 font-semibold">
              São Paulo 🇧🇷 · Toronto 🇨🇦
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Diego Moraes
          </h2>

          <p className="text-xs text-slate-300 font-medium">
            HR Transformation · HCM Implementation · PMO & IA Aplicada
          </p>

          <div className="pt-2.5 border-t border-white/15 flex items-center justify-between text-[11px] text-slate-200 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#008CD2]" />
              <span>Workday · PeopleSoft</span>
            </span>
            <span className="font-mono text-slate-300 px-2 py-0.5 rounded-md bg-white/10 border border-white/10 text-[10px]">
              15+ Anos Exp.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

