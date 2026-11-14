import { Link } from 'react-router-dom'

/**
 * Shared site header. The brand is a <Link> home, so every page has a
 * way back. Anything passed as children sits on the right.
 */
function Masthead({ tagline = 'A shelf for the films and shows worth recommending twice.', children }) {
  return (
    <header className="masthead">
      <div className="masthead__inner">
        <Link to="/" className="masthead__brand">
          <span className="masthead__mark" aria-hidden="true">
            ◼
          </span>
          <div>
            <h1 className="masthead__title">Cinephile</h1>
            <p className="masthead__tagline">{tagline}</p>
          </div>
        </Link>
        {children}
      </div>
    </header>
  )
}

export default Masthead
