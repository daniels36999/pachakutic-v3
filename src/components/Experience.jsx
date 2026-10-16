import { useState } from 'react';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import { candidate } from '../data/candidate.js';

// Solo colores con buen contraste sobre fondos claros
const accents = ['var(--red)', 'var(--orange)', 'var(--green)', 'var(--blue)'];

export default function Experience() {
  const [openId, setOpenId] = useState(candidate.experience[3].id);

  return (
    <section id="experiencia" className="section section--white" aria-labelledby="experiencia-title">
      <div className="container">
        <SectionHead
          index="04"
          eyebrow="Experiencia profesional"
          title="Cinco etapas, un mismo propósito"
          id="experiencia-title"
          accent="var(--blue)"
          lede="Toca o haz clic en cada etapa para ver el detalle."
        />
        <div className="experience">
          <Reveal className="experience__aside dark">
            <Icon name="Droplets" size={34} />
            <p className="experience__num">1.200</p>
            <p>sistemas de riego bajo su responsabilidad como Director General de Riego, en los 10 cantones de Chimborazo.</p>
            <div className="stripe" aria-hidden="true" />
          </Reveal>

          <ul className="acc">
            {candidate.experience.map((e, i) => {
              const open = openId === e.id;
              return (
                <Reveal as="li" key={e.id} delay={i * 80} className={open ? 'is-open' : ''} style={{ '--c': accents[i % accents.length] }}>
                  <button
                    type="button"
                    className="acc__btn"
                    aria-expanded={open}
                    aria-controls={`${e.id}-panel`}
                    id={`${e.id}-btn`}
                    onClick={() => setOpenId(open ? null : e.id)}
                  >
                    <span className="acc__icon"><Icon name={e.icon} size={20} /></span>
                    <span className="acc__main">
                      <span className="acc__period">{e.period}</span>
                      <strong>{e.title}</strong>
                      <span className="acc__org">{e.org}</span>
                    </span>
                    <Icon name="ChevronDown" size={20} className="acc__chev" />
                  </button>
                  <div id={`${e.id}-panel`} role="region" aria-labelledby={`${e.id}-btn`} className="acc__panel">
                    <div>
                      <p>{e.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
