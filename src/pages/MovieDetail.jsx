import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Masthead from '../components/Masthead.jsx'
import Rating from '../components/Rating.jsx'
import { toEmbedUrl } from '../utils/trailer.js'

function MovieDetail({ movies }) {
  // :id from the route "/movie/:id" — always a string.
  const { id } = useParams()
  const movie = movies.find((item) => String(item.id) === id)
  const [imageFailed, setImageFailed] = useState(false)

  // Land at the top of the page, not halfway down the grid we came from.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!movie) {
    return (
      <>
        <Masthead />
        <main className="main">
          <div className="empty">
            <p className="empty__title">That title is not on the shelf.</p>
            <p className="empty__hint">It may have been removed from the list.</p>
            <p>
              <Link to="/" className="btn btn--primary">
                Back to the shelf
              </Link>
            </p>
          </div>
        </main>
      </>
    )
  }

  const { title, description, posterURL, rating, trailerLink } = movie
  const embedUrl = toEmbedUrl(trailerLink)

  return (
    <>
      <Masthead tagline="Trailer and description" />

      <main className="main detail-page">
        <Link to="/" className="backlink">
          <span aria-hidden="true">←</span> Back to all titles
        </Link>

        <article className="detail">
          <div className="detail__poster">
            {posterURL && !imageFailed ? (
              <img
                src={posterURL}
                alt={`Poster for ${title}`}
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="card__poster-fallback" aria-hidden="true">
                <span>{title.slice(0, 2).toUpperCase()}</span>
              </div>
            )}
          </div>

          <div className="detail__body">
            <h2 className="detail__title">{title}</h2>
            <div className="detail__meta">
              <Rating value={rating} size="md" />
              <span className="detail__score">{Number(rating).toFixed(1)} / 5</span>
            </div>
            <p className="detail__description">{description}</p>
          </div>
        </article>

        <section className="trailer" aria-label={`${title} trailer`}>
          <h3 className="trailer__heading">Trailer</h3>
          {embedUrl ? (
            <div className="trailer__frame">
              <iframe
                src={embedUrl}
                title={`${title} trailer`}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="empty">
              <p className="empty__title">No trailer for this one yet.</p>
              <p className="empty__hint">
                Add an embed link to the movie and it will play right here.
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  )
}

export default MovieDetail
