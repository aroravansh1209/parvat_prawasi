import React from "react";
import '../../Styles/ActivityRelatedActivites.css'

export function ActivityRelatedActivities({ activities }) {
    return (
      <div className="ActivityRelatedActivity-container">
        <h2 className="ActivityRelatedActivity-title">Related Activities</h2>
        <div className="ActivityRelatedActivity-grid">
          {activities.map((activity) => (
            <div key={activity.id} className="ActivityRelatedActivity-card">
              <div className="ActivityRelatedActivity-imageContainer">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="ActivityRelatedActivity-image"
                />
              </div>
              <div className="ActivityRelatedActivity-content">
                <h3 className="ActivityRelatedActivity-cardTitle">{activity.title}</h3>
                <p className="ActivityRelatedActivity-duration">Duration: {activity.duration} hours</p>
                <p className="ActivityRelatedActivity-price">₹{activity.price}</p>
              </div>
              <div className="ActivityRelatedActivity-footer">
                <a href={`/activities/${activity.id}`} className="ActivityRelatedActivity-button">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  