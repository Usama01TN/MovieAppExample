import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Everything inside the router can use <Link>, useParams, useNavigate… */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
