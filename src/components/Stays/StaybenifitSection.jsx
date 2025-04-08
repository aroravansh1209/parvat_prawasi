import { Shield, Clock, Heart, Map } from "lucide-react"
import "../../Styles/StayBenifit.css"

const benefits = [
  {
    icon: Shield,
    title: "Secure Booking",
    description: "Your payment and personal information are always protected",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for any questions or concerns",
  },
  {
    icon: Heart,
    title: "Best Selection",
    description: "Handpicked properties to ensure quality and comfort",
  },
  {
    icon: Map,
    title: "Prime Locations",
    description: "Properties in the most sought-after areas of Goa",
  },
]

export default function BenefitsSection() {
  return (
    <div className="StayBenifit">
      <div className="StayBenifit-container">
        <div className="StayBenifit-header">
          <h2 className="StayBenifit-title">Why Choose Us</h2>
          <p className="StayBenifit-description">
            We make finding and booking your perfect stay simple and worry-free
          </p>
        </div>
        <div className="StayBenifit-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="StayBenifit-card">
              <div className="StayBenifit-icon-container">
                <benefit.icon className="StayBenifit-icon" />
              </div>
              <h3 className="StayBenifit-card-title">{benefit.title}</h3>
              <p className="StayBenifit-card-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
