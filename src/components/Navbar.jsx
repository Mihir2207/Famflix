import { useEffect, useState } from 'react'

export default function Navbar({ categories, activeCategory, onCategoryChange, query, onQueryChange }) {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--solid' : ''}`}>
      <div className="navbar__left">
        <button className="logo" onClick={() => onCategoryChange('all')}>FAMFLIX</button>
        <nav className="navbar__links">
          <button
            className={activeCategory === 'all' ? 'active' : ''}
            onClick={() => onCategoryChange('all')}
          >
            Home
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              className={activeCategory === c.id ? 'active' : ''}
              onClick={() => onCategoryChange(c.id)}
            >
              {c.title.split(' ')[0]}
            </button>
          ))}
        </nav>
      </div>

      <div className="navbar__right">
        <div className={`search ${searchOpen || query ? 'search--open' : ''}`}>
          <button className="icon-btn" aria-label="Search" onClick={() => setSearchOpen((s) => !s)}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search events, places, years…"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onBlur={() => !query && setSearchOpen(false)}
            autoFocus={searchOpen}
          />
        </div>
        <div className="avatar" title="Family">👪</div>
      </div>
    </header>
  )
}
