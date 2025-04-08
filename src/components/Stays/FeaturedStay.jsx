import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import "../../Styles/StayFeatured.css"

const featuredStays = [
  {
    id: 1,
    name: "Luxury Ocean Villa",
    location: "Vagator Beach",
    price: 35000,
    rating: 4.9,
    image: "/Stay1.webp",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Heritage Portuguese House",
    location: "Fontainhas",
    price: 28000,
    rating: 4.8,
    image: "/Stay2.webp",
    tag: "Historic",
  },
  {
    id: 3,
    name: "Beachfront Resort",
    location: "Calangute",
    price: 22000,
    rating: 4.7,
    image: "/Stay3.webp",
    tag: "Popular",
  },
]

export default function FeaturedStays() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((currentIndex + 1) % featuredStays.length)
  }

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + featuredStays.length) % featuredStays.length)
  }

  return (
    <div className="FeaturedStay">
      <div className="container">
        <h2 className="title">Featured Stays</h2>
        <div className="carousel">
          <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {featuredStays.map((stay) => (
              <div key={stay.id} className="carousel-item">
                <div className="stay-card">
                  <div className="image-container">
                    <img
                      src={stay.image || "/placeholder.svg"}
                      alt={stay.name}
                      className="stay-image"
                    />
                    <div className="tag">
                      <span>{stay.tag}</span>
                    </div>
                  </div>
                  <div className="stay-details">
                    <div className="stay-header">
                      <h3 className="stay-name">{stay.name}</h3>
                      <div className="rating">
                        <Star className="star-icon" />
                        <span className="rating-value">{stay.rating}</span>
                      </div>
                    </div>
                    <p className="location">{stay.location}</p>
                    <div className="footer">
                      <div className="price">
                        <span className="price-value">₹{stay.price}</span>
                        <span className="price-per-night">/night</span>
                      </div>
                      <button className="view-details-button">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prev} className="prev-button">
            <ChevronLeft className="chevron-icon" />
          </button>
          <button onClick={next} className="next-button">
            <ChevronRight className="chevron-icon" />
          </button>
        </div>
      </div>
    </div>
  )
}
