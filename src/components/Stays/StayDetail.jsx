import { useState } from "react"
import { ArrowLeft, Star, MapPin, Check } from "lucide-react"
import "../../Styles/StayDetail.css"
import { useNavigate, useParams } from "react-router-dom"
import BookingModal from "./StayBookingModel"
import Footer from "../Footer"
import Navbar from "../Navbar"

// This would typically come from an API
const stays = [
  {
    id: 1,
    name: "Luxury Beach Resort",
    type: "Hotels",
    rating: 5,
    price: 15000,
    location: "Calangute Beach",
    description:
      "Experience luxury living at its finest in our beachfront resort. Featuring spectacular ocean views, world-class amenities, and exceptional service.",
    amenities: [
      "Pool",
      "Spa",
      "Restaurant",
      "Beach Access",
      "Room Service",
      "Free WiFi",
      "Fitness Center",
      "Bar/Lounge",
      "Airport Shuttle",
      "24/7 Front Desk",
    ],
    images: [
      "/Stay1.webp",
      "/Stay2.webp",
      "/Stay3.webp",
      "/Stay4.webp",
    ],
    rooms: [
      { type: "Deluxe Room", price: 15000, capacity: "2 Adults" },
      { type: "Suite", price: 25000, capacity: "3 Adults" },
      { type: "Villa", price: 35000, capacity: "4 Adults" },
    ],
    policies: [
      "Check-in: 2:00 PM",
      "Check-out: 11:00 AM",
      "Cancellation: Free cancellation up to 24 hours before check-in",
      "Children: Welcome",
    ],
  },
  // ... other stays data
]

export default function StayDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [bookingDates, setBookingDates] = useState({
    checkIn: "",
    checkOut: "",
  })
  const [guestCount, setGuestCount] = useState(1)
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const navigate = useNavigate();
  const {staysId} = useParams();

  console.log(staysId)

  const stay = stays.find((s) => s.id === 1)

  if (!stay) {
    return (
      <div className="StayDetails-not-found">
        <div className="StayDetails-center">
          <h1 className="StayDetails-title">Stay not found</h1>
          <button onClick={() => navigate(-1)} className="StayDetails-go-back-button">
            <ArrowLeft className="StayDetails-icon" />
            Go back
          </button>
        </div>
      </div>
    )
  }

  const handleBookingSubmit = async (bookingData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here you would typically make an API call to your backend
    console.log("Booking submitted:", bookingData)

    // Show success message
    setBookingSuccess(true)
    setTimeout(() => setBookingSuccess(false), 5000)
  }

  return (
    <>
    <Navbar />
    <div className="StayDetails-container">
      {bookingSuccess && (
        <div className="StayDetails-success-message">
          Booking successful! Check your email for confirmation.
        </div>
      )}

      <main className="StayDetails-main">
        {/* Image Gallery */}
        <div className="StayDetails-image-gallery">
          <div className="StayDetails-main-image">
            <img
              src={stay.images[selectedImage] || "/placeholder.svg"}
              alt={`${stay.name} view ${selectedImage + 1}`}
              className="StayDetails-image"
            />
          </div>
          <div className="StayDetails-thumbnail-gallery">
            {stay.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`StayDetails-thumbnail ${selectedImage === index ? "StayDetails-thumbnail-selected" : ""}`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${stay.name} view ${index + 1}`}
                  className="StayDetails-thumbnail-image"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="StayDetails-content">
          {/* Main Content */}
          <div className="StayDetails-main-content">
            <div className="StayDetails-description-container">
              <div className="StayDetails-header">
                <div>
                  <h1 className="StayDetails-name">{stay.name}</h1>
                  <div className="StayDetails-location">
                    <MapPin className="StayDetails-icon-small" />
                    <span>{stay.location}</span>
                  </div>
                </div>
                <div className="StayDetails-rating">
                  <Star className="StayDetails-icon-small" />
                  <span>{stay.rating}</span>
                </div>
              </div>
              <p className="StayDetails-description">{stay.description}</p>

              <h2 className="StayDetails-subtitle">Amenities</h2>
              <div className="StayDetails-amenities">
                {stay.amenities.map((amenity) => (
                  <div key={amenity} className="StayDetails-amenity">
                    <Check className="StayDetails-icon-small" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>

              <h2 className="StayDetails-subtitle">Rooms Available</h2>
              <div className="StayDetails-rooms">
                {stay.rooms.map((room) => (
                  <div key={room.type} className="StayDetails-room">
                    <div>
                      <h3 className="StayDetails-room-title">{room.type}</h3>
                      <p className="StayDetails-room-capacity">{room.capacity}</p>
                    </div>
                    <div className="StayDetails-room-price">
                      <p>₹{room.price}</p>
                      <p>per night</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="StayDetails-policies-container">
              <h2 className="StayDetails-subtitle">Policies</h2>
              <ul className="StayDetails-policies">
                {stay.policies.map((policy) => (
                  <li key={policy} className="StayDetails-policy">
                    <Check className="StayDetails-icon-small" />
                    <span>{policy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Card */}
          <div className="StayDetails-booking-card">
            <div className="StayDetails-booking-card-container">
              <h2 className="StayDetails-booking-title">Book Your Stay</h2>
              <div className="StayDetails-booking-form">
                <div>
                  <label className="StayDetails-form-label">Check-in</label>
                  <input
                    type="date"
                    className="StayDetails-form-input"
                    value={bookingDates.checkIn}
                    onChange={(e) => setBookingDates({ ...bookingDates, checkIn: e.target.value })}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <label className="StayDetails-form-label">Check-out</label>
                  <input
                    type="date"
                    className="StayDetails-form-input"
                    value={bookingDates.checkOut}
                    onChange={(e) => setBookingDates({ ...bookingDates, checkOut: e.target.value })}
                    min={bookingDates.checkIn || new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <label className="StayDetails-form-label">Guests</label>
                  <select
                    className="StayDetails-form-input"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                  </select>
                </div>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="StayDetails-book-button"
                >
                  Book Now
                </button>
                <p className="StayDetails-info-text">You won't be charged yet</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        stay={stay}
        selectedDates={bookingDates}
        guestCount={guestCount}
        onSubmit={handleBookingSubmit}
      />
    </div>
    <Footer />
    </>
  )
}
