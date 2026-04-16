import React from "react";
import Navigation from "../components/Navigation";
import ProjectHetic from "../components/ProjectHetic";
import Contact from "../components/Contact";
import PageTransition from "../components/PageTransition";

const Project = () => {
  return (
    <PageTransition>
      <div>
        <Navigation />
        <ProjectHetic />
        <Contact />
      </div>
    </PageTransition>
  );
};

export default Project;
