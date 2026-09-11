import { useState } from 'react';

interface ContextImageProps {
  name: string;
  alt: string;
  portrait?: boolean;
  className?: string;
}

export default function ContextImage({ name, alt, portrait = false, className = '' }: ContextImageProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={`/images/${name}.webp`}
      alt={alt}
      loading="lazy"
      decoding="async"
      width={1600}
      height={portrait ? 2000 : 900}
      onLoad={() => setLoaded(true)}
      ref={image => { if (image?.complete && image.naturalWidth) setLoaded(true); }}
      className={`context-image rounded-2xl ${className}`}
      style={{ opacity: loaded ? 1 : 0, transition: 'opacity 200ms ease-out' }}
    />
  );
}
