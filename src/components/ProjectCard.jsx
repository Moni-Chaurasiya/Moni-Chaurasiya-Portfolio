//import React from "react";
import PropTypes from "prop-types";
import "./ProjectCard.css"; // Import the CSS file

const ProjectCard = ({
  fieldName,
  title,
  description,
  techStack, // Now handle non-array types
  imageSrc,
  githubLink,
  liveProjectLink,
}) => {
  // Ensure techStack is an array, even if it's passed as a string
  const techArray = Array.isArray(techStack) ? techStack : [techStack];

  return (
    <div className="card ">
      <div className="leftSection ">
        <p className="field">{fieldName}</p>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <div className="techStackContainer">
          {techArray.map((tech, index) => (
            <button key={index} className="techStackButton">
              {tech}
            </button>
          ))}
        </div>
        <div className="space-x-3">
          <button
            className="viewCodeButton hover:bg-black"
            onClick={() => window.open(githubLink)}
          >
            View Code
          </button>
          <button
            className="liveProjectButton hover:bg-red-700 "
            onClick={() => window.open(liveProjectLink)}
          >
            Live Project
          </button>
        </div>
      </div>
      <div className="rightSection">
        <img
          src={imageSrc}
          alt={title}
          className="projectImage transform transition-transform duration-500 hover:scale-110 "
        />
      </div>
    </div>
  );
};

// PropTypes validation
ProjectCard.propTypes = {
  fieldName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string), // Array of strings
    PropTypes.string, // Single string for cases where techStack is not an array
  ]).isRequired,
  imageSrc: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveProjectLink: PropTypes.string.isRequired,
};

export default ProjectCard;

/*
Animation on image-->
1. Scale (Zoom In) on Hover-->  className="transform transition-transform duration-500 hover:scale-110"
2. Rotate on Hover -->   className="transform transition-transform duration-500 hover:rotate-6"
3. Opacity Fade -->   className="transition-opacity duration-500 hover:opacity-75"
4. Blur Effect -->  className="transition duration-500 hover:blur-md"
5. Tilt with 3D Perspective --> className="transform transition-transform duration-500 hover:rotate-x-6 hover:rotate-y-6"
6. Flip Horizontally -->    className="transform transition-transform duration-500 hover:scale-x-[-1]"
7. Grayscale to Color --> className="filter grayscale hover:grayscale-0 transition-all duration-500"
9. Slide In (Translate) --> className="transform transition-transform duration-500 hover:translate-x-3"
10. Bounce --> className="transition-transform duration-500 hover:animate-bounce"

*/
