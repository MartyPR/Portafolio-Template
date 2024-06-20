import React, { useContext, useState } from "react";
import logo from "../../assets/Logo.png";
import "./Nabvar.css";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom";
const Nabvar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // const toggleDarkMode=()=>{
  //   setDarkMode(!darkMode);
  //   document.body.classList.toggle('dark-mode',!darkMode);

  // }

  
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={darkMode ? "SunMode" : ""}>
      <div className="navContainer">
        <div className="logoContainer">
          <Link to='/' className="nav-log">
            <img className="logoImg" src={logo} alt="logo" />
            <span className="nameLogo">MartyPR</span>
          </Link>
        </div>

        <div className="button-options">
          <div className="nav-links">
            {/* <a href="/Home">Works</a> */}
            <Link to='/' className="nav-link-title">Home</Link>
            <Link to='/' className="nav-link-title">Contact</Link>
            <Link to='/projects' className="nav-link-title"><i className="fa-solid fa-folder"></i> Projects</Link>

            <a href="https://www.linkedin.com/in/martin-parada-rodriguez/">
              <i className="fa-brands fa-linkedin"></i> Linkedin
            </a>

            <a href="/">
              <i className="fa-brands fa-github"></i> Github
            </a>
          </div>
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
          <div className={`menu-dropdown  ${darkMode ? "dark-mode" : ""}`}>
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
