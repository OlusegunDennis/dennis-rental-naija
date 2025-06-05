'use client';

import React, { useState } from 'react';
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

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" href="/">
           <img src="/assets/logo3.png" alt="DENNIS PROPERTIES NAIJA" height="40" className="me-2" />

          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#properties">Properties</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#real-estate">Real Estate</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="real-estate" className="py-5 mt-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4 animated-title">
  Dennis Properties Naija
</h1>

          <p className="lead">Find premium properties in Lagos.</p>
        </div>
      </section>

      {/* Property Listings Section */}
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
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x250/28a745/ffffff?text=${property.name}`;
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{property.name}</h5>
                    <p className="text-muted">{property.location}</p>
                    <p className="text-success fw-bold">{property.price}</p>
                    <button
                      className="btn btn-success mt-auto"
                      onClick={() => handleInquire(property.name)}
                    >
                      <i className="fab fa-whatsapp me-2"></i>
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Property Inquiry Form</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="contactInfo" className="form-label">Contact Info</label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactInfo"
                    name="contactInfo"
                    value={formData.contactInfo}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="propertyType" className="form-label">Type of Property</label>
                  <select
                    className="form-select"
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    required
                  >
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
                  <input
                    type="text"
                    className="form-control"
                    id="preferredLocation"
                    name="preferredLocation"
                    value={formData.preferredLocation}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="budgetRange" className="form-label">Budget Range</label>
                  <input
                    type="text"
                    className="form-control"
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  <i className="fab fa-whatsapp me-2"></i>
                  Submit via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
