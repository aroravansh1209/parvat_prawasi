import React from 'react';
import '../../Styles/CruiseTestimonials.css'; // Import the custom CSS

export function CruiseTestimonials() {
  return (
    <section className="cruisetestimonials-section">
      <div className="cruisetestimonials-container">
        <h2 className="cruisetestimonials-heading">What Our Guests Say</h2>
        <div className="cruisetestimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cruisetestimonials-card">
              <div className="cruisetestimonials-card-content">
                <div className="cruisetestimonials-header">
                  <div className="cruisetestimonials-avatar">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="cruisetestimonials-avatar-image"
                    />
                    <div className="cruisetestimonials-avatar-fallback">
                      {testimonial.name[0]}
                    </div>
                  </div>
                  <div className="cruisetestimonials-info">
                    <div className="cruisetestimonials-name">{testimonial.name}</div>
                    <div className="cruisetestimonials-title">{testimonial.title}</div>
                  </div>
                </div>
                <div className="cruisetestimonials-content">{testimonial.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Adventure Enthusiast",
    content:
      "The sunset dinner cruise exceeded all expectations. The service was impeccable and the views were breathtaking!",
    avatar: "/placeholder.svg",
  },
  {
    name: "Michael Chen",
    title: "Food Critic",
    content: "A perfect blend of luxury and comfort. The gourmet dining experience was absolutely outstanding.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Emily Williams",
    title: "Travel Blogger",
    content:
      "One of the best cruise experiences I've had. The attention to detail and customer service were exceptional.",
    avatar: "/placeholder.svg",
  },
];
