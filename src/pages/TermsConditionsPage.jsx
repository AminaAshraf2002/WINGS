import React, { useEffect } from 'react';
import { 
  FileText,
  Home,
  DollarSign,
  Users,
  Shield,
  AlertTriangle,
  Scale,
  Clock
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './TermsConditionsPage.css';

const TermsConditionsPage = () => {
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

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        'By accessing and using the WINGS Senior Living website or services, you accept and agree to be bound by these Terms and Conditions.',
        'These terms apply to all visitors, users, and residents of WINGS Senior Living Homes.',
        'If you do not agree to these terms, please do not use our website or services.',
        'We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of any changes.'
      ]
    },
    {
      id: 'services',
      title: 'Services and Residences',
      icon: Home,
      content: [
        'WINGS Senior Living Homes provides senior living accommodations in 1 BHK and 2 BHK apartments.',
        'Our services include housing, dining, healthcare support, recreational activities, and other amenities as described.',
        'Services are subject to availability and may vary based on the specific residence and care plan.',
        'We reserve the right to modify services and amenities with appropriate notice to residents.',
        'All residences are subject to our community guidelines and house rules.'
      ]
    },
    {
      id: 'eligibility',
      title: 'Eligibility and Admission',
      icon: Users,
      content: [
        'Residents must be 55 years of age or older as of January 2026, or part of a couple where at least one person meets this requirement.',
        'All applicants must complete our application process and meet our admission criteria.',
        'We reserve the right to decline applications based on our admission policies.',
        'Residents must comply with all community rules and regulations.',
        'Health assessments may be required for admission and ongoing residency.'
      ]
    },
    {
      id: 'financial',
      title: 'Financial Terms and Payments',
      icon: DollarSign,
      content: [
        'The agreement operates on a leave and license basis, not a sale of property.',
        'An advance payment is required upon signing the agreement, with balance payments on an installment basis.',
        'Monthly fees cover accommodation, services, and amenities as specified in your agreement.',
        'In the event of a resident\'s demise, 80% of the invested amount will be refunded to the specified nominee.',
        'All payments are subject to applicable taxes and fees.',
        'Late payment charges may apply for overdue amounts.',
        'Fee adjustments may occur annually with appropriate notice.'
      ]
    },
    {
      id: 'responsibilities',
      title: 'Resident Responsibilities',
      icon: Shield,
      content: [
        'Residents must comply with all community rules, regulations, and policies.',
        'Respect for other residents, staff, and property is required at all times.',
        'Residents are responsible for maintaining their personal health and well-being.',
        'Any damages to property beyond normal wear and tear may result in charges.',
        'Residents must provide accurate health and emergency contact information.',
        'Participation in community activities, while encouraged, is voluntary.',
        'Residents must inform management of any changes in health status or care needs.'
      ]
    },
    {
      id: 'termination',
      title: 'Termination and Refund Policy',
      icon: AlertTriangle,
      content: [
        'Either party may terminate the agreement with appropriate notice as specified in the contract.',
        'WINGS reserves the right to terminate residency for violation of community rules or non-payment.',
        'Upon termination, refunds will be calculated according to the terms of your specific agreement.',
        'Residents or their representatives must provide written notice for voluntary termination.',
        'In case of involuntary termination due to health needs, we will work with families to ensure smooth transitions.',
        'Security deposits and advance payments are subject to deductions for any outstanding amounts.'
      ]
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: Scale,
      content: [
        'WINGS Senior Living provides services with reasonable care but cannot guarantee specific health outcomes.',
        'We are not liable for personal property loss, theft, or damage unless due to our negligence.',
        'Residents participate in activities at their own risk, though we maintain appropriate safety measures.',
        'Our liability is limited to the extent permitted by applicable law.',
        'We maintain appropriate insurance coverage for our operations.',
        'Residents are encouraged to maintain personal health and property insurance.',
        'Emergency medical situations will be handled according to established protocols.'
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy and Confidentiality',
      icon: Shield,
      content: [
        'We are committed to protecting resident privacy and personal information.',
        'Health information is handled in accordance with applicable privacy laws and regulations.',
        'Personal information is used only for providing services and meeting legal requirements.',
        'We do not share personal information with third parties except as necessary for care or legal compliance.',
        'Residents have rights regarding access to and correction of their personal information.',
        'Please refer to our Privacy Policy for detailed information about data handling.'
      ]
    }
  ];

  return (
    <div className="wings-terms-page">
      <Header />
      
      {/* Header Section */}
      <div className="wings-terms-banner">
        <div className="wings-terms-banner-content animate-on-scroll">
          <div className="wings-terms-banner-icon">
            <FileText size={48} />
          </div>
          <h1 className="wings-terms-banner-title">Terms & Conditions</h1>
          <p className="wings-terms-banner-description">
            These terms and conditions govern your use of <span className="wings-terms-highlight">WINGS Senior Living Homes</span> services and facilities. Please read them carefully before proceeding.
          </p>
          <div className="wings-terms-last-updated">
            <Clock size={16} />
            <span>Last updated: January 2025</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="wings-terms-content">
        {/* Introduction */}
        <section className="wings-terms-intro animate-on-scroll">
          <div className="wings-terms-intro-card">
            <h2>About These Terms</h2>
            <p>
              Welcome to WINGS Senior Living Homes, an initiative of Perpetual Succour Mission Trust, managed by the Sisters of the Congregation of Teresian Carmelites (CTC). These Terms and Conditions outline the legal framework governing our relationship with residents, their families, and website users.
            </p>
            <p>
              Our community is built on principles of care, respect, and dignity. These terms help ensure a harmonious living environment while protecting the rights and interests of all community members.
            </p>
          </div>
        </section>

        {/* Main Sections */}
        <div className="wings-terms-sections">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <section 
                key={section.id} 
                className="wings-terms-section animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="wings-terms-section-header">
                  <div className="wings-terms-section-icon">
                    <IconComponent size={24} />
                  </div>
                  <h2 className="wings-terms-section-title">{section.title}</h2>
                </div>
                <div className="wings-terms-section-content">
                  <ul className="wings-terms-content-list">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="wings-terms-content-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>

        {/* Governing Law Section */}
        <section className="wings-terms-law animate-on-scroll">
          <div className="wings-law-card">
            <div className="wings-law-header">
              <Scale size={32} />
              <h2>Governing Law and Jurisdiction</h2>
            </div>
            <div className="wings-law-content">
              <p>
                These Terms and Conditions are governed by the laws of India and the state of Kerala. Any disputes arising from these terms or your residency at WINGS Senior Living will be subject to the jurisdiction of the courts in Kochi, Kerala.
              </p>
              <p>
                We encourage residents and their families to communicate with our management team to resolve any concerns before pursuing legal remedies.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="wings-terms-contact animate-on-scroll">
          <div className="wings-terms-contact-card">
            <h2>Questions About These Terms</h2>
            <p>
              If you have any questions about these Terms and Conditions or need clarification on any aspect of our services, please don't hesitate to contact us.
            </p>
            <div className="wings-terms-contact-info">
              <div className="wings-terms-contact-item">
                <strong>Phone:</strong> +91 85909 43300
              </div>
              <div className="wings-terms-contact-item">
                <strong>Email:</strong> info@wingsliving.in
              </div>
              <div className="wings-terms-contact-item">
                <strong>Address:</strong> PS Mission Hospital, Maradu, Kochi, Kerala
              </div>
            </div>
          </div>
        </section>

        {/* Agreement Section */}
        <section className="wings-terms-agreement animate-on-scroll">
          <div className="wings-agreement-card">
            <div className="wings-agreement-icon">
              <FileText size={32} />
            </div>
            <h2>Your Agreement</h2>
            <p>
              By using our website, visiting our facilities, or entering into a residency agreement with WINGS Senior Living Homes, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
            <p>
              These terms work in conjunction with your specific residency agreement and our community guidelines to create a comprehensive framework for our relationship.
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsConditionsPage;