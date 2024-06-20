import React from "react";
import "./Portafolio.css";
import projects, { Projects_uni } from "../../utils/data";


export const Portafolio = () => {
  return (
    <div className="portafolio-container">
      <div className="portafolio-content">
        <h2 className="section-title ">Projects</h2>

        <div className="grid-item-project">
          {projects.map((projects)=>(
            <div key={projects.id} className="grid-item">
              
              <img src={projects.image} alt={projects.title} className="grid-item-thumbnail" />
              <h3 className="project-title">{projects.title}</h3>
              <p className="project-content">{projects.content}</p>
            </div>
          ))}
        </div>
      </div>
      <hr></hr>
      <div className="portafolio-content">
        <h2 className="section-title ">University Projects</h2>

        <div className="grid-item-project">
          {Projects_uni.map((projects)=>(
            <div key={projects.id} className="grid-item">
              
              <img src={projects.image} alt={projects.title} className="grid-item-thumbnail" />
              <h3 className="project-title">{projects.title}</h3>
              <p className="project-content">{projects.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
