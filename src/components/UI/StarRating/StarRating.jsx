import { useState } from "react";
import styles from "./StarRating.module.css";
import { FaStar } from "react-icons/fa";

function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.starsContainer}>
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  size={30}
                  className={styles.star}
                  color={
                    ratingValue <= (hover || rating) ? "#ffc107" : "#e3e5e9"
                  }
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StarRating;
