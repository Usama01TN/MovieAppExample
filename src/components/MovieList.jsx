import MovieCard from './MovieCard.jsx'

function MovieList({ movies, onRemove }) {
  if (movies.length === 0) {
    return (
      <div className="empty">
        <p className="empty__title">Nothing matches that.</p>
        <p className="empty__hint">Try a shorter title or a lower minimum rating.</p>
      </div>
    )
  }

  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onRemove={onRemove} />
      ))}
    </div>
  )
}

export default MovieList
