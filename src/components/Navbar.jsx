import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">TrustHold</Link>
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