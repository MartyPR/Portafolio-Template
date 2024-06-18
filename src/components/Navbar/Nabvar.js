import React, { useContext, useState } from "react";
import logo from "../../assets/Logo.png";
import "./Nabvar.css";
import { ThemeContext } from "../ThemeContext";



const Nabvar = () => {
  const {darkMode, toggleDarkMode} = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // const toggleDarkMode=()=>{
  //   setDarkMode(!darkMode);
  //   document.body.classList.toggle('dark-mode',!darkMode);

  // }

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={darkMode ? 'SunMode':''}>
      <div className="navContainer">
        <div className="logoContainer">
          <a className="nav-log">
            <img className="logoImg" src={logo} alt="logo" />
            <span className="nameLogo">MartyPR</span>
          </a>
        </div>

        <div className="nav-links">
          <a href="/Home">Works</a>

          <a href="/">Linkedin</a>

          <a href="/Home">Projects</a>

          <a href="/Home">Github</a>
        </div>
        <div className="button-options" >
          <div className="theme-toggle-button" onClick={toggleDarkMode}>
            {darkMode ? (
              <i className="fa-solid fa-moon fa-2xl  swing-bottom"></i>
            ) : (
              <i className="fa-regular fa-sun fa-2xl  rotate-center"></i>
            )}
          </div>
          <div className="menu-icon" onClick={handleMenuToggle}>
            {menuOpen ? (
              <i className="fa-solid fa-rectangle-xmark fa-2xl scale-up-vertical-center"></i>
            ) : (
              <i className="fa-solid fa-bars fa-fade  fa-2xl scale-up-center"></i>
            )}
          </div>
          {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
        </div>
        {menuOpen && (
          <div className={`menu-dropdown  ${darkMode ? 'dark-mode' : ''}`} >
            <a href="/">about</a>
            <a href="/">Works</a>
            <a href="/">Wallpapers</a>
            <a href="/">Posts</a>
            <a href="/">uses</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nabvar;
