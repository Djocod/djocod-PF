import React, { useState } from "react";
import link from "../json/link.json";
const ProjectHetic = () => {
  const [onclickTask, setOnclickTask] = useState(null);
  const [onclickTitleCheck, setOnclickTitleCheck] = useState(null);
  return (
    <section className="body-project-hetic" id="project-school">
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
      <h2 className="psh-title">
        <i className="fa-solid fa-hexagon"></i> Projets académiques
      </h2>
      <div className="psh-container">
        {link.slice(0, 2).map((project) => (
          <div key={project.id} className="psh-items">
            <div className="psh-container-left">
              <img src={project.img} alt={`you watch ${project.title} psh`} />
              <div className="project-text-item">
                <h3>{project.title}</h3>
                <div className="project-descrip-container">
                  <p>
                    {project.title} {project.description1}
                  </p>
                  <p>{project.description2}</p>
                </div>
                <button className="project-btn">
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.source}
                  </a>
                </button>
              </div>
            </div>
            <div className="psh-container-right">
              <h2 className="task-theme">{project.theme}</h2>
              {project.tasks.map((task) => (
                <div key={task.id} className="task-container">
                  <h3
                    className={`${onclickTitleCheck === task.id ? "task-title" : "task-title check"}`}
                    onMouseDown={() => {
                      setOnclickTask((e) => (e === task.id ? null : task.id));
                      setOnclickTitleCheck((e) =>
                        e === task.id ? null : task.id,
                      );
                    }}
                  >
                    {task.title}
                    <i class="fa-solid fa-chevron-down"></i>
                  </h3>
                  <div
                    className={`${onclickTask === task.id ? "task-onclick" : "task-unOnclick"}`}
                  >
                    <p className="task-desc">{task.description}</p>
                    <ul className="points-container">
                      {task.points?.map((point, idx) => (
                        <li key={idx} className="item-point">
                          - {point}
                        </li>
                      ))}
                    </ul>
                    <ul className="learn-container">
                      {task.learnings?.map((learn, idx) => (
                        <li key={idx} className="item-learn">
                          - {learn}
                        </li>
                      ))}
                    </ul>
                    <ul className="challenges-container">
                      {task.challenges?.map((challenge, idx) => (
                        <li key={idx} className="item-challenge">
                          - {challenge}
                        </li>
                      ))}
                    </ul>
                    <p className="conclusion">{task.progress}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectHetic;
