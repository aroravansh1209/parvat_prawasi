import React from 'react';
import { Clock, MapPin, Utensils, ChevronLeft, ChevronRight } from "lucide-react";
import "../../Styles/CruiseCard.css"; // Import the custom CSS

function CruiseCard({
  id,
  title,
  originalPrice,
  discountedPrice,
  rating,
  reviews,
  imageUrl,
  duration,
  location,
}) {
  return (
    <div className="cruise-card">
      <div className="cruise-card-image-container">
        <div className="cruise-card-button left">
          <button className="cruise-card-button-inner">
            <ChevronLeft className="icon" />
          </button>
        </div>
        <div className="cruise-card-button right">
          <button className="cruise-card-button-inner">
            <ChevronRight className="icon" />
          </button>
        </div>
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="cruise-card-image"
        />
      </div>
      <div className="cruise-card-content">
        <div className="cruise-card-badges">
          <div className="cruise-card-badge">
            <Clock className="icon" />
            {duration}
          </div>
          <div className="cruise-card-badge">
            <Utensils className="icon" />
            Meals
          </div>
          <div className="cruise-card-badge">
            <MapPin className="icon" />
            {location}
          </div>
        </div>
        <h3 className="cruise-card-title">{title}</h3>
        <div className="cruise-card-price">
          <span className="cruise-card-original-price">INR {originalPrice.toFixed(2)}</span>
          <span className="cruise-card-discounted-price">INR {discountedPrice.toFixed(2)}</span>
        </div>
        <div className="cruise-card-rating">
          <span className="cruise-card-rating-stars">★ {rating.toFixed(1)}</span>
          <span className="cruise-card-reviews">({reviews})</span>
        </div>
      </div>
      <div className="cruise-card-footer">
        <button className="cruise-card-button-outline">
          <a href={`/booking/${id}`}>Book Now</a>
        </button>
        <button className="cruise-card-button-primary">
          <a href={`/cruise/${id}`}>Get Details</a>
        </button>
      </div>
    </div>
  );
}

export default CruiseCard;
