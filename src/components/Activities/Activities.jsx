import { Card, CardContent, CardActions, CardMedia, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { Star } from "lucide-react";
import activity1 from "../../assets/Activity1.webp";
import activity2 from "../../assets/Activity2.jpg";
import activity3 from "../../assets/Activity3.jpeg";
import activity4 from "../../assets/Activity4.jpeg";
import activity5 from "../../assets/Activity5.webp";
import activity6 from "../../assets/Activity6.webp";

import "../../Styles/Activities.css";

// This would typically come from an API
const activities = [
  {
    id: "para-1",
    title: "Bungee Jumping",
    image: activity1,
    discount: 25,
    rating: 4.9,
    reviews: 554,
    duration: 2,
    persons: 1,
    price: 3749,
    originalPrice: 4999,
  },
  {
    id: "para-2",
    title: "Para Gliding",
    image: activity2,
    discount: 15,
    rating: 4.7,
    reviews: 554,
    duration: 3,
    persons: 1,
    price: 2199,
    originalPrice: 2499,
  },
  {
    id: "para-3",
    title: "Treking",
    image: activity3,
    discount: 10,
    rating: 4.3,
    reviews: 554,
    duration: 8,
    persons: 1,
    price: 1799,
    originalPrice: 1999,
  },
  {
    id: "para-4",
    title: "River Rafting",
    image: activity4,
    discount: 5,
    rating: 4.2,
    reviews: 554,
    duration: 4,
    persons: 1,
    price: 2999,
    originalPrice: 3199,
  },
  {
    id: "para-5",
    title: "Hot Air Baloon",
    image: activity5,
    discount: 20,
    rating: 4.5,
    reviews: 554,
    duration: 2,
    persons: 1,
    price: 1999,
    originalPrice: 2499,
  },
  {
    id: "para-6",
    title: "Camping",
    image: activity6,
    discount: 20,
    rating: 4.7,
    reviews: 554,
    duration: 24,
    persons: 1,
    price: 3999,
    originalPrice: 4999,
  },
  // ... more activities
];

export function Activities() {
  return (
    <div className="activities-grid">
      {activities.map((activity) => (
        <Card key={activity.id} sx={{ maxWidth: 345, marginBottom: "16px" }}>
          {/* Image and Badge */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "8px",
                left: "8px",
                zIndex: 10,
                backgroundColor: "#E07C54",
                color: "white",
                fontWeight: "bold",
                padding: "4px 12px",
                borderRadius: "0.25rem",
                fontSize: "0.875rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              {`${activity.discount}% OFF`}
            </div>
            <CardMedia
              component="img"
              image={activity.image || "/placeholder.svg"}
              alt={activity.title}
              sx={{
                height: 200,
                objectFit: "cover",
              }}
            />
          </div>

          {/* Card Header */}
          <CardContent>
            <a href={`/activities/${activity.id}`} style={{ textDecoration: "none" }}>
              <Typography variant="h6" component="a" sx={{ fontWeight: 600, color: "#333" }}>
                {activity.title}
              </Typography>
            </a>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
              <Badge
                color="secondary"
                sx={{
                  backgroundColor: "#FFF3EA",
                  color: "#E07C54",
                  fontWeight: 600,
                  padding: "4px 8px",
                }}
              >
                Bestseller
              </Badge>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Star sx={{ width: "16px", height: "16px", fill: "#E07C54", color: "#E07C54" }} />
                <span>{activity.rating}</span>
                <span style={{ color: "#E07C54" }}>Average</span>
                <span style={{ color: "#666" }}>({activity.reviews} Reviews)</span>
              </div>
            </div>
          </CardContent>

          {/* Card Content */}
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Typography variant="body2" color="textSecondary">
                  Duration: {activity.duration} Hour
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Persons: {activity.persons}
                </Typography>
              </div>
              <div style={{ textAlign: "right" }}>
                <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
                  ₹{activity.price}
                </Typography>
                <Typography variant="body2" sx={{ textDecoration: "line-through", color: "#999" }}>
                  ₹{activity.originalPrice}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  / Person
                </Typography>
              </div>
            </div>
          </CardContent>

          {/* Card Footer with Button */}
          <CardActions>
            <Button
              component="a"
              href={`/activity/${activity.id}`}
              fullWidth
              variant="contained"
              color="primary"
              sx={{ textTransform: "none" }}
            >
              View Details
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
