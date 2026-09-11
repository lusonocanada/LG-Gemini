import { useState, useEffect, useRef, ChangeEvent, DragEvent } from 'react';
import { Camera, Upload, CheckCircle2 } from 'lucide-react';
import LGChromaticBar from './LGChromaticBar';
import { getStoredPhoto, saveStoredPhoto, subscribeToPhotoUpdates } from '../utils/photoManager';

export default function HeroExecutivePhoto() {
  const [photoUrl, setPhotoUrl] = useState<string | null>(getStoredPhoto() || '/hero-photo2.png');
  const [imageError, setImageError] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [justUploaded, setJustUploaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const unsubscribe = subscribeToPhotoUpdates((newPhoto) => {
      if (newPhoto) {
        setPhotoUrl(newPhoto);
        setImageError(false);
      } else {
        setPhotoUrl('/hero-photo2.png');
      }
    });
    return unsubscribe;
  }, []);

  const handleFileProcess = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        saveStoredPhoto(dataUrl);
        setPhotoUrl(dataUrl);
        setImageError(false);
        setJustUploaded(true);
        setTimeout(() => setJustUploaded(false), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const hasValidPhoto = photoUrl && !imageError;

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="relative group overflow-hidden border-2 border-slate-200 bg-[#0F294A] shadow-xl min-h-[440px] sm:min-h-[500px] flex flex-col justify-end transition-all"
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        accept="image/*"
        className="hidden"
      />

      {/* Chromatic Top Accent on Image */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none">
        <LGChromaticBar size="xs" />
      </div>

      {/* Dragging Active Overlay */}
      {isDragging && (
        <div className="absolute inset-0 z-40 bg-[#0F294A]/90 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center text-white border-2 border-dashed border-[#008CD2]">
          <Upload size={48} className="text-[#008CD2] animate-bounce mb-3" />
          <p className="text-base font-bold">Solte a foto aqui</p>
          <p className="text-xs text-slate-300 mt-1">hero-photo2.png será aplicada instantaneamente</p>
        </div>
      )}

      {/* Success Notification Pill */}
      {justUploaded && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-40 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 animate-fade-in">
          <CheckCircle2 size={14} />
          <span>Foto oficial atualizada com sucesso!</span>
        </div>
      )}

      {/* Quick Change Floating Button (visible on hover) */}
      <button
        onClick={triggerFileInput}
        title="Carregar / Substituir Foto Oficial"
        className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#0F294A]/80 hover:bg-[#0F294A] text-white text-[11px] font-bold rounded-full backdrop-blur-md shadow-md border border-white/20 cursor-pointer"
      >
        <Camera size={13} className="text-[#008CD2]" />
        <span>Alterar Foto</span>
      </button>

      {/* Display Photo if valid */}
      {hasValidPhoto ? (
        <>
          <img
            src={photoUrl}
            onError={() => setImageError(true)}
            alt="Diego Moraes da Silva - Foto Executiva Oficial"
            referrerPolicy="no-referrer"
            className="w-full h-[440px] sm:h-[500px] object-cover object-[center_15%] filter contrast-[1.03]"
          />
          {/* Gradient vignette on bottom of photo for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1929] via-[#0C1929]/40 to-transparent pointer-events-none" />
        </>
      ) : (
        /* Executive Empty / Pending State (Never show an unrelated stranger!) */
        <div className="h-[440px] sm:h-[500px] w-full flex flex-col items-center justify-center p-8 text-center relative z-20 bg-gradient-to-b from-[#112239] to-[#0A1626]">
          <div className="w-24 h-24 rounded-full bg-[#1B4E9B] border-2 border-[#008CD2] flex items-center justify-center shadow-inner mb-5 relative group/avatar">
            <span className="text-3xl font-black text-white tracking-wider">DM</span>
            <div className="absolute inset-0 rounded-full bg-black/30 opacity-0 group-hover/avatar:opacity-100 flex items-center justify-center transition-opacity">
              <Camera size={20} className="text-white" />
            </div>
          </div>

          <h3 className="text-lg font-black text-white tracking-tight mb-1">
            Foto Executiva Oficial
          </h3>
          <p className="text-xs text-slate-300 max-w-xs mb-6 leading-relaxed">
            Clique no botão abaixo ou arraste o arquivo <strong className="text-white">hero-photo2.png</strong> para aplicar sua foto real instantaneamente.
          </p>

          <button
            onClick={triggerFileInput}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#008CD2] hover:bg-[#0070A8] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <Upload size={14} />
            <span>Selecionar hero-photo2.png</span>
          </button>
        </div>
      )}

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
