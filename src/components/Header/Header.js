import React, { useContext } from 'react';
import "./Header.css";
import { ThemeContext } from '../ThemeContext';
import logo from "../../assets/Logo.png";

const Header = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className='head-container'>
      <div className={`head-introduction ${darkMode ? 'dark-mode' : ''}`}>
        Hello, I'm a full-Stack developer based :3s
      </div>
      <div className='header-content'>
        <div className='infoProfile'>
        <h2 className='titleName'> Martin Parada Rodriguez</h2>
        <p>
          Electronig Enginnering (Developer / Somethin more?)
        </p>
        </div>
        <div className='right'>

        
        <div className='ProfileImage'>
        <img className='profilePhoto' src={logo} alt='profilePhoto'></img>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Header;