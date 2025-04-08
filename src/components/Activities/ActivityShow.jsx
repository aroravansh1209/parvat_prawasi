import { Star } from "lucide-react";
import '../../Styles/ActivityShow.css'

// This would typically come from an API
const activities = [
  {
    id: "scuba-1",
    title: "Grand Island Scuba Diving with Free Videography",
    image: "/placeholder.svg",
    discount: 25,
    rating: 4.9,
    reviews: 554,
    duration: 8,
    persons: 2,
    price: 1500,
    originalPrice: 2000,
  },
  // ... more activities
];

export function ActivityShow() {
  return (
    <div className="activity-display">
      {activities.map((activity) => (
        <div key={activity.id} className="activity-card">
          <div className="activity-image-container">
            <div className="activity-discount-badge">
              <span className="activity-badge">{activity.discount}% OFF</span>
            </div>
            <img src={activity.image || "/placeholder.svg"} alt={activity.title} className="activity-image" />
          </div>
          <div className="activity-header">
            <a href={`/activities/${activity.id}`} className="activity-title">
              <h3>{activity.title}</h3>
            </a>
            <div className="activity-badges">
              <span className="activity-badge-secondary">Bestseller</span>
              <div className="activity-rating">
                <div className="activity-rating-stars">
                  <Star className="activity-star-icon" />
                  <span className="activity-rating-value">{activity.rating}</span>
                </div>
                <span className="activity-average">Average</span>
                <span className="activity-reviews">({activity.reviews} Reviews)</span>
              </div>
            </div>
          </div>
          <div className="activity-details">
            <div className="activity-info">
              <div>Duration: {activity.duration} Hour</div>
              <div>Person: {activity.persons}</div>
            </div>
            <div className="activity-price">
              <div className="activity-price-current">₹{activity.price}</div>
              <div className="activity-price-original">₹{activity.originalPrice}</div>
              <span className="activity-price-per-person">/ Person</span>
            </div>
          </div>
          <div className="activity-footer">
            <a href={`/activities/${activity.id}`} className="activity-button">
              View Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
