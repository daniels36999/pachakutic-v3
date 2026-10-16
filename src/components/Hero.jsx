import Photo from './Photo.jsx';
import Icon from './Icon.jsx';
import { CountUp } from './Reveal.jsx';
import { candidate } from '../data/candidate.js';

const accents = ['var(--red)', 'var(--orange)', 'var(--green)', 'var(--blue)'];

export default function Hero() {
  return (
    <section id="inicio" className="hero dark" aria-labelledby="hero-title">
      {/* Elementos geométricos decorativos */}
      <svg className="hero__geo" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="1">
          <path d="M0 520 L360 300 L700 430 L1200 120" />
          <path d="M0 620 L420 420 L780 560 L1200 300" />
          <circle cx="980" cy="260" r="210" />
          <circle cx="980" cy="260" r="140" />
        </g>
        <g>
          <circle cx="360" cy="300" r="6" fill="#EE8D09" />
          <circle cx="700" cy="430" r="6" fill="#3FA5DD" />
          <circle cx="420" cy="420" r="5" fill="#36A036" />
          <circle cx="780" cy="560" r="5" fill="#D81119" />
          <circle cx="1100" cy="190" r="5" fill="#C0E2ED" />
        </g>
      </svg>

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <Icon name="MapPin" size={18} /> {candidate.role} · {candidate.territory}
          </p>
          <h1 id="hero-title">
            {candidate.shortName}
            <span className="hero__underline" aria-hidden="true" />
          </h1>
          <p className="hero__intro">{candidate.intro}</p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="#propuestas">
              Conoce el plan <Icon name="ArrowRight" size={18} />
            </a>
            <a className="btn btn-ghost" href="#trayectoria">
              Su trayectoria
            </a>
          </div>
        </div>

        <figure className="hero__photo">
          <div className="hero__frame">
            <Photo src={candidate.photo} alt={candidate.photoAlt} eager position="50% 12%" />
          </div>
          <span className="hero__shape hero__shape--a" aria-hidden="true" />
          <span className="hero__shape hero__shape--b" aria-hidden="true" />
          <span className="hero__shape hero__shape--c" aria-hidden="true" />
          <figcaption className="hero__badge">
            <span>{candidate.slogan.replace(/ \d+$/, '')}</span>
            <strong>{candidate.listNumber}</strong>
          </figcaption>
        </figure>
      </div>

      <div className="container">
        <ul className="stats" aria-label="Datos clave">
          {candidate.indicators.map((it, i) => (
            <li key={it.label} style={{ '--c': accents[i % accents.length] }}>
              <strong><CountUp to={it.value} /></strong>
              <span>{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
