import MiniProjectCard from "./MiniProjectCard";
import "./ProjectGallery.css";

import BMI from "../assets/Projects/BMI.PNG";
import Calculator from "../assets/Projects/Calculator.PNG";
import Clock from "../assets/Projects/Clock.PNG";
import Currency from "../assets/Projects/CurrencyConvertor.PNG";
import Guess from "../assets/Projects/GuessNumber.PNG";
import Password from "../assets/Projects/PasswordGenerator.PNG";
import text from "../assets/Projects/textConvertor.PNG";
import Tic from "../assets/Projects/TicTacToa.PNG";
import ToDo from "../assets/Projects/ToDo.PNG";

const miniProjects = [
  {
    title: "Text Converter",
    imageSrc: text,
    techStack: ["React", "Bootstrap"],
    githubLink: "https://github.com/Moni-Chaurasiya/TextUtils-Using-React.git",
  },
  {
    title: "To-Do",
    imageSrc: ToDo,
    techStack: ["React"],
    githubLink: "https://github.com/Moni-Chaurasiya/React-Special.git",
  },
  {
    title: "Password Generator",
    imageSrc: Password,
    techStack: ["React"],
    githubLink: "https://github.com/Moni-Chaurasiya/React-Special.git",
  },
  {
    title: "Currency Convertor",
    imageSrc: Currency,
    techStack: ["React", "API"],
    githubLink: "https://github.com/Moni-Chaurasiya/React-Special.git",
  },
  {
    title: "Scientific Calculator",
    imageSrc: Calculator,
    techStack: ["Python", "Tkinter"],
    githubLink:
      "https://github.com/Moni-Chaurasiya/Calculator-in-Python-Using-GUI.git",
  },
  {
    title: "TicTacToe Game",
    imageSrc: Tic,
    techStack: ["JavaScript"],
    githubLink: "https://github.com/Moni-Chaurasiya/JavaScript-Project.git",
  },
  {
    title: "Guess Number",
    imageSrc: Guess,
    techStack: ["JavaScript"],
    githubLink: "https://github.com/Moni-Chaurasiya/JavaScript-Project.git",
  },
  {
    title: "BMI Calculator",
    imageSrc: BMI,
    techStack: ["JavaScript"],
    githubLink: "https://github.com/Moni-Chaurasiya/JavaScript-Project.git",
  },
  {
    title: "Analogue Clock",
    imageSrc: Clock,
    techStack: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/Moni-Chaurasiya/JavaScript-Project.git",
  },
  // Add more projects as needed
];

const ProjectGallery = () => {
  return (
    <div className="projectGalleryContainer">
      {miniProjects.map((project, index) => (
        <MiniProjectCard
          key={index}
          title={project.title}
          imageSrc={project.imageSrc}
          techStack={project.techStack}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default ProjectGallery;
