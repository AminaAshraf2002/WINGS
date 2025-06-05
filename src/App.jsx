import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import './App.css';
import LeadershipTeam from './pages/LeadershipTeam';
import MissionVision from './pages/MissionVision';
import Connect from './pages/Connect';
import ResidencesPage from './pages/ResidencesPage';
import AmenitiesPage from './pages/AmenitiesPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQPage from './pages/FAQPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/team" element={<LeadershipTeam />} />
          <Route path="/mission" element={<MissionVision />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/residences" element={<ResidencesPage />} />
          <Route path="/amenities" element={<AmenitiesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;