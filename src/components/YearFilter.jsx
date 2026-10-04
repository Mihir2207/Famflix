// A row of chips for picking a year. `years` must be sorted newest first.

export default function YearFilter({ years, counts, activeYear, onYearChange }) {
  return (
    <div className="year-filter" role="group" aria-label="Filter by year">
      <span className="year-filter__label">Browse by year</span>
      <button
        className={`chip ${activeYear === 'all' ? 'chip--active' : ''}`}
        aria-pressed={activeYear === 'all'}
        onClick={() => onYearChange('all')}
      >
        All years
      </button>
      {years.map((y) => (
        <button
          key={y}
          className={`chip ${activeYear === y ? 'chip--active' : ''}`}
          aria-pressed={activeYear === y}
          onClick={() => onYearChange(y)}
        >
          {y} <span className="chip__count">{counts[y]}</span>
        </button>
      ))}
    </div>
  )
}
