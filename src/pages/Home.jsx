import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Heart, 
  Users, 
  Shield, 
  Utensils, 
  Dumbbell, 
  BookOpen, 
  Scissors, 
  Stethoscope, 
  Gamepad2, 
  Briefcase, 
  Wind,
  CheckCircle,
  Star,
  Award,
  Home as HomeIcon,
  Activity,
  Coffee
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

// Import your images here
import hero1 from '../assets/ban0.png';
import hero2 from '../assets/ban.png'; 
import hero3 from '../assets/ban2.png';
import lifestyleImage from '../assets/hero3.jpeg';
import buildingImage from '../assets/web-2.png';

// Additional images for enhanced sections
import aboutBg from '../assets/web-2.png';
import amenitiesImg1 from '../assets/medical.jpeg';
import amenitiesImg2 from '../assets/exercise.jpeg';
import amenitiesImg3 from '../assets/hero3.jpeg';
import communityImg1 from '../assets/garden.png';
import communityImg2 from '../assets/social.png';
import facilityImg1 from '../assets/interiors.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  // Hero carousel images
  const heroImages = [
    {
      id: 1,
      title: "Elite Active Retirement Community in Kochi",
      subtitle: "Experience luxury living with world-class amenities",
      image: hero1,
      textPosition: "right"
    },
    {
      id: 2,
      title: "Premium Senior Living Experience",
      subtitle: "Where comfort meets community and care",
      image: hero2,
      textPosition: "left"
    },
    {
      id: 3,
      title: "Modern Amenities for Active Seniors",
      subtitle: "Live your golden years to the fullest",
      image: hero3,
      textPosition: "right"
    }
  ];

  // Enhanced Amenities data with images
  const amenitiesCategories = [
    {
      title: "Healthcare & Wellness",
      icon: Stethoscope,
      color: "from-red-500 to-pink-500",
      image: amenitiesImg1,
      description: "Comprehensive healthcare services with 24/7 medical support",
      amenities: [
        { icon: Shield, title: "24/7 Nursing Care", description: "Round-the-clock professional nursing" },
        { icon: Stethoscope, title: "In-House Doctor", description: "Immediate medical consultation" },
        { icon: Heart, title: "Medical Oxygen", description: "Emergency oxygen support available" },
        { icon: Users, title: "Physiotherapy", description: "Rehabilitation and wellness therapy" }
      ]
    },
    {
      title: "Lifestyle & Recreation",
      icon: Activity,
      color: "from-blue-500 to-cyan-500",
      image: amenitiesImg2,
      description: "Stay active and engaged with diverse recreational activities", 
      amenities: [
        { icon: Dumbbell, title: "Modern Gym", description: "State-of-the-art fitness equipment" },
        { icon: Users, title: "Yoga Classes", description: "Daily yoga and meditation sessions" },
        { icon: Gamepad2, title: "Indoor Games", description: "Cards, chess, and recreational games" },
        { icon: BookOpen, title: "Library", description: "Extensive collection of books and magazines" }
      ]
    },
    {
      title: "Daily Services",
      icon: Coffee,
      color: "from-green-500 to-emerald-500",
      image: amenitiesImg3,
      description: "Convenient daily services for comfortable living",
      amenities: [
        { icon: Utensils, title: "Fine Dining", description: "Nutritious meals prepared by expert chefs" },
        { icon: Wind, title: "Laundry Service", description: "Professional cleaning and maintenance" },
        { icon: Scissors, title: "Beauty Salon", description: "Grooming and personal care services" },
        { icon: Briefcase, title: "Business Center", description: "Meeting rooms and office facilities" }
      ]
    }
  ];

  // About Us highlights with images
  const aboutHighlights = [
    {
      icon: Award,
      title: "Premium Location",
      description: "Located at Maradu, next to PS Mission Hospital",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
    },
    {
      icon: Star,
      title: "Elite Community",
      description: "Exclusive gated community with luxury apartments",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=300&fit=crop"
    },
    {
      icon: CheckCircle,
      title: "Medical Partnership",
      description: "Initiative of renowned PS Mission Hospital",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
    }
  ];

  // Community showcase images
  const communityShowcase = [
    {
      title: "Beautiful Gardens",
      description: "Landscaped outdoor spaces for relaxation",
      image: communityImg1
    },
    {
      title: "Social Spaces", 
      description: "Common areas for community gatherings",
      image: communityImg2
    },
    {
      title: "Modern Interiors",
      description: "Thoughtfully designed living spaces",
      image: facilityImg1
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Mrs. Priya Nair",
      age: "72",
      text: "Wings Senior Living has given me a new lease on life. The care and community here are exceptional.",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mr. Rajesh Kumar", 
      age: "68",
      text: "The medical facilities and lifestyle amenities make this the perfect place for active retirement.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mrs. Lakshmi Menon",
      age: "75", 
      text: "I love the sense of community here. Every day brings new friendships and activities.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Testimonial auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="home-page">
      <Header />

      {/* Hero Section with Carousel */}
      <section id="home" className="hero-section">
        <div className="hero-carousel">
          {heroImages.map((image, index) => (
            <div
              key={image.id}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img
                src={image.image}
                alt={image.title}
                className="hero-image"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
                }}
              />
              <div className="hero-overlay"></div>
            </div>
          ))}
        </div>

        <div className={`hero-content ${heroImages[currentSlide].textPosition === 'left' ? 'text-left' : 'text-right'}`}>
          <div className="hero-text">
            <h1 className={`hero-title ${currentSlide >= 0 ? 'animate-in' : ''}`}>
              {heroImages[currentSlide].title}
            </h1>
            <p className={`hero-subtitle ${currentSlide >= 0 ? 'animate-in delay-300' : ''}`}>
              {heroImages[currentSlide].subtitle}
            </p>
            <button className={`cta-button ${currentSlide >= 0 ? 'animate-in delay-600' : ''}`}>
              Enquire Now
            </button>
          </div>
        </div>

        <button onClick={prevSlide} className="carousel-btn prev-btn" aria-label="Previous slide">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="carousel-btn next-btn" aria-label="Next slide">
          <ChevronRight size={24} />
        </button>

        <div className="carousel-indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Enhanced About Section with AOS */}
      {/* Enhanced About Section with Updated Class Names */}
      {/* Enhanced About Section with Icons, Poppins & Animations */}
      <section id="about" className="wings-about-section">
        <div className="container">
          <div 
            className="wings-about-header"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="section-title">About Wings Senior Living</h2>
           
          </div>

          <div className="wings-about-content-grid">
            <div 
              className="wings-about-main-content"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="wings-about-text-enhanced">
                <p className="wings-about-lead-text">
                  <span>WINGS Senior Living</span>, an initiative of PS Mission Hospital, is an exclusive and Elite Active Retirement Community located in the heart of Kochi.
                </p>
                <p>
                  This premium gated community offers thoughtfully designed 1 & 2 BHK apartments at Maradu, strategically positioned next to PS Mission Hospital and conveniently near Kundannoor Junction.
                </p>
                <p>
                  Experience a new standard of senior living where luxury meets care, and independence blends seamlessly with comprehensive support services.
                </p>
              </div>
            </div>

            <div className="wings-about-highlights">
              <div
                className="wings-highlight-card"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="600"
              >
                <div className="wings-card-icon">
                  <Award size={24} />
                </div>
                <div className="wings-card-content">
                  <h3>Premium Location</h3>
                  <p>Located at Maradu, next to PS Mission Hospital</p>
                </div>
              </div>

              <div
                className="wings-highlight-card"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="800"
              >
                <div className="wings-card-icon">
                  <Star size={24} />
                </div>
                <div className="wings-card-content">
                  <h3>Elite Community</h3>
                  <p>Exclusive gated community with luxury apartments</p>
                </div>
              </div>

              <div
                className="wings-highlight-card"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="1000"
              >
                <div className="wings-card-icon">
                  <CheckCircle size={24} />
                </div>
                <div className="wings-card-content">
                  <h3>Medical Partnership</h3>
                  <p>Initiative of renowned PS Mission Hospital</p>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="wings-about-stats"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1200"
          >
            <div className="wings-stat-item">
              <div className="wings-stat-number">1 & 2</div>
              <div className="wings-stat-label">BHK Apartments</div>
            </div>
            <div className="wings-stat-item">
              <div className="wings-stat-number">24/7</div>
              <div className="wings-stat-label">Healthcare Support</div>
            </div>
            <div className="wings-stat-item">
              <div className="wings-stat-number">100%</div>
              <div className="wings-stat-label">Premium Lifestyle</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Amenities Section with AOS */}
       {/* Enhanced Amenities Section with Updated Class Names */}
      {/* Enhanced Amenities Section with Updated Class Names */}
      <section id="amenities" className="home-amenities-section">
        <div className="container">
          <div 
            className="amenities-header"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="home-section-title">World-Class Amenities</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle enhanced">
              Step into a world of premium facilities designed around your well-being. Every amenity reflects our commitment to providing an unparalleled living experience.
            </p>
          </div>

          <div className="home-amenities-categories">
            {amenitiesCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div
                  key={categoryIndex}
                  className="home-amenity-category enhanced"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={categoryIndex * 200}
                >
                  <div className="home-category-image-header">
                    <img 
                      src={category.image || `https://images.unsplash.com/photo-157601355162${categoryIndex}?w=400&h=250&fit=crop`}
                      alt={category.title}
                      className="home-category-bg-image"
                      onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-157601355162${categoryIndex}?w=400&h=250&fit=crop`;
                      }}
                    />
                    <div className="home-category-overlay">
                      <CategoryIcon size={50} className="category-main-icon" />
                      <h3 className="home-category-title">{category.title}</h3>
                      <p className="home-category-description">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="home-category-amenities enhanced">
                    {category.amenities.map((amenity, amenityIndex) => {
                      const AmenityIcon = amenity.icon;
                      return (
                        <div
                          key={amenityIndex}
                          className="home-amenity-card-enhanced tooltip"
                          data-aos="zoom-in"
                          data-aos-duration="600"
                          data-aos-delay={100 + (amenityIndex * 100)}
                        >
                          <div className="home-amenity-icon-enhanced">
                            <AmenityIcon size={28} />
                          </div>
                          <h4 className="home-amenity-title-enhanced">{amenity.title}</h4>
                          <div className="amenity-hover-effect"></div>
                          <div className="home-tooltip-content">
                            <p>{amenity.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Community Showcase Section with AOS */}
      <section className="community-showcase">
        <div className="container">
          <div 
            className="showcase-header"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="section-title">Life at Wings</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Experience the beauty and comfort of our thoughtfully designed spaces</p>
          </div>

          <div className="showcase-grid">
            {communityShowcase.map((item, index) => (
              <div
                key={index}
                className="showcase-item"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 200}
              >
                <div className="showcase-image">
                  <img 
                    src={item.image || `https://images.unsplash.com/photo-154555801${index}?w=400&h=300&fit=crop`}
                    alt={item.title}
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-154555801${index}?w=400&h=300&fit=crop`;
                    }}
                  />
                  <div className="showcase-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with AOS */}
      <section className="testimonials-section">
        <div className="container">
          <div 
            className="testimonials-header"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="section-title">What Our Residents Say</h2>
            <div className="section-divider"></div>
          </div>

          <div 
            className="testimonials-carousel"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card ${index === currentTestimonial ? 'active' : ''}`}
              >
                <div className="testimonial-content">
                  <p>"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div>
                      <h4>{testimonial.name}</h4>
                      <span>Age {testimonial.age}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section with AOS */}
      <section className="lifestyle-section">
        <div className="container">
          <div className="lifestyle-grid">
            <div 
              className="lifestyle-image"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                src={lifestyleImage}
                alt="Happy Senior Couple"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
            <div 
              className="lifestyle-content"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <h2 className="lifestyle-title">
                Retirement Community in Kochi
              </h2>
              <p className="lifestyle-text">
                Wings, the elite active retirement community in Kochi for senior citizens comes with amazing amenities carefully designed for a luxurious retirement lifestyle that is well designed and fully furnished with modern amenities and infrastructure, looks pampering and comfortable for the residents.
              </p>
              <div className="highlight-box">
                <h3>With No Compromise On Space, Quality & Style</h3>
                <p>Senior Citizen Retirement Homes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Section with AOS */}
      <section className="building-section">
        <div className="container">
          <div className="building-grid">
            <div 
              className="building-content"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2 className="building-title">
                Uplifting Luxury Retirement!
              </h2>
              <p className="building-text">
                With thoughtfully designed amenities and fully furnished modern homes, WINGS provides a pampering and comfortable lifestyle for senior citizens. From beautifully landscaped gardens to premium facilities, every aspect of WINGS is crafted to elevate your retirement experience to new heights of luxury and comfort.
              </p>
            </div>
            <div 
              className="building-image"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <img
                src={buildingImage}
                alt="Wings Building"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
        <section id="connect" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <h2 
            className="section-title white"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Connect With Us
          </h2>
          <div className="contact-grid">
            <div 
              className="contact-card"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <svg className="contact-icon map-pin-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <h3>Location</h3>
              <a 
                href="https://maps.google.com/?q=Near+PS+Mission+Hospital,+Maradu,+Kochi,+682304"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link location-link"
                aria-label="Open location in Google Maps"
              >
                <p>
                  Near PS Mission Hospital<br />
                  Maradu, Kochi<br />
                  682 304
                </p>
              </a>
            </div>
            
            <div 
              className="contact-card"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <svg className="contact-icon phone-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <h3>Call Us</h3>
              <a 
                href="tel:+918590943300"
                className="contact-link phone-link"
                aria-label="Call us at +91 8590 943 300"
              >
                <p>+91 8590 943 300</p>
              </a>
            </div>
            
            <div 
              className="contact-card"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <svg className="contact-icon mail-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <h3>Email</h3>
              <a 
                href="mailto:info@wingsliving.in"
                className="contact-link email-link"
                aria-label="Send email to info@wingsliving.in"
              >
                <p>info@wingsliving.in</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </div>
  );
};

export default Home;