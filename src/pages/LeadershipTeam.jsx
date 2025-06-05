import React, { useEffect } from 'react';
import { 
  Download, 
  Phone, 
  Mail, 
  MapPin,
  Award,
  Heart,
  Users,
  Stethoscope,
  Building,
  ArrowRight,
  Star,
  Shield
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LeadershipTeam.css';

// Import your images here - replace with actual paths
import bannerImage from '../assets/ban.png';
import drAnnieSheelaImage from '../assets/hero3.jpeg';
import drKunjumonImage from '../assets/hero.png';
import vargheeseImage from '../assets/hero1.png';

const LeadershipTeam = () => {
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

  // Leadership team data
  const leadershipTeam = [
    {
      name: "Dr Sr Annie Sheela",
      position: "Director",
      image: drAnnieSheelaImage || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face",
      bio: "Dr Sr Annie Sheela brings decades of healthcare leadership and compassionate service to Wings Senior Living. Her vision of dignified aging and holistic care guides our community's mission.",
      qualifications: [
        "MBBS, MD in Geriatric Medicine",
        "25+ years in Healthcare Leadership",
        "Expert in Senior Care Management"
      ],
      specialties: ["Healthcare Leadership", "Senior Care", "Community Development"]
    },
    {
      name: "Dr Kunjumon Sebastian",
      position: "Medical Director",
      image: drKunjumonImage || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=face",
      bio: "Dr Kunjumon Sebastian oversees all medical services at Wings, ensuring the highest standards of healthcare delivery. His expertise in geriatric medicine ensures comprehensive care for our residents.",
      qualifications: [
        "MBBS, MD in Internal Medicine",
        "Fellowship in Geriatric Medicine",
        "20+ years in Clinical Practice"
      ],
      specialties: ["Geriatric Medicine", "Internal Medicine", "Preventive Care"]
    },
    {
      name: "Varghese Nettikadan",
      position: "Executive Director",
      image: vargheeseImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      bio: "Varghese Nettikadan leads the operational excellence at Wings Senior Living, ensuring seamless service delivery and resident satisfaction. His management expertise drives our commitment to quality.",
      qualifications: [
        "MBA in Healthcare Management",
        "15+ years in Senior Living Operations",
        "Certified Senior Living Professional"
      ],
      specialties: ["Operations Management", "Quality Assurance", "Resident Services"]
    }
  ];

  // Leadership principles
  const leadershipPrinciples = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every decision is made with genuine care and empathy for our residents' wellbeing."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in all aspects of senior living services."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building meaningful connections and fostering a sense of belonging for all residents."
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Maintaining transparency and ethical practices in all our interactions."
    }
  ];

  return (
    <div className="leadership-team-page">
      <Header />

      {/* Banner Section */}
      <section className="leadership-banner">
        <div className="banner-image-container">
          <img 
            src={bannerImage || "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=800&fit=crop"}
            alt="Leadership Team"
            className="banner-image"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=800&fit=crop";
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
              <h1 className="banner-title">Leadership Team</h1>
              <p className="banner-subtitle">
                Meet the dedicated professionals who guide Wings Senior Living with 
                experience, compassion, and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Introduction */}
      <section className="leadership-intro">
        <div className="container">
          <div 
            className="intro-content"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="section-title">Guiding Wings with Vision & Care</h2>
            <div className="section-divider"></div>
            <p className="intro-text">
              At WINGS Senior Living Homes, our leadership team is composed of dedicated professionals 
              who bring a wealth of experience, compassion, and vision to our community. Together, 
              they guide WINGS in fulfilling its mission to provide exceptional care and a vibrant 
              living environment for our residents.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Cards */}
      <section className="team-members">
        <div className="container">
          <div className="team-grid">
            {leadershipTeam.map((member, index) => (
              <div 
                key={index}
                className="team-member-card"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 200}
              >
                <div className="member-image">
                  <img 
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-155983973${index + 1}?w=400&h=500&fit=crop&crop=face`;
                    }}
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <Stethoscope size={32} />
                    </div>
                  </div>
                </div>
                
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  
                  <div className="member-bio">
                    <p>{member.bio}</p>
                  </div>
                  
                  <div className="qualifications">
                    <h4>Qualifications</h4>
                    <ul>
                      {member.qualifications.map((qualification, idx) => (
                        <li key={idx}>{qualification}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="specialties">
                    <h4>Specialties</h4>
                    <div className="specialty-tags">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="specialty-tag">{specialty}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="leadership-principles">
        <div className="container">
          <div 
            className="principles-header"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="section-title white">Our Leadership Principles</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle white">
              The core values that guide our leadership team in every decision and interaction
            </p>
          </div>

          <div className="principles-grid">
            {leadershipPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div 
                  key={index}
                  className="principle-card"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={index * 150}
                >
                  <div className="principle-icon">
                    <IconComponent size={40} />
                  </div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="awards-section">
        <div className="container">
          <div 
            className="awards-content"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="section-title">Awards & Recognition</h2>
            <div className="section-divider"></div>
            
            <div className="awards-grid">
              <div className="award-item">
                <Award className="award-icon" size={48} />
                <h3>Healthcare Excellence Award</h3>
                <p>Recognized for outstanding patient care and innovative healthcare delivery</p>
              </div>
              
              <div className="award-item">
                <Star className="award-icon" size={48} />
                <h3>Senior Living Leadership</h3>
                <p>Acknowledged for setting new standards in senior care and community living</p>
              </div>
              
              <div className="award-item">
                <Building className="award-icon" size={48} />
                <h3>NABH Accreditation</h3>
                <p>Certified for maintaining international healthcare quality standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Brochure Section */}
      <section className="brochure-section">
        <div className="container">
          <div 
            className="brochure-content"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="brochure-card">
              <div className="brochure-icon">
                <Download size={48} />
              </div>
              <div className="brochure-text">
                <h3>Download Our Leadership Brochure</h3>
                <p>Get detailed information about our leadership team, their expertise, and vision for Wings Senior Living.</p>
              </div>
              <button className="download-btn">
                <Download size={20} />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="leadership-cta">
        <div className="container">
          <div 
            className="cta-content"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="cta-titles">Explore Our Caring Community</h2>
            <p className="cta-descriptions">
              Contact Us for Personalized Information about Wings Senior Living and 
              discover how our leadership team ensures exceptional care for every resident.
            </p>
            
            <div className="cta-btn">
              <button className="cta-btn primary">
                Contact Us
                <ArrowRight size={20} />
              </button>
              <button className="cta-btn secondary">
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

export default LeadershipTeam;