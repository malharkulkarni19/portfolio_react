import './FooterStyle.css';
import React from 'react'
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                    <div>
                    <p>A/P Ichalkaranji, Dist:Kolhapur</p>
                    <p>India</p>
                    </div>
                </div>
                <div className='phone'>
                   <h4>
                   <FaPhone size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                   +91 9158313524  
                   </h4>
                </div>
                <div className='email'>
                   <h4>
                   <FaMailBulk size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                   malharkulkarni19@gmail.com 
                   </h4>
                </div>
            </div>

            <div className='right'>
                <h4>About Myself</h4>
                <p>This is me, Malhar Kulkarni, a student who enjoys creating new projects and designing challanges.</p>
                <div className='social' style={{display:"flex"}}>
                <div><Link to={{ pathname: "https://instagram.com/malhar._.19" }} target="_blank" rel="noopener noreferrer"/><FaInstagram size={30} style={{color:"#fff" , marginRight:"1rem"}}/></div>
                <div><Link to={{ pathname: "https://twitter.com/i_am_malhar_19" }} target="_blank" rel="noopener noreferrer"/><FaTwitter size={30} style={{color:"#fff" , marginRight:"1rem"}}/></div>
                <div><Link to={{ pathname: "https://www.linkedin.com/in/dktemalharkulkarni/" }} target="_blank" rel="noopener noreferrer"/><FaLinkedin size={30} style={{color:"#fff" , marginRight:"1rem"}}/></div>
                <div><Link to={{ pathname: "https://github.com/malharkulkarni19" }} target="_blank" rel="noopener noreferrer"/><FaGithub size={30} style={{color:"#fff" , marginRight:"1rem"}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer