import React from 'react'
import './Bio.css'
const Bio = () => {
  return (
    <div className='bio-container'>
        <h3>Biography</h3>
        <div className='parts-bio'>
            <span>2000</span>
        Born in Cali, valle del Cauca, Colombia
        </div>
        <div className='parts-bio'>
            <span>2023</span>
            Undergraduate degree in Electronic Engineering <br/>
            Manuela Beltrán University<br/>
Final grade point average : 4.2/5<br/>
Scholarship for academic merit (2017 -2019)
        </div>
        <div className='parts-bio'>
            <span>2024</span>
            Language Year Abroad
            EF Language Approved Intensive Course Australia 
        </div>
    </div>
  )
}

export default Bio