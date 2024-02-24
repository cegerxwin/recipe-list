import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { BsFillHeartbreakFill } from "react-icons/bs";
import "./LikeButton.css";

function LikeButton() {
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 100));
  const [dislikeCount, setDislikeCount] = useState(
    Math.floor(Math.random() * 50)
  );

  const [activeBtn, setActiveBtn] = useState("none");
  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === "like") {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };

  const handleDisikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }

    if (activeBtn === "dislike") {
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };
  return (
    <div className="btn-container">
      <button
        className={`btnLike ${activeBtn === "like" ? "like-active" : ""}`}
        onClick={handleLikeClick}>
        <FaHeart size={18} className="FcLike" />
        <span className="count">{likeCount}</span>
      </button>

      <button
        className={`btnDisLike ${
          activeBtn === "dislike" ? "dislike-active" : ""
        }`}
        onClick={handleDisikeClick}>
        <BsFillHeartbreakFill size={18} />{" "}
        <span className="count">{dislikeCount}</span>
      </button>
    </div>
  );
}

export default LikeButton;
