// import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// import "./Skill.css"; // Define styles here

// const SkillCard = ({ fieldName, skillLogos }) => {
//   useEffect(() => {
//     const logos = document.querySelectorAll(".skill-logo");

//     logos.forEach((logo) => {
//       logo.style.transform = `translateY(-50px)`;
//       setTimeout(() => {
//         logo.style.transition = "transform 1s ease-in-out";
//         logo.style.transform = `translateY(0)`;
//       }, Math.random() * 1000);
//     });
//   }, []);

//   return (
//     <div className="skill-card">
//       <div className="skill-heading text-4xl text-yellow-500">
//         <h2>{fieldName}</h2>
//       </div>
//       <div className="skills-container">
//         {skillLogos.map((skillLogo, index) => (
//           <img
//             key={index}
//             src={skillLogo}
//             alt={`Skill ${index}`}
//             className="skill-logo"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// SkillCard.propTypes = {
//   fieldName: PropTypes.string.isRequired,
//   skillLogos: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default SkillCard;

//import React from "react";
import PropTypes from "prop-types";
import "./Skill.css";

const SkillCard = ({ fieldName, skillLogos }) => {
  return (
    <div className="skill-card">
      <div className="skill-heading text-3xl font-mono py-1">
        <h2>{fieldName}</h2>
      </div>
      <div className="skills-container">
        {skillLogos.map((skillLogo, index) => (
          <div key={index} className="skill-logo-container">
            <img
              src={skillLogo}
              alt={`Skill ${index}`}
              className="skill-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  fieldName: PropTypes.string.isRequired,
  skillLogos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillCard;
