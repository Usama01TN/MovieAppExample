import { useState } from 'react'

/**
 * Star rating. Read-only by default; pass `editable` + `onChange`
 * to use it as a form control (keyboard accessible).
 */
function Rating({ value = 0, max = 5, editable = false, onChange, size = 'md', label }) {
  const [hovered, setHovered] = useState(0)
  const shown = editable && hovered ? hovered : value

  const stars = Array.from({ length: max }, (_, i) => i + 1)

  if (!editable) {
    return (
      <div className={`rating rating--${size}`} aria-label={`Rated ${value} out of ${max}`}>
        {stars.map((star) => (
          <span key={star} className={star <= shown ? 'star star--on' : 'star'} aria-hidden="true">
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <div
      className={`rating rating--${size} rating--editable`}
      role="radiogroup"
      aria-label={label || 'Rating'}
      onMouseLeave={() => setHovered(0)}
    >
      {stars.map((star) => (
        <button
          key={star}
          type="button"
          role="radio"
          aria-checked={value === star}
          aria-label={`${star} star${star > 1 ? 's' : ''}`}
          className={star <= shown ? 'star star--on' : 'star'}
          onMouseEnter={() => setHovered(star)}
          onClick={() => onChange(star === value ? 0 : star)}
        >
          ★
        </button>
      ))}
    </div>
  )
}

export default Rating
