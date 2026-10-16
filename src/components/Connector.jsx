/** Línea + nodo que une visualmente una sección con la siguiente. */
export default function Connector({ color = 'var(--orange)', next = 'var(--blue)' }) {
  return (
    <div className="connector" aria-hidden="true" style={{ '--c': color, '--c2': next }}>
      <span className="connector__line" />
      <span className="connector__node" />
    </div>
  );
}
