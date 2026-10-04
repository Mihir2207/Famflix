import { useRef } from 'react'
import Thumb from './Thumb.jsx'

export default function Row({ title, items, onSelect, large = false, wrap = false }) {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    const el = trackRef.current
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' })
  }

  if (!items.length) return null

  return (
    <section className="row">
      {title && <h2 className="row__title">{title}</h2>}
      <div className="row__wrapper">
        {!wrap && (
          <button className="row__arrow row__arrow--left" onClick={() => scroll(-1)} aria-label="Scroll left">‹</button>
        )}
        <div ref={trackRef} className={`row__track ${wrap ? 'row__track--wrap' : ''}`}>
          {items.map((e) => (
            <button
              key={e.id}
              className={`card ${large ? 'card--large' : ''}`}
              onClick={() => onSelect(e)}
            >
              <Thumb event={e} />
              <div className="card__info">
                <span className="card__title">{e.title}</span>
                <span className="card__meta">{e.year} · {e.location}</span>
              </div>
            </button>
          ))}
        </div>
        {!wrap && (
          <button className="row__arrow row__arrow--right" onClick={() => scroll(1)} aria-label="Scroll right">›</button>
        )}
      </div>
    </section>
  )
}
