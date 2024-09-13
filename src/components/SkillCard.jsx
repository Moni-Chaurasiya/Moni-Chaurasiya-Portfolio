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
