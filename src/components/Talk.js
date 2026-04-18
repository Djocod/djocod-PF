import React, { useEffect } from "react";

const Talk = () => {
  useEffect(() => {}, []);
  return (
    <section className="talk-vision" id="talk">
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
      <div className="back-blur"></div>
      <h2>
        <i className="fa-solid fa-hexagon"></i> Mon chemin
      </h2>
      <div className="card-text-vision">
        <h3>Pourquoi le webdesign ?</h3>
        <div className="vision-container">
          <img src={require("../assets/img/desk-green.jpeg")} alt="computer" />
          <div className="card-vision">
            <p>
              Mon parcours a été principalement orienté vers le commerce.
              Pendant sept ans, j'ai travaillé comme vendeur, ouvrier, puis
              assistant chef de ligne. Ces expériences m'ont appris à être
              organisé, rigoureux et à travailler en équipe.{" "}
            </p>
            <p>
              {" "}
              Mais à côté de ça, j'ai toujours eu un réel intérêt pour
              l'informatique. En 2023, par curiosité, j'ai commencé à apprendre
              le développement web en autodidacte, au départ juste pour
              comprendre comment fonctionnent les sites, et plus j'apprenais,
              plus ça me passionnait. J'ai voulu comprendre ce qu'il y avait
              derrière une simple page, l'architecture d'un site, les outils,
              les frameworks… bref, tout le fonctionnement technique.
            </p>
            <p>
              {" "}
              Petit à petit, c'est devenu évident pour moi : je voulais en faire
              mon métier. C'est pour ça qu'en octobre 2025, j'ai décidé de
              reprendre mes études à{" "}
              <a
                href="https://www.hetic.net/?gge_source=google&gge_medium=cpc&gge_term=hetic&gge_campaign=Search-MarquePure&gad_source=1&gad_campaignid=81530319&gbraid=0AAAAAD8alhHPhrMrZiBT7DqXU5v0GIoRL&gclid=CjwKCAiA1obMBhAbEiwAsUBbIg11PCYeTgyc2QPMgLxl1cXEe_BEK6H7J02raZYttcae6OwmI06abBoCyOUQAvD_BwE"
                className="hetic"
                target="_blank"
                rel="noreferrer"
              >
                Hetic
              </a>{" "}
              pour me lancer pleinement dans le développement web, un domaine
              qui me stimule vraiment et qui évolue sans cesse.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="card-text-vision">
        <h3>Mes premières lignes de code</h3>
        <div className="vision-container">
          <div className="card-vision">
            <p>
              Dans ma quête de compréhension, j'ai commencé à pratiquer
              concrètement en réalisant des templates sur{" "}
              <a
                href="https://www.frontendmentor.io/challenges"
                className="frontM"
                target="_blank"
                rel="noreferrer"
              >
                Frontend Mentor
              </a>
              . Cela m'a permis de travailler l'architecture HTML et de mieux
              comprendre la logique de structuration d'une page, avant de me
              concentrer sur le CSS pour la mise en forme.{" "}
            </p>

            <p>
              {" "}
              En cherchant toujours à aller plus loin et à faire les choses
              proprement, j'ai découvert le SCSS, qui m'a permis d'aborder le
              style de manière plus structurée et plus modulable.{" "}
            </p>

            <p>
              Une fois ces bases solidement acquises, je me suis tourné vers
              JavaScript. C'est à ce moment-là que j'ai vraiment commencé à
              entrevoir toutes les possibilités du développement web, à ajouter
              de l'interactivité, du dynamisme et à rendre les projets plus
              vivants.
            </p>
          </div>
          <img
            src={require("../assets/img/desk-green-blur.jpeg")}
            alt="computer"
          />
        </div>
      </div>
      <p className="conclusion-vision">
        Ces projets m'ont servi de terrain d'expérimentation. Ils m'ont permis
        de pratiquer concrètement, de monter en compétences et de développer une
        vraie compréhension du développement web, tant sur l'aspect technique
        que sur la réflexion autour de la conception.
      </p>
    </section>
  );
};

export default Talk;
