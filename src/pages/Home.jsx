import { motion } from 'framer-motion'
import '../styles/home.css'

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Welcome to TrustHold</h1>
        <p>Your trusted partner in secure solutions</p>
        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose TrustHold</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Secure</h3>
            <p>State-of-the-art security protocols</p>
          </div>
          <div className="feature-card">
            <h3>Reliable</h3>
            <p>99.9% uptime guarantee</p>
          </div>
          <div className="feature-card">
            <h3>Fast</h3>
            <p>Lightning-fast performance</p>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <h2>About Us</h2>
        <p>TrustHold is committed to providing the most secure and reliable solutions for your needs.</p>
      </section>
    </div>
  )
} 