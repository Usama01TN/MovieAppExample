import { Link } from 'react-router-dom'
import Masthead from '../components/Masthead.jsx'

function NotFound() {
  return (
    <>
      <Masthead />
      <main className="main">
        <div className="empty">
          <p className="empty__title">There is nothing at this address.</p>
          <p className="empty__hint">The page you asked for does not exist.</p>
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

export default NotFound
