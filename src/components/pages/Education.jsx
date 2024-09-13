//import { FaGraduationCap } from "react-icons/fa";

// Logos
import CollegeLogo from "../../assets/SiesLogo.png"; // Add the path to your college logo
import SchoolLogo from "../../assets/GuruNanakLogo.jpeg"; // Add the path to your school logo
import LokmanyaLogo from "../../assets/LokmanyaLogo.jpeg";

import "./Education.css";
// const educationData = [
//   {
//     id: 1,
//     logo: LokmanyaLogo,
//     name: "Lokmanya Tilak College of Engineering, Navi Mumbai",
//     course: "Bachelor of Engineering (BE) - Computer Engineering",
//     year: "2022 - 2026",
//     grade: "CGPA: 8.51",
//     website: "https://ltce.in/",
//   },
//   {
//     id: 2,
//     logo: CollegeLogo,
//     name: "Sies College of Art, Science and Commerce, Sion",
//     course: "Higher Secondary Education (HSC) - Science",
//     year: "2020 - 2022",
//     grade: "Percentage: 71.67%",
//     website: "https://siesascs.edu.in/",
//   },
//   {
//     id: 3,
//     logo: SchoolLogo,
//     name: "Guru Nanak Technical High School, GTB Nagar",
//     course: "Secondary School Certificate (SSC)",
//     year: "2015 - 2020",
//     grade: "Percentage: 90%",
//     website: "https://gnhsgtb.in/",
//   },
// ];

const Education = () => {
  return (
    // <div className="education-section bg-blue-950 p-8 rounded-lg ">
    //   <h2 className="text-center text-white text-4xl font-bold italic mb-8">
    //     Education
    //   </h2>
    //   <div className="flex flex-row-reverse">
    //     <div className="main-container flex flex-col items-center">
    //       {educationData.map((education, index) => (
    //         <div
    //           key={education.id}
    //           className={`education-card bg-slate-900 rounded-lg shadow-lg p-6 flex justify-between items-center w-full max-w-4xl mb-8 transform transition-transform duration-500 hover:scale-105 ${
    //             index % 2 === 0 ? "timeline-left" : "timeline-right"
    //           }`}
    //         >
    //           {/* Left Section: Logo */}
    //           <div className="left-section w-1/5">
    //             <a href={education.website} target="_blank" rel="noreferrer">
    //               <img
    //                 src={education.logo}
    //                 alt={`${education.name} logo`}
    //                 className="w-20 rounded-full"
    //               />
    //             </a>
    //           </div>

    //           {/* Right Section: Information */}
    //           <div className="right-section w-4/5 pl-6 flex flex-col">
    //             <h3 className="text-2xl font-bold">{education.name}</h3>
    //             <p className="text-lg font-semibold">{education.course}</p>
    //             <p className="text-gray-600">{education.year}</p>
    //             <p className="text-gray-700">{education.grade}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Timeline */}
    //     <div className="timeline-container flex flex-col items-center mt-12">
    //       {educationData.map((education, index) => (
    //         <div key={education.id} className="timeline-item relative mb-12">
    //           {/* Timeline Icon */}
    //           <FaGraduationCap className="timeline-icon text-white text-4xl mb-2" />

    //           {/* Year or Range */}
    //           <div className="timeline-year text-white text-lg mb-4">
    //             {education.year}
    //           </div>

    //           {/* Timeline Line */}
    //           {index < educationData.length - 1 && (
    //             <div className="timeline-line h-24 w-1 bg-white absolute left-1/2 transform -translate-x-1/2"></div>
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className=" main pt-8">
      <h2 className="italic text-white text-center text-3xl mb-7">
        {" "}
        Education{" "}
      </h2>
      <div className="pb-5">
        <div className="timeline font-mono ">
          <div className="container1 left-container">
            <img src={LokmanyaLogo} alt="" />
            <div className="text-box text-white">
              <h2> Education </h2>
              <small>2022 - 2026</small>
              <p className="text-white">
                <h2 className="text-green-500 text-xl">University of Mumbai</h2>
                <h3 className="text-2xl font-bold text-yellow-600">
                  Lokmanya Tilak College of Engineering, Navi Mumbai
                </h3>
                <p className="text-lg font-semibold text-sky-400">
                  Bachelor of Engineering (BE) - Computer Engineering
                </p>
                <p className="text-white">2022 - 2026</p>
                <p className="text-white">CGPA: 8.51 (until semester 4)</p>
              </p>

              <button className="bg-blue-900 mt-2 p-2 rounded hover:bg-blue-950">
                <a href="https://ltce.in" className="text-white italic ">
                  Visit Website
                </a>
              </button>
            </div>
            <span className="left-container-arrow"></span>
          </div>

          <div className="container1 right-container">
            <img src={CollegeLogo} alt="" className="w-32" />
            <div className="text-box text-white">
              <h2> Education </h2>
              <small>2020 - 2022</small>
              <p className="text-white">
                <h2 className="text-green-500 text-xl">Maharashtra Board</h2>
                <h3 className="text-2xl font-bold text-yellow-600">
                  Sies College of Art, Science and Commerce, Sion
                </h3>
                <p className="text-lg font-semibold text-sky-400">
                  Higher Secondary Education (HSC) - Science
                </p>
                <p className="text-white">2020 - 2022</p>
                <p className="text-white">Percentage: 71.67%</p>
              </p>
              <button className="bg-blue-900 mt-2 p-2 rounded hover:bg-blue-950">
                <a
                  href="https://siesascs.edu.in/"
                  className="text-white italic "
                >
                  Visit Website
                </a>
              </button>
            </div>
            <span className="right-container-arrow"></span>
          </div>

          <div className="container1 left-container ">
            <img src={SchoolLogo} alt="" />
            <div className="text-box text-white">
              <h2> Education </h2>
              <small>2015 - 2020</small>
              <p className="text-white">
                <h2 className="text-green-500 text-xl">Maharashtra Board</h2>
                <h3 className="text-2xl font-bold text-yellow-600">
                  Guru Nanak Technical High School, GTB Nagar
                </h3>
                <p className="text-lg font-semibold text-sky-400">
                  Secondary School Certificate (SSC)
                </p>
                <p className="text-white">2015 - 2020</p>
                <p className="text-white ">Percentage: 90%</p>
              </p>
              <button className="bg-blue-900 mt-2 p-2 rounded hover:bg-blue-950">
                <a href="https://gnhsgtb.in/" className="text-white italic ">
                  Visit Website
                </a>
              </button>
            </div>
            <span className="left-container-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
