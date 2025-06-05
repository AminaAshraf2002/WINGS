import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Download, 
  Share2, 
  Home,
  Users,
  TreePine,
  Utensils,
  Heart,
  Building,
  Camera,
  User,
  Phone
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './GalleryPage.css';

// Import separate images for each category
import exteriorImage from '../assets/web-2.png';
import apartmentsImage from '../assets/interiors.png';
import amenitiesImage from '../assets/ban0.png';
import diningImage from '../assets/services.jpg';
import recreationImage from '../assets/modern.png';
import gardenImage from '../assets/garden.png';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // Gallery categories
  const categories = [
    { id: 'all', name: 'All Photos', icon: Camera },
    { id: 'exterior', name: 'Exterior', icon: Building },
    { id: 'apartments', name: 'Apartments', icon: Home },
    { id: 'amenities', name: 'Amenities', icon: Heart },
    { id: 'dining', name: 'Dining', icon: Utensils },
    { id: 'recreation', name: 'Recreation', icon: Users },
    { id: 'garden', name: 'Garden', icon: TreePine }
  ];

  // Gallery images data - one image per category
  const galleryImages = [
    {
      id: 1,
      category: 'exterior',
      title: 'Building Exterior',
      description: 'Modern senior living community architecture',
      src: exteriorImage,
      thumbnail: exteriorImage
    },
    {
      id: 2,
      category: 'apartments',
      title: 'Luxury Apartments',
      description: 'Comfortable and modern living spaces',
      src: apartmentsImage,
      thumbnail: apartmentsImage
    },
    {
      id: 3,
      category: 'amenities',
      title: 'Premium Amenities',
      description: 'World-class facilities for senior citizens',
      src: amenitiesImage,
      thumbnail: amenitiesImage
    },
    {
      id: 4,
      category: 'dining',
      title: 'Dining Services',
      description: 'Nutritious meals and dining facilities',
      src: diningImage,
      thumbnail: diningImage
    },
    {
      id: 5,
      category: 'recreation',
      title: 'Recreation Activities',
      description: 'Engaging activities and social programs',
      src: recreationImage,
      thumbnail: recreationImage
    },
    {
      id: 6,
      category: 'garden',
      title: 'Beautiful Gardens',
      description: 'Peaceful outdoor spaces and landscaping',
      src: gardenImage,
      thumbnail: gardenImage
    }
  ];

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Handle image modal
  const openImageModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % filteredImages.length
      : (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeImageModal();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex]);

  // Handle download
  const handleDownload = () => {
    if (!selectedImage) return;
    
    const link = document.createElement('a');
    link.href = selectedImage.src;
    link.download = `wings-${selectedImage.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle share
  const handleShare = async () => {
    if (!selectedImage) return;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: selectedImage.title,
          text: selectedImage.description,
          url: window.location.href
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="gallery-page">
      <Header />
      
      {/* Content Section Below Header */}
      <div className="below-banner">
        <div className="below-banner-content animate-on-scroll">
          <h1 className="below-banner-title">Gallery</h1>
          <p className="below-banner-description">
            Explore our beautiful community through these images showcasing our modern facilities, 
            comfortable living spaces, and vibrant lifestyle at <span className="highlight">Wings Senior Living</span>.
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="gallery-content">
        {/* Category Filter */}
        <div className="category-filter animate-on-scroll">
          <div className="filter-container">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
                >
                  <IconComponent size={18} />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid animate-on-scroll">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openImageModal(image, index)}
            >
              <div className="image-container">
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3 className="image-title">{image.title}</h3>
                    <p className="image-description">{image.description}</p>
                    <div className="overlay-actions">
                      <button className="action-btn">
                        <Camera size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="empty-state animate-on-scroll">
            <Camera size={48} />
            <h3>No images found</h3>
            <p>Try selecting a different category</p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="image-modal" onClick={closeImageModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-info">
                  <h3 className="modal-title">{selectedImage.title}</h3>
                  <p className="modal-description">{selectedImage.description}</p>
                </div>
                <div className="modal-actions">
                  <button 
                    className="modal-action-btn" 
                    onClick={handleDownload}
                    title="Download"
                  >
                    <Download size={18} />
                  </button>
                  <button 
                    className="modal-action-btn" 
                    onClick={handleShare}
                    title="Share"
                  >
                    <Share2 size={18} />
                  </button>
                  <button 
                    className="modal-close" 
                    onClick={closeImageModal} 
                    title="Close"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              
              <div className="modal-image-container">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="modal-image"
                />
                
                {filteredImages.length > 1 && (
                  <>
                    <button
                      className="modal-nav prev"
                      onClick={() => navigateImage('prev')}
                      title="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    
                    <button
                      className="modal-nav next"
                      onClick={() => navigateImage('next')}
                      title="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
              
              <div className="modal-footer">
                <span className="image-counter">
                  {currentImageIndex + 1} of {filteredImages.length}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="gallery-cta-section animate-on-scroll">
          <div className="cta-card">
            <h2 className="cta-title">Experience Our Caring Community</h2>
            <p className="cta-description">
              Schedule a visit to see our beautiful facilities in person and discover 
              why Wings Senior Living is the perfect place to call home.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">
                <User size={16} />
                <span>Schedule Visit</span>
              </button>
              <button className="btn-secondary">
                <Phone size={16} />
                <span>Call Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;