import React from "react";
import "./Portafolio.css";
import projects, { Projects_uni } from "../../utils/data";
import {Link} from "react-router-dom"

export const Portafolio = () => {
  return (
    <div className="portafolio-container">
      <div className="portafolio-content">
        <h2 className="section-title ">Projects</h2>

        <div className="grid-item-project">
          {projects.map((project)=>(
            <Link key={project.id} to={`/projects/${project.id}`} className="grid-item-link">

            <div key={project.id} className="grid-item">
              
              <img src={project.image} alt={project.title} className="grid-item-thumbnail" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-content">{project.content}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
      <hr></hr>
      <div className="portafolio-content">
        <h2 className="section-title ">University Projects</h2>

        <div className="grid-item-project">
          {Projects_uni.map((projects)=>(
            <Link to={`/projectsUni/${projects.id}`} className="grid-item-link">
            <div key={projects.id} className="grid-item">
              
              <img src={projects.image} alt={projects.title} className="grid-item-thumbnail" />
              <h3 className="project-title">{projects.title}</h3>
              <p className="project-content">{projects.content}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
