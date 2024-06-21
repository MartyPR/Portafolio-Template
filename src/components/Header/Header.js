import React, { useContext } from "react";
import "./Header.css";
import { ThemeContext } from "../ThemeContext";
import logoWB from "../../assets/LogoWB.png";
import Work from "../Work/Work";
import Bio from "../Bio/Bio";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";



const Header = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="head-container">
      <div className={`head-introduction ${darkMode ? "dark-mode" : ""}`}>
        Hello, I'm a full-Stack developer based :3s
      </div>
      <div className="header-content">
        <div className="infoProfile">
          <h2 className="titleName"> Martin Parada Rodriguez</h2>
          <p>Electronig Enginnering (Developer / Somethin more?)</p>
        </div>
        <div className="right">
          <div className={`ProfileImage ${darkMode ? "dark-mode" : ""}`}>
            <div className="contentPhoto">
              <img className="profilePhoto" src={logoWB} alt="profilePhoto"></img>
            </div>
          </div>
        </div>
      </div>
      <Work/>
      <Bio/>
      <Services/>
      <Skills/>
     
    </div>
    
  );
};

export default Header;
