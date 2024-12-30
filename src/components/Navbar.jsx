import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import shieldLogo from '../assets/shield-svg.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    console.log("Hamburger clicked"); // Debugging line
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  }

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="brand-link">
          <img src={shieldLogo} alt="TrustHold Logo" className="logo" />
          <span className="brand-name">TrustHold</span>
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={handleLinkClick}>Home</a>
        <a href="#features" onClick={handleLinkClick}>Features</a>
        <a href="#services" onClick={handleLinkClick}>Services</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </div>
    </nav>
  )
} 