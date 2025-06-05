import React, { useState, useEffect } from 'react';
import {
  Heart,
  Stethoscope,
  Shield,
  Users,
  Clock,
  Phone,
  Ambulance,
  Activity,
  Cross,
  UserCheck,
  Calendar,
  Pill,
  ArrowRight,
  CheckCircle2,
  Star,
  Award,
  Sparkles
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ServicesPage.css';

// Import images
import servicesImage from '../assets/medical.jpeg';
import hospitalImage from '../assets/medi.jpeg';
import healthCareImage from '../assets/exercise.jpeg';

const ServicesPage = () => {
  // Initialize animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Medical Facilities data
  const medicalFacilities = [
    'Medical room',
    'Regular doctor Visits',
    'By stander support',
    'Emergency consultations',
    'Doctor on call on any time'
  ];

  // Enhanced Health services data
  const healthServices = [
    {
      icon: Stethoscope,
      title: "24/7 Medical Support",
      description: "Round-the-clock medical assistance and emergency care services",
      color: "#ef4444",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Regular Health Checkups",
      description: "Scheduled health assessments and preventive care programs",
      color: "#f97316",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Professional medication administration and monitoring",
      color: "#8b5cf6",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Activity,
      title: "Physiotherapy Services",
      description: "Rehabilitation and physical therapy programs",
      color: "#06b6d4",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Ambulance,
      title: "Emergency Transport",
      description: "Quick medical transportation when needed",
      color: "#10b981",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: UserCheck,
      title: "Specialized Care",
      description: "Expert care for chronic conditions and specialized needs",
      color: "#3b82f6",
      gradient: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <div className="services-page">
      <Header />

      {/* Content Section */}
      <div className="services-content">
        {/* Enhanced Page Header */}
        <div className="services-header animate-on-scroll">
          <div className="header-background">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
          <div className="container">
            <div className="header-content">
              <div className="header-badge">
                <Sparkles size={16} />
                <span>Premium Healthcare Excellence</span>
              </div>
              <h1 className="services-title">Health services</h1>
              <p className="services-subtitle">
                Comprehensive healthcare solutions designed with love and compassion for our senior community
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Health Care Services Section */}
        <section className="healthcare-services-section">
          <div className="container">
            <div className="healthcare-content animate-on-scroll">
              <div className="section-header">
                <div className="icon-wrapper">
                  <Award size={40} />
                </div>
                <h2 className="section-title">Health Care Services</h2>
                <div className="title-decoration">
                  <div className="decoration-line"></div>
                  <Heart size={20} />
                  <div className="decoration-line"></div>
                </div>
              </div>

              <div className="services-features">
                <div className="feature-card">
                  <div className="feature-icons">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="feature-content">
                    <h3>Medical Appointments</h3>
                    <p>Transportation arranged for medical appointments as per requirements</p>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-icons">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="feature-content">
                    <h3>Emergency Care</h3>
                    <p>Specialized sub-acute care and expert in-home care during medical emergencies</p>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-icons">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="feature-content">
                    <h3>Rehabilitation</h3>
                    <p>Physiotherapy and rehabilitation services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Section with Image */}
        <section className="services-image-section">
          <div className="container">
            <div className="services-grid">
              <div className="services-text animate-on-scroll">
                <h2 className="section-title gradient-text">Services</h2>
                <p className="services-description">
                  Our comprehensive healthcare services are designed to provide peace of mind and exceptional care for our residents and their families.
                </p>
                <div className="service-highlights">
                  <div className="highlight-items">
                    <Star size={20} />
                    <span>Professional Medical Staff</span>
                  </div>
                  <div className="highlight-items">
                    <Star size={20} />
                    <span>Advanced Medical Equipment</span>
                  </div>
                  <div className="highlight-items">
                    <Star size={20} />
                    <span>24/7 Emergency Response</span>
                  </div>
                </div>
              </div>

              <div className="services-image animate-on-scroll">
                <div className="image-container">
                  <div className="image-backdrop"></div>
                  <img
                    src={servicesImage || "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"}
                    alt="Health Services"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop";
                    }}
                  />
                  <div className="image-overlay">
                    <Stethoscope size={48} />
                    <span>Expert Care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Health Care Partner Section */}
        <section className="healthcare-partner-section">
          <div className="container">
            <div className="partner-content">
              <div className="partner-text animate-on-scroll">
                <div className="partner-badge">
                  <Shield size={20} />
                  <span>Trusted Partner</span>
                </div>
                <h2 className="section-title">Health Care Partner</h2>
                <p className="partner-description">PS Mission Hospital</p>
                <div className="partner-features">
                  <div className="partner-feature">
                    <CheckCircle2 size={16} />
                    <span>Leading Healthcare Provider</span>
                  </div>
                  <div className="partner-feature">
                    <CheckCircle2 size={16} />
                    <span>Advanced Medical Technology</span>
                  </div>
                  <div className="partner-feature">
                    <CheckCircle2 size={16} />
                    <span>Experienced Medical Team</span>
                  </div>
                </div>
              </div>

              <div className="partner-image animate-on-scroll">
                <div className="image-frame">
                  <img
                    src={hospitalImage || "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop"}
                    alt="PS Mission Hospital"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Health Care Support Section */}
        <section className="healthcare-support-section">
          <div className="container">
            <div className="support-content">
              <div className="support-image animate-on-scroll">
                <div className="support-image-wrapper">
                  <img
                    src={healthCareImage || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"}
                    alt="Health Care Support"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop";
                    }}
                  />
                  <div className="support-overlay">
                    <Users size={40} />
                  </div>
                </div>
              </div>

              <div className="support-text animate-on-scroll">
                <h2 className="section-title">Health Care support</h2>
                <p className="support-description">Any hospital of the customer's choice</p>
                <div className="support-benefits">
                  <div className="benefit-item">
                    <Heart size={18} />
                    <span>Personalized Care Plans</span>
                  </div>
                  <div className="benefit-item">
                    <Shield size={18} />
                    <span>Insurance Coordination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Health Services Grid */}
        <section className="health-services-grid-section">
          <div className="container">
            <div className="services-grid-container animate-on-scroll">
              <div className="grid-header">
                <h2 className="section-title">Our Health Services</h2>
                <p className="grid-subtitle">Comprehensive care tailored to your needs</p>
              </div>
              <div className="services-grid-items">
                {healthServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className={`service-card animate-on-scroll gradient-${service.gradient}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="card-background"></div>
                      <div className="service-header">
                        <div className="service-icon" style={{ color: service.color }}>
                          <IconComponent size={32} />
                        </div>
                        <div className="service-badge">Premium</div>
                      </div>
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                      <div className="service-footer">

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Medical Facilities Section */}
        <section className="medical-facilities-section">
          <div className="container">
            <div className="facilities-content animate-on-scroll">
              <div className="facilities-header">
                <h2 className="section-title">Medical Facilities</h2>
                <p className="facilities-subtitle">State-of-the-art medical infrastructure</p>
              </div>
              <div className="facilities-grid">
                {medicalFacilities.map((facility, index) => (
                  <div key={index} className="facility-card">
                    <div className="facility-icon">
                      <CheckCircle2 size={24} />
                    </div>
                    <div className="facility-content">
                      <h3 className="facility-title">{facility}</h3>
                      <p className="facility-description">Professional services available when you need them</p>
                    </div>
                    <div className="facility-arrow">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="services-cta-section">
          <div className="cta-background">
            <div className="cta-particles">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
            </div>
          </div>
          <div className="container">
            <div className="cta-content animate-on-scroll">
              <div className="cta-icon">
                <Heart size={48} />
              </div>
              <h2 className="services-cta-title">Explore Our Caring Community</h2>
              <p className="services-cta-description">Contact Us for Personalized Information about our comprehensive healthcare services.</p>

              <div className="services-cta-buttons">
                <a href="/connect" className="services-cta-button primary">
                  <Phone size={20} />
                  Contact Us
                </a>
                <a href="/book-visit" className="services-cta-button secondary">
                  <Calendar size={20} />
                  Schedule Visit
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;