import { Star } from "lucide-react";
import '../../Styles/ActivityReviews.css'

export function ActivityReview({ reviews }) {
  return (
    <div className="ActivityReviews-container">
      <h2 className="ActivityReviews-title">Customer Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="ActivityReviews-review">
          <div className="ActivityReviews-header">
            <div className="ActivityReviews-avatarContainer">
              <div className="ActivityReviews-avatar">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="ActivityReviews-avatarImage"
                />
                <div className="ActivityReviews-avatarFallback">{review.author.charAt(0)}</div>
              </div>
              <div className="ActivityReviews-authorDetails">
                <p className="ActivityReviews-authorName">{review.author}</p>
                <p className="ActivityReviews-date">{review.date}</p>
              </div>
            </div>
            <div className="ActivityReviews-rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`ActivityReviews-star ${index < review.rating ? "ActivityReviews-starFilled" : "ActivityReviews-starEmpty"}`}
                />
              ))}
            </div>
          </div>
          <p className="ActivityReviews-content">{review.content}</p>
        </div>
      ))}
    </div>
  );
}
