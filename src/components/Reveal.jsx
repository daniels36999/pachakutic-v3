import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView.js';

/** Envuelve contenido con animación de aparición al hacer scroll. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, seen] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--d': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

const fmt = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

/** Número con conteo animado (respeta prefers-reduced-motion). */
export function CountUp({ to }) {
  const [ref, seen] = useInView(0.4);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!seen) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to);
      return undefined;
    }
    let raf;
    let start;
    const step = (t) => {
      if (start === undefined) start = t;
      const p = Math.min((t - start) / 1200, 1);
      setValue(Math.round(to * (1 - (1 - p) ** 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);

  return (
    <span ref={ref}>
      <span className="sr-only">{fmt(to)}</span>
      <span aria-hidden="true">{fmt(value)}</span>
    </span>
  );
}
