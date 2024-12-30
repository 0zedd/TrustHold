import { motion } from 'framer-motion'
import '../styles/home.css'
import ProjectOversightImage from '../assets/Project Oversight and Monitoring.jpg';
import BusinessMonitoringImage from '../assets/Business Monitoring and Reporting.png';
import AssetProcurementImage from '../assets/Asset Procurement and Holding.png';
import CovertOperationsImage from '../assets/Covert Operations.webp';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section 
        className="hero"
        id="home"
      >
        <h1>TrustHold</h1>
        <p>Protecting What Matters Most To You</p>
        <h4>At TrustHold <br /> We understand the unique challenges that Ghanaians living abroad face when managing projects, assets, and personal matters in Ghana. Here’s why our clients trust us to handle their most important needs</h4>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Why Choose TrustHold</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Confidentiality You Can Trust</h3>
            <p>Your privacy is our priority. Every project and communication is handled with the utmost discretion, ensuring that your personal and financial information is protected at all times.</p>
          </div>
          <div className="feature-card">
            <h3>Peace of Mind</h3>
            <p>We take the stress out of managing your affairs from afar. Whether it’s a building project or a sensitive personal matter, we ensure everything is managed seamlessly, so you can focus on what truly matters.</p>
          </div>
          <div className="feature-card">
            <h3>Unmatched Trust</h3>
            <p>Integrity is at the core of everything we do. From transparent reporting to honest communication, we make sure you can always rely on us to deliver on our promises.</p>
          </div>
          <div className="feature-card">
            <h3>Professional Reliability</h3>
            <p>You can count on us for timely, consistent service. We provide clear, real-time updates, so you’re always in the loop and confident that your interests are being handled expertly.</p>
          </div>
          <div className="feature-card">
            <h3>Accountability Every Step of the Way</h3>
            <p>At TrustHold, we take full responsibility for every project, investment, and asset. Our team ensures that we meet your expectations and address any concerns with professionalism and efficiency.</p>
          </div>
          <div className="feature-card">
            <h3>Secure Asset Management</h3>
            <p>From purchasing properties to holding assets, we offer secure, well-documented management. Your valuables are in safe hands, giving you peace of mind from afar.</p>
          </div>
          <div className="feature-card">
            <h3>Building Lasting Relationships</h3>
            <p>TrustHold isn’t just a service; it’s a partnership. We’re committed to building long-term relationships with our clients, founded on transparency, reliability, and mutual respect.</p>
          </div>
          <div className="feature-card">
            <h3>Tailored Solutions for Your Needs</h3>
            <p>We understand that each client has unique requirements. That’s why we offer customized services, ensuring that we meet your specific needs and deliver results that align with your goals.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id='services'>
        <h2>Our Services</h2>
        <div className="services-grid">
          {/* Service 1 */}
          <div className="service-card">
            <img src={ProjectOversightImage} alt="Project Oversight and Monitoring" className="service-image" />
          </div>
          <div className="service-card">
            <div className="service-details">
              <h3>Project Oversight and Monitoring</h3>
              <br />
              <h4>Services</h4>
              <p>👉Supervision of building projects, including construction, renovations, and other large-scale initiatives. <br /><br />
              👉Providing regular, detailed progress reports with photo and video evidence. <br />
                👉Covert assessments to ensure accurate on-ground reporting without bias.</p>
                <br /><br />
              <h4>Impact</h4>
              <p>👉Safeguards investments against fraudulent activities. <br />
              👉Offers peace of mind with professional asset management.</p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <div className="service-details">
              <h3>Business Monitoring and Reporting</h3>
              <br />
              <h4>Services</h4>
              <p>👉Overseeing the operations of businesses owned by diaspora members. <br />
              👉Covert audits to provide an unbiased assessment of business performance and employee conduct. <br />
                👉Recommendations for improving business efficiency.</p>
                <br /><br />
              <h4>Impact</h4>
              <p>👉Safeguards investments against fraudulent activities. <br />
              👉Offers peace of mind with professional asset management.</p>
            </div>
          </div>
          <div className="service-card">
            <img src={BusinessMonitoringImage} alt="Business Monitoring and Reporting" className="service-image" />
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <img src={AssetProcurementImage} alt="Asset Procurement and Holding" className="service-image" />
          </div>
          <div className="service-card">
            <div className="service-details">
              <h3>Asset Procurement and Holding</h3>
              <br />
              <h4>Services</h4>
              <p>👉Facilitating the purchase of valuable assets such as lands, houses, and vehicles. <br />
              👉Ensuring proper documentation to avoid fraud or legal disputes. <br /> 
              👉Acting as a custodian for assets, holding them securely on behalf of clients.</p>
                <br /><br />
              <h4>Impact</h4>
              <p>👉Safeguards investments against fraudulent activities. <br /><br />
              👉Offers peace of mind with professional asset management.</p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <div className="service-details">
              <h3>Covert Operations</h3>
              <br />
              <h4>Project and Business Investigations</h4>
              <p>👉Conducting covert operations to verify claims or ensure unbiased reporting on sensitive issues.</p>
              <br />
              <h4>Spousal Monitoring</h4>
              <p>👉Discreetly investigating the fidelity of spouses or partners in Ghana to ensure trust.</p>
              <br /><br />
              <h4>Impact</h4>
              <p>👉Provides factual and objective information for decision-making. <br />
              👉Reduces personal and professional conflicts rooted in misinformation.</p>
            </div>
          </div>
          <div className="service-card">
            <img src={CovertOperationsImage} alt="Covert Operations" className="service-image" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview" id="about">
        <h2>About Us</h2>
        <p>TrustHold is committed to providing the most secure and reliable solutions for your needs.</p>
      </section>
    </div>
  )
} 