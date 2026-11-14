import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating.jsx'

function MovieCard({ movie, onRemove }) {
  const [imageFailed, setImageFailed] = useState(false)
  const { title, description, posterURL, rating } = movie

  return (
    <article className="card">
      {/* The whole card is a link to /movie/:id — the remove button is a
          sibling, so clicking it never triggers the navigation. */}
      <Link to={`/movie/${movie.id}`} className="card__link">
        <div className="card__poster">
          {posterURL && !imageFailed ? (
            <img
              src={posterURL}
              alt={`Poster for ${title}`}
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="card__poster-fallback" aria-hidden="true">
              <span>{title.slice(0, 2).toUpperCase()}</span>
            </div>
          )}

          <span className="card__badge">
            {Number(rating).toFixed(1)}
            <span className="card__badge-star">★</span>
          </span>
        </div>

        <div className="card__body">
          <h3 className="card__title">{title}</h3>
          <Rating value={rating} size="sm" />
          <p className="card__description">{description}</p>
          <span className="card__cta">Watch trailer →</span>
        </div>
      </Link>

      {onRemove && (
        <button
          type="button"
          className="card__remove"
          onClick={() => onRemove(movie.id)}
          aria-label={`Remove ${title}`}
          title="Remove"
        >
          ×
        </button>
      )}
    </article>
  )
}

export default MovieCard
