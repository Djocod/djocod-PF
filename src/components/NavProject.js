import React from "react";
import projectsSchool from "../json/projectsSchool.json";
import CardProject from "./CardProject";

const NavProject = () => {
  return (
    <div className="body-card-nav-project">
      <h2 className="psh-title">
        <i className="fa-solid fa-hexagon"></i> Projets
      </h2>
      <div className="container-card-project">
        {projectsSchool.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default NavProject;
