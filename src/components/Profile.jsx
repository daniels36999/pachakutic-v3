import { useState } from 'react';
import Photo from './Photo.jsx';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import CandidateModal from './CandidateModal.jsx';
import { candidate } from '../data/candidate.js';

const accents = ['var(--red)', 'var(--orange)', 'var(--green)', 'var(--ice)', 'var(--blue)'];

function buildPerson() {
  return {
    title: candidate.fullName,
    subtitle: `${candidate.role} · ${candidate.territory}`,
    badge: `${candidate.party} · ${candidate.slogan}`,
    photo: candidate.photo,
    photoAlt: candidate.photoAlt,
    sections: [
      { icon: 'User', title: 'Quién es', paragraphs: candidate.bio },
      {
        icon: 'GraduationCap',
        title: 'Formación',
        items: candidate.education.map((e) => ({ label: e.title, text: e.step })),
      },
      {
        icon: 'Briefcase',
        title: 'Experiencia',
        items: candidate.experience.map((e) => ({ label: `${e.period} · ${e.title}`, text: `${e.org}. ${e.description}` })),
      },
      { icon: 'Hammer', title: 'Su trayectoria integra', chips: candidate.strengths.experience },
      { icon: 'Compass', title: 'Capacidades fortalecidas', chips: candidate.strengths.skills },
    ],
  };
}

export default function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <section id="perfil" className="section section--light" aria-labelledby="perfil-title">
      <div className="container">
        <SectionHead index="01" eyebrow="Perfil" title="Quién es Juan Altamirano" id="perfil-title" accent="var(--red)" />

        <div className="profile">
          <Reveal className="profile__photo">
            <div className="profile__frame">
              <Photo src={candidate.photo} alt={candidate.photoAlt} position="50% 10%" />
            </div>
            <p className="profile__tag">
              <span>{candidate.party}</span> · {candidate.slogan}
            </p>
          </Reveal>

          <div className="profile__info">
            <ol className="chain">
              {candidate.chain.map((c, i) => (
                <Reveal as="li" key={c.label} delay={i * 90} style={{ '--c': accents[i] }}>
                  <span className="chain__node"><Icon name={c.icon} size={20} /></span>
                  <div>
                    <span className="chain__label">{c.label}</span>
                    <strong className="chain__value">{c.value}</strong>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal className="profile__cta">
              <button type="button" className="btn btn-dark" onClick={() => setOpen(true)} aria-haspopup="dialog">
                Ver perfil completo <Icon name="Plus" size={18} />
              </button>
            </Reveal>
          </div>
        </div>

        <Reveal className="strengths">
          <p className="strengths__lead">Su trayectoria integra experiencia en</p>
          <ul className="chips chips--strong">
            {candidate.strengths.experience.map((s) => <li key={s}>{s}</li>)}
          </ul>
          <p className="strengths__lead">fortaleciendo sus capacidades en</p>
          <ul className="chips">
            {candidate.strengths.skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </Reveal>
      </div>

      {open && <CandidateModal person={buildPerson()} onClose={() => setOpen(false)} />}
    </section>
  );
}
