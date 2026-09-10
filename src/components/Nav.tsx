import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink to="/" className="site-title" end>
          ouroboros<span className="site-title-dot">.</span>
        </NavLink>
        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/" end>
            home
          </NavLink>
          <NavLink to="/posts">posts</NavLink>
          <NavLink to="/about">about</NavLink>
        </nav>
      </div>
    </header>
  )
}
