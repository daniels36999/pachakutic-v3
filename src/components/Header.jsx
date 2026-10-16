import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { navItems, sectionToNav, candidate } from '../data/candidate.js';
import { useActiveSection } from '../hooks/useActiveSection.js';

const sectionIds = Object.keys(sectionToNav);

export default function Header() {
  const [open, setOpen] = useState(false);
  const current = useActiveSection(sectionIds);
  const activeNav = sectionToNav[current];

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header dark">
      <div className="container site-header__bar">
        <a className="brand" href="#inicio" aria-label={`${candidate.shortName} — ir al inicio`} onClick={() => setOpen(false)}>
          <svg className="brand__mark" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="#16263F" stroke="rgba(255,255,255,.25)" />
            <circle cx="14" cy="42" r="5" fill="#D81119" />
            <circle cx="25" cy="30" r="5" fill="#EE8D09" />
            <circle cx="37" cy="22" r="5" fill="#36A036" />
            <circle cx="48" cy="30" r="5" fill="#3FA5DD" />
            <circle cx="50" cy="44" r="5" fill="#C0E2ED" />
          </svg>
          <span className="brand__text">
            <strong>Altamirano</strong>
            <small>Alcaldía · Guamote</small>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'X' : 'Menu'} size={26} />
        </button>

        <nav id="menu-principal" className={`nav ${open ? 'is-open' : ''}`} aria-label="Principal">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeNav === item.id ? 'is-active' : ''}
                  aria-current={activeNav === item.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="stripe" aria-hidden="true" />
    </header>
  );
}
