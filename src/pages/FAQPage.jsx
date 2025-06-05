import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Search,
  Home,
  Users,
  Heart,
  Shield,
  Phone,
  Download,
  MessageCircle,
  User,
  Calendar,
  DollarSign,
  Building,
  Stethoscope,
  MapPin
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './FAQPage.css';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState(null);

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

  // Handle keyboard navigation for FAQ items
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        setOpenFAQ(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // FAQ Categories
  const categories = [
    { id: 'all', name: 'All FAQs', icon: Search },
    { id: 'general', name: 'General Info', icon: Home },
    { id: 'residences', name: 'Residences', icon: Building },
    { id: 'booking', name: 'Booking & Payment', icon: DollarSign },
    { id: 'amenities', name: 'Amenities', icon: Heart },
    { id: 'care', name: 'Healthcare', icon: Stethoscope },
    { id: 'contact', name: 'Contact', icon: Phone }
  ];

  // FAQ Data
  const faqData = [
    {
      id: 1,
      category: 'general',
      question: 'What is WINGS Senior Living Homes?',
      answer: 'WINGS Senior Living Homes is a premier senior living or retirement community in Kochi designed to offer comfort, care, and an enriching lifestyle for seniors. We provide a range of residences, modern amenities, and comprehensive services tailored to meet the needs of our residents.'
    },
    {
      id: 2,
      category: 'residences',
      question: 'What types of residences are available at WINGS?',
      answer: 'WINGS offers 1 BHK & 2 BHK apartment living options. Each residence is designed with comfort, safety, and style in mind, providing the ideal environment for independent living with access to supportive services.'
    },
    {
      id: 3,
      category: 'booking',
      question: 'Who is eligible to book at WINGS?',
      answer: 'WINGS Senior Living Homes is open to individuals or couples where at least one person is 55 years of age or older as of January 2026.'
    },
    {
      id: 4,
      category: 'booking',
      question: 'Sale or Lease?',
      answer: 'The agreement operates on a leave and license basis, ensuring that, in the event of the resident\'s or both residents\' demise, 80% of the invested amount will be refunded to the nominee (children) specified by the buyer in the agreement.'
    },
    {
      id: 5,
      category: 'booking',
      question: 'What are the payment terms for booking a residence at WINGS?',
      answer: 'The payment terms include an advance payment upon signing the sale agreement. The balance payment is on an installment basis.'
    },
    {
      id: 6,
      category: 'amenities',
      question: 'What amenities does WINGS provide?',
      answer: 'Our amenities include fitness centers, wellness programs, gourmet dining, recreational spaces, and 24/7 healthcare services. We aim to offer a well-rounded lifestyle that promotes physical, emotional, and social well-being.'
    },
    {
      id: 7,
      category: 'care',
      question: 'How does WINGS ensure the quality of care for its residents?',
      answer: 'WINGS employs a team of experienced healthcare professionals and caregivers who provide personalized care tailored to each resident\'s needs. We also have a Medical Director overseeing healthcare services and implementing best practices in senior care.'
    },
    {
      id: 8,
      category: 'amenities',
      question: 'Are there any activities or events for residents?',
      answer: 'Yes, WINGS hosts a variety of activities and events designed to engage and enrich the lives of our residents. These include social gatherings, fitness classes, cultural events, and more. Our community life is vibrant and encourages active participation.'
    },
    {
      id: 9,
      category: 'contact',
      question: 'Can I schedule a visit before making a decision?',
      answer: 'Yes, we encourage prospective residents and their families to visit the WINGS administrative office at PS Mission Hospital to meet our team and experience our community firsthand. You can schedule a visit by contacting us through our website or calling our office mobile number at +91 85909 43300.'
    },
    {
      id: 10,
      category: 'contact',
      question: 'How can I apply to live at WINGS?',
      answer: 'You can apply by contacting us through our website or by phone. Our team will guide you through the application process, provide you with detailed information, and assist you in selecting the best residence for your needs.'
    },
    {
      id: 11,
      category: 'general',
      question: 'Are there any ongoing construction updates or expected completion dates?',
      answer: 'We will provide regular updates on the construction progress and estimated completion dates. Construction is underway, and we anticipate that WINGS will be fully operational by October 2025.'
    },
    {
      id: 12,
      category: 'booking',
      question: 'What is the cost of living at WINGS?',
      answer: 'The monthly cost varies depending on the type of residence and the level of care required. Please contact us for detailed pricing information and to discuss your specific needs.'
    },
    {
      id: 13,
      category: 'general',
      question: 'Can I bring my pet with me to WINGS?',
      answer: 'We understand that pets are an important part of many people\'s lives. However, to ensure the comfort and well-being of all residents, we have a policy that currently does not allow pets on the premises.'
    },
    {
      id: 14,
      category: 'contact',
      question: 'How can I contact WINGS for more information?',
      answer: 'You can reach us through our website\'s contact form, by phone, or via email. Our team is available to answer your questions, provide additional information, and assist you with any inquiries.'
    },
    {
      id: 15,
      category: 'general',
      question: 'Management',
      answer: 'WINGS is an initiative of Perpetual Succour Mission Trust, established in 1961. It is a charitable institution managed by the Sisters of the Congregation of Teresian Carmelites (CTC).'
    }
  ];

  // Filter FAQs based on search and category
  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setOpenFAQ(null); // Close any open FAQ when clearing
  };

  // Handle contact actions
  const handleCall = () => {
    window.location.href = 'tel:+918590943300';
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi! I have a question about WINGS Senior Living.');
    window.open(`https://wa.me/918590943300?text=${message}`, '_blank');
  };

  const handleVisit = () => {
    // You can replace this with your actual booking system URL
    window.open('https://maps.google.com/?q=PS+Mission+Hospital+Kochi', '_blank');
  };

  // URL parameters for deep linking to specific FAQ
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const faqId = urlParams.get('faq');
    if (faqId) {
      const faqIdNumber = parseInt(faqId, 10);
      if (faqData.find(faq => faq.id === faqIdNumber)) {
        setOpenFAQ(faqIdNumber);
        // Scroll to the FAQ item after a short delay
        setTimeout(() => {
          const faqElement = document.querySelector(`[data-faq-id="${faqIdNumber}"]`);
          if (faqElement) {
            faqElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
      }
    }
  }, []);

  return (
    <div className="wings-faq-page">
      <Header />
      
      {/* Content Section Below Header */}
      <div className="wings-faq-banner">
        <div className="wings-faq-banner-content animate-on-scroll">
          <h1 className="wings-faq-banner-title">Frequently Asked Questions</h1>
          <p className="wings-faq-banner-description">
            Find answers to common questions about <span className="wings-faq-highlight">WINGS Senior Living Homes</span>. 
            If you can't find what you're looking for, feel free to contact us directly.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="wings-faq-content">
        {/* Search and Filter Section */}
        <div className="wings-faq-search-section animate-on-scroll">
          <div className="wings-search-container">
            <div className="wings-search-input-wrapper">
              <Search size={20} className="wings-search-icon" />
              <input
                type="text"
                placeholder="Search for questions or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="wings-search-input"
                aria-label="Search FAQs"
              />
              {searchTerm && (
                <button 
                  onClick={clearSearch} 
                  className="wings-clear-search"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="wings-category-filter">
            <div className="wings-filter-container">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`wings-filter-button ${selectedCategory === category.id ? 'wings-active' : ''}`}
                    aria-pressed={selectedCategory === category.id}
                  >
                    <IconComponent size={16} />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* FAQ Results Info */}
        <div className="wings-faq-results-info animate-on-scroll">
          <p className="wings-results-text">
            {searchTerm || selectedCategory !== 'all' ? (
              <>Showing {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''}</>
            ) : (
              <>Showing all {filteredFAQs.length} frequently asked questions</>
            )}
          </p>
          {(searchTerm || selectedCategory !== 'all') && (
            <button onClick={clearSearch} className="wings-clear-all-filters">
              Clear all filters
            </button>
          )}
        </div>

        {/* FAQ List */}
        <div className="wings-faq-list">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div 
                key={faq.id} 
                className="wings-faq-item animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-faq-id={faq.id}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="wings-faq-question"
                  aria-expanded={openFAQ === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="wings-question-text">{faq.question}</span>
                  <div className="wings-question-icon">
                    {openFAQ === faq.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                </button>
                
                <div 
                  id={`faq-answer-${faq.id}`}
                  className={`wings-faq-answer ${openFAQ === faq.id ? 'wings-open' : ''}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                >
                  <div className="wings-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="wings-no-results animate-on-scroll">
              <div className="wings-no-results-content">
                <Search size={48} className="wings-no-results-icon" />
                <h3>No results found</h3>
                <p>Try adjusting your search terms or browse all categories.</p>
                <button onClick={clearSearch} className="wings-clear-filters-btn">
                  Clear filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Quick Contact Section */}
        <div className="wings-quick-contact-section animate-on-scroll">
          <div className="wings-quick-contact-card">
            <h2 className="wings-contact-title">Still have questions?</h2>
            <p className="wings-contact-description">
              Our team is here to help you with any additional questions about WINGS Senior Living.
            </p>
            <div className="wings-contact-methods">
              <button 
                className="wings-contact-method"
                onClick={handleCall}
                aria-label="Call us"
              >
                <div className="wings-contact-icon">
                  <Phone size={24} />
                </div>
                <div className="wings-contact-info">
                  <h4>Call Us</h4>
                  <p>+91 85909 43300</p>
                </div>
              </button>
              <button 
                className="wings-contact-method"
                onClick={handleWhatsApp}
                aria-label="Chat on WhatsApp"
              >
                <div className="wings-contact-icon">
                  <MessageCircle size={24} />
                </div>
                <div className="wings-contact-info">
                  <h4>WhatsApp</h4>
                  <p>Chat with us</p>
                </div>
              </button>
              <button 
                className="wings-contact-method"
                onClick={handleVisit}
                aria-label="Visit us"
              >
                <div className="wings-contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="wings-contact-info">
                  <h4>Visit Us</h4>
                  <p>PS Mission Hospital, Kochi</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="wings-faq-cta-section animate-on-scroll">
          <div className="wings-faq-cta-card">
            <h2 className="wings-faq-cta-title">Ready to Learn More?</h2>
            <p className="wings-faq-cta-description">
              Schedule a visit to experience WINGS Senior Living firsthand or download our detailed brochure.
            </p>
            <div className="wings-faq-cta-buttons">
              <button className="wings-faq-btn-primary" type="button">
                <Calendar size={16} />
                <span>Schedule Visit</span>
              </button>
              <button className="wings-faq-btn-secondary" type="button">
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

export default FAQPage;