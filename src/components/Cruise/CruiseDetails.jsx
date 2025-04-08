import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { Clock, MapPin, Utensils, Users, Waves, Wifi } from "lucide-react";
import { cruises } from "../Cruise/CruiseData"; // Assuming your data file
import "../../Styles/CruiseDeatils.css"; // Import custom CSS file
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function CruiseDetailsPage() {
  const { cruiseId } = useParams(); // React Router hook for params
  const cruise = cruises.find((c) => c.id === cruiseId);

  if (!cruise) {
    return <Typography variant="h6">Not Found</Typography>; // Handle not found scenario
  }

  return (
    <>
    <Navbar />
    <Box className="cruiseDetails-container">
      <Box className="cruiseDetails-grid">
        <Box className="cruiseDetails-image-container">
          <img
            src={cruise.imageUrl || "/placeholder.svg"}
            alt={cruise.title}
            className="cruiseDetails-image"
            loading="lazy"
          />
        </Box>
        <Box className="cruiseDetails-info">
          <Box>
            <Typography variant="h4" className="cruiseDetails-title">
              {cruise.title}
            </Typography>
            <Box className="cruiseDetails-rating">
              <Typography variant="body1" className="cruiseDetails-rating-star">
                ★ {cruise.rating}
              </Typography>
              <Typography
                variant="body2"
                className="cruiseDetails-rating-reviews"
              >
                ({cruise.reviews} reviews)
              </Typography>
            </Box>
          </Box>

          <Box className="cruiseDetails-badges">
            <Chip
              label={
                <>
                  <Clock className="cruiseDetails-icon" /> {cruise.duration}
                </>
              }
              variant="outlined"
              className="cruiseDetails-badge"
            />
            <Chip
              label={
                <>
                  <Utensils className="cruiseDetails-icon" /> Meals Included
                </>
              }
              variant="outlined"
              className="cruiseDetails-badge"
            />
            <Chip
              label={
                <>
                  <MapPin className="cruiseDetails-icon" /> {cruise.location}
                </>
              }
              variant="outlined"
              className="cruiseDetails-badge"
            />
          </Box>

          <Box className="cruiseDetails-price">
            <Typography
              variant="body1"
              className="cruiseDetails-original-price"
            >
              INR {cruise.originalPrice.toFixed(2)}
            </Typography>
            <Typography
              variant="h6"
              className="cruiseDetails-discounted-price"
            >
              INR {cruise.discountedPrice.toFixed(2)}
            </Typography>
            <Typography
              variant="body2"
              className="cruiseDetails-price-per-person"
            >
              per person
            </Typography>
          </Box>

          <Divider />

          <Box className="cruiseDetails-features">
            <Typography variant="h5" className="cruiseDetails-features-title">
              Cruise Features
            </Typography>
            <Box className="cruiseDetails-feature-cards">
              <Card className="cruiseDetails-feature-card">
                <CardContent className="cruiseDetails-feature-content">
                  <Waves className="cruiseDetails-feature-icon" />
                  <Typography className="cruiseDetails-feature-text">
                    Deck Access
                  </Typography>
                </CardContent>
              </Card>
              <Card className="cruiseDetails-feature-card">
                <CardContent className="cruiseDetails-feature-content">
                  <Utensils className="cruiseDetails-feature-icon" />
                  <Typography className="cruiseDetails-feature-text">
                    Gourmet Dining
                  </Typography>
                </CardContent>
              </Card>
              <Card className="cruiseDetails-feature-card">
                <CardContent className="cruiseDetails-feature-content">
                  <Wifi className="cruiseDetails-feature-icon" />
                  <Typography className="cruiseDetails-feature-text">
                    Free Wi-Fi
                  </Typography>
                </CardContent>
              </Card>
              <Card className="cruiseDetails-feature-card">
                <CardContent className="cruiseDetails-feature-content">
                  <Users className="cruiseDetails-feature-icon" />
                  <Typography className="cruiseDetails-feature-text">
                    Expert Crew
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="large"
            className="cruiseDetails-book-button"
            href={`/booking/${cruise.id}`}
          >
            Book Now
          </Button>
        </Box>
      </Box>

      <Box className="cruiseDetails-about-section">
        <Typography variant="h5" className="cruiseDetails-about-title">
          About This Cruise
        </Typography>
        <Typography variant="body1" className="cruiseDetails-about-text">
          {cruise.description}
        </Typography>
      </Box>
    </Box>
    <Footer />
    </>
  );
}
