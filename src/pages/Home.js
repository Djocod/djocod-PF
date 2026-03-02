import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import ProjectHetic from "../components/ProjectHetic";
import Certification from "../components/Certification";
import Talk from "../components/Talk";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="body-home">
      <Hero />
      <Experience />
      <ProjectHetic />
      <Certification />
      <Talk />
      <Contact />
    </div>
  );
};

export default Home;
