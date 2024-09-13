//import React from 'react'
import LandingPage from "../LandingPage";
import Skills from "../Skills";
//import Experience from "../Experience";
import background from "../../assets/bg.jpg";
import Achievement from "../Achievement";
import Certification from "../Certification";
function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <LandingPage />
      <hr
        style={{
          width: "80%",
          margin: "2rem auto",
          borderTop: "2px solid yellow",
          height: "4px",
        }}
      />
      <Skills />
      <hr
        style={{
          width: "80%",
          margin: "2rem auto",
          borderTop: "2px solid yellow",
          height: "4px",
        }}
      />
      <Achievement />
      <hr
        style={{
          width: "80%",
          margin: "2rem auto",
          borderTop: "2px solid yellow",
          height: "4px",
        }}
      />
      <Certification />
      {/* <Experience /> */}
    </div>
  );
}

export default Home;
