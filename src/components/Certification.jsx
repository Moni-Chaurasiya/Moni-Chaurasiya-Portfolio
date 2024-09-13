import { useState, useEffect } from "react";
import "./Certification.css";
import Udemy from "../assets/Udemy.PNG";
import PW from "../assets/PW.PNG";
import Nexus from "../assets/Nexus.PNG";

// Add more certificates as needed

const certifications = [
  {
    image: Udemy,
  },
  {
    image: PW,
  },
  {
    image: Nexus,
  },
  // Add more certifications if needed
];

const Certification = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); // 4 seconds interval
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="certification-section">
      <h1 className="certification-title">
        <em>My Certifications</em>
      </h1>
      <div className="certification-container">
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="certification-card active">
          <img
            src={certifications[currentIndex].image}
            alt={`Certification ${currentIndex + 1}`}
            className="certification-image"
          />
        </div>
        <button className="arrow right-arrow" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Certification;

// import { useState, useEffect } from "react";
// import "./Certification.css";
// import Udemy from "../assets/Udemy.PNG";
// import PW from "../assets/PW.PNG";
// import Nexus from "../assets/Nexus.PNG";

// // Add more certificates as needed

// const certifications = [
//   {
//     image: Udemy,
//   },
//   {
//     image: PW,
//   },
//   {
//     image: Nexus,
//   },
//   // Add more certifications if needed
// ];

// const Certification = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false); // Control animation state
//   const [prevIndex, setPrevIndex] = useState(null); // Track the previous image index

//   // Automatically change images every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 4000); // 4 seconds interval
//     return () => clearInterval(interval);
//   }, []);

//   const handleNext = () => {
//     if (isAnimating) return; // Avoid rapid clicks during animation
//     setIsAnimating(true);
//     setPrevIndex(currentIndex); // Save current index as previous
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length); // Move to the next index
//   };

//   const handlePrev = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setPrevIndex(currentIndex); // Save current index as previous
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
//     ); // Move to the previous index
//   };

//   // Reset animation state after a fixed time
//   useEffect(() => {
//     if (isAnimating) {
//       const timeout = setTimeout(() => {
//         setIsAnimating(false);
//       }, 1000); // 1 second timeout for the animation duration
//       return () => clearTimeout(timeout);
//     }
//   }, [isAnimating]);

//   return (
//     <div className="certification-section">
//       <h1 className="certification-title">
//         <em>My Certifications</em>
//       </h1>
//       <div className="certification-container">
//         <button className="arrow left-arrow" onClick={handlePrev}>
//           &#10094;
//         </button>

//         {/* Previous image sliding out */}
//         {prevIndex !== null && (
//           <div className={`certification-card exit`}>
//             <img
//               src={certifications[prevIndex].image}
//               alt={`Certification ${prevIndex + 1}`}
//               className="certification-image"
//             />
//           </div>
//         )}

//         {/* Current image sliding in */}
//         <div className={`certification-card active`}>
//           <img
//             src={certifications[currentIndex].image}
//             alt={`Certification ${currentIndex + 1}`}
//             className="certification-image"
//           />
//         </div>

//         <button className="arrow right-arrow" onClick={handleNext}>
//           &#10095;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Certification;
