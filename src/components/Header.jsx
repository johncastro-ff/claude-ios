import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarCheck, Menu, X } from 'lucide-react'
import './Header.css'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo-dandelion">Dandelion</span>
          <span className="logo-promotions">Promotions</span>
        </Link>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta">
            <CalendarCheck size={18} />
            Book Strategy Call
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}

export default Header
