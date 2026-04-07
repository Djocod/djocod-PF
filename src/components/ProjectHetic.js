import React, { useState } from "react";
import projectsSchool from "../json/projectsSchool.json";
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
        {projectsSchool
          .filter((project1) => project1.id === "1")
          .map((project) => (
            <div key={project.id} className="psh-items">
              <div className="psh-container-left">
                <video
                  src={project.video}
                  alt={`you watch ${project.title} psh`}
                  autoPlay
                  muted
                  loop
                />
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
                      <i className="fa-solid fa-chevron-down"></i>
                    </h3>
                    <div
                      className={`${onclickTask === task.id ? "task-onclick" : "task-unOnclick"}`}
                    >
                      <p className="task-desc">{task.description}</p>
                      <p className="task-desc personna">{task.persona}</p>
                      {task.img ? (
                        <img
                          src={task.img}
                          alt="img-workflow"
                          className="img-workflow"
                        />
                      ) : null}
                      <ul className="points-container">
                        {task.points?.map((point, idx) => (
                          <li key={idx} className="item-point">
                            {point}
                          </li>
                        ))}
                        {task.points1?.map((point, idx) => (
                          <li key={idx} className="item-point">
                            {point}
                          </li>
                        ))}
                        {task.points2?.map((point, idx) => (
                          <li key={idx} className="item-point">
                            {point}
                          </li>
                        ))}
                        {task.points3?.map((point, idx) => (
                          <li key={idx} className="item-point">
                            {point}
                          </li>
                        ))}
                        {task.points4?.map((point, idx) => (
                          <li key={idx} className="item-point">
                            {point}
                          </li>
                        ))}
                        {task.points5?.map((point, idx) => (
                          <li key={idx} className="item-point">
                            {point}
                          </li>
                        ))}
                      </ul>
                      <ul className="learn-container">
                        {task.learnings?.map((learn, idx) => (
                          <li key={idx} className="item-learn">
                            {learn}
                          </li>
                        ))}
                      </ul>
                      <ul className="challenges-container">
                        {task.challenges?.map((challenge, idx) => (
                          <li key={idx} className="item-challenge">
                            {challenge}
                          </li>
                        ))}
                      </ul>
                      <ul className="mern-container">
                        {task.imgM ? (
                          <img src={task.imgM} alt="logo MongoDB" />
                        ) : null}
                        {task.imgE ? (
                          <img src={task.imgE} alt="logo Express" />
                        ) : null}
                        {task.imgR ? (
                          <img src={task.imgR} alt="logo React" />
                        ) : null}
                        {task.imgN ? (
                          <img src={task.imgN} alt="logo Node.js" />
                        ) : null}
                      </ul>
                      <p className="conclusion">{task.progress}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        {projectsSchool
          .filter((project1) => project1.id >= 2)
          .map((project) => (
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
                      <i className="fa-solid fa-chevron-down"></i>
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
