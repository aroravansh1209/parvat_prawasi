import { useState } from "react";
import PropTypes from "prop-types";
import { X, Loader2 } from "lucide-react";
import '../../Styles/StayBookingModel.css'

function BookingModal({
  isOpen,
  onClose,
  stay,
  selectedRoom,
  selectedDates,
  guestCount,
  onSubmit,
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    roomType: selectedRoom || "",
    checkIn: selectedDates?.checkIn || "",
    checkOut: selectedDates?.checkOut || "",
    guests: guestCount || 1,
    specialRequests: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.checkIn) {
      newErrors.checkIn = "Check-in date is required";
    }
    if (!formData.checkOut) {
      newErrors.checkOut = "Check-out date is required";
    }
    if (!formData.roomType) {
      newErrors.roomType = "Room type is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      onClose();
    } catch (error) {
      console.error("Booking failed:", error);
      setErrors({
        submit: "Failed to process booking. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-modal-overlay">
      <div className="booking-modal-container">
        <div className="booking-modal-header">
          <h2 className="booking-modal-title">Complete Your Booking</h2>
          <button onClick={onClose} className="booking-modal-close-button">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="booking-modal-form">
          <div className="booking-modal-form-grid">
            <div className="booking-modal-form-group">
              <label className="booking-modal-label">First Name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className={`booking-modal-input ${
                  errors.firstName ? "booking-modal-input-error" : ""
                }`}
              />
              {errors.firstName && (
                <p className="booking-modal-error-message">{errors.firstName}</p>
              )}
            </div>

            <div className="booking-modal-form-group">
              <label className="booking-modal-label">Last Name</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className={`booking-modal-input ${
                  errors.lastName ? "booking-modal-input-error" : ""
                }`}
              />
              {errors.lastName && (
                <p className="booking-modal-error-message">{errors.lastName}</p>
              )}
            </div>

            <div className="booking-modal-form-group">
              <label className="booking-modal-label">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`booking-modal-input ${
                  errors.email ? "booking-modal-input-error" : ""
                }`}
              />
              {errors.email && (
                <p className="booking-modal-error-message">{errors.email}</p>
              )}
            </div>

            <div className="booking-modal-form-group">
              <label className="booking-modal-label">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={`booking-modal-input ${
                  errors.phone ? "booking-modal-input-error" : ""
                }`}
              />
              {errors.phone && (
                <p className="booking-modal-error-message">{errors.phone}</p>
              )}
            </div>

            {/* <div className="booking-modal-form-group">
              <label className="booking-modal-label">Room Type</label>
              <select
                value={formData.roomType}
                onChange={(e) =>
                  setFormData({ ...formData, roomType: e.target.value })
                }
                className={`booking-modal-input ${
                  errors.roomType ? "booking-modal-input-error" : ""
                }`}
              >
                <option value="">Select a room type</option>
                {stay.rooms.map((room) => (
                  <option key={room.type} value={room.type}>
                    {room.type} - ₹{room.price}/night
                  </option>
                ))}
              </select>
              {errors.roomType && (
                <p className="booking-modal-error-message">{errors.roomType}</p>
              )}
            </div> */}

            <div className="booking-modal-form-group">
              <label className="booking-modal-label">Number of Guests</label>
              <select
                value={formData.guests}
                onChange={(e) =>
                  setFormData({ ...formData, guests: Number(e.target.value) })
                }
                className="booking-modal-input"
              >
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            <div className="booking-modal-form-group">
              <label className="booking-modal-label">Check-in Date</label>
              <input
                type="date"
                value={formData.checkIn}
                onChange={(e) =>
                  setFormData({ ...formData, checkIn: e.target.value })
                }
                className={`booking-modal-input ${
                  errors.checkIn ? "booking-modal-input-error" : ""
                }`}
                min={new Date().toISOString().split("T")[0]}
              />
              {errors.checkIn && (
                <p className="booking-modal-error-message">{errors.checkIn}</p>
              )}
            </div>

            <div className="booking-modal-form-group">
              <label className="booking-modal-label">Check-out Date</label>
              <input
                type="date"
                value={formData.checkOut}
                onChange={(e) =>
                  setFormData({ ...formData, checkOut: e.target.value })
                }
                className={`booking-modal-input ${
                  errors.checkOut ? "booking-modal-input-error" : ""
                }`}
                min={formData.checkIn || new Date().toISOString().split("T")[0]}
              />
              {errors.checkOut && (
                <p className="booking-modal-error-message">{errors.checkOut}</p>
              )}
            </div>
          </div>

          <div className="booking-modal-form-group">
            <label className="booking-modal-label">Special Requests</label>
            <textarea
              value={formData.specialRequests}
              onChange={(e) =>
                setFormData({ ...formData, specialRequests: e.target.value })
              }
              rows={3}
              className="booking-modal-textarea"
              placeholder="Any special requests or requirements..."
            />
          </div>

          {errors.submit && (
            <p className="booking-modal-error-message">{errors.submit}</p>
          )}

          <div className="booking-modal-buttons">
            <button
              type="button"
              onClick={onClose}
              className="booking-modal-cancel-button"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="booking-modal-submit-button"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="booking-modal-loading-icon" />
                  Processing...
                </>
              ) : (
                "Confirm Booking"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

BookingModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  stay: PropTypes.object.isRequired,
  selectedRoom: PropTypes.string,
  selectedDates: PropTypes.shape({
    checkIn: PropTypes.string,
    checkOut: PropTypes.string,
  }),
  guestCount: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
};

export default BookingModal;