import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import { candidate } from '../data/candidate.js';

// Solo colores con buen contraste sobre fondos claros
const accents = ['var(--red)', 'var(--orange)', 'var(--green)', 'var(--blue)'];

// Hitos: título (2016) + experiencia + candidatura actual. Todo proviene de candidate.js.
const edu = candidate.education.find((e) => e.highlight);
const milestones = [
  { id: 'm0', icon: 'GraduationCap', year: '2016', title: 'Ingeniero Civil', org: edu.title, text: 'Obtiene su título profesional.' },
  ...candidate.experience.map((e) => ({
    id: e.id, icon: e.icon, year: e.period, title: e.title, org: e.org, text: e.description,
  })),
  {
    id: 'mN', icon: 'Vote', year: 'Actualidad', title: 'Candidatura', org: candidate.territory,
    text: `${candidate.role} del cantón Guamote.`, current: true,
  },
];

export default function Timeline() {
  return (
    <section id="trayectoria" className="section section--mist" aria-labelledby="trayectoria-title">
      <div className="container">
        <SectionHead
          index="03"
          eyebrow="Trayectoria"
          title="Una línea de tiempo al servicio del territorio"
          id="trayectoria-title"
          accent="var(--green)"
        />
        <ol className="timeline">
          {milestones.map((m, i) => (
            <Reveal
              as="li"
              key={m.id}
              delay={i * 110}
              className={`tl-item ${m.current ? 'is-current' : ''}`}
              style={{ '--c': accents[i % accents.length], '--i': i }}
            >
              <span className="tl-item__node"><Icon name={m.icon} size={20} /></span>
              <p className="tl-item__year">{m.year}</p>
              <h3>{m.title}</h3>
              <p className="tl-item__org">{m.org}</p>
              <p className="tl-item__text">{m.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
