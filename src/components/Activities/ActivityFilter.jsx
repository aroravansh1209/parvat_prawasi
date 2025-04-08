"use client";

import { useState } from "react";
import '../../Styles/ActivityFilter.css'

export function ActivityFilter() {
  const [priceRange, setPriceRange] = useState([0, 5000]);

  return (
    <div className="activityfilter-card">
      <div className="activityfilter-card-content">
        <div>
          <h3 className="activityfilter-title">Categories</h3>
          <div className="activityfilter-radio-group">
            <div className="activityfilter-radio-item">
              <input type="radio" id="all" name="category" value="all" defaultChecked />
              <label htmlFor="all">All Activities</label>
            </div>
            <div className="activityfilter-radio-item">
              <input type="radio" id="scuba" name="category" value="scuba" />
              <label htmlFor="scuba">Scuba Diving</label>
            </div>
            <div className="activityfilter-radio-item">
              <input type="radio" id="parasailing" name="category" value="parasailing" />
              <label htmlFor="parasailing">Parasailing</label>
            </div>
            <div className="activityfilter-radio-item">
              <input type="radio" id="jetski" name="category" value="jetski" />
              <label htmlFor="jetski">Jet Ski</label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="activityfilter-title">Price Range</h3>
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="activityfilter-slider"
          />
          <div className="activityfilter-price-range">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>

        <button className="activityfilter-button">Apply Filters</button>
      </div>
    </div>
  );
}
