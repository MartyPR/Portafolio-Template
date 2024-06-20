import React, { useContext } from "react";
import "./Work.css";
import { ThemeContext } from "../ThemeContext";
import {Link} from "react-router-dom"
const Work = () => {

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="work-Container">
      <h3>Work</h3>
      <p>
        I am a professional in Electronic Engineering with experience in
        Information Technology, specialized in developing solutions in both
        frontend and backend. I have skills in programming and new technologies
        that allow me to create effective and efficient solutions. My analytical
        skills and logical-mathematical reasoning enable me to make accurate
        decisions and solve problems effectively. I consider myself a motivated
        person committed to continuous learning to further develop my skills in
        software development.
      </p>
      <div className={`btn-portafolio ${darkMode ? "dark-mode":" "}`}>
        <Link to='/projects' className="link-portafolio">
          My Portafolio
          <span>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Work;
