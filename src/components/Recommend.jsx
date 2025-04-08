import React, { useState } from "react";
import { data, packages } from "../components/HomeData/HomeData"; // Importing data from the data file
import "../Styles/Recomended.css"; // Importing the CSS file

export default function Recomend() {
  const [active, setActive] = useState(0);

  const handlePackageClick = (index) => {
    setActive(index); // Just update the active index on click
  };

  return (
    <section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => (
            <li
              key={index}
              className={active === index ? "active" : ""}
              onClick={() => handlePackageClick(index)}
            >
              {pkg}
            </li>
          ))}
        </ul>
      </div>
      <div className="destinations">
        <div className="destination-container">
          {data[active].map((destination, index) => (
            <div key={index} className="destination">
              <img src={destination.image} alt={destination.title} />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={destination.info1} alt="info" />
                  <img src={destination.info2} alt="info" />
                  <img src={destination.info3} alt="info" />
                </div>
                {destination.cost && <h4>{destination.cost}</h4>}
                {destination.duration && <p>{destination.duration}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
