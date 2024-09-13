import MiniProjectCard from "./MiniProjectCard";
import "./ProjectGallery.css";
import bird from "../assets/bird.webp";
const miniProjects = [
  {
    title: "Text Converter",
    imageSrc: bird,
    techStack: ["React", "Bootstrap"],
    githubLink: "https://github.com/Moni-Chaurasiya/TextUtils-Using-React.git",
  },
  {
    title: "To-Do",
    imageSrc: bird,
    techStack: ["React"],
    githubLink: "https://github.com/Moni-Chaurasiya/React-Special.git",
  },
  {
    title: "Password Generator",
    imageSrc: bird,
    techStack: ["React"],
    githubLink: "https://github.com/Moni-Chaurasiya/React-Special.git",
  },
  {
    title: "Currency Convertor",
    imageSrc: bird,
    techStack: ["React", "API"],
    githubLink: "https://github.com/Moni-Chaurasiya/React-Special.git",
  },
  {
    title: "Scientific Calculator",
    imageSrc: bird,
    techStack: ["Python", "Tkinter"],
    githubLink:
      "https://github.com/Moni-Chaurasiya/Calculator-in-Python-Using-GUI.git",
  },
  {
    title: "TicTacToe Game",
    imageSrc: bird,
    techStack: ["JavaScript"],
    githubLink: "https://github.com/Moni-Chaurasiya/JavaScript-Project.git",
  },
  {
    title: "Guess Number",
    imageSrc: bird,
    techStack: ["JavaScript"],
    githubLink: "https://github.com/Moni-Chaurasiya/JavaScript-Project.git",
  },
  {
    title: "BMI Calculator",
    imageSrc: bird,
    techStack: ["JavaScript"],
    githubLink: "https://github.com/Moni-Chaurasiya/JavaScript-Project.git",
  },
  {
    title: "Analogue Clock",
    imageSrc: bird,
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
