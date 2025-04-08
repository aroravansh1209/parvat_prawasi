import { useState } from "react";

const bikes = [
  {
    id: 1,
    name: "Mountain Explorer",
    description: "Rugged mountain bike for off-road adventures",
    imageSrc: "/placeholder.svg?height=200&width=300",
    hourlyRate: 12,
    dailyRate: 60,
    weeklyRate: 300,
  },
  {
    id: 2,
    name: "City Cruiser",
    description: "Comfortable bike for urban exploration",
    imageSrc: "/placeholder.svg?height=200&width=300",
    hourlyRate: 10,
    dailyRate: 50,
    weeklyRate: 250,
  },
  {
    id: 3,
    name: "Speed Demon",
    description: "Lightweight road bike for speed enthusiasts",
    imageSrc: "/placeholder.svg?height=200&width=300",
    hourlyRate: 15,
    dailyRate: 75,
    weeklyRate: 375,
  },
  {
    id: 4,
    name: "Electric Glide",
    description: "E-bike for effortless rides around town",
    imageSrc: "/placeholder.svg?height=200&width=300",
    hourlyRate: 18,
    dailyRate: 90,
    weeklyRate: 450,
  },
];

export default function BikeRentalPage() {
  return (
    <div className="bike-container">
      <h1 className="bike-title">Bike Rentals</h1>

      <div className="bike-grid">
        {bikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>

      <div className="bike-card bike-card-rental">
        <div className="bike-card-content">
          <h2 className="bike-subtitle">Rental Conditions</h2>
          <ul className="bike-list">
            <li>Valid driver's license required</li>
            <li>Minimum age: 18 years</li>
            <li>Helmet provided (mandatory use)</li>
            <li>Security deposit: $100</li>
            <li>Return with full fuel tank (for e-bikes)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function BikeCard({ bike }) {
  return (
    <div className="bike-dialog">
      <div className="bike-card bike-card-trigger">
        <div className="bike-card-content">
          <img
            src={bike.imageSrc || "/placeholder.svg"}
            alt={bike.name}
            className="bike-image"
          />
          <h3 className="bike-card-name">{bike.name}</h3>
          <p className="bike-card-description">{bike.description}</p>
        </div>
      </div>

      <div className="bike-dialog-content">
        <div className="bike-dialog-header">
          <h4 className="bike-dialog-title">{bike.name}</h4>
        </div>
        <div className="bike-info">
          <div className="bike-info-row">
            <label htmlFor="hourly-rate" className="bike-label">Hourly Rate</label>
            <div className="bike-rate">${bike.hourlyRate}</div>
          </div>
          <div className="bike-info-row">
            <label htmlFor="daily-rate" className="bike-label">Daily Rate</label>
            <div className="bike-rate">${bike.dailyRate}</div>
          </div>
          <div className="bike-info-row">
            <label htmlFor="weekly-rate" className="bike-label">Weekly Rate</label>
            <div className="bike-rate">${bike.weeklyRate}</div>
          </div>
          <div className="bike-separator"></div>
          <form className="bike-form">
            <div>
              <label htmlFor="pickup-date" className="bike-label">Pickup Date</label>
              <input type="date" id="pickup-date" className="bike-input" required />
            </div>
            <div>
              <label htmlFor="return-date" className="bike-label">Return Date</label>
              <input type="date" id="return-date" className="bike-input" required />
            </div>
            <button type="submit" className="bike-button">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}
