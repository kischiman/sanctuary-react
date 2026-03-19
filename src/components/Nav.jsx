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
          <li><a href="https://www.notion.so/deepworkstudio/SanctuaryOS-3084f7ca9987809485d5da8f68e203b2?source=copy_link" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Container</a></li>
          <li>
            <Link to="/membership" className={`nav-cta ${pathname === '/membership' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              Join Sanctuary
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
