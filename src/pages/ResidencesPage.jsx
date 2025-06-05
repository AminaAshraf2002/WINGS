import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Users,
  Bed,
  Bath,
  Maximize,
  MapPin,
  CheckCircle,
  Star,
  Wifi,
  Tv,
  AirVent,
  Refrigerator,
  Microwave,
  Phone,
  Shield,
  Car,
  TreePine,
  Building,
  Camera,
  Download,
  Calendar,
  User
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ResidencesPage.css';

// Import images
import buildingImage from '../assets/web-2.png';

const ResidencesPage = () => {
  const [selectedUnit, setSelectedUnit] = useState('1bhk');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFloorPlan, setShowFloorPlan] = useState(false);

  // Initialize animations to trigger from top
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { 
        threshold: 0, // Trigger immediately when element enters viewport
        rootMargin: '0px 0px 100% 0px' // Trigger even when element is below viewport
      }
    );

    // Observe all animatable elements
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Trigger animations immediately for elements already in viewport
    const triggerInitialAnimations = () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('animate-in');
        }
      });
    };

    // Trigger immediately and after a short delay
    triggerInitialAnimations();
    setTimeout(triggerInitialAnimations, 100);

    return () => observer.disconnect();
  }, []);

  // Residence data
  const residenceTypes = {
    '1bhk': {
      title: '1 BHK Apartments',
      subtitle: '30 Units Available',
      area: '650 sq ft',
      description: 'Thoughtfully designed 1 BHK apartments perfect for independent senior living with all modern amenities.',
      features: ['1 Bedroom', '1 Bathroom', 'Living Area', 'Kitchen', 'Balcony'],
      images: [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop'
      ],
      floorPlan: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
    },
    '2bhk': {
      title: '2 BHK Apartments',
      subtitle: '21 Units Available',
      area: '950 sq ft',
      description: 'Spacious 2 BHK apartments ideal for couples seeking comfort and luxury in their retirement years.',
      features: ['2 Bedrooms', '2 Bathrooms', 'Living Area', 'Kitchen', 'Balcony', 'Study Room'],
      images: [
        'https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop'
      ],
      floorPlan: 'https://images.unsplash.com/photo-1558618047-3c8c76d29e1e?w=600&h=400&fit=crop'
    }
  };

  // Interior features
  const interiorFeatures = [
    { icon: AirVent, title: 'A/C Fully Furnished', description: 'Climate controlled comfort' },
    { icon: Home, title: 'Living Room Sofas', description: 'Comfortable seating arrangements' },
    { icon: Users, title: 'Dining Set', description: 'Elegant dining furniture' },
    { icon: Bed, title: 'Cot & Mattress', description: 'Quality sleeping arrangements' },
    { icon: Home, title: 'Wardrobe', description: 'Ample storage space' },
    { icon: Home, title: 'Curtains', description: 'Privacy and aesthetics' },
    { icon: Tv, title: 'TV', description: 'Entertainment system' },
    { icon: Wifi, title: 'Wi-Fi', description: 'High-speed internet' },
    { icon: Phone, title: 'Intercom', description: 'Internal communication' },
    { icon: Shield, title: 'Nurse Call System', description: '24/7 emergency assistance' },
    { icon: Refrigerator, title: 'Refrigerator', description: 'Modern appliances' },
    { icon: Microwave, title: 'Microwave Oven', description: 'Convenient cooking' },
    { icon: Home, title: 'Induction Cook Top', description: 'Safe cooking solution' },
    { icon: Home, title: 'Hotplates', description: 'Additional cooking options' },
    { icon: Home, title: 'Washing Machine Provision', description: 'Laundry convenience' },
    { icon: Shield, title: 'Piped Medical Oxygen', description: 'Emergency medical support' },
    { icon: Bath, title: 'Anti-skid Tiles', description: 'Safety in bathrooms' },
    { icon: Shield, title: 'Grab Rails & Shower Seat', description: 'Elderly-friendly bathrooms' }
  ];

  // Building amenities
  const buildingAmenities = [
    { icon: Building, title: '4 Floors', description: '51 total units across 4 floors' },
    { icon: Car, title: 'Parking', description: 'Dedicated parking spaces' },
    { icon: TreePine, title: 'Landscaped Gardens', description: 'Beautiful outdoor spaces' },
    { icon: Shield, title: '24/7 Security', description: 'Round-the-clock safety' },
    { icon: Home, title: 'Community Hall', description: 'Social gathering space' },
    { icon: Shield, title: 'Emergency Services', description: 'Immediate medical assistance' }
  ];

  const currentUnit = residenceTypes[selectedUnit];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentUnit.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentUnit.images.length) % currentUnit.images.length);
  };

  return (
    <div className="residences-page">
      <Header />

      {/* Content Section Below Header */}
      <div className="below-banner">
        <div className="below-banner-content animate-on-scroll">
          <h1 className="below-banner-title">Residences</h1>
          <p className="below-banner-description">
            <span className="highlight">WINGS Senior Living</span>, an initiative of <span className="highlight">PS Mission Hospital</span>, is an exclusive and Elite Active Retirement Community located in Kochi.
          </p>
          <p className="below-banner-description">
            This Gated Community Senior Living Homes comprises of 1 & 2 BHK Apartments located at Maradu next to PS Mission Hospital and near to Kundannoor Junction.
          </p>
        </div>
      </div>

      {/* Unit Selection Tabs */}
      <div className="unit-selection">
        <div className="tabs-container animate-on-scroll">
          <div className="tabs-wrapper">
            <button
              onClick={() => setSelectedUnit('1bhk')}
              className={`tab-button ${selectedUnit === '1bhk' ? 'active' : ''}`}
            >
              1 BHK Apartments
            </button>
            <button
              onClick={() => setSelectedUnit('2bhk')}
              className={`tab-button ${selectedUnit === '2bhk' ? 'active' : ''}`}
            >
              2 BHK Apartments
            </button>
          </div>
        </div>

        {/* Unit Details */}
        <div className="unit-details">
          {/* Image Gallery */}
          <div className="animate-on-scroll">
            <div className="gallery-container">
              <div className="gallery-main">
                <img
                  src={currentUnit.images[currentImageIndex]}
                  alt={currentUnit.title}
                  className="gallery-image"
                />
                <button
                  onClick={prevImage}
                  className="gallery-nav prev"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextImage}
                  className="gallery-nav next"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} />
                </button>
                <div className="gallery-indicators">
                  {currentUnit.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`gallery-indicator ${index === currentImageIndex ? 'active' : ''}`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="thumbnail-strip">
                {currentUnit.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  >
                    <img src={image} alt="" />
                  </button>
                ))}
                <button
                  onClick={() => setShowFloorPlan(!showFloorPlan)}
                  className="floorplan-button"
                  aria-label="View floor plan"
                >
                  <Home size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Unit Information */}
          <div className="animate-on-scroll">
            <div className="unit-info">
              <h2 className="unit-title">{currentUnit.title}</h2>
              <p className="unit-subtitle">{currentUnit.subtitle}</p>
              <p className="unit-description">{currentUnit.description}</p>

              <div className="unit-stats">
                <div className="stat-card">
                  <div className="stat-value">{currentUnit.area}</div>
                  <div className="stat-label">Carpet Area</div>
                </div>
              </div>

              <div className="unit-features">
                <h3 className="features-title">Unit Features:</h3>
                <div className="features-grid">
                  {currentUnit.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle size={14} color="#0d9488" />
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="unit-actions">
                <button className="action-button primary">
                  <Calendar size={16} />
                  <span>Book Site Visit</span>
                </button>
                <button className="action-button secondary">
                  <Download size={16} />
                  <span>Floor Plan</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floor Plan Modal */}
        {showFloorPlan && (
          <div className="modal-overlay" onClick={() => setShowFloorPlan(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 className="modal-title">{currentUnit.title} - Floor Plan</h3>
                <button
                  onClick={() => setShowFloorPlan(false)}
                  className="modal-close"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
              <div className="modal-body">
                <img
                  src={currentUnit.floorPlan}
                  alt="Floor Plan"
                  className="floorplan-image"
                />
              </div>
            </div>
          </div>
        )}

        {/* Interior Features */}
        <div className="interior-features animate-on-scroll">
          <div className="section-header">
            <h2 className="section-title">Elderly Friendly Interior</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Every apartment comes fully furnished with elderly-friendly features and modern amenities
            </p>
          </div>

          <div className="features-grid-3">
            {interiorFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="feature-card animate-on-scroll">
                  <div className="feature-content">
                    <div className="feature-icon">
                      <IconComponent size={18} />
                    </div>
                    <div className="feature-info">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Building Overview */}
        <div className="building-overview animate-on-scroll">
          <div className="overview-card">
            <div className="overview-grid">
              <div className="overview-content">
                <h2 className="overview-title">Building Overview</h2>
                <div className="overview-stats">
                  <div className="overview-stat">
                    <div className="stat-number">4</div>
                    <div className="stat-text">Floors</div>
                  </div>
                  <div className="overview-stat">
                    <div className="stat-number">51</div>
                    <div className="stat-text">Units</div>
                  </div>
                </div>

                <div className="amenities-list">
                  {buildingAmenities.map((amenity, index) => {
                    const IconComponent = amenity.icon;
                    return (
                      <div key={index} className="amenity-item">
                        <IconComponent size={16} color="#0d9488" />
                        <div>
                          <span className="amenity-title">{amenity.title}</span>
                          <span className="amenity-description"> - {amenity.description}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="overview-image">
                <img
                  src={buildingImage || "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=400&fit=crop"}
                  alt="Building Exterior"
                  className="overview-bg"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=400&fit=crop";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section animate-on-scroll">
          <div className="cta-card">
            <h2 className="cta-title">Explore Our Caring Community</h2>
            <p className="cta-description">Contact Us for Personalized Information</p>
            <div className="cta-buttons">
              <a href="/connect" className="btn-primary">
                <User size={16} />
                <span>Contact Us</span>
              </a>
              <a href="/brochure" className="btn-secondary" download>
                <Download size={16} />
                <span>Download Brochure</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ResidencesPage;