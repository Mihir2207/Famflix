import { useEffect } from 'react'
import Thumb, { asset } from './Thumb.jsx'

export default function EventModal({ event, related, onSelect, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">✕</button>

        <div className="modal__media">
          {event.video ? (
            <video key={event.id} src={asset(event.video)} poster={asset(event.thumbnail) ?? undefined} controls autoPlay />
          ) : (
            <>
              <Thumb event={event} />
              <div className="modal__placeholder-note">Video coming soon — add it in src/data/events.js</div>
            </>
          )}
        </div>

        <div className="modal__body">
          <h2>{event.title}</h2>
          <p className="modal__meta">
            <span className="badge">{event.year}</span> {event.location}
          </p>
          <p>{event.description}</p>

          {related.length > 0 && (
            <>
              <h3>More like this</h3>
              <div className="modal__related">
                {related.slice(0, 6).map((r) => (
                  <button key={r.id} className="card" onClick={() => onSelect(r)}>
                    <Thumb event={r} />
                    <div className="card__info">
                      <span className="card__title">{r.title}</span>
                      <span className="card__meta">{r.year}</span>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
