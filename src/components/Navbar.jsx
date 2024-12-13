import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import shieldLogo from '../assets/shield-svg.svg'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="brand-link">
          <img src={shieldLogo} alt="TrustHold Logo" className="logo" />
          <span className="brand-name">TrustHold</span>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
} 