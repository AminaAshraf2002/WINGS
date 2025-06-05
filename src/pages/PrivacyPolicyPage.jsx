import React, { useEffect } from 'react';
import { 
  Shield,
  Eye,
  Lock,
  UserCheck,
  Mail,
  Phone,
  Calendar,
  FileText
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
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
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Eye,
      content: [
        'Personal Information: We collect personal information such as your name, email address, phone number, date of birth, and address when you inquire about or book our services.',
        'Health Information: For residents, we may collect relevant health and medical information to provide appropriate care and services.',
        'Financial Information: Payment details and financial information necessary for booking and ongoing services.',
        'Communication Records: Records of your communications with us, including emails, phone calls, and in-person meetings.',
        'Website Usage: Information about how you use our website, including IP address, browser type, and pages visited.'
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: UserCheck,
      content: [
        'To provide and improve our senior living services and facilities.',
        'To process bookings, payments, and manage resident accounts.',
        'To communicate with you about our services, updates, and important information.',
        'To ensure the health, safety, and well-being of our residents.',
        'To comply with legal and regulatory requirements.',
        'To conduct internal business operations and improve our services.',
        'To send you marketing communications (with your consent).'
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Shield,
      content: [
        'Healthcare Providers: We may share health information with healthcare professionals involved in your care.',
        'Emergency Contacts: Information may be shared with your designated emergency contacts when necessary.',
        'Legal Compliance: We may disclose information when required by law or to protect our rights and safety.',
        'Service Providers: We may share information with trusted third-party service providers who assist in our operations.',
        'Business Transfers: In the event of a merger or acquisition, your information may be transferred to the new entity.',
        'We do not sell, rent, or trade your personal information to third parties for marketing purposes.'
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: [
        'We implement appropriate technical and organizational security measures to protect your personal information.',
        'Our staff is trained on privacy and data protection practices.',
        'We use encryption and secure systems to protect sensitive information.',
        'Access to personal information is restricted to authorized personnel only.',
        'We regularly review and update our security practices.',
        'While we strive to protect your information, no method of transmission over the internet is 100% secure.'
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: FileText,
      content: [
        'Access: You have the right to access the personal information we hold about you.',
        'Correction: You can request correction of inaccurate or incomplete information.',
        'Deletion: You may request deletion of your personal information, subject to legal requirements.',
        'Portability: You can request a copy of your data in a commonly used format.',
        'Withdrawal of Consent: You can withdraw consent for marketing communications at any time.',
        'Complaints: You have the right to lodge a complaint with relevant data protection authorities.'
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies and Website Technologies',
      icon: Eye,
      content: [
        'Our website uses cookies to improve your browsing experience and analyze website usage.',
        'Essential cookies are necessary for the website to function properly.',
        'Analytics cookies help us understand how visitors interact with our website.',
        'Marketing cookies may be used to provide you with relevant advertisements.',
        'You can control cookie settings through your browser preferences.',
        'Disabling certain cookies may affect website functionality.'
      ]
    },
    {
      id: 'retention',
      title: 'Data Retention',
      icon: Calendar,
      content: [
        'We retain personal information for as long as necessary to provide our services.',
        'Resident information may be retained for the duration of residency and a reasonable period thereafter.',
        'Health records are retained in accordance with applicable healthcare regulations.',
        'Marketing information is retained until you withdraw consent.',
        'Some information may be retained longer if required by law.',
        'We regularly review and delete information that is no longer necessary.'
      ]
    }
  ];

  return (
    <div className="wings-privacy-page">
      <Header />
      
      {/* Header Section */}
      <div className="wings-privacy-banner">
        <div className="wings-privacy-banner-content animate-on-scroll">
          <div className="wings-banner-icon">
            <Shield size={48} />
          </div>
          <h1 className="wings-privacy-banner-title">Privacy Policy</h1>
          <p className="wings-privacy-banner-description">
            At <span className="wings-privacy-highlight">WINGS Senior Living Homes</span>, we are committed to protecting your privacy and personal information. This policy explains how we collect, use, and safeguard your data.
          </p>
          <div className="wings-last-updated">
            <p>Last updated: January 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="wings-privacy-content">
        {/* Introduction */}
        <section className="wings-privacy-intro animate-on-scroll">
          <div className="wings-intro-card">
            <h2>Our Commitment to Privacy</h2>
            <p>
              WINGS Senior Living Homes, an initiative of Perpetual Succour Mission Trust, is committed to maintaining the highest standards of privacy protection. We understand the sensitive nature of personal and health information and have implemented comprehensive measures to ensure your data is handled with care and respect.
            </p>
            <p>
              This Privacy Policy applies to all information collected through our website, during visits to our facilities, through phone communications, and in the course of providing our senior living services.
            </p>
          </div>
        </section>

        {/* Main Sections */}
        <div className="wings-privacy-sections">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <section 
                key={section.id} 
                className="wings-privacy-section animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="wings-section-header">
                  <div className="wings-section-icon">
                    <IconComponent size={24} />
                  </div>
                  <h2 className="wings-section-title">{section.title}</h2>
                </div>
                <div className="wings-section-content">
                  <ul className="wings-content-list">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="wings-content-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>

        {/* Contact Section */}
        <section className="wings-privacy-contact animate-on-scroll">
          <div className="wings-contact-card">
            <h2>Contact Us About Privacy</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
            </p>
            <div className="wings-contact-methods">
              <div className="wings-contact-method">
                <Phone size={20} />
                <span>+91 85909 43300</span>
              </div>
              <div className="wings-contact-method">
                <Mail size={20} />
                <span>info@wingsliving.in</span>
              </div>
              <div className="wings-contact-method">
                <Shield size={20} />
                <span>Privacy Officer, WINGS Senior Living</span>
              </div>
            </div>
          </div>
        </section>

        {/* Updates Section */}
        <section className="wings-privacy-updates animate-on-scroll">
          <div className="wings-updates-card">
            <h2>Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
            <p>
              Your continued use of our services after any modifications indicates your acceptance of the updated Privacy Policy.
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;