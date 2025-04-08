import React from "react";
import "../../Styles/PackageHeroSection.css"; // Import the CSS file
import himacalpackage from "../../assets/himachalpackage.jpeg"

export function PackagesHeroSection() {
  return (
    <div className="packageHero-container">
      <img
        src={himacalpackage}
        alt="Beautiful beach in Goa"
        className="packageHero-image"
      />
      <div className="packageHero-overlay" />
      <div className="packageHero-content">
        <h1 className="packageHero-title">Discover the Magic of Himachal</h1>
        <button className="packageHero-button">
          Explore Packages
        </button>
      </div>
    </div>
  );
}
