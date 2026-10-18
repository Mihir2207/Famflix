import { useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Row from './components/Row.jsx'
import YearFilter from './components/YearFilter.jsx'
import EventModal from './components/EventModal.jsx'
import { categories, events } from './data/events.js'

// Years present in the data, newest first, and how many events each has.
const years = [...new Set(events.map((e) => e.year))].sort((a, b) => b - a)
const yearCounts = events.reduce((acc, e) => ({ ...acc, [e.year]: (acc[e.year] ?? 0) + 1 }), {})

export default function App() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeYear, setActiveYear] = useState('all')
  const [selected, setSelected] = useState(null)

  const featured = events.find((e) => e.featured) ?? events[0]

  // Everything below (rows, search, recent) works on the year-filtered list.
  const yearEvents = useMemo(
    () => (activeYear === 'all' ? events : events.filter((e) => e.year === activeYear)),
    [activeYear]
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return yearEvents
    return yearEvents.filter((e) =>
      [e.title, e.location, e.description, String(e.year)].some((f) => f?.toLowerCase().includes(q))
    )
  }, [query, yearEvents])

  const recent = [...yearEvents].sort((a, b) => b.year - a.year).slice(0, 10)
  const visibleCategories =
    activeCategory === 'all' ? categories : categories.filter((c) => c.id === activeCategory)
  const showHero = activeCategory === 'all' && activeYear === 'all'

  const yearFilter = (
    <YearFilter years={years} counts={yearCounts} activeYear={activeYear} onYearChange={setActiveYear} />
  )

  return (
    <>
      <Navbar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={(id) => { setActiveCategory(id); setQuery('') }}
        query={query}
        onQueryChange={setQuery}
      />

      {query ? (
        <main className="search-results">
          <h2>
            Results for “{query}”{activeYear !== 'all' && ` in ${activeYear}`}
          </h2>
          {yearFilter}
          {filtered.length ? (
            <Row title="" items={filtered} onSelect={setSelected} wrap />
          ) : (
            <p className="empty">No memories match that search.</p>
          )}
        </main>
      ) : (
        <main>
          {showHero && <Hero event={featured} onPlay={setSelected} />}
          <div className={showHero ? 'rows' : 'rows rows--top'}>
            {yearFilter}
            {activeYear !== 'all' && (
              <h2 className="year-heading">
                {yearEvents.length} {yearEvents.length === 1 ? 'memory' : 'memories'} from {activeYear}
              </h2>
            )}
            {activeCategory === 'all' && (
              <Row
                title={activeYear === 'all' ? 'Recently Added' : `Highlights of ${activeYear}`}
                items={recent}
                onSelect={setSelected}
                large
              />
            )}
            {visibleCategories.map((c) => (
              <Row
                key={c.id}
                title={c.title}
                items={yearEvents.filter((e) => e.category === c.id)}
                onSelect={setSelected}
                wrap={activeCategory !== 'all'}
              />
            ))}
            {!visibleCategories.some((c) => yearEvents.some((e) => e.category === c.id)) && (
              <p className="empty">No memories here from {activeYear} yet.</p>
            )}
          </div>
        </main>
      )}

      <footer className="footer">
        <p>FamFlix · Our family archive · Made with love</p>
        <p><a className="footer__link" href={`${import.meta.env.BASE_URL}media/CREDITS.html`}>Photo &amp; video credits</a></p>
      </footer>

      {selected && (
        <EventModal
          event={selected}
          related={events.filter((e) => e.category === selected.category && e.id !== selected.id)}
          onSelect={setSelected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  )
}
