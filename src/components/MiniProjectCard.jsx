import PropTypes from "prop-types";
import "./MiniProjectCard.css"; // Import the CSS file

const MiniProjectCard = ({ title, imageSrc, techStack, githubLink }) => {
  //  techStack is an array, even if it's passed as a string
  const techArray = Array.isArray(techStack) ? techStack : [techStack];

  return (
    <div className="miniProjectCard">
      <h2 className="miniProjectTitle">{title}</h2>
      <div className="miniProjectImageContainer">
        <img src={imageSrc} alt={title} className="miniProjectImage" />
      </div>
      <div className="miniProjectTechStackContainer">
        {techArray.map((tech, index) => (
          <span key={index} className="miniProjectTechStackItem">
            {tech}
          </span>
        ))}
      </div>
      <button
        className="miniProjectViewCodeButton"
        onClick={() => window.open(githubLink)}
      >
        View Code
      </button>
    </div>
  );
};

MiniProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  techStack: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default MiniProjectCard;
