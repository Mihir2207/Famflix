// Shows the event thumbnail, or a generated gradient placeholder when none is set.

const palettes = [
  ['#e50914', '#3b0a45'],
  ['#f97316', '#7c2d12'],
  ['#0ea5e9', '#1e1b4b'],
  ['#10b981', '#064e3b'],
  ['#a855f7', '#1e1b4b'],
  ['#eab308', '#7c2d12'],
  ['#ec4899', '#4c0519'],
  ['#14b8a6', '#0c4a6e'],
]

const icons = {
  family: '🏡',
  festivals: '🪔',
  society: '🏘️',
  friends: '🥂',
  trips: '🧳',
  milestones: '🎂',
}

// Media paths in events.js start with '/media/…'; prefix the app's base URL so they
// still resolve when the site is served from a sub-path such as GitHub Pages.
export const asset = (path) => (path?.startsWith('/') ? import.meta.env.BASE_URL + path.slice(1) : path)

export default function Thumb({ event, className = '' }) {
  if (event.thumbnail) {
    return <img className={`thumb ${className}`} src={asset(event.thumbnail)} alt={event.title} loading="lazy" />
  }
  const [a, b] = palettes[event.id % palettes.length]
  return (
    <div
      className={`thumb thumb--placeholder ${className}`}
      style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}
    >
      <span className="thumb__icon">{icons[event.category] ?? '🎞️'}</span>
    </div>
  )
}
