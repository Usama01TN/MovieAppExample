import { useState } from 'react'
import Rating from './Rating.jsx'

const EMPTY = { title: '', description: '', posterURL: '', trailerLink: '', rating: 0 }

function AddMovieForm({ onAdd, onClose }) {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})

  const setField = (field) => (event) =>
    setForm((previous) => ({ ...previous, [field]: event.target.value }))

  const validate = () => {
    const next = {}
    if (!form.title.trim()) next.title = 'A title is required.'
    if (!form.description.trim()) next.description = 'Say a little about it.'
    if (form.rating < 1) next.rating = 'Pick at least one star.'
    return next
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    onAdd({
      title: form.title.trim(),
      description: form.description.trim(),
      posterURL: form.posterURL.trim(),
      trailerLink: form.trailerLink.trim(),
      rating: form.rating,
    })
    setForm(EMPTY)
    onClose()
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-movie-heading"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="modal__header">
          <h2 id="add-movie-heading" className="modal__title">
            Add a title
          </h2>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>

        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="form__field">
            <label className="form__label" htmlFor="new-title">
              Title
            </label>
            <input
              id="new-title"
              className="input"
              value={form.title}
              onChange={setField('title')}
              placeholder="Portrait of a Lady on Fire"
            />
            {errors.title && <p className="form__error">{errors.title}</p>}
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="new-description">
              Description
            </label>
            <textarea
              id="new-description"
              className="input input--textarea"
              rows={3}
              value={form.description}
              onChange={setField('description')}
              placeholder="Why it belongs on this shelf."
            />
            {errors.description && <p className="form__error">{errors.description}</p>}
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="new-poster">
              Poster URL <span className="form__optional">optional</span>
            </label>
            <input
              id="new-poster"
              className="input"
              value={form.posterURL}
              onChange={setField('posterURL')}
              placeholder="https://…"
            />
            <p className="form__hint">Left blank, the card shows a lettered placeholder.</p>
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="new-trailer">
              Trailer link <span className="form__optional">optional</span>
            </label>
            <input
              id="new-trailer"
              className="input"
              value={form.trailerLink}
              onChange={setField('trailerLink')}
              placeholder="https://www.youtube.com/watch?v=…"
            />
            <p className="form__hint">
              A watch link, a youtu.be link or an embed link — all work.
            </p>
          </div>

          <div className="form__field">
            <span className="form__label">Rating</span>
            <Rating
              value={form.rating}
              editable
              size="lg"
              label="Rating"
              onChange={(rating) => setForm((previous) => ({ ...previous, rating }))}
            />
            {errors.rating && <p className="form__error">{errors.rating}</p>}
          </div>

          <div className="form__actions">
            <button type="button" className="btn btn--ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn--primary">
              Add to list
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddMovieForm
