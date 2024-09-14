import Logo from "../Logo";

import { Link } from "react-router-dom";
import {
  FaArrowUp,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import { SiLeetcode, SiFreelancer } from "react-icons/si";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-blue text-white py-6 text-lg">
      {/* Upper Part of the Footer */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-between">
        {/* Left Section: Links */}
        <div className="flex flex-col sm:flex-row mb-6 sm:mb-0">
          {/* Add responsiveness for two columns at 1100px */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:mr-8">
            <li>
              <Link to="/">Home</Link>
              {/* <a href="/">Home</a> */}
            </li>
            <li>
              <Link to="/skills">Skills</Link>
              {/* <a href="/skills">Skills</a> */}
            </li>
            <li>
              <Link to="/experience">Experience</Link>
              {/* <a href="/experience">Experience</a> */}
            </li>
            <li>
              <Link to="/projects">Projects</Link>
              {/* <a href="/projects">Projects</a> */}
            </li>
            <li>
              <Link to="/education">Education</Link>
              {/* <a href="/education">Education</a> */}
            </li>
            <li>
              <Link to="/contact">Contact</Link>
              {/* <a href="/contact">Contact</a> */}
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Social Media, Contact */}
        <div className="flex flex-col items-start sm:items-end">
          <div className="flex space-x-4 mb-4">
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
          <div>
            <p>Mobile: +91-7039403687</p>
            <p>Email: monichaurasiya993@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Bold Horizontal Line */}
      <hr className="border-t-3 border-white w-4/5 mx-auto my-4" />

      {/* Lower Part of the Footer */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div>
          {/* <img src="/path-to-your-logo" alt="Logo" className="h-12 w-12" /> */}
          <Logo />
        </div>

        {/* Middle: Copyright */}
        <div className="text-center">
          <p>
            © {new Date().getFullYear()} Moni Chaurasiya. All rights reserved.
          </p>
        </div>

        {/* Right: Scroll to Top */}
        <div>
          <div
            className="h-12 w-12 bg-white text-navy-blue rounded-lg flex items-center justify-center cursor-pointer"
            onClick={scrollToTop}
          >
            <FaArrowUp size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
