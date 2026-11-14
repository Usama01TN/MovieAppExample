import { useEffect, useMemo, useState } from 'react'
import Masthead from '../components/Masthead.jsx'
import Filter from '../components/Filter.jsx'
import MovieList from '../components/MovieList.jsx'
import AddMovieForm from '../components/AddMovieForm.jsx'

function Home({
  movies,
  titleQuery,
  onTitleChange,
  minRating,
  onMinRatingChange,
  onResetFilters,
  onAdd,
  onRemove,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false)

  // Close the dialog on Escape.
  useEffect(() => {
    if (!isFormOpen) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsFormOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isFormOpen])

  // Recomputed only when the list or the filters change.
  const visibleMovies = useMemo(() => {
    const query = titleQuery.trim().toLowerCase()
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(query) && Number(movie.rating) >= minRating
    )
  }, [movies, titleQuery, minRating])

  const handleAdd = (movie) => {
    onAdd(movie)
    setIsFormOpen(false)
  }

  return (
    <>
      <Masthead>
        <button type="button" className="btn btn--primary" onClick={() => setIsFormOpen(true)}>
          <span aria-hidden="true">+</span> Add a title
        </button>
      </Masthead>

      <main className="main">
        <Filter
          title={titleQuery}
          onTitleChange={onTitleChange}
          minRating={minRating}
          onMinRatingChange={onMinRatingChange}
          onReset={onResetFilters}
          resultCount={visibleMovies.length}
          total={movies.length}
        />

        <MovieList movies={visibleMovies} onRemove={onRemove} />
      </main>

      {isFormOpen && <AddMovieForm onAdd={handleAdd} onClose={() => setIsFormOpen(false)} />}
    </>
  )
}

export default Home
