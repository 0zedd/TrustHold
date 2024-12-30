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
              <li><a href="#services">Services</a></li>
            </ul>
          </div>
          
          <div className="footer-section" id='contact'>
            <h3>Contact Us</h3>
            <p>Email: info@trusthold.com</p>
            <p>
              Phone: 
              <a href="tel:+233591762871" className="phone-link" aria-label="Call Phone">📞 (+233) 59 176 2871</a>
              <br />
              <a href="https://wa.me/+233591762871" className="whatsapp-link" aria-label="Chat on WhatsApp"> 📱 Chat on WhatsApp</a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links">
            <a href="#contact" aria-label="Facebook">📱</a>
            <a href="#contact" aria-label="Twitter">💬</a>
            <a href="#contact" aria-label="LinkedIn">📫</a>
          </div>
          <p>© 2024 TrustHold. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 