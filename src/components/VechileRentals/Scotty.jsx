import React, { useState } from "react";
import "../../Styles/VechileCarRental.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Vechile4 from "../../assets/Vechile4.webp";
import Vechile5 from "../../assets/Vechile5.webp";
import Vechile6 from "../../assets/Vechile6.jpg";
import logo from '../../assets/logo.jpeg';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config";
import { useNavigate } from "react-router-dom";

export default function BikeRentalPage() {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const navigate = useNavigate();


  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    onAuthStateChanged(auth, async(user) => {
      if (!user) {
        navigate("/login") // 👈 redirect to home if not logged in
      }else{
        if (pickupDate && returnDate) {
          const start = new Date(pickupDate);
          const end = new Date(returnDate);
          const diffTime = end - start;
          const diffDays = Math.ceil(diffTime / (1000   * 60 * 60 * 24));
    
          if (diffDays < 0) {
            alert("Return date must be after pickup date.");
          } else {
            const res = await loadScript(
              "https://checkout.razorpay.com/v1/checkout.js"
            );
    
            if (!res) {
              alert("Razorpay SDK failed to load, check your connection", "error");
              return;
            }
    
            const options = {
              key: "rzp_test_LpWFumLwrNuZX3",
              amount: 700 * diffDays * 100,
              currency: "INR",
              name: "ParvatPrawasi",
              description: "Thank you for shopping with us",
              image: logo,
              handler: function (response) {
                console.log(response);
                alert("Order Placed Successfully!");
              },
              prefill: {
                name: "vansh",
                email: "vansh@gmail.com",
                contact: "8000452773",
              },
              theme: {
                color: "#392F5A",
              },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
          }
        } else {
          alert("Please select both dates.");
        }
      }
    })
  };

  return (
    <>
      <Navbar />
      <div className="car-container">
        <div className="car-grid">
          <div className="car-main-content">
            <h2 className="car-subtitle">Choose Your Bike</h2>
            <div className="car-cards">
              <CarCard name="Royal Enfield Himalayan" description="Ride Smart, Enjoy the Journey." imagerc={Vechile4} />
              <CarCard name="Royal Enfield Classic 350" description="Ride in Comfort, Experience the City." imagerc={Vechile5} />
              <CarCard name="Suzuki Access 125" description="Effortless Rides, Everyday Comfort." imagerc={Vechile6} />
            </div>

            <div className="car-terms">
              <h3 className="car-terms-title">Rental Terms and Conditions</h3>
              <ul className="car-terms-list">
                <li>All drivers must hold a valid driver's license and be at least 21 years old.</li>
                <li>A refundable security deposit is required at the time of pickup.</li>
                <li>The vehicle must be returned with a full tank of fuel.</li>
                <li>Late returns will incur additional charges on a per-hour basis.</li>
                <li>Rented vehicles are for personal use only and not for commercial purposes.</li>
                <li>Any damage to the vehicle during the rental period must be reported immediately.</li>
              </ul>
            </div>
          </div>

          <div className="car-booking-form">
            <div className="car-card-header">
              <h3 className="car-card-title">Book a Bike</h3>
            </div>
            <div className="car-card-content">
              <form className="car-form" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="pickup-date" className="car-label">Pickup Date</label>
                  <input
                    type="date"
                    id="pickup-date"
                    className="car-input"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="return-date" className="car-label">Return Date</label>
                  <input
                    type="date"
                    id="return-date"
                    className="car-input"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="car-type" className="car-label">Bike Type</label>
                  <select id="car-type" className="car-select" required>
                    <option value="">Select a bike type</option>
                    <option value="suv">Royal Enfield Himalayan</option>
                    <option value="sedan">Royal Enfield Classic 350</option>
                    <option value="electric">Suzuki Access 125
                    </option>
                  </select>
                </div>
                <div className="car-separator"></div>
                <button type="submit" className="car-button">Book Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function CarCard({ name, description, imagerc }) {
  return (
    <div className="car-card">
      <div className="car-card-content">
        <img src={imagerc || "/placeholder.svg"} alt={name} className="car-image" />
        <h3 className="car-card-name">{name}</h3>
        <p className="car-card-description">{description}</p>
      </div>
    </div>
  );
}
