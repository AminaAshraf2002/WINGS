import React, { useEffect, useState } from 'react';
import { 
  Heart, 
  Users, 
  Shield, 
  Award,
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Target,
  Eye,
  HandHeart,
  Building,
  Stethoscope,
  Clock,
  CheckCircle
} from 'lucide-react';
// Remove AOS import completely
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AboutUs.css';

// Import your images here - replace with actual paths
import bannerImage from '../assets/hero.png';
import storyImage1 from '../assets/web-2.png';
import storyImage2 from '../assets/social.png';
import hospitalImage from '../assets/medical.jpeg';
import inspirationImage from '../assets/hero3.jpeg';
import teamImage from '../assets/hero.png';

const AboutUs = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Remove all AOS initialization
  // useEffect(() => {
  //   AOS.init({...});
  // }, []);

  // Testimonials data
  const testimonials = [
    {
      name: "Mrs. Priya Nair",
      age: "72",
      text: "Wings Senior Living has transformed my retirement years. The care, community, and facilities here exceed all expectations.",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
      location: "Resident since 2023"
    },
    {
      name: "Mr. Rajesh Kumar", 
      age: "68",
      text: "The medical partnership with PS Mission Hospital gives us unparalleled peace of mind. This is truly premium senior living.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      location: "Resident since 2022"
    },
    {
      name: "Mrs. Lakshmi Menon",
      age: "75", 
      text: "The sense of community here is incredible. Every day brings new friendships, activities, and joy.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      location: "Resident since 2023"
    },
    {
      name: "Dr. Suresh Pillai",
      age: "70",
      text: "As a retired physician, I appreciate the quality of healthcare services and the professional approach to senior care here.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face",
      location: "Resident since 2022"
    }
  ];

  // Hospital highlights
  const hospitalHighlights = [
    {
      icon: Building,
      title: "Established Legacy",
      description: "Over 25 years of healthcare excellence in Kerala"
    },
    {
      icon: Stethoscope,
      title: "Medical Expertise",
      description: "Leading specialists and advanced medical facilities"
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Patient-centered approach with personalized attention"
    },
    {
      icon: Award,
      title: "Quality Accreditation",
      description: "NABH accredited with international standards"
    }
  ];

  // Mission & Vision values
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide premium, compassionate senior living that enhances the quality of life for our residents through comprehensive care, meaningful community connections, and innovative services."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be Kerala's premier senior living community, setting new standards in retirement lifestyle and redefining what it means to age gracefully with dignity and purpose."
    },
    {
      icon: HandHeart,
      title: "Our Values",
      description: "Compassion, Respect, Excellence, Innovation, and Community - these core values guide every aspect of our service and define our commitment to our residents."
    }
  ];

  // Stats data
  const stats = [
    {
      number: "25+",
      label: "Years of Healthcare Excellence",
      icon: Clock
    },
    {
      number: "500+",
      label: "Families Served",
      icon: Users
    },
    {
      number: "24/7",
      label: "Medical Support",
      icon: Shield
    },
    {
      number: "100%",
      label: "Satisfaction Rate",
      icon: Star
    }
  ];

  // Testimonial auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="about-us-page">
      <Header />

      {/* Banner Section - Remove all data-aos attributes */}
      <section className="about-banner">
        <div className="banner-image-container">
          <img 
            src={bannerImage || "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=800&fit=crop"}
            alt="About Wings Senior Living"
            className="banner-image"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=800&fit=crop";
            }}
          />
          <div className="banner-overlay"></div>
        </div>
        <div className="banner-content">
          <div className="container">
            <div className="banner-text">
              <h1 className="banner-title">About Wings Senior Living</h1>
              <p className="banner-subtitle">
                Discover the story behind Kerala's premier active retirement community, 
                where luxury meets care and independence blends with comprehensive support.
              </p>
              <div className="banner-highlights">
                <div className="highlight-item">
                  <Shield className="highlight-icon" />
                  <span>Trusted Healthcare Partner</span>
                </div>
                <div className="highlight-item">
                  <Award className="highlight-icon" />
                  <span>Premium Lifestyle</span>
                </div>
                <div className="highlight-item">
                  <Heart className="highlight-icon" />
                  <span>Compassionate Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Remove all data-aos attributes */}
      <section className="our-story-section">
        <div className="container">
          <div className="story-header">
            <h2 className="section-title">Our Story</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              A journey of compassion, innovation, and commitment to senior care excellence
            </p>
          </div>

          <div className="story-content">
            <div className="story-timeline">
              <div className="timeline-item">
                <div className="timeline-marker">
                  <Building size={24} />
                </div>
                <div className="timeline-content">
                  <h3>The Foundation</h3>
                  <p className="timeline-year">1998</p>
                  <p>PS Mission Hospital was established with a vision to provide world-class healthcare to the people of Kerala, setting the foundation for comprehensive medical care.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker">
                  <Heart size={24} />
                </div>
                <div className="timeline-content">
                  <h3>Growing Recognition</h3>
                  <p className="timeline-year">2010-2020</p>
                  <p>Over two decades of healthcare excellence, PS Mission Hospital became a trusted name in Kerala's medical landscape, serving thousands of families with compassionate care.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker">
                  <Users size={24} />
                </div>
                <div className="timeline-content">
                  <h3>Vision for Senior Care</h3>
                  <p className="timeline-year">2021</p>
                  <p>Recognizing the unique needs of our aging population, we envisioned a revolutionary approach to senior living that combines luxury lifestyle with medical expertise.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker">
                  <Award size={24} />
                </div>
                <div className="timeline-content">
                  <h3>Wings Takes Flight</h3>
                  <p className="timeline-year">2022</p>
                  <p>Wings Senior Living was born - an elite active retirement community that sets new standards for senior care in India, combining hospital-grade healthcare with premium lifestyle amenities.</p>
                </div>
              </div>
            </div>

            <div className="story-images">
              <div className="story-image-card primary">
                <img 
                  src={storyImage1 || "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=500&fit=crop"}
                  alt="Our Journey"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=500&fit=crop";
                  }}
                />
                <div className="image-overlay">
                  <h4>25+ Years of Excellence</h4>
                </div>
              </div>
              <div className="story-image-card secondary">
                <img 
                  src={storyImage2 || "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=300&fit=crop"}
                  alt="Premium Care"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=300&fit=crop";
                  }}
                />
                <div className="image-overlay">
                  <h4>Modern Living Spaces</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="story-stats">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="stat-card">
                  <IconComponent className="stat-icon" size={32} />
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="inspiration-section">
        <div className="container">
          <div className="inspiration-content">
            <div className="inspiration-text">
              <h2 className="inspiration-title">The Inspiration Behind WINGS</h2>
              <div className="section-divider left"></div>
              
              <div className="inspiration-story">
                <p className="lead-text">
                  The inspiration for Wings Senior Living emerged from a profound understanding of the evolving needs of India's aging population and the desire to honor our elders with the dignity and care they deserve.
                </p>
                
                <p>
                  After years of observing the challenges faced by senior citizens - from healthcare concerns to social isolation - the visionaries at PS Mission Hospital recognized an opportunity to revolutionize senior care in India.
                </p>
                
                <p>
                  We believed that retirement should not be about withdrawal from life, but rather about embracing a new chapter filled with purpose, community, and joy. This belief became the cornerstone of Wings Senior Living.
                </p>
                
                <div className="inspiration-quote">
                  <blockquote>
                    "Every senior deserves to live their golden years with dignity, independence, and access to world-class care. Wings is our commitment to making this vision a reality."
                  </blockquote>
                  <cite>- PS Mission Hospital Leadership Team</cite>
                </div>
              </div>
            </div>

            <div className="inspiration-visual">
              <div className="inspiration-image">
                <img 
                  src={inspirationImage || "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=700&fit=crop"}
                  alt="The Inspiration Behind Wings"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=700&fit=crop";
                  }}
                />
                <div className="inspiration-overlay">
                  <div className="overlay-content">
                    <Heart size={48} className="overlay-icon" />
                    <h3>Honoring Our Elders</h3>
                    <p>With respect, dignity, and love</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PS Mission Hospital Section */}
      <section className="hospital-section">
        <div className="container">
          <div className="hospital-header">
            <h2 className="section-title">An Initiative of PS Mission Hospital</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Built on a foundation of medical excellence and compassionate care that has served Kerala for over 25 years
            </p>
          </div>

          <div className="hospital-content">
            <div className="hospital-image">
              <img 
                src={hospitalImage || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"}
                alt="PS Mission Hospital"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop";
                }}
              />
            </div>

            <div className="hospital-info">
              <h3>A Legacy of Healthcare Excellence</h3>
              <p className="hospital-description">
                PS Mission Hospital has been at the forefront of healthcare innovation in Kerala, providing comprehensive medical services with a commitment to excellence, compassion, and patient-centered care.
              </p>
              
              <div className="hospital-features">
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>NABH Accredited Healthcare Facility</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>25+ Years of Medical Excellence</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>Specialized Senior Care Programs</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>Leading Medical Specialists</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hospital-highlights">
            {hospitalHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className="highlight-card">
                  <IconComponent className="highlight-icon" size={40} />
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mv-header">
            <h2 className="section-title white">Mission & Vision</h2>
            <div className="section-divider"></div>
          </div>

          <div className="mv-content">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <IconComponent size={48} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="about-cta-title">Ready to Begin Your Wings Journey?</h2>
            <p className="about-cta-description">
              Discover how Wings Senior Living can transform your retirement years. 
              Schedule a visit today and experience the difference that comes with 25+ years of healthcare excellence.
            </p>
            
            <div className="cta-butt">
              <button className="cta-butt primary">
                Schedule a Visit
                <ArrowRight size={20} />
              </button>
              <button className="cta-butt secondary">
                Download Brochure
              </button>
            </div>

            <div className="cta-contact">
              <div className="contact-item">
                <Phone size={20} />
                <span>+91 8590 943 300</span>
              </div>
              <div className="contact-item">
                <Mail size={20} />
                <span>info@wingsliving.in</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>Maradu, Kochi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;