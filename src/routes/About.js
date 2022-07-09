import React from 'react'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About" text="I am a Front-end Developer"/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About