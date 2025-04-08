import React,{ useState, useEffect } from "react";
import { goaPackages } from "../Packages/goaPackages"; // Adjust path if necessary
import { Star, Check } from "lucide-react";
import "../../Styles/PackagePage.css"
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

export async function generateStaticParams() {
  return goaPackages.map((pkg) => ({
    id: pkg.id,
  }));
}

export default function PackagePage() {
  const {packagesId} = useParams();
  const pkg = goaPackages.find((p) => p.id === packagesId);

  if (!pkg) {
    // If package is not found, you can handle it using React router's `Redirect` or custom 404 logic
    return <div>Package not found</div>;
  }

  return (
    <>
    <Navbar />
    <main className="PackagePage">
      <div className="PackagePage__grid">
        <div>
          <img
            src={pkg.image || "/placeholder.svg"}
            alt={pkg.name}
            className="PackagePage__image"
          />
        </div>
        <div className="PackagePage__details">
          <h1 className="PackagePage__title">{pkg.name}</h1>
          <p className="PackagePage__duration">{pkg.duration}</p>
          <div className="PackagePage__rating">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`PackagePage__star ${
                  i < Math.floor(pkg.rating) ? "filled" : "empty"
                }`}
              />
            ))}
            <span className="PackagePage__ratingValue">{pkg.rating.toFixed(1)}</span>
          </div>
          <p className="PackagePage__description">{pkg.description}</p>
          <div className="PackagePage__price">₹{pkg.price.toLocaleString()}</div>
          <button className="PackagePage__button">Book Now</button>
        </div>
      </div>

      <div className="PackagePage__highlights">
        <div className="PackagePage__card">
          <div className="PackagePage__cardContent">
            <h2 className="PackagePage__sectionTitle">Package Highlights</h2>
            <ul className="PackagePage__highlightList">
              {pkg.highlights.map((highlight, index) => (
                <li key={index} className="PackagePage__highlightItem">
                  <Check className="PackagePage__checkIcon" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="PackagePage__card">
          <div className="PackagePage__cardContent">
            <h2 className="PackagePage__sectionTitle">Itinerary</h2>
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Activities</th>
                </tr>
              </thead>
              <tbody>
                {pkg.itinerary.map((day) => (
                  <tr key={day.day}>
                    <td>Day {day.day}</td>
                    <td>
                      <ul className="PackagePage__activityList">
                        {day.activities.map((activity, index) => (
                          <li key={index}>{activity}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="PackagePage__card">
          <div className="PackagePage__cardContent">
            <h2 className="PackagePage__sectionTitle">Inclusions</h2>
            <ul className="PackagePage__inclusionList">
              {pkg.inclusions.map((inclusion, index) => (
                <li key={index} className="PackagePage__inclusionItem">
                  <Check className="PackagePage__checkIcon" />
                  <span>{inclusion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="PackagePage__infoGrid">
          <div className="PackagePage__card">
            <div className="PackagePage__cardContent">
              <h2 className="PackagePage__sectionSubtitle">Accommodation</h2>
              <p>{pkg.accommodation}</p>
            </div>
          </div>
          <div className="PackagePage__card">
            <div className="PackagePage__cardContent">
              <h2 className="PackagePage__sectionSubtitle">Transportation</h2>
              <p>{pkg.transportation}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
