import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Nav() {
  const { pathname } = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="nav-wordmark">
          <img src="/sanctuary-react/logo.svg" alt="Sanctuary" />
        </Link>
        
        {/* Mobile CTA - always visible */}
        <Link to="/join" className={`nav-cta nav-cta-mobile ${pathname === '/join' ? 'active' : ''}`}>
          Join Sanctuary
        </Link>

        {/* Hamburger button */}
        <button 
          className="hamburger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <li><a href="https://deepworkstudio.substack.com/" onClick={() => setIsMenuOpen(false)}>Publication</a></li>
          <li><Link to="/container" onClick={() => setIsMenuOpen(false)}>Container</Link></li>
          <li className="desktop-only">
            <Link to="/join" className={`nav-cta ${pathname === '/join' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              Join Sanctuary
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
