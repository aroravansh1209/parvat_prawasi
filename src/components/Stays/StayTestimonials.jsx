import { Star } from "lucide-react"
import "../../Styles/StayTestimonials.css"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United Kingdom",
    rating: 5,
    comment: "Amazing experience! The villa exceeded our expectations. Perfect location and incredible service.",
    image: "/placeholder.svg?height=100&width=100",
    stay: "Luxury Beach Resort",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    comment: "One of the best stays I've had. The staff was extremely helpful and the amenities were top-notch.",
    image: "/placeholder.svg?height=100&width=100",
    stay: "Heritage Portuguese House",
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment: "Beautiful property with stunning views. We'll definitely be coming back!",
    image: "/placeholder.svg?height=100&width=100",
    stay: "Seaside Villa",
  },
]

export default function Testimonials() {
  return (
    <div className="StayTestimonials py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Guests Say</h2>
          <p className="mt-4 text-xl text-gray-600">Real experiences from real travelers</p>
        </div>
        <div className="StayTestimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="StayTestimonials-card">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="StayTestimonials-image"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="StayTestimonials-star" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.comment}</p>
              <p className="text-sm text-gray-500">
                Stayed at <span className="font-medium">{testimonial.stay}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
