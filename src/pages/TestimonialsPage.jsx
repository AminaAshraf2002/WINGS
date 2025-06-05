import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Quote,
  User,
  Phone,
  Download,
  Heart,
  Users,
  Shield,
  MapPin
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './TestimonialsPage.css';

const TestimonialsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Testimonials data - moved to top to ensure it's available immediately
  const testimonials = [
    {
      id: 1,
      name: 'Mr. Paulose Chacko',
      role: 'Future Resident',
      content: 'From the moment I visited the site, I knew WINGS was the right choice for me. The team was incredibly welcoming and answered all my questions with patience and care. The thought and planning that have gone into designing WINGS are truly impressive. I\'m looking forward to moving into a community that feels like home even before it\'s built.',
      rating: 5,
      location: 'Kochi',
      avatar: 'https://ui-avatars.com/api/?name=Paulose+Chacko&background=0d9488&color=fff&size=100'
    },
    {
      id: 2,
      name: 'Mrs. Anitha George',
      role: 'Daughter of a Future Resident',
      content: 'My mother and I were searching for a senior living community that offers not just comfort but also a sense of belonging. WINGS ticked all the boxes for us. The detailed plans, the array of amenities, and the warm approach of the staff assured us that this is where she will be happy and well-cared for. We\'re excited to see WINGS come to life.',
      rating: 5,
      location: 'Kochi',
      avatar: 'https://ui-avatars.com/api/?name=Anitha+George&background=0d9488&color=fff&size=100'
    },
    {
      id: 3,
      name: 'Mr. Thomas Mathew',
      role: 'Future Resident',
      content: 'As an NRI, I wanted a place in Kochi where I could retire peacefully. WINGS stood out because of its prime location and the comprehensive services they offer. The professionalism of the team and their commitment to making WINGS a world-class senior living home gave me the confidence to book without hesitation. I\'m eager to be part of this wonderful community.',
      rating: 5,
      location: 'NRI - Future Resident',
      avatar: 'https://ui-avatars.com/api/?name=Thomas+Mathew&background=0d9488&color=fff&size=100'
    },
    {
      id: 4,
      name: 'Mrs. Leela Krishnan',
      role: 'Future Resident',
      content: 'Booking a residence at WINGS was an easy decision for me. The facilities and the overall vision for WINGS are exactly what I was looking for. I\'ve always wanted to live in a place where I can be independent but also have the support I need when necessary. WINGS promises to provide just that. I can\'t wait to move in and start this new chapter of my life.',
      rating: 5,
      location: 'Kochi',
      avatar: 'https://ui-avatars.com/api/?name=Leela+Krishnan&background=0d9488&color=fff&size=100'
    },
    {
      id: 5,
      name: 'Mr. Aravind Menon',
      role: 'Son of Future Residents',
      content: 'When my parents decided it was time to move into a senior living community, we wanted nothing but the best for them. WINGS offered everything we were looking for—luxury, care, and community. The team\'s dedication to ensuring a smooth transition and the thoughtful design of the residences gave us peace of mind. We\'re confident WINGS will be the perfect home for them.',
      rating: 5,
      location: 'Kochi',
      avatar: 'https://ui-avatars.com/api/?name=Aravind+Menon&background=0d9488&color=fff&size=100'
    }
  ];

  // Statistics data
  const stats = [
    { icon: Users, number: '51', label: 'Total Units', color: '#0d9488' },
    { icon: Heart, number: '100%', label: 'Satisfaction', color: '#f97316' },
    { icon: Shield, number: '24/7', label: 'Care Support', color: '#8b5cf6' },
    { icon: MapPin, number: '1', label: 'Prime Location', color: '#06b6d4' }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        prevTestimonial();
      } else if (e.key === 'ArrowRight') {
        nextTestimonial();
      } else if (e.key === ' ') {
        e.preventDefault();
        setAutoPlay(!autoPlay);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [autoPlay]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setAutoPlay(false);
    // Scroll to carousel smoothly
    const carousel = document.querySelector('.wings-testimonial-carousel');
    if (carousel) {
      carousel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Get current testimonial data safely
  const currentTestimonialData = testimonials[currentTestimonial] || testimonials[0];

  return (
    <div className="wings-testimonials-page">
      <Header />
      
      {/* Content Section Below Header */}
      <div className="wings-below-banner">
        <div className="wings-below-banner-content animate-on-scroll">
          <h1 className="wings-below-banner-title">Testimonials</h1>
          <p className="wings-below-banner-description">
            Even before <span className="wings-highlight">WINGS Senior Living Homes</span> has opened its doors, the response from those who have come to book their future residences has been overwhelmingly positive. Here's what some of our future residents and their families have to say about their experience with WINGS.
          </p>
        </div>
      </div>

      {/* Testimonials Content */}
      <div className="wings-testimonials-content">
        {/* Main Testimonial Carousel */}
        <section className="wings-testimonial-carousel animate-on-scroll">
          <div className="wings-carousel-container">
            {/* Progress Bar */}
            <div className="wings-carousel-progress" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #0d9488, #f97316)',
              animation: autoPlay ? 'progressBar 5s linear infinite' : 'none',
              zIndex: 1,
              width: '100%'
            }}></div>
            
            <div className="wings-testimonial-card">
              <div className="wings-quote-icon">
                <Quote size={40} />
              </div>
              
              <div className="wings-testimonial-content">
                <div className="wings-rating">
                  {[...Array(currentTestimonialData.rating || 5)].map((_, i) => (
                    <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                
                <p className="wings-testimonial-text">
                  "{currentTestimonialData.content || 'Loading testimonial...'}"
                </p>
                
                <div className="wings-testimonial-author">
                  <div className="wings-author-avatar">
                    <img 
                      src={currentTestimonialData.avatar || 'https://ui-avatars.com/api/?name=User&background=0d9488&color=fff'} 
                      alt={currentTestimonialData.name || 'User'}
                      onError={(e) => {
                        e.target.src = 'https://ui-avatars.com/api/?name=User&background=0d9488&color=fff';
                      }}
                    />
                  </div>
                  <div className="wings-author-info">
                    <h3 className="wings-author-name">{currentTestimonialData.name || 'Loading...'}</h3>
                    <p className="wings-author-role">{currentTestimonialData.role || 'Resident'}</p>
                    <p className="wings-author-location">{currentTestimonialData.location || 'Kochi'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="wings-carousel-navigation">
              <button 
                className="wings-nav-button wings-prev" 
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                type="button"
              >
                <ChevronLeft size={16} />
              </button>
              
              <div className="wings-carousel-controls">
                <button
                  className={`wings-play-pause-btn ${autoPlay ? 'playing' : 'paused'}`}
                  onClick={() => setAutoPlay(!autoPlay)}
                  aria-label={autoPlay ? 'Pause auto-play' : 'Resume auto-play'}
                  type="button"
                >
                  {autoPlay ? '⏸️' : '▶️'}
                </button>
              </div>
              
              <button 
                className="wings-nav-button wings-next" 
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                type="button"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Indicators */}
            <div className="wings-carousel-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`wings-indicator ${index === currentTestimonial ? 'wings-active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Instructions */}
            <div className="wings-carousel-instructions">
              <p>Use arrow keys to navigate • Space to pause/play</p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="wings-stats-section animate-on-scroll">
          <div className="wings-stats-container">
            <h2 className="wings-stats-title">Why Families Choose WINGS</h2>
            <div className="wings-stats-grid">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="wings-stat-card">
                    <div className="wings-stat-icon" style={{ color: stat.color }}>
                      <IconComponent size={32} />
                    </div>
                    <div className="wings-stat-number" style={{ color: stat.color }}>
                      {stat.number}
                    </div>
                    <div className="wings-stat-label">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* All Testimonials Grid */}
        <section className="wings-all-testimonials-section">
          <div className="wings-section-header animate-on-scroll">
            <h2 className="wings-section-title">What Our Future Residents Say</h2>
            <div className="wings-section-divider"></div>
            <p className="wings-section-description">
              Read more testimonials from families who have chosen WINGS as their preferred senior living community
            </p>
          </div>

          <div className="wings-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`wings-testimonial-grid-item animate-on-scroll ${index === currentTestimonial ? 'wings-featured' : ''}`}
              >
                <div className="wings-grid-testimonial-card">
                  <div className="wings-grid-quote-icon">
                    <Quote size={24} />
                  </div>
                  
                  <div className="wings-grid-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  
                  <p className="wings-grid-testimonial-text">
                    "{testimonial.content.substring(0, 150)}..."
                  </p>
                  
                  <div className="wings-grid-author">
                    <div className="wings-grid-author-avatar">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=0d9488&color=fff`;
                        }}
                      />
                    </div>
                    <div className="wings-grid-author-info">
                      <h4 className="wings-grid-author-name">{testimonial.name}</h4>
                      <p className="wings-grid-author-role">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <button 
                    className="wings-read-more-btn"
                    onClick={() => goToTestimonial(index)}
                    type="button"
                  >
                    Read Full Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="wings-testimonials-cta-section animate-on-scroll">
          <div className="wings-cta-card">
            <h2 className="wings-cta-title">Join Our Caring Community</h2>
            <p className="wings-cta-description">
              Experience the warmth and care that our future residents are already talking about. 
              Contact us to learn more about life at Wings Senior Living.
            </p>
            <div className="wings-cta-buttons">
              <button className="wings-btn-primary" type="button">
                <User size={16} />
                <span>Schedule Visit</span>
              </button>
              <button className="wings-btn-secondary" type="button">
                <Download size={16} />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TestimonialsPage;