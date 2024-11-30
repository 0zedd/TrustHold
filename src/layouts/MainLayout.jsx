import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/footer.css'

export default function MainLayout() {
  return (
    <div className="layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TrustHold</h3>
            <p>Your trusted partner in secure solutions</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@trusthold.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links">
            <a href="#" aria-label="Facebook">📱</a>
            <a href="#" aria-label="Twitter">💬</a>
            <a href="#" aria-label="LinkedIn">📫</a>
          </div>
          <p>© 2024 TrustHold. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 