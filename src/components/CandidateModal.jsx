import { useEffect, useRef } from 'react';
import Icon from './Icon.jsx';
import Photo from './Photo.jsx';

/**
 * Modal accesible y sin backend.
 * Se cierra con el botón, con ESC o haciendo clic fuera. Atrapa el foco mientras está abierto.
 * person = { title, subtitle, photo, photoAlt, badge, sections: [{ icon, title, paragraphs, items, chips, placeholder }] }
 */
export default function CandidateModal({ person, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusables = dialogRef.current?.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previous?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="modal" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={dialogRef}>
        <button ref={closeRef} type="button" className="modal__close" onClick={onClose} aria-label="Cerrar perfil">
          <Icon name="X" size={22} />
        </button>

        <div className="modal__head">
          <div className="modal__photo">
            <Photo src={person.photo} alt={person.photoAlt} eager />
          </div>
          <div>
            {person.badge && <p className="modal__badge">{person.badge}</p>}
            <h3 id="modal-title">{person.title}</h3>
            <p className="modal__sub">{person.subtitle}</p>
          </div>
        </div>

        <div className="modal__body">
          {person.sections.map((s) => (
            <section key={s.title} className="modal__section">
              <h4>
                <Icon name={s.icon} size={18} /> {s.title}
              </h4>
              {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
              {s.items && (
                <ul className="modal__list">
                  {s.items.map((it) => (
                    <li key={it.label}>
                      <strong>{it.label}</strong>
                      {it.text && <span>{it.text}</span>}
                    </li>
                  ))}
                </ul>
              )}
              {s.chips && (
                <ul className="chips">
                  {s.chips.map((c) => <li key={c}>{c}</li>)}
                </ul>
              )}
              {s.placeholder && <p className="todo">{s.placeholder}</p>}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
