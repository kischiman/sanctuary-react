import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <nav>
      <Link to="/" className="nav-wordmark">Sanctuary</Link>
      <ul className="nav-links">
        <li><a href="/#research">Publication</a></li>
        <li><a href="https://www.notion.so/deepworkstudio/SanctuaryOS-3084f7ca9987809485d5da8f68e203b2?source=copy_link" target="_blank" rel="noopener noreferrer">Container</a></li>
        <li>
          <Link to="/membership" className={pathname === '/membership' ? 'active' : ''}>
            Join Sanctuary
          </Link>
        </li>
      </ul>
    </nav>
  )
}
