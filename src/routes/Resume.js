import React from 'react'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import ResumeInfo from '../components/ResumeInfo'

const Resume = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Resume" text="This is my Resume"/>.
      <ResumeInfo />
      <Footer/>
    </div>
  )
}

export default Resume