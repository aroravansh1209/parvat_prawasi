import { Card, CardContent, CardActions, CardMedia, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { Star } from "lucide-react";
import activity from "../../assets/Activity5.avif"

import "../../Styles/Activities.css";

// This would typically come from an API
const activities = [
  {
    id: "scuba-1",
    title: "Grand Island Scuba Diving with Free Videography",
    image: activity,
    discount: 25,
    rating: 4.9,
    reviews: 554,
    duration: 8,
    persons: 2,
    price: 1500,
    originalPrice: 2000,
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
            <Badge
              badgeContent={`${activity.discount}% OFF`}
              color="error"
              sx={{
                position: "absolute",
                top: 8,
                left: 8,
                fontWeight: "bold",
                backgroundColor: "#E07C54",
                color: "white",
              }}
            />
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
