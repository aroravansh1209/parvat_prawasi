import { cruises } from "../Cruise/CruiseData"
import '../../Styles/Cruise.css'; // Import the CSS file for styles
import { CruiseHeroSection } from "./CruiseHeroSection"
import CruiseCard from "./CruiseCard";
import { CruiseTestimonials } from "./CruiseTestimonials";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Cruise() {
  return (
    <div className="cruise">
      <Navbar />
      <br />  
      <CruiseHeroSection />
      <div className="container">
        <h2 className="section-title">Featured Cruises</h2>
        <div className="cruise-grid">
          {cruises.map((cruise) => (
            <CruiseCard key={cruise.id} {...cruise} />
          ))}
        </div>
      </div>
      <CruiseTestimonials />
      <Footer />
    </div>
  )
}
