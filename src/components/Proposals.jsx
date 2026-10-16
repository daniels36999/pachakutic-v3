import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import { groups, proposals, planMeta } from '../data/proposals.js';

const groupColor = Object.fromEntries(groups.map((g) => [g.id, g.color]));

/** Tarjeta de propuesta (también la usa el plan de concejales). */
export function PlanCard({ item, color, delay = 0 }) {
  return (
    <Reveal as="li" className="plan-card" delay={delay} style={{ '--c': color }}>
      <div className="plan-card__top">
        <span className="plan-card__num">{item.id}</span>
        <span className="plan-card__icon"><Icon name={item.icon} size={24} /></span>
      </div>
      <h3>{item.title}</h3>
      {item.objective && (
        <p className="plan-card__obj">
          <strong>Objetivo:</strong> {item.objective}
        </p>
      )}
      <span className="plan-card__rule" aria-hidden="true" />
      <details className="plan-card__more">
        <summary>
          <span>{item.actions.length > 1 ? `${item.actions.length} acciones` : 'Ver acción'}</span>
          <Icon name="ChevronDown" size={18} />
        </summary>
        <ul>
          {item.actions.map((a) => <li key={a}>{a}</li>)}
        </ul>
      </details>
    </Reveal>
  );
}

export default function Proposals() {
  return (
    <section id="propuestas" className="section section--light" aria-labelledby="propuestas-title">
      <div className="container">
        <SectionHead
          index="05"
          eyebrow="Propuestas"
          title={planMeta.title}
          id="propuestas-title"
          accent="var(--ice)"
          lede={planMeta.note}
        />
        <ul className="plan-grid">
          {proposals.map((p, i) => (
            <PlanCard key={p.id} item={p} color={groupColor[p.group]} delay={(i % 4) * 90} />
          ))}
        </ul>
      </div>
    </section>
  );
}
