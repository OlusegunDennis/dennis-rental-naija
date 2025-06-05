'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
 const [formData, setFormData] = useState({
  name: '',
  phone: '',
  pickupAddress: '',
  dropoffAddress: '',
  date: '',
  time: '',
  preferredVehicle: '',
  itinerary: ''
});

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   const message = `Hello! I'm interested in renting a car.

Full Name: ${formData.name}
Phone: ${formData.phone}
Preferred Vehicle: ${formData.preferredVehicle}
Itinerary: ${formData.itinerary}
Pick-up Address: ${formData.pickupAddress}
Drop-off Address: ${formData.dropoffAddress}
Pick-up Date: ${formData.date}
Time: ${formData.time}


Please contact me with more details.`;

    const whatsappUrl = `https://wa.me/2348037331747?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const carListings = [
  {
    id: 1,
    name: '2020 Mercedes G-Wagon',
    image: '/assets/gwagon2020.jpeg',
    price: '₦1,000,000/day',
    description: 'Luxury SUV with a bold design, V8 engine, and premium interior perfect for VIP transport.',
  },
  {
    id: 2,
    name: 'Rolls Royce Ghost',
    image: '/assets/royce.jpeg',
    // price: '₦500,000/day',
    description: 'Ultra-luxury sedan with a smooth ride, handcrafted interior, and prestige for special occasions.',
  },
  {
    id: 3,
    name: 'Mercedes Viano Van',
    image: '/assets/sprinter.jpeg',
    price: '₦500,000/day',
    description: 'Spacious and comfortable van ideal for group trips, corporate events, or airport transfers.',
  },
  {
    id: 4,
    name: '2016 Toyota Highlander',
    image: '/assets/toyota-highlander.jpeg',
    price: '₦80,000/day',
    description: 'Fuel-efficient compact sedan with modern tech and reliability for everyday commuting.',
  },
  {
    id: 5,
    name: '2020 Toyota Hilux',
    image: '/assets/hilux-revolution.jpeg',
    price: '₦50,000/day',
    description: 'Sporty and stylish compact car offering great performance, comfort, and fuel economy.',
  },
  {
    id: 6,
    name: '2016 Lexus GX460',
    image: '/assets/lexus-lx-570.jpeg',
    price: '₦150,000/day',
    description: 'Executive sedan with refined styling, luxurious features, and smooth handling.',
  },
  {
    id: 7,
    name: 'Land Cruiser Prado',
    image: '/assets/land-cruiser-prado-1.jpeg',
    price: '₦90,000/day',
    description: 'Sporty premium sedan with powerful engine options and driver-focused interior.',
  },
  {
    id: 8,
    name: '2018 Toyota Prado',
    image: '/assets/prado.jpeg',
    price: '₦150,000/day',
    description: 'Spacious and luxurious MPV designed for group travel, offering first-class comfort, advanced safety features, and a smooth ride.',
  },
  {
    id: 9,
    name: '2012 Toyota Camry',
    image: '/assets/camry2012.jpeg',
    price: '₦80,000/day',
    description: 'Reliable and budget-friendly sedan with spacious interior and proven performance.',
  },
  {
    id: 10,
    name: '2020 Mercedes Maybach',
    image: '/assets/maybach.jpeg',
    // price: '₦600,000/day',
    description: 'Top-tier chauffeur vehicle with unmatched luxury, advanced tech, and elegant presence.',
  },
];

  const handleBookNow = () => {
    const message = "Hello! I'm interested in booking a car. Please provide more details.";
    const whatsappUrl = `https://wa.me/2348037331747?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
     {/* Navigation */}
<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
  <div className="container">
    <a className="navbar-brand d-flex align-items-center" href="#home">
      <img src="/assets/drnlogo.png" alt="Dennis Rental Naija" height="40" className="me-2" />
    </a>
    {/* ...rest of your navbar items (toggle, nav-links, etc.) */}


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav ms-auto">
    <li className="nav-item">
      <Link className="nav-link" href="#home">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" href="#cars">Cars</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" href="#contact">Contact</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" href="#about">About</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" href="/real-estate">Real Estate</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4 animate-heading nigeria-text">
  Dennis Rental Naija

              </h1>
              <p className="lead mb-5 fade-in-up">
                Your trusted partner for premium car rentals and quality real estate services in Lagos, Nigeria.
                Experience excellence in every journey and every home.
              </p>
              <div className="d-flex flex-column flex-md-row gap-3">
                <a href="#cars" className="btn btn-light btn-lg px-5 py-3">
                  <i className="fas fa-car me-2"></i>
                  Rent a Car
                </a>
                <Link href="/real-estate" className="btn btn-outline-light btn-lg px-5 py-3">
                  <i className="fas fa-home me-2"></i>
                  Rent an Apartment
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img src="/assets/drnlogo2.png" alt="Dennis Rental Naija" className="img-fluid" style={{maxHeight: '400px'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Car Listings Section */}
      <section id="cars" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Our Premium Fleet</h2>
              <p className="lead text-muted">Choose from our collection of well-maintained, premium vehicles</p>
            </div>
          </div>
          <div className="row">
            {carListings.map((car) => (
              <div key={car.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card car-card h-100 border-0 shadow">
                  <img
                    src={car.image}
                    className="card-img-top"
                    alt={car.name}
                    style={{height: '250px', objectFit: 'cover'}}
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/400x250/007bff/white?text=${car.name}`;
                    }}
                  />
                 <div className="card-body d-flex flex-column">
  <h5 className="card-title">{car.name}</h5>
  <p className="card-text text-muted">{car.description}</p>
  <p className="fw-bold text-success mb-2">{car.price}</p>
  <button
    className="btn btn-whatsapp mt-auto"
    onClick={handleBookNow}
  >
    <i className="fab fa-whatsapp me-2"></i>
    Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Contact Us</h2>
              <p className="lead text-muted">Get in touch for your car rental needs</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="contact-form">
                <h4 className="mb-4">Send us a message</h4>
                <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Full Name</label>
    <input
      type="text"
      className="form-control"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      placeholder="Enter your full name"
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone Number</label>
    <input
      type="tel"
      className="form-control"
      id="phone"
      name="phone"
      value={formData.phone}
      onChange={handleInputChange}
      placeholder="Enter your phone number"
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="pickupAddress" className="form-label">Pick-up Address</label>
    <input
      type="text"
      className="form-control"
      id="pickupAddress"
      name="pickupAddress"
      value={formData.pickupAddress}
      onChange={handleInputChange}
      placeholder="Where should we pick you up?"
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="dropoffAddress" className="form-label">Drop-off Address</label>
    <input
      type="text"
      className="form-control"
      id="dropoffAddress"
      name="dropoffAddress"
      value={formData.dropoffAddress}
      onChange={handleInputChange}
      placeholder="Where are you going?"
      required
    />
  </div>

  <div className="row">
    <div className="col-md-6 mb-3">
      <label htmlFor="date" className="form-label">Date</label>
      <input
        type="date"
        className="form-control"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
        required
      />
    </div>
    <div className="col-md-6 mb-3">
      <label htmlFor="time" className="form-label">Time</label>
      <input
        type="time"
        className="form-control"
        id="time"
        name="time"
        value={formData.time}
        onChange={handleInputChange}
        required
      />
    </div>
  </div>

  <div className="mb-3">
    <label htmlFor="preferredVehicle" className="form-label">Preferred Vehicle</label>
    <input
      type="text"
      className="form-control"
      id="preferredVehicle"
      name="preferredVehicle"
      value={formData.preferredVehicle}
      onChange={handleInputChange}
      placeholder="e.g. 2020 Mercedes Gwagon"
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="itinerary" className="form-label">Itinerary</label>
    <textarea
      className="form-control"
      id="itinerary"
      name="itinerary"
      rows={3}
      value={formData.itinerary}
      onChange={handleInputChange}
      placeholder="Tell us about your travel plan"
      required
    ></textarea>
  </div>

  <button type="submit" className="btn btn-whatsapp btn-lg w-100">
    <i className="fab fa-whatsapp me-2"></i>
    Send via WhatsApp
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-info">
                <h4 className="mb-4">Get in Touch</h4>
                <div className="mb-4">
                  <h6><i className="fas fa-phone me-2 text-primary"></i>Phone</h6>
                  <p>
                    <a href="tel:08037331747" className="text-decoration-none">08037331747</a>
                    <br />
                    <small className="text-muted">Click to call or WhatsApp</small>
                  </p>
                </div>
                <div className="mb-4">
                  <h6><i className="fas fa-map-marker-alt me-2 text-primary"></i>Address</h6>
                  <p>Office 4, Owoduni Street, Onipanu Bus Stop, Lagos State, Nigeria</p>
                </div>
                <div className="mb-4">
                  <h6><i className="fab fa-whatsapp me-2 text-success"></i>WhatsApp</h6>
                  <a
                    href="https://wa.me/2348037331747"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">About Dennis Rental Naija</h2>
              <p className="lead mb-4">
                Dennis Rental Naija is a registered business with the Corporate Affairs Commission (CAC),
                committed to providing exceptional car rental and real estate services in Lagos, Nigeria.
              </p>
              <p className="mb-4">
                <strong>CAC Registration Number:</strong> <span className="text-muted">[CAC Number Placeholder]</span>
              </p>
              <p className="mb-4">
                We specialize in both premium car rental services and quality real estate solutions,
                ensuring our clients receive the best value and service in both sectors. Our fleet consists
                of well-maintained, modern vehicles, and our property portfolio includes carefully selected
                apartments and houses that meet the highest standards.
              </p>
              <div className="row mt-5">
                <div className="col-md-6 mb-3">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body text-center">
                      <i className="fas fa-car fa-3x text-primary mb-3"></i>
                      <h5>Car Rental Services</h5>
                      <p>Premium vehicles for all your transportation needs</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body text-center">
                      <i className="fas fa-home fa-3x text-primary mb-3"></i>
                      <h5>Real Estate Services</h5>
                      <p>Quality apartments and properties for rent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <h5 className="text-white mb-3">Dennis Rental Naija</h5>
              <p>Your trusted partner for car rentals and real estate services in Lagos, Nigeria.</p>
            </div>
            <div className="col-lg-4 mb-4">
              <h5 className="text-white mb-3">Follow Us</h5>
              <div className="d-flex flex-column">
                <a href="https://instagram.com/dennis_rental_naija" target="_blank" rel="noopener noreferrer" className="mb-2">
                  <i className="fab fa-instagram me-2"></i>@dennis_rental_naija
                </a>
                <a href="https://instagram.com/dennis_properties_naija" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram me-2"></i>@dennis_properties_naija
                </a>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <h5 className="text-white mb-3">Contact Info</h5>
              <p>
                <i className="fas fa-phone me-2"></i>
                <a href="tel:08037331747">08037331747</a>
              </p>
              <p>
                <i className="fas fa-map-marker-alt me-2"></i>
                Office 4, Owoduni Street, Onipanu Bus Stop, Lagos State, Nigeria
              </p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">&copy; 2025 Dennis Rental Naija. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0">
                Website built and maintained by{' '}
                <a
                  href="https://linkedin.com/in/dennis-olusegun-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-light"
                >
                  Olusegun Dennis
                </a>
              </p>
            </div>
          </div>
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