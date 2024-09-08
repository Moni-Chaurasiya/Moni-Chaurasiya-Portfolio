import { useState, useEffect } from "react";
import "./LandingPage.css";
import Container from "./container/Container";
import { FaWhatsapp, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { SiLeetcode, SiFreelancer } from "react-icons/si";

const photoSlides = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % photoSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <div className="landing-page ">
        <div className="left-section">
          <div className="text-section">
            <h1 className="animated-text  font-sans text-white pb-2">
              Hello, I am
            </h1>
            <h2 className="animated-text typewriter font-serif text-white pt-2 ">
              Moni Chaurasiya
            </h2>
            <h3 className="animated-text  font-serif text-yellow-500 pt-3">
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
              <button className="download-btn text-lg font-serif">
                Download Resume
              </button>
              <button className="view-work-btn text-lg font-serif">
                View Work
              </button>
            </div>

            <div className="stats-box">
              <div className="stats-column">
                <div className="stats-number">1+</div>
                <div className="stats-text">Experience</div>
              </div>
              <div className="stats-column">
                <div className="stats-number">20+</div>
                <div className="stats-text">Projects</div>
              </div>
              <div className="stats-column">
                <div className="stats-number">80+</div>
                <div className="stats-text">Clients</div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="photo-frame">
            <img
              src={photoSlides[currentSlide]}
              alt="Profile"
              className="photo"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LandingPage;
