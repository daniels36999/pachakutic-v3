import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import { groups, proposals } from '../data/proposals.js';

const groupColor = Object.fromEntries(groups.map((g) => [g.id, g.color]));

export default function Roadmap() {
  return (
    <section id="roadmap" className="section section--navy dark" aria-labelledby="roadmap-title">
      <div className="container">
        <SectionHead
          index="06"
          eyebrow="Roadmap"
          title="El recorrido del plan, paso a paso"
          id="roadmap-title"
          accent="var(--orange)"
          lede="Ocho programas que avanzan desde lo esencial hasta la participación de toda la comunidad."
        />
        <ol className="roadmap">
          {proposals.map((p, i) => {
            const next = proposals[i + 1];
            return (
              <Reveal
                as="li"
                key={p.id}
                delay={60}
                className="rm-step"
                style={{ '--c': groupColor[p.group], '--c2': next ? groupColor[next.group] : groupColor[p.group] }}
              >
                <span className="rm-step__node">
                  <Icon name={p.icon} size={22} />
                  <b>{String(i + 1).padStart(2, '0')}</b>
                </span>
                <div className="rm-step__card">
                  <p className="rm-step__tag">{p.short}</p>
                  <h3>{p.title}</h3>
                  <p className="rm-step__obj">{p.objective}</p>
                  <p className="rm-step__small">{p.actions[0]}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
