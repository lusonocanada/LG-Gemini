import LGChromaticBar from './LGChromaticBar';

export default function HeroExecutivePhoto() {
  return (
    <div className="relative overflow-hidden border-2 border-slate-200 bg-[#0F294A] shadow-xl min-h-[440px] sm:min-h-[500px] flex flex-col justify-end">
      {/* Chromatic Top Accent on Image */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none">
        <LGChromaticBar size="xs" />
      </div>

      {/* Static Real Photo */}
      <img
        src="/hero-photo2.png"
        alt="Diego Moraes"
        className="w-full h-[440px] sm:h-[500px] object-cover object-[center_15%]"
      />

      {/* Gradient vignette on bottom of photo for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C1929] via-[#0C1929]/40 to-transparent pointer-events-none" />

      {/* Overlaid Executive ID Card */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white space-y-2 pointer-events-none">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC20E] font-bold">
            Dossiê Executivo
          </span>
          <span className="text-[10px] font-mono text-slate-300">
            SP 🇧🇷 · TOR 🇨🇦
          </span>
        </div>

        <h2 className="text-2xl font-black text-white tracking-tight">
          Diego Moraes da Silva
        </h2>

        <p className="text-xs text-slate-300 font-medium">
          HR Transformation · HCM Implementation · PMO & IA
        </p>

        <div className="pt-3 border-t border-white/20 flex items-center justify-between text-[11px] text-slate-300">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-[#008CD2]" />
            <span>Workday & PeopleSoft</span>
          </span>
          <span className="font-mono text-slate-400">15 Anos Exp.</span>
        </div>
      </div>
    </div>
  );
}

