import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

// Import your logo image
import logoImage from '../assets/Wings.png'; // Update path as needed

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isMobileAboutDropdownOpen, setIsMobileAboutDropdownOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleAboutDropdown = () => {
        setIsAboutDropdownOpen(!isAboutDropdownOpen);
    };

    const toggleMobileAboutDropdown = () => {
        setIsMobileAboutDropdownOpen(!isMobileAboutDropdownOpen);
    };

    // Helper function to check if link is active
    const isActive = (path) => {
        if (path === '/' || path === '#home') {
            return location.pathname === '/';
        }
        return location.pathname === path || location.pathname.startsWith(path);
    };

    // Helper function to check if About dropdown should be active
    const isAboutActive = () => {
        return ['/about', '/team', '/mission'].includes(location.pathname);
    };

    // Navigation handler for both routing and scrolling
    const handleNavClick = (e, targetId, isRoute = false) => {
        setIsMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsMobileAboutDropdownOpen(false);

        if (isRoute) {
            e.preventDefault();
            navigate(targetId);
        } else {
            e.preventDefault();
            if (location.pathname !== '/') {
                navigate('/', { replace: true });
                setTimeout(() => {
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, 100);
            } else {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        }
    };

    // Handle About Us page navigation with section scrolling
    const handleAboutNavClick = (e, sectionId) => {
        e.preventDefault();
        setIsMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsMobileAboutDropdownOpen(false);
        navigate('/about');
        if (sectionId) {
            setTimeout(() => {
                const targetElement = document.getElementById(sectionId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        }
    };

    // Navigation handlers
    const handleTeamNavClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsMobileAboutDropdownOpen(false);
        navigate('/team');
    };

    const handleMissionVisionNavClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsMobileAboutDropdownOpen(false);
        navigate('/mission');
    };

    const handleConnectNavClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsMobileAboutDropdownOpen(false);
        navigate('/connect');
    };

    const handleResidencesNavClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsMobileAboutDropdownOpen(false);
        navigate('/residences');
    };

    const handleAmenitiesNavClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsMobileAboutDropdownOpen(false);
        navigate('/amenities');
    };

    const handleServicesNavClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsMobileAboutDropdownOpen(false);
        navigate('/services');
    };

    const handleGalleryNavClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsMobileAboutDropdownOpen(false);
        navigate('/gallery');
    };

    const handleTestimonialsNavClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsMobileAboutDropdownOpen(false);
        navigate('/testimonials');
    };

    const handleFAQNavClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsMobileAboutDropdownOpen(false);
        navigate('/faq');
    };

    return (
        <header className="main-header">
            {/* Top Bar with Contact Info */}
            <div className="top-bar">
                <div className="container">
                    <div className="contact-info" style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center', gap: '40px'}}>
                        <div className="contact-items" style={{display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap'}}>
                            <Phone size={16} />
                            <a href="tel:+918590943300" className="contact-link">
                                +91 8590 943 300
                            </a>
                        </div>
                        <div className="contact-items" style={{display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap'}}>
                            <Mail size={16} />
                            <a href="mailto:info@wingsliving.in" className="contact-link">
                                info@wingsliving.in
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="navigation">
                <div className="container">
                    <div className="nav-content">
                        {/* Logo */}
                        <Link to="/" className="logo">
                            <div className="logo-image">
                                <img
                                    src={logoImage}
                                    alt="Wings Senior Living Logo"
                                    className="logo-img"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation Menu */}
                        <div className="nav-links desktop-menu">
                            <a
                                href="/"
                                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                                onClick={(e) => handleNavClick(e, 'home')}
                            >
                                Home
                            </a>

                            {/* About Dropdown */}
                            <div
                                className={`nav-item ${isAboutDropdownOpen ? 'open' : ''} ${isAboutActive() ? 'active' : ''}`}
                                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                                onMouseLeave={() => setIsAboutDropdownOpen(false)}
                            >
                                <a
                                    href="#"
                                    className={`nav-link ${isAboutActive() ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleAboutDropdown();
                                    }}
                                >
                                    About
                                    <ChevronDown size={14} className="dropdown-arrow" />
                                </a>
                                <div className="dropdown">
                                    <a
                                        href="/about"
                                        className={`dropdown-item ${isActive('/about') ? 'active' : ''}`}
                                        onClick={(e) => handleAboutNavClick(e, 'about-us')}
                                    >
                                        About Us
                                    </a>
                                    <a
                                        href="/team"
                                        className={`dropdown-item ${isActive('/team') ? 'active' : ''}`}
                                        onClick={handleTeamNavClick}
                                    >
                                        Leadership Team
                                    </a>
                                    <a
                                        href="/mission"
                                        className={`dropdown-item ${isActive('/mission') ? 'active' : ''}`}
                                        onClick={handleMissionVisionNavClick}
                                    >
                                        Mission & Vision
                                    </a>
                                </div>
                            </div>

                            <a
                                href="/residences"
                                className={`nav-link ${isActive('/residences') ? 'active' : ''}`}
                                onClick={handleResidencesNavClick}
                            >
                                Residences
                            </a>
                            <a
                                href="/amenities"
                                className={`nav-link ${isActive('/amenities') ? 'active' : ''}`}
                                onClick={handleAmenitiesNavClick}
                            >
                                Amenities
                            </a>
                            <a
                                href="/services"
                                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                                onClick={handleServicesNavClick}
                            >
                                Services
                            </a>
                            <a
                                href="/gallery"
                                className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
                                onClick={handleGalleryNavClick}
                            >
                                Gallery
                            </a>
                            <a
                                href="/testimonials"
                                className={`nav-link ${isActive('/testimonials') ? 'active' : ''}`}
                                onClick={handleTestimonialsNavClick}
                            >
                                Testimonials
                            </a>
                            <a
                                href="/faq"
                                className={`nav-link ${isActive('/faq') ? 'active' : ''}`}
                                onClick={handleFAQNavClick}
                            >
                                FAQ
                            </a>
                            <a
                                href="/connect"
                                className={`nav-link ${isActive('/connect') ? 'active' : ''}`}
                                onClick={handleConnectNavClick}
                            >
                                Connect
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="mobile-menu-btn"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                        <a
                            href="/"
                            className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, 'home')}
                        >
                            Home
                        </a>

                        {/* Mobile About Dropdown */}
                        <div className={`mobile-nav-item ${isAboutActive() ? 'active' : ''}`}>
                            <a
                                href="#about"
                                className={`mobile-nav-link ${isAboutActive() ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleMobileAboutDropdown();
                                }}
                            >
                                About
                                <ChevronDown
                                    size={14}
                                    className={`dropdown-arrow ${isMobileAboutDropdownOpen ? 'open' : ''}`}
                                />
                            </a>
                            <div className={`mobile-dropdown ${isMobileAboutDropdownOpen ? 'open' : ''}`}>
                                <a
                                    href="/about"
                                    className={`mobile-dropdown-item ${isActive('/about') ? 'active' : ''}`}
                                    onClick={(e) => handleAboutNavClick(e, 'about-us')}
                                >
                                    About Us
                                </a>
                                <a
                                    href="/team"
                                    className={`mobile-dropdown-item ${isActive('/team') ? 'active' : ''}`}
                                    onClick={handleTeamNavClick}
                                >
                                    Leadership Team
                                </a>
                                <a
                                    href="/mission"
                                    className={`mobile-dropdown-item ${isActive('/mission') ? 'active' : ''}`}
                                    onClick={handleMissionVisionNavClick}
                                >
                                    Mission & Vision
                                </a>
                            </div>
                        </div>

                        <a
                            href="/residences"
                            className={`mobile-nav-link ${isActive('/residences') ? 'active' : ''}`}
                            onClick={handleResidencesNavClick}
                        >
                            Residences
                        </a>
                        <a
                            href="/amenities"
                            className={`mobile-nav-link ${isActive('/amenities') ? 'active' : ''}`}
                            onClick={handleAmenitiesNavClick}
                        >
                            Amenities
                        </a>
                        <a
                            href="/services"
                            className={`mobile-nav-link ${isActive('/services') ? 'active' : ''}`}
                            onClick={handleServicesNavClick}
                        >
                            Services
                        </a>
                        <a
                            href="/gallery"
                            className={`mobile-nav-link ${isActive('/gallery') ? 'active' : ''}`}
                            onClick={handleGalleryNavClick}
                        >
                            Gallery
                        </a>
                        <a
                            href="/testimonials"
                            className={`mobile-nav-link ${isActive('/testimonials') ? 'active' : ''}`}
                            onClick={handleTestimonialsNavClick}
                        >
                            Testimonials
                        </a>
                        <a
                            href="/faq"
                            className={`mobile-nav-link ${isActive('/faq') ? 'active' : ''}`}
                            onClick={handleFAQNavClick}
                        >
                            FAQ
                        </a>
                        <a
                            href="/connect"
                            className={`mobile-nav-link ${isActive('/connect') ? 'active' : ''}`}
                            onClick={handleConnectNavClick}
                        >
                            Connect
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;