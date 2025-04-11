import React, { act, useEffect, useState } from 'react';
import { Clock, MapPin, Star, Shield } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom'; // For regular React Router
import '../../Styles/ActivityPage.css'; // Updated path for regular CSS
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

export default function ActivityPage({ params }) {

  const navigate = useNavigate();
  const { activityId } = useParams();
  const [activity, setActivity] = useState({});

  const data = {
    id: 'scuba-1',
    title: 'Grand Island Scuba Diving with Free Videography',
    description:
      'Experience the underwater world with our professional scuba diving package. Perfect for beginners and experienced divers alike.',
    image: activity1,
    images: [activity1],
    discount: 25,
    rating: 4.9,
    reviews: 554,
    duration: 2,
    persons: 1,
    price: 3749,
    originalPrice: 4999,
    category: 'Scuba Diving',
    safetyMeasures: [
      'Certified instructors',
      'Quality equipment',
      'Safety briefing',
      'Insurance coverage',
    ],
    includes: [
      'Underwater photos',
      'Transport',
      'Refreshments',
    ],
    location: 'Grand Island, Goa',
    restrictions: ['Minimum age: 10 years', 'Good physical condition required', 'No cardiac problems'],
    id: 'scuba-2',
    title: 'Grand Island Scuba Diving with Free Videography',
    description:
      'Experience the underwater world with our professional scuba diving package. Perfect for beginners and experienced divers alike.',
    image: activity2,
    images: [activity2],
    discount: 25,
    rating: 4.9,
    reviews: 554,
    duration: 2,
    persons: 1,
    price: 3749,
    originalPrice: 4999,
    category: 'Scuba Diving',
    safetyMeasures: [
      'Certified instructors',
      'Quality equipment',
      'Safety briefing',
      'Insurance coverage',
    ],
    includes: [
      'Underwater photos',
      'Transport',
      'Refreshments',
    ],
    location: 'Grand Island, Goa',
    restrictions: ['Minimum age: 10 years', 'Good physical condition required', 'No cardiac problems'],
    id: 'scuba-1',
    title: 'Grand Island Scuba Diving with Free Videography',
    description:
      'Experience the underwater world with our professional scuba diving package. Perfect for beginners and experienced divers alike.',
    image: activity1,
    images: [activity1],
    discount: 25,
    rating: 4.9,
    reviews: 554,
    duration: 2,
    persons: 1,
    price: 3749,
    originalPrice: 4999,
    category: 'Scuba Diving',
    safetyMeasures: [
      'Certified instructors',
      'Quality equipment',
      'Safety briefing',
      'Insurance coverage',
    ],
    includes: [
      'Underwater photos',
      'Transport',
      'Refreshments',
    ],
    location: 'Grand Island, Goa',
    restrictions: ['Minimum age: 10 years', 'Good physical condition required', 'No cardiac problems'],
    id: 'scuba-1',
    title: 'Grand Island Scuba Diving with Free Videography',
    description:
      'Experience the underwater world with our professional scuba diving package. Perfect for beginners and experienced divers alike.',
    image: activity1,
    images: [activity1],
    discount: 25,
    rating: 4.9,
    reviews: 554,
    duration: 2,
    persons: 1,
    price: 3749,
    originalPrice: 4999,
    category: 'Scuba Diving',
    safetyMeasures: [
      'Certified instructors',
      'Quality equipment',
      'Safety briefing',
      'Insurance coverage',
    ],
    includes: [
      'Underwater photos',
      'Transport',
      'Refreshments',
    ],
    location: 'Grand Island, Goa',
    restrictions: ['Minimum age: 10 years', 'Good physical condition required', 'No cardiac problems'],
    id: 'scuba-1',
    title: 'Grand Island Scuba Diving with Free Videography',
    description:
      'Experience the underwater world with our professional scuba diving package. Perfect for beginners and experienced divers alike.',
    image: activity1,
    images: [activity1],
    discount: 25,
    rating: 4.9,
    reviews: 554,
    duration: 2,
    persons: 1,
    price: 3749,
    originalPrice: 4999,
    category: 'Scuba Diving',
    safetyMeasures: [
      'Certified instructors',
      'Quality equipment',
      'Safety briefing',
      'Insurance coverage',
    ],
    includes: [
      'Underwater photos',
      'Transport',
      'Refreshments',
    ],
    location: 'Grand Island, Goa',
    restrictions: ['Minimum age: 10 years', 'Good physical condition required', 'No cardiac problems'],
    id: 'scuba-1',
    title: 'Grand Island Scuba Diving with Free Videography',
    description:
      'Experience the underwater world with our professional scuba diving package. Perfect for beginners and experienced divers alike.',
    image: activity1,
    images: [activity1],
    discount: 25,
    rating: 4.9,
    reviews: 554,
    duration: 2,
    persons: 1,
    price: 3749,
    originalPrice: 4999,
    category: 'Scuba Diving',
    safetyMeasures: [
      'Certified instructors',
      'Quality equipment',
      'Safety briefing',
      'Insurance coverage',
    ],
    includes: [
      'Underwater photos',
      'Transport',
      'Refreshments',
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

  useEffect(()=>{
    const res = data.find((item)=>item.id == activityId)
    setActivity(res)
  },[])

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
  
    const handleClick=async()=>{
      onAuthStateChanged(auth, async(user) => {
        if (!user) {
          navigate("/login") // 👈 redirect to home if not logged in
        }else{
          const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
          );
    
          if (!res) {
            alert("Razorpay SDK failed to load, check you connection", "error");
            return;
          }
    
          const options = {
            key: "rzp_test_LpWFumLwrNuZX3",
            amount: (activity.price) * 100,
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
      })
    }

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
              {/* <Link to={`/booking/${activity.id}`} className="activityPage-booking-link"> */}
                <button onClick={()=>handleClick()} className="activityPage-booking-button">Book Now</button>
              {/* </Link> */}
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
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
