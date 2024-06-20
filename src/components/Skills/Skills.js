import React, { useContext, useState } from "react";
import "./Skills.css";
import { ThemeContext } from "../ThemeContext";


const Skills = () => {
  const { darkMode } = useContext(ThemeContext);
  const [skillMenuOpen_front, setSkillMenuOpen_front] = useState(false);
  const [skillMenuOpen_back, setSkillMenuOpen_back] = useState(false);
  const handleMenuToggle_front = () => {
    setSkillMenuOpen_front(!skillMenuOpen_front);
  };
  const handleMenuToggle_back = () => {
    setSkillMenuOpen_back(!skillMenuOpen_back);
  };
  return (
    <div className="skills-container-part">
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills-container container grid">
          <div className="">
            <div
              className={`skills-content ${
                skillMenuOpen_front ? "skills-open" : "skills-close"
              }`}
            >
              <div className="skills-header" onClick={handleMenuToggle_front}>
                <i className="fa-solid fa-code"></i>
                <div className="skills-content-front">
                  <h1 className="skills-tiltle">Frontend Developer</h1>
                  <span className="skills-subtitle">More than 1 year</span>
                </div>
                <i className="fa-solid fa-chevron-down skills-arrow"></i>
              </div>

              <div className="skills-list grid">
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skills-name">HTML</h3>
                    <span className="skills-number">90%</span>
                  </div>
                  <div className={`skills-bar ${darkMode ? 'dark-mode':''}`}>
                    <span className="skills-percentage skills-html"></span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skills-name">CSS</h3>
                    <span className="skills-number">70%</span>
                  </div>
                  <div className={`skills-bar ${darkMode ? 'dark-mode':''}`}>
                    <span className="skills-percentage skills-css"></span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skills-name">JavaScript</h3>
                    <span className="skills-number">60%</span>
                  </div>
                  <div className={`skills-bar ${darkMode ? 'dark-mode':''}`}>
                    <span className="skills-percentage skills-js"></span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skills-name">React</h3>
                    <span className="skills-number">50%</span>
                  </div>
                  <div className={`skills-bar ${darkMode ? 'dark-mode':''}`}>
                    <span className="skills-percentage skills-react"></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`skills-content ${
                skillMenuOpen_back ? "skills-close" : "skills-open"
              }`}
            >
              <div className="skills-header" onClick={handleMenuToggle_back}>
                <i className="fa-solid fa-database"></i>
                <div className="skills-content-back">
                  <h1 className="skills-tiltle">Backend Developer</h1>
                  <span className="skills-subtitle">More than 1 year</span>
                </div>
                <i className="fa-solid fa-chevron-down skills-arrow"></i>
              </div>

              <div className="skills-list grid">
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skills-name">HTML</h3>
                    <span className="skills-number">90%</span>
                  </div>
                  <div className={`skills-bar ${darkMode ? 'dark-mode':''}`}>
                    <span className="skills-percentage skills-html"></span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skills-name">CSS</h3>
                    <span className="skills-number">70%</span>
                  </div>
                  <div className={`skills-bar ${darkMode ? 'dark-mode':''}`}>
                    <span className="skills-percentage skills-css"></span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skills-name">JavaScript</h3>
                    <span className="skills-number">60%</span>
                  </div>
                  <div className={`skills-bar ${darkMode ? 'dark-mode':''}`}>
                    <span className="skills-percentage skills-js"></span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-title">
                    <h3 className="skills-name">React</h3>
                    <span className="skills-number">50%</span>
                  </div>
                  <div className={`skills-bar ${darkMode ? 'dark-mode':''}`}>
                    <span className="skills-percentage skills-js"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
