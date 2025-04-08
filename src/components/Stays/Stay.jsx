import React, { useEffect, useState } from 'react';
import { Search, Star, MapPin, Filter, ImageOff } from 'lucide-react';
import BookingModal from "./StayBookingModel"
import HeroSection from './StayHeroSection';
import FeaturedStays from './FeaturedStay';
import BenefitsSection from './StaybenifitSection';
import Testimonials from './StayTestimonials';
import Newsletter from './StayNewsletter';
import Footer from '../Footer';
import "../../Styles/Stay.css"
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';


const stayTypes = ['All', 'Hotels', 'Villas', 'Resorts', 'Flats', 'Hostels'];

const stays = [
  {
    id: 1,
    name: 'Luxury Beach Resort',
    type: 'Hotels',
    rating: 5,
    price: 15000,
    location: 'Calangute Beach',
    amenities: ['Pool', 'Spa', 'Restaurant', 'Beach Access'],
    images: ['/Stay1.webp'],
  },
  {
    id: 2,
    name: 'Backpackers Hostel',
    type: 'Hostels',
    rating: 4,
    price: 800,
    location: 'Anjuna',
    amenities: ['WiFi', 'Common Kitchen', 'Lounge'],
    images: ['/Stay2.webp'],
  },
  {
    id: 3,
    name: 'Seaside Villa',
    type: 'Villas',
    rating: 4.5,
    price: 25000,
    location: 'Vagator',
    amenities: ['Private Pool', 'Kitchen', 'Garden', 'Sea View'],
    images: ['/Stay3.webp'],
  },
  {
    id: 4,
    name: 'City Center Hotel',
    type: 'Hotels',
    rating: 3,
    price: 5000,
    location: 'Panjim',
    amenities: ['Restaurant', 'WiFi', 'Room Service'],
    images: ['/Stay4.webp'],
  },
];

export default function Stays() {
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedStay, setSelectedStay] = useState(stays[0]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Selected Stay Updated:", selectedStay);
  }, [selectedStay]); // This will run whenever `selectedStay` changes


  const filteredStays = stays.filter((stay) => {
    const matchesType = selectedType === 'All' || stay.type === selectedType;
    const matchesSearch =
      stay.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stay.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleBookNow = (stay) => {
    const res = stay;
    setSelectedStay(res);
    console.log(selectedStay)
    setIsBookingModalOpen(true);
  };

  const handleBookingSubmit = async (bookingData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Show success message
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 5000);
  };

  return (
    <div className="stay-container">
      <Navbar />
      {bookingSuccess && (
        <div className="stay-booking-success">
          Booking successful! Check your email for confirmation.
        </div>
      )}

      <HeroSection />

      <main>
        {/* <FeaturedStays /> */}

        {/* Main Content */}
        <div className="stay-main-content">
          <div className="stay-search-filter-container">
            <div className="stay-search-container">
              <input
                type="text"
                placeholder="Search by name or location..."
                className="stay-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="stay-search-icon" />
            </div>
            <button className="stay-filter-button">
              <Filter className="stay-filter-icon" />
              <span>Filters</span>
            </button>
          </div>

          {/* Stay Type Tabs */}
          <div className="stay-type-tabs">
            {stayTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`stay-type-tab ${selectedType === type ? 'active' : ''}`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Stays Grid */}
          <div className="stay-grid">
            {filteredStays.map((stay) => (
              <div key={stay.id} className="stay-card">
                <div className="stay-card-image-container">
                  <img
                    src={stay.images[0] || '/placeholder.svg'}
                    alt={stay.name}
                    className="stay-card-image"
                  />
                  <div className="stay-card-rating">
                    <div className="stay-card-rating-info">
                      <Star className="stay-card-rating-icon" />
                      <span className="stay-card-rating-text">{stay.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="stay-card-info">
                  <h3 className="stay-card-name">{stay.name}</h3>
                  <div className="stay-card-location">
                    <MapPin className="stay-card-location-icon" />
                    <span className="stay-card-location-text">{stay.location}</span>
                  </div>
                  <div className="stay-card-amenities">
                    {stay.amenities.slice(0, 3).map((amenity) => (
                      <span key={amenity} className="stay-card-amenity">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <div className="stay-card-footer">
                    <div>
                      <span className="stay-card-price">₹{stay.price}</span>
                      <span className="stay-card-per-night">/night</span>
                    </div>
                    <div className="stay-card-buttons">
                    <button onClick={() => navigate(`/stays/${stay.id}`)} className="stay-card-view-details-button">
                    View Details
                      </button>
                      <button
                        onClick={() => handleBookNow(stay)}
                        className="stay-card-book-now-button"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <BenefitsSection />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />

      {selectedStay && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          stay={selectedStay}
          onSubmit={handleBookingSubmit}
        />
      )}
    </div>
  );
}
