import React from "react";
import PropTypes from "prop-types";
import { MapPin, Star } from "lucide-react";
import "../../Styles/PackageDestinationPage.css"; // Import the CSS file

export function PackagesDestinationCard({
  id,
  name,
  description,
  image,
  rating,
  currentPrice,
  originalPrice,
  tourOptions,
}) {
  return (
    <div className="packagedestination-card">
      <div className="packagedestination-image-container">
        <img
          src={image || "/placeholder.svg"}
          alt={`View of ${name}`}
          className="packagedestination-image"
        />
      </div>
      <div className="packagedestination-card-content">
        <div className="packagedestination-location">
          <MapPin className="packagedestination-icon" />
          <h3 className="packagedestination-title">{name}</h3>
        </div>
        <p className="packagedestination-description">{description}</p>
        <div className="packagedestination-badges">
          {tourOptions.map((option) => (
            <span key={option} className="packagedestination-badge">
              {option}
            </span>
          ))}
        </div>
        <div className="packagedestination-rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`packagedestination-star ${i < rating ? "packagedestination-filled" : "packagedestination-empty"}`}
            />
          ))}
        </div>
        <div className="packagedestination-price">
          <span className="packagedestination-current-price">
            ₹{currentPrice.toLocaleString()}
          </span>
          <span className="packagedestination-original-price">
            ₹{originalPrice.toLocaleString()}
          </span>
        </div>
        <a href={`/packages/beach-bliss`} className="packagedestination-view-details">
          <button className="packagedestination-view-details-button">View Details</button>
        </a>
      </div>
    </div>
  );
}

PackagesDestinationCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  rating: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
  originalPrice: PropTypes.number.isRequired,
  tourOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
