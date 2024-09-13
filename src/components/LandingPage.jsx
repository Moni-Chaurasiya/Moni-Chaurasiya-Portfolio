import { useState, useEffect } from "react";
import "./LandingPage.css";
import Container from "./container/Container";
import { FaWhatsapp, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { SiLeetcode, SiFreelancer } from "react-icons/si";
//import { useNavigate } from "react-router-dom";
import ProfileImg from "../assets/ProfileImg.jpeg";
import ProfileBackImg from "../assets/ProfileBackImg.jpeg";
import ThirdImg from "../assets/MainProfile.png"; // Import the third image
import { Link } from "react-router-dom";
const photoSlides = [ProfileImg, ProfileBackImg];
const resume =
  "https://drive.google.com/file/d/1cjDOfFDy38OYOfggF6GYG_SPY-FwE6Av/view?usp=drivesdk";

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  // const navigate = useNavigate();
  useEffect(() => {
    if (!isHovered) {
      // Only change slide if not hovered
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % photoSlides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <Container>
      <div className="landing-page ">
        <div className="left-section">
          <div className="text-section">
            <h1 className="animated-text font-sans text-white pb-2">
              Hi
              <img
                loading="lazy"
                decoding="async"
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
                alt="👋"
                width="36"
                height="36"
                className="inline-image"
              />
              I am
            </h1>
            <h2 className="animated-text typewriter font-serif text-white pt-2 ">
              Moni Chaurasiya
            </h2>
            <h3 className="animated-text font-serif text-yellow-500 pt-3 ">
              Fullstack Web Developer
            </h3>
            <p className="bio text-white text-2xl font-mono pt-2">
              I am a passionate Fullstack Developer 👩🏻‍💻 with experience in
              creating dynamic and responsive web applications.
            </p>
            <div className="flex space-x-4 mb-4 social-icons mt-6">
              <a
                href="https://wa.me/7039403687"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/moni-chaurasiya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={26} />
              </a>
              <a
                href="https://github.com/Moni-Chaurasiya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={26} />
              </a>
              <a
                href="https://leetcode.com/u/Moni_Chaurasiya/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode size={26} />
              </a>
              <a
                href="https://www.freelancer.com/u/MoniChaurasiya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFreelancer size={26} />
              </a>
              <a
                href="https://www.youtube.com/@Moni.Chaurasiya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={26} />
              </a>
            </div>

            <div className="button-section">
              <button
                className="download-btn text-lg font-serif"
                onClick={() => window.open(resume)}
              >
                Download Resume
              </button>
              <button className="view-work-btn text-lg font-serif">
                <Link to="/projects">View Work</Link>
              </button>
            </div>

            <div className="stats-box">
              <div className="stats-column">
                <div className="stats-number">1+</div>
                <div className="stats-text">Experience</div>
              </div>
              <div className="stats-column">
                <div className="stats-number">12+</div>
                <div className="stats-text">Projects</div>
              </div>
              <div className="stats-column">
                <div className="stats-number">40+</div>
                <div className="stats-text">Clients</div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div
            className="photo-frame  transform transition-transform duration-500 hover:scale-110"
            onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
            onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave
          >
            <img
              src={isHovered ? ThirdImg : photoSlides[currentSlide]}
              alt="Profile"
              className="photo transform transition-transform duration-500 hover:scale-80 hover:scale-x-[-1] custom-rotate"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LandingPage;
