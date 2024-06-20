import React, { useContext } from "react";
import './Services.css'
import { ThemeContext } from "../ThemeContext";


const Services = () => {
  const {darkMode}=useContext(ThemeContext)
  return (
    <div className= {`service-container ${darkMode ? "dark-mode" :''}`}>
      <div className="services-list-container">
        {/*desc */}
        <div className="services-desc-container">
          <h2>
            My Awesome <span>Services</span>
          </h2>
          <p>
            Ensure and provide support for corporate applications for
            cybersecurity. Investigate issues related to inventories and asset
            management, and subsequently design or adapt an IT system to enhance
            company operations. Model and develop a relational database (CMDB)
            that caters to the needs of the web information system, streamlining
            and optimizing management processes. Compile a monthly management
            report of client-generated issues to formulate an appropriate
            solution."
          </p>
          {/* <a>Contact me</a> */}
        </div>
        {/*item */}
        <div className="service-item-container">
          <div className= {`service-item ${darkMode ? "dark-mode" :''}`}>
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Fronted Developer</h3>
              <p>
                view more 
              </p>
            </div>
          </div>
          <div className= {`service-item ${darkMode ? "dark-mode" :''}`}>
            <i className="fa-solid fa-database"></i>
            <div className="item-desc">
              <h3>Backend Developer</h3>
              <p>
              view more 
              </p>
            </div>
          </div>
          <div className= {`service-item ${darkMode ? "dark-mode" :''}`}>
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>Develomnet</h3>
              <p>
              view more 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
