import { useState } from "react";
import "./Achievement.css";
import AllBadge from "../assets/AllBadge.PNG";
import LeetProfile from "../assets/LeetProfile.PNG";
import AugmentERA from "../assets/AugmentERA.jpeg"
import DeepBlue from "../assets/DeepBlue.jpeg"
import DeepMeme from "../assets/DeepMeme.jpeg"
import Innovative from "../assets/InnovativeProject.jpeg"

import { useEffect } from "react";
const achievements = [
  {
    image: AllBadge,
    title: "Leetcode",
    description: "Completed 100 days of solving problem on Leetcode in 2024",
  },
  {
    image: LeetProfile,
    title: "Leetcode",
    description: "Solved more than 250+ problem on Leetcode",
  },
  {
    image: DeepBlue,
    title: "Hackathon",
    description: "Deep Blue Semi-Finalist --> Successfully completed project of working solution",
  },
  {
    image: Innovative,
    title: "Competition",
    description: "Most Innovative Project - AI Enhanced Home Design Using Augmented Reality",
  },
  {
    image: AugmentERA,
    title: "SCOE AVISHKAR - 2025",
    description: "Consolation Prize",
  },
  {
    image: DeepMeme,
    title: "Publication",
    description: "Research Paper Published in International Journal of Innovative Research in Engineering",
  },

];

const Achievement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? achievements.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 500);
    }
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
        <div className="achievement-card" key={currentIndex}>
          <img
            src={achievements[currentIndex].image}
            alt={achievements[currentIndex].title}
            className="achievement-image"
            style={{
              animation: isAnimating ? 'slideOut 0.5s ease-in-out' : 'slideIn 0.5s ease-in-out'
            }}
          />
          <h2 className="achievement-heading">
            {achievements[currentIndex].title}
          </h2>
          <p className="achievement-description text-mono">
            {achievements[currentIndex].description}
          </p>
        </div>
        <button className="arrow right-arrow" onClick={handleNext}>
          &#10095;
        </button>
      </div>
      
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
            scale: 0.8;
          }
          to {
            transform: translateX(0);
            opacity: 1;
            scale: 1.05;
          }
        }
        
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
            scale: 1.05;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
            scale: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default Achievement;