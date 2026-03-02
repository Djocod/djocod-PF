import React, { useState } from "react";
import company from "../json/company.json";
const Experience = () => {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <div
      className="experience-container"
      id="experience"
      onMouseLeave={() => setHoveredId(null)}
    >
      <div className="hexa-container hexa-size1">
        <span className="hexa-wrapper">
          <span className="hexa"></span>
        </span>
        <span className="hexa-wrapper">
          <span className="hexa"></span>
        </span>
        <span className="hexa-wrapper">
          <span className="hexa"></span>
        </span>
        <span className="hexa-wrapper">
          <span className="hexa"></span>
        </span>
      </div>
      <div className="hexa-container hexa-size2">
        <span className="hexa-wrapper">
          <span className="hexa"></span>
        </span>
        <span className="hexa-wrapper">
          <span className="hexa"></span>
        </span>
        <span className="hexa-wrapper">
          <span className="hexa"></span>
        </span>
        <span className="hexa-wrapper">
          <span className="hexa"></span>
        </span>
      </div>
      <div className="hexa-container hexa-size3">
        <span className="hexa-wrapper">
          <span className="hexa"></span>
        </span>
        <span className="hexa-wrapper">
          <span className="hexa"></span>
        </span>
        <span className="hexa-wrapper">
          <span className="hexa"></span>
        </span>
        <span className="hexa-wrapper">
          <span className="hexa"></span>
        </span>
      </div>

      <h2>
        <i className="fa-solid fa-hexagon icon-Abs"></i> Expérience
      </h2>
      <div className="slide-experience">
        <ul className="xp-container">
          {company.map((company) => (
            <li
              className="xp-card-item"
              key={company.id}
              onMouseEnter={() => setHoveredId(company.id)}
            >
              <div className="item-header">
                <h3>{company.nameComp}</h3>
                <p>
                  {company.time} <span>{company.location}</span>
                </p>
              </div>
              <div
                className={`item-text ${hoveredId === company.id ? "visible-text" : ""}`}
              >
                <p>{company.description.activity1}</p>
                <p>{company.description.activity2}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="xp-img-container">
          {/* <img
            src={require("../assets/img/agricultural-silos-building-exterior.jpg")}
            alt="silos"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
