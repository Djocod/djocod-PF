import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Certification from "../components/Certification";
import Talk from "../components/Talk";
import Contact from "../components/Contact";
import NavProject from "../components/NavProject";
import PageTransition from "../components/PageTransition";
const Home = () => {
  return (
    <PageTransition>
      <div className="body-home">
        <Hero />
        <NavProject />
        <Experience />
        <Certification />
        <Talk />
        <Contact />
      </div>
    </PageTransition>
  );
};

export default Home;
