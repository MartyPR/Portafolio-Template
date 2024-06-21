import React from 'react'
import './Foot.css'

const Foot = () => {
  return (
    <div className='footer-container'>
        <div className='footer-content'>
            <a><i className="fa-brands fa-github icons-foot"></i></a><br/>
            <a><i className="fa-brands fa-linkedin icons-foot"></i></a><br/>
            <a><i className="fa-brands fa-instagram icons-foot"></i></a><br/>
            <a><i class="fa-brands fa-twitter icons-foot"></i></a>
        </div>
    </div>
  )
}

export default Foot;