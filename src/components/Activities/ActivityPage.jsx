import React, { useEffect, useState } from 'react';
import { Clock, MapPin, Star, Shield } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../Styles/ActivityPage.css';
import { ActivityImageSection } from './ActivityImageSection';
import { ActivityReview } from './ActivityReview';
import Navbar from '../Navbar';
import Footer from '../Footer';
import logo from "../../assets/logo.jpeg";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config';
import activity1 from "../../assets/Activity1.webp";
import activity2 from "../../assets/Activity2.jpg";
import activity3 from "../../assets/Activity3.jpeg";
import activity4 from "../../assets/Activity4.jpeg";
import activity5 from "../../assets/Activity5.webp";
import activity6 from "../../assets/Activity6.webp";

export default function ActivityPage() {
  const navigate = useNavigate();
  const { activityId } = useParams();
  const [activity, setActivity] = useState(null);

  const data = [
    {
      id: 'para-1',
      title: 'Bungee Jumping',
      description: 'Thrilling jump experience with safety ensured.',
      image: activity1,
      images: [activity1],
      discount: 25,
      rating: 4.9,
      reviews: 554,
      duration: 2,
      persons: 1,
      price: 3749,
      originalPrice: 4999,
      safetyMeasures: ['Certified instructors', 'Quality equipment', 'Safety briefing', 'Insurance coverage'],
      actincludes: ['Underwater photos', 'Transport', 'Refreshments'],
      location: 'Grand Island, Goa',
      restrictions: ['Minimum age: 10 years', 'Good physical condition required', 'No cardiac problems'],
    },
    {
      id: 'para-2',
      title: 'Para Gliding',
      description: 'Soar the skies with expert pilots.',
      image: activity2,
      images: [activity2],
      discount: 25,
      rating: 4.9,
      reviews: 554,
      duration: 2,
      persons: 1,
      price: 3749,
      originalPrice: 4999,
      location: 'Grand Island, Goa',
      safetyMeasures: ['Certified instructors', 'Quality equipment', 'Safety briefing', 'Insurance coverage'],
      actincludes: ['Photos', 'Transport', 'Refreshments'],
      restrictions: ['Minimum age: 10 years', 'Good physical condition required', 'No cardiac problems'],
    },
    {
      id: 'para-3',
      title: 'Treking',
      description: 'Explore scenic trails with experienced guides.',
      image: activity3,
      images: [activity3],
      discount: 25,
      rating: 4.9,
      reviews: 554,
      duration: 2,
      persons: 1,
      price: 3749,
      originalPrice: 4999,
      location: 'Grand Island, Goa',
      safetyMeasures: ['Certified guides', 'Proper gear', 'Briefing session', 'Insurance coverage'],
      actincludes: ['Snacks', 'Transport', 'Guide'],
      restrictions: ['Minimum age: 12 years', 'Fitness required'],
    },
    {
      id: 'para-4',
      title: 'River Rafting',
      description: 'High-adrenaline rafting with expert supervision.',
      image: activity4,
      images: [activity4],
      discount: 25,
      rating: 4.9,
      reviews: 554,
      duration: 2,
      persons: 1,
      price: 3749,
      originalPrice: 4999,
      location: 'Grand Island, Goa',
      safetyMeasures: ['Certified instructors', 'Life jackets', 'Briefing', 'Insurance'],
      actincludes: ['Photos', 'Transport', 'Snacks'],
      restrictions: ['Must know swimming', 'Minimum age: 12 years'],
    },
    {
      id: 'para-5',
      title: 'Grand Island Scuba Diving with Free Videography',
      description: 'Professional scuba experience with video memories.',
      image: activity5,
      images: [activity5],
      discount: 25,
      rating: 4.9,
      reviews: 554,
      duration: 2,
      persons: 1,
      price: 3749,
      originalPrice: 4999,
      location: 'Grand Island, Goa',
      safetyMeasures: ['Certified instructors', 'Safety gear', 'Briefing', 'Insurance'],
      actincludes: ['Underwater videography', 'Transport', 'Refreshments'],
      restrictions: ['Minimum age: 10 years', 'Good physical condition required'],
    },
    {
      id: 'para-6',
      title: 'Underwater Scuba with Photography',
      description: 'Dive with confidence and take memories back.',
      image: activity6,
      images: [activity6],
      discount: 25,
      rating: 4.9,
      reviews: 554,
      duration: 2,
      persons: 1,
      price: 3749,
      originalPrice: 4999,
      location: 'Grand Island, Goa',
      safetyMeasures: ['Experienced divers', 'Top equipment', 'Full safety brief', 'Insurance'],
      actincludes: ['Photos & videos', 'Transport', 'Snacks'],
      restrictions: ['Minimum age: 10 years', 'Medical fitness required'],
    },
  ];

  useEffect(() => {
    const res = data.find((item) => item.id === activityId);
    setActivity(res);
  }, [activityId]);

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleClick = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return navigate("/login");

      const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const options = {
        key: "rzp_test_LpWFumLwrNuZX3",
        amount: activity.price * 100,
        currency: "INR",
        name: "ParvatPrawasi",
        description: "Thank you for booking!",
        image: logo,
        handler: function (response) {
          console.log(response);
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
    });
  };

  return (
    <>
      <Navbar />
      {activity && (
        <div className="activityPage-container">
          <div className="activityPage-grid">
            <div className="activityPage-main-content">
              <div className="activityPage-header">
                <h1 className="activityPage-title">{activity.title}</h1>
                <div className="activityPage-meta">
                  <div className="activityPage-rating">
                    <Star className="activityPage-star-icon" />
                    <span>{activity.rating} ({activity.reviews} reviews)</span>
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

              <div className="activityPage-description">
                <h2>About the Activity</h2>
                <p>{activity.description}</p>
              </div>

              <div className="activityPage-includes">
                <h3>Included</h3>
                <ul>
                  {activity.actincludes.map((item, index) => (
                    <li key={index}>✔ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="activityPage-safety">
                <h3>Safety Measures</h3>
                <ul>
                  {activity.safetyMeasures.map((item, index) => (
                    <li key={index}><Shield size={16} /> {item}</li>
                  ))}
                </ul>
              </div>

              <div className="activityPage-restrictions">
                <h3>Restrictions</h3>
                <ul>
                  {activity.restrictions.map((item, index) => (
                    <li key={index}>⚠️ {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="activityPage-sidebar">
              <div className="activityPage-card">
                <div className="activityPage-card-content">
                  <div className="activityPage-price">
                    <div className="activityPage-price-info">
                      <div className="activityPage-price-value">₹{activity.price}</div>
                      <div className="activityPage-badge">{activity.discount}% OFF</div>
                    </div>
                    <div className="activityPage-price-original">
                      <span className="activityPage-price-strike">₹{activity.originalPrice}</span>
                      <span>per person</span>
                    </div>
                  </div>
                  <button onClick={handleClick} className="activityPage-booking-button">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
