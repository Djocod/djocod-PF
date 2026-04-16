import React from "react";
import { NavLink } from "react-router-dom";

const CardProject = ({ project }) => {
  return (
    <div className="body-card-projet">
      <h3>{project.title}</h3>
      {project.img ? (
        <div className="card-img">
          <img src={project.img} alt={`you watch ${project.title} psh`} />
        </div>
      ) : (
        <div className="card-video">
          <video
            src={project.video}
            alt={`you watch ${project.title} psh`}
            autoPlay
            muted
            loop
          />
        </div>
      )}
      <div className="header-card">
        <div className="header-info-project">
          <p>Date : {project.date}</p>
          <p>Equipe : {project.team}</p>
          <p>Cadre : {project.type}</p>
        </div>
        <div className="header-btn-container">
          <button className="header-project-btn">
            <NavLink to="/Project">Plus d'informations</NavLink>
          </button>
          <button className="header-project-btn view-project">
            <a href={project.href} target="_blank" rel="noreferrer">
              {project.source}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
