//import React from 'react'
import LandingPage from "../LandingPage";
import Skills from "../Skills";
import Experience from "../Experience";
import background from "../../assets/bg.jpg";
import Achievement from "../Achievement";
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
      <Achievement />
      <Experience />
    </div>
  );
}

export default Home;
