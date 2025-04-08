import React, { useState } from "react";
import "../../Styles/VechileCarRental.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Vechile1 from "../../assets/Vechile1.jpg";
import Vechile2 from "../../assets/Vechile2.jpg";
import Vechile3 from "../../assets/Vechile3.jpg";
import logo from '../../assets/logo.jpeg'

export default function CarRentalPage() {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");


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
    

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (pickupDate && returnDate) {
      const start = new Date(pickupDate);
      const end = new Date(returnDate);
      const diffTime = end - start;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays < 0) {
        alert("Return date must be after pickup date.");
      } else {
       
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );
  
        if (!res) {
          alert("Razorpay SDK failed to load, check you connection", "error");
          return;
        }
  
        const options = {
          key: "rzp_test_LpWFumLwrNuZX3",
          amount: (1000 * diffDays) * 100,
          currency: "INR",
          name: "ParvatPrawasi",
          description: "Thank you for shopping with us",
          image: logo,
          handler: function (response) {
            console.log(response);
            toast.success("Order Placed", {
              position: "bottom-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
  
            setCartItems(() => []);
            setTotalPrice(0);
            setTotalDiscount(0);
  
            navigate("/");
          },
          prefill: {
            name: `vansh`,
            email: 'vansh@gmail.com',
            contact: "8946895151",
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
  };

  return (
    <>
      <Navbar />
      <div className="car-container">
        <div className="car-grid">
          <div className="car-main-content">
            <h2 className="car-subtitle">Choose Your Car</h2>
            <div className="car-cards">
              <CarCard name="Thar" description="Your Perfect Ride Awaits – Rent a Thar Today!" imageSrc={Vechile1} />
              <CarCard name="Maruti Suzuki Jimny" description="Rent the Maruti Suzuki Jimny – Compact, Fun, and Ready to Go." imageSrc={Vechile2} />
              <CarCard name="Gypsy" description="Unleash the Ride, Anytime, Anywhere." imageSrc={Vechile3} />
            </div>

            {/* ... Rental Conditions & Pricing cards ... */}
          </div>

          <div className="car-booking-form">
            <div className="car-card-header">
              <h3 className="car-card-title">Book a Car</h3>
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
                  <label htmlFor="car-type" className="car-label">Car Type</label>
                  <select id="car-type" className="car-select" required>
                    <option value="">Select a car type</option>
                    <option value="suv">Thar</option>
                    <option value="sedan">Maruti Suzuki Jimny</option>
                    <option value="electric">Gypsy</option>
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

function CarCard({ name, description, imageSrc }) {
  return (
    <div className="car-card">
      <div className="car-card-content">
        <img src={imageSrc || "/placeholder.svg"} alt={name} className="car-image" />
        <h3 className="car-card-name">{name}</h3>
        <p className="car-card-description">{description}</p>
      </div>
    </div>
  );
}
