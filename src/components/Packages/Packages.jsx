import React, { useEffect, useState } from "react";
import { getDestinations } from "../Packages/getDestination";
import Footer from "../../components/Footer";
import '../../Styles/Packages.css'; // Import the normal CSS file
import { PackagesHeroSection } from "./PackageHeroSection";
import { PackagesDestinationCard } from "./PackageDestinationPage";
import { PackagesTestimonials } from "./PackageTestimonials";
import { PackagesNewsletterSignup } from "./PackageNewslwtter";
import Navbar from "../Navbar";

export default function Packages() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      const data = await getDestinations();
      setDestinations(data);
    };

    fetchDestinations();
  }, []);

  return (
    <>
    <Navbar/>
    <main className="packages-home-page">
      <br/>
      <PackagesHeroSection />
      <div className="packages-destinations-section">
        <h2 className="packages-section-title">Explore Goa Destinations</h2>
        <div className="packages-destination-grid">
          {destinations.map((destination) => (
            <PackagesDestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      </div>
      <PackagesTestimonials />
      <PackagesNewsletterSignup />
      <Footer />
    </main>
    </>
  );
}
