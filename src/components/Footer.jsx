import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

// Import the Wings logo - adjust path if needed
const WingsLogo = '/src/assets/Wings.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  // Function to handle navigation with scroll to top
  const handleLegalNavigation = (path) => {
    navigate(path);
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Optional: adds smooth scrolling animation
    });
  };

  return (
    <footer className="overallfooter">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-wrapper">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-company">
              <div className="logo-container">
                {/* Wings Logo */}
                <img 
                  src={WingsLogo} 
                  alt="Wings Senior Living" 
                  className="footer-logo-img"
                  onError={(e) => {
                    // Fallback to text logo if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                {/* Fallback text logo (hidden by default) */}
                
              </div>
              <p className="footer-description">
                Elite Active Retirement Community in Kochi providing luxury living 
                with world-class amenities for senior citizens.
              </p>
              <div className="footer-social-links">
                <a 
                  href="https://facebook.com/wingsliving" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-link" 
                  aria-label="Follow us on Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/wingsliving" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-link" 
                  aria-label="Follow us on Twitter"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/wingsliving" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-link" 
                  aria-label="Follow us on Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/company/wingsliving" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-link" 
                  aria-label="Follow us on LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">
                Quick Links
                <div className="title-underline"></div>
              </h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/amenities">Amenities</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/residences">Residences</Link></li>
                <li><Link to="/connect">Connect</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="footer-section">
              <h4 className="footer-title">
                Our Services
                <div className="title-underline"></div>
              </h4>
              <ul className="footer-links">
                <li><Link to="/services">24/7 Nursing Care</Link></li>
                <li><Link to="/services">Medical Support</Link></li>
                <li><Link to="/services">Dining Services</Link></li>
                <li><Link to="/services">Fitness & Wellness</Link></li>
                <li><Link to="/services">Social Activities</Link></li>
                <li><Link to="/services">Transportation</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-title">
                Contact Information
                <div className="title-underline"></div>
              </h4>
              <div className="overall-contact-info">
                <div className="overall-contact-items">
                  <svg className="overall-contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <a 
                      href="https://maps.google.com/?q=Near+PS+Mission+Hospital,+Maradu,+Kochi,+682304"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>Near PS Mission Hospital</p>
                      <p>Maradu, Kochi - 682 304</p>
                      <p>Kerala, India</p>
                    </a>
                  </div>
                </div>
                <div className="overall-contact-item">
                  <svg className="overall-contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <div>
                    <p><a href="tel:+918590943300">+91 8590 943 300</a></p>
                    <p><a href="tel:+914841234567">+91 484 123 4567</a></p>
                  </div>
                </div>
                <div className="overall-contact-item">
                  <svg className="overall-contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <div>
                    <p><a href="mailto:info@wingsliving.in">info@wingsliving.in</a></p>
                    <p><a href="mailto:support@wingsliving.in">support@wingsliving.in</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-wrapper">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>Copyright ©{currentYear} Wings Senior Living. All rights reserved.</p>
            </div>
            <div className="developed-by">
              <p>
                Developed by <span className="developer-name">Inspite Technologies</span>
              </p>
            </div>
            <div className="footer-legal">
              {/* Updated links with scroll-to-top functionality */}
              <button 
                onClick={() => handleLegalNavigation('/privacy-policy')}
                className="footer-legal-link"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleLegalNavigation('/terms-conditions')}
                className="footer-legal-link"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;