//import React from 'react'
import "./Project.css";
import ProjectCard from "../ProjectCard";
import bird from "../../assets/bird.webp";
import ProjectGallery from "../ProjectGallery";
import Blog from "../../assets/Projects/Blog.PNG";
import Event from "../../assets/Projects/Event.PNG";
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
