import { useRef } from "react"
import "../../Styles/VechileRentals.css"
import Navbar from "../Navbar";
import rental from "../../assets/rental.png";
import vehical1 from "../../assets/Vechile1.jpg"
import vehical4 from "../../assets/Vechile4.webp"
import Footer from "../Footer";

export default function VehicleRental() {
  const vehicleTypesRef = useRef(null)

  const scrollToVehicleTypes = () => {
    vehicleTypesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Navbar />

      <div className="rental-container">
        <br />

        {/* Hero Section */}
        <section className="rental-hero">
          <div className="rental-hero-image-wrapper">
            <img
              src={rental} //?height=500&width=1200
              alt="Hero Image"
              className="rental-hero-image"
            />
          </div>
          <div className="rental-hero-text">
            <h1 className="rental-hero-title">Explore Your Way</h1>
            <p className="rental-hero-description">
              Rent the perfect vehicle for your adventure. Choose from our wide range of bikes, scooties, and cars.
            </p>
            <button onClick={scrollToVehicleTypes} className="rental-hero-button">
              Browse Vehicles
            </button>
          </div>
        </section>

        {/* Vehicle Types Section */}
        <section ref={vehicleTypesRef} id="vehicle-types" className="rental-vehicle-types">
          <h2 className="rental-section-title">Choose Your Ride</h2>
          <div className="rental-grid">
            <VehicleCard
              title="Cars"
              description="Explore the city on four wheels"
              link="/rentals/bike"
              image={vehical1}
            />
            <VehicleCard
              title="Bike/Sccoty"
              description="Zip around town with ease"
              link="/rentals/scooty"
              image={vehical4}
            />
          </div>
        </section>

        {/* Featured Vehicles Section */}
        {/* <section className="rental-featured-vehicles">
          <h2 className="rental-section-title">Featured Vehicles</h2>
          <div className="rental-grid featured-vehicles-grid">
            <FeaturedVehicleCard
              name="Mountain Explorer"
              type="Bike"
              hourlyRate={12}
              dailyRate={50}
              weeklyRate={250}
              image={vehical1}
            />
            <FeaturedVehicleCard
              name="Urban Zip"
              type="Scooty"
              hourlyRate={8}
              dailyRate={35}
              weeklyRate={175}
              image={vehical2}
            />
            <FeaturedVehicleCard
              name="Eco Compact"
              type="Car"
              hourlyRate={20}
              dailyRate={80}
              weeklyRate={400}
              image={vehical3}
            />
            <FeaturedVehicleCard
              name="Electric Glide"
              type="Bike"
              hourlyRate={15}
              dailyRate={60}
              weeklyRate={300}
              image={vehical4}
            />
          </div>
        </section> */}

        {/* Call to Action Section */}
      </div>
      <Footer />
    </>
  )
}

function VehicleCard({ title, description, link, image }) {
  return (
    <div className="rental-card">
      <div className="rental-card-image-wrapper">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="rental-card-image"
        />
      </div>
      <div className="rental-card-header">
        <h3>{title}</h3>
      </div>
      <div className="rental-card-content">
        <p>{description}</p>
        <a href={link} className="rental-card-link">
          View Details &gt;
        </a>
      </div>
    </div>
  )
}

function FeaturedVehicleCard({ name, type, hourlyRate, dailyRate, weeklyRate, image }) {
  return (
    <div className="rental-card featured-card">
      <div className="rental-card-image-wrapper">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="rental-featured-image"
        />
      </div>
      <div className="rental-card-content">
        <h3>{name}</h3>
        <span>{type}</span>
        <p>From ${hourlyRate}/hour</p>
      </div>
    </div>
  )
}

function TestimonialCard({ name, quote, rating }) {
  return (
    <div className="rental-card testimonial-card">
      <div className="rental-testimonial-rating">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="rental-star">★</span>
        ))}
      </div>
      <p className="rental-card-quote">"{quote}"</p>
      <p className="rental-card-author">- {name}</p>
    </div>
  )
}
