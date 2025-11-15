//import React from 'react'
import "./Project.css";
import ProjectCard from "../ProjectCard";
import bird from "../../assets/bird.webp";
import ProjectGallery from "../ProjectGallery";
import Blog from "../../assets/Projects/Blog.PNG";
import Event from "../../assets/Projects/Event.PNG";
import Message from "../../assets/Message.png";
import AIAR from "../../assets/Projects/AIAR.PNG";
import WeatherChat from "../../assets/Projects/WeatherChat.PNG";
import FinanceTracker from "../../assets/Projects/FinanceTracker.PNG";
import StudentPortal from "../../assets/Projects/StudentPortal.PNG";
import { Link } from "react-router-dom";
function Project() {
  return (
    <div>
      <div className="title-section">
        <h1 className="project-title">
          <em>My Recent Work </em>
        </h1>
        <p className="text-yellow-500 mb-2 text-2xl">RECENT PROJECTS</p>
      </div>
      <div className="">
        <ProjectCard
          fieldName="App Development"
          title="AI-Enhanced Home Design with Augmented Reality (HDA)"
          description="AI-Enhanced Home Design with Augmented Reality (HDA) transforms interior design by combining AR for real-time spatial visualization and AI for personalized recommendations and cost estimates. It allows users to scan spaces, input preferences, and receive instant, tailored designs. HDA enhances user satisfaction by reducing design errors, saving time and cost, and offering a remote-friendly, intelligent design experience."
          techStack={[
            "Flutter",
            "Flask",
            "Deep Lab Model",
            "Stable Diffusion",
            "Google Cloud",
            "Vercel",
          ]}
          imageSrc={AIAR}
          githubLink="https://github.com/Moni-Chaurasiya/AI-Enhanced-Home-Design-Using-Augmented-Reality.git"
          liveProjectLink="https://github.com/Moni-Chaurasiya/AI-Enhanced-Home-Design-Using-Augmented-Reality.git"
        />
        <ProjectCard
          fieldName="Fullstack"
          title="Student Portal"
          description="Created a comprehensive student portal for Lokmanya Tilak College of Engineering, centralizing internships, clubs, events, blogs, and the annual Zephyr fest. Integrated features like an online railway reservation system and event registration to streamline student services and engagement."
          techStack={[
            "Next.js",
            "Tailwind CSS",
            "Shadcn",
            "Redux",
            "Node.js",
            "MongoDB",
            "Cloudinary",
          ]}
          imageSrc={StudentPortal}
          githubLink="https://github.com/TechnicalVidya/portal.git"
          liveProjectLink="https://github.com/TechnicalVidya/portal.git"
        />
        <ProjectCard
          fieldName="Fullstack"
          title="Personal Finance Tracker"
          description="Built an expense tracker with a clean dashboard interface, supporting transaction management, filtering, and visual summaries through charts. Developed a full-stack system with robust APIs, validation, and state management to handle income/expense tracking efficiently."
          techStack={["React", "Node.js", "Express", "MongoDB"]}
          imageSrc={FinanceTracker}
          githubLink="https://github.com/Moni-Chaurasiya/Personal-Finance-Tracker.git"
          liveProjectLink="https://personal-finance-trackers-hazel.vercel.app/"
        />
        <ProjectCard
          fieldName="Frontend"
          title="Weather Chat Application"
          description="Developed a chat-based weather application that enables smooth, real-time interaction with a weather agent. Implemented theme toggling, message search, chat history management, and export functionality to enhance overall user experience."
          techStack={["React", "Tailwind CSS"]}
          imageSrc={WeatherChat}
          githubLink="https://github.com/Moni-Chaurasiya/Pazago-Weather-Agent-Chat-Interface.git"
          liveProjectLink="https://github.com/Moni-Chaurasiya/Pazago-Weather-Agent-Chat-Interface.git"
        />
        <ProjectCard
          fieldName="Fullstack"
          title="Anonymous Message Sharing Web App"
          description="Message sharing web application where users can sign up, log in securely, and receive messages and images through a unique public URL. Visitors can send anonymous text or image-based messages, while users have full control over their inbox—they can choose to accept or reject new messages, delete existing ones."
          techStack={[
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Cloudinary",
            "Vercel",
          ]} // Single string for techStack
          imageSrc={Message}
          githubLink="https://github.com/Moni-Chaurasiya/NextJS-MessageApp.git"
          liveProjectLink="https://mistry-message-git-master-moni-chaurasiyas-projects.vercel.app"
        />
        <ProjectCard
          fieldName="Fullstack"
          title="Blog Website"
          description="A full-stack blog platform built with React.js, Redux Toolkit, and Appwrite, featuring user authentication and CRUD operations for blog posts. Integrated Appwrite for real-time data handling, file uploads, and user management, with a fully responsive design."
          techStack={["React", "Appwrite"]} // Single string for techStack
          imageSrc={Blog}
          githubLink="https://github.com/Moni-Chaurasiya/Blog-Website.git"
          liveProjectLink="https://blog-website-phi-three.vercel.app"
        />
        <ProjectCard
          fieldName="Frontend"
          title="News Webapp"
          description="A platform built using React.js and React Router DOM to display real-time news. Integrated a News API to dynamically fetch updates, with infinite scroll for enhanced performance and a responsive user experience."
          techStack={["React", "News API", "Bootstrap"]} // Array of tech
          imageSrc={bird}
          githubLink="https://github.com/Moni-Chaurasiya/News-WebApp.git"
          liveProjectLink="https://github.com/Moni-Chaurasiya/News-WebApp.git"
        />
        <ProjectCard
          fieldName="FullStack"
          title="Event Management System"
          description="Developed a full-stack Event Management System using HTML, CSS, JavaScript, Node.js, Express.js, and PostgreSQL. The platform manages events with QR code ticketing and includes a feedback system for users and manage accounts securely."
          techStack={[
            "Html",
            "CSS",
            "Javascript",
            "NodeJS",
            "ExpressJS",
            "PostgreSQL",
          ]}
          imageSrc={Event}
          githubLink="https://github.com/Moni-Chaurasiya/project3-nexus.git"
          liveProjectLink="https://github.com/Moni-Chaurasiya/project3-nexus.git"
        />
      </div>

      <div className="title-section">
        <h1 className="project-title">
          <em>Mini Project</em>
        </h1>
        <p className="text-yellow-500 mb-2 text-2xl">
          Some of the mini projects
        </p>
      </div>

      <ProjectGallery />

      <div className="overflow-hidden relative whitespace-nowrap py-4">
        <div className="animate-marquee inline-block space-x-10">
          <div className="inline-flex items-center">
            <span className="text-3xl text-white">
              Let&apos;s work together
            </span>
            <img
              loading="lazy"
              decoding="async"
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/270c_fe0f/512.gif"
              alt="✌"
              width="32"
              height="32"
              className="ml-2"
            />
          </div>

          <div className="inline-flex items-center">
            <span className="text-3xl text-white">
              Let&apos;s work together
            </span>
            <img
              loading="lazy"
              decoding="async"
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/270c_fe0f/512.gif"
              alt="✌"
              width="32"
              height="32"
              className="ml-2"
            />
          </div>

          <div className="inline-flex items-center">
            <span className="text-3xl text-white">
              Let&apos;s work together
            </span>
            <img
              loading="lazy"
              decoding="async"
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/270c_fe0f/512.gif"
              alt="✌"
              width="32"
              height="32"
              className="ml-2"
            />
          </div>

          <div className="inline-flex items-center">
            <span className="text-3xl text-white">
              Let&apos;s work together
            </span>
            <img
              loading="lazy"
              decoding="async"
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/270c_fe0f/512.gif"
              alt="✌"
              width="32"
              height="32"
              className="ml-2"
            />
          </div>

          <div className="inline-flex items-center">
            <span className="text-3xl text-white">
              Let&apos;s work together
            </span>
            <img
              loading="lazy"
              decoding="async"
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/270c_fe0f/512.gif"
              alt="✌"
              width="32"
              height="32"
              className="ml-2"
            />
          </div>

          <div className="inline-flex items-center">
            <span className="text-3xl text-white">
              Let&apos;s work together
            </span>
            <img
              loading="lazy"
              decoding="async"
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/270c_fe0f/512.gif"
              alt="✌"
              width="32"
              height="32"
              className="ml-2"
            />
          </div>
        </div>
      </div>
      <section className="bg-gray-900 py-12 mx-12 rounded-3xl ">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Are You Ready to kickstart your project with a touch of magic?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Reach out and let&apos;s make it happen ✨. I&apos;m also
              available for full-time or part-time opportunities to push the
              boundaries of design and deliver exceptional work.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="bg-amber-500 text-2xl text-white font-semibold py-2 px-6 rounded hover:bg-amber-600 inline-flex items-center"
              >
                Let&apos;s Talk
                <i className="ml-2">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"></path>
                  </svg>
                </i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="h-5"></div>
    </div>
  );
}

export default Project;
