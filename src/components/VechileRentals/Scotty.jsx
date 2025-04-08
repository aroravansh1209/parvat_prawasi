import React,{ useState } from "react";
import "../../Styles/VechileScootyRental.css"

const scooties = [
  {
    id: 1,
    name: "Urban Zip",
    description: "Compact scooty for quick city commutes",
    imageSrc: "/placeholder.svg?height=200&width=300",
    hourlyRate: 5,
    dailyRate: 30,
    weeklyRate: 150,
  },
  {
    id: 2,
    name: "Eco Rider",
    description: "Electric scooty for eco-friendly travel",
    imageSrc: "/placeholder.svg?height=200&width=300",
    hourlyRate: 6,
    dailyRate: 35,
    weeklyRate: 175,
  },
  // Add more scooties here...
];

export default function ScootyRentalPage() {
  return (
    <div className="Scotty-container">
      <h1 className="Scotty-title">Scooty Rentals</h1>

      <div className="Scotty-grid">
        {scooties.map((scooty) => (
          <ScootyCard key={scooty.id} scooty={scooty} />
        ))}
      </div>

      <div className="Scotty-card">
        <div className="Scotty-card-content">
          <h2 className="Scotty-subtitle">Rental Conditions</h2>
          <ul className="Scotty-list">
            <li>Valid driver's license required</li>
            <li>Minimum age: 18 years</li>
            <li>Helmet provided (mandatory use)</li>
            <li>Security deposit: $50</li>
            <li>Return with full fuel tank (for non-electric models)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ScootyCard({ scooty }) {
  return (
    <div className="Scotty-dialog">
      <div className="Scotty-card-trigger">
        <div className="Scotty-card">
          <div className="Scotty-card-content">
            <img
              src={scooty.imageSrc || "/placeholder.svg"}
              alt={scooty.name}
              width={300}
              height={200}
              className="Scotty-image"
            />
            <h3 className="Scotty-card-title">{scooty.name}</h3>
            <p className="Scotty-description">{scooty.description}</p>
          </div>
        </div>
      </div>
      <div className="Scotty-dialog-content">
        <div className="Scotty-dialog-header">
          <h2>{scooty.name}</h2>
        </div>
        <div className="Scotty-grid">
          <div className="Scotty-grid-item">
            <label className="Scotty-label" htmlFor="hourly-rate">Hourly Rate</label>
            <div>${scooty.hourlyRate}</div>
          </div>
          <div className="Scotty-grid-item">
            <label className="Scotty-label" htmlFor="daily-rate">Daily Rate</label>
            <div>${scooty.dailyRate}</div>
          </div>
          <div className="Scotty-grid-item">
            <label className="Scotty-label" htmlFor="weekly-rate">Weekly Rate</label>
            <div>${scooty.weeklyRate}</div>
          </div>
        </div>
        <hr className="Scotty-separator" />
        <form className="Scotty-form">
          <div>
            <label htmlFor="pickup-date" className="Scotty-label">Pickup Date</label>
            <input type="date" id="pickup-date" required className="Scotty-input" />
          </div>
          <div>
            <label htmlFor="return-date" className="Scotty-label">Return Date</label>
            <input type="date" id="return-date" required className="Scotty-input" />
          </div>
          <button type="submit" className="Scotty-button">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}
