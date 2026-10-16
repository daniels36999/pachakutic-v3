import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import { candidate } from '../data/candidate.js';

export default function Education() {
  return (
    <section id="formacion" className="section section--white" aria-labelledby="formacion-title">
      <div className="container">
        <SectionHead
          index="02"
          eyebrow="Formación"
          title="Del territorio a la universidad"
          id="formacion-title"
          accent="var(--orange)"
          lede="Un camino académico que empezó en su comunidad y llegó al título de Ingeniero Civil."
        />
        <ol className="stepper">
          {candidate.education.map((ed, i) => (
            <Reveal as="li" key={ed.id} delay={i * 140} className={ed.highlight ? 'is-highlight' : ''} style={{ '--i': i }}>
              <span className="stepper__node"><Icon name={ed.icon} size={22} /></span>
              <p className="stepper__step">{ed.step}</p>
              <h3>{ed.title}</h3>
              <p className="stepper__detail">{ed.detail}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
