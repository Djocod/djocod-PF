import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Certification from "../components/Certification";
import Talk from "../components/Talk";
import Contact from "../components/Contact";
import ProjectHetic from "../components/ProjectHetic";

const Home = () => {
  return (
    <div className="body-home">
      <Hero />
      <ProjectHetic />
      <Experience />
      <Certification />
      <Talk />
      <Contact />
    </div>
  );
};

export default Home;
