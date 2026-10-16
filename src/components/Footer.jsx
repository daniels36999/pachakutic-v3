import { navItems, candidate } from '../data/candidate.js';

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    candidate.contact.website && { label: 'Sitio oficial', url: candidate.contact.website },
    ...candidate.contact.socials.filter((s) => s.url).map((s) => ({ label: s.label, url: s.url })),
  ].filter(Boolean);

  return (
    <footer className="site-footer dark">
      <div className="stripe stripe--thick" aria-hidden="true" />
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">{candidate.shortName}</p>
          <p className="footer__muted">{candidate.role} · {candidate.territory}, {candidate.province}</p>
          <p className="footer__muted">{candidate.party} · {candidate.slogan}</p>
        </div>
        <nav aria-label="Pie de página">
          <p className="footer__title">Navegación</p>
          <ul>
            {navItems.map((n) => (
              <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="footer__title">Enlaces</p>
          <ul>
            {links.length ? (
              links.map((l) => (
                <li key={l.label}><a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a></li>
              ))
            ) : (
              <li><span className="todo">Agregar enlace oficial</span></li>
            )}
          </ul>
        </div>
      </div>
      <div className="container footer__legal">
        <p>
          Sitio web informativo de la candidatura. Los contenidos corresponden a la información proporcionada por el candidato y su equipo.
        </p>
        <p>{candidate.legal.responsible || <span className="todo">Agregar responsable de la publicidad (según normativa electoral)</span>}</p>
        <p>© {year} {candidate.shortName}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
