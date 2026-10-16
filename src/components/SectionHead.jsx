import Reveal from './Reveal.jsx';

export default function SectionHead({ index, eyebrow, title, lede, accent = 'var(--orange)', id }) {
  return (
    <Reveal as="header" className="section-head">
      <p className="eyebrow">
        <span className="eyebrow__dot" style={{ background: accent }} aria-hidden="true" />
        <span className="eyebrow__idx">{index}</span> {eyebrow}
      </p>
      <h2 id={id}>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </Reveal>
  );
}
