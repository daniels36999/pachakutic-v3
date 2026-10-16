import { useState } from 'react';
import Icon from './Icon.jsx';
import Photo from './Photo.jsx';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import CandidateModal from './CandidateModal.jsx';
import { PlanCard } from './Proposals.jsx';
import { councilGroups } from '../data/candidates.js';
import { candidate } from '../data/candidate.js';
import { councilPlan, councilPlanMeta } from '../data/proposals.js';

const planColors = ['var(--red)', 'var(--orange)', 'var(--green)', 'var(--blue)', 'var(--ice)'];
const TODO_FORMATION = 'Agregar formación';
const TODO_EXPERIENCE = 'Agregar experiencia';

function buildPerson(group, member) {
  const p = member.principal;
  const s = member.substitute;
  return {
    title: p.name,
    subtitle: `Concejal ${group.kind.toLowerCase()} · Principal`,
    badge: `${candidate.party} · ${candidate.slogan}`,
    photo: p.photo,
    photoAlt: `Fotografía de ${p.name}`,
    sections: [
      {
        icon: 'GraduationCap',
        title: 'Formación',
        paragraphs: p.title ? [`Título indicado en el documento: ${p.title}`] : undefined,
        placeholder: p.formation || TODO_FORMATION,
      },
      { icon: 'Briefcase', title: 'Experiencia', placeholder: p.experience || TODO_EXPERIENCE },
      {
        icon: 'Users',
        title: 'Suplente',
        items: [{ label: s.name, text: `Suplente · Concejal ${group.kind.toLowerCase()}` }],
        placeholder: 'Agregar fotografía, formación y experiencia del suplente',
      },
    ],
  };
}

function Organigram() {
  return (
    <div className="org" role="group" aria-label="Organigrama del equipo">
      <div className="org__root">
        <span className="org__node org__node--root">
          <Icon name="Landmark" size={20} /> Alcaldía · {candidate.shortName}
        </span>
      </div>
      <div className="org__branches">
        {councilGroups.map((g) => (
          <div key={g.id} className="org__branch" style={{ '--c': g.color }}>
            <span className="org__node org__node--group">
              <Icon name={g.icon} size={18} /> {g.label}
            </span>
            <ul className="org__leaves">
              {g.members.map((m, i) => (
                <li key={m.id}>
                  <span className="org__node org__node--leaf">
                    <b>{g.kind[0]}{i + 1}</b> {m.principal.short}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function CandidateCard({ group, member, delay, onOpen }) {
  const { principal: p, substitute: s } = member;
  return (
    <Reveal as="article" className="cand" delay={delay} style={{ '--c': group.color }}>
      <div className="cand__photo">
        <Photo src={p.photo} alt={`Fotografía de ${p.name}`} position="50% 12%" />
        <span className="cand__seat">Concejal {group.kind.toLowerCase()}</span>
      </div>
      <div className="cand__body">
        <p className="cand__role"><Icon name="Vote" size={16} /> Principal</p>
        <h4>{p.name}</h4>
        <ul className="cand__meta">
          <li>
            <Icon name="GraduationCap" size={16} />
            {p.formation ? p.formation : <span className="todo">{TODO_FORMATION}</span>}
          </li>
          <li>
            <Icon name="Briefcase" size={16} />
            {p.experience ? p.experience : <span className="todo">{TODO_EXPERIENCE}</span>}
          </li>
        </ul>
        <div className="cand__sub">
          <Photo src={s.photo} alt={`Fotografía de ${s.name}`} className="cand__sub-photo" />
          <div>
            <span>Suplente</span>
            <strong>{s.name}</strong>
          </div>
        </div>
        <button type="button" className="btn btn-dark btn-sm" onClick={() => onOpen(buildPerson(group, member))} aria-haspopup="dialog">
          Ver perfil <Icon name="ArrowRight" size={16} />
        </button>
      </div>
    </Reveal>
  );
}

export default function Candidates() {
  const [person, setPerson] = useState(null);

  return (
    <section id="equipo" className="section section--light" aria-labelledby="equipo-title">
      <div className="container">
        <SectionHead
          index="08"
          eyebrow="Equipo"
          title="Equipo de concejales"
          id="equipo-title"
          accent="var(--green)"
          lede="Cinco binomios de concejales —principal y suplente— que acompañan la candidatura, urbanos y rurales."
        />

        <Organigram />

        {councilGroups.map((g) => (
          <div key={g.id} className="cgroup" style={{ '--c': g.color }}>
            <Reveal as="h3" className="cgroup__title">
              <span className="cgroup__ico"><Icon name={g.icon} size={20} /></span>
              {g.label}
              <span className="cgroup__count">{g.members.length} binomios</span>
            </Reveal>
            <div className="cards">
              {g.members.map((m, i) => (
                <CandidateCard key={m.id} group={g} member={m} delay={i * 100} onOpen={setPerson} />
              ))}
            </div>
          </div>
        ))}

        <div className="cplan">
          <Reveal as="h3" className="subhead">{councilPlanMeta.title}</Reveal>
          <Reveal as="p" className="lede lede--left">{councilPlanMeta.note}</Reveal>
          <ul className="plan-grid plan-grid--council">
            {councilPlan.map((p, i) => (
              <PlanCard key={p.id} item={p} color={planColors[i % planColors.length]} delay={(i % 3) * 90} />
            ))}
          </ul>
        </div>
      </div>

      {person && <CandidateModal person={person} onClose={() => setPerson(null)} />}
    </section>
  );
}
