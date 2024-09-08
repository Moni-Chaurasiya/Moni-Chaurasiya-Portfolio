import { useState } from "react";
import "./Achievement.css";
import AllBadge from "../assets/AllBadge.PNG";
import LeetProfile from "../assets/LeetProfile.PNG";
const achievements = [
  {
    image: AllBadge,
    title: "Achievement 1",
    description: "This is a brief description of Achievement 1.",
  },
  {
    image: LeetProfile,
    title: "Achievement 2",
    description: "This is a brief description of Achievement 2.",
  },
  // Add more achievements as needed
];

const Achievement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? achievements.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="achievement-section">
      <h1 className="achievement-title">
        <em>My achievement</em>
      </h1>
      <p className="text-yellow-500 mb-4 text-2xl">Some of my achievements</p>
      <div className="achievement-container">
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="achievement-card">
          <img
            src={achievements[currentIndex].image}
            alt={achievements[currentIndex].title}
            className="achievement-image"
          />
          <h2 className="achievement-heading">
            {achievements[currentIndex].title}
          </h2>
          <p className="achievement-description">
            {achievements[currentIndex].description}
          </p>
        </div>
        <button className="arrow right-arrow" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Achievement;
