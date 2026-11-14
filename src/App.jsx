import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MovieDetail from './pages/MovieDetail.jsx'
import NotFound from './pages/NotFound.jsx'
import initialMovies from './data/movies.js'

/**
 * App owns the movie list and the filters, so both survive navigating
 * to a detail page and back. The pages below are just views of it.
 */
function App() {
  const [movies, setMovies] = useState(initialMovies)
  const [titleQuery, setTitleQuery] = useState('')
  const [minRating, setMinRating] = useState(0)

  const addMovie = (movie) => {
    setMovies((previous) => [{ ...movie, id: Date.now() }, ...previous])
    setTitleQuery('')
    setMinRating(0)
  }

  const removeMovie = (id) => {
    setMovies((previous) => previous.filter((movie) => movie.id !== id))
  }

  const resetFilters = () => {
    setTitleQuery('')
    setMinRating(0)
  }

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={movies}
              titleQuery={titleQuery}
              onTitleChange={setTitleQuery}
              minRating={minRating}
              onMinRatingChange={setMinRating}
              onResetFilters={resetFilters}
              onAdd={addMovie}
              onRemove={removeMovie}
            />
          }
        />
        <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="footer">
        <p>Built with React hooks and React Router — useState, useMemo, useParams.</p>
      </footer>
    </div>
  )
}

export default App
