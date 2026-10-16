import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import { groups, proposals } from '../data/proposals.js';

const n = groups.length;
const centers = groups.map((_, i) => ((i + 0.5) / n) * 100);

/** Abanico de conectores SVG (solo escritorio). `down` = de la raíz a los grupos; si no, de los grupos al destino. */
function Fan({ down }) {
  return (
    <svg className="fan" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      {groups.map((g, i) => {
        const x = centers[i];
        const d = down ? `M50 0 C50 22 ${x} 18 ${x} 40` : `M${x} 0 C${x} 22 50 18 50 40`;
        return <path key={g.id} d={d} fill="none" stroke="rgba(22,38,63,.28)" strokeWidth="2" vectorEffect="non-scaling-stroke" />;
      })}
    </svg>
  );
}

export default function WorkDiagram() {
  return (
    <section id="areas" className="section section--white" aria-labelledby="areas-title">
      <div className="container">
        <SectionHead
          index="07"
          eyebrow="Áreas de trabajo"
          title="Un plan, cinco áreas, un solo territorio"
          id="areas-title"
          accent="var(--red)"
          lede="Los ocho programas se agrupan en áreas que se conectan entre sí para llegar a Guamote."
        />

        <div className="diagram">
          <Reveal className="diagram__root">
            <span className="dnode dnode--root">
              <Icon name="Flag" size={22} /> Plan de trabajo
            </span>
          </Reveal>
          <Fan down />

          <ul className="diagram__groups">
            {groups.map((g, i) => (
              <Reveal as="li" key={g.id} delay={i * 90} className="dgroup" style={{ '--c': g.color }}>
                <span className="dnode">
                  <span className="dnode__ico"><Icon name={g.icon} size={22} /></span>
                  {g.title}
                </span>
                <ul className="dgroup__chips">
                  {proposals.filter((p) => p.group === g.id).map((p) => (
                    <li key={p.id}>
                      <b>{p.id}</b> {p.short}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>

          <Fan />
          <Reveal className="diagram__target">
            <span className="dnode dnode--target">
              <Icon name="MapPin" size={22} /> GUAMOTE
            </span>
          </Reveal>
        </div>

        {/* Mapa visual de propuestas */}
        <Reveal as="h3" className="subhead">Mapa de propuestas</Reveal>
        <div className="pmap">
          {groups.map((g, i) => (
            <Reveal key={g.id} delay={i * 80} className="pmap__block" style={{ '--c': g.color }}>
              <h4>
                <span className="pmap__ico"><Icon name={g.icon} size={20} /></span>
                {g.title}
              </h4>
              <ul>
                {proposals.filter((p) => p.group === g.id).map((p) => (
                  <li key={p.id}>
                    <Icon name={p.icon} size={16} /> {p.title}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
