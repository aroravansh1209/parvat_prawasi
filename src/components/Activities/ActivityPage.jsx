import React from 'react';
import { Clock, MapPin, Star, Shield } from 'lucide-react';
import { Link } from 'react-router-dom'; // For regular React Router
import '../../Styles/ActivityPage.css'; // Updated path for regular CSS
import { ActivityImageSection } from './ActivityImageSection';
import { ActivityReview } from './ActivityReview';
import { ActivityRelatedActivities } from './ActivityRelatedActivities';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function ActivityPage({ params }) {
  const activity = {
    id: 'scuba-1',
    title: 'Grand Island Scuba Diving with Free Videography',
    description:
      'Experience the underwater world with our professional scuba diving package. Perfect for beginners and experienced divers alike.',
    image: '/Stay1.webp',
    images: ['/Stay1.webp', '/Stay2.webp', '/Stay3.webp'],
    discount: 25,
    rating: 4.9,
    reviews: 554,
    duration: 8,
    persons: 2,
    price: 1500,
    originalPrice: 2000,
    category: 'Scuba Diving',
    safetyMeasures: [
      'Certified instructors',
      'Quality equipment',
      'Safety briefing',
      'Insurance coverage',
    ],
    includes: [
      'Professional instructor',
      'Scuba gear',
      'Underwater photos',
      'Transport',
      'Refreshments',
    ],
    schedule: [
      { startTime: '07:00', endTime: '15:00', availability: 8 },
      { startTime: '09:00', endTime: '17:00', availability: 6 },
      { startTime: '11:00', endTime: '19:00', availability: 4 },
    ],
    location: 'Grand Island, Goa',
    restrictions: ['Minimum age: 10 years', 'Good physical condition required', 'No cardiac problems'],
  };

  const reviews = [
    {
      id: '1',
      author: 'John Doe',
      avatar: '/placeholder.svg?height=40&width=40',
      rating: 5,
      date: '2023-05-15',
      content:
        'Amazing experience! The instructors were very professional and made sure we felt safe throughout the dive.',
    },
    {
      id: '2',
      author: 'Jane Smith',
      avatar: '/placeholder.svg?height=40&width=40',
      rating: 4,
      date: '2023-05-10',
      content:
        'Great adventure, but the boat ride was a bit rough. Overall, I\'d recommend it to anyone looking for an exciting day out.',
    },
  ];

  const relatedActivities = [
    {
      id: 'parasailing-1',
      title: 'Parasailing Adventure',
      image: '/Activity5.avif',
      duration: 2,
      price: 1200,
    },
    {
      id: 'jetski-1',
      title: 'Jet Ski Tour',
      image: '/Activity5.avif',
      duration: 1,
      price: 800,
    },
    {
      id: 'snorkeling-1',
      title: 'Snorkeling Trip',
      image: '/Activity5.avif',
      duration: 4,
      price: 1000,
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="activityPage-container">
      <div className="activityPage-grid">
        <div className="activityPage-main-content">
          <div className="activityPage-header">
            <h1 className="activityPage-title">{activity.title}</h1>
            <div className="activityPage-meta">
              <div className="activityPage-rating">
                <Star className="activityPage-star-icon" />
                <span>
                  {activity.rating} ({activity.reviews} reviews)
                </span>
              </div>
              <div className="activityPage-duration">
                <Clock className="activityPage-clock-icon" />
                <span>{activity.duration} hours</span>
              </div>
              <div className="activityPage-location">
                <MapPin className="activityPage-map-icon" />
                <span>{activity.location}</span>
              </div>
            </div>
          </div>

          <ActivityImageSection images={activity.images} title={activity.title} />

          <div className="activityPage-sidebar">
          <div className="activityPage-card">
            <div className="activityPage-card-content">
              <div className="activityPage-price">
                <div className="activityPage-price-info">
                  <div className="activityPage-price-value">
                    ₹{activity.price}
                  </div>
                  <div className="activityPage-badge">{activity.discount}% OFF</div>
                </div>
                <div className="activityPage-price-original">
                  <span className="activityPage-price-strike">₹{activity.originalPrice}</span>
                  <span>per person</span>
                </div>
              </div>
              <Link to={`/booking/${activity.id}`} className="activityPage-booking-link">
                <button className="activityPage-booking-button">Book Now</button>
              </Link>
            </div>
          </div>
        </div>

          <div className="activityPage-tabs">
            <div className="activityPage-tabs-list">
              <button className="activityPage-tab-trigger">Description</button>
              <button className="activityPage-tab-trigger">What's Included</button>
              <button className="activityPage-tab-trigger">Safety</button>
            </div>
            <div className="activityPage-tab-content">
              <p>{activity.description}</p>
              <div>
                <h3 className="activityPage-restrictions-title">Restrictions</h3>
                <ul className="activityPage-restrictions-list">
                  {activity.restrictions.map((restriction, index) => (
                    <li key={index}>{restriction}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="activityPage-tab-content">
              <ul className="activityPage-includes-list">
                {activity.includes.map((item, index) => (
                  <li key={index} className="activityPage-includes-item">
                    <Shield className="activityPage-shield-icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="activityPage-tab-content">
              <ul className="activityPage-safety-list">
                {activity.safetyMeasures.map((measure, index) => (
                  <li key={index} className="activityPage-safety-item">
                    <Shield className="activityPage-shield-icon" />
                    {measure}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ActivityReview reviews={reviews} />

          <ActivityRelatedActivities activities={relatedActivities} />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
