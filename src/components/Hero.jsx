import Thumb from './Thumb.jsx'

export default function Hero({ event, onPlay }) {
  return (
    <section className="hero">
      <Thumb event={event} className="hero__bg" />
      <div className="hero__shade" />
      <div className="hero__content">
        <p className="hero__tag">★ Featured Memory</p>
        <h1 className="hero__title">{event.title}</h1>
        <p className="hero__meta">
          {event.year} · {event.location}
        </p>
        <p className="hero__desc">{event.description}</p>
        <div className="hero__actions">
          <button className="btn btn--primary" onClick={() => onPlay(event)}>▶ Play</button>
          <button className="btn btn--secondary" onClick={() => onPlay(event)}>ⓘ More Info</button>
        </div>
      </div>
    </section>
  )
}
