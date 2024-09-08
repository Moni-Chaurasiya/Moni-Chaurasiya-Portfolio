import { useState } from "react";
import "./Skill.css"; // Ensure you have a CSS file for styling
import C from "../assets/C.png";
import Cplus from "../assets/C++.png";
import Html from "../assets/Html.png";
import CSS from "../assets/CSS.png";
import Tailwind from "../assets/Tailwind.png";
import JS from "../assets/JavaScript.png";
import BootStrap from "../assets/BootStrap.png";
import R from "../assets/React.png";
import Python from "../assets/Python.png";
import Node from "../assets/Node.png";
import Express from "../assets/ExpressJS.png";
import MongoDB from "../assets/MongoDB.png";
import MySQL from "../assets/MySQL.png";
import PostgreSQL from "../assets/PostgreSQL.png";
import git from "../assets/Git.png";
import github from "../assets/github.png";
import VS from "../assets/VS.png";

import SkillCard from "./SkillCard";
const Skills = () => {
  const [showAboutMe, setShowAboutMe] = useState(true);

  const toggleAboutMe = () => {
    setShowAboutMe(!showAboutMe);
  };

  return (
    <div className="skill-section mt-10">
      <div className="skill-header">
        <h2 className="font-serif text-5xl text-white">My Skills</h2>
        <p className="text-2xl pt-4 font-serif text-sky-200">
          Technical competencies 🧠 in many areas with a key proficiency in the
          MERN stack 💻
        </p>
      </div>

      <div className="skill-page h-[55vh] overflow-y-auto p-4 m-3">
        <SkillCard
          fieldName="Frontend"
          skillLogos={[Html, CSS, Tailwind, JS, BootStrap, R]}
        />
        <SkillCard
          fieldName="Backend"
          skillLogos={[Node, Express, MongoDB, MySQL, PostgreSQL]}
        />
        <SkillCard fieldName="Tools" skillLogos={[VS, git, github]} />
        <SkillCard fieldName="Other Skill" skillLogos={[C, Cplus, Python]} />
      </div>
      <hr
        style={{
          width: "80%",
          margin: "2rem auto",
          borderTop: "2px solid yellow",
          height: "4px",
        }}
      />
      <div className="about-me">
        <button className="about-me-button" onClick={toggleAboutMe}>
          About Me {showAboutMe ? "▲" : "▼"}
        </button>
        {showAboutMe && (
          // <div className="about-me-content">
          //   <p className=" font-mono text-2xl font-thin">
          //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          //     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          //     enim ad minim veniam, quis nostrud exercitation ullamco laboris
          //     nisi ut aliquip ex ea commodo consequat.
          //   </p>
          // </div>

          <div
            style={{
              width: "100%", // Full width of the screen
              padding: "16px", // Padding for spacing
              boxSizing: "border-box", // Ensures padding is within the width
              //textAlign: "center", // Center the text horizontally
              color: "white", // Set text color to white
              display: "flex", // Flexbox for vertical alignment
              //  justifyContent: "center", // Horizontally center the content
              alignItems: "center", // Vertically center the content

              fontSize: "1.2rem", // Responsive text size
            }}
          >
            <div
              style={{ maxWidth: "800px", margin: "0 auto" }}
              className=" about-me-content "
            >
              <p></p>
              Hello! <br />I am a{" "}
              <span className="italic text-sky-500">Third-year student</span> 👩‍🎓
              in the Department of
              <span className="italic text-sky-500">
                {" "}
                Computer Engineering
              </span>{" "}
              at{" "}
              <span className="italic text-yellow-400">
                Lokmanya Tilak College of Engineering{" "}
              </span>
              🎓, Navi Mumbai, India. I am from Mumbai, Maharashtra.
              <br />
              I am always enthusiastic to learn new programming languages and
              technology.
              <br />
              I am always trying to build a project based on what I learn.
              <br />
              <p></p>
              <span className="italic text-green-500">
                {" "}
                Thank you for visiting my website
              </span>
              🙂. Feel free to explore my portfolio, projects to know more about
              me and my work.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
