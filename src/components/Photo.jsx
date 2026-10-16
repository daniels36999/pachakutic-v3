import { PLACEHOLDER_PHOTO } from '../data/candidate.js';

/** Resuelve rutas de /public respetando el `base` de Vite (GitHub Pages). */
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

/**
 * Imagen con object-fit: cover. Si `src` es null usa el placeholder
 * (public/images/placeholder/foto-pendiente.svg) — NUNCA se inventan personas.
 */
export default function Photo({ src, alt, eager = false, className = '', position = '50% 15%' }) {
  const isPlaceholder = !src;
  return (
    <img
      className={`photo ${isPlaceholder ? 'photo--placeholder' : ''} ${className}`.trim()}
      src={asset(src || PLACEHOLDER_PHOTO)}
      alt={isPlaceholder ? `${alt} (fotografía pendiente)` : alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchpriority={eager ? 'high' : undefined}
      decoding="async"
      style={{ objectPosition: position }}
    />
  );
}
