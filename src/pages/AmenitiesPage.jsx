import React, { useState, useEffect } from 'react';
import {
  Users,
  Dumbbell,
  Book,
  Coffee,
  Utensils,
  Car,
  Shield,
  Wifi,
  Tv,
  Activity,
  TreePine,
  Heart,
  Camera,
  Music,
  Gamepad2,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AmenitiesPage.css';

// Import images
import recreationImage from '../assets/social.png';
import diningImage from '../assets/services.jpg';

const AmenitiesPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  // Common Facilities data
  const commonFacilities = [
    'Business meeting room',
    'Salon',
    'Yoga',
    'Open gym',
    'Fitness centre',
    'Physiotherapy centre',
    'Library',
    'Wheel chair accessible passages',
    'Laundry & Dedicated Covered parking for owner\'s vehicles'
  ];

  // Detailed amenities with icons
  const amenityCategories = [
    {
      title: "Health & Wellness",
      icon: Heart,
      color: "#0d9488",
      amenities: [
        { icon: Dumbbell, name: "Fitness Centre" },
        { icon: Activity, name: "Yoga Classes" },
        { icon: Heart, name: "Physiotherapy Centre" },
        { icon: Shield, name: "24/7 Medical Support" }
      ]
    },
    {
      title: "Recreation & Entertainment",
      icon: Gamepad2,
      color: "#f97316",
      amenities: [
        { icon: Book, name: "Library" },
        { icon: Tv, name: "Recreation Hall" },
        { icon: Music, name: "Entertainment Center" },
        { icon: Camera, name: "Photography Studio" }
      ]
    },
    {
      title: "Dining & Social",
      icon: Utensils,
      color: "#8b5cf6",
      amenities: [
        { icon: Utensils, name: "Common Dining Hall" },
        { icon: Coffee, name: "Party Hall" },
        { icon: Users, name: "Social Gathering Areas" },
        { icon: TreePine, name: "Garden Spaces" }
      ]
    },
    {
      title: "Services & Convenience",
      icon: Car,
      color: "#06b6d4",
      amenities: [
        { icon: Car, name: "Covered Parking" },
        { icon: Users, name: "Business Meeting Room" },
        { icon: Activity, name: "Salon Services" },
        { icon: Wifi, name: "High-Speed Internet" }
      ]
    }
  ];

  return (
    <div className="amenities-page">
      <Header />

      {/* Content Section */}
      <div className="amenities-content">
        <div className="amenities-header animate-on-scroll">
          <h1 className="amenities-title">Amenities</h1>
        </div>

        {/* Common Facilities Section */}
        <section className="common-facilities-section animate-on-scroll">
          <div className="container">
            <h2 className="section-title">Common Facilities</h2>
            <p className="facilities-description">
              Business meeting room, Salon, Yoga, Open gym, Fitness centre, Physiotherapy centre, Library,
              Wheel chair accessible passages, Laundry & Dedicated Covered parking for owner's vehicles.
            </p>

            <div className="retirement-description">
              <p>Retirement living community in Kerala with 1 & 2 BHK senior homes in Kochi, offering comfort, security, and assisted care.</p>
            </div>
          </div>
        </section>

        {/* Detailed Amenities Grid */}
        <section className="detailed-amenities-section">
          <div className="container">
            <div className="amenities-grid">
              {amenityCategories.map((category, index) => {
                const CategoryIcon = category.icon;
                return (
                  <div
                    key={index}
                    className="amenity-category animate-on-scroll"
                    style={{ '--category-color': category.color }}
                  >
                    <div className="category-header">
                      <CategoryIcon size={32} style={{ color: category.color }} />
                      <h3>{category.title}</h3>
                    </div>
                    <div className="category-amenities">
                      {category.amenities.map((amenity, amenityIndex) => {
                        const AmenityIcon = amenity.icon;
                        return (
                          <div key={amenityIndex} className="amenity-item">
                            <AmenityIcon size={20} />
                            <span>{amenity.name}</span>
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

        {/* Recreation Hall Section */}
        <section className="recreation-section">
          <div className="container">
            <div className="recreation-content">
              <div className="recreation-text animate-on-scroll">
                <h2 className="section-title">Recreation Hall</h2>
                <p className="recreation-description">
                  Thoughtfully designed recreation facilities offer a perfect blend of relaxation, a cozy spot for
                  residents to gather for chess, carroms, board games, painting, knitting & equipped to support a
                  wide range of hobbies, giving residents the opportunity to continue or discover new passions.
                </p>
              </div>

              <div className="recreation-image animate-on-scroll">
                <img
                  src={recreationImage || "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"}
                  alt="Recreation Hall"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dining Hall Section */}
        <section className="dining-section">
          <div className="container">
            <div className="dining-content">
              <div className="dining-image animate-on-scroll">
                <img
                  src={diningImage || "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop"}
                  alt="Common Dining Hall"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop";
                  }}
                />
              </div>

              <div className="dining-text animate-on-scroll">
                <h2 className="section-title">Common Dining Hall & Party Hall</h2>
                <p className="dining-description">
                  Multi-cuisine Kitchen with Veg and Non-Veg options, Three sumptuous meals with tea time snacks and refreshments.
                  Our dietician will periodically review the menu to ensure a well-balanced selection of meals. Party Hall is the
                  perfect venue for celebrating special occasions and creating cherished memories. Residents can host family gatherings,
                  birthdays & anniversaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="amenities-cta-section">
          <div className="container">
            <div className="amenities-cta-content animate-on-scroll">
              <h2 className="amenities-cta-title">Explore Our Caring Community</h2>
              <p className="amenities-cta-description">Contact Us for Personalized Information.</p>

              <div className="cta-bot-container">
                <a href="tel:+918590943300" className="cta-bot">
                  Contact Us
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

export default AmenitiesPage;