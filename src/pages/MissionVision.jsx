import React, { useEffect } from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Shield, 
  Star,
  Award,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Lightbulb,
  Compass,
  HandHeart
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './MissionVision.css';

// Import your images here - replace with actual paths
import bannerImage from '../assets/garden.png';
import missionImage from '../assets/Mission.jpeg';
import visionImage from '../assets/Vission.jpeg';
import valuesImage from '../assets/services.jpg';

const MissionVision = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  // Core values data
  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every interaction with genuine care, empathy, and understanding for our residents' unique needs and experiences."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in all aspects of senior living, from healthcare to hospitality and community engagement."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain transparency, honesty, and ethical practices in all our relationships and decision-making processes."
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster meaningful connections and create an inclusive environment where every resident feels valued and belongs."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously seek new ways to enhance the quality of life through innovative care approaches and modern amenities."
    },
    {
      icon: CheckCircle,
      title: "Respect",
      description: "We honor the dignity, independence, and individual preferences of every resident, family member, and team member."
    }
  ];

  // Impact areas
  const impactAreas = [
    {
      icon: Heart,
      title: "Healthcare Excellence",
      description: "Providing comprehensive, personalized healthcare services with 24/7 medical support",
      stats: "24/7 Medical Care"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Creating vibrant social connections and meaningful relationships among residents",
      stats: "500+ Families Served"
    },
    {
      icon: Star,
      title: "Quality Living",
      description: "Delivering premium living experiences with world-class amenities and services",
      stats: "100% Satisfaction"
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Ensuring a secure, comfortable environment with professional care and support",
      stats: "25+ Years Experience"
    }
  ];

  return (
    <div className="mission-vision-page">
      <Header />

      {/* Banner Section */}
      <section className="mv-banner">
        <div className="banner-image-container">
          <img 
            src={bannerImage || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&h=800&fit=crop"}
            alt="Mission & Vision"
            className="banner-image"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&h=800&fit=crop";
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
              <h1 className="banner-title">Mission & Vision</h1>
              <p className="banner-subtitle">
                Discover the guiding principles that drive our commitment to exceptional senior living 
                and our vision for the future of retirement communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div 
              className="mission-text"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="section-header">
                <Target className="section-icon" size={48} />
                <h2 className="section-title">Our Mission</h2>
                <div className="section-divider"></div>
              </div>
              
              <div className="mission-statement">
                <p className="lead-text">
                  At WINGS Senior Living Homes, our mission is to create a nurturing and vibrant community 
                  where seniors can live with dignity, comfort, and purpose.
                </p>
                
                <p>
                  We are committed to providing exceptional care, personalized services, and enriching 
                  experiences that enhance the quality of life for our residents. Through compassion, 
                  innovation, and respect, we strive to make every day at WINGS a fulfilling and joyful 
                  experience for our senior community.
                </p>
              </div>

              <div className="mission-pillars">
                <h3>Our Mission Pillars</h3>
                <div className="pillars-grid">
                  <div className="pillar-item">
                    <Heart className="pillar-icon" />
                    <span>Exceptional Care</span>
                  </div>
                  <div className="pillar-item">
                    <Users className="pillar-icon" />
                    <span>Vibrant Community</span>
                  </div>
                  <div className="pillar-item">
                    <Shield className="pillar-icon" />
                    <span>Dignity & Respect</span>
                  </div>
                  <div className="pillar-item">
                    <Star className="pillar-icon" />
                    <span>Quality of Life</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="mission-visual"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="mission-image">
                <img 
                  src={missionImage || "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=700&fit=crop"}
                  alt="Our Mission"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=700&fit=crop";
                  }}
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <Target size={48} />
                    <h3>Guiding Our Purpose</h3>
                    <p>Every decision we make is guided by our mission to serve seniors with excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="vision-section">
        <div className="container">
          <div className="vision-content">
            <div 
              className="vision-visual"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="vision-image">
                <img 
                  src={visionImage || "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&h=700&fit=crop"}
                  alt="Our Vision"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&h=700&fit=crop";
                  }}
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <Eye size={48} />
                    <h3>Envisioning the Future</h3>
                    <p>Leading the transformation of senior living in Kerala and beyond</p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="vision-text"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="section-header">
                <Eye className="section-icon" size={48} />
                <h2 className="section-title">Our Vision</h2>
                <div className="section-divider"></div>
              </div>
              
              <div className="vision-statement">
                <p className="lead-text">
                  Our vision is to be the leading senior living community in Kerala, known for setting 
                  new standards in care, comfort, and community life.
                </p>
                
                <p>
                  We envision WINGS as a place where every resident can thrive, supported by a dedicated 
                  team and surrounded by a warm, inclusive environment. We aim to continuously innovate 
                  and grow, ensuring that WINGS Senior Living Homes remains a beacon of excellence in 
                  senior care, promoting well-being, independence, and a life well-lived for every resident.
                </p>
              </div>

              <div className="vision-goals">
                <h3>Our Vision Goals</h3>
                <div className="goals-list">
                  <div className="goal-item">
                    <CheckCircle className="goal-icon" />
                    <span>Leading senior living community in Kerala</span>
                  </div>
                  <div className="goal-item">
                    <CheckCircle className="goal-icon" />
                    <span>Setting new standards in care and comfort</span>
                  </div>
                  <div className="goal-item">
                    <CheckCircle className="goal-icon" />
                    <span>Promoting independence and well-being</span>
                  </div>
                  <div className="goal-item">
                    <CheckCircle className="goal-icon" />
                    <span>Continuous innovation and growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="container">
          <div 
            className="values-header"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <HandHeart className="section-icon" size={48} />
            <h2 className="section-title white">Our Core Values</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle white">
              The fundamental principles that guide our actions and define our character
            </p>
          </div>

          <div className="values-grid">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="value-card"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={index * 100}
                >
                  <div className="value-icon">
                    <IconComponent size={36} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="impact-section">
        <div className="container">
          <div 
            className="impact-header"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="section-title">Making a Difference</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              How our mission and vision translate into real impact for our residents and community
            </p>
          </div>

          <div className="impact-grid">
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div 
                  key={index}
                  className="impact-card"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 150}
                >
                  <div className="impact-icon">
                    <IconComponent size={40} />
                  </div>
                  <div className="impact-content">
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                    <div className="impact-stat">{area.stats}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <div className="container">
          <div 
            className="journey-content"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Compass className="section-icon" size={48} />
            <h2 className="section-title">Our Journey Forward</h2>
            <div className="section-divider"></div>
            
            <div className="journey-text">
              <p className="lead-text">
                At WINGS Senior Living, we believe that retirement should be a celebration of life's 
                achievements and the beginning of new adventures. Our mission and vision guide us 
                in creating an environment where every day is meaningful, every moment is valued, 
                and every resident feels truly at home.
              </p>
              
              <p>
                As we continue to grow and evolve, we remain steadfast in our commitment to these 
                guiding principles. We invite you to be part of our journey towards redefining 
                senior living and creating a community where life continues to flourish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mv-cta-section">
        <div className="container">
          <div 
            className="cta-content"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="cta-title">Explore Our Caring Community</h2>
            <p className="cta-description">
              Contact Us for Personalized Information about how our mission and vision 
              create an exceptional living experience at Wings Senior Living.
            </p>
            
            <div className="cta-buttons">
              <button className="cta-button primary">
                Contact Us
                <ArrowRight size={20} />
              </button>
              <button className="cta-button secondary">
                Schedule a Visit
              </button>
            </div>

            <div className="contact-info">
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

export default MissionVision;