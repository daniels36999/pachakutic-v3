import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import { candidate } from '../data/candidate.js';

function Item({ icon, label, value, href, todo, color }) {
  return (
    <Reveal as="li" className="contact-item" style={{ '--c': color }}>
      <span className="contact-item__ico"><Icon name={icon} size={22} /></span>
      <div>
        <span className="contact-item__label">{label}</span>
        {value ? (
          href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{value}</a> : <strong>{value}</strong>
        ) : (
          <span className="todo todo--dark">{todo}</span>
        )}
      </div>
    </Reveal>
  );
}

export default function Contact() {
  const c = candidate.contact;
  const colors = ['var(--orange)', 'var(--red)', 'var(--green)', 'var(--blue)', 'var(--ice)'];
  return (
    <section id="contacto" className="section section--navy dark" aria-labelledby="contacto-title">
      <div className="container">
        <SectionHead
          index="09"
          eyebrow="Contacto"
          title="Hablemos de Guamote"
          id="contacto-title"
          accent="var(--blue)"
          lede="Canales oficiales de la candidatura."
        />
        <ul className="contact-grid">
          <Item icon="MapPin" label="Ubicación" value={c.location} color={colors[0]} />
          <Item icon="Phone" label="Teléfono" value={c.phone} href={c.phone && `tel:${c.phone.replace(/\s/g, '')}`} todo="Agregar teléfono" color={colors[1]} />
          <Item icon="Mail" label="Correo" value={c.email} href={c.email && `mailto:${c.email}`} todo="Agregar correo" color={colors[2]} />
          <Item icon="Link2" label="Sitio oficial" value={c.website} href={c.website} todo="Agregar enlace oficial" color={colors[3]} />
          {c.socials.map((s, i) => (
            <Item key={s.label} icon="Link2" label={s.label} value={s.url && s.url.replace(/^https?:\/\//, '')} href={s.url} todo="Agregar enlace oficial" color={colors[(i + 4) % 5]} />
          ))}
        </ul>
        <Reveal className="vote-cta">
          <p><span>{candidate.party}</span> {candidate.slogan}</p>
          <strong>{candidate.listNumber}</strong>
        </Reveal>
      </div>
    </section>
  );
}
