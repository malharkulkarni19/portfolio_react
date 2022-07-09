import './ResumeInfoStyle.css';
import React from 'react'

const ResumeInfo = () => {
  return (
    <div className='pricing'>
      <div className='card-container'>
        <div className='card'>
          <h3>SSC</h3>
          <span className='bar'></span>
          <p className='btc'>Sitabai Patwardhan Highschool</p>
          <p className='city'>Kurundwad</p>
          <p>Dist:Kolhapur</p>
          <p className='grade'>Grade:- 82%</p>
        </div>
        <div className='card'>
          <h3>Diploma in Meachanical Engineering</h3>
          <span className='bar'></span>
          <p className='btc'>DKTE'S Yashwantrao Chavan Polytechnic</p>
          <p className='city'>Ichalkaranji</p>
          <p>Dist:Kolhapur</p>
          <p className='grade'>Grade:- 87.49%</p>
        </div>
        <div className='card'>
          <h3>B.tech in Meachanical Engineering</h3>
          <span className='bar'></span>
          <p className='btc'>DKTE'S Textile & Engineering Institute</p>
          <p className='city'>Ichalkaranji</p>
          <p>Dist:Kolhapur</p>
          <p className='grade'>Grade:- 7.65</p>
        </div>
      </div>
    </div>
  )
}

export default ResumeInfo