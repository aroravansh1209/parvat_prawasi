import { useState } from "react";
import '../../Styles/ActivityImageSection.css'

export function ActivityImageSection({ images, title }) {
  console.log(images)
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="activityImageSection">
      <div className="activityImageSection-main">
        <img
          src={mainImage || "/placeholder.svg"}
          alt={title}
          className="activityImageSection-mainImage"
        />
      </div>
      <div className="activityImageSection-thumbnails">
        {images.map((image, index) => (
          <button
            key={index}
            className={`activityImageSection-thumbnail ${
              image === mainImage ? "activityImageSection-thumbnail-selected" : ""
            }`}
            onClick={() => setMainImage(image)}
          >
            <img
              src={image}
              alt={`${title} - Image ${index + 1}`}
              className="activityImageSection-thumbnailImage"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
