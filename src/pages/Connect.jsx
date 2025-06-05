import React, { useEffect, useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Calendar,
  ArrowRight,
  Building,
  Heart,
  Users,
  CheckCircle
} from 'lucide-react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaWhatsapp 
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Connect.css';

// Import your images here - replace with actual paths
import bannerImage from '../assets/social.png';
import officeImage from '../assets/web-2.png';

const Connect = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 0,
    });
  }, []);

  // Contact information
  const contactInfo = {
    office: {
      title: "Admin Office",
      address: "1st Floor, PS Mission Hospital",
      location: "Maradu, Kochi 682 304",
      icon: Building
    },
    phone: {
      title: "Phone Number",
      value: "+91 85909 43300",
      href: "tel:+918590943300",
      icon: Phone
    },
    email: {
      title: "Email Address", 
      value: "info@wingsliving.in",
      href: "mailto:info@wingsliving.in",
      icon: Mail
    },
    hours: {
      title: "Office Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
      sub: "Sunday: By Appointment",
      icon: Clock
    }
  };

  // Social media links
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://facebook.com/wingsliving",
      color: "#1877F2"
    },
    {
      name: "Instagram", 
      icon: FaInstagram,
      url: "https://instagram.com/wingsliving",
      color: "#E4405F"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/company/wingsliving", 
      color: "#0A66C2"
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/918590943300",
      color: "#25D366"
    }
  ];

  // Why connect with us reasons
  const connectReasons = [
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Get personalized information about our services tailored to your needs"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Speak with our experienced team about senior living options"
    },
    {
      icon: Building,
      title: "Visit Our Facility",
      description: "Schedule a tour to experience Wings Senior Living firsthand"
    },
    {
      icon: CheckCircle,
      title: "No Obligation",
      description: "Explore your options with no pressure or commitment required"
    }
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    
    // Show success message (you can implement a toast notification)
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="connect-page">
      <Header />

      {/* Banner Section */}
      <section className="connect-banner">
        <div className="banner-image-container">
          <img 
            src={bannerImage || "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&h=800&fit=crop"}
            alt="Connect With Us"
            className="banner-image"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&h=800&fit=crop";
            }}
          />
          <div className="banner-overlay"></div>
        </div>
        <div className="banner-content">
          <div className="container">
            <div 
              className="banner-text"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="banner-title">Connect With Us</h1>
              <p className="banner-subtitle">
                Ready to explore exceptional senior living? We're here to answer your questions 
                and help you discover how Wings can enhance your retirement lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="container">
          <div 
            className="contact-header"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="contact-info-grid">
            {Object.entries(contactInfo).map(([key, info], index) => {
              const IconComponent = info.icon;
              return (
                <div 
                  key={key}
                  className="contact-info-card"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 150}
                >
                  <div className="contact-icon">
                    <IconComponent size={32} />
                  </div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    {info.href ? (
                      <a href={info.href} className="contact-link">
                        {info.value}
                      </a>
                    ) : (
                      <>
                        {info.address && <p>{info.address}</p>}
                        <p className="contact-main">{info.location || info.value}</p>
                        {info.sub && <p className="contact-sub">{info.sub}</p>}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-grid">
            <div 
              className="contact-form-container"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2 className="form-title">Send Us a Message</h2>
              <p className="form-subtitle">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <User size={18} />
                      Enter your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      <Phone size={18} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <Mail size={18} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <MessageSquare size={18} />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            <div 
              className="office-info"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="office-image">
                <img 
                  src={officeImage || "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"}
                  alt="Wings Office"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop";
                  }}
                />
                <div className="office-overlay">
                  <h3>Visit Our Office</h3>
                  <p>Experience Wings Senior Living firsthand</p>
                </div>
              </div>

              <div className="office-details">
                <h3>Schedule a Visit</h3>
                <p>
                  We'd love to show you around our beautiful facility and discuss how 
                  Wings Senior Living can be the perfect home for you or your loved one.
                </p>
                
                <button className="schedule-btn">
                  <Calendar size={20} />
                  Schedule Tour
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-media-section">
        <div className="container">
          <div 
            className="social-header"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="section-title white">Follow Us</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle white">
              Stay connected and get the latest updates from Wings Senior Living
            </p>
          </div>

          <div className="social-links">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--social-color': social.color }}
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={index * 100}
                >
                  <IconComponent size={28} />
                  <span>{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Connect Section */}
      <section className="why-connect-section">
        <div className="container">
          <div 
            className="why-connect-header"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="section-title">Why Connect With Wings?</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Discover what makes Wings Senior Living the right choice for your retirement
            </p>
          </div>

          <div className="connect-reasons-grid">
            {connectReasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div 
                  key={index}
                  className="reason-card"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 150}
                >
                  <div className="reason-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section (Optional - you can add Google Maps integration) */}
      <section className="map-section">
        <div className="container">
          <div 
            className="map-content"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="section-title">Find Us</h2>
            <div className="section-divider"></div>
            
            <div className="map-container">
              {/* Replace with actual Google Maps embed */}
              <div className="map-placeholder">
                <MapPin size={48} />
                <h3>Wings Senior Living</h3>
                <p>1st Floor, PS Mission Hospital</p>
                <p>Maradu, Kochi 682 304</p>
                <button className="directions-btn">
                  Get Directions
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Connect;