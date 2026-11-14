import Rating from './Rating.jsx'

/**
 * Controlled filter bar: search by title + minimum star rating.
 * All state lives in App; this component only reports changes upward.
 */
function Filter({ title, onTitleChange, minRating, onMinRatingChange, onReset, resultCount, total }) {
  const isFiltering = title.trim() !== '' || minRating > 0

  return (
    <section className="filter" aria-label="Filter movies">
      <div className="filter__field filter__field--search">
        <label className="filter__label" htmlFor="filter-title">
          Search by title
        </label>
        <div className="filter__input-wrap">
          <span className="filter__icon" aria-hidden="true">
            ⌕
          </span>
          <input
            id="filter-title"
            type="search"
            className="input"
            placeholder="e.g. arrival"
            value={title}
            onChange={(event) => onTitleChange(event.target.value)}
          />
        </div>
      </div>

      <div className="filter__field">
        <label className="filter__label" id="filter-rating-label">
          Minimum rating
        </label>
        <div className="filter__rating">
          <Rating
            value={minRating}
            editable
            onChange={onMinRatingChange}
            label="Minimum rating"
            size="md"
          />
          <span className="filter__rating-text">
            {minRating > 0 ? `${minRating}+ stars` : 'Any'}
          </span>
        </div>
      </div>

      <div className="filter__meta">
        <span className="filter__count">
          {resultCount} of {total} {total === 1 ? 'title' : 'titles'}
        </span>
        <button
          type="button"
          className="btn btn--ghost btn--sm"
          onClick={onReset}
          disabled={!isFiltering}
        >
          Clear filters
        </button>
      </div>
    </section>
  )
}

export default Filter
