//import React from 'react';
//import { Link } from "react-router-dom";
import { FaWhatsapp, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { SiLeetcode, SiFreelancer } from "react-icons/si";
const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 py-6 pb-16  rounded-2xl bg-black">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold font-sans text-blue-300"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            //  data-aos-delay="120"
          >
            CONTACT
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {/* Address, Email, Phone, Map */}
          <div className="lg:w-1/4 w-full px-4 mb-8 lg:mb-0">
            <div
              className="bg-navy-blue p-6 rounded-lg "
              style={{ boxShadow: "2px 2px 10px white" }}
            >
              <div className="mb-6">
                <i className="fa fa-map-marker text-2xl text-blue-600"></i>
                <h4 className="text-lg font-semibold mt-2 text-white">
                  Location:
                </h4>
                <p className="mt-2">
                  <a
                    href="https://www.google.co.in/maps/place/Jobs+Enclave/@22.0868909,82.1821008,17z/data=!3m1!4b1!4m5!3m4!1s0x3a280bc7c2ff6c23:0x4412edddb029ad80!8m2!3d22.0868909!4d82.1842895?shorturl=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-300 hover:underline"
                  >
                    Mumbai, India
                  </a>
                </p>
              </div>
              <div className="mb-6">
                <i className="fa fa-envelope text-2xl text-blue-600"></i>
                <h4 className="text-lg font-semibold mt-2 text-white">
                  Email:
                </h4>
                <p className="mt-2">
                  <a
                    href="mailto:arwazkhan189@gmail.com"
                    className="text-sky-300 hover:underline"
                  >
                    monichaurasiya993@gmail.com
                  </a>
                </p>
              </div>
              <div className="mb-6">
                <i className="fa fa-phone text-2xl text-blue-600"></i>
                <h4 className="text-lg font-semibold mt-2 text-white">Call:</h4>
                <p className="mt-2">
                  <a
                    href="tel:+917039403687"
                    className="text-sky-300 hover:underline"
                  >
                    +91 7039403687
                  </a>
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1694171115117!6m8!1m7!1sCAoSLEFGMVFpcE9EV3FrT2wzTkxITXJ5Rl9pVUtOMUhOMUdQcXRTZ1o1SzdWZnJl!2m2!1d19.025719!2d72.870728!3f229.54!4f0!5f0.7820865974627469"
                style={{ border: 0, width: "100%", height: "290px" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          {/* Contact Form */}
          <div className="lg:w-1/2 w-full px-4 mb-8 lg:mb-0  ">
            <div
              className="bg-navy-blue
             p-6 rounded-lg "
              style={{ boxShadow: "2px 2px 10px white" }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">
                CONTACT FORM
              </h3>
              <form
                action="https://send.pageclip.co/qnLaFhcAVVndZtVNOIgDerlPRuqHUKqy"
                method="post"
              >
                <div className="mb-4">
                  <label className="block text-yellow-400">Name</label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded bg-navy-blue"
                    type="text"
                    name="name"
                    placeholder="Your Name..."
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-yellow-400">Email</label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded bg-navy-blue"
                    type="email"
                    name="email"
                    placeholder="Your Email..."
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-yellow-400">Phone</label>
                  <input
                    className="w-full p-2 border border-sky-600 rounded bg-navy-blue"
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number..."
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-yellow-400">Message</label>
                  <textarea
                    className="w-full p-2 border border-sky-400 rounded bg-navy-blue text-white"
                    rows="3"
                    name="message"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-amber-600 text-white bold px-4 py-2 rounded hover:bg-amber-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="lg:w-1/4 w-full px-4 mb-8 lg:mb-0">
            <div
              className="bg-navy-blue p-6 rounded-lg  text-center"
              style={{ boxShadow: "2px 2px 10px white" }}
            >
              {/* <hr className="my-4" /> */}
              <div className="flex flex-col items-center space-y-20">
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://wa.me/7039403687"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-white transition-colors duration-300"
                  >
                    <FaWhatsapp size={100} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/moni-chaurasiya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-white transition-colors duration-300"
                  >
                    <FaLinkedin size={100} />
                  </a>
                </div>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com/Moni-Chaurasiya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-white transition-colors duration-300"
                  >
                    <FaGithub size={100} />
                  </a>
                  <a
                    href="https://leetcode.com/u/Moni_Chaurasiya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-white transition-colors duration-300"
                  >
                    <SiLeetcode size={100} />
                  </a>
                </div>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.freelancer.com/u/MoniChaurasiya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-white transition-colors duration-300"
                  >
                    <SiFreelancer size={101} />
                  </a>
                  <a
                    href="https://www.youtube.com/@Moni.Chaurasiya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-white transition-colors duration-300"
                  >
                    <FaYoutube size={100} />
                  </a>
                </div>
              </div>

              {/* <hr className="my-4" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
