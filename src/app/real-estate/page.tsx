'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
}

const propertyListings: Property[] = [
  {
    id: 1,
    name: '2-Bedroom Apartment',
    location: 'Victoria Island',
    price: '₦1,000,000/month',
    image: '/assets/property1.jpeg',
  },
  {
    id: 2,
    name: '3-Bedroom Duplex',
    location: 'Lekki Phase 1',
    price: '₦1,083,333/month',
    image: '/assets/property2.jpeg',
  },
  {
    id: 3,
    name: '1-Bedroom Studio',
    location: 'Ikeja GRA',
    price: '₦150,000/month',
    image: '/assets/property3.jpeg',
  },
  {
    id: 4,
    name: '4-Bedroom Terrace',
    location: 'Magodo',
    price: '₦750,000/month',
    image: '/assets/property4.jpeg',
  },
  {
    id: 5,
    name: '2-Bedroom Flat',
    location: 'Surulere',
    price: '₦250,000/month',
    image: '/assets/property5.jpeg',
  },
  {
    id: 6,
    name: '3-Bedroom Penthouse',
    location: 'Ikoyi',
    price: '₦2,500,000/month',
    image: '/assets/property6.jpeg',
  },
];

export default function RealEstatePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    propertyType: '',
    preferredLocation: '',
    budgetRange: '',
    contactInfo: '',
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello! I'm interested in renting a property.

Full Name: ${formData.fullName}
Type of Property: ${formData.propertyType}
Preferred Location: ${formData.preferredLocation}
Budget Range: ${formData.budgetRange}
Contact Info: ${formData.contactInfo}

Please contact me with available properties.`;

    const whatsappUrl = `https://wa.me/2348037331747?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInquire = (propertyName: string) => {
    const message = `Hello! I'm interested in the property: ${propertyName}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/2349032054555?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      {/* Bootstrap JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        defer
      ></script>

      {/* Custom Animation Style */}
      <style>{`
        .animated-heading span {
          display: inline-block;
          animation: bounce 1s ease-in-out infinite;
          font-weight: bold;
        }
        .animated-heading span:nth-child(odd) {
          color: #28a745;
        }
        .animated-heading span:nth-child(even) {
          color: #007bff;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" href="/">
            <img src="/assets/logo3.png" alt="Dennis Properties Naija" height="40" className="me-2" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
              <li className="nav-item"><a className="nav-link" href="#properties">Properties</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item"><a className="nav-link active" href="#real-estate">Real Estate</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero with Animated Heading */}
      <section id="real-estate" className="py-5 mt-5 text-center">
        <div className="container">
          <h1 className="display-4 animated-heading">
            {"Dennis Properties Naija".split("").map((char, index) => (
              <span key={index}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </h1>
          <p className="lead mt-3">Find premium properties in Lagos.</p>
        </div>
      </section>

      {/* Property Listings */}
      <section id="properties" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Featured Properties</h2>
          <div className="row">
            {propertyListings.map((property) => (
              <div key={property.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={property.image}
                    className="card-img-top"
                    alt={property.name}
                    style={{ height: '250px', objectFit: 'cover' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x250/28a745/ffffff?text=${encodeURIComponent(property.name)}`;
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{property.name}</h5>
                    <p className="text-muted">{property.location}</p>
                    <p className="text-success fw-bold">{property.price}</p>
                    <button className="btn btn-success mt-auto" onClick={() => handleInquire(property.name)}>
                      <i className="fab fa-whatsapp me-2"></i> Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Property Inquiry Form</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="contactInfo" className="form-label">Contact Info</label>
                  <input type="text" className="form-control" id="contactInfo" name="contactInfo" value={formData.contactInfo} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="propertyType" className="form-label">Type of Property</label>
                  <select className="form-select" id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleInputChange} required>
                    <option value="">Select property type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Duplex">Duplex</option>
                    <option value="Studio">Studio</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="preferredLocation" className="form-label">Preferred Location</label>
                  <input type="text" className="form-control" id="preferredLocation" name="preferredLocation" value={formData.preferredLocation} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="budgetRange" className="form-label">Budget Range</label>
                  <input type="text" className="form-control" id="budgetRange" name="budgetRange" value={formData.budgetRange} onChange={handleInputChange} required />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  <i className="fab fa-whatsapp me-2"></i> Submit via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <h5>Dennis Properties Naija</h5>
              <p>Your trusted partner for real estate in Lagos.</p>
            </div>
            <div className="col-lg-4 mb-4">
              <h5>Follow Us</h5>
              <p><i className="fab fa-instagram me-2"></i><a href="https://www.instagram.com/dennis_rental_naija" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-underline">@dennis_rental_naija</a></p>
              <p><i className="fab fa-instagram me-2"></i><a href="https://www.instagram.com/dennis_properties_naija" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-underline">@dennis_properties_naija</a></p>
              <p><i className="fab fa-facebook me-2"></i><a href="https://www.facebook.com/dennis_rental_naija" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-underline">Facebook</a></p>
              <p><i className="fab fa-tiktok me-2"></i><a href="https://www.tiktok.com/@dennis_rental_naija" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-underline">TikTok</a></p>
            </div>
            <div className="col-lg-4 mb-4">
              <h5>Contact Info</h5>
              <p><i className="fas fa-phone me-2"></i>08037331747</p>
              <p><i className="fas fa-map-marker-alt me-2"></i>G. Cappa Estate, Ikeja, Lagos</p>
            </div>
          </div>
        </div>
        <hr className="border-light" />
        <div className="container d-flex justify-content-between align-items-center py-3">
          <p className="mb-0 text-white">&copy; 2025 Dennis Rental Naija. All rights reserved.</p>
          <a
            href="https://linkedin.com/in/dennis-olusegun-"
            className="btn btn-outline-light btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built & Maintained by Olusegun Dennis
          </a>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* Bootstrap JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        defer
      ></script>
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </>
  );
}