import React, { useEffect, useRef } from "react";
import xp from "../json/xp.json";
import icon from "../json/icon.json";
import FrontMent from "./FrontMent.js";

const Hero = () => {
  const nav = useRef(null);
  useEffect(() => {
    const handleScrollTop = () => {
      if (!nav.current) return;
      if (window.scrollY >= 450) {
        nav.current.style.transform = "translateY(0%)";
      } else {
        nav.current.style.transform = "translateY(-100%)";
      }
    };

    window.addEventListener("scroll", handleScrollTop);
    return () => window.removeEventListener("sccroll", handleScrollTop);
  }, []);

  return (
    <header className="header" id="home">
      <div className="null-span">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="navBar hero-style" ref={nav}>
        <li className="item-nav">
          <a href="#home">Dashboard</a>
        </li>
        <li className="item-nav">
          <a href="#experience">Parcours pro</a>
        </li>
        <li className="item-nav">
          <a href="#project-school">Projet Hetic</a>
        </li>
        <li className="item-nav">
          <a href="#degree">Certification</a>
        </li>
        <li className="item-nav">
          <a href="#talk">Mon chemin</a>
        </li>
        <li className="item-nav">
          <a href="#footer">Contact</a>
        </li>
      </ul>
      <div className="background-sqarre">
        <div className="quote-container hero-style">
          <i className="fa-solid fa-hexagon"></i>
          <p className="quote">
            "L'évolution ne connait
            <br />
            pas la marche arrière"
          </p>
          {/* <a
            href="https://fr.wikipedia.org/wiki/Boris_Cyrulnik"
            target="_blank"
            rel="noreferrer"
            className="link-autor"
          >
            Boris Cyrulnik
          </a>{" "} */}
        </div>
        <div className="pseudo-container hero-style">
          <h1>Jordan</h1>
          <p>Développer Frontend Junior</p>
          <a className="link-mail" href="mailto:jordan.francoual@hotmail.com">
            Me contacter
            <i className="fa-solid fa-hexagon"></i>
          </a>
        </div>
        <ul className="direction-container hero-style">
          <li className="item-direction">
            <a href="#experience">Parcours pro</a>
          </li>
          <li className="item-direction">
            <a href="#project-school">Projet Hetic</a>
          </li>
          <li className="item-direction">
            <a href="#degree">Certification</a>
          </li>
          <li className="item-direction">
            <a href="#talk">Mon chemin</a>
          </li>
          <li className="item-direction">
            <a href="#footer">Contact</a>
          </li>
        </ul>
        <div className="carrousel-fm hero-style">
          <h2>Défi template</h2>
          <FrontMent />
        </div>
        <div className="profil hero-style"></div>
        <ul className="skill-container hero-style">
          {(() => {
            const skills = xp.find((xp) => xp.id === 0)?.skill || [];
            return skills.map((skill, idx) => (
              <li className="skill-items" key={`${skill}-${idx}`}>
                {skill}
              </li>
            ));
          })()}
        </ul>
        <ul className="language-container hero-style">
          {icon.map((icon) => (
            <li className="language-items" key={`${icon.id}`}>
              <img src={icon.href} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Hero;
