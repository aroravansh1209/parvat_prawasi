import { useState } from "react";
import { Calendar } from "./Calendar"; // Assuming you have the Calendar component elsewhere
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./Card"; // Assuming you have Card components
import { Input, InputLabel, Button, FormControl, FormHelperText } from "@mui/material"; // MUI components
import { cruises } from "../Cruise/CruiseData"; // Assuming you have a 'data' file
import '../../Styles/CruiseBooking.css'; // Import custom styles

function BookingPage({ match }) {
  const cruiseId = match.params.id;
  const cruise = cruises.find((c) => c.id === cruiseId);
  const [date, setDate] = useState(undefined);
  const [guests, setGuests] = useState(1);

  if (!cruise) {
    return <div>Cruise not found!</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    console.log({ cruise, date, guests });
    window.location.href = "/booking/confirmation";
  };

  return (
    <div className="cruisebooking-container">
      <div className="cruisebooking-form">
        <Card>
          <CardHeader>
            <CardTitle>Book Your Cruise</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="cruisebooking-form-content">
              <div className="cruisebooking-item">
                <InputLabel>Selected Cruise</InputLabel>
                <div className="cruisebooking-details">
                  <div className="cruisebooking-title">{cruise.title}</div>
                  <div className="cruisebooking-subtitle">
                    {cruise.duration} • {cruise.location}
                  </div>
                  <div className="cruisebooking-price">
                    INR {cruise.discountedPrice.toFixed(2)}
                  </div>
                </div>
              </div>
              <div className="cruisebooking-item">
                <InputLabel>Select Date</InputLabel>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="calendar"
                  disabled={(date) => date < new Date()}
                />
              </div>
              <div className="cruisebooking-item">
                <FormControl fullWidth>
                  <InputLabel htmlFor="guests">Number of Guests</InputLabel>
                  <Input
                    id="guests"
                    type="number"
                    min={1}
                    max={10}
                    value={guests}
                    onChange={(e) => setGuests(Number.parseInt(e.target.value))}
                  />
                  <FormHelperText>Enter the number of guests</FormHelperText>
                </FormControl>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleSubmit} 
              fullWidth
            >
              Confirm Booking • INR {(cruise.discountedPrice * guests).toFixed(2)}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default CruiseBookingPage;
