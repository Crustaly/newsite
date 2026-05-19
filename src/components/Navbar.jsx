import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/work', label: 'Work' },
  { path: '/press', label: 'Press' },
  { path: '/speaking', label: 'Speaking' },
  { path: '/about', label: 'About' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-nav">
      <Link to="/" className="brand-mark" onClick={() => setIsOpen(false)}>
        Crystal Yang
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button
        className="menu-button"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
