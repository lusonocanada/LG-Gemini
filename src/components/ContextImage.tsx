import { useState } from 'react';

interface ContextImageProps {
  name?: string;
  src?: string;
  fit?: 'cover' | 'contain';
  alt: string;
  portrait?: boolean;
  className?: string;
}

export default function ContextImage({ name, src, fit = 'cover', alt, portrait = false, className = '' }: ContextImageProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src ?? `/images/${name}.webp`}
      alt={alt}
      loading="lazy"
      decoding="async"
      width={1600}
      height={portrait ? 2000 : 900}
      onLoad={() => setLoaded(true)}
      ref={image => { if (image?.complete && image.naturalWidth) setLoaded(true); }}
      className={`context-image rounded-2xl ${className}`}
      style={{ objectFit: fit, opacity: loaded ? 1 : 0, transition: 'opacity 200ms ease-out' }}
    />
  );
}
