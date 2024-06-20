import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { ThemeContext } from '../ThemeContext'
import './404.css'
const Error_404 = () => {
    const{darkMode}=useContext(ThemeContext)
  return (
    <div className='Error-container'>
        <h2 className="section-title ">Not Found</h2>
        <p>The Page you&apos;re looking for was not found.</p>
        <hr/>
        <div className={`btn-portafolio ${darkMode ? "dark-mode":" "}`}>
        <Link to='/' className='link-portafolio'>
          Return to Home
          <span>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Error_404