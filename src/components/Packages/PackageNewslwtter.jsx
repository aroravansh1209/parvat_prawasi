import React, { useState } from "react";
import "../../Styles/PackageNewslwtter.css"; // Import the CSS file

export function PackagesNewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Signed up with email:", email);
    setEmail("");
  };

  return (
    <section className="packageNewsletter-section">
      <div className="packageNewsletter-container">
        <h2 className="packageNewsletter-title">Stay Updated with Our Latest Offers</h2>
        <p className="packageNewsletter-description">
          Subscribe to our newsletter and get exclusive deals on your dream Goa vacation.
        </p>
        <form onSubmit={handleSubmit} className="packageNewsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="packageNewsletter-input"
          />
          <button type="submit" className="packageNewsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
