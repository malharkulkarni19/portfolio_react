import './HeroImgStyle.css';  
import React from 'react'
import IntroImg from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt='intro-img'/>
        </div>
        <div className='content' >
            <p>Hi, I am Malhar</p>
            <h1>I am a Front-end Developer</h1>
            <div>
                <Link to='./project' className='btn'>Projects</Link>
                <Link to='./contact' className='btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;